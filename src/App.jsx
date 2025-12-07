import React, { useState, useEffect, useRef, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged,
  signInWithCustomToken
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
  ChevronDown
} from 'lucide-react';

// --- Configuration & Constants ---

// Firebase Configuration
// 使用 window.__firebase_config 來確保 Vercel 環境變數的讀取
const firebaseConfig = JSON.parse(window.__firebase_config || '{}');

// 確保 Config 存在才初始化，避免隱性錯誤
const app = Object.keys(firebaseConfig).length > 0 ? initializeApp(firebaseConfig) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;

// 修正：強制使用我們已在 Firestore 中配置好的固定 App ID
const appId = 'sweet-ledger-beta';

// Gemini API Key
const GEMINI_API_KEY = "AIzaSyBWgsEEY_guFAZL-8aHD-d9q5d1gfdbBRc"; 

// Icon Mapping
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
  project_private: Wallet
};

// Categories
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

// Characters
const CHARACTERS = {
  cat: { id: 'cat', name: '貓咪', icon: 'cat', prompt: '你是一隻傲嬌毒舌的貓，覺得人類花錢很笨，回答簡短，句尾加「喵」。' },
  dog: { id: 'dog', name: '狗狗', icon: 'dog', prompt: '你是一隻超級熱情樂觀的狗，對什麼都充滿希望，句尾加「汪」。' },
  rabbit: { id: 'rabbit', name: '兔兔', icon: 'rabbit', prompt: '你是一隻容易緊張的兔子，擔心錢不夠用，說話溫柔，多用顏文字。' },
  bird: { id: 'bird', name: '啾啾', icon: 'bird', prompt: '你是一隻愛說八卦的鳥，對數字很敏感，句尾加「啾」。' },
};

// Initial Ledger Structure
const INITIAL_LEDGER_STATE = {
  users: {}, 
  transactions: [],
  subscriptions: [],
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
    selectedCategories: ['food', 'transport', 'shopping', 'housing', 'hotel', 'ticket', 'life', 'other'] 
  }
};

// --- Helper Functions ---

const formatCurrency = (amount, currency = 'TWD', privacy = false) => {
  if (privacy) return '****';
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
};

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const getIconComponent = (iconName) => {
  const Component = ICON_MAP[iconName];
  return Component || ICON_MAP['default'];
};

// --- Gemini Service ---

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

// --- Main Component ---

