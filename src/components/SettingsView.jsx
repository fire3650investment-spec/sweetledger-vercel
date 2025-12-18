import React, { useState } from 'react';
import { 
  Users, Wrench, User, Heart, Copy, FileText, Download, 
  AlertTriangle, LogOut, X, RefreshCw, ArrowLeftRight, Check 
} from 'lucide-react';
import { getIconComponent, renderAvatar } from '../utils/helpers';
import { DEFAULT_CATEGORIES, COLORS, AVAILABLE_ICONS, CHARACTERS } from '../utils/constants';

export default function SettingsView({
  ledgerData,
  user,
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
  handleReorderCategories // [New] 接收排序處理函式
}) {
    if (!ledgerData) return null;
    const currentCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const users = ledgerData.users || {};
    
    // [Sort Logic] 本地排序狀態
    const [isSorting, setIsSorting] = useState(false);
    const [selectedSortId, setSelectedSortId] = useState(null);

    // Get Current Project Rates
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const rates = currentProject?.rates || { JPY: 0.23, THB: 1 };

    // [Sort Handler] 插入邏輯 (Insertion Sort)
    const handleCategoryClick = (clickedCat, index) => {
        if (!isSorting) return; 

        // 1. 選取來源 (Source)
        if (!selectedSortId) {
            setSelectedSortId(clickedCat.id);
            return;
        }

        // 2. 取消選取 (點自己)
        if (selectedSortId === clickedCat.id) {
            setSelectedSortId(null);
            return;
        }

        // 3. 執行搬移 (Target)
        const sourceIndex = currentCategories.findIndex(c => c.id === selectedSortId);
        const targetIndex = index; // 目標位置
        
        if (sourceIndex === -1) return;

        const newCats = [...currentCategories];
        const [movedItem] = newCats.splice(sourceIndex, 1); // 移除來源
        
        // 插入到目標位置 (原位置的元素會往後擠)
        newCats.splice(targetIndex, 0, movedItem);
        
        handleReorderCategories(newCats);
        setSelectedSortId(null); // 重置選取狀態
    };

    // 編輯分類模式 (全螢幕)
    if (isEditingCategory) {
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingCategoryData.id ? '編輯分類' : '新增分類'}</h2>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        value={editingCategoryData.name} 
                        onChange={(e) => setEditingCategoryData({...editingCategoryData, name: e.target.value})}
                        placeholder="分類名稱"
                        className="w-full p-4 bg-gray-50 rounded-xl outline-none"
                    />
                    <div className="grid grid-cols-5 gap-2">
                        {AVAILABLE_ICONS.map(icon => {
                            const IconCmp = getIconComponent(icon);
                            return (
                                <button key={icon} onClick={() => setEditingCategoryData({...editingCategoryData, icon})} className={`p-3 rounded-xl flex justify-center ${editingCategoryData.icon === icon ? 'bg-gray-200' : 'bg-gray-50'}`}>
                                    <IconCmp size={20} />
                                </button>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                         {COLORS.map(c => (
                             <button key={c.name} onClick={() => setEditingCategoryData({...editingCategoryData, color: c.class, hex: c.hex})} className={`w-8 h-8 rounded-full shadow-sm ${editingCategoryData.hex === c.hex ? 'ring-2 ring-gray-900 ring-offset-2' : 'border-2 border-white'}`} style={{backgroundColor: c.hex}}></button>
                         ))}
                    </div>
                    <button onClick={handleSaveCategory} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">儲存</button>
                    <button onClick={() => setIsEditingCategory(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">取消</button>
                </div>
            </div>
        )
    }

    // 主設定頁面
    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 bg-gray-50 min-h-screen">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">帳本設定</h2>
         
         {/* 1. Subscription Management */}
         <button 
            onClick={() => setView('subscriptions')}
            className="w-full bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center justify-between group active:scale-[0.98] transition-all"
         >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                    <RefreshCw size={20} />
                </div>
                <div className="text-left">
                    <h3 className="font-bold text-gray-800">固定支出管理</h3>
                    <p className="text-xs text-gray-400">查看所有的自動扣款項目</p>
                </div>
            </div>
            <div className="text-gray-300 group-hover:text-rose-500 transition-colors">➜</div>
         </button>

         {/* 2. Member List & Avatar */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><Users size={18} /> 帳本成員</h3>
            <div className="flex gap-4">
                {Object.values(users).map((u, idx) => {
                    if (!u) return null;
                    return (
                        <div key={idx} className="flex flex-col items-center">
                            <button onClick={() => { if(u.name === myNickname) setIsAvatarModalOpen(true); }} className="relative group">
                                 {renderAvatar(u.avatar)}
                                 {u.name === myNickname && <div className="absolute bottom-0 right-0 bg-gray-900 text-white rounded-full p-1 border-2 border-white"><Wrench size={10}/></div>}
                            </button>
                            <span className="text-xs font-bold text-gray-600 mt-1">{u.name || 'Unknown'}</span>
                        </div>
                    );
                })}
            </div>
         </div>
         
         {/* Avatar Picker Modal */}
         {isAvatarModalOpen && (
            <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">選擇您的頭像</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {Object.entries(CHARACTERS).map(([key, char]) => {
                            const Icon = getIconComponent(char.icon);
                            return (
                                <button key={key} onClick={() => handleAvatarSelect(key)} className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${tempAvatar === key ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-200' : 'bg-gray-50 border-transparent hover:border-rose-200'}`}>
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 shadow-sm"><Icon size={24}/></div>
                                    <span className="text-sm font-bold text-gray-600">{char.name}</span>
                                </button>
                            )
                        })}
                    </div>
                    <button onClick={confirmAvatarUpdate} disabled={!tempAvatar} className={`w-full py-3 rounded-xl font-bold mb-2 transition-colors ${tempAvatar ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-gray-200 text-gray-400'}`}>確認更換</button>
                    <button onClick={() => setIsAvatarModalOpen(false)} className="w-full bg-white text-gray-500 py-3 rounded-xl font-bold border border-gray-200">取消</button>
                </div>
            </div>
         )}
         
         {/* 3. Nickname Setting */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><User size={18} /> 我的暱稱</h3>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={myNickname}
                    onChange={(e) => setMyNickname(e.target.value)}
                    placeholder="請輸入您的暱稱"
                    className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                />
                <button onClick={updateNickname} className="bg-gray-900 text-white px-4 rounded-lg font-bold">儲存</button>
            </div>
         </div>

         {/* 4. Invite Code Section */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Heart size={18} className="text-rose-500" /> 帳本邀請碼
            </h3>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex flex-col"><span className="text-xs text-gray-400 mb-1">您的專屬代碼</span><span className="font-mono text-2xl font-bold text-gray-800 tracking-wider">{ledgerCode}</span></div>
                <button onClick={() => { navigator.clipboard.writeText(ledgerCode); alert("邀請碼已複製！"); }} className="p-3 bg-white border border-gray-200 rounded-full shadow-sm active:scale-95 text-gray-600"><Copy size={20} /></button>
            </div>
         </div>

         {/* 5. Currency Settings (Project Scoped) */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-1">匯率設定</h3>
            <p className="text-xs text-gray-400 mb-3">當前專案：{currentProject?.name}</p>
            
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 w-16 text-right">JPY</span>
                    <input 
                        type="number" 
                        defaultValue={rates.JPY} 
                        onBlur={(e) => updateLedgerCurrency('JPY', e.target.value)} 
                        className="flex-1 bg-gray-100 rounded-lg p-2 text-center" 
                        step="0.001"
                        placeholder="0.23"
                    />
                    <span className="text-sm text-gray-500">TWD</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 w-16 text-right">THB</span>
                    <input 
                        type="number" 
                        defaultValue={rates.THB} 
                        onBlur={(e) => updateLedgerCurrency('THB', e.target.value)} 
                        className="flex-1 bg-gray-100 rounded-lg p-2 text-center" 
                        step="0.001"
                        placeholder="1.0"
                    />
                    <span className="text-sm text-gray-500">TWD</span>
                </div>
            </div>
         </div>
         
         {/* 6. Category Management (With Sort) */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6 transition-all">
             <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-gray-700">分類管理</h3>
                 <div className="flex gap-2">
                    {/* 排序按鈕 */}
                    <button 
                        onClick={() => { setIsSorting(!isSorting); setSelectedSortId(null); }} 
                        className={`text-xs px-3 py-1 rounded-full flex items-center gap-1 transition-colors ${isSorting ? 'bg-rose-100 text-rose-600' : 'bg-gray-100 text-gray-600'}`}
                    >
                        {isSorting ? <Check size={12}/> : <ArrowLeftRight size={12}/>}
                        {isSorting ? '完成' : '排序'}
                    </button>
                    {/* 新增按鈕 (排序時隱藏) */}
                    {!isSorting && (
                        <button onClick={() => { setIsEditingCategory(true); setEditingCategoryData({id:'', name:'', icon:'food', color: COLORS[0].class, hex: COLORS[0].hex}); }} className="text-xs bg-gray-900 text-white px-3 py-1 rounded-full">
                            新增
                        </button>
                    )}
                 </div>
             </div>
             
             <div className="grid grid-cols-4 gap-2">
                {currentCategories.map((cat, idx) => {
                   const CatIcon = getIconComponent(cat.icon);
                   const isSelected = selectedSortId === cat.id;
                   return (
                      <div key={cat.id} className="relative group">
                          <button 
                              onClick={() => handleCategoryClick(cat, idx)}
                              disabled={!isSorting} 
                              className={`w-full flex flex-col items-center gap-1 p-2 rounded-xl border transition-all duration-200
                                  ${isSorting ? 'cursor-pointer' : 'cursor-default'}
                                  ${isSelected ? 'border-rose-500 bg-rose-50 ring-2 ring-rose-200 scale-105 z-10' : 'border-gray-100 bg-white'}
                                  ${isSorting && !isSelected ? 'hover:border-gray-300' : ''}
                              `}
                          >
                              <div style={{color: isSelected ? '#e11d48' : cat.hex}}>
                                  <CatIcon size={20} className={isSorting && !isSelected ? 'animate-pulse-slow' : ''} />
                              </div>
                              <span className={`text-[10px] font-medium truncate w-full text-center ${isSelected ? 'text-rose-600 font-bold' : ''}`}>{cat.name}</span>
                          </button>
                          
                          {/* 刪除按鈕 (排序時隱藏) */}
                          {!isSorting && (
                              <button onClick={() => handleDeleteCategory(cat.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow-sm">
                                  <X size={10}/>
                              </button>
                          )}

                          {/* 排序視覺提示 */}
                          {isSorting && selectedSortId && !isSelected && (
                              <div className="absolute inset-0 bg-gray-900/5 rounded-xl opacity-0 hover:opacity-100 flex items-center justify-center pointer-events-none">
                                  <span className="text-[10px] font-bold text-gray-600 bg-white/80 px-2 py-1 rounded-full shadow-sm">插入</span>
                              </div>
                          )}
                      </div>
                   );
                })}
             </div>
             {isSorting && <p className="text-xs text-gray-400 mt-3 text-center animate-pulse">點選 A，再點選 B，即可將 A 插隊到 B 的位置</p>}
         </div>

         {/* 7. Export */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6"><h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><FileText size={18}/> 資料備份與還原</h3><div className="mb-4 border-b border-gray-100 pb-4"><button onClick={handleExport} className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50"><Download size={16}/> 下載 .csv</button></div></div>
         
         {/* 8. Fix Identity */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><Wrench size={18} /> 進階修復</h3>
            <p className="text-xs text-gray-400 mb-3">如果發現帳本內有重複的成員或「Host」帳號，請點擊下方按鈕進行合併。</p>
            <button onClick={handleFixIdentity} className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg font-medium text-sm hover:bg-gray-200">合併匿名 Host 帳號</button>
         </div>

         {/* 9. Reset Account */}
         <div className="bg-red-50 p-4 rounded-xl shadow-sm mb-6 border border-red-100">
             <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={18}/> 危險區域</h3>
             <button onClick={handleResetAccount} className="w-full bg-white text-red-600 border border-red-200 py-3 rounded-xl font-bold">重置所有帳務資料</button>
         </div>

         {/* 10. Logout */}
         <div className="mt-8 mb-4">
             <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 py-2">
                 <LogOut size={16} /> 登出 Google 帳號
             </button>
         </div>
      </div>
    );
}