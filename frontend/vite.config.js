import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  plugins: [react(), svgrPlugin()]
})
