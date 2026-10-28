import type { APIRoute } from 'astro';
import { tools } from '../data/tools';
import { guides } from '../data/guides';
import { brands } from '../data/brands';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://example.com';
  const modelPaths = brands.flatMap((brand) => brand.models.filter((model) => model.pageSlug).map((model) => `/marcas/${brand.slug}/${model.pageSlug}/`));
  const paths = ['/', '/calculadoras/', ...tools.map((item) => `/calculadoras/${item.slug}/`), '/guias/', ...guides.filter((guide) => guide.published).map((guide) => `/guias/${guide.slug}/`), '/marcas/', ...brands.map((brand) => `/marcas/${brand.slug}/`), ...modelPaths, '/sobre-nosotros/'];
  const body = paths.map((path) => `  <url><loc>${base}${path}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
