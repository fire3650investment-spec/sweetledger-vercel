// src/components/add-expense/CustomKeypad.jsx
import React, { memo } from 'react';
import { Delete, Equal, CornerDownLeft } from 'lucide-react';

const CustomKeypad = memo(function CustomKeypad({ onKeyPress, isMathPending }) {

    const renderKey = (label, type = 'num', className = '') => {
        let content = label;
        if (label === 'DEL') content = <Delete size={22} />;
        else if (label === 'DONE') content = isMathPending ? <Equal size={28} /> : <CornerDownLeft size={28} strokeWidth={3} />;

        // [Performance] Use dedicated event handlers to bypass 300ms delay
        const handleTouchStart = (e) => {
            // Prevent default to stop mouse emulation and ghost clicks
            if (e.cancelable && e.target.tagName !== 'BUTTON') e.preventDefault();
            // Note: preventing default on button touchstart might block :active css states in some browsers,
            // but it's crucial for speed. We can manually toggle class if needed, or rely on active:scale-95 which usually works with touch.
            // Actually, for React, e.preventDefault() on touchStart stops onClick from firing.
            e.stopPropagation();
            onKeyPress(label);
        };

        const handleMouseDown = (e) => {
            e.preventDefault(); // Prevent focus
            e.stopPropagation();
            onKeyPress(label);
        };

        return (
            <button
                onTouchStart={handleTouchStart}
                onMouseDown={handleMouseDown}
                className={`
                rounded-2xl text-xl font-bold flex items-center justify-center select-none 
                active:scale-90 transition-transform duration-75
                touch-manipulation cursor-pointer
                ${className} 
                ${type === 'num' ? 'bg-white text-slate-700 shadow-[0_2px_0_#e2e8f0]' : ''} 
                ${type === 'op' ? 'bg-rose-50 text-rose-500' : ''} 
                ${type === 'action' ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : ''} 
            `}
                style={{ height: '56px', WebkitTapHighlightColor: 'transparent' }}
            >
                {content}
            </button>
        );
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-gray-50 rounded-t-3xl z-50 animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
            <div className="flex justify-center pt-2 pb-1">
                <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 gap-3 p-4">
                {renderKey('7')} {renderKey('8')} {renderKey('9')} {renderKey('+', 'op')}
                {renderKey('4')} {renderKey('5')} {renderKey('6')} {renderKey('-', 'op')}
                {renderKey('1')} {renderKey('2')} {renderKey('3')} {renderKey('×', 'op')}
                {renderKey('0')} {renderKey('.')} {renderKey('DONE', 'action', 'col-span-1')} {renderKey('÷', 'op')}
            </div>
            <div className="px-4 pb-2 flex justify-end">
                <button
                    onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); onKeyPress('DEL'); }}
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); onKeyPress('DEL'); }}
                    className="flex items-center gap-2 text-gray-400 font-bold px-4 py-2 rounded-lg active:bg-gray-200 transition-colors touch-manipulation">
                    <Delete size={18} /> 刪除
                </button>
            </div>
        </div>
    );
});

export default CustomKeypad;