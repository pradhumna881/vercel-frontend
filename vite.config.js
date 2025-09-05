import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // VENDOR CHUNK SPLITTING FOR BETTER CACHING
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react'],
          'seo-vendor': ['react-helmet-async']
        },
        // OPTIMIZE FILE NAMING FOR LONG-TERM CACHING
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash].css'
          }
          if (assetInfo.name?.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
            return 'images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // OPTIMIZE CHUNK SIZE FOR FASTER LOADING
    chunkSizeWarningLimit: 1000,
    // CSS CODE SPLITTING FOR PERFORMANCE
    cssCodeSplit: true,
    // ENABLE SOURCE MAPS IN DEVELOPMENT ONLY
    sourcemap: process.env.NODE_ENV === 'development'
  },
  
  // PERFORMANCE OPTIMIZATIONS
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion',
      'lucide-react',
      'react-helmet-async'
    ],
    // FORCE PRE-BUNDLING FOR BETTER PERFORMANCE
    force: true
  },
  // ENVIRONMENT VARIABLES
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    __SEO_ENABLED__: JSON.stringify(true)
  },

  // CSS PREPROCESSING
  css: {
    devSourcemap: false
  }

})