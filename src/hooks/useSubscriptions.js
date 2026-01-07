import { useEffect, useCallback } from 'react';
import { doc, updateDoc, collection, writeBatch } from 'firebase/firestore';
import { db, appId } from '../utils/firebase';
import { generateId, getLocalISODate } from '../utils/helpers';

export const useSubscriptions = (ledgerCode, ledgerDocData) => {

    // Recurring Payment Logic
    useEffect(() => {
        if (!ledgerDocData || !ledgerDocData.subscriptions || !ledgerCode || !db) return;

        const todayStr = getLocalISODate();
        const lastCheckDate = ledgerDocData.lastSubscriptionCheck;
        if (lastCheckDate === todayStr) return;

        const localSessionKey = `temp_subs_lock_${ledgerCode}_${todayStr}`;
        if (sessionStorage.getItem(localSessionKey)) return;

        const timer = setTimeout(async () => {
            sessionStorage.setItem(localSessionKey, 'true');
            let updatesNeeded = false;
            let generatedTxs = [];
            let newSubscriptions = [...ledgerDocData.subscriptions];
            const now = new Date();
            now.setHours(0, 0, 0, 0);

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
                        isSettlement: false,
                        amount: parseFloat(txBase.amount) || 0
                    };
                    generatedTxs.push(tx);

                    if (sub.cycle === 'monthly') {
                        const currentMonth = nextDate.getMonth();
                        nextDate.setMonth(currentMonth + 1);
                        if (sub.payDay) {
                            const daysInNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
                            nextDate.setDate(Math.min(parseInt(sub.payDay), daysInNextMonth));
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

            if (updatesNeeded) {
                const batch = writeBatch(db);
                batch.update(docRef, {
                    subscriptions: newSubscriptions,
                    lastSubscriptionCheck: todayStr
                });

                generatedTxs.forEach(tx => {
                    const txRef = doc(collection(docRef, 'transactions'), tx.id);
                    batch.set(txRef, tx);
                });

                await batch.commit();
                console.log(`✅ 已執行自動扣款: ${generatedTxs.length} 筆`);
            } else {
                await updateDoc(docRef, { lastSubscriptionCheck: todayStr });
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [ledgerDocData, ledgerCode]);

    const deleteSubscription = useCallback(async (subId) => {
        if (!ledgerCode || !ledgerDocData || !db) return;
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const newS = (ledgerDocData.subscriptions || []).filter(s => s.id !== subId);
        await updateDoc(docRef, { subscriptions: newS });
    }, [ledgerDocData, ledgerCode]);

    return { deleteSubscription };
};
