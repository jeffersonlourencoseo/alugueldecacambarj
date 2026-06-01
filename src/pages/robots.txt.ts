import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../data/config';

export const prerender = true;

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.domain}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
