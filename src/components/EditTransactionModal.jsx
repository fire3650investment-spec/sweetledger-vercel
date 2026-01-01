// src/components/EditTransactionModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Calendar, Trash2, Check, User, Users, AlertCircle, Lock, Tag, DollarSign } from 'lucide-react';
import { getCategoryStyle, getIconComponent, getLocalISODate } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function EditTransactionModal({ 
    isOpen, 
    onClose, 
    editingTx: transaction, // Rename for internal consistency
    ledgerData, 
    user, 
    updateTransaction, // Expecting wrapper function from parent
    deleteTransaction, // Expecting wrapper function from parent
    currentProjectId
}) {
    if (!isOpen || !transaction || !ledgerData) return null;

    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [payer, setPayer] = useState('');
    const [splitType, setSplitType] = useState('even');
    const [customSplitHost, setCustomSplitHost] = useState('');
    const [customSplitGuest, setCustomSplitGuest] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currency, setCurrency] = useState('TWD');

    // Context Logic
    // [Optimization] Determine if current mode is Private based on Project ID
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const isPrivateProject = currentProject?.type === 'private';
    
    const users = ledgerData.users || {};
    const hostId = Object.keys(users).find(uid => users[uid].role === 'host');
    const guestId = Object.keys(users).find(uid => users[uid].role === 'guest');
    const hostName = hostId ? (users[hostId]?.name || '戶長') : '戶長';
    const guestName = guestId ? (users[guestId]?.name || '成員') : '成員';

    // Init Data
    useEffect(() => {
        if (transaction) {
            setAmount(transaction.amount.toString());
            setNote(transaction.note || '');
            setCurrency(transaction.currency || 'TWD');
            
            try {
                setDate(getLocalISODate(transaction.date));
            } catch (e) {
                setDate(getLocalISODate());
            }

            setPayer(transaction.payer);
            setSplitType(transaction.splitType || 'even');
            setSelectedCategory(transaction.category || DEFAULT_CATEGORIES[0]);

            if (transaction.customSplit) {
                if (hostId && transaction.customSplit[hostId]) setCustomSplitHost(transaction.customSplit[hostId].toString());
                if (guestId && transaction.customSplit[guestId]) setCustomSplitGuest(transaction.customSplit[guestId].toString());
            } else {
                setCustomSplitHost('');
                setCustomSplitGuest('');
            }
        }
    }, [transaction, hostId, guestId]);

    // Force Private Logic (Lock Payer & SplitType)
    useEffect(() => {
        if (isPrivateProject && user) {
            setSplitType('self');
            setPayer(user.uid);
        }
    }, [isPrivateProject, user]);

    const handleSave = async () => {
        if (!amount || parseFloat(amount) <= 0 || isSubmitting) return;
        setIsSubmitting(true);
        
        try {
            const amountFloat = parseFloat(amount);
            let customSplitData = null;

            if (!isPrivateProject && (splitType === 'custom' || splitType === 'multi_payer')) {
                const hostAmt = parseFloat(customSplitHost) || 0;
                const guestAmt = parseFloat(customSplitGuest) || 0;
                if (Math.abs((hostAmt + guestAmt) - amountFloat) > 0.1) {
                    alert(`金額不符：分攤總和 (${hostAmt+guestAmt}) 必須等於總金額 (${amountFloat})`);
                    setIsSubmitting(false);
                    return;
                }
                customSplitData = {};
                if(hostId) customSplitData[hostId] = hostAmt;
                if(guestId) customSplitData[guestId] = guestAmt;
            }

            await updateTransaction({
                ...transaction,
                amount: amountFloat,
                currency,
                category: selectedCategory,
                note: note || selectedCategory.name,
                date: new Date(date).toISOString(),
                payer: isPrivateProject ? user.uid : payer,
                splitType: isPrivateProject ? 'self' : splitType,
                customSplit: isPrivateProject ? null : customSplitData
            });
            onClose();
        } catch (e) {
            console.error("Update failed", e);
            alert("更新失敗");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if(!window.confirm("確定要刪除這筆紀錄嗎？")) return;
        try {
            await deleteTransaction(transaction.id);
            onClose();
        } catch(e) { console.error(e); }
    };

    const handleSplitChange = (field, value) => {
        const total = parseFloat(amount) || 0;
        const val = parseFloat(value) || 0;
        if (splitType === 'multi_payer') {
            if (field === 'host') {
                setCustomSplitHost(value);
                const guestCalc = total - val;
                setCustomSplitGuest(guestCalc >= 0 ? guestCalc.toString() : '0');
            } else {
                setCustomSplitGuest(value);
                const hostCalc = total - val;
                setCustomSplitHost(hostCalc >= 0 ? hostCalc.toString() : '0');
            }
        } else {
            if (field === 'host') setCustomSplitHost(value); 
            else setCustomSplitGuest(value);
        }
    };

    const getLabelForRole = (targetRole) => {
        const payerRole = users[payer]?.role;
        if (targetRole === 'host') return payerRole === 'host' ? `私人 (${hostName})` : (payerRole === 'guest' ? `代墊 (幫${hostName}付)` : `${hostName} 全額`);
        else return payerRole === 'guest' ? `私人 (${guestName})` : (payerRole === 'host' ? `代墊 (幫${guestName}付)` : `${guestName} 全額`);
    };

    const currentCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const CatIcon = getIconComponent(selectedCategory?.icon || 'food');
    const catStyle = getCategoryStyle(selectedCategory, 'input');

    return (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full sm:w-[400px] sm:rounded-2xl rounded-t-3xl p-5 pb-8 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">編輯紀錄</h3>
                    <button onClick={onClose} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200"><X size={20}/></button>
                </div>

                {/* Amount */}
                <div className="flex justify-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-2xl text-gray-300">$</span>
                        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-32 text-center outline-none bg-transparent placeholder-gray-200" placeholder="0" />
                        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="text-sm font-bold bg-gray-100 rounded-lg px-2 py-1 outline-none text-gray-600"><option value="TWD">TWD</option><option value="JPY">JPY</option><option value="THB">THB</option></select>
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-4">
                    {/* Category & Note */}
                    <div className="flex gap-3">
                        <div className="relative">
                             <select 
                                value={selectedCategory?.id} 
                                onChange={(e) => {
                                    const cat = currentCats.find(c => c.id === e.target.value);
                                    if(cat) setSelectedCategory(cat);
                                }}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                             >
                                {currentCats.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                             </select>
                             <div className={`flex items-center gap-2 px-3 py-3 rounded-xl border ${catStyle.activeClass} border-transparent flex-none min-w-[100px]`}>
                                <CatIcon size={20}/>
                                <span className="font-bold text-sm truncate max-w-[60px]">{selectedCategory?.name}</span>
                            </div>
                        </div>
                        
                        <input type="text" value={note} onChange={e => setNote(e.target.value)} placeholder="備註..." className="flex-1 bg-gray-50 px-4 rounded-xl border border-gray-100 outline-none text-sm font-medium focus:border-rose-200"/>
                    </div>

                    {/* Date */}
                    <div className="flex items-center bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                        <Calendar size={18} className="text-gray-400 mr-3"/>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-transparent font-bold text-gray-700 outline-none w-full text-sm"/>
                    </div>

                    {/* Split & Payer (Visual Noise Removal: HIDDEN in Private Mode) */}
                    {!isPrivateProject && (
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-3">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Users size={16}/>
                                    <span className="text-xs font-bold">分攤模式</span>
                                </div>
                                <select value={splitType} onChange={e => setSplitType(e.target.value)} className="bg-white border border-gray-200 text-xs font-bold py-1 px-2 rounded-lg outline-none">
                                    <option value="even">平均分攤</option>
                                    <option value="multi_payer">混合出資</option>
                                    <option value="self">{getLabelForRole('host')}</option>
                                    <option value="partner">{getLabelForRole('guest')}</option>
                                </select>
                            </div>
                            
                            {(splitType === 'multi_payer' || splitType === 'custom') && (
                                <div className="flex gap-2 animate-fade-in">
                                    <div className="relative flex-1">
                                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">{hostName}</span>
                                        <input type="number" value={customSplitHost} onChange={e => handleSplitChange('host', e.target.value)} className="w-full pl-10 pr-2 py-2 text-xs rounded border border-gray-200 text-right outline-none"/>
                                    </div>
                                    <div className="relative flex-1">
                                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">{guestName}</span>
                                        <input type="number" value={customSplitGuest} onChange={e => handleSplitChange('guest', e.target.value)} className="w-full pl-10 pr-2 py-2 text-xs rounded border border-gray-200 text-right outline-none"/>
                                    </div>
                                </div>
                            )}

                            <div className="h-[1px] bg-gray-200 w-full"></div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <User size={16}/>
                                    <span className="text-xs font-bold">付款人</span>
                                </div>
                                <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-[200px]">
                                    {Object.keys(users).map(uid => (
                                        <button key={uid} onClick={() => setPayer(uid)} className={`text-[10px] font-bold px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${payer === uid ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-500 border-gray-200'}`}>
                                            {users[uid].name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {isPrivateProject && (
                        <div className="flex items-center justify-center gap-2 p-3 bg-slate-50 rounded-xl text-slate-400 border border-slate-100">
                             <Lock size={12}/>
                             <span className="text-xs font-bold">私人帳本模式 (不進行分攤)</span>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-8">
                    <button onClick={handleDelete} className="p-4 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                        <Trash2 size={24}/>
                    </button>
                    <button onClick={handleSave} disabled={isSubmitting} className="flex-1 bg-gray-900 text-white font-bold rounded-2xl py-4 flex items-center justify-center gap-2 active:scale-95 transition-transform disabled:opacity-50">
                        {isSubmitting ? <RefreshCw className="animate-spin"/> : <Check size={24}/>}
                        儲存變更
                    </button>
                </div>
            </div>
        </div>
    );
}