export type AlfaRomeoVersionPrice = {
  price: string;
  priceType: string;
};

export type AlfaRomeoModelPricing = {
  basePrice: string;
  note: string;
  versionPrices: Record<string, AlfaRomeoVersionPrice>;
};

const priceContext = 'Precios comprobados el 6/11/2026 en el configurador de Alfa Romeo España. «Precio Catálogo desde» incluye IVA, transporte e Impuesto de Matriculación calculado al tipo general; no incluye gastos de matriculación y puede incorporar descuentos de fabricante o concesionario. Las ofertas al contado se muestran aparte y son válidas hasta el 30/11/2026 para particulares en Península y Baleares, sujetas a disponibilidad y condiciones.';

export const alfaRomeoPriceSource = 'https://www.alfaromeo.es/omni/configurador';
export const alfaRomeoOfferSource = 'https://www.alfaromeo.es/';

export const alfaRomeoPriceData: Record<string, AlfaRomeoModelPricing> = {
  junior: {
    basePrice: '30.350 €',
    note: `${priceContext} El Junior Elettrica Veloce de 280 CV no tiene un precio individual publicado en las fuentes consultadas; queda pendiente.`,
    versionPrices: {
      '1.2 Ibrida 145 eDCT6': {
        price: '30.350 € (Precio Catálogo desde)',
        priceType: 'Precio de acceso del Junior Ibrida. La oferta al contado publicada corresponde al acabado TI: 31.214 €, válida hasta el 30/11/2026; no sustituye al precio de catálogo del acabado de acceso.',
      },
      '1.2 Ibrida Q4 145 eDCT6': {
        price: '35.451 € (Precio Catálogo desde)',
        priceType: 'Precio anunciado por el configurador español para Junior Ibrida Q4.',
      },
      'Elettrica 156': {
        price: '38.940 € (Precio Catálogo desde)',
        priceType: 'El configurador muestra además 33.570 € como precio promocional; la oferta al contado para Elettrica 156 publica 33.185,92 € hasta el 30/11/2026. Son importes promocionales y no se presentan como PVP de catálogo.',
      },
    },
  },
  tonale: {
    basePrice: '40.650 €',
    note: `${priceContext} Los precios de catálogo corresponden al motor de acceso de cada familia. Las promociones al contado se anotan junto a la motorización concreta y pueden depender del acabado ofertado.`,
    versionPrices: {
      '1.5 Ibrida VGT DCT7': {
        price: '43.300 € (Precio Catálogo desde)',
        priceType: 'Oferta al contado publicada para Tonale 1.5 Ibrida 175 CV TCT7: 36.895,54 €, válida hasta el 30/11/2026; el precio promocional corresponde a una configuración comercial concreta.',
      },
      '1.6 Diésel DCT6': {
        price: '40.650 € (Precio Catálogo desde)',
        priceType: 'Precio de catálogo publicado por el configurador para Tonale Diesel 130 CV.',
      },
      '1.3 Ibrida Plug-In Q4': {
        price: '52.180 € (Precio Catálogo desde)',
        priceType: 'Oferta al contado publicada para Tonale Q4 1.3 PHEV 270 CV: 47.278,08 €, válida hasta el 30/11/2026; el precio promocional corresponde a una configuración comercial concreta.',
      },
    },
  },
  giulia: {
    basePrice: '49.600 €',
    note: `${priceContext} El configurador identifica un precio de catálogo desde 49.600 € para Giulia diésel, pero no separa el precio de catálogo de los dos motores. Para el 210 CV se muestra el precio al contado de una oferta Veloce y se deja pendiente la tarifa individual sin condiciones.`,
    versionPrices: {
      '2.2 Diésel 160 CV RWD': {
        price: '49.600 € (Precio Catálogo desde)',
        priceType: 'Precio de acceso de la gama Giulia diésel en el configurador español.',
      },
      '2.2 Diésel 210 CV Q4': {
        price: '53.000,76 € al contado (Veloce; oferta hasta 30/11/2026); PVP individual pendiente',
        priceType: 'Oferta oficial de financiación para Giulia 210 CV Veloce. El precio al contado publicado no equivale a una tarifa individual sin condiciones; el configurador solo ofrece el precio de catálogo de acceso de la gama.',
      },
      'Quadrifoglio 2.9 V6 Bi-Turbo': {
        price: '113.900 € (Precio Catálogo desde)',
        priceType: 'El configurador publica además un precio promocional desde 107.105 €, válido hasta el 30/11/2026 para unidades y concesionarios adheridos.',
      },
    },
  },
  stelvio: {
    basePrice: '56.750 €',
    note: `${priceContext} El configurador identifica un precio de catálogo desde 56.750 € para Stelvio diésel, pero no separa el precio de catálogo de los dos motores. Para el 210 CV se muestra el precio al contado de una oferta Veloce y se deja pendiente la tarifa individual sin condiciones.`,
    versionPrices: {
      '2.2 Diésel 160 CV RWD': {
        price: '56.750 € (Precio Catálogo desde)',
        priceType: 'Precio de acceso de la gama Stelvio diésel en el configurador español.',
      },
      '2.2 Diésel 210 CV Q4': {
        price: '57.609,34 € al contado (Veloce; oferta hasta 30/11/2026); PVP individual pendiente',
        priceType: 'Oferta oficial de financiación para Stelvio 210 CV Veloce. El precio al contado publicado no equivale a una tarifa individual sin condiciones; el configurador solo ofrece el precio de catálogo de acceso de la gama.',
      },
      'Quadrifoglio 2.9 V6 Bi-Turbo Q4': {
        price: '124.600 € (Precio Catálogo desde)',
        priceType: 'El configurador publica además un precio promocional desde 117.163 €, válido hasta el 30/11/2026 para unidades y concesionarios adheridos.',
      },
    },
  },
};
