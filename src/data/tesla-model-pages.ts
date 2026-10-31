import type { ModelPageData } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const tesla = 'https://www.tesla.com/es_es';
const energy = `${tesla}/support/power-consumption`;
const source = (label: string, url: string) => ({ label, url });
const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'tesla',
  reviewedAt,
  ...data,
});

// La potencia eléctrica por motor procede de la tabla de Tesla. El par no se
// añade cuando la fuente no publica también un régimen de rpm comparable.
export const teslaModels: ModelPageData[] = [
  model({
    modelSlug: 'model-3',
    title: 'Tesla Model 3: versiones y motorizaciones disponibles en España',
    description: 'Consulta las versiones eléctricas del Tesla Model 3 en España, su potencia, tipo de tracción y fuentes oficiales.',
    intro: 'El Model 3 es la berlina eléctrica de Tesla y se puede configurar y pedir en España. La gama consultada incluye una versión de tracción trasera, dos configuraciones Premium de gran autonomía y el Model 3 Performance con tracción integral.',
    powertrainSummary: 'Todas las variantes son eléctricas de batería. Tesla publica la potencia de las unidades de tracción en kW; las cifras en CV de esta tabla son la conversión equivalente. En las versiones de dos motores se especifica cada unidad por separado y no se suman sus potencias.',
    usageNote: 'La versión trasera prioriza la sencillez de la gama, mientras que las Premium ofrecen más autonomía y la opción de tracción integral. Performance es la variante de prestaciones; la autonomía y el consumo dependen de llantas y configuración. Comprueba siempre el configurador español para consultar la oferta y las entregas vigentes.',
    versions: [
      { name: 'Tracción trasera', power: 'Motor trasero: 283 CV (208 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Premium de gran autonomía · tracción trasera', power: 'Motor trasero: 320 CV (235 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Premium de gran autonomía · tracción integral', power: 'Delantero: 215 CV (158 kW); trasero: 283 CV (208 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motores eléctricos delantero y trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Performance AWD · potencia de pico del sistema', power: '460 CV (338 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Sistema eléctrico de dos motores', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina eléctrica de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o integral, según versión' },
      { label: 'Carga', value: 'Conector Tipo 2 y carga rápida en corriente continua' },
    ],
    specNote: 'Tesla publica 460 CV de potencia de pico para el Model 3 Performance. Para las demás versiones, Tesla publica potencias por motor en kW en su tabla europea de consumo energético; los CV mostrados se convierten a partir de esos kW (1 kW = 1,35962 CV, redondeado). El par máximo no se incluye porque la documentación consultada no asocia un régimen de rpm verificable.',
    officialUrl: `${tesla}/model3`,
    technicalUrl: `${tesla}/model3/design?redirect=no`,
    sources: [
      source('Tesla España: Model 3 y versiones', `${tesla}/model3`),
      source('Tesla España: configurador y denominaciones de gama', `${tesla}/model3/design?redirect=no`),
      source('Tesla: potencia por motor y consumo WLTP', energy),
    ],
  }),
  model({
    modelSlug: 'model-y',
    title: 'Tesla Model Y: versiones y motorizaciones disponibles en España',
    description: 'Revisa las versiones del Tesla Model Y en España: tracción trasera, Premium de gran autonomía y Performance integral.',
    intro: 'El Model Y es el SUV eléctrico mediano de Tesla. En el catálogo español consultado, la gama comprende una versión de tracción trasera, Model Y Premium de gran autonomía con tracción trasera o integral y Model Y Performance con dos motores.',
    powertrainSummary: 'Todas las versiones son eléctricas de batería. Tesla informa de la potencia de los motores en kW; las cifras en CV se convierten a partir de esa potencia. En las variantes AWD aparecen por separado las unidades delantera y trasera, sin sumarlas como si fueran una única potencia continua.',
    usageNote: 'La carrocería SUV y el espacio interior diferencian al Model Y del Model 3. La versión de tracción trasera es la configuración de acceso; las Premium amplían las opciones de autonomía y tracción. La disponibilidad de siete plazas depende de la versión y el mercado, por lo que conviene confirmarla en el configurador español.',
    versions: [
      { name: 'Tracción trasera', power: 'Motor trasero: 309 CV (227 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Premium de gran autonomía · tracción trasera', power: 'Motor trasero: 299 CV (220 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Premium de gran autonomía · tracción integral', power: 'Delantero: 186 CV (137 kW); trasero: 309 CV (227 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motores eléctricos delantero y trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'Performance AWD', power: 'Delantero: 215 CV (158 kW); trasero: 412 CV (303 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motores eléctricos delantero y trasero', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico mediano' },
      { label: 'Tracción', value: 'Trasera o integral, según versión' },
      { label: 'Plazas', value: 'Cinco; la opción de siete depende de la configuración disponible' },
    ],
    specNote: 'Las potencias por motor se han tomado de la tabla europea de Tesla. Tesla identifica algunas configuraciones actuales como Premium de gran autonomía y muestra otras denominaciones en su documentación de energía; la tabla sigue los nombres del configurador español y refleja las potencias de motor publicadas para cada combinación. Los CV son conversiones redondeadas desde kW. El par se omite porque no se publica junto con un régimen de rpm verificable.',
    officialUrl: `${tesla}/modely`,
    technicalUrl: `${tesla}/modely/design?redirect=no`,
    sources: [
      source('Tesla España: Model Y y versiones', `${tesla}/modely`),
      source('Tesla España: configurador y denominaciones de gama', `${tesla}/modely/design?redirect=no`),
      source('Tesla: potencia por motor y consumo WLTP', energy),
    ],
  }),
  model({
    modelSlug: 'model-s',
    title: 'Tesla Model S: versiones eléctricas y disponibilidad en España',
    description: 'Ficha del Tesla Model S: versiones de motor dual y Plaid, potencia oficial y enlace al inventario español.',
    intro: 'El Model S es la berlina eléctrica de mayor tamaño y prestaciones de Tesla. Tesla España mantiene la información de las versiones Model S de motor dual y Model S Plaid, pero su página dirige al inventario en vez de ofrecer un configurador de pedido a medida.',
    powertrainSummary: 'Tesla declara 670 CV de potencia de pico para el Model S de motor dual y 1.020 CV para el Plaid de tres motores. Se trata de cifras del sistema eléctrico completo; no son la potencia de un único motor. Los kW entre paréntesis son conversiones matemáticas desde los CV publicados por Tesla.',
    usageNote: 'Antes de valorar una unidad nueva, revisa el inventario oficial para España: que el modelo conserve una página de producto no garantiza que haya unidades nuevas disponibles. La variante Plaid añade un tercer motor y prestaciones superiores; la elección también depende de la disponibilidad, el precio y el uso previsto.',
    versions: [
      { name: 'Motor dual AWD · potencia de pico del sistema', power: '670 CV (493 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Sistema eléctrico de dos motores', torqueRpm: 'No publicado en rpm' },
      { name: 'Plaid Tri Motor AWD · potencia de pico del sistema', power: '1.020 CV (750 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Sistema eléctrico de tres motores', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina eléctrica de lujo' },
      { label: 'Tracción', value: 'Integral' },
      { label: 'Disponibilidad', value: 'Consultar unidades nuevas en el inventario oficial español' },
    ],
    specNote: 'La página de producto de Tesla España declara 670 CV para el motor dual y 1.020 CV para el Plaid. Tesla también muestra potencias por motor en su tabla de consumo, pero no deben sumarse para sustituir la cifra de potencia pico del sistema. Los kW de esta tabla son conversiones redondeadas a partir de los CV oficiales (1 CV = 0,7355 kW).',
    officialUrl: `${tesla}/models?redirect=no`,
    technicalUrl: `${tesla}/inventory/new/ms`,
    sources: [
      source('Tesla España: Model S, versiones y potencia pico', `${tesla}/models?redirect=no`),
      source('Tesla España: inventario de Model S nuevos', `${tesla}/inventory/new/ms`),
      source('Tesla: potencia por motor y consumo WLTP', energy),
    ],
  }),
  model({
    modelSlug: 'model-x',
    title: 'Tesla Model X: versiones eléctricas y disponibilidad en España',
    description: 'Ficha del Tesla Model X: versiones de motor dual y Plaid, potencia del sistema y disponibilidad en inventario español.',
    intro: 'El Model X es el SUV eléctrico grande de Tesla, con una configuración de motor dual y otra Plaid de tres motores. La web española conserva la ficha del modelo y deriva al inventario; no presenta actualmente un configurador de pedido a medida.',
    powertrainSummary: 'Tesla declara 670 CV de potencia de pico para el Model X de motor dual y 1.020 CV para el Plaid. Son cifras del sistema eléctrico, no de un motor individual. Los kW entre paréntesis se han calculado a partir de los CV oficiales para mantener el formato de esta ficha.',
    usageNote: 'La carrocería alta y las opciones de varias plazas distinguen al Model X de las berlinas de la marca. Comprueba en el inventario oficial si existe una unidad nueva en España y revisa la distribución de asientos de esa configuración concreta. La versión Plaid es la alternativa de mayores prestaciones.',
    versions: [
      { name: 'Motor dual AWD · potencia de pico del sistema', power: '670 CV (493 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Sistema eléctrico de dos motores', torqueRpm: 'No publicado en rpm' },
      { name: 'Plaid Tri Motor AWD · potencia de pico del sistema', power: '1.020 CV (750 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Sistema eléctrico de tres motores', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico de gran tamaño' },
      { label: 'Tracción', value: 'Integral' },
      { label: 'Plazas', value: 'Hasta siete; depende de la versión y configuración' },
      { label: 'Disponibilidad', value: 'Consultar unidades nuevas en el inventario oficial español' },
    ],
    specNote: 'Tesla España publica 670 CV para el Model X de motor dual y 1.020 CV para el Plaid. La tabla de Tesla de potencia por motor aporta una referencia técnica adicional, pero la potencia pico del sistema se mantiene según la ficha del vehículo y no se obtiene sumando los motores. Los kW son conversiones redondeadas desde la cifra oficial en CV (1 CV = 0,7355 kW).',
    officialUrl: `${tesla}/modelx`,
    technicalUrl: `${tesla}/inventory/new/mx`,
    sources: [
      source('Tesla España: Model X, versiones y potencia pico', `${tesla}/modelx`),
      source('Tesla España: inventario de Model X nuevos', `${tesla}/inventory/new/mx`),
      source('Tesla: potencia por motor y consumo WLTP', energy),
    ],
  }),
];
