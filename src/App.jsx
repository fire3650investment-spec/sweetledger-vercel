import React, { useState, useEffect, useRef } from 'react';
import { 
  doc, 
  updateDoc, 
  arrayUnion,
  // 移除 getAuth, onAuthStateChanged 等，因已移至 Context
  // 移除 initializeApp, getFirestore 等
} from 'firebase/firestore';
import { 
  Home, PieChart, Settings, Plus, Briefcase 
} from 'lucide-react';

import { DEFAULT_CATEGORIES, CATEGORIES, COLORS } from './utils/constants';
import { formatCurrency, generateId, callGemini } from './utils/helpers';
// 引入新的 Context Hooks 與 Firebase 實例
import { db, appId } from './utils/firebase';
import { useAuth } from './contexts/AuthContext';
import { useLedger } from './contexts/LedgerContext';

import DashboardView from './components/DashboardView';
import AddExpenseView from './components/AddExpenseView';
import StatsView from './components/StatsView';
import ProjectsView from './components/ProjectsView';
import SettingsView from './components/SettingsView';
import OnboardingView from './components/OnboardingView';
import EditTransactionModal from './components/EditTransactionModal';
import SubscriptionsView from './components/SubscriptionsView';

export default function SweetLedger() {
  // 1. 從 Context 取得狀態與方法
  const { user, login, logout } = useAuth();
  const { 
    ledgerCode, 
    setLedgerCode, 
    ledgerData, 
    isInitializing, 
    loading: ledgerLoading,
    createLedger, 
    joinLedger 
  } = useLedger();

  // 2. UI 狀態 (UI State) - 這些屬於 View 層級，保留在 App.jsx
  const [view, setView] = useState('onboarding'); 
  const [privacyMode, setPrivacyMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState('daily'); 

  // Add Expense State
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [aiInput, setAiInput] = useState(''); // 保留變數但目前可能未使用，視需求
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  
  const [currency, setCurrency] = useState('TWD'); 
  const [payer, setPayer] = useState(''); 
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); 
  
  const [splitType, setSplitType] = useState('even'); 
  const [customSplitHost, setCustomSplitHost] = useState('');
  const [customSplitGuest, setCustomSplitGuest] = useState('');
  const [isSubmittingTransaction, setIsSubmittingTransaction] = useState(false);

  // Modals & Sub-views State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalInput, setAiModalInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const [isEditTxModalOpen, setIsEditTxModalOpen] = useState(false);
  const [editingTx, setEditingTx] = useState(null);

  const [isSubscription, setIsSubscription] = useState(false);
  const [subCycle, setSubCycle] = useState('monthly'); 
  const [subPayDay, setSubPayDay] = useState(''); 

  const [statsMonth, setStatsMonth] = useState(new Date().toISOString().slice(0, 7)); 
  
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [editingProjectData, setEditingProjectData] = useState({ id: '', name: '', icon: 'project_daily' });
  
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [editingCategoryData, setEditingCategoryData] = useState({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex });
  
  const [myNickname, setMyNickname] = useState('');
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [tempAvatar, setTempAvatar] = useState(''); 

  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  // 3. Effects
  // 當使用者登入且有資料時，自動切換到 Dashboard，並設定預設付款人
  useEffect(() => {
    if (user && ledgerCode) {
        setView('dashboard');
        if (!payer) setPayer(user.uid);
    } else if (!isInitializing && !ledgerCode) {
        setView('onboarding');
    }
  }, [user, ledgerCode, isInitializing]);

  // 同步使用者暱稱與幣別設定 (從 ledgerData 讀取)
  useEffect(() => {
    if (ledgerData && user) {
        if (ledgerData.currency) setCurrency(ledgerData.currency);
        if (ledgerData.users && ledgerData.users[user.uid]) {
            setMyNickname(ledgerData.users[user.uid].name);
        }
    }
  }, [ledgerData, user]);

  // 4. Handlers (保留寫入邏輯，但引用新的 db 與 ledgerCode)
  
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

  const handleLogoutWrapper = async () => {
      if(confirm('確定要登出嗎？')) {
          await logout();
          setView('onboarding');
      }
  };

  const handleAvatarSelect = (key) => setTempAvatar(key);

  const confirmAvatarUpdate = async () => {
    if (!ledgerCode || !tempAvatar || !user) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`users.${user.uid}.avatar`]: tempAvatar });
    setIsAvatarModalOpen(false);
    setTempAvatar('');
  };

  const updateLedgerCurrency = async (currencyKey, val) => {
    if (!ledgerCode || !currentProjectId || !ledgerData) return;
    const numVal = parseFloat(val);
    if (numVal && numVal > 0) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newProjects = ledgerData.projects.map(p => {
            if (p.id === currentProjectId) {
                return { 
                    ...p, 
                    rates: { ...(p.rates || { JPY: 0.23, THB: 1 }), [currencyKey]: numVal } 
                };
            }
            return p;
        });
        await updateDoc(docRef, { projects: newProjects });
    }
  };

  const handleOpenAddExpense = (mode) => {
      setView('add');
      if (mode === 'ai') {
          setIsAiModalOpen(true);
      } else {
          setIsAiModalOpen(false);
      }
  };
  
  const updateNickname = async () => {
    if (!ledgerCode || !myNickname || !user) return;
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
    
    const projectWithRates = {
        ...editingProjectData,
        rates: editingProjectData.rates || { JPY: 0.23, THB: 1 } 
    };

    if (editingProjectData.id) {
        newProjects = newProjects.map(p => p.id === editingProjectData.id ? projectWithRates : p);
    } else {
        newProjects.push({ ...projectWithRates, id: generateId() });
    }
    await updateDoc(docRef, { projects: newProjects });
    setIsEditingProject(false);
    setEditingProjectData({ id: '', name: '', icon: 'project_daily' });
  };

  const handleDeleteProject = async (projectId) => {
    if (confirm('確定要刪除這個專案嗎？（警告：該專案下的所有帳務紀錄將一併刪除且無法復原）')) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newProjects = ledgerData.projects.filter(p => p.id !== projectId);
        const newTransactions = ledgerData.transactions.filter(t => t.projectId !== projectId);
        const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.projectId !== projectId);

        await updateDoc(docRef, { 
            projects: newProjects,
            transactions: newTransactions,
            subscriptions: newSubscriptions
        });
        if (currentProjectId === projectId) setCurrentProjectId('daily');
    }
  };

  const handleDeleteSubscription = async (subToDelete) => {
    if (!ledgerCode || !subToDelete) return;
    if (confirm(`確定要取消「${subToDelete.name}」的固定扣款嗎？`)) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newSubscriptions = (ledgerData.subscriptions || []).filter(s => 
            s.id !== subToDelete.id
        );
        await updateDoc(docRef, { subscriptions: newSubscriptions });
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
  
  const handleSettleUp = async (amountToSettle, payeeName, payerId) => {
    if (!amountToSettle || amountToSettle <= 0) return;
    if (confirm(`確定要結清 ${formatCurrency(amountToSettle, 'TWD')} 給 ${payeeName} 嗎？`)) {
        try {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            await updateDoc(docRef, { 
                transactions: arrayUnion({ 
                    id: generateId(), 
                    amount: amountToSettle, 
                    currency: 'TWD', 
                    category: CATEGORIES.find(c => c.id === 'settlement'),
                    payer: payerId, 
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

    // Optimistic UI update
    setIsSubmittingTransaction(false);
    setView('dashboard');

    setTimeout(() => {
        setAmount(''); setNote(''); setAiInput(''); 
        setIsSubscription(false); setSubCycle('monthly'); setSubPayDay(''); 
        setSplitType('even'); setCustomSplitHost(''); setCustomSplitGuest('');
        setDate(new Date().toISOString().slice(0, 10));
    }, 500);

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
          let nextDate = new Date(selectedDate);
          if (subCycle === 'monthly') {
              nextDate.setMonth(nextDate.getMonth() + 1);
              if (subPayDay) {
                  const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
                  const targetDay = Math.min(parseInt(subPayDay), daysInNextMonth);
                  nextDate.setDate(targetDay);
              }
          } else if (subCycle === 'weekly') {
              nextDate.setDate(nextDate.getDate() + 7);
          }
          
          await updateDoc(docRef, { 
              subscriptions: arrayUnion({ 
                  ...commonData, 
                  name: note || selectedCategory.name, 
                  cycle: subCycle, 
                  payDay: parseInt(subPayDay) || 1, 
                  mode: 'infinite', 
                  nextPaymentDate: nextDate.toISOString(),
              }),
              transactions: arrayUnion({ ...commonData, date: selectedDate, isSettlement: false }) 
          });
        } else {
          await updateDoc(docRef, { 
              transactions: arrayUnion({ ...commonData, date: selectedDate, isSettlement: false }), 
          });
        }
    } catch (e) {
        console.error("Background Write Error:", e);
        alert("⚠️ 連線異常，剛剛的記帳可能未成功寫入，請檢查網路。");
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
     if (!aiModalInput) return; 
     setIsAiModalOpen(false);
     setIsAiProcessing(true);
     let prompt = `你是一個記帳助手。請分析使用者的輸入，並回傳一個 JSON 物件。
    目前的日期是：${new Date().toISOString()}。
    可用的分類 ID: ${(ledgerData?.customCategories || DEFAULT_CATEGORIES).map(c=>c.id).join(', ')}
    請解析：1. 金額 (amount) 2. 類別 ID (categoryId) 3. 備註 (note) 4. 幣別 (currency, 預設 TWD)
    只回傳 JSON。`;
     if (aiModalInput) prompt += `\n使用者文字: "${aiModalInput}"`;

     const result = await callGemini(prompt, null); 
     setIsAiProcessing(false);
     setAiModalInput('');

     if (!result) { alert("AI 無法解析"); return; }
     try { 
         const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim(); 
         const parsed = JSON.parse(cleanJson); 
         if (parsed.amount) setAmount(parsed.amount.toString()); 
         if (parsed.note) setNote(parsed.note); 
         if (parsed.currency) setCurrency(parsed.currency); 
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

  const handleExport = () => {
    if (!ledgerData) return;
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date,Project,Category,Note,Amount,Currency,Payer,SplitType\n";
    ledgerData.transactions.forEach(tx => {
        const row = [new Date(tx.date).toLocaleDateString(), ledgerData.projects.find(p => p.id === tx.projectId)?.name || 'Unknown', tx.category.name, tx.note, tx.amount, tx.currency || 'TWD', ledgerData.users[tx.payer]?.name || 'Unknown', tx.splitType].join(",");
        csvContent += row + "\n";
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `sweet_ledger_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
  };

  // 5. Render
  // App Shell Loading State
  if (isInitializing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-rose-500 animate-in fade-in">
         <div style={{fontSize: '4rem', animation: 'sweet-bounce 1s infinite'}}>🍰</div>
         <p className="mt-4 font-bold animate-pulse">SweetLedger Loading...</p>
      </div>
    );
  }

  // 檢查是否缺少 Firebase Config (通常是部署環境問題)
  if (!db) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center text-gray-600 bg-gray-50 z-[200]">
            <h2 className="text-xl font-bold mb-2 text-gray-800">尚未連接 Firebase</h2>
            <p>請檢查 Vercel 的 Environment Variables 設定。</p>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-rose-100 pb-[env(safe-area-inset-bottom)] animate-in fade-in duration-500 relative">
      
        {view === 'onboarding' && (
            <OnboardingView 
                user={user}
                handleGoogleLogin={login}
                createLedger={() => createLedger(user)}
                joinLedger={(code) => joinLedger(code, user)}
                ledgerCode={ledgerCode}
                setLedgerCode={setLedgerCode}
                loading={ledgerLoading}
            />
        )}
        
        {view !== 'onboarding' && ledgerData && (
            <>
                {/* Full Screen Overlay Views */}
                <div className={view === 'add' ? 'block h-full' : 'hidden'}><AddExpenseView 
                    ledgerData={ledgerData}
                    currentProjectId={currentProjectId}
                    user={user}
                    isAiModalOpen={isAiModalOpen}
                    setIsAiModalOpen={setIsAiModalOpen}
                    aiModalInput={aiModalInput}
                    setAiModalInput={setAiModalInput}
                    isRecording={isRecording}
                    toggleVoiceRecording={toggleVoiceRecording}
                    handleAiModalSubmit={handleAiModalSubmit}
                    isAiProcessing={isAiProcessing}
                    setView={setView}
                    fileInputRef={fileInputRef}
                    date={date}
                    setDate={setDate}
                    currency={currency}
                    setCurrency={setCurrency}
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
                /></div>
                <div className={view === 'subscriptions' ? 'block h-full' : 'hidden'}><SubscriptionsView
                    ledgerData={ledgerData}
                    user={user}
                    setView={setView}
                    handleDeleteSubscription={handleDeleteSubscription}
                /></div>

                {/* Tab Views Container */}
                <div className={['dashboard', 'stats', 'projects', 'settings'].includes(view) ? 'block h-full' : 'hidden'}>
                    <div className={view === 'dashboard' ? 'block' : 'hidden'}><DashboardView 
                        ledgerData={ledgerData}
                        currentProjectId={currentProjectId}
                        setCurrentProjectId={setCurrentProjectId}
                        privacyMode={privacyMode}
                        setPrivacyMode={setPrivacyMode}
                        setIsEditTxModalOpen={setIsEditTxModalOpen}
                        setEditingTx={setEditingTx}
                        user={user}
                        handleSettleUp={handleSettleUp}
                        handleOpenAddExpense={handleOpenAddExpense} 
                    /></div>
                    <div className={view === 'stats' ? 'block' : 'hidden'}><StatsView 
                        ledgerData={ledgerData}
                        currentProjectId={currentProjectId}
                        statsMonth={statsMonth}
                        setStatsMonth={setStatsMonth}
                        privacyMode={privacyMode}
                        setEditingTx={setEditingTx}
                        setIsEditTxModalOpen={setIsEditTxModalOpen}
                    /></div>
                    <div className={view === 'projects' ? 'block' : 'hidden'}><ProjectsView 
                        ledgerData={ledgerData}
                        isEditingProject={isEditingProject}
                        setIsEditingProject={setIsEditingProject}
                        editingProjectData={editingProjectData}
                        setEditingProjectData={setEditingProjectData}
                        handleSaveProject={handleSaveProject}
                        handleDeleteProject={handleDeleteProject}
                    /></div>
                    <div className={view === 'settings' ? 'block' : 'hidden'}><SettingsView 
                        ledgerData={ledgerData}
                        user={user}
                        setView={setView} 
                        isEditingCategory={isEditingCategory}
                        setIsEditingCategory={setIsEditingCategory}
                        editingCategoryData={editingCategoryData}
                        setEditingCategoryData={setEditingCategoryData}
                        handleSaveCategory={handleSaveCategory}
                        handleDeleteCategory={handleDeleteCategory}
                        handleExport={handleExport}
                        handleResetAccount={handleResetAccount}
                        handleLogout={handleLogoutWrapper}
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
                        currentProjectId={currentProjectId}
                    /></div>

                    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]">
                        <div className="flex justify-between items-center max-w-md mx-auto">
                        <button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}`}><Home size={24} strokeWidth={view === 'dashboard' ? 2.5 : 2} /><span className="text-[10px] font-medium">首頁</span></button>
                        <button onClick={() => setView('stats')} className={`flex flex-col items-center gap-1 p-2 ${view === 'stats' ? 'text-rose-500' : 'text-gray-400'}`}><PieChart size={24} strokeWidth={view === 'stats' ? 2.5 : 2} /><span className="text-[10px] font-medium">分析</span></button>
                        
                        <div className="relative -top-6">
                            <button 
                                onClick={() => setView('add')} 
                                className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform"
                            >
                                <Plus size={32} />
                            </button>
                        </div>

                        <button onClick={() => setView('projects')} className={`flex flex-col items-center gap-1 p-2 ${view === 'projects' ? 'text-rose-500' : 'text-gray-400'}`}><Briefcase size={24} strokeWidth={view === 'projects' ? 2.5 : 2} /><span className="text-[10px] font-medium">專案</span></button>
                        <button onClick={() => setView('settings')} className={`flex flex-col items-center gap-1 p-2 ${view === 'settings' ? 'text-rose-500' : 'text-gray-400'}`}><Settings size={24} strokeWidth={view === 'settings' ? 2.5 : 2} /><span className="text-[10px] font-medium">設定</span></button>
                        </div>
                    </div>
                </div>
                
                <EditTransactionModal 
                    isOpen={isEditTxModalOpen}
                    onClose={() => { setIsEditTxModalOpen(false); setEditingTx(null); }}
                    editingTx={editingTx}
                    setEditingTx={setEditingTx}
                    handleUpdateTransaction={handleUpdateTransaction}
                    handleDeleteTransaction={handleDeleteTransaction}
                    ledgerData={ledgerData}
                />
            </>
        )}
    </div>
  );
}