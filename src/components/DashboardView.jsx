import React from 'react';
import { ChevronDown, Eye, EyeOff, X, Trash2, ArrowRightLeft, HandCoins } from 'lucide-react';
import { formatCurrency, getIconComponent } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function DashboardView({
  ledgerData,
  currentProjectId,
  setCurrentProjectId,
  privacyMode,
  setPrivacyMode,
  isEditTxModalOpen,
  setIsEditTxModalOpen,
  editingTx,
  setEditingTx,
  handleUpdateTransaction,
  handleDeleteTransaction,
  user,
  handleSettleUp,
  setView
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
    
    // 結算邏輯
    let myPaid = 0;
    let myLiability = 0;

    thisMonthTxs.forEach(tx => {
        if(tx.isSettlement) return; 
        
        // 1. 計算我墊付了多少
        if (tx.splitType === 'custom' && tx.customSplit) {
             myPaid += (tx.customSplit[user.uid] || 0);
        } else {
             if (tx.payer === user.uid) myPaid += tx.amount;
        }

        // 2. 計算我該付多少
        let liability = 0;
        if (tx.splitType === 'even' || tx.splitType === 'custom') {
            liability = tx.amount / 2; 
        } else if (tx.splitType === 'host_all') {
            liability = ledgerData.users[user.uid]?.role === 'host' ? tx.amount : 0;
        } else if (tx.splitType === 'guest_all') {
            liability = ledgerData.users[user.uid]?.role === 'guest' ? tx.amount : 0;
        }
        myLiability += liability;
    });
    
    // 計算已結算金額
    const settlements = ledgerData.transactions.filter(tx => tx.isSettlement);
    let settledAmount = 0;
    settlements.forEach(tx => {
        if (tx.payer === user.uid) settledAmount += tx.amount;
        else settledAmount -= tx.amount;
    });

    const settlement = (myPaid + settledAmount) - myLiability; 

    const currentProjectName = ledgerData.projects?.find(p => p.id === currentProjectId)?.name || '日常開銷';
    const getHouseIcon = (level) => { if (level < 5) return '⛺️'; if (level < 15) return '🏠'; if (level < 30) return '🏡'; return '🏰'; };
    const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;

    const otherUserId = Object.keys(ledgerData.users).find(uid => uid !== user.uid);
    const partnerName = otherUserId ? (ledgerData.users[otherUserId].name || '對方') : '對方';

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative">
        {/* Edit Transaction Modal */}
        {isEditTxModalOpen && editingTx && (
            <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-in fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">編輯交易</h3>
                    <button onClick={() => setIsEditTxModalOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button>
                </div>
                <div className="space-y-4 flex-1 overflow-y-auto pb-10">
                     <div className="text-center text-gray-400 text-xs">金額 ({editingTx.currency})</div>
                     <input type="number" value={editingTx.amount} onChange={(e) => setEditingTx({...editingTx, amount: parseFloat(e.target.value)})} className="w-full text-center text-4xl font-bold bg-transparent outline-none"/>
                     
                     <div className="text-center text-gray-400 text-xs mt-4">日期</div>
                     <div className="flex justify-center">
                        <input 
                            type="date" 
                            value={new Date(editingTx.date).toISOString().slice(0,10)} 
                            onChange={(e) => setEditingTx({...editingTx, date: new Date(e.target.value).toISOString()})}
                            className="bg-gray-100 p-2 rounded-lg text-center"
                        />
                     </div>

                     <div className="text-center text-gray-400 text-xs mt-4">分類</div>
                     <div className="grid grid-cols-4 gap-2">
                        {allCats.map(cat => (
                            <button 
                                key={cat.id} 
                                onClick={() => setEditingTx({...editingTx, category: cat})}
                                className={`p-2 rounded-xl flex flex-col items-center border ${editingTx.category?.id === cat.id ? 'border-gray-800 bg-gray-50' : 'border-transparent'}`}
                            >
                                <div style={{color: cat.hex}}>{React.createElement(getIconComponent(cat.icon), {size: 20})}</div>
                                <span className="text-[10px]">{cat.name}</span>
                            </button>
                        ))}
                     </div>

                     <div className="text-center text-gray-400 text-xs mt-4">付款人</div>
                     <div className="flex gap-2 justify-center">
                         {Object.entries(ledgerData.users).map(([uid, u]) => (
                             <button 
                                key={uid} 
                                onClick={() => setEditingTx({...editingTx, payer: uid})}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${editingTx.payer === uid ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                             >
                                {u.name}
                             </button>
                         ))}
                     </div>

                     <div className="text-center text-gray-400 text-xs mt-4">備註</div>
                     <input type="text" value={editingTx.note} onChange={(e) => setEditingTx({...editingTx, note: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl outline-none"/>
                     
                     <button onClick={handleUpdateTransaction} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold mt-4">儲存修改</button>
                     <button onClick={handleDeleteTransaction} className="w-full bg-red-50 text-red-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Trash2 size={18}/> 刪除此筆紀錄</button>
                </div>
            </div>
        )}

        <div className="flex justify-between items-center mb-4">
           <div className="relative">
             <select value={currentProjectId} onChange={(e) => setCurrentProjectId(e.target.value)} className="appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200">
                {ledgerData.projects?.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
             </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"><ChevronDown size={14} /></div>
           </div>
           <div className="flex items-center gap-2">
             <div className="bg-rose-100 px-3 py-1.5 rounded-full flex flex-col items-end gap-0.5">
               <div className="flex items-center gap-1">
                 <span className="text-lg leading-none">{getHouseIcon(ledgerData.gamification?.level || 1)}</span>
                 <span className="text-xs font-bold text-rose-600 leading-none">Lv.{ledgerData.gamification?.level || 1}</span>
               </div>
             </div>
             <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
               {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
             </button>
           </div>
        </div>
        
        {/* Settlement Card */}
        <div className={`rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-8 relative overflow-hidden transition-colors ${settlement >= 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-rose-500 to-pink-600'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
            <p className="text-white/80 mb-1 font-medium text-sm flex items-center gap-2"><ArrowRightLeft size={14}/> 總結算狀態 ({currentProjectName})</p>
            <div className="flex justify-between items-end mb-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    {settlement >= 0 ? `${partnerName} 欠你 ${formatCurrency(Math.abs(settlement), ledgerData.currency, privacyMode)}` : `你欠 ${partnerName} ${formatCurrency(Math.abs(settlement), ledgerData.currency, privacyMode)}`}
                </h1>
            </div>
            {Math.abs(settlement) > 0 && (
                <button 
                    onClick={() => handleSettleUp(Math.abs(settlement), settlement < 0 ? partnerName : '你')} 
                    className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 backdrop-blur-sm transition-colors"
                >
                    <HandCoins size={14}/> 結清債務
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
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${tx.category?.color?.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 text-${tx.category?.color?.split('text-')[1]}`}>
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
                                    <span className={`font-bold ${tx.isSettlement ? 'text-emerald-500' : 'text-gray-800'}`}>{formatCurrency(tx.amount, tx.currency, privacyMode)}</span>
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