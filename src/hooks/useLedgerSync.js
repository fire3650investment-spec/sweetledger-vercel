import { useState, useEffect, useMemo, useRef } from 'react';
import { doc, onSnapshot, updateDoc, deleteField, collection } from 'firebase/firestore';
import { db, appId } from '../utils/firebase';

export const useLedgerSync = (user) => {
    // 1. State
    const [ledgerCode, setLedgerCode] = useState(() => {
        return localStorage.getItem('sweet_ledger_code') || '';
    });
    const [ledgerDocData, setLedgerDocData] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [isLedgerInitializing, setIsLedgerInitializing] = useState(true);

    // 2. LocalStorage Sync
    useEffect(() => {
        if (ledgerCode) {
            localStorage.setItem('sweet_ledger_code', ledgerCode);
        } else {
            localStorage.removeItem('sweet_ledger_code');
        }
    }, [ledgerCode]);

    // 3. Composite Data
    const ledgerData = useMemo(() => {
        if (!ledgerDocData) return null;

        // [Fix] Backward Compatibility
        // If sub-collection is empty, check if we have legacy array data.
        let displayTransactions = transactions;

        if (transactions.length === 0 && Array.isArray(ledgerDocData.transactions) && ledgerDocData.transactions.length > 0) {
            displayTransactions = ledgerDocData.transactions;
        }

        return {
            ...ledgerDocData,
            transactions: displayTransactions
        };
    }, [ledgerDocData, transactions]);

    // 4. Listeners
    useEffect(() => {
        if (!db || !ledgerCode) {
            if (!localStorage.getItem('sweet_ledger_code')) {
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

    return {
        ledgerCode,
        setLedgerCode,
        ledgerData,
        ledgerDocData, // Exposed for migration logic
        isLedgerInitializing
    };
};
