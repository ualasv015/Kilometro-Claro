const priceType = 'Oferta al contado publicada por CUPRA España; vigente hasta el 30/11/2026 y sujeta a disponibilidad de stock. No equivale al PVP base sin descuentos.';

export const cupraOffersSource = 'https://www.cupra.com/es-es/ofertas';

export const cupraPriceData: Record<string, {
  currentOfferPrice: string;
  currentOfferLabel: string;
  versionPrices: Record<string, { price: string; priceType: string }>;
}> = {
  raval: {
    currentOfferPrice: '32.800,49 €',
    currentOfferLabel: 'Oferta Endurance al contado · hasta 30/11/2026',
    versionPrices: {
      'Endurance · batería 51,5 kWh': { price: '32.800,49 €', priceType },
    },
  },
  born: {
    currentOfferPrice: '37.210,54 €',
    currentOfferLabel: 'Oferta Born 190 CV al contado · hasta 30/11/2026',
    versionPrices: {
      'Born · 58 kWh netos (59 kWh brutos)': { price: '37.210,54 €', priceType },
    },
  },
  terramar: {
    currentOfferPrice: '39.530,11 €',
    currentOfferLabel: 'Oferta eTSI 150 CV al contado · hasta 30/11/2026',
    versionPrices: {
      '1.5 eTSI 150 DSG': { price: '39.530,11 €', priceType },
      '1.5 e-HYBRID 204 DSG': { price: '49.317,65 €', priceType },
    },
  },
  formentor: {
    currentOfferPrice: '35.883,37 €',
    currentOfferLabel: 'Oferta eTSI 150 CV al contado · hasta 30/11/2026',
    versionPrices: {
      '1.5 eTSI 150 DSG': { price: '35.883,37 €', priceType },
      '1.5 e-HYBRID 204 DSG': { price: '46.289,45 €', priceType },
    },
  },
  leon: {
    currentOfferPrice: '31.501,14 €',
    currentOfferLabel: 'Oferta TSI 150 CV al contado · hasta 30/11/2026',
    versionPrices: {
      '1.5 TSI 150': { price: '31.501,14 €', priceType },
      '1.5 eTSI 150 DSG': { price: '33.552,85 €', priceType },
      '1.5 e-HYBRID 204 DSG': { price: '42.898,65 €', priceType },
    },
  },
  'leon-sportstourer': {
    currentOfferPrice: '32.490,74 €',
    currentOfferLabel: 'Oferta TSI 150 CV al contado · hasta 30/11/2026',
    versionPrices: {
      '1.5 TSI 150': { price: '32.490,74 €', priceType },
      '1.5 eTSI 150 DSG': { price: '34.568,35 €', priceType },
      '1.5 e-HYBRID 204 DSG': { price: '44.505,85 €', priceType },
    },
  },
  tavascan: {
    currentOfferPrice: '37.151,49 €',
    currentOfferLabel: 'Oferta de acceso 190 CV al contado · hasta 30/11/2026',
    versionPrices: {
      '58 kWh · motor trasero': { price: '37.151,49 €', priceType },
    },
  },
};

export const cupraPriceNote = 'Importes consultados el 10 de noviembre de 2026. CUPRA España publica ofertas al contado para configuraciones concretas, sujetas a disponibilidad y con vigencia hasta el 30 de noviembre de 2026. No son tarifas permanentes ni PVP base sin descuentos. Las condiciones de CUPRA Flex —incluida la financiación mínima y su permanencia— afectan al precio financiado, que no se presenta aquí como precio al contado. No se ha podido verificar una tarifa base sin promociones para todos los modelos y versiones; los importes pendientes se detallan en precios-pendientes.txt.';