export default function SweetLedger() {
  // 1. 檢查配置是否正確載入
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
  const [view, setView] = useState('onboarding'); 
  const [ledgerCode, setLedgerCode] = useState('');
  const [ledgerData, setLedgerData] = useState(null);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState('daily'); // Global Active Project

  // Add Expense State
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [aiInput, setAiInput] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [currency, setCurrency] = useState('TWD'); 
  const [splitType, setSplitType] = useState('even'); 
  const [customSplitHost, setCustomSplitHost] = useState('');
  const [customSplitGuest, setCustomSplitGuest] = useState('');

  // Subscription State
  const [isSubscription, setIsSubscription] = useState(false);
  const [subName, setSubName] = useState('');
  const [subCycle, setSubCycle] = useState('monthly'); 
  const [subPayDay, setSubPayDay] = useState(''); 

  // Stats View State
  const [statsMonth, setStatsMonth] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM

  // Project Management State
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState({ id: '', name: '', icon: 'project_daily' });

  const fileInputRef = useRef(null);
  const importInputRef = useRef(null);

  // --- Auth & Data Sync ---

  useEffect(() => {
    const initAuth = async () => {
      // NOTE: window.__initial_auth_token is used for Vercel deployment logic
      const token = window.__initial_auth_token;
      try {
        if (token) {
          await signInWithCustomToken(auth, token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (error) {
        console.error("Auth Error:", error);
        alert("登入失敗，請檢查 Firebase Anonymous Auth 是否開啟");
      }
    };
    initAuth();
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false); // Auth 載入完成
      const savedCode = localStorage.getItem('sweet_ledger_code');
      if (savedCode) {
        setLedgerCode(savedCode);
        setView('dashboard');
      }
    });
  }, []);

  useEffect(() => {
    if (!user || !ledgerCode) return;
    
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLedgerData(data);
        if (data.currency) setCurrency(data.currency);
        
        // Initialize selected project if not set
        // if (!selectedProject && data.projects?.length > 0) {
        //     setSelectedProject(data.projects[0]);
        // }
      }
    });

    return () => unsubscribe();
  }, [user, ledgerCode]);

  // --- Actions ---

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

  const createLedger = async () => {
    if (!user) {
        if(authLoading) {
            alert("正在連線中...請稍後再試");
        } else {
            alert("無法登入，請重新整理頁面或檢查網路");
        }
        return;
    }
    setLoading(true);
    
    // Diagnostic Info
    const pid = firebaseConfig.projectId || 'unknown';
    console.log(`[Diagnostic] Connecting to Project: ${pid}, User: ${user.uid}`);

    try {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const newLedger = {
        ...INITIAL_LEDGER_STATE,
        users: {
            [user.uid]: { name: 'Host', avatar: '🐱', role: 'host' }
        }
        };
        
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
        localStorage.setItem('sweet_ledger_code', code);
        setLedgerCode(code);
        setView('dashboard');
    } catch (e) {
        console.error("Create Ledger Error:", e);
        if (e.code === 'permission-denied') {
            alert(`權限錯誤！(Permission Denied)
            
請確認您在 Vercel 設定的 Firebase 專案是否正確：
目前連線專案 ID: ${pid}

如果 ID 正確，請檢查該專案的 Firestore 規則是否已發布：
match /artifacts/{appId}/public/data/ledgers/{ledgerCode} { allow read, write: if request.auth != null; }`);
        } else {
            alert(`建立失敗: ${e.message}`);
        }
    }
    setLoading(false);
  };

  const joinLedger = async (code) => {
    if (!user) return;
    setLoading(true);
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentData = docSnap.data();
      const updatedUsers = {
        ...currentData.users,
        [user.uid]: { name: 'Guest', avatar: '🐶', role: 'guest' }
      };
      await updateDoc(docRef, { users: updatedUsers });
      localStorage.setItem('sweet_ledger_code', code);
      setLedgerCode(code);
      setView('dashboard');
    } else {
      console.error("找不到這個帳本代碼！");
      alert("找不到這個帳本代碼！");
    }
    setLoading(false);
  };

  const addTransaction = async () => {
    if (!amount || !ledgerData) return;
    
    const amountFloat = parseFloat(amount);
    const otherUserId = Object.keys(ledgerData.users).find(uid => uid !== user.uid);

    let customSplitData = null;
    let finalSplitType = splitType;

    if (splitType === 'custom') {
        const hostAmt = parseFloat(customSplitHost) || 0;
        const guestAmt = parseFloat(customSplitGuest) || 0;
        
        if (Math.round((hostAmt + guestAmt) * 100) / 100 !== Math.round(amountFloat * 100) / 100) {
            console.error("自定義分攤金額必須等於總金額！");
            return;
        }
        
        const hostUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
        const guestUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');

        customSplitData = {};
        if(hostUid) customSplitData[hostUid] = hostAmt;
        if(guestUid) customSplitData[guestUid] = guestAmt;
        
    } else if (splitType === 'even') {
        if (!otherUserId) {
            finalSplitType = 'host_all';
        }
    }

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

    const commonData = {
        id: generateId(),
        amount: amountFloat,
        currency: currency,
        category: selectedCategory,
        payer: user.uid,
        splitType: finalSplitType,
        customSplit: customSplitData,
        note: note || selectedCategory.name,
        projectId: currentProjectId, // Use Global Current Project
    };

    if (isSubscription) {
      await updateDoc(docRef, {
        subscriptions: arrayUnion({
            ...commonData,
            name: subName || selectedCategory.name,
            cycle: subCycle,
            payDay: parseInt(subPayDay) || 1,
            mode: 'infinite', 
            nextPaymentDate: new Date().toISOString(), 
        }),
      });
    } else {
      const earnedXp = Math.floor(amountFloat / 10);
      const newTotalXp = (ledgerData.gamification?.xp || 0) + earnedXp;
      
      await updateDoc(docRef, {
        transactions: arrayUnion({
            ...commonData,
            date: new Date().toISOString(),
            isSettlement: false
        }),
        'gamification.xp': newTotalXp,
        'gamification.level': Math.floor(newTotalXp / 1000) + 1
      });
    }

    setAmount('');
    setNote('');
    setAiInput('');
    setSelectedImage(null);
    setIsSubscription(false);
    setSubName('');
    setSubPayDay('');
    setSplitType('even');
    setCustomSplitHost('');
    setCustomSplitGuest('');
    
    setView('dashboard');
  };

  const handleAiAnalysis = async () => {
    if (!aiInput && !selectedImage) return;
    setIsAiProcessing(true);

    let prompt = `你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
    目前的日期是：${new Date().toISOString()}。
    
    請解析以下資訊：
    1. 金額 (amount, number)
    2. 類別 ID (categoryId, 從以下選擇: ${CATEGORIES.map(c => c.id).join(', ')})
    3. 備註 (note, string)
    4. 幣別 (currency, 預設 TWD)
    
    只回傳 JSON，不要 markdown 格式。例如: {"amount": 100, "categoryId": "food", "note": "午餐", "currency": "TWD"}`;

    if (aiInput) prompt += `\n使用者文字: "${aiInput}"`;
    if (selectedImage) prompt += `\n這是一張收據或發票的照片，請辨識總金額與可能的類別。`;

    const result = await callGemini(prompt, selectedImage ? selectedImage.split(',')[1] : null);
    
    setIsAiProcessing(false);
    
    try {
      const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      
      if (parsed.amount) setAmount(parsed.amount.toString());
      if (parsed.note) setNote(parsed.note);
      if (parsed.categoryId) {
        const cat = CATEGORIES.find(c => c.id === parsed.categoryId);
        if (cat) setSelectedCategory(cat);
      }
    } catch (e) {
      console.error("AI Parse Error", e);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getCharacterAdvice = async () => {
    const charId = ledgerData?.settings?.character || 'cat';
    const character = CHARACTERS[charId];
    // Calculate total based on current view/month or last 30 days. Let's use simple total.
    const total = ledgerData?.transactions.reduce((acc, curr) => acc + curr.amount, 0) || 0;
    
    const prompt = `${character.prompt} 
    目前這個月的總支出是 ${total} ${ledgerData.currency}。
    請根據你的個性給出一句短評（30字以內）。`;
    
    return await callGemini(prompt);
  };

  // --- Sub-Views ---

  const Dashboard = () => {
    if (!ledgerData) return null;

    // Filter by Project
    const projectTxs = ledgerData.transactions.filter(t => (t.projectId || 'daily') === currentProjectId);
    const currentMonthStr = new Date().toISOString().slice(0, 7);
    const thisMonthTxs = projectTxs.filter(t => t.date.startsWith(currentMonthStr));
    
    const groupedTransactions = useMemo(() => {
      const groups = {};
      const sorted = [...projectTxs].sort((a, b) => new Date(b.date) - new Date(a.date));
      
      sorted.forEach(tx => {
        const date = new Date(tx.date).toLocaleDateString('zh-TW');
        if (!groups[date]) groups[date] = [];
        groups[date].push(tx);
      });
      return groups;
    }, [projectTxs]);

    const totalExpense = thisMonthTxs.reduce((acc, curr) => acc + curr.amount, 0);

    const myShareTotal = thisMonthTxs.reduce((acc, tx) => {
        if (!ledgerData.users[user?.uid]) return acc;
        if (tx.splitType === 'even') return acc + (tx.amount / 2);
        if (tx.splitType === 'host_all') return ledgerData.users[user.uid]?.role === 'host' ? acc + tx.amount : acc;
        if (tx.splitType === 'guest_all') return ledgerData.users[user.uid]?.role === 'guest' ? acc + tx.amount : acc;
        if (tx.splitType === 'custom' && tx.customSplit) return acc + (tx.customSplit[user.uid] || 0);
        return acc;
    }, 0);

    const currentProjectName = ledgerData.projects?.find(p => p.id === currentProjectId)?.name || '日常開銷';
    const getHouseIcon = (level) => {
      if (level < 5) return '⛺️'; 
      if (level < 15) return '🏠'; 
      if (level < 30) return '🏡'; 
      return '🏰'; 
    };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+1rem)] px-4">
        {/* Project Switcher Header */}
        <div className="flex justify-between items-center mb-4">
           <div className="relative">
              <select 
                value={currentProjectId}
                onChange={(e) => setCurrentProjectId(e.target.value)}
                className="appearance-none bg-gray-900 text-white pl-4 pr-8 py-2 rounded-full font-bold text-sm outline-none shadow-lg shadow-gray-200"
              >
                 {ledgerData.projects?.map(p => (
                   <option key={p.id} value={p.id}>{p.name}</option>
                 ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                 <ChevronDown size={14} />
              </div>
           </div>
           
           <div className="flex items-center gap-2">
              <div className="bg-rose-100 px-3 py-1.5 rounded-full flex items-center gap-2">
                 <span className="text-lg">{getHouseIcon(ledgerData.gamification?.level || 1)}</span>
                 <span className="text-xs font-bold text-rose-600">Lv.{ledgerData.gamification?.level || 1}</span>
              </div>
              <button onClick={() => setPrivacyMode(!privacyMode)} className="p-2 bg-white rounded-full shadow-sm border border-gray-100">
                {privacyMode ? <EyeOff size={16} className="text-gray-400"/> : <Eye size={16} className="text-rose-500"/>}
              </button>
           </div>
        </div>

        {/* Priority Card: My Split Share */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg shadow-rose-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
          <p className="text-pink-100 mb-1 font-medium text-sm">我的本月分攤 ({currentProjectName})</p>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {formatCurrency(myShareTotal, ledgerData.currency, privacyMode)}
          </h1>
          <div className="flex items-center gap-2 text-sm text-pink-200">
             <span>專案總支出: {formatCurrency(totalExpense, ledgerData.currency, privacyMode)}</span>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-6">
          {Object.entries(groupedTransactions).map(([date, txs]) => (
            <div key={date}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 ml-1">{date}</h3>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
                {txs.map((tx, idx) => {
                  const CatIcon = getIconComponent(tx.category?.icon);
                  return (
                    <div key={tx.id} className={`flex items-center justify-between p-4 ${idx !== txs.length -1 ? 'border-b border-gray-50' : ''}`}>
                        <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${tx.category?.color?.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20 text-${tx.category?.color?.split('text-')[1]}`}>
                            <CatIcon size={20} />
                        </div>
                        <div>
                            <p className="font-medium text-gray-800">{tx.note}</p> 
                            <div className="flex items-center gap-2">
                                <p className="text-xs text-gray-400">{tx.category?.name}</p>
                            </div>
                        </div>
                        </div>
                        <span className="font-bold text-gray-800">
                        {formatCurrency(tx.amount, tx.currency, privacyMode)}
                        </span>
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

  const AddExpenseView = () => {
    if (!ledgerData) return null;

    const selectedCategoryIds = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories;
    const filteredCategories = CATEGORIES.filter(cat => selectedCategoryIds.includes(cat.id));

    const recentNotes = useMemo(() => {
        if (!ledgerData.transactions) return [];
        const notes = ledgerData.transactions
            .filter(t => t.category.id === selectedCategory.id)
            .map(t => t.note)
            .filter(n => n); 
        return [...new Set(notes)].slice(0, 10);
    }, [selectedCategory, ledgerData.transactions]);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    return (
      <div className="h-full flex flex-col pt-[calc(env(safe-area-inset-top)+1rem)] bg-white">
        {/* Top Actions: Project & Close */}
        <div className="px-4 flex justify-between items-center mb-4">
           <button onClick={() => setView('dashboard')} className="p-2 bg-gray-100 rounded-full">
             <X size={20} className="text-gray-600"/>
           </button>
           
           {/* Current Project Indicator (User cannot change here easily to avoid confusion, uses Global) */}
           <div className="flex-1 flex justify-center">
             <div className="bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full text-sm flex items-center gap-2">
                {ledgerData.projects?.find(p => p.id === currentProjectId)?.name}
             </div>
           </div>

           <div className="flex gap-2">
             <button onClick={() => fileInputRef.current?.click()} className="p-2 bg-blue-50 text-blue-600 rounded-full">
               <Camera size={20} />
             </button>
             <button onClick={() => isAiProcessing ? null : (aiInput ? handleAiAnalysis() : setAiInput('listening...'))} className={`p-2 rounded-full ${aiInput ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>
                {isAiProcessing ? <RefreshCw className="animate-spin" size={20}/> : <Mic size={20}/>} 
             </button>
           </div>
        </div>
        
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={(e) => { handleImageUpload(e); handleAiAnalysis(); }} />

        {/* AI Input Preview */}
        { (aiInput || selectedImage) && (
          <div className="mx-4 mb-4 p-3 bg-purple-50 rounded-xl flex items-center justify-between">
            <div className="text-sm text-purple-800 truncate flex-1 mr-2">{selectedImage ? "🖼️ 已選取圖片" : aiInput}</div>
          </div>
        )}

        {/* Amount Input (Stable) */}
        <div className="px-6 py-2 text-center">
           <div className="text-gray-400 text-sm mb-1">{currency}</div>
           <input 
             type="number" 
             value={amount}
             onChange={handleAmountChange}
             placeholder="0"
             className="w-full text-6xl font-bold text-gray-800 text-center outline-none placeholder-gray-200 bg-transparent"
             inputMode="decimal"
           />
        </div>

        {/* Note Input */}
        <div className="mx-4 bg-gray-50 p-4 rounded-xl shadow-sm mb-2 border border-gray-100">
          <input 
            type="text" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={`輸入備註 (例如: ${selectedCategory.name})...`}
            className="w-full outline-none text-gray-700 bg-transparent"
          />
        </div>

        {/* Recent Tags (History) */}
        {recentNotes.length > 0 && (
            <div className="mx-4 mb-4 flex flex-wrap gap-2">
                {recentNotes.map((n, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setNote(n)}
                        className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        {n}
                    </button>
                ))}
            </div>
        )}

        {/* Categories Grid */}
        <div className="flex-1 bg-gray-50 rounded-t-3xl p-6 overflow-y-auto">
           <div className="grid grid-cols-4 gap-4 mb-6">
             {filteredCategories.map(cat => {
               const CatIcon = getIconComponent(cat.icon);
               return (
                <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${selectedCategory.id === cat.id ? 'bg-white shadow-md scale-105 ring-2 ring-rose-200' : 'hover:bg-gray-100'}`}
                >
                    <div className={`text-2xl ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-400'}`}><CatIcon size={28} /></div>
                    <span className={`text-xs font-medium ${selectedCategory.id === cat.id ? 'text-gray-800' : 'text-gray-500'}`}>{cat.name}</span>
                </button>
               );
             })}
           </div>

           {/* Split & Options Section */}
           <div className="bg-white p-4 rounded-xl shadow-sm mb-20 space-y-4">
              <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                      <RefreshCw size={16} /> 
                      <span>固定支出</span>
                  </div>
                  <button onClick={() => setIsSubscription(!isSubscription)} className={`w-12 h-6 rounded-full transition-colors ${isSubscription ? 'bg-rose-500' : 'bg-gray-200'} relative`}>
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${isSubscription ? 'left-7' : 'left-1'}`}></div>
                  </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">分攤方式</span>
                      <select 
                        value={splitType}
                        onChange={(e) => setSplitType(e.target.value)}
                        className="text-sm bg-gray-100 p-1 px-2 rounded-lg outline-none"
                      >
                          <option value="even">均攤 (50/50)</option>
                          <option value="custom">自定義</option>
                      </select>
                  </div>

                  {splitType === 'custom' && (
                    <div className="flex gap-2 mt-2">
                        <input type="number" placeholder="Host" value={customSplitHost} onChange={(e) => setCustomSplitHost(e.target.value)} className="w-1/2 p-2 bg-gray-50 border rounded-lg text-sm text-center"/>
                        <input type="number" placeholder="Guest" value={customSplitGuest} onChange={(e) => setCustomSplitGuest(e.target.value)} className="w-1/2 p-2 bg-gray-50 border rounded-lg text-sm text-center"/>
                    </div>
                  )}
              </div>

              {isSubscription && (
                <div className="border-t border-gray-100 pt-4 space-y-3">
                    <input type="text" placeholder="訂閱名稱" value={subName} onChange={(e) => setSubName(e.target.value)} className="w-full p-2 border rounded-lg text-sm"/>
                    <div className="flex gap-2">
                        <select value={subCycle} onChange={(e) => setSubCycle(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm"><option value="monthly">每月</option><option value="weekly">每週</option></select>
                        <input type="number" placeholder="日 (1-31)" value={subPayDay} onChange={(e) => setSubPayDay(e.target.value)} className="w-1/2 p-2 border rounded-lg text-sm text-center"/>
                    </div>
                </div>
              )}
           </div>
        </div>

        {/* Confirm Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
          <button onClick={addTransaction} disabled={!amount} className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors ${amount ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-200 text-gray-400'}`}>
            <Check size={20}/> 完成記帳
          </button>
        </div>
      </div>
    );
  };

  const StatsView = () => {
    if (!ledgerData) return null;

    const handleMonthChange = (direction) => {
        const date = new Date(statsMonth + '-01');
        date.setMonth(date.getMonth() + direction);
        setStatsMonth(date.toISOString().slice(0, 7));
    };

    const filteredTxs = ledgerData.transactions.filter(t => t.date.startsWith(statsMonth) && (t.projectId || 'daily') === currentProjectId);
    
    // Contribution Calculation (Restored)
    const hostId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
    const guestId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
    
    const hostTotal = filteredTxs.filter(t => t.payer === hostId).reduce((a,c) => a + c.amount, 0);
    const guestTotal = filteredTxs.filter(t => t.payer === guestId).reduce((a,c) => a + c.amount, 0);
    const total = hostTotal + guestTotal;
    
    const hostRatio = total > 0 ? (hostTotal / total) * 100 : 50;
    const guestRatio = total > 0 ? (guestTotal / total) * 100 : 50;

    // Category Stats Calculation
    const categoryStats = useMemo(() => {
       const stats = {};
       filteredTxs.forEach(tx => {
          if (!stats[tx.category.id]) stats[tx.category.id] = 0;
          stats[tx.category.id] += tx.amount;
       });
       return Object.entries(stats)
         .map(([id, total]) => ({ id, total, ...CATEGORIES.find(c => c.id === id) }))
         .sort((a, b) => b.total - a.total);
    }, [filteredTxs]);

    const totalExpense = filteredTxs.reduce((acc, curr) => acc + curr.amount, 0);

    // Conic Gradient String for Pie Chart
    const pieChartGradient = useMemo(() => {
        if (totalExpense === 0) return 'gray 0% 100%';
        let gradientStr = '';
        let currentPercent = 0;
        categoryStats.forEach(stat => {
            const percent = (stat.total / totalExpense) * 100;
            const endPercent = currentPercent + percent;
            gradientStr += `${stat.hex || '#ccc'} ${currentPercent}% ${endPercent}%, `;
            currentPercent = endPercent;
        });
        return `conic-gradient(${gradientStr.slice(0, -2)})`;
    }, [categoryStats, totalExpense]);

    const [advice, setAdvice] = useState('');

    useEffect(() => { getCharacterAdvice().then(setAdvice); }, [statsMonth]);

    const CharIcon = getIconComponent(CHARACTERS[ledgerData.settings?.character || 'cat']?.icon);

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">消費分析</h2>
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button onClick={() => handleMonthChange(-1)} className="p-1"><ChevronLeft size={16}/></button>
                <span className="text-sm font-bold w-20 text-center">{statsMonth}</span>
                <button onClick={() => handleMonthChange(1)} className="p-1"><ChevronRight size={16}/></button>
            </div>
         </div>

         {/* Character Advice */}
         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex gap-4">
            <div className="text-gray-800"><CharIcon size={40} /></div>
            <div className="flex-1">
               <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none text-sm text-gray-700 leading-relaxed">
                 {advice || "分析中..."}
               </div>
            </div>
         </div>
         
         {/* Contribution Ratio (Restored) */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-600 font-bold mb-4">消費貢獻度 (支付金額)</h3>
            
            <div className="flex justify-between items-center mb-2 text-sm">
               <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   <span className="text-gray-600">Host</span>
               </div>
               <div className="flex items-center gap-2">
                   <span className="font-bold text-gray-800">{formatCurrency(hostTotal, ledgerData.currency)}</span>
                   <span className="text-xs text-gray-400">({Math.round(hostRatio)}%)</span>
               </div>
            </div>
            
            <div className="flex justify-between items-center mb-3 text-sm">
               <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                   <span className="text-gray-600">Guest</span>
               </div>
               <div className="flex items-center gap-2">
                   <span className="font-bold text-gray-800">{formatCurrency(guestTotal, ledgerData.currency)}</span>
                   <span className="text-xs text-gray-400">({Math.round(guestRatio)}%)</span>
               </div>
            </div>

            <div className="h-4 w-full bg-gray-100 rounded-full flex overflow-hidden">
               <div style={{ width: `${hostRatio}%` }} className="bg-blue-500 transition-all duration-1000"></div>
               <div style={{ width: `${guestRatio}%` }} className="bg-pink-500 transition-all duration-1000"></div>
            </div>
         </div>

         {/* Pie Chart */}
         <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center">
            <h3 className="text-gray-600 font-bold mb-6 w-full text-left">分類支出佔比</h3>
            <div className="relative w-48 h-48 rounded-full mb-6" style={{ background: pieChartGradient }}>
               <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-sm text-gray-400">總支出</span>
                  <span className="text-xl font-bold text-gray-800">{formatCurrency(totalExpense, ledgerData.currency)}</span>
               </div>
            </div>
            
            <div className="w-full space-y-3">
               {categoryStats.map(stat => (
                   <div key={stat.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stat.hex }}></div>
                         <span className="text-sm text-gray-600 font-medium">{stat.name}</span>
                      </div>
                      <div className="text-sm">
                         <span className="font-bold text-gray-800 mr-2">{formatCurrency(stat.total, ledgerData.currency)}</span>
                         <span className="text-gray-400 text-xs">{Math.round((stat.total/totalExpense)*100)}%</span>
                      </div>
                   </div>
               ))}
            </div>
         </div>
      </div>
    )
  }

  const ProjectsView = () => {
    if (!ledgerData) return null;

    if (isEditingProject) {
        return (
            <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{editingProjectData.id ? '編輯專案' : '新增專案'}</h2>
                <div className="space-y-4">
                    <input 
                        type="text" 
                        value={editingProjectData.name} 
                        onChange={(e) => setEditingProjectData({...editingProjectData, name: e.target.value})}
                        placeholder="專案名稱"
                        className="w-full p-4 bg-gray-50 rounded-xl outline-none"
                    />
                    <div className="grid grid-cols-4 gap-2">
                        {['project_daily', 'project_travel', 'project_house', 'project_private'].map(icon => {
                            const IconCmp = getIconComponent(icon);
                            return (
                                <button key={icon} onClick={() => setEditingProjectData({...editingProjectData, icon})} className={`p-4 rounded-xl flex justify-center ${editingProjectData.icon === icon ? 'bg-rose-100 text-rose-600' : 'bg-gray-50'}`}>
                                    <IconCmp size={24} />
                                </button>
                            )
                        })}
                    </div>
                    <button onClick={handleSaveProject} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold">儲存</button>
                    <button onClick={() => setIsEditingProject(false)} className="w-full bg-gray-100 text-gray-500 py-4 rounded-xl font-bold">取消</button>
                </div>
            </div>
        )
    }

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">專案管理</h2>
            <button 
                onClick={() => { setIsEditingProject(true); setEditingProjectData({id:'', name:'', icon:'project_daily'}); }}
                className="bg-gray-900 text-white p-2 rounded-lg"
            >
                <Plus size={20} />
            </button>
         </div>
         
         <div className="grid grid-cols-1 gap-4">
            {ledgerData.projects?.map(p => {
              const ProjIcon = getIconComponent(p.icon);
              return (
              <div key={p.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                 <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600">
                        <ProjIcon size={24} />
                     </div>
                     <div>
                        <div className="font-bold text-gray-800">{p.name}</div>
                        <div className="text-xs text-gray-400">{p.id === 'daily' ? '預設' : '自訂專案'}</div>
                     </div>
                 </div>
                 {p.id !== 'daily' && (
                     <div className="flex gap-2">
                        <button onClick={() => { setEditingProjectData(p); setIsEditingProject(true); }} className="p-2 text-gray-400 hover:text-gray-600"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteProject(p.id)} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
                     </div>
                 )}
              </div>
            )})}
         </div>
      </div>
    );
  };
  
  const SettingsView = () => {
    if (!ledgerData) return null;

    const [exportSplitMode, setExportSplitMode] = useState(false); // false: full, true: split
    const [importTargetProject, setImportTargetProject] = useState('daily');
    
    // Export CSV
    const handleExport = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Date,Project,Category,Note,Amount,Payer,SplitType\n";

        ledgerData.transactions.forEach(tx => {
            let amount = tx.amount;
            if (exportSplitMode) {
               // Calculate ONLY my share
               if (tx.splitType === 'even') amount = tx.amount / 2;
               else if (tx.splitType === 'custom' && tx.customSplit) amount = tx.customSplit[user.uid] || 0;
               else if (tx.splitType === 'host_all') amount = ledgerData.users[user.uid]?.role === 'host' ? tx.amount : 0;
               else if (tx.splitType === 'guest_all') amount = ledgerData.users[user.uid]?.role === 'guest' ? tx.amount : 0;
            }

            const row = [
                new Date(tx.date).toLocaleDateString(),
                ledgerData.projects.find(p => p.id === tx.projectId)?.name || 'Unknown',
                tx.category.name,
                tx.note,
                amount,
                ledgerData.users[tx.payer]?.name || 'Unknown',
                tx.splitType
            ].join(",");
            csvContent += row + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `sweet_ledger_export_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
    };

    // Import CSV (Simple Implementation)
    const handleImport = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (evt) => {
            const text = evt.target.result;
            const rows = text.split('\n').slice(1); // Skip header
            const newTxs = [];
            
            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length < 5) return;
                
                // Simple mapping, assuming format: Date,Project,Category,Note,Amount...
                // Or user provided format. Let's assume standard format we export or generic:
                // Date, Category, Amount, Note
                const dateStr = cols[0];
                const catName = cols[2]; // match index from export
                const note = cols[3];
                const amt = parseFloat(cols[4]);
                
                if (!amt) return;

                const cat = CATEGORIES.find(c => c.name === catName) || CATEGORIES.find(c => c.id === 'other');
                
                newTxs.push({
                    id: generateId(),
                    date: new Date(dateStr).toISOString(),
                    amount: amt,
                    currency: ledgerData.currency,
                    category: cat,
                    payer: user.uid,
                    splitType: 'even',
                    note: note || cat.name,
                    projectId: importTargetProject,
                    isSettlement: false
                });
            });

            if (newTxs.length > 0) {
                const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
                // Batch update via arrayUnion might be too big, but for simple import loop:
                // Better to read, concat, write.
                const currentTxs = ledgerData.transactions;
                await updateDoc(docRef, { transactions: [...currentTxs, ...newTxs] });
                alert(`成功匯入 ${newTxs.length} 筆資料！`);
            }
        };
        reader.readAsText(file);
    };

    const selectedCategories = ledgerData.settings?.selectedCategories || INITIAL_LEDGER_STATE.settings.selectedCategories;
    const currentCharacter = ledgerData.settings?.character || 'cat';
    const currentRateJPY = ledgerData.rates?.JPY || 0.23;
    const [rateInput, setRateInput] = useState(currentRateJPY.toString());

    const handleCategoryToggle = (id) => {
      let newSelected = [...selectedCategories];
      if (selectedCategories.includes(id)) {
        newSelected = selectedCategories.filter(c => c !== id);
      } else if (selectedCategories.length < 8) {
        newSelected = [...selectedCategories, id];
      }
      updateLedgerSetting('selectedCategories', newSelected);
    };

    const handleRateChange = async () => {
      const newRate = parseFloat(rateInput);
      if (isNaN(newRate) || newRate <= 0) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      await updateDoc(docRef, { 'rates.JPY': newRate });
    };

    return (
      <div className="pb-24 pt-[calc(env(safe-area-inset-top)+2rem)] px-4 bg-gray-50 min-h-screen">
         <h2 className="text-2xl font-bold text-gray-800 mb-6">帳本設定</h2>

         {/* Data Backup */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2"><FileText size={18}/> 資料備份與還原</h3>
            
            {/* Export */}
            <div className="mb-4 border-b border-gray-100 pb-4">
                <p className="text-sm text-gray-500 mb-2">匯出 CSV</p>
                <div className="flex items-center gap-2 mb-2">
                    <button onClick={() => setExportSplitMode(false)} className={`px-3 py-1 text-xs rounded-full border ${!exportSplitMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-500'}`}>完整金額</button>
                    <button onClick={() => setExportSplitMode(true)} className={`px-3 py-1 text-xs rounded-full border ${exportSplitMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-500'}`}>已分攤金額</button>
                </div>
                <button onClick={handleExport} className="w-full py-2 border border-gray-300 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Download size={16}/> 下載 .csv
                </button>
            </div>

            {/* Import */}
            <div>
                <p className="text-sm text-gray-500 mb-2">匯入 CSV</p>
                <div className="flex gap-2 mb-2">
                    <select 
                        value={importTargetProject} 
                        onChange={(e) => setImportTargetProject(e.target.value)}
                        className="text-xs bg-gray-100 rounded p-1 outline-none"
                    >
                        {ledgerData.projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                </div>
                <input type="file" ref={importInputRef} accept=".csv" className="hidden" onChange={handleImport}/>
                <button onClick={() => importInputRef.current?.click()} className="w-full py-2 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-500 flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Upload size={16}/> 選擇檔案匯入
                </button>
            </div>
         </div>

         {/* AI Character */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3">AI 角色</h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(CHARACTERS).map(char => {
                 const CharIcon = getIconComponent(char.icon);
                 return (
                 <button 
                   key={char.id}
                   onClick={() => updateLedgerSetting('character', char.id)}
                   className={`p-3 rounded-xl border-2 transition-colors flex items-center gap-2 ${currentCharacter === char.id ? 'border-rose-500 bg-rose-50' : 'border-gray-200 bg-white'}`}
                 >
                   <CharIcon size={24} />
                   <p className="text-sm font-medium">{char.name}</p>
                 </button>
              )})}
            </div>
         </div>
         
         {/* Categories */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
             <h3 className="font-bold text-gray-700 mb-3">常用分類 (最多 8 個)</h3>
             <div className="grid grid-cols-4 gap-2">
                {CATEGORIES.map(cat => {
                   const isSelected = selectedCategories.includes(cat.id);
                   const CatIcon = getIconComponent(cat.icon);
                   return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryToggle(cat.id)}
                        disabled={!isSelected && selectedCategories.length >= 8}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition-colors ${isSelected ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-gray-200 text-gray-400'}`}
                      >
                         <CatIcon size={20} />
                         <span className="text-[10px] font-medium">{cat.name}</span>
                      </button>
                   );
                })}
             </div>
         </div>
         
         {/* Currency */}
         <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-gray-700 mb-3">匯率設定</h3>
            {ledgerData.currency === 'TWD' && (
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">1 JPY =</span>
                    <input type="number" value={rateInput} onChange={(e) => setRateInput(e.target.value)} onBlur={handleRateChange} className="w-20 bg-gray-100 rounded-lg p-2 text-center" step="0.001"/>
                    <span className="text-sm text-gray-500">TWD</span>
                </div>
            )}
         </div>
      </div>
    )
  }

  // --- Main Render Switch ---

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-100 pb-[env(safe-area-inset-bottom)]">
      {view === 'onboarding' && (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
            <div className="text-6xl mb-4">🍰</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">情侶記帳</h1>
            <p className="text-gray-500 mb-8">讓記帳成為情侶間的小樂趣</p>
            <button onClick={createLedger} className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold text-lg mb-4 shadow-lg shadow-rose-200 active:scale-95 transition-transform">{loading ? "建立中..." : "建立新帳本"}</button>
            <div className="relative my-6"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div><div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">或</span></div></div>
            <div className="flex gap-2"><input type="text" placeholder="輸入邀請碼" className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500" onChange={(e) => setLedgerCode(e.target.value.toUpperCase())} />
            <button onClick={() => joinLedger(ledgerCode)} className="bg-gray-800 text-white px-6 rounded-xl font-bold active:scale-95 transition-transform whitespace-nowrap">加入</button></div>
            </div>
        </div>
      )}
      {/* ... Keep rest of the return logic (Loading and Main App) same as before ... */}
      {view !== 'onboarding' && !ledgerData && (<div className="h-screen flex items-center justify-center bg-gray-50"><span className="animate-pulse text-2xl text-rose-500">❤️ 載入中...</span></div>)}
      {view !== 'onboarding' && ledgerData && (<>{view === 'add' ? (<AddExpenseView />) : (<>{view === 'dashboard' && <Dashboard />}{view === 'stats' && <StatsView />}{view === 'projects' && <ProjectsView />}{view === 'settings' && <SettingsView />}<div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6"><div className="flex justify-between items-center max-w-md mx-auto"><button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}`}><Home size={24} strokeWidth={view === 'dashboard' ? 2.5 : 2} /><span className="text-[10px] font-medium">首頁</span></button><button onClick={() => setView('stats')} className={`flex flex-col items-center gap-1 p-2 ${view === 'stats' ? 'text-rose-500' : 'text-gray-400'}`}><PieChart size={24} strokeWidth={view === 'stats' ? 2.5 : 2} /><span className="text-[10px] font-medium">分析</span></button><div className="relative -top-6"><button onClick={() => setView('add')} className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform"><Plus size={32} /></button></div><button onClick={() => setView('projects')} className={`flex flex-col items-center gap-1 p-2 ${view === 'projects' ? 'text-rose-500' : 'text-gray-400'}`}><Briefcase size={24} strokeWidth={view === 'projects' ? 2.5 : 2} /><span className="text-[10px] font-medium">專案</span></button><button onClick={() => setView('settings')} className={`flex flex-col items-center gap-1 p-2 ${view === 'settings' ? 'text-rose-500' : 'text-gray-400'}`}><Settings size={24} strokeWidth={view === 'settings' ? 2.5 : 2} /><span className="text-[10px] font-medium">設定</span></button></div></div></>)}</>)}
    </div>
  );
}