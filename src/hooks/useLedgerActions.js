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
        const userName = currentUser.displayName || 'Host';

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
                const userName = currentUser.displayName || 'Guest';
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
        if (!ledgerCode || !ledgerDocData || !db) return;
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);
        let newProjects = [...(ledgerDocData.projects || [])];
        let projectId = projectData.id;
        const payload = { ...projectData, rates: projectData.rates || {}, type: projectData.type || 'public' };

        if (projectId) {
            newProjects = newProjects.map(p => p.id === projectId ? { ...p, ...payload } : p);
        } else {
            projectId = generateId();
            newProjects.push({ ...payload, id: projectId });
        }
        await updateDoc(docRef, { projects: newProjects });
        return projectId;
    }, [ledgerCode, ledgerDocData]);

    const deleteProject = useCallback(async (projectId) => {
        if (!ledgerCode || !ledgerDocData || !db) return;
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'ledgers', ledgerCode);

        const newProjects = ledgerDocData.projects.filter(p => p.id !== projectId);
        const newSubscriptions = (ledgerDocData.subscriptions || []).filter(s => s.projectId !== projectId);

        const q = query(collection(docRef, 'transactions'), where('projectId', '==', projectId));
        const snapshots = await getDocs(q);

        const batch = writeBatch(db);
        let count = 0;
        snapshots.forEach(doc => {
            if (count < 450) {
                batch.delete(doc.ref);
                count++;
            }
        });

        batch.update(docRef, { projects: newProjects, subscriptions: newSubscriptions });
        await batch.commit();

        if (snapshots.size > 450) {
            alert("專案交易過多，部分交易可能未完全刪除。");
        }
    }, [ledgerCode, ledgerDocData]);

    const reorderProjects = (newP) => simpleUpdate('projects', newP);
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
        const newP = ledgerDocData.projects.map(p => p.id === pid ? { ...p, rates: { ...p.rates, [cur]: parseFloat(val) } } : p);
        await simpleUpdate('projects', newP);
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
        fixIdentity
    };
};
