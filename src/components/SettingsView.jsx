
// src/components/SettingsView.jsx
import React, { useState, useEffect } from 'react';
import {
    LogOut, RotateCcw, X, Check,
    ChevronRight, Pencil, Copy, Globe,
    ShieldAlert, FileText, UserX, AlertTriangle, Repeat, Coins, Share2
} from 'lucide-react';
import { renderAvatar, fetchExchangeRate } from '../utils/helpers';
import { DEFAULT_FAVORITE_CURRENCIES, CURRENCY_OPTIONS, CHARACTERS } from '../utils/constants';
import { useLedger } from '../contexts/LedgerContext';
import MemberManager from './settings/MemberManager';
import CategoryManager from './settings/CategoryManager';

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
    const [copied, setCopied] = useState(false);

    // Currency Config Modal State
    const [isCurrencyConfigOpen, setIsCurrencyConfigOpen] = useState(false);
    // Rate Config Modal State
    const [isRateConfigOpen, setIsRateConfigOpen] = useState(false);

    // Debug Mode State
    const [isDebugMode, setIsDebugMode] = useState(false);
    const [debugClickCount, setDebugClickCount] = useState(0);

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

    const handleDeleteAccountFn = async () => {
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

                    {/* 3. Members List (Refactored) */}
                    <MemberManager
                        ledgerData={ledgerData}
                        user={user}
                        isHost={isHost}
                        kickMember={kickMember}
                    />
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

                    {/* Rate Config Entry Point */}
                    <div
                        className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 bg-white"
                        onClick={() => setIsRateConfigOpen(true)}
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><Globe size={18} /></div>
                            <span className="font-bold text-gray-700 text-sm">專案匯率設定 (TWD)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-gray-400 font-bold">
                                {myFavorites.filter(c => c !== 'TWD' && localRates[c]).length} 組設定
                            </span>
                            <ChevronRight size={16} className="text-gray-300" />
                        </div>
                    </div>

                    {/* Category Manager (Refactored) */}
                    <CategoryManager
                        ledgerData={ledgerData}
                        isEditingCategory={isEditingCategory}
                        setIsEditingCategory={setIsEditingCategory}
                        editingCategoryData={editingCategoryData}
                        setEditingCategoryData={setEditingCategoryData}
                        handleSaveCategory={handleSaveCategory}
                        handleDeleteCategory={handleDeleteCategory}
                        handleReorderCategories={handleReorderCategories}
                    />
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
                            onClick={handleDeleteAccountFn}
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
                    {/* Debug Secret Trigger */}
                    <div onClick={() => {
                        setDebugClickCount(prev => {
                            const next = prev + 1;
                            if (next >= 5) setIsDebugMode(true);
                            return next;
                        });
                    }} className="inline-block">
                        <p className="text-[10px] text-gray-300 mt-2 font-mono select-none active:scale-95 transition-transform">SweetLedger v2.0.0 (Pro)</p>
                    </div>

                    {isDebugMode && (
                        <button onClick={handleFixIdentity} className="mt-4 text-[10px] text-rose-300 hover:text-rose-400 flex items-center gap-1 mx-auto bg-rose-50 px-3 py-1 rounded-full animate-fade-in">
                            <ShieldAlert size={10} /> 修復帳號權限 (Debug)
                        </button>
                    )}
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

            {/* Rate Config Modal */}
            {isRateConfigOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={() => setIsRateConfigOpen(false)}>
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scale-up" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><Globe size={18} /> 專案匯率設定 (TWD)</h3>
                            <button onClick={() => setIsRateConfigOpen(false)} className="p-1.5 bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100"><X size={18} /></button>
                        </div>

                        <p className="text-xs text-gray-400 mb-4">設定外幣對 TWD 的固定匯率，以精確計算本專案的真實花費成本。</p>

                        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                            {myFavorites.filter(c => c !== 'TWD').map(curr => (
                                <div key={curr} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 focus-within:border-rose-200 focus-within:ring-2 focus-within:ring-rose-50 focus-within:bg-white transition-all shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{CURRENCY_OPTIONS.find(c => c.code === curr)?.flag}</span>
                                        <span className="font-bold text-gray-700">{curr}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            value={localRates[curr] !== undefined ? localRates[curr] : ''}
                                            onChange={(e) => handleRateChange(curr, e.target.value)}
                                            onBlur={() => handleRateBlur(curr)}
                                            className="w-24 bg-transparent text-lg font-bold text-gray-900 outline-none text-right"
                                            placeholder="?"
                                            step="0.01"
                                        />
                                    </div>
                                </div>
                            ))}
                            {myFavorites.filter(c => c !== 'TWD').length === 0 && (
                                <div className="text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <p className="text-sm text-gray-400 font-bold">尚無常用外幣</p>
                                    <p className="text-xs text-gray-400 mt-1">請先至上方「設定常用貨幣」新增</p>
                                </div>
                            )}
                        </div>

                        <button onClick={() => setIsRateConfigOpen(false)} className="w-full mt-6 py-3 font-bold text-white bg-gray-900 rounded-xl shadow-lg shadow-gray-200 active:scale-95 transition-transform">
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
        </div>
    );
}