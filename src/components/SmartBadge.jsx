// src/components/SmartBadge.jsx
import React from 'react';

/**
 * SmartBadge - 智慧狀態標籤
 * * 核心哲學：
 * 使用者不關心會計術語（代墊、債權），只關心「這筆錢跟我的關係」。
 * * 視覺語言：
 * 🟢 綠色 (Help You)：我幫你付 -> 你欠我錢 (資產)
 * 🔴 紅色 (Help Me)：你幫我付 -> 我欠你錢 (負債)
 * 🔵 藍色 (Together)：一起付 -> 共同分擔
 * ⚪️ 灰色 (Personal)：純個人 -> 與對方無關
 */
export default function SmartBadge({ tx, user, users }) {
    if (!tx || !user || !users) return null;

    if (tx.isSettlement) {
        return (
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-600">
                還款
            </span>
        );
    }

    const payerId = tx.payer;
    const isMe = user.uid === payerId;
    const myRole = users[user.uid]?.role; // 'host' or 'guest'
    
    // 判斷邏輯
    let status = 'personal'; // default

    if (tx.splitType === 'even' || tx.splitType === 'custom') {
        status = 'together';
    } else if (tx.splitType === 'self') {
        // 舊資料相容：視為付款人的個人支出
        status = isMe ? 'personal' : 'other_personal';
    } else if (tx.splitType === 'host_all') {
        // 費用歸 Host
        if (myRole === 'host') {
            // 我是 Host，這筆費用歸我
            status = isMe ? 'personal' : 'help_me'; // 我付=個人; 對方付=幫我付
        } else {
            // 我是 Guest，這筆費用歸 Host
            status = isMe ? 'help_you' : 'other_personal'; // 我付=幫你付; 對方付=他自己的事
        }
    } else if (tx.splitType === 'guest_all') {
        // 費用歸 Guest
        if (myRole === 'guest') {
            // 我是 Guest，這筆費用歸我
            status = isMe ? 'personal' : 'help_me'; // 我付=個人; 對方付=幫我付
        } else {
            // 我是 Host，這筆費用歸 Guest
            status = isMe ? 'help_you' : 'other_personal'; // 我付=幫你付; 對方付=他自己的事
        }
    }

    // 視覺對照表
    const config = {
        personal: { 
            label: '純個人', 
            bg: 'bg-gray-100', 
            text: 'text-gray-400',
            icon: null 
        },
        other_personal: { 
            label: '對方個人', 
            bg: 'bg-gray-50', 
            text: 'text-gray-300',
            icon: null 
        },
        help_you: { 
            label: '幫你付', 
            bg: 'bg-orange-100', 
            text: 'text-orange-600',
            icon: '↗' // 錢出去了，累積債權
        },
        help_me: { 
            label: '幫我付', 
            bg: 'bg-red-100', 
            text: 'text-red-600',
            icon: '↙' // 錢進來了(服務)，累積債務
        },
        together: { 
            label: '平分', 
            bg: 'bg-blue-50', 
            text: 'text-blue-500',
            icon: '•' 
        }
    };

    const style = config[status];

    return (
        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded ${style.bg} ${style.text} text-[10px] font-bold whitespace-nowrap`}>
            {style.icon && <span>{style.icon}</span>}
            {style.label}
        </span>
    );
}