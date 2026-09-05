import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || (process.env.GITHUB_PAGES || '').trim() === 'true';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/godmode/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'pdf-lib': 'pdf-lib/dist/pdf-lib.esm.js'
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
