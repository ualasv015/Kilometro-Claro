const site = 'https://www.omodajaecoo.es';
const launchPriceUrl = `${site}/noticias/jaecoo-5-el-suv-pequeno-de-la-casa-que-llega-para-romper-el-mercado-desde-solo-19-990-euros`;
const dossierPriceUrl = `${site}/noticias/dossier-de-prensa-jaecoo-5-gasolina-y-ev`;
const pending = 'Pendiente de verificación';

const currentPricePending = 'Las páginas oficiales consultadas confirman el modelo y el acabado, pero no publican un PVP actual individual. La promoción Black November anuncia ahorros máximos sujetos a financiación, stock y otras condiciones; no se convierte ese ahorro en un precio base.';

export const jaecooPriceData: Record<string, {
  basePriceLabel: string;
  versionPriceHeading: string;
  note: string;
  options: { name: string; price: string; priceType?: string }[];
  sourceUrl: string;
  sourceLabel: string;
  extraSources?: { label: string; url: string }[];
  promotionUrl: string;
}> = {
  'jaecoo-5': {
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio actual por acabado y motorización',
    note: 'El comunicado de lanzamiento español del 29 de agosto de 2025 anunció PVP de partida de 27.500 € para gasolina, 30.000 € para híbrido y 35.500 € para eléctrico. Esos importes son una referencia histórica y la publicación no confirma que sigan vigentes en noviembre de 2026 ni detalla todos los acabados. El dosier oficial adicional no indica fecha de edición. Por eso se muestran como contexto histórico en cada versión y no como precio actual; confirma el PVP vigente con JAECOO España.',
    options: [
      { name: '1.6 TGDI gasolina · Pure', price: pending, priceType: 'Referencia histórica: PVP de partida de 27.500 € anunciado por la marca en agosto de 2025; vigencia actual no confirmada.' },
      { name: '1.6 TGDI gasolina · Exclusive', price: pending, priceType: 'El dosier oficial consultado sin fecha de edición recoge un PVP de 30.500 €; no confirma vigencia actual.' },
      { name: '1.5 SHS-H HEV · Pure', price: pending, priceType: 'Referencia histórica: PVP de partida HEV de 30.000 € anunciado por la marca en agosto de 2025; no se especifica el acabado y no se confirma vigencia actual.' },
      { name: '1.5 SHS-H HEV · Exclusive', price: pending, priceType: currentPricePending },
      { name: 'EV · Pure', price: pending, priceType: 'Referencia histórica: PVP de partida de 35.500 € anunciado por la marca en agosto de 2025; vigencia actual no confirmada.' },
      { name: 'EV · Exclusive', price: pending, priceType: 'El dosier oficial consultado sin fecha de edición recoge un PVP de 38.500 €; no confirma vigencia actual.' },
    ],
    sourceUrl: `${site}/modelos/jaecoo-5`,
    sourceLabel: 'Gama y versiones actuales de JAECOO 5',
    extraSources: [
      { label: 'Comunicado de lanzamiento y PVP de partida de 2025 (referencia histórica)', url: launchPriceUrl },
      { label: 'Dosier oficial JAECOO 5 gasolina y EV, sin fecha de edición visible', url: dossierPriceUrl },
    ],
    promotionUrl: `${site}/comprar/promociones/jaecoo-5/jaecoo-5-shs`,
  },
  'jaecoo-7': {
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio actual por acabado y motorización',
    note: 'No se ha podido verificar el PVP actual de las dos motorizaciones ni de sus acabados. La promoción vigente publica ahorros máximos que dependen de financiación, stock y condiciones; no revela un precio base por versión y no se calcula restando esa cifra.',
    options: [
      { name: '1.5 SHS-H HEV · Pure', price: pending, priceType: currentPricePending },
      { name: '1.5 SHS-H HEV · Exclusive', price: pending, priceType: currentPricePending },
      { name: '1.5 SHS-P PHEV · Pure', price: pending, priceType: 'La campaña actual permite identificar una versión Pure, pero solo publica ahorro máximo condicionado, no PVP actual individual.' },
      { name: '1.5 SHS-P PHEV · Exclusive', price: pending, priceType: 'La campaña actual no publica PVP actual individual para esta versión; tampoco se le traslada el precio de la Pure.' },
    ],
    sourceUrl: `${site}/modelos/jaecoo-7`,
    sourceLabel: 'Gama y versiones actuales de JAECOO 7',
    promotionUrl: `${site}/comprar/promociones/jaecoo-7/jaecoo-7-super-hibrido-enchufable`,
  },
  'jaecoo-8': {
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio actual por configuración',
    note: 'La ficha técnica española distingue las configuraciones Exclusive de cinco y siete asientos. La promoción consultada anuncia un ahorro máximo, condicionado y centrado en la configuración de siete plazas; no publica el PVP base individual de ninguna de las dos.',
    options: [
      { name: '1.5 SHS AWD · Exclusive 5 asientos', price: pending, priceType: currentPricePending },
      { name: '1.5 SHS AWD · Exclusive 7 asientos', price: pending, priceType: 'La promoción actual especifica esta configuración, pero no un PVP individual: solo un ahorro máximo con condiciones.' },
    ],
    sourceUrl: `${site}/modelos/jaecoo-8`,
    sourceLabel: 'Gama y versiones actuales de JAECOO 8',
    promotionUrl: `${site}/comprar/promociones/jaecoo-8/jaecoo-8`,
  },
};
