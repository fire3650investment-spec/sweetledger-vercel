import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel 部署設定 (無 PWA)
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'build'
  }
})