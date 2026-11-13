import type { ModelPageData } from './model-pages';

/**
 * Referencias de catálogo aportadas en los archivos de precios del proyecto.
 * Son datos de terceros, no tarifas oficiales del fabricante. Los registros
 * versionPrices antiguos se alinean con el orden de modelPages; los precios
 * nuevos de versionPricesByName se aplican solo a nombres coincidentes. Una
 * entrada null conserva el precio y la nota que ya tenía la ficha.
 */
export type CatalogPriceEntry = {
  price: string;
  source: string;
};

export type CatalogReferencePrice = {
  basePrice?: string;
  sourceNote: string;
  versionPrices?: Array<CatalogPriceEntry | null>;
  versionPricesByName?: Record<string, CatalogPriceEntry>;
};

const correctedCatalogPrice = (price: string, source: 'Coches.net' | 'Diariomotor' | 'Carwow' = 'Coches.net'): CatalogPriceEntry => ({
  price,
  source: `Referencia de ${source}, recopilada el 12/11/2026. Importe de catálogo de terceros; no es una tarifa oficial del fabricante.`,
});

const correctedCatalogNote = 'Precios corregidos facilitados por el usuario a partir de Coches.net, Diariomotor y Carwow (consulta 12/11/2026). Son referencias de catálogo de terceros y pueden variar por acabado, año-modelo o condiciones; no se presentan como tarifas oficiales. Las equivalencias dudosas y los importes no encontrados permanecen en precios-pendientes.txt.';

