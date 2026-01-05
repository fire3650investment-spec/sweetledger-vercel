
import React from 'react';
import { User, Trash2 } from 'lucide-react';
import { renderAvatar } from '../../utils/helpers';

export default function MemberManager({ ledgerData, user, isHost, kickMember }) {
    if (!ledgerData?.users) return null;

    return (
        <div className="border-t border-gray-50 p-4 bg-gray-50/50">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <User size={12} /> 帳本成員
            </h4>
            <div className="space-y-3">
                {Object.keys(ledgerData.users).map(uid => {
                    const u = ledgerData.users[uid];
                    const isMe = uid === user.uid;
                    const role = u.role || 'guest';
                    return (
                        <div key={uid} className="flex items-center gap-3">
                            {renderAvatar(u.avatar, "w-8 h-8")}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className={`font-bold text-sm ${isMe ? 'text-gray-900' : 'text-gray-600'}`}>{u.name}</span>
                                    {isMe && <span className="text-[10px] text-gray-400 bg-gray-200 px-1.5 rounded-full">(我)</span>}
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${role === 'host' ? 'bg-rose-50 text-rose-600' : 'bg-gray-200 text-gray-500'}`}>
                                {role === 'host' ? '戶長' : '成員'}
                            </span>
                            {isHost && !isMe && (
                                <button
                                    onClick={() => kickMember(uid)}
                                    className="p-2 bg-gray-100 text-gray-400 rounded-full hover:bg-rose-50 hover:text-rose-500 transition-colors"
                                >
                                    <Trash2 size={14} />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
