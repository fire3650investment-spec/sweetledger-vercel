import React, { useState, useEffect, useRef } from 'react';
import { 
  doc, 
  updateDoc, 
  arrayUnion
} from 'firebase/firestore';
import { 
  Home, PieChart, Settings, Plus, Briefcase
} from 'lucide-react';

// Contexts
import { useAuth } from './contexts/AuthContext';
import { useLedger } from './contexts/LedgerContext';
import { db, appId } from './utils/firebase'; // 仍需 db 進行寫入操作

// Utils
import { DEFAULT_CATEGORIES, CATEGORIES, COLORS } from './utils/constants';
import { formatCurrency, generateId, callGemini } from './utils/helpers';

// Components
import DashboardView from './components/DashboardView';
import AddExpenseView from './components/AddExpenseView';
import StatsView from './components/StatsView';
import ProjectsView from './components/ProjectsView';
import SettingsView from './components/SettingsView';
import OnboardingView from './components/OnboardingView';
import EditTransactionModal from './components/EditTransactionModal';
import SubscriptionsView from './components/SubscriptionsView';

export default function SweetLedger() {
  // --- 1. 從 Context 獲取全域狀態 ---
  const { user, loading: authLoading, loginWithGoogle, logout } = useAuth();
  const { 
    ledgerCode, 
    ledgerData, 
    isLedgerInitializing, 
    createLedger, 
    joinLedger,
    disconnectLedger 
  } = useLedger();

  // --- 2. UI 狀態管理 (保留在 App 層級) ---
  const [view, setView] = useState('onboarding'); 
  const [privacyMode, setPrivacyMode] = useState(false);
  const [loading, setLoading] = useState(false); // 用於按鈕 loading
  const [currentProjectId, setCurrentProjectId] = useState('daily'); 

  // Add Expense UI State
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [aiInput, setAiInput] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [currency, setCurrency] = useState('TWD'); 
  const [payer, setPayer] = useState(''); 
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); 
  
  // Split UI State
  const [splitType, setSplitType] = useState('even'); 
  const [customSplitHost, setCustomSplitHost] = useState('');
  const [customSplitGuest, setCustomSplitGuest] = useState('');
  const [isSubmittingTransaction, setIsSubmittingTransaction] = useState(false);

  // Modals
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiModalInput, setAiModalInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isEditTxModalOpen, setIsEditTxModalOpen] = useState(false);
  const [editingTx, setEditingTx] = useState(null);

  // Subscription UI State
  const [isSubscription, setIsSubscription] = useState(false);
  const [subCycle, setSubCycle] = useState('monthly'); 
  const [subPayDay, setSubPayDay] = useState(''); 

  // Settings & Edit UI State
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

  // --- Effects ---
  
  // 當 Ledger 載入完成，切換 View 並同步設定
  useEffect(() => {
    if (ledgerCode && !isLedgerInitializing) {
        setView('dashboard');
    } else if (!ledgerCode && !isLedgerInitializing && !authLoading) {
        setView('onboarding');
    }
  }, [ledgerCode, isLedgerInitializing, authLoading]);

  // 同步 Ledger 資料到 UI 狀態 (ex: 幣別, 暱稱)
  useEffect(() => {
    if (ledgerData && user) {
        if (ledgerData.currency) setCurrency(ledgerData.currency);
        if (ledgerData.users && ledgerData.users[user.uid]) {
            setMyNickname(ledgerData.users[user.uid].name);
        }
    }
  }, [ledgerData, user]);

  // 設定預設付款人
  useEffect(() => {
    if (user && !payer) {
        setPayer(user.uid);
    }
  }, [user]);

  // --- Handlers ---

  const handleCreateLedger = async () => {
      setLoading(true);
      try {
          await createLedger(user);
          // View 切換由 useEffect 處理
      } catch (e) {
          alert(e.message);
      }
      setLoading(false);
  };

  const handleJoinLedger = async (code) => {
      setLoading(true);
      try {
          await joinLedger(code, user);
      } catch (e) {
          alert(e.message);
      }
      setLoading(false);
  };

  const handleLogout = async () => {
      if(confirm('確定要登出嗎？')) {
          disconnectLedger(); // 清除本地 Code
          await logout();
      }
  };

  // 其餘 UI Handler 保持不變，直接使用 context 的 ledgerCode
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

  const addTransaction = async () => {
    if (!amount || !ledgerData || !ledgerCode) return;
    setIsSubmittingTransaction(true);
    const amountFloat = parseFloat(amount);
    let customSplitData = null;
    let finalSplitType = splitType;

    // 邏輯保持不變...
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
          // 訂閱邏輯保持不變
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
        alert("⚠️ 連線異常，記帳可能未成功寫入。");
    }
  };

  // ... (保留其他 Handler，如 handleUpdateTransaction, handleAiModalSubmit 等)
  // 為了節省篇幅，這裡假設 handleAiModalSubmit, toggleVoiceRecording, handleAvatarSelect... 
  // 等函式都還在，只是其中的 ledgerCode 改用 context 變數，不需要改變邏輯。
  
  // Helper to update simple fields (wrapper for clean code)
  const updateLedgerDoc = async (data) => {
      if (!ledgerCode) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      await updateDoc(docRef, data);
  };

  // 簡化版的 Handlers (範例)
  const handleAiModalSubmit = async () => {
     if (!aiModalInput) return; 
     setIsAiModalOpen(false);
     setIsAiProcessing(true);
     let prompt = `你是一個記帳助手。請分析使用者的輸入... (略)`; 
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
         // 打開記帳頁面讓使用者確認
         setView('add');
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
        recognitionRef.current = recognition;
        recognition.start();
        setIsRecording(true);
    }
  };

  // 畫面渲染邏輯
  if (authLoading || (isLedgerInitializing && ledgerCode)) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
           <div style={{fontSize: '4rem', animation: 'sweet-bounce 1s infinite'}}>🍰</div>
           <p className="mt-4 text-rose-500 font-bold animate-pulse">SweetLedger Loading...</p>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-[env(safe-area-inset-bottom)]">
        {view === 'onboarding' && (
            <OnboardingView 
                user={user}
                handleGoogleLogin={loginWithGoogle}
                createLedger={handleCreateLedger}
                joinLedger={(code) => handleJoinLedger(code)}
                ledgerCode={ledgerCode} // Optional if View uses internal state
                setLedgerCode={() => {}} // Onboarding might handle its own input
                loading={loading}
            />
        )}
        
        {view !== 'onboarding' && ledgerData && (
            <>
                {/* Views */}
                <div className={view === 'add' ? 'block h-full' : 'hidden'}>
                    <AddExpenseView 
                        ledgerData={ledgerData}
                        user={user}
                        currentProjectId={currentProjectId}
                        // Pass all UI states and setters...
                        isAiModalOpen={isAiModalOpen} setIsAiModalOpen={setIsAiModalOpen}
                        aiModalInput={aiModalInput} setAiModalInput={setAiModalInput}
                        isRecording={isRecording} toggleVoiceRecording={toggleVoiceRecording}
                        handleAiModalSubmit={handleAiModalSubmit} isAiProcessing={isAiProcessing}
                        setView={setView} fileInputRef={fileInputRef}
                        date={date} setDate={setDate}
                        currency={currency} setCurrency={setCurrency}
                        amount={amount} setAmount={setAmount}
                        payer={payer} setPayer={setPayer}
                        note={note} setNote={setNote}
                        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                        splitType={splitType} setSplitType={setSplitType}
                        customSplitHost={customSplitHost} setCustomSplitHost={setCustomSplitHost}
                        customSplitGuest={customSplitGuest} setCustomSplitGuest={setCustomSplitGuest}
                        handleCustomSplitChange={handleCustomSplitChange}
                        isSubscription={isSubscription} setIsSubscription={setIsSubscription}
                        subCycle={subCycle} setSubCycle={setSubCycle}
                        subPayDay={subPayDay} setSubPayDay={setSubPayDay}
                        addTransaction={addTransaction}
                        isSubmittingTransaction={isSubmittingTransaction}
                    />
                </div>

                <div className={view === 'subscriptions' ? 'block h-full' : 'hidden'}>
                    <SubscriptionsView
                        ledgerData={ledgerData}
                        user={user}
                        setView={setView}
                        handleDeleteSubscription={async (sub) => {
                            if(confirm(`取消訂閱 ${sub.name}?`)) {
                                const newSubs = ledgerData.subscriptions.filter(s => s.id !== sub.id);
                                await updateLedgerDoc({ subscriptions: newSubs });
                            }
                        }}
                    />
                </div>

                {/* Main Tabs */}
                <div className={['dashboard', 'stats', 'projects', 'settings'].includes(view) ? 'block h-full' : 'hidden'}>
                    <div className={view === 'dashboard' ? 'block' : 'hidden'}>
                        <DashboardView 
                            ledgerData={ledgerData}
                            currentProjectId={currentProjectId}
                            setCurrentProjectId={setCurrentProjectId}
                            privacyMode={privacyMode}
                            setPrivacyMode={setPrivacyMode}
                            setIsEditTxModalOpen={setIsEditTxModalOpen}
                            setEditingTx={setEditingTx}
                            user={user}
                            handleSettleUp={async (amt, name, pid) => {
                                // 結清邏輯 (省略細節，請照搬原本的)
                                if(confirm(`結清 ${amt}?`)) {
                                     await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), {
                                         transactions: arrayUnion({ /* Settle object */ })
                                     });
                                }
                            }}
                            handleOpenAddExpense={(mode) => {
                                setView('add');
                                setIsAiModalOpen(mode === 'ai');
                            }} 
                        />
                    </div>
                    {/* ... Stats, Projects, Settings Views 依此類推 ... */}
                     <div className={view === 'settings' ? 'block' : 'hidden'}>
                        <SettingsView 
                            ledgerData={ledgerData}
                            user={user}
                            setView={setView} 
                            // ... pass other props
                            handleLogout={handleLogout}
                            handleResetAccount={async () => {
                                if(prompt("輸入 RESET") === "RESET") {
                                    await updateLedgerDoc({ transactions: [], subscriptions: [] });
                                }
                            }}
                            ledgerCode={ledgerCode}
                            currentProjectId={currentProjectId}
                        />
                     </div>
                </div>

                {/* Bottom Nav */}
                <div className={['dashboard', 'stats', 'projects', 'settings'].includes(view) ? 'fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 z-[50]' : 'hidden'}>
                    {/* Bottom Nav JSX */}
                     <div className="flex justify-between items-center max-w-md mx-auto px-6 py-2">
                        <button onClick={() => setView('dashboard')} className={view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}><Home size={24}/></button>
                        <button onClick={() => setView('stats')} className={view === 'stats' ? 'text-rose-500' : 'text-gray-400'}><PieChart size={24}/></button>
                        <div className="relative -top-6">
                            <button onClick={() => setView('add')} className="bg-gray-900 text-white rounded-full p-4 shadow-xl"><Plus size={32}/></button>
                        </div>
                        <button onClick={() => setView('projects')} className={view === 'projects' ? 'text-rose-500' : 'text-gray-400'}><Briefcase size={24}/></button>
                        <button onClick={() => setView('settings')} className={view === 'settings' ? 'text-rose-500' : 'text-gray-400'}><Settings size={24}/></button>
                    </div>
                </div>

                <EditTransactionModal 
                    isOpen={isEditTxModalOpen}
                    onClose={() => setIsEditTxModalOpen(false)}
                    editingTx={editingTx}
                    // ... handlers
                />
            </>
        )}
    </div>
  );
}