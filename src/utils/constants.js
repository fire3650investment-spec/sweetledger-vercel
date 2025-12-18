import { 
  Utensils, Train, ShoppingBag, Home, BedDouble, Ticket, Smartphone, Shield, Sun, 
  MessageCircle, Cat, Dog, Rabbit, Bird, Sparkles, Calendar, Plane, Wallet, Coffee, 
  Music, Gamepad, Heart, Gift, Zap, BookOpen, Coins
} from 'lucide-react';

export const ICON_MAP = {
  food: Utensils,
  transport: Train,
  shopping: ShoppingBag,
  housing: Home, 
  hotel: BedDouble,
  ticket: Ticket,
  telecom: Smartphone,
  insurance: Shield,
  life: Sun,
  other: MessageCircle,
  cat: Cat,
  dog: Dog,
  rabbit: Rabbit,
  bird: Bird,
  default: Sparkles,
  project_daily: Calendar,
  project_travel: Plane,
  project_house: Home, 
  project_private: Wallet,
  coffee: Coffee,
  music: Music,
  game: Gamepad,
  heart: Heart,
  gift: Gift,
  zap: Zap,
  book: BookOpen,
  settlement: Coins
};

export const CATEGORIES = [
  { id: 'food', name: '餐飲', icon: 'food', color: 'bg-orange-100 text-orange-600', hex: '#ea580c' },
  { id: 'transport', name: '交通', icon: 'transport', color: 'bg-blue-100 text-blue-600', hex: '#2563eb' },
  { id: 'shopping', name: '購物', icon: 'shopping', color: 'bg-pink-100 text-pink-600', hex: '#db2777' },
  { id: 'housing', name: '房租', icon: 'housing', color: 'bg-indigo-100 text-indigo-600', hex: '#4f46e5' },
  { id: 'hotel', name: '旅館', icon: 'hotel', color: 'bg-purple-100 text-purple-600', hex: '#9333ea' },
  { id: 'ticket', name: '門票', icon: 'ticket', color: 'bg-yellow-100 text-yellow-600', hex: '#ca8a04' },
  { id: 'telecom', name: '電信', icon: 'telecom', color: 'bg-gray-100 text-gray-600', hex: '#4b5563' },
  { id: 'insurance', name: '保險', icon: 'insurance', color: 'bg-red-100 text-red-600', hex: '#dc2626' },
  { id: 'life', name: '生活', icon: 'life', color: 'bg-green-100 text-green-600', hex: '#16a34a' },
  { id: 'other', name: '其他', icon: 'other', color: 'bg-slate-100 text-slate-600', hex: '#475569' },
  { id: 'settlement', name: '還款結清', icon: 'settlement', color: 'bg-emerald-100 text-emerald-600', hex: '#059669' }
];

export const DEFAULT_CATEGORIES = CATEGORIES.filter(c => c.id !== 'settlement');

export const COLORS = [
  { name: 'Red', class: 'bg-red-100 text-red-600', hex: '#dc2626' },
  { name: 'Orange', class: 'bg-orange-100 text-orange-600', hex: '#ea580c' },
  { name: 'Yellow', class: 'bg-yellow-100 text-yellow-600', hex: '#ca8a04' },
  { name: 'Green', class: 'bg-green-100 text-green-600', hex: '#16a34a' },
  { name: 'Blue', class: 'bg-blue-100 text-blue-600', hex: '#2563eb' },
  { name: 'Indigo', class: 'bg-indigo-100 text-indigo-600', hex: '#4f46e5' },
  { name: 'Purple', class: 'bg-purple-100 text-purple-600', hex: '#9333ea' },
  { name: 'Pink', class: 'bg-pink-100 text-pink-600', hex: '#db2777' },
  { name: 'Gray', class: 'bg-gray-100 text-gray-600', hex: '#4b5563' },
];

export const AVAILABLE_ICONS = ['food', 'transport', 'shopping', 'housing', 'hotel', 'ticket', 'telecom', 'insurance', 'life', 'other', 'coffee', 'music', 'game', 'heart', 'gift', 'zap', 'book'];

export const CHARACTERS = {
  cat: { id: 'cat', name: '貓咪', icon: 'cat', prompt: '你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。', greeting: '人類，今天有亂花錢嗎？喵 🐱' },
  dog: { id: 'dog', name: '狗狗', icon: 'dog', prompt: '你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。', greeting: '又是美好的一天！我們來記帳吧！汪 🐶' },
  rabbit: { id: 'rabbit', name: '兔兔', icon: 'rabbit', prompt: '你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。', greeting: '那個...今天也要好好理財喔 (///▽///) 🐰' },
  bird: { id: 'bird', name: '啾啾', icon: 'bird', prompt: '你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。', greeting: '啾啾！我好像看到錢包變瘦了？🐦' },
};

// 簡化後的初始狀態：移除 gamification 與 inputMode
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