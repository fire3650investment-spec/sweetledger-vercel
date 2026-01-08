import React from 'react';
import { X, Mic, StopCircle } from 'lucide-react';

export default function AiInputModal({
    isOpen,
    onClose,
    inputValue,
    onInputChange,
    isRecording,
    onToggleRecording,
    onSubmit
}) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-[60] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-fade-in">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">AI 智慧輸入</h3>
                <button onClick={onClose} className="p-2 bg-gray-100 rounded-full"><X size={20} /></button>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <textarea
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder="例如：午餐吃拉麵 250元..."
                    className="w-full h-40 p-4 bg-gray-50 rounded-2xl text-lg outline-none resize-none border border-gray-200 focus:border-purple-500 transition-colors"
                />
                <div className="flex justify-center gap-4 mt-auto mb-8">
                    <button
                        onClick={onToggleRecording}
                        className={`p-6 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500 scale-110 shadow-red-200' : 'bg-purple-50 text-purple-600 shadow-purple-200'} shadow-lg`}
                    >
                        {isRecording ? <StopCircle size={32} /> : <Mic size={32} />}
                    </button>
                </div>
                <button
                    onClick={onSubmit}
                    disabled={!inputValue}
                    className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg mb-4"
                >
                    開始分析
                </button>
            </div>
        </div>
    );
}
