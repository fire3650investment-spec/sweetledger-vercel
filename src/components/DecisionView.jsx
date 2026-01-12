import React, { useState } from 'react';
import { Plus, Users, ArrowRight, Gem } from 'lucide-react';

export default function DecisionView({ user, onCreate, onJoin }) {
    const [showInput, setShowInput] = useState(false);
    const [inviteCode, setInviteCode] = useState('');

    const handleJoinSubmit = () => {
        if (inviteCode) {
            onJoin(inviteCode);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-50 to-white animate-in fade-in duration-700">
            <div className="w-full max-w-sm text-center space-y-8">

                <div className="space-y-2">
                    <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Gem className="text-rose-500" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">歡迎, {user?.displayName || '新朋友'}!</h2>
                    <p className="text-gray-500">請選擇下一步</p>
                </div>

                {!showInput ? (
                    <div className="grid gap-4">
                        <button
                            onClick={onCreate}
                            className="group relative flex items-center gap-4 p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-rose-200 hover:shadow-lg transition-all text-left"
                        >
                            <div className="bg-rose-50 p-3 rounded-full group-hover:bg-rose-100 transition-colors">
                                <Plus className="text-rose-500" size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-gray-800">建立新共同帳本</div>
                                <div className="text-xs text-gray-400">我是發起人，邀請另一半加入</div>
                            </div>
                            <ArrowRight className="ml-auto text-gray-300 group-hover:text-rose-400" size={20} />
                        </button>

                        <button
                            onClick={() => setShowInput(true)}
                            className="group relative flex items-center gap-4 p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all text-left"
                        >
                            <div className="bg-blue-50 p-3 rounded-full group-hover:bg-blue-100 transition-colors">
                                <Users className="text-blue-500" size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-gray-800">我有邀請碼</div>
                                <div className="text-xs text-gray-400">輸入另一半給的 6 碼代號</div>
                            </div>
                            <ArrowRight className="ml-auto text-gray-300 group-hover:text-blue-400" size={20} />
                        </button>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-4 animate-in slide-in-from-bottom-4">
                        <div className="text-left">
                            <h3 className="font-bold text-gray-800">輸入邀請碼</h3>
                            <p className="text-xs text-gray-500 mt-1">請輸入您收到的 6 位數代碼</p>
                        </div>
                        <input
                            type="text"
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                            placeholder="例如：X7Y8Z9"
                            className="w-full bg-gray-50 border border-gray-200 text-center text-2xl font-mono tracking-widest py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            maxLength={6}
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowInput(false)}
                                className="flex-1 py-3 text-gray-500 font-medium hover:bg-gray-50 rounded-xl transition-colors"
                            >
                                返回
                            </button>
                            <button
                                onClick={handleJoinSubmit}
                                disabled={!inviteCode}
                                className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 disabled:opacity-50 disabled:shadow-none active:scale-95 transition-all"
                            >
                                加入
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}