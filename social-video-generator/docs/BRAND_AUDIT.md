# Auditoría de marca — Kilómetro Claro

Revisión: 27 de octubre de 2026. Fuentes: [web pública](https://kilometroclaro.com/), [guías](https://kilometroclaro.com/guias/), [calculadoras](https://kilometroclaro.com/herramientas/), repositorio original (`src/styles/global.css`, `src/styles/guide.css`, `src/components/SiteHeader.astro`, `public/logo-kilometro-claro.svg`, `public/logo-marca-kilometro-claro.png`) e imagen de marca aportada por el usuario.

## Identidad visual observada

| Elemento | Valor observado | Aplicación al vídeo |
| --- | --- | --- |
| Tinta | `#172522` | Texto principal sobre fondos claros |
| Verde principal | `#1d5d4e` | Acentos, tarjetas de datos |
| Verde oscuro de hero | `#173d34` | Fondo y apertura |
| Lima | `#d7f36a` | Progreso y resultado destacado |
| Fondo | `#f7f8f5` | Superficies de lectura |
| Blanco | `#ffffff` | Tarjetas |
| Lavado | `#edf1eb` | Separadores y paneles secundarios |
| Línea | `#e3e8e2` | Bordes finos |

El sitio emplea esquinas moderadamente redondeadas (aprox. 5–9 px en escritorio), bordes sutiles, tarjetas limpias y bastante espacio libre. La cabecera, el hero oscuro y la tarjeta de cifra son referencias visuales directas para la composición. Los botones principales usan verde oscuro o lima, sin degradados llamativos.

CSS declara `Manrope` para titulares y marca, con reserva `Arial/sans-serif`; el cuerpo usa `system-ui`. **No se localizó una carga local o remota de Manrope en el repositorio.** El prototipo usa una pila de sistema de aspecto cercano y documenta esa limitación, sin afirmar que Manrope se haya incrustado.

El logotipo oficial que se debe usar en los vídeos es el símbolo C lima sobre círculo verde, guardado como `public/logo-marca-kilometro-claro.png` y contrastado con la imagen de marca aportada por el usuario. `src/components/BrandLogo.tsx` combina esa C con el nombre Kilómetro Claro. No sustituirla por la K de otro recurso. Los tres vehículos se dibujan como SVG originales.

## Voz editorial

La portada propone preguntas concretas y lleva de la explicación a calculadoras con datos del lector. El tono es directo, sobrio y prudente: delimita qué es una estimación, explica fórmulas y señala costes excluidos. Las guías distinguen datos oficiales, ejemplos hipotéticos y gastos reales. El CTA propio es discreto («Calcula tu caso»).

## Reglas para motion

- Una pregunta clara al principio; una cifra dominante por momento.
- Mostrar `Ejemplo hipotético` desde la presentación de los supuestos hasta el resultado.
- Acompañar importes con unidad y origen; no tratar un precio supuesto como precio vigente.
- Mantener fondo, jerarquía tipográfica y colores de la web; añadir movimiento propio sin estética infantil.
- Mantener cifras y texto esenciales dentro de una zona central segura de 820 × 1460 px en el lienzo de 1080 × 1920.

## Alcance de la auditoría

Se revisaron portada, listados de guías y herramientas, categorías, la guía elegida y el CSS/componentes pertinentes. La web puede cambiar después de esta fecha; cualquier vídeo sobre precios requiere nueva revisión antes de publicarse.
