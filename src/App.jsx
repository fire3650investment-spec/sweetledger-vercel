import React, { useState, useEffect, useRef, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged,
  signInWithCustomToken,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  onSnapshot, 
  updateDoc, 
  arrayUnion,
  Timestamp 
} from 'firebase/firestore';
import { 
  Camera, 
  Mic, 
  Plus, 
  Home, 
  PieChart, 
  Settings, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  Sparkles,
  Plane,
  RefreshCw,
  X,
  Utensils,
  Train,
  ShoppingBag,
  BedDouble, 
  Ticket,
  Smartphone,
  Shield,
  Sun,
  MessageCircle,
  Cat,
  Dog,
  Rabbit,
  Bird,
  Trash2,
  Edit2,
  Briefcase,
  Calendar,
  Wallet,
  ChevronLeft,
  ChevronRight,
  Download,
  Upload,
  FileText,
  ChevronDown,
  Coffee,
  Music,
  Gamepad,
  Heart,
  Gift,
  Zap,
  BookOpen,
  StopCircle,
  CheckCircle2,
  ArrowRightLeft,
  User,
  AlertTriangle,
  LogOut,
  CalendarDays,
  Users,
  Wrench // New Icon for Fix
} from 'lucide-react';

// --- Configuration & Constants ---

// Firebase Configuration
const firebaseConfig = JSON.parse(window.__firebase_config || '{}');

// 確保 Config 存在才初始化
const app = Object.keys(firebaseConfig).length > 0 ? initializeApp(firebaseConfig) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;

// 注意：這個 ID 必須與 Firestore 規則中的路徑匹配
const appId = 'sweet-ledger-beta';
const GEMINI_API_KEY = "AIzaSyBWgsEEY_guFAZL-8aHD-d9q5d1gfdbBRc"; 

const ICON_MAP = {
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
  book: BookOpen
};

const CATEGORIES = [
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
];

const DEFAULT_CATEGORIES = CATEGORIES;

