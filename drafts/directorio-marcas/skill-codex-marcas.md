---
name: kilometro-claro-marcas-y-modelos
description: Audita y completa las fichas de marcas y modelos de Kilómetro Claro (turismos disponibles para particulares en España), con plantillas, precios pendientes, imágenes con licencia y revisión independiente. Úsala al revisar una lista de marcas en el repositorio.
---

# Fichas de marcas y modelos de Kilómetro Claro (versión Codex)

Versión 4, borrador de 13 de noviembre de 2026. Quita los precios por motorización: solo se publica el PVP base y la oferta vigente de cada modelo. Añade los tres estados de revisión (sección 10). Incorpora lo aprendido en la auditoría piloto de Fiat: el configurador como fuente del PVP, el bloqueo de referencias de terceros como precio base y el formato fijo de informe para los subagentes de investigación.

## 1. Alcance

- Incluye turismos, SUV, deportivos y monovolúmenes de pasajeros que un particular puede comprar nuevo en España, según la web oficial española, su configurador o stock oficial confirmado.
- Excluye furgones de carga y cualquier vehículo solo configurado para carga comercial.
- **No pueden entrar campers ni cuadriciclos.** Quedan fuera:
  - Las autocaravanas y campers terminadas, y las bases de transformación camper, como un chasis de furgoneta preparado para autocaravana (por ejemplo, Ducato Camper).
  - Los cuadriciclos ligeros, incluidos los eléctricos tipo Topolino.
  - Si aparece una ficha de cualquiera de estos tipos en una lista, se retira del catálogo sin excepción.
- No presenta conceptos ni prototipos como modelos actuales. Las gamas descatalogadas se retiran.
- Si el fabricante mantiene un modelo en su web pero el configurador no permite encargarlo, se anota como disponibilidad dependiente de stock. **No se excluye del catálogo** por estar agotado.

## 2. Plantillas

Las plantillas oficiales están en [plantillas.md](plantillas.md). Úsalas para comprobar que cada campo existe, tiene su formato y está verificado. Los tipos de referencia son `CarBrand`, `BrandModel` (en `src/data/brands.ts`) y `ModelPageData` (en `src/data/model-pages.ts`).

## 3. Reglas de datos

1. **No inventes datos.** Si no hay fuente verificable, el dato queda pendiente.
2. **Toda cifra lleva fuente y fecha de consulta.** Precio, consumo, autonomía, potencia, dimensiones, plazas o año.
3. **Orden de fuentes:** web oficial de la marca en España; tarifa o catálogo oficial vigente; medios especializados españoles. No uses extractos del buscador como prueba suficiente. Si una web oficial responde con 403 a peticiones automáticas, consúltala con el navegador disponible, no con el buscador.
4. **Precio base (PVP) frente a ofertas.** El PVP base permanente va en `basePrice`. Su fuente primaria es el «Precio Catálogo desde» del configurador oficial de la marca, que no incluye gastos de matriculación. Una campaña o un precio al contado con caducidad se identifica como oferta, con su fecha de fin, en `currentOfferPrice` y `currentOfferLabel`. Nunca presentes una oferta como PVP base. Solo se publican dos precios por modelo: el PVP base (`basePrice`) y la oferta vigente del modelo (`currentOfferPrice`). **No se publican precios por motorización ni por versión.**
11. **Sin referencias de terceros como PVP.** Coches.net, Diariomotor, Carwow y similares no sirven como `basePrice`. Si solo existen esas cifras, el dato queda pendiente. Antes de la auditoría de Fiat, el archivo `catalog-reference-price-data.ts` aplicaba esas cifras como precio base; las entradas de Doblò y Ulysse se retiraron por eso.
5. **Precio pendiente.** Si el PVP base del modelo no es verificable, publica el modelo con `basePricePending: true` y anótalo en `precios-pendientes.txt`, a nivel de modelo. No la bloquees y no escribas un precio estimado.
6. **Par máximo.** `maxTorque`, `torqueScope` y `torqueRpm` son obligatorios en el tipo. Si falta un dato, usa `—`.
7. **Imagen.** No es obligatoria. Si la hay, debe tener licencia y autor verificables (`authorName` y `licenseName` son obligatorios en el tipo). Si no, omite `image`.
8. **Un modelo = una entrada.** Agrupa carrocerías y baterías bajo una familia. Los acabados no son modelos.
9. **Tono:** informativo y sobrio, sin superlativos ni lenguaje de venta.
10. **No cambies la estructura.** No renombres claves, no cambies formatos ni añadas columnas a la tabla de motores.

## 4. Campos de marca

- Obligatorios: `slug`, `name`, `country`, `headquartersCity`, `founded`, `logo`, `reviewedAt`, `descriptor`, `bio`, `marketNote`, `powertrains`, `officialUrl`, `rangeUrl`, `models`.
- Opcionales: `ownershipNote` y `ownershipSource`, cuando la propiedad actual deba aclararse; `marketSources`; `historyUrl`; `compactReferences`.
- Logotipo: `logoLayout` solo admite `'wide'`. Para recorte usa `logoCrop: true`. Para tono oscuro usa `logoTone: 'dark'`.
- `powertrains` y `powertrainGroup` solo usan los valores de la sección 5.

## 5. Normalización

