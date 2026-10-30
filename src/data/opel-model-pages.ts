import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const root = 'https://www.opel.es';
const store = 'https://store.opel.es';
const range = `${store}/configurable`;
const source = (label: string, url: string) => ({ label, url });

type OpelPhoto = {
  slug: string;
  alt: string;
  sourceTitle: string;
  sourceUrl: string;
  authorName: string;
  authorUrl?: string;
  licenseName: 'CC BY-SA 4.0' | 'CC BY-SA 3.0';
  licenseUrl: string;
  height: number;
  caption: string;
};

const photos: Record<string, OpelPhoto> = {
  corsa: {
    slug: 'corsa', alt: 'Opel Corsa de sexta generación fotografiado en un entorno urbano.',
    sourceTitle: '2023 Opel Corsa F IMG 9924.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:2023_Opel_Corsa_F_IMG_9924.jpg',
    authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
    licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 722,
    caption: 'Fotografía de referencia; el acabado y algunos detalles pueden diferir de la configuración española actual.',
  },
  astra: {
    slug: 'astra', alt: 'Opel Astra de generación actual fotografiado de tres cuartos.',
    sourceTitle: 'Opel Astra L 1X7A6738.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Astra_L_1X7A6738.jpg',
    authorName: 'Alexander Migl', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 619,
    caption: 'Imagen de referencia del Astra de generación actual; el acabado fotografiado puede no corresponder a la gama española.',
  },
  'astra-sports-tourer': {
    slug: 'astra-sports-tourer', alt: 'Opel Astra Sports Tourer familiar de generación actual.',
    sourceTitle: 'Opel Astra L Sports Tourer Leonberg 2022 1X7A0417.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Astra_L_Sports_Tourer_Leonberg_2022_1X7A0417.jpg',
    authorName: 'Alexander Migl', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 632,
    caption: 'Fotografía de referencia de la carrocería Sports Tourer; el acabado puede variar.',
  },
  frontera: {
    slug: 'frontera', alt: 'Opel Frontera eléctrico de la generación actual en una exposición.',
    sourceTitle: 'Opel Frontera C Electric Auto Zuerich 2024 DSC 6234.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Frontera_C_Electric_Auto_Zuerich_2024_DSC_6234.jpg',
    authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
    licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 764,
    caption: 'La fotografía muestra la variante eléctrica; el diseño exterior puede cambiar según acabado y motorización.',
  },
  mokka: {
    slug: 'mokka', alt: 'Opel Mokka de generación actual fotografiado de frente y lateral.',
    sourceTitle: '2025 Opel Mokka B DSC 9161.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:2025_Opel_Mokka_B_DSC_9161.jpg',
    authorName: 'Alexander Migl', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 975,
    caption: 'Fotografía de referencia del Mokka actual; algunos detalles de acabado pueden diferir de la oferta española.',
  },
  grandland: {
    slug: 'grandland', alt: 'Opel Grandland de nueva generación en una exposición de automóviles.',
    sourceTitle: 'Opel Grandland B IAA 2025 DSC 2113.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Grandland_B_IAA_2025_DSC_2113.jpg',
    authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
    licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 732,
    caption: 'Fotografía de referencia del Grandland actual; la unidad expuesta puede tener un acabado distinto.',
  },
  combo: {
    slug: 'combo', alt: 'Opel Combo de pasajeros, con ventanas laterales y carrocería familiar.',
    sourceTitle: 'Opel Combo E (Facelift) IMG 0657.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Combo_E_(Facelift)_IMG_0657.jpg',
    authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
    licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 879,
    caption: 'La imagen representa una carrocería Combo de pasajeros; el equipamiento y el acabado pueden variar.',
  },
  zafira: {
    slug: 'zafira', alt: 'Opel Zafira Life de pasajeros fotografiado de tres cuartos.',
    sourceTitle: 'Opel Zafira Life (Facelift) DSC 6022.jpg', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Zafira_Life_(Facelift)_DSC_6022.jpg',
    authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
    licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', height: 778,
    caption: 'Fotografía de referencia de Zafira Life; puede diferir del año-modelo y el acabado disponibles en Opel España.',
  },
  'vivaro-combi': {
    slug: 'vivaro-combi', alt: 'Opel Vivaro Combi de primera generación con ventanillas y configuración de pasajeros.',
    sourceTitle: 'Opel Vivaro Combi Facelift front.JPG', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Opel_Vivaro_Combi_Facelift_front.JPG',
    authorName: 'M 93', authorUrl: 'https://commons.wikimedia.org/wiki/User:M_93',
    licenseName: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', height: 824,
    caption: 'La fotografía muestra una generación anterior del Vivaro Combi porque no hemos encontrado una imagen actual del modelo con licencia verificable. Se incluye solo como referencia de carrocería de pasajeros.',
  },
};

