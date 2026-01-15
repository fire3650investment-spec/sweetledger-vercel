import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // 關鍵：必須引入這個

export default defineConfig({
  plugins: [
    react(),
    // 關鍵：必須加入這個設定區塊，main.jsx 讀到的 virtual:pwa-register 才會生效
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
      },
      devOptions: {
        enabled: false // 開發時不啟用，但必須註冊插件，否則會報錯
      },
      manifest: {
        name: 'SweetLedger',
        short_name: 'SweetLedger',
        description: '極速記帳體驗',
        theme_color: '#f9fafb',
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
          }
        ]
      }
    })
  ],
  base: './', // [Fix] Must be relative for Capacitor/Cordova apps to prevent white screen
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-error-boundary'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          charts: ['recharts'],
          ui: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Raise limit slightly as we have split chunks well
  }
})