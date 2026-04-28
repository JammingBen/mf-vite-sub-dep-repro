import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5201,
    origin: 'http://localhost:5201',
    open: false,
  },
  plugins: [
    vue(),
    federation({
      name: 'remote',
      exposes: {
        '.': './src/index.ts',
      },
      shared: {
        vue: { singleton: true, import: false },
        pinia: { singleton: true, import: false },
        '@shared-dep-bug/shared-lib': { singleton: true, import: false },
      },
      dts: false,
      manifest: false,
      filename: 'remoteEntry.mjs',
    }),
  ],
})
