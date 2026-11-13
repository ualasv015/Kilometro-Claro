import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '6 de noviembre de 2026';
const root = 'https://www.ebroauto.com';
const range = `${root}/modelos`;
const source = (label: string, url: string) => ({ label, url });

type EbroPhoto = {
  src: string;
  alt: string;
  sourceTitle: string;
  sourceUrl: string;
  authorName: string;
  authorUrl?: string;
  licenseName: string;
  licenseUrl: string;
  width: number;
  height: number;
  caption: string;
};

const photos: Record<string, EbroPhoto> = {
  s400: {
    src: '/images/models/commons/model-ebro-s400.jpg',
    alt: 'Chery Tiggo 4 de color plata, modelo emparentado con el EBRO s400; la imagen no muestra la versión española de EBRO.',
    sourceTitle: 'Moscow, Chery Tiggo 4 silver, May 2026 02.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Moscow,_Chery_Tiggo_4_silver,_May_2026_02.jpg',
    authorName: 'Retired electrician',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Retired_electrician',
    licenseName: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    width: 1280,
    height: 853,
    caption: 'Foto de referencia de un Chery Tiggo 4 emparentado; no es el EBRO s400 comercializado en España.',
  },
  s700: {
    src: '/images/models/commons/model-ebro-s700.jpg',
    alt: 'EBRO s700 fotografiado en una calle.',
    sourceTitle: 'Ebro S700.jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ebro_S700.jpg',
    authorName: 'Schumi4ever',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Schumi4ever',
    licenseName: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    width: 1280,
    height: 957,
    caption: 'Fotografía de la familia s700; el acabado puede diferir de las versiones actuales.',
  },
  s800: {
    src: '/images/models/commons/model-ebro-s800.jpg',
    alt: 'EBRO s800 fotografiado de perfil en un entorno urbano.',
    sourceTitle: 'Ebro S800 (3).jpg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ebro_S800_(3).jpg',
    authorName: 'Schumi4ever',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Schumi4ever',
    licenseName: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    width: 1280,
    height: 723,
    caption: 'Fotografía de la familia s800; el acabado puede diferir de las versiones actuales.',
  },
  s900: {
    src: '/images/models/commons/model-ebro-s900.jpg',
    alt: 'Chery Tiggo 9 global, modelo emparentado con el EBRO s900; la imagen no muestra la versión española de EBRO.',
    sourceTitle: '2024 Chery Tiggo 9 (global) front view.png',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2024_Chery_Tiggo_9_(global)_front_view.png',
    authorName: 'Autosdeprimera',
    authorUrl: 'https://www.youtube.com/watch?v=O3oizsMO-Y0',
    licenseName: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
    width: 1280,
    height: 768,
    caption: 'Foto de referencia de un Chery Tiggo 9 global emparentado; no es el EBRO s900 comercializado en España.',
  },
};

function photo(model: keyof typeof photos): NonNullable<ModelPageData['image']> {
  return photos[model];
}

function version(
  name: string,
  type: string,
  power: string,
  displacement: string,
  maxTorque = '',
  torqueScope = '',
  torqueRpm = '',
  additionalTorque = '',
  price = '',
  priceType = '',
): ModelVersion {
  return {
    name,
    type,
    power,
    displacement,
    maxTorque,
    torqueScope,
    torqueRpm,
    ...(additionalTorque ? { additionalTorque } : {}),
    ...(price ? { price } : {}),
    ...(priceType ? { priceType } : {}),
  };
}

