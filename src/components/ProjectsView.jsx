// src/components/ProjectsView.jsx
import React from 'react';
import { 
  ArrowLeft, Plus, MoreVertical, Edit2, Trash2, 
  Check, X, Briefcase, Globe 
} from 'lucide-react';
import { getIconComponent } from '../utils/helpers';
import { COLORS } from '../utils/constants';

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
  handleDeleteProject,
  handleReorderProjects
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

  // [Optimistic UI] 直接呼叫父層函式，不等待 Promise
  const onSaveWrapper = () => {
      handleSaveProject(); 
      // 注意：App.jsx 中的 handleSaveProject 已經包含 setIsEditingProject(false)
      // 所以這裡不需要手動關閉，交由狀態流驅動即可
  };

  const onDeleteWrapper = (id) => {
      handleDeleteProject(id);
      setIsEditingProject(false); // 確保視窗立即關閉
  };

  const onSelectProject = (id) => {
      setCurrentProjectId(id);
      // 可選擇是否自動返回首頁，目前保持在專案頁讓使用者確認
  };

  // --- Render Helpers ---
  const ProjectCard = ({ project }) => {
      const isSelected = currentProjectId === project.id;
      const Icon = getIconComponent(project.icon || 'briefcase');
      
      // 匯率顯示邏輯
      const rates = project.rates || { JPY: 0.23, THB: 1 };
      
      return (
          <div 
            onClick={() => onSelectProject(project.id)}
            className={`relative p-5 rounded-3xl border-2 transition-all active:scale-95 duration-200 cursor-pointer overflow-hidden group
                ${isSelected 
                    ? 'bg-gray-900 border-gray-900 text-white shadow-xl shadow-gray-200' 
                    : 'bg-white border-gray-100 text-gray-600 hover:border-gray-200'
                }`}
          >
              <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl
                      ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Icon size={24} />
                  </div>
                  
                  {/* Edit Button */}
                  <button 
                    onClick={(e) => onEditClick(e, project)}
                    className={`p-2 rounded-full transition-colors ${isSelected ? 'hover:bg-white/20 text-white/50 hover:text-white' : 'hover:bg-gray-100 text-gray-300 hover:text-gray-500'}`}
                  >
                      <Edit2 size={16} />
                  </button>
              </div>

              <div>
                  <h3 className={`font-bold text-lg mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>{project.name}</h3>
                  <div className={`flex items-center gap-2 text-xs font-bold ${isSelected ? 'text-white/60' : 'text-gray-400'}`}>
                      {project.id === 'daily' ? (
                          <span>預設專案</span>
                      ) : (
                          <div className="flex gap-2">
                              <span className="flex items-center gap-1"><Globe size={10}/> JPY {rates.JPY}</span>
                              <span className="flex items-center gap-1"><Globe size={10}/> THB {rates.THB}</span>
                          </div>
                      )}
                  </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                  <div className="absolute bottom-5 right-5 text-emerald-400">
                      <Check size={24} strokeWidth={3} />
                  </div>
              )}
          </div>
      );
  };

  return (
    <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 min-h-screen bg-gray-50 animate-in fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
              <button onClick={onBack} className="p-2 bg-white rounded-full text-gray-500 shadow-sm active:scale-90 transition-transform">
                  <ArrowLeft size={20} />
              </button>
              <h1 className="text-2xl font-bold text-gray-900">專案切換</h1>
          </div>
          <button onClick={onAddClick} className="p-3 bg-gray-900 text-white rounded-full shadow-lg shadow-gray-300 active:scale-90 transition-transform">
              <Plus size={20} />
          </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4">
          {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* New Project Placeholder */}
          <button 
            onClick={onAddClick}
            className="p-5 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center gap-2 text-gray-400 font-bold hover:bg-white hover:border-gray-300 transition-all min-h-[140px]"
          >
              <Plus size={20} /> 建立新專案
          </button>
      </div>

      {/* Edit Project Modal */}
      {isEditingProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsEditingProject(false)} />
              <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl relative z-10 overflow-hidden animate-scale-up">
                  
                  <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
                      <h3 className="font-bold text-gray-800 text-lg">{editingProjectData.id ? '編輯專案' : '新專案'}</h3>
                      <button onClick={() => setIsEditingProject(false)} className="p-2 bg-white rounded-full text-gray-400 hover:text-gray-600 shadow-sm"><X size={20}/></button>
                  </div>

                  <div className="p-6 space-y-6">
                      {/* Name */}
                      <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">專案名稱</label>
                          <input 
                              type="text" 
                              value={editingProjectData.name} 
                              onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})} 
                              placeholder="例如：2024 日本行" 
                              className="w-full bg-gray-50 px-4 py-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-2 focus:ring-rose-100 transition-all"
                              autoFocus
                          />
                      </div>

                      {/* Icon */}
                      {/* 簡化版圖示選擇，未來可擴充 */}
                      <div>
                          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">圖示</label>
                          <div className="flex gap-3">
                              {['project_daily', 'project_travel', 'project_house', 'briefcase'].map(icon => {
                                  const Icon = getIconComponent(icon);
                                  const isSelected = editingProjectData.icon === icon;
                                  return (
                                      <button 
                                          key={icon}
                                          onClick={() => setEditingProjectData({...editingProjectData, icon})}
                                          className={`p-3 rounded-xl transition-all ${isSelected ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-50 text-gray-400'}`}
                                      >
                                          <Icon size={20} />
                                      </button>
                                  )
                              })}
                          </div>
                      </div>

                      {/* Rates (Only for new or non-daily) */}
                      {editingProjectData.id !== 'daily' && (
                          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                              <h4 className="text-xs font-bold text-blue-500 mb-3 flex items-center gap-2"><Globe size={14}/> 專案匯率設定</h4>
                              <div className="grid grid-cols-2 gap-3">
                                  <div>
                                      <label className="text-[10px] font-bold text-blue-300 block mb-1">JPY (日幣)</label>
                                      <input 
                                          type="number" 
                                          value={editingProjectData.rates?.JPY || 0.23} 
                                          onChange={(e) => setEditingProjectData({
                                              ...editingProjectData, 
                                              rates: { ...editingProjectData.rates, JPY: parseFloat(e.target.value) }
                                          })}
                                          className="w-full bg-white px-3 py-2 rounded-lg text-sm font-bold text-gray-700 outline-none"
                                      />
                                  </div>
                                  <div>
                                      <label className="text-[10px] font-bold text-blue-300 block mb-1">THB (泰銖)</label>
                                      <input 
                                          type="number" 
                                          value={editingProjectData.rates?.THB || 1} 
                                          onChange={(e) => setEditingProjectData({
                                              ...editingProjectData, 
                                              rates: { ...editingProjectData.rates, THB: parseFloat(e.target.value) }
                                          })}
                                          className="w-full bg-white px-3 py-2 rounded-lg text-sm font-bold text-gray-700 outline-none"
                                      />
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>

                  <div className="p-4 border-t border-gray-100 flex gap-3 bg-white">
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