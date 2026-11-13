export type MgPriceOption = {
  name: string;
  price?: string;
  priceType?: string;
};

export type MgModelPricing = {
  basePrice?: string;
  note: string;
  sourceLabel: string;
  sourceUrl: string;
  options: MgPriceOption[];
};

const pending = (name: string): MgPriceOption => ({
  name,
  priceType: 'Precio base actual pendiente de verificación; las ofertas visibles incluyen descuentos o condiciones comerciales.',
});

const pvp = (price: string, detail: string): Omit<MgPriceOption, 'name'> => ({
  price,
  priceType: `PVP de tarifa publicado por MG España; ${detail}`,
});

const offerCaveat = 'Consulta realizada el 10 de noviembre de 2026. No se toma como precio base ninguna oferta que dependa de financiación, descuentos promocionales, CAE, ayudas públicas o entrega de un vehículo usado. Los precios PVP que sí constan se identifican con su fecha de publicación y pueden cambiar si MG actualiza su tarifa.';

export const mgPriceData: Record<string, MgModelPricing> = {
  mg3: {
    note: `${offerCaveat} La página española consultada muestra condiciones comerciales con vigencia anterior o ligada a financiación, y no permite confirmar un PVP base vigente para cada mecánica.`,
    sourceLabel: 'MG España: MG3 gasolina, Hybrid+ y condiciones de precio consultadas el 10 de noviembre de 2026',
    sourceUrl: 'https://www.mgmotor.es/model/mg3-ice',
    options: [pending('1.5 atmosférico gasolina'), pending('1.5 Hybrid+')],
  },
  'mg-zs': {
    note: `${offerCaveat} La promoción de MG ZS gasolina publicada para noviembre incluye promociones y financiación; no se considera PVP de tarifa. La página de gama no desglosa un precio base actual para ambas tecnologías.`,
    sourceLabel: 'MG España: MG ZS gasolina e Hybrid+; oferta y condiciones consultadas el 10 de noviembre de 2026',
    sourceUrl: 'https://www.mgmotor.es/model/zs',
    options: [pending('1.5 gasolina'), pending('1.5 Hybrid+')],
  },
  'mg-hs': {
    note: `${offerCaveat} Las páginas de gasolina, Hybrid+ y PHEV muestran precios promocionales o sujetos a financiación; la oferta PHEV consultada también incluye el Plan Auto+. No se ha localizado una tarifa española vigente que permita confirmar el PVP base de cada versión.`,
    sourceLabel: 'MG España: MG HS gasolina, Hybrid+ y PHEV; ofertas y condiciones consultadas el 10 de noviembre de 2026',
    sourceUrl: 'https://www.mgmotor.es/model/hs',
    options: [pending('1.5T gasolina'), pending('1.5T Hybrid+'), pending('1.5T PHEV')],
  },
  'mg4-ev': {
    note: `${offerCaveat} El precio de MG4 EV mostrado en la página española incluye financiación, CAE y Plan Auto+; no equivale al PVP base. Se dejan pendientes los precios de tarifa de las tres configuraciones.`,
    sourceLabel: 'MG España: MG4 EV, versiones y condiciones de precio consultadas el 10 de noviembre de 2026',
    sourceUrl: 'https://www.mgmotor.es/model/mg4',
    options: [pending('64 kWh Premium'), pending('77 kWh Premium'), pending('64 kWh AWD XPower')],
  },
  'mg4-ev-urban': {
    basePrice: '25.490 €',
    note: `${offerCaveat} La tarifa pública más reciente localizada es el anuncio de precios de MG España del 28 de abril de 2026. Sus capacidades comerciales de 43 y 54 kWh corresponden a las capacidades técnicas indicadas por MG como 42,8 y 53,9 kWh. No se aplica la oferta posterior con CAE, Auto+ u otros descuentos.`,
    sourceLabel: 'MG España: PVP de tarifa del MG4 EV Urban, comunicado el 28 de abril de 2026',
    sourceUrl: 'https://news.mgmotor.eu/es/press/precio-mg4-urban/',
    options: [
      { name: 'Comfort · batería de 42,8 kWh', ...pvp('25.490 €', 'versión comercial Comfort 43 kWh.') },
      { name: 'Comfort · batería de 53,9 kWh', ...pvp('27.900 €', 'versión comercial Comfort 54 kWh.') },
      { name: 'Premium · batería de 53,9 kWh', ...pvp('30.900 €', 'versión comercial Premium 54 kWh.') },
    ],
  },
  'mgs5-ev': {
    note: `${offerCaveat} El PVP publicado por MG España en mayo de 2025 corresponde a una tarifa de lanzamiento ya antigua. La oferta oficial visible consultada tiene vigencia de octubre de 2026 e incluye financiación y CAE; por tanto, se requiere una tarifa vigente para confirmar los importes base actuales.`,
    sourceLabel: 'MG España: MGS5 EV, oferta vigente consultada y contraste con la tarifa de lanzamiento',
    sourceUrl: 'https://www.mgmotor.es/model/mgs5',
    options: [pending('Comfort · batería de 49 kWh'), pending('Comfort · batería de 64 kWh'), pending('Luxury · batería de 64 kWh')],
  },
  'mgs6-ev': {
    basePrice: '45.990 €',
    note: `${offerCaveat} MG España publicó estos PVP de tarifa al anunciar la apertura comercial del modelo el 10 de marzo de 2026: 45.990 € para Long Range 4×2 y 48.990 € para Dual Motor AWD. La oferta que figura actualmente en la ficha incluye financiación, CAE y Plan Auto+ y no se presenta como tarifa.`,
    sourceLabel: 'MG España: precios PVP del MGS6 EV publicados el 10 de marzo de 2026',
    sourceUrl: 'https://news.mgmotor.eu/es/press/mgs6-ev/',
    options: [
      { name: 'Luxury Long Range 4×2 · 77 kWh', ...pvp('45.990 €', 'PVP anunciado para la versión de acceso Long Range 4×2.') },
      { name: 'Luxury Dual Motor AWD · 77 kWh', ...pvp('48.990 €', 'PVP anunciado para la versión Dual Motor AWD.') },
    ],
  },
  'mgs9-phev': {
    basePrice: '42.340 €',
    note: `${offerCaveat} MG España publicó ambos PVP de tarifa al anunciar el lanzamiento del MGS9 el 19 de marzo de 2026. La oferta promocional indicada en esa nota incluía ayudas del Plan Auto+ e incentivos de marca; aquí se muestran únicamente los PVP antes de esas ayudas.`,
    sourceLabel: 'MG España: PVP de tarifa de MGS9 PHEV Comfort y Premium, comunicado el 19 de marzo de 2026',
    sourceUrl: 'https://news.mgmotor.eu/es/press/nuevo-mgs9/',
    options: [
      { name: 'Comfort · 1.5 Turbo PHEV', ...pvp('42.340 €', 'acabado Comfort; el precio promocional comunicado por MG era distinto e incluía ayudas e incentivos.') },
      { name: 'Premium · 1.5 Turbo PHEV', ...pvp('45.340 €', 'acabado Premium; el precio promocional comunicado por MG era distinto e incluía ayudas e incentivos.') },
    ],
  },
  cyberster: {
    note: `${offerCaveat} La página oficial consultada identifica una oferta para Trophy con vigencia hasta agosto de 2026 y un precio de vehículo GT visualizado, pero no proporciona PVP base actual desglosado para Trophy y GT.`,
    sourceLabel: 'MG España: MG Cyberster y condiciones de precio consultadas el 10 de noviembre de 2026',
    sourceUrl: 'https://www.mgmotor.es/model/cyberster',
    options: [pending('Trophy Single Motor'), pending('GT Dual Motor')],
  },
};
