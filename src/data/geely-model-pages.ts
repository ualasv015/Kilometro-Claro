import type { ModelPageData } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const geely = 'https://www.geelyauto.es';
const source = (label: string, url: string) => ({ label, url });

export const geelyModels: ModelPageData[] = [
  {
    brandSlug: 'geely',
    modelSlug: 'e2',
    title: 'Geely E2: versiones, autonomía y ficha técnica | Kilómetro Claro',
    description: 'Compara las versiones Pro, Pro+ y Max+ del Geely E2 en España: potencia eléctrica, batería y autonomía WLTP por acabado.',
    intro: 'El Geely E2 es un compacto eléctrico de cinco puertas con motor trasero. La gama española distingue tres acabados y dos combinaciones de potencia y batería; Pro+ y Max+ comparten el conjunto mecánico, aunque cambian elementos de equipamiento.',
    powertrainSummary: 'Geely España publica 80 CV para el E2 Pro y 115 CV para Pro+ y Max+. Son versiones eléctricas de batería: no tienen cilindrada térmica. La documentación comercial consultada no ofrece un par máximo con régimen de giro, así que no trasladamos una cifra de par a la tabla.',
    usageNote: 'La batería de 35 kWh del Pro homologa 252 km de autonomía combinada WLTP; las versiones Pro+ y Max+ montan 47 kWh y declaran 345 km. Geely también publica cifras de ciclo urbano, superiores a las combinadas: no conviene mezclarlas al comparar coches. La autonomía real variará con temperatura, velocidad, climatización y recorrido.',
    versions: [
      { name: 'Pro · batería de 35 kWh', type: 'Eléctrico de batería', power: '80 CV (59 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Pro+ · batería de 47 kWh', type: 'Eléctrico de batería', power: '115 CV (85 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Max+ · batería de 47 kWh', type: 'Eléctrico de batería', power: '115 CV (85 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado en la ficha española' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto eléctrico de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Batería', value: '35 kWh en Pro; 47 kWh en Pro+ y Max+' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP', value: '252 km (Pro) · 345 km (Pro+ y Max+)' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '25 minutos, según Geely' },
    ],
    specNote: 'La página española del E2 presenta los tres acabados y permite solicitar una oferta. La apertura efectiva de pedidos y el plazo de entrega pueden depender de la fecha y del concesionario; confírmalos antes de tomar una decisión. Las cifras de potencia en kW son la conversión de los CV declarados por el fabricante.',
    officialUrl: `${geely}/models/geely-e2`,
    technicalUrl: `${geely}/models/geely-e2`,
    sources: [
      source('Geely España: E2 y versiones', `${geely}/models/geely-e2`),
      source('Geely España: manuales y documentación del E2', `${geely}/geely-manuals`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'geely',
    modelSlug: 'e5',
    title: 'Geely E5: versiones eléctricas y ficha técnica | Kilómetro Claro',
    description: 'Consulta las versiones Pro, Pro+ y Max+ del Geely E5 en España: potencia, baterías, autonomía WLTP y diferencias principales.',
    intro: 'El Geely E5 es un SUV eléctrico de tamaño medio disponible en España con tres acabados. Los tres declaran 218 CV; las diferencias principales están en la capacidad de la batería, la autonomía homologada y parte del equipamiento.',
    powertrainSummary: 'La ficha de Geely España anuncia 218 CV (160 kW) para las tres versiones y describe un sistema de accionamiento totalmente eléctrico. Como no hay motor térmico, la cilindrada se indica con un guion. La página comercial no especifica el régimen de giro del par máximo y por eso no incluimos ese dato.',
    usageNote: 'El E5 Pro equipa una batería de 60,2 kWh y homologa 430 km en ciclo combinado WLTP. Pro+ y Max+ usan una batería de 68,4 kWh; Geely declara 475 km para Pro+ y 455 km para Max+. La diferencia entre Pro+ y Max+ recuerda que una batería igual no garantiza la misma autonomía homologada: influyen la configuración y el equipamiento.',
    versions: [
      { name: 'Pro · batería de 60,2 kWh', type: 'Eléctrico de batería', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Pro+ · batería de 68,4 kWh', type: 'Eléctrico de batería', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Max+ · batería de 68,4 kWh', type: 'Eléctrico de batería', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico de tamaño medio' },
      { label: 'Plazas', value: '5' },
      { label: 'Batería', value: '60,2 o 68,4 kWh, según versión' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP', value: '430–475 km, según versión' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '20 minutos, según Geely' },
    ],
    specNote: 'Geely España especifica la potencia y autonomía de cada acabado en su página de producto. Las potencias se presentan en CV y kW; la equivalencia en kW corresponde a la conversión de los 218 CV declarados.',
    officialUrl: `${geely}/models/geely-e5-electric-suv`,
    technicalUrl: `${geely}/models/geely-e5-electric-suv`,
    sources: [
      source('Geely España: E5 y versiones', `${geely}/models/geely-e5-electric-suv`),
      source('Geely España: manuales y documentación del E5', `${geely}/geely-manuals`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'geely',
    modelSlug: 'starray-em-i',
    title: 'Geely Starray EM-i: versiones híbridas enchufables | Kilómetro Claro',
    description: 'Ficha del Geely Starray EM-i en España: versiones Pro, Pro+ y Max+, potencia del sistema, batería y autonomía eléctrica WLTP.',
    intro: 'El Starray EM-i es un SUV híbrido enchufable que combina un motor de gasolina de 1,5 litros con propulsión eléctrica. En España se ofrece en tres acabados; las versiones Pro+ y Max+ llevan una batería de mayor capacidad que la Pro.',
    powertrainSummary: 'Geely España anuncia 262 CV (193 kW) de potencia máxima del sistema para los tres acabados. La marca identifica la mecánica como Starray EM-i 1.5, pero no publica en su página española el régimen del par máximo ni desglosa las potencias de cada componente. Por eso la tabla mantiene una sola cifra de sistema y no atribuye cifras parciales.',
    usageNote: 'La versión Pro utiliza una batería de 18,4 kWh y homologa 112 km de autonomía eléctrica en ciclo urbano WLTP. Pro+ y Max+ montan 29,8 kWh y declaran hasta 184 km en ese mismo ciclo. La autonomía eléctrica urbana no es directamente comparable con el alcance combinado ni garantiza la misma distancia en autopista o con temperaturas bajas.',
    versions: [
      { name: 'Pro · batería de 18,4 kWh', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 262 CV (193 kW)', displacement: '1,5 l', maxTorque: '', torqueScope: 'Sistema híbrido', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Pro+ · batería de 29,8 kWh', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 262 CV (193 kW)', displacement: '1,5 l', maxTorque: '', torqueScope: 'Sistema híbrido', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Max+ · batería de 29,8 kWh', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 262 CV (193 kW)', displacement: '1,5 l', maxTorque: '', torqueScope: 'Sistema híbrido', torqueRpm: 'No publicado en la ficha española' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV híbrido enchufable' },
      { label: 'Plazas', value: '5' },
      { label: 'Batería', value: '18,4 kWh en Pro; 29,8 kWh en Pro+ y Max+' },
    ],
    figures: [
      { label: 'Autonomía eléctrica urbana WLTP', value: '112 km (Pro) · hasta 184 km (Pro+ y Max+)' },
      { label: 'Autonomía combinada WLTP', value: '1.002–1.055 km, según versión' },
    ],
    specNote: 'La web española denomina la mecánica 1.5 y comunica 262 CV como potencia máxima del sistema. Geely no desglosa allí la potencia del motor térmico ni publica el régimen del par; no estimamos esos datos. La carga y la autonomía indicadas dependen de la versión y del ciclo homologado.',
    officialUrl: `${geely}/models/geely-starray-em-i`,
    technicalUrl: `${geely}/models/geely-starray-em-i`,
    sources: [
      source('Geely España: STARRAY EM-i y versiones', `${geely}/models/geely-starray-em-i`),
      source('Geely: manual de rescate en español del STARRAY EM-i', 'https://global.geely.com/-/media/project/web-portal/2025/manual-pages/starray-em-i/rescue/geely_starray_em-i_suv_2025_5d_hybrid_es_erg.pdf'),
      source('Geely Auto: explicación del sistema híbrido 1.5L', 'https://newsroom.geely.com/geely-launch-starray-em-i-indonesia'),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'geely',
    modelSlug: 'monjaro-em-i',
    title: 'Geely Monjaro EM-i: ficha del SUV híbrido enchufable | Kilómetro Claro',
    description: 'Datos del Geely Monjaro EM-i Ultra AWD anunciado para España: potencia del sistema, motor 1.5T, autonomía eléctrica y fuentes oficiales.',
    intro: 'El Monjaro EM-i es el SUV híbrido enchufable de mayor tamaño anunciado actualmente por Geely para España. La página comercial española presenta la versión Ultra con tracción total; la ficha técnica distingue la potencia combinada del sistema de la cilindrada del motor de gasolina.',
    powertrainSummary: 'Para el Monjaro EM-i Ultra AWD, Geely España anuncia 334 CV de potencia y 667 Nm de par. La comunicación europea de Geely describe un motor híbrido 1.5T y 246 kW de potencia máxima para esta versión. La documentación consultada no indica a qué régimen se alcanza el par máximo; por eso la tabla deja ese campo sin cifra.',
    usageNote: 'Geely anuncia hasta 116 km de autonomía eléctrica y más de 900 km de alcance combinado, además de tracción total inteligente. La página española no identifica el ciclo de homologación junto a los 116 km; conviene tomarlo como dato promocional del fabricante y comprobar en el concesionario la ficha de homologación de la unidad ofertada. La oferta comercial publicada se refiere a Ultra AWD y puede cambiar.',
    versions: [
      { name: 'Ultra AWD · sistema EM-i', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 334 CV (246 kW)', displacement: '1,5 l', maxTorque: '', torqueScope: 'Sistema híbrido', torqueRpm: 'Geely no publica el régimen del par máximo' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande híbrido enchufable' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Total inteligente e-AWD' },
      { label: 'Versión española publicada', value: 'Ultra AWD' },
    ],
    figures: [
      { label: 'Autonomía eléctrica anunciada', value: 'Hasta 116 km; ciclo no indicado en la página española' },
      { label: 'Par máximo anunciado', value: '667 Nm; Geely no publica el régimen' },
    ],
    specNote: 'La página española publica la versión Ultra AWD y los datos comerciales del sistema. La cilindrada 1,5 l y la potencia de sistema de 246 kW se contrastan con la comunicación europea oficial de Geely. El fabricante anuncia 667 Nm, pero no indica las rpm; por el criterio de esta tabla, no se incluye como par máximo en la fila.',
    officialUrl: `${geely}/models/monjaro-coming-soon`,
    technicalUrl: 'https://newsroom.geely.com/geely-auto-expands-european-nev-lineup-monjaro-em-i-paris-motor-show-2026',
    sources: [
      source('Geely España: nuevo MONJARO EM-i', `${geely}/models/monjaro-coming-soon`),
      source('Geely Auto: estreno europeo del Monjaro EM-i y datos de la versión AWD Ultra', 'https://newsroom.geely.com/geely-auto-expands-european-nev-lineup-monjaro-em-i-paris-motor-show-2026'),
    ],
    reviewedAt,
  },
];
