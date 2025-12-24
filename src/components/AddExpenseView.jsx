// src/components/AddExpenseView.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  X, RefreshCw, Sparkles, StopCircle, Mic, Check, Delete, Equal, 
  Calendar, User, Users, Repeat, ChevronDown, Tag, ArrowRight, CornerDownLeft,
  Camera, AlertCircle 
} from 'lucide-react';
import { getIconComponent, parseReceiptWithGemini } from '../utils/helpers';
import { DEFAULT_CATEGORIES, INITIAL_LEDGER_STATE } from '../utils/constants';
import ScanReceiptModal from './ScanReceiptModal';

export default function AddExpenseView({
  ledgerData,
  currentProjectId,
  user,
  isAiModalOpen,
  setIsAiModalOpen,
  aiModalInput,
  setAiModalInput,
  isRecording,
  toggleVoiceRecording,
  handleAiModalSubmit,
  isAiProcessing,
  setView,
  date,
  setDate,
  currency, 
  setCurrency, 
  setAmount,    
  amount,
  initialAmount, 
  payer,
  setPayer,
  note,
  setNote,
  selectedCategory,
  setSelectedCategory,
  splitType,
  setSplitType,
  customSplitHost,
  setCustomSplitHost,
  customSplitGuest,
  setCustomSplitGuest,
  handleCustomSplitChange,
  isSubscription,
  setIsSubscription,
  subCycle,
  setSubCycle,
  subPayDay,
  setSubPayDay,
  addTransaction,
  isSubmittingTransaction
}) {
    if (!ledgerData) return null; 

    // --- Local State & Refs ---
    const [activeOverlay, setActiveOverlay] = useState('amount'); 
    const [localAmount, setLocalAmount] = useState(''); 
    const noteInputRef = useRef(null);
    const cameraInputRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);
    const [isScanModalOpen, setIsScanModalOpen] = useState(false);
    const [scannedItems, setScannedItems] = useState([]);

    // --- Data Preparation ---
    const currentCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories; 
    const filteredCategories = currentCats.filter(cat => selectedCategoryIds.includes(cat.id)); 
    
    // Names
    const users = ledgerData.users || {};
    const hostId = Object.keys(users).find(uid => users[uid].role === 'host');
    const guestId = Object.keys(users).find(uid => users[uid].role === 'guest');
    const hostName = hostId ? (users[hostId]?.name || '戶長') : '戶長';
    const guestName = guestId ? (users[guestId]?.name || '成員') : '成員';

    // Smart Tags Logic
    const recentNotes = [];
    if (ledgerData.transactions && selectedCategory) {
        const reversedTxs = [...ledgerData.transactions].reverse();
        const notes = reversedTxs
            .filter(t => t.category.id === selectedCategory.id && t.note)
            .map(t => t.note);
        const uniqueNotes = [...new Set(notes)];
        recentNotes.push(...uniqueNotes.slice(0, 5));
    }

    // --- Effects ---
    useEffect(() => {
        if (initialAmount) setLocalAmount(initialAmount.toString());
        else { setLocalAmount(''); setAmount(''); }
        setActiveOverlay('amount');
        // Ensure payer is set
        if (!payer && user) setPayer(user.uid);

        return () => {
            setAmount(''); setNote(''); setSelectedCategory(null); setSplitType('even');
            setCustomSplitHost(''); setCustomSplitGuest(''); setIsSubscription(false);
            setSubCycle('monthly'); setSubPayDay('');
        };
    }, []); 

    useEffect(() => { setAmount(localAmount); }, [localAmount, setAmount]);
    useEffect(() => {
        if (amount !== undefined && amount !== null && amount.toString() !== localAmount) {
            setLocalAmount(amount.toString());
        }
    }, [amount]);

    // --- Handlers ---
    const handleAmountClick = () => { setActiveOverlay('amount'); noteInputRef.current?.blur(); };
    const handleCategoryTriggerClick = () => { setActiveOverlay('category'); noteInputRef.current?.blur(); };
    const handleNoteFocus = () => { setActiveOverlay('none'); };

    const handleKeypadSubmit = () => {
        const isPendingMath = /[+\-×÷]/.test(localAmount) && !/[+\-×÷]$/.test(localAmount);
        if (isPendingMath) {
             try {
                const safeExpr = localAmount.replace(/×/g, '*').replace(/÷/g, '/');
                const result = new Function('return ' + safeExpr)();
                const finalVal = Math.round(result * 100) / 100;
                setLocalAmount(finalVal.toString());
             } catch (e) {}
             return;
        }
        if (!localAmount || parseFloat(localAmount) <= 0) return;
        setActiveOverlay('category');
    };

    const handleCategorySelect = (cat) => {
        setSelectedCategory(cat);
        setActiveOverlay('none');
        requestAnimationFrame(() => { noteInputRef.current?.focus(); });
    };

    const handleKeyPress = (key) => {
        if (navigator.vibrate) try { navigator.vibrate(10); } catch(e) {}
        const operators = ['+', '-', '×', '÷'];
        if (key === 'AC') { setLocalAmount(''); return; }
        if (key === 'DEL') { setLocalAmount(prev => prev.slice(0, -1)); return; }
        if (key === 'DONE') { handleKeypadSubmit(); return; }
        if (key === '.') {
            setLocalAmount(prev => {
                const lastChar = prev.slice(-1);
                if (!prev || operators.includes(lastChar)) return prev + '0.';
                return prev + key;
            });
            return;
        }
        setLocalAmount(prev => {
            const lastChar = prev.slice(-1);
            if (operators.includes(key)) {
                if (operators.includes(lastChar)) return prev.slice(0, -1) + key;
                if (!prev) return prev; 
            }
            return prev + key;
        });
    };

    const handleScanClick = () => { cameraInputRef.current?.click(); };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setIsScanning(true);
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result.split(',')[1]; 
            const items = await parseReceiptWithGemini(base64String);
            setIsScanning(false);
            if (items && Array.isArray(items)) {
                setScannedItems(items);
                setIsScanModalOpen(true);
            } else { alert("掃描失敗，請再試一次或手動輸入"); }
        };
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const handleScanConfirm = (result) => {
        const { amount, note, splitType, customSplit } = result;
        setLocalAmount(amount.toString());
        setAmount(amount.toString());
        if (note) setNote(note);
        setSplitType(splitType);
        
        if (customSplit) {
            if (hostId && customSplit[hostId]) setCustomSplitHost(customSplit[hostId].toString());
            if (guestId && customSplit[guestId]) setCustomSplitGuest(customSplit[guestId].toString());
        }
        if (amount > 0) setActiveOverlay('category');
    };

    // --- Dynamic Label Logic (私人/代墊) ---
    const getLabelForRole = (targetRole) => {
        const payerRole = users[payer]?.role;
        
        if (targetRole === 'host') {
            if (payerRole === 'host') return `私人 (${hostName})`; // A付, A用
            if (payerRole === 'guest') return `代墊 (幫${hostName}付)`; // B付, A用
            return `${hostName} 全額`;
        } else {
            if (payerRole === 'guest') return `私人 (${guestName})`; // B付, B用
            if (payerRole === 'host') return `代墊 (幫${guestName}付)`; // A付, B用
            return `${guestName} 全額`;
        }
    };

    const isMathPending = /[+\-×÷]/.test(localAmount) && !/[+\-×÷]$/.test(localAmount);
    
    // --- Render Helpers ---
    const renderKey = (label, type = 'num', className = '') => {
        let content = label;
        if (label === 'DEL') content = <Delete size={22}/>;
        else if (label === 'DONE') content = isMathPending ? <Equal size={28}/> : <CornerDownLeft size={28} strokeWidth={3}/>;

        return (
            <button
                onClick={(e) => { e.stopPropagation(); handleKeyPress(label); }}
                className={`rounded-2xl text-xl font-bold flex items-center justify-center select-none btn-press active:scale-95 transition-transform ${className} ${type === 'num' ? 'bg-white text-slate-700' : ''} ${type === 'op' ? 'bg-rose-50 text-rose-500' : ''} ${type === 'ac' ? 'bg-slate-100 text-slate-400' : ''} ${type === 'action' ? 'bg-rose-500 text-white' : ''} `}
                style={{ height: '56px' }} 
            >
                {content}
            </button>
        );
    };

    const CatIcon = getIconComponent(selectedCategory?.icon || 'food');

    return (
      <div className="fixed inset-0 z-[50] flex flex-col h-[100dvh] bg-gray-50 overflow-hidden"> 
        <input type="file" ref={cameraInputRef} accept="image/*" capture="environment" className="hidden" onChange={handleImageUpload}/>
        <ScanReceiptModal isOpen={isScanModalOpen} onClose={() => setIsScanModalOpen(false)} onConfirm={handleScanConfirm} initialItems={scannedItems} currency={currency} users={ledgerData.users}/>

        {/* HUD */}
        <div className="bg-white px-4 pb-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] z-20 shrink-0 shadow-sm border-b border-gray-100 relative">
            <div className="flex justify-between items-center mb-3">
                <button onClick={() => setView('dashboard')} className="p-2 -ml-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors"><X size={24}/></button>
                <div className="font-bold text-slate-700 text-sm bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    {ledgerData.projects?.find(p => p.id === currentProjectId)?.name || '日常'}
                </div>
                <div className="flex gap-1 -mr-2">
                    <button onClick={handleScanClick} disabled={isScanning} className={`p-2 rounded-full ${isScanning ? 'bg-blue-100 text-blue-600 animate-pulse' : 'text-blue-500 hover:bg-blue-50'}`}>
                        {isScanning ? <RefreshCw className="animate-spin" size={20}/> : <Camera size={20}/>}
                    </button>
                    <button onClick={() => setIsAiModalOpen(true)} className={`p-2 rounded-full ${isAiProcessing ? 'bg-purple-100 text-purple-600' : 'text-purple-400 hover:bg-purple-50'}`}>
                        {isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20}/>}
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                    {['TWD', 'JPY', 'THB'].map(c => (
                        <button key={c} onClick={() => setCurrency(c)} className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${currency === c ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-400'}`}>{c}</button>
                    ))}
                </div>
                <div className="flex-1 bg-gray-100 border border-gray-200 rounded-lg flex items-center px-3 py-1.5 text-slate-600 relative">
                    <Calendar size={14} className="mr-2 opacity-50"/>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-transparent text-xs font-bold w-full outline-none z-10 text-gray-700"/>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain pb-32">
            
            {/* Core Input */}
            <div className="px-4 py-6 bg-white mb-3 shadow-sm border-b border-gray-100">
                <div className="flex justify-center mb-6">
                    <button onClick={handleAmountClick} className={`text-5xl font-bold tracking-tight flex items-center transition-all ${localAmount ? 'text-gray-900' : 'text-gray-300'} ${activeOverlay === 'amount' ? 'scale-105' : ''}`}>
                        <span className="text-2xl mr-2 text-gray-300 font-medium">$</span>
                        {localAmount || '0'}
                        {activeOverlay === 'amount' && <div className="w-[3px] h-10 bg-rose-500 animate-cursor-blink ml-1 rounded-full"></div>}
                    </button>
                </div>

                <div className="flex gap-3 mb-4">
                    <button onClick={handleCategoryTriggerClick} className={`flex-none w-[35%] flex items-center gap-2 p-3 rounded-2xl border transition-all ${activeOverlay === 'category' ? 'bg-rose-50 border-rose-200 ring-2 ring-rose-100' : 'bg-gray-50 border-gray-100'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-colors ${selectedCategory ? 'bg-rose-500 text-white' : 'bg-white text-rose-500'}`}>
                            <CatIcon size={18} />
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                            <div className="text-[10px] text-gray-400">分類</div>
                            <div className="font-bold text-gray-700 text-sm truncate">{selectedCategory?.name}</div>
                        </div>
                        <ChevronDown size={14} className="text-gray-400 shrink-0"/>
                    </button>

                    <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 flex items-center px-4 focus-within:border-rose-200 focus-within:ring-2 focus-within:ring-rose-50 transition-all">
                        <input ref={noteInputRef} type="text" value={note} onChange={(e) => setNote(e.target.value)} onFocus={handleNoteFocus} placeholder="寫點備註..." className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 font-medium"/>
                    </div>
                </div>

                {recentNotes.length > 0 && (
                     <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {recentNotes.map((n, idx) => (
                            <button key={idx} onClick={() => setNote(n)} className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 text-gray-500 text-xs rounded-xl border border-gray-100 active:scale-95 transition-transform whitespace-nowrap font-medium hover:bg-rose-50 hover:text-rose-500 hover:border-rose-100">
                                <Tag size={10}/> {n}
                            </button>
                        ))}
                    </div>
                 )}
            </div>

            {/* Logic Module */}
            <div className="px-4">
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-5">
                    
                    {/* 分攤模式 (Dynamic Text) */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                                <Users size={16} />
                            </div>
                            <span className="text-sm font-bold">分攤模式</span>
                        </div>
                        <div className="relative w-40">
                            <select 
                                value={splitType} 
                                onChange={(e) => setSplitType(e.target.value)} 
                                className="w-full appearance-none bg-gray-50 text-xs font-bold text-gray-700 py-2 pl-3 pr-8 rounded-xl outline-none border border-gray-100 focus:border-blue-200 text-right"
                            >
                                <option value="even">平均分攤</option>
                                <option value="multi_payer">混合出資</option>
                                <option value="host_all">{getLabelForRole('host')}</option>
                                <option value="guest_all">{getLabelForRole('guest')}</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ChevronDown size={14}/>
                            </div>
                        </div>
                    </div>
                    
                    {/* 混合出資輸入 (Multi-Payer) */}
                    {splitType === 'multi_payer' && (
                        <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 animate-fade-in">
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <AlertCircle size={12} className="text-rose-500"/>
                                <p className="text-[10px] text-rose-500 font-bold text-center">
                                    輸入雙方「當下實際支付」的金額
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 max-w-[4rem] truncate">{hostName}</span>
                                    <input type="number" value={customSplitHost} onChange={(e) => handleCustomSplitChange('host', e.target.value)} onFocus={handleNoteFocus} className="w-full py-2 pl-16 pr-2 bg-white rounded-lg text-sm text-right font-bold outline-none border border-gray-200 focus:border-blue-300"/>
                                </div>
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 max-w-[4rem] truncate">{guestName}</span>
                                    <input type="number" value={customSplitGuest} onChange={(e) => handleCustomSplitChange('guest', e.target.value)} onFocus={handleNoteFocus} disabled={!guestId} placeholder={!guestId ? "N/A" : ""} className="w-full py-2 pl-16 pr-2 bg-white rounded-lg text-sm text-right font-bold outline-none border border-gray-200 focus:border-blue-300 disabled:bg-gray-100"/>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* 付款人 (Always visible for non-mixed to drive the Private/Advance logic) */}
                    {splitType !== 'multi_payer' && (
                        <>
                            <div className="h-[1px] bg-gray-50 w-full"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500 flex-1 min-w-0">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0">
                                        <User size={16} />
                                    </div>
                                    <span className="text-sm font-bold shrink-0">付款人</span>
                                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 ml-auto">
                                        {Object.keys(ledgerData.users || {}).map(uid => (
                                            <button 
                                                key={uid} 
                                                onClick={() => setPayer(uid)}
                                                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${payer === uid ? 'bg-gray-900 text-white border-gray-900 shadow-sm' : 'bg-white text-gray-400 border-gray-200'}`}
                                            >
                                                {ledgerData.users[uid].name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    
                    {/* 固定週期 */}
                    <div>
                         <button onClick={() => setIsSubscription(!isSubscription)} className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${isSubscription ? 'bg-rose-50 border-rose-200' : 'bg-white border-gray-100'}`}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0"><Repeat size={16} /></div>
                                <span className={`text-sm font-bold ${isSubscription ? 'text-rose-600' : 'text-gray-500'}`}>設為固定支出 (訂閱/分期)</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border ${isSubscription ? 'bg-rose-500 border-rose-500' : 'bg-transparent border-gray-300'}`}></div>
                        </button>
                        {isSubscription && (
                            <div className="flex items-center gap-2 mt-3 pl-2 animate-fade-in justify-end">
                                <span className="text-xs text-gray-400 font-bold">每</span>
                                <select value={subCycle} onChange={(e) => setSubCycle(e.target.value)} className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-lg outline-none font-bold"><option value="monthly">月</option><option value="weekly">週</option></select>
                                <input type="number" placeholder="日" value={subPayDay} onChange={(e) => setSubPayDay(e.target.value)} onFocus={handleNoteFocus} className="w-12 bg-gray-100 text-gray-700 p-1 rounded-lg text-xs text-center font-bold outline-none"/>
                                <span className="text-xs text-gray-400 font-bold">號扣款</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+1rem)] z-30">
            <button 
                onClick={addTransaction}
                disabled={!localAmount || parseFloat(localAmount) <= 0 || isSubmittingTransaction}
                className="w-full bg-gray-900 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:shadow-none"
            >
                {isSubmittingTransaction ? <RefreshCw className="animate-spin"/> : <Check size={24} />}
                {activeOverlay === 'category' ? '完成記帳' : '下一步'}
            </button>
        </div>

        {/* Overlays (Unchanged) */}
        {activeOverlay === 'amount' && (
            <div className="absolute bottom-0 left-0 right-0 bg-gray-50 rounded-t-3xl z-50 animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
                <div className="flex justify-center pt-2 pb-1"><div className="w-10 h-1 bg-gray-300 rounded-full"></div></div>
                <div className="grid grid-cols-4 gap-3 p-4">
                    {renderKey('7')} {renderKey('8')} {renderKey('9')} {renderKey('+', 'op')}
                    {renderKey('4')} {renderKey('5')} {renderKey('6')} {renderKey('-', 'op')}
                    {renderKey('1')} {renderKey('2')} {renderKey('3')} {renderKey('×', 'op')}
                    {renderKey('0')} {renderKey('.')} {renderKey('DONE', 'action', 'col-span-1')} {renderKey('÷', 'op')}
                </div>
                <div className="px-4 pb-2 flex justify-end">
                     <button onClick={() => handleKeyPress('DEL')} className="flex items-center gap-2 text-gray-400 font-bold px-4 py-2 rounded-lg active:bg-gray-200"><Delete size={18}/> 刪除</button>
                </div>
            </div>
        )}

        {activeOverlay === 'category' && (
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[70vh]">
                 <div className="flex justify-center pt-3 pb-4 shrink-0"><div className="w-10 h-1 bg-gray-200 rounded-full"></div></div>
                 <div className="px-6 mb-2 shrink-0"><h3 className="text-lg font-bold text-gray-800">選擇分類</h3></div>
                 
                 <div className="flex-1 overflow-y-auto p-4 pt-0">
                     <div className="grid grid-cols-4 gap-4 pb-[env(safe-area-inset-bottom)]">
                        {filteredCategories.map(cat => {
                            const Icon = getIconComponent(cat.icon);
                            const isSelected = selectedCategory?.id === cat.id;
                            return (
                                <button key={cat.id} onClick={() => handleCategorySelect(cat)} className="flex flex-col items-center gap-2 group p-1">
                                    <div className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all shrink-0 ${isSelected ? 'bg-rose-500 text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-500 border border-gray-100 group-active:scale-95'}`}>
                                        <Icon size={24} />
                                    </div>
                                    <span className={`text-xs font-bold ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>{cat.name}</span>
                                </button>
                            )
                        })}
                     </div>
                 </div>
            </div>
        )}

        {/* AI Modal (Unchanged) */}
        {isAiModalOpen && (
            <div className="absolute inset-0 z-[60] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-fade-in">
                <div className="flex justify-between items-center mb-6"><h3 className="text-xl font-bold text-gray-800">AI 智慧輸入</h3><button onClick={() => { setIsAiModalOpen(false); }} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button></div>
                <div className="flex-1 flex flex-col gap-4">
                    <textarea value={aiModalInput} onChange={(e) => setAiModalInput(e.target.value)} placeholder="例如：午餐吃拉麵 250元..." className="w-full h-40 p-4 bg-gray-50 rounded-2xl text-lg outline-none resize-none border border-gray-200 focus:border-purple-500 transition-colors"/>
                    <div className="flex justify-center gap-4 mt-auto mb-8"><button onClick={toggleVoiceRecording} className={`p-6 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500 scale-110 shadow-red-200' : 'bg-purple-50 text-purple-600 shadow-purple-200'} shadow-lg`}>{isRecording ? <StopCircle size={32} /> : <Mic size={32} />}</button></div>
                    <button onClick={handleAiModalSubmit} disabled={!aiModalInput} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg mb-4">開始分析</button>
                </div>
            </div>
        )}
      </div>
    );
}