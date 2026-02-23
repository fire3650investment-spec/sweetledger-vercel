// src/components/StatsView.jsx
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Coins } from 'lucide-react';
import { formatCurrency, getIconComponent, calculateTwdValue, getCategoryStyle } from '../utils/helpers';
import { DEFAULT_CATEGORIES, CURRENCY_OPTIONS, MORANDI_PALETTE } from '../utils/constants';
import MonthlyTrendChart from './stats/MonthlyTrendChart';
import ContributionChart from './stats/ContributionChart';
import CategoryPieChart from './stats/CategoryPieChart';
import { useCountUp } from '../hooks/useCountUp'; // [Visual Polish]
import { hapticLight, hapticSelection } from '../utils/haptics'; // [iOS] Haptics

export default function StatsView({ ledgerData, currentProjectId, statsMonth, setStatsMonth, privacyMode, setEditingTx, setIsEditTxModalOpen, user }) {
    if (!ledgerData) return null;

    const handleMonthChange = (direction) => {
        hapticSelection(); // [iOS] Picker 震動
        const date = new Date(statsMonth + '-01');
        date.setMonth(date.getMonth() + direction);
        setStatsMonth(date.toISOString().slice(0, 7));
    };

    // [Private Mode Fix] Extract project context
    const currentProject = ledgerData.projects?.find(p => p.id === currentProjectId);
    const isPrivateProject = currentProject?.type === 'private';

    // [Performance Fix] 提取穩定的依賴項，避免整個 ledgerData 物件參考變化觸發重算
    const transactions = ledgerData.transactions || [];
    const users = ledgerData.users || {};
    const customCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const txCount = transactions.length;
    const userCount = Object.keys(users).length;
    const categoryCount = customCategories.length;
    const myTheme = users[user?.uid]?.theme || 'vibrant';
    const projectRatesJson = JSON.stringify(currentProject?.rates || {});

    const { filteredTxs, sortedHistory, rates, hostId, guestId, monthMetrics, totalMetrics, totalExpense, categoryStats, hostName, guestName } = useMemo(() => {
        const safeUsers = users;
        const currentCategories = customCategories;

        const allTxs = transactions
            .filter(t => t && t.id && t.amount !== undefined)
            .map(t => {
                let displayCategory = t.category || { name: '未分類', icon: 'help-circle' };
                if (t.category?.id) {
                    const latestCat = currentCategories.find(c => c.id === t.category.id);
                    if (latestCat) displayCategory = latestCat;
                }
                return { ...t, amount: parseFloat(t.amount) || 0, category: displayCategory };
            });

        const projectTxs = allTxs.filter(t => (t.projectId || 'daily') === currentProjectId);
        const txs = projectTxs.filter(t => t.date.startsWith(statsMonth));
        // [UX] 同一天內，後記的在上面
        const sorted = [...txs].sort((a, b) => {
            const dateA = new Date(a.date).setHours(0, 0, 0, 0);
            const dateB = new Date(b.date).setHours(0, 0, 0, 0);
            if (dateB !== dateA) return dateB - dateA;
            return (b.id || '').localeCompare(a.id || '');
        });
        const currentRates = currentProject?.rates || { JPY: 0.23, THB: 1 };
        const hId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'host');
        const gId = Object.keys(safeUsers).find(uid => safeUsers[uid].role === 'guest');

        // Pass user names - [UX] 使用「我」和「對方」作為 fallback
        const hName = safeUsers[hId]?.name || '我';
        const gName = safeUsers[gId]?.name || '對方';

        const calculateMetrics = (targetTxs) => {
            let hPaid = 0, gPaid = 0;
            let hReal = 0, gReal = 0;
            let hPrivate = 0, gPrivate = 0;

            targetTxs.forEach(tx => {
                if (tx.isSettlement) return;
                const amountTwd = calculateTwdValue(tx.amount, tx.currency || 'TWD', currentRates);
                if (isNaN(amountTwd)) return;

                // 1. Paid (貢獻度)
                if (tx.splitType === 'multi_payer') {
                    if (tx.customSplit) {
                        const hAmt = parseFloat(tx.customSplit[hId]) || 0;
                        const gAmt = parseFloat(tx.customSplit[gId]) || 0;
                        hPaid += calculateTwdValue(hAmt, tx.currency || 'TWD', currentRates);
                        gPaid += calculateTwdValue(gAmt, tx.currency || 'TWD', currentRates);
                    }
                } else {
                    if (tx.payer === hId) hPaid += amountTwd;
                    if (tx.payer === gId) gPaid += amountTwd;
                }

                // 2. Real Expense & Private Expense
                if (tx.splitType === 'multi_payer' || tx.splitType === 'even') {
                    hReal += amountTwd / 2;
                    gReal += amountTwd / 2;
                } else if (tx.splitType === 'custom') {
                    if (tx.customSplit) {
                        const hShare = parseFloat(tx.customSplit[hId]) || 0;
                        const gShare = parseFloat(tx.customSplit[gId]) || 0;
                        hReal += calculateTwdValue(hShare, tx.currency || 'TWD', currentRates);
                        gReal += calculateTwdValue(gShare, tx.currency || 'TWD', currentRates);
                    }
                } else if (tx.splitType === 'host_all') {
                    hReal += amountTwd;
                    hPrivate += amountTwd;
                } else if (tx.splitType === 'guest_all') {
                    gReal += amountTwd;
                    gPrivate += amountTwd;
                } else if (tx.splitType === 'self') {
                    if (tx.payer === hId) {
                        hReal += amountTwd;
                        hPrivate += amountTwd;
                    } else if (tx.payer === gId) {
                        gReal += amountTwd;
                        gPrivate += amountTwd;
                    }
                } else if (tx.splitType === 'partner') {
                    if (tx.payer === hId) {
                        gReal += amountTwd;
                        gPrivate += amountTwd;
                    } else if (tx.payer === gId) {
                        hReal += amountTwd;
                        hPrivate += amountTwd;
                    }
                }
            });

            return {
                hPaid: isNaN(hPaid) ? 0 : hPaid,
                gPaid: isNaN(gPaid) ? 0 : gPaid,
                hReal: isNaN(hReal) ? 0 : hReal,
                gReal: isNaN(gReal) ? 0 : gReal,
                hPrivate: isNaN(hPrivate) ? 0 : hPrivate,
                gPrivate: isNaN(gPrivate) ? 0 : gPrivate,
            };
        };

        const monthMetrics = calculateMetrics(txs);
        const totalMetrics = calculateMetrics(projectTxs);

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
            monthMetrics,
            totalMetrics,
            totalExpense: isNaN(totalExp) ? 0 : totalExp,
            categoryStats: catStats
        };
        // [Performance Fix] 使用更穩定的依賴項，避免物件參考變化觸發不必要的重算
    }, [transactions, users, customCategories, statsMonth, currentProjectId, projectRatesJson, txCount, userCount, categoryCount, myTheme]);

    // [Visual Polish] Living Numbers for Stats
    const animatedTotalExpense = useCountUp(totalExpense, 800);

    // [Performance Fix] 追蹤是否已播放過入場動畫，避免 re-render 時閃爍
    const [hasAnimated, setHasAnimated] = useState(false);
    const isMountedRef = useRef(false);

    useEffect(() => {
        // 只在首次掛載時設定，之後的 re-render 不會重置
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            const timer = setTimeout(() => setHasAnimated(true), 400); // 動畫結束後標記
            return () => clearTimeout(timer);
        }
    }, []);

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

        // [Bug Fix] 根據 customSplit 金額判斷「私人」、「代墊」或「自訂分攤」
        if (tx.splitType === 'custom' && tx.customSplit) {
            const payerShare = parseFloat(tx.customSplit[tx.payer] || 0);
            const total = parseFloat(tx.amount || 0);
            if (Math.abs(payerShare - total) < 0.1) {
                tags.push({ label: '私人', color: 'gray' });
            } else if (payerShare < 0.1) {
                tags.push({ label: '代墊', color: 'gray' });
            } else {
                tags.push({ label: '自訂分攤', color: 'gray' });
            }
        }
        else if (tx.splitType === 'even') tags.push({ label: '平均分攤', color: 'gray' });
        else if (tx.splitType === 'self') tags.push({ label: '私人', color: 'gray' });
        else if (tx.splitType === 'partner') tags.push({ label: '代墊', color: 'gray' });
        else {
            // Legacy Role-based Types
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
            <div className={`flex justify-between items-center mb-6 ${hasAnimated ? '' : 'animate-stagger stagger-1'}`}>
                <h2 className="text-2xl font-bold text-gray-800">消費分析</h2>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button onClick={() => handleMonthChange(-1)} className="p-1 active:scale-90 transition-transform"><ChevronLeft size={16} /></button>
                    <span className="text-sm font-bold w-20 text-center font-nums">{statsMonth}</span>
                    <button onClick={() => handleMonthChange(1)} className="p-1 active:scale-90 transition-transform"><ChevronRight size={16} /></button>
                </div>
            </div>

            {/* Trend Chart (Recharts) */}
            <div className={hasAnimated ? '' : 'animate-stagger stagger-2'}>
                <MonthlyTrendChart
                    ledgerData={ledgerData}
                    currentProjectId={currentProjectId}
                    selectedMonth={statsMonth}
                    isPrivateProject={isPrivateProject}
                />
            </div>

            {/* Contribution Chart (Recharts) - Hidden in Private Mode */}
            {!isPrivateProject && (
                <div className={hasAnimated ? '' : 'animate-stagger stagger-3'}>
                    <ContributionChart
                        hostName={hostName}
                        guestName={guestName}
                        monthMetrics={monthMetrics}
                        totalMetrics={totalMetrics}
                    />
                </div>
            )}

            {/* Category Pie Chart (Recharts) */}
            <div className={hasAnimated ? '' : 'animate-stagger stagger-3'}>
                <CategoryPieChart
                    categoryStats={categoryStats}
                    totalExpense={animatedTotalExpense} // Use Animated Value
                />
            </div>

            <div className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 ${hasAnimated ? '' : 'animate-stagger stagger-4'}`}>
                <h3 className="text-gray-600 font-bold mb-4">本月交易明細 ({sortedHistory.length}筆)</h3>

                {/* [Layout Fix] Group by Date Logic */}
                <div className="space-y-6">
                    {Object.entries(sortedHistory.reduce((groups, tx) => {
                        const dateStr = new Date(tx.date).toLocaleDateString('zh-TW'); // e.g. 2024/1/8
                        if (!groups[dateStr]) groups[dateStr] = [];
                        groups[dateStr].push(tx);
                        return groups;
                    }, {})).map(([date, txs], groupIdx) => (
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
                                        <div
                                            key={tx.id}
                                            onClick={() => {
                                                hapticLight(); // [iOS] List Click
                                                setEditingTx(tx);
                                                setIsEditTxModalOpen(true);
                                            }}
                                            className={`flex items-center justify-between p-3 active:bg-gray-50 active-press transition-colors animate-list-item ${idx !== txs.length - 1 ? 'border-b border-gray-50' : ''}`}
                                            style={{ animationDelay: `${(groupIdx * 50) + (idx * 30)}ms` }}
                                        >
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
