// src/utils/constants.js
import {
  Utensils, Train, ShoppingBag, House, BedDouble, Ticket, Smartphone, ShieldCheck, Sun,
  MessageCircle, Cat, Dog, Rabbit, Bird, Sparkles, Calendar, Plane, Wallet, Coffee,
  Music, Gamepad, Heart, Gift, Zap, BookOpen, Coins,
  Fish, Turtle
} from 'lucide-react';

// --- 0. 全球貨幣清單 ---
export const CURRENCY_OPTIONS = [
  { code: 'TWD', name: '新台幣', symbol: 'NT$', flag: '🇹🇼' },
  { code: 'JPY', name: '日圓', symbol: '¥', flag: '🇯🇵' },
  { code: 'USD', name: '美元', symbol: '$', flag: '🇺🇸' },
  { code: 'THB', name: '泰銖', symbol: '฿', flag: '🇹🇭' },
  { code: 'KRW', name: '韓元', symbol: '₩', flag: '🇰🇷' },
  { code: 'EUR', name: '歐元', symbol: '€', flag: '🇪🇺' },
  { code: 'CNY', name: '人民幣', symbol: '¥', flag: '🇨🇳' },
  { code: 'GBP', name: '英鎊', symbol: '£', flag: '🇬🇧' },
  { code: 'AUD', name: '澳幣', symbol: 'A$', flag: '🇦🇺' },
  { code: 'SGD', name: '新幣', symbol: 'S$', flag: '🇸🇬' },
  { code: 'HKD', name: '港幣', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'CAD', name: '加幣', symbol: 'C$', flag: '🇨🇦' },
  { code: 'VND', name: '越南盾', symbol: '₫', flag: '🇻🇳' },
  { code: 'PHP', name: '菲律賓披索', symbol: '₱', flag: '🇵🇭' },
  { code: 'MYR', name: '馬來西亞令吉', symbol: 'RM', flag: '🇲🇾' },
];

export const DEFAULT_FAVORITE_CURRENCIES = ['JPY', 'THB', 'USD'];

// --- 1. 全域色票系統 (Design Tokens) ---
// [UI Update] Morandi Color Palette Applied
export const PALETTE = {
  orange: { id: 'orange', bg: null, text: null, hex: '#d6a2a2', name: 'Orange' }, // Muted Terra Cotta
  blue: { id: 'blue', bg: null, text: null, hex: '#8fbcd4', name: 'Blue' }, // Dusty Blue
  pink: { id: 'pink', bg: null, text: null, hex: '#eeccdf', name: 'Pink' }, // Soft Pink
  indigo: { id: 'indigo', bg: null, text: null, hex: '#a3a7bf', name: 'Indigo' }, // Muted Lavender
  purple: { id: 'purple', bg: null, text: null, hex: '#c7b3e5', name: 'Purple' }, // Soft Purple
  yellow: { id: 'yellow', bg: null, text: null, hex: '#e6c9a8', name: 'Yellow' }, // Sand
  gray: { id: 'gray', bg: 'bg-gray-100', text: 'text-gray-600', hex: '#d1d5db', name: 'Gray' }, // Gray remains standard for consistency
  red: { id: 'red', bg: null, text: null, hex: '#e09f9f', name: 'Red' }, // Muted Red
  green: { id: 'green', bg: null, text: null, hex: '#a8cebb', name: 'Green' }, // Sage Green
  slate: { id: 'slate', bg: null, text: null, hex: '#94a3b8', name: 'Slate' },
  emerald: { id: 'emerald', bg: null, text: null, hex: '#88bfac', name: 'Emerald' }, // Seafoam
  rose: { id: 'rose', bg: 'bg-rose-100', text: 'text-rose-600', hex: '#e11d48', name: 'Rose' }, // [Keep] Primary Brand Color
  cyan: { id: 'cyan', bg: null, text: null, hex: '#a5d6d9', name: 'Cyan' },
  amber: { id: 'amber', bg: null, text: null, hex: '#d9b891', name: 'Amber' },
  fuchsia: { id: 'fuchsia', bg: null, text: null, hex: '#d8a7d1', name: 'Fuchsia' },
};

