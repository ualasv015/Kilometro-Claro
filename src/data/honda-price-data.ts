/** PVP de referencia y ofertas publicados por Honda España, consultados el 13/11/2026. */
type HondaPriceOption = { name: string; price?: string; priceType: string };
type HondaModelPricing = {
  basePrice: string;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  note: string;
  options: HondaPriceOption[];
  sources: { label: string; url: string }[];
};

const hondaNew = 'https://www.honda.es/cars/new';
const hondaOffers = 'https://www.honda.es/cars/offers.html';
const source = (model: string, slug: string) => ({
  label: `Honda España: ${model}, especificaciones, precios y acabados (consultado el 13/11/2026)`,
  url: `${hondaNew}/${slug}/specifications.html`,
});
const option = (name: string, base: string, offer?: string, priceType?: string): HondaPriceOption => ({
  name,
  price: offer ? `${base} € PVP de referencia · ${offer} € oferta al contado` : `${base} € PVP de referencia`,
  priceType: priceType ?? 'PVP de referencia de Honda España; las ofertas al contado indicadas son válidas hasta el 30/11/2026 en Península y Baleares.',
});

export const hondaPriceData: Record<string, HondaModelPricing> = {
  jazz: {
    basePrice: '28.900 €',
    currentOfferPrice: '24.700 €',
    currentOfferLabel: 'Oferta al contado Honda hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. La ficha indica que incluye IVA, transporte y aportaciones del concesionario y de la marca; excluye pintura metalizada y matriculación. Los precios consultados corresponden a Península y Baleares. Confirma la oferta y el acabado antes de comprar.',
    options: [
      option('Advance · e:HEV 1.5', '28.900', '24.700'),
      option('Sport · e:HEV 1.5', '30.450', '26.250'),
    ],
    sources: [source('Honda Jazz', 'jazz-hybrid'), { label: 'Honda España: oferta Honda Options y condiciones', url: hondaOffers }],
  },
  'jazz-crosstar': {
    basePrice: '30.650 €',
    currentOfferPrice: '26.850 €',
    currentOfferLabel: 'Oferta al contado Honda hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. La ficha indica que incluye IVA, transporte y aportaciones del concesionario y de la marca; excluye pintura metalizada y matriculación. Los precios consultados corresponden a Península y Baleares. Confirma la oferta y el acabado antes de comprar.',
    options: [option('Crosstar · e:HEV 1.5', '30.650', '26.850')],
    sources: [source('Honda Jazz Crosstar', 'jazz-crosstar-advance-hybrid'), { label: 'Honda España: oferta Honda Options y condiciones', url: hondaOffers }],
  },
  prelude: {
    basePrice: '49.600 €',
    currentOfferPrice: '46.000 €',
    currentOfferLabel: 'Oferta Advance al contado hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. La ficha indica que incluye IVA y transporte; excluye pintura metalizada y matriculación. Los precios consultados corresponden a Península y Baleares. Confirma la oferta y el acabado antes de comprar.',
    options: [
      option('Advance · e:HEV 2.0', '49.600', '46.000'),
      { name: 'Limited Edition · e:HEV 2.0', priceType: 'Disponibilidad y precio actual pendientes: la ficha y el configurador consultados no publican esta versión.' },
    ],
    sources: [source('Honda Prelude', 'prelude-hybrid'), { label: 'Honda España: oferta Honda Options para Prelude y condiciones', url: `${hondaNew}/prelude-hybrid/offers.html` }],
  },
  civic: {
    basePrice: '36.400 €',
    currentOfferPrice: '34.000 €',
    currentOfferLabel: 'Oferta al contado Honda hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. La ficha indica que incluye IVA, transporte y aportaciones del concesionario y de la marca; excluye pintura metalizada y matriculación. Los precios consultados corresponden a Península y Baleares. Confirma la oferta y el acabado antes de comprar.',
    options: [
      option('Elegance · e:HEV 2.0', '36.400', '34.000'),
      option('Sport · e:HEV 2.0', '37.400', '36.200'),
      option('Advance · e:HEV 2.0', '39.900', '38.900'),
    ],
    sources: [source('Honda Civic', 'civic-hybrid'), { label: 'Honda España: oferta Honda Options y condiciones', url: hondaOffers }],
  },
  'hr-v': {
    basePrice: '35.360 €',
    currentOfferPrice: '34.560 €',
    currentOfferLabel: 'Oferta Advance al contado hasta 30/11/2026',
    note: 'Consulta: 13/11/2026. El PVP de referencia del HR-V Elegance es 35.360 €. La oferta al contado para Elegance no se registra como vigente porque la ficha de especificaciones muestra 31.310 €, mientras que la página Honda Options publica 31.210 € al contado y 29.460 € financiando; ambas indican vigencia hasta el 30/11/2026. Las ofertas verificables de Advance, Advance Sport y Advance Style Plus sí se muestran. Importes en Península y Baleares; no incluyen pintura metalizada ni gastos de matriculación.',
    options: [
      option('Elegance · e:HEV 1.5', '35.360', undefined, 'Oferta al contado pendiente: la ficha muestra 31.310 € y Honda Options 31.210 €; no asignar uno de los importes sin aclaración.'),
      option('Advance · e:HEV 1.5', '38.110', '34.560'),
      option('Advance Sport · e:HEV 1.5', '38.810', '35.260'),
      option('Advance Style Plus · e:HEV 1.5', '42.110', '38.560'),
    ],
    sources: [
      source('Honda HR-V', 'hr-v-hybrid'),
      { label: 'Honda España: Honda Options HR-V Elegance y condiciones', url: hondaOffers },
      { label: 'Honda España: ofertas Honda Options HR-V', url: `${hondaNew}/hr-v-hybrid/offers.html` },
    ],
  },
  'zr-v': {
    basePrice: '45.050 €',
    currentOfferPrice: '38.850 €',
    currentOfferLabel: 'Oferta al contado Honda hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. La ficha indica que incluye IVA, transporte, impuesto de matriculación y aportaciones del concesionario y de la marca; excluye pintura metalizada y matriculación. Los precios consultados corresponden a Península y Baleares. Confirma la oferta y el acabado antes de comprar.',
    options: [
      option('Sport · e:HEV 2.0', '45.050', '38.850'),
      option('Advance · e:HEV 2.0', '47.150', '42.720'),
    ],
    sources: [source('Honda ZR-V', 'zr-v-hybrid-suv'), { label: 'Honda España: oferta Honda Options y condiciones', url: hondaOffers }],
  },
  'cr-v': {
    basePrice: '51.645 €',
    currentOfferPrice: '46.745 €',
    currentOfferLabel: 'Oferta al contado Honda hasta 30/11/2026',
    note: 'Honda muestra el PVP de referencia y, junto a él, un precio promocional publicado como PVP, válido hasta el 30/11/2026. Las fichas de e:HEV y e:PHEV indican IVA, transporte, impuesto de matriculación y aportaciones del concesionario y de la marca incluidos; pintura metalizada y matriculación no incluidos. Los precios consultados corresponden a Península y Baleares. El PHEV requiere recarga externa para aprovechar su autonomía eléctrica. Confirma oferta, acabado y tracción antes de comprar.',
    options: [
      option('Elegance Full Hybrid 4x2 · e:HEV 2.0', '51.645', '46.745'),
      option('Advance Full Hybrid 4x4 · e:HEV 2.0', '56.665', '52.465'),
      option('Elegance Tech Plug-in Hybrid 4x2 · e:PHEV 2.0', '59.360', '50.960'),
      option('Advance Tech Plug-in Hybrid 4x2 · e:PHEV 2.0', '61.860', '53.460'),
    ],
    sources: [
      source('Honda CR-V Full Hybrid', 'cr-v-hybrid-suv'),
      source('Honda CR-V Plug-in Hybrid', 'cr-v-plug-in-hybrid-suv'),
      { label: 'Honda España: ofertas Honda Options CR-V y condiciones', url: hondaOffers },
    ],
  },
};
