// src/components/ProjectsView.jsx
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, ChevronUp, ChevronDown, Globe, Lock, Unlock, AlertCircle, Coins, Check } from 'lucide-react';
import { getIconComponent, fetchExchangeRate } from '../utils/helpers';
import { CURRENCY_OPTIONS } from '../utils/constants';

export default function ProjectsView({
    ledgerData,
    user,
    isEditingProject,
    setIsEditingProject,
    editingProjectData,
    setEditingProjectData,
    handleSaveProject,
    handleDeleteProject,
    handleReorderProjects
}) {
    // [Local State for Currency Picker in Edit Mode]
    const [isCurrencyPickerOpen, setIsCurrencyPickerOpen] = useState(false);

    if (!ledgerData) return null;

    // [Filter Logic]
    const visibleProjects = (ledgerData.projects || []).filter(p => {
        if (p.type === 'private') {
            return p.owner === user?.uid;
        }
        return true;
    });

    // [Sort Logic]
    // [Sort Logic]
    const moveProject = (index, direction) => {
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        // 1. Boundary check on VISIBLE list
        if (targetIndex < 0 || targetIndex >= visibleProjects.length) return;

        // 2. Identify the actual objects to swap using IDs
        const currentProjId = visibleProjects[index].id;
        const targetProjId = visibleProjects[targetIndex].id;

        // 3. Find their positions in the GLOBAL list
        const newProjects = [...(ledgerData.projects || [])];
        const globalIndex = newProjects.findIndex(p => p.id === currentProjId);
        const globalTargetIndex = newProjects.findIndex(p => p.id === targetProjId);

        if (globalIndex === -1 || globalTargetIndex === -1) return;

        // 4. Swap strictly in the Global List
        [newProjects[globalIndex], newProjects[globalTargetIndex]] = [newProjects[globalTargetIndex], newProjects[globalIndex]];

        handleReorderProjects(newProjects);
    };

    // [Handler]
    const onSaveWrapper = () => {
        if (editingProjectData.rates) {
            const cleanRates = {};
            Object.keys(editingProjectData.rates).forEach(key => {
                cleanRates[key] = parseFloat(editingProjectData.rates[key]) || 0;
            });
            editingProjectData.rates = cleanRates;
        }

        if (editingProjectData.id === 'daily') {
            editingProjectData.type = 'public';
        }
        handleSaveProject();
    };

    // [New] Handle Default Currency Change
    const handleDefaultCurrencyChange = async (code) => {
        setIsCurrencyPickerOpen(false);

        // Update default currency
        setEditingProjectData(prev => ({ ...prev, defaultCurrency: code }));

        // If foreign currency, ensure rate exists or fetch it
        if (code !== 'TWD') {
            const currentRate = editingProjectData.rates?.[code];
            if (!currentRate) {
                const rate = await fetchExchangeRate(code);
                if (rate) {
                    setEditingProjectData(prev => ({
                        ...prev,
                        rates: { ...prev.rates, [code]: rate }
                    }));
                }
            }
        }
    };

    // --- Edit View (Full Page) ---
    if (isEditingProject) {
        // [Safety] Ensure defaultCurrency exists
        const currentDefaultCurrency = editingProjectData.defaultCurrency || 'TWD';
        const currentCurrencyInfo = CURRENCY_OPTIONS.find(c => c.code === currentDefaultCurrency);

        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingProjectData.id ? '編輯專案' : '新增專案'}</h2>

                <div className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">專案名稱</label>
                        <input
                            type="text"
                            value={editingProjectData.name}
                            onChange={(e) => setEditingProjectData({ ...editingProjectData, name: e.target.value })}
                            placeholder="例如：2024 日本行"
                            className="w-full p-4 bg-gray-50 rounded-xl outline-none font-bold text-gray-800 focus:ring-2 focus:ring-gray-200 transition-all"
                        />
                    </div>

                    {/* [New] Default Currency Picker */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">預設幣別</label>
                        <div className="relative">
                            <button
                                onClick={() => setIsCurrencyPickerOpen(!isCurrencyPickerOpen)}
                                className="w-full p-4 bg-white border border-gray-200 rounded-xl flex items-center justify-between shadow-sm active:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{currentCurrencyInfo?.flag || '🌐'}</span>
                                    <div className="flex flex-col items-start">
                                        <span className="font-bold text-gray-800">{currentCurrencyInfo?.code}</span>
                                        <span className="text-xs text-gray-400">{currentCurrencyInfo?.name}</span>
                                    </div>
                                </div>
                                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isCurrencyPickerOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCurrencyPickerOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-20 max-h-60 overflow-y-auto p-2">
                                    {CURRENCY_OPTIONS.map(opt => (
                                        <button
                                            key={opt.code}
                                            onClick={() => handleDefaultCurrencyChange(opt.code)}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors ${currentDefaultCurrency === opt.code ? 'bg-rose-50' : ''}`}
                                        >
                                            <span className="text-xl w-8 text-center">{opt.flag}</span>
                                            <div className="flex-1 text-left">
                                                <span className={`font-bold text-sm ${currentDefaultCurrency === opt.code ? 'text-rose-600' : 'text-gray-700'}`}>{opt.code}</span>
                                                <span className="text-xs text-gray-400 ml-2">{opt.name}</span>
                                            </div>
                                            {currentDefaultCurrency === opt.code && <Check size={16} className="text-rose-500" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 ml-1">在此專案記帳時，將自動預選此幣別。</p>
                    </div>

                    {/* Private Toggle */}
                    {editingProjectData.id !== 'daily' && (
                        <div
                            onClick={() => setEditingProjectData({
                                ...editingProjectData,
                                type: editingProjectData.type === 'private' ? 'public' : 'private'
                            })}
                            className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${editingProjectData.type === 'private' ? 'bg-slate-50 border-dashed border-2 border-slate-300 text-slate-600' : 'bg-white border-gray-200 text-gray-600'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${editingProjectData.type === 'private' ? 'bg-white text-slate-400 shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                                    {editingProjectData.type === 'private' ? <Lock size={18} /> : <Unlock size={18} />}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm">私人專案</span>
                                    <span className={`text-[10px] ${editingProjectData.type === 'private' ? 'text-slate-400' : 'text-gray-400'}`}>
                                        {editingProjectData.type === 'private' ? '僅您自己可見 (不參與分帳)' : '所有成員可見'}
                                    </span>
                                </div>
                            </div>
                            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${editingProjectData.type === 'private' ? 'bg-slate-400' : 'bg-gray-200'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${editingProjectData.type === 'private' ? 'translate-x-6' : ''}`}></div>
                            </div>
                        </div>
                    )}

                    {/* Icon Grid */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">圖示</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['project_daily', 'project_travel', 'project_house', 'heart'].map(icon => {
                                const IconCmp = getIconComponent(icon);
                                return (
                                    <button
                                        key={icon}
                                        onClick={() => setEditingProjectData({ ...editingProjectData, icon })}
                                        className={`p-4 rounded-xl flex justify-center transition-all ${editingProjectData.icon === icon ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-400'}`}
                                    >
                                        <IconCmp size={24} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Rates Input (Dynamic) */}
                    {/* [Updated Logic] Show rates for Default Currency OR any existing rates */}
                    {(currentDefaultCurrency !== 'TWD' || (editingProjectData.rates && Object.keys(editingProjectData.rates).filter(k => k !== 'TWD').length > 0)) && editingProjectData.id !== 'daily' && (
                        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 animate-fade-in">
                            <h4 className="text-xs font-bold text-blue-500 mb-4 flex items-center gap-2 uppercase tracking-wider"><Globe size={14} /> 匯率設定 (TWD)</h4>

                            <div className="grid grid-cols-1 gap-4">
                                {/* Always show input for Default Currency if foreign */}
                                {currentDefaultCurrency !== 'TWD' && (
                                    <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                                        <label className="text-[10px] font-bold text-gray-400 mb-1 flex items-center justify-between">
                                            <span className="flex items-center gap-1">{currentCurrencyInfo?.flag} {currentDefaultCurrency} (預設)</span>
                                            <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[8px]">主幣別</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                value={editingProjectData.rates?.[currentDefaultCurrency] || ''}
                                                onChange={(e) => setEditingProjectData({
                                                    ...editingProjectData,
                                                    rates: { ...editingProjectData.rates, [currentDefaultCurrency]: e.target.value }
                                                })}
                                                className="w-full bg-transparent font-bold text-gray-800 outline-none text-lg"
                                                placeholder="?"
                                                step="0.01"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Show other rates */}
                                {Object.keys(editingProjectData.rates || {}).filter(k => k !== 'TWD' && k !== currentDefaultCurrency).map(currencyCode => {
                                    const currencyInfo = CURRENCY_OPTIONS.find(c => c.code === currencyCode);
                                    return (
                                        <div key={currencyCode} className="bg-white/50 p-3 rounded-xl border border-blue-100">
                                            <label className="text-[10px] font-bold text-gray-400 mb-1 flex items-center gap-1">
                                                {currencyInfo?.flag || '🌐'} {currencyCode}
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="number"
                                                    value={editingProjectData.rates[currencyCode]}
                                                    onChange={(e) => setEditingProjectData({
                                                        ...editingProjectData,
                                                        rates: { ...editingProjectData.rates, [currencyCode]: e.target.value }
                                                    })}
                                                    className="w-full bg-transparent font-bold text-gray-600 outline-none"
                                                    placeholder="?"
                                                    step="0.01"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="pt-4 flex flex-col gap-3">
                        <button onClick={onSaveWrapper} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-gray-200 active:scale-95 transition-transform">儲存專案</button>
                        <button onClick={() => setIsEditingProject(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold active:scale-95 transition-transform">取消</button>
                    </div>
                </div>
            </div>
        )
    }

    // --- Main List View ---
    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 animate-in fade-in">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">專案管理</h2>
                <button
                    onClick={() => {
                        // [Updated] Smart Init: Default to TWD
                        const initData = { id: '', name: '', icon: 'project_daily', rates: {}, type: 'public', defaultCurrency: 'TWD' };
                        setEditingProjectData(initData);
                        setIsEditingProject(true);
                    }}
                    className="bg-gray-900 text-white p-2 rounded-xl shadow-lg shadow-gray-300 active:scale-90 transition-transform"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                {visibleProjects.map((p, idx) => {
                    const ProjIcon = getIconComponent(p.icon);
                    const isLast = idx === (visibleProjects.length - 1);
                    const isFirst = idx === 0;
                    const isPrivate = p.type === 'private';

                    return (
                        <div
                            key={p.id}
                            className={`
                                p-4 rounded-2xl flex items-center justify-between group transition-colors
                                ${isPrivate
                                    ? 'bg-slate-50 border-2 border-dashed border-slate-200'
                                    : 'bg-white border border-gray-100 shadow-sm'
                                }
                            `}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`
                                    w-12 h-12 rounded-2xl flex items-center justify-center transition-colors
                                    ${isPrivate
                                        ? 'bg-white text-slate-400 shadow-sm'
                                        : 'bg-gray-50 text-gray-500 group-hover:bg-rose-50 group-hover:text-rose-500'
                                    }
                                `}>
                                    <ProjIcon size={24} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className={`font-bold flex items-center gap-2 ${isPrivate ? 'text-slate-500' : 'text-gray-600'} line-clamp-1`}>
                                        {p.name}
                                        {isPrivate && <Lock size={14} className="text-slate-400 shrink-0" />}
                                    </h3>

                                    {/* [Updated] Show Default Currency Tag */}
                                    <div className="mt-1 flex gap-2">
                                        {p.id === 'daily' ? (
                                            <span className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-md text-[10px] font-bold">預設</span>
                                        ) : (
                                            p.defaultCurrency && p.defaultCurrency !== 'TWD' && (
                                                <span className="bg-gray-50 text-gray-400 px-1.5 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                                                    {CURRENCY_OPTIONS.find(c => c.code === p.defaultCurrency)?.flag} {p.defaultCurrency}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Sort Buttons */}
                                <div className={`flex flex-col gap-1 mr-2 p-1 rounded-lg ${isPrivate ? 'bg-slate-200/50' : 'bg-gray-50'}`}>
                                    <button
                                        onClick={() => moveProject(idx, 'up')}
                                        disabled={isFirst}
                                        className={`p-1 rounded disabled:opacity-30 transition-all shadow-sm ${isPrivate ? 'hover:bg-white text-slate-400' : 'hover:bg-white text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <ChevronUp size={14} />
                                    </button>
                                    <button
                                        onClick={() => moveProject(idx, 'down')}
                                        disabled={isLast}
                                        className={`p-1 rounded disabled:opacity-30 transition-all shadow-sm ${isPrivate ? 'hover:bg-white text-slate-400' : 'hover:bg-white text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <ChevronDown size={14} />
                                    </button>
                                </div>

                                {p.id !== 'daily' && (
                                    <>
                                        <div className={`w-[1px] h-8 mx-1 ${isPrivate ? 'bg-slate-200' : 'bg-gray-100'}`}></div>
                                        <button
                                            onClick={() => { setEditingProjectData(p); setIsEditingProject(true); }}
                                            className={`p-2 rounded-full transition-colors ${isPrivate ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-200' : 'text-gray-300 hover:text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            <Edit2 size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProject(p.id)}
                                            className={`p-2 rounded-full transition-colors ${isPrivate ? 'text-slate-300 hover:text-red-500 hover:bg-red-50' : 'text-red-200 hover:text-red-500 hover:bg-red-50'}`}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}