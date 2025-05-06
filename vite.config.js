import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/world-atlas/', // 👈 this fixes GitHub Pages path issue
})
