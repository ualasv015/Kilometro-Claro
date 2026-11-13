/**
 * Precios y ofertas públicas de Škoda España consultados el 11/11/2026.
 * Los importes marcados como ofertas pueden exigir financiación, Plan Auto+,
 * CAE, descuento de marca/concesionario o una unidad en stock. No se usan como
 * PVP base. Solo se rellena el precio base cuando una tarifa sin condiciones
 * lo acredita; en los casos consultados ese dato queda pendiente.
 */
export type SkodaVersionPrice = { price?: string; priceType: string };
export type SkodaModelPricing = {
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  versionPrices: Record<string, SkodaVersionPrice>;
  note: string;
  sourceUrls: string[];
};

const offerLabel = 'Oferta anunciada desde; puede exigir financiación, ayudas, CAE o disponibilidad de stock. No es PVP base.';
const priceListLabel = 'Importe mostrado en la lista de precios oficial para el acabado indicado. La página no permite certificarlo como PVP sin campañas ni condiciones; consultar a Škoda.';
const cashOfferLabel = 'Precio al contado dentro de una oferta comercial publicada por Škoda, con descuentos y vigencia limitados; no equivale a una tarifa base sin condiciones.';
const offerPage = 'https://www.skoda.es/quiero-un-skoda/ofertas-home-cpc';
const rangePage = 'https://www.skoda.es/modelos/gama';
const sharedNote = 'Consulta realizada el 11 de noviembre de 2026. Škoda publica importes «desde» sujetos a financiación y, en algunos eléctricos, a Plan Auto+ y/o CAE. No se extrapola la oferta de una versión a las demás. No se localizó una tarifa actual, completa y sin condiciones que confirme el PVP base individual de todas las motorizaciones; por eso el precio base permanece pendiente y los importes promocionales se identifican por separado. Las campañas pueden cambiar o caducar; confirma precio, acabado, ayudas y disponibilidad con la marca.';

