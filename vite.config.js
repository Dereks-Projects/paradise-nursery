import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Important: this MUST match your GitHub repo name exactly
export default defineConfig({
  base: '/paradise-nursery/',
  plugins: [react()],
});
