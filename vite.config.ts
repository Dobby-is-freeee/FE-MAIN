/// <reference types="vite-plugin-svgr/client" />

import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    host: true,
    open: true,
  },
});
