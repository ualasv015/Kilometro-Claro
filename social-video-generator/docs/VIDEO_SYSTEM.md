# Sistema de vídeo — fases 0 y 1

## Arquitectura

Proyecto Remotion independiente dentro de `social-video-generator/`. La web original no se importa ni se modifica. `data/videos/video-001.json` contiene la pregunta, fuentes, fechas, supuestos y parámetros de tres vehículos. `src/content/validate.ts` rechaza datos incompletos o imposibles antes de renderizar. `src/calculations/cost.ts` calcula energía y coste para cualquier distancia, sin importes incrustados en la vista. `src/compositions/CostComparison.tsx` solo representa estados derivados del JSON y del fotograma actual. `scripts/render.ts` valida, registra pasos y llama al render MP4.

El JSON es ya un contrato de datos para este primer caso, pero **no es aún una plantilla universal**. La fase 2 extraerá tipos de escena y duraciones configurables después de evaluar el prototipo.

## Trazabilidad de las cifras

La guía de [Kilómetro Claro](https://kilometroclaro.com/guias/consumo-coche-electrico-gasolina-diesel/) (actualizada el 19-10-2026) publica como **supuestos hipotéticos**: gasolina 6 L/100 km a 1,60 €/L; diésel 5 L/100 km a 1,50 €/L; eléctrico 18 kWh/100 km con recarga doméstica a 0,20 €/kWh. La animación calcula, para `d` km, `energía = d × consumo / 100` y `coste = energía × precio`. A 100 km, los resultados son 9,60 €, 7,50 € y 3,60 €. No son precios actuales garantizados ni medias nacionales.

La misma guía cita aparte una [tabla oficial de MITECO](https://www.miteco.gob.es/es/energia/hidrocarburos-nuevos-combustibles/euros-por-100-km/coste-euro-100km.html), actualizada el 23-09-2026. Esa tabla **no** alimenta los contadores del vídeo. Su cifra para recarga rápida es distinta de la doméstica; el vídeo especifica que el eléctrico se carga en casa.

## Publicabilidad

`requiresHumanReview: true` porque los precios de ejemplo y el contexto temporal pueden perder vigencia. El render genera un archivo para revisión, no una pieza aprobada para publicar. Antes de publicar se revisarán datos, fecha de la guía, vigencia del enlace y lectura en el móvil. No hay publicación automática.

## Línea temporal del prototipo

32 s a 30 fps, 1080 × 1920, con voz en off desde `public/audio/voice-video-001.wav`. La locución se ajusta ligeramente para cubrir la duración completa y se conserva el tono. La secuencia muestra hook, supuestos, simulación de 0 a 100 km, resultado, contexto y CTA. Tres carriles equivalentes contienen coches SVG propios. Las líneas de carretera y los números se animan de forma determinista por fotograma. Los componentes no usan temporizadores de reloj ni valores aleatorios. Los elementos esenciales se mantienen fuera de los bordes y de la zona inferior usual de interfaces sociales.

## Preparación para automatización posterior

El render recibe una ruta JSON, falla si faltan fuentes o supuestos, y produce un MP4 con nombre estable. El cálculo es puro y probado. Para la fase 2 faltan una biblioteca de escenas, un esquema versionado para varias plantillas y una interfaz de revisión editorial. Las fases 3–6 quedan fuera de este trabajo.

## Reel adicional: matriculaciones de 2025

`Sales2025Reel` presenta en 30 segundos y 1080 × 1920 la diferencia entre el ranking por marca y por modelo. Toyota suma 96.290 turismos matriculados; el Dacia Sandero es el modelo líder con 38.548, aunque Dacia quedó sexta por marcas. Renault subió del quinto al segundo puesto y creció un 29,7 % dentro de la comparación del top 10. El pie identifica que son matriculaciones de turismos nuevos de enero a diciembre de 2025, con fuente ANFAC/IDEAUTO a partir de DGT.

La cabecera usa el símbolo C del logotipo oficial (`public/logo-marca-kilometro-claro.png`) junto al nombre Kilómetro Claro, en una tarjeta clara para conservar contraste. El mismo componente `BrandLogo` se comparte con el primer vídeo. La pieza combina rótulos cinéticos, gráficos y la voz de `public/audio/voice-video-002.wav`; se ajusta ligeramente su velocidad para encajar en 30 segundos conservando el tono. El contenido y los supuestos editoriales están en `data/videos/video-002.json`; `scripts/render-ranking.ts` valida el contrato y genera `output/video-002.mp4`.

## Reel: seis detalles del coche

`HiddenCarDetailsReel` presenta seis detalles en 28,97 segundos y 1080 × 1920. Cada escena muestra un esquema vectorial, un titular, la línea de locución como subtítulo y, cuando corresponde, una nota sobre variaciones por modelo. El símbolo C aparece destacado en apertura y cierre, y la cabecera `BrandLogo` permanece en las escenas de detalle. La voz de `public/audio/voice-video-003.wav` se reproduce a velocidad original; se acortaron el montaje y los cortes de escena para seguir las pausas y el fraseo de la locución.

El proyecto no incluye tomas del vehículo real, así que este render es una versión gráfica con voz. Antes de publicar se deben sustituir los esquemas por planos del modelo elegido y comprobar sus funciones en el manual. Los textos y tiempos están en `data/videos/video-003.json`; `scripts/render-details.ts` genera `output/video-003.mp4`.

## Sincronización de voz

Los archivos de voz generados son la fuente de verdad para el ritmo. No se cambia su velocidad ni tono para ajustarlos a una duración prevista: se adapta la duración del vídeo, los cortes, las animaciones y el cierre a la locución disponible. El render valida que la duración del vídeo se exprese en fotogramas enteros.

## Ritmo visual para retención

En los nuevos reels se priorizan los estímulos visuales: evitar mantener un plano estático durante varios segundos; alternar encuadres, ilustraciones y detalles cada 2–4 segundos cuando el texto lo permita; animar coches, ruedas, trayectorias y rótulos; y sincronizar cada cambio con la frase que representa. La intensidad visual no debe ocultar subtítulos, marca ni explicaciones de seguridad.

## Reel: tipos de tracción

`DrivetrainExplainerReel` sigue la locución de 93,52 segundos en un reel vertical de 93,53 segundos a 30 fps. Arranca con la pregunta «¿Qué tracción crees que usa este coche?» y un monoplaza genérico derrapando en una recreación de circuito. Después explica qué son las ruedas motrices; compara trasera y delantera; y termina diferenciando con cautela AWD/tracción total y los 4x4 que incorporan reductora. Usa cuatro planos animados en las explicaciones de tracción trasera y delantera, cortes frecuentes, cambios de escala y movimiento de cámara. La comparación sobre mojado se presenta como una ilustración, no como una regla: neumáticos, velocidad, firme y ayudas electrónicas influyen. La guía explica que las etiquetas AWD, tracción total y 4x4 pueden solaparse; se recomienda comprobar el sistema concreto.

Las escenas son ilustraciones SVG propias y el símbolo C oficial permanece arriba. La locución original está en `public/audio/voice-video-004.wav` y se renderiza a velocidad 1×, sin alterar tono ni duración. Las frases aparecen en subtítulos integrados y también se exportan a `output/video-004-es.srt`. La guía y referencias usadas están listadas en `data/videos/video-004.json`.
