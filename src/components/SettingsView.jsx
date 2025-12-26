// src/components/SettingsView.jsx
import React, { useState, useEffect } from 'react';
import { 
  User, LogOut, RotateCcw, Download, X, Check, Trash2, 
  Plus, ChevronRight, ArrowLeftRight, Pencil, Palette, LayoutGrid
} from 'lucide-react';
import { getIconComponent } from '../utils/helpers';
import { DEFAULT_CATEGORIES, COLORS, ICONS } from '../utils/constants';

export default function SettingsView({ 
  user, 
  ledgerData, 
  setView, 
  isEditingCategory, 
  setIsEditingCategory, 
  editingCategoryData, 
  setEditingCategoryData, 
  handleSaveCategory, 
  handleDeleteCategory, 
  handleExport, 
  handleResetAccount, 
  handleLogout,
  isAvatarModalOpen,
  setIsAvatarModalOpen,
  myNickname,
  setMyNickname,
  updateNickname,
  tempAvatar,
  handleAvatarSelect,
  confirmAvatarUpdate,
  handleFixIdentity,
  ledgerCode,
  updateLedgerCurrency,
  currentProjectId,
  handleReorderCategories // 需確保 App.jsx 有傳遞此函式
}) {
  // [Fix 4] 強制重置捲動位置
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Local State ---
  const [isReorderMode, setIsReorderMode] = useState(false);
  const [activeSortId, setActiveSortId] = useState(null); // 用於「點擊傳送」排序

  // 準備分類資料
  const categories = ledgerData?.customCategories || DEFAULT_CATEGORIES;
  const currentProject = ledgerData?.projects?.find(p => p.id === currentProjectId);

  // --- Handlers ---

  // [Fix 5] Optimistic UI: 立即關閉視窗，背景執行儲存
  const onSaveCategoryWrapper = () => {
      setIsEditingCategory(false); // 1. 介面立即反應
      handleSaveCategory();        // 2. 背景執行 API
  };

  const onDeleteCategoryWrapper = (id) => {
      setIsEditingCategory(false);
      handleDeleteCategory(id);
  };

  // [Fix 3] 點擊傳送排序邏輯
  const handleSortClick = (targetId) => {
      if (!activeSortId) {
          // 步驟 1: 拾取 (Pick Up)
          setActiveSortId(targetId);
      } else {
          // 步驟 2: 放置 (Drop / Teleport)
          if (activeSortId === targetId) {
              setActiveSortId(null); // 取消選取
              return;
          }

          const oldIndex = categories.findIndex(c => c.id === activeSortId);
          const newIndex = categories.findIndex(c => c.id === targetId);
          
          if (oldIndex === -1 || newIndex === -1) return;

          const newCategories = [...categories];
          const [movedItem] = newCategories.splice(oldIndex, 1);
          newCategories.splice(newIndex, 0, movedItem);

          // 立即更新 UI (透過 App.jsx 的 handleReorderCategories 更新 Firestore)
          handleReorderCategories(newCategories);
          setActiveSortId(null);
      }
  };

  const openNewCategoryModal = () => {
      setEditingCategoryData({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex });
      setIsEditingCategory(true);
  };

  const openEditCategoryModal = (cat) => {
      setEditingCategoryData(cat);
      setIsEditingCategory(true);
  };

  return (
    <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">設定</h1>
            <p className="text-gray-400 text-xs font-bold mt-1 tracking-wider uppercase">SETTINGS & PREFERENCES</p>
        </div>
        <div className="text-right">
            <p className="text-xs font-bold text-gray-300">帳本代碼</p>
            <p className="text-lg font-mono font-bold text-rose-500 tracking-widest">{ledgerCode}</p>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 rounded-full -mr-8 -mt-8 opacity-50"></div>
         <h2 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2"><User size={16}/> 個人檔案</h2>
         
         <div className="flex items-center gap-4">
            <button onClick={() => setIsAvatarModalOpen(true)} className="relative group">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl shadow-inner overflow-hidden border-2 border-white ring-2 ring-gray-100 group-active:scale-95 transition-transform">
                    {ledgerData?.users?.[user.uid]?.avatar === 'cat' ? '🐱' : 
                     ledgerData?.users?.[user.uid]?.avatar === 'dog' ? '🐶' : 
                     ledgerData?.users?.[user.uid]?.avatar === 'fox' ? '🦊' : 
                     ledgerData?.users?.[user.uid]?.avatar === 'rabbit' ? '🐰' : '👤'}
                </div>
                <div className="absolute bottom-0 right-0 bg-gray-900 text-white p-1 rounded-full border-2 border-white">
                    <Pencil size={10} />
                </div>
            </button>
            <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase">顯示名稱</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={myNickname} 
                        onChange={(e) => setMyNickname(e.target.value)} 
                        className="flex-1 bg-gray-50 border-b-2 border-gray-200 focus:border-rose-500 outline-none text-gray-800 font-bold py-1 px-2 transition-colors"
                    />
                    <button onClick={updateNickname} className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-lg active:scale-95 transition-transform">儲存</button>
                </div>
            </div>
         </div>
      </div>

      {/* [Feature] Category Management - Compact Grid */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
         <div className="flex justify-between items-center mb-4">
             <h2 className="text-sm font-bold text-gray-400 flex items-center gap-2"><LayoutGrid size={16}/> 分類管理</h2>
             <button 
                onClick={() => { setIsReorderMode(!isReorderMode); setActiveSortId(null); }}
                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${isReorderMode ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
             >
                <ArrowLeftRight size={12}/> {isReorderMode ? '完成排序' : '排序'}
             </button>
         </div>

         {/* [Fix 1] 5-Column Compact Grid */}
         <div className="grid grid-cols-5 gap-3">
            {categories.map((cat) => {
                const Icon = getIconComponent(cat.icon);
                const isSelected = activeSortId === cat.id;
                
                // Wiggle Animation Style for Reorder Mode
                const wiggleStyle = isReorderMode ? { animation: `wiggle 0.3s ease-in-out infinite ${Math.random() * 0.5}s` } : {};

                return (
                    <button 
                        key={cat.id} 
                        style={wiggleStyle}
                        onClick={() => isReorderMode ? handleSortClick(cat.id) : openEditCategoryModal(cat)}
                        className={`flex flex-col items-center gap-1 group relative transition-all duration-300 ${isSelected ? 'scale-110 z-10' : 'active:scale-95'}`}
                    >
                        <div 
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm
                                ${isSelected ? 'ring-4 ring-rose-300 shadow-xl' : ''}
                            `}
                            style={{ 
                                backgroundColor: isSelected ? '#fff' : cat.hex, 
                                color: isSelected ? cat.hex : '#fff' 
                            }}
                        >
                            <Icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 truncate w-full text-center">{cat.name}</span>
                        
                        {/* 排序時的提示標記 */}
                        {isReorderMode && isSelected && (
                            <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-bounce">
                                移動中
                            </div>
                        )}
                    </button>
                );
            })}

            {/* Add Button */}
            {!isReorderMode && (
                <button 
                    onClick={openNewCategoryModal}
                    className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
                >
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-rose-300 group-hover:text-rose-500 transition-colors">
                        <Plus size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">新增</span>
                </button>
            )}
         </div>
         
         {isReorderMode && (
             <p className="text-[10px] text-center text-gray-400 mt-4 bg-gray-50 py-2 rounded-lg animate-pulse">
                 💡 點擊一個分類，再點擊另一個分類即可交換位置
             </p>
         )}
      </div>

      {/* System Settings */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="p-4 border-b border-gray-50 flex justify-between items-center">
             <div className="flex items-center gap-3">
                 <div className="p-2 bg-blue-50 text-blue-500 rounded-xl"><RotateCcw size={18}/></div>
                 <span className="font-bold text-gray-700 text-sm">重置帳本</span>
             </div>
             <button onClick={handleResetAccount} className="text-xs font-bold text-red-500 px-3 py-1.5 bg-red-50 rounded-lg active:scale-95 transition-transform">執行</button>
         </div>
         
         <div className="p-4 border-b border-gray-50 flex justify-between items-center">
             <div className="flex items-center gap-3">
                 <div className="p-2 bg-green-50 text-green-500 rounded-xl"><Download size={18}/></div>
                 <span className="font-bold text-gray-700 text-sm">匯出 CSV</span>
             </div>
             <button onClick={handleExport} className="text-gray-400 hover:text-gray-600"><ChevronRight size={18}/></button>
         </div>

         <div className="p-4 flex justify-between items-center">
             <div className="flex items-center gap-3">
                 <div className="p-2 bg-gray-100 text-gray-500 rounded-xl"><LogOut size={18}/></div>
                 <span className="font-bold text-gray-700 text-sm">登出帳號</span>
             </div>
             <button onClick={handleLogout} className="text-xs font-bold text-gray-500 px-3 py-1.5 bg-gray-100 rounded-lg active:scale-95 transition-transform">登出</button>
         </div>
      </div>

      <div className="text-center mt-8 mb-4">
          <button onClick={handleFixIdentity} className="text-[10px] text-gray-300 hover:text-gray-400 underline">修復帳號權限 (Debug)</button>
          <p className="text-[10px] text-gray-300 mt-1">SweetLedger v1.3.0</p>
      </div>

      {/* Avatar Modal */}
      {isAvatarModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scale-up">
                <h3 className="text-center font-bold text-lg mb-6 text-gray-800">選擇你的頭像</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {['cat', 'dog', 'fox', 'rabbit'].map(key => (
                        <button key={key} onClick={() => handleAvatarSelect(key)} className={`h-24 rounded-2xl text-4xl flex items-center justify-center transition-all border-2 ${tempAvatar === key ? 'bg-rose-50 border-rose-500 scale-105 shadow-lg' : 'bg-gray-50 border-transparent grayscale hover:grayscale-0'}`}>
                            {key === 'cat' ? '🐱' : key === 'dog' ? '🐶' : key === 'fox' ? '🦊' : '🐰'}
                        </button>
                    ))}
                </div>
                <div className="flex gap-3">
                    <button onClick={() => setIsAvatarModalOpen(false)} className="flex-1 py-3 font-bold text-gray-500 bg-gray-100 rounded-xl">取消</button>
                    <button onClick={confirmAvatarUpdate} className="flex-1 py-3 font-bold text-white bg-gray-900 rounded-xl shadow-lg shadow-gray-200">確認</button>
                </div>
            </div>
        </div>
      )}

      {/* Category Editor Modal */}
      {isEditingCategory && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:px-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsEditingCategory(false)} />
            <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-slide-up">
                
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 rounded-t-3xl">
                    <h3 className="font-bold text-gray-800 text-lg">{editingCategoryData.id ? '編輯分類' : '新增分類'}</h3>
                    <button onClick={() => setIsEditingCategory(false)} className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 shadow-sm"><X size={20}/></button>
                </div>

                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Preview */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl transition-colors" style={{ backgroundColor: editingCategoryData.hex }}>
                                {React.createElement(getIconComponent(editingCategoryData.icon), { size: 36 })}
                            </div>
                            <span className="font-bold text-gray-800">{editingCategoryData.name || '分類名稱'}</span>
                        </div>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">名稱</label>
                        <input 
                            type="text" 
                            value={editingCategoryData.name} 
                            onChange={(e) => setEditingCategoryData({...editingCategoryData, name: e.target.value})} 
                            className="w-full bg-gray-50 text-gray-800 font-bold py-3 px-4 rounded-xl outline-none border-2 border-transparent focus:border-rose-500 transition-colors"
                            placeholder="輸入分類名稱..."
                        />
                    </div>

                    {/* Color Picker [Fix 2: Added p-1] */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2"><Palette size={12}/> 顏色</label>
                        <div className="flex gap-3 overflow-x-auto pb-2 p-1 no-scrollbar">
                            {COLORS.map(c => (
                                <button 
                                    key={c.hex} 
                                    onClick={() => setEditingCategoryData({...editingCategoryData, color: c.class, hex: c.hex})} 
                                    className={`w-10 h-10 rounded-full shrink-0 transition-transform ${editingCategoryData.hex === c.hex ? 'ring-4 ring-offset-2 ring-gray-200 scale-110' : 'hover:scale-105'}`}
                                    style={{ backgroundColor: c.hex }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Icon Picker */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2"><LayoutGrid size={12}/> 圖示</label>
                        <div className="grid grid-cols-5 gap-3 max-h-40 overflow-y-auto p-1">
                            {ICONS.map(iconName => {
                                const Icon = getIconComponent(iconName);
                                const isSelected = editingCategoryData.icon === iconName;
                                return (
                                    <button 
                                        key={iconName} 
                                        onClick={() => setEditingCategoryData({...editingCategoryData, icon: iconName})} 
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isSelected ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        <Icon size={20} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-100 flex gap-3 bg-white pb-[calc(env(safe-area-inset-bottom)+1rem)] rounded-b-3xl">
                    {editingCategoryData.id && (
                        <button onClick={() => onDeleteCategoryWrapper(editingCategoryData.id)} className="p-4 bg-gray-100 text-gray-500 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-colors">
                            <Trash2 size={20} />
                        </button>
                    )}
                    <button 
                        onClick={onSaveCategoryWrapper}
                        disabled={!editingCategoryData.name}
                        className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> 儲存變更
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Wiggle Animation Style */}
      <style>{`
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}