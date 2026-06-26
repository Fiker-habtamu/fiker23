import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
   build: {
    // 1. Prevents the build from choking on massive 3D chunk files
    chunkSizeWarningLimit: 2000, 
    rollupOptions: {
      output: {
        // 2. Separates Three.js into its own isolated background file
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
});
