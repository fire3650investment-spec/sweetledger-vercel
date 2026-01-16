// src/components/DashboardSkeleton.jsx
// [Smooth UX] 骨架屏元件 - 與主畫面相同結構，平滑過渡用

import React from 'react';

export default function DashboardSkeleton() {
    return (
        <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 animate-gentle-fade">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center mb-4">
                <div className="skeleton h-10 w-28 rounded-full"></div>
                <div className="flex gap-2">
                    <div className="skeleton h-8 w-8 rounded-full"></div>
                </div>
            </div>

            {/* Card Skeleton */}
            <div className="rounded-3xl p-6 bg-gray-100 shadow-sm mb-8">
                <div className="skeleton h-4 w-32 mb-3"></div>
                <div className="skeleton h-10 w-48 mb-4"></div>
                <div className="skeleton h-4 w-40"></div>
            </div>

            {/* Transaction List Skeleton */}
            <div className="space-y-6">
                {/* Date Header */}
                <div>
                    <div className="skeleton h-3 w-20 mb-3 ml-1"></div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-b-0">
                                <div className="flex items-center gap-3">
                                    <div className="skeleton w-8 h-8 rounded-full"></div>
                                    <div>
                                        <div className="skeleton h-4 w-24 mb-2"></div>
                                        <div className="skeleton h-3 w-16"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-5 w-16"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Date Group */}
                <div>
                    <div className="skeleton h-3 w-20 mb-3 ml-1"></div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-b-0">
                                <div className="flex items-center gap-3">
                                    <div className="skeleton w-8 h-8 rounded-full"></div>
                                    <div>
                                        <div className="skeleton h-4 w-20 mb-2"></div>
                                        <div className="skeleton h-3 w-12"></div>
                                    </div>
                                </div>
                                <div className="skeleton h-5 w-14"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
