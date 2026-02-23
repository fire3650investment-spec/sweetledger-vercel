import React, { memo, useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatCurrency } from '../../utils/helpers';
import { useCountUp } from '../../hooks/useCountUp'; // [Visual Polish]
import { ChevronDown } from 'lucide-react';

const ContributionChart = memo(({ hostName, guestName, monthMetrics, totalMetrics }) => {
    const [viewMode, setViewMode] = useState('paid'); // 'paid', 'real', 'private'
    const [timeScope, setTimeScope] = useState('month'); // 'month', 'total'

    const currentMetrics = timeScope === 'month' ? monthMetrics : totalMetrics;

    const { hostVal, guestVal } = useMemo(() => {
        if (!currentMetrics) return { hostVal: 0, guestVal: 0 };
        if (viewMode === 'real') {
            return { hostVal: currentMetrics.hReal, guestVal: currentMetrics.gReal };
        } else if (viewMode === 'private') {
            return { hostVal: currentMetrics.hPrivate, guestVal: currentMetrics.gPrivate };
        }
        return { hostVal: currentMetrics.hPaid, guestVal: currentMetrics.gPaid };
    }, [currentMetrics, viewMode]);

    const combinedTotal = hostVal + guestVal;
    const hostRatio = combinedTotal > 0 ? (hostVal / combinedTotal) * 100 : 50;
    const guestRatio = combinedTotal > 0 ? (guestVal / combinedTotal) * 100 : 50;

    const hostColor = hostVal >= guestVal ? '#10b981' : '#f43f5e';
    const guestColor = guestVal >= hostVal ? '#10b981' : '#f43f5e';

    // [Visual Polish] Living Numbers
    const animatedHostTotal = useCountUp(hostVal, 800);
    const animatedGuestTotal = useCountUp(guestVal, 800);

    // Transform data for Recharts Stacked Bar
    const data = [
        {
            name: 'Contribution',
            Host: hostVal,
            Guest: guestVal,
        }
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900 text-white text-xs p-3 rounded-xl shadow-xl border border-gray-800">
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                            <span className="text-gray-300">{entry.name === 'Host' ? hostName : guestName}:</span>
                            <span className="font-bold">{formatCurrency(entry.value, 'TWD')}</span>
                            <span className="text-gray-500 text-[10px]">
                                ({Math.round(entry.name === 'Host' ? hostRatio : guestRatio)}%)
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 animate-fade-in">
            <div className="flex flex-col gap-3 mb-4">
                <div className="flex justify-between items-center gap-2">
                    <div className="relative">
                        <select
                            value={viewMode}
                            onChange={(e) => setViewMode(e.target.value)}
                            className="appearance-none bg-transparent text-gray-800 font-bold py-1 pl-1 pr-6 outline-none text-lg cursor-pointer"
                        >
                            <option value="paid">支付金額 (貢獻度)</option>
                            <option value="real">個人總花費</option>
                            <option value="private">私人開銷</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800" />
                    </div>

                    <div className="flex bg-gray-100 rounded-lg p-1 shrink-0">
                        <button
                            onClick={() => setTimeScope('month')}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${timeScope === 'month' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            當月
                        </button>
                        <button
                            onClick={() => setTimeScope('total')}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${timeScope === 'total' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Total
                        </button>
                    </div>
                </div>
            </div>

            {/* Legend / Summary */}
            <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: hostColor }}></div>
                    <span className="text-gray-600">{hostName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 font-nums">{formatCurrency(animatedHostTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: guestColor }}></div>
                    <span className="text-gray-600">{guestName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800 font-nums">{formatCurrency(animatedGuestTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(guestRatio)}%)</span>
                </div>
            </div>

            {/* Recharts Bar (Visual Only) */}
            <div className="h-6 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                        <Bar dataKey="Host" stackId="a" fill={hostColor} radius={[4, 0, 0, 4]} isAnimationActive={true} animationDuration={1000} />
                        <Bar dataKey="Guest" stackId="a" fill={guestColor} radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
});

export default ContributionChart;
