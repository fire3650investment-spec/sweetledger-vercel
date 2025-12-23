// src/components/DashboardView.jsx
import React, { useMemo } from 'react';
import { ChevronDown, Eye, EyeOff, ArrowRightLeft, Coins } from 'lucide-react';
import { formatCurrency, getIconComponent, calculateTwdValue } from '../utils/helpers';

export default function DashboardView({
  ledgerData,
  currentProjectId,
  setCurrentProjectId,
  privacyMode,
  setPrivacyMode,
  setIsEditTxModalOpen,
  setEditingTx,
  user,
  handleSettleUp
}) {
    // [Critical Fix 1] 雙重保護：資料未載入 或 使用者未登入 前，不進行渲染
    if (!ledgerData || !user) return null;

    const { 
        projectTxs, 
        groupedTransactions, 
        monthlyTotal, 
        settlement, 
        currentProjectName, 
        partnerName, 
        otherUserId 
    } = useMemo(() => {
        // [Critical Fix 2] 再次確保 user 存在，防止 useMemo 內部崩潰
        if (!user) return { projectTxs: [], groupedTransactions: {}, monthlyTotal: 0, settlement: 0 };

        const rawTxs = ledgerData.transactions || [];
        
        // 🛡️ [防彈邏輯核心]：在這裡清洗資料，防止白屏
        const allTxs = rawTxs
            .filter(t => t && t.id && t.amount !== undefined) // 1. 過濾掉空值或殘缺資料
            .map(t => {
                // 2. 處理新舊版本衝突：如果遇到 'mixed' (混合記帳) 或其他不認識的 type
                // 為了不讓舊版 UI 崩潰，我們暫時把它偽裝成普通 'expense' (支出)
                const safeType = ['income', 'expense'].includes(t.type) ? t.type : 'expense';
                
                return {
                    ...t,
                    type: safeType,
                    // 3. 確保 category 永遠存在，避免讀取 icon 時報錯
                    category: t.category || { name: '未分類', icon: 'help-circle', hex: '#9ca3af' }
                };
            });

        const pTxs = allTxs.filter(t => (t.projectId || 'daily') === currentProjectId);
        const currentMonthStr = new Date().toISOString().slice(0, 7);
        const thisMonthTxs = pTxs.filter(t => t.date.startsWith(currentMonthStr));
        
        const grouped = {};
        const sorted = [...pTxs].sort((a, b) => new Date(b.date) - new Date(a.date)); 
        sorted.forEach(tx => { 
            try {
                const date = new Date(tx.date).toLocaleDateString('zh-TW'); 
                if (!grouped[date]) grouped[date] = []; 
                grouped[date].push(tx); 
            } catch (e) { console.warn('Invalid date:', tx); }
        });

        const currProject = ledgerData.projects?.find(p => p.id === currentProjectId);
        const rates = currProject?.rates || { JPY: 0.23, THB: 1 };
        const currProjectName = currProject?.name || '日常開銷';

        const mTotal = thisMonthTxs.reduce((acc, curr) => {
            const val = calculateTwdValue(curr.amount || 0, curr.currency || 'TWD', rates);
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        let myPaid = 0;
        let myLiability = 0;

        pTxs.forEach(tx => {
            if(tx.isSettlement) return; 
            const amountTwd = calculateTwdValue(tx.amount || 0, tx.currency || 'TWD', rates);
            if (isNaN(amountTwd)) return;

            // 1. 支付邏輯
            if (tx.payer === user.uid) {
                myPaid += amountTwd;
            }

            // 2. 分攤邏輯
            let liability = 0;
            if (tx.splitType === 'even') {
                liability = amountTwd / 2; 
            } else if (tx.splitType === 'custom') {
                // 安全讀取 customSplit
                if (tx.customSplit && typeof tx.customSplit === 'object') {
                    const myShare = tx.customSplit[user.uid];
                    if (typeof myShare === 'number' && !isNaN(myShare)) {
                        liability = calculateTwdValue(myShare, tx.currency || 'TWD', rates);
                    }
                }
            } else if (tx.splitType === 'host_all') {
                liability = ledgerData.users[user.uid]?.role === 'host' ? amountTwd : 0;
            } else if (tx.splitType === 'guest_all') {
                liability = ledgerData.users[user.uid]?.role === 'guest' ? amountTwd : 0;
            }
            if (!isNaN(liability)) myLiability += liability;
        });
        
        const settlements = allTxs.filter(tx => 
            tx.isSettlement && (tx.projectId || 'daily') === currentProjectId
        );

        let settledAmount = 0;
        settlements.forEach(tx => {
            const amount = calculateTwdValue(tx.amount || 0, tx.currency || 'TWD', rates);
            if (!isNaN(amount)) {
                if (tx.payer === user.uid) settledAmount += amount;
                else settledAmount -= amount;
            }
        });

        const finalSettlement = (myPaid + settledAmount) - myLiability; 
        
        const users = ledgerData.users || {};
        const oUserId = Object.keys(users).find(uid => uid !== user.uid);
        const pName = oUserId && users[oUserId] ? (users[oUserId].name || '對方') : '對方';

        return {
            projectTxs: pTxs,
            groupedTransactions: grouped,
            monthlyTotal: isNaN(mTotal) ? 0 : mTotal,
            settlement: isNaN(finalSettlement) ? 0 : finalSettlement,
            currentProjectName: currProjectName,
            partnerName: pName,
            otherUserId: oUserId
        };

    }, [ledgerData, currentProjectId, user]); 

    // Helper: Smart Tags
    const getSmartTags = (tx) => {
        const tags = [];
        const payerUser = ledgerData.users?.[tx.payer];
        const payerName = payerUser?.name || '未知';

        if (tx.isSettlement) {
            tags.push({ label: `${payerName} 轉帳`, color: 'gray' });
            return tags;
        }

        const isCustom = tx.splitType === 'custom';
        if (isCustom) {
            tags.push({ label: '混合出資', color: 'gray' });
        } else {
            tags.push({ label: payerName, color: 'gray' });
            if (tx.splitType === 'even') {
                tags.push({ label: '平均分攤', color: 'gray' });
            } else {
                const payerRole = payerUser?.role;
                let isPrivate = false;
                let isAdvance = false;
                if (tx.splitType === 'host_all') {
                    if (payerRole === 'host') isPrivate = true;
                    else isAdvance = true;
                } else if (tx.splitType === 'guest_all') {
                    if (payerRole === 'guest') isPrivate = true;
                    else isAdvance = true;
                }
                if (isPrivate) tags.push({ label: '私人', color: 'gray' });
                if (isAdvance) tags.push({ label: '代墊', color: 'gray' });
            }
        }
        if (tx.isSettled) tags.push({ label: '已結清', color: 'green' });
        return tags;
    };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative">
        <div className="flex justify-between items-center mb-4">
           <div className="relative">
             <select value={currentProjectId} onChange={(e) => setCurrentProjectId(e.target.value)} className="appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200">
                {ledgerData.projects?.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
             </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"><ChevronDown size={14} /></div>
           </div>
           
           <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100 active:scale-95 transition-transform">
             {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
           </button>
        </div>
        
        <div className={`rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-8 relative overflow-hidden transition-colors ${settlement >= 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-rose-500 to-pink-600'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
            <p className="text-white/80 mb-1 font-medium text-sm flex items-center gap-2"><ArrowRightLeft size={14}/> 總結算狀態 ({currentProjectName})</p>
            <div className="flex justify-between items-end mb-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    {settlement >= 0 ? `${partnerName} 欠你 ${formatCurrency(Math.abs(settlement), 'TWD', privacyMode)}` : `你欠 ${partnerName} ${formatCurrency(Math.abs(settlement), 'TWD', privacyMode)}`}
                </h1>
            </div>
            <p className="text-white/70 text-xs font-medium">本月總支出: {formatCurrency(monthlyTotal, 'TWD', privacyMode)}</p>

            {Math.abs(settlement) > 0 && (
                <button 
                    onClick={() => handleSettleUp(Math.abs(settlement), settlement < 0 ? partnerName : '你', settlement < 0 ? user.uid : otherUserId)} 
                    className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors mt-4"
                >
                    <Coins size={14}/> 結清債務
                </button>
            )}
        </div>

        <div className="space-y-6">
            {Object.entries(groupedTransactions).map(([date, txs]) => (
                <div key={date}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">{date}</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                        {txs.map((tx, idx) => { 
                            // 防彈修正：使用可選串連 (?.)，如果 category 是 undefined 也不會崩潰
                            const CatIcon = getIconComponent(tx.category?.icon) || Coins;
                            const tags = getSmartTags(tx);

                            return (
                                <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${idx !== txs.length -1 ? 'border-b border-gray-50' : ''}`}>
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div 
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                                            style={{ 
                                                backgroundColor: `${tx.category?.hex || '#eee'}33`, 
                                                color: tx.category?.hex || '#999'
                                            }}
                                        >
                                            <CatIcon size={20} />
                                        </div>
                                        
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-800 truncate text-sm">
                                                {tx.note || tx.category?.name}
                                            </p>
                                            
                                            <div className="flex items-center flex-wrap gap-1.5 mt-1">
                                                <p className="text-xs text-gray-400 mr-1 shrink-0">{tx.category?.name}</p>
                                                {tags.map((tag, i) => (
                                                    <span 
                                                        key={i} 
                                                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${
                                                            tag.color === 'green' 
                                                                ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                                                                : 'bg-gray-100 text-gray-500 border-gray-100'
                                                        }`}
                                                    >
                                                        {tag.label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <span className={`font-bold ml-4 whitespace-nowrap ${tx.isSettlement ? 'text-emerald-500' : 'text-gray-800'}`}>
                                        {formatCurrency(tx.amount || 0, tx.currency || 'TWD', privacyMode)}
                                    </span>
                                </div>
                            ); 
                        })}
                    </div>
                </div>
            ))}
            {projectTxs.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                    <p>這個專案還沒有記帳紀錄喔 🍃</p>
                    <p className="text-sm mt-2">點擊下方「+」開始第一筆吧！</p>
                </div>
            )}
        </div>
      </div>
    );
}