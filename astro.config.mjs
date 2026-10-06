import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { SITE_CONFIG } from './src/data/config.ts';

export default defineConfig({
  site: SITE_CONFIG.domain,
  // Site 100% estático: não depende de runtime de função serverless na Vercel
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
