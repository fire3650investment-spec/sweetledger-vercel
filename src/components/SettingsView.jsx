// src/components/SettingsView.jsx
import React, { useState } from 'react';
import { 
  User, Wrench, Globe, Grid, Download, Trash2, LogOut, 
  ChevronRight, Copy, Check, Edit2, Camera, Sparkles, Plus
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
  handleReorderCategories
}) {
    if (!ledgerData) return null;
    const currentCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const users = ledgerData.users || {};
    
    // [Sort Logic] 本地排序狀態
    const [copied, setCopied] = useState(false);

    // Get Current Project Rates
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const rates = currentProject?.rates || { JPY: 0.23, THB: 1 };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(ledgerCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // --- Sub-View: Category Editor (Redesigned) ---
    if (isEditingCategory) {
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 bg-gray-50 min-h-screen">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">分類管理</h2>
                    <button onClick={() => setIsEditingCategory(false)} className="text-gray-500 font-bold bg-white px-4 py-2 rounded-xl shadow-sm active:scale-95 transition-transform">完成</button>
                </div>
                
                {/* 1. 頂部編輯控制台 (Editor Card) */}
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-6 space-y-5 sticky top-4 z-10">
                    
                    {/* Preview & Name Input */}
                    <div className="flex gap-4 items-center">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 transition-colors shadow-sm ${editingCategoryData.color}`}>
                            {(() => { const Icon = getIconComponent(editingCategoryData.icon); return <Icon size={32} />; })()}
                        </div>
                        <div className="flex-1 space-y-1">
                            <label className="text-[10px] text-gray-400 font-bold uppercase tracking-wider pl-1">分類名稱</label>
                            <input 
                                type="text" 
                                value={editingCategoryData.name} 
                                onChange={(e) => setEditingCategoryData({...editingCategoryData, name: e.target.value})} 
                                placeholder="例如：早餐、交通..." 
                                className="w-full bg-gray-50 px-4 py-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder-gray-300"
                            />
                        </div>
                    </div>
                    
                    {/* Icon Selector (Fixed: Padding added to prevent clipping) */}
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider pl-1">圖示</p>
                        <div className="flex gap-3 overflow-x-auto py-2 px-1 -mx-1 no-scrollbar"> 
                            {AVAILABLE_ICONS.map(icon => {
                                const Icon = getIconComponent(icon);
                                const isSelected = editingCategoryData.icon === icon;
                                return (
                                    <button 
                                        key={icon} 
                                        onClick={() => setEditingCategoryData({...editingCategoryData, icon})} 
                                        className={`p-3 rounded-2xl shrink-0 transition-all duration-200 ${isSelected ? 'bg-gray-800 text-white scale-110 shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        <Icon size={20}/>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Color Selector (Fixed: Padding added) */}
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold mb-1 uppercase tracking-wider pl-1">顏色</p>
                        <div className="flex gap-3 overflow-x-auto py-2 px-1 -mx-1 no-scrollbar">
                            {COLORS.map(c => (
                                <button 
                                    key={c.hex} 
                                    onClick={() => setEditingCategoryData({...editingCategoryData, color: c.class, hex: c.hex})} 
                                    className={`w-10 h-10 rounded-full shrink-0 transition-transform duration-200 border-2 border-white shadow-sm ${editingCategoryData.hex === c.hex ? 'ring-2 ring-offset-2 ring-gray-300 scale-110' : ''}`} 
                                    style={{backgroundColor: c.hex}}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                        {editingCategoryData.id && (
                            <button 
                                onClick={() => { handleDeleteCategory(editingCategoryData.id); setEditingCategoryData({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex }); }} 
                                className="p-4 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 active:scale-95 transition-all"
                            >
                                <Trash2 size={20}/>
                            </button>
                        )}
                        <button 
                            onClick={handleSaveCategory} 
                            disabled={!editingCategoryData.name}
                            className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-200 active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:shadow-none"
                        >
                            {editingCategoryData.id ? <Check size={20}/> : <Plus size={20}/>}
                            {editingCategoryData.id ? '儲存變更' : '新增此分類'}
                        </button>
                    </div>
                </div>

                {/* 2. 底部列表 (Category Grid) */}
                <div>
                     <p className="text-xs text-gray-400 font-bold mb-3 px-2">現有分類 ({currentCategories.length})</p>
                     <div className="grid grid-cols-4 gap-3 pb-8">
                        {currentCategories.map(cat => {
                            const Icon = getIconComponent(cat.icon);
                            const isEditing = editingCategoryData.id === cat.id;
                            return (
                                <button 
                                    key={cat.id} 
                                    onClick={() => setEditingCategoryData(cat)}
                                    className={`p-2 rounded-2xl border flex flex-col items-center gap-2 aspect-square justify-center active:scale-95 transition-all duration-200 ${isEditing ? 'bg-white border-blue-400 ring-4 ring-blue-50 shadow-md' : 'bg-white border-gray-100 shadow-sm'}`}
                                >
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{color: cat.hex, backgroundColor: `${cat.hex}20`}}>
                                        <Icon size={20} />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-600 truncate w-full text-center">{cat.name}</span>
                                </button>
                            )
                        })}
                        {/* New Button Placeholder */}
                        <button 
                            onClick={() => setEditingCategoryData({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex })}
                            className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-1 aspect-square hover:bg-gray-50 transition-colors ${!editingCategoryData.id ? 'border-gray-800 bg-gray-50 text-gray-800' : 'border-gray-200 text-gray-300'}`}
                        >
                            <Plus size={24} />
                            <span className="text-[10px] font-bold">新增</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // --- Main Settings View ---
    
    const SettingRow = ({ icon: Icon, title, subtitle, value, onClick, isDestructive, className }) => (
        <div 
            onClick={onClick}
            className={`flex items-center justify-between p-3 -mx-2 rounded-xl transition-all ${onClick ? 'active:bg-gray-50 cursor-pointer' : ''} ${className}`}
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isDestructive ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-500'}`}>
                    <Icon size={20} />
                </div>
                <div className="flex flex-col min-w-0 text-left">
                    <span className={`font-bold text-sm truncate ${isDestructive ? 'text-red-600' : 'text-gray-700'}`}>
                        {title}
                    </span>
                    {subtitle && <span className="text-[10px] text-gray-400 truncate">{subtitle}</span>}
                </div>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
                {value}
                {onClick && !value && <ChevronRight size={16} className="text-gray-300" />}
            </div>
        </div>
    );

    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 px-2">設定</h2>

            {/* Card 1: User Profile & Members */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
                
                {/* 1. My Profile */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <button onClick={() => setIsAvatarModalOpen(true)} className="relative group">
                        {renderAvatar(users[user.uid]?.avatar, "w-16 h-16")}
                        <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Edit2 size={16} className="text-white"/>
                        </div>
                    </button>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <input 
                                type="text" 
                                value={myNickname} 
                                onChange={(e) => setMyNickname(e.target.value)}
                                onBlur={updateNickname}
                                className="font-bold text-lg text-gray-800 bg-transparent border-b border-transparent focus:border-gray-300 focus:outline-none w-full transition-colors"
                                placeholder="設定暱稱"
                            />
                            <Edit2 size={14} className="text-gray-300 shrink-0"/>
                        </div>
                        <div className="text-xs text-gray-400 truncate">{user.email}</div>
                    </div>
                </div>

                {/* 2. Ledger Code */}
                <div 
                    onClick={handleCopyCode}
                    className="bg-gray-50 rounded-xl p-3 flex justify-between items-center cursor-pointer active:scale-[0.98] transition-transform border border-gray-100 mb-6"
                >
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">帳本邀請碼</span>
                        <span className="text-xl font-mono font-bold text-gray-700 tracking-widest">{ledgerCode}</span>
                    </div>
                    <div className={`p-2 rounded-full transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-white text-gray-400 shadow-sm'}`}>
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                    </div>
                </div>

                {/* 3. Members List (New Feature) */}
                <div className="border-t border-gray-50 pt-4">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">帳本成員</h4>
                    <div className="space-y-3">
                        {Object.keys(users).map(uid => {
                            const u = users[uid];
                            const isMe = uid === user.uid;
                            const isHost = u.role === 'host';
                            return (
                                <div key={uid} className="flex items-center gap-3 px-1">
                                    {renderAvatar(u.avatar, "w-8 h-8")}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold text-sm ${isMe ? 'text-gray-900' : 'text-gray-600'}`}>{u.name}</span>
                                            {isMe && <span className="text-[10px] text-gray-400">(我)</span>}
                                        </div>
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${isHost ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                                        {isHost ? '戶長' : '成員'}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Card 2: Project Rates (Optimized) */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-1">
                <h3 className="text-xs font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">匯率設定 (1 外幣 = ? 台幣)</h3>
                
                <SettingRow icon={Globe} title="日幣 (JPY)" 
                    value={
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
                            <input 
                                type="number" 
                                value={rates.JPY} 
                                onChange={(e) => updateLedgerCurrency('JPY', e.target.value)}
                                className="w-16 bg-transparent text-sm font-bold text-gray-800 outline-none text-right"
                                placeholder="0.23"
                            />
                            <span className="text-[10px] text-gray-400 font-bold">TWD</span>
                        </div>
                    }
                />
                <div className="h-[1px] bg-gray-50 mx-2 my-1"/>
                <SettingRow icon={Globe} title="泰銖 (THB)" 
                    value={
                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 focus-within:border-blue-200 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
                            <input 
                                type="number" 
                                value={rates.THB} 
                                onChange={(e) => updateLedgerCurrency('THB', e.target.value)}
                                className="w-16 bg-transparent text-sm font-bold text-gray-800 outline-none text-right"
                                placeholder="1.0"
                            />
                             <span className="text-[10px] text-gray-400 font-bold">TWD</span>
                        </div>
                    }
                />
            </div>

            {/* Card 3: Management */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-1">
                <h3 className="text-xs font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">資料管理</h3>
                
                <SettingRow 
                    icon={Grid} 
                    title="分類管理" 
                    subtitle="自訂支出類別與圖示" 
                    onClick={() => setIsEditingCategory(true)} 
                />
                <div className="h-[1px] bg-gray-50 mx-2 my-1"/>
                <SettingRow 
                    icon={Download} 
                    title="匯出 CSV" 
                    subtitle="下載所有交易紀錄" 
                    onClick={handleExport} 
                />
                <div className="h-[1px] bg-gray-50 mx-2 my-1"/>
                <SettingRow 
                    icon={Wrench} 
                    title="修復帳號權限" 
                    subtitle="解決無法編輯的問題" 
                    onClick={handleFixIdentity} 
                />
            </div>

            {/* Card 4: Danger Zone */}
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-1">
                <SettingRow 
                    icon={Trash2} 
                    title="重置帳本" 
                    isDestructive 
                    onClick={handleResetAccount} 
                />
                <div className="h-[1px] bg-gray-50 mx-2 my-1"/>
                <SettingRow 
                    icon={LogOut} 
                    title="登出" 
                    isDestructive 
                    onClick={handleLogout} 
                />
            </div>

            {/* Footer */}
            <div className="text-center pb-8 pt-4">
                <p className="text-[10px] text-gray-300 font-medium">SweetLedger v1.2.0 • PWA Ready</p>
            </div>

            {/* Avatar Modal */}
            {isAvatarModalOpen && (
                <div className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" onClick={() => setIsAvatarModalOpen(false)}>
                    <div className="bg-white rounded-3xl p-6 w-full max-w-xs shadow-2xl" onClick={e => e.stopPropagation()}>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">選擇頭像</h3>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {Object.keys(CHARACTERS).map(key => (
                                <button 
                                    key={key} 
                                    onClick={() => handleAvatarSelect(key)}
                                    className={`aspect-square rounded-2xl flex items-center justify-center transition-all ${tempAvatar === key ? 'bg-rose-100 ring-2 ring-rose-500 scale-105' : 'bg-gray-50 hover:bg-gray-100'}`}
                                >
                                    {renderAvatar(key, "w-12 h-12")}
                                </button>
                            ))}
                        </div>
                        <button onClick={confirmAvatarUpdate} disabled={!tempAvatar} className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold disabled:opacity-50">確認更換</button>
                    </div>
                </div>
            )}
        </div>
    );
}
