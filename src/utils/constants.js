// src/utils/constants.js
import { 
  Utensils, Train, ShoppingBag, House, BedDouble, Ticket, Smartphone, ShieldCheck, Sun, 
  MessageCircle, Cat, Dog, Rabbit, Bird, Sparkles, Calendar, Plane, Wallet, Coffee, 
  Music, Gamepad, Heart, Gift, Zap, BookOpen, Coins,
  Fish, Turtle 
} from 'lucide-react';

// --- 1. 全域色票系統 (Design Tokens - Based on User's Existing Colors) ---
// [New] 根據現有專案顏色定義色票，確保相容性
export const PALETTE = {
  orange:  { id: 'orange',  bg: 'bg-orange-100',  text: 'text-orange-600',  hex: '#ea580c', name: 'Orange' },
  blue:    { id: 'blue',    bg: 'bg-blue-100',    text: 'text-blue-600',    hex: '#2563eb', name: 'Blue' },
  pink:    { id: 'pink',    bg: 'bg-pink-100',    text: 'text-pink-600',    hex: '#db2777', name: 'Pink' },
  indigo:  { id: 'indigo',  bg: 'bg-indigo-100',  text: 'text-indigo-600',  hex: '#4f46e5', name: 'Indigo' },
  purple:  { id: 'purple',  bg: 'bg-purple-100',  text: 'text-purple-600',  hex: '#9333ea', name: 'Purple' },
  yellow:  { id: 'yellow',  bg: 'bg-yellow-100',  text: 'text-yellow-600',  hex: '#ca8a04', name: 'Yellow' },
  gray:    { id: 'gray',    bg: 'bg-gray-100',    text: 'text-gray-600',    hex: '#4b5563', name: 'Gray' },
  red:     { id: 'red',     bg: 'bg-red-100',     text: 'text-red-600',     hex: '#dc2626', name: 'Red' },
  green:   { id: 'green',   bg: 'bg-green-100',   text: 'text-green-600',   hex: '#16a34a', name: 'Green' },
  slate:   { id: 'slate',   bg: 'bg-slate-100',   text: 'text-slate-600',   hex: '#475569', name: 'Slate' },
  emerald: { id: 'emerald', bg: 'bg-emerald-100', text: 'text-emerald-600', hex: '#059669', name: 'Emerald' },
  // System Primary (Action Color)
  rose:    { id: 'rose',    bg: 'bg-rose-100',    text: 'text-rose-600',    hex: '#e11d48', name: 'Rose' },
};

// --- 2. Icon 映射 (Updated for Lucide v0.4+) ---
export const ICON_MAP = {
  // Categories
  food: Utensils,
  transport: Train,
  shopping: ShoppingBag,
  housing: House,        // [Fix] Replaced Home with House
  hotel: BedDouble,
  ticket: Ticket,
  telecom: Smartphone,
  insurance: ShieldCheck, // [Fix] Replaced Shield with ShieldCheck
  life: Sun,
  other: MessageCircle,
  // Characters
  cat: Cat,
  dog: Dog,
  rabbit: Rabbit,
  bird: Bird,
  fish: Fish,
  turtle: Turtle,
  // System
  default: Sparkles,
  project_daily: Calendar,
  project_travel: Plane,
  project_house: House,   // [Fix] Replaced Home with House
  project_private: Wallet,
  // Other
  coffee: Coffee,
  music: Music,
  game: Gamepad,
  heart: Heart,
  gift: Gift,
  zap: Zap,
  book: BookOpen,
  settlement: Coins
};

