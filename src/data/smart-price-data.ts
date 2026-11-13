type SmartPriceEntry = {
  basePrice: string;
  versionNames: string[];
  versionPrices: Record<string, { price: string; priceType: string }>;
  note: string;
  sources: { label: string; url: string }[];
};

const source = (label: string, url: string) => ({ label, url });
const smart = 'https://es.smart.com/es';
const store = 'https://es.smart.com/es/products/';
const testDrive = 'https://es.smart.com/es/test-drive/request/';

// Solo se registran precios sin descuentos que smart publica de forma
// explícita. Las ofertas financiadas y las ayudas no se usan como PVP base.
export const smartPriceData: Record<string, SmartPriceEntry> = {
  '1': {
    basePrice: '37.900 €',
    versionNames: ['Pure', 'Pro', 'Pro+', 'Pro+ Black Collection', 'Premium', 'BRABUS'],
    versionPrices: {
      Pure: { price: '37.900 €', priceType: 'Precio sin descuentos publicado por smart; IVA incluido.' },
      'Pro+ Black Collection': { price: '46.000 €', priceType: 'Precio sin descuentos publicado por smart para smart #1 2027; IVA incluido.' },
    },
    note: 'Consulta del 11 de noviembre de 2026. El precio sin descuentos de 37.900 € corresponde a Pure y el de 46.000 € a Pro+ Black Collection, IVA incluido. La web de smart anuncia además campañas desde 27.580,60 € financiando, con adelanto de 3.375 € del Plan Auto+ sujeto a condiciones; no se presentan como PVP base. Falta verificar el precio individual sin descuentos de Pro, Pure+, Pro+, Premium, Pulse y BRABUS.',
    sources: [
      source('smart España: smart Store, precio sin descuentos del #1 Pure y #1 Pro+ Black Collection', store),
      source('smart España: precio de partida del smart #1', testDrive),
      source('smart España: página comercial, versiones y campañas del #1', `${smart}/models/hashtag-one/`),
      source('smart España: campaña vigente con financiación y adelanto de Auto+', `${smart}/`),
    ],
  },
  '2': {
    basePrice: '19.990 €',
    versionNames: ['Pure', 'Pure+', 'Premium'],
    versionPrices: {
      Pure: { price: '19.990 €', priceType: 'Precio de pedido anticipado anunciado por smart; entrega prevista en 2027.' },
      'Pure+': { price: '20.990 €', priceType: 'Precio de pedido anticipado anunciado por smart; entrega prevista en 2027.' },
      Premium: { price: '24.490 €', priceType: 'Precio de pedido anticipado anunciado por smart; entrega prevista en 2027.' },
    },
    note: 'Precios de pedido anticipado comunicados por smart para España: Pure 19.990 €, Pure+ 20.990 € y Premium 24.490 €. El #2 continúa pendiente de homologación europea; smart prevé las primeras entregas a clientes en Europa para mediados del segundo trimestre de 2027, por lo que estos importes no implican disponibilidad inmediata de un vehículo homologado. Couture Edition no se incluye como reservable: smart anunció que se agotaron las unidades europeas.',
    sources: [
      source('smart España: precios, acabados y apertura de pedidos del #2', 'https://media.smart.com/es-ES/273208-smart-acepta-pedidos-del-nuevo-smart-2/'),
      source('smart España: Couture Edition agotado y Pure, Pure+ y Premium aún disponibles para reserva', 'https://media.smart.com/es-ES/273954-smart-2-couture-edition-agotado-en-tan-solo-dos-semanas/'),
      source('smart España: ficha técnica y precio de partida por acabado del #2', 'https://es.smart.com/es/models/hashtag-two/specifications/'),
    ],
  },
  '3': {
    basePrice: '42.610 €',
    versionNames: ['Pro', 'Pro+', 'Pro+ Black Collection', 'Premium', 'BRABUS'],
    versionPrices: {
      'Pro+ Black Collection': { price: '48.210,01 €', priceType: 'Precio sin descuentos publicado por smart para smart #3 2027; IVA incluido.' },
    },
    note: 'Consulta del 11 de noviembre de 2026. smart publica 42.610 € como precio de partida del modelo, pero no lo vincula de forma expresa a una línea en la fuente consultada. La smart Store identifica 48.210,01 € sin descuentos para Pro+ Black Collection, IVA incluido. La portada anuncia campañas desde 30.432,59 € financiando y con adelanto de 3.375 € de Auto+, sujetos a condiciones; no son PVP base. Faltan precios individuales sin descuentos de Pro, Pro+, Premium, Pulse y BRABUS.',
    sources: [
      source('smart España: smart Store, precio sin descuentos del #3 Pro+ Black Collection', store),
      source('smart España: precio de partida del smart #3', testDrive),
      source('smart España: campaña vigente con financiación y adelanto de Auto+', `${smart}/`),
    ],
  },
  '5': {
    basePrice: '48.850 €',
    versionNames: ['Pro+', 'Pro+ Black Collection', 'Premium', 'Premium AWD', 'BRABUS'],
    versionPrices: {
      'Pro+ Black Collection': { price: '54.960 €', priceType: 'Precio sin descuentos publicado por smart para smart #5 2027; IVA incluido.' },
    },
    note: 'Consulta del 11 de noviembre de 2026. smart publica 48.850 € como precio de partida, sin identificar el acabado al que corresponde. La smart Store sí identifica 54.960 € sin descuentos para Pro+ Black Collection, IVA incluido. La página comercial anuncia campañas desde 38.650,20 € financiando, con adelanto de 3.375 € de Auto+ sujeto a condiciones; no son PVP base. Quedan pendientes los precios individuales de Pro+, Premium, Premium AWD y BRABUS, además de aclarar las líneas Pro, Pulse y Summit Edition que aparecen en otros textos de smart pero no en la tabla técnica específica consultada.',
    sources: [
      source('smart España: smart Store, precio sin descuentos del #5 Pro+ Black Collection', store),
      source('smart España: precio de partida del smart #5', testDrive),
      source('smart España: ficha técnica comparativa actual del smart #5', 'https://es.smart.com/es/models/hashtag-five/specifications/'),
      source('smart España: campaña vigente con financiación y adelanto de Auto+', `${smart}/`),
    ],
  },
};
