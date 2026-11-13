/** Precios y ofertas publicados por Lexus España, revisados el 13/11/2026. */
type LexusPriceOption = { name: string; price?: string; priceType: string };
type LexusModelPricing = {
  basePrice?: string;
  basePricePending?: boolean;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  note: string;
  options: LexusPriceOption[];
  sources: { label: string; url: string }[];
};

const lexus = 'https://www.lexusauto.es';
const press = 'https://prensa.lexusauto.es';
const source = (label: string, url: string) => ({ label, url });
const listed = 'PVP «Precio Catálogo desde» del configurador oficial de Lexus España; acabado y configuración pueden modificarlo. Consulta: 13/11/2026.';
const pvp = 'PVP publicado por Lexus España para la versión indicada; pinturas especiales y equipamiento opcional pueden variar el importe.';
const pending = 'PVP de catálogo individual pendiente de verificación; véase precios-pendientes.txt.';

export const lexusPriceData: Record<string, LexusModelPricing> = {
  lbx: {
    basePrice: '33.900 €',
    currentOfferPrice: '32.000 € financiando (34.800 € al contado)',
    currentOfferLabel: 'Oferta Lexus Privilege para LBX Elegant MY26 · hasta 30/11/2026',
    note: 'Consulta: 13/11/2026. El configurador oficial muestra el LBX 4x2 desde 33.900 € como PVP base. La promoción LBX Elegant MY26 es una oferta distinta: 32.000 € financiando con Lexus Privilege o 34.800 € al contado, vigente hasta el 30/11/2026. El precio del LBX E-Four no se desglosa individualmente y queda pendiente.',
    options: [
      { name: 'LBX Hybrid 136 · 4x2 · acabado LBX', price: '33.900 €', priceType: listed },
      { name: 'LBX Hybrid 136 · E-Four', priceType: pending },
      { name: 'LBX Elegant MY26 · oferta al contado', price: '32.000 € financiando / 34.800 € al contado', priceType: 'Oferta Lexus Privilege vigente hasta 30/11/2026; exige aprobación financiera y capital mínimo. No es PVP de catálogo.' },
    ],
    sources: [
      source('Lexus España: configurador del LBX', `${lexus}/modelos/lbx/build`),
      source('Lexus España: oferta LBX Elegant MY26 y condiciones financieras', `${lexus}/modelos/lbx/promociones-particulares-lbx`),
      source('Lexus España: página técnica del LBX', `${lexus}/modelos/lbx/specifications`),
    ],
  },
  ux: {
    basePrice: '40.250 €',
    currentOfferPrice: '38.000 € financiando (41.150 € al contado)',
    currentOfferLabel: 'Oferta UX 300h F SPORT Legend MY26 · hasta 30/11/2026',
    note: 'Consulta: 13/11/2026. El configurador de Lexus publica los PVP para versiones 4x2. La oferta UX 300h F SPORT Legend MY26 es separada: 38.000 € financiando o 41.150 € al contado, válida hasta el 30/11/2026. La fuente técnica documenta también E-Four, pero no desglosa su PVP individual, que queda pendiente.',
    options: [
      { name: 'UX 300h 4x2 · Urban', price: '40.250 €', priceType: listed },
      { name: 'UX 300h 4x2 · F SPORT Legend', price: '42.150 €', priceType: listed },
      { name: 'UX 300h 4x2 · F SPORT+', price: '51.000 €', priceType: listed },
      { name: 'UX 300h 4x2 · Omotenashi', price: '56.000 €', priceType: listed },
      { name: 'UX 300h E-Four', priceType: pending },
      { name: 'UX 300h F SPORT Legend MY26 · oferta', price: '38.000 € financiando / 41.150 € al contado', priceType: 'Oferta Lexus Privilege vigente hasta 30/11/2026; sujeta a financiación y aprobación.' },
    ],
    sources: [
      source('Lexus España: versiones y precios actuales del UX 300h', `${lexus}/modelos/ux`),
      source('Lexus España: oferta UX 300h F SPORT Legend MY26', `${lexus}/modelos/ux/promociones-particulares-ux`),
      source('Lexus España: catálogo técnico del UX 300h 4x2 y E-Four', `${lexus}/content/dam/lexus/nmsc/spain/catalogos/Catalogo_UX300h.pdf`),
    ],
  },
  nx: {
    basePrice: '55.350 €',
    currentOfferPrice: '51.100 € (NX 350h) / 54.400 € (NX 450h+), financiando',
    currentOfferLabel: 'Ofertas NX MY26 · hasta 30/11/2026',
    note: 'Consulta: 13/11/2026. Lexus España publica PVP para cada motorización y tracción NX MY26 que sigue activa en el configurador. Las ofertas NX Premium+ MY26 son independientes: 51.100 € financiando para 350h y 54.400 € para 450h+, ambas hasta 30/11/2026; la segunda contempla posible ayuda Auto+. La preventa NX MY27 se mantiene separada porque el configurador aún muestra MY26.',
    options: [
      { name: 'NX 350h FWD', price: '55.350 €', priceType: listed },
      { name: 'NX 350h AWD', price: '64.400 €', priceType: listed },
      { name: 'NX 450h+ AWD', price: '59.000 €', priceType: listed },
      { name: 'NX 350h Premium+ 4x2 MY26 · oferta', price: '51.100 € financiando / 54.050 € al contado', priceType: 'Oferta vigente hasta 30/11/2026; sujeta a Lexus Privilege y aprobación financiera.' },
      { name: 'NX 450h+ Premium+ MY26 · oferta', price: '54.400 € financiando / 57.700 € al contado', priceType: 'Oferta vigente hasta 30/11/2026; posible ayuda Auto+ condicionada y aprobación financiera.' },
    ],
    sources: [
      source('Lexus España: precios y motorizaciones NX MY26', `${lexus}/modelos/nx`),
      source('Lexus España: ofertas NX MY26', `${lexus}/modelos/nx/promociones-particulares-nx`),
    ],
  },
  rz: {
    basePrice: '52.000 €',
    note: 'Consulta: 13/11/2026. El configurador muestra el RZ 350e desde 52.000 € y la tarifa 2027 publica también PVP para las versiones RZ 500e. Sin embargo, la ficha actual denomina RZ 550e F SPORT a la variante de 408 CV de 70.900 €, mientras la tarifa usa RZ 500e F SPORT. Se mantienen los importes no afectados por la discrepancia y se deja pendiente el precio asociado a la versión de 408 CV hasta confirmar denominación y disponibilidad.',
    options: [
      { name: 'RZ 350e · Premium Efficiency FWD', price: '52.000 €', priceType: pvp },
      { name: 'RZ 350e · Premium FWD', price: '52.900 €', priceType: pvp },
      { name: 'RZ 350e · Executive FWD', price: '55.900 €', priceType: pvp },
      { name: 'RZ 500e · Executive AWD', price: '61.900 €', priceType: pvp },
      { name: 'RZ 500e / 550e F SPORT AWD · 408 CV', priceType: 'PVP y disponibilidad pendientes: la tarifa 2027 dice RZ 500e F SPORT; la ficha actual dice RZ 550e F SPORT.' },
    ],
    sources: [
      source('Lexus España: ficha actual del RZ, potencia y precios desde', `${lexus}/modelos/rz`),
      source('Lexus España: gama y precios del RZ 2027', `${press}/lexus-rz-un-electrico-100-lexus-define-su-gama-2027/`),
      source('Lexus España: gama de precios RZ 2026 y RZ 550e F SPORT', `${press}/gama-y-precios-del-lexus-rz-2026-llegan-los-nuevos-rz-500e-y-rz-550e-f-sport/`),
    ],
  },
  rx: {
    basePrice: '83.900 €',
    currentOfferPrice: '82.550 € financiando (86.400 € al contado)',
    currentOfferLabel: 'Oferta RX 450h+ Executive MY27 · hasta 30/11/2026',
    note: 'Consulta: 13/11/2026. El configurador mantiene RX 450h+ Business desde 83.900 €. La tarifa oficial MY27 y la página actual discrepan en Executive, F DESIGN y RX 500h F SPORT, así que sus PVP individuales quedan pendientes de confirmar. La oferta RX 450h+ Executive MY27 publica 82.550 € financiando o 86.400 € al contado hasta el 30/11/2026; se muestra aparte del PVP y no resuelve la discrepancia de tarifa.',
    options: [
      { name: 'RX 450h+ · Business AWD', price: '83.900 €', priceType: listed },
      { name: 'RX 450h+ · Executive / Executive+ AWD', priceType: 'PVP pendiente: tarifa MY27 92.900 €; página y oferta actual indican 86.400 € al contado.' },
      { name: 'RX 450h+ · F DESIGN AWD', priceType: 'PVP pendiente: tarifa MY27 94.900 €; página actual indica 95.250 €.' },
      { name: 'RX 450h+ · Luxury AWD', price: '101.500 €', priceType: listed },
      { name: 'RX 500h · F SPORT AWD', priceType: 'PVP pendiente: tarifa MY27 111.300 €; página actual indica 112.650 €.' },
      { name: 'RX 450h+ Executive MY27 · oferta', price: '82.550 € financiando / 86.400 € al contado', priceType: 'Oferta vigente hasta 30/11/2026; sujeta a Lexus Privilege y aprobación financiera.' },
    ],
    sources: [
      source('Lexus España: página actual del RX, precios por acabado y motor', `${lexus}/modelos/rx`),
      source('Lexus España: gama RX MY27 y precios comunicados por prensa', `${press}/lexus-rx-2027-gama-precios/`),
      source('Lexus España: oferta RX 450h+ Executive MY27 y condiciones', `${lexus}/modelos/rx/promociones-particulares-rx`),
    ],
  },
  es: {
    basePrice: '61.500 €',
    note: 'Consulta: 13/11/2026. Precios PVP publicados por Lexus España para la gama ES 2026. Se distinguen la tracción delantera o AWD del 300h y los distintos acabados de los eléctricos 350e y 500e; las pinturas especiales se cobran aparte cuando así figura en la tarifa. No se registra como vigente la promoción que venció el 30/09/2026.',
    options: [
      { name: 'ES 300h · Signature FWD', price: '61.500 €', priceType: pvp },
      { name: 'ES 300h · Signature AWD', price: '64.500 €', priceType: pvp },
      { name: 'ES 300h · Exclusive AWD', price: '69.500 €', priceType: pvp },
      { name: 'ES 350e · Signature Efficiency FWD', price: '61.500 €', priceType: pvp },
      { name: 'ES 350e · Signature FWD', price: '63.100 €', priceType: pvp },
      { name: 'ES 350e · Omotenashi+ FWD', price: '78.500 €', priceType: pvp },
      { name: 'ES 500e · Signature AWD', price: '66.100 €', priceType: pvp },
    ],
    sources: [source('Lexus España: gama y PVP oficiales del ES 2026', `${press}/gama-y-precios-para-el-nuevo-lexus-es-2026-hibrido-y-electrico/`)],
  },
  lm: {
    basePrice: '131.000 €',
    note: 'Consulta: 13/11/2026. La página oficial del LM diferencia el precio de las configuraciones de seis y cuatro plazas: 131.000 € y 156.000 €, respectivamente. No se localizó una oferta individual vigente; el sitio dirige a solicitar una propuesta. El equipamiento y los acabados pueden cambiar el importe final.',
    options: [
      { name: 'LM 350h · Luxury 6 plazas', price: '131.000 €', priceType: listed },
      { name: 'LM 350h · Luxury 4 plazas', price: '156.000 €', priceType: listed },
    ],
    sources: [source('Lexus España: página y precios del LM 350h de 4 y 6 plazas', `${lexus}/modelos/lm`)],
  },
  tz: {
    basePricePending: true,
    note: 'Consulta: 13/11/2026. Lexus publicó una tarifa de prensa del TZ, pero aún no hay un configurador oficial que permita verificar el campo «Precio Catálogo desde». La ficha indica que el TZ 550e Long Range está próximamente disponible; por ello sus precios y disponibilidad efectiva se identifican como anunciados, no como versiones configurables actuales.',
    options: [
      { name: 'TZ 450e · Executive AWD', price: '88.000 €', priceType: 'Importe anunciado en la tarifa de prensa oficial; no hay configurador para verificar PVP actual.' },
      { name: 'TZ 550e · Luxury AWD', price: '103.000 €', priceType: 'PVP anunciado en tarifa; ficha indica próximamente disponible. Confirmar disponibilidad y precio efectivo.' },
      { name: 'TZ 550e · Luxury bitono AWD', price: '105.000 €', priceType: 'PVP anunciado en tarifa; ficha indica próximamente disponible. Confirmar disponibilidad y precio efectivo.' },
    ],
    sources: [
      source('Lexus España: precios, acabados y disponibilidad del TZ en España', `${press}/lexus-desvela-la-gama-y-precios-del-nuevo-tz/`),
      source('Lexus España: ficha actual del TZ', `${lexus}/modelos/tz`),
    ],
  },
};
