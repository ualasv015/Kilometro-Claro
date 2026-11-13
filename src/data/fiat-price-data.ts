/**
 * Precios Fiat España. Revisión del 13 de noviembre de 2026.
 * PVP base: «Precio Catálogo desde» del configurador oficial, sin gastos de matriculación.
 * Ofertas: precios al contado o promocionales de versiones concretas, válidos hasta el 30/11/2026.
 * No se extrapolan a otras motorizaciones.
 */
const currentOfferType = 'Precio al contado de una campaña oficial Fiat España, consultada el 13/11/2026 y vigente hasta el 30/11/2026. Corresponde al acabado/configuración indicada; no es PVP base permanente.';
const accessOfferLabel = 'Oferta al contado de acceso · hasta 30/11/2026';

type FiatVersionPrice = { price: string; priceType: string };
type FiatPricing = {
  basePrice?: string;
  basePricePending?: boolean;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  note: string;
  sources: { label: string; url: string }[];
  versionPrices: Record<string, FiatVersionPrice>;
};

const configurator = { label: 'Configurador oficial Fiat España', url: 'https://www.fiat.es/omni/configurador' };

export const fiatPriceData: Record<string, FiatPricing> = {
  '500': {
    basePrice: '20.850 €',
    note: 'Consulta del 13 de noviembre de 2026. El PVP base del configurador oficial es 20.850 € para el 500 híbrido. Ni el configurador ni la ficha del 500 híbrido muestran un precio al contado vigente, así que no se publica oferta para esa motorización. La oferta del 500e POP de 95 CV (20.585 €) se muestra por separado hasta el 30/11/2026.',
    sources: [
      { label: 'Fiat España: 500 híbrido', url: 'https://www.fiat.es/modelos/500-hibrido' },
      { label: 'Fiat España: 500 eléctrico', url: 'https://www.fiat.es/modelos/fiat-500-electrico' },
      configurator,
    ],
    versionPrices: {
      '500e 23,8 kWh': { price: '20.585,00 €', priceType: `${currentOfferType} 500e POP, batería de 23,8 kWh y 95 CV.` },
    },
  },
  '600': {
    basePrice: '24.401 €',
    note: 'Consulta del 13 de noviembre de 2026. El configurador oficial muestra el 600 gasolina desde 24.401 €, el 600 híbrido desde 27.400 € y el 600e desde 32.400 €. Las ofertas al contado del 600 híbrido (110 CV) y del 600e POP se publican en sus fichas oficiales hasta el 30/11/2026. No hay oferta vigente comprobada para el 600 gasolina, así que no se publica.',
    sources: [
      { label: 'Fiat España: 600 gasolina', url: 'https://www.fiat.es/modelos/fiat-600-gasolina' },
      { label: 'Fiat España: 600 híbrido', url: 'https://www.fiat.es/modelos/fiat-600-hibrido' },
      { label: 'Fiat España: 600e', url: 'https://www.fiat.es/modelos/fiat-600-electrico' },
      configurator,
    ],
    versionPrices: {
      '1.2 MHEV 110': { price: '22.992,49 €', priceType: `${currentOfferType} Fiat 600 Hybrid POP de 110 CV.` },
      '600e': { price: '26.385,00 €', priceType: `${currentOfferType} Fiat 600e POP, batería de 54 kWh y 156 CV.` },
    },
  },
  'grande-panda': {
    basePrice: '18.150 €',
    currentOfferPrice: '15.349,60 €',
    currentOfferLabel: accessOfferLabel,
    note: 'Consulta del 13 de noviembre de 2026. El PVP base del configurador oficial es 18.150 € para el Grande Panda gasolina, 21.150 € para el híbrido y 25.150 € para el eléctrico. La oferta al contado de la gasolina POP (15.349,60 €) se comprueba en su ficha oficial hasta el 30/11/2026. El configurador muestra además precios promocionales desde 14.200 €, 16.649 € y 21.450 €, que no aparecen en la ficha y no se publican aquí hasta aclarar su versión.',
    sources: [
      { label: 'Fiat España: Grande Panda gasolina', url: 'https://www.fiat.es/modelos/grande-panda-ice' },
      { label: 'Fiat España: Grande Panda híbrido', url: 'https://www.fiat.es/modelos/grande-panda-hibrido' },
      { label: 'Fiat España: Grande Panda eléctrico', url: 'https://www.fiat.es/modelos/grande-panda-electrico' },
      configurator,
    ],
    versionPrices: {
      'T-Gen3 1.2 Turbo': { price: '15.349,60 €', priceType: `${currentOfferType} Grande Panda Gasolina POP de 100 CV.` },
      'T-Gen3 1.2 Hybrid 48 V': { price: '17.649,59 €', priceType: `${currentOfferType} Grande Panda Hybrid POP de 110 CV.` },
      'Grande Panda Eléctrico': { price: '21.135,00 €', priceType: `${currentOfferType} Grande Panda Eléctrico POP.` },
    },
  },
  pandina: {
    basePrice: '17.599 €',
    note: 'Consulta del 13 de noviembre de 2026. El configurador oficial muestra el Pandina 1.0 Hybrid 65 CV en acabado POP desde 17.599 €. No hay precio promocional en el configurador ni al contado en la ficha. El importe de 11.384,98 € que tenía el archivo anterior no coincide con el configurador y se ha retirado.',
    sources: [
      { label: 'Fiat España: Pandina', url: 'https://www.fiat.es/modelos/pandina' },
      configurator,
    ],
    versionPrices: {},
  },
  'tipo-sedan': {
    basePrice: '20.101 €',
    currentOfferPrice: '16.851 €',
    currentOfferLabel: 'Precio promocional desde · hasta fin de mes',
    note: 'Consulta del 13 de noviembre de 2026. El configurador oficial muestra el Tipo Sedán diésel, con un acabado y una motorización, desde 20.101 € de catálogo y 16.851 € en promoción, válida hasta fin de mes. La ficha no muestra precio al contado. La disponibilidad puede depender del stock.',
    sources: [
      { label: 'Fiat España: Tipo Sedán', url: 'https://www.fiat.es/modelos/fiat-tipo-sedan' },
      configurator,
    ],
    versionPrices: {
      '1.6 MultiJet 130 MT': {
        price: '20.101 € · Precio Catálogo desde',
        priceType: 'PVP base del configurador oficial Fiat España, consultado el 13/11/2026. El Tipo Sedán figura con una única motorización diésel 130 MT y un acabado; la promoción de 16.851 € aparece por separado y vence el 30/11/2026.',
      },
    },
  },
  'qubo-l': {
    basePrice: '31.900 €',
    note: 'Consulta del 13 de noviembre de 2026. El configurador oficial muestra el Qubo L de 5 plazas desde 31.900 € y el de 7 plazas desde 33.400 €; no desglosa un PVP de catálogo individual por motor. La oferta oficial anuncia el Qubo L eléctrico 100 kW (136 CV), Talla M POP, por 30.785 € al contado hasta el 30/11/2026, vinculada a financiación mínima de 36 meses, entrega de vehículo y aprobación financiera. La ficha de producto todavía lo marca como «próximamente», así que conviene confirmar la disponibilidad de pedido. El importe de 21.542,50 € del archivo anterior no coincide con el configurador y se ha retirado.',
    sources: [
      { label: 'Fiat España: Qubo L diésel', url: 'https://www.fiat.es/modelos/qubo-l-diesel' },
      { label: 'Fiat España: ficha técnica diésel y eléctrica del Qubo L', url: 'https://www.fiat.es/modelos/qubo-l-diesel/detalles-tecnicos' },
      { label: 'Fiat España: oferta particular del Qubo L eléctrico 100 kW', url: 'https://www.fiat.es/' },
      configurator,
    ],
    versionPrices: {
      'Eléctrico 50 kWh · 136 CV': {
        price: '30.785 € al contado',
        priceType: 'Oferta particular Fiat España para Qubo L eléctrico 100 kW (136 CV), Talla M POP, válida hasta 30/11/2026. Requiere financiación mínima de 36 meses, entregar un vehículo y aprobación financiera; no es PVP base.',
      },
    },
  },
  doblo: {
    basePricePending: true,
    note: 'Consulta del 13 de noviembre de 2026. Doblò y E-Doblò aparecen en las fichas de Fiat Professional y no en el configurador de turismos. No se encontró un precio actual al contado para particulares asociado a las motorizaciones de pasajeros. Los importes de furgones comerciales y las tarifas antiguas no se trasladan a estas versiones. Precio base y versiones pendientes de verificación.',
    sources: [
      { label: 'Fiat España: Doblò pasajeros / E-Doblò MPV', url: 'https://www.fiat.es/modelos/e-doblo' },
      { label: 'Fiat Professional: gama Doblò', url: 'https://www.fiat.es/professional/modelo/doblo-termico' },
    ],
    versionPrices: {},
  },
  ulysse: {
    basePricePending: true,
    note: 'Consulta del 13 de noviembre de 2026. Ulysse y E-Ulysse aparecen en las fichas de Fiat Professional y no en el configurador de turismos. Las páginas consultadas no publican precios actuales al contado ni un desglose de precio por motorización. No se reutilizan importes de stock de otros mercados. Precio base y versiones pendientes de verificación.',
    sources: [
      { label: 'Fiat Professional España: Ulysse diésel', url: 'https://www.fiat.es/professional/modelo/ulysse-termico' },
      { label: 'Fiat Professional España: E-Ulysse eléctrico', url: 'https://www.fiat.es/professional/modelo/ulysse-electrico/features' },
    ],
    versionPrices: {},
  },
};
