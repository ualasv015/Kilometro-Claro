import type { ModelPageData } from './model-pages';

const reviewedAt = '3 de noviembre de 2026';
const lancia = 'https://www.lancia.es';
const source = (label: string, url: string) => ({ label, url });

const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'lancia',
  reviewedAt,
  ...data,
});

export const lanciaModels: ModelPageData[] = [
  model({
    modelSlug: 'gamma',
    title: 'Lancia Gamma: versiones híbridas y eléctricas en España | Kilómetro Claro',
    description: 'Consulta las versiones híbrida y eléctrica del Lancia Gamma anunciadas para España y las promociones particulares vigentes, con una nota sobre su disponibilidad por acabado.',
    intro: 'El Gamma es el crossover fastback con el que Lancia amplía su nueva gama. La portada española ofrece promociones para particulares de las versiones Ibrida LS, BEV LS y BEV HF Integrale. La ruta específica del Gamma, sin embargo, redirige a una página orientada a empresas y conserva un aviso de disponibilidad futura. Distinguimos esa página de la oferta minorista actual y recomendamos confirmar la motorización y la fecha de entrega con un concesionario.',
    powertrainSummary: 'La oferta oficial española para particulares destaca Gamma Ibrida LS, BEV LS y BEV HF Integrale. La información técnica de Lancia asigna 145 CV a la híbrida, 230 CV Standard Range a la eléctrica de un motor y hasta 375 CV a la HF Integrale de tracción total. Lancia también ha anunciado una BEV Long Range de 245 CV, pero no la incluimos como configuración de venta confirmada porque no aparece identificada en la promoción minorista española vigente. Las fuentes oficiales consultadas no publican un régimen de rpm para el par, por lo que la columna queda vacía.',
    usageNote: 'Lancia comunica más de 540 km WLTP para la BEV de 230 CV, hasta 676 km para la HF Integrale y más de 740 km para una Long Range de 245 CV anunciada en su documentación de gama. La cifra de 245 CV no se presenta aquí como configuración de venta confirmada en España. Son valores de homologación y no equivalen a la autonomía que se obtendrá en cualquier trayecto. La híbrida no requiere recarga externa. Antes de elegir, confirma qué batería, acabado y fecha de entrega corresponden al pedido español.',
    versions: [
      { name: 'Ibrida 145', type: 'Híbrido (gasolina + eléctrico)', power: 'Sistema: 145 CV (107 kW)', displacement: '1,2 l', maxTorque: '', torqueScope: 'Sistema híbrido', torqueRpm: 'No publicado por Lancia' },
      { name: 'BEV LS · Standard Range', type: 'Eléctrico', power: '230 CV (169 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado por Lancia' },
      { name: 'BEV HF Integrale · tracción total', type: 'Eléctrico', power: 'Sistema: 350 CV (257 kW); máximo con batería por encima del 90 %: 375 CV (276 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado por Lancia' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover fastback del segmento C-UV' },
      { label: 'Longitud', value: '4,67 m' },
      { label: 'Capacidad del maletero publicada', value: '560 litros' },
      { label: 'Tracción', value: 'Delantera; total en HF Integrale' },
    ],
    specNote: 'La portada española publica promociones particulares para Gamma Ibrida LS, Gamma BEV LS y Gamma BEV HF Integrale. La ruta /modelos/gamma redirige a una página para empresas que todavía dice “Disponible próximamente”, así que esa página no confirma por sí sola las configuraciones para clientes particulares. El comunicado técnico anuncia también una BEV Long Range de 245 CV, pero no se muestra como oferta minorista vigente en la web española y se deja fuera de la tabla. La documentación de Lancia identifica la versión híbrida como 1.2 de 145 CV; no publica aquí una cilindrada exacta en cm³ ni un régimen de par. En la HF Integrale se distinguen los 350 CV habituales del máximo de 375 CV, disponible con la batería por encima del 90 %. Las potencias en kW de la tabla son conversiones de CV cuando la fuente española no las publica expresamente.',
    officialUrl: `${lancia}/`,
    technicalUrl: 'https://www.media.stellantis.com/es-es/lancia/press/el-nuevo-lancia-gamma',
    sources: [
      source('Lancia España: gama de modelos y ofertas particulares', `${lancia}/modelos`),
      source('Lancia España: promociones particulares vigentes', `${lancia}/`),
      source('Lancia España: ruta de Gamma que redirige al canal Business', `${lancia}/modelos/gamma`),
      source('Stellantis Media: estreno, potencias y autonomía de Gamma', 'https://www.media.stellantis.com/es-es/lancia/press/el-nuevo-lancia-gamma'),
      source('Lancia en el Salón del Automóvil de París 2026: Gamma Hybrid y Long Range', 'https://www.media.stellantis.com/es-es/lancia/press/lancia-at-the-2026-paris-motor-show'),
    ],
  }),
  model({
    modelSlug: 'ypsilon',
    title: 'Lancia Ypsilon: motores gasolina, híbrido y eléctricos | Kilómetro Claro',
    description: 'Compara las versiones Lancia Ypsilon Turbo 100, Ibrida 110, Elettrica 156 y HF 280 con datos técnicos oficiales para España.',
    intro: 'El Ypsilon es el modelo compacto con el que Lancia ha iniciado su nueva etapa en España. Su gama permite elegir entre gasolina, microhibridación de 48 V y dos niveles de potencia eléctricos. HF Line es un acabado disponible en más de una motorización; HF 280 es la variante eléctrica de mayores prestaciones y se cuenta aquí como una versión mecánica, no como una familia distinta.',
    powertrainSummary: 'La gama española consultada incluye Turbo 100 con cambio manual, Ibrida 110 con sistema de 48 V y transmisión e-DCT6, Elettrica de 156 CV y HF 280 eléctrica. La página técnica de Lancia publica pares de algunos motores eléctricos e híbridos, pero no ofrece su régimen en rpm; conforme al criterio de esta ficha, no se trasladan a la columna de par máximo.',
    usageNote: 'La versión de gasolina emplea cambio manual y las variantes Ibrida utilizan transmisión automática e-DCT6; las dos eléctricas se diferencian por potencia y enfoque. Lancia publica hasta 394–403 km WLTP combinados para la Elettrica estándar, según configuración. La autonomía real depende, entre otros factores, de la velocidad, la temperatura y el uso de climatización. Las motorizaciones y acabados disponibles pueden cambiar; comprueba la configuración española vigente antes de comprar.',
    versions: [
      { name: 'Turbo 100 · cambio manual', type: 'Gasolina', power: '100 CV (74 kW)', displacement: '1.199 cm³', maxTorque: '205 Nm', torqueScope: 'Motor gasolina', torqueRpm: '1.750 rpm' },
      { name: 'Ibrida 110 · 48 V e-DCT6', type: 'Microhíbrido de gasolina (48 V)', power: 'Sistema: 110 CV (81 kW); térmico: 100 CV (74 kW); eléctrico: 28 CV (21 kW)', displacement: '1,2 l', maxTorque: '', torqueScope: 'Motor térmico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'Elettrica 156', type: 'Eléctrico', power: '156 CV (115 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
      { name: 'HF 280', type: 'Eléctrico', power: '280 CV (207 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en la ficha española' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano premium de cinco puertas' },
      { label: 'Longitud', value: '4.080 mm' },
      { label: 'Autonomía WLTP Elettrica', value: '394–403 km en ciclo combinado, según configuración' },
      { label: 'Acabados HF Line', value: 'Disponibles con versiones híbridas y eléctricas' },
    ],
    specNote: 'El nombre comercial español Turbo 100 coincide con la página de producto de Lancia, que indica 74 kW (100 CV). El comunicado técnico de Stellantis expresa esa misma potencia como 101 CV (74 kW) a 5.500 rpm y publica 205 Nm a 1.750 rpm; la tabla conserva el nombre y la cifra de potencia comercializados en España y el par con el régimen indicado en ese comunicado. Para Ibrida, Lancia explica que el conjunto entrega 81 kW (110 CV), formado por un motor térmico de 74 kW y una contribución eléctrica máxima de 21 kW; las equivalencias en CV de cada componente se muestran para identificar su alcance, no para sumarlas. HF Line es un acabado, no una motorización independiente.',
    officialUrl: `${lancia}/modelos/ypsilon-turbo-100`,
    technicalUrl: `${lancia}/models/ypsilon-ibrida/especificaciones-tecnicas`,
    sources: [
      source('Lancia España: gama vigente de Ypsilon', `${lancia}/modelos`),
      source('Lancia España: Turbo 100, cilindrada y potencia comercial', `${lancia}/modelos/ypsilon-turbo-100`),
      source('Stellantis Media: motor Turbo 100, 1.199 cm³ y par a 1.750 rpm', 'https://www.media.stellantis.com/es-es/lancia/press/presentamos-el-nuevo-ypsilon-turbo-100'),
      source('Lancia España: Ypsilon Ibrida y sistema de 48 V', `${lancia}/modelos/ypsilon-ibrida`),
      source('Stellantis Media: potencia conjunta y componentes del sistema híbrido', 'https://www.media.stellantis.com/es-es/lancia/press/nuevo-lancia-ypsilon-la-version-electrica-llega-mas-lejos-y-la-hibrida-habla-mas-claro'),
      source('Lancia España: datos técnicos de Ypsilon Ibrida', `${lancia}/models/ypsilon-ibrida/especificaciones-tecnicas`),
      source('Lancia España: Ypsilon Elettrica y sus datos técnicos', `${lancia}/models/ypsilon-elettrica/especificaciones-tecnicas`),
      source('Lancia España: Ypsilon HF 280 y especificaciones', `${lancia}/modelos/ypsilon-hf-280-cv/especificaciones-tecnicas`),
      source('Stellantis Media: Ypsilon HF de 280 CV y 207 kW', 'https://www.media.stellantis.com/es-es/lancia/press/lancia-ypsilon-hf-toda-la-emocion-de-los-rallies-en-un-automovil-de-serie-con-280-cv-de-potencia'),
    ],
  }),
];
