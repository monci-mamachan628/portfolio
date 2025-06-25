import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss(), autoprefixer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),

     }
  }, 
});
