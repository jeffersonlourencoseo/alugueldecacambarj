import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../data/config';
import { bairros, zonas } from '../data/bairros';

export const prerender = true;

export const GET: APIRoute = async () => {
  const site = SITE_CONFIG.domain;

  const servicos = await getCollection('servicos');
  const posts = await getCollection('blog');

  const staticRoutes = [
    '',
    'sobre/',
    'servicos/',
    'area-de-atendimento/',
    'blog/',
    'contato/',
    'privacidade/',
    'termos/',
  ];

  const zoneRoutes = zonas.map((z) => `area-de-atendimento/${z.slug}/`);
  const bairroRoutes = bairros.map((b) => `area-de-atendimento/${b.slug}/`);

  const buildDate = new Date().toISOString().split('T')[0];

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${site}/${route}`,
      changefreq: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? '1.0' : '0.7',
    })),
    ...zoneRoutes.map((route) => ({
      loc: `${site}/${route}`,
      lastmod: buildDate,
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...bairroRoutes.map((route) => ({
      loc: `${site}/${route}`,
      lastmod: buildDate,
      changefreq: 'weekly',
      priority: '0.7',
    })),
    ...servicos.map((s) => ({
      loc: `${site}/servicos/${s.slug}/`,
      lastmod: buildDate,
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...posts.map((p) => ({
      loc: `${site}/blog/${p.slug}/`,
      lastmod: p.data.pubDate.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>
    <loc>${url.loc}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
