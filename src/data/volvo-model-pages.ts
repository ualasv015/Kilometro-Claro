import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const root = 'https://www.volvocars.com/es';
const source = (label: string, url: string) => ({ label, url });

type VolvoSeed = {
  slug: string;
  name: string;
  body: string;
  intro: string;
  summary: string;
  usage: string;
  official: string;
  specs: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  figures?: { label: string; value: string }[];
  extraSources?: { label: string; url: string }[];
  note?: string;
};

const electric = (name: string, power: string): ModelVersion => ({
  name,
  type: 'Eléctrico',
  power,
  displacement: '—',
  maxTorque: '',
  torqueScope: 'Motor eléctrico',
  torqueRpm: 'No aplica según la plantilla',
});

const mildHybrid = (name: string, power: string, torque: string, rpm: string): ModelVersion => ({
  name,
  type: 'Microhíbrido (gasolina 48 V)',
  power,
  displacement: '1.969 cm³',
  maxTorque: torque,
  torqueScope: 'Motor térmico de gasolina',
  torqueRpm: rpm,
});

const plugIn = (name: string, power: string, torque = '', rpm = ''): ModelVersion => ({
  name,
  type: 'Híbrido enchufable (gasolina + eléctrico)',
  power,
  displacement: '1.969 cm³',
  maxTorque: torque,
  torqueScope: 'Motor térmico de gasolina',
  torqueRpm: rpm,
});

const makeModel = (seed: VolvoSeed): Omit<ModelPageData, 'reviewedAt'> => ({
  brandSlug: 'volvo',
  modelSlug: seed.slug,
  title: `Volvo ${seed.name}: motorizaciones y datos técnicos | Kilómetro Claro`,
  description: `Consulta las versiones y motorizaciones del Volvo ${seed.name} disponible en España, con potencia, cilindrada y par cuando Volvo publica el régimen.`,
  intro: seed.intro,
  powertrainSummary: seed.summary,
  usageNote: seed.usage,
  versions: seed.versions,
  facts: seed.facts,
  figures: seed.figures,
  specNote: seed.note ?? 'Las motorizaciones se contrastan con la ficha española de Volvo y, cuando la marca separa los datos del motor térmico y del sistema híbrido, se indica a cuál corresponde cada cifra. Las versiones y especificaciones pueden cambiar con el año-modelo; confirma la configuración concreta en Volvo España.',
  officialUrl: seed.official,
  technicalUrl: seed.specs,
  sources: [source(`Volvo ${seed.name}: página oficial`, seed.official), source(`Especificaciones oficiales del Volvo ${seed.name}`, seed.specs), ...(seed.extraSources ?? [])],
});

const ex30Specs = `${root}/cars/ex30-electric/specifications/`;
const ex40Specs = `${root}/cars/ex40-electric/specifications/`;
const ec40Specs = `${root}/cars/ec40-electric/specifications/`;
const ex60Specs = `${root}/cars/ex60-electric/specifications/`;
const ex90Specs = `${root}/cars/ex90-electric/specifications/`;
const es90Specs = `${root}/cars/es90-electric/specifications/`;
const xc40Specs = `${root}/cars/xc40/specifications/`;
const xc60Specs = `${root}/cars/xc60/specifications/`;
const xc60PlugInSpecs = `${root}/cars/xc60-hybrid/specifications/`;
const xc90Specs = `${root}/cars/xc90/specifications/`;
const xc90PlugInSpecs = `${root}/cars/xc90-hybrid/specifications/`;
const v60Specs = `${root}/cars/v60/specifications/`;
const v60PlugInSpecs = `${root}/cars/v60-hybrid/specifications/`;

