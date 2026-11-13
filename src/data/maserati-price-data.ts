export type MaseratiVersionPrice = {
  price: string;
  priceType: string;
};

export type MaseratiModelPricing = {
  basePrice?: string;
  note: string;
  sourceUrl: string;
  versionPrices: Record<string, MaseratiVersionPrice>;
};

const configurator = 'https://www.maserati.com/es/es/shopping-tools/configurator';
const checked = 'Precios «desde» de la gama 2027 publicados en el configurador de Maserati España; consulta: 10/11/2026. Son importes de acceso por versión y pueden cambiar con la configuración. Maserati no aclara en esta página si el importe incluye transporte y matriculación, por lo que no se da por supuesto.';
const listedFrom = 'Precio «desde» publicado por Maserati España para la gama 2027; consulta 10/11/2026.';

const price = (amount: string): MaseratiVersionPrice => ({ price: amount, priceType: listedFrom });
const unpricedNote = 'El configurador español consultado el 10/11/2026 incluye esta versión y sus datos técnicos, pero no muestra un precio «desde». Tampoco se ha localizado un precio base inequívoco en la ficha española. Los importes de unidades de stock no se trasladan como tarifa base porque pueden corresponder a configuraciones concretas.';

export const maseratiPriceData: Record<string, MaseratiModelPricing> = {
  grecale: {
    basePrice: '89.500 €',
    note: `${checked} El precio base del modelo corresponde al Grecale 250, la versión de menor precio publicada.`,
    sourceUrl: configurator,
    versionPrices: {
      'Grecale 250': price('89.500 €'),
      'Grecale 300': price('94.100 €'),
      'Grecale Modena 330': price('105.500 €'),
      'Grecale Modena V6 390': price('115.600 €'),
      'Grecale Trofeo V6 530': price('143.200 €'),
      'Grecale Folgore': price('99.100 €'),
    },
  },
  granturismo: {
    basePrice: '159.500 €',
    note: `${checked} El precio base del modelo corresponde al GranTurismo Folgore, el menor importe «desde» de la gama. Las versiones V6 tienen precios propios.`,
    sourceUrl: configurator,
    versionPrices: {
      GranTurismo: price('182.800 €'),
      'GranTurismo Trofeo': price('226.900 €'),
      'GranTurismo Folgore': price('159.500 €'),
    },
  },
  grancabrio: {
    basePrice: '169.800 €',
    note: `${checked} El precio base del modelo corresponde al GranCabrio Folgore, el menor importe «desde» de la gama. Las versiones V6 tienen precios propios.`,
    sourceUrl: configurator,
    versionPrices: {
      GranCabrio: price('194.300 €'),
      'GranCabrio Trofeo': price('238.500 €'),
      'GranCabrio Folgore': price('169.800 €'),
    },
  },
  mcpura: {
    note: unpricedNote,
    sourceUrl: configurator,
    versionPrices: {},
  },
  'mcpura-cielo': {
    note: unpricedNote,
    sourceUrl: configurator,
    versionPrices: {},
  },
  'gt2-stradale': {
    note: unpricedNote,
    sourceUrl: configurator,
    versionPrices: {},
  },
};
