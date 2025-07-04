import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import autoprefixer from 'autoprefixer'
// import postcss from 'postcss'
// import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
react()],
})

