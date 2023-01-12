import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  plugins: [
    react({ jsxRuntime: 'classic' }),
    tsConfigPaths(),
    dts({
      include: ['src/components/'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'ReactViteLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
