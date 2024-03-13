import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import VitePluginTailwind from 'vite-plugin-tailwind';

export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePluginTailwind, // 'default' fonksiyonunu çağırın
  ],
});
