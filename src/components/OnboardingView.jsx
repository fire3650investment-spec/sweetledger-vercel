import React, { useState } from 'react';
import { LogIn, ArrowRight, Heart } from 'lucide-react';

export default function OnboardingView({
    handleGoogleLogin,
    handleAppleLogin,
    loading,
    onJoinWithCode // New prop
}) {
    const [inputCode, setInputCode] = useState('');

    const handleJoinClick = () => {
        if (inputCode && onJoinWithCode) {
            onJoinWithCode(inputCode);
        }
    };

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-rose-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center">

                {/* Logo Area */}
                <div className="mb-12 space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-tr from-rose-400 to-rose-600 rounded-3xl rotate-3 shadow-xl shadow-rose-200 flex items-center justify-center mx-auto">
                        <span className="text-4xl">🍰</span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                            Fifty<span className="text-rose-500">fifty</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-sm font-medium">除了愛，什麼都能算清楚</p>
                    </div>
                </div>

                {/* Actions Area */}
                <div className="w-full max-w-xs space-y-8">

                    {/* Primary: Login */}
                    <div className="space-y-3">
                        <button
                            onClick={handleGoogleLogin}
                            disabled={loading}
                            className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95 transition-transform disabled:opacity-70"
                        >
                            {loading ? (
                                <span className="animate-pulse">處理中...</span>
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    使用 Google 登入
                                </>
                            )}
                        </button>

                        {/* Apple Login */}
                        <button
                            onClick={handleAppleLogin}
                            disabled={loading}
                            className="w-full bg-black text-white py-4 rounded-2xl font-bold shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95 transition-transform disabled:opacity-70"
                        >
                            {loading ? (
                                <span className="animate-pulse">處理中...</span>
                            ) : (
                                <>
                                    <svg viewBox="0 0 384 512" fill="currentColor" width="20" height="20">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                    </svg>
                                    使用 Apple 登入
                                </>
                            )}
                        </button>

                        <p className="text-[10px] text-gray-400">登入後將自動進入您的帳本</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-300">OR</span>
                        </div>
                    </div>

                    {/* Secondary: Join with Code */}
                    <div className="space-y-2">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputCode}
                                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                                placeholder="輸入邀請碼"
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-center text-sm font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all placeholder:font-normal placeholder:tracking-normal"
                                maxLength={6}
                            />
                            <button
                                onClick={handleJoinClick}
                                disabled={!inputCode || loading}
                                className="bg-rose-100 text-rose-600 px-4 rounded-xl font-bold disabled:opacity-50 active:scale-95 transition-transform"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-400">已有另一半的邀請碼？輸入並加入</p>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="p-6 text-center">
                <p className="text-xs text-gray-300 flex items-center justify-center gap-1">
                    Made with <Heart size={10} className="fill-rose-300 text-rose-300" /> for Couples
                </p>
            </div>
        </div>
    );
}