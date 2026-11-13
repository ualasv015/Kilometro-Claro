/**
 * Precios al contado observados en Citroën España / Citroën Store el 10/11/2026.
 * Se asocian a la configuración seleccionada en cada configurador; no equivalen
 * necesariamente a una tarifa uniforme y pueden cambiar por acabado, opciones o stock.
 */
const store = 'https://store.citroen.es';
const priceType = 'Precio al contado mostrado por Citroën Store; consulta 10/11/2026. Puede variar por acabado, configuración y disponibilidad.';

export const citroenPriceData = {
  ami: {
    basePrice: '7.940 €',
    note: 'Precio al contado publicado para Ami normal en la oferta de Citroën España vigente hasta el 30/11/2026. Citroën publica también 9.090 € al contado para Ami Outdoor durante el mismo periodo; el precio depende de la versión y la campaña.',
    sources: [{ label: 'Citroën España: gama Ami, precios y condiciones vigentes', url: 'https://www.citroen.es/vehiculos-citroen/ami.html' }, { label: 'Citroën Store: compra online del Ami', url: `${store}/ami` }],
    versionPrices: {
      'Ami eléctrico': { price: '7.940 €', priceType: 'Precio al contado publicado por Citroën España para Ami normal; consulta 10/11/2026. La oferta mostrada vence el 30/11/2026.' },
    },
  },
  c3: {
    basePrice: '16.340 €',
    note: 'Precio de acceso y precios por motor mostrados al contado en el configurador español de Citroën el 10/11/2026. No se incluyen descuentos sujetos a financiación publicados aparte; acabado y disponibilidad pueden cambiar el importe.',
    sources: [{ label: 'Citroën Store: configurador del C3 y precios por motor', url: `${store}/selector/configurable/nuevo-c3-berlina-5-p` }],
    versionPrices: {
      'Turbo 100 S&S manual': { price: '16.340 €', priceType },
      'Hybrid 110 ë-DCS6': { price: '20.400 €', priceType },
      'ë-C3 eléctrico · autonomía urbana': { price: '17.350 €', priceType: 'El selector denomina esta opción «Eléctrico 200cv»; 200 identifica la autonomía comercial, no la potencia. Precio al contado consultado el 10/11/2026.' },
      'ë-C3 eléctrico · autonomía extendida': { price: '19.950 €', priceType: 'El selector denomina esta opción «Eléctrico 113cv». Precio al contado consultado el 10/11/2026; puede variar por acabado y disponibilidad.' },
    },
  },
  'c3-aircross': {
    basePrice: '19.290 €',
    note: 'Precio de acceso y precios por motor mostrados al contado en el configurador español de Citroën el 10/11/2026. Los descuentos condicionados a financiación se publican aparte; acabado y disponibilidad pueden cambiar el importe.',
    sources: [{ label: 'Citroën Store: configurador del C3 Aircross y precios por motor', url: `${store}/selector/configurable/nuevo-c3-aircross-berlina-5-p` }],
    versionPrices: {
      'Turbo 100 S&S manual': { price: '19.290 €', priceType },
      'Hybrid 110 ë-DCS6': { price: '23.390 €', priceType },
      'Hybrid 145 ë-DCS6': { price: '24.390 €', priceType },
      'ë-C3 Aircross eléctrico · autonomía extendida': { price: '26.240 €', priceType: 'Precio al contado consultado el 10/11/2026; el configurador lo identifica como Eléctrico 113 CV de autonomía extendida.' },
    },
  },
  c4: {
    basePrice: '23.250 €',
    note: 'Precio de acceso mostrado para C4 Hybrid 110. Los importes corresponden a los precios al contado por motor en el configurador consultado el 10/11/2026; pueden cambiar por acabado, configuración y disponibilidad.',
    sources: [{ label: 'Citroën Store: configurador del C4 y precios por motor', url: `${store}/selector/configurable/c4-berlina-5-p` }],
    versionPrices: {
      'Hybrid 110 ë-DCS6': { price: '23.250 €', priceType },
      'Hybrid 145 ë-DCS6': { price: '24.150 €', priceType },
      'ë-C4 eléctrico · batería de 50 kWh': { price: '31.540 €', priceType },
      'ë-C4 eléctrico · batería de 54 kWh': { price: '32.540 €', priceType },
    },
  },
  'c4-x': {
    basePrice: '24.040 €',
    note: 'Precio de acceso mostrado para C4 X Hybrid 145. Importes al contado por motor consultados en el configurador el 10/11/2026; comprueba el acabado y la configuración antes de comparar.',
    sources: [{ label: 'Citroën Store: configurador del C4 X y precios por motor', url: `${store}/selector/configurable/nuevo-c4-x-4-puertas` }],
    versionPrices: {
      'Hybrid 145 ë-DCS6': { price: '24.040 €', priceType },
      'ë-C4 X eléctrico · batería de 50 kWh': { price: '30.090 €', priceType },
      'ë-C4 X eléctrico · batería de 54 kWh': { price: '32.540 €', priceType },
    },
  },
  'c5-aircross': {
    basePrice: '28.990 €',
    note: 'Precio de acceso mostrado para C5 Aircross Hybrid 145. Los importes por motor se consultaron al contado en el configurador el 10/11/2026; las condiciones de entrega y disponibilidad dependen de la configuración.',
    sources: [{ label: 'Citroën Store: configurador del C5 Aircross y precios por motor', url: `${store}/selector/configurable/nuevo-c5-aircross-suv` }],
    versionPrices: {
      'Hybrid 145 ë-DCS6': { price: '28.990 €', priceType },
      'Plug-in Hybrid 225 automático': { price: '39.990 €', priceType },
      'ë-C5 Aircross eléctrico · autonomía estándar': { price: '36.890 €', priceType: 'El configurador identifica esta versión como 154 kW/210 CV y batería de 73 kWh; precio al contado consultado el 10/11/2026.' },
      'ë-C5 Aircross eléctrico · autonomía extendida': { price: '47.890 €', priceType: 'El configurador identifica esta versión como 170 kW/230 CV y batería de 97 kWh; precio al contado consultado el 10/11/2026.' },
    },
  },
  berlingo: {
    basePrice: '25.267,99 €',
    note: 'El precio de acceso mostrado corresponde a Berlingo M BlueHDi 100. Citroën Store publica importes por longitud y motor; se consultaron al contado el 10/11/2026 y pueden cambiar con el acabado y la configuración.',
    sources: [
      { label: 'Citroën Store: configurador de Berlingo M', url: `${store}/selector/configurable/berlingo-m-talla-m` },
      { label: 'Citroën Store: configurador de Berlingo XL', url: `${store}/selector/configurable/berlingo-xl-talla-xl` },
    ],
    versionPrices: {
      'BlueHDi 100 S&S': { price: 'M: 25.267,99 € · XL: 25.763,71 €', priceType: 'Precios al contado por longitud mostrados en el configurador oficial; consulta 10/11/2026.' },
      'BlueHDi 130 S&S': { price: 'M: 29.853,44 € · XL: 28.490,19 €', priceType: 'Precios al contado por longitud mostrados en el configurador oficial; consulta 10/11/2026. El importe depende del acabado preseleccionado.' },
      'ë-Berlingo eléctrico · batería de 50 kWh': { price: 'M: 28.825,91 € · XL: 29.503,91 €', priceType: 'Precios al contado por longitud mostrados en el configurador oficial; consulta 10/11/2026.' },
    },
  },
  spacetourer: {
    basePrice: '34.233,60 €',
    note: 'Importes al contado del selector de SpaceTourer M y XL consultados el 10/11/2026. Los configuradores muestran precios por longitud, motor y acabado; comprueba la configuración final y su disponibilidad antes de comprar.',
    sources: [
      { label: 'Citroën Store: configurador de SpaceTourer M', url: `${store}/selector/configurable/spacetourer-combispace-m-spacetourer-talla-m` },
      { label: 'Citroën Store: configurador de SpaceTourer XL', url: `${store}/selector/configurable/spacetourer-combispace-xl-spacetourer-talla-xl` },
    ],
    versionPrices: {
      'BlueHDi 150 S&S manual': { price: 'M: 37.586,35 € · XL: 38.450,80 €', priceType: 'Precio al contado por longitud mostrado en el selector del SpaceTourer; consulta 10/11/2026.' },
      'BlueHDi 180 S&S EAT8': { price: 'M: 40.525,51 € · XL: 41.389,98 €', priceType: 'Precio al contado por longitud mostrado en el selector del SpaceTourer; consulta 10/11/2026.' },
      'SpaceTourer eléctrico · batería de 50 kWh': { price: 'M: 34.233,60 € · XL: 34.903,60 €', priceType: 'El selector presenta esta configuración como Eléctrico 136 CV de autonomía estándar; consulta 10/11/2026.' },
      'SpaceTourer eléctrico · batería de 75 kWh': { price: 'M: 38.253,60 € · XL: 38.433,60 €', priceType: 'El selector presenta esta configuración como Eléctrico 136 CV de autonomía extendida; consulta 10/11/2026.' },
    },
  },
  holidays: {
    basePrice: '52.564,33 €',
    note: 'Precios al contado observados por motor en el configurador de Citroën Store el 10/11/2026. La fecha de entrega y la configuración pueden variar; confirma ambos datos en el pedido.',
    sources: [{ label: 'Citroën Store: configurador de Holidays y precio por motor', url: `${store}/selector/configurable/holidays-holidays?channel=b2c` }],
    versionPrices: {
      'BlueHDi 150 S&S manual': { price: '52.564,33 €', priceType: 'Precio al contado mostrado en el configurador de Citroën Store; consulta 10/11/2026. Confirma fecha de entrega y configuración.' },
      'BlueHDi 180 S&S EAT8': { price: '59.799,90 €', priceType: 'Precio al contado mostrado para Diesel 180 CV automática en Citroën Store; consulta 10/11/2026. Confirma fecha de entrega y configuración.' },
    },
  },
} as const;