export const catalogReferencePriceData: Record<string, CatalogReferencePrice> = {
  'volkswagen/polo': {
    basePrice: '23.050 €',
    sourceNote: 'Carwow, 3/12/2025 (página antigua). La lista distingue versiones y acabados; estos importes son referencias de catálogo de terceros, no una tarifa oficial vigente.',
    versionPrices: [{ price: 'Desde 23.050 € (1.0 MPI 80 CV, Match); 24.120 € (1.0 TSI 95 CV, Match); 31.910 € (1.0 TSI 116 CV DSG, R-Line)', source: 'Referencia de Carwow, 3/12/2025; página antigua, no es tarifa oficial.' }],
  },
  'volkswagen/id-polo': {
    sourceNote: 'Carwow, 22/9/2026. La fuente identifica las baterías como 39 y 56 kWh; la lista recibida usa 37 y 52 kWh y advierte de que podrían ser capacidades netas/brutas distintas.',
    versionPrices: [null,
      { price: 'Desde 31.890 € (Life Launch Edition); 33.900 € (Style)', source: 'Referencia de Carwow, 22/9/2026; capacidades de batería expresadas según la lista recibida.' },
      { price: 'Desde 35.070 € (Life)', source: 'Referencia de Carwow, 22/9/2026; capacidad de batería expresada según la lista recibida.' },
    ],
  },
  'volkswagen/taigo': {
    basePrice: '24.660 €', sourceNote: 'Carwow, 14/11/2025. Página anterior a la consulta; se conserva la fecha para que no se interprete como tarifa oficial actual.',
    versionPrices: [{ price: 'Desde 24.660 € (1.0 TSI 95 CV); 27.940 € (1.0 TSI 116 CV manual, Más); 29.430 € (1.0 TSI 116 CV DSG, Más); 34.610 € (1.5 TSI 150 CV DSG, R-Line)', source: 'Referencia de Carwow, 14/11/2025; página antigua, no es tarifa oficial.' }],
  },
  'volkswagen/t-cross': {
    basePrice: '25.810 €', sourceNote: 'Carwow; la fecha no aparece en la lista recibida. Referencias de catálogo de terceros, no tarifa oficial.',
    versionPrices: [{ price: 'Desde 25.810 € (1.0 TSI 95 CV); 28.870 € (1.0 TSI 116 CV manual, Más); 30.360 € (1.0 TSI 116 CV DSG, Más); 35.390 € (1.5 TSI 150 CV DSG, R-Line)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida, no es tarifa oficial.' }],
  },
  'volkswagen/id-cross': {
    basePrice: '28.580 €', sourceNote: 'Coches.net, noviembre de 2026. La fuente de la lista recibida recoge capacidades de batería de 37/52 kWh; puede haber diferencia entre capacidad neta y bruta.',
    versionPrices: [
      { price: 'Desde 28.580 € (Life)', source: 'Referencia de Coches.net, noviembre de 2026; configuración de 85 kW indicada en la lista recibida.' },
      { price: 'Desde 31.608 € (Life); 35.468 € (Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 36.628 € (Life); 40.478 € (Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    ],
  },
  'volkswagen/golf': {
    basePrice: '31.790 €', sourceNote: 'Carwow y Coches.net, según cada versión, consulta de noviembre de 2026; importes de catálogo de terceros, no tarifa oficial.',
    versionPrices: [
      { price: '38.850 € (1.5 eTSI 150 CV DSG, Style)', source: 'Referencia de Carwow, consulta indicada en la lista recibida; no es tarifa oficial.' },
      { price: 'Desde 31.790 € (2.0 TDI 116 CV manual)', source: 'Referencia de Carwow, consulta indicada en la lista recibida; no es tarifa oficial.' },
      { price: 'Desde 40.450 € (1.5 Full Hybrid 170 CV, Style)', source: 'Referencia de Carwow, consulta indicada en la lista recibida; no es tarifa oficial.' },
      { price: 'Desde 45.370 € (eHybrid 204 CV, Match)', source: 'Referencia de Carwow, consulta indicada en la lista recibida; no es tarifa oficial.' },
      { price: 'Desde 50.010 € (GTE 272 CV)', source: 'Referencia de Carwow, consulta indicada en la lista recibida; no es tarifa oficial.' },
      { price: '43.438 € (GTI Rabbit); 46.843 € (GTI 265 CV); 51.153 € (GTI Clubsport 300 CV); 55.412 € (R 333 CV)', source: 'Referencias de Coches.net, noviembre de 2026; no son tarifas oficiales.' },
    ],
  },
  'volkswagen/id3-neo': {
    basePrice: '35.491 €', sourceNote: 'Coches.net, noviembre de 2026. La lista recibida recoge varias combinaciones de batería, potencia y acabado; se muestran agrupadas en la única fila eléctrica de la ficha.',
    versionPrices: [{ price: 'Desde 35.491 € (Life, 125 kW, 52 kWh); 38.441 € (Life, 140 kW, 58 kWh); 39.341 € (Style, 125 kW, 52 kWh); 42.291 € (Style, 140 kW, 58 kWh); 43.821 € (Life, 170 kW, 79 kWh); 47.671 € (Style, 170 kW, 79 kWh)', source: 'Referencias de Coches.net, noviembre de 2026; la batería se expresa según la lista recibida.' }],
  },
  'volkswagen/t-roc': {
    basePrice: '35.780 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Precios de referencia, no tarifa oficial.',
    versionPrices: [
      { price: 'Desde 36.040 € (1.5 eTSI 150 CV DSG, Match)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
      { price: 'Desde 35.780 € (Full Hybrid 136 CV, Match); 40.280 € (Full Hybrid 170 CV, Style)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
    ],
  },
  'volkswagen/t-roc-cabrio': {
    basePrice: '44.520 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Precio de referencia, no tarifa oficial.',
    versionPrices: [{ price: 'Desde 44.520 € (1.5 TSI 150 CV DSG, Style)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' }],
  },
  'volkswagen/golf-variant': {
    basePrice: '31.782 €', sourceNote: 'Coches.net, noviembre de 2026. Precios de referencia de catálogo, no tarifa oficial.',
    versionPrices: [
      { price: 'Desde 39.992 € (1.5 eTSI 150 CV DSG, Style Variant)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 31.782 € (2.0 TDI 116 CV); 40.483 € (2.0 TDI 150 CV DSG, Style Variant)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 60.374 € (Golf Variant R 333 CV)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    ],
  },
  'volkswagen/tiguan': {
    basePrice: '40.870 €', sourceNote: 'Las referencias eTSI y TDI proceden de Carwow, 22/9/2026. El usuario facilita además 44.650 € como PVP recomendado con campañas para la versión TSI microhíbrida; no constan acabado, fuente ni condiciones concretas. El eHybrid enchufable conserva sus referencias de catálogo.',
    versionPrices: [
      { price: 'Desde 40.870 € (1.5 eTSI 130 CV DSG); 42.070 € (1.5 eTSI 160 CV DSG)', source: 'Referencia de Carwow, 22/9/2026.' },
      { price: '44.650 € (TSI microhíbrido, PVP recomendado con campañas)', source: 'Precio de 44.650 € facilitado por el usuario para la versión TSI microhíbrida; no constan acabado ni condiciones concretas de campaña.' },
      { price: 'Desde 44.380 € (2.0 TDI 150 CV DSG)', source: 'Referencia de Carwow, 22/9/2026.' },
      { price: 'Desde 54.940 € (eHybrid 204 CV, Style); 62.720 € (eHybrid 272 CV, R-Line)', source: 'Referencias de Carwow, 22/9/2026.' },
    ],
  },
  'volkswagen/id-tiguan': {
    sourceNote: 'Coches.net, noviembre de 2026. El precio de la versión de 58 kWh ya constaba en la ficha; la lista añade la configuración de 77 kWh.',
    versionPrices: [null, { price: 'Desde 48.420 € (Life, 210 kW, 77 kWh)', source: 'Referencia de Coches.net, noviembre de 2026.' }],
  },
  'volkswagen/id4': {
    basePrice: '46.560 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Precios de referencia de catálogo, no tarifa oficial.',
    versionPrices: [{ price: 'Desde 46.560 € (Pro, 77 kWh); 51.880 € (Pro Black); 61.840 € (GTX)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' }],
  },
  'volkswagen/tayron': {
    basePrice: '49.400 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. La lista identifica el 1.5 eTSI de entrada con 160 CV, mientras que la ficha actual del proyecto recoge 150 CV; se deja constancia de la discrepancia para revisión.',
    versionPrices: [
      { price: 'Desde 49.400 € (Family; la lista identifica el 1.5 eTSI DSG como 160 CV)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida. La potencia difiere de la ficha técnica mostrada.' },
      { price: 'Desde 59.390 € (2.0 eTSI 204 CV 4Motion, R-Line)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
      { price: 'Desde 51.610 € (2.0 TDI 150 CV DSG, Family); 61.810 € (2.0 TDI 193 CV 4Motion, R-Line)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
      { price: 'Desde 58.680 € (eHybrid 204 CV, Style); 65.640 € (eHybrid 272 CV, R-Line)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
    ],
  },
  'volkswagen/id7': {
    basePrice: '52.251 €', sourceNote: 'Coches.net, noviembre de 2026. El precio de Business 77 kWh ya figuraba en la ficha; se añaden las configuraciones Style y GTX.',
    versionPrices: [{ price: 'Desde 52.251 € (Business, 77 kWh); 55.721 € (Style, 77 kWh); 60.741 € (Style, 86 kWh); 64.541 € (GTX, 86 kWh, 340 CV)', source: 'Referencias de Coches.net, noviembre de 2026.' }],
  },
  'volkswagen/passat': {
    basePrice: '44.945 €', sourceNote: 'Coches.net, noviembre de 2026. Precios de referencia de catálogo, no tarifa oficial.',
    versionPrices: [
      { price: 'Desde 44.945 € (1.5 eTSI 150 CV DSG)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 45.425 € (2.0 TDI 122 CV DSG); 48.614 € (150 CV DSG, Business); 55.120 € (193 CV 4Motion, R-Line)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 54.942 € (eHybrid 204 CV, Family); 58.468 € (eHybrid 272 CV, Business)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    ],
  },
  'volkswagen/id7-tourer': {
    basePrice: '53.041 €', sourceNote: 'Coches.net, noviembre de 2026. El precio de Business 77 kWh ya figuraba en la ficha; se añaden las configuraciones Style y GTX.',
    versionPrices: [{ price: 'Desde 53.041 € (Business, 77 kWh); 56.421 € (Style, 77 kWh); 61.451 € (Style, 86 kWh); 65.361 € (GTX, 86 kWh)', source: 'Referencias de Coches.net, noviembre de 2026.' }],
  },

  'hyundai/i10': {
    basePrice: '17.356 €', sourceNote: 'Coches.net, noviembre de 2026, y Carwow (fecha no indicada). Para el 1.0 MPi se conservan ambas referencias; la lista advierte de que el catálogo de 1.2 MPi podría incluir una versión más barata no identificada. El importe del 1.0 T-GDi N Line lo facilitó el usuario, sin fuente ni condiciones indicadas.',
    versionPrices: [
      { price: '17.356 € (Essence, Coches.net); 17.840 € (Essence, Carwow)', source: 'Referencias de Coches.net, noviembre de 2026, y Carwow sin fecha indicada; no equivalen a tarifa oficial.' },
      { price: '20.686 € (1.2 MPi 79 CV, N Line)', source: 'Referencia de Coches.net, noviembre de 2026; podría no ser la variante de acceso de esta motorización.' },
      { price: '23.290 € (1.0 T-GDi 90 CV, N Line)', source: 'Importe facilitado por el usuario en la lista de precios; fuente y condiciones comerciales no especificadas.' },
    ],
  },
  'hyundai/i30-fastback': {
    basePrice: '29.255 €', sourceNote: 'Coches.net, noviembre de 2026. La lista incluye además una referencia de 29.255 € para el 1.0 T-GDi 48V Klass y 30.209 € para N Line SE Fastback; se conserva esa diferencia de acabado. El importe de la versión DCT lo facilitó el usuario, sin fuente ni condiciones indicadas.',
    versionPrices: [
      { price: 'Desde 29.255 € (1.0 T-GDi 48V 100 CV, Klass; referencia adicional); 30.209 € (1.0 T-GDi 100 CV, N Line SE Fastback)', source: 'Referencias de Coches.net, noviembre de 2026; la lista identifica acabados distintos.' },
      { price: '32.115 € (1.0 T-GDi 100 CV, cambio DCT de 7 velocidades)', source: 'Importe facilitado por el usuario en la lista de precios; fuente y condiciones comerciales no especificadas.' },
      { price: 'Desde 34.009 € (1.5 T-GDi MHEV 140 CV DCT, N Line Fastback)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    ],
  },

  'seat/leon-sportstourer': {
    basePrice: '28.997 €', sourceNote: 'Coches.net, noviembre de 2026. Las cifras corresponden a versiones y acabados concretos de León Sportstourer; el precio de acceso puede variar si se incorporan ediciones no incluidas en la lista.',
    versionPrices: [
      { price: 'Desde 28.997 € (1.5 TSI 115 CV manual, Style EVO Edition)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 30.643 € (1.5 TSI 150 CV manual, Style One)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 30.677 € (1.5 eTSI MHEV 115 CV DSG, Style One)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 31.987 € (1.5 eTSI MHEV 150 CV DSG, Style One)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 32.047 € (2.0 TDI 115 CV manual, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 36.527 € (2.0 TDI 150 CV DSG, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
      { price: 'Desde 40.647 € (1.5 e-HYBRID 204 CV DSG, Style One)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    ],
  },

  'kia/picanto': { basePrice: '18.605 €', sourceNote: 'Carwow, 8/5/2026. Referencia anterior a la consulta actual; no es tarifa oficial vigente.', versionPrices: [
    { price: 'Desde 18.605 € (1.0 GDi 5MT, Concept, 4 plazas)', source: 'Referencia de Carwow, 8/5/2026; no es tarifa oficial.' },
    { price: 'Desde 22.180 € (1.0 GDi 5AMT, GT-Line)', source: 'Referencia de Carwow, 8/5/2026; no es tarifa oficial.' },
  ] },
  'kia/stonic': { basePrice: '24.710 €', sourceNote: 'Carwow; 1.0 T-GDi de 26/12/2025 y MHEV consultado en la lista recibida. Referencias de catálogo, no tarifas oficiales.', versionPrices: [
    { price: 'Desde 24.710 € (1.0 T-GDi 100 CV 6MT, Concept)', source: 'Referencia de Carwow, 26/12/2025; página antigua, no tarifa oficial.' },
    { price: 'Desde 26.010 € (1.0 T-GDi MHEV 115 CV 6MT, Concept)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
    { price: 'Desde 28.910 € (1.0 T-GDi MHEV 115 CV 7DCT, Drive)', source: 'Referencia de Carwow; fecha no indicada en la lista recibida.' },
  ] },
  'kia/ev2': { basePrice: '29.450 €', sourceNote: 'Carwow, 22/9/2026. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 29.450 € (Standard Range 42,2 kWh, Air)', source: 'Referencia de Carwow, 22/9/2026.' },
    { price: 'Desde 33.450 € (Long Range 61 kWh, Air)', source: 'Referencia de Carwow, 22/9/2026.' },
  ] },
  'kia/ev3': { basePrice: '37.040 €', sourceNote: 'Carwow, 19/10/2026. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 37.040 € (Standard Range 58 kWh, Air)', source: 'Referencia de Carwow, 19/10/2026.' },
    { price: 'Desde 41.815 € (Long Range 81 kWh, Air)', source: 'Referencia de Carwow, 19/10/2026.' },
  ] },
  'kia/ev4': { basePrice: '38.715 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 38.715 € (Standard Range 58,3 kWh, Air)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 43.990 € (Long Range 81,4 kWh, Air)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/ev4-fastback': { basePrice: '42.765 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 42.765 € (Standard Range 58,3 kWh, Earth Launch Edition)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 48.040 € (Long Range 81,4 kWh, Earth Launch Edition)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/k4': { basePrice: '31.170 €', sourceNote: 'Carwow, 24/8/2026. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 31.170 € (1.0 T-GDi MHEV 115 CV, Drive manual)', source: 'Referencia de Carwow, 24/8/2026.' },
    { price: 'Desde 34.170 € (1.6 T-GDi 150 CV DCT, Drive)', source: 'Referencia de Carwow, 24/8/2026.' },
    { price: 'Desde 39.270 € (1.6 T-GDi 180 CV DCT, GT-Line)', source: 'Referencia de Carwow, 24/8/2026.' },
  ] },
  'kia/niro': { basePrice: '34.750 €', sourceNote: 'Carwow, 19/10/2026. Referencia de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 34.750 € (1.6 GDi HEV, sistema de 138 CV, Concept)', source: 'Referencia de Carwow, 19/10/2026.' },
  ] },
  'kia/xceed': { basePrice: '27.990 €', sourceNote: 'Carwow, 17/12/2025. Página antigua; referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 27.990 € (1.0 T-GDi 115 CV 6MT, Concept)', source: 'Referencia de Carwow, 17/12/2025; página antigua.' },
    { price: 'Desde 28.990 € (1.0 T-GDi MHEV 115 CV 6MT, Concept)', source: 'Referencia de Carwow, 17/12/2025; página antigua.' },
    { price: 'Desde 31.890 € (1.0 T-GDi MHEV 115 CV 7DCT, Drive)', source: 'Referencia de Carwow, 17/12/2025; página antigua.' },
    { price: 'Desde 32.890 € (1.6 T-GDi 150 CV 7DCT, Drive)', source: 'Referencia de Carwow, 17/12/2025; página antigua.' },
    { price: 'Desde 38.790 € (1.6 T-GDi 180 CV 7DCT, Emotion)', source: 'Referencia de Carwow, 17/12/2025; página antigua.' },
  ] },
  'kia/seltos': { basePrice: '33.180 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 33.180 € (1.6 T-GDi 180 CV 6MT 4x2, Concept)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 40.580 € (1.6 T-GDi 180 CV 7DCT 4x2, GT-Line)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 39.850 € (1.6 T-GDi 180 CV 7DCT 4x4, Business)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/sportage': { basePrice: '35.366 €', sourceNote: 'Coches.net, noviembre de 2026; para las versiones con dos importes se conserva el menor de los indicados en la lista. Las cifras son referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 35.366 € (1.6 T-GDi 150 CV 6MT, Concept 4x2)', source: 'Referencia de Coches.net, noviembre de 2026; Carwow indicaba 36.190 €.' },
    { price: 'Desde 40.646 € (1.6 T-GDi 180 CV 7DCT, Business 4x4)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 39.798 € (1.6 CRDi MHEV 136 CV 6MT, Business 4x2)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 42.298 € (1.6 CRDi MHEV 136 CV 7DCT, Business 4x2)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 40.148 € (1.6 T-GDi HEV, sistema de 239 CV, Concept 4x2)', source: 'Referencia de Coches.net, noviembre de 2026; Carwow indicaba 40.940 €.' },
  ] },
  'kia/ev5': { basePrice: '46.070 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencia de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 46.070 € (FWD Long Range 81,4 kWh, Air)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/ev6': { basePrice: '49.305 €', sourceNote: 'Carwow, 20/1/2026; la lista señala que la página es antigua. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 49.305 € (RWD 62,9 kWh, Air)', source: 'Referencia de Carwow, 20/1/2026; página antigua.' },
    { price: 'Desde 52.810 € (RWD 84 kWh, Air)', source: 'Referencia de Carwow, 20/1/2026; página antigua.' },
    { price: 'Desde 62.385 € (AWD 84 kWh, GT-Line)', source: 'Referencia de Carwow, 20/1/2026; página antigua.' },
    { price: 'Desde 71.405 € (GT AWD)', source: 'Referencia de Carwow, 20/1/2026; página antigua.' },
  ] },
  'kia/sorento': { basePrice: '53.645 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencias de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 53.645 € (2.2 CRDi DCT8, Drive 4x2)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 54.385 € (1.6 T-GDi HEV, Drive 4x2)', source: 'Referencia de Carwow; fecha no indicada.' },
    { price: 'Desde 62.675 € (1.6 T-GDi PHEV, Drive 4x4)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/ev9': { basePrice: '86.545 €', sourceNote: 'Carwow; fecha no indicada en la lista recibida. Referencia de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 86.545 € (AWD GT-Line, 99,8 kWh, 7 plazas)', source: 'Referencia de Carwow; fecha no indicada.' },
  ] },
  'kia/pv5-passenger': { basePrice: '38.755 €', sourceNote: 'Carwow, 17/2/2026. Referencia de catálogo, no tarifa oficial.', versionPrices: [
    { price: 'Desde 38.755 € (FWD Medium Range 51,5 kWh, Essential)', source: 'Referencia de Carwow, 17/2/2026.' },
    { price: 'Desde 42.755 € (FWD Long Range 71,2 kWh, Essential)', source: 'Referencia de Carwow, 17/2/2026.' },
  ] },

  'peugeot/208': { basePrice: '22.046 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026; se usan sus importes de catálogo frente a Carwow cuando la lista aporta ambas cifras. No se presentan como PVP oficial.', versionPrices: [
    { price: 'Desde 22.046 € (Turbo 100 manual, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 22.730 €.' },
    { price: 'Desde 24.316 € (Hybrid 110 e-DCS6, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 25.000 €.' },
    { price: 'Desde 27.071 € (Hybrid 145 e-DCS6, Allure Plus)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 27.755 €.' },
    { price: 'Desde 34.386 € (Electric 100 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 35.386 € (Electric 115 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 44.216 € (Electric GTi, 207 kW)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/2008': { basePrice: '28.220 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026; se usan sus importes de catálogo frente a Carwow cuando la lista aporta ambas cifras. No se presentan como PVP oficial.', versionPrices: [
    { price: 'Desde 28.220 € (Turbo 100 manual, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 28.930 €.' },
    { price: 'Desde 29.816 € (Hybrid 110, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 30.500 €.' },
    { price: 'Desde 30.816 € (Hybrid 145, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 31.500 €.' },
    { price: 'Desde 39.261 € (Electric 115 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/308': { basePrice: '31.386 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026; se usan sus importes de catálogo frente a Carwow cuando la lista aporta ambas cifras. No se presentan como PVP oficial.', versionPrices: [
    { price: 'Desde 31.386 € (Hybrid 145, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 32.070 €.' },
    { price: 'Desde 37.346 € (Plug-in Hybrid 195 e-DCT7, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 38.030 €.' },
    { price: 'Desde 37.856 € (Electric 115 kW, Style 5 puertas)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 33.490 € (BlueHDi 130 EAT8, Style)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 34.200 €.' },
  ] },
  'peugeot/308-sw': { basePrice: '32.286 €', sourceNote: 'Coches.net, noviembre de 2026. Referencias de catálogo, no PVP oficial.', versionPrices: [
    { price: 'Desde 32.286 € (Hybrid 145, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 38.246 € (Plug-in Hybrid 195 e-DCT7, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 38.756 € (Electric 115 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 34.390 € (BlueHDi 130 EAT8, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/408': { basePrice: '37.016 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026; se usa el importe de catálogo facilitado. No se presenta como PVP oficial.', versionPrices: [
    { price: 'Desde 37.016 € (Hybrid 145, Allure Plus)', source: 'Referencia de Diariomotor/Coches.net, noviembre de 2026; Carwow indicaba 37.700 €.' },
    { price: 'Desde 44.236 € (Plug-in Hybrid 240 e-DCS7, Allure Plus)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 42.576 € (Electric 157 kW, Allure Plus)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/3008': { basePrice: '31.180 €', sourceNote: 'Para Hybrid 145 se muestra únicamente el precio al contado de Peugeot Store facilitado por el usuario; puede incluir una campaña y no equivale a un PVP de tarifa. Las demás motorizaciones conservan sus referencias de Diariomotor/Coches.net. La referencia del 3008 PHEV 225 procede solo de una página antigua de Carwow y sigue sin precio base verificable.', versionPrices: [
    { price: '31.180 €', source: 'Precio al contado de Peugeot Store facilitado por el usuario, consulta 5/11/2026; puede incluir campañas y no constituye una tarifa oficial.' },
    null,
    { price: 'Desde 46.106 € (Electric 210, 157 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 51.606 € (Electric 230 Long Range, 170 kW, Allure Plus)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 53.936 € (Electric 325 Dual Motor AWD, 240 kW, GT Plus)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/5008': { basePrice: '34.590 €', sourceNote: 'Para Hybrid 145 se muestra únicamente el precio al contado de Peugeot Store facilitado por el usuario; puede incluir una campaña y no equivale a un PVP de tarifa. Las demás motorizaciones conservan sus referencias de Diariomotor/Coches.net. La referencia del 5008 PHEV 225 procede solo de una página antigua de Carwow y sigue sin precio base verificable.', versionPrices: [
    { price: '34.590 €', source: 'Precio al contado de Peugeot Store facilitado por el usuario, consulta 5/11/2026; puede incluir campañas y no constituye una tarifa oficial.' },
    null,
    { price: 'Desde 47.956 € (Electric 210, 157 kW, Style)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 53.456 € (Electric 230 Long Range, 170 kW, Allure Plus)', source: 'Referencia de Coches.net, noviembre de 2026.' },
    { price: 'Desde 56.016 € (Electric 325 Dual Motor AWD, GT)', source: 'Referencia de Coches.net, noviembre de 2026.' },
  ] },
  'peugeot/rifter': { basePrice: '33.033 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026, con datos Carwow cuando la lista los identifica. Referencias de catálogo, no PVP oficial.', versionPrices: [
    { price: 'Desde 33.033 € (BlueHDi 100 manual, Allure)', source: 'Referencia de Carwow, fecha no indicada en la lista recibida.' },
    { price: 'Desde 36.671 € (BlueHDi 130 EAT8, Allure Long); 39.165 € (GT Standard)', source: 'Referencias de Carwow, fecha no indicada en la lista recibida.' },
    { price: 'Desde 38.139 € (Eléctrico 54 kWh, Allure Standard)', source: 'Referencia de Diariomotor, noviembre de 2026.' },
  ] },
  'peugeot/traveller': { basePrice: '46.795 €', sourceNote: 'Diariomotor y Coches.net, noviembre de 2026, con datos Carwow cuando la lista los identifica. Referencias de catálogo, no PVP oficial.', versionPrices: [
    { price: 'Desde 46.795 € (Diésel 150 manual, Business Standard)', source: 'Referencia de Carwow, 20/10/2026.' },
    { price: 'Desde 50.469 € (BlueHDi 180 EAT8, Business Standard)', source: 'Referencia de Carwow, fecha no indicada en la lista recibida.' },
    { price: 'Desde 50.402 € (Eléctrico 100 kW, batería 49 kWh, Business Standard)', source: 'Referencia de Diariomotor, noviembre de 2026.' },
    { price: 'Desde 56.402 € (Eléctrico 100 kW, batería 75 kWh, Business Standard)', source: 'Referencia de Diariomotor, noviembre de 2026.' },
  ] },
  'bmw/serie-1': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '120 gasolina MHEV': correctedCatalogPrice('41.065 €', 'Diariomotor'),
  } },
  'bmw/serie-2': { sourceNote: `${correctedCatalogNote} La fuente usa códigos de versión fechados en junio de 2026.`, versionPricesByName: {
    '220 Gran Coupé gasolina MHEV': correctedCatalogPrice('44.590 €'),
    '220d Gran Coupé diésel MHEV': correctedCatalogPrice('44.890 €'),
    'M235 xDrive Gran Coupé gasolina': correctedCatalogPrice('65.637 €'),
  } },
  'bmw/serie-4': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '420i Coupé gasolina': correctedCatalogPrice('56.265 €', 'Diariomotor'),
  } },
  'bmw/serie-5': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '550e xDrive Berlina híbrido enchufable': correctedCatalogPrice('89.440 €'),
  } },
  'bmw/serie-7': { sourceNote: `${correctedCatalogNote} Diariomotor ofrece una cifra distinta en una fila marcada «O»; se conserva el importe de su fila principal.`, versionPricesByName: {
    '740d xDrive Berlina diésel MHEV': correctedCatalogPrice('125.837 €', 'Diariomotor'),
    '750e xDrive Berlina híbrido enchufable': correctedCatalogPrice('134.190 €'),
  } },
  'bmw/x1': { sourceNote: `${correctedCatalogNote} Para sDrive20d la fuente incluye otra fila marcada «O» con 48.691 €; se muestra la fila seleccionada en la lista recibida.`, versionPricesByName: {
    'sDrive20d diésel MHEV': correctedCatalogPrice('48.490 €', 'Diariomotor'),
  } },
  'bmw/x4': { basePrice: '61.237 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'xDrive20i gasolina': correctedCatalogPrice('61.237 €', 'Diariomotor'),
    'xDrive30d diésel MHEV': correctedCatalogPrice('72.587 €', 'Diariomotor'),
    'M40i xDrive gasolina': correctedCatalogPrice('85.737 €', 'Diariomotor'),
  } },
  'bmw/x5': { sourceNote: `${correctedCatalogNote} El importe de acceso de 95.437 € corresponde a xDrive30d, una versión que no figura en esta ficha; no se usa como precio base.`, versionPricesByName: {
    '40 xDrive gasolina MHEV': correctedCatalogPrice('101.287 €', 'Diariomotor'),
    '40d xDrive diésel MHEV': correctedCatalogPrice('96.487 €', 'Diariomotor'),
  } },
  'bmw/z4': { basePrice: '59.787 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'sDrive20i gasolina': correctedCatalogPrice('59.787 €', 'Diariomotor'),
    'sDrive30i gasolina': correctedCatalogPrice('68.737 €', 'Diariomotor'),
    'M40i gasolina': correctedCatalogPrice('80.887 €', 'Diariomotor'),
  } },
  'bmw/ix': { sourceNote: `${correctedCatalogNote} La fuente presenta 106.141 € en otra fila marcada «O».`, versionPricesByName: {
    'xDrive60 eléctrico': correctedCatalogPrice('107.241 €', 'Diariomotor'),
  } },
  'bmw/ix1': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'xDrive30 eléctrico': correctedCatalogPrice('57.240 €'),
  } },
  'bmw/ix2': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'xDrive30 eléctrico': correctedCatalogPrice('58.140 €'),
  } },
  'bmw/i4': { sourceNote: `${correctedCatalogNote} Diariomotor muestra también una fila marcada «O» con 57.990 €.`, versionPricesByName: {
    'eDrive35 eléctrico': correctedCatalogPrice('58.591 €', 'Diariomotor'),
  } },
  'bmw/i5': { sourceNote: `${correctedCatalogNote} La fuente no permite identificar por separado el precio Touring; solo se asigna el dato rotulado como Berlina.`, versionPricesByName: {
    'xDrive40 Berlina eléctrico': correctedCatalogPrice('79.740 €', 'Diariomotor'),
  } },
  'bmw/i7': { basePrice: '115.341 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'eDrive50 eléctrico': correctedCatalogPrice('115.341 €', 'Diariomotor'),
    'xDrive60 eléctrico': correctedCatalogPrice('139.141 €', 'Diariomotor'),
    'M70 xDrive eléctrico': correctedCatalogPrice('186.741 €', 'Diariomotor'),
  } },
  'alfa-romeo/giulia': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '2.2 Diésel 210 CV Q4': correctedCatalogPrice('59.496 €', 'Diariomotor'),
  } },
  'audi/q2': { basePrice: '34.769 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Q2 30 TFSI': correctedCatalogPrice('34.769 €'),
    'Q2 35 TFSI': correctedCatalogPrice('36.669 €'),
    'Q2 30 TDI': correctedCatalogPrice('35.559 €'),
    'Q2 35 TDI': correctedCatalogPrice('39.889 €'),
    'Q2 35 TDI quattro': correctedCatalogPrice('42.129 €'),
    'SQ2 TFSI': correctedCatalogPrice('58.881 €'),
  } },
  'audi/a3': { sourceNote: `${correctedCatalogNote} Los precios de motores convencionales distinguen carrocería solo cuando la lista recibida lo indica. Las variantes e-hybrid de Sedán siguen pendientes porque la fuente no las identifica.`, versionPricesByName: {
    'A3 30 TFSI': correctedCatalogPrice('31.270 € Sportback / 32.200 € Sedán'),
    'A3 30 TDI': correctedCatalogPrice('34.289 € Sportback / 36.565 € Sedán'),
    'A3 35 TFSI': correctedCatalogPrice('35.085 € Sportback / 38.780 € Sedán'),
    'A3 35 TDI': correctedCatalogPrice('37.981 € Sportback / 38.911 € Sedán'),
    'A3 40 TFSI e': correctedCatalogPrice('46.225 € Sportback'),
    'A3 45 TFSI e': correctedCatalogPrice('51.555 € Sportback'),
  } },
  'audi/a5': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'A5 TFSI 110 kW': correctedCatalogPrice('48.535 €'),
    'A5 TFSI 150 kW': correctedCatalogPrice('51.535 €'),
    'A5 TDI 150 kW': correctedCatalogPrice('51.585 €'),
    'A5 TDI quattro 150 kW': correctedCatalogPrice('54.165 €'),
    'A5 e-hybrid 220 kW': correctedCatalogPrice('62.386 €'),
    'A5 e-hybrid 270 kW': correctedCatalogPrice('77.714 €'),
  } },
  'audi/a6': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'A6 TDI quattro': correctedCatalogPrice('65.824 €'),
    'A6 e-hybrid quattro 270 kW': correctedCatalogPrice('85.253 €'),
    'A6 allroad TDI quattro': correctedCatalogPrice('90.073 €'),
    'A6 allroad e-hybrid quattro': correctedCatalogPrice('88.268 €'),
  } },
  'audi/q4-e-tron': { sourceNote: `${correctedCatalogNote} Solo SUV; no se extrapolan estos importes a Q4 Sportback.`, versionPricesByName: {
    'Q4 e-tron': correctedCatalogPrice('49.663 €'),
    'Q4 e-tron performance': correctedCatalogPrice('55.263 €'),
    'Q4 e-tron quattro': correctedCatalogPrice('58.263 €'),
  } },
  'audi/q5': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Q5 TFSI': correctedCatalogPrice('62.685 €'),
    'Q5 TFSI quattro': correctedCatalogPrice('64.985 €'),
    'Q5 TDI quattro': correctedCatalogPrice('66.985 €'),
    'Q5 e-hybrid quattro 220 kW': correctedCatalogPrice('68.707 €'),
    'Q5 e-hybrid quattro 270 kW': correctedCatalogPrice('83.817 €'),
  } },
  'audi/q7': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Q7 TFSI e quattro': correctedCatalogPrice('104.337 € (490 CV, Black line Edition)'),
  } },
  'audi/q8': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Q8 45 TDI quattro': correctedCatalogPrice('101.501 €'),
    'Q8 50 TDI quattro': correctedCatalogPrice('105.271 €'),
    'Q8 55 TFSI quattro': correctedCatalogPrice('106.511 €'),
    'Q8 55 TFSI e quattro': correctedCatalogPrice('101.581 €'),
    'Q8 60 TFSI e quattro': correctedCatalogPrice('108.421 €'),
  } },
  'cupra/raval': { basePrice: '29.517 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Plus · 37 kWh': correctedCatalogPrice('29.517 € (135 CV)'),
    'Endurance · batería 51,5 kWh': correctedCatalogPrice('32.972 € (210 CV)'),
    'VZ · 52 kWh': correctedCatalogPrice('39.157 € (226 CV)'),
  } },
  'cupra/born': { basePrice: '39.197 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Born · 58 kWh netos (59 kWh brutos)': correctedCatalogPrice('39.197 € (190 CV)'),
    'Born VZ · 79 kWh netos': correctedCatalogPrice('50.247 € (326 CV)'),
  } },
  'cupra/terramar': { basePrice: '45.727 €', sourceNote: `${correctedCatalogNote} Para eTSI 150 y TSI VZ 265 se usa la fila de noviembre indicada como más reciente: 45.727 € y 61.637 €, respectivamente.`, versionPricesByName: {
    '1.5 eTSI 150 DSG': correctedCatalogPrice('45.727 €'),
    '2.0 TSI 204 4Drive DSG': correctedCatalogPrice('53.617 €'),
    '2.0 TSI VZ 265 4Drive DSG': correctedCatalogPrice('61.637 €'),
    '1.5 e-HYBRID 204 DSG': correctedCatalogPrice('50.047 €'),
    '1.5 e-HYBRID VZ 272 DSG': correctedCatalogPrice('55.707 €'),
  } },
  'cupra/formentor': { basePrice: '38.747 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 TSI 150': correctedCatalogPrice('38.747 €'),
    '1.5 eTSI 150 DSG': correctedCatalogPrice('40.877 €'),
    '2.0 TSI 204 4Drive DSG': correctedCatalogPrice('48.717 €'),
    '2.0 TDI 150 DSG': correctedCatalogPrice('43.777 €'),
    '1.5 e-HYBRID 204 DSG': correctedCatalogPrice('46.997 €'),
    '2.0 TSI VZ 265 DSG': correctedCatalogPrice('56.957 €'),
    '2.0 TSI VZ 333 4Drive DSG': correctedCatalogPrice('60.677 €'),
    '1.5 e-HYBRID VZ 272 DSG': correctedCatalogPrice('52.677 €'),
    '2.5 TSI VZ5 390 4Drive DSG': correctedCatalogPrice('76.212 €'),
  } },
  'cupra/leon': { basePrice: '34.917 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 TSI 150': correctedCatalogPrice('34.917 €'),
    '1.5 eTSI 150 DSG': correctedCatalogPrice('36.997 €'),
    '2.0 TDI 150 DSG': correctedCatalogPrice('40.187 €'),
    '1.5 e-HYBRID 204 DSG': correctedCatalogPrice('44.337 €'),
    '1.5 e-HYBRID VZ 272 DSG': correctedCatalogPrice('49.727 €'),
    '2.0 TSI VZ 325 DSG': correctedCatalogPrice('54.177 €'),
  } },
  'cupra/leon-sportstourer': { basePrice: '36.427 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 TSI 150': correctedCatalogPrice('36.427 €'),
    '1.5 eTSI 150 DSG': correctedCatalogPrice('38.537 €'),
    '2.0 TDI 150 DSG': correctedCatalogPrice('41.687 €'),
    '1.5 e-HYBRID 204 DSG': correctedCatalogPrice('45.827 €'),
    '1.5 e-HYBRID VZ 272 DSG': correctedCatalogPrice('50.477 €'),
    '2.0 TSI VZ 333 DSG': correctedCatalogPrice('60.137 €'),
  } },
  'cupra/tavascan': { sourceNote: `${correctedCatalogNote} La cifra de Tavascan de 190 CV se excluye: la fuente la describe como 4x4, mientras que esta ficha identifica motor trasero.`, versionPricesByName: {
    'Endurance · motor trasero': correctedCatalogPrice('47.677 € (286 CV)'),
    'VZ · doble motor AWD': correctedCatalogPrice('59.227 € (340 CV)'),
  } },
  'ds-automobiles/n4': { basePrice: '38.841 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'HYBRID 145': correctedCatalogPrice('38.841 € (Pallas)'),
    'BlueHDi 130 Automático': correctedCatalogPrice('39.919 € (Pallas)'),
    'Plug-in Hybrid 240': correctedCatalogPrice('45.691 € (Pallas)'),
    'E-TENSE 215': correctedCatalogPrice('45.641 € (Pallas)'),
  } },
  'ds-automobiles/n7': { basePrice: '45.441 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'HYBRID 145': correctedCatalogPrice('45.441 € (Étoile)'),
    'E-TENSE FWD': correctedCatalogPrice('48.941 € (230 CV)'),
    'E-TENSE FWD Long Range': correctedCatalogPrice('54.641 € (245 CV)'),
    'E-TENSE AWD Long Range': correctedCatalogPrice('68.141 € (350 CV)'),
  } },
  'ds-automobiles/n8': { basePrice: '57.310 €', sourceNote: `${correctedCatalogNote} La propia lista advierte de que pueden existir precios inferiores no recogidos.`, versionPricesByName: {
    'E-TENSE FWD': correctedCatalogPrice('57.310 € (Pallas, 230 CV)'),
    'E-TENSE FWD Long Range': correctedCatalogPrice('63.010 € (Pallas, 245 CV)'),
    'E-TENSE AWD Long Range': correctedCatalogPrice('74.710 € (Étoile, 350 CV)'),
  } },
  'ebro/s400': { sourceNote: `${correctedCatalogNote} Se descarta el titular promocional de 22.990 € y se conserva la referencia de catálogo para la versión HEV Plus.`, versionPricesByName: {
    '1.5 TGDI HEV Plus 1DHT': correctedCatalogPrice('29.385 €'),
  } },
  'ebro/s800': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.6 TGDI gasolina DCT7': correctedCatalogPrice('36.336 €'),
  } },
  'fiat/500': { basePrice: '20.111 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 FireFly 12 V': correctedCatalogPrice('20.111 € (POP)'),
    '500e 23,8 kWh': correctedCatalogPrice('24.111 € (95 CV, POP)'),
    '500e 42 kWh': correctedCatalogPrice('28.611 € (118 CV, ICON)'),
  } },
  'fiat/600': { basePrice: '23.632 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.2 Turbo 100': correctedCatalogPrice('23.632 €'),
    '1.2 MHEV 110': correctedCatalogPrice('26.661 €'),
    '1.2 MHEV 145': correctedCatalogPrice('32.161 €'),
    '600e': correctedCatalogPrice('31.661 €'),
  } },
  'fiat/grande-panda': { basePrice: '17.382 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'T-Gen3 1.2 Turbo': correctedCatalogPrice('17.382 €'),
    'T-Gen3 1.2 Hybrid 48 V': correctedCatalogPrice('20.411 €'),
    'Grande Panda Eléctrico': correctedCatalogPrice('24.411 € (44 kWh)'),
  } },
  'fiat/pandina': { basePrice: '16.861 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 GSE Hybrid 12 V': correctedCatalogPrice('16.861 € (POP)'),
  } },
  'fiat/qubo-l': { basePrice: '30.782 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 Diésel 100 MT': correctedCatalogPrice('30.782 € (Talla M Pop)'),
    '1.5 Diésel 130 AT': correctedCatalogPrice('33.682 €'),
  } },
  'ford/explorer-electrico': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Autonomía extendida RWD': correctedCatalogPrice('49.810 € (286 CV, Select)'),
    'Autonomía extendida AWD · doble motor': correctedCatalogPrice('56.360 € (340 CV, Select)'),
  } },
  'ford/capri': { basePrice: '48.210 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Autonomía estándar RWD · batería 58 kWh': correctedCatalogPrice('48.210 € (190 CV)'),
    'Autonomía extendida RWD · batería 79 kWh': correctedCatalogPrice('52.310 € (286 CV)'),
    'Autonomía extendida AWD · batería 77 kWh': correctedCatalogPrice('58.860 € (340 CV)'),
  } },
  'ford/puma': { sourceNote: `${correctedCatalogNote} La fuente no especifica el número de marchas de la versión automática.`, versionPricesByName: {
    '1.0 EcoBoost MHEV 125 · automático 7 velocidades': correctedCatalogPrice('29.853 € (Titanium)'),
  } },
  'ford/kuga': { sourceNote: `${correctedCatalogNote} La fuente anuncia el FHEV AWD como 183 CV; la cifra se conserva tal como se publicó.`, versionPricesByName: {
    '2.5 Duratec FHEV · sistema combinado · FWD': correctedCatalogPrice('39.963 € (180 CV)'),
    '2.5 Duratec FHEV · sistema combinado · AWD': correctedCatalogPrice('42.163 € (183 CV)'),
    '2.5 Duratec PHEV · sistema combinado · FWD': correctedCatalogPrice('44.679 € (242 CV)'),
  } },
  'ford/tourneo-custom': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '2.0 EcoBlue 136 · manual': correctedCatalogPrice('56.261 €'),
    '2.0 EcoBlue 136 · automático': correctedCatalogPrice('62.115 €'),
    '2.0 EcoBlue 150 · manual': correctedCatalogPrice('58.638 €'),
    '2.0 EcoBlue 170 · automático': correctedCatalogPrice('65.705 €'),
    '2.5 Duratec PHEV · sistema combinado': correctedCatalogPrice('59.086 € (232 CV)'),
  } },
  'ford/tourneo-connect': { sourceNote: `${correctedCatalogNote} La fuente identifica el 1.5 EcoBoost con 114 CV y el 2.0 EcoBlue con 102 CV, cifras que no coinciden exactamente con la ficha actual; esas dos referencias no se asignan.`, versionPricesByName: {
    '1.5 EcoBoost PHEV · sistema combinado': correctedCatalogPrice('39.891 € (150 CV)'),
  } },
  'ford/tourneo-courier': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 EcoBoost · manual 6 o automático 7 velocidades': correctedCatalogPrice('26.652 € manual / 28.731 € automático (125 CV)'),
  } },
  'ford/ranger': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '3.0 V6 EcoBlue 240 · automático de 10 velocidades · e-AWD': correctedCatalogPrice('50.493 €'),
    '2.3 EcoBoost PHEV · sistema combinado': correctedCatalogPrice('56.233 € (280 CV)'),
    'Ranger MS-RT 2.3 EcoBoost PHEV · sistema combinado': correctedCatalogPrice('73.633 €'),
  } },
  'jaecoo/jaecoo-5': { basePrice: '26.871 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.6 TGDI gasolina · Pure / Exclusive': correctedCatalogPrice('26.871 € Pure / 29.871 € Exclusive'),
    '1.5 SHS-H HEV · Pure / Exclusive': correctedCatalogPrice('29.395 € Pure / 32.395 € Exclusive'),
    'EV · Pure / Exclusive': correctedCatalogPrice('34.895 € Pure / 37.895 € Exclusive'),
  } },
  'jaecoo/jaecoo-7': { basePrice: '33.771 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 SHS-H HEV · Pure / Exclusive': correctedCatalogPrice('33.771 € Pure / 37.771 € Exclusive'),
    '1.5 SHS-P PHEV · Pure / Exclusive': correctedCatalogPrice('38.295 € Pure / 42.295 € Exclusive'),
  } },
  'jaecoo/jaecoo-8': { basePrice: '54.053 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5 SHS AWD · Exclusive 5 asientos': correctedCatalogPrice('54.053 €'),
    '1.5 SHS AWD · Exclusive 7 asientos': correctedCatalogPrice('54.903 €'),
  } },
  'lancia/ypsilon': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Elettrica 156': correctedCatalogPrice('33.919 €'),
  } },
  'land-rover/range-rover': { basePrice: '151.439 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'P460e PHEV': correctedCatalogPrice('151.439 €'), 'P550e PHEV': correctedCatalogPrice('171.889 €'),
    'D300 MHEV': correctedCatalogPrice('156.873 €'), 'D350 MHEV': correctedCatalogPrice('171.773 €'),
    'P380 MHEV': correctedCatalogPrice('168.540 €'), 'P540 MHEV V8': correctedCatalogPrice('201.890 €'),
    'EV450': correctedCatalogPrice('162.439 €'), 'EV550': correctedCatalogPrice('178.939 €'),
  } },
  'land-rover/range-rover-sport': { basePrice: '100.373 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'D250 MHEV': correctedCatalogPrice('100.373 €'), 'D300 MHEV': correctedCatalogPrice('112.223 €'),
    'D350 MHEV': correctedCatalogPrice('141.073 €'), 'P380 MHEV': correctedCatalogPrice('113.590 €'),
    'P460e PHEV': correctedCatalogPrice('105.839 €'), 'P550e PHEV': correctedCatalogPrice('145.389 €'),
    'P540 MHEV V8': correctedCatalogPrice('148.390 €'), 'EV450': correctedCatalogPrice('119.639 €'), 'EV550': correctedCatalogPrice('139.789 €'),
  } },
  'land-rover/range-rover-velar': { basePrice: '77.602 €', sourceNote: `${correctedCatalogNote} La lista recibida asocia D200/D300 y P400e a cilindradas y potencias concretas; se conserva la denominación de versión que coincide con la ficha.`, versionPricesByName: {
    'D200 MHEV': correctedCatalogPrice('77.602 €'), 'D300 MHEV': correctedCatalogPrice('94.902 €'), 'P400e PHEV': correctedCatalogPrice('82.765 €'),
  } },
  'land-rover/range-rover-evoque': { basePrice: '58.779 €', sourceNote: `${correctedCatalogNote} La fuente usa códigos anteriores: D165=D163, D200=D204 y P270e=P300e, según la equivalencia anotada en el archivo recibido.`, versionPricesByName: {
    'D165 MHEV': correctedCatalogPrice('58.779 €'), 'D200 MHEV': correctedCatalogPrice('62.079 €'), 'P270e PHEV': correctedCatalogPrice('61.733 €'),
  } },
  'land-rover/discovery': { basePrice: '87.620 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'D250 MHEV': correctedCatalogPrice('87.620 €'), 'D350 MHEV': correctedCatalogPrice('92.770 €'),
  } },
  'land-rover/discovery-sport': { basePrice: '57.979 €', sourceNote: `${correctedCatalogNote} La fuente usa las equivalencias D165=D163, D200=D204 y P270e=P300e.`, versionPricesByName: {
    'D165 MHEV': correctedCatalogPrice('57.979 €'), 'D200 MHEV': correctedCatalogPrice('61.329 €'), 'P270e PHEV': correctedCatalogPrice('59.983 €'),
  } },
  'land-rover/defender': { basePrice: '69.364 €', sourceNote: `${correctedCatalogNote} Los precios distinguen carrocerías Defender 90, 110 y 130; se mantienen juntos en la versión correspondiente porque la ficha técnica las agrupa.`, versionPricesByName: {
    'D250 MHEV': correctedCatalogPrice('90: 69.364 € / 110: 73.019 € / 130: 101.270 €'),
    'D350 MHEV': correctedCatalogPrice('90: 100.420 € / 110: 105.206 € / 130: 118.720 €'),
    'P380 MHEV': correctedCatalogPrice('90: 103.220 € / 110: 110.120 € / 130: 121.520 €'),
    'P300e PHEV': correctedCatalogPrice('110: 84.885 €'),
    'Defender OCTA P540 MHEV V8': correctedCatalogPrice('110: 202.220 €'),
  } },
  'leapmotor/t03': { basePrice: '19.474 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'T03 eléctrico · 37,3 kWh': correctedCatalogPrice('19.474 € (Design)'),
  } },
  'leapmotor/b03x': { basePrice: '24.764 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Pro · 39,8 kWh': correctedCatalogPrice('24.764 €'), 'ProMax · 53,0 kWh': correctedCatalogPrice('28.764 €'),
  } },
  'leapmotor/b05': { basePrice: '26.764 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Pro · 56,2 kWh': correctedCatalogPrice('26.764 € (LifePro)'), 'ProMax · 67,1 kWh': correctedCatalogPrice('30.764 €'),
  } },
  'leapmotor/b10': { basePrice: '29.764 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'BEV Life Pro · 56,2 kWh': correctedCatalogPrice('30.264 €'), 'BEV ProMax · 67,1 kWh': correctedCatalogPrice('34.264 €'),
    'REEV Hybrid Life · 18,8 kWh': correctedCatalogPrice('29.764 €'),
  } },
  'leapmotor/c10': { basePrice: '36.764 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'BEV Pro · 69,9 kWh': correctedCatalogPrice('37.764 €'), 'BEV ProMax · 81,9 kWh': correctedCatalogPrice('40.764 €'),
    'BEV ProMax AWD · 81,9 kWh': correctedCatalogPrice('43.264 €'), 'REEV Hybrid · 28,4 kWh': correctedCatalogPrice('36.764 €'),
  } },
  'omoda/omoda-5': { basePrice: '28.795 €', sourceNote: `${correctedCatalogNote} El archivo fuente llama TGDI al sistema SHS-H; se conserva la denominación de la ficha local.`, versionPricesByName: {
    '1.5 SHS-H HEV': correctedCatalogPrice('28.795 € Pure / 31.795 € Premium'),
  } },
  'omoda/omoda-5-ev': { basePrice: '34.295 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'EV': correctedCatalogPrice('34.295 € Pure / 37.295 € Premium'),
  } },
  'lexus/lbx': { basePrice: '33.537 €', sourceNote: `${correctedCatalogNote} La fuente no distingue LBX 4x2 de E-Four; el importe se muestra como referencia de acceso del modelo y no como tarifa de cada tracción.`, versionPricesByName: {
    'LBX Hybrid 136 (4x2 o E-Four)': correctedCatalogPrice('33.537 € (136 CV; tracción no especificada)'),
  } },
  'lexus/ux': { basePrice: '39.737 €', sourceNote: `${correctedCatalogNote} El precio disponible corresponde al UX 300h 4x2; la versión E-Four no tiene precio separado en la fuente.`, versionPricesByName: {
    'UX 300h 4x2': correctedCatalogPrice('39.737 €'),
  } },
  'mg/mg3': { basePrice: '17.173 €', sourceNote: `${correctedCatalogNote} La fuente denomina «Hybrid» a la versión que la ficha española llama Hybrid+; esta equivalencia se toma del archivo recibido.`, versionPricesByName: {
    '1.5 atmosférico gasolina': correctedCatalogPrice('17.173 €'),
    '1.5 Hybrid+': correctedCatalogPrice('19.698 €'),
  } },
  'mg/mg-zs': { basePrice: '20.173 €', sourceNote: `${correctedCatalogNote} La fuente denomina «Hybrid» a la versión que la ficha española llama Hybrid+; esta equivalencia se toma del archivo recibido.`, versionPricesByName: {
    '1.5 gasolina': correctedCatalogPrice('20.173 €'),
    '1.5 Hybrid+': correctedCatalogPrice('22.698 €'),
  } },
  'mg/mg-hs': { sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.5T Hybrid+': correctedCatalogPrice('33.173 €'),
    '1.5T PHEV': correctedCatalogPrice('36.698 €'),
  } },
  'mg/mg4-ev': { basePrice: '37.548 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '64 kWh Premium': correctedCatalogPrice('37.548 €'),
    '77 kWh Premium': correctedCatalogPrice('41.048 €'),
    '64 kWh AWD XPower': correctedCatalogPrice('42.048 €'),
  } },
  'mg/mgs5-ev': { basePrice: '32.698 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Comfort · batería de 49 kWh': correctedCatalogPrice('32.698 €'),
    'Comfort · batería de 64 kWh': correctedCatalogPrice('36.198 €'),
    'Luxury · batería de 64 kWh': correctedCatalogPrice('38.698 €'),
  } },
  'mg/cyberster': { basePrice: '63.298 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Trophy Single Motor': correctedCatalogPrice('63.298 €'),
    'GT Dual Motor': correctedCatalogPrice('68.298 €'),
  } },
  'mini/cooper-3-puertas': { sourceNote: `${correctedCatalogNote} La referencia C JCW 156 CV no se asigna al John Cooper Works de 231 CV de esta ficha.`, versionPricesByName: {
    'Cooper S': correctedCatalogPrice('30.540 €'),
  } },
  'mini/cooper-electrico': { sourceNote: `${correctedCatalogNote} Se conservan las referencias que coinciden con la potencia de la ficha: SE 218 CV y JCW Electric 258 CV. La referencia E JCW de 184 CV no se asigna a otra versión.`, versionPricesByName: {
    'Cooper SE': correctedCatalogPrice('32.865 €'),
    'John Cooper Works Electric': correctedCatalogPrice('41.945 €'),
  } },
  'mini/cooper-5-puertas': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Cooper S': correctedCatalogPrice('32.130 €'),
  } },
  'mini/cooper-cabrio': { sourceNote: `${correctedCatalogNote} La referencia C JCW 163 CV no se asigna al John Cooper Works Cabrio de 231 CV de esta ficha.`, versionPricesByName: {
    'Cooper S Cabrio': correctedCatalogPrice('36.040 €'),
  } },
  'mini/aceman': { sourceNote: `${correctedCatalogNote} Para JCW se usa la referencia de 258 CV; la cifra indicada en la fuente para E JCW 184 CV no se asigna a una motorización distinta.`, versionPricesByName: {
    'Aceman SE': correctedCatalogPrice('34.865 €'),
    'John Cooper Works Aceman': correctedCatalogPrice('43.945 €'),
  } },
  'mini/countryman': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Countryman D 48 V': correctedCatalogPrice('34.875 €'),
    'Countryman S ALL4 48 V': correctedCatalogPrice('40.590 €'),
    'John Cooper Works Countryman ALL4': correctedCatalogPrice('51.744 €'),
  } },
  'mini/countryman-electrico': { sourceNote: correctedCatalogNote, versionPricesByName: {
    'Countryman SE ALL4': correctedCatalogPrice('42.865 €'),
  } },
  'nissan/micra': { basePrice: '28.515 €', sourceNote: `${correctedCatalogNote} La fuente no expresa la capacidad de las baterías; se asocian los 40/52 kWh a las potencias de versión indicadas en el archivo recibido.`, versionPricesByName: {
    '40 kWh, 122 CV': correctedCatalogPrice('28.515 € (Acenta)'),
    '52 kWh, 150 CV': correctedCatalogPrice('33.565 € (N-Connecta)'),
  } },
  'nissan/townstar-combi': { sourceNote: `${correctedCatalogNote} La fuente etiqueta la versión como eléctrica de 45 kWh y 5 plazas L1 Acenta, sin usar el nombre Combi.`, versionPricesByName: {
    'Eléctrico 45 kWh': correctedCatalogPrice('40.898 € (5 plazas L1 Acenta)'),
  } },
  'skoda/epiq': { basePrice: '28.779 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'Epiq 40 · 38,5 kWh': correctedCatalogPrice('28.779 € (135 CV, Urban)'),
    'Epiq 55 · 55 kWh': correctedCatalogPrice('33.379 € (210 CV, Urban)'),
  } },
  'skoda/kamiq': { basePrice: '26.530 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 TSI 95': correctedCatalogPrice('26.530 € (GO)'),
    '1.0 TSI 115': correctedCatalogPrice('27.530 € (GO)'),
  } },
  'skoda/elroq': { basePrice: '38.033 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '61 kWh · 190 CV': correctedCatalogPrice('38.033 €'),
    '82 kWh · 286 CV': correctedCatalogPrice('43.173 €'),
    '82 kWh · 299 CV': correctedCatalogPrice('46.722 €'),
    'RS · 82 kWh · 340 CV': correctedCatalogPrice('51.073 €'),
  } },
  'skoda/karoq': { basePrice: '34.530 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 TSI 115': correctedCatalogPrice('34.530 €'), '1.5 TSI 150': correctedCatalogPrice('37.130 €'),
  } },
  'skoda/enyaq': { sourceNote: `${correctedCatalogNote} Se excluye Enyaq 60 por discrepancia de precio entre las filas de la fuente.`, versionPricesByName: {
    '85 · 82 kWh': correctedCatalogPrice('47.022 €'),
    '85x · 82 kWh · tracción total': correctedCatalogPrice('49.822 €'),
    'RS · 84 kWh · tracción total': correctedCatalogPrice('54.022 €'),
  } },
  'skoda/kodiaq': { basePrice: '46.929 €', sourceNote: `${correctedCatalogNote} Se omite PHEV 272 y TDI 193 4x4, que no coinciden con las versiones de esta ficha.`, versionPricesByName: {
    '1.5 TSI mHEV 160': correctedCatalogPrice('46.929 €'),
    '2.0 TSI 204 4x4': correctedCatalogPrice('54.119 €'),
    '1.5 TSI iV PHEV 204': correctedCatalogPrice('51.441 €'),
    '2.0 TDI 150': correctedCatalogPrice('49.420 €'),
    '2.0 TSI RS 265 4x4': correctedCatalogPrice('62.319 €'),
  } },
  'skoda/fabia': { basePrice: '21.241 €', sourceNote: `${correctedCatalogNote} La lista recibida indica que algunos importes podrían llevar descuento de cliente particular; se conserva el acabado cuando consta.`, versionPricesByName: {
    '1.0 MPI 80': correctedCatalogPrice('21.241 €'), '1.0 TSI 95': correctedCatalogPrice('22.141 €'),
    '1.0 TSI 115': correctedCatalogPrice('24.041 €'), '1.5 TSI 150': correctedCatalogPrice('26.341 €'),
    'Fabia 130 · 1.5 TSI 177': correctedCatalogPrice('37.329 €'),
  } },
  'skoda/scala': { basePrice: '25.941 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '1.0 TSI 95': correctedCatalogPrice('25.941 €'), '1.0 TSI 115': correctedCatalogPrice('26.941 €'),
    '1.5 TSI 150': correctedCatalogPrice('32.430 €'),
  } },
  'skoda/octavia': { basePrice: '34.841 €', sourceNote: `${correctedCatalogNote} Se dejan pendientes RS 265 por discrepancia frente al precio del 2.0 TSI 204 y Full Hybrid, aún no disponible según la fuente.`, versionPricesByName: {
    '1.5 TSI mHEV 115': correctedCatalogPrice('34.841 €'),
    '1.5 TSI mHEV 150': correctedCatalogPrice('36.241 €'),
    '2.0 TDI 115': correctedCatalogPrice('35.741 €'),
    '2.0 TDI 150': correctedCatalogPrice('38.241 €'),
    '2.0 TSI 204 4x4': correctedCatalogPrice('47.030 €'),
  } },
  'skoda/octavia-combi': { basePrice: '35.541 €', sourceNote: `${correctedCatalogNote} El precio del 2.0 TSI 204 4x4 y de RS 265 no se asigna: la fuente no encuentra el primero y presenta una relación de precios que requiere confirmar.`, versionPricesByName: {
    '1.5 TSI mHEV 115': correctedCatalogPrice('35.541 €'),
    '1.5 TSI mHEV 150': correctedCatalogPrice('37.941 €'),
    '2.0 TDI 115': correctedCatalogPrice('36.441 €'),
    '2.0 TDI 150': correctedCatalogPrice('38.941 €'),
  } },
  'skoda/superb': { basePrice: '46.641 €', sourceNote: `${correctedCatalogNote} La fuente da códigos distintos para 4x4 de 265/266 CV y TDI 193/194 CV; esas equivalencias quedan pendientes.`, versionPricesByName: {
    '1.5 TSI mHEV 150': correctedCatalogPrice('46.641 €'),
    '1.5 TSI iV PHEV 204': correctedCatalogPrice('52.541 €'),
    '1.5 TSI iV PHEV 272 · Hatch': correctedCatalogPrice('59.721 €'),
    '2.0 TSI 204': correctedCatalogPrice('49.630 €'),
    '2.0 TDI 150': correctedCatalogPrice('49.630 €'),
  } },
  'skoda/superb-combi': { basePrice: '45.551 €', sourceNote: `${correctedCatalogNote} La fuente da códigos distintos para 4x4 de 265/266 CV y TDI 193/194 CV; esas equivalencias quedan pendientes.`, versionPricesByName: {
    '1.5 TSI mHEV 150': correctedCatalogPrice('45.551 €'),
    '1.5 TSI iV PHEV 204': correctedCatalogPrice('52.441 €'),
    '2.0 TSI 204': correctedCatalogPrice('50.330 €'),
    '2.0 TDI 150': correctedCatalogPrice('50.330 €'),
  } },
  'smart/1': { basePrice: '37.049 €', sourceNote: `${correctedCatalogNote} No se cargan las versiones Pure+/Pro+ sin precio actual encontrado.`, versionPricesByName: {
    'Pure, Pro, Pro+, Pro+ Black Collection y Premium': correctedCatalogPrice('Pure 37.049 €; Pro 39.550 €; Premium 48.060 €'),
    'BRABUS · dos motores': correctedCatalogPrice('53.570 €'),
  } },
  'smart/3': { basePrice: '41.760 €', sourceNote: `${correctedCatalogNote} Pro+ permanece sin precio localizado.`, versionPricesByName: {
    'Pro, Pro+, Pro+ Black Collection y Premium': correctedCatalogPrice('Pro 41.760 €; Premium 49.610 €'),
    'BRABUS · dos motores': correctedCatalogPrice('55.120 €'),
  } },
  'smart/5': { sourceNote: `${correctedCatalogNote} Pro+ permanece sin precio localizado.`, versionPricesByName: {
    'Pro+, Pro+ Black Collection y Premium': correctedCatalogPrice('Premium 58.010 €'),
    'Premium AWD · dos motores': correctedCatalogPrice('60.509 €'),
    'BRABUS · dos motores': correctedCatalogPrice('64.020 €'),
  } },
  'subaru/crosstrek': { basePrice: '35.977 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '2.0i e-Boxer Active / Field / Touring': correctedCatalogPrice('Active 35.977 €; Field 37.977 €; Touring 40.977 €'),
  } },
  'subaru/forester': { basePrice: '43.377 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    '2.0i Hybrid e-Boxer Active / Field / Touring': correctedCatalogPrice('Active 43.377 €; Field 45.877 €; Touring 47.877 €'),
  } },
  'subaru/outback': { basePrice: '42.377 €', sourceNote: `${correctedCatalogNote} No se ha encontrado el 2.5i GLP en la fuente; permanece pendiente.`, versionPricesByName: {
    '2.5i Lineartronic Active / Field / Touring': correctedCatalogPrice('Active 42.377 €; Field 44.376 €; Touring 47.777 €'),
  } },
  'subaru/uncharted': { sourceNote: `${correctedCatalogNote} Solo se asigna Touring AWD, cuya tracción coincide explícitamente; las referencias Active/Field no especifican tracción o autonomía y quedan pendientes de confirmar.`, versionPricesByName: {
    'Touring AWD': correctedCatalogPrice('46.916 € (77 kWh, 343 CV)'),
  } },
  'xpeng/g6': { basePrice: '44.600 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'RWD Standard Range · batería 68,5 kWh': correctedCatalogPrice('44.600 €'),
    'RWD Long Range · batería 80,8 kWh': correctedCatalogPrice('48.600 €'),
    'AWD Performance · doble motor · batería 80,8 kWh': correctedCatalogPrice('54.600 €'),
  } },
  'xpeng/g9': { basePrice: '60.599 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'RWD Standard Range · batería 79 kWh': correctedCatalogPrice('60.599 €'),
    'RWD Long Range · batería 93,1 kWh': correctedCatalogPrice('64.600 €'),
    'AWD Performance · doble motor · batería 93,1 kWh': correctedCatalogPrice('74.600 €'),
  } },
  'xpeng/p7-plus': { basePrice: '45.989 €', sourceNote: correctedCatalogNote, versionPricesByName: {
    'RWD Standard Range · batería 61,7 kWh': correctedCatalogPrice('45.989 €'),
    'RWD Long Range · batería 74,9 kWh': correctedCatalogPrice('49.989 €'),
    'AWD Performance · doble motor · batería 74,9 kWh': correctedCatalogPrice('55.989 €'),
  } },
};

