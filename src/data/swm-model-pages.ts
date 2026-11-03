import type { ModelPageData } from './model-pages';

const reviewedAt = '3 de noviembre de 2026';
const spain = 'https://www.swmmotors.es';
const source = (label: string, url: string) => ({ label, url });
const image = (data: NonNullable<ModelPageData['image']>): NonNullable<ModelPageData['image']> => data;

const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'swm',
  reviewedAt,
  ...data,
});

export const swmModels: ModelPageData[] = [
  model({
    modelSlug: 'g01-pro',
    title: 'SWM G01 PRO DCT: motor, consumo y ficha técnica en España | Kilómetro Claro',
    description: 'Consulta el motor 1.5 turbo del SWM G01 PRO DCT, su potencia, cambio automático y datos técnicos publicados para España.',
    intro: 'El SWM G01 PRO DCT es un SUV de gasolina que el importador español ofrece en versión Luxury con motor 1.5 turbo GDI y cambio automático de doble embrague. La ficha europea publica 133 kW y la marca comunica 180 CV; el par de 300 Nm aparece sin régimen de giro, así que no se presenta en la tabla.',
    powertrainSummary: 'La página española identifica un motor de gasolina 1.5T GDI con 133 kW a 5.500 rpm y transmisión 7DCT. SWM anuncia 180 CV. Aunque la ficha publica 300 Nm de par máximo, no indica las rpm a las que se obtiene y por eso la celda queda vacía.',
    usageNote: 'La denominación DCT indica un cambio automático de doble embrague y siete relaciones. SWM España publica un consumo combinado WLTP de 8,489 l/100 km; es una cifra homologada para comparar, no una promesa de consumo real. En conducción urbana, con carga o a velocidad sostenida por autovía, el gasto puede variar. Comprueba también qué equipamiento incluye la versión Luxury y qué condiciones de precio o financiación aplica cada concesionario.',
    versions: [
      { name: 'G01 PRO DCT Luxury', type: 'Gasolina turbo', power: '180 CV (133 kW)', displacement: '1.494 cm³', maxTorque: '300 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No publicado por SWM España' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV' },
      { label: 'Cambio', value: 'Automático 7DCT de doble embrague' },
      { label: 'Consumo combinado WLTP', value: '8,489 l/100 km' },
      { label: 'Normativa de emisiones indicada', value: 'Euro 6E-BIS' },
    ],
    specNote: 'La cifra de 180 CV se publica en la página comercial española; la tabla técnica especifica 133 kW a 5.500 rpm. El dato de par de 300 Nm no incluye régimen en esa ficha y por eso no se traslada a la tabla. El catálogo muestra una configuración G01 PRO DCT Luxury.',
    officialUrl: `${spain}/swm-g01pro/`,
    technicalUrl: `${spain}/swm-g01pro/`,
    sources: [
      source('SWM España: G01 PRO DCT Luxury y motor 1.5T GDI', `${spain}/swm-g01pro/`),
    ],
    image: image({
      src: '/images/models/commons/model-swm-g01-pro.jpg',
      alt: 'SWM G01 Pro rojo fotografiado en el Salón del Automóvil de Poznań de 2026.',
      caption: 'La imagen muestra un G01 Pro expuesto en 2026; el color y el equipamiento pueden diferir de la unidad configurada en España. Fotografía redimensionada para web.',
      width: 1280,
      height: 853,
      sourceTitle: 'SWM G01 Pro front Poznań Motor Show 2026.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SWM_G01_Pro_front_Pozna%C5%84_Motor_Show_2026.jpg',
      authorName: 'Peżot',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    }),
  }),
  model({
    modelSlug: 'g03f',
    title: 'SWM G03F: motor 1.5, plazas y consumo en España | Kilómetro Claro',
    description: 'Ficha del SWM G03F en España: motor de gasolina 1.5, cambio manual, configuración de cinco o siete plazas y consumo WLTP.',
    intro: 'El SWM G03F es un SUV familiar de gasolina que se vende en España con cambio manual y posibilidad de elegir cinco o siete plazas. Su ficha local recoge un motor atmosférico 1.5 de 81 kW, identificado comercialmente como 109 CV. No hay que confundirlo con el G03F EDi, que utiliza propulsión eléctrica y un motor de gasolina como generador.',
    powertrainSummary: 'SWM España documenta un motor gasolina 1.5 de 81 kW (109 CV) y cambio manual de cinco velocidades. La ficha local publica un par máximo de 155 Nm, pero no especifica su régimen; el dato se omite de la tabla.',
    usageNote: 'La elección entre cinco y siete plazas afecta al espacio disponible para pasajeros y equipaje, por lo que conviene comprobar en persona el acceso a la tercera fila y el maletero con todos los asientos en uso. El consumo combinado WLTP publicado es de 7,23 l/100 km; la cifra real dependerá de recorridos, velocidad, carga y estilo de conducción. La página española indica versiones MT Elite y disponibilidad a consultar con el concesionario.',
    versions: [
      { name: '1.5 MT Elite', type: 'Gasolina', power: '109 CV (81 kW)', displacement: '1,5 l', maxTorque: '155 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No publicado por SWM España' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV familiar, cinco o siete plazas' },
      { label: 'Cambio', value: 'Manual de cinco velocidades' },
      { label: 'Consumo combinado WLTP', value: '7,23 l/100 km' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    specNote: 'La página española ofrece el G03F en configuraciones de cinco y siete plazas. Los 155 Nm figuran sin régimen de rpm en su ficha técnica, así que no aparecen en la columna de par máximo.',
    officialUrl: `${spain}/swm-g03f/`,
    technicalUrl: `${spain}/swm-g03f/`,
    sources: [
      source('SWM España: G03F, versiones y plazas', `${spain}/swm-g03f/`),
    ],
    image: image({
      src: '/images/models/commons/model-swm-g03f.jpg',
      alt: 'SUV SWM Tiger verde fotografiado en un espacio de exposición.',
      caption: 'La fotografía muestra un SWM Tiger de la misma familia, no necesariamente la actualización G03F comercializada actualmente en España. Se incluye como referencia visual; imagen redimensionada para web.',
      width: 1280,
      height: 960,
      sourceTitle: 'SWM Tiger front quarter.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SWM_Tiger_front_quarter.jpg',
      authorName: 'Great Wall Motors Shalong',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    }),
  }),
  model({
    modelSlug: 'g05',
    title: 'SWM G05: motor 1.5 turbo, cambio y versiones | Kilómetro Claro',
    description: 'Datos del SWM G05 para España: SUV de siete plazas, motor 1.5 turbo de gasolina y opciones manual o automática DCT.',
    intro: 'El SWM G05 es un SUV familiar de siete plazas. La ficha española detalla dos versiones de un motor turbo 1.5: una con cambio manual de seis marchas y otra con cambio automático DCT de siete. Aunque la descripción general menciona también una mecánica 2.0, las dos configuraciones especificadas en la tabla técnica actual son 1.5T.',
    powertrainSummary: 'Las dos versiones comparten el motor gasolina 1.5T de 102 kW, anunciado como 137 CV. La caja manual de seis velocidades desarrolla 230 Nm entre 2.000 y 4.000 rpm; la DCT de siete velocidades, 212 Nm en el mismo intervalo. Se muestran por separado porque el par cambia con la transmisión.',
    usageNote: 'La caja manual y la automática DCT no tienen la misma cifra de par máximo publicada: la tabla española especifica 230 Nm para la MT y 212 Nm para la DCT. Antes de comparar ofertas, confirma si se refieren a la misma versión y si incluyen los gastos de matriculación, pintura o financiación. La página oficial presenta al G05 como SUV de siete plazas; revisa el espacio de la tercera fila y la capacidad de carga para el uso que vayas a darle.',
    versions: [
      { name: '1.5T MT · 6 velocidades', type: 'Gasolina turbo', power: '137 CV (102 kW)', displacement: '1,5 l', maxTorque: '230 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.000–4.000 rpm' },
      { name: '1.5T DCT · 7 velocidades', type: 'Gasolina turbo', power: '137 CV (102 kW)', displacement: '1,5 l', maxTorque: '212 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.000–4.000 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de siete plazas' },
      { label: 'Cambio', value: 'Manual de seis velocidades o DCT de siete' },
      { label: 'Motor documentado en la ficha actual', value: '1.5 turbo gasolina, 102 kW' },
      { label: 'Consumo combinado WLTP publicado para MT', value: '8,51 l/100 km' },
    ],
    specNote: 'La página general del G05 menciona motores 2.0 y 1.5T, pero la tabla de versiones y la ficha técnica disponibles detallan dos versiones 1.5T. La página comercial resume 220 Nm; la tabla técnica desglosa 230 Nm para MT y 212 Nm para DCT, que son las cifras empleadas aquí. SWM publica 8,51 l/100 km WLTP para la MT y 7,9 l/100 km como consumo anunciado para DCT; no se comparan como si fueran valores medidos bajo la misma condición.',
    officialUrl: `${spain}/swm-g05/`,
    technicalUrl: `${spain}/swm-g05/swm-g05pro-ficha-tecnica/`,
    sources: [
      source('SWM España: G05 y oferta 1.5T MT/DCT', `${spain}/swm-g05/`),
      source('SWM España: ficha técnica G05 1.5T MT y DCT', `${spain}/swm-g05/swm-g05pro-ficha-tecnica/`),
    ],
    image: image({
      src: '/images/models/commons/model-swm-g05.jpg',
      alt: 'SWM G05 Pro blanco fotografiado frente a un concesionario en China.',
      caption: 'La unidad fotografiada es un G05 Pro de 2023; el acabado, el equipamiento y algunos rasgos pueden diferir de las versiones españolas actuales. Imagen redimensionada para web.',
      width: 1280,
      height: 919,
      sourceTitle: 'SWM G05 Pro 01 China 2023-04-17.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SWM_G05_Pro_01_China_2023-04-17.jpg',
      authorName: 'Navigator84',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Navigator84',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    }),
  }),
  model({
    modelSlug: 'g03f-edi',
    title: 'SWM G03F EDi: autonomía extendida, motor y datos técnicos | Kilómetro Claro',
    description: 'Cómo funciona el SWM G03F EDi: motor eléctrico de tracción, generador de gasolina, batería y versiones de cinco o siete plazas.',
    intro: 'El SWM G03F EDi es un SUV de cinco o siete plazas que el importador español denomina «super híbrido». En su descripción, el motor de gasolina no mueve las ruedas: genera electricidad para alimentar el sistema y el motor eléctrico proporciona la tracción. Por esa arquitectura, resulta más claro describirlo como eléctrico de autonomía extendida que como un híbrido convencional.',
    powertrainSummary: 'La ficha técnica oficial italiana del G03F Super Hybrid M1 documenta un motor eléctrico de 105 kW y un motor de gasolina de 1.498 cm³, 75 kW y 102 CV que funciona como generador. Se muestran sus potencias por separado; no se suman ni se presentan como potencia combinada. El par térmico alcanza 126 Nm entre 1.500 y 4.000 rpm. La ficha técnica publica también 210 Nm para el motor eléctrico, sin indicar un régimen, por lo que esa cifra no se muestra en la tabla.',
    usageNote: 'La web española explica que el motor térmico genera electricidad y que el vehículo se puede conectar a una toma doméstica Schuko o a un punto público. La ficha del fabricante para el modelo europeo indica una batería LFP de 8,8 kWh, hasta 50 km de autonomía eléctrica y hasta 1.000 km de alcance combinado; son cifras de homologación o estimaciones del fabricante, no una garantía de uso real. Comprueba con el concesionario la especificación y la homologación de la unidad española, ya que la página local no publica una tabla técnica detallada.',
    versions: [
      { name: 'EDi 1.5 · motor eléctrico y generador gasolina', type: 'Eléctrico de autonomía extendida', powertrainGroup: 'multi-energy', power: 'Motor eléctrico: 143 CV (105 kW); generador gasolina: 102 CV (75 kW)', displacement: '1.498 cm³', maxTorque: '126 Nm', torqueScope: 'Motor térmico generador', torqueRpm: '1.500–4.000 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco o siete plazas' },
      { label: 'Arquitectura', value: 'Tracción eléctrica con motor de gasolina generador' },
      { label: 'Batería indicada por SWM', value: 'LFP de 8,8 kWh' },
      { label: 'Autonomía eléctrica indicada por SWM', value: 'Hasta 50 km' },
      { label: 'Autonomía combinada anunciada', value: 'Hasta 1.000 km' },
    ],
    specNote: 'SWM España describe el motor de gasolina como un generador que produce electricidad y anuncia versiones de cinco y siete plazas con entrega a consultar en concesionario. Los datos de potencia, batería y autonomía se toman de la ficha técnica oficial italiana del G03F Super Hybrid M1, porque la web española no publica esa tabla. El par eléctrico de 210 Nm se omite al no venir acompañado de rpm; las potencias del motor eléctrico y del generador se presentan por separado, no como potencia total.',
    officialUrl: `${spain}/swm-g03f-edi/`,
    technicalUrl: 'https://www.swm-motors.it/wp-content/uploads/dlm_uploads/2026/04/Technical-Information-G03F-Super-Hybrid-M1_IT.pdf',
    sources: [
      source('SWM España: G03F EDi, plazas, disponibilidad y funcionamiento', `${spain}/swm-g03f-edi/`),
      source('SWM Motors Italia: ficha técnica G03F Super Hybrid M1 (2026)', 'https://www.swm-motors.it/wp-content/uploads/dlm_uploads/2026/04/Technical-Information-G03F-Super-Hybrid-M1_IT.pdf'),
    ],
    image: image({
      src: '/images/models/commons/model-swm-g03f-edi.jpg',
      alt: 'SWM Tiger EDi azul claro fotografiado en un salón del automóvil.',
      caption: 'La fotografía muestra un SWM Tiger EDi; la unidad se fotografió en China y puede diferir de la homologación y el equipamiento españoles. Imagen redimensionada para web.',
      width: 1280,
      height: 960,
      sourceTitle: 'SWM Tiger EDi IMG001.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SWM_Tiger_EDi_IMG001.jpg',
      authorName: 'Zotyefan',
      authorUrl: 'https://commons.wikimedia.org/wiki/User:Zotyefan',
      licenseName: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    }),
  }),
];
