import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // 1. 引入套件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. 加入 PWA 設定
    VitePWA({
      registerType: 'autoUpdate', // [關鍵] 自動更新，確保新舊版本不衝突，消滅白屏
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      
      // [關鍵] 即使離線，不管使用者去哪個網址，只要找不到就回傳 index.html
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/index.html', 
        navigateFallbackDenylist: [/^\/api/], // 排除 API 請求
      },

      // [關鍵] 開發環境不啟用 PWA，避免你寫 code 時被快取搞瘋
      devOptions: {
        enabled: false
      },

      manifest: {
        name: 'SweetLedger',
        short_name: 'SweetLedger',
        description: '極速記帳體驗',
        theme_color: '#f9fafb', // [關鍵] 對應 bg-gray-50，消除啟動時的閃爍
        background_color: '#f9fafb',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})