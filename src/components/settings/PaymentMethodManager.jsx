
import React, { useState } from 'react';
import { CreditCard, Plus, X, Trash2, Check, ArrowUp, ArrowDown, Edit2 } from 'lucide-react';
import { generateId } from '../../utils/helpers';

export default function PaymentMethodManager({
    ledgerData,
    updatePaymentMethods
}) {
    // Determine methods: default to empty array if not yet migrated (migration happens in bg)
    // But typically we want to show fallbacks if null
    const methods = ledgerData?.paymentMethods || [];

    const [isEditing, setIsEditing] = useState(false);
    const [editingData, setEditingData] = useState({ id: '', name: '' });

    const handleMove = (index, direction) => {
        const newMethods = [...methods];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newMethods.length) return;
        [newMethods[index], newMethods[targetIndex]] = [newMethods[targetIndex], newMethods[index]];
        updatePaymentMethods(newMethods);
    };

    const handleDelete = (id) => {
        if (!window.confirm('確定要刪除此支付方式嗎？')) return;
        const newMethods = methods.filter(m => m.id !== id);
        updatePaymentMethods(newMethods);
    };

    const handleSave = () => {
        if (!editingData.name.trim()) return;

        let newMethods = [...methods];
        if (editingData.id) {
            // Edit
            newMethods = newMethods.map(m => m.id === editingData.id ? { ...m, name: editingData.name } : m);
        } else {
            // Add
            newMethods.push({
                id: generateId(),
                name: editingData.name
            });
        }
        updatePaymentMethods(newMethods);
        setIsEditing(false);
        setEditingData({ id: '', name: '' });
    };

    return (
        <>
            <div className="p-4 flex justify-between items-center active:bg-gray-50 transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><CreditCard size={18} /></div>
                    <span className="font-bold text-gray-700 text-sm">支付方式管理</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 font-bold">
                        {methods.length} 組
                    </span>
                    <Edit2 size={16} className="text-gray-300" />
                </div>
            </div>

            {/* Config Modal */}
            {isEditing && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={() => setIsEditing(false)}>
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-scale-up" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2"><CreditCard size={18} /> 支付方式管理</h3>
                            <button onClick={() => setIsEditing(false)} className="p-1.5 bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100"><X size={18} /></button>
                        </div>

                        <p className="text-xs text-gray-400 mb-4">設定您的常用支付方式，例如「現金」、「信用卡」、「悠遊卡」等。</p>

                        <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1 mb-4">
                            {methods.map((method, index) => (
                                <div key={method.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    {/* Sort Controls */}
                                    <div className="flex flex-col gap-1">
                                        <button
                                            onClick={() => handleMove(index, 'up')}
                                            disabled={index === 0}
                                            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:hover:text-gray-400"
                                        >
                                            <ArrowUp size={12} />
                                        </button>
                                        <button
                                            onClick={() => handleMove(index, 'down')}
                                            disabled={index === methods.length - 1}
                                            className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:hover:text-gray-400"
                                        >
                                            <ArrowDown size={12} />
                                        </button>
                                    </div>

                                    {/* Input Field */}
                                    <input
                                        value={method.name}
                                        onChange={(e) => {
                                            const newMethods = [...methods];
                                            newMethods[index].name = e.target.value;
                                            // Don't save immediately to avoid flicker/perf, typically we want local state or save on blur
                                            // But for simplicity here with context, we might want a 'Save' button or local state copy.
                                            // Given the 'Edit' modal approach, let's update context directly or better:
                                            // User requested "Edit/Delete/Sort".
                                            // Let's implement real-time edit for simplicity as per previous patterns?
                                            // Actually, context update on every keystroke in list is bad.
                                            // Let's use a local state copy for the modal?
                                            // Ah, wait. The modal *IS* the manager?
                                            // For simplicity, let's treat this input as a "Edit Name" trigger?
                                            // No, let's make it an input. 
                                            // For safety, let's just use `updatePaymentMethods` on blur?
                                        }}
                                        onBlur={(e) => {
                                            const newMethods = [...methods];
                                            newMethods[index].name = e.target.value;
                                            updatePaymentMethods(newMethods);
                                        }}
                                        className="flex-1 bg-transparent font-bold text-gray-700 outline-none text-sm"
                                    />

                                    <button
                                        onClick={() => handleDelete(method.id)}
                                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                            {methods.length === 0 && (
                                <div className="text-center py-6 border border-dashed border-gray-200 rounded-xl">
                                    <span className="text-xs text-gray-400">暫無設定</span>
                                </div>
                            )}
                        </div>

                        {/* Valid Add New */}
                        <div className="flex gap-2">
                            <input
                                value={editingData.name}
                                onChange={(e) => setEditingData({ ...editingData, name: e.target.value })}
                                placeholder="新增項目 (例: LINE Pay)"
                                className="flex-1 bg-gray-50 px-4 py-3 rounded-xl text-sm font-bold outline-none border border-transparent focus:bg-white focus:border-rose-200"
                                onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); }}
                            />
                            <button
                                onClick={handleSave}
                                disabled={!editingData.name}
                                className="bg-gray-900 text-white p-3 rounded-xl disabled:opacity-50"
                            >
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
