import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kenekita.it',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
      cors: true,
      host: true
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
