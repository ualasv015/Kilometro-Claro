/** Precios base publicados por Changan España; las campañas condicionadas se documentan aparte. */
export const changanPriceData = {
  'deepal-s05': {
    basePrice: '33.990 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio Base por versión',
    note: 'PVP recomendados consultados el 10/11/2026 en los configuradores oficiales de Changan España. Incluyen IVA, impuesto de matriculación calculado al tipo general y transporte; no incluyen matriculación ni preentrega. El precio base corresponde al S05 PHEV Pro. La portada muestra además el PHEV Limited Edition desde 28.990 € para unidades en stock con Plan Auto+, pero la página enlazada conserva condiciones de financiación que caducaron el 31/10/2026; no tratamos esa cifra como una oferta vigente verificada.',
    sources: [
      { label: 'Configurador y precios del Changan Deepal S05 eléctrico', url: 'https://www.changaneurope.com/es/configurador/deepal-s05' },
      { label: 'Configurador y precios del Changan Deepal S05 PHEV', url: 'https://www.changaneurope.com/es/configurador/s05-phev' },
      { label: 'Promoción del Changan Deepal S05 PHEV y condiciones publicadas', url: 'https://www.changaneurope.com/es/promociones/changan-deepal-s05-limited-edition' },
    ],
    versionPrices: {
      'BEV RWD Pro': { price: '36.990 €', priceType: 'PVPR en el configurador oficial; sin campaña ni ayudas.' },
      'BEV RWD Max': { price: '39.990 €', priceType: 'PVPR en el configurador oficial; sin campaña ni ayudas.' },
      'BEV 4WD Max': { price: '42.990 €', priceType: 'PVPR en el configurador oficial; sin campaña ni ayudas.' },
      'PHEV Pro': { price: '33.990 €', priceType: 'PVPR en el configurador oficial; sin campaña ni ayudas.' },
      'PHEV Limited Edition': { price: '37.990 €', priceType: 'PVPR en el configurador oficial; sin campaña ni ayudas.' },
    },
  },
  'deepal-s07': {
    basePrice: '46.990 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio Base por motorización',
    note: 'PVP recomendado consultado el 10/11/2026 en el configurador oficial español. El acabado Standard aparece por 46.990 € e incluye IVA, impuesto de matriculación calculado al tipo general y transporte; no incluye matriculación ni preentrega. La ficha técnica separada aún conserva cifras de la versión anterior, por lo que los datos MY26 se contrastan con la página y el comunicado de actualización de Changan.',
    sources: [
      { label: 'Configurador y precio del Changan Deepal S07', url: 'https://www.changaneurope.com/es/configurador/deepal-s07' },
      { label: 'Catálogo y tarifa oficial Deepal S07 MY26, actualizado en septiembre de 2026', url: 'https://www.changaneurope.com/Portals/8/adam/ContentBlocks/NzKa8OdqNUeCz4V0NNWqog/Path/Cat%C3%A1logo_CHANGAN_DEEPAL_S07_MY26_Sep_2026.pdf' },
    ],
    versionPrices: {
      'S07 MY26 · Standard': { price: '46.990 €', priceType: 'PVPR recomendado del acabado Standard en el configurador español; sin gastos de matriculación ni preentrega.' },
    },
  },
} as const;
