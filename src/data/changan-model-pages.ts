import type { ModelPageData } from './model-pages';

const reviewedAt = '10 de noviembre de 2026';
const changan = 'https://www.changaneurope.com/es';
const source = (label: string, url: string) => ({ label, url });
const noDisplacement = 'No aplica: motor eléctrico';

/** Datos de la gama española Deepal. Las versiones eléctricas y PHEV del S05 se distinguen. */
export const changanModels: ModelPageData[] = [
  {
    brandSlug: 'changan',
    modelSlug: 'deepal-s05',
    title: 'Changan Deepal S05: motores, precios y autonomía | Kilómetro Claro',
    description: 'Consulta los precios base, versiones eléctricas y PHEV, autonomía WLTP, carga y datos de motor del Changan Deepal S05 en España.',
    intro: 'El Deepal S05 es un SUV compacto que en España se ofrece con dos arquitecturas distintas: eléctrico de batería y, desde 2026, híbrido enchufable. La página separa ambas porque no comparten motor, batería ni forma de uso; elegir únicamente por el nombre del modelo llevaría a comparar tecnologías diferentes.',
    powertrainSummary: 'La gama eléctrica incluye dos acabados de tracción trasera con motor de 200 kW y un 4WD Max que añade un segundo motor delantero. El PHEV combina un motor de gasolina atmosférico de 1.497 cm³ con un motor eléctrico; la ficha distingue la potencia total del sistema de la potencia de cada motor para no sumar cifras que no representan la potencia conjunta homologada.',
    usageNote: 'Las versiones BEV necesitan carga externa y su autonomía depende de temperatura, velocidad y recorrido. El PHEV puede cubrir parte de los trayectos con electricidad si se recarga con frecuencia, pero conserva motor térmico y depósito. Compara autonomía eléctrica homologada, consumo con batería descargada y acceso a carga doméstica; no tomes la autonomía total anunciada como una previsión de cada viaje.',
    versions: [
      { name: 'BEV RWD Pro', type: 'Eléctrico', powertrainGroup: 'electric', power: '272 CV (200 kW)', displacement: noDisplacement, maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'BEV RWD Max', type: 'Eléctrico', powertrainGroup: 'electric', power: '272 CV (200 kW)', displacement: noDisplacement, maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'BEV 4WD Max', type: 'Eléctrico', powertrainGroup: 'electric', power: 'Motor trasero: 272 CV (200 kW); motor delantero: 163 CV (120 kW)', displacement: noDisplacement, maxTorque: '', torqueScope: '', torqueRpm: '' },
      { name: 'PHEV Pro', type: 'Híbrido enchufable (gasolina + eléctrico)', powertrainGroup: 'plug-in', power: 'Sistema: 258 CV (190 kW); térmico: 86 CV (63 kW); eléctrico: 234 CV (172 kW)', displacement: '1.497 cm³; gasolina atmosférico', maxTorque: '122 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '3.000 rpm' },
      { name: 'PHEV Limited Edition', type: 'Híbrido enchufable (gasolina + eléctrico)', powertrainGroup: 'plug-in', power: 'Sistema: 258 CV (190 kW); térmico: 86 CV (63 kW); eléctrico: 234 CV (172 kW)', displacement: '1.497 cm³; gasolina atmosférico', maxTorque: '122 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '3.000 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de 5 puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.598 mm' },
      { label: 'Maletero trasero', value: '492 litros en las versiones eléctricas; 552 litros en la ficha PHEV' },
      { label: 'Batería de tracción', value: '68,8 kWh en BEV · 18,4 kWh en PHEV' },
      { label: 'Tracción', value: 'Trasera o total en BEV; delantera en PHEV' },
    ],
    figures: [
      { label: 'BEV RWD · consumo WLTP', value: '15,9 kWh/100 km' },
      { label: 'BEV RWD / 4WD · autonomía WLTP', value: 'Hasta 485 / 445 km' },
      { label: 'PHEV · autonomía eléctrica WLTP', value: 'Hasta 100 km en ciclo combinado y hasta 138 km en ciclo urbano' },
      { label: 'PHEV · autonomía total anunciada', value: 'Hasta 1.060 km' },
    ],
    specNote: 'Changan diferencia la autonomía eléctrica WLTP combinada (100 km) de la cifra urbana (hasta 138 km). La portada de la marca muestra 28.990 € para el PHEV Limited Edition en stock con Plan Auto+, pero la página de condiciones enlazada indica que la oferta financiera terminó el 31/10/2026. No se presenta ese importe como promoción vigente; conviene confirmarlo con Changan.',
    officialUrl: `${changan}/modelos/changan-deepal-s05`,
    technicalUrl: `${changan}/modelos/changan-deepal-s05/especificaciones`,
    sources: [
      source('Deepal S05 eléctrico: especificaciones oficiales', `${changan}/modelos/changan-deepal-s05/especificaciones`),
      source('Configurador oficial del Deepal S05 eléctrico y precios por acabado', `${changan}/configurador/deepal-s05`),
      source('Deepal S05 PHEV: página oficial española', `${changan}/modelos/changan-deepal-s05-phev`),
      source('Configurador oficial del Deepal S05 PHEV y precios por acabado', `${changan}/configurador/s05-phev`),
      source('Ficha técnica oficial del S05 PHEV', 'https://www.changaneurope.com/Portals/8/adam/ContentBlocks/SzVNa9LztkOYzJViIorC8Q/Path/deepal_s05_ficha_tecnica%20%281%29.pdf'),
      source('Presentación del S05 PHEV en España', `${changan}/explora-changan/prensa-y-medios/details/changan-amplia-la-gama-changan-deepal-s05-con-un-nuevo-hibrido-enchufable-de-eficiencia-optimizada-a-partir-de-22-390`),
      source('Promoción del Deepal S05 PHEV y condiciones publicadas', `${changan}/promociones/changan-deepal-s05-limited-edition`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'changan',
    modelSlug: 'deepal-s07',
    title: 'Changan Deepal S07 eléctrico: potencia, autonomía y datos | Kilómetro Claro',
    description: 'Ficha del Deepal S07 eléctrico en España: motor de 190 kW, batería LFP, autonomía WLTP, consumo y carga rápida según la actualización MY26.',
    intro: 'El Deepal S07 es un SUV eléctrico de cinco plazas de tamaño medio. Changan actualizó su gama española para el año-modelo 2026 con una batería LFP, más potencia y carga rápida superior a la de la primera versión; por eso esta ficha prioriza la actualización MY26 y separa los datos de catálogos anteriores.',
    powertrainSummary: 'La versión MY26 utiliza un motor eléctrico síncrono de imanes permanentes de 190 kW (258 CV), tracción trasera y batería LFP de 77,94 kWh. El catálogo español actualizado publica hasta 500 km de autonomía combinada WLTP y un consumo de 17,6 kWh/100 km. La ficha sí indica 290 Nm, pero no el régimen de giro; por eso no se incluye en la tabla, que reserva el par para valores con régimen verificable.',
    usageNote: 'El S07 está pensado para viajes y uso familiar, pero su alcance real dependerá de la velocidad, el frío, la carga y el tipo de carretera. La nueva carga en corriente continua puede alcanzar 200 kW en condiciones compatibles; la potencia del punto, la temperatura y el estado de batería condicionan el tiempo. Verifica el año-modelo del vehículo antes de comparar con fichas previas.',
    versions: [
      { name: 'S07 MY26 · Standard', type: 'Eléctrico', powertrainGroup: 'electric', power: '258 CV (190 kW)', displacement: noDisplacement, maxTorque: '', torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de 5 puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.750 mm' },
      { label: 'Batería MY26', value: '77,94 kWh, química LFP' },
      { label: 'Tracción', value: 'Trasera' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP anunciada', value: 'Hasta 500 km' },
      { label: 'Consumo combinado WLTP', value: '17,6 kWh/100 km' },
      { label: 'Carga en corriente continua', value: 'Hasta 200 kW; 10–80 % en 24 minutos según Changan' },
      { label: 'Aceleración 0–100 km/h', value: '7,8 s' },
    ],
    specNote: 'La página de especificaciones anterior aún puede mostrar 160 kW, batería NMC de 79,97 kWh y 320 Nm. Esta ficha utiliza el catálogo MY26 actualizado en septiembre de 2026: 190 kW, batería LFP de 77,94 kWh y 290 Nm. El régimen del par no aparece publicado, por lo que no se muestra en la tabla de motorizaciones.',
    officialUrl: `${changan}/modelos/changan-deepal-s07`,
    technicalUrl: `${changan}/explora-changan/prensa-y-medios/details/el-changan-deepal-s07-se-renueva-con-carga-rapida-de-hasta-200-kw-mas-potencia-y-suspension-mejorada`,
    sources: [
      source('Deepal S07: gama oficial en España', `${changan}/modelos/changan-deepal-s07`),
      source('Configurador oficial del Deepal S07 MY26', `${changan}/configurador/deepal-s07`),
      source('Catálogo y tarifa oficial Deepal S07 MY26, actualizado en septiembre de 2026', 'https://www.changaneurope.com/Portals/8/adam/ContentBlocks/NzKa8OdqNUeCz4V0NNWqog/Path/Cat%C3%A1logo_CHANGAN_DEEPAL_S07_MY26_Sep_2026.pdf'),
      source('Especificaciones anteriores del S07; pueden mostrar cifras previas a MY26', `${changan}/modelos/changan-deepal-s07/especificaciones`),
      source('Actualización MY26: batería LFP, potencia y carga', `${changan}/explora-changan/prensa-y-medios/details/el-changan-deepal-s07-se-renueva-con-carga-rapida-de-hasta-200-kw-mas-potencia-y-suspension-mejorada`),
      source('Página oficial del S07 PHEV: registro de interés sin configurador de compra', `${changan}/modelos/nuevo-changan-deepal-s07-phev`),
    ],
    reviewedAt,
  },
];
