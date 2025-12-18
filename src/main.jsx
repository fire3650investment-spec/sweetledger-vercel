import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { LedgerProvider } from './contexts/LedgerContext'
// [PWA] 引入註冊模組
import { registerSW } from 'virtual:pwa-register'

// [PWA] 註冊 Service Worker
// 這段程式碼只會在生產環境 (build 後) 生效，讓瀏覽器開始快取
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    console.log('App ready to work offline')
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LedgerProvider> {/* 包在 AuthProvider 裡面，因為 Ledger 可能需要 User 資訊 */}
        <App />
      </LedgerProvider>
    </AuthProvider>
  </React.StrictMode>,
)