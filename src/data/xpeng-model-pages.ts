import type { ModelPageData } from './model-pages';

const reviewedAt = '31 de octubre de 2026';
const xpeng = 'https://www.xpeng-auto.es';
const source = (label: string, url: string) => ({ label, url });
const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'xpeng',
  reviewedAt,
  ...data,
});

// Se omite el par en toda la gama: XPENG no publica el régimen en rpm asociado.
export const xpengModels: ModelPageData[] = [
  model({
    modelSlug: 'g6',
    title: 'XPENG G6: versiones y motores eléctricos en España',
    description: 'Ficha del SUV eléctrico XPENG G6: potencias, baterías, tracción trasera o total y versiones disponibles en España.',
    intro: 'El G6 es un SUV eléctrico de cinco plazas que se vende en España con dos configuraciones de tracción trasera y una AWD Performance de doble motor. La gama combina una batería de 68,5 kWh en la versión Standard Range y otra de 80,8 kWh en las variantes Long Range y Performance.',
    powertrainSummary: 'Las tres versiones emplean propulsión eléctrica. La AWD Performance utiliza dos motores y tracción total; en las otras dos, el motor impulsa las ruedas traseras. XPENG publica la potencia máxima, pero la ficha consultada no asocia el par a un régimen en rpm, por lo que no se incluye esa cifra.',
    usageNote: 'La autonomía homologada depende de batería, tracción, ruedas y condiciones de uso. Antes de comparar versiones, comprueba si la carga habitual será en casa o en puntos públicos y recuerda que la autonomía real puede diferir de la WLTP.',
    versions: [
      { name: 'RWD Standard Range · batería 68,5 kWh', type: 'Eléctrico', power: '252 CV (185 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'RWD Long Range · batería 80,8 kWh', type: 'Eléctrico', power: '296 CV (218 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'AWD Performance · doble motor · batería 80,8 kWh', type: 'Eléctrico', power: '487 CV (358 kW)', displacement: '—', maxTorque: '', torqueScope: 'Dos motores eléctricos', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV coupé de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o total, según versión' },
      { label: 'Baterías', value: '68,5 o 80,8 kWh' },
    ],
    figures: [{ label: 'Autonomía máxima anunciada', value: 'Hasta 698 km en ciclo urbano WLTP para RWD Long Range; no equivale a autonomía en ciclo combinado' }],
    officialUrl: `${xpeng}/g6`,
    technicalUrl: `${xpeng}/configurador`,
    sources: [
      source('XPENG España: ficha técnica y versiones del G6', `${xpeng}/g6`),
      source('XPENG España: gama y configurador', `${xpeng}/configurador`),
    ],
  }),
  model({
    modelSlug: 'g9',
    title: 'XPENG G9: motores, baterías y versiones en España',
    description: 'Consulta las versiones eléctricas del XPENG G9, sus potencias, baterías y diferencias entre tracción trasera y total.',
    intro: 'El G9 es el SUV grande de XPENG y se ofrece con tracción trasera o total. La documentación española y el catálogo técnico MY2026 no describen exactamente la misma disponibilidad: la web española conserva referencias a una Standard Range de stock, mientras que la ficha MY2026 detalla Long Range y Performance AWD.',
    powertrainSummary: 'Todas las configuraciones son eléctricas. La Long Range monta un motor trasero; la Performance AWD añade un motor delantero. La Standard Range se recoge únicamente como unidad de stock citada por la web española, no como configuración ordinaria del catálogo MY2026. La marca no publica un régimen en rpm para el par, así que no lo mostramos.',
    usageNote: 'La batería de mayor capacidad y la tracción total responden a necesidades distintas: autonomía y prestaciones no deben compararse sin atender al ciclo WLTP, las ruedas y el uso previsto. La disponibilidad de la Standard Range depende del stock del concesionario.',
    versions: [
      { name: 'RWD Standard Range · batería 79 kWh · unidades de stock', type: 'Eléctrico', power: '351 CV (258 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'RWD Long Range · batería 93,1 kWh', type: 'Eléctrico', power: '351 CV (258 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en rpm' },
      { name: 'AWD Performance · doble motor · batería 93,1 kWh', type: 'Eléctrico', power: '575 CV (423 kW)', displacement: '—', maxTorque: '', torqueScope: 'Dos motores eléctricos', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o total' },
      { label: 'Batería MY2026', value: '93,1 kWh en Long Range y Performance AWD' },
    ],
    figures: [{ label: 'Autonomía WLTP máxima MY2026', value: 'Hasta 585 km en RWD Long Range; la cifra varía según configuración' }],
    specNote: 'La ficha técnica XPENG MY2026 indica que la configuración Standard Range no está disponible y especifica Long Range (346 hp, equivalentes a 351 CV) y Performance AWD (567 hp, equivalentes a 575 CV). La ficha comercial española todavía cita una Standard Range de 351 CV y 79 kWh ligada a unidades en stock; confirma su existencia y condiciones en el concesionario antes de considerar esa versión.',
    officialUrl: `${xpeng}/g9`,
    technicalUrl: 'https://s-cdn.xpeng.com/commoncms/prod/2026-04-23/23b66a96e9fb4961aa724fc8183cbdd5.pdf?name=Ficha+T%C3%A9cnica+-+G9+-+PDF',
    sources: [
      source('XPENG España: página y ficha comercial del G9', `${xpeng}/g9`),
      source('XPENG: ficha técnica G9 MY2026', 'https://s-cdn.xpeng.com/commoncms/prod/2026-04-23/23b66a96e9fb4961aa724fc8183cbdd5.pdf?name=Ficha+T%C3%A9cnica+-+G9+-+PDF'),
      source('XPENG España: gama y configurador', `${xpeng}/configurador`),
    ],
  }),
  model({
    modelSlug: 'p7-plus',
    title: 'XPENG P7+: versiones y potencia de la berlina eléctrica',
    description: 'Ficha del XPENG P7+ en España: versiones Standard Range, Long Range y AWD Performance con sus potencias y baterías.',
    intro: 'El P7+ es una berlina fastback eléctrica de cinco plazas. La oferta española reúne dos variantes de tracción trasera con distintas capacidades de batería y una versión AWD Performance de doble motor.',
    powertrainSummary: 'Las tres versiones son eléctricas. Standard Range y Long Range impulsan el eje trasero; AWD Performance incorpora un segundo motor. Las potencias corresponden a las cifras publicadas por XPENG España. No se muestra el par porque la documentación consultada no especifica su régimen en rpm.',
    usageNote: 'Las cifras de autonomía son WLTP y dependen de batería, tracción, ruedas y condiciones de circulación. La carrocería fastback prioriza el espacio y la eficiencia aerodinámica; comprueba el volumen de carga y el equipamiento de cada unidad si la comparas con una berlina convencional.',
    versions: [
      { name: 'RWD Standard Range · batería 61,7 kWh', type: 'Eléctrico', power: '245 CV (180 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'RWD Long Range · batería 74,9 kWh', type: 'Eléctrico', power: '313 CV (230 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'AWD Performance · doble motor · batería 74,9 kWh', type: 'Eléctrico', power: '503 CV (370 kW)', displacement: '—', maxTorque: '', torqueScope: 'Dos motores eléctricos', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina fastback de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o total, según versión' },
      { label: 'Baterías', value: '61,7 o 74,9 kWh' },
    ],
    figures: [{ label: 'Autonomía máxima anunciada', value: 'Hasta 660 km en ciclo urbano WLTP para RWD Long Range; no equivale a autonomía en ciclo combinado' }],
    officialUrl: `${xpeng}/p7`,
    technicalUrl: 'https://www.xpeng-auto.es/configurador/xpeng-p7mas',
    sources: [
      source('XPENG España: ficha técnica y versiones del P7+', `${xpeng}/p7`),
      source('XPENG España: configurador del P7+', 'https://www.xpeng-auto.es/configurador/xpeng-p7mas'),
    ],
  }),
  model({
    modelSlug: 'l03',
    title: 'XPENG L03 REEV: motor, batería y autonomía extendida',
    description: 'Ficha del XPENG L03 PowerX Long Range: propulsión eléctrica con extensor de autonomía, batería de 37,25 kWh y sistema REEV.',
    intro: 'El L03 PowerX Long Range se diferencia de los G6, G9 y P7+: es un vehículo de autonomía extendida (REEV). Las ruedas las mueve el sistema eléctrico y el motor térmico de 1,5 litros genera electricidad para ampliar el alcance. XPENG España anuncia una autonomía combinada WLTP de 1.017 km, que no debe interpretarse como recorrido exclusivamente eléctrico.',
    powertrainSummary: 'La página española identifica una batería LFP de 37,25 kWh, un sistema de propulsión eléctrica de 245 CV y un motor térmico de 1,5 litros asociado a la autonomía extendida. XPENG no publica el par máximo con su régimen en rpm, así que se omite. El modelo aparece en la web española con consulta a concesionario, pero no en el listado de vehículos configurables.',
    usageNote: 'El REEV puede reducir la necesidad de depender exclusivamente de cargadores en trayectos largos, pero también consume gasolina cuando interviene el extensor. La propia ficha distingue consumo ponderado con batería cargada y consumo con la batería descargada; no compares su autonomía combinada con la autonomía eléctrica de un BEV.',
    versions: [
      { name: 'PowerX Long Range · batería LFP 37,25 kWh', type: 'Eléctrico de autonomía extendida (REEV)', powertrainGroup: 'mixed', power: 'Sistema de tracción eléctrica: 245 CV (180 kW)', displacement: '1,5 l (motor térmico extensor)', maxTorque: '', torqueScope: 'Sistema eléctrico / extensor térmico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV coupé de cinco plazas' },
      { label: 'Sistema', value: 'REEV: tracción eléctrica con extensor térmico' },
      { label: 'Batería', value: 'LFP de 37,25 kWh' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP anunciada', value: '1.017 km; incluye el uso del extensor térmico' },
      { label: 'Consumo con batería descargada', value: '5,5 l/100 km combinado WLTP, según XPENG España' },
    ],
    specNote: 'La marca presenta el L03 con precio desde y un formulario para solicitar información al concesionario, pero no lo incluye entre los modelos configurables de su página general. La disponibilidad de pedido debe confirmarse en España. La potencia de 245 CV se atribuye al sistema de tracción eléctrica; la web no publica una potencia independiente del motor térmico extensor.',
    officialUrl: `${xpeng}/nuevol03`,
    technicalUrl: `${xpeng}/configurador`,
    sources: [
      source('XPENG España: ficha técnica, sistema REEV y consumo del L03', `${xpeng}/nuevol03`),
      source('XPENG España: modelos y configurador', `${xpeng}/configurador`),
    ],
  }),
];
