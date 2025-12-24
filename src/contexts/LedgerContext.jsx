// src/contexts/LedgerContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  doc, 
  onSnapshot, 
  updateDoc, 
  setDoc, 
  getDoc,
  arrayUnion 
} from 'firebase/firestore';
import { db, appId } from '../utils/firebase';
import { useAuth } from './AuthContext';
import { INITIAL_LEDGER_STATE, DEFAULT_CATEGORIES } from '../utils/constants';
import { generateId } from '../utils/helpers';

const LedgerContext = createContext();

export const useLedger = () => useContext(LedgerContext);

export const LedgerProvider = ({ children }) => {
  const { user } = useAuth();
  
  // [State] 1. Ledger Code
  const [ledgerCode, setLedgerCode] = useState(() => {
      return localStorage.getItem('sweet_ledger_code') || '';
  });

  // [State] 2. Ledger Data (Cache-First)
  const [ledgerData, setLedgerData] = useState(() => {
      if (!ledgerCode) return null; 
      const code = localStorage.getItem('sweet_ledger_code');
      if (!code) return null;

      const cacheKey = `sweet_ledger_data_${code}`;
      try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
              const parsed = JSON.parse(cached);
              if (parsed && parsed.transactions && Array.isArray(parsed.transactions)) {
                  return parsed;
              }
          }
      } catch (e) {
          console.warn("Ledger cache corrupt:", e);
      }
      return null;
  });

  const [isLedgerInitializing, setIsLedgerInitializing] = useState(!ledgerData);

  // Effect 1: Sync Code to LocalStorage
  useEffect(() => {
    if (ledgerCode) {
        localStorage.setItem('sweet_ledger_code', ledgerCode);
    } else {
        localStorage.removeItem('sweet_ledger_code');
    }
  }, [ledgerCode]);

  // Effect 2: Sync Firestore Data
  useEffect(() => {
    if (!ledgerCode) {
      if (!localStorage.getItem('sweet_ledger_code')) {
          setLedgerData(null);
          setIsLedgerInitializing(false);
      }
      return;
    }

    const cacheKey = `sweet_ledger_data_${ledgerCode}`;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setLedgerData(data);
      } else {
        console.warn("Ledger not found (remote)");
      }
      setIsLedgerInitializing(false);
    }, (error) => {
      console.error("Snapshot error:", error);
      setIsLedgerInitializing(false);
    });

    return () => unsubscribe();
  }, [ledgerCode]);

  // Effect 3: Smart Auto-Subscription Check
  useEffect(() => {
    if (!ledgerData || !ledgerData.subscriptions || ledgerData.subscriptions.length === 0 || !ledgerCode) return;

    const todayStr = new Date().toISOString().slice(0, 10);
    const lastCheckKey = `last_subs_check_${ledgerCode}`;
    const lastCheckDate = localStorage.getItem(lastCheckKey);

    if (lastCheckDate === todayStr) return; 

    const timer = setTimeout(async () => {
        let updatesNeeded = false;
        let newTransactions = [...(ledgerData.transactions || [])];
        let newSubscriptions = [...ledgerData.subscriptions];

        const now = new Date();
        now.setHours(0,0,0,0);

        newSubscriptions = newSubscriptions.map(sub => {
            let nextDate = new Date(sub.nextPaymentDate);
            let updated = false;
            let loopCount = 0;
            
            while (nextDate <= now && loopCount < 12) {
                updated = true;
                updatesNeeded = true;
                
                const { nextPaymentDate, cycle, payDay, mode, ...txBase } = sub;
                
                const tx = {
                    ...txBase,
                    id: generateId(), 
                    date: nextDate.toISOString(),
                    note: `[自動扣款] ${sub.name}`,
                    isSettlement: false
                };
                newTransactions.push(tx);

                if (sub.cycle === 'monthly') {
                    const currentMonth = nextDate.getMonth();
                    const nextMonth = currentMonth + 1;
                    nextDate.setMonth(nextMonth);
                    if (sub.payDay) {
                        const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
                        const targetDay = Math.min(sub.payDay, daysInNextMonth);
                        nextDate.setDate(targetDay);
                    }
                } else if (sub.cycle === 'weekly') {
                    nextDate.setDate(nextDate.getDate() + 7);
                } else {
                    nextDate.setMonth(nextDate.getMonth() + 1);
                }
                loopCount++;
            }
            if (updated) {
                return { ...sub, nextPaymentDate: nextDate.toISOString() };
            }
            return sub;
        });

        if (updatesNeeded) {
            console.log("Auto-subscriptions processed.");
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            await updateDoc(docRef, { 
                transactions: newTransactions,
                subscriptions: newSubscriptions
            });
        }
        localStorage.setItem(lastCheckKey, todayStr);
    }, 5000); 

    return () => clearTimeout(timer);
  }, [ledgerData, ledgerCode]);


  // --- Actions: Authentication & Ledger Binding ---
  const checkUserBinding = async (uid) => {
      try {
          const userDocRef = doc(db, 'users', uid); 
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
              const data = userDoc.data();
              if (data.ledgerCode) return data.ledgerCode;
          }
      } catch (e) {
          console.error("Check binding failed:", e);
      }
      return null;
  };

  const createLedger = async (currentUser) => {
    if (!currentUser) throw new Error("請先登入");
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const userName = currentUser.displayName || 'Host';
    
    const newLedger = {
        ...INITIAL_LEDGER_STATE,
        users: { [currentUser.uid]: { name: userName, avatar: 'cat', role: 'host' } }
    };
    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
    
    await setDoc(doc(db, 'users', currentUser.uid), {
        email: currentUser.email,
        ledgerCode: code,
        role: 'host',
        updatedAt: new Date().toISOString()
    });

    localStorage.setItem('sweet_ledger_code', code);
    setLedgerCode(code);
    return code;
  };

  const joinLedger = async (code, currentUser) => {
    if (!currentUser) throw new Error("請先登入");
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentData = docSnap.data();
      if (!currentData.users || !currentData.users[currentUser.uid]) {
          const userName = currentUser.displayName || 'Guest';
          const updatedUsers = { ...currentData.users, [currentUser.uid]: { name: userName, avatar: 'dog', role: 'guest' } };
          await updateDoc(docRef, { users: updatedUsers });
      }
      
      await setDoc(doc(db, 'users', currentUser.uid), {
        email: currentUser.email,
        ledgerCode: code,
        role: 'guest',
        updatedAt: new Date().toISOString()
      }, { merge: true });

      localStorage.setItem('sweet_ledger_code', code);
      setLedgerCode(code);
      return true;
    } else {
      throw new Error("找不到這個帳本代碼！");
    }
  };
  
  const disconnectLedger = () => {
      setLedgerCode('');
      setLedgerData(null);
      localStorage.removeItem('sweet_ledger_code');
      Object.keys(localStorage).forEach(key => {
          if (key.startsWith('sweet_ledger_data_')) {
              localStorage.removeItem(key);
          }
      });
  };

  // --- Actions: Transactions & Subscriptions ---
  const addTransaction = async (payload) => {
    if (!ledgerCode || !user) throw new Error("無效的帳本狀態");
    
    const { 
        amount, currency, category, payer, 
        splitType, customSplit, note, projectId, 
        date, isSubscription, subCycle, subPayDay 
    } = payload;

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const selectedDate = new Date(date).toISOString(); 

    // [Security Fix] Sanitization Layer
    // 強制將金額轉換為 Number，避免字串污染
    const cleanAmount = parseFloat(amount);
    if (isNaN(cleanAmount)) throw new Error("金額無效");

    let cleanCustomSplit = null;
    if (splitType === 'custom' && customSplit) {
        cleanCustomSplit = {};
        Object.keys(customSplit).forEach(uid => {
            const val = parseFloat(customSplit[uid]);
            // 如果輸入框是空的或無效值，存為 0，確保數學運算安全
            cleanCustomSplit[uid] = isNaN(val) ? 0 : val;
        });
    }

    const commonData = {
        id: generateId(), 
        amount: cleanAmount, 
        currency: currency, 
        category: category,
        payer: payer || user.uid, 
        splitType: splitType, 
        customSplit: cleanCustomSplit, // 使用清洗過的資料
        note: note || category.name, 
        projectId: projectId,
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
              name: note || category.name, 
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
  };

  const updateTransaction = async (updatedTx) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      
      // [Security Fix] 更新時也要清洗
      const cleanTx = { ...updatedTx };
      cleanTx.amount = parseFloat(cleanTx.amount);
      if (cleanTx.customSplit) {
          const cleanSplit = {};
          Object.keys(cleanTx.customSplit).forEach(uid => {
             cleanSplit[uid] = parseFloat(cleanTx.customSplit[uid]) || 0;
          });
          cleanTx.customSplit = cleanSplit;
      }

      const updatedTxs = ledgerData.transactions.map(tx => tx.id === cleanTx.id ? cleanTx : tx);
      await updateDoc(docRef, { transactions: updatedTxs });
  };

  const deleteTransaction = async (txId) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const updatedTxs = ledgerData.transactions.filter(tx => tx.id !== txId);
      await updateDoc(docRef, { transactions: updatedTxs });
  };
  
  const deleteSubscription = async (subId) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.id !== subId);
      await updateDoc(docRef, { subscriptions: newSubscriptions });
  };

  const settleUp = async ({ amount, payerId, payeeName, projectId }) => {
      if (!ledgerCode) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const settlementCategory = { id: 'settlement', name: '還款結清', icon: 'settlement', color: 'bg-emerald-100 text-emerald-600', hex: '#059669' };

      await updateDoc(docRef, { 
        transactions: arrayUnion({ 
            id: generateId(), 
            amount: parseFloat(amount), 
            currency: 'TWD', 
            category: settlementCategory,
            payer: payerId, 
            splitType: 'settlement',
            note: `還款給 ${payeeName}`, 
            projectId: projectId,
            date: new Date().toISOString(),
            isSettlement: true
        }) 
    });
  };

  // --- Actions: Projects (New in Batch 2) ---
  const saveProject = async (projectData) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      let newProjects = [...(ledgerData.projects || [])];
      
      // Preserve existing rates if updating, or use default for new
      const projectWithRates = {
          ...projectData,
          rates: projectData.rates || { JPY: 0.23, THB: 1 } 
      };

      if (projectData.id) {
          // Update existing
          newProjects = newProjects.map(p => p.id === projectData.id ? { ...p, ...projectWithRates } : p);
      } else {
          // Create new
          newProjects.push({ ...projectWithRates, id: generateId() });
      }
      await updateDoc(docRef, { projects: newProjects });
  };

  const deleteProject = async (projectId) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      
      // Cascade Delete: Projects -> Transactions & Subscriptions
      const newProjects = ledgerData.projects.filter(p => p.id !== projectId);
      const newTransactions = ledgerData.transactions.filter(t => t.projectId !== projectId);
      const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.projectId !== projectId);

      await updateDoc(docRef, { 
          projects: newProjects,
          transactions: newTransactions,
          subscriptions: newSubscriptions
      });
  };

  const reorderProjects = async (newProjects) => {
      if (!ledgerCode) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      await updateDoc(docRef, { projects: newProjects });
  };

  const updateProjectRates = async (projectId, currency, val) => {
    if (!ledgerCode || !ledgerData) return;
    const numVal = parseFloat(val);
    if (!numVal || numVal <= 0) return;

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const newProjects = ledgerData.projects.map(p => {
        if (p.id === projectId) {
            return { 
                ...p, 
                rates: { ...(p.rates || { JPY: 0.23, THB: 1 }), [currency]: numVal } 
            };
        }
        return p;
    });
    await updateDoc(docRef, { projects: newProjects });
  };

  // --- Actions: Categories (New in Batch 2) ---
  const saveCategory = async (categoryData) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      let newCategories = [...(ledgerData.customCategories || DEFAULT_CATEGORIES)];
      
      if (categoryData.id) {
          newCategories = newCategories.map(c => c.id === categoryData.id ? categoryData : c);
      } else {
          const newId = generateId();
          newCategories.push({ ...categoryData, id: newId });
          // Auto-select new category in settings
          await updateDoc(docRef, { 
             customCategories: newCategories,
             'settings.selectedCategories': arrayUnion(newId)
          });
          return;
      }
      await updateDoc(docRef, { customCategories: newCategories });
  };

  const deleteCategory = async (catId) => {
     if (!ledgerCode || !ledgerData) return;
     const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
     const newCategories = (ledgerData.customCategories || DEFAULT_CATEGORIES).filter(c => c.id !== catId);
     await updateDoc(docRef, { customCategories: newCategories });
  };

  const reorderCategories = async (newCategories) => {
    if (!ledgerCode) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { customCategories: newCategories });
  };

  // --- Actions: User Settings & System (New in Batch 2) ---
  const updateUserSetting = async (field, value) => {
    if (!ledgerCode || !user) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`users.${user.uid}.${field}`]: value });
  };

  const resetAccount = async () => {
    if (!ledgerCode) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { 
        transactions: [], 
        subscriptions: [],
    });
  };

  const fixIdentity = async () => {
    if (!ledgerCode || !ledgerData || !user) return;
    const zombieHostId = Object.keys(ledgerData.users).find(uid => 
        ledgerData.users[uid].role === 'host' && uid !== user.uid
    );
    if (!zombieHostId) return; // No fix needed
    
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const newUsers = { ...ledgerData.users };
    
    // 繼承 Host 權限
    delete newUsers[zombieHostId];
    if (newUsers[user.uid]) newUsers[user.uid] = { ...newUsers[user.uid], role: 'host' };
    
    // 遷移所有交易紀錄的 payer & customSplit
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
  };

  const value = {
    ledgerCode,
    ledgerData,
    isLedgerInitializing,
    createLedger,
    joinLedger,
    disconnectLedger,
    setLedgerCode,
    checkUserBinding,
    // Transactions & Subs
    addTransaction,
    updateTransaction,
    deleteTransaction,
    deleteSubscription,
    settleUp,
    // Projects
    saveProject,
    deleteProject,
    reorderProjects,
    updateProjectRates,
    // Categories
    saveCategory,
    deleteCategory,
    reorderCategories,
    // Settings
    updateUserSetting,
    resetAccount,
    fixIdentity
  };

  return (
    <LedgerContext.Provider value={value}>
      {children}
    </LedgerContext.Provider>
  );
};