// --- 3. 分類定義 (Extended) ---
// [Modified] 加入 colorId 以支援新的色票系統，同時保留舊有欄位以防崩潰
export const CATEGORIES = [
  { id: 'food', name: '餐飲', icon: 'food', colorId: 'orange', color: 'bg-orange-100 text-orange-600', hex: '#ea580c' },
  { id: 'transport', name: '交通', icon: 'transport', colorId: 'blue', color: 'bg-blue-100 text-blue-600', hex: '#2563eb' },
  { id: 'shopping', name: '購物', icon: 'shopping', colorId: 'pink', color: 'bg-pink-100 text-pink-600', hex: '#db2777' },
  { id: 'housing', name: '房租', icon: 'housing', colorId: 'indigo', color: 'bg-indigo-100 text-indigo-600', hex: '#4f46e5' },
  { id: 'hotel', name: '旅館', icon: 'hotel', colorId: 'purple', color: 'bg-purple-100 text-purple-600', hex: '#9333ea' },
  { id: 'ticket', name: '門票', icon: 'ticket', colorId: 'yellow', color: 'bg-yellow-100 text-yellow-600', hex: '#ca8a04' },
  { id: 'telecom', name: '電信', icon: 'telecom', colorId: 'gray', color: 'bg-gray-100 text-gray-600', hex: '#4b5563' },
  { id: 'insurance', name: '保險', icon: 'insurance', colorId: 'red', color: 'bg-red-100 text-red-600', hex: '#dc2626' },
  { id: 'life', name: '生活', icon: 'life', colorId: 'green', color: 'bg-green-100 text-green-600', hex: '#16a34a' },
  { id: 'other', name: '其他', icon: 'other', colorId: 'slate', color: 'bg-slate-100 text-slate-600', hex: '#475569' },
  { id: 'settlement', name: '還款結清', icon: 'settlement', colorId: 'emerald', color: 'bg-emerald-100 text-emerald-600', hex: '#059669' }
];

export const DEFAULT_CATEGORIES = CATEGORIES.filter(c => c.id !== 'settlement');

// [Legacy Compatibility] 
// 為了不破壞 SettingsView 的色盤選擇，這裡映射 PALETTE 回舊格式，或者直接保留舊陣列。
// 這裡選擇從 PALETTE 生成，確保一致性。
export const COLORS = Object.values(PALETTE).map(p => ({
  name: p.name,
  class: `${p.bg} ${p.text}`,
  hex: p.hex
}));

export const AVAILABLE_ICONS = [
  'food', 'transport', 'shopping', 'housing', 'hotel', 'ticket', 'telecom', 'insurance', 'life', 'other', 
  'coffee', 'music', 'game', 'heart', 'gift', 'zap', 'book',
  'cat', 'dog', 'rabbit', 'bird', 'fish', 'turtle'
];

export const CHARACTERS = {
  cat: { id: 'cat', name: '貓咪', icon: 'cat', prompt: '你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。', greeting: '人類，今天有亂花錢嗎？喵 🐱' },
  dog: { id: 'dog', name: '狗狗', icon: 'dog', prompt: '你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。', greeting: '又是美好的一天！我們來記帳吧！汪 🐶' },
  rabbit: { id: 'rabbit', name: '兔兔', icon: 'rabbit', prompt: '你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。', greeting: '那個...今天也要好好理財喔 (///▽///) 🐰' },
  bird: { id: 'bird', name: '啾啾', icon: 'bird', prompt: '你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。', greeting: '啾啾！我好像看到錢包變瘦了？🐦' },
  fish: { id: 'fish', name: '魚魚', icon: 'fish', prompt: '你是一隻只有7秒記憶的金魚，常常忘記上一筆花了什麼，說話呆萌，句尾加「啵」。', greeting: '啵...我們剛剛是要記帳嗎？🐟' },
  turtle: { id: 'turtle', name: '龜龜', icon: 'turtle', prompt: '你是一隻講話非常慢、崇尚長期投資的烏龜，句尾加「...🐢」。', greeting: '慢慢來...錢要...慢慢存...🐢' }
};

export const INITIAL_LEDGER_STATE = {
  users: {}, 
  transactions: [],
  subscriptions: [],
  customCategories: DEFAULT_CATEGORIES, 
  projects: [
    { id: 'daily', name: '日常開銷', icon: 'project_daily' },
    { id: 'travel', name: '日本旅遊專案', icon: 'project_travel' },
    { id: 'house', name: '夢想置產專案', icon: 'project_house' },
    { id: 'private', name: '私人帳本', icon: 'project_private' }
  ],
  rates: { "JPY": 0.23 },
  currency: 'TWD',
  settings: {
    character: 'cat',
    selectedCategories: DEFAULT_CATEGORIES.map(c => c.id),
  }
};