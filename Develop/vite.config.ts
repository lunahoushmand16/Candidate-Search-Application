import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment', // this line is .env path and it's so important to set up for env path correctly
  plugins: [react()],
});
