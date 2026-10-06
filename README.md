# Kilómetro Claro

Sitio estático en Astro para herramientas de cálculo dirigidas a conductores en España. Las calculadoras ejecutan sus fórmulas en el navegador y no requieren un backend.

## Desarrollo

Requiere Node.js y pnpm. Instala dependencias con `pnpm install`, inicia el servidor con `pnpm dev` y genera la versión estática con `pnpm build`.

Configura `SITE_URL` con el dominio canónico de producción (consulta `.env.example`) antes de publicar. El valor alimenta URLs canonical, datos estructurados, sitemap y robots. El valor por defecto `https://example.com` es solo para desarrollo.

## Añadir una calculadora

1. Añade la fórmula con tipos y validación a `src/lib/calculations.ts`.
2. Añade sus metadatos SEO, contenido original, campos, FAQ y enlaces relacionados a `src/data/tools.ts`.
3. Conecta su tipo de cálculo al manejador compartido de `src/scripts/calculators.ts`.

La página estática individual se genera automáticamente desde `src/pages/calculadoras/[slug].astro`. Las tarjetas, breadcrumbs, metadatos SEO, enlaces relacionados y sitemap leen el mismo registro de herramientas. Las categorías también se definen en `src/data/tools.ts`.

Para una futura integración de anuncios se puede añadir un componente de anuncios y colocarlo en el layout o en ubicaciones editoriales elegidas, sin introducirlo en las calculadoras ni reservar huecos mientras no se utilice.

## Antes de publicar

Reemplaza `SITE_URL`, la dirección de contacto y los textos legales de ejemplo con los datos reales del titular y los servicios efectivamente usados. La sección `/guias/` es una portada temporal; no se ha creado contenido de blog en este MVP.
