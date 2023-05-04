import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'



// module.exports = { 
//   publicPath: process.env.NODE_ENV === "production" ? "/thesis_v2/" : "/",

// }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  
  base: '/thesis_v2/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      

    }
  }
})
