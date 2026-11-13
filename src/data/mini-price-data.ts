/** Precios y ofertas publicados por MINI España, revisados el 13/11/2026. */
type MiniPriceOption = { name: string; price?: string; priceType: string };
type MiniModelPricing = {
  basePricePending: true;
  currentOfferPrice: string;
  currentOfferLabel: string;
  note: string;
  options: MiniPriceOption[];
  sources: { label: string; url: string }[];
};

const mini = 'https://www.mini.es/es_ES';
const source = (label: string, url: string) => ({ label, url });
const listed = 'Oferta al contado publicada por MINI España para esta versión; incluye transporte, impuestos, matriculación y preentrega. Condiciones vigentes hasta el 31/12/2026; no es PVP de catálogo.';
const pending = 'PVP de catálogo individual pendiente: MINI España no muestra un importe permanente verificable en el configurador consultado el 13/11/2026. No se extrapola el precio de otra versión.';
const currentOfferLabel = 'Oferta al contado MINI, condiciones hasta 31/12/2026';

export const miniPriceData: Record<string, MiniModelPricing> = {
  'cooper-3-puertas': {
    basePricePending: true,
    currentOfferPrice: '28.530 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Cooper C, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales de Cooper One, Cooper S y John Cooper Works siguen pendientes; el importe de la oferta no se presenta como precio base.',
    options: [
      { name: 'Cooper One', priceType: pending },
      { name: 'Cooper C', price: '28.530 €', priceType: listed },
      { name: 'Cooper S · PVP de catálogo', priceType: pending },
      { name: 'John Cooper Works', priceType: pending },
    ],
    sources: [
      source('MINI España: Cooper 3 puertas y oferta al contado', `${mini}/home/range/mini-cooper-3-puertas.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: versiones y configurador del Cooper 3 puertas', `${mini}/home/range/mini-cooper-3-puertas/modelos.html`),
    ],
  },
  'cooper-electrico': {
    basePricePending: true,
    currentOfferPrice: '29.810 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Cooper E, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales del Cooper SE y John Cooper Works eléctrico siguen pendientes.',
    options: [
      { name: 'Cooper E · versión de acceso', price: '29.810 €', priceType: listed },
      { name: 'Cooper SE · PVP de catálogo', priceType: pending },
      { name: 'John Cooper Works Electric · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Cooper eléctrico, ficha y versiones', `${mini}/home/range/all-electric-mini-cooper.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y configurador del Cooper eléctrico', `${mini}/home/range/mini-cooper-electrico/modelos.html`),
    ],
  },
  'cooper-5-puertas': {
    basePricePending: true,
    currentOfferPrice: '29.530 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Cooper C de cinco puertas, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales de Cooper One y Cooper S siguen pendientes.',
    options: [
      { name: 'Cooper One', priceType: pending },
      { name: 'Cooper C', price: '29.530 €', priceType: listed },
      { name: 'Cooper S · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Cooper 5 puertas y precio anunciado', `${mini}/home/range/mini-cooper-5-puertas.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y configurador del Cooper 5 puertas', `${mini}/home/range/mini-cooper-5-puertas/modelos.html`),
    ],
  },
  'cooper-cabrio': {
    basePricePending: true,
    currentOfferPrice: '34.030 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Cooper C Cabrio, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales de Cooper S Cabrio y John Cooper Works Cabrio siguen pendientes.',
    options: [
      { name: 'Cooper C Cabrio', price: '34.030 €', priceType: listed },
      { name: 'Cooper S Cabrio · PVP de catálogo', priceType: pending },
      { name: 'John Cooper Works Cabrio · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Cooper Cabrio y gama', `${mini}/home/range/mini-cooper-convertible.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y precios del Cooper Cabrio', `${mini}/home/range/mini-cooper-convertible/modelos.html`),
    ],
  },
  aceman: {
    basePricePending: true,
    currentOfferPrice: '31.810 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Aceman E, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales de Aceman SE y John Cooper Works Aceman siguen pendientes.',
    options: [
      { name: 'Aceman E', price: '31.810 €', priceType: listed },
      { name: 'Aceman SE · PVP de catálogo', priceType: pending },
      { name: 'John Cooper Works Aceman · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Aceman eléctrico, ficha y gama', `${mini}/home/range/mini-aceman.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y configurador del Aceman', `${mini}/home/range/mini-aceman/modelos.html`),
    ],
  },
  countryman: {
    basePricePending: true,
    currentOfferPrice: '40.406,10 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Countryman C, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales de C, D diésel 48 V, S ALL4 y John Cooper Works Countryman siguen pendientes.',
    options: [
      { name: 'Countryman C 48 V', price: '40.406,10 €', priceType: listed },
      { name: 'Countryman D 48 V · PVP de catálogo', priceType: pending },
      { name: 'Countryman S ALL4 48 V · PVP de catálogo', priceType: pending },
      { name: 'John Cooper Works Countryman ALL4 · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Countryman, ficha y variantes', `${mini}/home/range/mini-countryman.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y configurador del Countryman', `${mini}/home/range/mini-countryman/opciones-precios.html`),
    ],
  },
  'countryman-electrico': {
    basePricePending: true,
    currentOfferPrice: '37.410 €',
    currentOfferLabel,
    note: 'El configurador consultado no muestra un PVP de catálogo permanente. MINI publica una oferta al contado para Countryman E, con transporte, impuestos, matriculación y preentrega incluidos, vigente hasta el 31/12/2026. Los PVP individuales del Countryman E y SE ALL4 siguen pendientes.',
    options: [
      { name: 'Countryman E', price: '37.410 €', priceType: listed },
      { name: 'Countryman SE ALL4 · PVP de catálogo', priceType: pending },
    ],
    sources: [
      source('MINI España: Countryman eléctrico, ficha y gama', `${mini}/home/range/all-electric-mini-countryman.html`),
      source('MINI España: ofertas y precio de contado con vigencia hasta diciembre de 2026', `${mini}/home.html`),
      source('MINI España: modelos y configurador del Countryman eléctrico', `${mini}/home/range/mini-countryman-electrico/modelos.html`),
    ],
  },
};
