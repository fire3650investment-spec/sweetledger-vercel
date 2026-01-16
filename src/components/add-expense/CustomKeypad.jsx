// src/components/add-expense/CustomKeypad.jsx
import React, { memo, useRef } from 'react';
import { Delete, Equal, CornerDownLeft } from 'lucide-react';

const CustomKeypad = memo(function CustomKeypad({ onKeyPress, isMathPending }) {
    // [Fix] Flag to track if touch event fired, to prevent onClick from double-firing
    const touchFiredRef = useRef(false);

    const handleInput = (label) => {
        onKeyPress(label);
    };

    const renderKey = (label, type = 'num', className = '') => {
        let content = label;
        if (label === 'DEL') content = <Delete size={22} />;
        else if (label === 'DONE') content = isMathPending ? <Equal size={28} /> : <CornerDownLeft size={28} strokeWidth={3} />;

        // TouchStart: For touch devices - instant response, no 300ms delay
        const handleTouchStart = (e) => {
            touchFiredRef.current = true; // Mark that touch event fired
            e.preventDefault(); // Prevent any mouse emulation
            handleInput(label);
        };

        // Click: Fallback for desktop (mouse) - only fires if touch didn't
        const handleClick = (e) => {
            if (touchFiredRef.current) {
                // Touch already handled this interaction, ignore click
                touchFiredRef.current = false; // Reset for next interaction
                return;
            }
            handleInput(label);
        };

        return (
            <button
                onTouchStart={handleTouchStart}
                onClick={handleClick}
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

    // Separate handlers for DEL button (inline version)
    const handleDelTouchStart = (e) => {
        touchFiredRef.current = true;
        e.preventDefault();
        handleInput('DEL');
    };

    const handleDelClick = () => {
        if (touchFiredRef.current) {
            touchFiredRef.current = false;
            return;
        }
        handleInput('DEL');
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
                    onTouchStart={handleDelTouchStart}
                    onClick={handleDelClick}
                    className="flex items-center gap-2 text-gray-400 font-bold px-4 py-2 rounded-lg active:bg-gray-200 transition-colors touch-manipulation">
                    <Delete size={18} /> 刪除
                </button>
            </div>
        </div>
    );
});

export default CustomKeypad;