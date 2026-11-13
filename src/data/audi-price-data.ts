/**
 * Precios oficiales publicados por Audi España, revisados el 6/11/2026.
 * Se separa el precio de acceso de la familia del precio de una motorización.
 * Si la fuente solo muestra un "desde" general, no se asigna a motores distintos
 * por deducción: esos importes quedan anotados en precios-pendientes.txt.
 */
export type AudiVersionPrice = {
  price: string;
  priceType: string;
};

export type AudiModelPricing = {
  basePrice?: string;
  versionPrices: Record<string, AudiVersionPrice>;
  note: string;
  sourceUrl: string;
};

const dateNote = 'Consulta: 6 de noviembre de 2026. Se muestran precios «desde» publicados por Audi España; se excluyen ofertas temporales, cuotas de financiación y descuentos condicionados. El precio final depende del acabado, equipamiento, carrocería y disponibilidad. Los importes sin asociación inequívoca con una motorización permanecen en precios-pendientes.txt.';
const officialPrice = 'Precio «desde» de Audi España para la versión indicada; IVA incluido cuando así lo especifica la ficha.';

export const audiPriceData: Record<string, AudiModelPricing> = {
  a1: {
    versionPrices: {},
    note: dateNote + ' La página de gama del A1 muestra carrocerías y stock, pero no publica un precio base actual; las páginas promocionales encontradas no permiten verificar una tarifa vigente sin condiciones.',
    sourceUrl: 'https://www.audi.es/es/modelos/a1/',
  },
  'a2-e-tron': {
    basePrice: '37.760 €',
    versionPrices: { 'A2 e-tron': { price: '37.760 €', priceType: officialPrice } },
    note: dateNote,
    sourceUrl: 'https://www.audi.es/es/modelos/a2-e-tron/a2-e-tron/',
  },
  a3: {
    basePrice: '33.770 €',
    versionPrices: {
      'S3 Sportback / Sedan': { price: '69.390 € (Sportback) / 70.320 € (Sedan)', priceType: officialPrice },
      'RS 3 Sportback / Sedan': { price: '89.750 € (Sportback) / 90.680 € (Sedan)', priceType: officialPrice },
    },
    note: dateNote + ' El precio base vigente publicado corresponde al A3 Sportback. Los importes de Sedan y allstreet distinguen carrocerías, pero no se extienden a un motor concreto cuando la gama no lo identifica inequívocamente.',
    sourceUrl: 'https://www.audi.es/es/modelos/a3/',
  },
  a5: {
    basePrice: '48.900 €',
    versionPrices: {
      'S5 / S5 Avant': { price: '93.160 € (S5) / 95.510 € (S5 Avant)', priceType: officialPrice },
      'RS 5 e-hybrid / RS 5 Avant e-hybrid': { price: '127.520 € (RS 5) / 129.690 € (RS 5 Avant)', priceType: officialPrice },
    },
    note: dateNote,
    sourceUrl: 'https://www.audi.es/es/modelos/a5/',
  },
  a6: {
    basePrice: '62.920 €',
    versionPrices: {
      'A6 TDI 150 kW': { price: '62.920 € (A6) / 65.570 € (Avant)', priceType: officialPrice + ' Precios de acceso de las carrocerías diésel.' },
      'A6 e-hybrid 220 kW': { price: '71.820 € (A6) / 74.470 € (Avant)', priceType: officialPrice + ' Precios de acceso e-hybrid publicados por carrocería.' },
    },
    note: dateNote + ' Audi lista A6 allroad y A6 allroad e-hybrid, pero no muestra PVP en sus fichas consultadas; tampoco se publica precio para RS 6.',
    sourceUrl: 'https://www.audi.es/es/modelos/a6/',
  },
  'a6-e-tron': {
    basePrice: '68.290 €',
    versionPrices: {
      'A6 e-tron': { price: '68.290 € (Sportback) / 70.790 € (Avant)', priceType: officialPrice + ' Precios de acceso publicados por carrocería.' },
      'S6 e-tron': { price: '104.380 € (Sportback) / 106.880 € (Avant)', priceType: officialPrice },
    },
    note: dateNote,
    sourceUrl: 'https://www.audi.es/es/modelos/a6-e-tron/',
  },
  'e-tron-gt': {
    basePrice: '111.700 €',
    versionPrices: {
      'e-tron GT quattro': { price: '111.700 €', priceType: officialPrice },
      'S e-tron GT': { price: '130.280 €', priceType: officialPrice },
      'RS e-tron GT': { price: '153.830 €', priceType: officialPrice },
      'RS e-tron GT performance': { price: '166.900 €', priceType: officialPrice },
    },
    note: dateNote,
    sourceUrl: 'https://www.audi.es/es/modelos/e-tron-gt/',
  },
  q2: {
    versionPrices: {},
    note: dateNote + ' Audi mantiene Q2 y SQ2 en el catálogo y muestra stock nuevo, pero la ficha de gama no publica precios vigentes. Las páginas de financiación y promoción localizadas mezclan PVP recomendado, campañas o descuentos de concesionario; no se consideran una tarifa base verificable.',
    sourceUrl: 'https://www.audi.es/es/modelos/q2/',
  },
  q3: {
    basePrice: '48.530 €',
    versionPrices: {
      'Q3 e-hybrid': { price: '58.270 € (SUV) / 60.170 € (Sportback)', priceType: officialPrice + ' Precios vigentes consultados en las fichas oficiales de ambas carrocerías.' },
    },
    note: dateNote + ' Audi publica el precio de acceso general del Q3 y un precio por carrocería para e-hybrid, pero no separa de forma inequívoca el PVP de cada motor TFSI/TDI.',
    sourceUrl: 'https://www.audi.es/es/modelos/q3/',
  },
  'q4-e-tron': {
    basePrice: '49.970 €',
    versionPrices: {},
    note: dateNote + ' La gama publica precio desde para Q4 SUV y Sportback; la ficha consultada no permite asociar cada importe a una motorización concreta.',
    sourceUrl: 'https://www.audi.es/es/modelos/q4-e-tron/',
  },
  q5: {
    basePrice: '63.050 €',
    versionPrices: {
      'Q5 e-hybrid quattro 220 kW': { price: '69.060 € (SUV) / 71.370 € (Sportback)', priceType: officialPrice + ' Precios de acceso publicados para las carrocerías e-hybrid.' },
      'SQ5 SUV / Sportback': { price: '98.270 € (SUV) / 100.580 € (Sportback)', priceType: officialPrice },
    },
    note: dateNote + ' El precio base del Q5 es general para la gama gasolina/diésel; Audi no lo asocia en el resumen consultado a un motor concreto. El precio PHEV publicado es de acceso y no se extrapola a la versión de 270 kW.',
    sourceUrl: 'https://www.audi.es/es/articulos/gama-suv/',
  },
  'q6-e-tron': {
    basePrice: '66.370 €',
    versionPrices: { 'SQ6 e-tron': { price: '94.520 € (SUV) / 96.960 € (Sportback)', priceType: officialPrice } },
    note: dateNote + ' Audi publica precios por carrocería; no se asigna el precio del Q6 Sportback a una potencia concreta sin identificación expresa en el resumen oficial.',
    sourceUrl: 'https://www.audi.es/es/articulos/gama-suv/',
  },
  q7: {
    basePrice: '95.630 €',
    versionPrices: { 'Q7 TDI quattro': { price: '95.630 €', priceType: officialPrice } },
    note: dateNote + ' Audi no muestra un PVP para el Q7 TFSI e en la ficha de gama consultada ni stock nuevo en la consulta.',
    sourceUrl: 'https://www.audi.es/es/articulos/gama-suv/',
  },
  q8: {
    basePrice: '101.930 €',
    versionPrices: {
      'SQ8 SUV': { price: '139.170 €', priceType: officialPrice },
      'RS Q8 SUV': { price: '174.230 €', priceType: officialPrice },
      'RS Q8 SUV performance': { price: '194.020 €', priceType: officialPrice },
    },
    note: dateNote + ' Los precios «desde» de Q8 convencional y Q8 e-hybrid identifican la familia, pero no vinculan el importe a cada motor TFSI/TDI o potencia PHEV. Se dejan sin importe individual hasta poder verificarlo.',
    sourceUrl: 'https://www.audi.es/es/articulos/gama-suv/',
  },
  q9: {
    basePrice: '126.090 €',
    versionPrices: { 'Q9 TDI quattro MHEV plus': { price: '126.090 €', priceType: officialPrice + ' Precio base del único motor anunciado para el mercado español.' } },
    note: dateNote + ' Se toma el precio desde de la gama oficial; no se usa el importe menor de la promoción financiera, que incorpora descuentos y condiciones.',
    sourceUrl: 'https://www.audi.es/es/modelos/superpremium/',
  },
};
