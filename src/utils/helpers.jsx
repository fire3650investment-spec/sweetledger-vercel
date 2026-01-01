// src/utils/helpers.jsx
import React from 'react';
import { 
  Utensils, Coffee, Bus, ShoppingBag, 
  Home, Gamepad2, Gift, Wrench, 
  Heart, Plane, GraduationCap, CircleDollarSign, 
  HelpCircle, MoreHorizontal, Briefcase, Zap, 
  Tv, Music, Smartphone, Baby, AlertCircle
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// [NEW] 取得本地時間的 YYYY-MM-DD 字串
export const getLocalISODate = (dateInput = new Date()) => {
  const date = new Date(dateInput);
  // getTimezoneOffset 回傳的是「UTC 減去本地時間」的分鐘數 (例如台灣是 -480)
  // 我們要「減去」這個負值 (等於加上 480 分鐘) 來把 UTC 時間「推」到本地時間
  const offset = date.getTimezoneOffset() * 60000; 
  const localDate = new Date(date.getTime() - offset);
  return localDate.toISOString().slice(0, 10);
};

export const formatCurrency = (amount, currency = 'TWD', privacyMode = false) => {
  if (privacyMode) return '****';
  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};

// ... (以下保持原有的 getIconComponent, calculateTwdValue, getCategoryStyle, callGemini, parseReceiptWithGemini 不變)

export const getIconComponent = (iconName) => {
  const icons = {
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
    'settlement': CircleDollarSign // Default fallback
  };
  return icons[iconName] || icons['help-circle'];
};

export const calculateTwdValue = (amount, currency, rates) => {
    if (!amount) return 0;
    if (currency === 'TWD') return amount;
    const rate = rates ? rates[currency] : null;
    if (!rate) return amount; 
    return amount * rate;
};

export const getCategoryStyle = (category, mode = 'display') => {
    const defaultColor = 'bg-gray-100 text-gray-600';
    const defaultHex = '#9ca3af';
    
    // 如果 category 物件本身帶有 hex (新版設計)，優先使用
    if (category?.hex) {
        return {
            containerClass: '', // 用 style 控制背景
            iconClass: 'text-white', // 自訂顏色的 icon 通常反白
            activeClass: '', // 用 style 控制
            hex: category.hex
        };
    }
    
    // 舊版相容 (Tailwind Classes)
    const colorClass = category?.color || defaultColor;
    
    if (mode === 'input') {
        return {
            containerClass: colorClass.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-'), 
            activeClass: colorClass, // 選中時用深色
            iconClass: 'currentColor'
        };
    }

    return {
        containerClass: colorClass,
        iconClass: colorClass.includes('text-white') ? 'text-white' : 'currentColor',
        hex: defaultHex // 舊版沒 Hex 就給預設灰
    };
};

// ... Gemini API 相關函式 (保持不變)
export const callGemini = async (prompt, imageBase64) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
      console.error("Gemini API Key missing");
      return null;
  }
  try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      let result;
      if (imageBase64) {
          const imagePart = { inlineData: { data: imageBase64, mimeType: "image/jpeg" } };
          result = await model.generateContent([prompt, imagePart]);
      } else {
          result = await model.generateContent(prompt);
      }
      return result.response.text();
  } catch (e) {
      console.error("Gemini API Error:", e);
      return null;
  }
};

export const parseReceiptWithGemini = async (base64Image) => {
    const prompt = `
    你是一個記帳助手。請分析這張收據/發票的圖片，並回傳一個 JSON 陣列。
    請識別所有消費品項，包含：
    1. 品項名稱 (name)
    2. 單價或總價 (price) - 請轉為數字
    3. 數量 (quantity) - 預設 1

    範例輸出:
    [
      {"name": "拿鐵", "price": 120, "quantity": 1},
      {"name": "起司蛋糕", "price": 150, "quantity": 1}
    ]
    只回傳 JSON，不要 markdown 標記。
    `;
    const result = await callGemini(prompt, base64Image);
    if (!result) return null;
    try {
        const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (e) {
        console.error("Receipt Parse Error", e);
        return null;
    }
};