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
import { generateId, getLocalISODate } from '../utils/helpers'; // [Fix] 引入時間工具

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

    // 2. Firebase Listener (Fixed: Ghost Ledger Handling)
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

        const unsubscribe = onSnapshot(docRef, async (docSnap) => { // async for cleanup
            if (docSnap.exists()) {
                const data = docSnap.data(); // Move to top

                if (user) {
                    // [Feature] **Passive Kick-out Check**
                    // 若這份帳本存在，但我 (user.uid) 不在 users 名單中 -> 代表我被踢出了
                    if (!data.users || !data.users[user.uid]) {
                        console.warn("User has been removed from ledger (Kick-out). Disconnecting...");
                        // disconnectLedger(); // Assuming disconnectLedger is defined elsewhere or will be added
                        // 嘗試清除 user document 狀態 (best effort)
                        try {
                            const userRef = doc(db, 'users', user.uid);
                            await updateDoc(userRef, { ledgerCode: deleteField() });
                        } catch (e) {
                            // Ignore permission error if kick-out removes write access
                        }
                        return; // Stop processing
                    }
                }

                localStorage.setItem(cacheKey, JSON.stringify(data));
                setLedgerData(data);
            } else {
                console.warn("Ledger not found (remote) - Detected Ghost Ledger");
                // FIX: 自動修復幽靈帳本狀態
                // 若遠端帳本已被刪除，必須切斷使用者的連結，否則會陷入白屏或無限重試迴圈
                if (user) {
                    try {
                        const userRef = doc(db, 'users', user.uid);
                        await updateDoc(userRef, { ledgerCode: deleteField() });
                    } catch (e) {
                        console.error("Failed to unlink ghost ledger:", e);
                    }
                }
                // 清除本地狀態
                setLedgerCode('');
                setLedgerData(null);
                localStorage.removeItem('sweet_ledger_code');
                localStorage.removeItem(cacheKey);
                // 這裡不使用 alert 避免無限彈窗，由 UI 層處理呈現
            }
            setIsLedgerInitializing(false);
        }, (error) => {
            console.error("Snapshot error:", error);
            // 注意：權限錯誤或網路錯誤不應觸發 disconnect，僅停止 loading
            setIsLedgerInitializing(false);
        });

        return () => unsubscribe();
    }, [ledgerCode, user]);

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

            // (1.5) Payment Methods Init
            if (!ledgerData.paymentMethods) {
                needsUpdate = true;
                updates.paymentMethods = [
                    { id: 'cash', name: '現金' },
                    { id: 'credit_card', name: '信用卡' }
                ];
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

    // 4. Subscription Logic (CRITICAL FIX: Firestore-based Lock)
    useEffect(() => {
        if (!ledgerData || !ledgerData.subscriptions || !ledgerCode || !db) return;

        // [Architect] 使用 Firestore 的欄位作為唯一真理，而非 localStorage
        const todayStr = getLocalISODate();
        const lastCheckDate = ledgerData.lastSubscriptionCheck;

        // 如果雲端已經標記今天檢查過了，直接跳過
        if (lastCheckDate === todayStr) return;

        // [Optimization] 防止單次 Session 重複觸發 (Local Lock)
        const localSessionKey = `temp_subs_lock_${ledgerCode}_${todayStr}`;
        if (sessionStorage.getItem(localSessionKey)) return;

        // 設定一個延遲，給予「取消執行」的機會 (Debounce/Race Protection)
        const timer = setTimeout(async () => {
            sessionStorage.setItem(localSessionKey, 'true'); // Set Local Lock

            let updatesNeeded = false;
            let generatedTxs = [];
            let newSubscriptions = [...ledgerData.subscriptions];
            const now = new Date();
            now.setHours(0, 0, 0, 0);

            newSubscriptions = newSubscriptions.map(sub => {
                let nextDate = new Date(sub.nextPaymentDate);
                let updated = false;
                let loopCount = 0; // 安全閥，防止死無窮迴圈

                // 檢查是否到達扣款日
                while (nextDate <= now && loopCount < 12) {
                    updated = true;
                    updatesNeeded = true;
                    const { nextPaymentDate, cycle, payDay, mode, ...txBase } = sub;

                    // 產生交易紀錄
                    const tx = {
                        ...txBase,
                        id: generateId(),
                        date: nextDate.toISOString(),
                        note: `[自動扣款] ${sub.name}`,
                        isSettlement: false,
                        amount: parseFloat(txBase.amount) || 0
                    };
                    generatedTxs.push(tx);

                    // 計算下一次扣款日
                    if (sub.cycle === 'monthly') {
                        const currentMonth = nextDate.getMonth();
                        nextDate.setMonth(currentMonth + 1);
                        if (sub.payDay) {
                            // 處理月底日期 (如 2/30 -> 2/28)
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

            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

            // 無論是否有新交易，都必須更新 lastSubscriptionCheck 以防止重複檢查
            // 使用 updateDoc 原子操作
            if (updatesNeeded) {
                await updateDoc(docRef, {
                    ...(generatedTxs.length > 0 ? { transactions: arrayUnion(...generatedTxs) } : {}),
                    subscriptions: newSubscriptions,
                    lastSubscriptionCheck: todayStr // [Key Fix] 更新雲端檢查日期
                });
                console.log(`✅ 已執行自動扣款: ${generatedTxs.length} 筆`);
            } else {
                // 即使沒交易，也要標記今天已檢查
                await updateDoc(docRef, { lastSubscriptionCheck: todayStr });
            }
        }, 5000); // 5秒延遲，確保資料載入穩定

        // [Crucial] 若在等待期間 ledgerData 更新了 (代表另一半已經執行了扣款)，
        // 這個 cleanup function 會被觸發，取消本地的 timer，防止雙重扣款。
        return () => clearTimeout(timer);

    }, [ledgerData, ledgerCode]); // 依賴 ledgerData 確保能感知遠端變更


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
            users: { [currentUser.uid]: { name: userName, avatar: 'cat', role: 'host' } },
            lastSubscriptionCheck: getLocalISODate() // Init date
        };
        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), newLedger);

        await setDoc(doc(db, 'users', currentUser.uid), {
            email: currentUser.email,
            ledgerCode: code,
            role: 'host',
            updatedAt: new Date().toISOString()
        }, { merge: true });

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

    const kickMember = useCallback(async (targetUid) => {
        if (!ledgerCode || !user || !db || !ledgerData) return;

        // 1. 權限檢查：只有 Host 能踢人
        const myRole = ledgerData.users[user.uid]?.role;
        if (myRole !== 'host') {
            alert('權限不足：只有戶長 (Host) 可以移除成員。');
            return;
        }

        // 2. 不能踢自己 (應用 leaveLedger)
        if (targetUid === user.uid) {
            alert('不能移除自己，請使用「退出帳本」功能。');
            return;
        }

        if (!window.confirm('確定要移除這位成員嗎？\n移除後，該成員將無法再存取帳本。')) return;

        try {
            const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            await updateDoc(docRef, {
                [`users.${targetUid}`]: deleteField()
            });
            alert('成員已成功移除。');
        } catch (e) {
            console.error("Kick Member Error:", e);
            alert("移除失敗，請稍後再試 (Permission Denied?)。");
        }
    }, [ledgerCode, user, ledgerData]);

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
            date, isSubscription, subCycle, subPayDay,
            paymentMethod
        } = payload;

        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const selectedDate = new Date(date).toISOString();
        const cleanAmount = parseFloat(amount);

        if (isNaN(cleanAmount)) throw new Error("金額無效");

        let cleanCustomSplit = null;
        let finalSplitType = splitType;

        // Fix: Implement Logic for 'self' and 'partner' shortcuts
        if (splitType === 'self') {
            finalSplitType = 'custom';
            cleanCustomSplit = { [payer]: cleanAmount };
        } else if (splitType === 'partner') {
            finalSplitType = 'custom';
            const allUsers = Object.keys(ledgerData?.users || {});
            const partners = allUsers.filter(u => u !== payer);

            if (partners.length === 1) {
                cleanCustomSplit = { [partners[0]]: cleanAmount };
            } else if (partners.length > 1) {
                const share = cleanAmount / partners.length;
                cleanCustomSplit = {};
                partners.forEach(p => cleanCustomSplit[p] = share);
            } else {
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
            paymentMethod: paymentMethod || null,
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
    }, [ledgerCode, user, ledgerData]);

    const updateTransaction = useCallback(async (updatedTx) => {
        if (!ledgerCode || !ledgerData || !db) return;

        let finalTx = { ...updatedTx };
        const cleanAmount = parseFloat(finalTx.amount);
        finalTx.amount = cleanAmount;

        // [Fix] Normalize 'self' and 'partner' shortcuts to 'custom'
        if (finalTx.splitType === 'self') {
            finalTx.splitType = 'custom';
            finalTx.customSplit = { [finalTx.payer]: cleanAmount };
        } else if (finalTx.splitType === 'partner') {
            finalTx.splitType = 'custom';
            const allUsers = Object.keys(ledgerData.users || {});
            const partners = allUsers.filter(u => u !== finalTx.payer);

            if (partners.length === 1) {
                finalTx.customSplit = { [partners[0]]: cleanAmount };
            } else if (partners.length > 1) {
                const share = cleanAmount / partners.length;
                const split = {};
                partners.forEach(p => split[p] = share);
                finalTx.customSplit = split;
            } else {
                finalTx.customSplit = { [finalTx.payer]: cleanAmount };
            }
        }

        if (finalTx.customSplit) {
            const cleanSplit = {};
            Object.keys(finalTx.customSplit).forEach(uid => {
                cleanSplit[uid] = parseFloat(finalTx.customSplit[uid]) || 0;
            });
            finalTx.customSplit = cleanSplit;
        }

        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const updatedTxs = ledgerData.transactions.map(tx => tx.id === finalTx.id ? finalTx : tx);
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
    const updatePaymentMethods = useCallback(async (newMethods) => {
        if (!ledgerCode || !db) return;
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        await updateDoc(docRef, { paymentMethods: newMethods });
    }, [ledgerCode]);

    const saveProject = useCallback(async (projectData) => {
        if (!ledgerCode || !ledgerData || !db) return;
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        let newProjects = [...(ledgerData.projects || [])];

        const { type = 'public', owner = null } = projectData;
        const projectWithRates = {
            ...projectData,
            // [Fix] 移除寫死匯率，改為空物件
            rates: projectData.rates || {},
            type,
            ...(type === 'private' && owner ? { owner } : {})
        };

        let projectId = projectData.id;
        if (projectId) {
            newProjects = newProjects.map(p => p.id === projectId ? { ...p, ...projectWithRates } : p);
        } else {
            projectId = generateId();
            newProjects.push({ ...projectWithRates, id: projectId });
        }
        await updateDoc(docRef, { projects: newProjects });
        return projectId;
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
            // [Fix] 移除寫死匯率 fallback，改為空物件
            if (p.id === projectId) return { ...p, rates: { ...(p.rates || {}), [currency]: numVal } };
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
        setLedgerCode,
        ledgerData,
        isLedgerInitializing,
        createLedger,
        joinLedger,
        disconnectLedger,
        leaveLedger,
        kickMember,
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
        setLedgerCode,
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