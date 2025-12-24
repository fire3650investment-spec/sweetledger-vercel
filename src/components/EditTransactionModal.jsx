// src/components/EditTransactionModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Calendar, DollarSign, Tag, AlertCircle, Trash2, Info } from 'lucide-react'; 
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function EditTransactionModal({ 
  isOpen, 
  onClose, 
  transaction, 
  ledgerData, 
  user,
  onUpdate, 
  onDelete 
}) {
  if (!isOpen) return null;
  if (!ledgerData) return null;

  const safeUsers = ledgerData.users || {};
  const hostId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'host');
  const guestId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'guest');

  const hostName = hostId ? (safeUsers[hostId]?.name || '戶長') : '戶長';
  const guestName = guestId ? (safeUsers[guestId]?.name || '成員') : '等待加入...';

  // Local State
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('TWD');
  const [categoryId, setCategoryId] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [payer, setPayer] = useState('');
  const [splitType, setSplitType] = useState('even');
  
  const [hostAmount, setHostAmount] = useState('');
  const [guestAmount, setGuestAmount] = useState('');

  // 初始化資料
  useEffect(() => {
    if (transaction) {
      setAmount(transaction.amount);
      setCurrency(transaction.currency || 'TWD');
      setCategoryId(transaction.category?.id || 'other');
      setNote(transaction.note || '');
      try {
        setDate(new Date(transaction.date).toISOString().slice(0, 10));
      } catch (e) {
        setDate(new Date().toISOString().slice(0, 10));
      }
      setPayer(transaction.payer);
      setSplitType(transaction.splitType);

      if ((transaction.splitType === 'custom' || transaction.splitType === 'multi_payer') && transaction.customSplit) {
        const hVal = parseFloat(transaction.customSplit[hostId]);
        const gVal = parseFloat(transaction.customSplit[guestId]);
        setHostAmount(isNaN(hVal) ? '' : hVal);
        setGuestAmount(isNaN(gVal) ? '' : gVal);
      } else {
        setHostAmount('');
        setGuestAmount('');
      }
    }
  }, [transaction, hostId, guestId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;

    const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const selectedCat = allCats.find(c => c.id === categoryId) || 
                       { id: 'uncategorized', name: '未分類', icon: 'help-circle', color: 'bg-gray-100 text-gray-600', hex: '#9ca3af' };

    const updatedTx = {
      ...transaction,
      amount: parseFloat(amount),
      currency,
      category: selectedCat,
      note: note || selectedCat.name,
      date: new Date(date).toISOString(),
      payer,
      splitType,
      customSplit: (splitType === 'custom' || splitType === 'multi_payer') ? {
        [hostId]: parseFloat(hostAmount) || 0,
        [guestId]: parseFloat(guestAmount) || 0
      } : null
    };

    onUpdate(updatedTx);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('確定要刪除這筆記帳嗎？')) {
      onDelete(transaction.id);
      onClose();
    }
  };

  const handleSplitChange = (field, value) => {
    const total = parseFloat(amount) || 0;
    const val = parseFloat(value) || 0;
    
    // [Smart Logic] 只有在「混合出資 (multi_payer)」模式下才啟用自動扣減
    // 因為舊制「自訂分攤 (custom)」通常是各自輸入責任額，不一定連動
    if (splitType === 'multi_payer') {
        if (field === 'host') {
            setHostAmount(value);
            const guestCalc = total - val;
            setGuestAmount(guestCalc >= 0 ? guestCalc.toString() : '0');
        } else {
            setGuestAmount(value);
            const hostCalc = total - val;
            setHostAmount(hostCalc >= 0 ? hostCalc.toString() : '0');
        }
    } else {
        // 舊制模式，僅單純更新數值
        if (field === 'host') setHostAmount(value);
        else setGuestAmount(value);
    }
  };

  const getUserName = (uid) => {
    return safeUsers[uid]?.name || '使用者';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <h3 className="font-bold text-gray-800 text-lg">編輯記帳</h3>
          <button onClick={onClose} className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 shadow-sm transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Amount */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">金額</label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><DollarSign size={20}/></div>
                <input type="number" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-gray-50 text-gray-800 text-2xl font-bold py-3 pl-12 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-rose-500 transition-all" placeholder="0.00"/>
              </div>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="bg-gray-50 font-bold text-gray-600 px-4 rounded-xl outline-none focus:ring-2 focus:ring-rose-500"><option value="TWD">TWD</option><option value="JPY">JPY</option><option value="THB">THB</option></select>
            </div>
          </div>

          {/* Date & Category */}
          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">日期</label>
                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={16}/></div>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-gray-50 text-gray-700 font-medium py-3 pl-10 pr-3 rounded-xl outline-none focus:ring-2 focus:ring-rose-500 text-sm"/>
                </div>
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">分類</label>
                <div className="relative">
                    <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-rose-500 appearance-none text-sm">
                        {(ledgerData.customCategories || DEFAULT_CATEGORIES).map(c => (<option key={c.id} value={c.id}>{c.name}</option>))}
                    </select>
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"><Tag size={16}/></div>
                </div>
             </div>
          </div>

          {/* Note */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">備註</label>
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="w-full bg-gray-50 text-gray-700 py-3 px-4 rounded-xl outline-none focus:ring-2 focus:ring-rose-500" placeholder="輸入備註..."/>
          </div>

          {/* Split Type */}
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">分攤模式</label>
            <div className="grid grid-cols-2 gap-2">
                <button type="button" onClick={() => setSplitType('even')} className={`py-2 rounded-lg text-xs font-bold transition-colors ${splitType === 'even' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}>平均分攤</button>
                {/* [UX] 顯示目前是哪種特殊模式 */}
                {splitType === 'custom' ? (
                   <button type="button" className="py-2 rounded-lg text-xs font-bold bg-gray-800 text-white cursor-default">自訂分攤 (舊制)</button>
                ) : (
                   <button type="button" onClick={() => setSplitType('multi_payer')} className={`py-2 rounded-lg text-xs font-bold transition-colors ${splitType === 'multi_payer' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}>混合出資</button>
                )}
                
                <button type="button" onClick={() => setSplitType('host_all')} className={`py-2 rounded-lg text-xs font-bold transition-colors ${splitType === 'host_all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}>{getUserName(hostId)} 全付</button>
                <button type="button" onClick={() => setSplitType('guest_all')} className={`py-2 rounded-lg text-xs font-bold transition-colors ${splitType === 'guest_all' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}>{getUserName(guestId)} 全付</button>
            </div>
          </div>

          {/* Custom Split Inputs */}
          {/* [Phase 3] 智慧標籤區隔：舊資料 vs 新資料 */}
          {(splitType === 'multi_payer' || splitType === 'custom') && (
              <div className={`p-4 rounded-xl border animate-fade-in ${splitType === 'multi_payer' ? 'bg-rose-50 border-rose-100' : 'bg-gray-50 border-gray-200'}`}>
                  
                  {splitType === 'multi_payer' ? (
                      <div className="flex items-center gap-2 mb-3 text-rose-600 text-xs font-bold">
                          <AlertCircle size={14}/> 
                          <span>輸入各自「實際支付」金額 (新制)</span>
                      </div>
                  ) : (
                      <div className="flex items-center gap-2 mb-3 text-gray-500 text-xs font-bold">
                          <Info size={14}/> 
                          <span>輸入各自「應付」金額 (舊制資料)</span>
                      </div>
                  )}

                  <div className="space-y-3">
                      <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 w-24 truncate">{hostName}</span>
                          <input type="number" value={hostAmount} onChange={(e) => handleSplitChange('host', e.target.value)} placeholder="0" className="w-32 bg-white text-right py-2 px-3 rounded-lg text-sm font-bold outline-none border border-rose-200 focus:border-rose-500"/>
                      </div>
                      <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 w-24 truncate">{guestName}</span>
                          <input type="number" value={guestAmount} onChange={(e) => handleSplitChange('guest', e.target.value)} placeholder="0" disabled={!guestId} className="w-32 bg-white text-right py-2 px-3 rounded-lg text-sm font-bold outline-none border border-rose-200 focus:border-rose-500 disabled:bg-gray-100"/>
                      </div>
                  </div>
              </div>
          )}

           {/* Payer (Hidden for multi_payer) */}
           {splitType !== 'multi_payer' && splitType !== 'custom' && (
              <div>
                 <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">誰付的錢？</label>
                 <div className="grid grid-cols-2 gap-3">
                    {Object.keys(safeUsers).length > 0 ? (
                        Object.keys(safeUsers).map(uid => (
                            <button key={uid} type="button" onClick={() => setPayer(uid)} className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${payer === uid ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-transparent bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>
                                {safeUsers[uid].name}
                            </button>
                        ))
                    ) : (
                         <div className="col-span-2 text-center text-sm text-gray-400 bg-gray-50 py-3 rounded-xl">讀取資料...</div>
                    )}
                 </div>
              </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex gap-3 bg-white">
            <button type="button" onClick={handleDelete} className="p-4 bg-gray-100 text-gray-500 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
            <button onClick={handleSubmit} className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform">儲存修改</button>
        </div>

      </div>
    </div>
  );
}