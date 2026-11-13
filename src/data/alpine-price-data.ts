export type AlpineVersionPrice = {
  price: string;
  priceType: string;
};

export type AlpineModelPricing = {
  basePrice: string;
  note: string;
  sourceUrl: string;
  versionPrices: Record<string, AlpineVersionPrice>;
};

const checked = 'Precios «desde» publicados por Alpine España y consultados el 6/11/2026. El importe mostrado corresponde a la versión indicada; opciones, stock del concesionario y ofertas pueden modificar el precio final. No se mezclan campañas de financiación con el precio base.';

export const alpinePriceData: Record<string, AlpineModelPricing> = {
  a110: {
    basePrice: '69.800 €',
    sourceUrl: 'https://www.alpinecars.es/gama/a110.html',
    note: `${checked} Alpine indica que el A110 ya no se fabrica bajo pedido y que quedan últimas unidades en sus Alpine Store. Los importes de A110 GTS y R 70 proceden de sus páginas oficiales de versión; no representan el precio de una unidad de stock concreta, que puede incluir opciones.`,
    versionPrices: {
      A110: {
        price: '69.800 €',
        priceType: 'Precio anunciado desde por Alpine España para el A110; últimas unidades en stock, sin pedido de fábrica.',
      },
      'A110 GTS': {
        price: '83.400 €',
        priceType: 'Precio anunciado desde por Alpine España para el A110 GTS; consulta el stock de Alpine Store.',
      },
      'A110 R 70': {
        price: '126.333 €',
        priceType: 'Precio anunciado desde por Alpine España para la serie limitada R 70; disponibilidad sujeta a stock.',
      },
    },
  },
  a290: {
    basePrice: '38.100 €',
    sourceUrl: 'https://www.alpinecars.es/modelos-electricos/a290.html',
    note: `${checked} La página española consultada enumera cinco versiones del A290. El precio de acceso del modelo corresponde al GT; las otras versiones conservan el precio «desde» publicado individualmente por Alpine.`,
    versionPrices: {
      GT: { price: '38.100 €', priceType: 'Precio anunciado desde por Alpine España.' },
      'GT Collection': { price: '39.800 €', priceType: 'Precio anunciado desde por Alpine España.' },
      'GT Performance': { price: '41.300 €', priceType: 'Precio anunciado desde por Alpine España.' },
      'GT Performance Collection': { price: '43.000 €', priceType: 'Precio anunciado desde por Alpine España.' },
      GTS: { price: '44.100 €', priceType: 'Precio anunciado desde por Alpine España.' },
    },
  },
  a390: {
    basePrice: '67.500 €',
    sourceUrl: 'https://www.alpinecars.es/modelos-electricos/a390.html',
    note: `${checked} El precio desde del A390 GT coincide con el comunicado oficial de Alpine, que indica impuestos incluidos y posibles ayudas excluidas. El GTS tiene su propio precio desde publicado en la gama española.`,
    versionPrices: {
      'GT · tres motores': { price: '67.500 €', priceType: 'Precio anunciado desde por Alpine España; el comunicado de lanzamiento indica impuestos incluidos y posibles ayudas excluidas.' },
      'GTS · tres motores': { price: '78.000 €', priceType: 'Precio anunciado desde por Alpine España.' },
    },
  },
};
