import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/angie-s-first-test-of-github/',
  plugins: [react(), tailwindcss()],
})
