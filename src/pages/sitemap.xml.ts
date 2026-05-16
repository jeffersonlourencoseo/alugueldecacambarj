import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../data/config';

export const GET: APIRoute = async () => {
  const site = SITE_CONFIG.domain;

  const servicos = await getCollection('servicos');
  const posts = await getCollection('blog');

  const staticRoutes = [
    '',
    'sobre',
    'servicos',
    'blog',
    'contato',
    'privacidade',
    'termos',
  ];

  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${site}/${route}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? '1.0' : '0.7',
    })),
    ...servicos.map((s) => ({
      loc: `${site}/servicos/${s.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...posts.map((p) => ({
      loc: `${site}/blog/${p.slug}`,
      lastmod: p.data.pubDate.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
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
