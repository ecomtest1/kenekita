import { getCollection } from 'astro:content';

export async function GET() {
  const rooms = await getCollection('rooms');
  const site = 'https://kenekita.it';
  
  const pages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/ville', changefreq: 'weekly', priority: 0.9 },
    { url: '/chi-siamo', changefreq: 'monthly', priority: 0.7 },
    { url: '/per-proprietari', changefreq: 'monthly', priority: 0.8 },
    { url: '/contatti', changefreq: 'monthly', priority: 0.7 },
  ];
  
  const roomUrls = rooms.map(room => ({
    url: `/ville/${room.data.slug}`,
    changefreq: 'weekly',
    priority: 0.8,
  }));
  
  const allUrls = [...pages, ...roomUrls];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
