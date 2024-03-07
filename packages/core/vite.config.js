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
  (pkg) => !['@puzzlehq/types'].includes(pkg),
);
console.log(packages);

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@puzzlehq/sdk-core',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`,
    },
  },
  rollupOptions: {
    external: packages,
    globals: {
      '@walletconnect/modal-sign-html': 'modalSignHtml',
      events: 'EventEmitter',
      '@walletconnect/utils': 'utils',
      debug: 'debug',
    },
    extend: true,
  },
});
