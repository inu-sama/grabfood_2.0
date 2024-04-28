import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "grabfood_2.0",
      remotes: {
        headerAndFooter: "https://toptotoe.netlify.app/assets/remoteEntry.js",
        mainContent: "https://subtle-dolphin-e29768.netlify.app/assets/remoteEntry.js",
      },
      exposes: {},
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
