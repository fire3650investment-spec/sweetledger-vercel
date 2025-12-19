// src/components/ScanReceiptModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Check, User, Users, Edit2 } from 'lucide-react';
import { formatCurrency } from '../utils/helpers';

export default function ScanReceiptModal({
  isOpen,
  onClose,
  onConfirm,
  initialItems = [],
  currency = 'TWD',
  users = {} // 用於顯示頭像/名稱
}) {
    if (!isOpen) return null;

    // --- State ---
    const [items, setItems] = useState([]);
    const [hostId, setHostId] = useState(null);
    const [guestId, setGuestId] = useState(null);

    // --- Init ---
    useEffect(() => {
        // 1. 初始化品項，預設歸屬為 'shared'
        const processedItems = initialItems.map((item, idx) => ({
            id: Date.now() + idx,
            name: item.name || '未命名品項',
            price: parseFloat(item.price) || 0,
            quantity: item.quantity || 1,
            owner: 'shared' // 'shared' | 'host' | 'guest'
        }));
        setItems(processedItems);

        // 2. 識別 Host/Guest ID
        const hId = Object.keys(users).find(uid => users[uid].role === 'host');
        const gId = Object.keys(users).find(uid => users[uid].role === 'guest');
        setHostId(hId);
        setGuestId(gId);
    }, [initialItems, users]);

    // --- Handlers ---
    
    // 1. 核心互動：點擊輪播 (Tap-to-Cycle)
    const handleItemClick = (id) => {
        setItems(prev => prev.map(item => {
            if (item.id !== id) return item;
            
            // Cycle: Shared -> Host -> Guest -> Shared
            let nextOwner = 'shared';
            if (item.owner === 'shared') nextOwner = 'host';
            else if (item.owner === 'host') nextOwner = 'guest';
            else nextOwner = 'shared';

            return { ...item, owner: nextOwner };
        }));
    };

    // 2. 編輯數值
    const handleValueChange = (id, field, value) => {
        setItems(prev => prev.map(item => {
            if (item.id !== id) return item;
            return { ...item, [field]: value };
        }));
    };

    // 3. 刪除與新增
    const handleDelete = (id) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const handleAddItem = () => {
        setItems(prev => [
            ...prev, 
            { id: Date.now(), name: '新項目', price: 0, quantity: 1, owner: 'shared' }
        ]);
    };

    // 4. 計算與提交
    const handleConfirm = () => {
        let totalAmount = 0;
        let hostPay = 0;
        let guestPay = 0;
        const noteItems = [];

        items.forEach(item => {
            const amount = parseFloat(item.price);
            if (!amount) return;

            totalAmount += amount;
            noteItems.push(item.name);

            if (item.owner === 'host') {
                hostPay += amount;
            } else if (item.owner === 'guest') {
                guestPay += amount;
            } else {
                // Shared
                hostPay += amount / 2;
                guestPay += amount / 2;
            }
        });

        // 建構回傳資料
        const result = {
            amount: totalAmount,
            note: noteItems.join(', '),
            splitType: 'custom',
            customSplit: {}
        };
        
        if (hostId) result.customSplit[hostId] = hostPay;
        if (guestId) result.customSplit[guestId] = guestPay;

        onConfirm(result);
        onClose();
    };

    // --- Visual Helpers ---
    const getOwnerStyles = (owner) => {
        switch (owner) {
            case 'host':
                return 'bg-blue-50 border-blue-200 text-blue-700';
            case 'guest':
                return 'bg-pink-50 border-pink-200 text-pink-700';
            default: // shared
                return 'bg-white border-gray-100 text-gray-700';
        }
    };

    const getOwnerIcon = (owner) => {
        if (owner === 'host') return <User size={16} className="text-blue-500 fill-blue-100"/>;
        if (owner === 'guest') return <User size={16} className="text-pink-500 fill-pink-100"/>;
        return <Users size={16} className="text-gray-400"/>;
    };

    const getOwnerLabel = (owner) => {
        if (owner === 'host') return users[hostId]?.name || 'Host';
        if (owner === 'guest') return users[guestId]?.name || 'Guest';
        return '平分';
    };

    // Summary Calculation for Header
    const currentTotal = items.reduce((sum, i) => sum + (parseFloat(i.price) || 0), 0);

    return (
        <div className="fixed inset-0 z-[100] bg-gray-50 flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex justify-between items-center pt-[calc(env(safe-area-inset-top)+0.5rem)] shadow-sm shrink-0">
                <div>
                    <h2 className="font-bold text-lg text-gray-800">分帳掃描器</h2>
                    <p className="text-xs text-gray-400">點擊項目切換歸屬</p>
                </div>
                <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">{formatCurrency(currentTotal, currency)}</div>
                    <div className="text-[10px] text-gray-400 font-medium">總金額</div>
                </div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-32">
                {items.map((item) => (
                    <div 
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`relative rounded-2xl border-2 p-3 transition-all active:scale-[0.98] duration-200 flex items-center justify-between shadow-sm ${getOwnerStyles(item.owner)}`}
                    >
                        {/* Left: Input Fields */}
                        <div className="flex-1 min-w-0 mr-4" onClick={(e) => e.stopPropagation()}>
                            <input 
                                type="text" 
                                value={item.name}
                                onChange={(e) => handleValueChange(item.id, 'name', e.target.value)}
                                className="w-full bg-transparent font-bold text-sm mb-1 outline-none placeholder-gray-300"
                                placeholder="品項名稱"
                            />
                            <div className="flex items-center gap-1">
                                <span className="text-xs opacity-50">$</span>
                                <input 
                                    type="number" 
                                    value={item.price}
                                    onChange={(e) => handleValueChange(item.id, 'price', e.target.value)}
                                    className="w-20 bg-transparent font-bold text-lg outline-none placeholder-gray-300"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Right: Owner Indicator */}
                        <div className="flex flex-col items-end gap-1 pointer-events-none">
                            <div className="flex items-center gap-1.5 bg-white/50 px-2 py-1 rounded-lg backdrop-blur-sm">
                                {getOwnerIcon(item.owner)}
                                <span className="text-xs font-bold">{getOwnerLabel(item.owner)}</span>
                            </div>
                        </div>

                        {/* Delete Action (Top Right absolute) */}
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Trash2 size={12} />
                        </button>
                    </div>
                ))}

                <button 
                    onClick={handleAddItem}
                    className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-bold flex items-center justify-center gap-2 hover:bg-gray-100 hover:border-gray-300 transition-all active:scale-95"
                >
                    <Plus size={20} />
                    手動新增項目
                </button>
            </div>

            {/* Footer Actions */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <button 
                    onClick={onClose}
                    className="px-6 py-4 rounded-xl bg-gray-100 text-gray-500 font-bold active:scale-95 transition-transform"
                >
                    取消
                </button>
                <button 
                    onClick={handleConfirm}
                    className="flex-1 py-4 rounded-xl bg-gray-900 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-gray-200 active:scale-95 transition-transform"
                >
                    <Check size={20} />
                    確認分帳
                </button>
            </div>
        </div>
    );
}