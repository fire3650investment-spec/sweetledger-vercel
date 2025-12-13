// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext'
import { LedgerProvider } from './contexts/LedgerContext' // 新增

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <LedgerProvider> {/* 包在 AuthProvider 裡面，因為 Ledger 可能需要 User 資訊 */}
        <App />
      </LedgerProvider>
    </AuthProvider>
  </React.StrictMode>,
)