function photo(slug: keyof typeof photos): NonNullable<ModelPageData['image']> {
  const item = photos[slug];
  return {
    src: `/images/models/commons/model-opel-${item.slug}.jpg`, alt: item.alt, caption: item.caption,
    width: 1280, height: item.height, sourceTitle: item.sourceTitle, sourceUrl: item.sourceUrl,
    authorName: item.authorName, ...(item.authorUrl ? { authorUrl: item.authorUrl } : {}),
    licenseName: item.licenseName, licenseUrl: item.licenseUrl,
  };
}

function version(
  name: string,
  type: string,
  power: string,
  displacement: string,
  maxTorque = '',
  torqueScope = '',
  torqueRpm = '',
): ModelVersion {
  return { name, type, power, displacement, maxTorque, torqueScope, torqueRpm };
}

function makePage(seed: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData {
  return { ...seed, brandSlug: 'opel', reviewedAt };
}

const records: ModelPageData[] = [
  makePage({
    modelSlug: 'corsa',
    title: 'Opel Corsa: motores gasolina, híbridos y eléctricos | Kilómetro Claro',
    description: 'Consulta las motorizaciones actuales del Opel Corsa en España: gasolina, Hybrid y eléctrico, con potencia, cilindrada y datos oficiales.',
    intro: 'El Opel Corsa es un utilitario de cinco puertas que cubre tres usos distintos con una misma carrocería: gasolina para quien busca una mecánica convencional, Hybrid sin enchufe y versiones eléctricas. La gama incluye también el Corsa GSE, la variante eléctrica de altas prestaciones.',
    powertrainSummary: 'Opel España ofrece el 1.2 de gasolina de 100 CV, dos versiones Hybrid de 110 y 145 CV, opciones eléctricas de 136 y 156 CV y el Corsa GSE eléctrico de 281 CV. Las cifras Hybrid corresponden a la potencia publicada para cada sistema; la cilindrada indicada es la del motor térmico.',
    usageNote: 'El Corsa de gasolina y el Hybrid se repostan en una estación de servicio; el segundo añade asistencia eléctrica y no necesita carga externa. Las versiones eléctricas se adaptan mejor a quien puede cargar en casa o en el trabajo. Para comparar sus costes, conviene incluir tanto el precio de compra como la energía y el tipo de recorridos habituales.',
    versions: [
      version('1.2 Turbo gasolina 100', 'Gasolina', '100 CV (74 kW)', '1.199 cm³', '205 Nm', 'Motor de gasolina', '1.750 rpm'),
      version('1.2 Hybrid 110', 'Híbrido de gasolina (48 V)', 'Sistema: 110 CV (81 kW)', 'Térmico: 1.199 cm³', '205 Nm', 'Motor térmico de gasolina', '1.750 rpm'),
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³', '230 Nm', 'Motor térmico de gasolina', '1.750 rpm'),
      version('Electric 50 kWh 136', 'Eléctrico', '136 CV (100 kW)', '—'),
      version('Electric 51 kWh 156', 'Eléctrico', '156 CV (115 kW)', '—'),
      version('Corsa GSE Electric 51 kWh', 'Eléctrico', '281 CV (207 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Utilitario de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tipos de motor', value: 'Gasolina, Hybrid de 48 V o eléctrico' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    specNote: 'La gama y las baterías pueden variar por acabado y año-modelo. Opel publica para las versiones térmicas e híbridas el par de 205 o 230 Nm a 1.750 rpm; no se traslada un par eléctrico porque la ficha no presenta un régimen de referencia comparable.',
    officialUrl: `${store}/selector/configurable/corsa-berlina`,
    technicalUrl: `${root}/hub/datasheet/corsa-my26-es.html`,
    sources: [source('Configurador oficial del Opel Corsa', `${store}/selector/configurable/corsa-berlina`), source('Ficha técnica Opel Corsa MY26', `${root}/hub/datasheet/corsa-my26-es.html`), source('Gama Opel España', range)],
    image: photo('corsa'),
  }),
  makePage({
    modelSlug: 'astra',
    title: 'Opel Astra: motores y versiones disponibles en España | Kilómetro Claro',
    description: 'Datos de las versiones del Opel Astra de cinco puertas: híbrida, diésel, híbrida enchufable y eléctrica, según Opel España.',
    intro: 'El Opel Astra de cinco puertas es el compacto de la marca. En la gama española consultada combina motores híbridos y diésel con alternativas híbridas enchufables y eléctricas, de modo que la decisión depende tanto del recorrido como de la posibilidad de recargar.',
    powertrainSummary: 'El configurador español muestra Hybrid de 145 CV, diésel de 130 CV, Plug-in Hybrid de 196 CV y Electric de 156 CV. Opel presenta las cifras de potencia total publicadas para Hybrid y Plug-in Hybrid; las cilindradas térmicas se identifican por separado.',
    usageNote: 'El diésel puede resultar pertinente para quien hace muchos kilómetros de carretera, mientras que Hybrid no requiere enchufe. El Plug-in Hybrid solo aprovecha plenamente su modo eléctrico si se recarga con frecuencia; si se usa con la batería descargada, su consumo puede acercarse al de un híbrido de gasolina más pesado. El Astra Electric elimina el combustible, pero exige planificar la carga.',
    versions: [
      version('1.5 Diésel 130', 'Diésel', '130 CV (96 kW)', '1.499 cm³'),
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³'),
      version('1.6 Plug-in Hybrid 196', 'Híbrido enchufable de gasolina', 'Sistema: 196 CV (144 kW)', 'Térmico: 1.598 cm³; eléctrico: —'),
      version('Electric 58 kWh 156', 'Eléctrico', '156 CV (115 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tipos de motor', value: 'Hybrid, diésel, híbrido enchufable y eléctrico' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    specNote: 'Opel identifica en sus páginas el Hybrid como una motorización electrificada no enchufable y publica 196 CV (144 kW) para el Plug-in Hybrid en el configurador actual. La ficha técnica puede mostrar cifras redondeadas o actualizadas según el año-modelo; comprueba la versión seleccionada antes de comparar.',
    officialUrl: `${store}/selector/configurable/astra-5p-berlina`,
    technicalUrl: `${root}/hub/datasheet/astra-my26-es.html`,
    sources: [source('Configurador oficial del Opel Astra 5 puertas', `${store}/selector/configurable/astra-5p-berlina`), source('Ficha técnica Opel Astra MY26', `${root}/hub/datasheet/astra-my26-es.html`), source('Gama Opel España', range)],
    image: photo('astra'),
  }),
  makePage({
    modelSlug: 'astra-sports-tourer',
    title: 'Opel Astra Sports Tourer: motores y versiones | Kilómetro Claro',
    description: 'Motorizaciones del Opel Astra Sports Tourer en España: Hybrid, diésel, híbrido enchufable y eléctrico con sus datos publicados.',
    intro: 'El Astra Sports Tourer es la carrocería familiar del compacto de Opel. Conserva las principales motorizaciones del Astra de cinco puertas y suma un formato más orientado a transportar equipaje, por lo que es importante comprobar qué combinación de motor y carrocería ofrece el configurador.',
    powertrainSummary: 'La oferta consultada incluye un Hybrid de 145 CV, un diésel de 130 CV, un Plug-in Hybrid de 195 CV y un Electric de 156 CV. Las potencias se presentan en la denominación publicada por Opel; el par se deja sin dato cuando la documentación no indica también el régimen.',
    usageNote: 'Para viajes frecuentes con carga, el familiar puede ser más práctico que el cinco puertas; no obstante, la motorización cambia la masa y la capacidad de remolque. El híbrido enchufable requiere recarga regular para aprovechar su funcionamiento eléctrico, mientras que el eléctrico es más sencillo de integrar si los trayectos diarios y la carga disponible encajan con su autonomía.',
    versions: [
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³'),
      version('1.5 Diésel 130', 'Diésel', '130 CV (96 kW)', '1.499 cm³'),
      version('1.6 Plug-in Hybrid 195', 'Híbrido enchufable de gasolina', 'Sistema: 195 CV (143 kW)', 'Térmico: 1.598 cm³; eléctrico: —'),
      version('Electric 54 kWh 156', 'Eléctrico', '156 CV (115 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Familiar de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tipos de motor', value: 'Hybrid, diésel, híbrido enchufable y eléctrico' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    specNote: 'El configurador puede mostrar diferencias de potencia o batería frente a páginas técnicas de otro año-modelo. Se ha tomado la oferta publicada para la carrocería Sports Tourer y no se han trasladado automáticamente sus cifras a la versión de cinco puertas.',
    officialUrl: `${store}/selector/configurable/astra-sports-tourer-berlina-familiar`,
    technicalUrl: `${root}/coches/gama-astra/astra/sports-tourer/resumen.html`,
    sources: [source('Configurador oficial del Astra Sports Tourer', `${store}/selector/configurable/astra-sports-tourer-berlina-familiar`), source('Astra Sports Tourer en Opel España', `${root}/coches/gama-astra/astra/sports-tourer/resumen.html`), source('Gama Opel España', range)],
    image: photo('astra-sports-tourer'),
  }),
  makePage({
    modelSlug: 'frontera',
    title: 'Opel Frontera: motores Hybrid y eléctricos | Kilómetro Claro',
    description: 'Compara las motorizaciones del Opel Frontera en España: gasolina, Hybrid de 110 o 145 CV y dos baterías eléctricas.',
    intro: 'El Opel Frontera es un SUV familiar disponible con motorización de gasolina, versiones Hybrid sin recarga externa y dos opciones eléctricas. En el eléctrico, la capacidad de batería modifica la autonomía homologada, aunque la potencia publicada se mantiene en 113 CV.',
    powertrainSummary: 'Opel España publica un gasolina de 100 CV, Hybrid de 110 y 145 CV y un Frontera Electric de 113 CV con baterías de 44 o 54 kWh. La ficha técnica expresa la potencia Hybrid por versión y documenta una cilindrada térmica de 1.199 cm³; no especifica el régimen del par máximo.',
    usageNote: 'La versión gasolina es la opción convencional de la gama; Hybrid añade asistencia eléctrica, pero no se conecta a un cargador. El Frontera Electric de 44 kWh prioriza un coste de acceso y el de 54 kWh ofrece más autonomía homologada. La autonomía real depende de la temperatura, la velocidad, el uso de climatización y la carga del vehículo.',
    versions: [
      version('1.2 Turbo gasolina 100', 'Gasolina', '100 CV (74 kW)', '1.199 cm³'),
      version('1.2 Hybrid 110', 'Híbrido de gasolina (48 V)', 'Sistema: 110 CV (81 kW)', 'Térmico: 1.199 cm³'),
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³'),
      version('Electric 44 kWh 113', 'Eléctrico', '113 CV (83 kW)', '—'),
      version('Electric Extended Range 54 kWh 113', 'Eléctrico', '113 CV (83 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV familiar' },
      { label: 'Plazas', value: 'Hasta 7, según configuración' },
      { label: 'Tipos de motor', value: 'Gasolina, Hybrid de 48 V o eléctrico' },
      { label: 'Baterías eléctricas', value: '44 o 54 kWh' },
    ],
    specNote: 'La ficha técnica MY26 publica el par máximo del motor de gasolina y Hybrid, pero no el régimen al que se alcanza; por ello no se incluye en la tabla. Para las dos baterías, Opel publica autonomías WLTP distintas y recomienda comprobar los datos de la versión seleccionada.',
    officialUrl: `${store}/selector/configurable/frontera-suv`,
    technicalUrl: `${root}/hub/datasheet/frontera-my26-es.html`,
    sources: [source('Configurador oficial del Opel Frontera', `${store}/selector/configurable/frontera-suv`), source('Ficha técnica Opel Frontera MY26', `${root}/hub/datasheet/frontera-my26-es.html`), source('Gama Opel España', range)],
    image: photo('frontera'),
  }),
  makePage({
    modelSlug: 'mokka',
    title: 'Opel Mokka: motores gasolina, Hybrid y eléctricos | Kilómetro Claro',
    description: 'Consulta los motores del Opel Mokka en España, incluido el Mokka GSE eléctrico, con potencias y datos del fabricante.',
    intro: 'El Opel Mokka es un SUV urbano que se ofrece con motor de gasolina, tecnología Hybrid de 48 V y propulsión eléctrica. La gama incluye además el Mokka GSE, una variante eléctrica de altas prestaciones que comparte familia, pero no planteamiento de uso, con el resto de la oferta.',
    powertrainSummary: 'El configurador español lista gasolina de 136 CV, Hybrid de 145 CV, Electric de 156 CV y Mokka GSE eléctrico de 280 CV. Las versiones de combustión utilizan el motor térmico de 1.199 cm³; Opel publica 230 Nm a 1.750 rpm para gasolina y Hybrid.',
    usageNote: 'El gasolina y el Hybrid sirven para quien no quiere depender de la recarga externa; el sistema de 48 V recupera energía y asiste al motor térmico, pero no convierte al Mokka en un híbrido enchufable. Las variantes eléctricas requieren planificar la carga y su autonomía cambia con el ritmo de conducción. El GSE debe compararse como una versión eléctrica más potente, no como una simple alternativa de acabado.',
    versions: [
      version('1.2 Turbo gasolina 136', 'Gasolina', '136 CV (100 kW)', '1.199 cm³', '230 Nm', 'Motor de gasolina', '1.750 rpm'),
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³', '230 Nm', 'Motor térmico de gasolina', '1.750 rpm'),
      version('Electric 54 kWh 156', 'Eléctrico', '156 CV (115 kW)', '—'),
      version('Mokka GSE Electric 280', 'Eléctrico', '280 CV (207 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano' },
      { label: 'Plazas', value: '5' },
      { label: 'Tipos de motor', value: 'Gasolina, Hybrid de 48 V o eléctrico' },
      { label: 'Variante deportiva', value: 'Mokka GSE, eléctrico de 280 CV' },
    ],
    specNote: 'Opel denomina Hybrid a su opción electrificada de 145 CV y publica el par térmico a 1.750 rpm. El par de las motorizaciones eléctricas no se muestra porque la ficha no da un régimen asociado.',
    officialUrl: `${store}/selector/configurable/mokka-suv`,
    technicalUrl: `${root}/hub/datasheet/mokka-my26-es.html`,
    sources: [source('Configurador oficial del Opel Mokka', `${store}/selector/configurable/mokka-suv`), source('Ficha técnica Opel Mokka MY26', `${root}/hub/datasheet/mokka-my26-es.html`), source('Gama Opel España', range)],
    image: photo('mokka'),
  }),
  makePage({
    modelSlug: 'grandland',
    title: 'Opel Grandland: híbrido, PHEV y eléctrico | Kilómetro Claro',
    description: 'Motorizaciones del Opel Grandland en España: Hybrid, híbrido enchufable y eléctricos de autonomía estándar, larga y AWD.',
    intro: 'El Grandland es el SUV grande de Opel y ofrece el abanico de propulsiones más amplio de esta selección: Hybrid, híbrido enchufable y tres variantes eléctricas. La batería, la tracción y la potencia cambian de forma relevante entre versiones, por lo que no conviene comparar solo el nombre del acabado.',
    powertrainSummary: 'El configurador actual muestra Hybrid de 145 CV, Plug-in Hybrid de 225 CV y eléctricos de 213, 231 y 325 CV. Las tres versiones eléctricas se distinguen por capacidad de batería y tracción; en las motorizaciones híbridas, la potencia indicada corresponde a la versión del sistema que ofrece Opel.',
    usageNote: 'El Hybrid no requiere cargarlo en un enchufe y puede encajar si se busca un SUV grande con uso mixto. El híbrido enchufable necesita recargas frecuentes para aprovechar su autonomía eléctrica; si se hacen viajes largos con la batería agotada, su consumo puede ser distinto del dato WLTP. En las versiones eléctricas, la autonomía declarada varía con la batería y la tracción, y el uso real depende de la ruta y la velocidad.',
    versions: [
      version('1.2 Hybrid 145', 'Híbrido de gasolina (48 V)', 'Sistema: 145 CV (107 kW)', 'Térmico: 1.199 cm³'),
      version('1.6 Plug-in Hybrid 225', 'Híbrido enchufable de gasolina', 'Sistema: 225 CV (165 kW)', 'Térmico: 1.598 cm³; eléctrico: —'),
      version('Electric 78,3 kWh 213', 'Eléctrico', '213 CV (157 kW)', '—'),
      version('Electric Long Range 100,7 kWh 231', 'Eléctrico', '231 CV (170 kW)', '—'),
      version('Electric AWD 79,9 kWh 325', 'Eléctrico con tracción total', '325 CV (239 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande' },
      { label: 'Plazas', value: '5' },
      { label: 'Baterías eléctricas', value: '78,3; 100,7 o 79,9 kWh, según versión' },
      { label: 'Tracción', value: 'Delantera; total en Electric AWD' },
    ],
    specNote: 'Hay una discrepancia entre documentos oficiales: el configurador de Opel Store consultado ofrece actualmente el Plug-in Hybrid de 225 CV (165 kW), mientras que la ficha técnica MY26 aún recoge una versión de 195 CV (143 kW). Se refleja la configuración vigente y se señala el cambio para evitar mezclar cifras de años-modelo distintos. El par publicado para otras versiones no incluye régimen en la ficha consultada, por lo que no se añade.',
    officialUrl: `${store}/selector/configurable/nuevo-grandland-suv`,
    technicalUrl: `${root}/hub/datasheet/grandland-my26-es.html`,
    sources: [source('Configurador oficial del Opel Grandland', `${store}/selector/configurable/nuevo-grandland-suv`), source('Ficha técnica Opel Grandland MY26', `${root}/hub/datasheet/grandland-my26-es.html`), source('Gama Opel España', range)],
    image: photo('grandland'),
  }),
  makePage({
    modelSlug: 'combo',
    title: 'Opel Combo de pasajeros: diésel y eléctrico | Kilómetro Claro',
    description: 'Ficha del Opel Combo para pasajeros: motores diésel y eléctricos, plazas y datos publicados por Opel España.',
    intro: 'El Opel Combo de pasajeros es una furgoneta compacta que puede configurarse para transportar hasta siete ocupantes, según carrocería y acabado. La oferta mezcla versiones diésel con el Combo Electric; esta ficha se limita a la carrocería de pasajeros y no incluye el Combo Cargo.',
    powertrainSummary: 'Opel Store muestra motores diésel 1.5 de 100 CV manual y 130 CV automático, además del Combo Electric con motor de 100 kW (136 CV) y batería de 50 kWh. No se añade un par máximo porque las fuentes consultadas no proporcionan conjuntamente la cifra y el régimen.',
    usageNote: 'El diésel puede resultar más cómodo para cubrir distancias largas con pasajeros y equipaje sin depender de recargas. El Electric puede tener sentido en desplazamientos diarios y recorridos urbanos con un punto de carga accesible. Antes de comparar, revisa la longitud de carrocería, el número de plazas y el espacio de maletero con todas las filas ocupadas.',
    versions: [
      version('1.5 Diésel 100 manual', 'Diésel', '100 CV (75 kW)', '1,5 l'),
      version('1.5 Diésel 130 automático', 'Diésel', '130 CV (96 kW)', '1,5 l'),
      version('Electric 50 kWh 136', 'Eléctrico', '136 CV (100 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Furgoneta compacta de pasajeros' },
      { label: 'Plazas', value: 'Hasta 7, según configuración' },
      { label: 'Tipos de motor', value: 'Diésel o eléctrico' },
      { label: 'Batería eléctrica', value: '50 kWh' },
    ],
    specNote: 'Opel comercializa también el Combo Cargo de carga, excluido de esta ficha. El catálogo de pasajeros y las unidades en stock pueden mostrar combinaciones diferentes; confirma plazas, longitud y disponibilidad en el configurador antes de comprar.',
    officialUrl: `${store}/selector/configurable/combo-combo`,
    technicalUrl: `${root}/coches/gama-combo/combo/resumen.html`,
    sources: [source('Configurador oficial del Opel Combo de pasajeros', `${store}/selector/configurable/combo-combo`), source('Configurador oficial del Combo Electric', `${store}/selector/configurable/combo-electric-combo`), source('Opel Combo en Opel España', `${root}/coches/gama-combo/combo/resumen.html`)],
    image: photo('combo'),
  }),
  makePage({
    modelSlug: 'zafira',
    title: 'Opel Zafira: motores diésel y eléctricos | Kilómetro Claro',
    description: 'Consulta las versiones de pasajeros del Opel Zafira: diésel de 150 o 180 CV y Zafira Electric con batería de 75 kWh.',
    intro: 'El Opel Zafira es un monovolumen grande de pasajeros pensado para familias numerosas, transporte de personas y viajes con varias filas de asientos. Opel mantiene una opción diésel y otra eléctrica; el número de plazas y la longitud dependen de la configuración.',
    powertrainSummary: 'Opel Store muestra una variante diésel de 150 CV manual y unidades de 180 CV con cambio automático. Opel también documenta el nuevo turbodiésel 2.2 de 180 CV y 400 Nm para Zafira. Zafira Electric ofrece un motor de 136 CV y una batería de 75 kWh.',
    usageNote: 'La alternativa diésel evita depender de la recarga en viajes largos y con ocupación alta. Zafira Electric resulta más coherente cuando la carga habitual está resuelta y las rutas se pueden planificar; su tamaño, número de plazas y carga transportada influyen en el consumo y la autonomía. Comprueba qué longitud y distribución de asientos corresponden a la unidad concreta.',
    versions: [
      version('Diésel 150 manual', 'Diésel', '150 CV (110 kW)', 'No publicada en la ficha consultada'),
      version('2.2 Diésel 180 automática', 'Diésel', '180 CV (132 kW)', '2.184 cm³'),
      version('Electric 75 kWh 136', 'Eléctrico', '136 CV (100 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Monovolumen de pasajeros' },
      { label: 'Plazas', value: 'Hasta 9, según configuración' },
      { label: 'Tipos de motor', value: 'Diésel o eléctrico' },
      { label: 'Batería eléctrica', value: '75 kWh' },
    ],
    specNote: 'El configurador español lista una opción diésel de 150 CV manual y unidades de 180 CV automáticas; el comunicado de Opel del 11 de febrero de 2026 identifica el nuevo 2.2 turbodiésel de 180 CV y 400 Nm, pero no publica el régimen del par. La cilindrada de la variante de 150 CV no se muestra en las fuentes consultadas, así que se deja expresamente sin especificar. El dato de par no se incorpora a la tabla porque falta su régimen.',
    officialUrl: `${store}/selector/configurable/zafira-zafira`,
    technicalUrl: 'https://www.media.stellantis.com/es-es/opel/press/potente-monovolumen-opel-zafira-con-nuevo-motor-diesel-de-2-2-litros',
    sources: [source('Configurador oficial Opel Zafira', `${store}/selector/configurable/zafira-zafira`), source('Configurador oficial Zafira Electric', `${store}/selector/configurable/zafira-electric-zafira`), source('Comunicado Opel sobre el diésel 2.2 del Zafira', 'https://www.media.stellantis.com/es-es/opel/press/potente-monovolumen-opel-zafira-con-nuevo-motor-diesel-de-2-2-litros')],
    image: photo('zafira'),
  }),
  makePage({
    modelSlug: 'vivaro-combi',
    title: 'Opel Vivaro Combi: motores diésel y eléctricos | Kilómetro Claro',
    description: 'Ficha del Opel Vivaro Combi para pasajeros: diésel 2.2 de 180 CV y Vivaro Combi Electric con batería de 50 o 75 kWh.',
    intro: 'El Vivaro Combi es la versión de pasajeros de la furgoneta mediana Opel Vivaro. La gama española contempla un motor diésel y una versión eléctrica; aquí se excluyen los Vivaro configurados únicamente como furgón de carga.',
    powertrainSummary: 'Opel documenta para Vivaro Combi el turbodiésel de 2,2 litros y 180 CV (132 kW), asociado a un cambio automático de ocho velocidades. La familia eléctrica aparece con motor de 136 CV (100 kW) y baterías de 50 o 75 kWh según longitud y configuración.',
    usageNote: 'El diésel puede encajar en rutas interurbanas largas y traslados con ocupación elevada, mientras que el Combi Electric necesita una planificación de carga acorde con el recorrido y el tamaño de batería. En esta categoría la longitud, el número de plazas y la carga a bordo afectan especialmente al consumo y a la autonomía. Revisa la homologación de la unidad concreta antes de comparar.',
    versions: [
      version('2.2 Diésel 180 automática', 'Diésel', '180 CV (132 kW)', '2.184 cm³'),
      version('Electric 50 kWh 136', 'Eléctrico', '136 CV (100 kW)', '—'),
      version('Electric 75 kWh 136', 'Eléctrico', '136 CV (100 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Furgoneta mediana de pasajeros' },
      { label: 'Plazas', value: 'Hasta 9, según configuración' },
      { label: 'Tipos de motor', value: 'Diésel o eléctrico' },
      { label: 'Baterías eléctricas', value: '50 o 75 kWh, según carrocería' },
    ],
    specNote: 'Opel publica que el Vivaro Combi recibe el motor diésel 2.2 de 180 CV; en su comunicado del 11 de febrero de 2026 especifica los 400 Nm del conjunto Zafira/Vivaro, pero no el régimen del par, por lo que se omite. La foto disponible con licencia verificable muestra una generación anterior del Combi y está identificada como tal.',
    officialUrl: range,
    technicalUrl: 'https://www.media.stellantis.com/es-es/opel/press/potente-monovolumen-opel-zafira-con-nuevo-motor-diesel-de-2-2-litros',
    sources: [source('Gama y configurador Opel España', range), source('Comunicado Opel sobre el Vivaro Combi diésel 2.2', 'https://www.media.stellantis.com/es-es/opel/press/potente-monovolumen-opel-zafira-con-nuevo-motor-diesel-de-2-2-litros')],
    image: photo('vivaro-combi'),
  }),
];

export const opelModels = records;