export const skodaPriceData: Record<string, SkodaModelPricing> = {
  epiq: {
    currentOfferPrice: '18.500 €', currentOfferLabel: 'Oferta condicionada desde · Epiq 40',
    versionPrices: {
      'Epiq 40 · 38,5 kWh': { price: '18.500 €', priceType: `${offerLabel} Epiq Urban 38,5 kWh; incluye Plan Auto+ y CAE según elegibilidad, financiación y términos de campaña.` },
      'Epiq 55 · 55 kWh': { price: '27.600 €', priceType: `${offerLabel} Importe de entrada anunciado para Epiq 55 First Edition; no se extiende a otros acabados.` },
    },
    note: `${sharedNote} La oferta del Epiq 40 incluye 4.500 € previstos del Plan Auto+ y 1.000 € de CAE si se sustituye un vehículo de combustión; la propia marca advierte que la ayuda depende de aprobación y fondos.`,
    sourceUrls: [offerPage, `${rangePage.replace('/modelos/gama', '/modelos/epiq/epiq')}`],
  },
  kamiq: {
    currentOfferPrice: '19.500 €', currentOfferLabel: 'Oferta condicionada desde · Kamiq GO 1.0 TSI 95',
    versionPrices: {
      '1.0 TSI 95': { price: '19.500 €', priceType: `${offerLabel} Kamiq GO 1.0 TSI 70 kW (95 CV), cambio manual.` },
      '1.0 TSI 115': { priceType: 'PVP base y oferta específica para esta potencia pendientes de verificación.' },
    },
    note: `${sharedNote} La cifra desde 19.500 € se vincula al Kamiq GO 1.0 TSI de 95 CV; no se atribuye al 1.0 TSI de 115 CV.`,
    sourceUrls: [offerPage, `${rootModel('kamiq')}`],
  },
  elroq: {
    currentOfferPrice: '26.550 €', currentOfferLabel: 'Oferta condicionada desde · Elroq 61 kWh',
    versionPrices: {
      '61 kWh · 190 CV': { price: '26.550 €', priceType: `${offerLabel} Elroq Urban, 61 kWh y 190 CV; el anuncio es compatible con Plan Auto+ y la campaña contempla financiación y CAE.` },
      '82 kWh · 286 CV': { price: '32.100 €', priceType: `${priceListLabel} Precio publicado para Selection; no se ha confirmado aquí un PVP base sin campañas.` },
      '82 kWh · 299 CV': { price: '32.100 €', priceType: `${priceListLabel} Precio publicado para Selection; no se ha confirmado aquí un PVP base sin campañas.` },
      'RS · 82 kWh · 340 CV': { price: '40.600 €', priceType: `${priceListLabel} Precio publicado para RS; no se ha confirmado aquí un PVP base sin campañas.` },
    },
    note: `${sharedNote} La lista oficial de Elroq muestra precios distintos por acabado: 26.550 € para Urban 61 kWh; 32.100 € para Selection 82 kWh de 286 o 299 CV; y 40.600 € para RS. El importe desde de campaña no debe confundirse con tarifa sin descuentos.`,
    sourceUrls: [offerPage, 'https://www.skoda.es/modelos/elroq/elroq/skoda-elroq-price-list', rootModel('elroq')],
  },
  karoq: {
    currentOfferPrice: '25.800 €', currentOfferLabel: 'Oferta condicionada desde · Karoq',
    versionPrices: {
      '1.0 TSI 115': { price: '27.811,46 € al contado', priceType: `${cashOfferLabel} Oferta para Karoq Selection 1.0 TSI 115; la alternativa financiada publicada asciende a 25.988,08 €.` },
      '1.5 TSI 150': { priceType: 'PVP base y oferta específica para esta potencia pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta oficial detallada de Karoq se refiere al Selection 1.0 TSI 115 CV. El precio al contado citado procede de esa operación concreta; no se extrapola al 1.5 TSI.`,
    sourceUrls: [offerPage, rootModel('karoq')],
  },
  enyaq: {
    currentOfferPrice: '31.400 €', currentOfferLabel: 'Oferta condicionada desde · Enyaq 61 kWh',
    versionPrices: {
      '60 · 61 kWh': { price: '38.883,20 € al contado', priceType: `${cashOfferLabel} Oferta para Enyaq Selection 140 kW (190 CV), batería de 61 kWh; incluye CAE y se vincula a una operación de financiación.` },
      '85 · 82 kWh': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '85x · 82 kWh · tracción total': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      'RS · 84 kWh · tracción total': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta detallada de 38.883,20 € al contado corresponde a Enyaq Selection 61 kWh e incluye CAE; no es el precio base sin ayudas.`,
    sourceUrls: [offerPage, rootModel('enyaq')],
  },
  'enyaq-coupe': {
    currentOfferPrice: '33.700 €', currentOfferLabel: 'Oferta condicionada desde · Enyaq Coupé 61 kWh',
    versionPrices: {
      '60 · 61 kWh': { price: '41.163,20 € al contado', priceType: `${cashOfferLabel} Oferta para Enyaq Coupé Selection 140 kW (190 CV), batería de 61 kWh; incluye CAE y se vincula a financiación.` },
      '85 · 82 kWh': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '85x · 82 kWh · tracción total': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      'RS · 84 kWh · tracción total': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta detallada de 41.163,20 € al contado corresponde a Enyaq Coupé Selection 61 kWh e incluye CAE; no es el precio base sin ayudas.`,
    sourceUrls: [offerPage, rootModel('enyaq-coupe-iv', 'enyaq-coupe')],
  },
  kodiaq: {
    currentOfferPrice: '38.925 €', currentOfferLabel: 'Oferta condicionada desde · Kodiaq iV 204 CV',
    versionPrices: {
      '1.5 TSI mHEV 160': { price: '44.256,55 € al contado', priceType: `${cashOfferLabel} Oferta Kodiaq Selection 1.5 TSI mHEV 160 CV; importe de la oferta sujeta a condiciones vigentes hasta el 30/11/2026.` },
      '2.0 TSI 204 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.5 TSI iV PHEV 204': { price: '38.925 €', priceType: `${offerLabel} Škoda anuncia esta cifra para el Kodiaq iV de 204 CV; la página la presenta con Plan Auto+ y no es PVP base sin ayudas.` },
      '2.0 TDI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 193 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI RS 265 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} Škoda muestra 38.925 € para el PHEV de 204 CV con Plan Auto+ y un precio al contado de 44.256,55 € para el 1.5 TSI mHEV de 160 CV en una oferta financiada. Son versiones distintas; no se intercambian ni se presentan como PVP base.`,
    sourceUrls: [offerPage, rootModel('kodiaq')],
  },
  peaq: {
    currentOfferPrice: '41.900 €', currentOfferLabel: 'Precio publicado desde · Peaq Selection 91 kWh',
    versionPrices: {
      '91 kWh · tracción trasera · 286': { price: '46.050 €', priceType: `${priceListLabel} Sportline con tracción trasera.` },
      '91 kWh · motor dual · 286': { price: '41.900 €', priceType: `${priceListLabel} Selection de doble motor; la oferta detallada también incluye condiciones de financiación y CAE.` },
      '91 kWh · motor dual · 299': { price: '45.200 € (Selection) / 53.450 € (Sportline)', priceType: `${priceListLabel} Importes publicados para los acabados indicados.` },
    },
    note: `${sharedNote} La lista oficial del Peaq desglosa tres combinaciones y acabados, incluida la versión trasera de 286 CV. En la oferta de 41.900 € la documentación comercial contempla financiación y CAE; no se interpreta automáticamente como PVP sin condiciones.`,
    sourceUrls: [offerPage, 'https://www.skoda.es/modelos/peaq/peaq/peaq-pricelist', rootModel('peaq')],
  },
  fabia: {
    currentOfferPrice: '15.400 €', currentOfferLabel: 'Oferta condicionada desde · Fabia GO 1.0 MPI 80',
    versionPrices: {
      '1.0 MPI 80': { price: '17.471,13 € al contado', priceType: `${cashOfferLabel} Oferta para Fabia GO 1.0 MPI 80; el precio de financiación promocionado desde 15.400 € está sujeto a condiciones.` },
      '1.0 TSI 95': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.0 TSI 115': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.5 TSI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      'Fabia 130 · 1.5 TSI 177': { priceType: 'La página oficial mostraba 31.950 € sujeto a financiación, con vigencia hasta 31/10/2026. Oferta caducada; no se muestra como precio actual y el PVP base queda pendiente.' },
    },
    note: `${sharedNote} La oferta detallada del Fabia GO 1.0 MPI 80 tiene vigencia publicada hasta el 30/11/2026; el precio al contado citado se identifica como oferta y no como tarifa base. El precio desde del Fabia 130 llevaba vigencia hasta 31/10/2026 y no se trata como oferta actual.`,
    sourceUrls: [offerPage, rootModel('fabia'), 'https://www.skoda.es/modelos/fabia/fabia-130'],
  },
  scala: {
    currentOfferPrice: '18.500 €', currentOfferLabel: 'Oferta condicionada desde · Scala GO 1.0 TSI 95',
    versionPrices: {
      '1.0 TSI 95': { price: '20.543,73 € al contado', priceType: `${cashOfferLabel} Oferta para Scala GO 1.0 TSI 95; el importe promocionado desde 18.500 € exige financiación y unidades de stock.` },
      '1.0 TSI 115': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.5 TSI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} El precio al contado publicado para la oferta del Scala GO 1.0 TSI 95 es 20.543,73 € y se refiere a unidades de stock hasta el 30/11/2026; no se extrapola a las otras potencias.`,
    sourceUrls: [offerPage, rootModel('scala')],
  },
  octavia: {
    currentOfferPrice: '30.650 €', currentOfferLabel: 'Oferta condicionada desde · Octavia',
    versionPrices: {
      '1.5 TSI mHEV 115': { price: '32.591,42 € al contado', priceType: `${cashOfferLabel} Oferta para Octavia Selection 1.5 TSI mHEV 115 DSG; vigencia publicada hasta 30/11/2026.` },
      '1.5 TSI mHEV 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.5 Full Hybrid 136': { priceType: 'PVP base y oferta específica pendientes de verificación; entregas en España previstas para 2027.' },
      '1.5 Full Hybrid 170': { priceType: 'PVP base y oferta específica pendientes de verificación; entregas en España previstas para 2027.' },
      '2.0 TDI 115': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI 204 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI RS 265': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta detallada del Octavia corresponde a Selection 1.5 TSI mHEV de 115 CV, caja DSG; no se asigna a motores distintos. Las dos versiones full hybrid están anunciadas para pedidos, con primeras entregas españolas previstas para 2027.`,
    sourceUrls: [offerPage, rootModel('octavia')],
  },
  'octavia-combi': {
    currentOfferPrice: '31.250 €', currentOfferLabel: 'Oferta condicionada desde · Octavia Combi',
    versionPrices: {
      '1.5 TSI mHEV 115': { price: '33.238,93 € al contado', priceType: `${cashOfferLabel} Oferta para Octavia Combi Selection 1.5 TSI mHEV 115 DSG; vigencia publicada hasta 30/11/2026.` },
      '1.5 TSI mHEV 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '1.5 Full Hybrid 136': { priceType: 'PVP base y oferta específica pendientes de verificación; entregas en España previstas para 2027.' },
      '1.5 Full Hybrid 170': { priceType: 'PVP base y oferta específica pendientes de verificación; entregas en España previstas para 2027.' },
      '2.0 TDI 115': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI 204 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI RS 265': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta detallada corresponde a Octavia Combi Selection 1.5 TSI mHEV 115 DSG; no se extrapola a las demás motorizaciones.`,
    sourceUrls: [offerPage, rootModel('octavia-combi')],
  },
  superb: {
    currentOfferPrice: '41.350 €', currentOfferLabel: 'Oferta condicionada desde · Superb Limo 1.5 TSI mHEV 150',
    versionPrices: {
      '1.5 TSI mHEV 150': { price: '43.365,60 € al contado', priceType: `${cashOfferLabel} Oferta para Superb Limo Selection 1.5 TSI mHEV 150 DSG; vigencia publicada hasta 30/11/2026.` },
      '1.5 TSI iV PHEV 204': { price: '42.675 €', priceType: `${offerLabel} Importe desde mostrado por Škoda para la variante iV de 204 CV; no se interpreta como precio base sin ayudas o financiación.` },
      '1.5 TSI iV PHEV 272 · Hatch': { priceType: 'Precio base de esta versión pendiente de verificación en una tarifa comercial vigente.' },
      '2.0 TSI 204': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI 266 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 194 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta de acceso se vincula a Superb Limo Selection 1.5 TSI mHEV 150 y la de 42.675 € al iV PHEV de 204 CV; no se extrapolan a otras versiones.`,
    sourceUrls: [offerPage, rootModel('superb')],
  },
  'superb-combi': {
    currentOfferPrice: '40.300 €', currentOfferLabel: 'Oferta condicionada desde · Superb Combi 1.5 TSI mHEV 150',
    versionPrices: {
      '1.5 TSI mHEV 150': { price: '42.353,60 € al contado', priceType: `${cashOfferLabel} Oferta para Superb Combi Selection 1.5 TSI mHEV 150 DSG; vigencia publicada hasta 30/11/2026.` },
      '1.5 TSI iV PHEV 204': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI 204': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TSI 266 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 150': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
      '2.0 TDI 194 4x4': { priceType: 'PVP base y oferta específica pendientes de verificación.' },
    },
    note: `${sharedNote} La oferta detallada se refiere al Superb Combi Selection 1.5 TSI mHEV 150 DSG; no se extrapola a otros motores.`,
    sourceUrls: [offerPage, rootModel('superb-combi')],
  },
};

function rootModel(model: string, route = model) {
  return `https://www.skoda.es/modelos/${model}/${route}`;
}
