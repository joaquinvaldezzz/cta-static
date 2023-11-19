import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/app.min.[ext]',
          // chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
  },
})
