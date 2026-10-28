# Generador de vídeo · Kilómetro Claro

Prototipo local de la fase 1: vídeo vertical de 32 segundos que compara el **coste de energía de 100 km** en un ejemplo hipotético. Incluye voz en off y no publica nada en redes. La web de Kilómetro Claro permanece intacta.

## Requisitos

Node.js 20.11 o posterior, npm y un navegador Chromium para el render. En Windows, el script detecta Microsoft Edge si está instalado en su ubicación habitual. Remotion puede instalar un navegador compatible si no encuentra uno.

## Instalar y abrir la vista previa

Desde `social-video-generator/`:

```bash
npm install
npm run dev
```

Remotion Studio muestra la composición **Cost100Km**. Selecciónala en el panel lateral y usa la línea de tiempo para inspeccionar los 32 segundos. En este entorno Codex el comando `npm` no está en el PATH de PowerShell; se ha usado el `pnpm.cmd` incluido en el runtime, pero en un equipo con Node y npm instalados los comandos anteriores funcionan normalmente.

## Datos y render

Edita [data/videos/video-001.json](data/videos/video-001.json) para cambiar los supuestos, textos y fuentes del **mismo tipo de comparación**. Los importes finales se calculan automáticamente con `distancia × consumo / 100 × precio`. Para mantener la fase 1 verificable, el validador exige 100 km, 32 s, 30 fps, tres vehículos y revisión humana. Cambiar solo un precio del JSON actualiza su contador y el resultado, sin tocar React.

```bash
npm test
npm run typecheck
npm run render -- data/videos/video-001.json
```

El MP4 aparece en [output/video-001.mp4](output/video-001.mp4). Una configuración inválida detiene el render con un error explícito. El archivo está en `.gitignore` porque es un resultado generado; consérvalo aparte al compartirlo.

## Reel: ranking de marcas y modelos de 2025

La segunda composición es un Reel vertical de 30 segundos. Renderízala con:

```bash
npm run render-ranking -- data/videos/video-002.json
```

Genera [output/video-002.mp4](output/video-002.mp4). Las tres piezas usan la C del logotipo oficial guardada en `public/logo-marca-kilometro-claro.png`, junto al nombre Kilómetro Claro en la cabecera. El montaje contrasta a Toyota como marca líder con el Dacia Sandero como modelo líder, destaca el avance de Renault y aclara que el dato mide matriculaciones de turismos nuevos, no fiabilidad. Incluye la locución de `public/audio/voice-video-002.wav`, ajustada a 30 segundos conservando el tono.

Las cifras proceden de la [guía de Kilómetro Claro sobre matriculaciones de 2025](https://kilometroclaro.com/guias/marcas-coches-mas-vendidas-espana-2025/), con fuente ANFAC/IDEAUTO a partir de datos de la DGT. El archivo editorial y la validación están en `data/videos/video-002.json` y `src/content/validate-ranking.ts`.

## Reel: seis detalles del coche

La tercera composición, `HiddenCarDetailsReel`, dura 28,97 segundos y presenta seis funciones o detalles que varían según el vehículo. La cronología, los titulares y las líneas de locución que sirven también de subtítulos están en `data/videos/video-003.json`.

```bash
npm run render-details -- data/videos/video-003.json
```

El MP4 se genera como [output/video-003.mp4](output/video-003.mp4). Esta versión usa esquemas vectoriales animados porque el proyecto no contiene grabaciones de un coche. Lleva la voz de `public/audio/voice-video-003.wav` a su velocidad original y subtítulos integrados; se ajustaron la duración del vídeo y los cortes de escena para seguir las pausas de la narración. Para una versión de planos reales hay que grabar el modelo elegido y confirmar las funciones en su manual antes de publicar. `requiresHumanReview` sigue activado.

Las locuciones originales están guardadas en `public/audio/voice-video-001.wav`, `voice-video-002.wav`, `voice-video-003.wav` y `voice-video-004.wav`. Los vídeos 1 y 2 usan un ajuste leve de velocidad para encajar en su duración; los vídeos 3 y 4 conservan la voz a velocidad original y se adapta el montaje. Los renders finales llevan audio AAC.

## Reel: tipos de tracción

La cuarta composición compara tracción trasera, delantera, total/AWD y 4x4 en unos 93,5 segundos, siguiendo la duración de la voz original. Incluye cambios de plano cada pocos segundos, animaciones originales, subtítulos integrados y escenas recreadas en circuito cerrado.

```bash
pnpm render-drivetrain -- data/videos/video-004.json
```

El render integra `public/audio/voice-video-004.wav` a velocidad 1× y genera [output/video-004.mp4](output/video-004.mp4) y los subtítulos externos [output/video-004-es.srt](output/video-004-es.srt). El guion original para Google TTS está en `data/voiceovers/video-004-google-tts.txt`.

## Qué se ve

1. Pregunta inicial.
2. Supuestos por vehículo.
3. Tres coches SVG originales avanzando la misma distancia mientras cambian litros/kWh y euros.
4. Resultados ordenados por coste energético dentro del ejemplo.
5. Contexto sobre recarga doméstica y CTA al comparador web.

Los supuestos proceden de la [guía de Kilómetro Claro](https://kilometroclaro.com/guias/consumo-coche-electrico-gasolina-diesel/), revisada el 19 de octubre de 2026: gasolina 6 L/100 km a 1,60 €/L, diésel 5 L/100 km a 1,50 €/L y eléctrico 18 kWh/100 km a 0,20 €/kWh en casa. Son **valores hipotéticos** elegidos por la guía. Dan 9,60 €, 7,50 € y 3,60 € para 100 km. No reproducen la [tabla oficial MITECO](https://www.miteco.gob.es/es/energia/hidrocarburos-nuevos-combustibles/euros-por-100-km/coste-euro-100km.html). Se excluyen pérdidas de carga, peajes, aparcamiento y demás costes del coche.

`requiresHumanReview: true` es obligatorio porque precios y contexto temporal pueden cambiar. Antes de publicar, una persona debe revisar el artículo, sus fechas y el vídeo final.

## Estructura

```text
data/videos/       Datos editoriales y supuestos
docs/              Auditorías y arquitectura
scripts/           Render validado
src/brand/         Colores observados en la web
src/calculations/  Fórmulas puras
src/components/    SVG reutilizable del coche
src/compositions/  Composición Remotion
src/content/       Contrato y validación del JSON
tests/             Pruebas de cálculo y validación
output/            MP4 generado
```

Consulta [BRAND_AUDIT.md](docs/BRAND_AUDIT.md), [CONTENT_AUDIT.md](docs/CONTENT_AUDIT.md), [REFERENCE_VIDEO_ANALYSIS.md](docs/REFERENCE_VIDEO_ANALYSIS.md) y [VIDEO_SYSTEM.md](docs/VIDEO_SYSTEM.md). El Reel de referencia todavía no se ha aportado; cuando llegue, colócalo en `references/reference-instagram.mp4`. Las fases 2–6 no están implementadas.

La revisión del MP4 y de siete fotogramas está en [RENDER_QA.md](docs/RENDER_QA.md).
