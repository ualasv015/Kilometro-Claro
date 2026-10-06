import { defineConfig } from 'astro/config';

// Sustituir por el dominio definitivo antes de publicar para generar canonicals y sitemap correctos.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
});
