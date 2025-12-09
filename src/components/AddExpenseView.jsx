import React from 'react';
import { X, Camera, RefreshCw, Sparkles, StopCircle, Mic, CheckCircle2, Check } from 'lucide-react';
import { getIconComponent } from '../utils/helpers';
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
  currency, // New
  setCurrency, // New
  amount,
  setAmount,
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
    const currentCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories; 
    const filteredCategories = currentCats.filter(cat => selectedCategoryIds.includes(cat.id)); 
    const recentNotes = [];
    if (ledgerData.transactions) {
        const notes = ledgerData.transactions.filter(t => t.category.id === selectedCategory.id).map(t => t.note).filter(n => n);
        const uniqueNotes = [...new Set(notes)];
        recentNotes.push(...uniqueNotes.slice(0, 10));
    }
    
    // Get Partner Name
    const otherUserId = Object.keys(ledgerData.users).find(uid => uid !== user.uid);
    const partnerName = otherUserId ? (ledgerData.users[otherUserId].name || '對方') : '對方';
    // Get Host & Guest Names
    const hostUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
    const guestUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
    const hostName = hostUid ? (ledgerData.users[hostUid].name || 'Host') : 'Host';
    const guestName = guestUid ? (ledgerData.users[guestUid].name || 'Guest') : 'Guest';

    return (
      <div className="h-full flex flex-col pt-[calc(env(safe-area-inset-top)+2rem)] bg-white relative">
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

        <div className="px-4 flex justify-between items-center mb-4">
            <button onClick={() => setView('dashboard')} className="p-2 bg-gray-100 rounded-full"><X size={20} className="text-gray-600"/></button>
            <div className="flex-1 flex justify-center"><div className="bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full text-sm flex items-center gap-2">{ledgerData.projects?.find(p => p.id === currentProjectId)?.name}</div></div>
            <div className="flex gap-2"><button onClick={() => fileInputRef.current?.click()} className="p-2 bg-blue-50 text-blue-600 rounded-full"><Camera size={20} /></button><button onClick={() => setIsAiModalOpen(true)} className={`p-2 rounded-full ${isAiProcessing ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>{isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20}/>}</button></div>
        </div>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => { handleImageUpload(e); setIsAiModalOpen(true); }} />
        
        {/* Amount Input & Currency Toggle */}
        <div className="px-6 py-2 text-center flex flex-col items-center relative">
            <div className="absolute top-0 right-6">
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg outline-none"
                />
            </div>

            {/* Currency Toggle */}
            <div className="flex gap-2 mb-2 p-1 bg-gray-100 rounded-lg">
                {['TWD', 'JPY', 'THB'].map(c => (
                    <button 
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${currency === c ? 'bg-white shadow-sm text-gray-800' : 'text-gray-400'}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="0" 
                className="w-full text-6xl font-bold text-gray-800 text-center outline-none placeholder-gray-200 bg-transparent" 
                inputMode="decimal"
            />
            {/* Payer Toggle */}
            <div className="flex gap-2 mt-4">
                <button 
                    onClick={() => setPayer(user.uid)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${payer === user.uid ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}
                >
                    我付的
                </button>
                {otherUserId && (
                    <button 
                        onClick={() => setPayer(otherUserId)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${payer === otherUserId ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}
                    >
                        {partnerName} 付的
                    </button>
                )}
            </div>
        </div>
        
        <div className="mx-4 bg-gray-50 p-4 rounded-xl shadow-sm mb-2 border border-gray-100 mt-4"><input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder={`輸入備註 (例如: ${selectedCategory.name})...`} className="w-full outline-none text-gray-700 bg-transparent"/></div>
        {recentNotes.length > 0 && (<div className="mx-4 mb-4 flex flex-wrap gap-2">{recentNotes.map((n, idx) => (<button key={idx} onClick={() => setNote(n)} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg hover:bg-gray-200 transition-colors">{n}</button>))}</div>)}
        <div className="flex-1 bg-gray-50 rounded-t-3xl p-6 overflow-y-auto pb-40">
            <div className="grid grid-cols-4 gap-4 mb-6">{filteredCategories.map(cat => { const CatIcon = getIconComponent(cat.icon); return (<button key={cat.id} onClick={() => setSelectedCategory(cat)} className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${selectedCategory.id === cat.id ? 'bg-white shadow-md scale-105 ring-2 ring-rose-200' : 'hover:bg-gray-100'}`}><div className={`text-2xl ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-400'}`}><CatIcon size={28} /></div><span className={`text-xs font-medium ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-500'}`}>{cat.name}</span></button>); })}</div>
            <div className="bg-white p-4 rounded-xl shadow-sm mb-20 space-y-4">
                <div className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-600">分攤方式</span><select value={splitType} onChange={(e) => setSplitType(e.target.value)} className="text-sm bg-gray-100 p-1 px-2 rounded-lg outline-none"><option value="even">均攤 (50/50)</option><option value="self">只有我</option><option value="partner">只有{partnerName}</option><option value="custom">自定義</option></select></div>
                    {splitType === 'custom' && (<div className="flex gap-2 mt-2"><div className="w-1/2"><label className="text-xs text-gray-400 block mb-1">{hostName} 先付</label><input type="number" value={customSplitHost} onChange={(e) => handleCustomSplitChange('host', e.target.value)} className={`w-full p-2 bg-gray-50 border rounded-lg text-sm text-center ${parseFloat(customSplitHost) + parseFloat(customSplitGuest) !== parseFloat(amount) ? 'border-red-300 bg-red-50' : ''}`}/></div><div className="w-1/2"><label className="text-xs text-gray-400 block mb-1">{guestName} 先付</label><input type="number" value={customSplitGuest} onChange={(e) => handleCustomSplitChange('guest', e.target.value)} className={`w-full p-2 bg-gray-50 border rounded-lg text-sm text-center ${parseFloat(customSplitHost) + parseFloat(customSplitGuest) !== parseFloat(amount) ? 'border-red-300 bg-red-50' : ''}`}/></div></div>)}
                </div>
                <div className="flex justify-between items-center"><div className="flex items-center gap-2 text-sm font-medium text-gray-600"><RefreshCw size={16} /><span>固定支出</span></div><button onClick={() => setIsSubscription(!isSubscription)} className={`w-12 h-6 rounded-full transition-colors ${isSubscription ? 'bg-rose-500' : 'bg-gray-200'} relative`}><div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${isSubscription ? 'left-7' : 'left-1'}`}></div></button></div>
                {isSubscription && (<div className="pt-2 space-y-3"><div className="flex gap-2"><select value={subCycle} onChange={(e) => setSubCycle(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm"><option value="monthly">每月</option><option value="weekly">每週</option></select><input type="number" placeholder="日 (1-31)" value={subPayDay} onChange={(e) => setSubPayDay(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm text-center"/></div></div>)}
            </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+1rem)]"><button onClick={addTransaction} disabled={!amount || isSubmittingTransaction} className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors ${amount && !isSubmittingTransaction ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>{isSubmittingTransaction ? (<><RefreshCw className="animate-spin" size={20}/> 處理中...</>) : (<><Check size={20}/> 完成記帳</>)}</button></div>
      </div>
    );
}