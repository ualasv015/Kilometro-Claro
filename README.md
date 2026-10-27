# Kilómetro Claro

Sitio principalmente estático en Astro para herramientas de cálculo dirigidas a conductores en España. Las calculadoras ejecutan sus fórmulas en el navegador. El formulario de contacto usa el endpoint `public/contacto.php` para enviar los mensajes desde un alojamiento con PHP.

## Desarrollo

Requiere Node.js y pnpm. Instala dependencias con `pnpm install`, inicia el servidor con `pnpm dev` y genera la versión estática con `pnpm build`.

Configura `SITE_URL` con el dominio canónico de producción (consulta `.env.example`) antes de publicar. El valor alimenta URLs canonical, datos estructurados, sitemap y robots. El valor por defecto `https://example.com` es solo para desarrollo.

## Añadir una calculadora

1. Añade la fórmula con tipos y validación a `src/lib/calculations.ts`.
2. Añade sus metadatos SEO, contenido editorial propio, campos, FAQ, guía relacionada y enlaces a `src/data/tools.ts`.
3. Conecta su tipo de cálculo al manejador compartido de `src/scripts/calculators.ts`.

La página estática individual se genera automáticamente desde `src/pages/calculadoras/[slug].astro`. Las tarjetas, breadcrumbs, metadatos SEO, secciones explicativas, enlaces relacionados y sitemap leen el mismo registro de herramientas. El índice está en `/calculadoras/`; `/herramientas/` redirige a la ruta estable nueva. Las categorías también se definen en `src/data/tools.ts`.

Las guías se registran en `src/data/guides.ts` y sus imágenes, textos alternativos, créditos y dimensiones en `src/data/guide-images.ts`. `GuideImage.astro` sirve WebP a navegadores compatibles y conserva el JPG como alternativa. Las tarjetas Open Graph PNG están en `public/images/og/`.

## SEO y revisión de la salida estática

`SeoHead.astro` centraliza títulos, descripciones, canonical, robots y metadatos Open Graph/Twitter. `Breadcrumbs.astro` produce migas visibles y su `BreadcrumbList`; el `WebSite` se declara en la portada. Sitemap y robots se generan desde `src/pages/sitemap.xml.ts` y `src/pages/robots.txt.ts`.

La compilación comprueba Astro y después valida la salida: títulos y descripciones únicos, un H1 y canonical por página, JSON-LD, PNG Open Graph de 1200 × 630, recursos e interlinks locales, `robots.txt` y `sitemap.xml`. También puedes ejecutar `pnpm check:dist` por separado. En Windows, `scripts/generate-social-cards.ps1` regenera las tarjetas sociales y el diagrama conceptual propio para el artículo del Porsche a partir de la salida de Astro.

Los espacios publicitarios se encapsulan en componentes de `src/components/ads/`. La integración actual usa Adsterra después del consentimiento y el layout la excluye de Sobre nosotros, Contacto, Privacidad, Cookies y Aviso legal. Google AdSense y Ezoic no están integrados.

## Formulario de contacto

El formulario de `/contacto/` envía nombre, correo y mensaje por `POST` a `/contacto.php`. El endpoint valida los campos y remite el mensaje a `asv.webs.contact@gmail.com` usando `mail()` de PHP, con `web@kilometroclaro.com` como remitente y la dirección del visitante como respuesta.

Para que funcione en producción, publica la carpeta `dist` en un alojamiento que ejecute PHP (por ejemplo, el hosting de Namecheap), confirma que PHP `mail()` está habilitado y configura el envío/correo del dominio `kilometroclaro.com`. Un alojamiento estático como Netlify no ejecuta este archivo PHP; en ese caso habría que sustituir el endpoint por una función serverless o un servicio de formularios. Haz un envío real de prueba después de publicar y revisa también la carpeta de spam. La compilación local no puede confirmar que el servidor acepte o entregue correos.

## Antes de publicar

`src/data/site.ts` centraliza la identidad y los datos de contacto que aparecen en las páginas esenciales. Comprueba que siguen siendo correctos. Google Analytics 4 y Adsterra tienen preferencias de consentimiento independientes. Los scripts de Adsterra solo se cargan tras aceptar publicidad y se excluyen de Sobre nosotros, Contacto, Privacidad, Cookies y Aviso legal. El contenido legal es una base informativa y no sustituye una revisión jurídica de tu situación concreta.

La sección `/guias/` incluye una guía sobre el coste mensual de mantener un coche en España.

## Despliegue en cPanel

El archivo `.cpanel.yml` copia el contenido generado de `dist/` a `$HOME/public_html/`. Antes de copiar, elimina el antiguo `ads.txt` del destino; cuando se configure una nueva red publicitaria, su archivo en `dist/` se copiará después. Antes de desplegar, genera la versión estática con `pnpm build` y añade al commit los archivos resultantes de `dist/`; esta carpeta se mantiene en Git para que cPanel pueda publicarla. Si el dominio usa otra raíz de documentos, ajusta `DEPLOYPATH` en `.cpanel.yml` a la ruta que muestre cPanel. El endpoint `contacto.php` requiere que el alojamiento tenga PHP y envío de correo habilitados.