// [UI Update] Morandi Color Palette for Charts (Low Saturation)
export const MORANDI_PALETTE = {
  orange: '#d6a2a2', // Muted Terra Cotta
  blue: '#8fbcd4', // Dusty Blue
  pink: '#eeccdf', // Soft Pink
  indigo: '#a3a7bf', // Muted Lavender
  purple: '#c7b3e5', // Soft Purple
  yellow: '#e6c9a8', // Sand
  gray: '#d1d5db',
  red: '#e09f9f', // Muted Red
  green: '#a8cebb', // Sage Green
  slate: '#94a3b8',
  emerald: '#88bfac', // Seafoam
  rose: '#f43f5e', // Keep Rose as primary brand color (or mute slightly to #e68a9f)
  cyan: '#a5d6d9',
  amber: '#d9b891',
  fuchsia: '#d8a7d1',
  // Special Functional Colors
  host: '#8fbcd4', // Morandi Blue
  guest: '#eeccdf', // Morandi Pink
};

export const COLORS = Object.values(PALETTE).map(p => ({
  name: p.name,
  class: `${p.bg} ${p.text}`,
  hex: p.hex
}));

// --- 2. Icon 映射 ---
export const ICON_MAP = {
  // Categories
  food: Utensils,
  transport: Train,
  shopping: ShoppingBag,
  housing: House,
  hotel: BedDouble,
  ticket: Ticket,
  telecom: Smartphone,
  insurance: ShieldCheck,
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
  project_house: House,
  project_private: Wallet,
  // Other
  coffee: Coffee,
  music: Music,
  game: Gamepad,
  heart: Heart,
  gift: Gift,
  zap: Zap,
  book: BookOpen,
  settlement: Coins,
  // Mapping
  'utensils': Utensils, 'train': Train, 'shopping-bag': ShoppingBag,
  'house': House, 'bed-double': BedDouble, 'smartphone': Smartphone,
  'shield-check': ShieldCheck, 'sun': Sun, 'message-circle': MessageCircle
};

// --- 3. 分類定義 ---
// [Fix] 將 PALETTE 展開放在最前面，確保後面的 name 不會被覆蓋
export const CATEGORIES = [
  { ...PALETTE.orange, id: 'food', name: '餐飲', icon: 'food' },
  { ...PALETTE.blue, id: 'transport', name: '交通', icon: 'transport' },
  { ...PALETTE.pink, id: 'shopping', name: '購物', icon: 'shopping' },
  { ...PALETTE.indigo, id: 'housing', name: '房租', icon: 'housing' },
  { ...PALETTE.purple, id: 'hotel', name: '旅館', icon: 'hotel' },
  { ...PALETTE.yellow, id: 'ticket', name: '門票', icon: 'ticket' },
  { ...PALETTE.gray, id: 'telecom', name: '電信', icon: 'telecom' },
  { ...PALETTE.red, id: 'insurance', name: '保險', icon: 'insurance' },
  { ...PALETTE.green, id: 'life', name: '生活', icon: 'life' },
  { ...PALETTE.slate, id: 'other', name: '其他', icon: 'other' },
  { ...PALETTE.emerald, id: 'settlement', name: '還款結清', icon: 'settlement' }
];

export const DEFAULT_CATEGORIES = CATEGORIES.filter(c => c.id !== 'settlement');

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
    { id: 'daily', name: '日常開銷', icon: 'project_daily', rates: {}, type: 'public' },
    { id: 'travel', name: '日本旅遊專案', icon: 'project_travel', rates: {}, type: 'public' },
    { id: 'house', name: '夢想置產專案', icon: 'project_house', rates: {}, type: 'public' },
    { id: 'private', name: '私人帳本', icon: 'project_private', rates: {}, type: 'private' }
  ],
  settings: {
    character: 'cat',
    selectedCategories: DEFAULT_CATEGORIES.map(c => c.id),
  }
};