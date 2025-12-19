import React from 'react';
import { ICON_MAP, CHARACTERS } from './constants';
import { User } from 'lucide-react';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export const formatCurrency = (amount, currency = 'TWD', privacy = false) => {
  if (privacy) return '****';
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
};

export const calculateTwdValue = (amount, currency, rates) => {
    if (currency === 'TWD') return amount;
    const rate = rates?.[currency] || 1; 
    return amount * rate;
};

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const getIconComponent = (iconName) => {
  const Component = ICON_MAP[iconName];
  return Component || ICON_MAP['default'];
};

export const callGemini = async (prompt, imageBase64 = null) => {
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

// [New Feature] Phase 1: AI Receipt Parser
export const parseReceiptWithGemini = async (imageBase64) => {
    const prompt = `你是一個專業的收據識別助手。請分析這張發票或收據圖片，並提取所有「收費項目」。
  
  重要規則：
  1. 請列出所有菜色、商品或服務項目。
  2. 如果看到「服務費」、「清潔費」、「Service Charge」、「SVC」或「10%」等額外費用，請務必將其視為一個獨立的品項列出，名稱保持原樣（如 "10%服務費"），金額為該項目的具體數值。
  3. 忽略日期、地址、統編、電話等非消費項目的資訊。
  4. 忽略「總計」、「小計」、「找零」等匯總資訊，除非它們是唯一的金額來源。
  5. 數量 (quantity) 若無法辨識預設為 1。
  6. 價格 (price) 請轉換為純數字。
  
  請直接回傳一個 JSON 陣列 (Array)，不要包含 Markdown 格式 (如 \`\`\`json ... \`\`\`) 或其他文字。
  格式範例：
  [
    { "name": "牛肉麵", "price": 180, "quantity": 1 },
    { "name": "燙青菜", "price": 40, "quantity": 1 },
    { "name": "10%服務費", "price": 22, "quantity": 1 }
  ]`;
  
    const rawResult = await callGemini(prompt, imageBase64);
    if (!rawResult) return null;

    try {
        // 清理可能存在的 Markdown標記
        const cleanJson = rawResult.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (e) {
        console.error("Receipt Parse JSON Error:", e);
        console.log("Raw Text:", rawResult);
        return null;
    }
};