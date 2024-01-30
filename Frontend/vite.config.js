import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "http://127.0.0.1:4000",
        changeOrigin: true,
        secure: false,
        // ws: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
})
