import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),

  vite:{
    plugins: [
      tailwindcss()
    ]
  }
});