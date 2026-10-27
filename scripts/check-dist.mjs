import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';

const dist = resolve('dist');
const errors = [];

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

function matches(html, expression) {
  return [...html.matchAll(expression)].map((match) => match[1]);
}

async function exists(path) {
  try { return (await stat(path)).isFile(); } catch { return false; }
}

const files = await walk(dist);
const pages = files.filter((file) => file.endsWith('.html'));
const seenTitles = new Map();
const seenDescriptions = new Map();
const canonicalPages = new Set();
const noindexPages = new Set();
const structuredTypesByPage = new Map();

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const routePath = relative(dist, file).split(sep).join('/');
  const expectedPath = routePath === 'index.html' ? '/' : `/${dirname(routePath) === '.' ? '' : `${dirname(routePath)}/`}`;
  const titles = matches(html, /<title>([\s\S]*?)<\/title>/gi);
  const descriptions = matches(html, /<meta\s+name="description"\s+content="([^"]*)"\s*\/?\s*>/gi);
  const canonicals = matches(html, /<link\s+rel="canonical"\s+href="([^"]+)"\s*\/?\s*>/gi);
  const h1s = matches(html, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi);
  const ogImages = matches(html, /<meta\s+property="og:image"\s+content="([^"]+)"\s*\/?\s*>/gi);

  if (titles.length !== 1 || !titles[0].trim()) errors.push(`${routePath}: debe tener exactamente un title con contenido`);
  if (descriptions.length !== 1 || !descriptions[0].trim()) errors.push(`${routePath}: debe tener exactamente una meta description`);
  if (canonicals.length !== 1) errors.push(`${routePath}: debe tener exactamente un canonical`);
  if (h1s.length !== 1) errors.push(`${routePath}: se esperaba un solo H1 y se encontraron ${h1s.length}`);
  if (ogImages.length !== 1) errors.push(`${routePath}: debe tener exactamente una imagen Open Graph`);

  if (titles[0]) {
    if (seenTitles.has(titles[0])) errors.push(`${routePath}: title duplicado con ${seenTitles.get(titles[0])}`);
    else seenTitles.set(titles[0], routePath);
  }
  if (descriptions[0]) {
    if (seenDescriptions.has(descriptions[0])) errors.push(`${routePath}: meta description duplicada con ${seenDescriptions.get(descriptions[0])}`);
    else seenDescriptions.set(descriptions[0], routePath);
  }

  if (canonicals[0]) {
    const canonical = new URL(canonicals[0]);
    if (canonical.pathname !== expectedPath) errors.push(`${routePath}: canonical ${canonical.pathname} no coincide con la ruta ${expectedPath}`);
    canonicalPages.add(canonical.href);
  }

  const robots = matches(html, /<meta\s+name="robots"\s+content="([^"]*)"\s*\/?\s*>/gi)[0] ?? '';
  if (/noindex/i.test(robots)) noindexPages.add(canonicals[0]);

  if (ogImages[0]) {
    const imagePath = new URL(ogImages[0]);
    const imageFile = join(dist, imagePath.pathname.replace(/^\//, '').split('/').join(sep));
    if (!await exists(imageFile)) errors.push(`${routePath}: no existe la imagen Open Graph ${imagePath.pathname}`);
    else {
      const image = await readFile(imageFile);
      const width = image.readUInt32BE(16);
      const height = image.readUInt32BE(20);
      if (extname(imageFile).toLowerCase() !== '.png' || width !== 1200 || height !== 630) {
        errors.push(`${routePath}: imagen Open Graph debe ser PNG 1200×630, encontrada ${width}×${height}`);
      }
    }
  }

  const structuredTypes = [];
  for (const match of html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const schema = JSON.parse(match[1]);
      structuredTypes.push(schema['@type']);
    }
    catch { errors.push(`${routePath}: contiene JSON-LD no válido`); }
  }
  structuredTypesByPage.set(routePath, structuredTypes);

  const ogType = matches(html, /<meta\s+property="og:type"\s+content="([^"]*)"\s*\/?\s*>/gi)[0];
  if (ogType === 'article') {
    for (const property of ['article:published_time', 'article:modified_time', 'article:author']) {
      if (!html.includes(`property="${property}"`)) errors.push(`${routePath}: falta el metadato ${property}`);
    }
  }

  for (const match of html.matchAll(/<(?:img|source)\b[^>]*\b(?:src|srcset)="([^"]+)"/gi)) {
    const assetPath = match[1].split(',')[0].trim().split(' ')[0];
    if (!assetPath.startsWith('/')) continue;
    const assetFile = join(dist, assetPath.replace(/^\//, '').split('/').join(sep));
    if (!await exists(assetFile)) errors.push(`${routePath}: no existe el recurso ${assetPath}`);
  }

  for (const match of html.matchAll(/<a\b[^>]*\bhref="(\/[^"]*)"/gi)) {
    const pathname = decodeURIComponent(match[1].split(/[?#]/, 1)[0]);
    if (!pathname) continue;
    const assetPath = pathname.endsWith('/') ? `${pathname}index.html` : `${pathname}/index.html`;
    const directPath = pathname.endsWith('/') ? join(dist, pathname.slice(1).split('/').join(sep), 'index.html') : join(dist, pathname.slice(1).split('/').join(sep));
    if (!await exists(directPath) && !await exists(join(dist, assetPath.slice(1).split('/').join(sep)))) {
      errors.push(`${routePath}: enlace interno sin destino local ${pathname}`);
    }
  }
}

if (!structuredTypesByPage.get('index.html')?.includes('WebSite')) errors.push('La portada debe incluir datos estructurados WebSite');
for (const page of pages.map((file) => relative(dist, file).split(sep).join('/')).filter((path) => path !== 'index.html')) {
  if (!structuredTypesByPage.get(page)?.includes('BreadcrumbList')) errors.push(`${page}: faltan datos estructurados BreadcrumbList`);
}

const robotsFile = join(dist, 'robots.txt');
const sitemapFile = join(dist, 'sitemap.xml');
if (!await exists(robotsFile)) errors.push('Falta dist/robots.txt');
if (!await exists(sitemapFile)) errors.push('Falta dist/sitemap.xml');

if (await exists(robotsFile) && await exists(sitemapFile)) {
  const robots = await readFile(robotsFile, 'utf8');
  if (!robots.includes('Sitemap:')) errors.push('robots.txt no declara la ubicación del sitemap');
  const sitemap = await readFile(sitemapFile, 'utf8');
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const loc = new URL(match[1]);
    if (!canonicalPages.has(loc.href)) errors.push(`sitemap.xml incluye una URL sin canonical generado: ${loc.href}`);
    if (noindexPages.has(loc.href)) errors.push(`sitemap.xml incluye una página noindex: ${loc.href}`);
  }
}

if (errors.length) {
  console.error(`Revisión de dist: ${errors.length} problema(s)`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Revisión de dist correcta: ${pages.length} páginas, metadatos únicos, canonical, JSON-LD, enlaces internos, imágenes, robots.txt y sitemap.xml.`);
}
