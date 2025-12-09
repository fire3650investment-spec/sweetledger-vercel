import React from 'react';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { getIconComponent } from '../utils/helpers';

export default function ProjectsView({
  ledgerData,
  isEditingProject,
  setIsEditingProject,
  editingProjectData,
  setEditingProjectData,
  handleSaveProject,
  handleDeleteProject
}) {
    if (!ledgerData) return null;
    
    if (isEditingProject) { 
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingProjectData.id ? '編輯專案' : '新增專案'}</h2>
                <div className="space-y-4">
                    <input type="text" value={editingProjectData.name} onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})} placeholder="專案名稱" className="w-full p-4 bg-gray-50 rounded-xl outline-none"/>
                    <div className="grid grid-cols-4 gap-2">
                        {['project_daily', 'project_travel', 'project_house', 'project_private'].map(icon => { 
                            const IconCmp = getIconComponent(icon); 
                            return (
                                <button key={icon} onClick={() => setEditingProjectData({...editingProjectData, icon})} className={`p-4 rounded-xl flex justify-center ${editingProjectData.icon === icon ? 'bg-rose-100 text-rose-600' : 'bg-gray-50'}`}>
                                    <IconCmp size={24} />
                                </button>
                            )
                        })}
                    </div>
                    <button onClick={handleSaveProject} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">儲存</button>
                    <button onClick={() => setIsEditingProject(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">取消</button>
                </div>
            </div>
        ) 
    }
    
    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">專案管理</h2>
                <button onClick={() => { setIsEditingProject(true); setEditingProjectData({id:'', name:'', icon:'project_daily'}); }} className="bg-gray-900 text-white p-2 rounded-lg"><Plus size={20} /></button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {ledgerData.projects?.map(p => { 
                    const ProjIcon = getIconComponent(p.icon); 
                    return (
                        <div key={p.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"><ProjIcon size={24} /></div>
                                <div><div className="font-bold text-gray-800">{p.name}</div><div className="text-xs text-gray-400">{p.id === 'daily' ? '預設' : '自訂專案'}</div></div>
                            </div>
                            {p.id !== 'daily' && (
                                <div className="flex gap-2">
                                    <button onClick={() => { setEditingProjectData(p); setIsEditingProject(true); }} className="p-2 text-gray-400 hover:text-gray-600"><Edit2 size={18} /></button>
                                    <button onClick={() => handleDeleteProject(p.id)} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}