const COLORS = [
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

const AVAILABLE_ICONS = ['food', 'transport', 'shopping', 'housing', 'hotel', 'ticket', 'telecom', 'insurance', 'life', 'other', 'coffee', 'music', 'game', 'heart', 'gift', 'zap', 'book'];

const CHARACTERS = {
  cat: { id: 'cat', name: '貓咪', icon: 'cat', prompt: '你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。', greeting: '人類，今天有亂花錢嗎？喵 🐱' },
  dog: { id: 'dog', name: '狗狗', icon: 'dog', prompt: '你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。', greeting: '又是美好的一天！我們來記帳吧！汪 🐶' },
  rabbit: { id: 'rabbit', name: '兔兔', icon: 'rabbit', prompt: '你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。', greeting: '那個...今天也要好好理財喔 (///▽///) 🐰' },
  bird: { id: 'bird', name: '啾啾', icon: 'bird', prompt: '你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。', greeting: '啾啾！我好像看到錢包變瘦了？🐦' },
};

const INITIAL_LEDGER_STATE = {
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
  gamification: { xp: 0, level: 1, streak: 1, houseType: 'tent' },
  currency: 'TWD',
  settings: {
    character: 'cat',
    selectedCategories: DEFAULT_CATEGORIES.map(c => c.id) 
  }
};

const formatCurrency = (amount, currency = 'TWD', privacy = false) => {
  if (privacy) return '****';
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
};

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const getIconComponent = (iconName) => {
  const Component = ICON_MAP[iconName];
  return Component || ICON_MAP['default'];
};

const callGemini = async (prompt, imageBase64 = null) => {
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

export default function SweetLedger() {
  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center text-gray-600 bg-gray-50">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">尚未連接 Firebase</h2>
        <p className="mb-4">請檢查 Vercel 的 Environment Variables 設定。</p>
        <div className="bg-gray-200 p-4 rounded text-xs text-left overflow-auto w-full max-w-sm">
          <p className="font-bold">Missing Variable:</p>
          <code>VITE_FIREBASE_CONFIG</code>
        </div>
      </div>
    );
  }

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); 
  const [isInitializing, setIsInitializing] = useState(true);
  const [view, setView] = useState('onboarding'); 
  const [ledgerCode, setLedgerCode] = useState('');
  const [ledgerData, setLedgerData] = useState(null);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState('daily'); 

  // Add Expense State
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [aiInput, setAiInput] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [currency, setCurrency] = useState('TWD'); 
  const [payer, setPayer] = useState(''); 
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); 
  
  // Split State
  const [splitType, setSplitType] = useState('even'); 
  const [customSplitHost, setCustomSplitHost] = useState('');
  const [customSplitGuest, setCustomSplitGuest] = useState('');
  const [isSubmittingTransaction, setIsSubmittingTransaction] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  // AI Modal State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalInput, setAiModalInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // Edit Transaction Modal State
  const [isEditTxModalOpen, setIsEditTxModalOpen] = useState(false);
  const [editingTx, setEditingTx] = useState(null);

  // Subscription State
  const [isSubscription, setIsSubscription] = useState(false);
  const [subCycle, setSubCycle] = useState('monthly'); 
  const [subPayDay, setSubPayDay] = useState(''); 

  const [statsMonth, setStatsMonth] = useState(new Date().toISOString().slice(0, 7)); 
  
  // Project & Category Management State
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState({ id: '', name: '', icon: 'project_daily' });
  
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [editingCategoryData, setEditingCategoryData] = useState({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex });
  
  // Nickname Edit State
  const [myNickname, setMyNickname] = useState('');

  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (splitType === 'custom' && amount) {
    }
  }, [amount, splitType]);
  
  // Initialize payer when user loads
  useEffect(() => {
    if (user && !payer) {
        setPayer(user.uid);
    }
  }, [user]);

  const handleCustomSplitChange = (field, value) => {
    const total = parseFloat(amount) || 0;
    const val = parseFloat(value) || 0;
    if (field === 'host') {
        setCustomSplitHost(value);
        const guestCalc = total - val;
        setCustomSplitGuest(guestCalc >= 0 ? guestCalc.toString() : '0');
    } else {
        setCustomSplitGuest(value);
        const hostCalc = total - val;
        setCustomSplitHost(hostCalc >= 0 ? hostCalc.toString() : '0');
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = window.__initial_auth_token;
      if (token && token.length > 2 && token !== '""') {
         try {
             await signInWithCustomToken(auth, token);
             return;
         } catch (e) {
             console.warn("Custom Token failed, trying standard auth flow...");
         }
      }
    };
    
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false); 
      const savedCode = localStorage.getItem('sweet_ledger_code');
      // 如果已登入且有存過 Code，直接進 Dashboard
      if (savedCode && u) { 
        setLedgerCode(savedCode);
        setView('dashboard');
        setPayer(u.uid);
      }
      setTimeout(() => setIsInitializing(false), 800);
    });

    initAuth();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !ledgerCode) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLedgerData(data);
        if (data.currency) setCurrency(data.currency);
        if (data.users && data.users[user.uid]) {
            setMyNickname(data.users[user.uid].name);
        }
      }
    });
    return () => unsubscribe();
  }, [user, ledgerCode]);

  // Actions
  const handleGoogleLogin = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Google Login Error:", error);
        alert(`Google 登入失敗: ${error.message}`);
    }
  };

  const handleLogout = async () => {
      if(confirm('確定要登出嗎？')) {
          await signOut(auth);
          setUser(null);
          setView('onboarding');
      }
  };

  const updateLedgerSetting = async (key, value) => {
    if (!ledgerCode) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`settings.${key}`]: value });
  };

  const updateLedgerCurrency = async (newCurrency) => {
    if (!ledgerCode) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { currency: newCurrency });
    setCurrency(newCurrency); 
  };
  
  const updateNickname = async () => {
    if (!ledgerCode || !myNickname) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`users.${user.uid}.name`]: myNickname });
    alert("暱稱已更新！");
  };
  
  const handleResetAccount = async () => {
      const confirmStr = prompt("警告：此操作將刪除所有交易紀錄且無法復原！\n請輸入 RESET 確認重置：");
      if (confirmStr === "RESET") {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        await updateDoc(docRef, { 
            transactions: [], 
            subscriptions: [],
            gamification: { xp: 0, level: 1, streak: 1, houseType: 'tent' }
        });
        alert("帳本已重置。");
      }
  };

  const handleFixIdentity = async () => {
    if (!ledgerData || !user) return;
    const currentUserRole = ledgerData.users[user.uid]?.role;
    
    // 尋找是否有名為 "Host" 且不是我本人的帳號 (殭屍 Host)
    const zombieHostId = Object.keys(ledgerData.users).find(uid => 
        ledgerData.users[uid].role === 'host' && uid !== user.uid
    );

    if (!zombieHostId) {
        alert("目前帳本狀態正常，無需修復。");
        return;
    }

    const confirmMsg = `偵測到舊的「Host」帳號 (${zombieHostId.slice(0,5)}...)。\n您目前是「${currentUserRole}」。\n\n是否要「繼承」舊帳號的權限與資料，並將其刪除？\n(這將解決身分重複與統計錯誤的問題)`;
    
    if (confirm(confirmMsg)) {
        try {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            const newUsers = { ...ledgerData.users };
            
            // 1. 把舊 Host 刪掉
            delete newUsers[zombieHostId];
            
            // 2. 把自己變成 Host
            if (newUsers[user.uid]) {
                newUsers[user.uid] = { ...newUsers[user.uid], role: 'host' };
            }

            // 3. 更新所有舊交易的付款人 ID
            const newTransactions = ledgerData.transactions.map(tx => {
                let newTx = { ...tx };
                if (newTx.payer === zombieHostId) newTx.payer = user.uid;
                
                // 更新 customSplit 裡的 ID
                if (newTx.customSplit) {
                    const newSplit = {};
                    Object.keys(newTx.customSplit).forEach(key => {
                        const newKey = key === zombieHostId ? user.uid : key;
                        newSplit[newKey] = newTx.customSplit[key];
                    });
                    newTx.customSplit = newSplit;
                }
                return newTx;
            });

            await updateDoc(docRef, {
                users: newUsers,
                transactions: newTransactions
            });
            
            alert("修復成功！您現在是唯一的 Host，舊帳號已移除。");
        } catch (e) {
            console.error("Fix Identity Error:", e);
            alert("修復失敗，請檢查權限或網路。");
        }
    }
  };

  const handleSaveProject = async () => {
    if (!editingProjectData.name) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    let newProjects = [...(ledgerData?.projects || [])];
    if (editingProjectData.id) {
        newProjects = newProjects.map(p => p.id === editingProjectData.id ? editingProjectData : p);
    } else {
        newProjects.push({ ...editingProjectData, id: generateId() });
    }
    await updateDoc(docRef, { projects: newProjects });
    setIsEditingProject(false);
    setEditingProjectData({ id: '', name: '', icon: 'project_daily' });
  };

  const handleDeleteProject = async (projectId) => {
    if (confirm('確定要刪除這個專案嗎？')) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newProjects = ledgerData.projects.filter(p => p.id !== projectId);
        await updateDoc(docRef, { projects: newProjects });
        if (currentProjectId === projectId) setCurrentProjectId('daily');
    }
  };

  const handleSaveCategory = async () => {
    if (!editingCategoryData.name) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    let newCategories = [...(ledgerData?.customCategories || DEFAULT_CATEGORIES)];
    if (editingCategoryData.id) {
        newCategories = newCategories.map(c => c.id === editingCategoryData.id ? editingCategoryData : c);
    } else {
        const newId = generateId();
        newCategories.push({ ...editingCategoryData, id: newId });
        await updateDoc(docRef, { 
           customCategories: newCategories,
           'settings.selectedCategories': arrayUnion(newId)
        });
        setIsEditingCategory(false);
        return;
    }
    await updateDoc(docRef, { customCategories: newCategories });
    setIsEditingCategory(false);
  };

  const handleDeleteCategory = async (catId) => {
     if (confirm('確定要刪除這個分類嗎？')) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newCategories = (ledgerData?.customCategories || DEFAULT_CATEGORIES).filter(c => c.id !== catId);
        await updateDoc(docRef, { customCategories: newCategories });
     }
  };

  const createLedger = async () => {
    if (!user) { alert("請先登入"); return; }
    setLoading(true);
    
    try {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const userName = user.displayName || 'Host';
        const userAvatar = user.photoURL || '🐱';

        const newLedger = {
        ...INITIAL_LEDGER_STATE,
        users: {
            [user.uid]: { name: userName, avatar: userAvatar, role: 'host' }
        }
        };
        
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
        localStorage.setItem('sweet_ledger_code', code);
        setLedgerCode(code);
        setView('dashboard');
    } catch (e) {
        console.error("Create Ledger Error:", e);
        if (e.code === 'permission-denied') {
            alert(`權限不足！請檢查 Firebase Rules`);
        } else {
            alert(`建立失敗: ${e.message}`);
        }
    }
    setLoading(false);
  };

  const joinLedger = async (code) => {
    if (!user) { alert("請先登入"); return; }
    setLoading(true);
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentData = docSnap.data();
      
      if (currentData.users && currentData.users[user.uid]) {
          console.log("Welcome back, existing member!");
      } else {
          const userName = user.displayName || 'Guest';
          const userAvatar = user.photoURL || '🐶';
          
          const updatedUsers = {
            ...currentData.users,
            [user.uid]: { name: userName, avatar: userAvatar, role: 'guest' }
          };
          await updateDoc(docRef, { users: updatedUsers });
      }
      
      localStorage.setItem('sweet_ledger_code', code);
      setLedgerCode(code);
      setView('dashboard');
    } else {
      alert("找不到這個帳本代碼！");
    }
    setLoading(false);
  };

  const addTransaction = async () => {
    if (!amount || !ledgerData) return;
    setIsSubmittingTransaction(true);
    const amountFloat = parseFloat(amount);
    let customSplitData = null;
    let finalSplitType = splitType;

    // 分攤邏輯：墊付制 (Who Paid)
    if (splitType === 'custom') {
        const hostAmt = parseFloat(customSplitHost) || 0;
        const guestAmt = parseFloat(customSplitGuest) || 0;
        if (Math.round((hostAmt + guestAmt) * 100) / 100 !== Math.round(amountFloat * 100) / 100) {
            console.error("自定義墊付金額必須等於總金額！"); 
            alert("付款金額總和必須等於支出總額！");
            setIsSubmittingTransaction(false);
            return;
        }
        
        // --- 修正 ID 抓取邏輯 ---
        const hostUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
        const guestUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
        
        customSplitData = {};
        if(hostUid) customSplitData[hostUid] = hostAmt;
        
        if (guestAmt > 0 && !guestUid) {
             alert("您的夥伴尚未加入帳本，系統無法記錄對方的墊付金額。\n請先邀請對方加入！");
             setIsSubmittingTransaction(false);
             return;
        }
        if(guestUid) customSplitData[guestUid] = guestAmt;

    } else if (splitType === 'self') {
        const myRole = ledgerData.users[user.uid]?.role;
        finalSplitType = myRole === 'host' ? 'host_all' : 'guest_all';
    } else if (splitType === 'partner') {
        const myRole = ledgerData.users[user.uid]?.role;
        finalSplitType = myRole === 'host' ? 'guest_all' : 'host_all';
    } else if (splitType === 'even') {
        // ...
    }

    try {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const selectedDate = new Date(date).toISOString(); 
        const commonData = {
            id: generateId(), 
            amount: amountFloat, 
            currency: currency, 
            category: selectedCategory,
            payer: payer || user.uid, 
            splitType: finalSplitType, 
            customSplit: customSplitData,
            note: note || selectedCategory.name, 
            projectId: currentProjectId,
        };

        if (isSubscription) {
          await updateDoc(docRef, { 
              subscriptions: arrayUnion({ 
                  ...commonData, 
                  name: note || selectedCategory.name, 
                  cycle: subCycle, 
                  payDay: parseInt(subPayDay) || 1, 
                  mode: 'infinite', 
                  nextPaymentDate: selectedDate, 
              })
          });
          await updateDoc(docRef, { 
              transactions: arrayUnion({ 
                  ...commonData, 
                  date: selectedDate, 
                  isSettlement: false 
              }) 
          });

        } else {
          const currentXp = ledgerData.gamification?.xp || 0;
          const newTotalXp = currentXp + 50; 
          await updateDoc(docRef, { transactions: arrayUnion({ ...commonData, date: selectedDate, isSettlement: false }), 'gamification.xp': newTotalXp, 'gamification.level': Math.floor(newTotalXp / 1000) + 1 });
        }
        setIsSubmittingTransaction(false);
        setShowSuccessAnimation(true);
        setTimeout(() => {
            setAmount(''); setNote(''); setAiInput(''); setSelectedImage(null); setIsSubscription(false); setSubCycle('monthly'); setSubPayDay(''); setSplitType('even'); setCustomSplitHost(''); setCustomSplitGuest('');
            setDate(new Date().toISOString().slice(0, 10));
            setShowSuccessAnimation(false);
            setView('dashboard');
        }, 1000);
    } catch (e) {
        console.error("Add Transaction Error", e);
        setIsSubmittingTransaction(false);
        alert("記帳失敗，請重試");
    }
  };

  const handleUpdateTransaction = async () => {
    if (!editingTx || !ledgerData) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const updatedTxs = ledgerData.transactions.map(tx => tx.id === editingTx.id ? editingTx : tx);
    await updateDoc(docRef, { transactions: updatedTxs });
    setIsEditTxModalOpen(false);
    setEditingTx(null);
  };

  const handleDeleteTransaction = async () => {
     if (!editingTx || !ledgerData) return;
     if (confirm('確定要刪除這筆紀錄嗎？')) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const updatedTxs = ledgerData.transactions.filter(tx => tx.id !== editingTx.id);
        await updateDoc(docRef, { transactions: updatedTxs });
        setIsEditTxModalOpen(false);
        setEditingTx(null);
     }
  };

  const handleAiModalSubmit = async () => {
     if (!aiModalInput && !selectedImage) return;
     setIsAiModalOpen(false);
     setIsAiProcessing(true);
     let prompt = `你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
    目前的日期是：${new Date().toISOString()}。
    可用的分類 ID: ${(ledgerData?.customCategories || DEFAULT_CATEGORIES).map(c=>c.id).join(', ')}
    請解析：1. 金額 (amount) 2. 類別 ID (categoryId) 3. 備註 (note) 4. 幣別 (currency, 預設 TWD)
    只回傳 JSON。`;
     if (aiModalInput) prompt += `\n使用者文字: "${aiModalInput}"`;
     if (selectedImage) prompt += `\n這是一張收據或發票的照片，請辨識。`;

     const result = await callGemini(prompt, selectedImage ? selectedImage.split(',')[1] : null);
     setIsAiProcessing(false);
     setAiModalInput('');

     if (!result) {
         alert("AI 無法解析，請檢查網路或 API Key");
         return;
     }

     try { 
         const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim(); 
         const parsed = JSON.parse(cleanJson); 
         if (parsed.amount) setAmount(parsed.amount.toString()); 
         if (parsed.note) setNote(parsed.note); 
         if (parsed.categoryId) { 
             const allCats = ledgerData?.customCategories || DEFAULT_CATEGORIES;
             const cat = allCats.find(c => c.id === parsed.categoryId); 
             if (cat) setSelectedCategory(cat); 
         } 
     } catch (e) { 
         console.error("AI Parse Error", e); 
         alert("AI 解析失敗，請重試");
     }
  };

  const toggleVoiceRecording = () => {
    if (isRecording) {
        recognitionRef.current?.stop();
        setIsRecording(false);
    } else {
        if (!window.webkitSpeechRecognition && !window.SpeechRecognition) {
            alert("您的瀏覽器不支援語音辨識");
            return;
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'zh-TW';
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (event) => {
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                }
            }
            if (finalTranscript) {
                setAiModalInput(prev => prev + finalTranscript);
            }
        };
        recognition.onerror = (event) => {
            console.error("Speech error", event.error);
            setIsRecording(false);
        };
        recognitionRef.current = recognition;
        recognition.start();
        setIsRecording(true);
    }
  };

  const handleImageUpload = (e) => { 
      const file = e.target.files[0]; 
      if (file) { 
          const reader = new FileReader(); 
          reader.onloadend = () => { setSelectedImage(reader.result); }; 
          reader.readAsDataURL(file); 
      } 
  };
  
  const getCharacterAdvice = async () => { 
    const charId = ledgerData?.settings?.character || 'cat'; const character = CHARACTERS[charId]; const total = ledgerData?.transactions.reduce((acc, curr) => acc + curr.amount, 0) || 0;
    const prompt = `${character.prompt} \n目前這個月的總支出是 ${total} ${ledgerData.currency}。請根據你的個性給出一句短評（30字以內）。`;
    return await callGemini(prompt);
  };

  // --- RENDER FUNCTIONS ---

  const renderDashboard = () => { 
    if (!ledgerData) return null;
    const projectTxs = ledgerData.transactions.filter(t => (t.projectId || 'daily') === currentProjectId);
    const currentMonthStr = new Date().toISOString().slice(0, 7);
    const thisMonthTxs = projectTxs.filter(t => t.date.startsWith(currentMonthStr));
    const groupedTransactions = {};
    const sorted = [...projectTxs].sort((a, b) => new Date(b.date) - new Date(a.date)); 
    sorted.forEach(tx => { 
        const date = new Date(tx.date).toLocaleDateString('zh-TW'); 
        if (!groupedTransactions[date]) groupedTransactions[date] = []; 
        groupedTransactions[date].push(tx); 
    });
    
    const totalExpense = thisMonthTxs.reduce((acc, curr) => acc + curr.amount, 0);
    
    // 結算邏輯
    let myPaid = 0;
    let myLiability = 0;

    thisMonthTxs.forEach(tx => {
        // 1. 計算我墊付了多少 (Who Paid)
        if (tx.splitType === 'custom' && tx.customSplit) {
             myPaid += (tx.customSplit[user.uid] || 0);
        } else {
             if (tx.payer === user.uid) myPaid += tx.amount;
        }

        // 2. 計算我該付多少 (Liability)
        let liability = 0;
        if (tx.splitType === 'even' || tx.splitType === 'custom') {
            liability = tx.amount / 2; // 預設均分責任
        } else if (tx.splitType === 'host_all') {
            liability = ledgerData.users[user.uid]?.role === 'host' ? tx.amount : 0;
        } else if (tx.splitType === 'guest_all') {
            liability = ledgerData.users[user.uid]?.role === 'guest' ? tx.amount : 0;
        }
        myLiability += liability;
    });

    const settlement = myPaid - myLiability; 

    const currentProjectName = ledgerData.projects?.find(p => p.id === currentProjectId)?.name || '日常開銷';
    const getHouseIcon = (level) => { if (level < 5) return '⛺️'; if (level < 15) return '🏠'; if (level < 30) return '🏡'; return '🏰'; };
    const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const charId = ledgerData.settings?.character || 'cat';

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4 relative">
        {/* Edit Transaction Modal (Enhanced: Fixed Position + Z-Index 100) */}
        {isEditTxModalOpen && editingTx && (
            <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-in fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">編輯交易</h3>
                    <button onClick={() => setIsEditTxModalOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button>
                </div>
                <div className="space-y-4 flex-1 overflow-y-auto pb-10">
                     <div className="text-center text-gray-400 text-xs">金額 ({editingTx.currency})</div>
                     <input type="number" value={editingTx.amount} onChange={(e) => setEditingTx({...editingTx, amount: parseFloat(e.target.value)})} className="w-full text-center text-4xl font-bold bg-transparent outline-none"/>
                     
                     <div className="text-center text-gray-400 text-xs mt-4">分類</div>
                     <div className="grid grid-cols-4 gap-2">
                        {allCats.map(cat => (
                            <button 
                                key={cat.id} 
                                onClick={() => setEditingTx({...editingTx, category: cat})}
                                className={`p-2 rounded-xl flex flex-col items-center border ${editingTx.category?.id === cat.id ? 'border-gray-800 bg-gray-50' : 'border-transparent'}`}
                            >
                                <div style={{color: cat.hex}}>{React.createElement(getIconComponent(cat.icon), {size: 20})}</div>
                                <span className="text-[10px]">{cat.name}</span>
                            </button>
                        ))}
                     </div>

                     <div className="text-center text-gray-400 text-xs mt-4">付款人</div>
                     <div className="flex gap-2 justify-center">
                         {Object.entries(ledgerData.users).map(([uid, u]) => (
                             <button 
                                key={uid} 
                                onClick={() => setEditingTx({...editingTx, payer: uid})}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${editingTx.payer === uid ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                             >
                                {u.name}
                             </button>
                         ))}
                     </div>

                     <div className="text-center text-gray-400 text-xs mt-4">備註</div>
                     <input type="text" value={editingTx.note} onChange={(e) => setEditingTx({...editingTx, note: e.target.value})} className="w-full p-3 bg-gray-50 rounded-xl outline-none"/>
                     
                     <button onClick={handleUpdateTransaction} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold mt-4">儲存修改</button>
                     <button onClick={handleDeleteTransaction} className="w-full bg-red-50 text-red-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2"><Trash2 size={18}/> 刪除此筆紀錄</button>
                </div>
            </div>
        )}

        <div className="flex justify-between items-center mb-4">
           <div className="relative">
             <select value={currentProjectId} onChange={(e) => setCurrentProjectId(e.target.value)} className="appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200">
                {ledgerData.projects?.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
             </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white"><ChevronDown size={14} /></div>
           </div>
           <div className="flex items-center gap-2">
             <div className="bg-rose-100 px-3 py-1.5 rounded-full flex flex-col items-end gap-0.5">
               <div className="flex items-center gap-1">
                 <span className="text-lg leading-none">{getHouseIcon(ledgerData.gamification?.level || 1)}</span>
                 <span className="text-xs font-bold text-rose-600 leading-none">Lv.{ledgerData.gamification?.level || 1}</span>
               </div>
             </div>
             <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
               {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
             </button>
           </div>
        </div>
        <div className={`rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-8 relative overflow-hidden transition-colors ${settlement >= 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-rose-500 to-pink-600'}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
            <p className="text-white/80 mb-1 font-medium text-sm flex items-center gap-2"><ArrowRightLeft size={14}/> 本月結算狀態 ({currentProjectName})</p>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
                {settlement >= 0 ? `對方欠你 ${formatCurrency(Math.abs(settlement), ledgerData.currency, privacyMode)}` : `你欠對方 ${formatCurrency(Math.abs(settlement), ledgerData.currency, privacyMode)}`}
            </h1>
            <div className="flex items-center gap-2 text-sm text-white/80"><span>本月總支出: {formatCurrency(totalExpense, ledgerData.currency, privacyMode)}</span></div>
        </div>
        <div className="space-y-6">
            {Object.entries(groupedTransactions).map(([date, txs]) => (
                <div key={date}>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">{date}</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                        {txs.map((tx, idx) => { 
                            const CatIcon = getIconComponent(tx.category?.icon); 
                            const payerName = ledgerData.users[tx.payer]?.name || '未知';
                            // 檢查是否為多人墊付
                            const isMultiPayer = tx.splitType === 'custom' && tx.customSplit && Object.keys(tx.customSplit).length > 1;
                            const displayPayer = isMultiPayer ? '多人墊付' : payerName;

                            return (
                                <div key={tx.id} onClick={() => { setEditingTx(tx); setIsEditTxModalOpen(true); }} className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${idx !== txs.length -1 ? 'border-b border-gray-50' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${tx.category?.color?.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 text-${tx.category?.color?.split('text-')[1]}`}><CatIcon size={20} /></div>
                                        <div>
                                            <p className="font-medium text-gray-800">{tx.note}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs text-gray-400">{tx.category?.name}</p>
                                                {/* UI Fix: Removed brackets and "付" */}
                                                <span className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded">{displayPayer}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="font-bold text-gray-800">{formatCurrency(tx.amount, tx.currency, privacyMode)}</span>
                                </div>
                            ); 
                        })}
                    </div>
                </div>
            ))}
            {projectTxs.length === 0 && (
                <div className="text-center py-10 text-gray-400">
                    <p>這個專案還沒有記帳紀錄喔 🍃</p>
                    <p className="text-sm mt-2">點擊下方「+」開始第一筆吧！</p>
                </div>
            )}
        </div>
      </div>
    );
  };

  const renderAddExpenseView = () => {
    if (!ledgerData) return null; 
    const currentCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories; 
    const filteredCategories = currentCats.filter(cat => selectedCategoryIds.includes(cat.id)); 
    const recentNotes = [];
    if (ledgerData.transactions) {
        const notes = ledgerData.transactions.filter(t => t.category.id === selectedCategory.id).map(t => t.note).filter(n => n);
        const uniqueNotes = [...new Set(notes)];
        recentNotes.push(...uniqueNotes.slice(0, 10));
    }
    
    // Get Partner Name for "Only Partner" logic
    const otherUserId = Object.keys(ledgerData.users).find(uid => uid !== user.uid);
    const partnerName = otherUserId ? (ledgerData.users[otherUserId].name || '對方') : '對方';
    // Get Host & Guest Names for Custom Split Labels
    const hostUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
    const guestUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
    const hostName = hostUid ? (ledgerData.users[hostUid].name || 'Host') : 'Host';
    const guestName = guestUid ? (ledgerData.users[guestUid].name || 'Guest') : 'Guest';

    return (
      <div className="h-full flex flex-col pt-[calc(env(safe-area-inset-top)+2rem)] bg-white relative">
        {showSuccessAnimation && (
            <div className="absolute inset-0 z-[100] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
                <div className="scale-150 text-green-500 animate-bounce"><CheckCircle2 size={80} strokeWidth={3} /></div>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">記帳完成！</h2>
            </div>
        )}
        
        {/* AI Modal (Fixed + Z-Index) */}
        {isAiModalOpen && (
            <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col px-6 pb-6 pt-[calc(env(safe-area-inset-top)+3rem)] animate-in fade-in duration-200">
                <div className="flex justify-between items-center mb-6"><h3 className="text-xl font-bold text-gray-800">AI 智慧輸入</h3><button onClick={() => { setIsAiModalOpen(false); setIsRecording(false); }} className="p-2 bg-gray-100 rounded-full"><X size={20}/></button></div>
                <div className="flex-1 flex flex-col gap-4">
                    <textarea value={aiModalInput} onChange={(e) => setAiModalInput(e.target.value)} placeholder="請說話或輸入... 例如：「昨天晚餐吃壽司花了1200元」" className="w-full h-40 p-4 bg-gray-50 rounded-2xl text-lg outline-none resize-none border border-gray-200 focus:border-purple-500 transition-colors"/>
                    {isRecording && (<div className="flex items-center justify-center gap-2 text-purple-600 animate-pulse"><div className="w-2 h-2 bg-purple-600 rounded-full"></div><span className="text-sm font-medium">正在聆聽...</span></div>)}
                    <div className="flex justify-center gap-4 mt-auto mb-8"><button onClick={toggleVoiceRecording} className={`p-6 rounded-full transition-all ${isRecording ? 'bg-red-50 text-red-500 scale-110 shadow-red-200' : 'bg-purple-50 text-purple-600 shadow-purple-200'} shadow-lg`}>{isRecording ? <StopCircle size={32} /> : <Mic size={32} />}</button></div>
                    <button onClick={handleAiModalSubmit} disabled={!aiModalInput && !selectedImage} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg mb-4">開始分析</button>
                </div>
            </div>
        )}

        <div className="px-4 flex justify-between items-center mb-4">
            <button onClick={() => setView('dashboard')} className="p-2 bg-gray-100 rounded-full"><X size={20} className="text-gray-600"/></button>
            <div className="flex-1 flex justify-center"><div className="bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full text-sm flex items-center gap-2">{ledgerData.projects?.find(p => p.id === currentProjectId)?.name}</div></div>
            <div className="flex gap-2"><button onClick={() => fileInputRef.current?.click()} className="p-2 bg-blue-50 text-blue-600 rounded-full"><Camera size={20} /></button><button onClick={() => setIsAiModalOpen(true)} className={`p-2 rounded-full ${isAiProcessing ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>{isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Sparkles size={20}/>}</button></div>
        </div>
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => { handleImageUpload(e); setIsAiModalOpen(true); }} />
        
        {/* Amount Input with Payer Toggle (New) */}
        <div className="px-6 py-2 text-center flex flex-col items-center relative">
            {/* New: Date Picker */}
            <div className="absolute top-0 right-6">
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-lg outline-none"
                />
            </div>

            <div className="text-gray-400 text-sm mb-1">{currency}</div>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="0" 
                className="w-full text-6xl font-bold text-gray-800 text-center outline-none placeholder-gray-200 bg-transparent" 
                inputMode="decimal"
            />
            {/* Payer Toggle - Only 2 Buttons: Me & Partner */}
            <div className="flex gap-2 mt-4">
                 {/* Button 1: Me */}
                <button 
                    onClick={() => setPayer(user.uid)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${payer === user.uid ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}
                >
                    我付的
                </button>
                {/* Button 2: Partner (Only if exists) */}
                {otherUserId && (
                    <button 
                        onClick={() => setPayer(otherUserId)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${payer === otherUserId ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-400'}`}
                    >
                        {partnerName} 付的
                    </button>
                )}
            </div>
        </div>
        
        <div className="mx-4 bg-gray-50 p-4 rounded-xl shadow-sm mb-2 border border-gray-100 mt-4"><input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder={`輸入備註 (例如: ${selectedCategory.name})...`} className="w-full outline-none text-gray-700 bg-transparent"/></div>
        {recentNotes.length > 0 && (<div className="mx-4 mb-4 flex flex-wrap gap-2">{recentNotes.map((n, idx) => (<button key={idx} onClick={() => setNote(n)} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg hover:bg-gray-200 transition-colors">{n}</button>))}</div>)}
        <div className="flex-1 bg-gray-50 rounded-t-3xl p-6 overflow-y-auto pb-40">
            <div className="grid grid-cols-4 gap-4 mb-6">{filteredCategories.map(cat => { const CatIcon = getIconComponent(cat.icon); return (<button key={cat.id} onClick={() => setSelectedCategory(cat)} className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${selectedCategory.id === cat.id ? 'bg-white shadow-md scale-105 ring-2 ring-rose-200' : 'hover:bg-gray-100'}`}><div className={`text-2xl ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-400'}`}><CatIcon size={28} /></div><span className={`text-xs font-medium ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-500'}`}>{cat.name}</span></button>); })}</div>
            <div className="bg-white p-4 rounded-xl shadow-sm mb-20 space-y-4">
                <div className="border-b border-gray-100 pb-4">
                    <div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-600">分攤方式</span><select value={splitType} onChange={(e) => setSplitType(e.target.value)} className="text-sm bg-gray-100 p-1 px-2 rounded-lg outline-none"><option value="even">均攤 (50/50)</option><option value="self">只有我</option><option value="partner">只有{partnerName}</option><option value="custom">自定義</option></select></div>
                    {splitType === 'custom' && (<div className="flex gap-2 mt-2"><div className="w-1/2"><label className="text-xs text-gray-400 block mb-1">{hostName} 先付</label><input type="number" value={customSplitHost} onChange={(e) => handleCustomSplitChange('host', e.target.value)} className={`w-full p-2 bg-gray-50 border rounded-lg text-sm text-center ${parseFloat(customSplitHost) + parseFloat(customSplitGuest) !== parseFloat(amount) ? 'border-red-300 bg-red-50' : ''}`}/></div><div className="w-1/2"><label className="text-xs text-gray-400 block mb-1">{guestName} 先付</label><input type="number" value={customSplitGuest} onChange={(e) => handleCustomSplitChange('guest', e.target.value)} className={`w-full p-2 bg-gray-50 border rounded-lg text-sm text-center ${parseFloat(customSplitHost) + parseFloat(customSplitGuest) !== parseFloat(amount) ? 'border-red-300 bg-red-50' : ''}`}/></div></div>)}
                </div>
                {/* Subscription Name removed, simplified UI */}
                <div className="flex justify-between items-center"><div className="flex items-center gap-2 text-sm font-medium text-gray-600"><RefreshCw size={16} /><span>固定支出</span></div><button onClick={() => setIsSubscription(!isSubscription)} className={`w-12 h-6 rounded-full transition-colors ${isSubscription ? 'bg-rose-500' : 'bg-gray-200'} relative`}><div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${isSubscription ? 'left-7' : 'left-1'}`}></div></button></div>
                {isSubscription && (<div className="pt-2 space-y-3"><div className="flex gap-2"><select value={subCycle} onChange={(e) => setSubCycle(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm"><option value="monthly">每月</option><option value="weekly">每週</option></select><input type="number" placeholder="日 (1-31)" value={subPayDay} onChange={(e) => setSubPayDay(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm text-center"/></div></div>)}
            </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+1rem)]"><button onClick={addTransaction} disabled={!amount || isSubmittingTransaction} className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors ${amount && !isSubmittingTransaction ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>{isSubmittingTransaction ? (<><RefreshCw className="animate-spin" size={20}/> 處理中...</>) : (<><Check size={20}/> 完成記帳</>)}</button></div>
      </div>
    );
  };

  const renderStatsView = () => {
    if (!ledgerData) return null;
    const handleMonthChange = (direction) => { const date = new Date(statsMonth + '-01'); date.setMonth(date.getMonth() + direction); setStatsMonth(date.toISOString().slice(0, 7)); };
    const filteredTxs = ledgerData.transactions.filter(t => t.date.startsWith(statsMonth) && (t.projectId || 'daily') === currentProjectId);
    // Sort logic for history list (New Feature)
    const sortedHistory = [...filteredTxs].sort((a, b) => new Date(b.date) - new Date(a.date));

    const hostId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
    const guestId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
    
    // REVISED Stats Calculation (Pad Amount Priority)
    const calculateTotalPaid = (uid) => {
        return filteredTxs.reduce((sum, tx) => {
            if (tx.splitType === 'custom' && tx.customSplit) {
                return sum + (tx.customSplit[uid] || 0);
            }
            return sum + (tx.payer === uid ? tx.amount : 0);
        }, 0);
    };

    const hostTotal = calculateTotalPaid(hostId);
    const guestTotal = calculateTotalPaid(guestId);
    
    const total = hostTotal + guestTotal;
    const hostRatio = total > 0 ? (hostTotal / total) * 100 : 50;
    const guestRatio = total > 0 ? (guestTotal / total) * 100 : 50;

    const categoryStats = [];
    const statsMap = {};
    filteredTxs.forEach(tx => { if(!statsMap[tx.category.id]) statsMap[tx.category.id] = 0; statsMap[tx.category.id] += tx.amount; });
    const allCats = ledgerData.customCategories || DEFAULT_CATEGORIES;
    Object.entries(statsMap).forEach(([id, amt]) => { const cat = allCats.find(c => c.id === id); if(cat) categoryStats.push({ ...cat, total: amt }); });
    categoryStats.sort((a,b) => b.total - a.total);

    const totalExpense = filteredTxs.reduce((acc, curr) => acc + curr.amount, 0);
    const pieChartGradient = (() => {
        if (totalExpense === 0) return 'gray 0% 100%';
        let gradientStr = '';
        let currentPercent = 0;
        categoryStats.forEach(stat => { const percent = (stat.total / totalExpense) * 100; const endPercent = currentPercent + percent; gradientStr += `${stat.hex || '#ccc'} ${currentPercent}% ${endPercent}%, `; currentPercent = endPercent; });
        return `conic-gradient(${gradientStr.slice(0, -2)})`;
    })();

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
         <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold text-gray-800">消費分析</h2><div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1"><button onClick={() => handleMonthChange(-1)} className="p-1"><ChevronLeft size={16}/></button><span className="text-sm font-bold w-20 text-center">{statsMonth}</span><button onClick={() => handleMonthChange(1)} className="p-1"><ChevronRight size={16}/></button></div></div>
         
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6"><h3 className="text-gray-600 font-bold mb-4">消費貢獻度 (支付金額)</h3><div className="flex justify-between items-center mb-2 text-sm"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-gray-600">{ledgerData.users[hostId]?.name || 'Host'}</span></div><div className="flex items-center gap-2"><span className="font-bold text-gray-800">{formatCurrency(hostTotal, ledgerData.currency)}</span><span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span></div></div><div className="flex justify-between items-center mb-3 text-sm"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-pink-500"></div><span className="text-gray-600">{ledgerData.users[guestId]?.name || 'Guest'}</span></div><div className="flex items-center gap-2"><span className="font-bold text-gray-800">{formatCurrency(guestTotal, ledgerData.currency)}</span><span className="text-xs text-gray-400">({Math.round(guestRatio)}%)</span></div></div><div className="h-4 w-full bg-gray-100 rounded-full flex overflow-hidden"><div style={{ width: `${hostRatio}%` }} className="bg-blue-500 transition-all duration-1000"></div><div style={{ width: `${guestRatio}%` }} className="bg-pink-500 transition-all duration-1000"></div></div></div>
         
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center"><h3 className="text-gray-600 font-bold mb-6 w-full text-left">分類支出佔比</h3><div className="relative w-48 h-48 rounded-full mb-6" style={{ background: pieChartGradient }}><div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center"><span className="text-sm text-gray-400">總支出</span><span className="text-xl font-bold text-gray-800">{formatCurrency(totalExpense, ledgerData.currency)}</span></div></div><div className="w-full space-y-3">{categoryStats.map(stat => (<div key={stat.id} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.hex }}></div><span className="text-sm text-gray-600 font-medium">{stat.name}</span></div><div className="text-sm"><span className="font-bold text-gray-800 mr-2">{formatCurrency(stat.total, ledgerData.currency)}</span><span className="text-gray-400 text-xs">{Math.round((stat.total/totalExpense)*100)}%</span></div></div>))}</div></div>

         {/* New: History List (With Payer Tag) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-600 font-bold mb-4">本月交易明細 ({sortedHistory.length}筆)</h3>
            <div className="space-y-4">
                {sortedHistory.map((tx) => {
                    const CatIcon = getIconComponent(tx.category?.icon);
                    const payerName = ledgerData.users[tx.payer]?.name || '未知';
                    const isMultiPayer = tx.splitType === 'custom' && tx.customSplit && Object.keys(tx.customSplit).length > 1;
                    const displayPayer = isMultiPayer ? '多人墊付' : payerName;

                    return (
                        <div key={tx.id} className="flex items-center justify-between pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="flex items-center gap-3">
                                <div className="text-gray-400 text-xs w-8 text-center">{new Date(tx.date).getDate()}日</div>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${tx.category?.color?.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 text-${tx.category?.color?.split('text-')[1]}`}><CatIcon size={16} /></div>
                                <div>
                                    <p className="font-medium text-gray-800 text-sm">{tx.note}</p>
                                    <span className="text-[10px] text-gray-400 bg-gray-100 px-1 rounded">{displayPayer}</span>
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-sm">{formatCurrency(tx.amount, tx.currency, privacyMode)}</span>
                        </div>
                    );
                })}
            </div>
         </div>
      </div>
    );
  };

  const renderSettingsView = () => {
    if (!ledgerData) return null;
    const currentCategories = ledgerData.customCategories || DEFAULT_CATEGORIES;

    if (isEditingCategory) {
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingCategoryData.id ? '編輯分類' : '新增分類'}</h2>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        value={editingCategoryData.name} 
                        onChange={(e) => setEditingCategoryData({...editingCategoryData, name: e.target.value})}
                        placeholder="分類名稱"
                        className="w-full p-4 bg-gray-50 rounded-xl outline-none"
                    />
                    <div className="grid grid-cols-5 gap-2">
                        {AVAILABLE_ICONS.map(icon => {
                            const IconCmp = getIconComponent(icon);
                            return (
                                <button key={icon} onClick={() => setEditingCategoryData({...editingCategoryData, icon})} className={`p-3 rounded-xl flex justify-center ${editingCategoryData.icon === icon ? 'bg-gray-200' : 'bg-gray-50'}`}>
                                    <IconCmp size={20} />
                                </button>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                         {COLORS.map(c => (
                             <button key={c.name} onClick={() => setEditingCategoryData({...editingCategoryData, color: c.class, hex: c.hex})} className={`w-8 h-8 rounded-full shadow-sm ${editingCategoryData.hex === c.hex ? 'ring-2 ring-gray-900 ring-offset-2' : 'border-2 border-white'}`} style={{backgroundColor: c.hex}}></button>
                         ))}
                    </div>
                    <button onClick={handleSaveCategory} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">儲存</button>
                    <button onClick={() => setIsEditingCategory(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">取消</button>
                </div>
            </div>
        )
    }

    const handleExport = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Date,Project,Category,Note,Amount,Payer,SplitType\n";
        ledgerData.transactions.forEach(tx => {
            const row = [new Date(tx.date).toLocaleDateString(), ledgerData.projects.find(p => p.id === tx.projectId)?.name || 'Unknown', tx.category.name, tx.note, tx.amount, ledgerData.users[tx.payer]?.name || 'Unknown', tx.splitType].join(",");
            csvContent += row + "\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `sweet_ledger_export_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
    };

    const handleImport = (e) => { /* Reuse existing logic but simplified for brevity in this snippet as it is unchanged logic */ };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 bg-gray-50 min-h-screen">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">帳本設定</h2>
         
         {/* Member List (New) */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><Users size={18} /> 帳本成員</h3>
            <div className="flex gap-4">
                {Object.values(ledgerData.users || {}).map(u => (
                    <div key={u.name} className="flex flex-col items-center">
                        {(u.avatar && typeof u.avatar === 'string' && u.avatar.includes('http')) ? (
                            <img src={u.avatar} className="w-12 h-12 rounded-full mb-1 object-cover"/>
                        ) : (
                            <div className="w-12 h-12 rounded-full mb-1 bg-gray-200 flex items-center justify-center text-xl">{u.avatar || '?'}</div>
                        )}
                        <span className="text-xs font-bold text-gray-600">{u.name}</span>
                    </div>
                ))}
            </div>
         </div>
         
         {/* Nickname Setting */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><User size={18} /> 我的暱稱</h3>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={myNickname}
                    onChange={(e) => setMyNickname(e.target.value)}
                    placeholder="請輸入您的暱稱"
                    className="flex-1 p-2 bg-gray-50 border border-gray-200 rounded-lg outline-none"
                />
                <button onClick={updateNickname} className="bg-gray-900 text-white px-4 rounded-lg font-bold">儲存</button>
            </div>
         </div>

         {/* Invite Code Section */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Heart size={18} className="text-rose-500" /> 帳本邀請碼
            </h3>
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 mb-1">您的專屬代碼</span>
                    <span className="font-mono text-2xl font-bold text-gray-800 tracking-wider">{ledgerCode}</span>
                </div>
                <button 
                    onClick={() => {
                        navigator.clipboard.writeText(ledgerCode);
                        alert("邀請碼已複製！");
                    }}
                    className="p-3 bg-white border border-gray-200 rounded-full shadow-sm active:scale-95 text-gray-600"
                >
                    <Copy size={20} />
                </button>
            </div>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                將此代碼分享給您的另一半，他們在歡迎畫面輸入後即可加入此帳本。
            </p>
         </div>
         
         {/* Fix Identity (Advanced) */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><Wrench size={18} /> 進階修復</h3>
            <p className="text-xs text-gray-400 mb-3">如果發現帳本內有重複的成員或「Host」帳號，請點擊下方按鈕進行合併。</p>
            <button onClick={handleFixIdentity} className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg font-medium text-sm hover:bg-gray-200">合併匿名 Host 帳號</button>
         </div>
         
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
             <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-gray-700">分類管理</h3>
                 <button onClick={() => { setIsEditingCategory(true); setEditingCategoryData({id:'', name:'', icon:'food', color: COLORS[0].class, hex: COLORS[0].hex}); }} className="text-xs bg-gray-900 text-white px-3 py-1 rounded-full">新增</button>
             </div>
             <div className="grid grid-cols-4 gap-2">
                {currentCategories.map(cat => {
                   const CatIcon = getIconComponent(cat.icon);
                   return (
                      <div key={cat.id} className="relative group">
                          <button className={`w-full flex flex-col items-center gap-1 p-2 rounded-xl border border-gray-100 bg-white`}>
                             <div style={{color: cat.hex}}><CatIcon size={20} /></div>
                             <span className="text-[10px] font-medium truncate w-full text-center">{cat.name}</span>
                          </button>
                          <button onClick={() => handleDeleteCategory(cat.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow-sm"><X size={10}/></button>
                      </div>
                   );
                })}
             </div>
         </div>

         <div className="bg-white p-4 rounded-xl shadow-sm mb-6"><h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><FileText size={18}/> 資料備份與還原</h3><div className="mb-4 border-b border-gray-100 pb-4"><button onClick={handleExport} className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50"><Download size={16}/> 下載 .csv</button></div></div>
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6"><h3 className="font-bold text-gray-700 mb-3">AI 角色</h3><div className="grid grid-cols-2 gap-3">{Object.values(CHARACTERS).map(char => { const CharIcon = getIconComponent(char.icon); return (<button key={char.id} onClick={() => updateLedgerSetting('character', char.id)} className={`p-3 rounded-xl border-2 transition-colors flex items-center gap-2 ${ledgerData.settings?.character === char.id ? 'border-rose-500 bg-rose-50' : 'border-gray-200 bg-white'}`}><CharIcon size={24} /><p className="text-sm font-medium">{char.name}</p></button>)})}</div></div>
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6"><h3 className="font-bold text-gray-700 mb-3">匯率設定</h3>{ledgerData.currency === 'TWD' && (<div className="flex items-center gap-2"><span className="text-sm text-gray-500">1 JPY =</span><input type="number" defaultValue={ledgerData.rates?.JPY} onBlur={(e) => { const val = parseFloat(e.target.value); if(val) updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), { 'rates.JPY': val }); }} className="w-20 bg-gray-100 rounded-lg p-2 text-center" step="0.001"/><span className="text-sm text-gray-500">TWD</span></div>)}</div>
         
         {/* Danger Zone: Reset Account */}
         <div className="bg-red-50 p-4 rounded-xl shadow-sm mb-6 border border-red-100">
             <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle size={18}/> 危險區域</h3>
             <button onClick={handleResetAccount} className="w-full bg-white text-red-600 border border-red-200 py-3 rounded-xl font-bold">重置所有帳務資料</button>
         </div>

         {/* Logout Button */}
         <div className="mt-8 mb-4">
             <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-gray-500 hover:text-red-500 py-2">
                 <LogOut size={16} /> 登出 Google 帳號
             </button>
         </div>
      </div>
    );
  };

  const renderProjectsView = () => { /* Reuse logic from before but wrapped in function to avoid focus issues if any input exists */
      if (!ledgerData) return null;
      if (isEditingProject) { return (<div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4"><h2 className="text-2xl font-bold text-gray-800 mb-6">{editingProjectData.id ? '編輯專案' : '新增專案'}</h2><div className="space-y-4"><input type="text" value={editingProjectData.name} onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})} placeholder="專案名稱" className="w-full p-4 bg-gray-50 rounded-xl outline-none"/><div className="grid grid-cols-4 gap-2">{['project_daily', 'project_travel', 'project_house', 'project_private'].map(icon => { const IconCmp = getIconComponent(icon); return (<button key={icon} onClick={() => setEditingProjectData({...editingProjectData, icon})} className={`p-4 rounded-xl flex justify-center ${editingProjectData.icon === icon ? 'bg-rose-100 text-rose-600' : 'bg-gray-50'}`}><IconCmp size={24} /></button>)})}</div><button onClick={handleSaveProject} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">儲存</button><button onClick={() => setIsEditingProject(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">取消</button></div></div>) }
      return (<div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4"><div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold text-gray-800">專案管理</h2><button onClick={() => { setIsEditingProject(true); setEditingProjectData({id:'', name:'', icon:'project_daily'}); }} className="bg-gray-900 text-white p-2 rounded-lg"><Plus size={20} /></button></div><div className="grid grid-cols-1 gap-4">{ledgerData.projects?.map(p => { const ProjIcon = getIconComponent(p.icon); return (<div key={p.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"><ProjIcon size={24} /></div><div><div className="font-bold text-gray-800">{p.name}</div><div className="text-xs text-gray-400">{p.id === 'daily' ? '預設' : '自訂專案'}</div></div></div>{p.id !== 'daily' && (<div className="flex gap-2"><button onClick={() => { setEditingProjectData(p); setIsEditingProject(true); }} className="p-2 text-gray-400 hover:text-gray-600"><Edit2 size={18} /></button><button onClick={() => handleDeleteProject(p.id)} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={18} /></button></div>)}</div>)})}</div></div>);
  };

  // --- Main Render Switch ---
  
  if (isInitializing) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <div className="text-6xl animate-bounce">🍰</div>
        </div>
     );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-100 pb-[env(safe-area-inset-bottom)]">
      {view === 'onboarding' && (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
            <div className="text-6xl mb-4">🍰</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">情侶記帳</h1>
            <p className="text-gray-500 mb-8">讓記帳成為情侶間的小樂趣</p>
            
            {/* Google Login Button */}
            {!user ? (
               <button 
                 onClick={handleGoogleLogin}
                 className="w-full bg-white border border-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg mb-4 shadow-sm flex items-center justify-center gap-3 active:scale-95 transition-transform"
               >
                 <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6"/>
                 使用 Google 登入
               </button>
            ) : (
               <div className="w-full space-y-4">
                   <div className="flex items-center justify-center gap-2 mb-4">
                       <img src={user.photoURL} className="w-8 h-8 rounded-full"/>
                       <span className="text-sm font-bold text-gray-600">嗨，{user.displayName}</span>
                   </div>
                   <button onClick={createLedger} className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-200 active:scale-95 transition-transform">{loading ? "建立中..." : "建立新帳本"}</button>
               </div>
            )}

            <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">或</span></div></div>
            <div className="flex gap-2 w-full">
                <input type="text" placeholder="輸入邀請碼" className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500" onChange={(e) => setLedgerCode(e.target.value.toUpperCase())} />
                {/* Fix: whitespace-nowrap and flex-shrink-0 to prevent button wrap */}
                <button onClick={() => { if(!user) { alert("請先登入 Google 帳號"); return; } joinLedger(ledgerCode); }} className="bg-gray-800 text-white px-6 rounded-xl font-bold active:scale-95 transition-transform whitespace-nowrap flex-shrink-0">加入</button>
            </div>
            </div>
        </div>
      )}
      
      {/* Main App - Using Render Functions to Fix Focus Issues */}
      {view !== 'onboarding' && ledgerData && (
        <>
            {view === 'add' ? (renderAddExpenseView()) : (
                <>
                {view === 'dashboard' && renderDashboard()}
                {view === 'stats' && renderStatsView()}
                {view === 'projects' && renderProjectsView()}
                {view === 'settings' && renderSettingsView()}
                
                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]">
                    <div className="flex justify-between items-center max-w-md mx-auto">
                    <button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}`}><Home size={24} strokeWidth={view === 'dashboard' ? 2.5 : 2} /><span className="text-[10px] font-medium">首頁</span></button>
                    <button onClick={() => setView('stats')} className={`flex flex-col items-center gap-1 p-2 ${view === 'stats' ? 'text-rose-500' : 'text-gray-400'}`}><PieChart size={24} strokeWidth={view === 'stats' ? 2.5 : 2} /><span className="text-[10px] font-medium">分析</span></button>
                    <div className="relative -top-6">
                        <button onClick={() => setView('add')} className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform"><Plus size={32} /></button>
                    </div>
                    <button onClick={() => setView('projects')} className={`flex flex-col items-center gap-1 p-2 ${view === 'projects' ? 'text-rose-500' : 'text-gray-400'}`}><Briefcase size={24} strokeWidth={view === 'projects' ? 2.5 : 2} /><span className="text-[10px] font-medium">專案</span></button>
                    <button onClick={() => setView('settings')} className={`flex flex-col items-center gap-1 p-2 ${view === 'settings' ? 'text-rose-500' : 'text-gray-400'}`}><Settings size={24} strokeWidth={view === 'settings' ? 2.5 : 2} /><span className="text-[10px] font-medium">設定</span></button>
                    </div>
                </div>
                </>
            )}
        </>
      )}
    </div>
  );
}