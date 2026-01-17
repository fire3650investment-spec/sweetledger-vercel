import { useState, useEffect, useMemo, useRef } from 'react';
import { doc, onSnapshot, updateDoc, deleteField, collection } from 'firebase/firestore';
import { db, appId } from '../utils/firebase';
import { generateId, getLocalISODate, safeLocalStorage } from '../utils/helpers';

export const useLedgerSync = (user) => {
    // 1. State
    const [ledgerCode, setLedgerCode] = useState(() => {
        return safeLocalStorage.getItem('sweet_ledger_code') || '';
    });

    // [Cache Strategy] Init from LocalStorage
    const [ledgerDocData, setLedgerDocData] = useState(() => {
        try {
            const cached = safeLocalStorage.getItem(`sweet_ledger_data_${ledgerCode}`);
            return cached ? JSON.parse(cached) : null;
        } catch (e) { return null; }
    });

    const [transactions, setTransactions] = useState(() => {
        try {
            const cached = safeLocalStorage.getItem(`sweet_ledger_txs_${ledgerCode}`);
            return cached ? JSON.parse(cached) : [];
        } catch (e) { return []; }
    });

    // [New] Projects State (Sub-collection)
    const [projects, setProjects] = useState(() => {
        try {
            const cached = safeLocalStorage.getItem(`sweet_ledger_projects_${ledgerCode}`);
            return cached ? JSON.parse(cached) : [];
        } catch (e) { return []; }
    });

    // [New] Subscriptions State (Sub-collection)
    const [subscriptions, setSubscriptions] = useState(() => {
        try {
            const cached = safeLocalStorage.getItem(`sweet_ledger_subscriptions_${ledgerCode}`);
            return cached ? JSON.parse(cached) : [];
        } catch (e) { return []; }
    });

    const [isLedgerInitializing, setIsLedgerInitializing] = useState(() => {
        const hasCache = safeLocalStorage.getItem(`sweet_ledger_data_${ledgerCode}`);
        return !hasCache;
    });

    // [Fix 1] Track previous ledgerCode to detect switching vs disconnecting
    const prevLedgerCodeRef = useRef(ledgerCode);

    // 2. LocalStorage Sync + Cache Pre-load on Switch
    useEffect(() => {
        if (ledgerCode) {
            safeLocalStorage.setItem('sweet_ledger_code', ledgerCode);

            // [Fix 1] When switching ledgers (not first load), pre-load cache for new ledger
            if (prevLedgerCodeRef.current && prevLedgerCodeRef.current !== ledgerCode) {
                // Switching ledgers - load cache for new one immediately to prevent null flash
                try {
                    const cachedDoc = safeLocalStorage.getItem(`sweet_ledger_data_${ledgerCode}`);
                    const cachedTxs = safeLocalStorage.getItem(`sweet_ledger_txs_${ledgerCode}`);
                    const cachedProjs = safeLocalStorage.getItem(`sweet_ledger_projects_${ledgerCode}`);
                    const cachedSubs = safeLocalStorage.getItem(`sweet_ledger_subscriptions_${ledgerCode}`);

                    if (cachedDoc) setLedgerDocData(JSON.parse(cachedDoc));
                    if (cachedTxs) setTransactions(JSON.parse(cachedTxs));
                    if (cachedProjs) setProjects(JSON.parse(cachedProjs));
                    if (cachedSubs) setSubscriptions(JSON.parse(cachedSubs));

                    // If we have cached doc, no need to show initializing
                    if (cachedDoc) setIsLedgerInitializing(false);
                    else setIsLedgerInitializing(true);
                } catch (e) {
                    setIsLedgerInitializing(true);
                }
            }
            prevLedgerCodeRef.current = ledgerCode;
        } else {
            // Disconnecting - clear everything
            safeLocalStorage.removeItem('sweet_ledger_code');
            prevLedgerCodeRef.current = '';
        }
    }, [ledgerCode]);

    // 3. Composite Data
    const ledgerData = useMemo(() => {
        if (!ledgerDocData) return null;

        // [Fix] Merge Sub-collection + Legacy Array
        // We must merge both sources to ensure users see all data during the migration phase.
        const legacyTxs = (Array.isArray(ledgerDocData.transactions)) ? ledgerDocData.transactions : [];
        const subTxs = transactions;

        // Deduplicate Transitions
        const subIds = new Set(subTxs.map(t => t.id));
        const filteredLegacy = legacyTxs.filter(t => !subIds.has(t.id));

        const allTransactions = [...subTxs, ...filteredLegacy];
        // [UX] 同一天內，後記的在上面（利用 ID 包含時間戳的特性）
        allTransactions.sort((a, b) => {
            const dateA = new Date(a.date).setHours(0, 0, 0, 0);
            const dateB = new Date(b.date).setHours(0, 0, 0, 0);
            if (dateB !== dateA) return dateB - dateA; // 日期降序
            return (b.id || '').localeCompare(a.id || ''); // 同日按 ID 降序
        });

        // [Migration] Merge Projects (Array + Sub-collection)
        const legacyProjects = (Array.isArray(ledgerDocData.projects)) ? ledgerDocData.projects : [];
        const subProjects = projects;

        const subProjIds = new Set(subProjects.map(p => p.id));
        const filteredLegacyProjects = legacyProjects.filter(p => !subProjIds.has(p.id));

        let allProjects = [...subProjects, ...filteredLegacyProjects];

        // Sort projects: prefer 'order' field, fallback to original index logic implicitly
        // Since we combined them, array order is mixed.
        // Best effort: separate those with 'order' and those without?
        // Or just sort by order if available.
        allProjects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

        // [Migration] Merge Subscriptions (Array + Sub-collection)
        const legacySubs = (Array.isArray(ledgerDocData.subscriptions)) ? ledgerDocData.subscriptions : [];
        const subSubs = subscriptions;

        const subSubIds = new Set(subSubs.map(s => s.id));
        const filteredLegacySubs = legacySubs.filter(s => !subSubIds.has(s.id));

        const allSubscriptions = [...subSubs, ...filteredLegacySubs];

        return {
            ...ledgerDocData,
            transactions: allTransactions,
            projects: allProjects,
            subscriptions: allSubscriptions
        };
    }, [ledgerDocData, transactions, projects, subscriptions]);

    // 4. Listeners
    useEffect(() => {
        if (!db || !ledgerCode) {
            if (!safeLocalStorage.getItem('sweet_ledger_code')) {
                setLedgerDocData(null);
                setTransactions([]);
                setIsLedgerInitializing(false);
            }
            return;
        }

        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

        // A. Main Doc Listener
        const unsubscribeLedger = onSnapshot(ledgerRef, async (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();

                // Kick-out Check
                if (user && (!data.users || !data.users[user.uid])) {
                    console.warn("User removed from ledger. Disconnecting...");
                    try {
                        await updateDoc(doc(db, 'users', user.uid), { ledgerCode: deleteField() });
                    } catch (e) { }
                    setLedgerCode('');
                    return;
                }
                setLedgerDocData(data);
            } else {
                // Ghost Ledger Check
                console.warn("Ghost Ledger Detected");
                if (user) {
                    try {
                        await updateDoc(doc(db, 'users', user.uid), { ledgerCode: deleteField() });
                    } catch (e) { }
                }
                setLedgerCode('');
                setLedgerDocData(null);
            }
            setIsLedgerInitializing(false);
        }, (error) => {
            console.error("Ledger snapshot error:", error);
            setIsLedgerInitializing(false);
        });

        // B. Sub-collection Listener (Transactions)
        const txCollectionRef = collection(ledgerRef, 'transactions');
        const unsubscribeTxs = onSnapshot(txCollectionRef, (snapshot) => {
            const txs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            // [UX] 同一天內，後記的在上面
            txs.sort((a, b) => {
                const dateA = new Date(a.date).setHours(0, 0, 0, 0);
                const dateB = new Date(b.date).setHours(0, 0, 0, 0);
                if (dateB !== dateA) return dateB - dateA;
                return (b.id || '').localeCompare(a.id || '');
            });
            setTransactions(txs);
        }, (error) => {
            console.log("Tx sub-collection issue:", error.message);
        });

        // C. Sub-collection Listener (Projects)
        const projCollectionRef = collection(ledgerRef, 'projects');
        const unsubscribeProjects = onSnapshot(projCollectionRef, (snapshot) => {
            const projs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setProjects(projs);
        }, (error) => {
            console.log("Projects sub-collection issue:", error.message);
        });

        // D. Sub-collection Listener (Subscriptions)
        const subCollectionRef = collection(ledgerRef, 'subscriptions');
        const unsubscribeSubscriptions = onSnapshot(subCollectionRef, (snapshot) => {
            const subs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setSubscriptions(subs);
        }, (error) => {
            console.log("Subscriptions sub-collection issue:", error.message);
        });

        return () => {
            unsubscribeLedger();
            unsubscribeTxs();
            unsubscribeProjects();
            unsubscribeSubscriptions();
        };
    }, [ledgerCode, user]);

    // [Cache Strategy] Persist to LocalStorage
    useEffect(() => {
        if (ledgerCode && ledgerDocData) {
            safeLocalStorage.setItem(`sweet_ledger_data_${ledgerCode}`, JSON.stringify(ledgerDocData));
        }
    }, [ledgerCode, ledgerDocData]);

    useEffect(() => {
        if (ledgerCode) {
            if (transactions.length > 0) {
                safeLocalStorage.setItem(`sweet_ledger_txs_${ledgerCode}`, JSON.stringify(transactions));
            } else {
                // [Fix] 若交易為空，清除舊快取避免顯示過時資料
                safeLocalStorage.removeItem(`sweet_ledger_txs_${ledgerCode}`);
            }
        }
    }, [ledgerCode, transactions]);

    // [New] Projects & Subscriptions Persistence
    useEffect(() => {
        if (ledgerCode && projects.length > 0) {
            safeLocalStorage.setItem(`sweet_ledger_projects_${ledgerCode}`, JSON.stringify(projects));
        }
    }, [ledgerCode, projects]);

    useEffect(() => {
        if (ledgerCode && subscriptions.length > 0) {
            safeLocalStorage.setItem(`sweet_ledger_subscriptions_${ledgerCode}`, JSON.stringify(subscriptions));
        }
    }, [ledgerCode, subscriptions]);

    return {
        ledgerCode,
        setLedgerCode,
        ledgerData,
        ledgerDocData, // Exposed for migration logic
        isLedgerInitializing
    };
};
