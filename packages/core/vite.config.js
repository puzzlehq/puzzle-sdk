import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: '@puzzlehq/sdk',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`
    },
  }
});
