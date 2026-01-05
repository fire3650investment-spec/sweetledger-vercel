
import React, { useState } from 'react';
import { LayoutGrid, ArrowLeftRight, Plus, X, Trash2, Check, Palette } from 'lucide-react';
import { getIconComponent, getCategoryStyle } from '../../utils/helpers';
import { DEFAULT_CATEGORIES, COLORS, AVAILABLE_ICONS } from '../../utils/constants';

export default function CategoryManager({
    ledgerData,
    isEditingCategory,
    setIsEditingCategory,
    editingCategoryData,
    setEditingCategoryData,
    handleSaveCategory,
    handleDeleteCategory,
    handleReorderCategories
}) {
    const categories = ledgerData?.customCategories || DEFAULT_CATEGORIES;

    // Local State for Reordering
    const [isReorderMode, setIsReorderMode] = useState(false);
    const [activeSortId, setActiveSortId] = useState(null);

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

    const openNewCategoryModal = () => {
        setEditingCategoryData({ id: '', name: '', icon: 'food', colorId: 'slate' });
        setIsEditingCategory(true);
    };

    const openEditCategoryModal = (cat) => {
        setEditingCategoryData(cat);
        setIsEditingCategory(true);
    };

    const onSaveCategoryWrapper = () => {
        setIsEditingCategory(false);
        handleSaveCategory();
    };

    const onDeleteCategoryWrapper = (id) => {
        setIsEditingCategory(false);
        handleDeleteCategory(id);
    };

    return (
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

            <style>{`
                @keyframes wiggle {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-2deg); }
                    75% { transform: rotate(2deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>

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
        </div>
    );
}
