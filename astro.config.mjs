import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    analytics: true,
  }),

  vite:{
    plugins: [
      tailwindcss()
    ]
  }
});