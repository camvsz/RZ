
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed to '/' for serving from root, adjust to '/RZ/' for GitHub Pages if needed
  build: {
    outDir: 'dist',
  },
  define: {
    // Polyfill process.env pour compatibilité
    'process.env': {} 
  }
});
