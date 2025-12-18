import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// [PWA] 引入註冊模組
import { registerSW } from 'virtual:pwa-register'

// [PWA] 註冊 Service Worker
// 只有在生產環境 (build 後) 才會真正執行，配合 vite.config.js 的 devOptions: false
const updateSW = registerSW({
  onNeedRefresh() {
    // 雖然我們開了 autoUpdate，但如果有特殊狀況，這裡可以處理
    // 目前我們信任 autoUpdate 會自動處理
  },
  onOfflineReady() {
    console.log('App ready to work offline')
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)