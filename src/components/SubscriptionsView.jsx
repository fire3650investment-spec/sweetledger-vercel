// src/components/SubscriptionsView.jsx
import React from 'react';
import { X, Trash2, Calendar, RefreshCw, AlertCircle, ArrowLeft } from 'lucide-react';
import { getIconComponent, formatCurrency, getCategoryStyle } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function SubscriptionsView({
    ledgerData,
    user,
    setView,
    handleDeleteSubscription,
    onBack
}) {
    if (!ledgerData) return null;

    // [Logic] 1. 取得原始列表
    const rawSubscriptions = ledgerData.subscriptions || [];

    // [Logic] 2. 過濾邏輯 (Filter Logic)
    const filteredSubscriptions = rawSubscriptions.filter(sub => {
        // 找出該訂閱所屬的專案
        const project = ledgerData.projects?.find(p => p.id === sub.projectId);

        // 如果找不到專案 (可能是舊資料)，預設顯示
        if (!project) return true;

        // 如果是私人專案，必須檢查擁有者是否為自己
        if (project.type === 'private') {
            return project.owner === user.uid;
        }

        // 公開專案則全體可見
        return true;
    });

    // [Logic] 3. 排序
    const sortedSubs = [...filteredSubscriptions].sort((a, b) => new Date(a.nextPaymentDate) - new Date(b.nextPaymentDate));

    const getDaysUntil = (dateStr) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const target = new Date(dateStr);
        target.setHours(0, 0, 0, 0);
        const diffTime = target - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return '已過期 (等待自動扣款)';
        if (diffDays === 0) return '今天扣款';
        if (diffDays === 1) return '明天扣款';
        return `${diffDays} 天後`;
    };

    const getCycleLabel = (cycle, payDay) => {
        if (cycle === 'monthly') return `每月 ${payDay} 號`;
        if (cycle === 'weekly') return '每週';
        return '固定週期';
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] pb-6 relative">
            <div className="px-4 mb-6 flex justify-between items-center animate-stagger stagger-1">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack || (() => setView('dashboard'))}
                        className="p-2 -ml-2 bg-white rounded-full shadow-sm border border-gray-100 active:scale-95 transition-transform"
                    >
                        {onBack ? <ArrowLeft size={20} className="text-gray-500" /> : <X size={20} className="text-gray-500" />}
                    </button>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        固定支出
                    </h2>
                </div>
            </div>

            <div className="flex-1 px-4 overflow-y-auto space-y-4">
                {sortedSubs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400 animate-stagger stagger-2">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <RefreshCw size={32} className="opacity-30" />
                        </div>
                        <p className="font-bold">目前沒有設定固定支出</p>
                        <p className="text-xs mt-2">記帳時開啟「設為固定支出」即可新增</p>
                    </div>
                ) : (
                    sortedSubs.map((sub, idx) => {
                        const categoryId = sub.category?.id || 'other';
                        const category = (ledgerData.customCategories || DEFAULT_CATEGORIES).find(c => c.id === categoryId) || DEFAULT_CATEGORIES[0];
                        const CatIcon = getIconComponent(category.icon);
                        const project = ledgerData.projects?.find(p => p.id === sub.projectId);
                        const isExpired = new Date(sub.nextPaymentDate) < new Date();

                        // [Updated] Get Style
                        const style = getCategoryStyle(category, 'display');

                        return (
                            <div
                                key={idx}
                                className={`bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden transition-all animate-stagger ${isExpired ? 'ring-2 ring-rose-100' : ''}`}
                                style={{ animationDelay: `${(idx * 50) + 50}ms` }}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        {/* [Updated] Use containerClass */}
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm ${style.containerClass}`} style={style.containerStyle}>
                                            <CatIcon size={24} className={style.iconClass} style={style.iconStyle} />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{sub.name}</h3>
                                            <p className="text-xs text-gray-400 flex items-center gap-1 font-medium mt-0.5 truncate">
                                                {project?.name || '日常開銷'} · {getCycleLabel(sub.cycle, sub.payDay)}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-lg text-gray-800">
                                        {formatCurrency(sub.amount, sub.currency || 'TWD')}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                                    <div className={`flex items-center gap-1 text-xs font-bold ${isExpired ? 'text-rose-500' : 'text-emerald-500'}`}>
                                        <Calendar size={14} />
                                        {getDaysUntil(sub.nextPaymentDate)} ({new Date(sub.nextPaymentDate).toLocaleDateString()})
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (confirm(`確定要停止「${sub.name}」的自動扣款嗎？`)) {
                                                handleDeleteSubscription(sub);
                                            }
                                        }}
                                        className="flex items-center gap-1 text-xs text-red-500 font-bold hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors active:scale-95"
                                    >
                                        <Trash2 size={14} /> 刪除/停止
                                    </button>
                                </div>
                            </div>
                        );
                    })
                )}

                <div className="bg-blue-50 p-4 rounded-2xl flex gap-3 items-start mt-6 border border-blue-100 animate-stagger" style={{ animationDelay: sortedSubs.length > 0 ? `${(sortedSubs.length * 50) + 100}ms` : '200ms' }}>
                    <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-700 leading-relaxed">
                        <p className="font-bold mb-1">關於自動記帳</p>
                        <p>系統會在您每次開啟 App 時檢查是否過期，並自動補上交易紀錄。如果您停止訂閱，這裡的紀錄刪除後，未來的自動扣款也會隨之停止。</p>
                    </div>
                </div>
            </div>
        </div>
    );
}