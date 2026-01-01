// src/contexts/LedgerContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { 
  doc, 
  onSnapshot, 
  updateDoc, 
  setDoc, 
  getDoc,
  arrayUnion,
  deleteField,
  deleteDoc
} from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { db, appId } from '../utils/firebase';
import { useAuth } from './AuthContext';
import { INITIAL_LEDGER_STATE, DEFAULT_CATEGORIES } from '../utils/constants';
import { generateId } from '../utils/helpers';

const LedgerContext = createContext();

export const useLedger = () => useContext(LedgerContext);

export const LedgerProvider = ({ children }) => {
  const { user } = useAuth();
  
  // Cache check
  const [ledgerCode, setLedgerCode] = useState(() => {
      return localStorage.getItem('sweet_ledger_code') || '';
  });

  const [ledgerData, setLedgerData] = useState(() => {
      if (!ledgerCode) return null; 
      const code = localStorage.getItem('sweet_ledger_code');
      if (!code) return null;
      const cacheKey = `sweet_ledger_data_${code}`;
      try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
              const parsed = JSON.parse(cached);
              // 基本結構檢查
              if (parsed && (Array.isArray(parsed.transactions) || parsed.users)) {
                  return parsed;
              }
          }
      } catch (e) { console.warn("Ledger cache corrupt:", e); }
      return null;
  });

  const [isLedgerInitializing, setIsLedgerInitializing] = useState(!ledgerData);
  const isRepairingRef = useRef(false);

  // 1. LocalStorage Sync
  useEffect(() => {
    if (!db) {
        setIsLedgerInitializing(false);
        return; 
    }
    if (ledgerCode) {
        localStorage.setItem('sweet_ledger_code', ledgerCode);
    } else {
        localStorage.removeItem('sweet_ledger_code');
    }
  }, [ledgerCode]);

  // 2. Firebase Listener
  useEffect(() => {
    if (!db) {
        setIsLedgerInitializing(false);
        return;
    }
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

  // 3. Auto-Repair Logic (Optimized for Performance)
  useEffect(() => {
    if (!ledgerCode || !ledgerData || !user || !db) return;
    if (isRepairingRef.current) return;

    const repairData = async () => {
        isRepairingRef.current = true;
        let needsUpdate = false;
        let updates = {};

        // (1) User Check (Cheap)
        const hasUsers = ledgerData.users && Object.keys(ledgerData.users).length > 0;
        const currentUserExists = ledgerData.users && ledgerData.users[user.uid];

        if (!hasUsers) {
            needsUpdate = true;
            updates.users = {
                [user.uid]: {
                    name: user.displayName || '修復使用者',
                    avatar: 'cat',
                    role: 'host',
                    joinedAt: new Date().toISOString()
                }
            };
        } else if (!currentUserExists) {
             needsUpdate = true;
             updates[`users.${user.uid}`] = {
                name: user.displayName || 'Guest',
                avatar: 'dog',
                role: 'guest',
                joinedAt: new Date().toISOString()
             };
        }

        // (2) Transaction Check (Expensive - Optimize Loop)
        if (!needsUpdate && ledgerData.transactions && ledgerData.transactions.length > 0) {
            let foundDirty = false;
            
            // First pass: just check
            for (const tx of ledgerData.transactions) {
                if (!tx.date || typeof tx.amount === 'string' || (tx.customSplit && Object.values(tx.customSplit).some(v => isNaN(v)))) {
                    foundDirty = true;
                    break;
                }
            }

            // Second pass: fix only if needed
            if (foundDirty) {
                const cleanTransactions = ledgerData.transactions.map(tx => {
                    let newTx = { ...tx };
                    if (!newTx.date) newTx.date = new Date().toISOString();
                    if (typeof tx.amount === 'string') newTx.amount = parseFloat(tx.amount) || 0;
                    
                    if ((tx.splitType === 'custom' || tx.splitType === 'multi_payer') && tx.customSplit) {
                        const cleanSplit = {};
                        Object.keys(tx.customSplit).forEach(uid => {
                            const val = parseFloat(tx.customSplit[uid]);
                            cleanSplit[uid] = isNaN(val) ? 0 : val;
                        });
                        newTx.customSplit = cleanSplit;
                    }
                    return newTx;
                });
                
                needsUpdate = true;
                updates.transactions = cleanTransactions;
            }
        }

        if (needsUpdate) {
            try {
                const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
                await updateDoc(docRef, updates);
                console.log("✅ 自動修復完成 (Data Repaired).");
            } catch (e) { console.error("❌ 自動修復失敗:", e); }
        }
        
        setTimeout(() => { isRepairingRef.current = false; }, 3000);
    };

    const timer = setTimeout(repairData, 2000);
    return () => clearTimeout(timer);
  }, [ledgerData, ledgerCode, user]);

  // 4. Subscription Logic (Fixed: Use arrayUnion to prevent race conditions)
  useEffect(() => {
    if (!ledgerData || !ledgerData.subscriptions || !ledgerCode || !db) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastCheckKey = `last_subs_check_${ledgerCode}`;
    const lastCheckDate = localStorage.getItem(lastCheckKey);
    if (lastCheckDate === todayStr) return; 

    const timer = setTimeout(async () => {
        let updatesNeeded = false;
        let generatedTxs = []; // 僅儲存新生成的交易，避免覆蓋舊交易
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
                    isSettlement: false,
                    amount: parseFloat(txBase.amount) || 0 
                };
                generatedTxs.push(tx);
                
                // Calculate next date
                if (sub.cycle === 'monthly') {
                    const currentMonth = nextDate.getMonth();
                    nextDate.setMonth(currentMonth + 1);
                    if (sub.payDay) {
                        const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
                        const targetDay = Math.min(parseInt(sub.payDay), daysInNextMonth);
                        nextDate.setDate(targetDay);
                    }
                } else if (sub.cycle === 'weekly') {
                    nextDate.setDate(nextDate.getDate() + 7);
                } else {
                    nextDate.setMonth(nextDate.getMonth() + 1);
                }
                loopCount++;
            }
            if (updated) return { ...sub, nextPaymentDate: nextDate.toISOString() };
            return sub;
        });

        if (updatesNeeded) {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            // 關鍵修正：使用 arrayUnion 加入新交易，並更新訂閱狀態
            await updateDoc(docRef, { 
                ...(generatedTxs.length > 0 ? { transactions: arrayUnion(...generatedTxs) } : {}),
                subscriptions: newSubscriptions
            });
        }
        localStorage.setItem(lastCheckKey, todayStr);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [ledgerData, ledgerCode]);


  // --- Actions ---
  
  const checkUserBinding = useCallback(async (uid) => {
      if (!db) return null;
      try {
          const userDocRef = doc(db, 'users', uid); 
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
              const data = userDoc.data();
              if (data.ledgerCode) return data.ledgerCode;
          }
      } catch (e) { console.error("Check binding failed:", e); }
      return null;
  }, []);

  const createLedger = useCallback(async (currentUser) => {
    if (!currentUser) throw new Error("請先登入");
    if (!db) throw new Error("資料庫未連線");
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
  }, []);

  const joinLedger = useCallback(async (code, currentUser) => {
    if (!currentUser) throw new Error("請先登入");
    if (!db) throw new Error("資料庫未連線");
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentData = docSnap.data();
      if (!currentData.users || !currentData.users[currentUser.uid]) {
          const userName = currentUser.displayName || 'Guest';
          const currentUsers = currentData.users || {};
          const updatedUsers = { ...currentUsers, [currentUser.uid]: { name: userName, avatar: 'dog', role: 'guest' } };
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
    } else { throw new Error("找不到這個帳本代碼！"); }
  }, []);
  
  const disconnectLedger = useCallback(() => {
      setLedgerCode('');
      setLedgerData(null);
      localStorage.removeItem('sweet_ledger_code');
      Object.keys(localStorage).forEach(key => {
          if (key.startsWith('sweet_ledger_data_')) localStorage.removeItem(key);
      });
  }, []);

  const leaveLedger = useCallback(async () => {
    if (!ledgerCode || !user || !db) return;
    if (!window.confirm('確定要退出此帳本嗎？您將無法再存取這些資料。')) return;

    try {
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      await updateDoc(docRef, {
        [`users.${user.uid}`]: deleteField()
      });
      disconnectLedger();
      alert('您已成功退出帳本。');
    } catch (e) {
      console.error("Leave Ledger Error:", e);
      alert("退出失敗，請檢查網路連線。");
    }
  }, [ledgerCode, user, disconnectLedger]);

  const deleteAccount = useCallback(async () => {
    if (!user || !db) return;
    try {
        if (ledgerCode) {
             const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
             const snap = await getDoc(docRef);
             
             if (snap.exists()) {
                 const data = snap.data();
                 const currentUsers = data.users || {};
                 const remainingUserIds = Object.keys(currentUsers).filter(uid => uid !== user.uid);
                 
                 if (remainingUserIds.length === 0) {
                     await deleteDoc(docRef);
                 } else {
                     await updateDoc(docRef, {
                        [`users.${user.uid}`]: deleteField()
                     });
                 }
             }
        }
        await deleteDoc(doc(db, 'users', user.uid));
        await deleteUser(user);
        disconnectLedger();
    } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
            throw new Error('REQ_RELOGIN');
        }
        console.error("Delete Account Error:", error);
        throw error;
    }
  }, [user, ledgerCode, disconnectLedger]);

  const addTransaction = useCallback(async (payload) => {
    if (!ledgerCode || !user || !db) throw new Error("無效的帳本狀態");
    
    const { 
        amount, currency, category, payer, 
        splitType, customSplit, note, projectId, 
        date, isSubscription, subCycle, subPayDay 
    } = payload;

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const selectedDate = new Date(date).toISOString(); 
    const cleanAmount = parseFloat(amount);
    
    if (isNaN(cleanAmount)) throw new Error("金額無效");

    let cleanCustomSplit = null;
    let finalSplitType = splitType;

    // Fix: Implement Logic for 'self' and 'partner' shortcuts
    // 'self' = Payer owns 100% (No debt generated)
    // 'partner' = Partner owns 100% (Full amount is debt)
    if (splitType === 'self') {
         finalSplitType = 'custom';
         cleanCustomSplit = { [payer]: cleanAmount };
    } else if (splitType === 'partner') {
         finalSplitType = 'custom';
         const allUsers = Object.keys(ledgerData?.users || {});
         const partners = allUsers.filter(u => u !== payer);
         
         if (partners.length === 1) {
             // 標準兩人情境：全歸給對方
             cleanCustomSplit = { [partners[0]]: cleanAmount };
         } else if (partners.length > 1) {
             // 多人情境：平分給所有非付款人
             const share = cleanAmount / partners.length;
             cleanCustomSplit = {};
             partners.forEach(p => cleanCustomSplit[p] = share);
         } else {
             // 找不到伴侶 (例如自己一人時)，回退為自己
             cleanCustomSplit = { [payer]: cleanAmount };
         }
    } else if ((splitType === 'custom' || splitType === 'multi_payer') && customSplit) {
        cleanCustomSplit = {};
        Object.keys(customSplit).forEach(uid => {
            const val = parseFloat(customSplit[uid]);
            cleanCustomSplit[uid] = isNaN(val) ? 0 : val;
        });
    }

    const commonData = {
        id: generateId(), 
        amount: cleanAmount, 
        currency: currency, 
        category: category, 
        payer: payer || user.uid, 
        splitType: finalSplitType, 
        customSplit: cleanCustomSplit, 
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
      
      // 使用 arrayUnion 確保不會覆蓋他人交易
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
  }, [ledgerCode, user, ledgerData]); // Added ledgerData to deps

  const updateTransaction = useCallback(async (updatedTx) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
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
  }, [ledgerCode, ledgerData]);

  const deleteTransaction = useCallback(async (txId) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const updatedTxs = ledgerData.transactions.filter(tx => tx.id !== txId);
      await updateDoc(docRef, { transactions: updatedTxs });
  }, [ledgerCode, ledgerData]);
  
  const deleteSubscription = useCallback(async (subId) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.id !== subId);
      await updateDoc(docRef, { subscriptions: newSubscriptions });
  }, [ledgerCode, ledgerData]);

  const settleUp = useCallback(async (amount, payerId, payeeName, projectId) => {
      if (!ledgerCode || !db) return;
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
  }, [ledgerCode]);

  const saveProject = useCallback(async (projectData) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      let newProjects = [...(ledgerData.projects || [])];
      
      const { type = 'public', owner = null } = projectData;
      const projectWithRates = { 
          ...projectData, 
          rates: projectData.rates || { JPY: 0.23, THB: 1 },
          type, 
          ...(type === 'private' && owner ? { owner } : {}) 
      };

      if (projectData.id) {
          newProjects = newProjects.map(p => p.id === projectData.id ? { ...p, ...projectWithRates } : p);
      } else {
          newProjects.push({ ...projectWithRates, id: generateId() });
      }
      await updateDoc(docRef, { projects: newProjects });
  }, [ledgerCode, ledgerData]);

  const deleteProject = useCallback(async (projectId) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const newProjects = ledgerData.projects.filter(p => p.id !== projectId);
      const newTransactions = ledgerData.transactions.filter(t => t.projectId !== projectId);
      const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.projectId !== projectId);
      await updateDoc(docRef, { 
          projects: newProjects,
          transactions: newTransactions,
          subscriptions: newSubscriptions
      });
  }, [ledgerCode, ledgerData]);

  const reorderProjects = useCallback(async (newProjects) => {
      if (!ledgerCode || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      await updateDoc(docRef, { projects: newProjects });
  }, [ledgerCode]);

  const updateProjectRates = useCallback(async (projectId, currency, val) => {
    if (!ledgerCode || !ledgerData || !db) return;
    const numVal = parseFloat(val);
    if (!numVal || numVal <= 0) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const newProjects = ledgerData.projects.map(p => {
        if (p.id === projectId) return { ...p, rates: { ...(p.rates || { JPY: 0.23, THB: 1 }), [currency]: numVal } };
        return p;
    });
    await updateDoc(docRef, { projects: newProjects });
  }, [ledgerCode, ledgerData]);

  const saveCategory = useCallback(async (categoryData) => {
      if (!ledgerCode || !ledgerData || !db) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      let newCategories = [...(ledgerData.customCategories || DEFAULT_CATEGORIES)];
      if (categoryData.id) {
          newCategories = newCategories.map(c => c.id === categoryData.id ? categoryData : c);
      } else {
          const newId = generateId();
          newCategories.push({ ...categoryData, id: newId });
          await updateDoc(docRef, { customCategories: newCategories, 'settings.selectedCategories': arrayUnion(newId) });
          return;
      }
      await updateDoc(docRef, { customCategories: newCategories });
  }, [ledgerCode, ledgerData]);

  const deleteCategory = useCallback(async (catId) => {
     if (!ledgerCode || !ledgerData || !db) return;
     const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
     const newCategories = (ledgerData.customCategories || DEFAULT_CATEGORIES).filter(c => c.id !== catId);
     await updateDoc(docRef, { customCategories: newCategories });
  }, [ledgerCode, ledgerData]);

  const reorderCategories = useCallback(async (newCategories) => {
    if (!ledgerCode || !db) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { customCategories: newCategories });
  }, [ledgerCode]);

  const updateUserSetting = useCallback(async (field, value) => {
    if (!ledgerCode || !user || !db) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { [`users.${user.uid}.${field}`]: value });
  }, [ledgerCode, user]);

  const resetAccount = useCallback(async () => {
    if (!ledgerCode || !db || !user) return;
    if (!ledgerData || !ledgerData.users) return;

    const currentUserRole = ledgerData.users[user.uid]?.role;
    if (currentUserRole !== 'host') {
        alert("權限不足：只有戶長 (Host) 可以執行重置帳本操作。");
        return;
    }

    if (!window.confirm('警告：確定要刪除「所有」交易紀錄嗎？此操作無法復原！')) return;
    if (!window.confirm('再次確認：這將清空所有記帳資料，是否繼續？')) return;

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    await updateDoc(docRef, { transactions: [], subscriptions: [] });
    alert('帳本已重置。');
  }, [ledgerCode, ledgerData, user]);

  const fixIdentity = useCallback(async () => {
    if (!ledgerCode || !ledgerData || !user || !db) return;
    const zombieHostId = Object.keys(ledgerData.users).find(uid => ledgerData.users[uid].role === 'host' && uid !== user.uid);
    if (!zombieHostId) return; 
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const newUsers = { ...(ledgerData.users || {}) };
    delete newUsers[zombieHostId];
    if (newUsers[user.uid]) newUsers[user.uid] = { ...newUsers[user.uid], role: 'host' };
    
    // Fix transactions
    const newTransactions = (ledgerData.transactions || []).map(tx => {
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
  }, [ledgerCode, ledgerData, user]);

  const value = useMemo(() => ({
    ledgerCode, 
    ledgerData, 
    isLedgerInitializing, 
    createLedger, 
    joinLedger, 
    disconnectLedger,
    leaveLedger,
    checkUserBinding,
    addTransaction, 
    updateTransaction, 
    deleteTransaction, 
    deleteSubscription, 
    settleUp,
    saveProject, 
    deleteProject, 
    reorderProjects, 
    updateProjectRates,
    saveCategory, 
    deleteCategory, 
    reorderCategories, 
    updateUserSetting, 
    resetAccount, 
    fixIdentity,
    deleteAccount
  }), [
    ledgerCode, 
    ledgerData, 
    isLedgerInitializing, 
    createLedger, 
    joinLedger, 
    disconnectLedger,
    leaveLedger,
    checkUserBinding,
    addTransaction, 
    updateTransaction, 
    deleteTransaction, 
    deleteSubscription, 
    settleUp,
    saveProject, 
    deleteProject, 
    reorderProjects, 
    updateProjectRates,
    saveCategory, 
    deleteCategory, 
    reorderCategories, 
    updateUserSetting, 
    resetAccount, 
    fixIdentity,
    deleteAccount
  ]);

  return (
    <LedgerContext.Provider value={value}>
      {children}
    </LedgerContext.Provider>
  );
};