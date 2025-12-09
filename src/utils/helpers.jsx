import React from 'react';
import { ICON_MAP, CHARACTERS } from './constants';
import { User } from 'lucide-react';

const GEMINI_API_KEY = "AIzaSyBtMDYA9ALL33VMriQrnvzGGrodYOykUvo"; 

export const formatCurrency = (amount, currency = 'TWD', privacy = false) => {
  if (privacy) return '****';
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
};

export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

export const getIconComponent = (iconName) => {
  const Component = ICON_MAP[iconName];
  return Component || ICON_MAP['default'];
};

export const callGemini = async (prompt, imageBase64 = null) => {
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
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const renderAvatar = (avatarKeyOrUrl, sizeClass = "w-12 h-12") => {
    // 1. Is it a character key?
    if (avatarKeyOrUrl && CHARACTERS[avatarKeyOrUrl]) {
        const Icon = getIconComponent(CHARACTERS[avatarKeyOrUrl].icon);
        return (
            <div className={`${sizeClass} rounded-full bg-gray-100 flex items-center justify-center text-gray-600 border border-gray-200`}>
                <Icon size={20} />
            </div>
        );
    }
    // 2. Is it a URL?
    if (avatarKeyOrUrl && typeof avatarKeyOrUrl === 'string' && avatarKeyOrUrl.includes('http')) {
        return <img src={avatarKeyOrUrl} className={`${sizeClass} rounded-full object-cover border border-gray-200`} alt="avatar" />;
    }
    // 3. Default fallback
    return (
        <div className={`${sizeClass} rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200`}>
            <User size={20} />
        </div>
    );
};