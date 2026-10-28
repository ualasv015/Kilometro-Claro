# Verificación del prototipo renderizado

Fecha: 27 de octubre de 2026.

## Comprobaciones ejecutadas

- `pnpm test`: 3 pruebas correctas (cálculos de los tres vehículos, proporcionalidad y rechazo de datos inválidos).
- `pnpm typecheck`: sin errores TypeScript.
- `pnpm render -- data/videos/video-001.json`: finalizó correctamente y generó `output/video-001.mp4`.
- `ffprobe`: H.264, 1080 × 1920, 30 fps, 32,000 s; versión inicial sin pista de audio. La pista de voz añadida y verificada en el render final se registra al final de este documento.
- FFmpeg: extracción de `output/frames/frame-{02,05,12,20,24,27,31}.png`.

## Inspección visual

Se revisaron los fotogramas a 2, 5, 12, 20, 24, 27 y 31 s. La primera versión cortaba el tercer vehículo del hook y rozaba la línea de energía con la carretera. Se corrigieron tamaño y posición del coche, altura del panel y separación de los contadores. El render final muestra los tres vehículos completos, cifras legibles y tarjetas sin solapamientos en los fotogramas inspeccionados. El cierre conserva el CTA hasta el final.

Los fotogramas confirman que la fuente y la marca de «ejemplo hipotético» permanecen visibles, que los precios y consumos de partida están identificados como supuestos y que el resultado presenta únicamente coste energético.


## Límite de esta revisión

La inspección por fotogramas no equivale a una prueba en cada interfaz de Instagram, TikTok o YouTube. Antes de publicar debe revisarse la pieza completa en un móvil y volver a comprobar los datos y su fecha. `requiresHumanReview` permanece activado.

## Reel de matriculaciones 2025

- `pnpm typecheck`: sin errores TypeScript.
- `pnpm render-ranking -- data/videos/video-002.json`: render terminado correctamente.
- `ffprobe`: render inicial H.264, 1080 × 1920, 30 fps, 30,000 s y sin audio. La versión final con voz se registra al final de este documento.
- Se inspeccionaron fotogramas a 1, 5, 8, 12, 14, 18, 20, 23 y 28 s. La marca C del logotipo está visible arriba; los contadores llegan a 96.290, 38.548 y +29,7 %. No se observaron cortes ni solapamientos.
- Los rótulos aclaran que se trata de matriculaciones de turismos en España durante 2025 y atribuyen las cifras a ANFAC/IDEAUTO y DGT.

## Marca C en ambos vídeos

- `public/logo-marca-kilometro-claro.png` coincide byte por byte con la imagen enviada por el usuario y con el recurso de marca C del sitio.
- Las dos composiciones comparten `src/components/BrandLogo.tsx`, que muestra la C junto al nombre Kilómetro Claro. La K anterior ya no aparece en las cabeceras.
- Se comprobaron fotogramas de portada extraídos a 1 s de ambos MP4; la C y el nombre se ven completos en la parte superior.
- Los dos archivos se volvieron a renderizar en H.264 vertical 1080 × 1920 y conservan sus duraciones originales, 32 s y 30 s. La pista de voz AAC de cada render final se registra al final de este documento.

## Reel de seis detalles

- `pnpm typecheck`: sin errores TypeScript.
- `pnpm render-details -- data/videos/video-003.json`: render gráfico inicial terminado correctamente, 39 s y 30 fps. Esta versión fue sustituida por una duración adaptada a la voz original.
- Se revisaron fotogramas de apertura, recirculación, retrovisores, presión, llave, seguro infantil y cierre. La C oficial aparece en apertura/cierre; el logotipo completo acompaña las escenas de detalle. Titulares, subtítulos y notas de variación por modelo se leen en los fotogramas revisados.
- El gráfico de presión destaca la fila de vehículo cargado sin inventar cifras específicas. Las escenas son esquemas, no fotos del coche real. Antes de publicar, sustituir los esquemas por tomas del vehículo escogido y confirmar cada función en su manual.

## Locuciones añadidas

- Se incorporaron los WAV proporcionados por el usuario como `public/audio/voice-video-001.wav`, `voice-video-002.wav` y `voice-video-003.wav`.
- Los tres MP4 finales se renderizaron con voz AAC a 48 kHz y dos canales. `ffprobe` confirma H.264, 1080 × 1920 y 30 fps en los tres:
  - Vídeo 1: 32,000 s; 6 158 310 bytes.
  - Vídeo 2: 30,016 s (redondeo de paquetes AAC); 4 349 759 bytes.
- Vídeo 3: render final con 28,966667 s de imagen y 28,971 s de audio AAC; 869 fotogramas a 30 fps. El WAV original dura 28,960 s, así que la diferencia de salida es de 0,011 s por el empaquetado AAC.
- Los audios 1 y 2 se aceleraron ligeramente para ajustarlos a 32 y 30 segundos, conservando el tono. En respuesta a la revisión del usuario, el vídeo 3 ahora mantiene el WAV a velocidad original; se acortaron la duración y los límites de escena para ajustarlos a sus pausas.
- `pnpm typecheck` y el render final `pnpm render-details -- data/videos/video-003.json` terminaron correctamente. Los WAV adjuntos y sus copias en `public/audio/` tienen el mismo SHA-256; el vídeo 3 reproduce el original a velocidad 1×.

## Reel de tipos de tracción

- `pnpm typecheck`: sin errores TypeScript.
- `pnpm render-drivetrain -- data/videos/video-004.json`: render terminado correctamente.
- El WAV aportado se copió a `public/audio/voice-video-004.wav`; ambos archivos tienen el mismo SHA-256. Remotion lo reproduce a velocidad 1×, sin modificar el audio.
- `ffprobe`: H.264, AAC estéreo a 48 kHz, 1080 × 1920, 30 fps constantes y 2806 fotogramas; imagen de 93,533 s, audio empaquetado de 93,547 s y 46 124 642 bytes. H.264 se exporta a CRF 15, preset slow y GOP de 60.
- Se quemaron 35 subtítulos y se generó `output/video-004-es.srt`. Las escenas y subtítulos se ajustaron a las pausas reales del WAV: el bloque AWD comienza a 54,367 s, tras la advertencia de lluvia.
- Se inspeccionaron fotogramas finales a 52, 55 y 77 s: el de 52 aún muestra la advertencia de lluvia con su subtítulo; a 55 comienza AWD con el texto correspondiente; y el plano de solapamiento AWD/4x4 coincide con su explicación.
- Se redujeron partículas y microvibraciones decorativas para limpiar la imagen, manteniendo el movimiento de los coches y los cambios de plano.
- La escena sobre mojado mantiene la advertencia de recreación. El montaje recuerda que la tracción no garantiza adherencia ni mejora por sí sola la frenada, y que la reductora depende de la versión.
