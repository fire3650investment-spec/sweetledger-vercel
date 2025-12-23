// src/components/EditTransactionModal.jsx
import React, { useMemo } from 'react';
import { X, Trash2, Calendar, User, ChevronDown, Equal, ArrowRightLeft, PieChart } from 'lucide-react';
import { getIconComponent, formatCurrency } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function EditTransactionModal({
  isOpen,
  onClose,
  editingTx,
  setEditingTx,
  handleUpdateTransaction,
  handleDeleteTransaction,
  ledgerData
}) {
  if (!isOpen || !editingTx || !ledgerData) return null;

  const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
  const currencies = ['TWD', 'JPY', 'THB'];

  // [Logic] 判斷目前的分攤視覺狀態 (UI State)
  const currentSplitMode = useMemo(() => {
    if (editingTx.splitType === 'even') return 'even';
    if (editingTx.splitType === 'custom') return 'custom';

    const payerId = editingTx.payer;
    const payerRole = ledgerData.users[payerId]?.role;
    
    if (editingTx.splitType === 'host_all') {
        return payerRole === 'host' ? 'private' : 'advance';
    }
    
    if (editingTx.splitType === 'guest_all') {
        return payerRole === 'guest' ? 'private' : 'advance';
    }

    return 'even'; 
  }, [editingTx.splitType, editingTx.payer, ledgerData.users]);

  // [Handler] 切換分攤模式
  const handleSplitChange = (mode) => {
      const payerId = editingTx.payer;
      const payerRole = ledgerData.users[payerId]?.role;
      let newSplitType = 'even';
      let newCustomSplit = editingTx.customSplit || {};

      if (mode === 'even') {
          newSplitType = 'even';
      } else if (mode === 'private') {
          newSplitType = payerRole === 'host' ? 'host_all' : 'guest_all';
      } else if (mode === 'advance') {
          newSplitType = payerRole === 'host' ? 'guest_all' : 'host_all';
      } else if (mode === 'custom') {
          newSplitType = 'custom';
          // 初始化 customSplit
          if (!newCustomSplit || Object.keys(newCustomSplit).length === 0) {
              const uids = Object.keys(ledgerData.users);
              const half = (editingTx.amount || 0) / 2;
              newCustomSplit = {};
              uids.forEach(uid => newCustomSplit[uid] = half);
          }
      }

      setEditingTx({ 
          ...editingTx, 
          splitType: newSplitType,
          customSplit: mode === 'custom' ? newCustomSplit : editingTx.customSplit
      });
  };

  const handleCustomAmountChange = (uid, val) => {
      const valFloat = parseFloat(val);
      const newAmount = isNaN(valFloat) ? 0 : valFloat;
      
      const newCustomSplit = { 
          ...(editingTx.customSplit || {}), 
          [uid]: newAmount 
      };

      const newTotal = Object.values(newCustomSplit).reduce((acc, curr) => acc + curr, 0);

      setEditingTx({
          ...editingTx,
          customSplit: newCustomSplit,
          amount: newTotal 
      });
  };

  const handlePayerChange = (newPayer) => {
      const oldMode = currentSplitMode;
      const newPayerRole = ledgerData.users[newPayer]?.role;
      let newSplitType = editingTx.splitType;

      if (oldMode === 'private') {
          newSplitType = newPayerRole === 'host' ? 'host_all' : 'guest_all';
      } else if (oldMode === 'advance') {
          newSplitType = newPayerRole === 'host' ? 'guest_all' : 'host_all';
      }
      
      setEditingTx({...editingTx, payer: newPayer, splitType: newSplitType});
  };

  return (
    <div className="fixed inset-0 z-[150] bg-white/95 backdrop-blur-sm flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] animate-in fade-in duration-200">
        {/* Header */}
        <div className="px-6 flex justify-between items-center mb-2 shrink-0">
            <h3 className="text-xl font-bold text-gray-800">編輯交易</h3>
            <button onClick={onClose} className="p-2 bg-gray-100 rounded-full active:bg-gray-200 transition-colors"><X size={20}/></button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-5">
             {/* 1. 金額 */}
             <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100 relative">
                 <div className="flex justify-center items-center gap-2 mb-2">
                    <p className="text-xs text-gray-400">金額 {currentSplitMode === 'custom' && '(自動加總)'}</p>
                    <div className="relative">
                        <select
                            value={editingTx.currency || 'TWD'}
                            onChange={(e) => setEditingTx({...editingTx, currency: e.target.value})}
                            className="text-xs font-bold text-gray-600 bg-gray-200 rounded px-2 py-1 appearance-none pr-6 outline-none transition-colors hover:bg-gray-300"
                        >
                            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <ChevronDown size={10} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                    </div>
                 </div>
                 
                 <input 
                    type="number" 
                    value={editingTx.amount} 
                    onChange={(e) => setEditingTx({...editingTx, amount: parseFloat(e.target.value)})} 
                    className={`w-full text-center bg-transparent text-3xl font-bold outline-none placeholder-gray-300 ${currentSplitMode === 'custom' ? 'text-gray-500' : 'text-gray-800'}`}
                    placeholder="0"
                 />
             </div>

             {/* 2. 日期 + 付款人 */}
             <div className="flex gap-3">
                 <div className="flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="flex items-center gap-1 text-xs text-gray-400 mb-1"><Calendar size={12}/> 日期</div>
                     <input 
                        type="date" 
                        value={new Date(editingTx.date).toISOString().slice(0, 10)}
                        onChange={(e) => setEditingTx({...editingTx, date: new Date(e.target.value).toISOString()})}
                        className="bg-transparent outline-none text-sm font-bold text-gray-700 w-full"
                     />
                 </div>
                 
                 <div className="flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="flex items-center gap-1 text-xs text-gray-400 mb-1"><User size={12}/> 付款人</div>
                     <select 
                        value={editingTx.payer} 
                        onChange={(e) => handlePayerChange(e.target.value)}
                        className="bg-transparent outline-none text-sm font-bold text-gray-700 w-full appearance-none"
                     >
                        {Object.entries(ledgerData.users).map(([uid, u]) => (
                            <option key={uid} value={uid}>{u.name}</option>
                        ))}
                     </select>
                 </div>
             </div>

             {/* 3. 分攤模式 */}
             <div>
                <p className="text-xs text-gray-400 mb-2">分攤模式</p>
                <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
                    <button type="button" onClick={() => handleSplitChange('even')} className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${currentSplitMode === 'even' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}><Equal size={14}/> 平均</button>
                    <button type="button" onClick={() => handleSplitChange('private')} className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${currentSplitMode === 'private' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}><User size={14}/> 私人</button>
                    <button type="button" onClick={() => handleSplitChange('advance')} className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${currentSplitMode === 'advance' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}><ArrowRightLeft size={14}/> 代墊</button>
                    <button type="button" onClick={() => handleSplitChange('custom')} className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1 transition-all ${currentSplitMode === 'custom' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}><PieChart size={14}/> 自訂</button>
                </div>
                
                {currentSplitMode === 'custom' && (
                    <div className="mt-3 grid grid-cols-2 gap-3 animate-in slide-in-from-top-2 duration-200">
                        {Object.entries(ledgerData.users).map(([uid, user]) => (
                            <div key={uid} className="bg-gray-50 p-2 rounded-xl border border-gray-100">
                                <p className="text-xs text-gray-400 mb-1 pl-1">{user.name}</p>
                                <input
                                    type="number"
                                    value={editingTx.customSplit?.[uid] ?? 0}
                                    onChange={(e) => handleCustomAmountChange(uid, e.target.value)}
                                    className="w-full bg-transparent font-bold text-gray-800 outline-none text-center border-b border-gray-200 focus:border-gray-400 transition-colors pb-1"
                                    placeholder="0"
                                />
                            </div>
                        ))}
                    </div>
                )}
             </div>

             {/* 4. 分類 */}
             <div>
                <p className="text-xs text-gray-400 mb-2">分類</p>
                <div className="grid grid-cols-5 gap-2">
                    {allCats.map(cat => {
                        const CatIcon = getIconComponent(cat.icon);
                        const isSelected = editingTx.category?.id === cat.id;
                        return (
                            <button 
                                key={cat.id} 
                                onClick={() => setEditingTx({...editingTx, category: cat})}
                                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all aspect-square ${isSelected ? 'bg-gray-800 text-white shadow-md transform scale-105' : 'bg-white border border-gray-100 text-gray-400'}`}
                            >
                                <CatIcon size={20} />
                            </button>
                        )
                    })}
                </div>
             </div>

             {/* 5. 備註 */}
             <div>
                 <p className="text-xs text-gray-400 mb-2">備註</p>
                 <input 
                    type="text" 
                    value={editingTx.note} 
                    onChange={(e) => setEditingTx({...editingTx, note: e.target.value})} 
                    className="w-full p-4 bg-gray-50 rounded-xl outline-none text-sm border border-gray-100 focus:border-gray-300 transition-colors"
                    placeholder="寫點什麼..."
                 />
             </div>
             <div className="h-24"></div>
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] flex gap-3 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
             <button onClick={handleDeleteTransaction} className="flex-1 bg-red-50 text-red-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"><Trash2 size={18}/> 刪除</button>
             <button onClick={handleUpdateTransaction} className="flex-[2] bg-gray-900 text-white py-3 rounded-xl font-bold shadow-lg shadow-gray-200 active:scale-95 transition-transform">儲存修改</button>
        </div>
    </div>
  );
}