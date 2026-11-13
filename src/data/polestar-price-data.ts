/** Precios de motorizaciones y ofertas de Polestar España, revisados el 11/11/2026. */
type PolestarPricing = {
  basePrice: string;
  note: string;
  versionPrices: Record<string, string>;
  offers?: { name: string; price: string; priceType: string }[];
  sources: { label: string; url: string }[];
};

const spain = 'https://www.polestar.com/es';
const source = (label: string, url: string) => ({ label, url });

export const polestarBasePriceType = 'Precio base anunciado por Polestar España para esta motorización; importe mostrado en su ficha técnica.';
const offerConditions = 'Oferta oficial para particulares, autónomos o empresas en Península y Baleares; incluye IVA, descuento exclusivo de marca, transporte al punto de entrega, matriculación y legalización. Vigente hasta el 31/12/2026 o fin de existencias; sujeta a condiciones y disponibilidad.';

export const polestarPriceData: Record<string, PolestarPricing> = {
  '2': {
    basePrice: '48.200 €',
    note: 'Polestar España publica el precio base de cada una de las cuatro motorizaciones en la ficha técnica. La oferta de 41.900 € se muestra aparte: corresponde al Standard range Single motor con Climate pack e incluye descuento de marca, transporte, matriculación y legalización; no sustituye al precio base de 48.200 €. La oferta está vigente hasta el 31/12/2026 o fin de existencias. Precios consultados el 11/11/2026.',
    versionPrices: {
      'Standard range Single motor': '48.200 €',
      'Long range Single motor': '51.350 €',
      'Long range Dual motor': '59.450 €',
      'Long range Dual motor con Performance pack': '64.450 €',
    },
    offers: [
      {
        name: 'Oferta de marca · Standard range Single motor con Climate pack',
        price: '41.900 €',
        priceType: `${offerConditions} No es una oferta financiera.`,
      },
    ],
    sources: [
      source('Polestar España: precios y especificaciones del Polestar 2', `${spain}/polestar-2/specifications/`),
      source('Polestar España: oferta para particulares del Polestar 2', `${spain}/offers/private/polestar-2/`),
    ],
  },
  '3': {
    basePrice: '81.900 €',
    note: 'La ficha técnica española publica los precios base de Rear motor, Dual motor y Performance. Polestar ofrece además el Rear motor por 69.900 € con descuento de marca hasta el 31/12/2026 o fin de existencias; se indica como oferta y no como precio base. También aparece una Signature Edition Dual motor de año modelo 2025, disponible hasta el 31/12/2026 o fin de existencias, con packs Pilot y Plus, faros HD LED y pintura seleccionada incluidos. Precios consultados el 11/11/2026.',
    versionPrices: {
      'Rear motor': '81.900 €',
      'Dual motor': '91.900 €',
      Performance: '110.300 €',
    },
    offers: [
      {
        name: 'Oferta de marca · Rear motor',
        price: '69.900 €',
        priceType: `${offerConditions} El precio anunciado incluye descuento de marca.`,
      },
      {
        name: 'Dual motor Signature Edition MY2025 · unidades de stock',
        price: '81.900 €',
        priceType: 'Precio para una unidad de stock de año modelo 2025; incluye Pilot pack, Plus pack, faros HD LED de 1,3 megapíxeles y pintura exterior (excepto Snow). Incluye IVA, descuento de marca, transporte, matriculación y legalización. Vigente hasta el 31/12/2026 o fin de existencias.',
      },
    ],
    sources: [
      source('Polestar España: precios y especificaciones del Polestar 3', `${spain}/polestar-3/specifications/`),
      source('Polestar España: ofertas para particulares y unidades de stock del Polestar 3', `${spain}/offers/private/polestar-3/`),
    ],
  },
  '4-coupe': {
    basePrice: '65.900 €',
    note: 'La ficha técnica española publica el precio base de Rear motor y Dual motor. La oferta de 49.900 € corresponde al Polestar 4 coupé Rear motor e incluye descuento de marca, transporte, matriculación y legalización; se muestra aparte del precio base y está vigente hasta el 31/12/2026 o fin de existencias. Precios consultados el 11/11/2026.',
    versionPrices: {
      'Rear motor': '65.900 €',
      'Dual motor': '72.900 €',
    },
    offers: [
      {
        name: 'Oferta de marca · Rear motor',
        price: '49.900 €',
        priceType: offerConditions,
      },
    ],
    sources: [
      source('Polestar España: precios y especificaciones del Polestar 4 coupé', `${spain}/polestar-4-models/polestar-4-coupe/specifications/`),
      source('Polestar España: ofertas para particulares del Polestar 4 coupé', `${spain}/offers/private/polestar-4-coupe/`),
    ],
  },
  '4-suv': {
    basePrice: '55.600 €',
    note: 'La ficha técnica española publica 55.600 € para Rear motor y 58.600 € para Dual motor. La Launch Edition de Rear motor se oferta por 54.390 € con Prime pack incluido; es una oferta de marca vigente hasta el 31/12/2026 o fin de existencias y aparece separada del precio base. Polestar indica que es elegible para el Programa Auto+, pero el precio aquí recogido no descuenta una ayuda pública. Precios consultados el 11/11/2026.',
    versionPrices: {
      'Rear motor': '55.600 €',
      'Dual motor': '58.600 €',
    },
    offers: [
      {
        name: 'Launch Edition · Rear motor con Prime pack',
        price: '54.390 €',
        priceType: `${offerConditions} Elegible para el Programa Auto+; no se ha descontado ninguna ayuda pública.`,
      },
    ],
    sources: [
      source('Polestar España: precios y especificaciones del Polestar 4 SUV', `${spain}/polestar-4-models/polestar-4-suv/specifications/`),
      source('Polestar España: Launch Edition del Polestar 4 SUV', `${spain}/offers/polestar-4-suv-launch-edition/`),
    ],
  },
  '5': {
    basePrice: '121.900 €',
    note: 'La ficha técnica de Polestar España publica 121.900 € para Dual motor y 145.300 € para Performance. No se ha añadido una oferta promocional: la página española de especificaciones es la referencia de precio consultada. Precios revisados el 11/11/2026.',
    versionPrices: {
      'Dual motor': '121.900 €',
      Performance: '145.300 €',
    },
    sources: [
      source('Polestar España: precios y especificaciones del Polestar 5', `${spain}/polestar-5/specifications/`),
    ],
  },
};

