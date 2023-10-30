import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
          // chunkFileNames: 'assets/[hash].js',
          // entryFileNames: 'assets/[hash].js',
        },
      },
    },
  },
})
