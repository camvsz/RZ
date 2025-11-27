
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RZ/', // Changed for GitHub Pages to correctly resolve assets in a subfolder
  build: {
    outDir: 'dist',
  },
  define: {
    // Polyfill process.env pour compatibilité
    'process.env': {} 
  }
});
