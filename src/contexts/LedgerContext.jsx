import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { useLedgerSync } from '../hooks/useLedgerSync';
import { useTransactions } from '../hooks/useTransactions';
import { useSubscriptions } from '../hooks/useSubscriptions';
import { useLedgerActions } from '../hooks/useLedgerActions';

const LedgerContext = createContext();

export const useLedger = () => useContext(LedgerContext);

export const LedgerProvider = ({ children }) => {
    const { user } = useAuth();

    // 1. Sync & Data
    const {
        ledgerCode,
        setLedgerCode,
        ledgerData,
        ledgerDocData, // Needed for internal hooks
        isLedgerInitializing
    } = useLedgerSync(user);

    // Helper to disconnect
    const disconnectLedger = useCallback(() => {
        setLedgerCode('');
        localStorage.removeItem('sweet_ledger_code');
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('sweet_ledger_data_')) localStorage.removeItem(key);
        });
    }, [setLedgerCode]);

    // 2. Actions & Project Management
    const actionOps = useLedgerActions(ledgerCode, setLedgerCode, user, ledgerDocData, disconnectLedger);

    // 3. Transactions
    const txOps = useTransactions(ledgerCode, user, ledgerDocData);

    // 4. Subscriptions
    const subOps = useSubscriptions(ledgerCode, ledgerDocData);

    const value = useMemo(() => ({
        ledgerCode,
        setLedgerCode,
        ledgerData,
        isLedgerInitializing,
        disconnectLedger,
        ...actionOps,
        ...txOps,
        ...subOps
    }), [
        ledgerCode, setLedgerCode, ledgerData, isLedgerInitializing, disconnectLedger,
        actionOps, txOps, subOps
    ]);

    return (
        <LedgerContext.Provider value={value}>
            {children}
        </LedgerContext.Provider>
    );
};