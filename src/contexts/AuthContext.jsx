import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithCustomToken, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from 'firebase/auth';
import { auth } from '../utils/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // 登入：Google Popup
  const login = async () => {
    if (!auth) return;
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(`Google 登入失敗: ${error.message}`);
    }
  };

  // 登出
  const logout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  useEffect(() => {
    if (!auth) {
      setAuthLoading(false);
      return;
    }

    // 處理 Custom Token (通常用於開發環境或特定部署流程)
    const initAuth = async () => {
      let token = import.meta.env.VITE_AUTH_TOKEN;
      if (!token) token = window.__initial_auth_token;

      if (token && token.length > 2 && token !== '""') {
         try {
             await signInWithCustomToken(auth, token);
             return;
         } catch (e) {
             console.warn("Custom Token failed, trying standard auth flow...");
         }
      }
    };
    
    initAuth();

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    authLoading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}