// src/utils/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// --- Configuration ---
let firebaseConfigStr = import.meta.env.VITE_FIREBASE_CONFIG;
if (!firebaseConfigStr || firebaseConfigStr === '{}') {
    firebaseConfigStr = window.__firebase_config;
}

// [Debug] Log status (Don't log full key for security)
if (!firebaseConfigStr) {
    console.error("🚨 VITE_FIREBASE_CONFIG is missing!");
} else {
    console.log("✅ VITE_FIREBASE_CONFIG found (Length: " + firebaseConfigStr.length + ")");
}

let app = null;
try {
    const config = firebaseConfigStr ? JSON.parse(firebaseConfigStr) : {};
    if (Object.keys(config).length > 0) {
        app = initializeApp(config);
        console.log("🔥 Firebase App Initialized Successfully");
    } else {
        console.warn("⚠️ Firebase config is empty. Check Vercel settings.");
    }
} catch (e) {
    console.error("❌ Firebase Config Parse/Init Error:", e);
    // Print a hint for Vercel users
    console.log("💡 HINT: Ensure your Vercel Environment Variable value is a pure JSON string without wrapping quotes.");
}

// Export instances
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const appId = 'sweet-ledger-beta';
export default app;