
import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { calculateTwdValue, formatCurrency } from '../../utils/helpers';

export default function MonthlyTrendChart({
    ledgerData,
    currentProjectId,
    selectedMonth, // "YYYY-MM"
    isPrivateProject
}) {
    // 1. Calculate Data for Last 6 Months ending in selectedMonth
    const chartData = useMemo(() => {
        if (!ledgerData?.transactions || !selectedMonth) return [];

        const projectRates = ledgerData.projects?.find(p => p.id === currentProjectId)?.rates || {};
        const endDate = new Date(selectedMonth + '-01'); // 1st of selected month
        // We want 6 months: [M-5, M-4, M-3, M-2, M-1, M]
        const months = [];
        for (let i = 5; i >= 0; i--) {
            const d = new Date(endDate);
            d.setMonth(d.getMonth() - i);
            months.push(d.toISOString().slice(0, 7)); // "YYYY-MM"
        }

        const data = months.map(m => {
            const txs = ledgerData.transactions.filter(t =>
                t.date.startsWith(m) &&
                (t.projectId || 'daily') === currentProjectId &&
                !t.isSettlement // Exclude settlements
            );

            const total = txs.reduce((sum, tx) => {
                const val = calculateTwdValue(tx.amount || 0, tx.currency || 'TWD', projectRates);
                return sum + (isNaN(val) ? 0 : val);
            }, 0);

            // Format Month Label (e.g., "1月")
            const dateObj = new Date(m + '-01');
            const label = `${dateObj.getMonth() + 1}月`;

            return {
                monthKey: m,
                label: label,
                amount: Math.round(total),
                isCurrent: m === selectedMonth
            };
        });

        return data;
    }, [ledgerData, currentProjectId, selectedMonth]);

    // 2. Stats Calculation
    const stats = useMemo(() => {
        if (chartData.length === 0) return null;
        const totalSum = chartData.reduce((acc, d) => acc + d.amount, 0);
        const activeMonthsCount = chartData.filter(d => d.amount > 0).length;
        const average = activeMonthsCount > 0 ? Math.round(totalSum / activeMonthsCount) : 0;

        const currentData = chartData.find(d => d.isCurrent);
        const prevData = chartData[chartData.length - 2]; // The one before current

        let trendText = '';
        let trendColor = 'text-gray-500';

        if (currentData && prevData) {
            const diff = currentData.amount - prevData.amount;
            const percent = prevData.amount > 0 ? Math.round((diff / prevData.amount) * 100) : 0;

            if (diff > 0) {
                trendText = `比上月多 ${formatCurrency(diff, 'TWD')} (+${percent}%)`;
                trendColor = 'text-rose-500';
            } else if (diff < 0) {
                trendText = `比上月少 ${formatCurrency(Math.abs(diff), 'TWD')} (${percent}%)`;
                trendColor = 'text-emerald-500'; // Green is good for less spending usually
            } else {
                trendText = '與上月支出持平';
            }
        } else {
            // No previous data (start of time)
            trendText = `本月支出 ${formatCurrency(currentData?.amount || 0, 'TWD')}`;
        }

        return { average, trendText, trendColor, currentAmount: currentData?.amount || 0 };
    }, [chartData]);

    if (!stats) return null;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-gray-900 text-white text-xs p-2 rounded-lg shadow-xl">
                    <p className="font-bold mb-1">{data.monthKey}</p>
                    <p className="font-medium text-rose-300">{formatCurrency(data.amount, 'TWD', false)}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-6 animate-fade-in">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">近半年支出趨勢</h3>
                    <p className={`text-sm font-bold ${stats.trendColor}`}>
                        {stats.trendText}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-medium">平均月支出</p>
                    <p className="text-xs font-bold text-gray-600">{formatCurrency(stats.average, 'TWD')}</p>
                </div>
            </div>

            <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="barGradientCurrent" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f43f5e" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.4} />
                            </linearGradient>
                            <linearGradient id="barGradientNormal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#e5e7eb" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0.4} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 'bold' }}
                            dy={10}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <ReferenceLine y={stats.average} stroke="#9ca3af" strokeDasharray="3 3" strokeOpacity={0.5} />
                        <Bar dataKey="amount" radius={[4, 4, 4, 4]} barSize={24}>
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.isCurrent ? "url(#barGradientCurrent)" : "url(#barGradientNormal)"}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
