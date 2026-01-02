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
// 引入剛安裝的 SDK
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ICON_MAP, CHARACTERS, PALETTE } from './constants';

// --- Formatters & Helpers ---

// [Fix] 補回遺失的 generateId
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

// --- Icon & UI System ---

export const getIconComponent = (iconName) => {
  // 如果 helper 裡沒有 map，嘗試從 constants 讀取或使用本地 fallback
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
  
  // 優先使用 ICON_MAP (如果 constants 有定義)，否則用本地 map
  const TargetIcon = (ICON_MAP && ICON_MAP[iconName]) || localMap[iconName] || HelpCircle;
  return TargetIcon;
};

export const getCategoryStyle = (category, mode = 'display') => {
    // 防呆
    if (!category) return { containerClass: 'bg-gray-100', iconClass: 'text-gray-500', hex: '#94a3b8' };

    // Input Mode (極簡/輸入模式)
    if (mode === 'input') {
        // [New] 支援直接屬性讀取 (相容 Batch 1 Constants)
        if (category.bg && category.text) {
             return {
                containerClass: 'bg-gray-50 border border-gray-100', // Input mode override
                iconClass: category.text,
                activeClass: `${category.bg} ${category.text} ring-2 ring-gray-200 border-transparent`,
                hex: category.hex || '#64748b'
             };
        }
        // Fallback
        return {
            containerClass: 'bg-gray-50 border border-gray-100',
            iconClass: 'text-gray-400',
            activeClass: 'bg-rose-500 text-white shadow-md shadow-rose-200 border-transparent',
            hex: '#64748b' 
        };
    }

    // Display Mode
    
    // 1. 優先檢查：直接屬性 (Direct Props - Batch 1 New Logic)
    if (category.bg && category.text) {
        return {
            containerClass: category.bg,
            iconClass: category.text,
            hex: category.hex || '#475569'
        };
    }

    // 2. 次要檢查：查表法 (Lookup via colorId)
    if (category.colorId && PALETTE && PALETTE[category.colorId]) {
        const token = PALETTE[category.colorId];
        return {
            containerClass: `${token.bg} ${token.text}`,
            iconClass: token.text, 
            hex: token.hex
        };
    }
    
    // 3. Legacy / Default
    return {
        containerClass: category.color || 'bg-slate-100 text-slate-600',
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

// --- AI / Gemini Functions (Using SDK) ---

export const callGemini = async (prompt, imageBase64 = null) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
      console.warn("系統錯誤：缺少 AI 金鑰 (VITE_GEMINI_API_KEY)");
      return null;
  }

  try {
      const genAI = new GoogleGenerativeAI(apiKey);
      // 使用最新的 Flash 模型，速度快且便宜
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      let result;
      if (imageBase64) {
          const imagePart = {
              inlineData: {
                  data: imageBase64,
                  mimeType: "image/jpeg"
              }
          };
          result = await model.generateContent([prompt, imagePart]);
      } else {
          result = await model.generateContent(prompt);
      }
      return result.response.text();
  } catch (e) {
      console.error("Gemini SDK Error:", e);
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