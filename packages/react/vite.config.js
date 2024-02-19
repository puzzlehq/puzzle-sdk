import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@puzzlehq/sdk',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React'
        },
        extend: true
      }
    }
  }
});
