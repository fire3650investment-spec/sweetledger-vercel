
import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatCurrency } from '../../utils/helpers';

const ContributionChart = memo(({ hostName, guestName, hostTotal, guestTotal, hostRatio, guestRatio }) => {
    // Transform data for Recharts Stacked Bar
    // We need a single object with keys for each portion
    const data = [
        {
            name: 'Contribution',
            Host: hostTotal,
            Guest: guestTotal,
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
            <h3 className="text-gray-600 font-bold mb-4">消費貢獻度 (支付金額 - TWD)</h3>

            {/* Legend / Summary */}
            <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-600">{hostName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{formatCurrency(hostTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    <span className="text-gray-600">{guestName}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">{formatCurrency(guestTotal, 'TWD')}</span>
                    <span className="text-xs text-gray-400">({Math.round(guestRatio)}%)</span>
                </div>
            </div>

            {/* Recharts Bar (Visual Only) */}
            <div className="h-6 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
                        <Bar dataKey="Host" stackId="a" fill="#3b82f6" radius={[4, 0, 0, 4]} isAnimationActive={true} animationDuration={1000} />
                        <Bar dataKey="Guest" stackId="a" fill="#ec4899" radius={[0, 4, 4, 0]} isAnimationActive={true} animationDuration={1000} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
});

export default ContributionChart;