export const applyCatalogReferencePrice = (model: ModelPageData): ModelPageData => {
  const reference = catalogReferencePriceData[`${model.brandSlug}/${model.modelSlug}`];
  if (!reference) return model;
  if (reference.versionPrices && reference.versionPrices.length !== model.versions.length) {
    throw new Error(`El registro de precios de catálogo no coincide con las motorizaciones de ${model.brandSlug}/${model.modelSlug}.`);
  }
  const namedPrices = reference.versionPricesByName ?? {};
  const unknownVersionNames = Object.keys(namedPrices).filter((name) => !model.versions.some((version) => version.name === name));
  if (unknownVersionNames.length) {
    throw new Error(`El registro de precios de catálogo no coincide con versiones de ${model.brandSlug}/${model.modelSlug}: ${unknownVersionNames.join(', ')}.`);
  }

  return {
    ...model,
    ...(reference.basePrice && !model.basePrice ? { basePrice: reference.basePrice, basePriceLabel: 'Precio Base', basePricePending: false } : {}),
    priceNote: `${reference.sourceNote} La procedencia de cada importe se indica junto a la motorización. Las cifras no deben interpretarse como tarifa oficial ni como oferta vigente salvo que así se especifique.`,
    versions: model.versions.map((version, index) => {
      const entry = namedPrices[version.name] ?? reference.versionPrices?.[index];
      return entry ? { ...version, price: entry.price, priceType: entry.source } : version;
    }),
    ...(model.priceOptions ? {
      priceOptions: model.priceOptions.map((option) => {
        const entry = namedPrices[option.name];
        return entry ? { ...option, price: entry.price, priceType: entry.source } : option;
      }),
    } : {}),
  };
};
