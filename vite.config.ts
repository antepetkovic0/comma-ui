import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        'comma-ui': path.resolve(__dirname, 'src/index.ts'),
        'tailwind-config': path.resolve(
          __dirname,
          'src/utils/tailwind-config.ts'
        ),
      },
      name: 'CommaUI',
    },
    rollupOptions: {
      input: {
        'comma-ui': path.resolve(__dirname, 'src/index.ts'),
        'tailwind-config': path.resolve(
          __dirname,
          'src/utils/tailwind-config.ts'
        ),
      },
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react(), dts()],
});
