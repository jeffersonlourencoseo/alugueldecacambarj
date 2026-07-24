import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { SITE_CONFIG } from './src/data/config.ts';

export default defineConfig({
  site: SITE_CONFIG.domain,
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  redirects: {
    // Evita duplicação de conteúdo entre /sitemap.xml e /sitemap.xml/
    '/sitemap.xml/': '/sitemap.xml',
    '/robots.txt/': '/robots.txt',
  },
});
