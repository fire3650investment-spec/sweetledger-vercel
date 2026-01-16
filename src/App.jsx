// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
    Home, PieChart, Settings, Plus, Briefcase, RefreshCcw, AlertCircle
} from 'lucide-react';

// Contexts
import { useAuth } from './contexts/AuthContext';
import { useLedger } from './contexts/LedgerContext';

// Utils
import { formatCurrency, callGemini, safeLocalStorage } from './utils/helpers';
import { DEFAULT_CATEGORIES, COLORS } from './utils/constants';

// Components
// Components - Lazy Load for Performance
// Components - Lazy Load for Performance
// [Optimization] Dashboard is LCP, eager load it!
import DashboardView from './components/DashboardView';
const AddExpenseView = React.lazy(() => import('./components/AddExpenseView'));
const StatsView = React.lazy(() => import('./components/StatsView'));
const ProjectsView = React.lazy(() => import('./components/ProjectsView'));
const SettingsView = React.lazy(() => import('./components/SettingsView'));
const OnboardingView = React.lazy(() => import('./components/OnboardingView'));
const DecisionView = React.lazy(() => import('./components/DecisionView'));
// [Optimization] Modal is heavy but not critical for first paint. Lazy load it.
const EditTransactionModal = React.lazy(() => import('./components/EditTransactionModal'));
const SubscriptionsView = React.lazy(() => import('./components/SubscriptionsView'));
const PrivacyView = React.lazy(() => import('./components/PrivacyView'));

// Loading Component
const PageLoading = () => (
    <div className="flex h-full items-center justify-center p-10">
        <div className="w-8 h-8 border-4 border-rose-100 border-t-rose-500 rounded-full animate-spin"></div>
    </div>
);

