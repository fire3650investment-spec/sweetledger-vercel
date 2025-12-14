import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Calendar, Check, Delete, Mic, Image as ImageIcon, 
  Sparkles, Repeat, Users, User, Type, ArrowUp
} from 'lucide-react';
import { CATEGORIES, COLORS, DEFAULT_CATEGORIES } from '../utils/constants';

export default function AddExpenseView({
  ledgerData,
  user,
  currentProjectId,
  setView,
  // Date & Currency
  date, setDate,
  currency, setCurrency,
  // Amount & Note
  amount, setAmount,
  note, setNote,
  // Category
  selectedCategory, setSelectedCategory,
  // Split & Payer
  payer, setPayer,
  splitType, setSplitType,
  customSplitHost, setCustomSplitHost,
  customSplitGuest, setCustomSplitGuest,
  handleCustomSplitChange,
  // Subscription
  isSubscription, setIsSubscription,
  subCycle, setSubCycle,
  subPayDay, setSubPayDay,
  // Actions
  addTransaction,
  isSubmittingTransaction,
  // AI Props (保留介面但不干擾主流程)
  isAiModalOpen, setIsAiModalOpen,
  aiModalInput, setAiModalInput,
  isRecording, toggleVoiceRecording,
  handleAiModalSubmit, isAiProcessing,
  fileInputRef
}) {
  // --- Local State for UI UX ---
  const [isNoteFocused, setIsNoteFocused] = useState(false); // 專注模式狀態
  const noteInputRef = useRef(null);
  
  // 安全獲取分類列表
  const categories = ledgerData?.customCategories || DEFAULT_CATEGORIES;

  // 數字鍵盤邏輯
  const handleNumPad = (val) => {
    if (val === 'backspace') {
      setAmount(prev => prev.slice(0, -1));
    } else if (val === 'clear') {
        setAmount('');
    } else if (val === '.') {
      if (!amount.includes('.')) setAmount(prev => prev + '.');
    } else {
      // 限制長度避免溢出
      if (amount.length < 9) setAmount(prev => prev + val);
    }
  };

  // 處理送出
  const handleSubmit = async () => {
      if (!amount || parseFloat(amount) === 0) return;
      // 收起鍵盤 (如果是原生鍵盤)
      if (noteInputRef.current) noteInputRef.current.blur();
      setIsNoteFocused(false);
      
      await addTransaction();
  };

  // 渲染分類區 (5欄 x N行)
  const renderCategories = () => (
    <div className={`
        grid grid-cols-5 gap-2 p-3 overflow-y-auto overscroll-contain transition-all duration-300
        ${isNoteFocused ? 'h-0 opacity-0 overflow-hidden p-0 m-0' : 'max-h-[35vh] opacity-100'}
    `}>
      {categories.map((cat) => {
        const isSelected = selectedCategory?.id === cat.id;
        // 確保顏色存在，避免錯誤
        const colorClass = cat.color || 'bg-gray-100';
        const iconName = cat.icon || 'help-circle';
        
        return (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
            className="flex flex-col items-center justify-center gap-1 py-2 active:scale-95 transition-transform"
          >
            <div className={`
              w-10 h-10 rounded-2xl flex items-center justify-center text-xl shadow-sm transition-all duration-200
              ${isSelected 
                ? `bg-gray-900 text-white shadow-md scale-105 ring-2 ring-offset-1 ring-gray-900` 
                : 'bg-white border border-gray-100 text-gray-400 hover:border-gray-300'}
            `}>
              {/* 這裡可以使用圖示 mapping，目前先用 emoji 或簡單圖示替代 */}
               {/* 實際專案建議引入 Icon Component Mapping */}
               <span className={isSelected ? 'grayscale-0' : 'grayscale opacity-70'}>
                 {/* 簡單的 Icon 對應，若無對應則顯示首字 */}
                 {cat.icon === 'food' ? '🍔' : 
                  cat.icon === 'transport' ? '🚌' : 
                  cat.icon === 'shopping' ? '🛍️' : 
                  cat.icon === 'entertainment' ? '🎮' : 
                  cat.icon === 'house' ? '🏠' : 
                  cat.name ? cat.name[0] : '?'}
               </span>
            </div>
            <span className={`text-[10px] font-medium truncate w-full text-center ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
              {cat.name}
            </span>
          </button>
        );
      })}
      
      {/* 新增分類按鈕 (保留功能) */}
      <button 
        onClick={() => setView('settings')}
        className="flex flex-col items-center justify-center gap-1 py-2 opacity-50 hover:opacity-100"
      >
        <div className="w-10 h-10 rounded-2xl bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            <span className="text-lg">+</span>
        </div>
        <span className="text-[10px] text-gray-400">編輯</span>
      </button>
    </div>
  );

  // 渲染設定膠囊區 (付款人 / 分帳 / 固定)
  const renderCapsules = () => (
    <div className={`
        flex items-center gap-2 px-4 py-2 overflow-x-auto no-scrollbar transition-all duration-300
        ${isNoteFocused ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}
    `}>
        {/* 1. 付款人膠囊 */}
        <button 
            onClick={() => {
                const uids = Object.keys(ledgerData?.users || {});
                const nextIndex = (uids.indexOf(payer) + 1) % uids.length;
                setPayer(uids[nextIndex]);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 active:bg-gray-200 shrink-0"
        >
            <User size={12} />
            {ledgerData?.users?.[payer]?.name || '付款人'}
        </button>

        {/* 2. 分帳膠囊 */}
        <button 
            onClick={() => {
                const modes = ['even', 'self', 'partner', 'custom'];
                const next = modes[(modes.indexOf(splitType) + 1) % modes.length];
                setSplitType(next);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors ${splitType !== 'even' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
        >
            <Users size={12} />
            {splitType === 'even' ? '均分' : 
             splitType === 'self' ? '我全付' : 
             splitType === 'partner' ? '對方付' : '自訂'}
        </button>

        {/* 3. 固定支出膠囊 */}
        <button 
            onClick={() => setIsSubscription(!isSubscription)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors ${isSubscription ? 'bg-rose-100 text-rose-600' : 'bg-gray-100 text-gray-600'}`}
        >
            <Repeat size={12} />
            {isSubscription ? '固定支出' : '單次'}
        </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-white z-[50] flex flex-col h-[100dvh]">
      
      {/* --- 1. Top Bar: Navigation & Info --- */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50 bg-white shrink-0">
        <button 
            onClick={() => setView('dashboard')}
            className="p-2 -ml-2 text-gray-400 hover:text-gray-600 active:bg-gray-50 rounded-full"
        >
            <X size={24} />
        </button>
        
        <div className="flex gap-2">
            {/* 日期選擇 */}
            <div className="relative">
                <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full z-10"
                />
                <button className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600">
                    <Calendar size={12} />
                    {new Date(date).toLocaleDateString()}
                </button>
            </div>
            
            {/* 幣別切換 */}
            <button 
                onClick={() => setCurrency(currency === 'TWD' ? (ledgerData?.projects?.find(p=>p.id===currentProjectId)?.rates ? Object.keys(ledgerData.projects.find(p=>p.id===currentProjectId).rates).find(k=>k!=='TWD') : 'JPY') : 'TWD')}
                className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 min-w-[3rem]"
            >
                {currency || 'TWD'}
            </button>
        </div>
      </div>

      {/* --- 2. Categories (Scrollable) --- */}
      {renderCategories()}

      {/* --- 3. Capsules (Settings) --- */}
      {renderCapsules()}

      {/* --- Spacer to push input to bottom --- */}
      <div className="flex-1 min-h-0" onClick={() => setIsNoteFocused(false)} />

      {/* --- 4. Interaction Zone (Bottom) --- */}
      <div className={`
        bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 pb-[env(safe-area-inset-bottom)]
        ${isNoteFocused ? 'pb-0' : ''}
      `}>
        
        {/* Amount Display */}
        <div className="px-6 pt-4 pb-2 flex items-end justify-between">
            <div className="text-gray-400 text-sm font-medium mb-1">
                {selectedCategory?.name || '未分類'}
            </div>
            <div className={`font-mono font-bold text-gray-900 transition-all ${isNoteFocused ? 'text-3xl' : 'text-4xl'}`}>
                <span className="text-2xl mr-1 text-gray-300">$</span>
                {amount || '0'}
            </div>
        </div>

        {/* Note Input Row */}
        <div className="px-4 pb-4 flex items-center gap-3">
            <div className="flex-1 bg-gray-50 rounded-xl flex items-center px-3 py-3 border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
                <Type size={16} className="text-gray-400 mr-2" />
                <input
                    ref={noteInputRef}
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onFocus={() => setIsNoteFocused(true)}
                    // onBlur 在這裡不直接設為 false，因為可能是點擊右邊的送出鈕
                    placeholder="輸入備註..."
                    className="bg-transparent w-full text-base placeholder:text-gray-300 focus:outline-none text-gray-800"
                />
                {/* AI Button (Tiny) */}
                <button 
                    onClick={() => { setIsAiModalOpen(true); setIsNoteFocused(false); }}
                    className="p-1.5 bg-white rounded-lg shadow-sm text-rose-500 ml-1"
                >
                    <Sparkles size={14} />
                </button>
            </div>

            {/* Focus Mode: Submit Button */}
            {isNoteFocused && (
                <button 
                    onClick={handleSubmit}
                    className="bg-gray-900 text-white p-3 rounded-xl shadow-lg active:scale-95 transition-all animate-in slide-in-from-right-4 fade-in duration-200"
                >
                    <ArrowUp size={20} strokeWidth={3} />
                </button>
            )}
        </div>

        {/* --- 5. Custom Keypad (Hidden in Focus Mode) --- */}
        <div className={`
            grid grid-cols-4 gap-0.5 bg-gray-50 p-0.5 transition-all duration-300 ease-out origin-bottom
            ${isNoteFocused ? 'h-0 opacity-0 overflow-hidden' : 'h-[280px] opacity-100'}
        `}>
             {[1, 2, 3, 'backspace', 4, 5, 6, 'clear', 7, 8, 9, 'calendar', '.', 0, '00', 'submit'].map((key) => {
                 // Render Logic for Keys
                 let content = key;
                 let bgClass = "bg-white active:bg-gray-100";
                 let textClass = "text-2xl font-medium text-gray-700";
                 let onClick = () => handleNumPad(key);

                 if (key === 'backspace') {
                     content = <Delete size={24} />;
                     textClass = "text-gray-400";
                 } else if (key === 'clear') {
                     content = 'C';
                     textClass = "text-rose-500 font-bold";
                 } else if (key === 'calendar') {
                     // 特殊功能：切換到昨天/今天
                     const isToday = new Date().toDateString() === new Date(date).toDateString();
                     content = <span className="text-xs font-bold">{isToday ? '昨天' : '今天'}</span>;
                     textClass = "text-blue-500";
                     onClick = () => {
                         const d = new Date();
                         if (isToday) d.setDate(d.getDate() - 1);
                         setDate(d.toISOString().slice(0, 10));
                     };
                 } else if (key === 'submit') {
                     content = isSubmittingTransaction ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : <Check size={32} />;
                     bgClass = "bg-gray-900 active:bg-gray-800 row-span-2"; // 如果網格允許，這裡可以拉長
                     textClass = "text-white";
                     onClick = handleSubmit;
                 }

                 return (
                     <button
                        key={key}
                        onClick={onClick}
                        disabled={isSubmittingTransaction && key === 'submit'}
                        className={`
                            relative flex items-center justify-center h-full w-full rounded-sm transition-colors
                            ${bgClass} ${textClass}
                        `}
                     >
                         {content}
                     </button>
                 )
             })}
        </div>

      </div>
    </div>
  );
}