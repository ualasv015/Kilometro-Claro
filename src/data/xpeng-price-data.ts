type XpengVersionPrice = { price?: string; priceType: string };

type XpengModelPricing = {
  currentOfferPrice: string;
  currentOfferLabel: string;
  note: string;
  versionPrices: Record<string, XpengVersionPrice>;
  sources: { label: string; url: string }[];
};

const spain = 'https://www.xpeng-auto.es';
const configuratorConditions = 'Precio desde mostrado por el configurador español el 11/11/2026; vigente hasta final de noviembre para particulares en Península y Baleares. Incluye impuestos, promociones de marca y transporte; excluye adelanto de Auto+, descuento CAE, matriculación y entrega. No es un PVP base sin promociones.';
const source = (label: string, url: string) => ({ label, url });

/** XPENG muestra importes de partida promocionales, no una tarifa base vigente sin condiciones. */
export const xpengPriceData: Record<string, XpengModelPricing> = {
  g6: {
    currentOfferPrice: '45.193 €',
    currentOfferLabel: 'Precio desde en configurador · con promociones de marca',
    note: `Consulta: 11 de noviembre de 2026. ${configuratorConditions} El configurador diferencia la batería de 68,5 kWh y la de 80,8 kWh; el segundo precio es de partida para esa batería y no identifica un importe individual de la AWD Performance. XPENG no publica en las páginas consultadas un PVP base actual sin promociones para cada versión.`,
    versionPrices: {
      'RWD Standard Range · batería 68,5 kWh': {
        price: '45.193 €',
        priceType: `${configuratorConditions} Precio desde para batería de 68,5 kWh.`,
      },
      'RWD Long Range · batería 80,8 kWh': {
        price: '49.193 €',
        priceType: `${configuratorConditions} Precio desde para la batería de 80,8 kWh en la configuración de autonomía RWD; no se extrapola a AWD Performance.`,
      },
      'AWD Performance · doble motor · batería 80,8 kWh': {
        priceType: 'El configurador no muestra un precio individual verificable para esta versión; el importe de la batería de 80,8 kWh se publica como precio desde y no permite confirmar el precio de la AWD Performance.',
      },
    },
    sources: [
      source('XPENG España: configurador del G6 y condiciones de precio', `${spain}/configurador/xpeng-g6`),
      source('XPENG España: versiones y ficha técnica del G6', `${spain}/g6`),
    ],
  },
  g9: {
    currentOfferPrice: '61.193 €',
    currentOfferLabel: 'Precio desde en configurador · con promociones de marca',
    note: `Consulta: 11 de noviembre de 2026. ${configuratorConditions} El configurador muestra una batería de 79 kWh y otra de 93,1 kWh. El precio de partida para 93,1 kWh no identifica el precio de la AWD Performance; no se extrapola. XPENG no publica en las páginas consultadas un PVP base actual sin promociones para cada versión.`,
    versionPrices: {
      'RWD Standard Range · batería 79 kWh': {
        price: '61.193 €',
        priceType: `${configuratorConditions} Precio desde para batería de 79 kWh.`,
      },
      'RWD Long Range · batería 93,1 kWh': {
        price: '65.193 €',
        priceType: `${configuratorConditions} Precio desde para la batería de 93,1 kWh en la configuración RWD Long Range; no se extrapola a AWD Performance.`,
      },
      'AWD Performance · doble motor · batería 93,1 kWh': {
        priceType: 'El configurador no muestra un precio individual verificable para esta versión; el importe de la batería de 93,1 kWh se publica como precio desde y no permite confirmar el precio de la AWD Performance.',
      },
    },
    sources: [
      source('XPENG España: configurador del G9 y condiciones de precio', `${spain}/configurador/xpeng-g9`),
      source('XPENG España: versiones y ficha técnica del G9', `${spain}/g9`),
    ],
  },
  'p7-plus': {
    currentOfferPrice: '46.583 €',
    currentOfferLabel: 'Precio desde en configurador · con promociones de marca',
    note: `Consulta: 11 de noviembre de 2026. ${configuratorConditions} El configurador diferencia baterías de 61,7 y 74,9 kWh; el segundo precio es de partida para la configuración RWD Long Range. No se confirma un precio individual para la AWD Performance, que comparte capacidad de batería. XPENG no publica en las páginas consultadas un PVP base actual sin promociones para cada versión.`,
    versionPrices: {
      'RWD Standard Range · batería 61,7 kWh': {
        price: '46.583 €',
        priceType: `${configuratorConditions} Precio desde para batería de 61,7 kWh.`,
      },
      'RWD Long Range · batería 74,9 kWh': {
        price: '50.583 €',
        priceType: `${configuratorConditions} Precio desde para la batería de 74,9 kWh en la configuración RWD Long Range; no se extrapola a AWD Performance.`,
      },
      'AWD Performance · doble motor · batería 74,9 kWh': {
        priceType: 'El configurador no muestra un precio individual verificable para esta versión; el importe de la batería de 74,9 kWh se publica como precio desde y no permite confirmar el precio de la AWD Performance.',
      },
    },
    sources: [
      source('XPENG España: configurador del P7+ y condiciones de precio', `${spain}/configurador/xpeng-p7mas`),
      source('XPENG España: versiones y ficha técnica del P7+', `${spain}/p7`),
    ],
  },
  l03: {
    currentOfferPrice: '37.500 €',
    currentOfferLabel: 'Precio financiado anunciado · incluye adelanto condicionado de Auto+',
    note: 'Consulta: 11 de noviembre de 2026. La web oficial anuncia el L03 PowerX Long Range desde 37.500 € mediante una oferta financiada válida hasta el 30/11/2026. El importe incluye un adelanto de 1.800 € del Plan Auto+, sujeto a aprobación y disponibilidad; no equivale al precio al contado ni a un PVP base sin condiciones. El modelo no aparece en el configurador y XPENG remite al concesionario para confirmar disponibilidad y precio de compra al contado.',
    versionPrices: {
      'PowerX Long Range · batería LFP 37,25 kWh': {
        price: '37.500 €',
        priceType: 'Oferta financiada anunciada por XPENG España hasta el 30/11/2026; incluye adelanto condicionado de 1.800 € del Plan Auto+. No es precio al contado ni PVP base.',
      },
    },
    sources: [
      source('XPENG España: ficha del L03 y condiciones de la oferta', `${spain}/nuevol03`),
      source('XPENG España: página principal y precio financiado anunciado', `${spain}/`),
    ],
  },
};
