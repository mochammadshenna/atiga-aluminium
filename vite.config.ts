import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for production debugging (but keep them external)
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunks for better caching and loading
        manualChunks: {
          // Vendor libraries
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['gsap'],
          'icon-vendor': ['lucide-react'],
          // Large components
          'gallery-component': ['./src/components/Gallery.tsx'],
          'products-component': ['./src/components/Products.tsx'],
        },
        // Optimize asset file names for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // Target modern browsers for better optimization
    target: 'esnext',
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  },
  // Enable experimental features for better performance
  esbuild: {
    // Remove minify option as it's not valid for esbuild config
    drop: ['console', 'debugger']
  },
  // Optimize CSS
  css: {
    devSourcemap: false,
  }
});
