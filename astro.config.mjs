import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import unocss from '@unocss/astro';
import path from 'node:path';
import process from 'node:process';

// https://astro.build/config
export default defineConfig({
  site: 'https://pixelatedempathy.com',
  integrations: [
    react(),
    sitemap(),
    mdx(),
    unocss({
      // This will automatically look for a uno.config.ts file
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
  },
  // Removed invalid experimental flag
});
