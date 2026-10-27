import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
/** Define la configuración de Vite y habilita el plugin de React. */
export default defineConfig({
  plugins: [react()],
})
