// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, PieChart, Settings, Plus, Briefcase
} from 'lucide-react';

// Contexts
import { useAuth } from './contexts/AuthContext';
import { useLedger } from './contexts/LedgerContext';

// Utils
import { DEFAULT_CATEGORIES, COLORS } from './utils/constants';
import { callGemini } from './utils/helpers';

// Components
import DashboardView from './components/DashboardView';
import AddExpenseView from './components/AddExpenseView';
import StatsView from './components/StatsView';
import ProjectsView from './components/ProjectsView';
import SettingsView from './components/SettingsView';
import OnboardingView from './components/OnboardingView';
import DecisionView from './components/DecisionView';
import EditTransactionModal from './components/EditTransactionModal';
import SubscriptionsView from './components/SubscriptionsView';

export default function SweetLedger() {
  // --- Context Hooks ---
  const { user, loading: authLoading, loginWithGoogle, logout } = useAuth();
  const { 
    ledgerCode, 
    ledgerData, 
    isLedgerInitializing, 
    createLedger, 
    joinLedger,
    disconnectLedger,
    setLedgerCode,
    checkUserBinding,
    // Actions from Context
    addTransaction: ctxAddTransaction,
    updateTransaction: ctxUpdateTransaction,
    deleteTransaction: ctxDeleteTransaction,
    deleteSubscription: ctxDeleteSubscription,
    settleUp: ctxSettleUp,
    saveProject: ctxSaveProject,
    deleteProject: ctxDeleteProject,
    reorderProjects: ctxReorderProjects,
    updateProjectRates: ctxUpdateProjectRates,
    saveCategory: ctxSaveCategory,
    deleteCategory: ctxDeleteCategory,
    reorderCategories: ctxReorderCategories,
    updateUserSetting: ctxUpdateUserSetting,
    resetAccount: ctxResetAccount,
    fixIdentity: ctxFixIdentity
  } = useLedger();

  // --- UI State ---
  
  // [極速啟動優化] Lazy State Initialization
  const [view, setView] = useState(() => {
      return localStorage.getItem('sweet_ledger_code') ? 'dashboard' : 'onboarding';
  });

  const [addExpenseKey, setAddExpenseKey] = useState(0);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [currentProjectId, setCurrentProjectId] = useState('daily'); 
  const [pendingInviteCode, setPendingInviteCode] = useState('');

  // Add Expense State
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORIES[0]);
  const [aiInput, setAiInput] = useState('');
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [currency, setCurrency] = useState('TWD'); 
  const [payer, setPayer] = useState(''); 
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); 
  
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

  // --- Logic & Effects ---

  // [Fix] 切換頁面時自動捲動至頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // [極速啟動優化] 路由邏輯
  useEffect(() => {
    const decideView = async () => {
        if (ledgerCode && user && ledgerData) {
            if (view === 'onboarding') setView('dashboard');
            return;
        }

        if (user && !ledgerCode && !isLedgerInitializing) {
            setLoading(true);
            if (pendingInviteCode) {
                try {
                    await joinLedger(pendingInviteCode, user);
                    setPendingInviteCode('');
                } catch (e) {
                    alert(`加入失敗: ${e.message}`);
                    setPendingInviteCode('');
                    setView('decision');
                }
            } 
            else {
                const cloudCode = await checkUserBinding(user.uid);
                if (cloudCode) {
                    setLedgerCode(cloudCode); 
                    localStorage.setItem('sweet_ledger_code', cloudCode);
                } else {
                    setView('decision');
                }
            }
            setLoading(false);
            return;
        }

        if (!user && !ledgerCode && !authLoading) {
            setView('onboarding');
        }
    };
    decideView();
  }, [ledgerCode, isLedgerInitializing, authLoading, user, pendingInviteCode, ledgerData]);

  // Sync Ledger Data to UI State
  useEffect(() => {
    if (ledgerData && user) {
        if (ledgerData.currency) setCurrency(ledgerData.currency);
        if (ledgerData.users && ledgerData.users[user.uid]) {
            setMyNickname(ledgerData.users[user.uid].name);
        }
    }
    if (user && !payer) setPayer(user.uid);
  }, [ledgerData, user]);


  // --- Handlers ---
  
  const handleGoogleLogin = async () => {
    try {
        await loginWithGoogle();
    } catch (error) {
        console.error("Google Login Error:", error);
        alert(`登入失敗: ${error.message}`);
    }
  };

  const handleJoinWithCode = async (code) => {
      setPendingInviteCode(code);
      await handleGoogleLogin();
  };

  const handleCreateLedgerFn = async () => {
    setLoading(true);
    try {
        await createLedger(user);
    } catch (e) {
        alert(e.message);
    }
    setLoading(false);
  };

  const handleJoinLedgerFn = async (code) => {
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
          disconnectLedger();
          await logout();
          setView('onboarding');
      }
  };

  // Avatar Logic
  const handleAvatarSelect = (key) => setTempAvatar(key);
  const confirmAvatarUpdate = async () => {
    if (!tempAvatar) return;
    await ctxUpdateUserSetting('avatar', tempAvatar);
    setIsAvatarModalOpen(false);
    setTempAvatar('');
  };

  // Nickname Logic
  const updateNickname = async () => {
    if (!myNickname) return;
    await ctxUpdateUserSetting('name', myNickname);
    alert("暱稱已更新！");
  };

  // Open Add Expense Logic
  const handleOpenAddExpense = (mode) => {
      setAddExpenseKey(prev => prev + 1);
      setView('add');
      if (mode === 'ai') {
          setIsAiModalOpen(true);
      } else {
          setIsAiModalOpen(false);
      }
  };

  // Settings Actions wrappers
  const handleResetAccount = async () => {
      const confirmStr = prompt("警告：此操作將刪除所有交易紀錄且無法復原！\n請輸入 RESET 確認重置：");
      if (confirmStr === "RESET") {
        await ctxResetAccount();
        alert("帳本已重置。");
      }
  };

  const handleFixIdentity = async () => {
    if (confirm("是否要繼承舊 Host 帳號並修復權限？")) {
        await ctxFixIdentity();
        alert("修復成功！");
    }
  };

  // Project Actions wrappers
  const handleSaveProject = async () => {
    if (!editingProjectData.name) return;
    await ctxSaveProject(editingProjectData);
    setIsEditingProject(false);
    setEditingProjectData({ id: '', name: '', icon: 'project_daily' });
  };

  const handleDeleteProject = async (projectId) => {
    if (confirm('確定要刪除這個專案嗎？（警告：該專案下的所有帳務紀錄將一併刪除且無法復原）')) {
        await ctxDeleteProject(projectId);
        if (currentProjectId === projectId) setCurrentProjectId('daily');
    }
  };

  const updateLedgerCurrency = async (currencyKey, val) => {
    await ctxUpdateProjectRates(currentProjectId, currencyKey, val);
  };

  const handleReorderProjects = async (newProjects) => {
      await ctxReorderProjects(newProjects);
  };

  // Subscription Actions
  const handleDeleteSubscription = async (subToDelete) => {
    if (!subToDelete) return;
    if (confirm(`確定要取消「${subToDelete.name}」的固定扣款嗎？`)) {
        await ctxDeleteSubscription(subToDelete.id);
    }
  };

  // Category Actions wrappers
  const handleSaveCategory = async () => {
    if (!editingCategoryData.name) return;
    await ctxSaveCategory(editingCategoryData);
    setIsEditingCategory(false);
  };

  const handleDeleteCategory = async (catId) => {
     if (confirm('確定要刪除這個分類嗎？')) {
        await ctxDeleteCategory(catId);
     }
  };

  const handleReorderCategories = async (newCategories) => {
      await ctxReorderCategories(newCategories);
  };
  
  // Settle Up Action
  const handleSettleUp = async (amountToSettle, payeeName, payerId) => {
    if (!amountToSettle || amountToSettle <= 0) return;
    if (confirm(`確定要結清給 ${payeeName} 嗎？`)) {
        try {
            await ctxSettleUp({
                amount: amountToSettle,
                payerId: payerId,
                payeeName: payeeName,
                projectId: currentProjectId
            });
            alert("還款紀錄已新增！");
        } catch (e) {
            console.error("Settle Up Error:", e);
            alert("結清失敗");
        }
    }
  };

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

  // Transaction Logic
  const addTransaction = async () => {
    if (!amount || !ledgerData || !ledgerCode) return;
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

    // Optimistic UI update - Close view immediately
    setView('dashboard');

    setTimeout(() => {
        setAmount(''); setNote(''); setAiInput(''); 
        setIsSubscription(false); setSubCycle('monthly'); setSubPayDay(''); 
        setSplitType('even'); setCustomSplitHost(''); setCustomSplitGuest('');
        setDate(new Date().toISOString().slice(0, 10));
        setIsSubmittingTransaction(false);
    }, 500);

    try {
        await ctxAddTransaction({
            amount: amountFloat,
            currency,
            category: selectedCategory,
            payer,
            splitType: finalSplitType,
            customSplit: customSplitData,
            note,
            projectId: currentProjectId,
            date,
            isSubscription,
            subCycle,
            subPayDay
        });
    } catch (e) {
        console.error("Transaction Error:", e);
        alert("⚠️ 記帳失敗，請檢查網路。");
    }
  };

  const handleUpdateTransaction = async () => {
    if (!editingTx) return;
    await ctxUpdateTransaction(editingTx);
    setIsEditTxModalOpen(false);
    setEditingTx(null);
  };

  const handleDeleteTransaction = async () => {
     if (!editingTx) return;
     if (confirm('確定要刪除這筆紀錄嗎？')) {
        await ctxDeleteTransaction(editingTx.id);
        setIsEditTxModalOpen(false);
        setEditingTx(null);
     }
  };

  // AI & Voice
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


  // --- Render ---

  // [極速啟動優化] Loading State
  const hasCachedData = ledgerCode && ledgerData && user;
  const shouldShowLoading = !hasCachedData && authLoading; 
  const isWaitingForFirstData = user && ledgerCode && !ledgerData && isLedgerInitializing;

  if (shouldShowLoading || isWaitingForFirstData || (loading && !ledgerData)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 z-[200] relative">
         <div style={{fontSize: '4rem', animation: 'sweet-bounce 1s infinite'}}>🍰</div>
         <p style={{
           marginTop: '1rem',
           color: '#db2777',
           fontWeight: 'bold',
           fontSize: '0.875rem',
           animation: 'sweet-fade 1.5s infinite alternate'
         }}>
            {loading ? '正在同步資料...' : 'SweetLedger Loading...'}
         </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-[env(safe-area-inset-bottom)] animate-in fade-in duration-500 relative">
        
        {view === 'onboarding' && (
            <OnboardingView 
                handleGoogleLogin={handleGoogleLogin}
                loading={loading}
                onJoinWithCode={handleJoinWithCode}
            />
        )}

        {view === 'decision' && (
            <DecisionView 
                user={user}
                onCreate={handleCreateLedgerFn}
                onJoin={handleJoinLedgerFn}
            />
        )}
        
        {/* Main App Views */}
        {view !== 'onboarding' && view !== 'decision' && ledgerData && user && (
            <>
                <div className={view === 'add' ? 'block h-full' : 'hidden'}>
                     <AddExpenseView 
                        key={addExpenseKey}
                        ledgerData={ledgerData}
                        user={user}
                        currentProjectId={currentProjectId}
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
                     />
                </div>
                <div className={view === 'subscriptions' ? 'block h-full' : 'hidden'}>
                    <SubscriptionsView
                        ledgerData={ledgerData}
                        user={user}
                        setView={setView}
                        handleDeleteSubscription={handleDeleteSubscription}
                    />
                </div>

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
                            handleSettleUp={handleSettleUp}
                            handleOpenAddExpense={handleOpenAddExpense} 
                        />
                    </div>
                    <div className={view === 'stats' ? 'block' : 'hidden'}>
                        <StatsView 
                            ledgerData={ledgerData}
                            currentProjectId={currentProjectId}
                            statsMonth={statsMonth}
                            setStatsMonth={setStatsMonth}
                            privacyMode={privacyMode}
                            setEditingTx={setEditingTx}
                            setIsEditTxModalOpen={setIsEditTxModalOpen}
                        />
                    </div>
                    <div className={view === 'projects' ? 'block' : 'hidden'}>
                        <ProjectsView 
                            ledgerData={ledgerData}
                            isEditingProject={isEditingProject}
                            setIsEditingProject={setIsEditingProject}
                            editingProjectData={editingProjectData}
                            setEditingProjectData={setEditingProjectData}
                            handleSaveProject={handleSaveProject}
                            handleDeleteProject={handleDeleteProject}
                            handleReorderProjects={handleReorderProjects}
                        />
                    </div>
                    <div className={view === 'settings' ? 'block' : 'hidden'}>
                        <SettingsView 
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
                            currentProjectId={currentProjectId}
                            handleReorderCategories={handleReorderCategories}
                        />
                    </div>

                    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]">
                        <div className="flex justify-between items-center max-w-md mx-auto">
                        <button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}`}><Home size={24} strokeWidth={view === 'dashboard' ? 2.5 : 2} /><span className="text-[10px] font-medium">首頁</span></button>
                        <button onClick={() => setView('stats')} className={`flex flex-col items-center gap-1 p-2 ${view === 'stats' ? 'text-rose-500' : 'text-gray-400'}`}><PieChart size={24} strokeWidth={view === 'stats' ? 2.5 : 2} /><span className="text-[10px] font-medium">分析</span></button>
                        
                        <div className="relative -top-6">
                            <button 
                                onClick={() => handleOpenAddExpense()} 
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