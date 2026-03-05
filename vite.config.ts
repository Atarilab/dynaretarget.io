import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/dynaretarget.io/' if your repo is NOT named 'dynaretarget.github.io'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
