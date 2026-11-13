export type MercedesPriceData = {
  basePrice: string;
  versionPrices?: Record<string, string>;
};

// Precios «desde» publicados en el catálogo/configurador de Mercedes-Benz España,
// consulta del 5 de noviembre de 2026. Solo se fijan precios individuales cuando
// la página oficial identifica claramente esa versión; el resto se documenta en
// precios-pendientes.txt hasta poder comprobarlo por motor.
export const mercedesPriceData: Record<string, MercedesPriceData> = {
  cla: { basePrice: '46.711,30 €', versionPrices: { 'CLA 180': '46.711,30 €' } },
  'cla-electrico': {
    basePrice: '48.286,30 €',
    versionPrices: {
      'CLA 200 eléctrico': '48.286,30 €',
      'Mercedes-AMG CLA 45 4MATIC+ eléctrico': '79.900,00 €',
    },
  },
  'clase-c': { basePrice: '52.025,00 €', versionPrices: { 'C 200 d': '52.025,00 €' } },
  'clase-c-electrico': { basePrice: '69.800,00 €', versionPrices: { 'C 400 4MATIC eléctrico': '69.800,00 €' } },
  'clase-e': {
    basePrice: '65.339,26 €',
    versionPrices: { 'E 200': '65.339,26 €', 'Mercedes-AMG E 53 Hybrid 4MATIC+': '115.817,27 €' },
  },
  'clase-s': { basePrice: '127.557,69 €' },
  'clase-s-larga': { basePrice: '130.807,69 €' },
  'maybach-clase-s': { basePrice: '202.430,25 €', versionPrices: { 'Mercedes-Maybach S 580 e híbrido enchufable': '202.430,25 €' } },
  'clase-a': { basePrice: '39.286,40 €' },
  gla: { basePrice: '47.575,86 €' },
  'gla-electrico': { basePrice: '54.750,00 €', versionPrices: { 'GLA 250+ eléctrico': '54.750,00 €' } },
  glb: { basePrice: '55.237,72 €', versionPrices: { 'GLB 200': '55.237,72 €' } },
  'glb-electrico': { basePrice: '57.777,50 €', versionPrices: { 'GLB 250+ eléctrico': '57.777,50 €' } },
  glc: {
    basePrice: '59.954,13 €',
    versionPrices: { 'GLC 200 4MATIC': '59.954,13 €', 'Mercedes-AMG GLC 53 4MATIC+': '96.022,52 €' },
  },
  'glc-electrico': { basePrice: '77.167,35 €', versionPrices: { 'GLC 400 4MATIC eléctrico': '77.167,35 €' } },
  'glc-coupe': {
    basePrice: '64.096,55 €',
    versionPrices: { 'GLC 200 4MATIC Coupé': '64.096,55 €', 'Mercedes-AMG GLC 53 4MATIC+ Coupé': '98.872,50 €' },
  },
  gle: {
    basePrice: '96.149,99 €',
    versionPrices: { 'GLE 350 d 4MATIC': '96.149,99 €', 'Mercedes-AMG GLE 53 Hybrid 4MATIC+': '131.742,27 €' },
  },
  'gle-coupe': { basePrice: '108.000,00 €' },
  gls: { basePrice: '127.314,71 €', versionPrices: { 'GLS 450 d 4MATIC': '127.314,71 €', 'Mercedes-AMG GLS 63 4MATIC+': '210.050,00 €' } },
  'maybach-gls': { basePrice: '234.899,99 €', versionPrices: { 'Mercedes-Maybach GLS 680': '234.899,99 €' } },
  'maybach-eqs-suv': { basePrice: '214.616,55 €', versionPrices: { 'Mercedes-Maybach EQS 680 eléctrico': '214.616,55 €' } },
  'clase-g-electrico': { basePrice: '165.747,16 €', versionPrices: { 'G 580 con tecnología EQ': '165.747,16 €' } },
  'clase-g': { basePrice: '155.678,47 €', versionPrices: { 'G 450 d': '155.678,47 €', 'Mercedes-AMG G 63 4MATIC+': '225.174,10 €' } },
  eqe: {
    basePrice: '72.845,21 €',
    versionPrices: { 'Mercedes-AMG EQE 53 4MATIC eléctrico': '116.517,20 €' },
  },
  'eqe-suv': {
    basePrice: '83.244,25 €',
    versionPrices: { 'Mercedes-AMG EQE 53 4MATIC SUV eléctrico': '126.123,70 €' },
  },
  eqs: { basePrice: '111.355,25 €' },
  'eqs-suv': { basePrice: '139.937,49 €' },
  'cla-shooting-brake-electrico': {
    basePrice: '49.686,30 €',
    versionPrices: { 'Mercedes-AMG CLA 45 4MATIC+ Shooting Brake eléctrico': '81.000,00 €' },
  },
  'cla-shooting-brake': { basePrice: '48.136,30 €' },
  'clase-c-estate': { basePrice: '53.625,00 €', versionPrices: { 'C 200 d Estate': '53.625,00 €' } },
  'clase-e-estate': {
    basePrice: '68.083,07 €',
    versionPrices: { 'E 200 Estate': '68.083,07 €', 'Mercedes-AMG E 53 Hybrid 4MATIC+ Estate': '117.978,23 €' },
  },
  'clase-e-all-terrain': { basePrice: '75.175,50 €' },
  'cle-coupe': {
    basePrice: '62.192,50 €',
    versionPrices: { 'Mercedes-AMG CLE 53 4MATIC+ Coupé': '100.233,94 €' },
  },
  'amg-gt-4-puertas': { basePrice: '129.500,00 €', versionPrices: { 'Mercedes-AMG GT 53 eléctrico': '129.500,00 €' } },
  'cle-cabrio': {
    basePrice: '70.418,10 €',
    versionPrices: { 'Mercedes-AMG CLE 53 4MATIC+ Cabrio': '108.800,89 €' },
  },
  sl: { basePrice: '154.710,80 €' },
  'maybach-sl': { basePrice: '309.511,09 €', versionPrices: { 'Mercedes-Maybach SL 680': '309.511,09 €' } },
  vle: { basePrice: '84.611,78 €', versionPrices: { 'VLE 300 eléctrico': '84.611,78 €' } },
  'clase-v': { basePrice: '70.480,08 €' },
  'marco-polo': { basePrice: '94.409,04 €' },
  'marco-polo-horizon': { basePrice: '87.645,14 €' },
  'amg-gt': { basePrice: '143.663,79 €' },
};

