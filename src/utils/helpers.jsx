import React from 'react';
import { ICON_MAP, CHARACTERS } from './constants';
import { User } from 'lucide-react';

// 修改重點：改為從環境變數讀取，不再寫死
// 如果是本地開發，它會讀取 .env 檔案
// 如果是 Vercel，它會讀取後台設定的 Environment Variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const formatCurrency = (amount, currency = 'TWD', privacy = false) => {
  if (privacy) return '****';
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
};

// Fix: Correct calculation logic (Multiplication)
export const calculateTwdValue = (amount, currency, rates) => {
    if (currency === 'TWD') return amount;
    const rate = rates?.[currency] || 1; 
    // Logic: 1 JPY = 0.23 TWD => 1000 JPY * 0.23 = 230 TWD
    return amount * rate;
};

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const getIconComponent = (iconName) => {
  const Component = ICON_MAP[iconName];
  return Component || ICON_MAP['default'];
};

export const callGemini = async (prompt, imageBase64 = null) => {
  // 安全檢查：如果沒有 Key，直接報錯並回傳 null，避免發送無效請求
  if (!GEMINI_API_KEY) {
      console.error("Gemini API Key is missing! Please check your .env file or Vercel settings.");
      alert("系統錯誤：缺少 AI 金鑰，請聯繫管理員或檢查環境變數設定。");
      return null;
  }

  try {
    const payload = {
      contents: [{
        parts: [
          { text: prompt },
          ...(imageBase64 ? [{ inlineData: { mimeType: "image/jpeg", data: imageBase64 } }] : [])
        ]
      }]
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();
    
    // 增加錯誤處理：如果 API 回傳 error (例如 Key 無效)，捕捉它
    if (data.error) {
        console.error("Gemini API Returned Error:", data.error);
        return null;
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (error) {
    console.error("Gemini Network Error:", error);
    return null;
  }
};

export const renderAvatar = (avatarKeyOrUrl, sizeClass = "w-12 h-12") => {
    if (avatarKeyOrUrl && CHARACTERS[avatarKeyOrUrl]) {
        const Icon = getIconComponent(CHARACTERS[avatarKeyOrUrl].icon);
        return (
            <div className={`${sizeClass} rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200`}>
                <Icon size={20} />
            </div>
        );
    }
    if (avatarKeyOrUrl && typeof avatarKeyOrUrl === 'string' && avatarKeyOrUrl.includes('http')) {
        return <img src={avatarKeyOrUrl} className={`${sizeClass} rounded-full object-cover border border-gray-200`} alt="avatar" />;
    }
    return (
        <div className={`${sizeClass} rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200`}>
            <User size={20} />
        </div>
    );
};