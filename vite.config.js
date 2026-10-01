import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore large binary downloads to prevent EBUSY crash
      ignored: ['**/public/downloads/**'],
    },
  },
})
