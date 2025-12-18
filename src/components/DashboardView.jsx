import React from 'react';
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
    if (!ledgerData) return null;
    const projectTxs = ledgerData.transactions.filter(t => (t.projectId || 'daily') === currentProjectId);
    const currentMonthStr = new Date().toISOString().slice(0, 7);
    const thisMonthTxs = projectTxs.filter(t => t.date.startsWith(currentMonthStr));
    const groupedTransactions = {};
    const sorted = [...projectTxs].sort((a, b) => new Date(b.date) - new Date(a.date)); 
    sorted.forEach(tx => { 
        const date = new Date(tx.date).toLocaleDateString('zh-TW'); 
        if (!groupedTransactions[date]) groupedTransactions[date] = []; 
        groupedTransactions[date].push(tx); 
    });
    
    // Get Project Rates
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const rates = currentProject?.rates || { JPY: 0.23, THB: 1 };
    
    // Calculate Monthly Total (TWD Normalized)
    const monthlyTotal = thisMonthTxs.reduce((acc, curr) => acc + calculateTwdValue(curr.amount, curr.currency || 'TWD', rates), 0);

    // 結算邏輯
    let myPaid = 0;
    let myLiability = 0;

    projectTxs.forEach(tx => {
        if(tx.isSettlement) return; 
        
        const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);

        if (tx.splitType === 'custom' && tx.customSplit) {
             const myCustomShare = tx.customSplit[user.uid] || 0;
             myPaid += calculateTwdValue(myCustomShare, tx.currency || 'TWD', rates);
        } else {
             if (tx.payer === user.uid) myPaid += amountTwd;
        }

        let liability = 0;
        if (tx.splitType === 'even' || tx.splitType === 'custom') {
            liability = amountTwd / 2; 
        } else if (tx.splitType === 'host_all') {
            liability = ledgerData.users[user.uid]?.role === 'host' ? amountTwd : 0;
        } else if (tx.splitType === 'guest_all') {
            liability = ledgerData.users[user.uid]?.role === 'guest' ? amountTwd : 0;
        }
        myLiability += liability;
    });
    
    const settlements = ledgerData.transactions.filter(tx => 
        tx.isSettlement && (tx.projectId || 'daily') === currentProjectId
    );

    let settledAmount = 0;
    settlements.forEach(tx => {
        const amount = calculateTwdValue(tx.amount, tx.currency || 'TWD', rates);
        if (tx.payer === user.uid) settledAmount += amount;
        else settledAmount -= amount;
    });

    const settlement = (myPaid + settledAmount) - myLiability; 

    const currentProjectName = currentProject?.name || '日常開銷';
    const otherUserId = Object.keys(ledgerData.users).find(uid => uid !== user.uid);
    const partnerName = otherUserId ? (ledgerData.users[otherUserId].name || '對方') : '對方';

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative">
        <div className="flex justify-between items-center mb-4">
           {/* Header */}
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
        
        {/* Settlement Card */}
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
                    onClick={() => handleSettleUp(
                        Math.abs(settlement), 
                        settlement < 0 ? partnerName : '你', 
                        settlement < 0 ? user.uid : otherUserId 
                    )} 
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
                            const CatIcon = getIconComponent(tx.category?.icon); 
                            const payerName = ledgerData.users[tx.payer]?.name || '未知';
                            const isMultiPayer = tx.splitType === 'custom' && tx.customSplit && Object.keys(tx.customSplit).length > 1;
                            const displayPayer = isMultiPayer ? '多人墊付' : payerName;

                            return (
                                <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${idx !== txs.length -1 ? 'border-b border-gray-50' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        {/* [Fix] 使用 style 處理顏色 */}
                                        <div 
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                                            style={{ 
                                                backgroundColor: `${tx.category?.hex}33`, 
                                                color: tx.category?.hex 
                                            }}
                                        >
                                            <CatIcon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">{tx.note}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs text-gray-400">{tx.category?.name}</p>
                                                <span className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded">{displayPayer}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`font-bold ${tx.isSettlement ? 'text-emerald-500' : 'text-gray-800'}`}>{formatCurrency(tx.amount, tx.currency || 'TWD', privacyMode)}</span>
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