# Plantillas oficiales del directorio de marcas

Fuente: plantillas que ha pasado el usuario el 13 de noviembre de 2026. Están alineadas con los tipos `CarBrand`, `BrandModel` (en `src/data/brands.ts`) y `ModelPageData` (en `src/data/model-pages.ts`), con las correcciones indicadas abajo.

## A. Entrada de modelo dentro de la marca (`src/data/brands.ts`)

```ts
{
  name: 'Nombre del modelo',
  pageSlug: 'nombre-del-modelo',
  body: 'SUV/crossover',
  bodySubtype: 'SUV compacto',
  powertrains: ['Gasolina', 'Híbrido no enchufable'],
}
```

## B. Ficha de marca (`src/data/brands.ts`)

```ts
{
  slug: 'marca',
  name: 'Marca',
  country: 'País de origen principal',
  // Solo cuando la propiedad actual deba aclararse.
  ownershipNote: 'Grupo propietario y país, si corresponde.',
  ownershipSource: { label: 'Fuente oficial sobre la propiedad', url: 'https://fuente-oficial.es' },
  headquartersCity: 'Ciudad',
  founded: 1900,
  logo: '/images/brands/marca.svg',
  logoLayout: 'wide', // Único valor válido; ver nota 1.
  reviewedAt: '13 de noviembre de 2026',
  descriptor: 'Resumen breve de la marca y su gama.',
  bio: 'Historia y contexto de la marca, redactados con fuentes verificables.',
  marketNote: 'Qué modelos se incluyen, su disponibilidad en España y los límites de la selección.',
  compactReferences: true, // Opcional.
  marketSources: [
    { label: 'Historia oficial de la marca', url: 'https://fabricante.es/historia' },
    { label: 'Gama oficial en España', url: 'https://fabricante.es/modelos' },
  ],
  powertrains: ['Gasolina', 'Híbrido no enchufable', 'Eléctrico'],
  officialUrl: 'https://fabricante.es/',
  rangeUrl: 'https://fabricante.es/modelos',
  historyUrl: 'https://fabricante.es/historia',
  models: [ /* entradas del bloque A */ ],
}
```

## C. Ficha de modelo (`src/data/<marca>-model-pages.ts`)

```ts
import type { ModelPageData } from './model-pages';

export const marcaModels: ModelPageData[] = [
  {
    brandSlug: 'marca',
    modelSlug: 'nombre-del-modelo',
    title: 'Marca Modelo: motores y ficha técnica | Kilómetro Claro',
    description: 'Descripción única y útil para buscadores.',
    intro: 'Presentación breve del modelo y de su gama española.',
    powertrainSummary: 'Explicación clara de sus motores y tecnologías.',
    usageNote: 'Qué conviene tener en cuenta al comparar sus versiones.',
    // PVP base del modelo, solo si está verificado con fuente. Sin precios por motorización.
    basePrice: 'Desde 00.000 €',
    basePriceLabel: 'Precio Base',
    priceNote: 'Criterio, fecha y condiciones del precio base.',
    versions: [
      {
        name: 'Nombre de versión',
        type: 'Gasolina',
        powertrainGroup: 'petrol',
        power: '100 CV (74 kW)',
        displacement: '1.199 cm³',
        maxTorque: '200 Nm',
        torqueScope: 'Motor térmico',
        torqueRpm: '1.750 rpm',
      },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.200 mm' },
    ],
    figures: [{ label: 'Consumo combinado WLTP', value: '5,5 l/100 km' }],
    specNote: 'Aclaraciones necesarias sobre diferencias entre versiones o cifras.',
    officialUrl: 'https://fabricante.es/modelo',
    technicalUrl: 'https://fabricante.es/modelo/ficha-tecnica',
    sources: [
      { label: 'Fabricante: gama del modelo', url: 'https://fabricante.es/modelo' },
      { label: 'Fabricante: ficha técnica', url: 'https://fabricante.es/modelo/ficha-tecnica' },
    ],
    image: {
      src: '/images/models/commons/modelo.jpg',
      alt: 'Descripción fiel de la imagen.',
      width: 1280,
      height: 850,
      sourceTitle: 'Nombre de la imagen original',
      sourceUrl: 'https://fuente-de-la-imagen.es/archivo',
      authorName: 'Nombre del autor',
      authorUrl: 'https://fuente-de-la-imagen.es/autor',
      licenseName: 'Licencia de uso',
      licenseUrl: 'https://creativecommons.org/',
      caption: 'Aclaración útil sobre la imagen, si hace falta.',
    },
    reviewedAt: '13 de noviembre de 2026',
  },
];
```

## Notas de corrección (diferencias con el código)

1. **`logoLayout`**: la plantilla dice «wide, crop o dark», pero en el código `logoLayout` solo admite `'wide'`. El recorte es `logoCrop: true` y el tono oscuro es `logoTone: 'dark'`. Se usan así en las marcas existentes.
2. **Precio sin verificar**: si no hay precio con fuente, no se escribe `basePrice`. Se usa `basePricePending: true`, que existe en el tipo y se usa en el código.
3. **`powertrainGroup`** solo admite: `electric`, `hydrogen`, `plug-in`, `hybrid`, `mild-hybrid`, `mild-bifuel`, `multi-energy`, `bifuel`, `diesel`, `petrol`, `mixed`.
4. **Imagen**: `authorName` y `licenseName` son obligatorios en el tipo. Sin licencia verificable, no se incluye imagen.
5. **`versions`** es obligatorio en el tipo, aunque la plantilla lo muestre como ejemplo. Si no hay ficha técnica verificable, se deja PENDIENTE y no se inventan cifras.
