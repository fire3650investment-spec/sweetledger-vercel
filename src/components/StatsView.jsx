import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

    // [Optimization] Use useMemo to prevent expensive recalculations on every render
    const { filteredTxs, sortedHistory, rates, hostId, guestId, hostTotal, guestTotal, hostRatio, guestRatio, totalExpense, categoryStats, pieChartGradient } = useMemo(() => {
        
        // 1. Filter Transactions
        const txs = ledgerData.transactions.filter(t => 
            t.date.startsWith(statsMonth) && (t.projectId || 'daily') === currentProjectId
        );
        
        // 2. Sort History
        const sorted = [...txs].sort((a, b) => new Date(b.date) - new Date(a.date));

        // 3. Get Rates
        const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
        const currentRates = currentProject?.rates || { JPY: 0.23, THB: 1 };

        // 4. Identify Roles
        const hId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
        const gId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');

        // 5. Calculate Contributions
        const calculateTotalPaid = (uid) => {
            return txs.reduce((sum, tx) => {
                const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
                if (tx.splitType === 'custom' && tx.customSplit) {
                    const share = tx.customSplit[uid] || 0;
                    return sum + calculateTwdValue(share, tx.currency || 'TWD', currentRates);
                }
                return sum + (tx.payer === uid ? amountTwd : 0);
            }, 0);
        };

        const hTotal = calculateTotalPaid(hId);
        const gTotal = calculateTotalPaid(gId);
        const combinedTotal = hTotal + gTotal;
        const hRatio = combinedTotal > 0 ? (hTotal / combinedTotal) * 100 : 50;
        const gRatio = combinedTotal > 0 ? (gTotal / combinedTotal) * 100 : 50;

        // 6. Calculate Category Stats
        const statsMap = {};
        let totalExp = 0;
        
        txs.forEach(tx => { 
            const val = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
            if(!statsMap[tx.category.id]) statsMap[tx.category.id] = 0; 
            statsMap[tx.category.id] += val;
            totalExp += val;
        });

        const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
        const catStats = [];
        Object.entries(statsMap).forEach(([id, amt]) => { 
            const cat = allCats.find(c => c.id === id); 
            if(cat) catStats.push({ ...cat, total: amt }); 
        });
        catStats.sort((a,b) => b.total - a.total);

        // 7. Pie Chart Gradient
        let gradientStr = '';
        if (totalExp === 0) {
            gradientStr = 'gray 0% 100%';
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
            hostTotal: hTotal,
            guestTotal: gTotal,
            hostRatio: hRatio,
            guestRatio: gRatio,
            totalExpense: totalExp,
            categoryStats: catStats,
            pieChartGradient: gradientStr
        };

    }, [ledgerData, statsMonth, currentProjectId]); // Re-calculate only when these change

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
                    <span className="text-gray-600">{ledgerData.users[hostId]?.name || 'Host'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{formatCurrency(hostTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span>
                </div>
            </div>
            <div className="flex justify-between items-center mb-3 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-gray-600">{ledgerData.users[guestId]?.name || 'Guest'}</span>
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
         
         {/* 圓餅圖與分類統計 */}
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

         {/* 交易明細列表 (Fix: Dynamic Classes -> Inline Styles) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-600 font-bold mb-4">本月交易明細 ({sortedHistory.length}筆)</h3>
            <div className="space-y-4">
                {sortedHistory.map((tx) => {
                    const CatIcon = getIconComponent(tx.category?.icon);
                    const payerName = ledgerData.users[tx.payer]?.name || '未知';
                    const isMultiPayer = tx.splitType === 'custom' && tx.customSplit && Object.keys(tx.customSplit).length > 1;
                    const displayPayer = isMultiPayer ? '多人墊付' : payerName;

                    return (
                        <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-3 active:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 last:pb-0`}>
                            <div className="flex items-center gap-3">
                                <div className="text-gray-400 text-xs w-8 text-center">{new Date(tx.date).getDate()}日</div>
                                {/* [Fix] 使用 style 處理顏色，避免 purgecss 移除動態 class */}
                                <div 
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                                    style={{ 
                                        backgroundColor: `${tx.category?.hex}33`, // hex + 20% opacity
                                        color: tx.category?.hex 
                                    }}
                                >
                                    <CatIcon size={16} />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">{tx.note}</p>
                                    <span className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded">{displayPayer}</span>
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-sm">{formatCurrency(tx.amount, tx.currency || 'TWD', privacyMode)}</span>
                        </div>
                    );
                })}
            </div>
         </div>
      </div>
    );
}