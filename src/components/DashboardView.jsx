// src/components/DashboardView.jsx
import React from 'react';
import { Settings, Plus, User, ArrowRight, Wallet } from 'lucide-react';
import { formatCurrency, getIconComponent, renderAvatar } from '../utils/helpers';
import { COLORS } from '../utils/constants';

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
  handleOpenAddExpense
}) {
    if (!ledgerData) return null;

    const currentProject = ledgerData.projects.find(p => p.id === currentProjectId);
    const projectTxs = ledgerData.transactions.filter(t => t.projectId === currentProjectId);
    
    // --- Settlement Logic (標準版) ---
    const calculateSettlement = () => {
        const users = ledgerData.users;
        const balances = {}; 
        Object.keys(users).forEach(uid => balances[uid] = 0);
        let totalSpending = 0;

        projectTxs.forEach(tx => {
            if (tx.isSettlement) return;
            const amount = parseFloat(tx.amount);
            totalSpending += amount;

            const payerId = tx.payer;
            let splitData = {};

            // 判斷分攤模式
            if (tx.splitType === 'even') {
                Object.keys(users).forEach(uid => splitData[uid] = amount / 2);
            } else if (tx.splitType === 'self') { 
                 const role = users[payerId]?.role;
                 if(role === 'host') splitData = { [Object.keys(users).find(u => users[u].role === 'host')]: amount };
                 else splitData = { [Object.keys(users).find(u => users[u].role === 'guest')]: amount };
            } else if (tx.splitType === 'host_all') {
                 const hostId = Object.keys(users).find(uid => users[uid].role === 'host');
                 if(hostId) splitData[hostId] = amount;
            } else if (tx.splitType === 'guest_all') {
                 const guestId = Object.keys(users).find(uid => users[uid].role === 'guest');
                 if(guestId) splitData[guestId] = amount;
            } else if (tx.splitType === 'custom' && tx.customSplit) {
                splitData = tx.customSplit;
            }

            // 計算餘額
            Object.keys(users).forEach(uid => {
                if (uid === payerId) {
                    balances[uid] += amount - (splitData[uid] || 0);
                } else {
                    balances[uid] -= (splitData[uid] || 0);
                }
            });
        });

        // 加入還款紀錄 (Settlements)
        projectTxs.filter(t => t.isSettlement).forEach(tx => {
             const amount = parseFloat(tx.amount);
             balances[tx.payer] += amount; 
             const receiverId = Object.keys(users).find(u => u !== tx.payer);
             if(receiverId) balances[receiverId] -= amount;
        });

        const settlements = [];
        const sortedBalances = Object.entries(balances).sort(([, a], [, b]) => a - b);
        let i = 0;
        let j = sortedBalances.length - 1;

        while (i < j) {
            const [debtor, debit] = sortedBalances[i];
            const [creditor, credit] = sortedBalances[j];
            const amount = Math.min(Math.abs(debit), credit);
            if (amount < 0.01) break;
            settlements.push({ from: debtor, to: creditor, amount });
            sortedBalances[i][1] += amount;
            sortedBalances[j][1] -= amount;
            if (Math.abs(sortedBalances[i][1]) < 0.01) i++;
            if (sortedBalances[j][1] < 0.01) j--;
        }

        return { users, netBalances: balances, settlements, totalSpending };
    };

    const { users, netBalances, settlements, totalSpending } = calculateSettlement();
    const sorted = [...projectTxs].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 h-full flex flex-col">
        {/* Header & Project Selector */}
        <div className="flex justify-between items-center mb-4 shrink-0">
             <div 
                onClick={() => setPrivacyMode(!privacyMode)}
                className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer active:scale-95 transition-transform"
             >
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">本月支出</span>
                <span className="text-lg font-bold text-gray-800">
                    {privacyMode ? '****' : formatCurrency(totalSpending)}
                </span>
                {privacyMode ? <div className="w-2 h-2 rounded-full bg-gray-400"></div> : <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>}
             </div>
             
             <div className="flex gap-2">
                 {/* Project Selector */}
                 <div className="relative group">
                    <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-gray-200">
                        {currentProject ? (() => { const Icon = getIconComponent(currentProject.icon); return <Icon size={18}/> })() : <Settings size={18}/>}
                    </button>
                    <select 
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        value={currentProjectId}
                        onChange={(e) => setCurrentProjectId(e.target.value)}
                    >
                        {ledgerData.projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                 </div>
             </div>
        </div>

        {/* Settlement Cards */}
        <div className="mb-6 shrink-0 space-y-3">
             {settlements.length > 0 ? (
                 settlements.map((s, idx) => (
                     <div key={idx} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between relative overflow-hidden">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                         <div className="flex items-center gap-3">
                             <div className="relative">
                                 {renderAvatar(users[s.from]?.avatar, "w-10 h-10")}
                                 <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                     <ArrowRight size={12} className="text-gray-400"/>
                                 </div>
                             </div>
                             <div>
                                 <div className="text-xs text-gray-400 font-bold mb-0.5">{users[s.from]?.name} 需支付</div>
                                 <div className="text-xl font-bold text-gray-800 flex items-center gap-1">
                                     {privacyMode ? '****' : formatCurrency(s.amount)}
                                 </div>
                             </div>
                         </div>
                         
                         {/* Settle Up Action */}
                         <div className="flex items-center gap-3">
                             <div className="text-right hidden sm:block">
                                 <div className="text-xs text-gray-400 font-bold">給</div>
                                 <div className="text-sm font-bold text-gray-700">{users[s.to]?.name}</div>
                             </div>
                             {user.uid === s.from && (
                                 <button 
                                     onClick={() => handleSettleUp(s.amount, users[s.to]?.name, s.from)}
                                     className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-gray-200 active:scale-95 transition-transform"
                                 >
                                     結清
                                 </button>
                             )}
                         </div>
                     </div>
                 ))
             ) : (
                 <div className="bg-gray-50 rounded-3xl p-6 text-center border border-gray-100 border-dashed">
                     <p className="text-gray-400 text-sm font-bold">目前沒有需要結算的債務 🎉</p>
                 </div>
             )}
        </div>

        {/* Transaction List (已移除 Split Badges，恢復原狀) */}
        <div className="flex-1 overflow-y-auto -mx-4 px-4 space-y-3">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 sticky top-0 bg-white/95 backdrop-blur-sm py-2 z-10">最近交易</h3>
             {sorted.map(tx => {
                 const CatIcon = getIconComponent(tx.category.icon);
                 const isMyTx = tx.payer === user.uid;
                 return (
                     <div 
                        key={tx.id} 
                        onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }}
                        className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center justify-between active:scale-[0.99] transition-transform cursor-pointer"
                     >
                         <div className="flex items-center gap-3 overflow-hidden">
                             <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${tx.isSettlement ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-500'}`} style={!tx.isSettlement ? {color: tx.category.hex, backgroundColor: `${tx.category.hex}15`} : {}}>
                                 {tx.isSettlement ? <Wallet size={20}/> : <CatIcon size={20}/>}
                             </div>
                             <div className="flex flex-col min-w-0">
                                 <div className="flex items-center gap-2">
                                     <span className="font-bold text-sm text-gray-800 truncate">{tx.note}</span>
                                     {/* 這裡已經移除了 renderSplitBadge */}
                                 </div>
                                 <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                                     <span>{new Date(tx.date).toLocaleDateString()}</span>
                                     <span>•</span>
                                     <span>{tx.category.name}</span>
                                 </div>
                             </div>
                         </div>
                         
                         <div className="flex flex-col items-end shrink-0">
                             <span className={`font-bold ${tx.isSettlement ? 'text-green-600' : 'text-gray-800'}`}>
                                 {privacyMode ? '***' : formatCurrency(tx.amount, tx.currency)}
                             </span>
                             <div className="flex items-center gap-1 mt-0.5">
                                 <span className="text-[10px] text-gray-400">by</span>
                                 {renderAvatar(users[tx.payer]?.avatar, "w-3 h-3")}
                                 <span className="text-[10px] text-gray-500 font-bold max-w-[60px] truncate">{users[tx.payer]?.name}</span>
                             </div>
                         </div>
                     </div>
                 )
             })}
             
             {/* Empty State */}
             {sorted.length === 0 && (
                 <div className="text-center py-10 opacity-50">
                     <p className="text-sm font-bold text-gray-400">這裡空空如也</p>
                     <p className="text-xs text-gray-300 mt-1">點擊下方 + 新增第一筆記帳</p>
                 </div>
             )}
             
             {/* Bottom Spacer */}
             <div className="h-10"></div>
        </div>
      </div>
    );
}