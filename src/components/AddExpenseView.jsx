import React, { useState, useEffect, useRef } from 'react';
import { X, Camera, RefreshCw, Sparkles, StopCircle, Mic, CheckCircle2, Check, Delete, Calculator, Equal, Keyboard } from 'lucide-react';
import { getIconComponent, formatCurrency } from '../utils/helpers';
import { DEFAULT_CATEGORIES, INITIAL_LEDGER_STATE } from '../utils/constants';

export default function AddExpenseView({
  ledgerData,
  currentProjectId,
  user,
  showSuccessAnimation,
  isAiModalOpen,
  setIsAiModalOpen,
  aiModalInput,
  setAiModalInput,
  isRecording,
  toggleVoiceRecording,
  handleAiModalSubmit,
  selectedImage,
  isAiProcessing,
  setView,
  fileInputRef,
  handleImageUpload,
  date,
  setDate,
  currency, 
  setCurrency, 
  amount,       // Parent State
  setAmount,    // Parent State Setter
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
    
    // --- Local State for Calculator ---
    const [calcExpression, setCalcExpression] = useState('');
    // 預設為 true，確保進入時鍵盤是展開的
    const [isKeypadVisible, setIsKeypadVisible] = useState(true);

    // Initialize calcExpression from amount if exists (e.g. from AI)
    useEffect(() => {
        if (amount && amount !== calcExpression) {
            setCalcExpression(amount.toString());
        } else if (!amount) {
            setCalcExpression('');
        }
        // 強制進入時展開鍵盤
        setIsKeypadVisible(true);
    }, []); 

    const currentCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories; 
    const filteredCategories = currentCats.filter(cat => selectedCategoryIds.includes(cat.id)); 
    
    // Recent Notes Logic
    const recentNotes = [];
    if (ledgerData.transactions) {
        const notes = ledgerData.transactions
            .filter(t => t.category.id === selectedCategory.id && t.note)
            .map(t => t.note);
        const uniqueNotes = [...new Set(notes)];
        recentNotes.push(...uniqueNotes.slice(0, 5)); // Limit to 5
    }

    // --- Calculator Logic ---
    const handleKeyPress = (key) => {
        // Haptic Feedback (Android only, iOS ignored)
        if (navigator.vibrate) {
            try { navigator.vibrate(10); } catch(e) {}
        }

        if (key === 'AC') {
            setCalcExpression('');
            setAmount('');
            return;
        }

        if (key === 'DEL') {
            setCalcExpression(prev => prev.slice(0, -1));
            return;
        }

        if (key === '=' || key === 'DONE') {
            try {
                // Safe evaluation of simple math
                const safeExpr = calcExpression.replace(/×/g, '*').replace(/÷/g, '/');
                if (!/^[\d+\-*/.\s]+$/.test(safeExpr)) return;
                
                // eslint-disable-next-line no-new-func
                const result = new Function('return ' + safeExpr)();
                const finalVal = Math.round(result * 100) / 100;
                
                setCalcExpression(finalVal.toString());
                setAmount(finalVal.toString());
                
                // 按下 Done 後收起鍵盤，讓使用者確認畫面
                if (key === 'DONE') {
                    setIsKeypadVisible(false);
                }
            } catch (e) {
                // Error handling
            }
            return;
        }

        // Standard Keys
        const operators = ['+', '-', '×', '÷'];
        const lastChar = calcExpression.slice(-1);

        // Prevent double operators
        if (operators.includes(key)) {
            if (operators.includes(lastChar)) {
                setCalcExpression(prev => prev.slice(0, -1) + key);
                return;
            }
            if (!calcExpression) return; 
        }

        setCalcExpression(prev => prev + key);
    };

    // Auto-sync amount when expression is just a number
    useEffect(() => {
        if (/^[\d.]+$/.test(calcExpression)) {
            setAmount(calcExpression);
        }
    }, [calcExpression, setAmount]);

    // Render Helpers
    const renderKey = (label, type = 'num', span = 1) => (
        <button
            onClick={(e) => { e.stopPropagation(); handleKeyPress(label); }}
            className={`
                btn-press rounded-2xl text-xl font-bold flex items-center justify-center select-none
                ${span === 2 ? 'col-span-2' : ''}
                ${type === 'num' ? 'bg-white text-gray-800 btn-num' : ''}
                ${type === 'op' ? 'bg-rose-50 text-rose-600 btn-op' : ''}
                ${type === 'ac' ? 'bg-gray-200 text-gray-600 text-lg btn-num' : ''}
            `}
            style={{ height: '56px' }} 
        >
            {label === 'DEL' ? <Delete size={22}/> : label}
            {label === 'DONE' ? (calcExpression.match(/[+\-×÷]/) ? <Equal size={28}/> : <Check size={28}/>) : null}
        </button>
    );

    const isMathPending = /[+\-×÷]/.test(calcExpression) && !/[+\-×÷]$/.test(calcExpression);

    return (
      <div className="h-full flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] bg-white relative">
        {showSuccessAnimation && (
            <div className="absolute inset-0 z-[100] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                <div className="scale-150 text-green-500 animate-bounce"><CheckCircle2 size={80} strokeWidth={3} /></div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">記帳完成！</h2>
            </div>
        )}
        
        {/* AI Modal */}
        {isAiModalOpen && (
            <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-in fade-in duration-200">
                <div className="flex justify-between items-center mb-6"><h3 className="text-xl font-bold text-gray-800">AI 智慧輸入</h3><button onClick={() => { setIsAiModalOpen(false); }} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button></div>
                <div className="flex-1 flex flex-col gap-4">
                    <textarea value={aiModalInput} onChange={(e) => setAiModalInput(e.target.value)} placeholder="請說話或輸入... 例如：「昨天晚餐吃壽司花了1200元」" className="w-full h-40 p-4 bg-gray-50 rounded-2xl text-lg outline-none resize-none border border-gray-200 focus:border-purple-500 transition-colors"/>
                    {isRecording && (<div className="flex items-center justify-center gap-2 text-purple-600 animate-pulse"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span className="text-sm font-medium">正在聆聽...</span></div>)}
                    <div className="flex justify-center gap-4 mt-auto mb-8"><button onClick={toggleVoiceRecording} className={`p-6 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500 scale-110 shadow-red-200' : 'bg-purple-50 text-purple-600 shadow-purple-200'} shadow-lg`}>{isRecording ? <StopCircle size={32} /> : <Mic size={32} />}</button></div>
                    <button onClick={handleAiModalSubmit} disabled={!aiModalInput && !selectedImage} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg mb-4">開始分析</button>
                </div>
            </div>
        )}

        {/* --- Header --- */}
        <div className="px-4 flex justify-between items-center mb-2 shrink-0">
            <button onClick={() => setView('dashboard')} className="p-2 bg-gray-100 rounded-full active:bg-gray-200"><X size={20} className="text-gray-600"/></button>
            <div className="flex-1 flex justify-center">
                 <div className="bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full text-xs flex items-center gap-2">
                    {ledgerData.projects?.find(p => p.id === currentProjectId)?.name}
                 </div>
            </div>
            <div className="flex gap-2"><button onClick={() => fileInputRef.current?.click()} className="p-2 bg-blue-50 text-blue-600 rounded-full active:bg-blue-100"><Camera size={20} /></button><button onClick={() => setIsAiModalOpen(true)} className={`p-2 rounded-full active:scale-95 ${isAiProcessing ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>{isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20}/>}</button></div>
        </div>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => { handleImageUpload(e); setIsAiModalOpen(true); }} />
        
        {/* --- Amount Display (Calculator Screen) --- */}
        <div className="px-4 py-2 shrink-0">
             {/* Controls Row */}
             <div className="flex justify-between items-center mb-2">
                <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                    {['TWD', 'JPY', 'THB'].map(c => (
                        <button key={c} onClick={() => setCurrency(c)} className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${currency === c ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400'}`}>{c}</button>
                    ))}
                </div>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-lg outline-none font-medium"/>
            </div>

            {/* Main Display (Click to open keypad) */}
            <div 
                onClick={() => setIsKeypadVisible(true)}
                className={`w-full h-20 rounded-2xl flex items-center justify-end px-4 overflow-hidden relative transition-all duration-200 ${isKeypadVisible ? 'bg-gray-50 ring-2 ring-rose-100' : 'bg-white border border-transparent'}`}
            >
                <span className={`text-5xl font-bold tracking-tight ${!calcExpression ? 'text-gray-300' : 'text-gray-800'}`}>
                    {calcExpression || '0'}
                </span>
                {/* Simulated Cursor */}
                {isKeypadVisible && <div className="w-0.5 h-10 bg-rose-500 animate-pulse ml-1 rounded-full"></div>}
            </div>

            {/* Payer Toggle */}
             <div className="flex gap-2 mt-2 justify-end">
                <button onClick={() => setPayer(user.uid)} className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${payer === user.uid ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}>我付</button>
                {Object.keys(ledgerData.users).find(uid => uid !== user.uid) && (
                    <button 
                        onClick={() => setPayer(Object.keys(ledgerData.users).find(uid => uid !== user.uid))}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${payer !== user.uid ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-400'}`}
                    >
                        {ledgerData.users[Object.keys(ledgerData.users).find(uid => uid !== user.uid)]?.name} 付
                    </button>
                )}
            </div>
        </div>
        
        {/* --- Scrollable Content Area --- */}
        {/* pb-80 ensures content is not hidden behind the fixed keypad */}
        <div className={`flex-1 overflow-y-auto px-4 pb-4 ${isKeypadVisible ? 'pb-[45vh]' : 'pb-24'} transition-all duration-300`}>
             {/* Note Input (Focus closes keypad) */}
             <div className="bg-gray-50 p-3 rounded-xl mb-3 flex items-center gap-2 border border-gray-100">
                <input 
                    type="text" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                    onFocus={() => setIsKeypadVisible(false)} // Close keypad on focus
                    placeholder={`備註: ${selectedCategory.name}...`} 
                    className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                />
             </div>
             {recentNotes.length > 0 && (<div className="mb-4 flex flex-wrap gap-2">{recentNotes.map((n, idx) => (<button key={idx} onClick={() => setNote(n)} className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] rounded-lg border border-gray-200 active:bg-gray-200">{n}</button>))}</div>)}

             {/* Categories Grid */}
             <div className="grid grid-cols-4 gap-3 mb-6">
                {filteredCategories.map(cat => { 
                    const CatIcon = getIconComponent(cat.icon); 
                    const isSelected = selectedCategory.id === cat.id;
                    return (
                        <button key={cat.id} onClick={() => setSelectedCategory(cat)} className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all btn-press ${isSelected ? 'bg-rose-50 ring-1 ring-rose-200' : 'bg-white border border-gray-50'}`}>
                            <div className={`text-xl ${isSelected ? 'text-rose-600' : 'text-gray-400'}`}><CatIcon size={24} /></div>
                            <span className={`text-[10px] font-medium ${isSelected ? 'text-gray-800' : 'text-gray-400'}`}>{cat.name}</span>
                        </button>
                    ); 
                })}
             </div>

             {/* Advanced Options */}
             <div className="bg-white border border-gray-100 p-3 rounded-xl space-y-3 mb-6">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-500">分攤</span>
                    <select value={splitType} onChange={(e) => setSplitType(e.target.value)} className="text-xs bg-gray-100 p-1 rounded outline-none">
                        <option value="even">均攤</option>
                        <option value="self">自己</option>
                        <option value="partner">對方</option>
                        <option value="custom">自訂</option>
                    </select>
                </div>
                {splitType === 'custom' && (
                     <div className="flex gap-2">
                        <input type="number" placeholder="Host" value={customSplitHost} onChange={(e) => handleCustomSplitChange('host', e.target.value)} onFocus={() => setIsKeypadVisible(false)} className="w-1/2 p-2 bg-gray-50 rounded text-xs text-center"/>
                        <input type="number" placeholder="Guest" value={customSplitGuest} onChange={(e) => handleCustomSplitChange('guest', e.target.value)} onFocus={() => setIsKeypadVisible(false)} className="w-1/2 p-2 bg-gray-50 rounded text-xs text-center"/>
                     </div>
                )}
                <div className="flex justify-between items-center border-t border-gray-50 pt-2">
                    <div className="flex items-center gap-2"><RefreshCw size={14} className="text-gray-400"/> <span className="text-xs font-bold text-gray-500">固定支出</span></div>
                    <button onClick={() => setIsSubscription(!isSubscription)} className={`w-8 h-4 rounded-full relative transition-colors ${isSubscription ? 'bg-rose-500' : 'bg-gray-200'} relative`}><div className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-all ${isSubscription ? 'left-4.5' : 'left-0.5'}`}></div></button>
                </div>
                {isSubscription && (
                     <div className="flex gap-2">
                        <select value={subCycle} onChange={(e) => setSubCycle(e.target.value)} className="bg-gray-50 p-1 rounded text-xs"><option value="monthly">每月</option><option value="weekly">每週</option></select>
                        <input type="number" placeholder="日" value={subPayDay} onChange={(e) => setSubPayDay(e.target.value)} onFocus={() => setIsKeypadVisible(false)} className="w-12 bg-gray-50 p-1 rounded text-xs text-center"/>
                     </div>
                )}
             </div>

             {/* Show "Open Keypad" button if keypad is hidden but we might want it back */}
             {!isKeypadVisible && (
                 <button onClick={() => setIsKeypadVisible(true)} className="w-full py-3 text-gray-400 text-xs font-bold flex items-center justify-center gap-2 bg-gray-50 rounded-xl mb-8">
                     <Keyboard size={16}/> 開啟計算機
                 </button>
             )}
        </div>

        {/* --- Custom Calculator Keypad (Fixed Bottom Overlay) --- */}
        <div 
            className={`fixed bottom-0 left-0 w-full bg-gray-100 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 ease-out ${isKeypadVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}
        >
            {/* Submit Action Bar (Above Keypad) */}
            <div className="flex justify-between items-center mb-3 px-1 h-8">
                <div className="text-xs text-gray-400 font-medium">
                    {isSubscription ? `將設為 ${subCycle==='monthly'?'每月':'每週'} 固定支出` : ' '}
                </div>
                {/* Submit Button */}
                {!isMathPending && amount && parseFloat(amount) > 0 && (
                    <button 
                        onClick={addTransaction} 
                        disabled={isSubmittingTransaction}
                        className="bg-gray-900 text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg btn-press"
                    >
                        {isSubmittingTransaction ? <RefreshCw className="animate-spin" size={14}/> : <Check size={14}/>}
                        確認記帳
                    </button>
                )}
            </div>

            <div className="grid grid-cols-4 gap-3">
                {renderKey('AC', 'ac')}
                {renderKey('DEL', 'ac')}
                {renderKey('÷', 'op')}
                {renderKey('×', 'op')}

                {renderKey('7')}
                {renderKey('8')}
                {renderKey('9')}
                {renderKey('-', 'op')}

                {renderKey('4')}
                {renderKey('5')}
                {renderKey('6')}
                {renderKey('+', 'op')}

                {renderKey('1')}
                {renderKey('2')}
                {renderKey('3')}
                
                {/* Equal / Done Button */}
                <button
                    onClick={(e) => { e.stopPropagation(); handleKeyPress(isMathPending ? '=' : 'DONE'); }}
                    className={`row-span-2 rounded-2xl flex items-center justify-center shadow-md btn-press ${isMathPending ? 'bg-rose-500 text-white' : 'bg-gray-900 text-white'}`}
                >
                    {isMathPending ? <Equal size={32}/> : <Check size={32}/>}
                </button>

                {renderKey('0', 'num', 2)}
                {renderKey('.')}
            </div>
        </div>
      </div>
    );
}