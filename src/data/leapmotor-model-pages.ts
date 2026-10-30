import type { ModelPageData } from './model-pages';

const reviewedAt = '29 de octubre de 2026';
const leapmotor = 'https://www.leapmotor.net/es-es';
const source = (label: string, url: string) => ({ label, url });
const noDisplacement = 'No aplica: propulsión eléctrica';
const torqueNotPublished = 'No publicado en la ficha española consultada';
const noRpm = 'No aplica: el motor térmico funciona como generador, no impulsa las ruedas';

/** Datos de la gama española; EV y REEV se agrupan por modelo pero se describen como sistemas distintos. */
export const leapmotorModels: ModelPageData[] = [
  {
    brandSlug: 'leapmotor',
    modelSlug: 't03',
    title: 'Leapmotor T03 eléctrico: autonomía, batería y consumo',
    description: 'Ficha del Leapmotor T03: motor eléctrico de 94 CV, batería de 37,3 kWh, autonomía WLTP, consumo homologado y dimensiones.',
    intro: 'El T03 es un coche eléctrico urbano de tamaño reducido, orientado sobre todo a desplazamientos cotidianos y aparcamiento en ciudad. La ficha de Leapmotor España declara cuatro plazas, batería de 37,3 kWh y hasta 265 km de autonomía eléctrica en ciclo combinado WLTP.',
    powertrainSummary: 'Utiliza un motor eléctrico de 94 CV y una transmisión automática de una relación. La batería se carga desde una toma externa; la ficha indica una potencia máxima de 45 kW en corriente continua y un tiempo de 30 a 80 % de 36 minutos en las condiciones especificadas por la marca. Al ser eléctrico, no tiene cilindrada ni un régimen de par comparable al de un motor térmico.',
    usageNote: 'La autonomía urbana anunciada puede superar a la combinada, pero no debe utilizarse como estimación para autopista. Antes de elegirlo, comprueba la autonomía WLTP combinada, el espacio para las plazas que realmente necesitas y la posibilidad de cargar en casa o en el trabajo. La potencia del cargador y la temperatura de la batería afectan al tiempo de recarga.',
    versions: [
      { name: 'T03 eléctrico', type: 'Eléctrico', power: '94 CV (70 kW)', displacement: noDisplacement, maxTorque: '158 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 37,3 kWh; tracción delantera' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano de 5 puertas' },
      { label: 'Plazas', value: '4' },
      { label: 'Longitud', value: '3.620 mm' },
      { label: 'Maletero', value: '240 litros; hasta 1.040 litros con asientos abatidos' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP', value: '265 km' },
      { label: 'Autonomía urbana WLTP', value: 'Hasta 395 km' },
      { label: 'Consumo eléctrico', value: '16,3 kWh/100 km' },
      { label: 'Carga rápida CC 30–80 %', value: '36 minutos; hasta 45 kW' },
    ],
    officialUrl: `${leapmotor}/modelos/t03`,
    technicalUrl: `${leapmotor}/modelos/t03`,
    sources: [
      source('Leapmotor T03: gama y datos publicados en España', `${leapmotor}/modelos/t03`),
      source('Folleto técnico oficial Leapmotor T03 (PDF)', 'https://www.leapmotor.net/docs/lpmiwebsiteeseslibraries/t03-documents/5750-25_leapmotor_brochure_t03_es_junio_af.pdf?sf_site=2eb2cf99-4308-475d-8276-23e21666ca20&sf_site_temp=true&sfvrsn=4f09a81f_2'),
      source('Catálogo de modelos Leapmotor España', `${leapmotor}/modelos`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'leapmotor',
    modelSlug: 'b03x',
    title: 'Leapmotor B03X: baterías, autonomía y versiones eléctricas',
    description: 'Datos del Leapmotor B03X: dos baterías de 39,8 y 53 kWh, autonomía WLTP de 301 o 401 km y tiempos de carga publicados.',
    intro: 'El B03X es un crossover eléctrico compacto pensado para combinar dimensiones urbanas con una carrocería más alta y un maletero amplio. Leapmotor España publica dos opciones de batería y autonomía, ambas con tracción delantera; la potencia y el par no aparecen desglosados con el mismo detalle en la ficha pública consultada.',
    powertrainSummary: 'La gama española se presenta con batería Pro de 39,8 kWh y ProMax de 53,0 kWh. La marca declara 301 y 401 km WLTP, respectivamente, y hasta 197 CV en la variante ProMax. No se asigna esa potencia a la batería pequeña ni se infiere un par que no se especifica en la ficha consultada.',
    usageNote: 'La capacidad de maletero varía según el criterio de medición: Leapmotor anuncia 405 litros en uso normal y hasta 510 litros al contar el compartimento GigaBox. Para comparar con otros SUV, usa el volumen principal y comprueba la metodología. La autonomía WLTP y los 16 minutos de carga rápida dependen de la versión y de las condiciones de carga.',
    versions: [
      { name: 'Pro', type: 'Eléctrico', power: '—', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 39,8 kWh; autonomía WLTP: 301 km' },
      { name: 'ProMax', type: 'Eléctrico', power: '197 CV (145 kW)', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 53,0 kWh; autonomía WLTP: 401 km' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover urbano de 5 puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.270 mm' },
      { label: 'Maletero', value: '405 litros; hasta 510 litros contando la GigaBox' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    figures: [
      { label: 'Pro · autonomía WLTP', value: '301 km' },
      { label: 'ProMax · autonomía WLTP', value: '401 km' },
      { label: 'Pro / ProMax · consumo eléctrico', value: '15,1 / 15,3 kWh/100 km' },
      { label: 'Carga rápida CC 30–80 %', value: '16 minutos, según versión y ficha de Leapmotor' },
    ],
    specNote: 'La web española comunica 197 CV para ProMax, pero no desglosa la potencia ni el par del Pro en el contenido consultado. Se muestran como no publicados para evitar transferir datos entre baterías o acabados.',
    officialUrl: `${leapmotor}/modelos/b03x`,
    technicalUrl: `${leapmotor}/modelos/b03x`,
    sources: [
      source('Leapmotor B03X: modelos, versiones y autonomía', `${leapmotor}/modelos/b03x`),
      source('Preguntas frecuentes oficiales del B03X', `${leapmotor}/preguntas-frecuentes/preguntas-frecuentes-sobre-modelos/b03x`),
      source('Gama Leapmotor España', `${leapmotor}/modelos`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'leapmotor',
    modelSlug: 'b05',
    title: 'Leapmotor B05 eléctrico: batería, consumo y autonomía',
    description: 'Compara las versiones Pro y ProMax del Leapmotor B05, con baterías de 56,2 y 67,1 kWh y autonomías WLTP de 401 y 482 km.',
    intro: 'El B05 es un compacto eléctrico de silueta coupé con cinco puertas y un maletero de 345 litros. La gama española ofrece dos tamaños de batería, pensados para quien prioriza un precio de acceso o una autonomía homologada mayor.',
    powertrainSummary: 'Las versiones Pro y ProMax anuncian hasta 218 CV y tracción trasera. La batería Pro es de 56,2 kWh y homologa 401 km; la ProMax alcanza 67,1 kWh y hasta 482 km. La potencia máxima de carga en corriente continua también cambia según la batería. La ficha no publica el par máximo de forma visible en la información consultada.',
    usageNote: 'La autonomía combinada WLTP no equivale al alcance de autopista a alta velocidad. Para decidir entre baterías, valora cuántos viajes largos haces, dónde puedes cargar y el consumo homologado de cada versión. El tiempo de carga rápida depende de que el punto pueda suministrar potencia suficiente y de que la batería esté en condiciones adecuadas.',
    versions: [
      { name: 'Pro', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 56,2 kWh; autonomía WLTP: 401 km' },
      { name: 'ProMax', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 67,1 kWh; autonomía WLTP: 482 km' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto eléctrico de 5 puertas' },
      { label: 'Longitud', value: '4.430 mm' },
      { label: 'Maletero', value: '345 litros; hasta 1.400 litros con asientos abatidos' },
      { label: 'Tracción', value: 'Trasera, según la ficha de gama consultada' },
    ],
    figures: [
      { label: 'Pro · consumo eléctrico WLTP', value: '14,0 kWh/100 km' },
      { label: 'ProMax · consumo eléctrico WLTP', value: '14,8 kWh/100 km' },
      { label: 'Carga CC 30–80 %', value: '16 minutos en Pro; 18 minutos en ProMax, según la marca' },
    ],
    officialUrl: `${leapmotor}/modelos/b05`,
    technicalUrl: `${leapmotor}/modelos/b05`,
    sources: [
      source('Leapmotor B05: versiones y datos técnicos publicados en España', `${leapmotor}/modelos/b05`),
      source('Gama Leapmotor España', `${leapmotor}/modelos`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'leapmotor',
    modelSlug: 'b10',
    title: 'Leapmotor B10: SUV eléctrico y REEV de autonomía extendida',
    description: 'Compara el Leapmotor B10 eléctrico con el B10 REEV: baterías, autonomía, potencia y diferencias del sistema de autonomía extendida.',
    intro: 'El B10 es un SUV de tamaño compacto disponible como eléctrico de batería y como REEV, una variante que se desplaza mediante motor eléctrico y utiliza un motor de gasolina como generador para ampliar el alcance. No es un híbrido convencional en el que el motor térmico impulse las ruedas de la misma forma.',
    powertrainSummary: 'La gama combina dos B10 eléctricos de batería, ambos con 218 CV, y el B10 REEV Hybrid, que se desplaza con motor eléctrico y utiliza un gasolina 1.5 como generador. La ficha española del REEV declara una batería de 18,8 kWh, hasta 86 km eléctricos y hasta 900 km de alcance total. No debe confundirse con un híbrido convencional en el que el motor térmico impulse las ruedas.',
    usageNote: 'El BEV necesita recarga externa y sus kilómetros dependen de la versión y de las condiciones de marcha. El REEV también puede cargarse desde la red, pero incorpora combustible y motor generador para viajar más lejos sin depender exclusivamente de puntos de carga. Compara el porcentaje de uso eléctrico esperado y el consumo homologado de la variante REEV, no solo su autonomía total.',
    versions: [
      { name: 'BEV Pro · 60,8 kWh', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Autonomía WLTP: 400 km' },
      { name: 'BEV ProMax · 68,7 kWh', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: noDisplacement, maxTorque: torqueNotPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Autonomía WLTP: 450 km' },
      { name: 'REEV Hybrid · 18,8 kWh', type: 'Eléctrico de autonomía extendida (gasolina como generador)', power: '218 CV (160 kW)', displacement: '1,5 l; motor térmico generador', maxTorque: torqueNotPublished, torqueScope: 'Propulsión eléctrica; motor térmico usado como generador', torqueRpm: noRpm, additionalTorque: '86 km eléctricos WLTP; hasta 900 km de alcance total anunciado' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de 5 puertas' },
      { label: 'Longitud', value: '4.510 mm' },
      { label: 'Maletero', value: '430 litros; hasta 1.700 litros con asientos abatidos' },
      { label: 'Tracción', value: 'Trasera en las variantes consultadas' },
    ],
    figures: [
      { label: 'BEV · autonomía WLTP', value: '400 km (60,8 kWh) o 450 km (68,7 kWh)' },
      { label: 'REEV · autonomía eléctrica', value: 'Hasta 86 km' },
      { label: 'REEV · autonomía total anunciada', value: 'Hasta 900 km' },
      { label: 'REEV · depósito de gasolina', value: '50 litros' },
    ],
    specNote: 'Se han tomado las cifras de las páginas españolas independientes del B10 eléctrico y del B10 REEV. Una página compartida de la gama aún conserva baterías y autonomías anteriores para las versiones BEV; por eso se prioriza el dato más reciente del producto específico. REEV significa que las ruedas son impulsadas eléctricamente y que el motor de gasolina genera electricidad.',
    officialUrl: `${leapmotor}/modelos/b10`,
    technicalUrl: `${leapmotor}/modelos/b10-hibrido`,
    sources: [
      source('Leapmotor B10 eléctrico', `${leapmotor}/modelos/b10`),
      source('Leapmotor B10 REEV Hybrid', `${leapmotor}/modelos/b10-hibrido`),
      source('Gama Leapmotor España', `${leapmotor}/modelos`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'leapmotor',
    modelSlug: 'c10',
    title: 'Leapmotor C10: versiones eléctricas y REEV | Kilómetro Claro',
    description: 'Datos del Leapmotor C10 eléctrico y REEV: baterías de 28,4 a 81,9 kWh, autonomía WLTP, potencia y diferencias entre versiones.',
    intro: 'El C10 es un SUV familiar de Leapmotor que se ofrece en España como eléctrico de batería y como REEV de autonomía extendida. En la gama eléctrica hay opciones de propulsión trasera y total; el REEV combina conducción eléctrica con un motor de gasolina que actúa como generador.',
    powertrainSummary: 'El folleto técnico MY27 de Leapmotor España distingue cuatro trenes motrices: C10 Pro eléctrico de 225 CV, ProMax de 300 CV, ProMax AWD de 572 CV y REEV Hybrid de 221 CV. El REEV combina tracción eléctrica con un motor de gasolina 1.5 que genera electricidad; homologa 124 km en modo eléctrico y anuncia hasta 986 km de autonomía total. La página web de producto aún muestra algunas cifras anteriores, por lo que aquí se prioriza el folleto MY27.',
    usageNote: 'La versión ProMax AWD tiene más potencia y tracción integral, mientras que la autonomía publicada puede diferir de la variante de propulsión trasera a pesar de compartir capacidad de batería. El REEV reduce la dependencia de cargadores en viajes largos, pero también requiere repostar gasolina. Considera espacio, carga habitual y tipo de ruta antes de comparar los costes.',
    versions: [
      { name: 'REEV Hybrid', type: 'Eléctrico de autonomía extendida (gasolina como generador)', power: '221 CV (162 kW)', displacement: '1,5 l; motor térmico generador', maxTorque: '320 Nm', torqueScope: 'Motor eléctrico de tracción; motor térmico generador', torqueRpm: noRpm, additionalTorque: 'Batería de 28,4 kWh; 124 km eléctricos WLTP (145 km en modo EV+); hasta 986 km de autonomía total anunciada' },
      { name: 'BEV Pro', type: 'Eléctrico', power: '225 CV (165 kW)', displacement: noDisplacement, maxTorque: '360 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 69,9 kWh; autonomía WLTP: 430 km' },
      { name: 'BEV ProMax', type: 'Eléctrico', power: '300 CV (220 kW)', displacement: noDisplacement, maxTorque: '360 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 81,9 kWh; autonomía WLTP: 510 km' },
      { name: 'BEV ProMax AWD', type: 'Eléctrico', power: '572 CV (420 kW)', displacement: noDisplacement, maxTorque: '655 Nm', torqueScope: 'Motores eléctricos', torqueRpm: 'No comparable con el régimen de un motor térmico', additionalTorque: 'Batería de 81,9 kWh; autonomía WLTP: 460 km' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de 5 puertas' },
      { label: 'Longitud', value: '4.730 mm' },
      { label: 'Maletero', value: '500 l en BEV y 440 l en REEV; cambia según versión' },
      { label: 'Tracción', value: 'Trasera o total en BEV; confirmar la configuración REEV concreta' },
    ],
    figures: [
      { label: 'BEV Pro · autonomía WLTP', value: '430 km' },
      { label: 'BEV ProMax · autonomía WLTP', value: '510 km' },
      { label: 'BEV ProMax AWD · autonomía WLTP', value: '460 km' },
      { label: 'REEV Hybrid · autonomía total / eléctrica WLTP', value: 'Hasta 986 km / 124 km (145 km en modo EV+)' },
    ],
    specNote: 'Se prioriza el folleto oficial C10 MY27 frente a la página de producto, que aún conserva cifras anteriores en algunos apartados. El folleto publica pares máximos en Nm, pero no su régimen en rpm; por el criterio de esta ficha no se muestran en la columna de par. El REEV no es un híbrido paralelo convencional: el motor de gasolina actúa como generador y las ruedas reciben propulsión eléctrica.',
    officialUrl: `${leapmotor}/modelos/c10`,
    technicalUrl: `${leapmotor}/modelos/c10-reevhybrid`,
    sources: [
      source('Leapmotor C10: versiones y datos de gama', `${leapmotor}/modelos/c10`),
      source('Folleto técnico oficial Leapmotor C10 MY27 (PDF)', 'https://www.leapmotor.net/docs/lpmiwebsiteeseslibraries/c10-documents/c10_brochure_international_my27_es.pdf?sf_site=2eb2cf99-4308-475d-8276-23e21666ca20&sf_site_temp=true&sfvrsn=207b66dd_1'),
      source('Leapmotor C10 REEV Hybrid', `${leapmotor}/modelos/c10-reevhybrid`),
      source('Documentación oficial de modelos Leapmotor', `${leapmotor}/documentacion-util`),
    ],
    reviewedAt,
  },
];
