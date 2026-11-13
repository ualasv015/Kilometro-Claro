const site = 'https://www.omodajaecoo.es';
const pending = 'Pendiente de verificación';
const campaignNote = 'La oferta Black November anuncia ahorros máximos sujetos a financiación, disponibilidad de stock y otras condiciones; esos descuentos no permiten calcular ni sustituir el PVP base.';

export const omodaPriceData: Record<string, {
  basePrice?: string;
  basePriceLabel: string;
  versionPriceHeading: string;
  note: string;
  options: { name: string; price: string; priceType?: string }[];
  sourceUrl: string;
  sourceLabel: string;
  extraSources?: { label: string; url: string }[];
}> = {
  'omoda-5': {
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio actual por acabado',
    note: `No se ha podido confirmar un PVP base vigente para los acabados Pure y Premium. La campaña Black November, válida del 1 al 30 de noviembre de 2026, publica un ahorro máximo de 7.830 € para el OMODA 5 HEV Premium, ligado a financiación y otras condiciones; no ofrece un precio de tarifa sin descuentos. ${campaignNote}`,
    options: [
      { name: '1.5 SHS-H HEV · Pure', price: pending, priceType: 'El acabado figura en la ficha técnica; no se ha localizado un PVP base actual verificable.' },
      { name: '1.5 SHS-H HEV · Premium', price: pending, priceType: 'La campaña vigente identifica este acabado y anuncia hasta 7.830 € de ahorro sujeto a condiciones; no publica su PVP base.' },
    ],
    sourceUrl: `${site}/modelos/omoda-5/hibrido-ficha-tecnica`,
    sourceLabel: 'Ficha técnica y acabados OMODA 5 SHS-H',
    extraSources: [
      { label: 'Promoción Black November vigente hasta el 30 de noviembre de 2026', url: `${site}/comprar/promociones/omoda-5` },
      { label: 'Condiciones de Black November y versiones incluidas', url: `${site}/comprar/promociones/black-november` },
    ],
  },
  'omoda-5-ev': {
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio actual por acabado',
    note: `No se ha podido confirmar un PVP base vigente para los acabados Pure y Premium. La campaña Black November, válida del 1 al 30 de noviembre de 2026, publica un ahorro máximo de 13.110 € para el OMODA 5 EV Premium, con financiación, CAE, adelanto de Auto+ y otras condiciones; no equivale a un precio de tarifa. ${campaignNote}`,
    options: [
      { name: 'EV · Pure', price: pending, priceType: 'El acabado figura en la ficha técnica; no se ha localizado un PVP base actual verificable.' },
      { name: 'EV · Premium', price: pending, priceType: 'La campaña vigente identifica este acabado y anuncia hasta 13.110 € de ahorro sujeto a condiciones; no publica su PVP base.' },
    ],
    sourceUrl: `${site}/modelos/omoda-5/ev-ficha-tecnica`,
    sourceLabel: 'Ficha técnica y acabados OMODA 5 EV',
    extraSources: [
      { label: 'Promoción Black November vigente hasta el 30 de noviembre de 2026', url: `${site}/comprar/promociones/omoda-5` },
      { label: 'Condiciones de Black November y versiones incluidas', url: `${site}/comprar/promociones/black-november` },
    ],
  },
  'omoda-7-shs': {
    basePrice: '42.900 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'PVP máximo recomendado por acabado',
    note: 'Importes publicados por OMODA España el 14 de octubre de 2026 como precios máximos recomendados, sin descuentos ni ayudas. La marca indica que la pintura gris mate opcional cuesta 800 € en Premium y Premium+. Las ofertas Black November se mantienen separadas porque dependen de financiación, stock y otras condiciones.',
    options: [
      { name: '1.5 SHS-P PHEV · Pure', price: '42.900 €', priceType: 'PVP máximo recomendado sin descuentos ni ayudas.' },
      { name: '1.5 SHS-P PHEV · Premium', price: '45.900 €', priceType: 'PVP máximo recomendado sin descuentos ni ayudas.' },
      { name: '1.5 SHS-P PHEV · Premium+', price: '46.100 €', priceType: 'PVP máximo recomendado sin descuentos ni ayudas.' },
    ],
    sourceUrl: `${site}/prensa/el-omoda-7-shs-hibrido-enchufable-estrena-version-premium-con-mas-tecnologia-y-confort`,
    sourceLabel: 'Precios máximos recomendados OMODA 7 SHS publicados por el fabricante',
    extraSources: [
      { label: 'Ficha técnica, motorización y acabados OMODA 7 SHS', url: `${site}/modelos/omoda-7/hibrido-ficha-tecnica` },
      { label: 'Promoción Black November: ahorro condicionado', url: `${site}/comprar/promociones/black-november` },
    ],
  },
  'omoda-9-shs': {
    basePrice: '52.900 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'PVP máximo recomendado por acabado',
    note: 'Importes publicados por OMODA España el 5 de noviembre de 2026 como precios máximos recomendados, separados de las promociones y ayudas. La Black Edition está limitada a 200 unidades en España. La promoción vigente comunica ahorros máximos sujetos a condiciones y no se presenta como PVP base.',
    options: [
      { name: '1.5 SHS-P PHEV AWD · Premium', price: '52.900 €', priceType: 'PVP máximo recomendado sin descuentos ni ayudas.' },
      { name: '1.5 SHS-P PHEV AWD · Black Edition', price: '54.400 €', priceType: 'PVP máximo recomendado sin descuentos ni ayudas; edición limitada a 200 unidades en España.' },
    ],
    sourceUrl: `${site}/prensa/el-omoda-9-shs-hibrido-enchufable-actualiza-su-gama-y-estrena-la-version-limitada-black-edition`,
    sourceLabel: 'Precios máximos recomendados OMODA 9 SHS publicados por el fabricante',
    extraSources: [
      { label: 'Ficha técnica, motorización y acabado Premium OMODA 9 SHS', url: `${site}/modelos/omoda-9/hibrido-ficha-tecnica` },
      { label: 'Promoción Black November: ahorro condicionado', url: `${site}/comprar/promociones/black-november` },
    ],
  },
};
