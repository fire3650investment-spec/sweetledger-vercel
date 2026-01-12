import { useState, useEffect, useMemo } from 'react';
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

    const [isLedgerInitializing, setIsLedgerInitializing] = useState(() => {
        // If we have cached data, we are NOT initializing (UI can render)
        // We still sync in background, but don't block UI.
        const hasCache = safeLocalStorage.getItem(`sweet_ledger_data_${ledgerCode}`);
        return !hasCache;
    });

    // 2. LocalStorage Sync
    useEffect(() => {
        if (ledgerCode) {
            safeLocalStorage.setItem('sweet_ledger_code', ledgerCode);
        } else {
            safeLocalStorage.removeItem('sweet_ledger_code');
        }
    }, [ledgerCode]);

    // 3. Composite Data
    const ledgerData = useMemo(() => {
        if (!ledgerDocData) return null;

        // [Fix] Merge Sub-collection + Legacy Array
        // We must merge both sources to ensure users see all data during the migration phase.
        const legacyTxs = (Array.isArray(ledgerDocData.transactions)) ? ledgerDocData.transactions : [];
        const subTxs = transactions;

        // Deduplicate: If an ID exists in sub-collection, use that (newer version)
        const subIds = new Set(subTxs.map(t => t.id));
        const filteredLegacy = legacyTxs.filter(t => !subIds.has(t.id));

        const allTransactions = [...subTxs, ...filteredLegacy];

        // Sort by date desc
        allTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        return {
            ...ledgerDocData,
            transactions: allTransactions
        };
    }, [ledgerDocData, transactions]);

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

        // B. Sub-collection Listener
        const txCollectionRef = collection(ledgerRef, 'transactions');
        const unsubscribeTxs = onSnapshot(txCollectionRef, (snapshot) => {
            const txs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            txs.sort((a, b) => new Date(b.date) - new Date(a.date));
            setTransactions(txs);
        }, (error) => {
            console.log("Tx sub-collection issue:", error.message);
        });

        return () => {
            unsubscribeLedger();
            unsubscribeTxs();
        };
    }, [ledgerCode, user]);

    // [Cache Strategy] Persist to LocalStorage
    useEffect(() => {
        if (ledgerCode && ledgerDocData) {
            safeLocalStorage.setItem(`sweet_ledger_data_${ledgerCode}`, JSON.stringify(ledgerDocData));
        }
    }, [ledgerCode, ledgerDocData]);

    useEffect(() => {
        if (ledgerCode && transactions.length > 0) {
            safeLocalStorage.setItem(`sweet_ledger_txs_${ledgerCode}`, JSON.stringify(transactions));
        }
    }, [ledgerCode, transactions]);

    return {
        ledgerCode,
        setLedgerCode,
        ledgerData,
        ledgerDocData, // Exposed for migration logic
        isLedgerInitializing
    };
};
