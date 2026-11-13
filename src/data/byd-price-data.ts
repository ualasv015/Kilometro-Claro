/** PVPR publicados por BYD para Península y Baleares, sin campañas ni ayudas. */
export const bydPriceSource = 'https://www.byd.com/es-es/news-list/ayudas-plan-auto-byd-2026';
export const bydPriceNote = 'Precios PVPR recomendados por BYD para Península y Baleares, según su relación de agosto de 2026. No incluyen campañas, financiación, CAE ni ayudas públicas; las condiciones y los gastos de preentrega, transporte o matriculación pueden modificar el importe final. BYD publica ofertas temporales aparte.';

export const bydPriceData: Record<string, {
  basePrice: string;
  versionPrices: Record<string, string>;
  sourceUrl?: string;
  sourceLabel?: string;
  note?: string;
}> = {
  'dolphin-surf': {
    basePrice: '20.140 €',
    versionPrices: {
      'Active MY26 · 4 plazas': '20.140 €',
      'Boost MY26 · 4 plazas': '24.140 €',
      'Boost MY26 · 5 plazas': '24.490 €',
      'Comfort MY26 · 4 plazas': '26.640 €',
      'Comfort MY26 · 5 plazas': '26.990 €',
    },
    sourceUrl: 'https://www.byd.com/es-es/news-list/nuevo-byd-dolphin-surf-2026-5-plazas',
    sourceLabel: 'Precios PVP recomendados BYD DOLPHIN SURF MY26 para Península y Baleares; edición consultada el 6 de noviembre de 2026',
    note: 'PVP recomendados de la gama DOLPHIN SURF MY26 para Península y Baleares. La tarifa distingue versiones de cuatro y cinco plazas. Se excluyen campañas, financiación, ayudas públicas y CAE; el precio final puede variar por configuración y gastos de entrega o matriculación.',
  },
  dolphin: {
    basePrice: '36.690 €',
    versionPrices: { Comfort: '36.690 €', Design: '38.690 €' },
  },
  'dolphin-g-dmi': {
    basePrice: '25.200 €',
    versionPrices: {
      'Active DM-i': '25.200 €',
      'Boost DM-i': '28.200 €',
      'Comfort DM-i': '29.700 €',
      'Sport DM-i': '30.700 €',
    },
  },
  'atto-2': {
    basePrice: '29.990 €',
    versionPrices: {
      Active: '29.990 €',
      Boost: '31.990 €',
      Comfort: '36.200 €',
    },
  },
  'atto-2-dmi': {
    basePrice: '28.200 €',
    versionPrices: {
      Active: '28.200 €',
      Boost: '31.200 €',
    },
  },
  'atto-3-evo': {
    basePrice: '42.990 €',
    versionPrices: { Design: '42.990 €', Excellence: '45.990 €' },
  },
  'seal-6-dmi': {
    basePrice: '37.000 €',
    versionPrices: {
      'Boost DM-i': '37.000 €',
      'Comfort Lite DM-i': '42.000 €',
      'Comfort DM-i': '43.000 €',
    },
  },
  'seal-6-dmi-touring': {
    basePrice: '38.500 €',
    versionPrices: {
      'Boost Touring DM-i': '38.500 €',
      'Comfort Lite Touring DM-i': '43.500 €',
      'Comfort Touring DM-i': '44.500 €',
    },
  },
  'seal-u': {
    basePrice: '43.790 €',
    versionPrices: {
      Comfort: '43.790 €',
      Design: '47.290 €',
    },
  },
  'seal-u-dmi': {
    basePrice: '38.500 €',
    versionPrices: {
      Boost: '38.500 €',
      Comfort: '41.000 €',
      'Design AWD': '45.500 €',
    },
  },
  seal: {
    basePrice: '41.990 €',
    versionPrices: {
      Comfort: '41.990 €',
      'Design · tracción trasera': '49.490 €',
      'Excellence AWD': '52.490 €',
    },
  },
  'sealion-7': {
    basePrice: '47.990 €',
    versionPrices: {
      Comfort: '47.990 €',
      'Design AWD': '51.500 €',
      'Excellence AWD': '54.390 €',
    },
  },
  tang: {
    basePrice: '72.000 €',
    versionPrices: { Flagship: '72.000 €' },
  },
};
