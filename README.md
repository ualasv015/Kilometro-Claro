# Kilómetro Claro

Sitio principalmente estático en Astro para herramientas de cálculo dirigidas a conductores en España. Las calculadoras ejecutan sus fórmulas en el navegador. El formulario de contacto usa el endpoint `public/contacto.php` para enviar los mensajes desde un alojamiento con PHP.

## Desarrollo

Requiere Node.js y pnpm. Instala dependencias con `pnpm install`, inicia el servidor con `pnpm dev` y genera la versión estática con `pnpm build`.

Configura `SITE_URL` con el dominio canónico de producción (consulta `.env.example`) antes de publicar. El valor alimenta URLs canonical, datos estructurados, sitemap y robots. El valor por defecto `https://example.com` es solo para desarrollo.

## Añadir una calculadora

1. Añade la fórmula con tipos y validación a `src/lib/calculations.ts`.
2. Añade sus metadatos SEO, contenido original, campos, FAQ y enlaces relacionados a `src/data/tools.ts`.
3. Conecta su tipo de cálculo al manejador compartido de `src/scripts/calculators.ts`.

La página estática individual se genera automáticamente desde `src/pages/calculadoras/[slug].astro`. Las tarjetas, breadcrumbs, metadatos SEO, enlaces relacionados y sitemap leen el mismo registro de herramientas. Las categorías también se definen en `src/data/tools.ts`.

Para una futura integración de anuncios se puede añadir un componente de anuncios y colocarlo en el layout o en ubicaciones editoriales elegidas, sin introducirlo en las calculadoras ni reservar huecos mientras no se utilice.

## Formulario de contacto

El formulario de `/contacto/` envía nombre, correo y mensaje por `POST` a `/contacto.php`. El endpoint valida los campos y remite el mensaje a `asv.webs.contact@gmail.com` usando `mail()` de PHP, con `web@kilometroclaro.com` como remitente y la dirección del visitante como respuesta.

Para que funcione en producción, publica la carpeta `dist` en un alojamiento que ejecute PHP (por ejemplo, el hosting de Namecheap), confirma que PHP `mail()` está habilitado y configura el envío/correo del dominio `kilometroclaro.com`. Un alojamiento estático como Netlify no ejecuta este archivo PHP; en ese caso habría que sustituir el endpoint por una función serverless o un servicio de formularios. Haz un envío real de prueba después de publicar y revisa también la carpeta de spam. La compilación local no puede confirmar que el servidor acepte o entregue correos.

## Antes de publicar

`src/data/site.ts` centraliza la identidad y los datos de contacto que aparecen en las páginas esenciales. Comprueba que siguen siendo correctos. Las políticas describen el funcionamiento actual: Analytics y AdSense no están instalados. Si se incorporan, revisa las políticas y añade la gestión de consentimiento requerida antes de activarlos. El contenido legal es una base informativa y no sustituye una revisión jurídica de tu situación concreta.

La sección `/guias/` es una portada temporal; el artículo piloto aún no está publicado.
