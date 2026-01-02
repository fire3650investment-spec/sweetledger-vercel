// src/components/AddExpenseView.jsx
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  X, RefreshCw, Sparkles, StopCircle, Mic, Check, 
  Calendar, User, Users, Repeat, ChevronDown, Camera, AlertCircle, Image, Lock,
  Globe, Search, CheckCircle 
} from 'lucide-react';
// [Batch 5] Import fetchExchangeRate
import { getIconComponent, parseReceiptWithGemini, getCategoryStyle, callGemini, getLocalISODate, fetchExchangeRate } from '../utils/helpers';
import { DEFAULT_CATEGORIES, INITIAL_LEDGER_STATE, CURRENCY_OPTIONS, DEFAULT_FAVORITE_CURRENCIES } from '../utils/constants';
import ScanReceiptModal from './ScanReceiptModal';

import CustomKeypad from './add-expense/CustomKeypad';
import CategorySelector from './add-expense/CategorySelector';
import SmartTagBar from './add-expense/SmartTagBar';

export default function AddExpenseView({
  ledgerData,
  user,
  currentProjectId,
  setView,
  addTransaction, 
  isSubmittingTransaction,
  updateProjectRates 
}) {
    if (!ledgerData) return null; 

    // State
    const [localAmount, setLocalAmount] = useState(''); 
    const [note, setNote] = useState('');
    const [date, setDate] = useState(getLocalISODate());
    const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0]);
    // [Note] Currency defaults to TWD unless updated by user in localStorage
    const [currency, setCurrency] = useState(() => localStorage.getItem('sweet_last_currency') || 'TWD');
    const [payer, setPayer] = useState(user?.uid || '');
    
    // Split Logic
    const [splitType, setSplitType] = useState('even');
    const [customSplitHost, setCustomSplitHost] = useState('');
    const [customSplitGuest, setCustomSplitGuest] = useState('');
    
    const [isSubscription, setIsSubscription] = useState(false);
    const [subCycle, setSubCycle] = useState('monthly');
    const [subPayDay, setSubPayDay] = useState('');

    const [isAiModalOpen, setIsAiModalOpen] = useState(false);
    const [aiModalInput, setAiModalInput] = useState('');
    const [isAiProcessing, setIsAiProcessing] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    
    const [activeOverlay, setActiveOverlay] = useState('amount');
    const [isScanning, setIsScanning] = useState(false);
    const [isScanModalOpen, setIsScanModalOpen] = useState(false);
    const [scannedItems, setScannedItems] = useState([]);
    const [localSubmitting, setLocalSubmitting] = useState(false);

    // [Batch 5] Rate Loading State
    const [isRateLoading, setIsRateLoading] = useState(false);

    // Currency Sheet State
    const [isCurrencySheetOpen, setIsCurrencySheetOpen] = useState(false);
    const [currencySearch, setCurrencySearch] = useState('');

    const noteInputRef = useRef(null);
    const cameraInputRef = useRef(null);
    const fileInputRef = useRef(null);
    const recognitionRef = useRef(null);

    const currentCats = useMemo(() => ledgerData.customCategories || DEFAULT_CATEGORIES, [ledgerData.customCategories]);
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const isPrivateProject = currentProject?.type === 'private';
    
    const mySettings = ledgerData.users?.[user?.uid] || {};
    const myFavorites = mySettings.favoriteCurrencies || DEFAULT_FAVORITE_CURRENCIES;

    const filteredCategories = useMemo(() => {
        const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories; 
        return currentCats.filter(cat => selectedCategoryIds.includes(cat.id));
    }, [currentCats, ledgerData.settings?.selectedCategories]);

    const users = ledgerData.users || {};
    const hostId = Object.keys(users).find(uid => users[uid].role === 'host');
    const guestId = Object.keys(users).find(uid => users[uid].role === 'guest');
    const hostName = hostId ? (users[hostId]?.name || '戶長') : '戶長';
    const guestName = guestId ? (users[guestId]?.name || '成員') : '成員';

    const recentNotes = useMemo(() => {
        if (!ledgerData.transactions || !selectedCategory) return [];
        const recentTxs = ledgerData.transactions.slice(-50).reverse();
        const notes = recentTxs
            .filter(t => t.category.id === selectedCategory.id && t.note)
            .map(t => t.note);
        return [...new Set(notes)].slice(0, 5);
    }, [ledgerData.transactions, selectedCategory]);

    useEffect(() => {
        localStorage.setItem('sweet_last_currency', currency);
    }, [currency]);

    useEffect(() => {
        if (!payer && user) setPayer(user.uid);
    }, [user, payer]);

    useEffect(() => {
        if (isPrivateProject) {
            setSplitType('self');
            if (user) setPayer(user.uid);
        } else {
            if (splitType === 'self') setSplitType('even');
        }
    }, [isPrivateProject, user]);

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
        setTimeout(() => { noteInputRef.current?.focus(); }, 100);
    };

    const handleKeyPress = useCallback((key) => {
        if (navigator.vibrate) try { navigator.vibrate(10); } catch(e) {}
        const operators = ['+', '-', '×', '÷'];
        if (key === 'AC') { setLocalAmount(''); return; }
        if (key === 'DEL') { setLocalAmount(prev => prev.slice(0, -1)); return; }
        if (key === 'DONE') { handleKeypadSubmit(); return; }
        if (key === '.') {
            setLocalAmount(prev => {
                const lastChar = prev.slice(-1);
                if (!prev || operators.includes(lastChar)) return prev + '0.';
                if (prev.includes('.') && !operators.some(op => prev.lastIndexOf(op) > prev.lastIndexOf('.'))) return prev;
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
    }, [localAmount]);

    const handleAiModalSubmit = async () => {
        if (!aiModalInput) return;
        setIsAiModalOpen(false);
        setIsAiProcessing(true);
        let prompt = `你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
       目前的日期是：${new Date().toLocaleString('zh-TW')}。
       可用的分類 ID: ${currentCats.map(c=>c.id).join(', ')}
       請解析：1. 金額 (amount) 2. 類別 ID (categoryId) 3. 備註 (note) 4. 幣別 (currency, 預設 TWD)
       只回傳 JSON。`;

        if (isPrivateProject) {
            prompt += `\n[重要指令] 此為「私人帳本」模式。請將所有交易視為使用者個人支出，不需要考慮分帳、代墊或AA制邏輯。`;
        }

        if (aiModalInput) prompt += `\n使用者文字: "${aiModalInput}"`;
   
        const result = await callGemini(prompt, null); 
        setIsAiProcessing(false);
        setAiModalInput('');
   
        if (!result) { alert("AI 無法解析"); return; }
        try { 
            const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim(); 
            const parsed = JSON.parse(cleanJson); 
            if (parsed.amount) {
                setLocalAmount(parsed.amount.toString());
            }
            if (parsed.note) setNote(parsed.note); 
            if (parsed.currency) setCurrency(parsed.currency); 
            if (parsed.categoryId) { 
                const cat = currentCats.find(c => c.id === parsed.categoryId); 
                if (cat) setSelectedCategory(cat); 
            } 
        } catch (e) { 
            console.error("AI Parse Error", e); 
            alert("AI 解析失敗");
        }
    };

    const toggleVoiceRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
        } else {
            if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
                alert("您的瀏覽器不支援語音辨識");
                return;
            }
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'zh-TW';
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.onresult = (event) => {
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
                }
                if (finalTranscript) setAiModalInput(prev => prev + finalTranscript);
            };
            recognition.onerror = (event) => { console.error("Speech error", event.error); setIsRecording(false); };
            recognitionRef.current = recognition;
            recognition.start();
            setIsRecording(true);
        }
    };

    const handleSubmit = async () => {
        if (!localAmount || parseFloat(localAmount) <= 0) return;
        if (localSubmitting || isSubmittingTransaction) return; 

        setLocalSubmitting(true);
        
        const amountFloat = parseFloat(localAmount);
        let customSplitData = null;
        
        if (splitType === 'custom' || splitType === 'multi_payer') {
            const hostAmt = parseFloat(customSplitHost) || 0;
            const guestAmt = parseFloat(customSplitGuest) || 0;
            
            if (Math.abs((hostAmt + guestAmt) - amountFloat) > 0.1) {
                alert(`雙方金額總和 (${hostAmt+guestAmt}) 必須等於支出總額 (${amountFloat})！`);
                setLocalSubmitting(false);
                return;
            }
            customSplitData = {};
            if(hostId) customSplitData[hostId] = hostAmt;
            if(guestId) customSplitData[guestId] = guestAmt;
        } 

        try {
            await addTransaction({
                amount: amountFloat,
                currency,
                category: selectedCategory,
                payer: payer || user.uid,
                splitType, 
                customSplit: customSplitData,
                note: note || selectedCategory.name,
                projectId: currentProjectId,
                date,
                isSubscription,
                subCycle,
                subPayDay
            });
            setView('dashboard');
        } catch (e) {
            console.error("Add Tx Error:", e);
            alert(`記帳失敗: ${e.message}`);
        } finally {
            setLocalSubmitting(false);
        }
    };
    
    const handleAmountClick = () => { setActiveOverlay('amount'); noteInputRef.current?.blur(); };
    const handleCategoryTriggerClick = () => { setActiveOverlay('category'); noteInputRef.current?.blur(); };
    const handleNoteFocus = () => { setActiveOverlay('none'); };
    
    const handleCustomSplitChange = (field, value) => {
        const total = parseFloat(localAmount) || 0;
        const val = parseFloat(value) || 0;
        if (field === 'host') {
            setCustomSplitHost(value);
            const guestCalc = total - val;
            setCustomSplitGuest(guestCalc >= 0 ? guestCalc.toString() : '0');
        } else {
            setCustomSplitGuest(value);
            const hostCalc = total - val;
            setCustomSplitHost(hostCalc >= 0 ? hostCalc.toString() : '0');
        }
    };

    const handleImageUpload = async (e) => { 
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = ''; 
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
    };

    const handleCameraClick = () => { cameraInputRef.current?.click(); };
    const handleAlbumClick = () => { fileInputRef.current?.click(); };
    const handleScanConfirm = (result) => {
        const { amount: rAmount, note: rNote, splitType: rSplit, customSplit: rCustom } = result;
        setLocalAmount(rAmount.toString());
        if (rNote) setNote(rNote);
        setSplitType(rSplit);
        if (rCustom) {
            if (hostId && rCustom[hostId]) setCustomSplitHost(rCustom[hostId].toString());
            if (guestId && rCustom[guestId]) setCustomSplitGuest(rCustom[guestId].toString());
        }
        if (rAmount > 0) setActiveOverlay('category');
    };

    const isMathPending = /[+\-×÷]/.test(localAmount) && !/[+\-×÷]$/.test(localAmount);
    const selectedCatStyle = getCategoryStyle(selectedCategory, 'input');
    const CatIcon = getIconComponent(selectedCategory?.icon || 'food');
    
    const getLabelForRole = (targetRole) => { 
        const payerRole = users[payer]?.role;
        if (targetRole === 'host') return payerRole === 'host' ? `私人 (${hostName})` : (payerRole === 'guest' ? `代墊 (幫${hostName}付)` : `${hostName} 全額`);
        else return payerRole === 'guest' ? `私人 (${guestName})` : (payerRole === 'host' ? `代墊 (幫${guestName}付)` : `${guestName} 全額`);
    };

    // Currency Filter Logic
    const filteredCurrencies = currencySearch 
        ? CURRENCY_OPTIONS.filter(c => c.code.includes(currencySearch.toUpperCase()) || c.name.includes(currencySearch))
        : CURRENCY_OPTIONS;

    // [Batch 5 New] Select Currency with Auto API Fetch
    const selectCurrency = async (code) => {
        setCurrency(code);
        setIsCurrencySheetOpen(false);
        setCurrencySearch('');

        // API Strategy: Snapshot (First time only)
        if (code === 'TWD') return;

        const projectRates = currentProject?.rates || {};
        // 若該專案尚未設定此幣別匯率，則自動抓取
        if (!projectRates[code]) {
            setIsRateLoading(true);
            const rate = await fetchExchangeRate(code);
            if (rate) {
                // Call parent updater to save to Firestore
                if (updateProjectRates) {
                    await updateProjectRates(currentProjectId, code, rate);
                }
            }
            setIsRateLoading(false);
        }
    };

    return (
      <div className="fixed inset-0 z-[50] flex flex-col h-[100dvh] bg-gray-50 overflow-hidden"> 
        <input type="file" ref={cameraInputRef} accept="image/*" capture="environment" className="hidden" onChange={handleImageUpload}/>
        <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleImageUpload}/>
        
        <ScanReceiptModal 
            isOpen={isScanModalOpen} 
            onClose={() => setIsScanModalOpen(false)} 
            onConfirm={handleScanConfirm} 
            initialItems={scannedItems} 
            currency={currency} 
            users={users}
        />

        {/* HUD */}
        <div className="bg-white px-4 pb-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] z-20 shrink-0 shadow-sm border-b border-gray-100 relative">
            <div className="flex justify-between items-center mb-3">
                <button onClick={() => setView('dashboard')} className="p-2 -ml-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors"><X size={24}/></button>
                <div className={`font-bold text-sm px-3 py-1 rounded-full border flex items-center gap-2 ${isPrivateProject ? 'bg-gray-800 text-white border-gray-700' : 'text-slate-700 bg-gray-100 border-gray-200'}`}>
                    {isPrivateProject && <Lock size={12}/>}
                    {currentProject?.name || '日常'}
                </div>
                <div className="flex gap-1 -mr-2">
                    <button onClick={handleAlbumClick} disabled={isScanning} className={`p-2 rounded-full ${isScanning ? 'opacity-30' : 'text-slate-400 hover:bg-slate-50'}`}>
                        <Image size={20}/>
                    </button>
                    <button onClick={handleCameraClick} disabled={isScanning} className={`p-2 rounded-full ${isScanning ? 'bg-blue-100 text-blue-600 animate-pulse' : 'text-blue-500 hover:bg-blue-50'}`}>
                        {isScanning ? <RefreshCw className="animate-spin" size={20}/> : <Camera size={20}/>}
                    </button>
                    <button onClick={() => setIsAiModalOpen(true)} className={`p-2 rounded-full ${isAiProcessing ? 'bg-purple-100 text-purple-600' : 'text-purple-400 hover:bg-purple-50'}`}>
                        {isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20}/>}
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* [Batch 5 Updated] Currency Trigger with Loading */}
                <button 
                    onClick={() => setIsCurrencySheetOpen(true)}
                    className="flex items-center gap-1.5 bg-gray-100 rounded-lg px-3 py-1.5 border border-gray-200 active:bg-gray-200 transition-colors"
                >
                    <span className="text-sm font-bold text-gray-800">{currency}</span>
                    {isRateLoading ? (
                        <RefreshCw className="animate-spin w-3 h-3 text-rose-500 ml-1"/>
                    ) : (
                        <ChevronDown size={14} className="text-gray-400"/>
                    )}
                </button>
                
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
                        <span className="text-2xl mr-2 text-gray-300 font-medium">{CURRENCY_OPTIONS.find(c=>c.code===currency)?.symbol || '$'}</span>
                        {localAmount || '0'}
                        {activeOverlay === 'amount' && <div className="w-[3px] h-10 bg-rose-500 animate-cursor-blink ml-1 rounded-full"></div>}
                    </button>
                </div>

                <div className="flex gap-3 mb-4">
                    <button onClick={handleCategoryTriggerClick} className={`flex-none w-[35%] flex items-center gap-2 p-3 rounded-2xl border transition-all ${activeOverlay === 'category' ? 'bg-rose-50 border-rose-200 ring-2 ring-rose-100' : 'bg-gray-50 border-gray-100'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm shrink-0 transition-colors ${selectedCategory ? selectedCatStyle.activeClass : 'bg-white text-rose-500'}`}>
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
                
                <SmartTagBar tags={recentNotes} onSelect={setNote} />
            </div>

            {/* Logic Module */}
            <div className="px-4">
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-5">
                     {isPrivateProject ? (
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"><Lock size={16} /></div>
                                <span className="text-sm font-bold">私人記帳模式</span>
                            </div>
                            <span className="text-xs font-bold text-gray-400 bg-white px-2 py-1 rounded border border-gray-100">不進行分攤</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500"><Users size={16} /></div>
                                <span className="text-sm font-bold">分攤模式</span>
                            </div>
                            <div className="relative w-40">
                                <select value={splitType} onChange={(e) => setSplitType(e.target.value)} className="w-full appearance-none bg-gray-50 text-xs font-bold text-gray-700 py-2 pl-3 pr-8 rounded-xl outline-none border border-gray-100 focus:border-blue-200 text-right">
                                    <option value="even">平均分攤</option>
                                    <option value="multi_payer">混合出資</option>
                                    <option value="self">{getLabelForRole('host')}</option>
                                    <option value="partner">{getLabelForRole('guest')}</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"><ChevronDown size={14}/></div>
                            </div>
                        </div>
                    )}
                    
                    {splitType === 'multi_payer' && !isPrivateProject && (
                        <div className="bg-rose-50 p-3 rounded-xl border border-rose-100 animate-fade-in">
                            <div className="flex items-center justify-center gap-1 mb-2">
                                <AlertCircle size={12} className="text-rose-500"/>
                                <p className="text-[10px] text-rose-500 font-bold text-center">輸入雙方「當下實際支付」的金額</p>
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
                    
                    {splitType !== 'multi_payer' && !isPrivateProject && (
                        <>
                            <div className="h-[1px] bg-gray-50 w-full"></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-500 flex-1 min-w-0">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0"><User size={16} /></div>
                                    <span className="text-sm font-bold shrink-0">付款人</span>
                                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-1 ml-auto">
                                        {Object.keys(ledgerData.users || {}).map(uid => (
                                            <button key={uid} onClick={() => setPayer(uid)} className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${payer === uid ? 'bg-gray-900 text-white border-gray-900 shadow-sm' : 'bg-white text-gray-400 border-gray-200'}`}>
                                                {ledgerData.users[uid].name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

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
                onClick={handleSubmit}
                disabled={!localAmount || parseFloat(localAmount) <= 0 || localSubmitting}
                className="w-full bg-gray-900 text-white text-lg font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:shadow-none"
            >
                {localSubmitting ? <RefreshCw className="animate-spin"/> : <Check size={24} />}
                {activeOverlay === 'category' ? '完成記帳' : '下一步'}
            </button>
        </div>

        {/* Overlays */}
        {activeOverlay === 'amount' && <CustomKeypad onKeyPress={handleKeyPress} isMathPending={isMathPending} />}
        {activeOverlay === 'category' && <CategorySelector categories={filteredCategories} selectedCategory={selectedCategory} onSelect={handleCategorySelect} />}

        {/* AI Modal */}
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

        {/* [Batch 2] Currency Sheet */}
        {isCurrencySheetOpen && (
            <div className="absolute inset-0 z-[70] flex flex-col justify-end">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsCurrencySheetOpen(false)}/>
                <div className="bg-white rounded-t-3xl p-6 relative z-10 max-h-[80vh] flex flex-col animate-slide-up">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">選擇幣別</h3>
                        <button onClick={() => setIsCurrencySheetOpen(false)} className="p-2 bg-gray-50 rounded-full"><X size={20}/></button>
                    </div>

                    <div className="relative mb-4">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input 
                            type="text" 
                            placeholder="搜尋貨幣 (例如: USD)" 
                            value={currencySearch}
                            onChange={(e) => setCurrencySearch(e.target.value)}
                            className="w-full bg-gray-50 pl-10 pr-4 py-3 rounded-xl font-bold text-sm outline-none border border-transparent focus:bg-white focus:border-rose-200 transition-all"
                        />
                    </div>

                    <div className="overflow-y-auto space-y-6">
                        {!currencySearch && (
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">常用貨幣</h4>
                                <div className="grid grid-cols-3 gap-3">
                                    {['TWD', ...myFavorites.filter(c => c !== 'TWD')].map(code => {
                                        const opt = CURRENCY_OPTIONS.find(o => o.code === code);
                                        if (!opt) return null;
                                        return (
                                            <button 
                                                key={code}
                                                onClick={() => selectCurrency(code)}
                                                className={`flex flex-col items-center justify-center gap-1 p-4 rounded-2xl border transition-all ${currency === code ? 'bg-rose-50 border-rose-500 text-rose-600 ring-1 ring-rose-500' : 'bg-white border-gray-100 hover:border-gray-300'}`}
                                            >
                                                <span className="text-2xl">{opt.flag}</span>
                                                <span className="font-bold text-sm">{code}</span>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">所有貨幣</h4>
                            <div className="space-y-2">
                                {filteredCurrencies.map(opt => (
                                    <button 
                                        key={opt.code} 
                                        onClick={() => selectCurrency(opt.code)}
                                        className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left group"
                                    >
                                        <span className="text-2xl w-8 text-center">{opt.flag}</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-gray-800">{opt.code}</div>
                                            <div className="text-xs text-gray-400">{opt.name}</div>
                                        </div>
                                        {currency === opt.code && <CheckCircle size={18} className="text-rose-500"/>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    );
}