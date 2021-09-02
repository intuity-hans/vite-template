/* eslint-disable import/no-extraneous-dependencies */
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases(), eslintPlugin({ fix: true, cache: true })],
  build: {
    chunkSizeWarningLimit: 5000,
  },
  assetsInclude: [
    '.png',
    '.jpg',
  ],
});
