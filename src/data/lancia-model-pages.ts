import type { ModelPageData } from './model-pages';

const reviewedAt = '9 de noviembre de 2026';
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
    description: 'Compara las versiones híbrida y eléctricas del Lancia Gamma anunciadas para España, sus potencias, precios base y disponibilidad comercial.',
    intro: 'El Gamma es un crossover fastback de 4,67 metros con el que Lancia vuelve al segmento C. La marca española ya lo incluye en su catálogo y publica ofertas particulares para Gamma Ibrida LS, Gamma BEV LS y Gamma BEV HF Integrale. Sin embargo, la ficha de producto aún indica «Disponible próximamente»; por eso diferenciamos el catálogo y las campañas anunciadas de la disponibilidad inmediata en concesionario.',
    powertrainSummary: 'La gama anunciada para España combina una versión híbrida no enchufable MHEV de 145 CV, una eléctrica Standard Range de 230 CV y la HF Integrale eléctrica de 375 CV con tracción total. La documentación técnica también contempla una Long Range de 245 CV, pero no la presentamos como versión de venta: no aparece en la campaña para particulares vigente ni hemos confirmado su disponibilidad comercial española. En las versiones eléctricas no se informa de régimen de par en rpm, así que ese dato no se muestra.',
    usageNote: 'Lancia anuncia más de 1.000 km de autonomía total para la híbrida, más de 540 km WLTP para la eléctrica Standard Range y hasta 676 km para la HF Integrale. Son cifras declaradas por el fabricante y no equivalen a la autonomía real de cualquier trayecto. La híbrida no necesita recarga externa. La página española indica que el Gamma llegará próximamente; confirma con Lancia o un concesionario la apertura de pedidos, la versión concreta y el plazo de entrega.',
    versions: [
      { name: 'Ibrida 145 · LS', type: 'Híbrido no enchufable · MHEV de gasolina, 48 V', powertrainGroup: 'mild-hybrid', power: 'Sistema: 145 CV (107 kW)', displacement: '1.198 cm³', maxTorque: '230 Nm', torqueScope: 'Motor gasolina', torqueRpm: '1.750 rpm' },
      { name: 'BEV LS · Standard Range 230', type: 'Eléctrico · motor delantero', powertrainGroup: 'electric', power: '230 CV (169 kW)', displacement: '—', maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'BEV HF Integrale · AWD 375', type: 'Eléctrico · dos motores y tracción total', powertrainGroup: 'electric', power: '375 CV (276 kW)', displacement: '—', maxTorque: '', torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover fastback del segmento C-UV' },
      { label: 'Longitud', value: '4,67 m' },
      { label: 'Capacidad del maletero publicada', value: '560 litros' },
      { label: 'Tracción', value: 'Delantera; total en HF Integrale' },
    ],
    specNote: 'La gama comercial anunciada para España contempla LS Hybrid 145, BEV LS Standard Range 230 y BEV HF Integrale 375. Lancia también ha comunicado una BEV Long Range de 245 CV, pero la ficha española todavía la presenta como próxima y no se ha encontrado una oferta minorista española vigente para esa batería; no se añade como motorización disponible. La potencia híbrida de 145 CV y los datos de 1.198 cm³ y 230 Nm a 1.750 rpm proceden de la documentación técnica contrastada. Para las eléctricas, la fuente no publica un régimen de par en rpm y el campo se deja vacío. La equivalencia de 230 CV a 169 kW es una conversión; la potencia de 375 CV equivale aproximadamente a 276 kW.',
    officialUrl: `${lancia}/`,
    technicalUrl: 'https://www.media.stellantis.com/es-es/lancia/press/el-nuevo-lancia-gamma',
    sources: [
      source('Lancia España: gama de modelos y ofertas particulares', `${lancia}/modelos`),
      source('Lancia España: promociones particulares vigentes', `${lancia}/`),
      source('Lancia España: ficha del Gamma y disponibilidad próxima', `${lancia}/modelos/gamma`),
      source('Stellantis Media: estreno, potencias y autonomía de Gamma', 'https://www.media.stellantis.com/es-es/lancia/press/el-nuevo-lancia-gamma'),
      source('Motor1 España: datos técnicos y PVP por versiones Gamma', 'https://es.motor1.com/reviews/811145/lancia-gamma-2026-primera-prueba/'),
    ],
  }),
  model({
    modelSlug: 'ypsilon',
    title: 'Lancia Ypsilon: motores gasolina, híbrido y eléctricos | Kilómetro Claro',
    description: 'Compara el Lancia Ypsilon Turbo 100, Ibrida 110, Elettrica 156 y HF 280: tipos de motor, potencia, precios base y datos técnicos.',
    intro: 'El Ypsilon es el modelo compacto con el que Lancia ha iniciado su nueva etapa en España. Su gama permite elegir entre gasolina, microhibridación de 48 V y dos niveles de potencia eléctricos. HF Line es un acabado disponible en más de una motorización; HF 280 es la variante eléctrica de mayores prestaciones y se cuenta aquí como una versión mecánica, no como una familia distinta.',
    powertrainSummary: 'La gama española consultada incluye Turbo 100 con cambio manual, Ibrida 110 con sistema de 48 V y transmisión e-DCT6, Elettrica de 156 CV y HF 280 eléctrica. La página técnica de Lancia publica pares de algunos motores eléctricos e híbridos, pero no ofrece su régimen en rpm; conforme al criterio de esta ficha, no se trasladan a la columna de par máximo.',
    usageNote: 'La versión de gasolina emplea cambio manual y la Ibrida utiliza transmisión automática e-DCT6; las dos eléctricas se diferencian por potencia y enfoque. La ficha técnica española indica 394–403 km WLTP combinados para la Elettrica estándar, aunque otros apartados de la web comunican hasta 425 km. Indicamos el intervalo de la nota de homologación de la ficha técnica; el resultado real depende de la configuración, temperatura, velocidad y uso de climatización. Las motorizaciones y acabados disponibles pueden cambiar; comprueba la configuración española vigente antes de comprar.',
    versions: [
      { name: 'Turbo 100 · cambio manual', type: 'Gasolina', powertrainGroup: 'petrol', power: '100 CV (74 kW)', displacement: '1.199 cm³', maxTorque: '205 Nm', torqueScope: 'Motor gasolina', torqueRpm: '1.750 rpm' },
      { name: 'Ibrida 110 · MHEV 48 V e-DCT6', type: 'Híbrido no enchufable · MHEV de gasolina, 48 V', powertrainGroup: 'mild-hybrid', power: 'Sistema: 110 CV (81 kW); térmico: 100 CV (74 kW); eléctrico: 28 CV (21 kW)', displacement: '1.199 cm³', maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'Elettrica 156', type: 'Eléctrico', powertrainGroup: 'electric', power: '156 CV (115 kW)', displacement: '—', maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'HF 280', type: 'Eléctrico', powertrainGroup: 'electric', power: '280 CV (207 kW)', displacement: '—', maxTorque: '', torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano premium de cinco puertas' },
      { label: 'Longitud', value: '4.080 mm' },
      { label: 'Autonomía WLTP Elettrica', value: '394–403 km en ciclo combinado, según configuración' },
      { label: 'Acabados HF Line', value: 'Disponibles con versiones híbridas y eléctricas' },
    ],
    specNote: 'El nombre comercial español Turbo 100 coincide con la página de producto de Lancia, que indica 74 kW (100 CV). El comunicado técnico de Stellantis expresa esa misma potencia como 101 CV (74 kW) a 5.500 rpm y publica 205 Nm a 1.750 rpm; la tabla conserva la denominación y potencia comercializadas en España. Para Ibrida, la ficha técnica publica 74 kW/100 CV para el motor térmico y 21 kW/28 CV para el eléctrico, mientras que el conjunto comercial se anuncia con 110 CV; estas potencias de componentes no se suman directamente. La ficha técnica de Elettrica muestra 260 Nm pero no indica rpm, por lo que no se incluye en la columna de par. HF Line es un acabado, no una motorización independiente. La ficha técnica eléctrica comunica 425 km en su encabezado y 394–403 km en la nota de homologación WLTP; mantenemos el intervalo de homologación en el texto.',
    officialUrl: `${lancia}/modelos/ypsilon-turbo-100`,
    technicalUrl: `${lancia}/models/ypsilon-ibrida/especificaciones-tecnicas`,
    sources: [
      source('Lancia España: gama vigente de Ypsilon', `${lancia}/modelos`),
      source('Lancia España: Turbo 100, cilindrada y potencia comercial', `${lancia}/modelos/ypsilon-turbo-100`),
      source('Stellantis Media: motor Turbo 100, 1.199 cm³ y par a 1.750 rpm', 'https://www.media.stellantis.com/es-es/lancia/press/presentamos-el-nuevo-ypsilon-turbo-100'),
      source('Stellantis Media: PVP del Turbo 100 y diferencia frente a las versiones híbridas', 'https://www.media.stellantis.com/es-es/lancia/press/presentamos-el-nuevo-ypsilon-turbo-100'),
      source('Lancia España: Ypsilon Ibrida y sistema de 48 V', `${lancia}/modelos/ypsilon-ibrida`),
      source('Stellantis Media: potencia conjunta y componentes del sistema híbrido', 'https://www.media.stellantis.com/es-es/lancia/press/nuevo-lancia-ypsilon-la-version-electrica-llega-mas-lejos-y-la-hibrida-habla-mas-claro'),
      source('Stellantis Media: precio de gama del Ypsilon Ibrida, Elettrica y HF', 'https://www.media.stellantis.com/es-es/lancia/press/lancia-ypsilon-la-innovacion-elegancia-y-espiritu-deportivo-como-senas-de-identidad'),
      source('Stellantis Media: último PVP publicado del Ypsilon Elettrica', 'https://www.media.stellantis.com/es-es/lancia/press/lancia-ypsilon-un-paseo-por-los-modelos-mas-emblematicos-de-lancia'),
      source('Lancia España: datos técnicos de Ypsilon Ibrida', `${lancia}/models/ypsilon-ibrida/especificaciones-tecnicas`),
      source('Lancia España: Ypsilon Elettrica y sus datos técnicos', `${lancia}/models/ypsilon-elettrica/especificaciones-tecnicas`),
      source('Lancia España: Ypsilon HF 280 y especificaciones', `${lancia}/modelos/ypsilon-hf-280-cv/especificaciones-tecnicas`),
      source('Stellantis Media: Ypsilon HF de 280 CV y 207 kW', 'https://www.media.stellantis.com/es-es/lancia/press/lancia-ypsilon-hf-toda-la-emocion-de-los-rallies-en-un-automovil-de-serie-con-280-cv-de-potencia'),
    ],
  }),
];
