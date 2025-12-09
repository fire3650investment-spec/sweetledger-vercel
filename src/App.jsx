import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
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
  arrayUnion
} from 'firebase/firestore';
import { 
  Home, PieChart, Settings, Plus, Briefcase
} from 'lucide-react';

// Utils & Constants
import { INITIAL_LEDGER_STATE, DEFAULT_CATEGORIES, CATEGORIES, COLORS } from './utils/constants';
import { formatCurrency, generateId, callGemini } from './utils/helpers';

// Components
import DashboardView from './components/DashboardView';
import AddExpenseView from './components/AddExpenseView';
import StatsView from './components/StatsView';
import ProjectsView from './components/ProjectsView';
import SettingsView from './components/SettingsView';
import OnboardingView from './components/OnboardingView';
import EditTransactionModal from './components/EditTransactionModal';

// --- Configuration ---
const firebaseConfig = JSON.parse(window.__firebase_config || '{}');
const app = Object.keys(firebaseConfig).length > 0 ? initializeApp(firebaseConfig) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;
const appId = 'sweet-ledger-beta';

export default function SweetLedger() {
  if (!app) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center text-gray-600 bg-gray-50">
        <h2 className="text-xl font-bold mb-2 text-gray-800">尚未連接 Firebase</h2>
        <p>請檢查 Vercel 的 Environment Variables 設定。</p>
      </div>
    );
  }

  // --- Global State ---
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); 
  const [isInitializing, setIsInitializing] = useState(true);
  const [view, setView] = useState('onboarding'); 
  const [ledgerCode, setLedgerCode] = useState('');
  const [ledgerData, setLedgerData] = useState(null);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState('daily'); 

  // --- Add Expense State ---
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

  // Stats State
  const [statsMonth, setStatsMonth] = useState(new Date().toISOString().slice(0, 7)); 
  
  // Project & Category Management State
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState({ id: '', name: '', icon: 'project_daily' });
  
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [editingCategoryData, setEditingCategoryData] = useState({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex });
  
  // Settings & Avatar State
  const [myNickname, setMyNickname] = useState('');
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [tempAvatar, setTempAvatar] = useState(''); 

  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  // --- Effects ---
  useEffect(() => {
    if (user && !payer) {
        setPayer(user.uid);
    }
  }, [user]);

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

  // --- Handlers ---
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

  const handleAvatarSelect = (key) => setTempAvatar(key);

  const confirmAvatarUpdate = async () => {
    if (!ledgerCode || !tempAvatar) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`users.${user.uid}.avatar`]: tempAvatar });
    setIsAvatarModalOpen(false);
    setTempAvatar('');
  };

  const updateLedgerCurrency = async (val) => {
    if (!ledgerCode) return;
    const numVal = parseFloat(val);
    if(numVal) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        await updateDoc(docRef, { 'rates.JPY': numVal });
    }
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
    const zombieHostId = Object.keys(ledgerData.users).find(uid => 
        ledgerData.users[uid].role === 'host' && uid !== user.uid
    );
    if (!zombieHostId) { alert("目前帳本狀態正常，無需修復。"); return; }
    
    if (confirm("是否要繼承舊 Host 帳號並修復權限？")) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newUsers = { ...ledgerData.users };
        delete newUsers[zombieHostId];
        if (newUsers[user.uid]) newUsers[user.uid] = { ...newUsers[user.uid], role: 'host' };
        
        const newTransactions = ledgerData.transactions.map(tx => {
            let newTx = { ...tx };
            if (newTx.payer === zombieHostId) newTx.payer = user.uid;
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
        await updateDoc(docRef, { users: newUsers, transactions: newTransactions });
        alert("修復成功！");
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
  
  const handleSettleUp = async (amountToSettle, payeeName) => {
    if (!amountToSettle || amountToSettle <= 0) return;
    if (confirm(`確定要結清 ${formatCurrency(amountToSettle, ledgerData.currency)} 給 ${payeeName} 嗎？`)) {
        try {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            await updateDoc(docRef, { 
                transactions: arrayUnion({ 
                    id: generateId(), 
                    amount: amountToSettle, 
                    currency: ledgerData.currency, 
                    category: CATEGORIES.find(c => c.id === 'settlement'),
                    payer: user.uid,
                    splitType: 'settlement',
                    note: `還款給 ${payeeName}`, 
                    projectId: currentProjectId,
                    date: new Date().toISOString(),
                    isSettlement: true
                }) 
            });
            alert("還款紀錄已新增！");
        } catch (e) {
            console.error("Settle Up Error:", e);
            alert("結清失敗");
        }
    }
  };

  const createLedger = async () => {
    if (!user) { alert("請先登入"); return; }
    setLoading(true);
    try {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const userName = user.displayName || 'Host';
        const newLedger = {
            ...INITIAL_LEDGER_STATE,
            users: { [user.uid]: { name: userName, avatar: 'cat', role: 'host' } }
        };
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
        localStorage.setItem('sweet_ledger_code', code);
        setLedgerCode(code);
        setView('dashboard');
    } catch (e) {
        console.error("Create Error:", e);
        alert(`建立失敗: ${e.message}`);
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
      if (!currentData.users || !currentData.users[user.uid]) {
          const userName = user.displayName || 'Guest';
          const updatedUsers = { ...currentData.users, [user.uid]: { name: userName, avatar: 'dog', role: 'guest' } };
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

    if (splitType === 'custom') {
        const hostAmt = parseFloat(customSplitHost) || 0;
        const guestAmt = parseFloat(customSplitGuest) || 0;
        if (Math.round((hostAmt + guestAmt) * 100) / 100 !== Math.round(amountFloat * 100) / 100) {
            alert("付款金額總和必須等於支出總額！");
            setIsSubmittingTransaction(false);
            return;
        }
        const hostUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host');
        const guestUid = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'guest');
        customSplitData = {};
        if(hostUid) customSplitData[hostUid] = hostAmt;
        if(guestUid) customSplitData[guestUid] = guestAmt;
    } else if (splitType === 'self') {
        const myRole = ledgerData.users[user.uid]?.role;
        finalSplitType = myRole === 'host' ? 'host_all' : 'guest_all';
    } else if (splitType === 'partner') {
        const myRole = ledgerData.users[user.uid]?.role;
        finalSplitType = myRole === 'host' ? 'guest_all' : 'host_all';
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
              }),
              transactions: arrayUnion({ ...commonData, date: selectedDate, isSettlement: false }) 
          });
        } else {
          const currentXp = ledgerData.gamification?.xp || 0;
          const newTotalXp = currentXp + 50; 
          await updateDoc(docRef, { 
              transactions: arrayUnion({ ...commonData, date: selectedDate, isSettlement: false }), 
              'gamification.xp': newTotalXp, 
              'gamification.level': Math.floor(newTotalXp / 1000) + 1 
          });
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

     if (!result) { alert("AI 無法解析"); return; }
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
         alert("AI 解析失敗");
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
                if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
            }
            if (finalTranscript) setAiModalInput(prev => prev + finalTranscript);
        };
        recognition.onerror = (event) => { console.error("Speech error", event.error); setIsRecording(false); };
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
  
  const handleExport = () => {
    if (!ledgerData) return;
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

  // --- Render ---
  if (isInitializing) {
     return (<div className="min-h-screen flex items-center justify-center bg-pink-50"><div className="text-6xl animate-bounce">🍰</div></div>);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-100 pb-[env(safe-area-inset-bottom)]">
      {view === 'onboarding' && (
        <OnboardingView 
          user={user}
          handleGoogleLogin={handleGoogleLogin}
          createLedger={createLedger}
          joinLedger={joinLedger}
          ledgerCode={ledgerCode}
          setLedgerCode={setLedgerCode}
          loading={loading}
        />
      )}
      
      {view !== 'onboarding' && ledgerData && (
        <>
            {view === 'add' ? (
                <AddExpenseView 
                    ledgerData={ledgerData}
                    currentProjectId={currentProjectId}
                    user={user}
                    showSuccessAnimation={showSuccessAnimation}
                    isAiModalOpen={isAiModalOpen}
                    setIsAiModalOpen={setIsAiModalOpen}
                    aiModalInput={aiModalInput}
                    setAiModalInput={setAiModalInput}
                    isRecording={isRecording}
                    toggleVoiceRecording={toggleVoiceRecording}
                    handleAiModalSubmit={handleAiModalSubmit}
                    selectedImage={selectedImage}
                    isAiProcessing={isAiProcessing}
                    setView={setView}
                    fileInputRef={fileInputRef}
                    handleImageUpload={handleImageUpload}
                    date={date}
                    setDate={setDate}
                    currency={currency}
                    amount={amount}
                    setAmount={setAmount}
                    payer={payer}
                    setPayer={setPayer}
                    note={note}
                    setNote={setNote}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    splitType={splitType}
                    setSplitType={setSplitType}
                    customSplitHost={customSplitHost}
                    setCustomSplitHost={setCustomSplitHost}
                    customSplitGuest={customSplitGuest}
                    setCustomSplitGuest={setCustomSplitGuest}
                    handleCustomSplitChange={handleCustomSplitChange}
                    isSubscription={isSubscription}
                    setIsSubscription={setIsSubscription}
                    subCycle={subCycle}
                    setSubCycle={setSubCycle}
                    subPayDay={subPayDay}
                    setSubPayDay={setSubPayDay}
                    addTransaction={addTransaction}
                    isSubmittingTransaction={isSubmittingTransaction}
                />
            ) : (
                <>
                {view === 'dashboard' && (
                    <DashboardView 
                        ledgerData={ledgerData}
                        currentProjectId={currentProjectId}
                        setCurrentProjectId={setCurrentProjectId}
                        privacyMode={privacyMode}
                        setPrivacyMode={setPrivacyMode}
                        setIsEditTxModalOpen={setIsEditTxModalOpen}
                        setEditingTx={setEditingTx}
                        user={user}
                        handleSettleUp={handleSettleUp}
                    />
                )}
                {view === 'stats' && (
                    <StatsView 
                        ledgerData={ledgerData}
                        currentProjectId={currentProjectId}
                        statsMonth={statsMonth}
                        setStatsMonth={setStatsMonth}
                        privacyMode={privacyMode}
                        setEditingTx={setEditingTx}
                        setIsEditTxModalOpen={setIsEditTxModalOpen}
                    />
                )}
                {view === 'projects' && (
                    <ProjectsView 
                        ledgerData={ledgerData}
                        isEditingProject={isEditingProject}
                        setIsEditingProject={setIsEditingProject}
                        editingProjectData={editingProjectData}
                        setEditingProjectData={setEditingProjectData}
                        handleSaveProject={handleSaveProject}
                        handleDeleteProject={handleDeleteProject}
                    />
                )}
                {view === 'settings' && (
                    <SettingsView 
                        ledgerData={ledgerData}
                        user={user}
                        isEditingCategory={isEditingCategory}
                        setIsEditingCategory={setIsEditingCategory}
                        editingCategoryData={editingCategoryData}
                        setEditingCategoryData={setEditingCategoryData}
                        handleSaveCategory={handleSaveCategory}
                        handleDeleteCategory={handleDeleteCategory}
                        handleExport={handleExport}
                        handleResetAccount={handleResetAccount}
                        handleLogout={handleLogout}
                        isAvatarModalOpen={isAvatarModalOpen}
                        setIsAvatarModalOpen={setIsAvatarModalOpen}
                        myNickname={myNickname}
                        setMyNickname={setMyNickname}
                        updateNickname={updateNickname}
                        tempAvatar={tempAvatar}
                        handleAvatarSelect={handleAvatarSelect}
                        confirmAvatarUpdate={confirmAvatarUpdate}
                        handleFixIdentity={handleFixIdentity}
                        ledgerCode={ledgerCode}
                        updateLedgerCurrency={updateLedgerCurrency}
                    />
                )}
                
                {/* Global Edit Transaction Modal */}
                <EditTransactionModal 
                    isOpen={isEditTxModalOpen}
                    onClose={() => { setIsEditTxModalOpen(false); setEditingTx(null); }}
                    editingTx={editingTx}
                    setEditingTx={setEditingTx}
                    handleUpdateTransaction={handleUpdateTransaction}
                    handleDeleteTransaction={handleDeleteTransaction}
                    ledgerData={ledgerData}
                />

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