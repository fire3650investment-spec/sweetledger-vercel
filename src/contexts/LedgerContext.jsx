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
  const [ledgerCode, setLedgerCode] = useState('');
  const [ledgerData, setLedgerData] = useState(null);
  const [isLedgerInitializing, setIsLedgerInitializing] = useState(true);

  // 1. 初始化：嘗試從 LocalStorage 恢復上次的 Ledger Code
  useEffect(() => {
    const savedCode = localStorage.getItem('sweet_ledger_code');
    if (savedCode) {
      setLedgerCode(savedCode);
    } else {
      setIsLedgerInitializing(false);
    }
  }, []);

  // 2. 監聽 Firestore 資料流 & 快取機制
  useEffect(() => {
    if (!ledgerCode) {
      setLedgerData(null);
      // 如果沒有 Code，但之前可能在 loading，這裡要結束 loading
      if (!localStorage.getItem('sweet_ledger_code')) {
          setIsLedgerInitializing(false);
      }
      return;
    }

    // 嘗試讀取快取 (讓 UI 瞬間顯示)
    const cacheKey = `sweet_ledger_data_${ledgerCode}`;
    try {
        const cachedData = localStorage.getItem(cacheKey);
        if (cachedData) {
            setLedgerData(JSON.parse(cachedData));
        }
    } catch (e) {
        console.error("Cache read error", e);
    }

    // 建立 Firestore 即時監聽
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem(cacheKey, JSON.stringify(data));
        setLedgerData(data);
      } else {
        // 找不到帳本 (可能被刪除)，清除狀態
        console.warn("Ledger not found");
        setLedgerCode('');
        setLedgerData(null);
        localStorage.removeItem('sweet_ledger_code');
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

    if (lastCheckDate === todayStr) return; // 今天檢查過了

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
            
            // 補上所有漏掉的週期 (限制 12 次以防無窮迴圈)
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

                // 計算下一次日期
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
  
  // [NEW] 檢查使用者是否已綁定帳本 (用於跨裝置同步)
  const checkUserBinding = async (uid) => {
      try {
          const userDocRef = doc(db, 'users', uid); // Root level users collection
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
    
    // 1. 建立帳本
    const newLedger = {
        ...INITIAL_LEDGER_STATE,
        users: { [currentUser.uid]: { name: userName, avatar: 'cat', role: 'host' } }
    };
    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);
    
    // 2. [NEW] 綁定 User -> Ledger
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
      // 如果使用者不在名單內，加入之
      if (!currentData.users || !currentData.users[currentUser.uid]) {
          const userName = currentUser.displayName || 'Guest';
          const updatedUsers = { ...currentData.users, [currentUser.uid]: { name: userName, avatar: 'dog', role: 'guest' } };
          await updateDoc(docRef, { users: updatedUsers });
      }
      
      // 2. [NEW] 綁定 User -> Ledger
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