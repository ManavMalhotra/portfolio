import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { hmr: { clientPort: process.env.CODESPACES ? 443 : undefined } }

})
