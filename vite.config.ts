import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CommaUI',
      fileName: 'comma-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === 'style.css') {
            return 'comma-ui-styles.css';
          }
          return chunkInfo.name;
        },
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react(), dts()],
});
