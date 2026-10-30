import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
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
): ModelVersion {
  return { name, type, power, displacement, maxTorque, torqueScope, torqueRpm, ...(additionalTorque ? { additionalTorque } : {}) };
}

function makePage(seed: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData {
  return { ...seed, brandSlug: 'ebro', reviewedAt };
}

const records: ModelPageData[] = [
  makePage({
    modelSlug: 's400',
    title: 'EBRO s400: motor híbrido y ficha técnica | Kilómetro Claro',
    description: 'Consulta la ficha del EBRO s400 HEV en España: potencia del sistema, cilindrada, datos del motor y fuentes técnicas oficiales.',
    intro: 'El EBRO s400 es el SUV compacto de la gama y se ofrece en España con un sistema híbrido autorrecargable. Combina un motor de gasolina de ciclo Atkinson con propulsión eléctrica; no necesita conectarse a un cargador para circular.',
    powertrainSummary: 'La ficha oficial identifica un motor 1.5 L DHE de gasolina y un motor eléctrico. La potencia máxima del sistema es de 155 kW (211 CV); las cifras individuales de los motores no deben sumarse, porque la potencia conjunta está limitada y se entrega según la gestión del sistema híbrido.',
    usageNote: 'Al ser un híbrido autorrecargable, el s400 no requiere instalar un punto de carga. Puede interesar a quien quiere una mecánica electrificada para uso urbano y mixto, pero conviene comparar su consumo real con el de otras alternativas del mismo tamaño y tener en cuenta que la capacidad del maletero cambia según cómo se mida y configure el vehículo.',
    versions: [
      version('1.5 L DHE HEV', 'Híbrido autorrecargable (gasolina + eléctrico)', 'Sistema: 211 CV (155 kW)', 'Térmico: 1.498 cm³'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipo de hibridación', value: 'Híbrido autorrecargable (HEV)' },
    ],
    specNote: 'La ficha oficial publica los pares máximos de los motores térmico y eléctrico, pero no sus regímenes; por ese motivo no se muestran en la tabla. La potencia indicada corresponde al sistema completo, no a la suma de las potencias individuales.',
    officialUrl: `${root}/modelos/s400-hev`,
    technicalUrl: `${root}/modelos/s400-hev/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Ficha técnica oficial EBRO s400 HEV', `${root}/modelos/s400-hev/especificaciones`), source('Presentación del EBRO s400 HEV', `${root}/modelos/s400-hev`)],
    image: photo('s400'),
  }),
  makePage({
    modelSlug: 's700',
    title: 'EBRO s700: motores de gasolina, HEV y PHEV | Kilómetro Claro',
    description: 'Compara las motorizaciones del EBRO s700 en España: gasolina 147 CV, híbrido HEV de 224 CV e híbrido enchufable de 279 CV.',
    intro: 'El EBRO s700 es un SUV de tamaño compacto que se comercializa con tres sistemas de propulsión: gasolina, híbrido autorrecargable e híbrido enchufable. La carrocería es común, pero cambian el motor, la transmisión y la necesidad de cargar externamente la batería.',
    powertrainSummary: 'La gama española combina el 1.6 TGDI de gasolina de 147 CV con dos variantes electrificadas: un HEV de 224 CV de potencia conjunta y un PHEV de 279 CV. En los híbridos, las cifras de potencia corresponden al sistema completo; la cilindrada indicada es la del motor térmico.',
    usageNote: 'El gasolina no requiere hábitos de recarga. El HEV recupera energía durante la marcha y no se enchufa; el PHEV permite recorrer parte del trayecto con energía externa, siempre que se cargue con regularidad. Para elegir entre ellos, compara el precio de compra, tus recorridos diarios y la posibilidad de cargar en casa o en el trabajo.',
    versions: [
      version('1.6 TGDI gasolina DCT7', 'Gasolina', '147 CV (108 kW)', '1.598 cm³'),
      version('1.5 TGDI HEV 1DHT', 'Híbrido autorrecargable (gasolina + eléctrico)', 'Sistema: 224 CV (165 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm', 'Eléctrico: 310 Nm (0–4.775 rpm)'),
      version('1.5 TGDI PHEV 1DHT', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 279 CV (205 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipos de motor', value: 'Gasolina, HEV y PHEV' },
    ],
    specNote: 'EBRO publica 275 Nm para el 1.6 TGDI de gasolina, pero no indica el régimen, por lo que no se incorpora a la tabla. En el HEV se muestran por separado los pares térmico y eléctrico, ambos con régimen publicado; el PHEV solo incluye el dato térmico con régimen, ya que la ficha no asigna uno al par eléctrico. Las potencias HEV y PHEV corresponden al sistema completo.',
    officialUrl: `${root}/modelos/s700-gasolina`,
    technicalUrl: `${root}/modelos/s700-gasolina/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Ficha técnica s700 gasolina', `${root}/modelos/s700-gasolina/especificaciones`), source('Ficha técnica s700 HEV', `${root}/modelos/s700-hev/especificaciones`), source('Ficha técnica s700 PHEV', `${root}/modelos/s700-phev/especificaciones`)],
    image: photo('s700'),
  }),
  makePage({
    modelSlug: 's800',
    title: 'EBRO s800: motores gasolina y PHEV | Kilómetro Claro',
    description: 'Ficha del EBRO s800 de siete plazas: motor gasolina 1.6 de 147 CV y variante PHEV de 279 CV con datos técnicos oficiales.',
    intro: 'El EBRO s800 es un SUV familiar de hasta siete plazas. En la gama española puede elegirse con un motor de gasolina 1.6 TGDI o con un sistema híbrido enchufable que combina un motor 1.5 TGDI y uno eléctrico.',
    powertrainSummary: 'La versión de gasolina entrega 147 CV (108 kW). El s800 PHEV declara 279 CV (205 kW) de potencia máxima del sistema; sus motores térmico y eléctrico no deben sumarse como si entregaran la potencia máxima al mismo tiempo. La cilindrada de cada versión corresponde al motor de gasolina.',
    usageNote: 'La versión de gasolina puede resultar más sencilla para quienes hacen viajes largos y no quieren depender de recargas externas. El PHEV permite circular en modo eléctrico durante trayectos cotidianos si se recarga, aunque su consumo depende mucho de cuántos kilómetros se hagan con batería. En ambas versiones, las dos plazas traseras condicionan la capacidad de equipaje cuando se usan.',
    versions: [
      version('1.6 TGDI gasolina DCT7', 'Gasolina', '147 CV (108 kW)', '1.598 cm³'),
      version('1.5 TGDI PHEV 1DHT', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 279 CV (205 kW)', 'Térmico: 1.499 cm³', '215 Nm', 'Motor térmico de gasolina', '2.500 rpm'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande de siete plazas' },
      { label: 'Plazas', value: '5+2' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Tipos de motor', value: 'Gasolina o híbrido enchufable' },
    ],
    specNote: 'La ficha de gasolina indica un par máximo de 275 Nm, pero no publica el régimen y se omite. En el PHEV se muestra el par del motor térmico, con régimen de 2.500 rpm; EBRO no asigna régimen al par máximo eléctrico. La potencia híbrida indicada es la del sistema completo.',
    officialUrl: `${root}/modelos/s800-gasolina`,
    technicalUrl: `${root}/modelos/s800-gasolina/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Ficha técnica s800 gasolina', `${root}/modelos/s800-gasolina/especificaciones`), source('Ficha técnica s800 PHEV', `${root}/modelos/s800-phev/especificaciones`), source('Gama EBRO PHEV', `${root}/gama-ebro-phev`)],
    image: photo('s800'),
  }),
  makePage({
    modelSlug: 's900',
    title: 'EBRO s900 PHEV: motor, potencia y ficha técnica | Kilómetro Claro',
    description: 'Consulta los datos oficiales del EBRO s900 PHEV: sistema híbrido enchufable 4x4 de 428 CV, motor 1.5 TGDI y siete plazas.',
    intro: 'El EBRO s900 es el SUV de mayor tamaño de la gama y se ofrece en España como híbrido enchufable con tracción integral. Combina un motor de gasolina 1.5 TGDI con tres motores eléctricos y una transmisión híbrida de tres relaciones.',
    powertrainSummary: 'El motor térmico desarrolla 143 CV (105 kW) y el conjunto alcanza 428 CV (315 kW). La ficha separa tres motores eléctricos, pero la potencia máxima del sistema no es la suma aritmética de sus cifras individuales: depende de la gestión conjunta de la transmisión híbrida.',
    usageNote: 'La batería enchufable permite recorrer parte de los trayectos diarios en modo eléctrico si se recarga con frecuencia. La tracción integral y las siete plazas amplían sus posibilidades de uso, aunque conviene valorar el tamaño exterior, el espacio de maletero disponible al desplegar la tercera fila y el peso del vehículo antes de compararlo con un SUV de cinco plazas.',
    versions: [
      version('1.5 TGDI PHEV 4x4 3DHT', 'Híbrido enchufable (gasolina + tres motores eléctricos)', 'Sistema: 428 CV (315 kW)', 'Térmico: 1.498 cm³'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande de siete plazas' },
      { label: 'Plazas', value: '5+2' },
      { label: 'Tracción', value: 'Integral 4x4' },
      { label: 'Tipo de motor', value: 'Híbrido enchufable' },
      { label: 'Batería', value: '34,46 kWh' },
    ],
    specNote: 'La ficha técnica publica pares máximos para el motor de combustión y los tres motores eléctricos, pero no sus regímenes; se omiten de la tabla conforme al criterio de esta sección. La potencia se expresa como dato del sistema completo. La foto disponible muestra un Chery Tiggo 9 global emparentado, no la unidad EBRO s900 comercializada en España.',
    officialUrl: `${root}/modelos/s900-phev`,
    technicalUrl: `${root}/modelos/s900-phev/especificaciones`,
    sources: [source('Gama oficial EBRO España', range), source('Ficha técnica oficial s900 PHEV', `${root}/modelos/s900-phev/especificaciones`), source('Gama oficial EBRO PHEV', `${root}/gama-ebro-phev`)],
    image: photo('s900'),
  }),
];

export const ebroModels = records;
