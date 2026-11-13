import type { ModelPageData } from './model-pages';

const reviewedAt = '13 de noviembre de 2026';
const geely = 'https://www.geelyauto.es';
const source = (label: string, url: string) => ({ label, url });

export const geelyModels: ModelPageData[] = [
  {
    brandSlug: 'geely',
    modelSlug: 'e2',
    title: 'Geely E2: ficha técnica, autonomía y precio | Kilómetro Claro',
    description: 'Versiones y datos oficiales del Geely E2 eléctrico para España: batería, potencia, autonomía WLTP, carga y precio al contado del PRO.',
    intro: 'El Geely E2 es un compacto eléctrico que la marca publica en tres acabados: PRO, PRO+ y MAX+. La gama combina una batería de 35 kWh en PRO con una de 47 kWh en PRO+ y MAX+; la potencia también cambia entre el acabado de acceso y los dos superiores.',
    powertrainSummary: 'Geely España declara 80 CV para el E2 PRO y 115 CV para PRO+ y MAX+. Las tres versiones son eléctricas, por lo que no tienen cilindrada. La marca no publica el régimen del par máximo en la ficha consultada y ese dato no se muestra en la tabla.',
    usageNote: 'La autonomía homologada cambia según el acabado: Geely publica hasta 252 km combinados WLTP para PRO y 345 km para PRO+ y MAX+, además de 368 y 497 km en ciclo urbano, respectivamente. La marca anuncia 25 minutos para cargar del 30 al 80 % en corriente continua. La autonomía y la carga reales dependen de temperatura, trayecto y potencia del punto de carga.',
    versions: [
      { name: 'PRO · batería de 35 kWh', type: 'Eléctrico', power: '80 CV', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado por Geely' },
      { name: 'PRO+ · batería de 47 kWh', type: 'Eléctrico', power: '115 CV', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado por Geely' },
      { name: 'MAX+ · batería de 47 kWh', type: 'Eléctrico', power: '115 CV', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado por Geely' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto eléctrico' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Maletero delantero / trasero', value: '70 / 375 litros' },
      { label: 'Batería', value: '35 kWh en PRO; 47 kWh en PRO+ y MAX+' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP', value: '252 km (PRO) · 345 km (PRO+ y MAX+)' },
      { label: 'Autonomía urbana WLTP', value: '368 km (PRO) · 497 km (PRO+ y MAX+)' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '25 minutos, según Geely' },
    ],
    specNote: 'Geely presenta las cifras de potencia, batería y autonomía por acabado en su web española. La potencia se transcribe como la comunica el fabricante; no se convierte a kW ni se estima el par máximo porque la ficha no ofrece ese dato.',
    officialUrl: `${geely}/models/geely-e2`,
    technicalUrl: `${geely}/models/geely-e2`,
    sources: [
      source('Geely España: E2, versiones y especificaciones', `${geely}/models/geely-e2`),
      source('Geely España: precio al contado y financiación de E2 PRO', `${geely}/offers/precio-e2`),
      source('Geely España: portada con estado de reserva del E2', geely),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'geely',
    modelSlug: 'e5',
    title: 'Geely E5: versiones, batería, autonomía y precio en España',
    description: 'Ficha del Geely E5 en España: diferencias entre Pro, Pro+ y Max+, autonomía WLTP, batería y precio al contado publicado para el Pro.',
    intro: 'El Geely E5 es un SUV eléctrico de tamaño medio disponible en España con tres acabados. Los tres declaran 218 CV; las diferencias principales están en la capacidad de la batería, la autonomía homologada y parte del equipamiento.',
    powertrainSummary: 'La ficha de Geely España anuncia 218 CV (160 kW) para las tres versiones y describe un sistema de accionamiento totalmente eléctrico. Como no hay motor térmico, la cilindrada se indica con un guion. La página comercial no especifica el régimen de giro del par máximo y por eso no incluimos ese dato.',
    usageNote: 'Geely España declara para el E5 Pro 430 km de autonomía combinada WLTP y 574 km en ciclo urbano. El Pro+ alcanza 475 km combinados y 628 km urbanos; el Max+, 455 y 599 km, respectivamente. Pro utiliza una batería de 60,2 kWh y Pro+ y Max+ una de 68,4 kWh. Aunque comparten capacidad, la autonomía cambia según la versión y su configuración. Son cifras homologadas; el recorrido real depende de la velocidad, la temperatura y el uso de climatización.',
    versions: [
      { name: 'Pro · batería de 60,2 kWh', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Pro+ · batería de 68,4 kWh', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Max+ · batería de 68,4 kWh', type: 'Eléctrico', power: '218 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico de tamaño medio' },
      { label: 'Plazas', value: '5' },
      { label: 'Batería', value: '60,2 o 68,4 kWh, según versión' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP', value: '430 km (Pro) · 475 km (Pro+) · 455 km (Max+)' },
      { label: 'Autonomía urbana WLTP', value: '574 km (Pro) · 628 km (Pro+) · 599 km (Max+)' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '20 minutos, según Geely' },
    ],
    specNote: 'Geely España especifica la potencia, la capacidad de batería y las autonomías urbana y combinada de cada versión en la página del producto. La equivalencia de 218 CV a 160 kW se presenta como la comunica el fabricante.',
    officialUrl: `${geely}/models/geely-e5-electric-suv`,
    technicalUrl: `${geely}/models/geely-e5-electric-suv`,
    sources: [
      source('Geely España: E5 y versiones', `${geely}/models/geely-e5-electric-suv`),
      source('Geely España: precio al contado anunciado para el E5 Pro', `${geely}/offers/precio-e5`),
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
    usageNote: 'Geely declara para el Pro una batería de 18,4 kWh, 112 km de autonomía eléctrica urbana WLTP y 1.002 km de autonomía combinada. Pro+ y Max+ montan 29,8 kWh, alcanzan 184 km urbanos y 1.055 km combinados según la marca. La carga rápida del 30 al 80 % se anuncia en 20 minutos para el Pro y 16 minutos para Pro+ y Max+. La autonomía real puede variar con el recorrido, la temperatura y el estado de carga de la batería.',
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
      { label: 'Autonomía combinada WLTP', value: '1.002 km (Pro) · 1.055 km (Pro+ y Max+)' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '20 min (Pro) · 16 min (Pro+ y Max+), según Geely' },
    ],
    specNote: 'La web española denomina la mecánica 1.5 y comunica 262 CV como potencia máxima del sistema. Geely no desglosa allí la potencia del motor térmico ni publica el régimen del par; no estimamos esos datos. Las cifras de autonomía y carga se transcriben por acabado desde la ficha española.',
    officialUrl: `${geely}/models/geely-starray-em-i`,
    technicalUrl: `${geely}/models/geely-starray-em-i`,
    sources: [
      source('Geely España: STARRAY EM-i y versiones', `${geely}/models/geely-starray-em-i`),
      source('Geely España: precio al contado anunciado para el STARRAY EM-i Pro', `${geely}/offers/precio-starray`),
      source('Geely: manual de rescate en español del STARRAY EM-i', 'https://global.geely.com/-/media/project/web-portal/2025/manual-pages/starray-em-i/rescue/geely_starray_em-i_suv_2025_5d_hybrid_es_erg.pdf'),
      source('Geely Auto: explicación del sistema híbrido 1.5L', 'https://newsroom.geely.com/geely-launch-starray-em-i-indonesia'),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'geely',
    modelSlug: 'monjaro-em-i',
    title: 'Geely Monjaro EM-i: ficha, motorización y precio en España',
    description: 'Ficha del Geely Monjaro EM-i Ultra AWD en España: potencia híbrida, autonomía eléctrica anunciada, equipamiento y precio promocional al contado.',
    intro: 'El Monjaro EM-i es el SUV híbrido enchufable de mayor tamaño de la gama Geely publicada en España. La oferta española presenta una única configuración, Ultra AWD. La cifra de potencia corresponde al sistema híbrido completo, no solo al motor de gasolina.',
    powertrainSummary: 'Para el Monjaro EM-i Ultra AWD, Geely España anuncia 334 CV de potencia y 667 Nm de par. La comunicación europea de Geely describe un motor híbrido 1.5T y 246 kW de potencia máxima para esta versión. La documentación consultada no indica a qué régimen se alcanza el par máximo; por eso la tabla deja ese campo sin cifra.',
    usageNote: 'Geely anuncia hasta 116 km de autonomía eléctrica, más de 900 km de autonomía combinada y una carga del 30 al 80 % en 15 minutos. La página española no identifica el ciclo de homologación de esas autonomías junto a las cifras, por lo que deben leerse como datos comerciales del fabricante y no compararse directamente con valores WLTP de otros modelos. La oferta de 37.990 € se refiere a Ultra AWD, está condicionada a campaña y disponibilidad y puede cambiar.',
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
      { label: 'Autonomía combinada anunciada', value: 'Más de 900 km; ciclo no indicado en la página española' },
      { label: 'Carga rápida DC del 30 al 80 %', value: '15 minutos, según Geely' },
      { label: 'Par máximo anunciado', value: '667 Nm; Geely no publica el régimen' },
    ],
    specNote: 'La página española publica la versión Ultra AWD y los datos comerciales del sistema. La cilindrada 1,5 l y la potencia de sistema de 246 kW se contrastan con la comunicación europea oficial de Geely. El fabricante anuncia 667 Nm, pero no indica las rpm; por el criterio de esta tabla, no se incluye como par máximo en la fila.',
    officialUrl: `${geely}/models/monjaro-coming-soon`,
    technicalUrl: 'https://newsroom.geely.com/geely-auto-expands-european-nev-lineup-monjaro-em-i-paris-motor-show-2026',
    sources: [
      source('Geely España: nuevo MONJARO EM-i', `${geely}/models/monjaro-coming-soon`),
      source('Geely España: PVPR promocional del MONJARO EM-i Ultra', `${geely}/models/monjaro-coming-soon`),
      source('Geely Auto: estreno europeo del Monjaro EM-i y datos de la versión AWD Ultra', 'https://newsroom.geely.com/geely-auto-expands-european-nev-lineup-monjaro-em-i-paris-motor-show-2026'),
    ],
    reviewedAt,
  },
];
