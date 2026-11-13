const leapmotor = 'https://www.leapmotor.net/es-es';

const offerSource = (label: string, path: string) => ({ label, url: `${leapmotor}${path}` });
const offerTerms = (model: string, conditions: string) =>
  `Oferta publicada por Leapmotor España y consultada el 9/11/2026 para ${model}. ${conditions} Es un precio promocional condicionado, no un PVP base de tarifa sin campañas ni ayudas.`;

/** La gama publica campañas con ayudas; los PVP base no publicados se registran en precios-pendientes.txt. */
export const leapmotorPriceData = {
  t03: {
    currentOfferPrice: '13.300 €',
    currentOfferLabel: 'Oferta desde · Auto+ y CAE',
    note: 'Leapmotor anuncia 13.300 € para el T03 eléctrico de 37,3 kWh Design, con IVA, transporte y promoción incluidos y descontando 3.375 € del Plan Auto+ y 900 € de CAE. La oferta consultada es para unidades MY26 en stock y tiene vigencia hasta el 30/11/2026; la concesión de las ayudas y el CAE está sujeta a requisitos. El PVP base sin esas condiciones no se ha podido verificar.',
    sources: [offerSource('Oferta oficial del Leapmotor T03', '/modelos/t03')],
    versionPrices: {
      'T03 eléctrico · 37,3 kWh': {
        price: '13.300 €',
        priceType: offerTerms('un T03 37,3 kWh Design MY26 en stock', 'Incluye promoción y descuenta 3.375 € de Auto+ y 900 € de CAE. Vigente hasta 30/11/2026; sujeto a requisitos y disponibilidad de unidades.'),
      },
    },
  },
  b03x: {
    currentOfferPrice: '17.500 €',
    currentOfferLabel: 'Oferta desde · Auto+ y CAE',
    note: 'El importe corresponde a la oferta de un B03X BEV de 39,8 kWh LifePro, con IVA, transporte y promoción incluidos, descontando 3.375 € de Auto+ y 900 € de CAE. Leapmotor indica vigencia hasta el 30/11/2026. No se encontró en la ficha pública un precio para ProMax ni un PVP de tarifa sin campañas.',
    sources: [offerSource('Oferta oficial del Leapmotor B03X', '/modelos/b03x')],
    versionPrices: {
      'Pro · 39,8 kWh': {
        price: '17.500 €',
        priceType: offerTerms('un B03X BEV 39,8 kWh LifePro', 'Incluye promoción y descuenta 3.375 € de Auto+ y 900 € de CAE. Vigente hasta 30/11/2026; sujeto a requisitos y disponibilidad de las ayudas.'),
      },
    },
  },
  b05: {
    currentOfferPrice: '19.400 €',
    currentOfferLabel: 'Oferta desde · Auto+ y CAE',
    note: 'Leapmotor publica 19.400 € para un B05 100 % eléctrico de 56,2 kWh LifePro. El precio incluye IVA, transporte y promoción, y descuenta 3.375 € de Auto+ y 900 € de CAE. La oferta consultada vence el 30/11/2026 y depende de que se cumplan las condiciones de las ayudas. No se localizó un precio individual para ProMax ni el PVP base sin campañas.',
    sources: [offerSource('Oferta oficial del Leapmotor B05', '/modelos/b05')],
    versionPrices: {
      'Pro · 56,2 kWh': {
        price: '19.400 €',
        priceType: offerTerms('un B05 eléctrico de 56,2 kWh LifePro', 'Incluye promoción y descuenta 3.375 € de Auto+ y 900 € de CAE. Vigente hasta 30/11/2026; sujeto a requisitos y disponibilidad de las ayudas.'),
      },
    },
  },
  b10: {
    currentOfferPrice: '20.700 €',
    currentOfferLabel: 'Oferta financiando · Plan Auto+',
    note: 'El precio de acceso publicado corresponde al B10 REEV Hybrid 18,8 kWh Life: 20.700 € financiando con Stellantis Financial Services, tras descontar 2.250 € de Auto+. La oferta requiere financiar al menos 5.000 € durante un mínimo de 36 meses; no incluye comisión de apertura ni intereses. Leapmotor publica también un precio al contado de 23.100 €, con oferta vigente hasta el 30/11/2026. Para el B10 BEV de 56,2 kWh publica una oferta distinta de 23.900 €, que descuenta Auto+ y 900 € de CAE. Ninguno de estos importes se presenta como PVP base de tarifa.',
    sources: [
      offerSource('Ofertas oficiales del Leapmotor B10 eléctrico', '/modelos/b10'),
      offerSource('Precio al contado y condiciones del B10 REEV Hybrid', '/modelos/b10-hibrido'),
    ],
    versionPrices: {
      'BEV Life Pro · 56,2 kWh': {
        price: '23.900 €',
        priceType: offerTerms('un B10 BEV 56,2 kWh Life Pro', 'Incluye IVA, transporte y promoción y descuenta 3.375 € de Auto+ y 900 € de CAE. Vigente hasta 30/11/2026; sujeto a los requisitos de las ayudas.'),
      },
      'REEV Hybrid Life · 18,8 kWh': {
        price: '23.100 € al contado',
        priceType: offerTerms('un B10 REEV Hybrid 18,8 kWh Life', 'Leapmotor publica además 20.700 € financiando, tras descontar 2.250 € de Auto+, sujeto a financiar al menos 5.000 € durante 36 meses. El contado no requiere esa financiación. Oferta vigente hasta 30/11/2026.'),
      },
    },
  },
  c10: {
    currentOfferPrice: '29.600 €',
    currentOfferLabel: 'Oferta desde · Auto+ y CAE',
    note: 'La web española anuncia desde 29.600 € para un C10 BEV 81,9 kWh Design ProMax, incluyendo promoción y descontando 3.375 € de Auto+ y 900 € de CAE, con vigencia hasta el 30/11/2026. La misma página publica en otra nota 32.700 € para un C10 BEV 81,9 kWh Design Pro Max con las mismas ayudas; al no explicar la diferencia, indicamos ambas referencias y recomendamos confirmar la configuración y el importe con Leapmotor. También aparecen ofertas de 34.900 € para ProMax AWD y 30.900 € para REEV Hybrid. Son campañas con ayudas, no PVP base sin condiciones.',
    sources: [
      offerSource('Ofertas oficiales del Leapmotor C10 eléctrico', '/modelos/c10'),
      offerSource('Oferta oficial del C10 ProMax AWD', '/modelos/c10-promax-awd'),
      offerSource('Oferta oficial del C10 REEV Hybrid', '/modelos/c10-reevhybrid'),
    ],
    versionPrices: {
      'BEV ProMax · 81,9 kWh': {
        price: '29.600 € / 32.700 €*',
        priceType: 'La web española muestra los dos importes en notas distintas para un C10 BEV 81,9 kWh Design ProMax, con Auto+ y CAE descontados y vigencia hasta 30/11/2026. Leapmotor no aclara la diferencia entre ambas referencias; confirma acabado, condiciones y precio antes de contratar. No es PVP base.' ,
      },
      'BEV ProMax AWD · 81,9 kWh': {
        price: '34.900 €',
        priceType: offerTerms('un C10 BEV 81,9 kWh Design ProMax AWD', 'Incluye promoción y descuenta 3.375 € de Auto+ y 900 € de CAE. La concesión de las ayudas y venta del CAE está sujeta a requisitos.'),
      },
      'REEV Hybrid · 28,4 kWh': {
        price: '30.900 €',
        priceType: offerTerms('un C10 Life REEV Hybrid 28,4 kWh', 'Incluye promoción y descuenta 2.250 € de Auto+. Oferta consultada con vigencia hasta 30/11/2026 y sujeta a requisitos de la ayuda.'),
      },
    },
  },
} as const;
