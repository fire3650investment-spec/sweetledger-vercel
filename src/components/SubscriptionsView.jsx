import React from 'react';
import { X, Trash2, Calendar, RefreshCw, AlertCircle } from 'lucide-react';
import { getIconComponent, formatCurrency } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

export default function SubscriptionsView({
  ledgerData,
  user,
  setView,
  handleDeleteSubscription
}) {
  if (!ledgerData) return null;

  const subscriptions = ledgerData.subscriptions || [];
  const sortedSubs = [...subscriptions].sort((a, b) => new Date(a.nextPaymentDate) - new Date(b.nextPaymentDate));

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
    <div className="min-h-screen bg-gray-50 flex flex-col pt-[calc(env(safe-area-inset-top)+2rem)] pb-6 relative">
      {/* Header */}
      <div className="px-6 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <RefreshCw size={24} className="text-rose-500"/>
            固定支出管理
        </h2>
        <button onClick={() => setView('settings')} className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
            <X size={20} className="text-gray-500"/>
        </button>
      </div>

      <div className="flex-1 px-4 overflow-y-auto space-y-4">
        {sortedSubs.length === 0 ? (
           <div className="flex flex-col items-center justify-center py-20 text-gray-400">
               <RefreshCw size={48} className="mb-4 opacity-20"/>
               <p>目前沒有設定固定支出</p>
               <p className="text-xs mt-2">記帳時開啟「固定支出」開關即可新增</p>
           </div>
        ) : (
           sortedSubs.map((sub, idx) => {
               // Fallback for missing category data in old subscriptions
               const categoryId = sub.category?.id || 'other';
               const category = (ledgerData.customCategories || DEFAULT_CATEGORIES).find(c => c.id === categoryId) || DEFAULT_CATEGORIES[0];
               const CatIcon = getIconComponent(category.icon);
               const project = ledgerData.projects?.find(p => p.id === sub.projectId);
               const isExpired = new Date(sub.nextPaymentDate) < new Date();

               return (
                   <div key={idx} className={`bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden ${isExpired ? 'ring-2 ring-rose-100' : ''}`}>
                       <div className="flex justify-between items-start mb-3">
                           <div className="flex items-center gap-3">
                               {/* [Fix] 使用 style 處理顏色 */}
                               <div 
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                                    style={{ 
                                        backgroundColor: `${category.hex}33`, 
                                        color: category.hex 
                                    }}
                               >
                                   <CatIcon size={20} />
                               </div>
                               <div>
                                   <h3 className="font-bold text-gray-800">{sub.name}</h3>
                                   <p className="text-xs text-gray-400 flex items-center gap-1">
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
                               onClick={() => handleDeleteSubscription(sub)}
                               className="flex items-center gap-1 text-xs text-red-400 hover:text-red-600 px-3 py-1.5 bg-red-50 rounded-lg transition-colors"
                           >
                               <Trash2 size={14} /> 刪除/停止
                           </button>
                       </div>
                   </div>
               );
           })
        )}
        
        <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-start mt-6">
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