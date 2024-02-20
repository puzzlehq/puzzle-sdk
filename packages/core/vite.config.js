import { defineConfig } from 'vite';
import packageJson_1 from "../../package.json"
import packageJson_2 from "./package.json"

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@puzzlehq/sdk-core',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => `puzzle.${format}.js`
    },
  },
  rollupOptions: {
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
    globals: {
      '@walletconnect/modal-sign-html': 'modalSignHtml',
      'events': 'EventEmitter',
      '@walletconnect/utils': 'utils',
      'debug': 'debug',
    },
    extend: true
  }
});
