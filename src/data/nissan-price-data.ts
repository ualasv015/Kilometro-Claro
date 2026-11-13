type VersionPrice = { price?: string; priceType: string };

type ModelPricing = {
  basePrice?: string;
  versionPrices: Record<string, VersionPrice>;
  note: string;
  sources: { label: string; url: string }[];
};

const configurator = 'https://configurador.nissan.es/inicio?lang=es&pbParticulares=true';
const source = (label: string, url: string) => ({ label, url });
const listed = (amount: string, trim: string) => ({
  price: amount,
  priceType: `Precio del configurador Nissan para particulares, acabado ${trim}; consulta de noviembre de 2026.`,
});
const pending = (reason: string): VersionPrice => ({ priceType: `Pendiente: ${reason}` });

export const nissanPriceData: Record<string, ModelPricing> = {
  juke: {
    basePrice: '25.275 €',
    versionPrices: {
      '1.0 DIG-T 114, manual': listed('25.275 €', 'Acenta, manual'),
      '1.0 DIG-T 114, DCT': listed('27.175 €', 'Acenta, DCT'),
      '1.6 Hybrid 143': listed('30.750 €', 'Acenta'),
    },
    note: 'Importes de acceso publicados en el configurador oficial de Nissan para clientes particulares, antes de descuentos promocionales. El configurador advierte que el precio depende del código postal; el acabado, la transmisión y el equipamiento cambian el importe final.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator)],
  },
  qashqai: {
    basePrice: '32.200 €',
    versionPrices: {
      '1.3 DIG-T 140 MHEV, manual 4x2': listed('32.200 €', 'Acenta'),
      '1.3 DIG-T 158 MHEV, manual 4x2': listed('42.850 €', 'Tekna Premium, manual'),
      '1.3 DIG-T 158 MHEV, Xtronic 4x2': listed('35.300 €', 'Acenta, Xtronic'),
      '1.3 DIG-T 158 MHEV, Xtronic 4x4': listed('40.450 €', 'N-Connecta, Xtronic'),
      '1.5 e-POWER 190': listed('37.700 €', 'Acenta'),
    },
    note: 'Precios mostrados por el configurador oficial para clientes particulares, antes de campañas. Se indica el acabado de acceso encontrado para cada combinación; el precio del propio configurador puede variar al introducir el código postal. El cambio manual de 158 CV solo aparece asociado al acabado Tekna Premium en la relación consultada.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator)],
  },
  'x-trail': {
    basePrice: '38.182 €',
    versionPrices: {
      '1.5 VC-Turbo 163 MHEV 12 V': listed('38.182 €', 'Acenta, 5 plazas'),
      '1.5 e-POWER 204, tracción delantera': listed('42.000 €', 'Acenta, 5 plazas'),
      '1.5 e-POWER 213 e-4ORCE, tracción total': listed('45.400 €', 'Acenta, 5 plazas'),
    },
    note: 'Importes del configurador oficial de Nissan para clientes particulares, antes de descuentos. Se especifica el acabado y la configuración de cinco plazas usados para localizar cada precio; el X-Trail también se vende con siete plazas y otros acabados, cuyo precio cambia. La cifra puede variar según el código postal.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator), source('Nissan X-Trail: comparativa oficial de motorizaciones', 'https://www.nissan.es/vehiculos/nuevos-vehiculos/x-trail/comparar-sistemas-motrices.html')],
  },
  micra: {
    versionPrices: {
      '40 kWh, 122 CV': pending('La tarifa sin descuentos de julio de 2025 no acredita el PVP vigente en noviembre de 2026. Nissan muestra ahora ofertas y precios al contado de unidades en stock con descuentos y/o ayudas, pero no una tarifa actual sin condiciones para esta batería.'),
      '52 kWh, 150 CV': pending('No se ha localizado un PVP de tarifa vigente sin ayudas para esta batería. Los precios publicados actualmente corresponden a ofertas o unidades de stock y no se extrapolan a un precio base general.'),
    },
    note: 'Nissan muestra actualmente precios al contado y ofertas para unidades concretas en stock; la página de la marca indica que algunas cantidades incluyen descuento, CAE y Plan Auto+. No se presentan esos importes como PVP base general. La tarifa sin descuentos publicada al abrir pedidos en julio de 2025 se considera antigua y no se usa como precio vigente.',
    sources: [source('Nissan Micra: página española, ofertas y condiciones vigentes', 'https://micra.nissan.es/'), source('Vehículos Nissan en stock y precios al contado', 'https://www.nissan.es/comprar/venta-de-coches'), source('Nissan News: precios de tarifa publicados al abrir pedidos (15/07/2025)', 'https://spain.nissannews.com/es-ES/releases/divertido-compacto-y-agil-el-nuevo-nissan-micra-alegra-las-calles-desde-17550-ayudas-y-descuentos-de-la-marca-incluidos')],
  },
  leaf: {
    versionPrices: {
      '52 kWh, 177 CV': pending('Nissan anuncia desde 27.000 € incluyendo Plan Auto+ y muestra ofertas al contado ligadas a descuentos o condiciones comerciales; no se ha encontrado un PVP de tarifa sin ayudas para esta motorización.'),
      '75 kWh, 218 CV': pending('La fuente oficial confirma la versión, pero el precio publicado desde 27.000 € corresponde a una oferta con Plan Auto+ y no desglosa el PVP base de la batería de 75 kWh.'),
    },
    note: 'No se indica como precio base el importe «desde 27.000 €» difundido por Nissan porque incluye Plan Auto+; las ofertas de contado consultadas también incluyen descuentos y condiciones comerciales. El PVP de tarifa sin ayudas queda pendiente de publicación o confirmación individual.',
    sources: [source('Nissan LEAF: gama, precios publicados y condiciones vigentes en España', 'https://www.nissan.es/cf/vehiculos/nuevos-vehiculos/leaf'), source('Nissan News: baterías y potencias del nuevo LEAF', 'https://spain.nissannews.com/es-ES/releases/nissan-leaf-bateria-de-52-o-de-75-kwh-una-opcion-para-cada-necesidad')],
  },
  ariya: {
    basePrice: '48.800 €',
    versionPrices: {
      '63 kWh, tracción delantera': listed('48.800 €', 'Advance'),
      '87 kWh, tracción delantera': listed('50.800 €', 'Engage'),
      '87 kWh e-4ORCE, tracción total': listed('57.500 €', 'Advance'),
      '87 kWh NISMO e-4ORCE, tracción total': listed('64.000 €', 'NISMO'),
    },
    note: 'Precios de partida del configurador oficial para clientes particulares, antes de campañas y ayudas. Cada cantidad identifica el acabado más económico encontrado para esa batería, potencia y tracción; el importe puede variar según el código postal y el equipamiento.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator), source('Nissan ARIYA: gama y versiones', 'https://www.nissan.es/vehiculos/nuevos-vehiculos/ariya.html')],
  },
  'townstar-combi': {
    basePrice: '32.387 €',
    versionPrices: {
      '1.3 gasolina 130, manual': listed('32.387 €', 'Acenta+, gasolina, 5 plazas'),
      '1.3 gasolina 130, DCT': listed('36.159 €', 'N-Connecta, gasolina, 5 plazas'),
      'Eléctrico 45 kWh': pending('Nissan publica el motor eléctrico del Townstar Combi, pero no se ha localizado un precio de esa carrocería de pasajeros en el configurador. El importe de 37.100 € corresponde al Townstar Furgón de doble cabina, no al Combi, y no se traslada.'),
    },
    note: 'Precios del configurador para clientes particulares consultados en noviembre de 2026. Los dos importes corresponden a configuraciones de gasolina Combi de cinco plazas; el motor también se ofrece con siete plazas, cuyo precio depende de la configuración. No se atribuye al Combi el precio del Townstar Furgón de doble cabina, aunque tenga cinco asientos.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator), source('Nissan Townstar Combi: motores', 'https://www.nissan.es/vehiculos/nuevos-vehiculos/townstar-combi/motores.html'), source('Configurador Nissan: precio del Townstar Furgón', 'https://configurador.nissan.es/inicio?lang=es&pbParticulares=true')],
  },
  'primastar-combi': {
    basePrice: '32.940 €',
    versionPrices: {
      '2.0 dCi 110, manual': listed('32.940 €', 'Acenta, Combi 6 plazas'),
      '2.0 dCi 150, manual': listed('34.510 €', 'Acenta, Combi 6 plazas'),
      '2.0 dCi 150, automático': listed('37.636 €', 'Acenta, Combi 9 plazas'),
    },
    note: 'Precios de partida del configurador oficial de Nissan para clientes particulares, antes de promociones. Se indica el acabado y la configuración Combi con que aparece cada importe. La carrocería está disponible con 6, 8 o 9 plazas y el precio cambia por longitud, número de asientos, transmisión y código postal.',
    sources: [source('Configurador Nissan para clientes particulares; precios consultados en noviembre de 2026', configurator), source('Nissan Primastar: gama Combi', 'https://www.nissan.es/vehiculos/nuevos-vehiculos/primastar.html'), source('Catálogo Nissan España, enero de 2026', 'https://www.nissan.es/content/dam/Nissan/es/brochures/catalogo-nissan-empresas-interactivo-enero2026.pdf')],
  },
};
