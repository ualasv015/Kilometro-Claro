const catalogBase = 'https://www.mitsubishi-motors.es/content/dam/mitsubishi-motors-es/es/catalogos';

const price = (name: string, amount: string, model: string) => ({
  name,
  price: amount,
  priceType: `Tarifa oficial de ${model}, octubre de 2026.`,
});

export const mitsubishiPriceData = {
  colt: {
    basePrice: '19.350 €',
    sourceUrl: `${catalogBase}/Gama_COLT.pdf`,
    note: 'Tarifa oficial Mitsubishi España, octubre de 2026. Los precios de catálogo son válidos para Península y Baleares e incluyen IVA, impuesto de matriculación cuando corresponde y transporte. La oferta específica vigente del Colt 100T Motion se muestra aparte: 18.350 € al contado o 16.350 € financiando, sujeta a aprobación y válida hasta el 31/12/2026. No se trasladan a acabados las ofertas Webstore sin nivel de equipamiento indicado. Mitsubishi publica el Colt 160 HEV Kaiteki+ como «precio bajo consulta» en su página de producto; se registra como pendiente, sin atribuirle el precio de Kaiteki.',
    options: [
      price('100T · Motion', '19.350 €', 'Colt'),
      price('100T · Kaiteki', '21.350 €', 'Colt'),
      price('100T GLP · Motion', '20.150 €', 'Colt'),
      price('160 HEV · Kaiteki', '27.550 €', 'Colt'),
      { name: '160 HEV · Kaiteki+', priceType: 'La página oficial indica «precio bajo consulta»; no se extrapola el importe de Kaiteki.' },
      { name: '100T · Motion · oferta al contado', price: '18.350 €', priceType: 'Precio promocional con campaña incluida; válido hasta el 31/12/2026. No es el PVP de catálogo.' },
      { name: '100T · Motion · oferta financiada', price: '16.350 €', priceType: 'Oferta válida hasta el 31/12/2026; 48 meses, TAE 9,71 %, entrada 4.224 €, cuota final 8.752,01 €, máximo 40.000 km. Financiación Open Bank sujeta a estudio y aprobación.' },
      { name: '160 HEV · oferta Webstore (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra 27.050 € al contado y 25.850 € financiando hasta el 30/11/2026, con financiación sujeta a aprobación, pero no indica el acabado. No se asigna a Kaiteki sin confirmación.' },
    ],
  },
  asx: {
    basePrice: '25.650 €',
    sourceUrl: `${catalogBase}/Gama_ASX.pdf`,
    note: 'Tarifa oficial Mitsubishi España, octubre de 2026. Los precios de catálogo son válidos para Península y Baleares e incluyen IVA, impuesto de matriculación y transporte. La tarifa identifica 120T Motion por 25.650 € y 120T Black Edition por 25.950 €. La Webstore mantiene ofertas separadas: 120T Black Edition (23.500 € al contado / 21.500 € financiando) y 180 HEV Black Edition (29.500 € / 27.500 €), válidas hasta el 30/11/2026 y sujetas a financiación. Otras ofertas de 120T aparecen sin acabado, por lo que quedan pendientes de asignación.',
    options: [
      price('120T · Motion', '25.650 €', 'ASX'),
      price('120T · Black Edition', '25.950 €', 'ASX'),
      price('120T · Kaiteki', '27.500 €', 'ASX'),
      price('130T MHEV 7DCT · Kaiteki', '32.900 €', 'ASX'),
      price('180 HEV · Motion', '31.200 €', 'ASX'),
      price('180 HEV · Kaiteki', '33.100 €', 'ASX'),
      price('180 HEV · Black Edition', '31.500 €', 'ASX'),
      price('180 HEV · Kaiteki+', '37.000 €', 'ASX'),
      { name: '120T · Black Edition · oferta al contado', price: '23.500 €', priceType: 'Oferta Webstore hasta el 30/11/2026; precio promocional con campaña incluida.' },
      { name: '120T · Black Edition · oferta financiada', price: '21.500 €', priceType: 'Oferta Webstore hasta el 30/11/2026; precio sujeto a campaña financiera y aprobación de Open Bank.' },
      { name: '180 HEV · Black Edition · oferta al contado', price: '29.500 €', priceType: 'Oferta Webstore hasta el 30/11/2026; precio promocional con campaña incluida.' },
      { name: '180 HEV · Black Edition · oferta financiada', price: '27.500 €', priceType: 'Oferta Webstore hasta el 30/11/2026; precio sujeto a campaña financiera y aprobación de Open Bank.' },
      { name: '120T · oferta Webstore (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra 24.300 € al contado y 22.300 € financiando hasta el 30/11/2026, sujeto a aprobación, pero no identifica el acabado.' },
    ],
  },
  grandis: {
    basePrice: '30.550 €',
    sourceUrl: `${catalogBase}/Gama_GRANDIS.pdf`,
    note: 'Tarifa oficial Mitsubishi España, octubre de 2026. Los precios de catálogo son válidos para Península y Baleares e incluyen IVA, impuesto de matriculación y transporte. La Webstore publica ofertas vigentes para 130T MHEV y 180 HEV, pero no indica el acabado en las tarjetas; sus importes se señalan como pendientes y no se asignan a Motion, Kaiteki ni a una transmisión concreta.',
    options: [
      price('130T MHEV · Motion', '30.550 €', 'Grandis'),
      price('130T MHEV · Kaiteki', '31.750 €', 'Grandis'),
      price('130T MHEV 7DCT · Kaiteki', '34.000 €', 'Grandis'),
      price('180 HEV · Motion', '33.550 €', 'Grandis'),
      price('180 HEV · Kaiteki', '34.750 €', 'Grandis'),
      price('180 HEV · Kaiteki+', '41.600 €', 'Grandis'),
      { name: '130T MHEV · oferta Webstore (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra 28.650 € al contado y 26.650 € financiando hasta el 30/11/2026; el acabado no aparece en la tarjeta. La financiación está sujeta a aprobación.' },
      { name: '180 HEV · oferta Webstore (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra ofertas de 30.450 € / 28.450 € y 31.650 € / 29.650 € (al contado / financiando), sin indicar acabado. Válidas hasta el 30/11/2026; financiación sujeta a aprobación.' },
    ],
  },
  'outlander-phev': {
    basePrice: '45.750 €',
    sourceUrl: `${catalogBase}/Gama_Outlander_PHEV.pdf`,
    note: 'Tarifa oficial Mitsubishi España del Outlander PHEV MY26, octubre de 2026. Los precios de catálogo son válidos para Península y Baleares e incluyen IVA, impuesto de matriculación y transporte. La Webstore muestra dos ofertas hasta el 30/11/2026, pero las tarjetas no indican el acabado; quedan pendientes de asignación. El segundo importe financiado incluye 2.250 € condicionados al Programa Auto+.',
    options: [
      price('PHEV 4WD · Motion', '45.750 €', 'Outlander PHEV'),
      price('PHEV 4WD · Kaiteki', '51.500 €', 'Outlander PHEV'),
      price('PHEV 4WD · Kaiteki+', '55.900 €', 'Outlander PHEV'),
      price('PHEV 4WD · First Edition', '57.700 €', 'Outlander PHEV'),
      price('PHEV 4WD · Black Edition', '58.200 €', 'Outlander PHEV'),
      { name: 'PHEV 4WD · oferta Webstore (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra 46.950 € al contado y 41.150 € financiando, incluidos 1.800 € condicionados al Programa Auto+. El acabado no aparece en la tarjeta. Oferta hasta el 30/11/2026; financiación sujeta a aprobación.' },
      { name: 'PHEV 4WD · oferta Webstore con Auto+ (acabado por confirmar)', priceType: 'Pendiente de asignación: la tienda oficial muestra 42.050 € al contado y 35.800 € financiando, incluidos hasta 2.250 € condicionados a Auto+. El acabado no aparece en la tarjeta. Oferta hasta el 30/11/2026; financiación sujeta a aprobación.' },
    ],
  },
  'eclipse-cross-ev': {
    basePrice: '49.550 €',
    sourceUrl: `${catalogBase}/Gama_Eclipse_Cross.pdf`,
    note: 'Tarifa oficial Mitsubishi España, octubre de 2026. Los precios son válidos para Península y Baleares e incluyen IVA, impuesto de matriculación cuando corresponde y transporte. La ficha de gama denomina la batería como 92 kWh; la página de producto expresa 87 kWh útiles. Se indican por separado los dos acabados disponibles.',
    options: [
      price('Eléctrico 92 kWh · Kaiteki', '49.550 €', 'Eclipse Cross'),
      price('Eléctrico 92 kWh · Kaiteki+', '54.400 €', 'Eclipse Cross'),
    ],
  },
};
