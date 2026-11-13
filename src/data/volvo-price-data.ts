export type VolvoVersionPrice = {
  price: string;
  priceType: string;
};

export type VolvoModelPricing = {
  basePrice: string;
  sourceUrl: string;
  note: string;
  versionPrices: Record<string, VolvoVersionPrice>;
};

const checked = 'Importes «desde» por motorización publicados en las fichas de especificaciones de Volvo Cars España; consulta: 11 de noviembre de 2026. Se muestran como precios base anunciados por versión, sin incorporar campañas de financiación, descuentos o ayudas. La fuente no detalla en todos los casos los conceptos incluidos en el importe; confirma el precio final y la configuración con Volvo.';
const price = (amount: string): VolvoVersionPrice => ({
  price: amount,
  priceType: 'Precio «desde» de esta motorización publicado por Volvo España; consulta 11/11/2026.',
});

export const volvoPriceData: Record<string, VolvoModelPricing> = {
  ex30: {
    basePrice: '35.800 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex30-electric/specifications/',
    note: checked,
    versionPrices: {
      'P5 Eléctrico': price('35.800 €'),
      'P5 Long Range Eléctrico': price('41.790 €'),
      'P8 AWD Eléctrico': price('47.961 €'),
    },
  },
  'ex30-cross-country': {
    basePrice: '47.410 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex30-electric/',
    note: `${checked} Volvo publica el precio desde 47.410 € en el apartado español «EX30 Cross Country»; la documentación técnica identifica esta variante con sistema P8 AWD.`,
    versionPrices: { 'P8 AWD Eléctrico': price('47.410 €') },
  },
  ex40: {
    basePrice: '46.950 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex40-electric/specifications/',
    note: checked,
    versionPrices: {
      'P5 Eléctrico': price('46.950 €'),
      'P5 Long Range Eléctrico': price('51.000 €'),
      'P8 AWD Eléctrico': price('57.300 €'),
    },
  },
  ec40: {
    basePrice: '50.450 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ec40-electric/specifications/',
    note: checked,
    versionPrices: {
      'P5 Eléctrico': price('50.450 €'),
      'P5 Long Range Eléctrico': price('52.900 €'),
      'P8 AWD Eléctrico': price('59.200 €'),
    },
  },
  ex60: {
    basePrice: '64.900 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex60-electric/specifications/',
    note: `${checked} La ficha del EX60 advierte que algunas cifras de prestaciones pueden ser preliminares o estar pendientes de certificación.`,
    versionPrices: {
      'P6 Eléctrico': price('64.900 €'),
      'P10 AWD Eléctrico': price('69.740 €'),
      'P12 AWD Eléctrico': price('75.911 €'),
    },
  },
  'ex60-cross-country': {
    basePrice: '70.950 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex60-electric/',
    note: 'Volvo Cars España anuncia el EX60 Cross Country desde 70.950 € y permite reservarlo; las entregas están previstas a partir de mediados de 2027. Volvo identifica el P10 AWD como la primera motorización disponible y el P12 AWD como una opción posterior. Consulta: 11 de noviembre de 2026. El precio final puede depender de la configuración y la disponibilidad.',
    versionPrices: {
      'P10 AWD Eléctrico': {
        price: '70.950 €',
        priceType: 'Desde 70.950 € para el EX60 Cross Country P10 AWD; reserva abierta y entregas previstas desde mediados de 2027; consulta 11/11/2026.',
      },
    },
  },
  ex90: {
    basePrice: '83.990 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/ex90-electric/specifications/',
    note: checked,
    versionPrices: {
      'Single Motor': price('83.990 €'),
      'Twin Motor': price('89.435 €'),
      'Twin Motor Performance': price('100.204 €'),
    },
  },
  es90: {
    basePrice: '71.250 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/es90-electric/specifications/',
    note: checked,
    versionPrices: {
      'Single Motor Extended Range': price('71.250 €'),
      'Twin Motor': price('82.019 €'),
      'Twin Motor Performance': price('87.585 €'),
    },
  },
  xc40: {
    basePrice: '42.800 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/xc40/specifications/',
    note: checked,
    versionPrices: {
      'B3 Mild hybrid': price('42.800 €'),
      'B4 Mild hybrid': price('48.300 €'),
    },
  },
  xc60: {
    basePrice: '58.150 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/xc60/specifications/',
    note: `${checked} Para las versiones enchufables también se incluye la página específica de sus especificaciones.`,
    versionPrices: {
      'B5 AWD Mild hybrid': price('58.150 €'),
      'T6 AWD Rango extendido Híbrido enchufable': price('67.950 €'),
      'T8 AWD Rango extendido Híbrido enchufable': price('75.815 €'),
    },
  },
  xc90: {
    basePrice: '82.200 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/xc90/specifications/',
    note: `${checked} Para la versión enchufable también se incluye la página específica de sus especificaciones.`,
    versionPrices: {
      'B5 AWD Mild hybrid': price('82.200 €'),
      'T8 AWD Rango extendido Híbrido enchufable': price('94.100 €'),
    },
  },
  v60: {
    basePrice: '49.950 €',
    sourceUrl: 'https://www.volvocars.com/es/cars/v60/specifications/',
    note: `${checked} Para la versión enchufable también se incluye la página específica de sus especificaciones.`,
    versionPrices: {
      'B4 Mild hybrid': price('49.950 €'),
      'T6 AWD Híbrido enchufable': price('62.250 €'),
    },
  },
};
