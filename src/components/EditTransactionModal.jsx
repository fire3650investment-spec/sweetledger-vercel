import React from 'react';
import { X, Trash2, Calendar, User } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-[150] bg-white/95 backdrop-blur-sm flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] animate-in fade-in duration-200">
        {/* Header */}
        <div className="px-6 flex justify-between items-center mb-2 shrink-0">
            <h3 className="text-xl font-bold text-gray-800">編輯交易</h3>
            <button onClick={onClose} className="p-2 bg-gray-100 rounded-full active:bg-gray-200 transition-colors"><X size={20}/></button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-2 space-y-5">
             {/* 1. 金額 (Top) */}
             <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                 <p className="text-xs text-gray-400 mb-1">金額 ({editingTx.currency})</p>
                 <input 
                    type="number" 
                    value={editingTx.amount} 
                    onChange={(e) => setEditingTx({...editingTx, amount: parseFloat(e.target.value)})} 
                    className="w-full text-center bg-transparent text-3xl font-bold text-gray-800 outline-none placeholder-gray-300"
                    placeholder="0"
                 />
             </div>

             {/* 2. 日期 + 付款人 (Combined Row) */}
             <div className="flex gap-3">
                 {/* 日期 */}
                 <div className="flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="flex items-center gap-1 text-xs text-gray-400 mb-1"><Calendar size={12}/> 日期</div>
                     <input 
                        type="date" 
                        value={new Date(editingTx.date).toISOString().slice(0, 10)}
                        onChange={(e) => setEditingTx({...editingTx, date: new Date(e.target.value).toISOString()})}
                        className="bg-transparent outline-none text-sm font-bold text-gray-700 w-full"
                     />
                 </div>
                 
                 {/* 付款人 */}
                 <div className="flex-1 bg-gray-50 p-3 rounded-xl border border-gray-100 flex flex-col justify-center">
                     <div className="flex items-center gap-1 text-xs text-gray-400 mb-1"><User size={12}/> 付款人</div>
                     <select 
                        value={editingTx.payer} 
                        onChange={(e) => setEditingTx({...editingTx, payer: e.target.value})}
                        className="bg-transparent outline-none text-sm font-bold text-gray-700 w-full appearance-none"
                     >
                        {Object.entries(ledgerData.users).map(([uid, u]) => (
                            <option key={uid} value={uid}>{u.name}</option>
                        ))}
                     </select>
                 </div>
             </div>

             {/* 3. 分類 (Grid) */}
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

             {/* 4. 備註 */}
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
             
             {/* Spacer for bottom fixed buttons */}
             <div className="h-24"></div>
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] flex gap-3 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
             <button 
                onClick={handleDeleteTransaction} 
                className="flex-1 bg-red-50 text-red-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
             >
                <Trash2 size={18}/> 刪除
             </button>
             <button 
                onClick={handleUpdateTransaction} 
                className="flex-[2] bg-gray-900 text-white py-3 rounded-xl font-bold shadow-lg shadow-gray-200 active:scale-95 transition-transform"
             >
                儲存修改
             </button>
        </div>
    </div>
  );
}