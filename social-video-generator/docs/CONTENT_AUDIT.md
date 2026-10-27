# Auditoría de contenido para vídeo

Revisión: 21 de octubre de 2026. Inventario del listado de [guías](https://kilometroclaro.com/guias/) y [herramientas](https://kilometroclaro.com/herramientas/), contrastado con `src/data/guides.ts` y `src/data/tools.ts` del proyecto original (solo lectura).

| Contenido | Clase | Potencial visual | Tratamiento de datos |
| --- | --- | --- | --- |
| [Eléctrico frente a gasolina o diésel](https://kilometroclaro.com/guias/consumo-coche-electrico-gasolina-diesel/) | temporal | Tres carriles; km, energía y euros evolucionan a la vez | Precios supuestos de la guía; revisión humana |
| [Cómo calcular el consumo real](https://kilometroclaro.com/guias/como-calcular-consumo-real-coche/) | evergreen | Odómetro, surtidor y fórmula paso a paso | Medición de ejemplo rotulada |
| [Cuánto cuesta un viaje](https://kilometroclaro.com/guias/cuanto-cuesta-viaje-coche/) | temporal | Ruta, peajes, aparcamiento y total acumulado | Distancias y precios con fecha |
| [Cómo reducir consumo](https://kilometroclaro.com/guias/como-reducir-consumo-combustible/) | evergreen | Comparación del mismo trayecto con hábitos distintos | No prometer ahorro fijo |
| [Coste mensual del coche](https://kilometroclaro.com/guias/cuanto-cuesta-mantener-coche-mes-espana/) | temporal | Partidas que se suman al mes | Impuestos y precios con fecha |
| [Tipos de híbrido](https://kilometroclaro.com/guias/coche-hibrido-enchufable-o-microhibrido/) | evergreen | Flujo de energía y usos | No generalizar modelos |
| [Coches baratos en 2026](https://kilometroclaro.com/guias/coches-baratos-espana/) | temporal | Ranking y bandas de precio | Verificar versión y precio antes de publicar |
| [Marcas más vendidas en 2025](https://kilometroclaro.com/guias/marcas-coches-mas-vendidas-espana-2025/) | temporal | Barras de matriculaciones | Periodo anual visible |
| [Fiabilidad de marcas](https://kilometroclaro.com/guias/marcas-coches-mas-fiables-ranking/) | temporal | Ranking y cautelas de muestra | Atribuir estudio; revisión humana |
| [Zonas de bajas emisiones](https://kilometroclaro.com/guias/zonas-bajas-emisiones-espana-como-afectan/) | legal/regulatory | Decisión por municipio y etiqueta | Revisar norma local antes de publicar |
| [Normativa DGT octubre 2026](https://kilometroclaro.com/guias/nueva-normativa-dgt-octubre-2026/) | legal/regulatory | Línea temporal de entrada en vigor | Fuente oficial y revisión humana |
| Actualidad de modelos | news | Confirmado frente a anunciado | Fecha y atribución visibles |

**Primer prototipo elegido:** comparación energética de 100 km. Tiene una pregunta inmediata, tres trayectorias equivalentes y una fórmula verificable. La guía expone todos los supuestos necesarios para animar los contadores. La comparación se limita al coste de energía; no implica coste total de propiedad.

Las calculadoras son buenos CTA y posibles fuentes de interacción futura. La fase 1 solo enlaza al [comparador](https://kilometroclaro.com/calculadoras/comparador-gasolina-diesel-electrico/); no extrae datos de usuarios ni automatiza contenido nuevo.
