export type LanciaVersionPrice = {
  price: string;
  priceType: string;
};

export type LanciaModelPrice = {
  basePrice: string;
  note: string;
  priceSource: string;
  versionPrices: Record<string, LanciaVersionPrice>;
};

const gammaPricingNote = 'Precios base anunciados para España y consultados el 9/11/2026. Lancia publica ofertas particulares al contado para Gamma Ibrida LS (35.378,29 €), BEV LS (42.274,46 €) y BEV HF Integrale (54.857,86 €), vigentes hasta el 30/11/2026; son importes promocionales, no PVP de tarifa. La ficha oficial indica «Disponible próximamente», por lo que hay que confirmar configuración y entrega con Lancia o un concesionario.';
const ypsilonPricingNote = 'Precios base publicados por Stellantis/Lancia en España. Turbo 100: PVP desde 21.200 € (27/5/2026); la oferta oficial visible al consultar la web mostraba 21.378,84 € al contado hasta el 30/11/2026, con posibles diferencias de equipamiento. Ibrida 110: precio desde 24.200 € publicado por Lancia en septiembre de 2025 y coherente con la diferencia de 3.000 € anunciada para el Turbo 100 en mayo de 2026. HF 280: precio desde 42.355 € publicado el 14/7/2026. Para Elettrica 156, Lancia solo permite recuperar un PVP anterior de 34.500 € (febrero de 2025) y su oferta al contado de 31.730,17 € caducó el 31/10/2026; el precio base vigente no está publicado en la web consultada y queda pendiente de verificación.';

export const lanciaPriceData: Record<string, LanciaModelPrice> = {
  gamma: {
    basePrice: '39.900 €',
    note: gammaPricingNote,
    priceSource: 'https://es.motor1.com/reviews/811145/lancia-gamma-2026-primera-prueba/',
    versionPrices: {
      'Ibrida 145 · LS': {
        price: '39.900 €',
        priceType: 'PVP base publicado para España. Lancia ofrece actualmente esta versión al contado por 35.378,29 € hasta el 30/11/2026; es una oferta temporal.',
      },
      'BEV LS · Standard Range 230': {
        price: '45.900 €',
        priceType: 'PVP base publicado para España. Lancia ofrece Gamma BEV LS por 42.274,46 € al contado hasta el 30/11/2026; confirma con el concesionario la batería asociada al pedido.',
      },
      'BEV HF Integrale · AWD 375': {
        price: '65.400 €',
        priceType: 'PVP base publicado para España. Lancia anuncia un precio al contado de 54.857,86 € hasta el 30/11/2026; es una oferta temporal.',
      },
    },
  },
  ypsilon: {
    basePrice: '21.200 €',
    note: ypsilonPricingNote,
    priceSource: 'https://www.media.stellantis.com/es-es/lancia/press/presentamos-el-nuevo-ypsilon-turbo-100',
    versionPrices: {
      'Turbo 100 · cambio manual': {
        price: '21.200 €',
        priceType: 'PVP desde publicado por Stellantis para España el 27/5/2026. Oferta al contado en la web oficial: 21.378,84 € hasta el 30/11/2026; la unidad mostrada puede llevar opcionales.',
      },
      'Ibrida 110 · MHEV 48 V e-DCT6': {
        price: '24.200 €',
        priceType: 'Precio desde publicado por Lancia España el 12/9/2025; Stellantis indicó en mayo de 2026 que el Turbo 100 cuesta 3.000 € menos que las versiones híbridas equivalentes.',
      },
      'Elettrica 156': {
        price: 'Pendiente de verificación',
        priceType: 'Último PVP publicado por Stellantis: 34.500 € (5/2/2025). La oferta al contado visible en la ficha oficial caducó el 31/10/2026; no se presenta ese importe antiguo como precio vigente.',
      },
      'HF 280': {
        price: '42.355 €',
        priceType: 'Precio desde publicado por Stellantis para España el 14/7/2026.',
      },
    },
  },
};
