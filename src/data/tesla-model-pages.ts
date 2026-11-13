import type { ModelPageData } from './model-pages';

const reviewedAt = '11 de noviembre de 2026';
const tesla = 'https://www.tesla.com/es_es';
const energy = `${tesla}/support/power-consumption`;
const source = (label: string, url: string) => ({ label, url });
const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'tesla',
  reviewedAt,
  ...data,
});

// La tabla energética de Tesla aporta las potencias de cada unidad de tracción.
// Para las versiones Performance se usa la potencia de pico total que publica Tesla.
const electricVersion = (name: string, power: string) => ({
  name,
  type: 'Eléctrico',
  powertrainGroup: 'electric' as const,
  power,
  displacement: '—',
  maxTorque: '',
  torqueScope: '',
  torqueRpm: '',
});

export const teslaModels: ModelPageData[] = [
  model({
    modelSlug: 'model-3',
    title: 'Tesla Model 3: versiones, precios y motores en España',
    description: 'Consulta las versiones actuales del Tesla Model 3 en España, sus precios de configurador y las potencias oficiales por motor.',
    intro: 'El Tesla Model 3 es una berlina eléctrica que se puede configurar y pedir en España. La gama consultada incluye la versión de tracción trasera, dos variantes Premium de gran autonomía y el Model 3 Performance con tracción integral.',
    powertrainSummary: 'Todas las versiones emplean una batería y motores eléctricos. Tesla publica la potencia de las unidades de tracción en kW; aquí se muestra su conversión a CV. En las versiones de dos motores se indica la potencia de cada unidad por separado, sin sumarlas como si fuese la potencia total del sistema.',
    usageNote: 'La versión de tracción trasera es la de acceso. Las dos Premium de gran autonomía se distinguen por su tracción trasera o integral; el Performance añade una puesta a punto orientada a las prestaciones. La autonomía homologada cambia con la versión y las llantas elegidas.',
    versions: [
      electricVersion('Tracción trasera', 'Motor trasero: 283 CV (208 kW)'),
      electricVersion('Premium de gran autonomía · tracción trasera', 'Motor trasero: 320 CV (235 kW)'),
      electricVersion('Premium de gran autonomía · tracción integral', 'Motor delantero: 215 CV (158 kW); motor trasero: 283 CV (208 kW)'),
      electricVersion('Performance · tracción integral', 'Sistema: 460 CV (338 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o integral, según versión' },
      { label: 'Energía', value: 'Batería eléctrica; carga en corriente alterna o continua' },
    ],
    specNote: 'Las potencias de motor en kW proceden de la tabla energética oficial de Tesla y se convierten a CV (1 kW = 1,35962 CV, redondeado). Para el Performance se utiliza la potencia de pico del sistema publicada por Tesla: 460 CV. La documentación consultada no ofrece un par máximo asociado a un régimen de rpm verificable, por lo que no se incluye.',
    officialUrl: `${tesla}/model3`,
    technicalUrl: energy,
    sources: [
      source('Tesla España: Model 3, versiones y especificaciones', `${tesla}/model3`),
      source('Tesla España: configurador y precios del Model 3', `${tesla}/model3/design?redirect=no`),
      source('Tesla España: potencia por motor y consumo WLTP', energy),
    ],
  }),
  model({
    modelSlug: 'model-y',
    title: 'Tesla Model Y: versiones, precios y motores en España',
    description: 'Revisa las versiones del Tesla Model Y disponibles en España, sus precios publicados y la potencia de sus motores eléctricos.',
    intro: 'El Tesla Model Y es un SUV eléctrico mediano que se puede configurar y pedir en España. La gama consultada reúne una versión de tracción trasera, dos configuraciones de gran autonomía y el Model Y Performance con tracción integral.',
    powertrainSummary: 'Todas las variantes son eléctricas de batería. Tesla informa de la potencia de cada unidad de tracción en kW; las cifras se convierten a CV y, en las versiones de dos motores, se atribuyen al eje correspondiente. No se suman las potencias individuales para presentarlas como potencia de sistema.',
    usageNote: 'La versión de tracción trasera es la configuración de acceso. Las variantes de gran autonomía añaden una opción de tracción integral, mientras que Performance es la versión de mayores prestaciones. Comprueba en el configurador la distribución de asientos, las llantas y la autonomía asociada a la unidad concreta.',
    versions: [
      electricVersion('Tracción trasera', 'Motor trasero: 309 CV (227 kW)'),
      electricVersion('Gran autonomía · tracción trasera', 'Motor trasero: 299 CV (220 kW)'),
      electricVersion('Premium de gran autonomía · tracción integral', 'Motor delantero: 186 CV (137 kW); motor trasero: 309 CV (227 kW)'),
      electricVersion('Performance · tracción integral', 'Sistema: 460 CV (338 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico mediano' },
      { label: 'Tracción', value: 'Trasera o integral, según versión' },
      { label: 'Plazas', value: 'Cinco; la configuración disponible debe confirmarse en el configurador' },
    ],
    specNote: 'Las potencias por motor en kW proceden de la tabla energética oficial de Tesla y se convierten a CV (1 kW = 1,35962 CV, redondeado). Para el Model Y Performance se indica la potencia total de pico de 460 CV publicada por Tesla; no se suman las potencias de cada unidad. No se incluye par máximo porque no se publica junto con un régimen de rpm verificable.',
    officialUrl: `${tesla}/modely`,
    technicalUrl: energy,
    sources: [
      source('Tesla España: Model Y, versiones y especificaciones', `${tesla}/modely`),
      source('Tesla España: configurador y precios del Model Y', `${tesla}/modely/design?redirect=no`),
      source('Tesla España: potencia por motor y consumo WLTP', energy),
      source('Tesla España: presentación del Model Y Performance', `${tesla}/blog/introducing-new-model-y-performance`),
    ],
  }),
];
