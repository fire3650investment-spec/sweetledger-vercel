// src/components/ProjectsView.jsx
import React from 'react';
import { Plus, Trash2, Edit2, ChevronUp, ChevronDown, Globe } from 'lucide-react';
import { getIconComponent } from '../utils/helpers';

export default function ProjectsView({
  ledgerData,
  isEditingProject,
  setIsEditingProject,
  editingProjectData,
  setEditingProjectData,
  handleSaveProject,
  handleDeleteProject,
  handleReorderProjects
}) {
    if (!ledgerData) return null;
    
    // [Sort Logic] 保留原有的排序邏輯
    const moveProject = (index, direction) => {
        const newProjects = [...(ledgerData.projects || [])];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        // Boundary Check
        if (targetIndex < 0 || targetIndex >= newProjects.length) return;

        // Swap
        [newProjects[index], newProjects[targetIndex]] = [newProjects[targetIndex], newProjects[index]];
        
        // Save
        handleReorderProjects(newProjects);
    };

    // [Handler] 存檔前確保數字格式
    const onSaveWrapper = () => {
        if (editingProjectData.rates) {
            // 簡單防禦：確保轉為數字
            const newRates = {
                JPY: parseFloat(editingProjectData.rates.JPY) || 0.23,
                THB: parseFloat(editingProjectData.rates.THB) || 1.0
            };
            // 這裡我們直接修改 state 中的物件參照，雖然 React 建議 immutable，
            // 但因為 handleSaveProject 會讀取 editingProjectData，這樣做是有效的。
            // 更嚴謹的做法是在 setEditingProjectData 處理，但為了配合您的基底結構，我們在此攔截。
            editingProjectData.rates = newRates;
        }
        handleSaveProject();
    };
    
    // --- Edit View (Full Page) ---
    if (isEditingProject) { 
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingProjectData.id ? '編輯專案' : '新增專案'}</h2>
                
                <div className="space-y-6">
                    {/* 1. Name Input */}
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

                    {/* 2. Icon Grid */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">圖示</label>
                        <div className="grid grid-cols-4 gap-2">
                            {['project_daily', 'project_travel', 'project_house', 'briefcase', 'gift', 'heart', 'coffee', 'car'].map(icon => { 
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

                    {/* 3. Rates Input (New Addition) */}
                    {editingProjectData.id !== 'daily' && (
                        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                            <h4 className="text-xs font-bold text-blue-500 mb-4 flex items-center gap-2 uppercase tracking-wider"><Globe size={14}/> 匯率設定</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-xl border border-blue-100">
                                    <label className="text-[10px] font-bold text-gray-400 block mb-1">JPY (日幣)</label>
                                    <div className="flex items-center gap-2">
                                        <input 
                                            type="number" 
                                            value={editingProjectData.rates?.JPY || 0.23} 
                                            onChange={(e) => setEditingProjectData({
                                                ...editingProjectData, 
                                                rates: { ...editingProjectData.rates, JPY: e.target.value }
                                            })}
                                            className="w-full bg-transparent font-bold text-gray-800 outline-none"
                                            placeholder="0.23"
                                            step="0.01"
                                        />
                                        <span className="text-[10px] text-gray-400 font-bold shrink-0">TWD</span>
                                    </div>
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-blue-100">
                                    <label className="text-[10px] font-bold text-gray-400 block mb-1">THB (泰銖)</label>
                                    <div className="flex items-center gap-2">
                                        <input 
                                            type="number" 
                                            value={editingProjectData.rates?.THB || 1.0} 
                                            onChange={(e) => setEditingProjectData({
                                                ...editingProjectData, 
                                                rates: { ...editingProjectData.rates, THB: e.target.value }
                                            })}
                                            className="w-full bg-transparent font-bold text-gray-800 outline-none"
                                            placeholder="1.0"
                                            step="0.1"
                                        />
                                        <span className="text-[10px] text-gray-400 font-bold shrink-0">TWD</span>
                                    </div>
                                </div>
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
            {/* Header: No Arrow on Left */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">專案管理</h2>
                <button 
                    onClick={() => { 
                        setEditingProjectData({id:'', name:'', icon:'project_daily', rates: { JPY: 0.23, THB: 1 }}); 
                        setIsEditingProject(true); 
                    }} 
                    className="bg-gray-900 text-white p-2 rounded-xl shadow-lg shadow-gray-300 active:scale-90 transition-transform"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-4">
                {ledgerData.projects?.map((p, idx) => { 
                    const ProjIcon = getIconComponent(p.icon); 
                    const isLast = idx === (ledgerData.projects.length - 1);
                    const isFirst = idx === 0;
                    const rates = p.rates || { JPY: 0.23, THB: 1 };

                    return (
                        <div key={p.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors">
                                    <ProjIcon size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800 text-lg">{p.name}</div>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {p.id === 'daily' ? (
                                            <span className="bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-md text-[10px] font-bold">預設</span>
                                        ) : (
                                            <>
                                                {/* [New] Rate Pills */}
                                                <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                                                    <span className="opacity-50 text-[8px]">JPY</span> {rates.JPY}
                                                </span>
                                                <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1">
                                                    <span className="opacity-50 text-[8px]">THB</span> {rates.THB}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                {/* [Sort Buttons] */}
                                <div className="flex flex-col gap-1 mr-2 bg-gray-50 p-1 rounded-lg">
                                    <button 
                                        onClick={() => moveProject(idx, 'up')} 
                                        disabled={isFirst}
                                        className="p-1 hover:bg-white rounded disabled:opacity-30 transition-all text-gray-500 hover:text-gray-900 shadow-sm"
                                    >
                                        <ChevronUp size={14}/>
                                    </button>
                                    <button 
                                        onClick={() => moveProject(idx, 'down')} 
                                        disabled={isLast}
                                        className="p-1 hover:bg-white rounded disabled:opacity-30 transition-all text-gray-500 hover:text-gray-900 shadow-sm"
                                    >
                                        <ChevronDown size={14}/>
                                    </button>
                                </div>

                                {p.id !== 'daily' && (
                                    <>
                                        <div className="w-[1px] h-8 bg-gray-100 mx-1"></div>
                                        <button 
                                            onClick={() => { setEditingProjectData(p); setIsEditingProject(true); }} 
                                            className="p-2 text-gray-300 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                                        >
                                            <Edit2 size={18} />
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteProject(p.id)} 
                                            className="p-2 text-red-200 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
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