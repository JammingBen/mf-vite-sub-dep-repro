import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// The host app initializes pinia and provides it as a shared singleton to remotes.
// Both pinia and shared-lib must be shared so remotes use the same pinia instance.
export default defineConfig({
  server: {
    port: 5200,
    open: false,
  },
  build: {
    target: 'esnext',
  },
  plugins: [
    vue(),
    federation({
      name: 'host',
      shared: {
        vue: { singleton: true },
        pinia: { singleton: true },
        '@shared-dep-bug/shared-lib': { singleton: true },
      },
      dts: false,
      manifest: false,
    }),
  ],
})
