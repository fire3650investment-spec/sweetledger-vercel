// src/components/SettingsView.jsx
import React, { useState, useEffect } from 'react';
import {
    User, LogOut, RotateCcw, Download, X, Check, Trash2,
    Plus, ChevronRight, ArrowLeftRight, Pencil, Palette, LayoutGrid, Copy, Globe,
    ShieldAlert, FileText, UserX, AlertTriangle, Repeat, Coins, Share2
} from 'lucide-react';
import { getIconComponent, renderAvatar, getCategoryStyle, fetchExchangeRate } from '../utils/helpers';
import { DEFAULT_CATEGORIES, COLORS, AVAILABLE_ICONS, CHARACTERS, CURRENCY_OPTIONS, DEFAULT_FAVORITE_CURRENCIES } from '../utils/constants';
import { useLedger } from '../contexts/LedgerContext';

export default function SettingsView({
    user,
    ledgerData,
    isEditingCategory,
    setIsEditingCategory,
    editingCategoryData,
    setEditingCategoryData,
    handleSaveCategory,
    handleDeleteCategory,
    handleExport,
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
    handleReorderCategories,
    setView,
    updateUserSetting
}) {
    const { leaveLedger, resetAccount, deleteAccount, kickMember } = useLedger();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- Local State ---
    const [isReorderMode, setIsReorderMode] = useState(false);
    const [activeSortId, setActiveSortId] = useState(null);
    const [copied, setCopied] = useState(false);

    // Currency Config Modal State
    const [isCurrencyConfigOpen, setIsCurrencyConfigOpen] = useState(false);

    const categories = ledgerData?.customCategories || DEFAULT_CATEGORIES;
    const currentProject = ledgerData?.projects?.find(p => p.id === currentProjectId);
    const serverRates = currentProject?.rates || {};
    const [localRates, setLocalRates] = useState(serverRates);

    const mySettings = ledgerData?.users?.[user?.uid] || {};
    const myFavorites = mySettings.favoriteCurrencies || DEFAULT_FAVORITE_CURRENCIES;

    const currentUserRole = ledgerData?.users?.[user?.uid]?.role;
    const isHost = currentUserRole === 'host';

    useEffect(() => {
        if (serverRates) {
            setLocalRates(prev => ({ ...prev, ...serverRates }));
        }
    }, [serverRates]);

    // --- Handlers ---
    const handleShareInvite = () => {
        const url = `${window.location.origin}/?invite=${ledgerCode}`;
        if (navigator.share) {
            navigator.share({
                title: '邀請加入 SweetLedger',
                text: '親愛的，這是我們的專屬記帳連結，點擊加入吧！❤️',
                url: url
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(url);
            alert('邀請連結已複製！傳送給另一半吧 ❤️');
        }
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(ledgerCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleRateChange = (currency, value) => {
        setLocalRates(prev => ({ ...prev, [currency]: value }));
    };

    const handleRateBlur = (currency) => {
        const val = localRates[currency];
        if (val && !isNaN(parseFloat(val))) {
            updateLedgerCurrency(currency, val);
        } else {
            setLocalRates(prev => ({ ...prev, [currency]: serverRates[currency] }));
        }
    };

    const toggleFavoriteCurrency = async (code) => {
        let newFavorites = [...myFavorites];
        const isAdding = !newFavorites.includes(code);

        if (!isAdding) {
            if (newFavorites.length > 1) {
                newFavorites = newFavorites.filter(c => c !== code);
            } else {
                alert("至少保留一個常用貨幣");
                return;
            }
        } else {
            if (newFavorites.length >= 4) {
                alert("最多只能設定 4 個常用貨幣");
                return;
            }
            newFavorites.push(code);
        }

        if (updateUserSetting) {
            await updateUserSetting('favoriteCurrencies', newFavorites);

            if (isAdding && code !== 'TWD') {
                fetchExchangeRate(code).then(rate => {
                    if (rate) {
                        updateLedgerCurrency(code, rate);
                    }
                });
            }
        } else {
            console.warn("API 尚未串接：App.jsx 尚未傳入 updateUserSetting");
        }
    };

    const onSaveCategoryWrapper = () => {
        setIsEditingCategory(false);
        handleSaveCategory();
    };

    const onDeleteCategoryWrapper = (id) => {
        setIsEditingCategory(false);
        handleDeleteCategory(id);
    };

    const handleSortClick = (targetId) => {
        if (!activeSortId) {
            setActiveSortId(targetId);
        } else {
            if (activeSortId === targetId) {
                setActiveSortId(null);
                return;
            }
            const oldIndex = categories.findIndex(c => c.id === activeSortId);
            const newIndex = categories.findIndex(c => c.id === targetId);
            if (oldIndex === -1 || newIndex === -1) return;

            const newCategories = [...categories];
            const [movedItem] = newCategories.splice(oldIndex, 1);
            newCategories.splice(newIndex, 0, movedItem);

            handleReorderCategories(newCategories);
            setActiveSortId(null);
        }
    };

    const handleDeleteAccount = async () => {
        if (!window.confirm("警告：此操作將「永久刪除」您的帳號與所有個人資料，且無法復原！")) return;
        if (!window.confirm("再次確認：您確定要刪除帳號嗎？")) return;

        try {
            await deleteAccount();
        } catch (e) {
            if (e.message === 'REQ_RELOGIN') {
                alert("為了確保您的帳號安全，執行刪除操作前請先「重新登入」。\n\n系統將為您登出，請登入後再次執行刪除操作。");
                await handleLogout();
            } else {
                alert("刪除失敗：" + e.message);
            }
        }
    };

    const openNewCategoryModal = () => {
        setEditingCategoryData({ id: '', name: '', icon: 'food', colorId: 'slate' });
        setIsEditingCategory(true);
    };

    const openEditCategoryModal = (cat) => {
        setEditingCategoryData(cat);
        setIsEditingCategory(true);
    };

    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 animate-in fade-in duration-500">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">設定</h2>
            </div>

            <div className="space-y-6">

                {/* --- Island A: Identity --- */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* 1. Personal Profile */}
                    <div className="p-4 flex items-center gap-4">
                        <button onClick={() => setIsAvatarModalOpen(true)} className="relative group shrink-0">
                            {renderAvatar(ledgerData?.users?.[user.uid]?.avatar, "w-16 h-16")}
                            <div className="absolute bottom-0 right-0 bg-gray-900 text-white p-1.5 rounded-full border-2 border-white shadow-sm">
                                <Pencil size={10} />
                            </div>
                        </button>
                        <div className="flex-1 min-w-0">
                            <label className="text-[10px] font-bold text-gray-400 uppercase block mb-1">顯示名稱</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={myNickname}
                                    onChange={(e) => setMyNickname(e.target.value)}
                                    onBlur={updateNickname}
                                    className="flex-1 min-w-0 bg-transparent border-b border-gray-200 focus:border-rose-500 outline-none text-gray-900 font-bold py-1 px-0 transition-colors text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. Ledger Code */}
                    <div className="border-t border-gray-50 p-4 active:bg-gray-50 transition-colors flex justify-between items-center group">
                        <div onClick={handleCopyCode} className="cursor-pointer flex-1">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">帳本代碼</p>
                            <p className="text-base font-mono font-medium text-gray-600 tracking-widest group-hover:text-rose-500 transition-colors">{ledgerCode}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handleShareInvite} className="p-2 rounded-full text-gray-300 hover:bg-gray-100 hover:text-rose-500 transition-colors">
                                <Share2 size={18} />
                            </button>
                            <button onClick={handleCopyCode} className={`p-2 rounded-full transition-colors ${copied ? 'bg-green-50 text-green-600' : 'text-gray-300 hover:bg-gray-100'}`}>
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* 3. Members List */}
                    <div className="border-t border-gray-50 p-4 bg-gray-50/50">
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2"><User size={12} /> 帳本成員</h4>
                        <div className="space-y-3">
                            {Object.keys(ledgerData.users || {}).map(uid => {
                                const u = ledgerData.users[uid];
                                const isMe = uid === user.uid;
                                const role = u.role || 'guest';
                                return (
                                    <div key={uid} className="flex items-center gap-3">
                                        {renderAvatar(u.avatar, "w-8 h-8")}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className={`font-bold text-sm ${isMe ? 'text-gray-900' : 'text-gray-600'}`}>{u.name}</span>
                                                {isMe && <span className="text-[10px] text-gray-400 bg-gray-200 px-1.5 rounded-full">(我)</span>}
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${role === 'host' ? 'bg-rose-50 text-rose-600' : 'bg-gray-200 text-gray-500'}`}>
                                            {role === 'host' ? '戶長' : '成員'}
                                        </span>
                                        {isHost && !isMe && (
                                            <button
                                                onClick={() => kickMember(uid)}
                                                className="p-2 bg-gray-100 text-gray-400 rounded-full hover:bg-rose-50 hover:text-rose-500 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- Island B: Preferences --- */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Favorite Currencies Entry Point */}
                    <div
                        className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50"
                        onClick={() => setIsCurrencyConfigOpen(true)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><Coins size={18} /></div>
                            <span className="font-bold text-gray-700 text-sm">設定常用貨幣</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                                {myFavorites.slice(0, 3).map(c => (
                                    <span key={c} className="text-[10px] bg-gray-100 border border-white px-1.5 py-0.5 rounded-md text-gray-500 font-bold">{c}</span>
                                ))}
                                {myFavorites.length > 3 && <span className="text-[10px] bg-gray-50 border border-white px-1.5 py-0.5 rounded-md text-gray-400 font-bold">...</span>}
                            </div>
                            <ChevronRight size={16} className="text-gray-300" />
                        </div>
                    </div>

                    {/* Rates */}
                    <div className="p-4 border-b border-gray-50 bg-white">
                        <h2 className="text-sm font-bold text-gray-400 flex items-center gap-2 mb-4">
                            <Globe size={16} /> 專案匯率設定 (TWD)
                        </h2>

                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
                            {myFavorites.filter(c => c !== 'TWD').map(curr => (
                                <div key={curr} className="flex-1 min-w-[120px] flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-rose-200 focus-within:ring-2 focus-within:ring-rose-50 focus-within:bg-white transition-all shadow-sm">
                                    <span className="text-sm font-bold text-gray-500">{curr}</span>
                                    <div className="flex items-center gap-1">
                                        <input
                                            type="number"
                                            value={localRates[curr] !== undefined ? localRates[curr] : ''}
                                            onChange={(e) => handleRateChange(curr, e.target.value)}
                                            onBlur={() => handleRateBlur(curr)}
                                            className="w-16 bg-transparent text-sm font-bold text-gray-900 outline-none text-right"
                                            placeholder="?"
                                            step="0.01"
                                        />
                                    </div>
                                </div>
                            ))}
                            {myFavorites.filter(c => c !== 'TWD').length === 0 && (
                                <p className="text-xs text-gray-400 italic py-2">請先點擊上方設定外幣，即可在此調整匯率。</p>
                            )}
                        </div>
                    </div>

                    {/* Category Grid */}
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-sm font-bold text-gray-400 flex items-center gap-2"><LayoutGrid size={16} /> 分類管理</h2>
                            <button
                                onClick={() => { setIsReorderMode(!isReorderMode); setActiveSortId(null); }}
                                className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${isReorderMode ? 'bg-rose-500 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                <ArrowLeftRight size={12} /> {isReorderMode ? '完成' : '排序'}
                            </button>
                        </div>

                        <div className="grid grid-cols-5 gap-2 sm:gap-3">
                            {categories.map((cat) => {
                                const Icon = getIconComponent(cat.icon);
                                const isSelected = activeSortId === cat.id;
                                const style = getCategoryStyle(cat, 'input');
                                const wiggleStyle = isReorderMode ? { animation: `wiggle 0.3s ease-in-out infinite ${Math.random() * 0.5}s` } : {};

                                return (
                                    <button
                                        key={cat.id}
                                        style={wiggleStyle}
                                        onClick={() => isReorderMode ? handleSortClick(cat.id) : openEditCategoryModal(cat)}
                                        className={`flex flex-col items-center gap-1 group relative transition-all duration-300 ${isSelected ? 'scale-110 z-10' : 'active:scale-95'}`}
                                    >
                                        <div
                                            className={`
                                        w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-sm border
                                        ${isSelected ? style.activeClass : style.containerClass}
                                        ${isSelected ? 'shadow-lg' : ''}
                                    `}
                                        >
                                            <Icon size={20} className={isSelected ? 'text-white' : style.iconClass} />
                                        </div>
                                        <span className="text-[10px] font-medium text-gray-500 truncate w-full text-center">{cat.name}</span>
                                    </button>
                                );
                            })}
                            {!isReorderMode && (
                                <button onClick={openNewCategoryModal} className="flex flex-col items-center gap-1 group active:scale-95 transition-transform">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-rose-300 group-hover:text-rose-500 transition-colors">
                                        <Plus size={20} />
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-400">新增</span>
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* --- Island C: System Actions --- */}
                <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">

                    {/* Subscriptions Entry Point */}
                    <div className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer" onClick={() => setView('subscriptions')}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><Repeat size={18} /></div>
                            <span className="font-bold text-gray-700 text-sm">固定支出管理</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    <div className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer" onClick={handleExport}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><FileText size={18} /></div>
                            <span className="font-bold text-gray-700 text-sm">匯出 CSV</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    <div className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer" onClick={handleLogout}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 text-gray-500 rounded-lg"><LogOut size={18} /></div>
                            <span className="font-bold text-gray-500 text-sm">登出帳號 (Logout)</span>
                        </div>
                    </div>
                </section>

                {/* --- Island D: Danger Zone --- */}
                <section className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold text-rose-500 ml-2 flex items-center gap-1">
                        <AlertTriangle size={12} /> 危險區域
                    </h3>
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 divide-y divide-gray-50">

                        {/* Reset Account */}
                        <div
                            className={`p-4 flex justify-between items-center transition-colors cursor-pointer ${!isHost ? 'opacity-50 grayscale cursor-not-allowed' : 'active:bg-gray-50 hover:bg-gray-50'}`}
                            onClick={resetAccount}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 text-gray-500 rounded-lg"><RotateCcw size={18} /></div>
                                <div className="flex flex-col text-left">
                                    <span className="font-bold text-gray-500 text-sm">重置帳本</span>
                                    <span className="text-[10px] text-gray-400">{isHost ? '清空所有資料 (僅戶長)' : '僅戶長可執行此操作'}</span>
                                </div>
                            </div>
                            {isHost && <ChevronRight size={16} className="text-gray-300" />}
                        </div>

                        {/* Leave Ledger */}
                        <div
                            className="p-4 flex justify-between items-center active:bg-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={leaveLedger}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 text-gray-500 rounded-lg"><UserX size={18} /></div>
                                <div className="flex flex-col text-left">
                                    <span className="font-bold text-gray-500 text-sm">退出此帳本</span>
                                    <span className="text-[10px] text-gray-400">移除權限並離開</span>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-300" />
                        </div>

                        {/* Delete Account */}
                        <div
                            className="p-4 flex justify-between items-center active:bg-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                            onClick={handleDeleteAccount}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-100 text-gray-500 rounded-lg"><AlertTriangle size={18} /></div>
                                <div className="flex flex-col text-left">
                                    <span className="font-bold text-gray-500 text-sm">刪除帳號</span>
                                    <span className="text-[10px] text-gray-400">永久刪除 User</span>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-300" />
                        </div>

                    </div>
                </section>

                <div className="text-center pt-8 pb-8">
                    <button onClick={handleFixIdentity} className="text-[10px] text-gray-300 hover:text-gray-400 flex items-center gap-1 mx-auto">
                        <ShieldAlert size={10} /> 修復帳號權限 (Debug)
                    </button>
                    <p className="text-[10px] text-gray-300 mt-2 font-mono">SweetLedger v2.0.0 (Pro)</p>
                </div>
            </div>

            {/* --- Modals --- */}

            {/* Currency Config Modal */}
            {isCurrencyConfigOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={() => setIsCurrencyConfigOpen(false)}>
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scale-up" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><Coins size={18} /> 常用貨幣設定</h3>
                            <button onClick={() => setIsCurrencyConfigOpen(false)} className="p-1.5 bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100"><X size={18} /></button>
                        </div>

                        <p className="text-xs text-gray-400 mb-4">請勾選您最常使用的貨幣（最多 4 個）。這些貨幣將會優先顯示在記帳頁面。</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {CURRENCY_OPTIONS.map(currency => {
                                const isSelected = myFavorites.includes(currency.code);
                                return (
                                    <button
                                        key={currency.code}
                                        onClick={() => toggleFavoriteCurrency(currency.code)}
                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border ${isSelected ? 'bg-gray-900 text-white border-gray-900 shadow-md' : 'bg-gray-50 text-gray-500 border-gray-50 hover:bg-gray-100'}`}
                                    >
                                        <span className="text-sm">{currency.flag}</span>
                                        {currency.code}
                                        {isSelected && <Check size={12} className="ml-1" />}
                                    </button>
                                );
                            })}
                        </div>

                        <button onClick={() => setIsCurrencyConfigOpen(false)} className="w-full py-3 font-bold text-white bg-gray-900 rounded-xl shadow-lg shadow-gray-200">
                            完成設定
                        </button>
                    </div>
                </div>
            )}

            {/* Avatar Modal */}
            {isAvatarModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={() => setIsAvatarModalOpen(false)}>
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scale-up" onClick={e => e.stopPropagation()}>
                        <h3 className="text-center font-bold text-lg mb-6 text-gray-800">選擇你的頭像</h3>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {Object.keys(CHARACTERS).map(key => (
                                <button
                                    key={key}
                                    onClick={() => handleAvatarSelect(key)}
                                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 transition-all border-2 
                                ${tempAvatar === key
                                            ? 'bg-rose-50 border-rose-500 text-rose-500 shadow-md scale-105'
                                            : 'bg-gray-50 border-transparent text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                                        }`}
                                >
                                    {renderAvatar(key, "w-10 h-10 !bg-transparent !text-current !rounded-none !border-0")}
                                    <span className="text-[10px] font-bold">{CHARACTERS[key].name}</span>
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
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsEditingCategory(false)} />
                    <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-slide-up">

                        <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100 rounded-t-3xl">
                            <h3 className="font-bold text-gray-800 text-lg">{editingCategoryData.id ? '編輯分類' : '新增分類'}</h3>
                            <button onClick={() => setIsEditingCategory(false)} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600"><X size={20} /></button>
                        </div>

                        <div className="p-6 space-y-6 overflow-y-auto">
                            {/* Preview */}
                            <div className="flex justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    {(() => {
                                        const style = getCategoryStyle(editingCategoryData, 'display');
                                        return (
                                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl transition-colors ${style.containerClass}`}>
                                                {React.createElement(getIconComponent(editingCategoryData.icon), { size: 36, className: style.iconClass })}
                                            </div>
                                        );
                                    })()}
                                    <span className="font-bold text-gray-800">{editingCategoryData.name || '分類名稱'}</span>
                                </div>
                            </div>

                            {/* Name Input */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2">名稱</label>
                                <input
                                    type="text"
                                    value={editingCategoryData.name}
                                    onChange={(e) => setEditingCategoryData({ ...editingCategoryData, name: e.target.value })}
                                    className="w-full bg-gray-50 text-gray-900 font-bold py-3 px-4 rounded-xl outline-none border-2 border-transparent focus:border-rose-500 transition-colors"
                                    placeholder="輸入分類名稱..."
                                />
                            </div>

                            {/* Color Picker */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2"><Palette size={12} /> 顏色</label>
                                <div className="flex gap-3 overflow-x-auto pb-2 p-3 no-scrollbar">
                                    {COLORS.map(c => (
                                        <button
                                            key={c.hex}
                                            onClick={() => {
                                                const colorId = c.id || Object.keys(COLORS).find(k => COLORS[k].hex === c.hex) || 'slate';
                                                setEditingCategoryData({ ...editingCategoryData, colorId: c.name?.toLowerCase() || 'slate' });
                                            }}
                                            className={`w-10 h-10 rounded-full shrink-0 transition-transform ${editingCategoryData.colorId === (c.name?.toLowerCase()) ? 'ring-4 ring-offset-2 ring-gray-200 scale-110' : 'hover:scale-105'}`}
                                            style={{ backgroundColor: c.hex }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Icon Picker */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 flex items-center gap-2"><LayoutGrid size={12} /> 圖示</label>
                                <div className="grid grid-cols-5 gap-3 max-h-40 overflow-y-auto p-1">
                                    {AVAILABLE_ICONS.map(iconName => {
                                        const Icon = getIconComponent(iconName);
                                        const isSelected = editingCategoryData.icon === iconName;
                                        return (
                                            <button
                                                key={iconName}
                                                onClick={() => setEditingCategoryData({ ...editingCategoryData, icon: iconName })}
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
                                <button onClick={() => onDeleteCategoryWrapper(editingCategoryData.id)} className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-colors">
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