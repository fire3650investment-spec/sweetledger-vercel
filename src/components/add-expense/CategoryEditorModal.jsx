// src/components/add-expense/CategoryEditorModal.jsx
import React from 'react';
import { X, Trash2, Check, Palette, LayoutGrid } from 'lucide-react';
import { getIconComponent, getCategoryStyle } from '../../utils/helpers';
import { COLORS, AVAILABLE_ICONS } from '../../utils/constants';

export default function CategoryEditorModal({
    isOpen,
    onClose,
    editingData,
    setEditingData,
    onSave,
    onDelete
}) {
    if (!isOpen || !editingData) return null;

    return (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl relative z-10 flex flex-col max-h-[90vh] animate-slide-up">

                {/* Header */}
                <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100 rounded-t-3xl">
                    <h3 className="font-bold text-gray-800 text-lg">{editingData.id ? '編輯分類' : '新增分類'}</h3>
                    <button onClick={onClose} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-600"><X size={20} /></button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Preview */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center gap-2">
                            {(() => {
                                const style = getCategoryStyle(editingData, 'display');
                                return (
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl transition-colors ${style.containerClass}`} style={style.containerStyle}>
                                        {React.createElement(getIconComponent(editingData.icon), { size: 36, className: style.iconClass, style: style.iconStyle })}
                                    </div>
                                );
                            })()}
                            <span className="font-bold text-gray-800">{editingData.name || '分類名稱'}</span>
                        </div>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2">名稱</label>
                        <input
                            type="text"
                            value={editingData.name}
                            onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
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
                                        setEditingData({ ...editingData, colorId: c.name?.toLowerCase() || 'slate' });
                                    }}
                                    className={`w-10 h-10 rounded-full shrink-0 transition-transform ${editingData.colorId === (c.name?.toLowerCase()) ? 'ring-4 ring-offset-2 ring-gray-200 scale-110' : 'hover:scale-105'}`}
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
                                const isSelected = editingData.icon === iconName;
                                return (
                                    <button
                                        key={iconName}
                                        onClick={() => setEditingData({ ...editingData, icon: iconName })}
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isSelected ? 'bg-gray-900 text-white shadow-lg scale-105' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        <Icon size={20} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-100 flex gap-3 bg-white pb-[calc(env(safe-area-inset-bottom)+1rem)] rounded-b-3xl">
                    {editingData.id && onDelete && (
                        <button onClick={() => onDelete(editingData.id)} className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-colors">
                            <Trash2 size={20} />
                        </button>
                    )}
                    <button
                        onClick={onSave}
                        disabled={!editingData.name}
                        className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> 儲存
                    </button>
                </div>
            </div>
        </div>
    );
}
