import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // base: '/static/',
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/index.js`,      // главный JS
        chunkFileNames: `assets/[name].js`,     // динамические чанки
        assetFileNames: `assets/[name][extname]` // CSS, шрифты и т.д.
      }
    }
  },
})


