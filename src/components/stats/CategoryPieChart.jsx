
import React, { memo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { formatCurrency } from '../../utils/helpers';

const CategoryPieChart = memo(({ categoryStats, totalExpense }) => {
    // Data preparation
    // categoryStats is already sorted and has { name, total, hex }

    // Filter out minimal segments for cleaner chart if needed, 
    // but Recharts handles small segments well.

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-gray-900 text-white text-xs p-2 rounded-lg shadow-xl border border-gray-800">
                    <p className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.hex }}></span>
                        <span className="font-bold">{data.name}</span>
                    </p>
                    <p className="text-gray-300">{formatCurrency(data.total, 'TWD')}</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">
                        {Math.round((data.total / totalExpense) * 100)}%
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center animate-fade-in">
            <h3 className="text-gray-600 font-bold mb-6 w-full text-left">分類支出佔比 (TWD)</h3>

            <div className="relative w-48 h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <PieChart>
                        <Pie
                            data={categoryStats}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="total"
                            isAnimationActive={true}
                            animationDuration={800}
                        >
                            {categoryStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.hex || '#e5e7eb'} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xs text-gray-400 font-medium">總支出</span>
                    <span className="text-xl font-bold text-gray-800">{formatCurrency(totalExpense, 'TWD')}</span>
                </div>
            </div>

            {/* Legend List */}
            <div className="w-full space-y-3">
                {categoryStats.map(stat => (
                    <div key={stat.id} className="flex items-center justify-between group cursor-default">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: stat.hex }}></div>
                            <span className="text-sm text-gray-600 font-medium">{stat.name}</span>
                        </div>
                        <div className="text-sm flex flex-col items-end">
                            <span className="font-bold text-gray-800">{formatCurrency(stat.total, 'TWD')}</span>
                            <span className="text-gray-400 text-[10px]">{Math.round((stat.total / totalExpense) * 100)}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CategoryPieChart;
