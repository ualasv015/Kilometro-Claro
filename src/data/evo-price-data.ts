/**
 * Precios base por versión EVO en España. Se toman los PVP al contado que
 * publican las fichas oficiales de cada motorización; las ofertas financiadas
 * con vigencia ya vencida no se presentan como precio actual.
 */
type EvoVersionPrice = { price: string; priceType: string };
type EvoModelPrice = {
  basePrice: string;
  note: string;
  priceSource: { label: string; url: string };
  versionPrices: Record<string, EvoVersionPrice>;
};

const officialCashPrice = (price: string): EvoVersionPrice => ({
  price,
  priceType: 'PVP recomendado al contado publicado por EVO; incluye IVA, transporte, pintura e IEMT general.',
});

export const evoPriceData: Record<string, EvoModelPrice> = {
  'evo-3': {
    basePrice: '16.900 €',
    note: 'PVP recomendados al contado publicados en las fichas oficiales consultadas el 6 de noviembre de 2026. Las campañas de financiación que aparecen en esas páginas indicaban vigencia hasta el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del EVO 3', url: 'https://auto-evo.es/modello/evo-3-2/' },
    versionPrices: {
      '1.5 gasolina manual': officialCashPrice('16.900 €'),
      '1.5 Thermohybrid gasolina/GLP manual': officialCashPrice('18.400 €'),
    },
  },
  'evo-cuatro': {
    basePrice: '19.900 €',
    note: 'PVP recomendados al contado publicados para cada configuración en las fichas oficiales consultadas el 6 de noviembre de 2026. Las ofertas de financiación que muestran esas páginas vencieron el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del CUATRO gasolina manual', url: 'https://auto-evo.es/modello/evo-cuatro/' },
    versionPrices: {
      '1.5 gasolina manual': officialCashPrice('19.900 €'),
      '1.5 gasolina/GLP manual': officialCashPrice('21.400 €'),
      '1.5 Turbo gasolina CVT': officialCashPrice('22.400 €'),
      '1.5 Turbo gasolina/GLP CVT': officialCashPrice('23.400 €'),
    },
  },
  'evo-5': {
    basePrice: '18.900 €',
    note: 'PVP recomendados al contado publicados por EVO y consultados el 6 de noviembre de 2026. Las ofertas de financiación que aparecen en las fichas tenían vigencia hasta el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del EVO 5 gasolina', url: 'https://auto-evo.es/modello/evo-5/' },
    versionPrices: {
      '1.5 Turbo gasolina manual': officialCashPrice('18.900 €'),
      '1.5 Turbo gasolina/GLP manual': officialCashPrice('19.900 €'),
    },
  },
  'evo-6': {
    basePrice: '30.900 €',
    note: 'PVP recomendados al contado publicados por EVO y consultados el 6 de noviembre de 2026. Las campañas de financiación visibles tenían vigencia hasta el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del EVO 6 gasolina', url: 'https://auto-evo.es/modello/evo-6-4/' },
    versionPrices: {
      '1.5 Turbo gasolina DCT': officialCashPrice('30.900 €'),
      '1.5 Turbo gasolina/GLP DCT': officialCashPrice('32.400 €'),
    },
  },
  'evo-6-hev': {
    basePrice: '33.900 €',
    note: 'PVP recomendado al contado publicado por EVO y consultado el 6 de noviembre de 2026. La ficha mantenía una campaña de financiación con vigencia hasta el 31 de octubre de 2026; se muestra el precio al contado de 33.900 €, no el importe financiado. Incluye IVA, transporte, pintura e impuesto de matriculación calculado al tipo general, que puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y ficha técnica del EVO 6 HEV', url: 'https://auto-evo.es/modello/evo-6-hev-2/' },
    versionPrices: {
      '1.5 Turbo HEV DHT': officialCashPrice('33.900 €'),
    },
  },
  'evo-7': {
    basePrice: '31.900 €',
    note: 'PVP recomendados al contado publicados por EVO para gasolina y gasolina/GLP, consultados el 6 de noviembre de 2026. Las ofertas de financiación visibles tenían vigencia hasta el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del EVO 7 gasolina', url: 'https://auto-evo.es/modello/evo-7/' },
    versionPrices: {
      '1.5 Turbo gasolina DCT': officialCashPrice('31.900 €'),
      '1.5 Turbo gasolina/GLP DCT': officialCashPrice('32.900 €'),
    },
  },
  'evo-spazio': {
    basePrice: '34.400 €',
    note: 'PVP recomendados al contado publicados por EVO para gasolina y gasolina/GLP, consultados el 6 de noviembre de 2026. Las ofertas de financiación visibles tenían vigencia hasta el 31 de octubre de 2026 y no se incluyen. Los precios incluyen IVA, transporte, pintura e impuesto de matriculación calculado al tipo general; este último puede variar según la comunidad autónoma.',
    priceSource: { label: 'EVO España: precios y versiones del Spazio gasolina', url: 'https://auto-evo.es/modello/evo-spazio-2/' },
    versionPrices: {
      '1.5 Turbo gasolina DCT': officialCashPrice('34.400 €'),
      '1.5 Turbo Thermohybrid gasolina/GLP DCT': officialCashPrice('35.900 €'),
    },
  },
  'evo-cross-4': {
    basePrice: '30.734 €',
    note: 'La ficha del fabricante publica 25.400 € antes de IVA e impuesto de matriculación. Para mostrar una referencia de compra al particular se utiliza el PVP recomendado de 30.734 € anunciado por el concesionario oficial Grupo LCA, que incluye IVA pero excluye transporte, gastos de matriculación y preentrega. Consultado el 6 de noviembre de 2026; confirma el importe final y la disponibilidad con el concesionario.',
    priceSource: { label: 'Grupo LCA, concesionario EVO: precio del CROSS4 para particulares', url: 'https://grupolca.es/producto/evo-cross4-pickup-136-cv-4x4/' },
    versionPrices: {
      '2.0 turbodiésel manual 6 velocidades': {
        price: '30.734 €',
        priceType: 'PVP recomendado por Grupo LCA; incluye IVA, excluye transporte, matriculación y preentrega. EVO publica 25.400 € antes de IVA e IEMT.',
      },
    },
  },
};
