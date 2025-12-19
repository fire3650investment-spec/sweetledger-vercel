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
import { INITIAL_LEDGER_STATE } from '../utils/constants';
import { generateId } from '../utils/helpers';

const LedgerContext = createContext();

export const useLedger = () => useContext(LedgerContext);

export const LedgerProvider = ({ children }) => {
  const { user } = useAuth();
  
  // [優化] 1. 同步讀取 Ledger Code
  const [ledgerCode, setLedgerCode] = useState(() => {
      return localStorage.getItem('sweet_ledger_code') || '';
  });

  // [優化] 2. 同步讀取 Ledger Data (Cache-First Strategy)
  const [ledgerData, setLedgerData] = useState(() => {
      if (!ledgerCode) return null; 
      const code = localStorage.getItem('sweet_ledger_code');
      if (!code) return null;

      const cacheKey = `sweet_ledger_data_${code}`;
      try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
              const parsed = JSON.parse(cached);
              // [防白屏] 簡單檢查資料完整性
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

  // 1. 監聽 Ledger Code 變更並同步到 LocalStorage
  useEffect(() => {
    if (ledgerCode) {
        localStorage.setItem('sweet_ledger_code', ledgerCode);
    } else {
        localStorage.removeItem('sweet_ledger_code');
    }
  }, [ledgerCode]);

  // 2. 監聽 Firestore 資料流 (背景更新)
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

  // 3. 智慧自動扣款檢查 (Smart Auto-Sub Check)
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
              if (data.ledgerCode) {
                  return data.ledgerCode;
              }
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
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
          if (key.startsWith('sweet_ledger_data_')) {
              localStorage.removeItem(key);
          }
      });
  };

  // --- Actions: Transactions (Refactored from App.jsx) ---
  const addTransaction = async (payload) => {
    if (!ledgerCode || !user) throw new Error("無效的帳本狀態");
    
    const { 
        amount, currency, category, payer, 
        splitType, customSplit, note, projectId, 
        date, isSubscription, subCycle, subPayDay 
    } = payload;

    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const selectedDate = new Date(date).toISOString(); 

    // 建構基礎交易資料
    const commonData = {
        id: generateId(), 
        amount: parseFloat(amount), 
        currency: currency, 
        category: category,
        payer: payer || user.uid, 
        splitType: splitType, 
        customSplit: customSplit,
        note: note || category.name, 
        projectId: projectId,
    };

    if (isSubscription) {
      // 計算下一次扣款日
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
      const updatedTxs = ledgerData.transactions.map(tx => tx.id === updatedTx.id ? updatedTx : tx);
      await updateDoc(docRef, { transactions: updatedTxs });
  };

  const deleteTransaction = async (txId) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const updatedTxs = ledgerData.transactions.filter(tx => tx.id !== txId);
      await updateDoc(docRef, { transactions: updatedTxs });
  };
  
  const settleUp = async ({ amount, payerId, payeeName, projectId }) => {
      if (!ledgerCode) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      // 注意：這裡我們需要 CATEGORIES 來找 settlement icon，但 Context 不直接引入 UI constants
      // 我們可以建立一個簡單的物件或從外部傳入
      // 為了保持 Context 純淨，這裡我們手動建構 category 物件
      const settlementCategory = { id: 'settlement', name: '還款結清', icon: 'settlement', color: 'bg-emerald-100 text-emerald-600', hex: '#059669' };

      await updateDoc(docRef, { 
        transactions: arrayUnion({ 
            id: generateId(), 
            amount: amount, 
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

  // --- Actions: Subscriptions ---
  const deleteSubscription = async (subId) => {
      if (!ledgerCode || !ledgerData) return;
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
      const newSubscriptions = (ledgerData.subscriptions || []).filter(s => s.id !== subId);
      await updateDoc(docRef, { subscriptions: newSubscriptions });
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
    // Actions Export
    addTransaction,
    updateTransaction,
    deleteTransaction,
    deleteSubscription,
    settleUp
  };

  return (
    <LedgerContext.Provider value={value}>
      {children}
    </LedgerContext.Provider>
  );
};