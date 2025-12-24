// src/components/StatsView.jsx
import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, Coins } from 'lucide-react';
import { formatCurrency, getIconComponent, calculateTwdValue } from '../utils/helpers';
import { DEFAULT_CATEGORIES } from '../utils/constants';

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

    const handleMonthChange = (direction) => { 
        const date = new Date(statsMonth + '-01'); 
        date.setMonth(date.getMonth() + direction); 
        setStatsMonth(date.toISOString().slice(0, 7)); 
    };

    const { filteredTxs, sortedHistory, rates, hostId, guestId, hostTotal, guestTotal, hostRatio, guestRatio, totalExpense, categoryStats, pieChartGradient } = useMemo(() => {
        
        const rawTxs = ledgerData.transactions || [];
        const safeUsers = ledgerData.users || {};

        const allTxs = rawTxs
            .filter(t => t && t.id && t.amount !== undefined) 
            .map(t => ({
                ...t,
                amount: parseFloat(t.amount) || 0,
                category: t.category || { name: '未分類', icon: 'help-circle', hex: '#9ca3af' }
            }));

        const txs = allTxs.filter(t => 
            t.date.startsWith(statsMonth) && (t.projectId || 'daily') === currentProjectId
        );
        
        const sorted = [...txs].sort((a, b) => new Date(b.date) - new Date(a.date));

        const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
        const currentRates = currentProject?.rates || { JPY: 0.23, THB: 1 };

        const hId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'host');
        const gId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'guest');

        // [Logic Upgrade] 貢獻度計算 (Who PAID)
        const calculateTotalPaid = (uid) => {
            return txs.reduce((sum, tx) => {
                if (tx.isSettlement) return sum; 
                
                const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
                if (isNaN(amountTwd)) return sum; 

                // Option B: Multi-Payer Support
                if (tx.splitType === 'multi_payer') {
                    // 如果是混合出資，讀取 customSplit 的支付額
                    if (tx.customSplit && tx.customSplit[uid]) {
                        const paid = parseFloat(tx.customSplit[uid]) || 0;
                        return sum + calculateTwdValue(paid, tx.currency || 'TWD', currentRates);
                    }
                    return sum;
                }

                // Single Payer Support
                return sum + (tx.payer === uid ? amountTwd : 0);
            }, 0);
        };

        const hTotal = calculateTotalPaid(hId);
        const gTotal = calculateTotalPaid(gId);
        const combinedTotal = hTotal + gTotal;
        const hRatio = combinedTotal > 0 ? (hTotal / combinedTotal) * 100 : 50;
        const gRatio = combinedTotal > 0 ? (gTotal / combinedTotal) * 100 : 50;

        // 計算分類統計 
        const statsMap = {};
        let totalExp = 0;
        txs.forEach(tx => { 
            if (tx.isSettlement) return;
            const val = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
            if (isNaN(val)) return; 
            const categoryId = tx.category?.id || 'uncategorized';
            if(!statsMap[categoryId]) statsMap[categoryId] = 0; 
            statsMap[categoryId] += val;
            totalExp += val;
        });

        const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
        const catStats = [];
        Object.entries(statsMap).forEach(([id, amt]) => { 
            if (id === 'uncategorized') {
                catStats.push({ id: 'uncategorized', name: '未分類', hex: '#999999', icon: 'Coins', total: amt });
            } else {
                const cat = allCats.find(c => c.id === id); 
                if(cat) catStats.push({ ...cat, total: amt }); 
            }
        });
        catStats.sort((a,b) => b.total - a.total);

        // Pie Chart
        let gradientStr = '';
        if (totalExp === 0 || catStats.length === 0) {
            gradientStr = 'conic-gradient(#e5e7eb 0% 100%)';
        } else {
            let currentPercent = 0;
            catStats.forEach(stat => { 
                const percent = (stat.total / totalExp) * 100; 
                const endPercent = currentPercent + percent; 
                gradientStr += `${stat.hex || '#ccc'} ${currentPercent}% ${endPercent}%, `; 
                currentPercent = endPercent; 
            });
            gradientStr = `conic-gradient(${gradientStr.slice(0, -2)})`;
        }

        return {
            filteredTxs: txs,
            sortedHistory: sorted,
            rates: currentRates,
            hostId: hId,
            guestId: gId,
            hostTotal: isNaN(hTotal) ? 0 : hTotal,
            guestTotal: isNaN(gTotal) ? 0 : gTotal,
            hostRatio: isNaN(hRatio) ? 50 : hRatio,
            guestRatio: isNaN(gRatio) ? 50 : gRatio,
            totalExpense: isNaN(totalExp) ? 0 : totalExp,
            categoryStats: catStats,
            pieChartGradient: gradientStr
        };

    }, [ledgerData, statsMonth, currentProjectId]);

    const getSmartTags = (tx) => {
        const tags = [];
        const safeUsers = ledgerData.users || {};
        
        if (tx.isSettlement) {
            const payerName = safeUsers[tx.payer]?.name || '未知';
            tags.push({ label: `${payerName} 轉帳`, color: 'gray' });
            return tags;
        }

        // [Option B] Tag Update
        if (tx.splitType === 'multi_payer') {
            tags.push({ label: '混合出資', color: 'blue' });
            return tags;
        }

        const payerUser = safeUsers[tx.payer];
        const payerName = payerUser?.name || '未知';
        tags.push({ label: payerName, color: 'gray' });

        if (tx.splitType === 'custom') tags.push({ label: '自訂分攤', color: 'gray' });
        else if (tx.splitType === 'even') tags.push({ label: '平均分攤', color: 'gray' });
        else {
            const payerRole = payerUser?.role;
            let isPrivate = false;
            let isAdvance = false;
            if (tx.splitType === 'host_all') {
                if (payerRole === 'host') isPrivate = true; else isAdvance = true;
            } else if (tx.splitType === 'guest_all') {
                if (payerRole === 'guest') isPrivate = true; else isAdvance = true;
            }
            if (isPrivate) tags.push({ label: '私人', color: 'gray' });
            if (isAdvance) tags.push({ label: '代墊', color: 'gray' });
        }
        if (tx.isSettled) tags.push({ label: '已結清', color: 'green' });
        return tags;
    };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">消費分析</h2>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button onClick={() => handleMonthChange(-1)} className="p-1"><ChevronLeft size={16}/></button>
                <span className="text-sm font-bold w-20 text-center">{statsMonth}</span>
                <button onClick={() => handleMonthChange(1)} className="p-1"><ChevronRight size={16}/></button>
            </div>
         </div>
         
         {/* 貢獻度卡片 */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-600 font-bold mb-4">消費貢獻度 (支付金額 - TWD)</h3>
            <div className="flex justify-between items-center mb-2 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-600">{(ledgerData.users || {})[hostId]?.name || 'Host'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{formatCurrency(hostTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span>
                </div>
            </div>
            <div className="flex justify-between items-center mb-3 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-gray-600">{(ledgerData.users || {})[guestId]?.name || 'Guest'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{formatCurrency(guestTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(guestRatio)}%)</span>
                </div>
            </div>
            <div className="h-4 w-full bg-gray-100 rounded-full flex overflow-hidden">
                <div style={{ width: `${hostRatio}%` }} className="bg-blue-500 transition-all duration-1000"></div>
                <div style={{ width: `${guestRatio}%` }} className="bg-pink-500 transition-all duration-1000"></div>
            </div>
         </div>
         
         {/* 圓餅圖 (Unchanged) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center">
            <h3 className="text-gray-600 font-bold mb-6 w-full text-left">分類支出佔比 (TWD)</h3>
            <div className="relative w-48 h-48 rounded-full mb-6" style={{ background: pieChartGradient }}>
                <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
                    <span className="text-sm text-gray-400">總支出</span>
                    <span className="text-xl font-bold text-gray-800">{formatCurrency(totalExpense, 'TWD')}</span>
                </div>
            </div>
            <div className="w-full space-y-3">
                {categoryStats.map(stat => (
                    <div key={stat.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.hex }}></div>
                            <span className="text-sm text-gray-600 font-medium">{stat.name}</span>
                        </div>
                        <div className="text-sm">
                            <span className="font-bold text-gray-800 mr-2">{formatCurrency(stat.total, 'TWD')}</span>
                            <span className="text-gray-400 text-xs">{Math.round((stat.total/totalExpense)*100)}%</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>

         {/* 列表 */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-600 font-bold mb-4">本月交易明細 ({sortedHistory.length}筆)</h3>
            <div className="space-y-4">
                {sortedHistory.map((tx) => {
                    const CatIcon = getIconComponent(tx.category?.icon) || Coins;
                    const tags = getSmartTags(tx);

                    return (
                        <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-3 active:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 last:pb-0`}>
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="text-gray-400 text-xs w-8 text-center shrink-0">{new Date(tx.date).getDate()}日</div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0" style={{ backgroundColor: `${tx.category?.hex || '#eee'}33`, color: tx.category?.hex || '#999'}}>
                                    <CatIcon size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-800 text-sm truncate">{tx.note || tx.category?.name || '未分類'}</p>
                                    <div className="flex items-center flex-wrap gap-1 mt-0.5">
                                        {tags.map((tag, i) => (
                                            <span key={i} className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${tag.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-100 text-gray-500 border-gray-100'}`}>
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className={`font-bold ml-2 whitespace-nowrap text-sm ${tx.isSettlement ? 'text-emerald-500' : 'text-gray-800'}`}>
                                {formatCurrency(tx.amount || 0, tx.currency || 'TWD', privacyMode)}
                            </span>
                        </div>
                    );
                })}
            </div>
         </div>
      </div>
    );
}