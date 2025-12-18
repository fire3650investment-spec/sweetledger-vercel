// src/contexts/LedgerContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  doc, 
  onSnapshot, 
  updateDoc, 
  setDoc, 
  getDoc 
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
      if (!ledgerCode) return null; // 這裡讀不到 state 的 ledgerCode，要重讀一次或邏輯外提，但在 useState 閉包內讀 localStorage 是安全的
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

  const [isLedgerInitializing, setIsLedgerInitializing] = useState(!ledgerData); // 如果有快取，初始化視為完成

  // 1. 監聽 Ledger Code 變更並同步到 LocalStorage (主要處理登入/登出/切換帳本)
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

    // 建立 Firestore 即時監聽
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        // 更新快取
        localStorage.setItem(cacheKey, JSON.stringify(data));
        // 更新 React State (這會觸發 UI 靜默更新)
        setLedgerData(data);
      } else {
        console.warn("Ledger not found (remote)");
        // 只有遠端明確說不存在時，才清除本地狀態，避免網路錯誤導致資料消失
        // 但為了安全，如果遠端真的沒了，我們應該視為重置
        // 這裡暫時保留資料，讓使用者至少能看到離線版，直到他登出
      }
      setIsLedgerInitializing(false);
    }, (error) => {
      console.error("Snapshot error:", error);
      // 網路錯誤時，保持目前的 ledgerData (如果是快取載入的)
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
        // 防呆：確保 transactions 存在
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


  // Actions (建立與加入帳本)
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
      // [優化] 清除 Data 快取
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
          if (key.startsWith('sweet_ledger_data_')) {
              localStorage.removeItem(key);
          }
      });
  };

  const value = {
    ledgerCode,
    ledgerData,
    isLedgerInitializing,
    createLedger,
    joinLedger,
    disconnectLedger,
    setLedgerCode,
    checkUserBinding
  };

  return (
    <LedgerContext.Provider value={value}>
      {children}
    </LedgerContext.Provider>
  );
};