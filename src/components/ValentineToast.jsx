// src/components/ValentineToast.jsx
// 🌹 2/14 情人節彩蛋 — 只出現一次
import React, { useState, useEffect } from 'react';

const VALENTINE_KEY = 'sweet_valentine_2026';

export default function ValentineToast() {
    const [visible, setVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const now = new Date();
        const month = now.getMonth() + 1; // 1-indexed
        const day = now.getDate();

        // 只在 2/14 當天顯示
        if (month !== 2 || day !== 14) return;

        // 只顯示一次 (localStorage)
        try {
            if (localStorage.getItem(VALENTINE_KEY)) return;
        } catch { return; }

        // 延遲 1.5 秒後淡入
        const showTimer = setTimeout(() => {
            setVisible(true);
            try { localStorage.setItem(VALENTINE_KEY, '1'); } catch { }
        }, 1500);

        // 5 秒後自動淡出
        const hideTimer = setTimeout(() => {
            setFadeOut(true);
        }, 6500);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none ${fadeOut ? 'animate-fade-out' : 'animate-fade-in'}`}
            onAnimationEnd={() => { if (fadeOut) setVisible(false); }}
        >
            <div
                className="pointer-events-auto"
                onClick={() => setFadeOut(true)}
            >
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-8 py-6 shadow-2xl shadow-rose-200/50 border border-rose-100/60 text-center max-w-[280px]">
                    <p className="text-[28px] mb-2 leading-none">🌹</p>
                    <p className="text-base font-bold text-gray-800 tracking-wide">
                        愛梨，情人節快樂
                    </p>
                    <p className="text-[10px] text-rose-300 mt-2 font-medium tracking-widest uppercase">Happy Valentine's Day</p>
                </div>
            </div>
        </div>
    );
}
