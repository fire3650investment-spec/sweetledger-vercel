// src/components/StatsView.jsx
import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, Coins } from 'lucide-react';
import { formatCurrency, getIconComponent, calculateTwdValue, getCategoryStyle } from '../utils/helpers';
import { DEFAULT_CATEGORIES, CURRENCY_OPTIONS, MORANDI_PALETTE } from '../utils/constants';
import MonthlyTrendChart from './stats/MonthlyTrendChart';
import ContributionChart from './stats/ContributionChart';
import CategoryPieChart from './stats/CategoryPieChart';

export default function StatsView({ ledgerData, currentProjectId, statsMonth, setStatsMonth, privacyMode, setEditingTx, setIsEditTxModalOpen, user }) {
    if (!ledgerData) return null;

    const handleMonthChange = (direction) => {
        const date = new Date(statsMonth + '-01');
        date.setMonth(date.getMonth() + direction);
        setStatsMonth(date.toISOString().slice(0, 7));
    };

    // [Private Mode Fix] Extract project context
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const isPrivateProject = currentProject?.type === 'private';

    const { filteredTxs, sortedHistory, rates, hostId, guestId, hostTotal, guestTotal, hostRatio, guestRatio, totalExpense, categoryStats, hostName, guestName } = useMemo(() => {
        const rawTxs = ledgerData.transactions || [];
        const safeUsers = ledgerData.users || {};
        const currentCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;
        const myTheme = ledgerData.users?.[user?.uid]?.theme || 'vibrant';

        const allTxs = rawTxs
            .filter(t => t && t.id && t.amount !== undefined)
            .map(t => {
                let displayCategory = t.category || { name: '未分類', icon: 'help-circle' };
                if (t.category?.id) {
                    const latestCat = currentCategories.find(c => c.id === t.category.id);
                    if (latestCat) displayCategory = latestCat;
                }
                return { ...t, amount: parseFloat(t.amount) || 0, category: displayCategory };
            });

        const txs = allTxs.filter(t => t.date.startsWith(statsMonth) && (t.projectId || 'daily') === currentProjectId);
        const sorted = [...txs].sort((a, b) => new Date(b.date) - new Date(a.date));
        const currentRates = currentProject?.rates || { JPY: 0.23, THB: 1 };
        const hId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'host');
        const gId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'guest');

        // Pass user names
        const hName = safeUsers[hId]?.name || 'Host';
        const gName = safeUsers[gId]?.name || 'Guest';

        const calculateTotalPaid = (uid) => {
            return txs.reduce((sum, tx) => {
                if (tx.isSettlement) return sum;
                const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
                if (isNaN(amountTwd)) return sum;
                if (tx.splitType === 'multi_payer') {
                    if (tx.customSplit && tx.customSplit[uid]) {
                        const paid = parseFloat(tx.customSplit[uid]) || 0;
                        return sum + calculateTwdValue(paid, tx.currency || 'TWD', currentRates);
                    }
                    return sum;
                }
                return sum + (tx.payer === uid ? amountTwd : 0);
            }, 0);
        };
        const hTotal = calculateTotalPaid(hId);
        const gTotal = calculateTotalPaid(gId);
        const combinedTotal = hTotal + gTotal;
        const hRatio = combinedTotal > 0 ? (hTotal / combinedTotal) * 100 : 50;
        const gRatio = combinedTotal > 0 ? (gTotal / combinedTotal) * 100 : 50;

        const statsMap = {};
        let totalExp = 0;
        txs.forEach(tx => {
            if (tx.isSettlement) return;
            const val = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
            if (isNaN(val)) return;
            const categoryId = tx.category?.id || 'uncategorized';
            if (!statsMap[categoryId]) statsMap[categoryId] = 0;
            statsMap[categoryId] += val;
            totalExp += val;
        });

        const catStats = [];
        Object.entries(statsMap).forEach(([id, amt]) => {
            if (id === 'uncategorized') {
                catStats.push({ id: 'uncategorized', name: '未分類', hex: '#999999', icon: 'Coins', total: amt });
            } else {
                const cat = currentCategories.find(c => c.id === id);
                if (cat) {
                    // [Theme] Dynamic Color Mapping
                    let chartColor = myTheme === 'morandi' ? MORANDI_PALETTE.slate : (cat.hex || '#94a3b8');

                    if (myTheme === 'morandi') {
                        if (cat.colorId && MORANDI_PALETTE[cat.colorId]) {
                            chartColor = MORANDI_PALETTE[cat.colorId];
                        }
                    } else {
                        // Vibrant Mode: Use standard palette hex if available
                        const style = getCategoryStyle(cat, 'display', 'vibrant');
                        chartColor = style.hex;
                    }

                    catStats.push({ ...cat, total: amt, hex: chartColor });
                }
            }
        });
        catStats.sort((a, b) => b.total - a.total);

        // Removed Gradient logic (replaced by Recharts)

        return {
            filteredTxs: txs,
            sortedHistory: sorted,
            rates: currentRates,
            hostId: hId, guestId: gId,
            hostName: hName, guestName: gName,
            hostTotal: isNaN(hTotal) ? 0 : hTotal,
            guestTotal: isNaN(gTotal) ? 0 : gTotal,
            hostRatio: isNaN(hRatio) ? 50 : hRatio,
            guestRatio: isNaN(gRatio) ? 50 : gRatio,
            totalExpense: isNaN(totalExp) ? 0 : totalExp,
            categoryStats: catStats
        };
    }, [ledgerData, statsMonth, currentProjectId, currentProject]);

    const getSmartTags = (tx) => {
        // [Private Mode Fix] Hide tags in private mode
        if (isPrivateProject) return [];

        const tags = [];
        const safeUsers = ledgerData.users || {};
        if (tx.isSettlement) { const payerName = safeUsers[tx.payer]?.name || '未知'; tags.push({ label: `${payerName} 轉帳`, color: 'gray' }); return tags; }
        if (tx.splitType === 'multi_payer') { tags.push({ label: '混合出資', color: 'blue' }); return tags; }
        const payerUser = safeUsers[tx.payer];
        const payerName = payerUser?.name || '未知';
        tags.push({ label: payerName, color: 'gray' });
        if (tx.splitType === 'custom') tags.push({ label: '自訂分攤', color: 'gray' });
        else if (tx.splitType === 'even') tags.push({ label: '平均分攤', color: 'gray' });
        else {
            const payerRole = payerUser?.role;
            if (payerRole === 'host') {
                if (tx.splitType === 'host_all') tags.push({ label: '私人', color: 'gray' });
                else if (tx.splitType === 'guest_all') tags.push({ label: '代墊', color: 'gray' });
            } else if (payerRole === 'guest') {
                if (tx.splitType === 'guest_all') tags.push({ label: '私人', color: 'gray' });
                else if (tx.splitType === 'host_all') tags.push({ label: '代墊', color: 'gray' });
            }
        }
        if (tx.isSettled) tags.push({ label: '已結清', color: 'green' });
        return tags;
    };

    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">消費分析</h2>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button onClick={() => handleMonthChange(-1)} className="p-1"><ChevronLeft size={16} /></button>
                    <span className="text-sm font-bold w-20 text-center">{statsMonth}</span>
                    <button onClick={() => handleMonthChange(1)} className="p-1"><ChevronRight size={16} /></button>
                </div>
            </div>

            {/* Trend Chart (Recharts) */}
            <MonthlyTrendChart
                ledgerData={ledgerData}
                currentProjectId={currentProjectId}
                selectedMonth={statsMonth}
                isPrivateProject={isPrivateProject}
            />

            {/* Contribution Chart (Recharts) - Hidden in Private Mode */}
            {!isPrivateProject && (
                <ContributionChart
                    hostName={hostName}
                    guestName={guestName}
                    hostTotal={hostTotal}
                    guestTotal={guestTotal}
                    hostRatio={hostRatio}
                    guestRatio={guestRatio}
                    // [Advanced] Pass custom Morandi/Vibrant colors
                    hostColor={ledgerData.users?.[user?.uid]?.theme === 'morandi' ? MORANDI_PALETTE.host : '#3b82f6'}
                    guestColor={ledgerData.users?.[user?.uid]?.theme === 'morandi' ? MORANDI_PALETTE.guest : '#ec4899'}
                />
            )}

            {/* Category Pie Chart (Recharts) */}
            <CategoryPieChart
                categoryStats={categoryStats}
                totalExpense={totalExpense}
            />

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
                <h3 className="text-gray-600 font-bold mb-4">本月交易明細 ({sortedHistory.length}筆)</h3>

                {/* [Layout Fix] Group by Date Logic */}
                <div className="space-y-6">
                    {Object.entries(sortedHistory.reduce((groups, tx) => {
                        const dateStr = new Date(tx.date).toLocaleDateString('zh-TW'); // e.g. 2024/1/8
                        if (!groups[dateStr]) groups[dateStr] = [];
                        groups[dateStr].push(tx);
                        return groups;
                    }, {})).map(([date, txs]) => (
                        <div key={date}>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">{date}</h4>
                            <div className="border border-gray-50 rounded-2xl overflow-hidden">
                                {txs.map((tx, idx) => {
                                    const CatIcon = getIconComponent(tx.category?.icon) || Coins;
                                    const tags = getSmartTags(tx);
                                    const style = getCategoryStyle(tx.category, 'display', ledgerData.users?.[user?.uid]?.theme || 'vibrant');

                                    // [Batch 3 New] Currency Visuals
                                    const txCurrency = tx.currency || 'TWD';
                                    const isForeign = txCurrency !== 'TWD';
                                    const currencyInfo = CURRENCY_OPTIONS.find(c => c.code === txCurrency);

                                    return (
                                        <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-3 active:bg-gray-50 transition-colors ${idx !== txs.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                {/* Removed Date Column (32px) */}
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${style.containerClass}`} style={style.containerStyle}>
                                                    <CatIcon size={16} className={style.iconClass} style={style.iconStyle} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-gray-800 text-sm truncate">{tx.note || tx.category?.name || '未分類'}</p>
                                                    <div className="flex items-center flex-wrap gap-1 mt-0.5">
                                                        {/* [Private Mode Fix] Always show category name in sub-line */}
                                                        <p className="text-xs text-gray-400 mr-1 shrink-0">{tx.category?.name}</p>
                                                        {tags.map((tag, i) => (
                                                            <span key={i} className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${tag.color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-100 text-gray-500 border-gray-100'}`}>{tag.label}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end ml-4">
                                                <span className={`font-bold whitespace-nowrap text-sm flex items-center gap-1 max-w-[120px] justify-end ${tx.isSettlement ? 'text-emerald-500' : 'text-gray-800'}`}>
                                                    {isForeign && <span className="text-[10px] grayscale opacity-80 mr-0.5 shrink-0">{currencyInfo?.flag || txCurrency}</span>}
                                                    <span className="truncate">{formatCurrency(tx.amount || 0, txCurrency, privacyMode)}</span>
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}