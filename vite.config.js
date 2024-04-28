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
        headerAndFooter: "http://localhost:5001/assets/remoteEntry.js",
        mainContent: "https://subtle-dolphin-e29768.netlify.app/assets/remoteEntry.js",
      },
      exposes: {},
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
