// src/components/add-expense/CategorySelector.jsx
import React, { memo } from 'react';
import { Plus } from 'lucide-react';
import { getIconComponent, getCategoryStyle } from '../../utils/helpers';
import { hapticLight } from '../../utils/haptics'; // [iOS] Haptics

const CategorySelector = memo(function CategorySelector({ categories, selectedCategory, onSelect, onAddNew }) {
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
                        const style = getCategoryStyle(cat, 'input');

                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    hapticLight(); // [iOS] 震動
                                    onSelect(cat);
                                }}
                                className="flex flex-col items-center gap-2 group p-1"
                            >
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

                    {/* +新增 按鈕 */}
                    {onAddNew && (
                        <button
                            onClick={() => {
                                hapticLight();
                                onAddNew();
                            }}
                            className="flex flex-col items-center gap-2 group p-1"
                        >
                            <div className="w-14 h-14 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-rose-300 group-hover:text-rose-500 group-active:scale-95 transition-all">
                                <Plus size={24} />
                            </div>
                            <span className="text-xs font-bold text-gray-400">新增</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
});

export default CategorySelector;