
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Important pour GitHub Pages car le site est souvent dans un sous-dossier
  build: {
    outDir: 'dist',
  },
  define: {
    // Polyfill process.env pour compatibilité
    'process.env': {} 
  }
});
