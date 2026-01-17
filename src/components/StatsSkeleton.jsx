// src/components/StatsSkeleton.jsx
// [Smooth UX] 分析頁骨架屏 - 與 StatsView 相同結構，平滑過渡用

import React from 'react';

export default function StatsSkeleton() {
    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 animate-gentle-fade">
            {/* Header Skeleton: 標題 + 月份選擇 */}
            <div className="flex justify-between items-center mb-6">
                <div className="skeleton h-8 w-28 rounded-lg"></div>
                <div className="skeleton h-8 w-32 rounded-lg"></div>
            </div>

            {/* Trend Chart Skeleton */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-6">
                <div className="skeleton h-4 w-24 mb-4"></div>
                <div className="skeleton h-40 w-full rounded-xl"></div>
            </div>

            {/* Contribution Chart Skeleton */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 mb-6">
                <div className="skeleton h-4 w-20 mb-4"></div>
                <div className="skeleton h-4 w-full rounded-lg mb-2"></div>
                <div className="flex justify-between">
                    <div className="skeleton h-3 w-16"></div>
                    <div className="skeleton h-3 w-16"></div>
                </div>
            </div>

            {/* Pie Chart Skeleton */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
                <div className="flex items-center justify-center mb-4">
                    <div className="skeleton w-32 h-32 rounded-full"></div>
                </div>
                <div className="flex justify-center gap-4">
                    <div className="skeleton h-4 w-16"></div>
                    <div className="skeleton h-4 w-16"></div>
                    <div className="skeleton h-4 w-16"></div>
                </div>
            </div>

            {/* Transaction List Skeleton */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
                <div className="skeleton h-5 w-36 mb-4"></div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="skeleton w-8 h-8 rounded-full"></div>
                                <div>
                                    <div className="skeleton h-4 w-24 mb-2"></div>
                                    <div className="skeleton h-3 w-16"></div>
                                </div>
                            </div>
                            <div className="skeleton h-5 w-14"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
