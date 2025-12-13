import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, onSnapshot, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import { db, appId } from '../utils/firebase';
import { useAuth } from './AuthContext';
import { INITIAL_LEDGER_STATE } from '../utils/constants';
import { generateId } from '../utils/helpers';

const LedgerContext = createContext();

export function useLedger() {
  return useContext(LedgerContext);
}

export function LedgerProvider({ children }) {
  const { user } = useAuth();
  const [ledgerCode, setLedgerCode] = useState('');
  const [ledgerData, setLedgerData] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [loading, setLoading] = useState(false); // 用於建立/加入時的 loading 狀態

  // 1. 初始化：嘗試從 localStorage 或 User 狀態恢復 Ledger Code
  useEffect(() => {
    const savedCode = localStorage.getItem('sweet_ledger_code');
    if (savedCode) {
      setLedgerCode(savedCode);
    } else {
      // 如果沒有 code，但 auth 已就緒，視為初始化完成 (進入 Onboarding)
      setIsInitializing(false);
    }
  }, []);

  // 2. 資料監聽：當有 Ledger Code 時，啟動 Firestore 監聽與快取機制
  useEffect(() => {
    if (!ledgerCode || !db) return;

    const cacheKey = `sweet_ledger_data_${ledgerCode}`;
    
    // A. 優先讀取快取 (Optimistic Loading)
    try {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            const parsed = JSON.parse(cachedData);
            if (parsed) {
                console.log("Loaded from cache");
                setLedgerData(parsed);
                // 使用 requestAnimationFrame 避免阻塞渲染
                requestAnimationFrame(() => setIsInitializing(false));
            }
        }
    } catch (e) {
        console.error("Cache read error", e);
    }

    // B. 建立即時監聽
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setLedgerData(data);
        setIsInitializing(false);
      } else {
        // Code 存在但文件不存在 (可能被刪除)，重置
        console.warn("Ledger not found, resetting code.");
        localStorage.removeItem('sweet_ledger_code');
        setLedgerCode('');
        setLedgerData(null);
        setIsInitializing(false);
      }
    }, (error) => {
        console.error("Snapshot Error:", error);
        setIsInitializing(false);
    });

    return () => unsubscribe();
  }, [ledgerCode]);

  // 3. 智慧型自動扣款檢查 (Smart Auto-Sub Check)
  // 邏輯：每天只檢查一次，且延遲 5 秒執行，避免拖慢啟動速度
  useEffect(() => {
    if (!ledgerData || !ledgerData.subscriptions || ledgerData.subscriptions.length === 0 || !ledgerCode) return;

    const todayStr = new Date().toISOString().slice(0, 10);
    const lastCheckKey = `last_subs_check_${ledgerCode}`;
    const lastCheckDate = localStorage.getItem(lastCheckKey);

    if (lastCheckDate === todayStr) {
        return; 
    }

    const timer = setTimeout(async () => {
        let updatesNeeded = false;
        let newTransactions = [...(ledgerData.transactions || [])];
        let newSubscriptions = [...ledgerData.subscriptions];

        const now = new Date();
        now.setHours(0,0,0,0);

        newSubscriptions = newSubscriptions.map(sub => {
            let nextDate = new Date(sub.nextPaymentDate);
            let updated = false;
            let loopCount = 0; // 安全閥，避免無限迴圈
            
            // 補齊所有過期的扣款
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

                // 計算下一次扣款日
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
                    // Fallback default
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
            try {
                const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
                await updateDoc(docRef, { 
                    transactions: newTransactions,
                    subscriptions: newSubscriptions
                });
                console.log("Auto-subscriptions updated.");
            } catch(e) {
                console.error("Auto-sub update failed:", e);
            }
        }
        
        localStorage.setItem(lastCheckKey, todayStr);

    }, 5000); 

    return () => clearTimeout(timer);

  }, [ledgerData, ledgerCode]); 

  // --- Actions ---

  const createLedger = async (currentUser) => {
    if (!currentUser || !db) return;
    setLoading(true);
    try {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const userName = currentUser.displayName || 'Host';
        const newLedger = {
            ...INITIAL_LEDGER_STATE,
            users: { [currentUser.uid]: { name: userName, avatar: 'cat', role: 'host' } }
        };
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
        localStorage.setItem('sweet_ledger_code', code);
        setLedgerCode(code);
    } catch (e) {
        console.error("Create Error:", e);
        alert(`建立失敗: ${e.message}`);
    } finally {
        setLoading(false);
    }
  };

  const joinLedger = async (code, currentUser) => {
    if (!currentUser || !db) return;
    setLoading(true);
    const upperCode = code.toUpperCase();
    try {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', upperCode);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const currentData = docSnap.data();
            // 如果使用者不在名單內，自動加入
            if (!currentData.users || !currentData.users[currentUser.uid]) {
                const userName = currentUser.displayName || 'Guest';
                const updatedUsers = { 
                    ...currentData.users, 
                    [currentUser.uid]: { name: userName, avatar: 'dog', role: 'guest' } 
                };
                await updateDoc(docRef, { users: updatedUsers });
            }
            localStorage.setItem('sweet_ledger_code', upperCode);
            setLedgerCode(upperCode);
        } else {
            alert("找不到這個帳本代碼！");
        }
    } catch(e) {
        console.error("Join Error:", e);
        alert("加入失敗，請檢查網路");
    } finally {
        setLoading(false);
    }
  };
  
  const resetLedgerState = () => {
      setLedgerCode('');
      setLedgerData(null);
      localStorage.removeItem('sweet_ledger_code');
  };

  const value = {
    ledgerCode,
    setLedgerCode, // 暴露給 Onboarding 手動輸入用
    ledgerData,
    isInitializing,
    loading,
    createLedger,
    joinLedger,
    resetLedgerState
  };

  return (
    <LedgerContext.Provider value={value}>
      {children}
    </LedgerContext.Provider>
  );
}