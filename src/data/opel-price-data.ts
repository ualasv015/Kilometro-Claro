type OpelPriceRecord = {
  /** Lowest price currently shown for the entry engine in Opel Store. */
  startingPrice: string;
  sourceUrls: { label: string; url: string }[];
  versionPrices: Record<string, { price: string; priceType: string }>;
};

const store = 'https://store.opel.es/selector/configurable';
const priceType = 'Precio al contado publicado por Opel Store · consulta del 11/11/2026';
const record = (
  modelPath: string,
  startingPrice: string,
  versionPrices: Record<string, string>,
  extraPaths: string[] = [],
): OpelPriceRecord => ({
  startingPrice,
  sourceUrls: [modelPath, ...extraPaths].map((path) => ({
    label: `Opel Store: ${path.split('/').pop()?.replace(/-/g, ' ') ?? 'configuración del modelo'}`,
    url: `${store}/${path}`,
  })),
  versionPrices: Object.fromEntries(
    Object.entries(versionPrices).map(([name, price]) => [name, { price, priceType }]),
  ),
});

/** Importes que muestra el configurador oficial al seleccionar cada motor. */
export const opelPriceData: Record<string, OpelPriceRecord> = {
  corsa: record('corsa-berlina', '17.300,00 €', {
    '1.2 Turbo gasolina 100': '17.300,00 €',
    '1.2 Hybrid 110': '20.650,00 €',
    '1.2 Hybrid 145': '23.750,00 €',
    'Electric 50 kWh 136': '27.750,00 €',
    'Electric 54 kWh 156': '31.150,00 €',
    'Corsa GSE Electric 54,4 kWh 281': '38.990,00 €',
  }),
  astra: record('astra-5p-berlina', '25.400,00 €', {
    '1.5 Diésel 130': '26.850,00 €',
    '1.2 Hybrid 145': '25.400,00 €',
    '1.6 Plug-in Hybrid 196': '35.800,00 €',
    'Electric 58 kWh 156': '35.200,00 €',
  }),
  'astra-sports-tourer': record('astra-sports-tourer-berlina-familiar', '26.600,00 €', {
    '1.2 Hybrid 145': '26.600,00 €',
    '1.5 Diésel 130': '28.050,00 €',
    '1.6 Plug-in Hybrid 196': '37.000,00 €',
    'Electric 58 kWh 156': '36.400,00 €',
  }),
  frontera: record('frontera-suv', '20.599,96 €', {
    '1.2 Turbo gasolina 100': '20.599,96 €',
    '1.2 Hybrid 110': '24.100,00 €',
    '1.2 Hybrid 145': '25.300,00 €',
    'Electric 44 kWh 113': '26.500,00 €',
    'Electric Extended Range 54 kWh 113': '28.600,00 €',
  }),
  mokka: record('mokka-suv', '21.400,24 €', {
    '1.2 Turbo gasolina 136': '21.400,24 €',
    '1.2 Hybrid 145': '24.200,43 €',
    'Electric 54 kWh 156': '33.049,90 €',
    'Mokka GSE Electric 54,4 kWh 280': '42.249,84 €',
  }),
  grandland: record('nuevo-grandland-suv', '30.550,01 €', {
    '1.2 Hybrid 145': '30.550,01 €',
    '1.6 Plug-in Hybrid 225': '42.600,00 €',
    'Electric 78,3 kWh 213': '44.300,00 €',
    'Electric Long Range 100,7 kWh 231': '44.800,00 €',
    'Electric AWD 79,9 kWh 325': '49.600,00 €',
  }),
  combo: record('combo-combo', '25.906,55 €', {
    '1.5 Diésel 100 manual': '25.906,55 €',
    '1.5 Diésel 130 automático': '29.160,15 €',
    'Electric 50 kWh 136': '29.181,71 €',
  }, ['combo-electric-combo']),
  zafira: record('zafira-zafira', '34.429,75 €', {
    'Diésel 150 manual': '38.004,03 €',
    '2.2 Diésel 180 automática': '40.998,00 €',
    'Electric 50 kWh 136': '34.429,75 €',
    'Electric 75 kWh 136': '38.449,75 €',
  }, ['zafira-electric-zafira']),
  'vivaro-combi': record('vivaro-combi-vivaro-combi', '31.816,75 €', {
    'Diésel 150 manual': '34.569,77 €',
    '2.2 Diésel 180 automática': '37.563,74 €',
    'Electric 50 kWh 136': '31.816,75 €',
    'Electric 75 kWh 136': '35.836,75 €',
  }, ['vivaro-combi-electric-vivaro-combi']),
};

export const opelPriceNote = 'Precios al contado que muestra el configurador de Opel Store al seleccionar cada motorización, consultados el 11 de noviembre de 2026. Al cambiar de motor, el configurador puede cambiar también el acabado; el importe corresponde a la configuración que presenta para esa versión y no se describe como una tarifa invariable. No se han añadido ayudas, tasaciones ni cuotas de financiación. Opel puede modificar precios y disponibilidad: confirma el acabado, el precio final y los posibles costes de matriculación o servicios con la marca.';
