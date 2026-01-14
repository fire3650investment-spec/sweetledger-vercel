import { useCallback } from 'react';
import { doc, updateDoc, deleteField, setDoc, getDoc, deleteDoc, query, collection, where, getDocs, writeBatch } from 'firebase/firestore';
import { deleteUser } from 'firebase/auth';
import { db, appId } from '../utils/firebase';
import { INITIAL_LEDGER_STATE, DEFAULT_CATEGORIES } from '../utils/constants';
import { generateId, getLocalISODate } from '../utils/helpers';

export const useLedgerActions = (ledgerCode, setLedgerCode, user, ledgerDocData, disconnectLedger) => {

    const simpleUpdate = async (field, newVal) => {
        if (!ledgerCode || !db) return;
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), { [field]: newVal });
    };

    // --- Lifecycle ---

    const createLedger = useCallback(async (currentUser) => {
        if (!currentUser) throw new Error("請先登入");
        if (!db) throw new Error("資料庫未連線");
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const userName = currentUser.displayName || '我';

        await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code), {
            ...INITIAL_LEDGER_STATE,
            users: { [currentUser.uid]: { name: userName, avatar: 'cat', role: 'host' } },
            lastSubscriptionCheck: getLocalISODate()
        });

        await setDoc(doc(db, 'users', currentUser.uid), {
            email: currentUser.email,
            ledgerCode: code,
            role: 'host',
            updatedAt: new Date().toISOString()
        }, { merge: true });

        localStorage.setItem('sweet_ledger_code', code);
        setLedgerCode(code);
        return code;
    }, [setLedgerCode]);

    const joinLedger = useCallback(async (code, currentUser) => {
        if (!currentUser) throw new Error("請先登入");
        if (!db) throw new Error("資料庫未連線");
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', code);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const currentData = docSnap.data();
            if (!currentData.users || !currentData.users[currentUser.uid]) {
                const userName = currentUser.displayName || '對方';
                await updateDoc(docRef, {
                    [`users.${currentUser.uid}`]: { name: userName, avatar: 'dog', role: 'guest' }
                });
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
    }, [setLedgerCode]);

    const leaveLedger = useCallback(async () => {
        if (!ledgerCode || !user || !db) return;
        if (!window.confirm('確定要退出此帳本嗎？')) return;
        try {
            await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), {
                [`users.${user.uid}`]: deleteField()
            });
            disconnectLedger();
            alert('您已成功退出帳本。');
        } catch (e) { alert("退出失敗"); }
    }, [ledgerCode, user, disconnectLedger]);

    const kickMember = useCallback(async (targetUid) => {
        if (!ledgerCode || !user || !db || !ledgerDocData) return;
        if (ledgerDocData.users[user.uid]?.role !== 'host') {
            alert('權限不足'); return;
        }
        if (targetUid === user.uid) return;
        if (!window.confirm('確定要移除這位成員嗎？')) return;

        try {
            await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), {
                [`users.${targetUid}`]: deleteField()
            });
            alert('成員已成功移除。');
        } catch (e) { alert("移除失敗"); }
    }, [ledgerCode, user, ledgerDocData]);

    const checkUserBinding = useCallback(async (uid) => {
        if (!db) return null;
        try {
            const userDoc = await getDoc(doc(db, 'users', uid));
            if (userDoc.exists()) return userDoc.data().ledgerCode;
        } catch (e) { }
        return null;
    }, []);

    // --- Projects & Categories ---

    const saveProject = useCallback(async (projectData) => {
        if (!ledgerCode || !db) return;
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

        // [Migrated to Sub-collection]
        let projectId = projectData.id || generateId();
        const payload = {
            ...projectData,
            id: projectId,
            rates: projectData.rates || {},
            type: projectData.type || 'public',
            updatedAt: new Date().toISOString()
        };

        await setDoc(doc(ledgerRef, 'projects', projectId), payload, { merge: true });
        return projectId;
    }, [ledgerCode]);

    const deleteProject = useCallback(async (projectId) => {
        if (!ledgerCode || !db) return;
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

        // Delete related Transactions
        const q = query(collection(ledgerRef, 'transactions'), where('projectId', '==', projectId));
        const snapshots = await getDocs(q);

        const batch = writeBatch(db);
        let count = 0;
        snapshots.forEach(doc => {
            if (count < 450) {
                batch.delete(doc.ref);
                count++;
            }
        });

        // Delete from Sub-collection
        batch.delete(doc(ledgerRef, 'projects', projectId));

        // Delete related Subscriptions (if any)
        // Note: Subscriptions should also be migrated to sub-collection, so we delete that too
        // For now, simpler to query subscriptions by projectId
        const subQ = query(collection(ledgerRef, 'subscriptions'), where('projectId', '==', projectId));
        const subSnaps = await getDocs(subQ);
        subSnaps.forEach(d => batch.delete(d.ref));

        // [Legacy Cleanup] If project exists in legacy array, remove it too
        if (ledgerDocData && Array.isArray(ledgerDocData.projects)) {
            const newProjects = ledgerDocData.projects.filter(p => p.id !== projectId);
            if (newProjects.length !== ledgerDocData.projects.length) {
                batch.update(ledgerRef, { projects: newProjects });
            }
        }

        await batch.commit();

        if (snapshots.size > 450) {
            alert("專案交易過多，部分交易可能未完全刪除。");
        }
    }, [ledgerCode, ledgerDocData]);

    const reorderProjects = async (newProjects) => {
        if (!ledgerCode || !db) return;
        const batch = writeBatch(db);
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

        newProjects.forEach((proj, index) => {
            batch.update(doc(ledgerRef, 'projects', proj.id), { order: index });
        });

        await batch.commit();
    };
    const reorderCategories = (newC) => simpleUpdate('customCategories', newC);

    const deleteCategory = async (catId) => {
        const newC = (ledgerDocData.customCategories || DEFAULT_CATEGORIES).filter(c => c.id !== catId);
        await simpleUpdate('customCategories', newC);
    };

    const saveCategory = async (catData) => {
        let newC = [...(ledgerDocData.customCategories || DEFAULT_CATEGORIES)];
        if (catData.id) newC = newC.map(c => c.id === catData.id ? catData : c);
        else newC.push({ ...catData, id: generateId() });
        await simpleUpdate('customCategories', newC);
    };

    const updateProjectRates = async (pid, cur, val) => {
        if (!ledgerCode || !db) return;
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        await updateDoc(doc(ledgerRef, 'projects', pid), {
            [`rates.${cur}`]: parseFloat(val)
        });
    };

    const updateUserSetting = async (field, val) => {
        if (!ledgerCode || !user) return;
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode), { [`users.${user.uid}.${field}`]: val });
    };

    const updatePaymentMethods = async (newMethods) => simpleUpdate('paymentMethods', newMethods);

    // --- Danger Zone ---

    const resetAccount = useCallback(async () => {
        if (!ledgerCode || !db || !user) return;
        if (ledgerDocData.users[user.uid]?.role !== 'host') { alert("權限不足"); return; }
        if (!window.confirm('確定要清空所有交易嗎？')) return;

        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        const batch = writeBatch(db);
        batch.update(docRef, { access_token_revoked: true, subscriptions: [] });

        const q = query(collection(docRef, 'transactions'));
        const snaps = await getDocs(q);
        snaps.forEach(d => batch.delete(d.ref));

        await batch.commit();
        alert('帳本已重置');
    }, [ledgerCode, ledgerDocData, user]);

    const deleteAccount = useCallback(async () => {
        if (!user || !db) return;
        try {
            if (ledgerCode) {
                const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
                const snap = await getDoc(docRef);
                if (snap.exists()) {
                    const data = snap.data();
                    if (Object.keys(data.users || {}).length <= 1) {
                        await deleteDoc(docRef);
                    } else {
                        await updateDoc(docRef, { [`users.${user.uid}`]: deleteField() });
                    }
                }
            }
            await deleteDoc(doc(db, 'users', user.uid));
            await deleteUser(user);
            disconnectLedger();
        } catch (error) {
            if (error.code === 'auth/requires-recent-login') throw new Error('REQ_RELOGIN');
            throw error;
        }
    }, [user, ledgerCode, disconnectLedger]);

    const fixIdentity = () => { }; // No-op


    const migrateToSubCollections = useCallback(async () => {
        if (!ledgerCode || !ledgerDocData || !db) return;

        const batch = writeBatch(db);
        const ledgerRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        let migratedCount = 0;

        // 1. Migrate Projects
        if (Array.isArray(ledgerDocData.projects) && ledgerDocData.projects.length > 0) {
            console.log("Migrating projects...", ledgerDocData.projects.length);
            ledgerDocData.projects.forEach((p, idx) => {
                const pRef = doc(ledgerRef, 'projects', p.id);
                batch.set(pRef, { ...p, order: idx }, { merge: true });
            });
            batch.update(ledgerRef, { projects: deleteField() });
            migratedCount++;
        }

        // 2. Migrate Subscriptions
        if (Array.isArray(ledgerDocData.subscriptions) && ledgerDocData.subscriptions.length > 0) {
            console.log("Migrating subscriptions...", ledgerDocData.subscriptions.length);
            ledgerDocData.subscriptions.forEach((s) => {
                const sId = s.id || generateId();
                const sRef = doc(ledgerRef, 'subscriptions', sId);
                batch.set(sRef, { ...s, id: sId }, { merge: true });
            });
            batch.update(ledgerRef, { subscriptions: deleteField() });
            migratedCount++;
        }

        if (migratedCount > 0) {
            await batch.commit();
            console.log("Migration completed!");
            alert("資料庫升級完成 (Projects & Subscriptions)");
        }
    }, [ledgerCode, ledgerDocData]);

    return {
        createLedger,
        joinLedger,
        leaveLedger,
        kickMember,
        checkUserBinding,
        saveProject,
        deleteProject,
        reorderProjects,
        reorderCategories,
        deleteCategory,
        saveCategory,
        updateProjectRates,
        updateUserSetting,
        updatePaymentMethods,
        resetAccount,
        deleteAccount,
        fixIdentity,
        migrateToSubCollections
    };
};
