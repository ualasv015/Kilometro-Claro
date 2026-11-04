import type { APIRoute } from 'astro';
import { tools } from '../data/tools';
import { guides } from '../data/guides';
import { brands, brandsLastReviewed } from '../data/brands';

// Las guías declaran su fecha de revisión en la propia página (`modifiedDate` o `publishedDate`).
const guideSources = import.meta.glob('./guias/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function guideLastmod(slug: string) {
  const source = guideSources[`./guias/${slug}.astro`] ?? '';
  return source.match(/const modifiedDate = '(\d{4}-\d{2}-\d{2})'/)?.[1] ?? source.match(/const publishedDate = '(\d{4}-\d{2}-\d{2})'/)?.[1];
}

// «31 de octubre de 2026» → «2026-10-31»
function spanishDateToIso(value?: string) {
  const match = value?.match(/^(\d{1,2}) de (\w+) de (\d{4})$/);
  const month = match ? months.indexOf(match[2].toLowerCase()) : -1;
  return match && month >= 0 ? `${match[3]}-${String(month + 1).padStart(2, '0')}-${match[1].padStart(2, '0')}` : undefined;
}

type Entry = { path: string; lastmod?: string };

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://example.com';
  const entries: Entry[] = [
    { path: '/' },
    { path: '/calculadoras/' },
    ...tools.map((item) => ({ path: `/calculadoras/${item.slug}/` })),
    { path: '/guias/' },
    ...guides.filter((guide) => guide.published).map((guide) => ({ path: `/guias/${guide.slug}/`, lastmod: guideLastmod(guide.slug) })),
    { path: '/marcas/', lastmod: spanishDateToIso(brandsLastReviewed) },
    ...brands.map((brand) => ({ path: `/marcas/${brand.slug}/`, lastmod: spanishDateToIso(brand.reviewedAt ?? brandsLastReviewed) })),
    ...brands.flatMap((brand) => brand.models.filter((model) => model.pageSlug).map((model) => ({ path: `/marcas/${brand.slug}/${model.pageSlug}/` }))),
    { path: '/sobre-nosotros/' },
  ];
  const body = entries.map(({ path, lastmod }) => `  <url><loc>${base}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
