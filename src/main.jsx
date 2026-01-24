// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { LedgerProvider } from './contexts/LedgerContext'
import { registerSW } from 'virtual:pwa-register'
// [Critical] 引入錯誤邊界
import { ErrorBoundary } from "react-error-boundary";
import { Capacitor } from '@capacitor/core';

// [FIX] Only register Service Worker in web environment, not in Capacitor native apps
// This prevents "DownloadFailed" errors that cause the app to hang
if (!Capacitor.isNativePlatform()) {
  const updateSW = registerSW({
    onNeedRefresh() { },
    onOfflineReady() {
      console.log('App ready to work offline')
    },
  })
}

// 定義一個 iOS 風格的崩潰畫面
function FallbackRender({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center animate-in fade-in">
      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-3xl">🤕</span>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">發生了一點小問題</h2>
      <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
        系統偵測到異常錯誤，為了保護您的資料，我們暫停了運作。
      </p>

      {/* 錯誤訊息 (開發模式下顯示，生產環境可隱藏) */}
      <div className="w-full max-w-sm bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 overflow-x-auto text-left">
        <p className="text-xs font-mono text-red-500 break-all">
          {error.message || "Unknown Error"}
        </p>
      </div>

      <div className="flex gap-3 w-full max-w-xs">
        <button
          onClick={() => window.location.reload()}
          className="flex-1 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl active:scale-95 transition-transform"
        >
          重新整理
        </button>
        <button
          onClick={resetErrorBoundary}
          className="flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-300 active:scale-95 transition-transform"
        >
          嘗試恢復
        </button>
      </div>

      <p className="mt-8 text-[10px] text-gray-400">SweetLedger PWA Protection</p>
    </div>
  );
}

// [DEBUG] Mark React as mounted for debug script in index.html
window.__reactMounted = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 包裹在最外層，攔截所有子元件錯誤 */}
    <ErrorBoundary FallbackComponent={FallbackRender}>
      <AuthProvider>
        <LedgerProvider>
          <App />
        </LedgerProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)