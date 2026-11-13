/** Precios y ofertas publicados por Geely España, consultados el 13/11/2026. */
type GeelyVersionPrice = { price: string; priceType: string };
type GeelyModelPricing = {
  basePrice?: string;
  basePriceLabel: string;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  versionPriceHeading: string;
  note: string;
  sources: { label: string; url: string }[];
  priceOptions?: { name: string; price?: string; priceType?: string }[];
  versionPrices: Record<string, GeelyVersionPrice>;
};

export const geelyPriceData: Record<string, GeelyModelPricing> = {
  e5: {
    basePrice: '32.490 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'PVP al contado publicado y oferta financiera pendiente de aclaración',
    note: 'Geely España publica un PVP/precio al contado de 32.490 € para el E5 Pro 160 kW. Las páginas oficiales discrepan sobre la oferta financiada: la página específica de precio muestra 24.585 €, otra página oficial de solicitud de oferta muestra 25.485 € y la portada vigente muestra 29.115 € con TIN 1,99 % y TAE 2,84 %. No asignamos un importe financiado hasta confirmar cuál está vigente y sus condiciones. Black Geely Days está activa del 3 al 30/11/2026 para pedidos, con matriculación hasta el 31/12; anuncia hasta 10.775 € de ahorro máximo para las tres versiones al combinar descuentos comerciales y, si se cumplen sus requisitos, Auto+ y CAE. Ese máximo varía por versión, no es un precio individual y no se acumula con ofertas financieras. La marca no desglosa el precio al contado de Pro+ y Max+; no trasladamos el precio Pro a esos acabados. Las páginas no concretan posibles gastos de entrega o matriculación. Consulta disponibilidad y condiciones antes de comprar.',
    sources: [
      { label: 'Geely España: E5, versiones y especificaciones', url: 'https://www.geelyauto.es/models/geely-e5-electric-suv' },
      { label: 'Geely España: oferta y precio al contado del E5 Pro', url: 'https://www.geelyauto.es/offers/precio-e5' },
      { label: 'Geely España: condiciones de Black Geely Days', url: 'https://www.geelyauto.es/offers/black-geely-days' },
    ],
    priceOptions: [
      { name: 'E5 Pro 160 kW · al contado', price: '32.490 €', priceType: 'PVP/precio al contado oficial publicado por Geely España.' },
      { name: 'E5 Pro 160 kW · financiando', priceType: 'Pendiente: distintas páginas oficiales publican 24.585 €, 25.485 € y 29.115 € con condiciones financieras distintas. Confirmar con Geely cuál está vigente antes de mostrar un importe.' },
    ],
    versionPrices: {
      'Pro · batería de 60,2 kWh': {
        price: '32.490 €',
        priceType: 'PVP/precio al contado publicado para E5 Pro 160 kW. No se aplican los importes inferiores condicionados a financiación, Auto+ o CAE; la página no concreta los posibles gastos de entrega o matriculación.',
      },
    },
  },
  'starray-em-i': {
    basePrice: '30.490 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'PVP al contado publicado y oferta financiera pendiente de aclaración',
    note: 'Geely España publica un PVP/precio al contado de 30.490 € para el STARRAY EM-i 1.5 Pro 160 kW. Hay una discrepancia entre dos páginas oficiales sobre la financiación: la página específica de oferta indica 25.215 € financiando y TAE del 10,29 %, mientras que la portada conserva un ejemplo de 28.240 € y TAE del 0,99 %. No se asigna un precio financiado hasta que la marca aclare cuál está vigente. La ficha comercial no ofrece importes al contado individualizados para Pro+ y Max+; no extrapolamos el precio del Pro. Las páginas no concretan posibles gastos de entrega o matriculación. Consultado el 13/11/2026.',
    sources: [
      { label: 'Geely España: STARRAY EM-i, versiones y especificaciones', url: 'https://www.geelyauto.es/models/geely-starray-em-i' },
      { label: 'Geely España: oferta y precio al contado del STARRAY EM-i Pro', url: 'https://www.geelyauto.es/offers/precio-starray' },
    ],
    priceOptions: [
      { name: 'STARRAY EM-i Pro 160 kW · al contado', price: '30.490 €', priceType: 'PVP/precio al contado oficial publicado por Geely España.' },
      { name: 'STARRAY EM-i Pro 160 kW · financiando', priceType: 'Pendiente: la página específica de oferta publica 25.215 € y TAE 10,29 %, mientras que la portada oficial mantiene 28.240 € y TAE 0,99 %. Solicitar aclaración a Geely antes de mostrar un importe como vigente.' },
    ],
    versionPrices: {
      'Pro · batería de 18,4 kWh': {
        price: '30.490 €',
        priceType: 'PVP/precio al contado publicado para STARRAY EM-i 1.5 Pro 160 kW. No se aplica el precio financiado ni el anticipo condicionado de Auto+; la página no concreta los posibles gastos de entrega o matriculación.',
      },
    },
  },
  e2: {
    basePrice: '20.990 €',
    basePriceLabel: 'Precio al contado publicado para PRO',
    currentOfferPrice: '13.590 € financiando',
    currentOfferLabel: 'Ejemplo financiero para E2 PRO, hasta fin de mes',
    versionPriceHeading: 'Precio al contado y oferta financiera anunciados para PRO',
    note: 'La página de ofertas de Geely publica 20.990 € al contado para E2 PRO y un ejemplo de 13.590 € financiando. Este último incluye descuentos del fabricante, un anticipo de 3.375 € de Auto+ y 900 € de CAE; la financiación queda sujeta a aprobación y el acceso a las ayudas a sus requisitos y fondos. El ejemplo indica vigencia hasta final de mes. Geely muestra PRO, PRO+ y MAX+ en la ficha técnica, pero no publica precios individuales para PRO+ y MAX+. La página del E2 invita a solicitar oferta, mientras que la portada conserva el botón «Resérvalo ahora»; confirma apertura de pedidos, plazo de entrega y disponibilidad con un concesionario antes de tratarlo como compra inmediata. Consultado el 13/11/2026.',
    sources: [
      { label: 'Geely España: E2, versiones y especificaciones', url: 'https://www.geelyauto.es/models/geely-e2' },
      { label: 'Geely España: precio al contado y financiación de E2 PRO', url: 'https://www.geelyauto.es/offers/precio-e2' },
      { label: 'Geely España: portada con estado de reserva del E2', url: 'https://www.geelyauto.es/' },
    ],
    priceOptions: [
      { name: 'E2 PRO · al contado', price: '20.990 €', priceType: 'Precio al contado oficial publicado por Geely España.' },
      { name: 'E2 PRO · financiando', price: '13.590 €', priceType: 'Incluye descuentos del fabricante, 3.375 € de Auto+ y 900 € de CAE, sujetos a requisitos y fondos. Financiación sujeta a aprobación y vigente hasta fin de mes.' },
    ],
    versionPrices: {
      'PRO · batería de 35 kWh': {
        price: '20.990 €',
        priceType: 'Precio al contado publicado por Geely España para E2 PRO; el ejemplo financiero de 13.590 € incluye descuentos del fabricante y ayudas condicionadas.',
      },
    },
  },
  'monjaro-em-i': {
    basePriceLabel: 'Precio Base',
    currentOfferPrice: '37.990 €',
    currentOfferLabel: 'PVPR promocional al contado',
    versionPriceHeading: 'Precio anunciado por versión',
    note: 'Geely España publica 37.990 € al contado para el MONJARO EM-i Ultra, pero lo identifica como PVPR promocional que incluye IVA, transporte, descuentos de campaña y 2.250 € del Programa Auto+, cuya concesión depende de requisitos, aprobación y fondos. Es válido hasta fin de mes o fin de existencias y no incluye gastos de entrega o matriculación. La página no publica un PVP sin esos descuentos; por eso mostramos el importe como oferta condicionada y dejamos pendiente el PVP base sin promoción. Consultado el 13/11/2026.',
    sources: [
      { label: 'Geely España: MONJARO EM-i y condiciones del PVPR promocional', url: 'https://www.geelyauto.es/models/monjaro-coming-soon' },
    ],
    versionPrices: {
      'Ultra AWD · sistema EM-i': {
        price: '37.990 €',
        priceType: 'PVPR promocional al contado hasta fin de mes o fin de existencias; incluye IVA, transporte, descuentos de campaña y 2.250 € de Auto+ condicionado. No incluye entrega ni matriculación.',
      },
    },
  },
};
