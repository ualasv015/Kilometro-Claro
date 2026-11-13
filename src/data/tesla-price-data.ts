type TeslaPrice = { price: string; priceType: string };
type TeslaModelPriceData = {
  basePrice: string;
  note: string;
  source: { label: string; url: string };
  versionPrices: Record<string, TeslaPrice>;
};

const reviewed = 'consulta 11 de noviembre de 2026';
const priceType = `Precio del vehículo publicado por Tesla España, ${reviewed}.`;

export const teslaPriceData: Record<string, TeslaModelPriceData> = {
  'model-3': {
    basePrice: '36.990 €',
    note: 'Son los precios del vehículo que muestra el configurador español, antes de opciones y financiación. En el desglose, Tesla presenta aparte una comisión de destino y documentación de 980 €. No se aplican aquí Tesla Bonus, ayudas públicas, descuentos de inventario ni condiciones financieras. El precio y la disponibilidad pueden cambiar; confirma el importe final en Tesla antes de realizar el pedido.',
    source: {
      label: `Tesla España: configurador y precios del Model 3, ${reviewed}`,
      url: 'https://www.tesla.com/es_es/model3/design?redirect=no',
    },
    versionPrices: {
      'Tracción trasera': { price: '36.990 €', priceType },
      'Premium de gran autonomía · tracción trasera': { price: '44.990 €', priceType },
      'Premium de gran autonomía · tracción integral': { price: '48.990 €', priceType },
      'Performance · tracción integral': { price: '57.490 €', priceType },
    },
  },
  'model-y': {
    basePrice: '40.990 €',
    note: 'Son los precios del vehículo que muestra el configurador español, antes de opciones y financiación. En el desglose, Tesla presenta aparte una comisión de destino y documentación de 980 €. No se aplican aquí ayudas públicas, descuentos de inventario ni condiciones financieras. El precio y la disponibilidad pueden cambiar; confirma el importe final en Tesla antes de realizar el pedido.',
    source: {
      label: `Tesla España: configurador y precios del Model Y, ${reviewed}`,
      url: 'https://www.tesla.com/es_es/modely/design?redirect=no',
    },
    versionPrices: {
      'Tracción trasera': { price: '40.990 €', priceType },
      'Gran autonomía · tracción trasera': { price: '50.990 €', priceType },
      'Premium de gran autonomía · tracción integral': { price: '52.990 €', priceType },
      'Performance · tracción integral': { price: '62.990 €', priceType },
    },
  },
};
