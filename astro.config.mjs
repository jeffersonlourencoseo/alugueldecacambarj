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
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
});
