// src/components/ProjectsView.jsx
import React from 'react';
import { 
  ArrowLeft, Plus, Edit2, Trash2, 
  Check, X, Globe
} from 'lucide-react';
import { getIconComponent } from '../utils/helpers';

export default function ProjectsView({
  ledgerData,
  onBack,
  currentProjectId,
  setCurrentProjectId,
  isEditingProject,
  setIsEditingProject,
  editingProjectData,
  setEditingProjectData,
  handleSaveProject,
  handleDeleteProject
}) {
  if (!ledgerData) return null;
  const projects = ledgerData.projects || [];

  // --- Handlers ---
  
  const onEditClick = (e, project) => {
      e.stopPropagation();
      setEditingProjectData(project);
      setIsEditingProject(true);
  };

  const onAddClick = () => {
      setEditingProjectData({ id: '', name: '', icon: 'project_daily' });
      setIsEditingProject(true);
  };

  const onSaveWrapper = () => {
      // 在存檔前確保匯率是數字 (簡單防禦)
      if (editingProjectData.rates) {
          editingProjectData.rates.JPY = parseFloat(editingProjectData.rates.JPY);
          editingProjectData.rates.THB = parseFloat(editingProjectData.rates.THB);
      }
      handleSaveProject(); 
  };

  const onDeleteWrapper = (id) => {
      handleDeleteProject(id);
      setIsEditingProject(false);
  };

  const onSelectProject = (id) => {
      setCurrentProjectId(id);
  };

  // --- Component: Project Card ---
  const ProjectCard = ({ project }) => {
      const isSelected = currentProjectId === project.id;
      const Icon = getIconComponent(project.icon || 'briefcase');
      const rates = project.rates || { JPY: 0.23, THB: 1 };
      
      return (
          <div 
            onClick={() => onSelectProject(project.id)}
            className={`relative p-5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden group border
                ${isSelected 
                    ? 'bg-white border-rose-500 ring-4 ring-rose-100 shadow-xl z-10' 
                    : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
          >
              <div className="flex justify-between items-start mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300
                      ${isSelected ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 rotate-3 scale-110' : 'bg-gray-50 text-gray-400'}`}>
                      <Icon size={24} />
                  </div>
                  
                  <button 
                    onClick={(e) => onEditClick(e, project)}
                    className={`p-2 rounded-full transition-colors active:scale-95 ${isSelected ? 'text-rose-200 hover:text-rose-500 hover:bg-rose-50' : 'text-gray-300 hover:text-gray-500 hover:bg-gray-100'}`}
                  >
                      <Edit2 size={16} />
                  </button>
              </div>

              <div>
                  <h3 className={`font-bold text-lg mb-2 transition-colors ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>{project.name}</h3>
                  <div className="flex flex-wrap gap-2">
                      {project.id === 'daily' ? (
                          <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-lg text-[10px] font-bold">預設專案</span>
                      ) : (
                          <>
                              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                                  <span className="opacity-50 text-xs">JPY</span> {rates.JPY}
                              </span>
                              <span className="bg-orange-50 text-orange-600 px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                                  <span className="opacity-50 text-xs">THB</span> {rates.THB}
                              </span>
                          </>
                      )}
                  </div>
              </div>

              {/* Selection Indicator (Animated) */}
              {isSelected && (
                  <div className="absolute top-5 right-5 text-rose-500 animate-in fade-in zoom-in duration-300">
                      <Check size={20} strokeWidth={3} />
                  </div>
              )}
          </div>
      );
  };

  return (
    <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 min-h-screen bg-gray-50/50 animate-in fade-in">
      
      {/* Header - Aligned with StatsView */}
      <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-2 -ml-2 text-gray-400 hover:text-gray-600 active:scale-90 transition-transform">
                  <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">專案切換</h2>
          </div>
          {/* Top Add Button (Secondary) */}
          <button onClick={onAddClick} className="p-2 bg-gray-900 text-white rounded-xl shadow-lg shadow-gray-300 active:scale-90 transition-transform">
              <Plus size={20} />
          </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4">
          {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* New Project Placeholder - Elegant White Card */}
          <button 
            onClick={onAddClick}
            className="p-5 rounded-2xl border border-gray-100 bg-white flex flex-col items-center justify-center gap-2 text-gray-400 font-bold hover:bg-gray-50 hover:border-gray-200 transition-all shadow-sm min-h-[120px] group"
          >
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-rose-50 group-hover:text-rose-500 transition-colors">
                 <Plus size={20} />
              </div>
              <span className="text-xs group-hover:text-rose-500 transition-colors">建立新專案</span>
          </button>
      </div>

      {/* Edit Project Modal - Island Style */}
      {isEditingProject && (
          <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:px-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsEditingProject(false)} />
              <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-slide-up">
                  
                  {/* Modal Header */}
                  <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100 rounded-t-3xl">
                      <h3 className="font-bold text-gray-800 text-lg">{editingProjectData.id ? '編輯專案' : '新專案'}</h3>
                      <button onClick={() => setIsEditingProject(false)} className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 shadow-sm"><X size={20}/></button>
                  </div>

                  <div className="p-6 space-y-6 overflow-y-auto">
                      {/* Name Input */}
                      <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">專案名稱</label>
                          <input 
                              type="text" 
                              value={editingProjectData.name} 
                              onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})} 
                              placeholder="例如：2024 日本行" 
                              className="w-full bg-gray-50 px-4 py-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-rose-100 transition-all placeholder:text-gray-300"
                              autoFocus
                          />
                      </div>

                      {/* Icon Picker */}
                      <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">圖示</label>
                          <div className="flex gap-3 overflow-x-auto pb-4 -mb-2 no-scrollbar px-1">
                              {['project_daily', 'project_travel', 'project_house', 'briefcase', 'gift', 'heart', 'coffee', 'car'].map(icon => {
                                  const Icon = getIconComponent(icon);
                                  const isSelected = editingProjectData.icon === icon;
                                  return (
                                      <button 
                                          key={icon}
                                          onClick={() => setEditingProjectData({...editingProjectData, icon})}
                                          className={`p-3 rounded-xl shrink-0 transition-all ${isSelected ? 'bg-gray-900 text-white shadow-lg scale-110' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                      >
                                          <Icon size={24} />
                                      </button>
                                  )
                              })}
                          </div>
                      </div>

                      {/* Rates Settings */}
                      {editingProjectData.id !== 'daily' && (
                          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                              <h4 className="text-xs font-bold text-blue-500 mb-4 flex items-center gap-2 uppercase tracking-wider"><Globe size={14}/> 專案匯率</h4>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-white p-3 rounded-xl border border-blue-100">
                                      <label className="text-[10px] font-bold text-gray-400 block mb-1">JPY (日幣)</label>
                                      <div className="flex items-center gap-2">
                                        <input 
                                            type="number" 
                                            value={editingProjectData.rates?.JPY} 
                                            onChange={(e) => setEditingProjectData({
                                                ...editingProjectData, 
                                                rates: { ...editingProjectData.rates, JPY: e.target.value }
                                            })}
                                            className="w-full bg-transparent font-bold text-gray-800 outline-none"
                                            placeholder="0.23"
                                        />
                                        <span className="text-[10px] text-gray-400 font-bold shrink-0">TWD</span>
                                      </div>
                                  </div>
                                  <div className="bg-white p-3 rounded-xl border border-blue-100">
                                      <label className="text-[10px] font-bold text-gray-400 block mb-1">THB (泰銖)</label>
                                      <div className="flex items-center gap-2">
                                        <input 
                                            type="number" 
                                            value={editingProjectData.rates?.THB} 
                                            onChange={(e) => setEditingProjectData({
                                                ...editingProjectData, 
                                                rates: { ...editingProjectData.rates, THB: e.target.value }
                                            })}
                                            className="w-full bg-transparent font-bold text-gray-800 outline-none"
                                            placeholder="1.0"
                                        />
                                        <span className="text-[10px] text-gray-400 font-bold shrink-0">TWD</span>
                                      </div>
                                  </div>
                              </div>
                              <p className="text-[10px] text-blue-300 mt-3 text-center">💡 用於自動計算消費分析的 TWD 總額</p>
                          </div>
                      )}
                  </div>

                  {/* Modal Footer */}
                  <div className="p-4 border-t border-gray-100 flex gap-3 bg-white pb-[calc(env(safe-area-inset-bottom)+1rem)] rounded-b-3xl">
                      {editingProjectData.id && editingProjectData.id !== 'daily' && (
                          <button 
                              onClick={() => onDeleteWrapper(editingProjectData.id)} 
                              className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-100 active:scale-95 transition-colors"
                          >
                              <Trash2 size={20} />
                          </button>
                      )}
                      <button 
                          onClick={onSaveWrapper}
                          disabled={!editingProjectData.name}
                          className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                          <Check size={20} /> 儲存
                      </button>
                  </div>

              </div>
          </div>
      )}
    </div>
  );
}