import { useCallback } from 'react';
import { doc, updateDoc, setDoc, deleteDoc, deleteField, collection, writeBatch, arrayUnion } from 'firebase/firestore';
import { db, appId } from '../utils/firebase';
import { generateId } from '../utils/helpers';

export const useTransactions = (ledgerCode, user, ledgerDocData) => {

    const addTransaction = useCallback(async (payload) => {
        if (!ledgerCode || !user || !db) throw new Error("無效的帳本狀態");

        const {
            amount, currency, category, payer,
            splitType, customSplit, note, projectId,
            date, isSubscription, subCycle, subPayDay,
            paymentMethod
        } = payload;

        const cleanAmount = parseFloat(amount);
        if (isNaN(cleanAmount)) throw new Error("金額無效");

        let finalSplitType = splitType;
        let cleanCustomSplit = null;

        if (splitType === 'self') {
            finalSplitType = 'custom';
            cleanCustomSplit = { [payer]: cleanAmount };
        } else if (splitType === 'partner') {
            finalSplitType = 'custom';
            const allUsers = Object.keys(ledgerDocData?.users || {});
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
        } else if (customSplit) {
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

        const selectedDate = new Date(date).toISOString();
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const batch = writeBatch(db);

        if (isSubscription) {
            let nextDate = new Date(selectedDate);
            if (subCycle === 'monthly') {
                nextDate.setMonth(nextDate.getMonth() + 1);
                if (subPayDay) nextDate.setDate(parseInt(subPayDay));
            } else if (subCycle === 'weekly') {
                nextDate.setDate(nextDate.getDate() + 7);
            }

            const newSub = {
                ...commonData,
                name: note || category.name,
                cycle: subCycle,
                payDay: parseInt(subPayDay) || 1,
                mode: 'infinite',
                nextPaymentDate: nextDate.toISOString(),
            };

            // Subscriptions stored in Main Doc Array
            const newSubs = [...(ledgerDocData.subscriptions || []), newSub];
            batch.update(docRef, { subscriptions: newSubs });

            // Add First Transaction
            const txRef = doc(collection(docRef, 'transactions'), commonData.id);
            batch.set(txRef, { ...commonData, date: selectedDate, isSettlement: false });

        } else {
            const txRef = doc(collection(docRef, 'transactions'), commonData.id);
            batch.set(txRef, { ...commonData, date: selectedDate, isSettlement: false });
        }

        await batch.commit();
    }, [ledgerCode, user, ledgerDocData]);

    const updateTransaction = useCallback(async (updatedTx) => {
        if (!ledgerCode || !db) return;
        const finalTx = { ...updatedTx, amount: parseFloat(updatedTx.amount) };
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const txRef = doc(collection(ledgerRef, 'transactions'), finalTx.id);

        const safePayload = JSON.parse(JSON.stringify(finalTx));
        await updateDoc(txRef, safePayload);
    }, [ledgerCode]);

    const deleteTransaction = useCallback(async (txId) => {
        if (!ledgerCode || !db) return;
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const txRef = doc(collection(ledgerRef, 'transactions'), txId);
        await deleteDoc(txRef);
    }, [ledgerCode]);

    const settleUp = useCallback(async (amount, payerId, payeeName, projectId, paymentDate, customNote) => {
        if (!ledgerCode || !db) return;
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const txId = generateId();
        const txRef = doc(collection(ledgerRef, 'transactions'), txId);

        const settlementCategory = { id: 'settlement', name: '還款結清', icon: 'settlement', color: 'bg-emerald-100 text-emerald-600', hex: '#059669' };

        // [Date Logic] Use custom payment date if provided, otherwise now. Ensure ISO format.
        // If paymentDate is just '2025-01-01', append time to make it valid ISO if needed, or just use as is if logic supports YYYY-MM-DD
        // Our helpers usually prefer ISO. Let's make sure it's an ISO string.
        let outputDate = new Date().toISOString();
        if (paymentDate) {
            const d = new Date(paymentDate);
            if (!isNaN(d.getTime())) {
                // Keep time if provided, or set to noon to avoid timezone shifts if only date
                // Dashboard uses getLocalISODate which returns 'YYYY-MM-DD'.
                // We should append current time to keep it roughly correct order-wise
                const now = new Date();
                d.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
                outputDate = d.toISOString();
            }
        }

        await setDoc(txRef, {
            id: txId,
            amount: parseFloat(amount),
            currency: 'TWD',
            category: settlementCategory,
            payer: payerId,
            splitType: 'settlement',
            note: customNote || `還款給 ${payeeName}`,
            projectId: projectId,
            date: outputDate,
            isSettlement: true
        });
    }, [ledgerCode]);

    const migrateToSubCollection = useCallback(async () => {
        if (!ledgerDocData || !ledgerCode || !db) return;

        if (Array.isArray(ledgerDocData.transactions) && ledgerDocData.transactions.length > 0) {
            console.log("⚠️ Starting Migration to Sub-collection...");
            const legacyTxs = ledgerDocData.transactions;
            const batchSize = 400;

            for (let i = 0; i < legacyTxs.length; i += batchSize) {
                const chunk = legacyTxs.slice(i, i + batchSize);
                const batch = writeBatch(db);
                const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

                chunk.forEach(tx => {
                    const txId = tx.id || generateId();
                    const txRef = doc(collection(ledgerRef, 'transactions'), txId);
                    batch.set(txRef, { ...tx, id: txId });
                });

                await batch.commit();
                console.log(`Saved batch ${i} - ${i + chunk.length}`);
            }

            const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
            await updateDoc(ledgerRef, { transactions: deleteField() });
            console.log("✅ Migration Complete.");
            alert("資料庫升級完成！您的帳本現在支援無限筆數交易。");
        } else {
            alert("無需升級：目前沒有舊版交易資料。");
        }
    }, [ledgerDocData, ledgerCode]);

    return {
        addTransaction,
        updateTransaction,
        deleteTransaction,
        settleUp,
        migrateToSubCollection
    };
};