- **Tipos de coche:** `Urbano/utilitario`, `Compacto`, `Berlina`, `Familiar`, `SUV/crossover`, `Deportivo`, `Monovolumen/furgoneta de pasajeros` y `Pick-up`.
- **Subtipo visible:** el descriptor concreto va en `bodySubtype`, no como filtro independiente (por ejemplo, `SUV · coupé`).
- **Motorizaciones:** `Gasolina`, `Diésel`, `Híbrido no enchufable`, `Híbrido enchufable`, `Eléctrico`, `GLP`, `GNC` e `Hidrógeno`. Conserva MHEV y HEV como etiqueta secundaria.
- **`powertrainGroup`:** `electric`, `hydrogen`, `plug-in`, `hybrid`, `mild-hybrid`, `mild-bifuel`, `multi-energy`, `bifuel`, `diesel`, `petrol`, `mixed`.
- **Tabla de motores:** columnas `Versión`, `Tipo`, `Potencia`, `Cilindrada` y `Par máximo`. Potencia en CV con kW entre paréntesis. Cilindrada `—` para eléctricos puros. La tabla no lleva precios.

## 6. Proceso por marca

Se trabaja una marca a la vez, y la marca actual es la primera línea de la lista asignada.

1. **Auditoría.** Compara la ficha de marca y cada modelo con la plantilla. Anota los fallos y los datos pendientes.
2. **Investigación.** Fuentes oficiales españolas para gama, motores, precios y fichas técnicas. Registra la fecha de consulta.
3. **Implementación.** Solo la instancia que aplica cambios edita archivos. Registra en `precios-pendientes.txt` lo que quede sin precio.
4. **Compilación.** Ejecuta el Node del runtime de Codex (ver `AGENTS.md`): `astro check`, `astro build` y `scripts/check-dist.mjs`. No uses `npm` desde PowerShell.
5. **Revisión independiente.** Un subagente nuevo, de solo lectura, con otro modelo de menor capacidad si la herramienta lo permite (`fork_turns: "none"`). Revisa solo la marca asignada y sus rutas. Su informe empieza por `APROBADA` o `NO APROBADA`, con un estado por cada URL.
6. **Cierre.** Si la revisión aprueba, quita la marca de la lista. Si no aprueba, corrige, compila y vuelve a revisar. Cuenta los rechazos por URL. Si una página recibe su quinto rechazo, para el procesamiento e informa.
7. **Registro de progreso.** Guarda `<nombre-de-la-lista>.progress.json` junto a la lista, con marca actual, fase y rechazos por URL. Si se compacta el contexto o se reanuda, comprueba primero que la marca registrada es la primera línea de la lista.

## 7. Paralelismo y papel de cada agente

- **Coordinador:** la instancia principal. Es la única que edita archivos, compila, actualiza la lista y el registro de precios.
- **Subagentes de investigación:** uno por marca, en paralelo. Solo leen fuentes, no editan nada y devuelven el informe de la sección 9.
- **Revisor:** un subagente nuevo, de solo lectura, que revisa una marca ya aplicada.
- Varias listas pueden investigar a la vez. Una sola instancia aplica los cambios, para que no se pisen `src/data/brands.ts`, `precios-pendientes.txt` ni `dist`.

## 9. Informe de investigación (formato fijo)

Cada subagente de investigación devuelve exactamente este bloque. Si un campo no tiene dato, escribe `PENDIENTE` y su motivo.

```
MARCA: <nombre> (<slug>)
CONSULTAS: <URL | medio de consulta | fecha>
PVP_BASE: <modelo> | <motor y acabado> | <importe> | <URL del configurador> | <fecha>
OFERTAS: <modelo> | <importe> | <validez> | <URL> | <fecha>
PENDIENTES: <modelo o motorización> | <dato que falta> | <por qué>
EXCLUSIONES: <modelo> | <motivo: campers, cuadriciclo, descatalogado, solo comercial>
CAMBIOS_PROPUESTOS: <archivo y campo> | <valor actual> | <valor propuesto> | <fuente>
```

## 10. Estados de revisión (versión 3)

Cada marca termina en uno de estos tres estados. El revisor debe usar exactamente uno.

- **APROBADA:** sin discrepancias entre fuentes y sin datos pendientes.
- **APROBADA CON PENDIENTES:** sin discrepancias entre fuentes. Hay datos que no se han podido verificar, y cada uno está registrado en `precios-pendientes.txt` con `basePricePending: true` o con una etiqueta de pendiente en la ficha.
- **NO APROBADA:** hay una discrepancia entre fuentes que se ha publicado como dato, o hay un incumplimiento de estas reglas.

**Criterio para la discrepancia:** una discrepancia que se deja como pendiente en el dato no bloquea la marca, pero debe quedar como pendiente en la ficha. Si la discrepancia se publica como importe o como oferta, la marca es NO APROBADA hasta resolverla.

**Reglas que siempre producen NO APROBADA:**
- Un PVP base que depende de una condición (financiación, Plan Auto+, CAE, ayudas o campañas) y se publica como PVP sin condiciones.
- Un modelo excluido porque aparece agotado en el configurador. Debe mantenerse con etiqueta de disponibilidad dependiente de stock.
- Una referencia de terceros usada como `basePrice`.
- Un quinto rechazo en cualquier página. El procesamiento se detiene y no se aprueba la marca.

Al revisar, el revisor indica el estado en la primera línea del informe: `APROBADA`, `APROBADA CON PENDIENTES` o `NO APROBADA`.

## 8. Límites

- No hagas commit, push ni despliegue salvo autorización expresa.
- No borres ni reescribas el registro de precios pendientes sin verificar la fuente.
- No añadas precios por motorización: nada de `versionPrices`, `priceOptions`, `price` ni `priceType` dentro de `versions`, ni bloques de precio por motor en la ficha.
- Si el revisor no está disponible o la compilación falla por una causa que no puedes resolver con seguridad, pausa sin marcar la marca como aprobada.
