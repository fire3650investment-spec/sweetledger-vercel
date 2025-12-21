// src/components/StatsView.jsx
import React, { useMemo } from 'react';
import { PieChart as PieIcon, Calendar, Wallet } from 'lucide-react';
import { formatCurrency, getIconComponent, renderAvatar } from '../utils/helpers';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function StatsView({
  ledgerData,
  currentProjectId,
  statsMonth,
  setStatsMonth,
  privacyMode,
  setEditingTx,
  setIsEditTxModalOpen
}) {
    if (!ledgerData) return null;

    const currentProject = ledgerData.projects.find(p => p.id === currentProjectId);
    
    // Filter by Project & Month
    const filteredTxs = useMemo(() => {
        return ledgerData.transactions.filter(tx => {
            if (tx.projectId !== currentProjectId) return false;
            if (tx.isSettlement) return false; // Exclude settlements from stats
            const txMonth = new Date(tx.date).toISOString().slice(0, 7);
            return txMonth === statsMonth;
        });
    }, [ledgerData.transactions, currentProjectId, statsMonth]);

    // Calculate Totals by Category
    const categoryTotals = useMemo(() => {
        const totals = {};
        let total = 0;
        filteredTxs.forEach(tx => {
            const amount = parseFloat(tx.amount); // Simplification: assuming base currency or ignoring conversion for MVP
            total += amount;
            if (!totals[tx.category.id]) {
                totals[tx.category.id] = { ...tx.category, value: 0, count: 0 };
            }
            totals[tx.category.id].value += amount;
            totals[tx.category.id].count += 1;
        });
        return { 
            data: Object.values(totals).sort((a, b) => b.value - a.value),
            total 
        };
    }, [filteredTxs]);
    
    // Helper: Split Badge Renderer (Duplicated for independence, or move to helpers.js)
    const renderSplitBadge = (tx) => {
        const isPayerHost = ledgerData.users[tx.payer]?.role === 'host';
        let type = 'even';

        if (tx.splitType === 'self') {
            type = 'self';
        } else if (tx.splitType === 'host_all') {
            type = isPayerHost ? 'self' : 'advance';
        } else if (tx.splitType === 'guest_all') {
            type = isPayerHost ? 'advance' : 'self';
        } else if (tx.splitType === 'custom') {
            type = 'custom';
        }

        const badges = {
            self:    { label: '個人', color: 'bg-gray-100 text-gray-400' },
            advance: { label: '代墊', color: 'bg-orange-100 text-orange-600' },
            even:    { label: '平分', color: 'bg-blue-50 text-blue-500' },
            custom:  { label: '自訂', color: 'bg-purple-50 text-purple-600' }
        };

        const badge = badges[type] || badges.even;
        return <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ml-2 ${badge.color}`}>{badge.label}</span>;
    };


    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 shrink-0">
                <h2 className="text-2xl font-bold text-gray-800">
                    {currentProject?.name} 分析
                </h2>
                <div className="bg-gray-100 rounded-xl px-3 py-1.5 flex items-center gap-2">
                    <Calendar size={14} className="text-gray-400"/>
                    <input 
                        type="month" 
                        value={statsMonth}
                        onChange={(e) => setStatsMonth(e.target.value)}
                        className="bg-transparent text-sm font-bold text-gray-700 outline-none"
                    />
                </div>
            </div>

            {/* Total Spending Card */}
            <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-xl shadow-gray-200 mb-6 shrink-0 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 opacity-10"></div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">本月總支出</div>
                <div className="text-4xl font-bold">
                    {privacyMode ? '****' : formatCurrency(categoryTotals.total)}
                </div>
                <div className="text-xs text-gray-500 mt-2 font-bold">{filteredTxs.length} 筆交易</div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto -mx-4 px-4 space-y-6">
                
                {/* Pie Chart */}
                {categoryTotals.data.length > 0 ? (
                    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryTotals.data}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryTotals.data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.hex || '#e5e7eb'} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    formatter={(value) => privacyMode ? '***' : formatCurrency(value)}
                                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                                />
                            </PieChart>
                         </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="h-40 flex items-center justify-center text-gray-300 font-bold bg-gray-50 rounded-3xl border border-gray-100 border-dashed">
                        尚無數據
                    </div>
                )}

                {/* Category Breakdown */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">分類統計</h3>
                    {categoryTotals.data.map(cat => {
                         const Icon = getIconComponent(cat.icon);
                         const percentage = Math.round((cat.value / categoryTotals.total) * 100);
                         return (
                             <div key={cat.id} className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm" style={{backgroundColor: cat.hex}}>
                                         <Icon size={18}/>
                                     </div>
                                     <div>
                                         <div className="font-bold text-sm text-gray-800">{cat.name}</div>
                                         <div className="text-[10px] text-gray-400 font-bold">{cat.count} 筆 • {percentage}%</div>
                                     </div>
                                 </div>
                                 <div className="font-bold text-gray-800">
                                     {privacyMode ? '***' : formatCurrency(cat.value)}
                                 </div>
                             </div>
                         )
                    })}
                </div>

                {/* Detailed List (Filtered by Month) */}
                <div className="space-y-3 pb-10">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">本月明細</h3>
                    {filteredTxs.sort((a,b) => new Date(b.date) - new Date(a.date)).map(tx => {
                        const CatIcon = getIconComponent(tx.category.icon);
                        return (
                            <div 
                                key={tx.id}
                                onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }}
                                className="bg-white p-3 rounded-2xl border border-gray-50 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                     <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-gray-50 text-gray-400">
                                         <CatIcon size={20}/>
                                     </div>
                                     <div className="flex flex-col min-w-0">
                                         <div className="flex items-center">
                                            <span className="font-bold text-sm text-gray-800 truncate">{tx.note}</span>
                                            {/* ✨ Split Badge in Stats View */}
                                            {renderSplitBadge(tx)}
                                         </div>
                                         <div className="text-[10px] text-gray-400 font-bold">
                                             {new Date(tx.date).toLocaleDateString()}
                                         </div>
                                     </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-800">
                                        {privacyMode ? '***' : formatCurrency(tx.amount, tx.currency)}
                                    </span>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        {renderAvatar(ledgerData.users[tx.payer]?.avatar, "w-3 h-3")}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}