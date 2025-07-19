   // vite.config.js
   export default {
       server: {
           proxy: {
               '/api': {
                   target: 'https://nomad-neon.onrender.com',
                   changeOrigin: true,
                   rewrite: (path) => path.replace(/^\/api/, '')
               }
           }
       }
   }
   