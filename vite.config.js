import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/products" : 'http://test.indiaindex.com'
    }
  },
  plugins: [react()],
});
