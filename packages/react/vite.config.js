import { defineConfig } from 'vite';
import packageJson_1 from "../../package.json"
import packageJson_2 from "./package.json"

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@puzzlehq/sdk-react',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: (id) => {
        // Externalize all dependencies and peerDependencies
        const allDependencies = {
          ...packageJson_1.dependencies,
          ...packageJson_1.peerDependencies,
          ...packageJson_2.dependencies,
          ...packageJson_2.peerDependencies,
        };
        const packages = Object.keys(allDependencies);
        // Check if the module id starts with any of the package names
        return packages.some(pkg => id === pkg || id.startsWith(`${pkg}/`));
      },
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          '@walletconnect/modal-sign-html': 'modalSignHtml',
          'events': 'EventEmitter',
          'zustand': 'zustand',
          '@tanstack/react-query': 'reactQuery',
          '@puzzlehq/sdk-core': 'sdkCore',
          '@walletconnect/utils': 'utils',
          '@puzzlehq/types': 'types',
          'debug': 'debug',
          'react/jsx-runtime': 'jsxRuntime',
          '@tanstack/react-query-devtools': 'reactQueryDevtools',
          'zustand/middleware': 'middleware',
        },
        extend: true
      }
    }
  }
});
