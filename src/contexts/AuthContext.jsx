// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut,
  signInWithCustomToken 
} from 'firebase/auth';
import { auth } from '../utils/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // [防白屏關鍵] 1. 同步初始化：直接從 localStorage 讀取上次的使用者資訊
  // 這樣在 Firebase 檢查完成前，UI 就有 user.uid 可以跑邏輯，不會報錯
  const [user, setUser] = useState(() => {
    try {
      const cached = localStorage.getItem('sweet_user_cache');
      return cached ? JSON.parse(cached) : null;
    } catch (e) {
      console.warn("User cache parse failed:", e);
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 若 Firebase 初始化失敗，直接結束 loading
    if (!auth) {
        setLoading(false);
        return;
    }

    // 處理 Custom Token
    const initCustomToken = async () => {
        let token = import.meta.env.VITE_AUTH_TOKEN || window.__initial_auth_token;
        if (token && token.length > 2 && token !== '""') {
             try {
                 await signInWithCustomToken(auth, token);
             } catch (e) {
                 console.warn("Custom Token flow skipped:", e.message);
             }
        }
    };
    initCustomToken();

    // 監聽登入狀態
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
          // [優化] 2. 更新快取：只存 UI 需要的最小欄位，避免循環引用報錯
          const serializableUser = {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
              isCached: false // 標記這是真實資料
          };
          localStorage.setItem('sweet_user_cache', JSON.stringify(serializableUser));
          setUser(currentUser); // Update with full Firebase object
      } else {
          // 若沒登入，清除快取
          localStorage.removeItem('sweet_user_cache');
          setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = async () => {
      localStorage.removeItem('sweet_user_cache'); // [安全] 登出清除快取
      setUser(null);
      return signOut(auth);
  };

  const value = {
    user,
    loading,
    loginWithGoogle,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};