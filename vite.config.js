import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel 部署設定
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    // 設定靜態檔案的輸出目錄為 'build'
    outDir: 'build'
  }
})