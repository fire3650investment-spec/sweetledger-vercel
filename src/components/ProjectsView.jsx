// src/components/ProjectsView.jsx
import React from 'react';
import { Plus, Trash2, Edit2, ChevronUp, ChevronDown, Globe, Lock, Unlock, AlertCircle } from 'lucide-react';
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
    if (!ledgerData) return null;
    
    // [Filter Logic]
    const visibleProjects = (ledgerData.projects || []).filter(p => {
        if (p.type === 'private') {
            return p.owner === user?.uid;
        }
        return true; 
    });

    // [Sort Logic]
    const moveProject = (index, direction) => {
        const newProjects = [...(ledgerData.projects || [])];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newProjects.length) return;
        [newProjects[index], newProjects[targetIndex]] = [newProjects[targetIndex], newProjects[index]];
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
    
    // --- Edit View (Full Page) ---
    if (isEditingProject) { 
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
                            onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})} 
                            placeholder="例如：2024 日本行" 
                            className="w-full p-4 bg-gray-50 rounded-xl outline-none font-bold text-gray-800 focus:ring-2 focus:ring-gray-200 transition-all"
                        />
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
                                    {editingProjectData.type === 'private' ? <Lock size={18}/> : <Unlock size={18}/>}
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
                                        onClick={() => setEditingProjectData({...editingProjectData, icon})} 
                                        className={`p-4 rounded-xl flex justify-center transition-all ${editingProjectData.icon === icon ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-400'}`}
                                    >
                                        <IconCmp size={24} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Rates Input (This remains available for Manual Adjustment) */}
                    {editingProjectData.id !== 'daily' && (
                        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                            <h4 className="text-xs font-bold text-blue-500 mb-4 flex items-center gap-2 uppercase tracking-wider"><Globe size={14}/> 匯率設定 (TWD)</h4>
                            
                            {editingProjectData.rates && Object.keys(editingProjectData.rates).filter(k => k !== 'TWD').length > 0 ? (
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.keys(editingProjectData.rates).filter(k => k !== 'TWD').map(currencyCode => {
                                        const currencyInfo = CURRENCY_OPTIONS.find(c => c.code === currencyCode);
                                        return (
                                            <div key={currencyCode} className="bg-white p-3 rounded-xl border border-blue-100">
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
                                                        className="w-full bg-transparent font-bold text-gray-800 outline-none"
                                                        placeholder="?"
                                                        step="0.01"
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-2">
                                    <p className="text-xs text-blue-400 mb-2">此專案尚未設定外幣</p>
                                    <p className="text-[10px] text-blue-300">請至「設定 常用貨幣」新增貨幣，或記帳時選用外幣，即可在此調整。</p>
                                </div>
                            )}
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
                    onClick={async () => { 
                        const initData = {id:'', name:'', icon:'project_daily', rates: {}, type: 'public'};
                        setEditingProjectData(initData); 
                        setIsEditingProject(true); 

                        // Smart Init Logic (Fetch Favorites)
                        const userFavs = user?.uid && ledgerData.users[user.uid]?.favoriteCurrencies
                            ? ledgerData.users[user.uid].favoriteCurrencies
                            : ['JPY', 'THB', 'USD']; 

                        const newRates = {};
                        const targets = userFavs.filter(c => c !== 'TWD');

                        if (targets.length > 0) {
                            await Promise.all(targets.map(async (code) => {
                                const rate = await fetchExchangeRate(code);
                                if (rate) newRates[code] = rate;
                            }));

                            setEditingProjectData(prev => {
                                if (prev.id === '') { 
                                    return { ...prev, rates: { ...prev.rates, ...newRates } };
                                }
                                return prev;
                            });
                        }
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
                                <div>
                                    <h3 className={`font-bold flex items-center gap-2 ${isPrivate ? 'text-slate-500' : 'text-gray-600'}`}>
                                        {p.name}
                                        {isPrivate && <Lock size={14} className="text-slate-400"/>}
                                    </h3>
                                    
                                    {/* [Clean Up] 僅保留「預設」標籤，移除所有匯率標籤 */}
                                    {p.id === 'daily' && (
                                        <div className="mt-1">
                                            <span className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-md text-[10px] font-bold">預設</span>
                                        </div>
                                    )}
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
                                        <ChevronUp size={14}/>
                                    </button>
                                    <button 
                                        onClick={() => moveProject(idx, 'down')} 
                                        disabled={isLast}
                                        className={`p-1 rounded disabled:opacity-30 transition-all shadow-sm ${isPrivate ? 'hover:bg-white text-slate-400' : 'hover:bg-white text-gray-500 hover:text-gray-900'}`}
                                    >
                                        <ChevronDown size={14}/>
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