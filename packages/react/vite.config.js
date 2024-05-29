import { defineConfig } from 'vite';
import packageJson_1 from '../../package.json';
import packageJson_2 from './package.json';

// Externalize all dependencies and peerDependencies
const allDependencies = {
  ...packageJson_1.dependencies,
  ...packageJson_1.peerDependencies,
  ...packageJson_2.dependencies,
  ...packageJson_2.peerDependencies,
};
const packages = [...Object.keys(allDependencies)].filter(
  (pkg) => !['@puzzlehq/sdk-core', '@puzzlehq/types'].includes(pkg),
);

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@puzzlehq/sdk-react',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: packages,
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          '@puzzlehq/walletconnect-modal-sign-html': 'modalSignHtml',
          events: 'EventEmitter',
          zustand: 'zustand',
          '@tanstack/react-query': 'reactQuery',
          '@walletconnect/utils': 'utils',
          debug: 'debug',
          'react/jsx-runtime': 'jsxRuntime',
          'zustand/middleware': 'middleware',
        },
        extend: true,
      },
    },
  },
});
