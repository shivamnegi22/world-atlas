import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if in production mode
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/world-atlas/' : '/', // 👈 dynamic base path
})
