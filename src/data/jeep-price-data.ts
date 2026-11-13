type JeepVersionPrice = { price?: string; priceType: string };
type JeepOffer = { name: string; price: string; priceType: string };

type JeepModelPricing = {
  basePrice?: string;
  versionPrices: Record<string, JeepVersionPrice>;
  offers: JeepOffer[];
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  note: string;
  sources: { label: string; url: string }[];
};

const jeep = 'https://www.jeep.es';
const configurator = `${jeep}/omni/configurador`;
const offersUrl = 'https://ofertas.jeep.es/particulares';

export const jeepPriceData: Record<string, JeepModelPricing> = {
  avenger: {
    basePrice: '26.000 €',
    versionPrices: {
      '1.2 GSE T3 100 MT FWD': {
        price: 'Desde 26.000 € · Longitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
      '1.2 e-Hybrid 110 DCT6 FWD': {
        price: 'Desde 28.001 € · Longitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
      '1.2 4xe Hybrid 145 DCT6 eAWD': {
        price: 'Desde 34.000 € · Upland',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
      'Full Electric 54 kWh': {
        price: 'Desde 38.000 € · Longitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
    },
    offers: [
      { name: 'Oferta al contado Avenger Gasolina · Summit', price: '25.075,74 €', priceType: 'Precio al contado publicado junto a oferta financiera, válida hasta el 30/11/2026.' },
      { name: 'Oferta al contado Avenger e-Hybrid · Summit', price: '26.736,59 €', priceType: 'Precio al contado publicado junto a oferta financiera, válida hasta el 30/11/2026.' },
      { name: 'Oferta al contado Avenger Full Electric · Summit', price: '33.224,15 €', priceType: 'Promoción eléctrica con posible ayuda Auto+ anticipada en la operación; válida hasta el 13/11/2026.' },
      { name: 'Oferta al contado Avenger 4xe · 85th Anniversary', price: '31.068,11 €', priceType: 'Precio al contado publicado junto a oferta financiera, válida hasta el 30/11/2026.' },
    ],
    currentOfferPrice: '25.075,74 €',
    currentOfferLabel: 'Oferta al contado Avenger Gasolina Summit · hasta 30/11/2026',
    note: 'Consulta del 13 de noviembre de 2026. El configurador oficial muestra el Avenger desde 26.000 €: gasolina 100 MT Longitude, Full Electric Longitude desde 38.000 €, e-Hybrid Longitude desde 28.001 € y 4xe Hybrid Upland desde 34.000 €. Se usa «Precio Catálogo desde» del configurador, sin gastos de matriculación; la tarifa MY27 del 12 de mayo aún recogía 28.000 € para e-Hybrid, un euro menos que la cifra actual. Las ofertas particulares se separan del PVP base y se indican con acabado y vigencia.',
    sources: [
      { label: 'Jeep España: catálogo actual de modelos y motorizaciones', url: `${jeep}/catalogo` },
      { label: 'Configurador oficial Jeep España: «Precio Catálogo desde»', url: configurator },
      { label: 'Jeep Avenger MY27: tarifa y ficha técnica oficial (12/05/2026)', url: `${jeep}/content/dam/jeep/es/models/pdf/Avenger-MY27.pdf` },
      { label: 'Ofertas oficiales Jeep para particulares: condiciones y precios al contado', url: offersUrl },
    ],
  },
  compass: {
    basePrice: '43.200 €',
    versionPrices: {
      '1.2 e-Hybrid 145 DCT6 FWD': {
        price: 'Desde 43.200 € · Altitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
      'Plug-In Hybrid 225 FWD': {
        price: 'Desde 46.600 € · Altitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026; incluye IVA, transporte e IEMT y excluye gastos de matriculación.',
      },
      'Full Electric Standard Range FWD': {
        price: 'Desde 50.600 € · Altitude',
        priceType: 'Precio Catálogo desde del configurador Jeep España para Full Electric Altitude, consultado el 13/11/2026. Se atribuye al Standard Range 74 kWh/213 CV; no se traslada al Long Range.',
      },
      'Full Electric Long Range FWD': {
        priceType: 'Pendiente: Jeep incluye esta motorización en la gama, pero no publica un precio individual separable del Standard Range en la ficha española consultada.',
      },
      '4xe Full Electric AWD': {
        price: 'Desde 56.849 € · Upland/Overland',
        priceType: 'Precio Catálogo desde del configurador Jeep España, consultado el 13/11/2026. La tarjeta agrupa dos acabados y no desglosa el PVP individual de Upland y Overland.',
      },
    },
    offers: [
      { name: 'Oferta al contado Compass e-Hybrid · Summit', price: '35.292,65 €', priceType: 'Precio al contado publicado junto a oferta financiera, válida hasta el 30/11/2026.' },
      { name: 'Oferta al contado Compass Plug-In Hybrid · Summit', price: '41.328,16 €', priceType: 'Promoción eléctrica con posible ayuda Auto+ anticipada en la operación; válida hasta el 13/11/2026.' },
      { name: 'Oferta al contado Compass Full Electric Standard Range · Summit', price: '43.404,34 €', priceType: 'Promoción eléctrica con posible ayuda Auto+ anticipada en la operación; válida hasta el 13/11/2026.' },
      { name: 'Oferta al contado Compass 4xe Full Electric · Overland', price: '51.301,90 €', priceType: 'Promoción eléctrica con posible ayuda Auto+ anticipada en la operación; válida hasta el 13/11/2026.' },
    ],
    currentOfferPrice: '35.292,65 €',
    currentOfferLabel: 'Oferta al contado Compass e-Hybrid Summit · hasta 30/11/2026',
    note: 'Consulta del 13 de noviembre de 2026. El Compass parte de 43.200 € en e-Hybrid Altitude; el Plug-In Hybrid Altitude aparece desde 46.600 €. El Full Electric Altitude se anuncia desde 50.600 € para dos motorizaciones, por lo que no se atribuye ese importe al Long Range de 231 CV. El configurador sitúa el Compass 4xe Full Electric desde 56.849 € para Upland u Overland, sin desglose individual por acabado. Las ofertas al contado se muestran aparte: algunas anticipan una posible ayuda Auto+ y vencen el 13/11/2026; las demás indican la fecha de fin y acabado publicados. No se usa como PVP el precio de una financiación con ayudas anticipadas.',
    sources: [
      { label: 'Jeep España: catálogo actual y configuraciones disponibles', url: `${jeep}/catalogo` },
      { label: 'Configurador oficial Jeep España: «Precio Catálogo desde»', url: configurator },
      { label: 'Jeep Compass e-Hybrid: precios desde y motorización', url: `${jeep}/nuevo-jeep-compass/e-hybrid` },
      { label: 'Jeep Compass Plug-In Hybrid: precios desde y motorización', url: `${jeep}/nuevo-jeep-compass/plugin-e-hybrid` },
      { label: 'Jeep Compass Full Electric: precio de Altitude y datos Standard Range', url: `${jeep}/nuevo-jeep-compass/full-electric` },
      { label: 'Jeep Compass 4xe Full Electric: ficha técnica y condiciones comerciales publicadas', url: `${jeep}/nuevo-jeep-compass/4xe-electrico` },
      { label: 'Tarifa oficial Jeep Compass MY26: PVP y especificaciones (febrero de 2026)', url: `${jeep}/content/dam/jeep/es/models/pdf/Compass-MY26.pdf` },
      { label: 'Ofertas oficiales Jeep para particulares: condiciones financieras y ayudas anunciadas', url: offersUrl },
    ],
  },
};