export default function SweetLedger() {
    const { user, loading: authLoading, loginWithGoogle, loginWithApple, logout } = useAuth();
    const {
        ledgerCode, ledgerData, isLedgerInitializing,
        createLedger, joinLedger, disconnectLedger,
        setLedgerCode, checkUserBinding,
        addTransaction, updateTransaction, deleteTransaction,
        deleteSubscription, settleUp,
        saveProject, deleteProject, reorderProjects, updateProjectRates,
        saveCategory, deleteCategory, reorderCategories,
        updateUserSetting, resetAccount, fixIdentity
    } = useLedger();

    // --- UI State (Only Navigation & Global Settings) ---
    const [view, setView] = useState(() => safeLocalStorage.getItem('sweet_ledger_code') ? 'dashboard' : 'onboarding');
    const [privacyMode, setPrivacyMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentProjectId, setCurrentProjectId] = useState(() => safeLocalStorage.getItem('sweet_last_project_id') || 'daily');
    const [pendingInviteCode, setPendingInviteCode] = useState(() => {
        // [New] 支援 URL 一鍵邀請連結 (/?invite=CODE)
        const params = new URLSearchParams(window.location.search);
        return params.get('invite') || '';
    });

    // Modals
    const [isEditTxModalOpen, setIsEditTxModalOpen] = useState(false);
    const [editingTx, setEditingTx] = useState(null);

    // Settings & Edit Sub-states
    const [isEditingProject, setIsEditingProject] = useState(false);
    const [editingProjectData, setEditingProjectData] = useState({ id: '', name: '', icon: 'project_daily' });
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [editingCategoryData, setEditingCategoryData] = useState({ id: '', name: '', icon: 'food', color: COLORS[0].class, hex: COLORS[0].hex });
    const [myNickname, setMyNickname] = useState('');
    const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
    const [tempAvatar, setTempAvatar] = useState('');

    const [statsMonth, setStatsMonth] = useState(new Date().toISOString().slice(0, 7));

    // [Performance] Lazy Load on Demand (Keep-Alive States)
    // Only mount heavy components after the user has visited them once.
    const [visitedViews, setVisitedViews] = useState({
        stats: false, projects: false, settings: false,
        add: false, subscriptions: false
    });

    useEffect(() => {
        if (view === 'stats' && !visitedViews.stats) setVisitedViews(prev => ({ ...prev, stats: true }));
        if (view === 'projects' && !visitedViews.projects) setVisitedViews(prev => ({ ...prev, projects: true }));
        if (view === 'settings' && !visitedViews.settings) setVisitedViews(prev => ({ ...prev, settings: true }));
        if (view === 'add' && !visitedViews.add) setVisitedViews(prev => ({ ...prev, add: true }));
        if (view === 'subscriptions' && !visitedViews.subscriptions) setVisitedViews(prev => ({ ...prev, subscriptions: true }));
    }, [view]);

    // --- Effects ---
    useEffect(() => { window.scrollTo(0, 0); }, [view]);
    useEffect(() => { if (currentProjectId) safeLocalStorage.setItem('sweet_last_project_id', currentProjectId); }, [currentProjectId]);

    useEffect(() => {
        if (ledgerData && ledgerData.projects) {
            const projectExists = ledgerData.projects.some(p => p.id === currentProjectId);
            if (!projectExists) setCurrentProjectId('daily');
        }
    }, [ledgerData, currentProjectId]);

    useEffect(() => {
        const decideView = async () => {
            // [Stability Fix] Logout Race Condition
            // Ensure no async logic attempts to read user properties after logout.
            if (!user && !authLoading && !ledgerCode) {
                setView('onboarding');
                return;
            }

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
                } else {

                    // [Stability Fix] Firestore Timeout (Prevent Infinite Loading)
                    const timeoutPromise = new Promise((_, reject) =>
                        setTimeout(() => reject(new Error("Request Timed Out")), 10000)
                    );

                    try {
                        const cloudCode = await Promise.race([checkUserBinding(user.uid), timeoutPromise]);
                        if (cloudCode) {
                            setLedgerCode(cloudCode);
                            safeLocalStorage.setItem('sweet_ledger_code', cloudCode);
                        } else {
                            setView('decision');
                        }
                    } catch (e) {
                        console.warn("User Binding Check Failed:", e);
                        // On timeout or error, assume no binding (safety fallback)
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

    useEffect(() => {
        if (ledgerData && user && ledgerData.users && ledgerData.users[user.uid]) {
            setMyNickname(ledgerData.users[user.uid].name);
        }
    }, [ledgerData, user]);

    // --- Handlers (Simplified) ---
    const handleGoogleLogin = async () => { try { await loginWithGoogle(); } catch (error) { alert(`登入失敗: ${error.message}`); } };
    const handleAppleLogin = async () => { try { await loginWithApple(); } catch (error) { alert(`登入失敗: ${error.message}`); } };
    const handleJoinWithCode = async (code) => { setPendingInviteCode(code); await handleGoogleLogin(); };
    const handleCreateLedgerFn = async () => { setLoading(true); try { await createLedger(user); } catch (e) { alert(e.message); } setLoading(false); };
    const handleJoinLedgerFn = async (code) => { setLoading(true); try { await joinLedger(code, user); } catch (e) { alert(e.message); } setLoading(false); };

    const handleLogout = async () => {
        if (confirm('確定要登出嗎？')) {
            disconnectLedger();
            safeLocalStorage.removeItem('sweet_last_currency');
            safeLocalStorage.removeItem('sweet_last_project_id');
            await logout();
            setView('onboarding');
        }
    };

    // [Fix 4] Simplified - no longer forces remount
    const handleOpenAddExpense = () => {
        setView('add');
    };

    const confirmAvatarUpdate = async () => {
        if (!ledgerCode || !tempAvatar) return;
        setIsAvatarModalOpen(false);
        await updateUserSetting('avatar', tempAvatar);
        setTempAvatar('');
    };

    const handleUpdateLedgerCurrency = async (currencyKey, val) => {
        if (!ledgerCode || !currentProjectId) return;
        await updateProjectRates(currentProjectId, currencyKey, val);
    };

    const handleUpdateNickname = async () => { if (!ledgerCode || !myNickname) return; await updateUserSetting('name', myNickname); };

    const handleResetAccountFn = async () => {
        const confirmStr = prompt("警告：此操作將刪除所有交易紀錄且無法復原！\n請輸入 RESET 確認重置：");
        if (confirmStr === "RESET") await resetAccount();
    };

    const handleFixIdentityFn = async () => {
        // Step 1: Explanation
        alert("【功能說明】此功能僅供「原戶長 (Host)」使用。\n\n當您因為「更換手機」或「重新安裝 App」導致身份變成訪客，無法管理帳本時，此功能可以協助您找回戶長權限。");

        // Step 2: Warning
        if (!confirm("⚠️嚴重警告⚠️\n\n若您只是普通的「成員 (Guest)」，請絕對不要執行此操作！\n\n這將會強制將原戶長的資料覆蓋到您身上，導致帳本權限錯亂與資料損毀。\n\n您確定您是「原戶長」且目前「遺失權限」嗎？")) return;

        // Step 3: Hard Confirmation
        const confirmStr = prompt("最後確認：\n\n若您確定要執行救援，請輸入「我是戶長」四個字：");
        if (confirmStr === "我是戶長") {
            try {
                await fixIdentity();
                alert("權限修復成功！您已取回戶長身份。");
            } catch (e) {
                alert("修復失敗，請稍後再試。");
            }
        } else {
            if (confirmStr !== null) alert("輸入錯誤，取消操作。");
        }
    };

    const handleSaveProjectFn = async () => {
        if (!editingProjectData.name) return;
        setIsEditingProject(false);
        const projectToSave = { ...editingProjectData };
        if (projectToSave.type === 'private' && !projectToSave.owner) {
            projectToSave.owner = user.uid;
        }
        setEditingProjectData({ id: '', name: '', icon: 'project_daily' });
        const savedId = await saveProject(projectToSave);
        if (savedId) setCurrentProjectId(savedId);
    };

    const handleDeleteProjectFn = async (projectId) => {
        if (confirm('確定要刪除這個專案嗎？')) {
            if (currentProjectId === projectId) setCurrentProjectId('daily');
            await deleteProject(projectId);
        }
    };

    const handleSaveCategoryFn = async () => {
        if (!editingCategoryData.name) return;
        setIsEditingCategory(false);
        await saveCategory({ ...editingCategoryData });
    };

    const handleDeleteCategoryFn = async (catId) => { if (confirm('確定要刪除這個分類嗎？')) { setIsEditingCategory(false); await deleteCategory(catId); } };

    const handleSettleUpFn = async (amountToSettle, payeeName, payerId) => {
        if (!amountToSettle || amountToSettle <= 0) return;
        if (confirm(`確定要結清 ${formatCurrency(amountToSettle, 'TWD')} 給 ${payeeName} 嗎？`)) {
            try { await settleUp(amountToSettle, payerId, payeeName, currentProjectId); }
            catch (e) { alert("結清失敗"); }
        }
    };

    const handleExport = (selectedProjectIds = []) => {
        if (!ledgerData) return;
        const BOM = "\uFEFF"; // Add BOM for Excel utf-8 compatibility
        let csvContent = "data:text/csv;charset=utf-8," + BOM + "Date,Project,Category,Note,Amount,Currency,Payer,SplitType\n";

        ledgerData.transactions.forEach(tx => {
            // [Filter] Check if project is in selected list (if provided)
            if (selectedProjectIds.length > 0 && !selectedProjectIds.includes(tx.projectId)) return;

            const project = ledgerData.projects.find(p => p.id === tx.projectId);

            // [Security] Double check: even if selected, ensure user has permission
            if (project?.type === 'private' && project.owner !== user.uid) return;

            // Format Payer Column
            let payerDisplay = ledgerData.users[tx.payer]?.name || 'Unknown';
            if (tx.splitType === 'multi_payer' && tx.customSplit) {
                // Format: "Dad:100 | Mom:50"
                payerDisplay = Object.entries(tx.customSplit)
                    .map(([uid, amt]) => `${ledgerData.users[uid]?.name || 'Unknown'}:${amt}`)
                    .join(' | ');
            }

            // Translate Split Type
            const splitTypeMap = {
                'even': '平均分攤',
                'self': '自付 (不分攤)',
                'partner': '代墊 (對方全額)',
                'multi_payer': '混合出資'
            };
            const splitDisplay = splitTypeMap[tx.splitType] || tx.splitType;

            const row = [
                new Date(tx.date).toLocaleDateString(),
                project?.name || 'Unknown',
                tx.category.name, `"${(tx.note || '').replace(/"/g, '""')}"`, // Escape quotes
                tx.amount, tx.currency || 'TWD',
                payerDisplay,
                splitDisplay
            ].join(",");
            csvContent += row + "\n";
        });
        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", `sweetledger_exp_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const hasCachedData = ledgerCode && ledgerData && user;
    const shouldShowLoading = !hasCachedData && authLoading;
    const isWaitingForFirstData = user && ledgerCode && !ledgerData && isLedgerInitializing;

    // Broken State Detection
    const isBrokenState = user && ledgerCode && !ledgerData && !isLedgerInitializing;

    if (shouldShowLoading || isWaitingForFirstData || (loading && !ledgerData)) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 z-[200] relative">
                <div style={{ fontSize: '4rem', animation: 'sweet-bounce 1s infinite' }}>🍰</div>
                <p style={{ marginTop: '1rem', color: '#db2777', fontWeight: 'bold', fontSize: '0.875rem', animation: 'sweet-fade 1.5s infinite alternate' }}>{loading ? '正在同步資料...' : 'SweetLedger Loading...'}</p>
            </div>
        );
    }

    // Fallback UI for Broken State
    if (isBrokenState) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <RefreshCcw className="text-gray-400" size={32} />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">無法讀取帳本</h2>
                <p className="text-gray-500 text-sm mb-6 max-w-xs">
                    我們找不到您的帳本資料，可能是網路連線不穩或帳本已被刪除。
                </p>
                <button
                    onClick={() => disconnectLedger()}
                    className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-transform"
                >
                    重回首頁 (Reset)
                </button>
            </div>
        );
    }

    // Basic Error Boundary Component
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false, error: null, errorInfo: null };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
            console.error("Uncaught Error:", error, errorInfo);
            this.setState({ errorInfo });
        }

        render() {
            if (this.state.hasError) {
                return (
                    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center">
                        <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mb-4">
                            <AlertCircle size={32} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">發生錯誤</h2>
                        <p className="text-gray-500 text-sm mb-4">很抱歉，程式執行時發生了意外錯誤。</p>
                        <div className="w-full max-w-sm bg-gray-50 p-4 rounded-xl text-left overflow-auto max-h-40 mb-6 border border-gray-200">
                            <p className="text-xs font-mono text-red-500 font-bold mb-1">{this.state.error?.toString()}</p>
                            <p className="text-[10px] font-mono text-gray-400 whitespace-pre-wrap">{this.state.errorInfo?.componentStack}</p>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl active:scale-95 transition-transform"
                        >
                            重新載入應用程式
                        </button>
                    </div>
                );
            }
            return this.props.children;
        }
    }

    // Wrap the main return content
    return (
        <ErrorBoundary>
            <div className="min-h-screen bg-white text-gray-900 font-sans pb-[env(safe-area-inset-bottom)] animate-in fade-in duration-500 relative">
                <React.Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-white"><div className="text-4xl animate-bounce">🍰</div></div>}>
                    {view === 'onboarding' && <OnboardingView handleGoogleLogin={handleGoogleLogin} handleAppleLogin={handleAppleLogin} loading={loading} onJoinWithCode={handleJoinWithCode} />}
                    {view === 'decision' && <DecisionView user={user} onCreate={handleCreateLedgerFn} onJoin={handleJoinLedgerFn} />}
                </React.Suspense>

                {view !== 'onboarding' && view !== 'decision' && ledgerData && user && (
                    <>
                        <React.Suspense fallback={<PageLoading />}>
                            {/* [Fix 2+4] Removed nested Suspense and key prop */}
                            <div className={view === 'add' ? 'block h-full' : 'hidden'}>
                                {visitedViews.add && (
                                    <AddExpenseView
                                        ledgerData={ledgerData}
                                        user={user}
                                        currentProjectId={currentProjectId}
                                        setView={setView}
                                        addTransaction={addTransaction}
                                        updateProjectRates={updateProjectRates}
                                    />
                                )}
                            </div>
                            <div className={view === 'subscriptions' ? 'block h-full' : 'hidden'}>
                                {visitedViews.subscriptions && (
                                    <SubscriptionsView ledgerData={ledgerData} user={user} setView={setView} handleDeleteSubscription={deleteSubscription} />
                                )}
                            </div>

                            {/* Dashboard is always loaded first */}
                            <div className={view === 'dashboard' ? 'block' : 'hidden'}>
                                <DashboardView
                                    ledgerData={ledgerData} currentProjectId={currentProjectId} setCurrentProjectId={setCurrentProjectId}
                                    privacyMode={privacyMode} setPrivacyMode={setPrivacyMode}
                                    setIsEditTxModalOpen={setIsEditTxModalOpen} setEditingTx={setEditingTx}
                                    user={user} handleSettleUp={handleSettleUpFn} handleOpenAddExpense={handleOpenAddExpense} setView={setView}
                                />
                            </div>

                            {/* Stats: Lazy Load on Demand + Keep Alive */}
                            <div className={view === 'stats' ? 'block' : 'hidden'}>
                                {visitedViews.stats && (
                                    <StatsView
                                        ledgerData={ledgerData} currentProjectId={currentProjectId}
                                        statsMonth={statsMonth} setStatsMonth={setStatsMonth} privacyMode={privacyMode}
                                        setEditingTx={setEditingTx} setIsEditTxModalOpen={setIsEditTxModalOpen}
                                    />
                                )}
                            </div>

                            {/* Projects: Lazy Load on Demand + Keep Alive */}
                            <div className={view === 'projects' ? 'block' : 'hidden'}>
                                {visitedViews.projects && (
                                    <ProjectsView
                                        ledgerData={ledgerData} user={user}
                                        isEditingProject={isEditingProject} setIsEditingProject={setIsEditingProject}
                                        editingProjectData={editingProjectData} setEditingProjectData={setEditingProjectData}
                                        handleSaveProject={handleSaveProjectFn} handleDeleteProject={handleDeleteProjectFn}
                                        handleReorderProjects={reorderProjects}
                                        updateProjectRates={updateProjectRates}
                                    />
                                )}
                            </div>

                            {/* Settings: Lazy Load on Demand + Keep Alive */}
                            <div className={view === 'settings' ? 'block' : 'hidden'}>
                                {visitedViews.settings && (
                                    <SettingsView
                                        ledgerData={ledgerData} user={user} setView={setView}
                                        isEditingCategory={isEditingCategory} setIsEditingCategory={setIsEditingCategory}
                                        editingCategoryData={editingCategoryData} setEditingCategoryData={setEditingCategoryData}
                                        handleSaveCategory={handleSaveCategoryFn} handleDeleteCategory={handleDeleteCategoryFn}
                                        handleExport={handleExport} handleResetAccount={handleResetAccountFn} handleLogout={handleLogout}
                                        isAvatarModalOpen={isAvatarModalOpen} setIsAvatarModalOpen={setIsAvatarModalOpen}
                                        myNickname={myNickname} setMyNickname={setMyNickname} updateNickname={handleUpdateNickname}
                                        tempAvatar={tempAvatar} handleAvatarSelect={setTempAvatar} confirmAvatarUpdate={confirmAvatarUpdate}
                                        handleFixIdentity={handleFixIdentityFn} ledgerCode={ledgerCode} updateLedgerCurrency={handleUpdateLedgerCurrency}
                                        currentProjectId={currentProjectId} handleReorderCategories={reorderCategories}
                                        updateUserSetting={updateUserSetting}
                                    />
                                )}
                            </div>

                            <div className={view === 'privacy' ? 'block h-full' : 'hidden'}>
                                <PrivacyView onBack={() => setView('settings')} />
                            </div>

                            {['dashboard', 'stats', 'projects', 'settings'].includes(view) && (
                                <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 px-6 z-[50]">
                                    <div className="flex justify-between items-center max-w-md mx-auto">
                                        <button onClick={() => setView('dashboard')} className={`flex flex-col items-center gap-1 p-2 ${view === 'dashboard' ? 'text-rose-500' : 'text-gray-400'}`}><Home size={24} strokeWidth={view === 'dashboard' ? 2.5 : 2} /><span className="text-[10px] font-medium">首頁</span></button>
                                        <button onClick={() => setView('stats')} className={`flex flex-col items-center gap-1 p-2 ${view === 'stats' ? 'text-rose-500' : 'text-gray-400'}`}><PieChart size={24} strokeWidth={view === 'stats' ? 2.5 : 2} /><span className="text-[10px] font-medium">分析</span></button>
                                        <div className="relative -top-6">
                                            <button onClick={() => handleOpenAddExpense()} className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white shadow-xl shadow-gray-300 active:scale-90 transition-transform"><Plus size={32} /></button>
                                        </div>
                                        <button onClick={() => setView('projects')} className={`flex flex-col items-center gap-1 p-2 ${view === 'projects' ? 'text-rose-500' : 'text-gray-400'}`}><Briefcase size={24} strokeWidth={view === 'projects' ? 2.5 : 2} /><span className="text-[10px] font-medium">專案</span></button>
                                        <button onClick={() => setView('settings')} className={`flex flex-col items-center gap-1 p-2 ${view === 'settings' ? 'text-rose-500' : 'text-gray-400'}`}><Settings size={24} strokeWidth={view === 'settings' ? 2.5 : 2} /><span className="text-[10px] font-medium">設定</span></button>
                                    </div>
                                </div>
                            )}
                        </React.Suspense>

                        <React.Suspense fallback={null}>
                            <EditTransactionModal
                                isOpen={isEditTxModalOpen}
                                onClose={() => { setIsEditTxModalOpen(false); setEditingTx(null); }}
                                editingTx={editingTx}
                                ledgerData={ledgerData}
                                user={user}
                                currentProjectId={currentProjectId}
                                updateTransaction={async (tx) => {
                                    setIsEditTxModalOpen(false);
                                    setEditingTx(null);
                                    await updateTransaction(tx);
                                }}
                                deleteTransaction={async (id) => {
                                    setIsEditTxModalOpen(false);
                                    setEditingTx(null);
                                    await deleteTransaction(id);
                                }}
                                updateProjectRates={updateProjectRates} // [Batch 2] 串接匯率更新
                            />
                        </React.Suspense>
                    </>
                )
                }
            </div>
        </ErrorBoundary>
    );
}