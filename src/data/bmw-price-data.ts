/**
 * Precios de catálogo anunciados por BMW España, consultados el 6/11/2026.
 * Se excluyen ofertas con financiación, descuentos sujetos a condiciones y cifras
 * cuya página oficial muestra un IVA no correspondiente al mercado español.
 * Las versiones sin precio verificado permanecen sin importe y constan en
 * precios-pendientes.txt.
 */
export type BmwPriceRecord = {
  basePrice?: string;
  versionPrices: Record<string, string>;
  note: string;
};

const catalogue = 'https://www.bmw.es/es/coches-bmw.html';
const configurator = 'https://www.bmw.es/es/configurador.html';
const priceContext = 'Precios recomendados anunciados por BMW España, consultados el 6/11/2026; incluyen IVA cuando la ficha indica el 21 %, pero excluyen transporte. No se trasladan ofertas condicionadas.';

export const bmwPriceData: Record<string, BmwPriceRecord> = {
  'serie-1': {
    basePrice: '35.300 €',
    versionPrices: { '116 gasolina': '35.300 €', '118d diésel': '40.700 €', 'M135 xDrive gasolina': '63.500 €' },
    note: `${priceContext} El 120 y el 123 xDrive no tienen un precio individual verificable en el catálogo consultado.`,
  },
  'serie-2': {
    basePrice: '39.050 €',
    versionPrices: { '216 Gran Coupé gasolina': '39.050 €', '218d Gran Coupé diésel': '44.600 €' },
    note: `${priceContext} El precio de acceso corresponde al 216 Gran Coupé. La oferta del 220 encontrada había vencido; el precio que BMW muestra para M235 aparece con NoVA austríaca y no se traslada a España.`,
  },
  'serie-2-coupe': {
    basePrice: '51.249,90 €',
    versionPrices: { '220i Coupé gasolina': '51.249,90 €', '220d Coupé diésel MHEV': '57.549,90 €', 'M240i xDrive Coupé gasolina MHEV': '79.199,70 €', 'M2 Coupé gasolina': '102.500 €' },
    note: `${priceContext} Precios visibles en el catálogo BMW para las versiones indicadas.`,
  },
  'serie-2-active-tourer': {
    basePrice: '52.950 €',
    versionPrices: { '225e xDrive Active Tourer híbrido enchufable': '52.950 €' },
    note: `${priceContext} Se utiliza el importe de catálogo para el 225e xDrive, no el precio al contado de campañas de financiación.`,
  },
  'serie-3': {
    basePrice: '49.100 €',
    versionPrices: { '320 Berlina gasolina MHEV': '49.100 €', '330e Berlina híbrido enchufable (G20)': '61.250 €', '330e xDrive Touring híbrido enchufable (G21)': '65.750 €' },
    note: `${priceContext} La berlina y Touring PHEV tienen precios de acceso diferentes; BMW publica además carrocerías y motores con tarifas propias.`,
  },
  'serie-4': {
    basePrice: '57.650 €',
    versionPrices: { '420d Coupé diésel MHEV': '59.949,90 €', 'M440i xDrive Coupé gasolina MHEV': '86.399,70 €' },
    note: `${priceContext} El precio base de la familia corresponde al Gran Coupé de acceso anunciado por BMW. El 420i Coupé de la lista técnica no tiene precio individual confirmado en la ficha de catálogo consultada.`,
  },
  'serie-5': {
    basePrice: '64.750 €',
    versionPrices: { '520i Berlina gasolina MHEV': '64.850 €', '520d Berlina diésel MHEV': '64.750 €', '530e Berlina híbrido enchufable': '74.100 €' },
    note: `${priceContext} El catálogo anuncia Touring y M5 con importes distintos. Los precios de 550e y de las variantes Touring/M5 no se cargan hasta asociarlos a versiones técnicas verificadas en esta ficha.`,
  },
  'serie-7': {
    versionPrices: {},
    note: `${priceContext} BMW muestra variantes de Serie 7 sin un importe de catálogo español en la ficha consultada. El precio de i7 aparece con un 19 % de IVA en el configurador, por lo que no se publica como precio español verificado.`,
  },
  x1: {
    basePrice: '47.700 €',
    versionPrices: { 'sDrive18d diésel': '47.700 €', 'xDrive23i gasolina MHEV': '49.150 €', 'xDrive30e híbrido enchufable': '57.050 €', 'M35i xDrive gasolina': '75.250 €' },
    note: `${priceContext} Precios de catálogo para sDrive18d, xDrive23i, xDrive30e y M35i. Las opciones diésel superiores no tienen un precio individual comprobable en la vista de precios consultada.`,
  },
  x2: {
    basePrice: '49.300 €',
    versionPrices: { 'sDrive20i gasolina MHEV': '50.750 €', 'sDrive18d diésel': '49.300 €', 'M35i xDrive gasolina': '76.850 €' },
    note: `${priceContext} Importes publicados por BMW España para las versiones indicadas.`,
  },
  x3: {
    basePrice: '65.850 €',
    versionPrices: { '20 xDrive gasolina': '65.850 €', '30e xDrive híbrido enchufable': '68.800 €', '20d xDrive diésel MHEV': '68.350 €', 'M50 xDrive gasolina MHEV': '93.750 €' },
    note: `${priceContext} BMW publica estos precios para el 20 xDrive, 30e, 20d y M50.`,
  },
  x4: {
    versionPrices: {},
    note: `${priceContext} BMW mantiene referencias de disponibilidad de unidades X4, pero no aparece un PVP de configuración vigente. Su compra depende del stock de concesionario.`,
  },
  x5: {
    versionPrices: { '50e xDrive híbrido enchufable': '106.150 €', 'M60e xDrive híbrido enchufable': '121.650 €' },
    note: `${priceContext} Los importes PHEV son consistentes con la ficha española. BMW muestra cifras de gasolina y diésel con un 19 % de IVA; no se usan y queda pendiente confirmar un precio base español comparable para toda la gama.`,
  },
  x6: {
    basePrice: '105.500 €',
    versionPrices: { 'xDrive30d diésel MHEV': '105.500 €', 'M60i xDrive gasolina MHEV': '137.200 €' },
    note: `${priceContext} BMW muestra además un X6 M con precio propio, que no se confunde con el M60i.`,
  },
  x7: {
    basePrice: '125.550 €',
    versionPrices: { 'xDrive40i gasolina MHEV': '125.550 €', 'xDrive40d diésel MHEV': '127.450 €', 'M60i xDrive gasolina MHEV': '158.550 €' },
    note: `${priceContext} Importes de catálogo para las versiones indicadas.`,
  },
  z4: {
    versionPrices: {},
    note: `${priceContext} El Z4 figura sujeto a disponibilidad de unidades; el catálogo/configurador no ofrece un PVP base vigente para las motorizaciones de esta ficha.`,
  },
  ix: {
    basePrice: '89.600 €',
    versionPrices: { 'xDrive45 eléctrico': '89.600 €', 'M70 xDrive eléctrico': '135.000 €' },
    note: `${priceContext} No se localizó un precio individual verificable para el xDrive60.`,
  },
  ix1: {
    basePrice: '50.550 €',
    versionPrices: { 'eDrive20 eléctrico': '50.550 €' },
    note: `${priceContext} El xDrive30 no tiene un precio individual verificable en la ficha consultada.`,
  },
  ix2: {
    basePrice: '52.150 €',
    versionPrices: { 'eDrive20 eléctrico': '52.150 €' },
    note: `${priceContext} El xDrive30 no tiene un precio individual verificable en la ficha consultada.`,
  },
  ix3: {
    basePrice: '64.250 €',
    versionPrices: { '50 xDrive eléctrico': '64.250 €' },
    note: `${priceContext} El catálogo español muestra actualmente el 50 xDrive; las versiones M60 anunciadas como próximas no se incluyen.`,
  },
  i4: {
    basePrice: '59.250 €',
    versionPrices: { 'eDrive40 eléctrico': '59.250 €', 'M60 xDrive eléctrico': '81.350 €' },
    note: `${priceContext} El eDrive35 aparece en documentación de BMW, pero no se encontró su precio de catálogo actual; queda pendiente.`,
  },
  i5: {
    basePrice: '77.850 €',
    versionPrices: { 'eDrive40 Berlina eléctrico': '77.850 €', 'M60 xDrive Berlina eléctrico': '117.009,60 €' },
    note: `${priceContext} Los precios de Touring son distintos a los de berlina. El xDrive40 y las carrocerías Touring necesitan asociar su precio a una ficha de versión antes de publicarlo.`,
  },
  i7: {
    versionPrices: {},
    note: `${priceContext} Aunque el configurador muestra importes, los acompaña de un 19 % de IVA; se dejan pendientes hasta obtener una tarifa española válida.`,
  },
  xm: {
    basePrice: '136.650 €',
    versionPrices: { 'XM 50e híbrido enchufable': '136.650 €', 'XM Label híbrido enchufable': '192.850 €' },
    note: `${priceContext} La página oficial de XM indica 136.650 € para 50e y 192.850 € para Label; el catálogo general muestra 194.950 € para Label. Se conserva el importe específico de la ficha de gama y se advierte de la discrepancia.`,
  },
  i3: {
    basePrice: '58.400 €',
    versionPrices: { '50 xDrive eléctrico': '58.400 €' },
    note: `${priceContext} Precio de catálogo para el i3 50 xDrive; las ofertas financiadas o de venta al contado con campañas tienen otras condiciones.`,
  },
  ix4: {
    basePrice: '71.850 €',
    versionPrices: { '50 xDrive eléctrico': '71.850 €' },
    note: `${priceContext} Se incluye únicamente el iX4 50 xDrive; la variante M60 aparece como futura.`,
  },
  ix5: {
    basePrice: '105.649,80 €',
    versionPrices: { '60 xDrive eléctrico': '105.649,80 €' },
    note: `${priceContext} Precio de catálogo anunciado para iX5 60 xDrive.`,
  },
};

export const bmwPriceSource = catalogue;
export const bmwConfiguratorSource = configurator;
