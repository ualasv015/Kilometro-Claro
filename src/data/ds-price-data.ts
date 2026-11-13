/**
 * Precios al contado observados en DS Store el 6/11/2026.
 * El Store anuncia campañas temporales y no aporta en todas las fichas un PVP
 * de tarifa sin condiciones; por eso estos importes no se etiquetan como PVP base.
 */
const store = 'https://store.dsautomobiles.es';
const configuratorPriceType = 'Precio al contado mostrado en el configurador DS Store; consulta 6/11/2026. Puede variar por acabado, equipamiento, stock y campañas. No se presenta como PVP base permanente.';
const promotionalPriceType = 'Precio al contado mostrado por DS Store en una oferta promocional vigente hasta fin de mes; consulta 6/11/2026. Sujeto a configuración, disponibilidad y condiciones de campaña; no es PVP base.';

export const dsPriceData = {
  ds3: {
    currentOfferPrice: '33.752,96 €',
    currentOfferLabel: 'Al contado en configurador · Hybrid 145 · consulta 6/11/2026',
    note: 'DS Store muestra estos importes al contado para las motorizaciones del DS 3. La portada de compra también publica ofertas temporales para configuraciones concretas. No se ha podido verificar un PVP de tarifa sin promociones; comprueba acabado, campañas y condiciones antes de comparar. Consulta: 6/11/2026.',
    sourceUrl: `${store}/selector/configurable/ds-3-suv`,
    priceType: configuratorPriceType,
    versionPrices: {
      'HYBRID 145': { price: '33.752,96 €', priceType: configuratorPriceType },
      'E-TENSE': { price: '40.687,95 €', priceType: configuratorPriceType },
    },
  },
  n4: {
    currentOfferPrice: '37.457,96 €',
    currentOfferLabel: 'Al contado en configurador · Hybrid 145 · consulta 6/11/2026',
    note: 'La portada de DS Store identifica el precio de acceso del N°4 como promocional y válido hasta fin de mes; el configurador muestra estos importes al contado por motor. No se ha verificado un PVP de tarifa sin promociones. El selector presenta además una entrada «DIESEL 130CV» a 42.000,01 € al cambiar de configuración, separada de BlueHDi 130; DS no aclara en la ficha técnica española si es otra motorización o una combinación de acabado/stock, así que no se equipara ni se duplica como motor. Consulta: 6/11/2026.',
    sourceUrl: `${store}/selector/configurable/no4-berlina-5-p`,
    priceType: promotionalPriceType,
    versionPrices: {
      'HYBRID 145': { price: '37.457,96 €', priceType: configuratorPriceType },
      'BlueHDi 130 Automático': { price: '38.504,05 €', priceType: configuratorPriceType },
      'Plug-in Hybrid 240': { price: '43.965,45 €', priceType: configuratorPriceType },
      'E-TENSE 215': { price: '43.917,95 €', priceType: configuratorPriceType },
    },
  },
  ds7: {
    currentOfferPrice: '53.475,65 €',
    currentOfferLabel: 'Oferta de unidad nueva en stock · BlueHDi 130 · vigencia fin de mes',
    note: 'DS Store publica 53.475,65 € al contado para una unidad nueva DS 7 DS Performance Line BlueHDi 130 en stock, con oferta válida hasta fin de mes. Es un precio de una configuración disponible, no un PVP base general del modelo. La disponibilidad puede terminar antes; consulta el inventario oficial. Consulta: 6/11/2026.',
    sourceUrl: `${store}/configurable`,
    priceType: promotionalPriceType,
    versionPrices: {
      'BlueHDi 130 Automático': { price: '53.475,65 €', priceType: 'Oferta al contado para la unidad DS 7 DS Performance Line Diesel 130 CV anunciada en stock por DS Store; válida hasta fin de mes según la consulta del 6/11/2026.' },
    },
  },
  n7: {
    currentOfferPrice: '43.727,95 €',
    currentOfferLabel: 'Oferta promocional recomendada · Hybrid 145 · vigencia fin de mes',
    note: 'DS Store identifica expresamente 43.727,95 € como precio promocional recomendado del N°7 Hybrid 145 y señala que es válido hasta fin de mes. El configurador lista importes al contado para las cuatro motorizaciones; no se ha encontrado una tarifa PVP sin promociones. Los precios de las versiones eléctricas dependen del acabado seleccionado. Consulta: 6/11/2026.',
    sourceUrl: `${store}/selector/configurable/no7-suv`,
    priceType: promotionalPriceType,
    versionPrices: {
      'HYBRID 145': { price: '43.727,95 €', priceType: promotionalPriceType },
      'E-TENSE FWD': { price: '46.563,54 €', priceType: 'Precio al contado mostrado en la selección del configurador DS Store; consulta 6/11/2026. El Store también publica campañas temporales; no se presenta como PVP base sin promoción.' },
      'E-TENSE FWD Long Range': { price: '51.921,55 €', priceType: 'Precio al contado mostrado en la selección del configurador DS Store; consulta 6/11/2026. El Store también publica campañas temporales; no se presenta como PVP base sin promoción.' },
      'E-TENSE AWD Long Range': { price: '64.611,54 €', priceType: 'Precio al contado mostrado en la selección del configurador DS Store; consulta 6/11/2026. Puede cambiar al modificar el acabado; no se presenta como PVP base sin promoción.' },
    },
  },
  n8: {
    currentOfferPrice: '58.100,00 €',
    currentOfferLabel: 'Oferta promocional recomendada · FWD 230 · vigencia fin de mes',
    note: 'DS Store identifica expresamente 58.100 € como precio promocional recomendado del N°8 Pallas FWD 230 y señala que es válido hasta fin de mes. El configurador lista importes al contado para las tres motorizaciones, pero no se ha encontrado una tarifa PVP sin promociones. Los precios pueden cambiar según acabado y condiciones. Consulta: 6/11/2026.',
    sourceUrl: `${store}/selector/configurable/no8-berlina-5-puertas`,
    priceType: promotionalPriceType,
    versionPrices: {
      'E-TENSE FWD': { price: '58.100,00 €', priceType: promotionalPriceType },
      'E-TENSE FWD Long Range': { price: '63.800,00 €', priceType: 'Precio al contado mostrado en el configurador DS Store; consulta 6/11/2026. No se presenta como PVP base sin promoción.' },
      'E-TENSE AWD Long Range': { price: '72.334,47 €', priceType: 'Precio al contado mostrado en el configurador DS Store; consulta 6/11/2026. Puede cambiar al modificar el acabado; no se presenta como PVP base sin promoción.' },
    },
  },
} as const;
