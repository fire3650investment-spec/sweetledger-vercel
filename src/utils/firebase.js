import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// --- Configuration ---
// 優先讀取環境變數，若無則讀取 Window 物件 (Deployment Injection)
let firebaseConfigStr = import.meta.env.VITE_FIREBASE_CONFIG;
if (!firebaseConfigStr || firebaseConfigStr === '{}') {
    firebaseConfigStr = window.__firebase_config;
}

let app = null;
try {
    const config = firebaseConfigStr ? JSON.parse(firebaseConfigStr) : {};
    if (Object.keys(config).length > 0) {
        app = initializeApp(config);
    } else {
        console.warn("Firebase config is empty. Check Vercel settings.");
    }
} catch (e) {
    console.error("Firebase Config Parse/Init Error:", e);
}

// Export instances
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const appId = 'sweet-ledger-beta';
export default app;