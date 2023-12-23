import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        'comma-ui': path.resolve(__dirname, 'src/lib/index.ts'),
        'comma-ui-tailwind-preset': path.resolve(
          __dirname,
          'src/preset/index.ts'
        ),
      },
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
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
