import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { LedgerProvider } from './contexts/LedgerContext'
// [PWA] 引入註冊模組
import { registerSW } from 'virtual:pwa-register'

// [PWA] 註冊 Service Worker (僅在生產環境生效)
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {
    console.log('App ready to work offline')
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LedgerProvider>
        <App />
      </LedgerProvider>
    </AuthProvider>
  </React.StrictMode>,
)