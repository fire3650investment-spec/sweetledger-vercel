// src/contexts/LedgerContext.jsx
// [Performance Fix] 分離 Data 與 Actions Context 以減少不必要的 re-render
import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { useLedgerSync } from '../hooks/useLedgerSync';
import { useTransactions } from '../hooks/useTransactions';
import { useSubscriptions } from '../hooks/useSubscriptions';
import { useLedgerActions as useLedgerActionsHook } from '../hooks/useLedgerActions';

// [Split Context] 資料 Context - 頻繁變動 (ledgerData 更新時觸發)
const LedgerDataContext = createContext();

// [Split Context] 動作 Context - 幾乎不變 (函數參考穩定)
const LedgerActionsContext = createContext();

/**
 * 取得 ledgerData 等資料狀態 (訂閱此 hook 的元件會在資料更新時重渲染)
 */
export const useLedgerData = () => {
    const context = useContext(LedgerDataContext);
    if (context === undefined) {
        throw new Error('useLedgerData must be used within a LedgerProvider');
    }
    return context;
};

/**
 * 取得動作函數 (訂閱此 hook 的元件不會因資料更新而重渲染)
 */
export const useLedgerActionsContext = () => {
    const context = useContext(LedgerActionsContext);
    if (context === undefined) {
        throw new Error('useLedgerActionsContext must be used within a LedgerProvider');
    }
    return context;
};

/**
 * [Backward Compatible] 同時取得資料與動作 (保持舊 API 相容)
 * 注意：使用此 hook 仍會在資料更新時重渲染
 */
export const useLedger = () => {
    const dataContext = useLedgerData();
    const actionsContext = useLedgerActionsContext();
    return { ...dataContext, ...actionsContext };
};

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
    const actionOps = useLedgerActionsHook(ledgerCode, setLedgerCode, user, ledgerDocData, disconnectLedger);

    // 3. Transactions
    const txOps = useTransactions(ledgerCode, user, ledgerDocData);

    // 4. Subscriptions
    const subOps = useSubscriptions(ledgerCode, ledgerDocData);

    // [Split] 資料值 - 會隨 ledgerData 變動而更新
    const dataValue = useMemo(() => ({
        ledgerCode,
        ledgerData,
        isLedgerInitializing,
    }), [ledgerCode, ledgerData, isLedgerInitializing]);

    // [Split] 動作值 - 函數參考穩定，幾乎不會觸發重渲染
    const actionsValue = useMemo(() => ({
        setLedgerCode,
        disconnectLedger,
        ...actionOps,
        ...txOps,
        ...subOps
    }), [setLedgerCode, disconnectLedger, actionOps, txOps, subOps]);

    return (
        <LedgerDataContext.Provider value={dataValue}>
            <LedgerActionsContext.Provider value={actionsValue}>
                {children}
            </LedgerActionsContext.Provider>
        </LedgerDataContext.Provider>
    );
};