// Precios por motorización transcritos de precios-base-encontrados.txt,
// consulta del 5 de noviembre de 2026. El archivo identifica Diariomotor y
// Coches.net como fuentes y advierte que sus cifras no siempre coinciden con
// una tarifa oficial de Mercedes-Benz.
export const mercedesReferencePriceData: Record<string, { basePrice?: string; versionPrices: Record<string, string>; versionPriceTypes?: Record<string, string> }> = {
  cla: { basePrice: '46.408 €', versionPrices: { 'CLA 180': '46.408 €', 'CLA 220': '49.333 €' } },
  'cla-electrico': { basePrice: '47.983 €', versionPrices: { 'CLA 200 eléctrico': '47.983 €', 'CLA 250+ eléctrico': '54.443 €', 'CLA 350 4MATIC eléctrico': '59.058 €' } },
  'cla-shooting-brake': { basePrice: '47.833 €', versionPrices: { 'CLA 180 Shooting Brake': '47.833 €', 'CLA 220 Shooting Brake': '50.733 €' } },
  'cla-shooting-brake-electrico': { basePrice: '49.383 €', versionPrices: { 'CLA 200 eléctrico': '49.383 €', 'CLA 250+ eléctrico': '55.858 €', 'CLA 350 4MATIC eléctrico': '60.458 €' } },
  'clase-c': { versionPrices: { 'C 250': '53.535 €', 'C 250 d': '55.224 €', 'C 250 d 4MATIC': '57.649 €', 'C 300 e PHEV': '63.272 €', 'C 400 e 4MATIC PHEV': '70.499 €' } },
  'clase-c-estate': { versionPrices: { 'C 250 Estate': '55.185 €', 'C 250 d Estate': '56.824 €', 'C 300 e Estate híbrido enchufable': '64.615 €', 'C 400 e 4MATIC Estate híbrido enchufable': '72.074 €' } },
  'clase-e': { basePrice: '65.052 €', versionPrices: { 'E 220 d': '65.052 €', 'E 220 d 4MATIC': '67.123 €', 'E 450 d 4MATIC': '88.409 €', 'E 300 e PHEV': '68.540 €', 'E 300 de PHEV': '69.340 €', 'E 300 d e 4MATIC PHEV': '71.701 €' } },
  'clase-e-estate': { basePrice: '67.796 €', versionPrices: { 'E 220 d Estate': '67.796 €', 'E 220 d 4MATIC Estate': '69.866 €', 'E 300 e Estate híbrido enchufable': '71.240 €', 'E 300 de Estate híbrido enchufable': '72.040 €', 'E 300 d e 4MATIC Estate híbrido enchufable': '74.407 €', 'E 450 d 4MATIC Estate': '94.808 €' } },
  'clase-e-all-terrain': { versionPrices: { 'E 220 d 4MATIC All-Terrain': '74.810 €', 'E 300 d e 4MATIC All-Terrain híbrido enchufable': '78.465 €' } },
  'clase-s': { basePrice: '127.178 €', versionPrices: { 'S 450 d 4MATIC': '127.178 €', 'S 580 4MATIC': '159.090 €', 'S 450 e PHEV': '128.179 €', 'S 580 e 4MATIC PHEV': '140.079 €' } },
  'clase-s-larga': { basePrice: '130.428 €', versionPrices: { 'S 450 d 4MATIC': '130.428 €', 'S 580 4MATIC': '162.450 €', 'S 450 e híbrido enchufable': '131.038 €', 'S 580 e 4MATIC híbrido enchufable': '143.079 €' } },
  'maybach-clase-s': { versionPrices: { 'Mercedes-Maybach S 680': '261.290 €' } },
  gla: { basePrice: '47.261 €', versionPrices: { 'GLA 200': '47.261 €', 'GLA 200 d': '48.840 €', 'GLA 200 d 4MATIC': '51.454 €', 'GLA 220 d 4MATIC': '52.878 €', 'GLA 250 e PHEV': '55.711 €' } },
  'gla-electrico': { basePrice: '54.423 €', versionPrices: { 'GLA 250+ eléctrico': '54.423 €', 'GLA 350 4MATIC eléctrico': '59.692 €' } },
  glb: { versionPrices: { 'GLB 200 4MATIC': '57.273 €', 'GLB 220 4MATIC': '59.773 €' } },
  'glb-electrico': { basePrice: '57.475 €', versionPrices: { 'GLB 250+ eléctrico': '57.475 €', 'GLB 350 4MATIC eléctrico': '63.533 €' } },
  glc: { versionPrices: { 'GLC 220 d 4MATIC': '64.752 €', 'GLC 300 e 4MATIC PHEV': '67.677 €', 'GLC 300 de 4MATIC PHEV': '68.477 €' } },
  'glc-coupe': { versionPrices: { 'GLC 220 d 4MATIC Coupé': '69.340 €', 'GLC 300 e 4MATIC Coupé PHEV': '71.040 €', 'GLC 300 de 4MATIC Coupé PHEV': '71.840 €' } },
  gle: { versionPrices: { 'GLE 450 d 4MATIC': '102.064 €', 'GLE 450 e 4MATIC PHEV': '103.564 €' } },
  'gle-coupe': { versionPrices: { 'GLE 350 d 4MATIC Coupé': '111.373 €', 'GLE 450 d 4MATIC Coupé': '111.121 €', 'GLE 450 e 4MATIC Coupé PHEV': '111.671 €', 'Mercedes-AMG GLE 53 Hybrid 4MATIC+ Coupé': '130.463 €' } },
  gls: { basePrice: '126.169 €', versionPrices: { 'GLS 450 4MATIC': '126.169 €', 'GLS 580 4MATIC': '144.340 €' } },
  'clase-g': { versionPrices: { 'G 500': '166.252 €' } },
  eqe: { basePrice: '72.494 €', versionPrices: { 'EQE 300 eléctrico': '72.494 €', 'EQE 350+ eléctrico': '74.304 €' } },
  'eqe-suv': { basePrice: '82.809 €', versionPrices: { 'EQE 300 eléctrico': '82.809 €', 'EQE 350+ eléctrico': '86.263 €', 'EQE 350 4MATIC eléctrico': '89.063 €', 'EQE 500 4MATIC eléctrico': '94.143 €' } },
  eqs: { basePrice: '111.004 €', versionPrices: { 'EQS 400 eléctrico': '111.004 €', 'EQS 450+ eléctrico': '125.254 €', 'EQS 580 4MATIC eléctrico': '146.879 €' } },
  'eqs-suv': { basePrice: '139.502 €', versionPrices: { 'EQS 450 4MATIC eléctrico': '139.502 €', 'EQS 500 4MATIC eléctrico': '146.201 €', 'EQS 580 4MATIC eléctrico': '167.080 €' } },
  sl: {
    basePrice: '154.317 €',
    versionPrices: {
      'Mercedes-AMG SL 43': '154.317 €',
      'Mercedes-AMG SL 55 4MATIC+': '197.348 €',
      'Mercedes-AMG SL 63 4MATIC+': '231.335 €',
      'Mercedes-AMG SL 63 S E Performance': '259.931,24 €',
    },
    versionPriceTypes: {
      'Mercedes-AMG SL 63 S E Performance': 'Importe facilitado por el usuario en la lista de precios; fuente y condiciones comerciales no especificadas.',
    },
  },
  'amg-gt': { basePrice: '143.270 €', versionPrices: { 'Mercedes-AMG GT 43': '143.270 €', 'Mercedes-AMG GT 55 4MATIC+': '198.393 €', 'Mercedes-AMG GT 63 4MATIC+': '224.711 €', 'Mercedes-AMG GT 63 PRO 4MATIC+': '251.650 €', 'Mercedes-AMG GT 63 S E Performance': '251.268 €' } },
  'clase-a': { basePrice: '38.972 €', versionPrices: { 'A 180': '38.972 €', 'A 200': '42.863 €', 'A 250 4MATIC': '58.840 €', 'A 180 d': '42.070 €', 'A 200 d': '43.657 €', 'A 220 d': '48.061 €', 'A 250 e híbrido enchufable': '50.683 €', 'Mercedes-AMG A 35 4MATIC': '67.265 €' } },
  'cle-coupe': { basePrice: '61.337 €', versionPrices: { 'CLE 200 Coupé': '61.337 €', 'CLE 220 d Coupé': '61.696 €' } },
  'cle-cabrio': { basePrice: '70.053 €', versionPrices: { 'CLE 200 Cabrio': '70.053 €', 'CLE 220 d Cabrio': '70.410 €' } },
  'clase-v': { versionPrices: { '220 d': '76.159 €', '250 d': '79.399 €', '300': '84.308 €' } },
  'marco-polo': { versionPrices: { '220 d': '99.515 €', '250 d': '102.675 €', '300 d': '106.642 €' } },
  'marco-polo-horizon': { versionPrices: { '220 d': '91.879 €', '250 d': '95.109 €', '300 d': '99.077 €' } },
};

export const mercedesReferencePriceType = 'Referencia de catálogo Diariomotor/Coches.net, noviembre de 2026; no es una tarifa oficial de Mercedes-Benz';

export const mercedesPriceNote =
  'Los importes de las versiones identificadas como referencia de catálogo proceden de Diariomotor y Coches.net, según la consulta recibida del 5 de noviembre de 2026; no son una tarifa oficial publicada por Mercedes-Benz y las fuentes pueden discrepar o no detallar campañas. Cuando la lista aporta dos cifras para una versión, se muestra la menor. El precio base del modelo mantiene la referencia oficial existente salvo cuando la lista aporta un acceso inferior. Acabado, equipamiento, disponibilidad y condiciones comerciales pueden cambiar el importe; confirma el precio vigente en Mercedes-Benz España antes de tomar una decisión.';