const records: Omit<ModelPageData, 'reviewedAt'>[] = [
  makeModel({
    slug: 'ex30', name: 'EX30', body: 'SUV eléctrico',
    intro: 'El EX30 es el SUV eléctrico más compacto de Volvo. La gama española diferencia dos potencias de batería y una variante de tracción total; la potencia del motor se mantiene en las dos versiones P5.',
    summary: 'Volvo España ofrece P5, P5 Long Range y P8 AWD. Las fichas técnicas identifican potencia y tracción de cada versión; la cifra de par se omite en la tabla porque la plantilla no la muestra para motores eléctricos.',
    usage: 'Al comparar versiones, la diferencia principal está en la batería y en la tracción: P5 y P5 Long Range son de propulsión trasera, mientras que P8 AWD añade un motor delantero. La autonomía homologada depende también de batería, ruedas y configuración.',
    official: `${root}/cars/ex30-electric/`, specs: ex30Specs,
    versions: [
      electric('P5 Eléctrico', '272 CV (200 kW)'),
      electric('P5 Long Range Eléctrico', '272 CV (200 kW)'),
      electric('P8 AWD Eléctrico', '428 CV (315 kW)'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de cinco plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Gama', value: 'Tres configuraciones eléctricas' }],
    note: 'Volvo presenta las potencias del EX30 como cifras preliminares sujetas a certificación. No se incluye el par eléctrico en la tabla, de acuerdo con el criterio editorial aplicado a todas las fichas.',
  }),
  makeModel({
    slug: 'ex30-cross-country', name: 'EX30 Cross Country', body: 'SUV eléctrico todoterreno',
    intro: 'El EX30 Cross Country es la variante de aspecto y planteamiento más aventurero del EX30, con una configuración eléctrica de tracción total. Volvo lo presenta como una opción diferenciada dentro de la familia EX30.',
    summary: 'La documentación de Volvo para EX30 Cross Country identifica el sistema P8 AWD, con dos motores eléctricos y 315 kW (428 CV) de potencia máxima conjunta. La cilindrada no aplica y el par no se muestra en esta tabla.',
    usage: 'Su nombre Cross Country no lo convierte en un todoterreno especializado: es un SUV eléctrico con tracción total y una puesta a punto orientada a circular también por caminos adecuados al vehículo. Comprueba neumáticos, altura libre y límites de uso antes de salir del asfalto.',
    official: `${root}/cars/ex30-electric/`, specs: `${root}/support/car/ex30-cross-country/`,
    versions: [electric('P8 AWD Eléctrico', '428 CV (315 kW)')],
    facts: [{ label: 'Carrocería', value: 'SUV urbano eléctrico' }, { label: 'Tracción', value: 'Total AWD' }, { label: 'Potencia publicada', value: '315 kW (428 CV)' }],
    extraSources: [source('Especificaciones del motor eléctrico del EX30 Cross Country', `${root}/support/car/ex30-cross-country/article/0ed816eed33d98cac0a8cc377bc12bc7-241d345d2bf41f36c0a8b0973d024aff-8664b2fa77a7e089c0a8296870d1a409/`)],
    note: 'Volvo incluye esta variante dentro de la familia EX30 en su escaparate; su página española anuncia el Cross Country como opción de compra. La ficha técnica consultada publica el tren motriz P8 AWD.',
  }),
  makeModel({
    slug: 'ex40', name: 'EX40', body: 'SUV eléctrico',
    intro: 'El EX40 es un SUV eléctrico de cinco plazas que Volvo ofrece con propulsión trasera o tracción total. Las versiones Single Motor y Twin Motor se distinguen por potencia, batería y configuración de motores.',
    summary: 'La gama española incluye Single Motor de 238 CV, Single Motor Extended Range de 252 CV y Twin Motor de 408 CV. Se expresan las potencias en CV y kW; el par se deja en blanco por tratarse de motorizaciones eléctricas.',
    usage: 'La versión Extended Range incrementa la capacidad de batería sin cambiar la tracción trasera. Twin Motor incorpora tracción total y más potencia. Compara la autonomía WLTP de la configuración concreta, ya que cambia con llantas y equipamiento.',
    official: `${root}/cars/ex40-electric/`, specs: ex40Specs,
    versions: [electric('Single Motor', '238 CV (175 kW)'), electric('Single Motor Extended Range', '252 CV (185 kW)'), electric('Twin Motor AWD', '408 CV (300 kW)')],
    facts: [{ label: 'Carrocería', value: 'SUV de cinco plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Gama', value: 'Tres configuraciones eléctricas' }],
    note: 'Volvo califica de preliminares algunas cifras de potencia y autonomía de la gama eléctrica. La cilindrada se representa con «—» y el par no aparece por el criterio de esta plantilla.',
  }),
  makeModel({
    slug: 'ec40', name: 'EC40', body: 'Crossover eléctrico',
    intro: 'El EC40 es el crossover eléctrico de silueta más inclinada de Volvo. Comparte la oferta de motores con el EX40, aunque su carrocería y sus datos de autonomía homologada son propios.',
    summary: 'Volvo España publica Single Motor de 238 CV, Single Motor Extended Range de 252 CV y Twin Motor AWD de 408 CV. En la tabla se muestra la potencia conjunta anunciada, sin trasladar el par eléctrico a la columna de par máximo.',
    usage: 'Las versiones de un motor son de tracción trasera. Twin Motor añade tracción total. Para comparar autonomía o consumo, utiliza los valores de la ficha del EC40 y no los del EX40, aunque compartan algunas especificaciones mecánicas.',
    official: `${root}/cars/ec40-electric/`, specs: ec40Specs,
    versions: [electric('Single Motor', '238 CV (175 kW)'), electric('Single Motor Extended Range', '252 CV (185 kW)'), electric('Twin Motor AWD', '408 CV (300 kW)')],
    facts: [{ label: 'Carrocería', value: 'Crossover eléctrico de cinco plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Gama', value: 'Tres configuraciones eléctricas' }],
    note: 'La ficha española consultada distingue tres motores. Las cifras de potencia publicadas por Volvo pueden ser preliminares; la tabla omite el par de los motores eléctricos conforme a la plantilla.',
  }),
  makeModel({
    slug: 'ex60', name: 'EX60', body: 'SUV eléctrico mediano',
    intro: 'El EX60 es el SUV eléctrico mediano de la nueva generación de Volvo, con arquitectura de 800 V y tres configuraciones de propulsión. La gama española diferencia una versión de tracción trasera y dos de tracción total.',
    summary: 'Volvo publica P6 de 374 CV, P10 AWD de 510 CV y P12 AWD de 680 CV. La ficha comercial señala que las potencias son preliminares; se conservan esas cifras de referencia con esa salvedad.',
    usage: 'P6 utiliza un motor trasero. P10 y P12 emplean dos motores y tracción total; la batería y la autonomía varían según la configuración. Volvo anuncia que el EX60 Cross Country llegará más adelante, por lo que no se incluye como modelo de venta actual en este directorio.',
    official: `${root}/cars/ex60-electric/`, specs: ex60Specs,
    versions: [electric('P6 Eléctrico', '374 CV (275 kW)'), electric('P10 AWD Eléctrico', '510 CV (375 kW)'), electric('P12 AWD Eléctrico', '680 CV (500 kW)')],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico mediano de cinco plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Sistema eléctrico', value: '800 V' }],
    note: 'Volvo indica expresamente que las cifras de potencia del EX60 son preliminares y pueden estar pendientes de certificación. La gama refleja las versiones mostradas en la ficha española a 30 de octubre de 2026.',
  }),
  makeModel({
    slug: 'ex90', name: 'EX90', body: 'SUV eléctrico grande',
    intro: 'El EX90 es el SUV eléctrico grande de Volvo y ofrece siete plazas. La gama española permite elegir una motorización de un motor y dos opciones de tracción total con diferentes niveles de potencia.',
    summary: 'Las configuraciones actuales son Single Motor de 333 CV, Twin Motor de 456 CV y Twin Motor Performance de 680 CV. La cifra corresponde al sistema eléctrico de cada versión.',
    usage: 'La versión Single Motor utiliza tracción trasera; las Twin Motor incorporan tracción total. Si necesitas habitualmente las siete plazas, revisa también qué espacio de equipaje queda con todas ocupadas y la autonomía homologada de la versión elegida.',
    official: `${root}/cars/ex90-electric/`, specs: ex90Specs,
    versions: [electric('Single Motor', '333 CV (245 kW)'), electric('Twin Motor AWD', '456 CV (335 kW)'), electric('Twin Motor Performance AWD', '680 CV (500 kW)')],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico de hasta siete plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Gama', value: 'Tres configuraciones eléctricas' }],
    note: 'Volvo advierte de que algunas cifras de potencia son preliminares. El par eléctrico no se muestra en la tabla y la cilindrada se representa con «—», de acuerdo con el criterio de la plantilla.',
  }),
  makeModel({
    slug: 'es90', name: 'ES90', body: 'Berlina eléctrica',
    intro: 'El ES90 es la berlina eléctrica grande de Volvo. La gama española combina una versión de un motor con dos alternativas de doble motor y tracción total.',
    summary: 'Volvo España publica Single Motor Extended Range de 333 CV, Twin Motor de 456 CV y Twin Motor Performance de 680 CV. La tabla recoge la potencia del sistema de propulsión de cada configuración.',
    usage: 'La batería, la tracción y la potencia distinguen las versiones. La autonomía WLTP debe leerse siempre junto con la configuración de llantas y equipamiento de la unidad; no es una promesa de recorrido en cualquier condición.',
    official: `${root}/cars/es90-electric/`, specs: es90Specs,
    versions: [electric('Single Motor Extended Range', '333 CV (245 kW)'), electric('Twin Motor AWD', '456 CV (335 kW)'), electric('Twin Motor Performance AWD', '680 CV (500 kW)')],
    facts: [{ label: 'Carrocería', value: 'Berlina eléctrica de cinco plazas' }, { label: 'Tracción', value: 'Trasera o total, según versión' }, { label: 'Sistema eléctrico', value: '800 V' }],
    note: 'Volvo publica versiones con una y dos unidades motrices; las cifras de potencia de la versión Performance y la autonomía pueden variar según homologación y configuración. El par eléctrico se omite de esta tabla.',
  }),
  makeModel({
    slug: 'xc40', name: 'XC40', body: 'SUV microhíbrido',
    intro: 'El XC40 es el SUV compacto de Volvo con motor de gasolina y apoyo microhíbrido de 48 V. En la gama española consultada aparecen B3 y B4, ambas con transmisión automática y tracción delantera.',
    summary: 'B3 desarrolla 163 CV y B4, 197 CV. Las dos versiones usan un motor de gasolina de 1.969 cm³ asociado a un sistema de recuperación de energía de 48 V; el sistema eléctrico no impulsa el vehículo por sí solo.',
    usage: 'Mild hybrid no equivale a híbrido completo ni a híbrido enchufable: la batería de 48 V ayuda en determinadas fases, pero el coche sigue dependiendo del motor de gasolina. El equipamiento y algunos valores WLTP varían con acabado y ruedas.',
    official: `${root}/cars/xc40/`, specs: xc40Specs,
    versions: [mildHybrid('B3 Mild hybrid', '163 CV (120 kW)', '265 Nm', '1.500–4.000 rpm'), mildHybrid('B4 Mild hybrid', '197 CV (145 kW)', '300 Nm', '1.500–4.500 rpm')],
    facts: [{ label: 'Carrocería', value: 'SUV compacto de cinco plazas' }, { label: 'Tracción', value: 'Delantera en la gama consultada' }, { label: 'Tecnología', value: 'Gasolina microhíbrida de 48 V' }],
    extraSources: [source('Ficha técnica Volvo XC40 MY26: motores B3 y B4', 'https://www.volvocars.com/files/cs/v3/assets/blt84e01a6904dbd2e8/blt03a77df117aaa564/686e19450682042b2355f564/MY26_XC40_2.pdf?branch=prod_alias')],
    note: 'Las potencias corresponden a las cifras comerciales actuales de Volvo España. Para el par y su régimen se consultan datos de motor del fabricante; si una ficha o año-modelo concreto difiere, prevalece la documentación de esa unidad.',
  }),
  makeModel({
    slug: 'xc60', name: 'XC60', body: 'SUV mediano',
    intro: 'El XC60 es un SUV mediano disponible en España como microhíbrido de gasolina B5 AWD y como híbrido enchufable T6 AWD. Son dos sistemas distintos, así que la tabla separa la potencia térmica de la potencia combinada cuando corresponde.',
    summary: 'B5 desarrolla 250 CV con un sistema de 48 V. T6 AWD combina gasolina y electricidad y declara 335 CV de potencia conjunta. Para T6, el par mostrado se refiere solo al motor térmico y se indica su régimen.',
    usage: 'El B5 no se enchufa y emplea un sistema mild hybrid. El T6 es enchufable y puede recorrer algunos trayectos en modo eléctrico si se carga con regularidad; sus consumos homologados dependen de la distancia y del uso efectivo de la batería.',
    official: `${root}/cars/xc60/`, specs: xc60Specs,
    versions: [
      mildHybrid('B5 AWD Mild hybrid', '250 CV (184 kW)', '360 Nm', '2.000–4.500 rpm'),
      plugIn('T6 AWD Híbrido enchufable', '335 CV (247 kW)', '280 Nm', '1.800–4.500 rpm'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV mediano de cinco plazas' }, { label: 'Tecnologías', value: 'Microhíbrida o híbrida enchufable' }, { label: 'Tracción', value: 'AWD en las versiones citadas' }],
    extraSources: [source('Ficha del XC60 híbrido enchufable', xc60PlugInSpecs), source('Especificaciones del motor T6 del XC60', `${root}/support/car/xc60-plug-in-hybrid/article/47d2c97fd33effd3c0a8cc3718c999b7-cf578f17ce837790c0a8b04a1abf9aaa-8664b2fa77a7e089c0a8296870d1a409/47d2c97fd33effd3c0a8cc3718c999b7-5c34e51e554e050ec0a8b09759a1bda7-8664b2fa77a7e089c0a8296870d1a409/0ed816eed33d98cac0a8cc377bc12bc7-6bfdac4b4abcdd12c0a8b08066d6eafa-8664b2fa77a7e089c0a8296870d1a409/`)],
    note: 'La potencia del T6 es la combinada publicada por Volvo España. El par de 280 Nm corresponde al motor de gasolina B420T18, no al conjunto híbrido. La ficha comercial actual publica 589 Nm como par máximo del sistema, pero no su régimen; por eso no se mezcla con el dato térmico en esta tabla.',
  }),
  makeModel({
    slug: 'xc90', name: 'XC90', body: 'SUV grande',
    intro: 'El XC90 es el SUV grande de Volvo, con configuraciones de seis o siete plazas según versión. En el catálogo español actual aparece con el microhíbrido B5 AWD y el híbrido enchufable T8 AWD de rango extendido.',
    summary: 'B5 ofrece 250 CV con gasolina y apoyo de 48 V. T8 es enchufable y declara 461 CV combinados. En la fila T8, cilindrada y par se refieren al motor térmico; la potencia identifica el sistema completo.',
    usage: 'El T8 puede cubrir desplazamientos diarios en modo eléctrico si se carga, mientras que el B5 no requiere conexión externa. El peso, la capacidad de remolque y el uso de las plazas traseras pueden influir en consumo y autonomía reales.',
    official: `${root}/cars/xc90/`, specs: xc90Specs,
    versions: [mildHybrid('B5 AWD Mild hybrid', '250 CV (184 kW)', '360 Nm', '2.000–4.500 rpm'), plugIn('T8 AWD Híbrido enchufable de rango extendido', '461 CV (339 kW)', '360 Nm', '2.000–4.500 rpm')],
    facts: [{ label: 'Carrocería', value: 'SUV grande de seis o siete plazas' }, { label: 'Tecnologías', value: 'Microhíbrida o híbrida enchufable' }, { label: 'Tracción', value: 'AWD en las versiones citadas' }],
    extraSources: [source('Ficha del XC90 híbrido enchufable', xc90PlugInSpecs), source('Especificaciones del motor T8 del XC90', `${root}/support/car/xc90-plug-in-hybrid/article/47d2c97fd33effd3c0a8cc3718c999b7-cf578f17ce837790c0a8b04a1abf9aaa-8664b2fa77a7e089c0a8296870d1a409/47d2c97fd33effd3c0a8cc3718c999b7-5c34e51e554e050ec0a8b09759a1bda7-8664b2fa77a7e089c0a8296870d1a409/0ed816eed33d98cac0a8cc377bc12bc7-6bfdac4b4abcdd12c0a8b08066d6eafa-8664b2fa77a7e089c0a8296870d1a409/`)],
    note: 'Volvo publica 461 CV y 759 Nm como cifras del sistema híbrido T8, pero no indica el régimen del par conjunto. La tabla muestra la potencia combinada y, en la columna de par, únicamente los 360 Nm del motor de gasolina B420T16 a 2.000–4.500 rpm.',
  }),
  makeModel({
    slug: 'v60', name: 'V60', body: 'Familiar',
    intro: 'El V60 es el familiar de cinco plazas de Volvo. La gama española actual ofrece el B4 microhíbrido de gasolina y el T6 híbrido enchufable con tracción total.',
    summary: 'El B4 desarrolla 197 CV y utiliza un sistema de 48 V. El T6 AWD híbrido enchufable declara 335 CV de potencia combinada. El par se muestra solo cuando las fuentes técnicas publican el régimen aplicable a esa versión.',
    usage: 'El B4 no necesita recarga externa. El T6 enchufable puede funcionar en modo eléctrico en parte de los trayectos, pero el ahorro depende de cargarlo y de cuánto se conduzca dentro de su autonomía eléctrica. V60 Cross Country no se incluye: Volvo indica que dejó de estar disponible en stock y no admite nuevos pedidos.',
    official: `${root}/cars/v60/`, specs: v60Specs,
    versions: [mildHybrid('B4 Mild hybrid', '197 CV (145 kW)', '300 Nm', '1.500–4.500 rpm'), plugIn('T6 AWD Híbrido enchufable', '335 CV (247 kW)')],
    facts: [{ label: 'Carrocería', value: 'Familiar de cinco plazas' }, { label: 'Tecnologías', value: 'Microhíbrida o híbrida enchufable' }, { label: 'Tracción', value: 'Delantera en B4; total en T6' }],
    extraSources: [source('Ficha del V60 híbrido enchufable', v60PlugInSpecs), source('Especificaciones del motor B4 del V60', `${root}/support/car/v60/2022/article/b0804d54c7fc096bc0a81f6f065ad63e/8899be1dc7fc78b1c0a81f6f5a01b4ab/9421c969d4d00565c0a801517cea224d/`)],
    note: 'La potencia del T6 es la combinada publicada por Volvo España. En la fuente técnica española consultada para el V60 T6 no aparece un régimen verificable para el par del motor térmico; por eso la celda queda vacía. La fila B4 usa los datos del motor B420T5 que publica Volvo para el V60.',
  }),
];

export const volvoModels = records.map((model) => ({
  ...model,
  reviewedAt,
}));
