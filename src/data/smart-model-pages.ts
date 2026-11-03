import type { ModelPageData } from './model-pages';

const reviewedAt = '3 de noviembre de 2026';
const smart = 'https://es.smart.com/es';
const source = (label: string, url: string) => ({ label, url });

const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'smart',
  reviewedAt,
  ...data,
});

export const smartModels: ModelPageData[] = [
  model({
    modelSlug: '1',
    title: 'smart #1: versiones eléctricas y ficha técnica | Kilómetro Claro',
    description: 'Consulta las versiones, potencias eléctricas y datos oficiales del smart #1 en España, con notas sobre autonomía WLTP y diferencias entre acabados.',
    intro: 'El smart #1 es el SUV compacto eléctrico de la gama actual de smart en España. La ficha técnica local agrupa varias versiones con motor de 200 kW y distingue el BRABUS de dos motores, con tracción total y 315 kW. Las cifras de par máximo aparecen sin régimen de giro publicado; por eso no las trasladamos a la tabla.',
    powertrainSummary: 'Las versiones Pure, Pro, Pro+, Pro+ Black Collection y Premium comparten una potencia oficial de 200 kW (272 CV). El smart #1 BRABUS añade un segundo motor y alcanza 315 kW (428 CV). La marca publica cifras de par en Nm, pero no indica las revoluciones correspondientes, así que la columna queda vacía conforme al criterio de esta ficha.',
    usageNote: 'La autonomía homologada depende de la batería y del acabado: smart España publica hasta 440 km WLTP para el Premium y 310 km para Pure y Pro. Esas cifras permiten comparar configuraciones en un ciclo normalizado, pero no predicen por sí solas el alcance de un trayecto concreto. Velocidad, temperatura, desnivel, climatización y estilo de conducción influyen en la autonomía real. Comprueba en el configurador cuál es la batería incluida en cada acabado.',
    versions: [
      { name: 'Pure, Pro, Pro+, Pro+ Black Collection y Premium', type: 'Eléctrico', power: '272 CV (200 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'BRABUS · dos motores', type: 'Eléctrico', power: '428 CV (315 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por smart' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de cinco plazas' },
      { label: 'Tracción', value: 'Trasera en las versiones de un motor; total en BRABUS' },
      { label: 'Autonomía WLTP publicada', value: 'Hasta 440 km, según versión' },
      { label: 'Baterías indicadas por smart', value: 'LFP o NCM, según acabado' },
    ],
    specNote: 'La tabla técnica española lista Pure, Pro, Pro+, Pro+ Black Collection, Premium y BRABUS. En otros textos de la misma web aparece también la denominación Pulse asociada a cifras de consumo y autonomía, pero no figura con una potencia propia en esa tabla técnica; no le asignamos una configuración independiente. Las versiones y la oferta pueden variar, por lo que conviene confirmar el acabado disponible al configurar el vehículo.',
    officialUrl: `${smart}/models/hashtag-one/`,
    technicalUrl: `${smart}/models/hashtag-one/specifications/`,
    sources: [
      source('smart España: smart #1, versiones y descripción del modelo', `${smart}/models/hashtag-one/`),
      source('smart España: ficha técnica del smart #1', `${smart}/models/hashtag-one/specifications/`),
      source('smart España: gama disponible en el mercado español', `${smart}/models/`),
    ],
    image: {
      src: '/images/models/commons/model-smart-1.jpg',
      alt: 'smart #1 blanco fotografiado en Böblingen, Alemania.',
      caption: 'La fotografía muestra un smart #1 de una versión anterior; el acabado, el color y el equipamiento pueden diferir de la configuración actual en España.',
      width: 1280,
      height: 852,
      sourceTitle: 'Smart Hashtag 1 IMG 7326.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Smart_Hashtag_1_IMG_7326.jpg',
      authorName: 'Alexander-93',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  }),
  model({
    modelSlug: '3',
    title: 'smart #3: motores eléctricos, versiones y ficha técnica | Kilómetro Claro',
    description: 'Ficha del smart #3 en España: potencias de sus versiones eléctricas, diferencias entre tracción trasera y total y límites de los datos publicados.',
    intro: 'El smart #3 es un SUV coupé totalmente eléctrico que combina versiones de tracción trasera con variantes de dos motores y tracción total. La página técnica española recoge 200 kW para las versiones de un motor y 315 kW para BRABUS; la página comercial añade Pulse con 271 kW. Dejamos constancia de esa diferencia entre documentos oficiales.',
    powertrainSummary: 'Pro, Pro+, Pro+ Black Collection y Premium figuran con 200 kW (272 CV). La página comercial española identifica Pulse con dos motores, tracción total y 271 kW (368 CV); BRABUS alcanza 315 kW (428 CV) en la ficha técnica. smart publica pares de 343 y 543 Nm, pero no sus regímenes en rpm, de modo que no se muestran en la última columna.',
    usageNote: 'smart publica hasta 455 km WLTP para Premium; Pro figura con 325 km y Pulse y BRABUS con 415 km en la información comercial. La ficha técnica española mantiene una nota que califica como preliminares las cifras WLTP asociadas a su referencia de homologación europea. Por ello conviene contrastar el dato vigente en el configurador o con un concesionario antes de usarlo para planificar un recorrido. La autonomía real también varía con el ritmo, la temperatura, la carga y el recorrido.',
    versions: [
      { name: 'Pro, Pro+, Pro+ Black Collection y Premium', type: 'Eléctrico', power: '272 CV (200 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'Pulse · dos motores', type: 'Eléctrico', power: '368 CV (271 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'BRABUS · dos motores', type: 'Eléctrico', power: '428 CV (315 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por smart' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV coupé eléctrico de cinco plazas' },
      { label: 'Tracción', value: 'Trasera en las versiones de un motor; total en Pulse y BRABUS' },
      { label: 'Autonomía WLTP publicada', value: 'Hasta 455 km, según versión' },
      { label: 'Baterías indicadas por smart', value: 'LFP o NCM, según acabado' },
    ],
    specNote: 'Hay una discrepancia dentro de la web española: la ficha técnica comparativa lista Pro, Pro+, Pro+ Black Collection, Premium y BRABUS, mientras la página comercial y sus preguntas frecuentes describen también Pulse con 271 kW (368 CV). Se incluye Pulse porque smart publica esa potencia en la ficha comercial, pero no está en la tabla comparativa técnica. La misma documentación técnica califica como preliminares las cifras WLTP vinculadas a su referencia de homologación europea; verifica su estado actual con smart o un concesionario. Los datos de par aparecen sin rpm y se omiten.',
    officialUrl: `${smart}/models/hashtag-three/`,
    technicalUrl: `${smart}/models/hashtag-three/specifications/`,
    sources: [
      source('smart España: smart #3 y potencia de la versión Pulse', `${smart}/models/hashtag-three/`),
      source('smart España: ficha técnica comparativa del smart #3', `${smart}/models/hashtag-three/specifications/`),
      source('smart España: gama disponible en el mercado español', `${smart}/models/`),
    ],
    image: {
      src: '/images/models/commons/model-smart-3.jpg',
      alt: 'smart #3 blanco fotografiado de frente en Bondi, Australia.',
      caption: 'La unidad se fotografió en Australia en 2024. La carrocería pertenece al smart #3, pero el acabado, el equipamiento y la oferta pueden diferir de los españoles.',
      width: 1280,
      height: 555,
      sourceTitle: '2024 Smart hashtag3 front.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:2024_Smart_hashtag3_front.jpg',
      authorName: 'LuvsMG481',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:LuvsMG481',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  }),
  model({
    modelSlug: '5',
    title: 'smart #5: versiones eléctricas, potencia y ficha técnica | Kilómetro Claro',
    description: 'Consulta la gama eléctrica del smart #5 en España, con potencias por versión, autonomía WLTP y una nota sobre diferencias entre sus fichas oficiales.',
    intro: 'El smart #5 es el SUV mediano eléctrico de la marca y el modelo más grande de su gama española actual. La documentación oficial presenta versiones de tracción trasera y total, con potencias que varían según el acabado. La página técnica y la información comercial no coinciden en algunos datos de las versiones de mayor potencia; lo señalamos para que la cifra no se interprete sin contexto.',
    powertrainSummary: 'La página comercial española indica 250 kW (340 CV) para Pro y 267 kW (363 CV) para Pro+ y Premium. La tabla técnica desglosa, además, 432 kW (588 CV) en Premium AWD y 475 kW (646 CV) en BRABUS. Son coches eléctricos puros, por lo que la cilindrada se marca con «—». Aunque smart publica cifras de par para las líneas del #5, las fuentes consultadas no asocian esas cifras a un régimen en rpm; se omiten.',
    usageNote: 'La ficha técnica publica hasta 590 km de autonomía WLTP para Pro+ y Premium de tracción trasera, frente a 540 km para Premium AWD y BRABUS. El fabricante indica baterías NCM de 100 kWh brutos y tiempos de carga rápida que dependen de la potencia del punto y de las condiciones. La autonomía WLTP es un valor de homologación: la velocidad de autovía, el frío, el desnivel y el uso de climatización pueden reducir el alcance disponible en un viaje.',
    versions: [
      { name: 'Pro', type: 'Eléctrico', power: '340 CV (250 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'Pro+, Pro+ Black Collection y Premium', type: 'Eléctrico', power: '363 CV (267 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'Premium AWD · dos motores', type: 'Eléctrico', power: '588 CV (432 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por smart' },
      { name: 'BRABUS · dos motores', type: 'Eléctrico', power: '646 CV (475 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por smart' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV mediano eléctrico de cinco plazas' },
      { label: 'Tracción', value: 'Trasera o total, según versión' },
      { label: 'Autonomía WLTP publicada', value: 'Hasta 590 km, según versión' },
      { label: 'Batería indicada en la ficha técnica', value: 'NCM, 100 kWh brutos (94 kWh netos)' },
    ],
    specNote: 'La documentación española presenta cifras distintas según la sección: la página comercial resume hasta 400 kW (543 CV) para Pulse, BRABUS y Edition; la ficha técnica específica asigna 432 kW a Premium AWD y 475 kW a BRABUS, y no incluye filas para Pulse o Summit Edition. En esta tabla las potencias por versión proceden de la ficha técnica específica cuando existe una fila y de la FAQ comercial para Pro. La diferencia se conserva explícitamente; confirma con smart la versión y homologación de la unidad concreta antes de comprar.',
    officialUrl: `${smart}/models/hashtag-five/`,
    technicalUrl: `${smart}/models/hashtag-five/specifications/`,
    sources: [
      source('smart España: smart #5, datos comerciales y potencia de Pro', `${smart}/models/hashtag-five/`),
      source('smart España: tabla técnica detallada del smart #5', `${smart}/models/hashtag-five/specifications/`),
      source('smart España: gama disponible en el mercado español', `${smart}/models/`),
    ],
    image: {
      src: '/images/models/commons/model-smart-5.jpg',
      alt: 'smart #5 Premium negro fotografiado en Alemania en 2025.',
      caption: 'La imagen muestra un smart #5 Premium en 2025; su acabado y equipamiento pueden diferir de otras versiones comercializadas en España.',
      width: 1280,
      height: 856,
      sourceTitle: 'Smart Hashtag 5 Premium autoMOBIL Tübingen 2025 DSC 2755.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Smart_Hashtag_5_Premium_autoMOBIL_T%C3%BCbingen_2025_DSC_2755.jpg',
      authorName: 'Alexander Migl',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
  }),
];
