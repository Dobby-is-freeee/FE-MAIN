/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
