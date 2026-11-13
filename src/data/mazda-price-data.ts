export type MazdaVersionPrice = {
  price: string;
  priceType: string;
};

export type MazdaModelPricing = {
  basePrice: string;
  note: string;
  sourceUrls: { label: string; url: string }[];
  versionPrices: Record<string, MazdaVersionPrice>;
};

const checked = 'Precios consultados el 10 de noviembre de 2026 en la gama y los configuradores oficiales de Mazda España. Mazda identifica los importes como PVP recomendado para Península y Baleares, con IVA del 21 %, transporte e impuesto de matriculación incluidos. No se aplican campañas, financiación ni ayudas. El precio por motorización corresponde al acabado indicado y puede variar con el equipamiento, los colores y los accesorios.';
const configurator = (url: string) => ({ label: 'Configurador oficial Mazda España; PVP recomendado y versiones', url });

export const mazdaPriceData: Record<string, MazdaModelPricing> = {
  'cx-6e': {
    basePrice: '46.200 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda CX-6e', url: 'https://www.mazda.es/gama/mazda-cx-6e/' },
      configurator('https://www.mazda.es/configurador/cnfwqr2rk/41W/GX2TAT/'),
    ],
    versionPrices: {
      'CX-6e eléctrico': { price: '46.200 €', priceType: 'Acabado Takumi; precio de acceso publicado por Mazda.' },
    },
  },
  'cx-5': {
    basePrice: '35.990 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda CX-5', url: 'https://www.mazda.es/gama/mazda-cx-5/' },
      configurator('https://www.mazda.es/configurador/cnfA0Luz3W/46V/KJNSTE/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv G 141 M Hybrid': { price: '35.990 €', priceType: 'Acabado Prime-Line, tracción delantera; precio de acceso publicado por Mazda.' },
    },
  },
  mazda6e: {
    basePrice: '44.725 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda6e', url: 'https://www.mazda.es/gama/mazda-6e/' },
      configurator('https://www.mazda.es/configurador/MAZDA%206e/5HB/'),
    ],
    versionPrices: {
      'Mazda6e eléctrico 2027': { price: '44.725 €', priceType: 'Acabado Takumi; precio de acceso publicado por Mazda.' },
    },
  },
  'cx-30': {
    basePrice: '31.870 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda CX-30', url: 'https://www.mazda.es/gama/mazda-cx-30/' },
      configurator('https://www.mazda.es/configurador/MAZDA_CX-30/5WGN/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv G 140 M Hybrid': { price: '31.870 €', priceType: 'Acabado Prime-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
      '2.0 e-Skyactiv X 186 M Hybrid': { price: '36.220 €', priceType: 'Acabado Centre-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
    },
  },
  'cx-60': {
    basePrice: '54.220 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda CX-60', url: 'https://www.mazda.es/gama/mazda-cx-60/' },
      configurator('https://www.mazda.es/configurador/MAZDA_CX-60/5WGN/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv PHEV AWD': { price: '57.616 €', priceType: 'Acabado Prime-Line; PVP de acceso de la motorización enchufable.' },
      '3.3 e-Skyactiv D MHEV 200': { price: '54.220 €', priceType: 'Acabado Prime-Line, tracción trasera; precio de acceso del motor.' },
      '3.3 e-Skyactiv D MHEV 254': { price: '59.240 €', priceType: 'Acabado Prime-Line, tracción total; precio de acceso del motor.' },
    },
  },
  'cx-80': {
    basePrice: '62.404 €',
    note: `${checked} La tarjeta de la gama oficial anuncia el CX-80 desde 62.404 €, pero el configurador consultado muestra 62.571 € para el PHEV de acceso y 62.775 € para el diésel de acceso. Se conserva el precio anunciado en la gama para el encabezado y se muestran aparte los dos importes del configurador; Mazda no explica la diferencia entre ambas páginas.`,
    sourceUrls: [
      { label: 'Gama oficial Mazda CX-80 (precio «desde»)', url: 'https://www.mazda.es/gama/mazda-cx-80/' },
      configurator('https://www.mazda.es/configurador/MAZDA_CX-80/5WGN/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv PHEV AWD': { price: '62.571 €', priceType: 'Configurador Mazda, acabado Exclusive-Line; PVP recomendado de acceso del PHEV.' },
      '3.3 e-Skyactiv D MHEV AWD': { price: '62.775 €', priceType: 'Configurador Mazda, acabado Exclusive-Line; PVP recomendado de acceso del diésel.' },
    },
  },
  'mazda2-hybrid': {
    basePrice: '26.850 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda2 Hybrid', url: 'https://www.mazda.es/gama/mazda2-hybrid/' },
      configurator('https://www.mazda.es/configurador/MAZDA2_Hybrid/5HB/start/'),
    ],
    versionPrices: {
      '1.5 Full Hybrid e-CVT': { price: '26.850 €', priceType: 'Acabado Prime-Line; precio de acceso publicado por Mazda.' },
    },
  },
  'mazda3-5-puertas': {
    basePrice: '28.265 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda3 5 puertas', url: 'https://www.mazda.es/gama/mazda3-hatchback/' },
      configurator('https://www.mazda.es/configurador/MAZDA3/5HB/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv G 140 M Hybrid': { price: '28.265 €', priceType: 'Acabado Prime-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
      '2.0 e-Skyactiv X 186 M Hybrid': { price: '32.615 €', priceType: 'Acabado Centre-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
    },
  },
  'mazda3-sedan': {
    basePrice: '28.765 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda3 Sedán', url: 'https://www.mazda.es/gama/mazda3-sedan/' },
      configurator('https://www.mazda.es/configurador/MAZDA3/4SD/'),
    ],
    versionPrices: {
      '2.5 e-Skyactiv G 140 M Hybrid': { price: '28.765 €', priceType: 'Acabado Prime-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
      '2.0 e-Skyactiv X 186 M Hybrid': { price: '33.115 €', priceType: 'Acabado Centre-Line, tracción delantera y cambio manual; precio de acceso del motor.' },
    },
  },
  'mx-5-st': {
    basePrice: '33.500 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda MX-5', url: 'https://www.mazda.es/gama/mazda-mx-5/' },
      configurator('https://www.mazda.es/configurador/MAZDA%20MX-5/2DR.OPEN/'),
    ],
    versionPrices: {
      '1.5 Skyactiv-G 136': { price: '33.500 €', priceType: 'MX-5 ST, acabado Prime-Line; precio de acceso publicado por Mazda.' },
    },
  },
  'mx-5-rf': {
    basePrice: '36.000 €',
    note: checked,
    sourceUrls: [
      { label: 'Gama oficial Mazda MX-5 RF', url: 'https://www.mazda.es/gama/mazda-mx-5-rf/' },
      configurator('https://www.mazda.es/configurador/MAZDA_MX-5/2DR.OPEN.RHT/'),
    ],
    versionPrices: {
      '1.5 Skyactiv-G 136': { price: '36.000 €', priceType: 'MX-5 RF, acabado Prime-Line; precio de acceso publicado por Mazda.' },
    },
  },
};
