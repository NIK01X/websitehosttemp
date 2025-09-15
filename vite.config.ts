// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   base: process.env.NODE_ENV === 'production' ? "/" : "/",
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx'],
//   },
//   // server: {
//   //   port: 5173,
//   //   host: true,
    
//   // }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
})
