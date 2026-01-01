// src/components/DashboardView.jsx
import React, { useMemo } from 'react';
import { ChevronDown, Eye, EyeOff, ArrowRightLeft, Coins, Lock, Wallet, History, CalendarClock } from 'lucide-react';
import { formatCurrency, getIconComponent, calculateTwdValue, getCategoryStyle } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function DashboardView({
  ledgerData,
  currentProjectId,
  setCurrentProjectId,
  privacyMode,
  setPrivacyMode,
  setIsEditTxModalOpen,
  setEditingTx,
  user,
  handleSettleUp,
  handleOpenAddExpense,
  setView
}) {
    if (!ledgerData || !user) return null;

    const visibleProjects = (ledgerData.projects || []).filter(p => p.type !== 'private' || p.owner === user.uid);
    const currentProjectObj = ledgerData.projects?.find(p => p.id === currentProjectId) || { name: '日常', type: 'public' };
    const isPrivateProject = currentProjectObj.type === 'private';

    // [Optimization] Split huge useMemo: 1. Clean Data (Independent of project)
    const { allTxs, safeUsers } = useMemo(() => {
        const rawTxs = ledgerData.transactions || [];
        const users = ledgerData.users || {};
        const currentCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;
        
        const processed = rawTxs
            .filter(t => t && t.id && t.amount !== undefined) 
            .map(t => {
                const safeType = ['income', 'expense'].includes(t.type) ? t.type : 'expense';
                let displayCategory = t.category || { name: '未分類', icon: 'help-circle' };
                if (t.category?.id) {
                    const latestCat = currentCategories.find(c => c.id === t.category.id);
                    if (latestCat) displayCategory = latestCat;
                }
                const safeDate = t.date || new Date().toISOString();
                return { ...t, amount: parseFloat(t.amount) || 0, type: safeType, category: displayCategory, date: safeDate };
            });
        return { allTxs: processed, safeUsers: users };
    }, [ledgerData.transactions, ledgerData.users, ledgerData.customCategories]);

    // [Optimization] Split useMemo: 2. Filter & Calculate (Dependent on project/user)
    const { 
        displayTxs,
        projectAllTxs,
        groupedTransactions, 
        monthlyTotal, 
        settlement, 
        currentProjectName, 
        partnerName, 
        otherUserId, 
        dailyAverage 
    } = useMemo(() => {
        // Filter by Project
        const projectAllTxs = allTxs.filter(t => (t.projectId || 'daily') === currentProjectId);
        
        // Filter Recent (7 days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        sevenDaysAgo.setHours(0, 0, 0, 0);
        const displayTxs = projectAllTxs.filter(t => new Date(t.date) >= sevenDaysAgo);

        const currentMonthStr = new Date().toISOString().slice(0, 7);
        const thisMonthTxs = projectAllTxs.filter(t => t.date.startsWith(currentMonthStr));
        
        // Grouping
        const grouped = {};
        const sorted = [...displayTxs].sort((a, b) => new Date(b.date) - new Date(a.date)); 
        sorted.forEach(tx => { 
            try { 
                const dateStr = new Date(tx.date).toLocaleDateString('zh-TW'); 
                if (!grouped[dateStr]) grouped[dateStr] = []; 
                grouped[dateStr].push(tx); 
            } catch (e) {}
        });

        const rates = currentProjectObj.rates || { JPY: 0.23, THB: 1 };
        
        // Stats
        const mTotal = thisMonthTxs.reduce((acc, curr) => {
            const val = calculateTwdValue(curr.amount || 0, curr.currency || 'TWD', rates);
            return acc + (isNaN(val) ? 0 : val);
        }, 0);

        const today = new Date();
        const daysPassed = today.getDate();
        const dailyAvg = daysPassed > 0 ? mTotal / daysPassed : mTotal;

        // Settlement Calculation
        let myPaid = 0;
        let myLiability = 0;

        projectAllTxs.forEach(tx => {
            if(tx.isSettlement) return; 
            const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (isNaN(amountTwd)) return;
            
            if (tx.splitType === 'multi_payer') {
                let myActualPaid = 0;
                if (tx.customSplit && typeof tx.customSplit === 'object') {
                    const raw = tx.customSplit[user.uid];
                    const val = parseFloat(raw);
                    if (!isNaN(val)) myActualPaid = calculateTwdValue(val, tx.currency || 'TWD', rates);
                }
                const myResponsibility = amountTwd / 2;
                myPaid += myActualPaid;
                myLiability += myResponsibility;
            } else {
                if (tx.payer === user.uid) myPaid += amountTwd;
                let liability = 0;
                
                // Logic for liability
                if (tx.splitType === 'even') liability = amountTwd / 2; 
                else if (tx.splitType === 'custom') {
                    if (tx.customSplit && typeof tx.customSplit === 'object') {
                        const myShareRaw = tx.customSplit[user.uid];
                        const myShare = parseFloat(myShareRaw);
                        if (!isNaN(myShare)) liability = calculateTwdValue(myShare, tx.currency || 'TWD', rates);
                    }
                } else if (tx.splitType === 'host_all') liability = safeUsers[user.uid]?.role === 'host' ? amountTwd : 0;
                else if (tx.splitType === 'guest_all') liability = safeUsers[user.uid]?.role === 'guest' ? amountTwd : 0;
                
                if (isPrivateProject) liability = amountTwd; 
                if (!isNaN(liability)) myLiability += liability;
            }
        });
        
        const settlements = allTxs.filter(tx => tx.isSettlement && (tx.projectId || 'daily') === currentProjectId);
        let settledAmount = 0;
        settlements.forEach(tx => {
            const amount = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
            if (!isNaN(amount)) { if (tx.payer === user.uid) settledAmount += amount; else settledAmount -= amount; }
        });

        const finalSettlement = (myPaid - myLiability) + settledAmount; 
        const oUserId = Object.keys(safeUsers).find(uid => uid !== user.uid);
        const pName = oUserId && safeUsers[oUserId] ? (safeUsers[oUserId].name || '對方') : '對方';

        return { 
            displayTxs, 
            projectAllTxs,
            groupedTransactions: grouped, 
            monthlyTotal: isNaN(mTotal) ? 0 : mTotal, 
            settlement: isNaN(finalSettlement) ? 0 : finalSettlement, 
            currentProjectName: currentProjectObj.name || '日常開銷', 
            partnerName: pName, 
            otherUserId: oUserId, 
            dailyAverage: dailyAvg 
        };

    }, [allTxs, safeUsers, currentProjectId, user, currentProjectObj, isPrivateProject]); 

    // [Feature] Smart Tags Logic
    const getSmartTags = (tx) => {
        // [Batch 1 Optimization] 私人帳本模式下，隱藏所有社交與分帳標籤，還給使用者乾淨版面
        if (isPrivateProject) return [];

        const tags = [];
        
        if (tx.isSettlement) {
            const payerName = safeUsers[tx.payer]?.name || '未知';
            tags.push({ label: `${payerName} 轉帳`, color: 'gray' });
            return tags;
        }

        if (tx.splitType === 'multi_payer') {
            tags.push({ label: '混合出資', color: 'blue' });
            return tags;
        }

        const payerUser = safeUsers[tx.payer];
        const payerName = payerUser?.name || '未知';
        tags.push({ label: payerName, color: 'gray' }); 

        // [Logic] Identify "Private" or "Advance" from custom split (New Atomic Logic)
        if (tx.splitType === 'custom' && tx.customSplit) {
            const payerShare = parseFloat(tx.customSplit[tx.payer] || 0);
            const total = parseFloat(tx.amount || 0);
            // Allow small error margin
            if (Math.abs(payerShare - total) < 0.1) {
                // Payer owns 100% debt => Private
                tags.push({ label: '私人', color: 'gray' });
            } else if (payerShare < 0.1) {
                // Payer owns 0% debt => Advance (Someone else owns 100%)
                tags.push({ label: '代墊', color: 'gray' });
            } else {
                tags.push({ label: '自訂分攤', color: 'gray' });
            }
        } 
        else if (tx.splitType === 'even') {
            tags.push({ label: '平均分攤', color: 'gray' });
        } else {
            // Legacy Role-based Types
            const payerRole = payerUser?.role;
            if (payerRole === 'host') {
                if (tx.splitType === 'host_all') tags.push({ label: '私人', color: 'gray' }); 
                else if (tx.splitType === 'guest_all') tags.push({ label: '代墊', color: 'gray' }); 
            } 
            else if (payerRole === 'guest') {
                if (tx.splitType === 'guest_all') tags.push({ label: '私人', color: 'gray' }); 
                else if (tx.splitType === 'host_all') tags.push({ label: '代墊', color: 'gray' }); 
            }
        }
        if (tx.isSettled) tags.push({ label: '已結清', color: 'green' });
        return tags;
    };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative">
        <div className="flex justify-between items-center mb-4">
           <div className="relative">
             <select value={currentProjectId} onChange={(e) => setCurrentProjectId(e.target.value)} className={`appearance-none text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200 transition-colors ${isPrivateProject ? 'bg-gray-800' : 'bg-gray-900'}`}>
                {visibleProjects.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
             </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"><ChevronDown size={14} /></div>
           </div>
           
           <div className="flex gap-2">
                {isPrivateProject && <div className="p-2 bg-gray-100 rounded-full text-gray-400"><Lock size={16}/></div>}
                <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100 active:scale-95 transition-transform">
                    {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
                </button>
           </div>
        </div>
        
        {/* Card Switcher */}
        {isPrivateProject ? (
            <div className="rounded-3xl p-6 text-white shadow-lg shadow-gray-200 mb-8 relative overflow-hidden bg-gradient-to-br from-slate-700 to-gray-900">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
                <p className="text-white/60 mb-1 font-bold text-xs flex items-center gap-2 uppercase tracking-wider"><Wallet size={12}/> 個人支出概況</p>
                <div className="flex justify-between items-end mb-4">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {formatCurrency(monthlyTotal, 'TWD', privacyMode)}
                    </h1>
                </div>
                <div className="flex gap-4 border-t border-white/10 pt-3">
                    <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase">本月累計</p>
                        <p className="text-sm font-medium">{formatCurrency(monthlyTotal, 'TWD', privacyMode)}</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <div>
                        <p className="text-white/40 text-[10px] font-bold uppercase">平均日花費</p>
                        <p className="text-sm font-medium">{formatCurrency(dailyAverage, 'TWD', privacyMode)}</p>
                    </div>
                </div>
            </div>
        ) : (
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
                    <button onClick={() => handleSettleUp(Math.abs(settlement), settlement < 0 ? partnerName : '你', settlement < 0 ? user.uid : otherUserId)} className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors mt-4">
                        <Coins size={14}/> 結清債務
                    </button>
                )}
            </div>
        )}

        <div className="space-y-6">
            {Object.entries(groupedTransactions).map(([date, txs]) => (
                <div key={date}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">{date}</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                        {txs.map((tx, idx) => { 
                            const CatIcon = getIconComponent(tx.category?.icon) || Coins;
                            const tags = getSmartTags(tx);
                            const style = getCategoryStyle(tx.category, 'display');

                            return (
                                <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${idx !== txs.length -1 ? 'border-b border-gray-50' : ''}`}>
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${style.containerClass}`}>
                                            <CatIcon size={20} className={style.iconClass} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-800 truncate text-sm">{tx.note || tx.category?.name}</p>
                                            <div className="flex items-center flex-wrap gap-1.5 mt-1">
                                                <p className="text-xs text-gray-400 mr-1 shrink-0">{tx.category?.name}</p>
                                                {tags.map((tag, i) => (
                                                    <span key={i} className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${tag.color === 'green' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : (tag.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-100 text-gray-500 border-gray-100')}`}>
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

            {projectAllTxs.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                    <p>這個專案還沒有記帳紀錄喔 🍃</p>
                    <p className="text-sm mt-2">點擊下方「+」開始第一筆吧！</p>
                </div>
            ) : displayTxs.length === 0 ? (
                <div className="text-center py-8">
                     <p className="text-gray-400 text-sm mb-4">最近 7 天沒有支出 🎉</p>
                     <button 
                        onClick={() => setView('stats')} 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                        <History size={14}/> 查看歷史紀錄
                     </button>
                </div>
            ) : projectAllTxs.length > displayTxs.length ? (
                <div className="text-center py-4 pb-8">
                     <button 
                        onClick={() => setView('stats')} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 text-gray-500 rounded-full text-sm font-bold border border-gray-100 hover:bg-white hover:border-gray-200 hover:text-rose-500 hover:shadow-sm transition-all"
                    >
                        <History size={16}/> 查看更多歷史紀錄
                     </button>
                     <p className="text-[10px] text-gray-300 mt-2">首頁僅顯示最近 7 天的交易</p>
                </div>
            ) : null}
        </div>
      </div>
    );
}