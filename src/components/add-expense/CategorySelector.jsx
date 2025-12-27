// src/components/add-expense/CategorySelector.jsx
import React from 'react';
import { getIconComponent, getCategoryStyle } from '../../utils/helpers';

export default function CategorySelector({ categories, selectedCategory, onSelect }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[70vh]">
         <div className="flex justify-center pt-3 pb-4 shrink-0">
            <div className="w-10 h-1 bg-gray-200 rounded-full"></div>
         </div>
         <div className="px-6 mb-2 shrink-0">
            <h3 className="text-lg font-bold text-gray-800">選擇分類</h3>
         </div>
         
         <div className="flex-1 overflow-y-auto p-4 pt-0">
             <div className="grid grid-cols-4 gap-4 pb-[env(safe-area-inset-bottom)]">
                {categories.map(cat => {
                    const Icon = getIconComponent(cat.icon);
                    const isSelected = selectedCategory?.id === cat.id;
                    
                    // [Key Logic] 使用 Input Mode 取得樣式
                    // input 模式下：
                    // containerClass -> bg-gray-50 border-gray-100 (未選中)
                    // activeClass -> bg-rose-500 text-white (選中)
                    const style = getCategoryStyle(cat, 'input');
                    
                    return (
                        <button key={cat.id} onClick={() => onSelect(cat)} className="flex flex-col items-center gap-2 group p-1">
                            <div className={`
                                w-14 h-14 rounded-3xl flex items-center justify-center transition-all shrink-0 border
                                ${isSelected ? style.activeClass : style.containerClass}
                                ${isSelected ? 'scale-110 shadow-lg' : 'group-active:scale-95'}
                            `}>
                                <Icon size={24} className={isSelected ? 'text-white' : style.iconClass} />
                            </div>
                            <span className={`text-xs font-bold ${isSelected ? 'text-gray-900' : 'text-gray-400'}`}>
                                {cat.name}
                            </span>
                        </button>
                    )
                })}
             </div>
         </div>
    </div>
  );
}