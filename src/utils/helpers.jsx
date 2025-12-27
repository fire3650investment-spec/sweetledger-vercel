// src/utils/helpers.jsx
import React from 'react';
// 引入需要的 Lucide 圖示
import { 
  // Categories
  Utensils, Bus, ShoppingBag, Clapperboard, Home, Landmark, 
  Gamepad2, GraduationCap, Stethoscope, Gift, Wrench, 
  Briefcase, Heart, Plane, LayoutGrid, HelpCircle,
  // Avatars (Premium Selection)
  User, Zap, Coffee, Star, Crown, Ghost, Smile, Flower, Music, Sun, Moon, Anchor,
  // Fallback for compatibility
  Cat, Dog, Rabbit
} from 'lucide-react';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

// --- Icon System ---

// Icon Mapping: 定義字串與 Lucide 元件的對照表
const ICON_MAP = {
  // Categories
  'food': Utensils,
  'transport': Bus,
  'shopping': ShoppingBag,
  'entertainment': Clapperboard,
  'house': Home,
  'investment': Landmark,
  'game': Gamepad2,
  'education': GraduationCap,
  'medical': Stethoscope,
  'gift': Gift,
  'repair': Wrench,
  'work': Briefcase,
  'love': Heart,
  'travel': Plane,
  'other': LayoutGrid,
  'help-circle': HelpCircle,
  'project_daily': LayoutGrid,
  'project_travel': Plane,
  'project_house': Home,
  'project_private': User,
  'car': Bus,
  
  // Avatars (New Premium Set)
  'user': User,
  'zap': Zap,
  'coffee': Coffee,
  'star': Star,
  'crown': Crown,
  'ghost': Ghost,
  'smile': Smile,
  'flower': Flower,
  'music': Music,
  'sun': Sun,
  'moon': Moon,
  'anchor': Anchor,

  // Legacy Compatibility (舊動物頭像映射 - 防止舊資料破圖)
  'cat': Cat,      
  'dog': Dog,      
  'rabbit': Rabbit,
  'bear': User,    
  'fox': Ghost,    
  'panda': User,   
};

export const getIconComponent = (iconName) => {
  return ICON_MAP[iconName] || HelpCircle;
};

// [Refactor] 改用 Lucide 渲染頭像
export const renderAvatar = (avatarName, className = "w-10 h-10") => {
  // 若傳入的是網址 (Google Login)，直接顯示圖片
  if (avatarName && typeof avatarName === 'string' && avatarName.includes('http')) {
      return <img src={avatarName} className={`${className} rounded-full object-cover border border-gray-200`} alt="avatar" />;
  }

  // 否則使用 Lucide Icon
  const Icon = ICON_MAP[avatarName] || User;
  
  return (
    <div className={`${className} flex items-center justify-center bg-gray-100 rounded-full text-gray-600 border border-gray-200`}>
      {/* 根據容器大小動態調整 Icon 尺寸，預設佔 60% */}
      <Icon className="w-[60%] h-[60%]" strokeWidth={2} />
    </div>
  );
};

// --- Formatters ---

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

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
    if (currency === 'TWD') return parseFloat(amount);
    
    const rate = rates?.[currency] || 1;
    return parseFloat(amount) * rate;
};

// --- AI / Gemini Functions (Restored) ---

export const callGemini = async (prompt, imageBase64 = null) => {
  if (!GEMINI_API_KEY) {
      console.error("Gemini API Key is missing! Please check your .env file or Vercel settings.");
      // 移除 alert，避免在非互動時阻斷流程，改用 console 警告
      console.warn("系統錯誤：缺少 AI 金鑰，請聯繫管理員或檢查環境變數設定。");
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