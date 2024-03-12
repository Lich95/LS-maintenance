import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { svgBuilder } from './src/plugins/svgBuilder.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder('./src/icons/svg/')],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
})
