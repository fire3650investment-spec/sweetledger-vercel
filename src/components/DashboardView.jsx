// src/components/DashboardView.jsx
import React from 'react';
import { Settings, Wallet, ArrowRightLeft, ChevronDown, Eye, EyeOff } from 'lucide-react'; 
import { formatCurrency, getIconComponent, renderAvatar } from '../utils/helpers';
import SmartBadge from './SmartBadge'; 

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
    const currentProjectName = currentProject?.name || '日常開銷';

    // --- Helper for Gamification (Restored) ---
    const getHouseIcon = (level) => { 
        if (level < 5) return '⛺️';
        if (level < 15) return '🏠';
        if (level < 30) return '🏡';
        return '🏰';
    };

    // --- Settlement Logic (Robust Calculation) ---
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

            Object.keys(users).forEach(uid => {
                if (uid === payerId) {
                    balances[uid] += amount - (splitData[uid] || 0);
                } else {
                    balances[uid] -= (splitData[uid] || 0);
                }
            });
        });

        // Add Settlements (Repayment)
        projectTxs.filter(t => t.isSettlement).forEach(tx => {
             const amount = parseFloat(tx.amount);
             balances[tx.payer] += amount;
             const receiverId = Object.keys(users).find(u => u !== tx.payer);
             if(receiverId) balances[receiverId] -= amount;
        });

        return { netBalances: balances, totalSpending };
    };

    const { netBalances, totalSpending } = calculateSettlement();
    
    // Calculate My Balance for the Green Card
    // Positive = Others owe me (Green)
    // Negative = I owe others (Red)
    const myBalance = netBalances[user.uid] || 0;

    // Transaction List Sorting
    const sorted = [...projectTxs].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Gamification Data
    const myAvatarKey = ledgerData.users[user.uid]?.avatar;
    const level = ledgerData.gamification?.level || 1;

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 h-full flex flex-col bg-white">
        
        {/* Header: Restored Project Name Switcher & Gamification */}
        <div className="flex justify-between items-center mb-4 shrink-0">
             <div className="relative">
                <select 
                    value={currentProjectId} 
                    onChange={(e) => setCurrentProjectId(e.target.value)} 
                    className="appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200"
                >
                    {ledgerData.projects.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"><ChevronDown size={14} /></div>
             </div>
             
             <div className="flex items-center gap-2">
                 <div className="bg-rose-100 px-3 py-1.5 rounded-full flex flex-col items-end gap-0.5">
                    {renderAvatar(myAvatarKey, "w-8 h-8")}
                    <div className="flex items-center gap-1">
                        <span className="text-lg leading-none">{getHouseIcon(level)}</span>
                        <span className="text-xs font-bold text-rose-600 leading-none">Lv.{level}</span>
                    </div>
                 </div>
                 <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                    {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
                 </button>
             </div>
        </div>

        {/* Settlement Card: Restored Green/Red Gradient Block */}
        <div className={`rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-6 relative overflow-hidden transition-colors shrink-0 ${myBalance >= 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-rose-500 to-pink-600'}`}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
             
             <p className="text-white/80 mb-1 font-medium text-sm flex items-center gap-2">
                <ArrowRightLeft size={14}/> 本月結算狀態 ({currentProjectName})
             </p>
             
             <h1 className="text-4xl font-bold tracking-tight mb-2">
                 {myBalance >= 0 ? 
                    `對方欠你 ${formatCurrency(Math.abs(myBalance), ledgerData.currency, privacyMode)}` : 
                    `你欠對方 ${formatCurrency(Math.abs(myBalance), ledgerData.currency, privacyMode)}`
                 }
             </h1>
             
             <div className="flex items-center gap-2 text-sm text-white/80">
                 <span>本月總支出: {formatCurrency(totalSpending, ledgerData.currency, privacyMode)}</span>
             </div>
        </div>

        {/* Transaction List: Keep New Design with SmartBadge */}
        <div className="flex-1 overflow-y-auto -mx-4 px-4 space-y-3">
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 sticky top-0 bg-white/95 backdrop-blur-sm py-2 z-10">最近交易</h3>
             {sorted.map(tx => {
                 const CatIcon = getIconComponent(tx.category.icon);
                 
                 return (
                     <div 
                        key={tx.id} 
                        onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }}
                        className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center justify-between active:scale-[0.99] transition-transform cursor-pointer"
                     >
                         <div className="flex items-center gap-3 overflow-hidden">
                             {/* Icon Box */}
                             <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${tx.isSettlement ? 'bg-green-50 text-green-500' : 'bg-gray-50 text-gray-500'}`} style={!tx.isSettlement ? {color: tx.category.hex, backgroundColor: `${tx.category.hex}15`} : {}}>
                                 {tx.isSettlement ? <Wallet size={24}/> : <CatIcon size={24}/>}
                             </div>
                             
                             {/* Info Stack */}
                             <div className="flex flex-col min-w-0 justify-center">
                                 {/* Top Row: Note */}
                                 <span className="font-bold text-base text-gray-800 truncate mb-1 leading-tight">{tx.note}</span>
                                 
                                 {/* Bottom Row: Date & Smart Badge */}
                                 <div className="flex items-center gap-2">
                                     <span className="text-[10px] font-bold text-gray-400 font-mono">
                                         {new Date(tx.date).toLocaleDateString(undefined, {month:'numeric', day:'numeric'})}
                                     </span>
                                     <SmartBadge tx={tx} user={user} users={users} />
                                 </div>
                             </div>
                         </div>
                         
                         {/* Right Side: Amount & Payer */}
                         <div className="flex flex-col items-end shrink-0 justify-center gap-1">
                             <span className={`font-bold text-lg ${tx.isSettlement ? 'text-green-600' : 'text-gray-900'}`}>
                                 {privacyMode ? '***' : formatCurrency(tx.amount, tx.currency)}
                             </span>
                             <div className="flex items-center gap-1">
                                 <span className="text-[10px] text-gray-300">by</span>
                                 {renderAvatar(users[tx.payer]?.avatar, "w-4 h-4")}
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