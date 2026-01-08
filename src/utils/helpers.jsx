// src/utils/helpers.jsx
import React from 'react';
import {
    Utensils, Coffee, Bus, ShoppingBag,
    Home, Gamepad2, Gift, Wrench,
    Heart, Plane, GraduationCap, CircleDollarSign,
    HelpCircle, MoreHorizontal, Briefcase, Zap,
    Tv, Music, Smartphone, Baby, AlertCircle,
    User, Coins
} from 'lucide-react';
import { ICON_MAP, CHARACTERS, PALETTE } from './constants';

// --- Formatters & Helpers ---

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// [New] 本地時區日期 (修復早晨時差 Bug)
export const getLocalISODate = (dateInput = new Date()) => {
    const date = new Date(dateInput);
    const offset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - offset);
    return localDate.toISOString().slice(0, 10);
};

export const formatCurrency = (amount, currency = 'TWD', privacyMode = false) => {
    if (privacyMode) return '****';

    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
};

export const calculateTwdValue = (amount, currency, rates) => {
    if (!amount) return 0;
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return 0;

    if (currency === 'TWD') return numAmount;

    // [Safe] 若找不到匯率，預設為 1 (原幣值)，避免計算結果為 NaN
    const rate = rates?.[currency] || 1;
    return numAmount * rate;
};

import { auth } from './firebase'; // Ensure auth is imported if not already, or pass it in. 
// Wait, 'auth' export might need checking. Usually it's in ./firebase. 
// However, helpers.jsx imports constants. Let's assume we need to import auth from 'firebase/auth' or '../utils/firebase'
import { getAuth } from 'firebase/auth';

const getAuthToken = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return null;
    return await user.getIdToken();
};

// [Batch 5 Updated] 匯率 API 串接 (含 Cache 機制與架構預留)
export const fetchExchangeRate = async (currencyCode) => {
    if (!currencyCode || currencyCode === 'TWD') return 1;

    // 1. Cache Check (LocalStorage) - 效能優先
    // Key format: sweet_rate_{CURRENCY}
    const cacheKey = `sweet_rate_${currencyCode}`;
    const cachedData = localStorage.getItem(cacheKey);
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 Hours

    if (cachedData) {
        try {
            const { rate, timestamp } = JSON.parse(cachedData);
            const now = Date.now();
            if (now - timestamp < CACHE_DURATION) {
                // console.log(`Hit Cache for ${currencyCode}: ${rate}`);
                return rate;
            }
        } catch (e) {
            console.warn("Cache parse error", e);
            localStorage.removeItem(cacheKey);
        }
    }

    // 2. Fetch from Vercel Serverless Function
    // 我們使用 /api/exchange-rates?currency=USD 來隱藏金鑰
    try {
        const token = await getAuthToken(); // Get Token
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

        const response = await fetch(`/api/exchange-rates?currency=${currencyCode}`, {
            headers: headers
        });
        const data = await response.json();

        if (data && data.rate) {
            // Write to Cache
            const cachePayload = JSON.stringify({
                rate: data.rate,
                timestamp: Date.now()
            });
            localStorage.setItem(cacheKey, cachePayload);
            return data.rate;
        }

        console.warn(`Exchange Rate API: No rate returned for ${currencyCode}`);
        return null;
    } catch (e) {
        console.error("Exchange Rate API Error:", e);
        return null;
    }
};

// --- Icon & UI System ---

export const getIconComponent = (iconName) => {
    const localMap = {
        'food': Utensils,
        'drink': Coffee,
        'transport': Bus,
        'shopping': ShoppingBag,
        'housing': Home,
        'entertainment': Gamepad2,
        'gift': Gift,
        'utilities': Wrench,
        'health': Heart,
        'travel': Plane,
        'education': GraduationCap,
        'salary': CircleDollarSign,
        'investment': Briefcase,
        'subscriptions': Zap,
        'digital': Smartphone,
        'music': Music,
        'streaming': Tv,
        'baby': Baby,
        'other': MoreHorizontal,
        'help-circle': HelpCircle,
        'settlement': Coins
    };

    const TargetIcon = (ICON_MAP && ICON_MAP[iconName]) || localMap[iconName] || HelpCircle;
    return TargetIcon;
};