function makePage(seed: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData {
  return { ...seed, brandSlug: 'ebro', reviewedAt };
}

const records: ModelPageData[] = [
  makePage({
    modelSlug: 's400',
    title: 'EBRO s400 y s400 Plus: motores HEV y precios | Kilómetro Claro',
    description: 'Ficha del EBRO s400 HEV y del nuevo s400 Plus: potencia, cilindrada, consumos, precios anunciados y diferencias entre versiones.',
    intro: 'El s400 es el SUV de acceso de EBRO. La gama española mantiene el s400 HEV de 211 CV y ha abierto la prerreserva del nuevo s400 Plus HEV, cuya potencia conjunta sube a 224 CV. Ambos son híbridos no enchufables: recuperan energía durante la marcha y no necesitan conectarse a un cargador.',
    powertrainSummary: 'EBRO ofrece dos configuraciones híbridas no enchufables bajo la familia s400. El s400 HEV combina un 1.5 L DHE de ciclo Atkinson y un motor eléctrico para entregar 211 CV de sistema; el s400 Plus HEV adopta un 1.5 TGDI y declara 224 CV conjuntos. Las potencias máximas individuales no se suman directamente para obtener la potencia del sistema.',
    usageNote: 'La ficha española del s400 HEV declara 5,3 l/100 km WLTP y una batería de 1,83 kWh; son cifras homologadas, no una promesa de consumo en cualquier trayecto. El Plus conserva el enfoque híbrido sin recarga externa, pero a 6 de noviembre de 2026 EBRO lo presenta en fase de prerreserva. Si comparas ambos, confirma en el concesionario qué acabado y fecha de entrega corresponden a cada precio.',
    basePrice: '19.990 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precios anunciados por motorización',
    priceNote: 'EBRO muestra el s400 HEV desde 19.990 € en su gama híbrida. Su página de producto anuncia además una oferta desde 18.990 €, sujeta a financiación y válida hasta el 30/11/2026, con el primer mantenimiento incluido. El nuevo s400 Plus aparece desde 22.990 € en prerreserva, también sujeto a financiación y con oferta hasta esa fecha; EBRO todavía no separa un PVP base sin esas condiciones. Los precios de acceso no permiten deducir el coste de acabados superiores.',
    versions: [
      version('1.5 L DHE HEV 1DHT', 'Híbrido no enchufable · HEV gasolina', 'Sistema: 211 CV (155 kW)', 'Térmico: 1.498 cm³', '', '', '', '', 'Precio Base: desde 19.990 €; oferta desde 18.990 €', 'La oferta publicada está sujeta a financiación, incluye el primer mantenimiento y es válida hasta el 30/11/2026.'),
      version('1.5 TGDI HEV Plus 1DHT', 'Híbrido no enchufable · HEV gasolina', 'Sistema: 224 CV (165 kW)', 'Térmico: 1,5 L', '', '', '', '', 'Desde 22.990 €', 'Precio de prerreserva sujeto a financiación; EBRO incluye primer mantenimiento y color Gris Tech, oferta hasta el 30/11/2026.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipo de hibridación', value: 'Híbrido no enchufable (HEV de gasolina)' },
    ],
    specNote: 'La ficha técnica del s400 HEV publica 125 Nm para el motor térmico y 310 Nm para el eléctrico, pero no sus regímenes; se omiten de la tabla. La nota de prensa del s400 Plus detalla un par total de 295 Nm, también sin régimen. Para el Plus se informa del motor térmico de 1,5 L y de la potencia conjunta, pero EBRO aún no ofrece una ficha técnica completa independiente.',
    officialUrl: `${root}/modelos/s400-hev`,
    technicalUrl: `${root}/modelos/s400-hev/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Gama híbrida y precios de acceso EBRO', `${root}/gama-hibrida`), source('Ficha técnica oficial EBRO s400 HEV', `${root}/modelos/s400-hev/especificaciones`), source('Página oficial s400 HEV y oferta vigente', `${root}/modelos/s400-hev`), source('Página oficial s400 Plus y prerreserva', `${root}/modelos/s400-plus-hev`), source('Comunicado oficial sobre el EBRO s400 Plus', `${root}/sala-de-prensa/ebro-amplia-la-gama-s400-con-la-nueva-version-plus-con-un-motor-1-5-tgdi-y-la-mas-avanzada-tecnologia-hibrida`)],
    image: photo('s400'),
  }),
  makePage({
    modelSlug: 's700',
    title: 'EBRO s700: versiones gasolina, HEV y PHEV | Kilómetro Claro',
    description: 'Compara las motorizaciones del EBRO s700 en España: gasolina 147 CV, híbrido HEV de 224 CV e híbrido enchufable de 279 CV.',
    intro: 'El EBRO s700 es un SUV compacto de cinco plazas disponible en España con motor de gasolina, híbrido no enchufable e híbrido enchufable. Sus tres alternativas comparten la carrocería, pero difieren en consumo homologado, potencia, precio y necesidad de cargar la batería desde una toma externa.',
    powertrainSummary: 'La oferta incluye el 1.6 TGDI de gasolina de 147 CV, el HEV 1.5 TGDI de 224 CV y el PHEV 1.5 TGDI de 279 CV. En ambos híbridos la potencia indicada es la máxima del sistema completo. El HEV no se enchufa; el PHEV sí permite cargar la batería desde la red y homologa hasta 90 km de autonomía eléctrica combinada según EBRO.',
    basePriceLabel: 'Precio anunciado por motorización',
    currentOfferPrice: '25.990 €',
    currentOfferLabel: 'Oferta anunciada; financiación y condiciones hasta 30/11/2026',
    versionPriceHeading: 'Precios publicados por motorización',
    priceNote: 'Precios consultados en EBRO España el 6/11/2026. El configurador muestra 25.990 € para gasolina y HEV y 26.990 € para el PHEV, dentro de una campaña con descuentos hasta el 30/11/2026 y mantenimiento incluido al financiar. Para el HEV, la gama híbrida publica un precio de acceso de 27.490 € antes de la campaña. EBRO no permite separar con suficiente claridad un PVP base permanente para las versiones de gasolina y PHEV; sus importes anunciados se muestran con las condiciones disponibles y quedan anotados en precios-pendientes.txt.',
    usageNote: 'El gasolina no requiere hábitos de recarga. El HEV recupera energía durante la marcha y no se enchufa; el PHEV permite recorrer parte del trayecto con energía externa, siempre que se cargue con regularidad. Para elegir entre ellos, compara el precio de compra, tus recorridos diarios y la posibilidad de cargar en casa o en el trabajo.',
    versions: [
      version('1.6 TGDI gasolina DCT7', 'Gasolina', '147 CV (108 kW)', '1.598 cm³', '', '', '', '', 'Desde 25.990 €', 'Oferta sujeta a financiación y válida hasta el 30/11/2026; PVP base sin campaña pendiente de verificación.'),
      version('1.5 TGDI HEV 1DHT', 'Híbrido no enchufable · HEV gasolina', 'Sistema: 224 CV (165 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm', 'Eléctrico: 310 Nm (0–4.775 rpm)', 'Precio Base: desde 27.490 €; configurador en campaña desde 25.990 €', 'El precio base de acceso aparece en la gama híbrida oficial. La oferta de configurador incluye condiciones comerciales y está vigente hasta el 30/11/2026.'),
      version('1.5 TGDI PHEV 1DHT', 'Híbrido enchufable · gasolina', 'Sistema: 279 CV (205 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm', '', 'Desde 26.990 €', 'Precio oficial anunciado con ayudas y condiciones comerciales aplicables; campaña consultada hasta el 30/11/2026. PVP sin ayudas pendiente de verificación.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipos de motor', value: 'Gasolina, híbrido no enchufable e híbrido enchufable' },
    ],
    specNote: 'EBRO publica 275 Nm para el 1.6 TGDI de gasolina, pero no indica el régimen, por lo que no se incorpora a la tabla. En el HEV se muestran por separado los pares térmico y eléctrico, ambos con régimen publicado; el PHEV solo incluye el dato térmico con régimen, ya que la ficha no asigna uno al par eléctrico. Las potencias HEV y PHEV corresponden al sistema completo.',
    officialUrl: `${root}/modelos/s700-gasolina`,
    technicalUrl: `${root}/modelos/s700-gasolina/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Gama híbrida y precios de acceso EBRO', `${root}/gama-hibrida`), source('Configurador oficial EBRO s700 y precios por motorización', `${root}/configurador/ebro-s700`), source('Ficha y oferta oficial s700 gasolina', `${root}/modelos/s700-gasolina`), source('Ficha técnica s700 gasolina', `${root}/modelos/s700-gasolina/especificaciones`), source('Ficha y especificaciones s700 HEV', `${root}/modelos/s700-hev/especificaciones`), source('Ficha y especificaciones s700 PHEV', `${root}/modelos/s700-phev/especificaciones`), source('Condiciones comerciales EBRO de noviembre de 2026', `${root}/sala-de-prensa/ebro-baja-precios`)],
    image: photo('s700'),
  }),
  makePage({
    modelSlug: 's800',
    title: 'EBRO s800: versiones gasolina y PHEV | Kilómetro Claro',
    description: 'Ficha del EBRO s800 de siete plazas: motor gasolina 1.6 de 147 CV y variante PHEV de 279 CV con datos técnicos oficiales.',
    intro: 'El EBRO s800 es un SUV familiar de hasta siete plazas. La gama española combina un motor 1.6 TGDI de gasolina con una variante híbrida enchufable 1.5 TGDI. El PHEV añade circulación eléctrica en trayectos cortos si se carga con regularidad; el gasolina evita depender de una toma de carga.',
    powertrainSummary: 'El 1.6 TGDI de gasolina desarrolla 147 CV (108 kW). El sistema PHEV entrega 279 CV (205 kW) de potencia conjunta; la potencia máxima térmica y eléctrica no se suman directamente. En el híbrido se publica un par térmico de 215 Nm a 2.500 rpm, mientras que la ficha no indica régimen para el motor eléctrico.',
    basePriceLabel: 'Precio anunciado por motorización',
    currentOfferPrice: '30.990 €',
    currentOfferLabel: 'Oferta financiada hasta 30/11/2026',
    versionPriceHeading: 'Precios publicados por motorización',
    priceNote: 'Precios consultados el 6/11/2026. La página del s800 gasolina anuncia 30.990 € sujeto a financiación, con primer mantenimiento incluido y oferta válida hasta el 30/11/2026. La gama híbrida oficial publica el s800 PHEV desde 31.990 €. Como EBRO no muestra un precio base actual sin condiciones para la versión de gasolina, ese PVP queda anotado como pendiente; no se usa el importe financiado como tarifa.',
    usageNote: 'La versión de gasolina puede resultar más sencilla para quienes hacen viajes largos y no quieren depender de recargas externas. El PHEV permite circular en modo eléctrico durante trayectos cotidianos si se recarga, aunque su consumo depende mucho de cuántos kilómetros se hagan con batería. En ambas versiones, las dos plazas traseras condicionan la capacidad de equipaje cuando se usan.',
    versions: [
      version('1.6 TGDI gasolina DCT7', 'Gasolina', '147 CV (108 kW)', '1.598 cm³', '', '', '', '', 'Desde 30.990 €', 'Oferta sujeta a financiación, incluye primer mantenimiento y es válida hasta el 30/11/2026; PVP base sin campaña pendiente de verificación.'),
      version('1.5 TGDI PHEV 1DHT', 'Híbrido enchufable · gasolina', 'Sistema: 279 CV (205 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm', '', 'Precio anunciado desde 31.990 €', 'Precio de acceso publicado por EBRO para la versión PHEV; las campañas vigentes pueden añadir descuentos con condiciones.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande de siete plazas' },
      { label: 'Plazas', value: '5+2' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipos de motor', value: 'Gasolina e híbrido enchufable' },
    ],
    specNote: 'La ficha de gasolina indica un par máximo de 275 Nm, pero no publica el régimen y se omite. En el PHEV se muestra el par del motor térmico, con régimen de 2.500 rpm; EBRO no asigna régimen al par máximo eléctrico. La potencia híbrida indicada es la del sistema completo.',
    officialUrl: `${root}/modelos/s800-gasolina`,
    technicalUrl: `${root}/modelos/s800-gasolina/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Gama híbrida y precios de acceso EBRO', `${root}/gama-hibrida`), source('Configurador oficial EBRO s800', `${root}/configurador/ebro-s800`), source('Ficha y oferta oficial s800 gasolina', `${root}/modelos/s800-gasolina`), source('Ficha técnica s800 gasolina', `${root}/modelos/s800-gasolina/especificaciones`), source('Ficha y especificaciones s800 PHEV', `${root}/modelos/s800-phev/especificaciones`), source('Gama oficial EBRO PHEV', `${root}/gama-ebro-phev`)],
    image: photo('s800'),
  }),
  makePage({
    modelSlug: 's900',
    title: 'EBRO s900 PHEV: motor, potencia y ficha técnica | Kilómetro Claro',
    description: 'Consulta los datos oficiales del EBRO s900 PHEV: sistema híbrido enchufable 4x4 de 428 CV, motor 1.5 TGDI y siete plazas.',
    intro: 'El EBRO s900 es el SUV de mayor tamaño de la gama y se ofrece en España como híbrido enchufable con tracción integral. Combina un motor de gasolina 1.5 TGDI con tres motores eléctricos y una transmisión híbrida de tres relaciones.',
    powertrainSummary: 'El motor térmico 1.5 TGDI desarrolla 143 CV (105 kW) y el sistema PHEV alcanza 428 CV (315 kW). EBRO identifica tres motores eléctricos, pero la potencia máxima del sistema no es la suma aritmética de sus cifras individuales: depende de la gestión conjunta de la transmisión híbrida.',
    basePrice: '41.590 €',
    basePriceLabel: 'Precio Base',
    versionPriceHeading: 'Precio publicado por motorización',
    priceNote: 'La gama híbrida y el configurador oficial EBRO publican el s900 PHEV desde 41.590 €. La página del modelo anuncia descuentos promocionales de hasta 12.400 € hasta el 30/11/2026; el ahorro máximo no equivale al precio final de todas las configuraciones y no se resta de la cifra de acceso.',
    usageNote: 'La batería enchufable permite recorrer parte de los trayectos diarios en modo eléctrico si se recarga con frecuencia. La tracción integral y las siete plazas amplían sus posibilidades de uso, aunque conviene valorar el tamaño exterior, el espacio de maletero disponible al desplegar la tercera fila y el peso del vehículo antes de compararlo con un SUV de cinco plazas.',
    versions: [
      version('1.5 TGDI PHEV 4x4 3DHT', 'Híbrido enchufable · gasolina', 'Sistema: 428 CV (315 kW)', 'Térmico: 1.498 cm³', '', '', '', '', 'Precio anunciado desde 41.590 €', 'Precio de acceso publicado por EBRO; la campaña ofrece descuentos de hasta 12.400 € hasta el 30/11/2026, sujetos a configuración y condiciones.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande de siete plazas' },
      { label: 'Plazas', value: '5+2' },
      { label: 'Tracción', value: 'Integral 4x4' },
      { label: 'Tipo de motor', value: 'Híbrido enchufable · gasolina' },
      { label: 'Batería', value: '34,46 kWh' },
    ],
    specNote: 'La ficha técnica publica pares máximos para el motor de combustión y los tres motores eléctricos, pero no sus regímenes; se omiten de la tabla conforme al criterio de esta sección. La potencia se expresa como dato del sistema completo. La foto disponible muestra un Chery Tiggo 9 global emparentado, no la unidad EBRO s900 comercializada en España.',
    officialUrl: `${root}/modelos/s900-phev`,
    technicalUrl: `${root}/modelos/s900-phev/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Gama híbrida y precios de acceso EBRO', `${root}/gama-hibrida`), source('Configurador oficial EBRO s900', `${root}/configurador/ebro-s900`), source('Ficha y oferta oficial s900 PHEV', `${root}/modelos/s900-phev`), source('Ficha técnica oficial s900 PHEV', `${root}/modelos/s900-phev/especificaciones`), source('Gama oficial EBRO PHEV', `${root}/gama-ebro-phev`)],
    image: photo('s900'),
  }),
];

export const ebroModels = records;
