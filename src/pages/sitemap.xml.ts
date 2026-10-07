import type { APIRoute } from 'astro';
import { tools, categories } from '../data/tools';
import { guides } from '../data/guides';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://example.com';
  const paths = ['/', '/herramientas/', '/categorias/', ...categories.map((item) => `/categorias/${item.slug}/`), ...tools.map((item) => `/calculadoras/${item.slug}/`), '/guias/', ...guides.filter((guide) => guide.published).map((guide) => `/guias/${guide.slug}/`), '/sobre-nosotros/'];
  const body = paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
