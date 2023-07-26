import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // replace with the entry point of your application
      name: '@puzzlehq/sdk', // replace with your library's export name
      fileName: (format) => `puzzle.${format}.js` // replace 'my-lib' with your library's name
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React'
        }
      }
    }
  }
});
