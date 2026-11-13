/**
 * Precios de partida publicados por Land Rover España.
 * La web española publica el «Desde» por familia/acabado, pero no expone un PVP
 * al contado verificable para cada combinación de motor y acabado en la ficha
 * pública. Esas combinaciones permanecen pendientes; no se extrapola el precio
 * de la familia a todas las motorizaciones.
 */
export const landRoverRangePriceSource = 'https://www.landrover.es/download-a-brochure/index.html';

export const landRoverPriceData: Record<string, {
  basePrice: string;
  sourceUrl: string;
  note: string;
  versionPrices?: Record<string, { price: string; priceType: string }>;
}> = {
  'range-rover': {
    basePrice: '152.250 €',
    sourceUrl: 'https://www.rangerover.com/es-es/range-rover/models-and-specifications.html',
    note: 'Land Rover España publica este precio de partida para la familia, pero la página consultada no identifica qué motorización y acabado forman exactamente esa configuración. No se asigna ese importe al resto de motores.',
  },
  'range-rover-sport': {
    basePrice: '101.250 €',
    sourceUrl: 'https://www.rangerover.com/es-es/range-rover-sport/models-and-specifications.html',
    note: 'Land Rover España publica este precio de partida para la familia; el configurador permite varios motores por acabado y la página pública no desglosa el PVP al contado de cada combinación. No se extrapola el precio de acceso.',
  },
  'range-rover-velar': {
    basePrice: '79.000 €',
    sourceUrl: 'https://www.rangerover.com/es-es/range-rover-velar/models-and-specifications.html',
    note: 'La página específica del modelo anuncia el Velar Dynamic S desde 79.000 €. La página general de catálogo muestra 78.450 €; se conserva el precio de la ficha específica y se deja constancia de la discrepancia. Ninguna de las dos páginas desglosa el precio al contado de cada motorización.',
  },
  'range-rover-evoque': {
    basePrice: '60.100 €',
    sourceUrl: 'https://www.rangerover.com/es-es/range-rover-evoque/models-and-specifications.html',
    note: 'Precio de partida anunciado por Land Rover España para Evoque. La página de modelos muestra precios de acabados y selección de motor, pero no el precio al contado individual de cada combinación.',
  },
  discovery: {
    basePrice: '88.500 €',
    sourceUrl: 'https://www.landrover.es/discovery/discovery/models-and-specifications.html',
    note: 'Precio de partida anunciado por Land Rover España para Discovery. La gama pública permite elegir D250 y D350, pero no desglosa su precio al contado por motor en la página consultada.',
  },
  'discovery-sport': {
    basePrice: '58.900 €',
    sourceUrl: 'https://www.landrover.es/discovery/discovery-sport/models-and-specifications.html',
    note: 'Precio de partida anunciado por Land Rover España para Discovery Sport. La página permite elegir motores D165, D200 y PHEV, pero no publica el precio al contado individual de cada combinación.',
  },
  defender: {
    basePrice: '82.450 €',
    sourceUrl: 'https://www.landrover.es/defender/defender/models-and-specifications.html',
    note: 'Land Rover España muestra el Defender 90 S desde 82.450 €. La página general de catálogo también muestra 77.900 € para Defender; la discrepancia entre ambos importes oficiales queda pendiente de aclaración. El precio de 90 S no se extrapola a las carrocerías 110/130 ni a otros motores.',
    versionPrices: {
      'D250 MHEV': { price: '82.450 € (Defender 90 S)', priceType: 'Precio de partida publicado para 90 S; no representa los D250 110/130.' },
    },
  },
};
