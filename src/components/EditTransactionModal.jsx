import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { getIconComponent } from '../utils/helpers';
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
    <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-in fade-in">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">編輯交易</h3>
            <button onClick={onClose} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button>
        </div>
        <div className="space-y-4 flex-1 overflow-y-auto pb-10">
             <div className="text-center text-gray-400 text-xs">金額 ({editingTx.currency})</div>
             <input 
                type="number" 
                value={editingTx.amount} 
                onChange={(e) => setEditingTx({...editingTx, amount: parseFloat(e.target.value)})} 
                className="w-full text-center text-4xl font-bold bg-transparent outline-none"
             />
             
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
             <input 
                type="text" 
                value={editingTx.note} 
                onChange={(e) => setEditingTx({...editingTx, note: e.target.value})} 
                className="w-full p-3 bg-gray-50 rounded-xl outline-none"
             />
             
             <button onClick={handleUpdateTransaction} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold mt-4">儲存修改</button>
             <button onClick={handleDeleteTransaction} className="w-full bg-red-50 text-red-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Trash2 size={18}/> 刪除此筆紀錄</button>
        </div>
    </div>
  );
}