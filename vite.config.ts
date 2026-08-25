import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Минимальный конфиг для работы React и Storybook
export default defineConfig({
  plugins: [react()],
});