export const getCategoryStyle = (category, mode = 'display') => {
    if (!category) return { containerClass: 'bg-gray-100', iconClass: 'text-gray-500', hex: '#94a3b8' };

    // Input Mode
    if (mode === 'input') {
        return {
            containerClass: 'bg-gray-50 border border-gray-100',
            iconClass: 'text-gray-400',
            activeClass: 'bg-rose-500 text-white shadow-md shadow-rose-200 border-transparent', // Rose remains as primary active color
            hex: '#64748b'
        };
    }

    // Display Mode
    let token = null;

    if (category.colorId && PALETTE && PALETTE[category.colorId]) {
        token = PALETTE[category.colorId];
    } else if (category.bg && category.text) {
        // Legacy support or direct overrides
        return {
            containerClass: category.bg,
            iconClass: category.text,
            hex: category.hex || '#475569'
        };
    }

    if (token) {
        // Case 1: Legacy Tailwind Class (e.g., Rose)
        if (token.bg && token.text) {
            return {
                containerClass: `${token.bg} ${token.text}`,
                iconClass: token.text,
                hex: token.hex
            };
        }
        // Case 2: Morandi Hex (Inline Style)
        return {
            containerClass: '', // No bg color class
            iconClass: '', // No text color class
            containerStyle: { backgroundColor: `${token.hex}26`, color: token.hex }, // 15% opacity hex (26 in hex)
            iconStyle: { color: token.hex },
            hex: token.hex
        };
    }

    // Fallback
    return {
        containerClass: 'bg-slate-100 text-slate-600',
        iconClass: '',
        hex: category.hex || '#475569'
    };
};

export const renderAvatar = (avatarKeyOrUrl, className = "w-10 h-10") => {
    if (avatarKeyOrUrl && typeof avatarKeyOrUrl === 'string' && avatarKeyOrUrl.includes('http')) {
        return <img src={avatarKeyOrUrl} className={`${className} rounded-full object-cover border border-gray-200`} alt="avatar" />;
    }

    let Icon = User;
    if (CHARACTERS && CHARACTERS[avatarKeyOrUrl]) {
        const iconName = CHARACTERS[avatarKeyOrUrl].icon;
        Icon = getIconComponent(iconName);
    } else if (ICON_MAP && ICON_MAP[avatarKeyOrUrl]) {
        Icon = ICON_MAP[avatarKeyOrUrl];
    }

    return (
        <div className={`${className} flex items-center justify-center bg-gray-100 rounded-full text-gray-600 border border-gray-200`}>
            <Icon className="w-[60%] h-[60%]" strokeWidth={2} />
        </div>
    );
};

// --- AI / Gemini Functions (Using Proxy) ---

export const callGemini = async (prompt, imageBase64 = null) => {
    try {
        const token = await getAuthToken(); // Get Token
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {})
            },
            body: JSON.stringify({
                prompt: prompt,
                imageBase64: imageBase64
            })
        });

        const data = await response.json();

        if (response.ok) {
            return data.text;
        } else {
            console.error("Gemini API Error:", data.error);
            return null;
        }
    } catch (e) {
        console.error("Gemini Fetch Error:", e);
        return null;
    }
};

export const parseReceiptWithGemini = async (base64Image) => {
    const prompt = `你是一個專業的收據識別助手。請分析這張發票或收據圖片，並提取所有「收費項目」。
  
  重要規則：
  1. 請列出所有菜色、商品或服務項目。
  2. 如果看到「服務費」、「清潔費」、「Service Charge」、「SVC」或「10%」等額外費用，請務必將其視為一個獨立的品項列出。
  3. 忽略日期、地址、統編等資訊。
  4. 數量 (quantity) 若無法辨識預設為 1。
  5. 價格 (price) 請轉換為純數字。
  
  請直接回傳一個 JSON 陣列，不要包含 Markdown 格式。
  範例：[{"name": "牛肉麵", "price": 180, "quantity": 1}]`;

    const rawResult = await callGemini(prompt, base64Image);
    if (!rawResult) return null;

    try {
        const cleanJson = rawResult.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (e) {
        console.error("Receipt Parse JSON Error:", e);
        return null;
    }
};