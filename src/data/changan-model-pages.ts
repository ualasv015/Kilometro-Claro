import type { ModelPageData } from './model-pages';

const reviewedAt = '28 de octubre de 2026';
const changan = 'https://www.changaneurope.com/es';
const source = (label: string, url: string) => ({ label, url });
const noDisplacement = 'No aplica: motor eléctrico';
const noRpm = 'No aplica: motor eléctrico';

/** Datos de la gama española Deepal. Las versiones eléctricas y PHEV del S05 se distinguen. */
export const changanModels: ModelPageData[] = [
  {
    brandSlug: 'changan',
    modelSlug: 'deepal-s05',
    title: 'Changan Deepal S05: versiones eléctricas y PHEV | Kilómetro Claro',
    description: 'Compara el Deepal S05 eléctrico y el híbrido enchufable: potencia, batería, autonomía WLTP, carga y datos de motor publicados para España.',
    intro: 'El Deepal S05 es un SUV compacto que en España se ofrece con dos arquitecturas distintas: eléctrico de batería y, desde 2026, híbrido enchufable. La página separa ambas porque no comparten motor, batería ni forma de uso; elegir únicamente por el nombre del modelo llevaría a comparar tecnologías diferentes.',
    powertrainSummary: 'La gama eléctrica emplea un motor trasero de 200 kW en las versiones RWD y añade un motor delantero asíncrono en la 4WD Max. La versión PHEV combina un motor de gasolina atmosférico de 1.497 cm³ con un motor eléctrico y batería recargable. Los datos de par se atribuyen al motor o al sistema al que corresponden en las fichas de Changan.',
    usageNote: 'Las versiones BEV necesitan carga externa y su autonomía depende de temperatura, velocidad y recorrido. El PHEV puede cubrir parte de los trayectos con electricidad si se recarga con frecuencia, pero conserva motor térmico y depósito. Compara autonomía eléctrica homologada, consumo con batería descargada y acceso a carga doméstica; no tomes la autonomía total anunciada como una previsión de cada viaje.',
    versions: [
      { name: 'BEV RWD Pro / RWD Max', power: '200 kW (272 CV)', displacement: noDisplacement, maxTorque: '290 Nm', torqueScope: 'Motor eléctrico trasero PMSM', torqueRpm: noRpm, additionalTorque: 'Batería LFP de 68,8 kWh; autonomía WLTP de hasta 485 km' },
      { name: 'BEV 4WD Max', power: '320 kW (435 CV) combinados', displacement: noDisplacement, maxTorque: '290 Nm traseros + 212 Nm delanteros', torqueScope: 'Cifras de los dos motores, no un par combinado declarado', torqueRpm: noRpm, additionalTorque: 'Batería LFP de 68,8 kWh; autonomía WLTP de hasta 445 km' },
      { name: 'PHEV Pro / Limited Edition', power: '190 kW (258 CV) de sistema', displacement: '1.497 cm³; gasolina atmosférico', maxTorque: '122 Nm térmicos; 290 Nm eléctricos', torqueScope: 'Motor de gasolina y motor eléctrico, por separado', torqueRpm: '3.000 rpm en el motor de gasolina; el régimen eléctrico no se publica', additionalTorque: 'Batería LFP de 18,42 kWh; cambio automático' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de 5 puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.598 mm' },
      { label: 'Maletero trasero', value: '492 litros en las versiones eléctricas; 552 litros en la ficha PHEV' },
      { label: 'Tracción', value: 'Trasera o total en BEV; delantera en PHEV' },
    ],
    figures: [
      { label: 'BEV RWD · consumo WLTP', value: '15,9 kWh/100 km' },
      { label: 'BEV RWD / 4WD · autonomía WLTP', value: 'Hasta 485 / 445 km' },
      { label: 'PHEV · autonomía eléctrica', value: 'La ficha técnica consultada indica 100 km; la página comercial actual anuncia hasta 138 km' },
      { label: 'PHEV · autonomía total anunciada', value: 'Hasta 1.060 km' },
    ],
    specNote: 'La documentación comercial del PHEV no coincide en autonomía eléctrica: el PDF técnico consultado declara 100 km y la página actual anuncia hasta 138 km. Se mantienen ambas cifras con su fuente, sin presentarlas como una única homologación. La potencia conjunta de los motores tampoco se calcula sumando sus potencias individuales.',
    officialUrl: `${changan}/modelos/changan-deepal-s05`,
    technicalUrl: `${changan}/modelos/changan-deepal-s05/especificaciones`,
    sources: [
      source('Deepal S05 eléctrico: especificaciones oficiales', `${changan}/modelos/changan-deepal-s05/especificaciones`),
      source('Deepal S05 PHEV: página oficial española', `${changan}/modelos/changan-deepal-s05-phev`),
      source('Ficha técnica oficial del S05 PHEV', 'https://www.changaneurope.com/Portals/8/adam/ContentBlocks/SzVNa9LztkOYzJViIorC8Q/Path/deepal_s05_ficha_tecnica%20%281%29.pdf'),
      source('Presentación del S05 PHEV en España', `${changan}/explora-changan/prensa-y-medios/details/changan-amplia-la-gama-changan-deepal-s05-con-un-nuevo-hibrido-enchufable-de-eficiencia-optimizada-a-partir-de-22-390`),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'changan',
    modelSlug: 'deepal-s07',
    title: 'Changan Deepal S07 eléctrico: potencia, autonomía y datos | Kilómetro Claro',
    description: 'Ficha del Deepal S07 eléctrico en España: motor de 190 kW, batería LFP, autonomía WLTP, consumo y carga rápida según la actualización MY26.',
    intro: 'El Deepal S07 es un SUV eléctrico de cinco plazas de tamaño medio. Changan actualizó su gama española para el año-modelo 2026 con una batería LFP, más potencia y carga rápida superior a la de la primera versión; por eso esta ficha prioriza la actualización MY26 y separa los datos de catálogos anteriores.',
    powertrainSummary: 'La versión MY26 anunciada para España utiliza un motor síncrono de imanes permanentes de 190 kW (258 CV), tracción trasera y batería LFP de 78 kWh. Changan publica hasta 500 km de autonomía combinada WLTP y un consumo de 17,6 kWh/100 km. La comunicación de actualización no ofrece el par máximo del motor, por lo que no trasladamos el dato de 320 Nm que aparece en una ficha anterior.',
    usageNote: 'El S07 está pensado para viajes y uso familiar, pero su alcance real dependerá de la velocidad, el frío, la carga y el tipo de carretera. La nueva carga en corriente continua puede alcanzar 200 kW en condiciones compatibles; la potencia del punto, la temperatura y el estado de batería condicionan el tiempo. Verifica el año-modelo del vehículo antes de comparar con fichas previas.',
    versions: [
      { name: 'S07 Max MY26', power: '190 kW (258 CV)', displacement: noDisplacement, maxTorque: 'No publicado para la actualización MY26 consultada', torqueScope: 'La nota de producto española no desglosa el par máximo', torqueRpm: noRpm, additionalTorque: 'Motor PMSM; tracción trasera' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de 5 puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.750 mm' },
      { label: 'Batería MY26', value: '78 kWh, química LFP según comunicado de actualización' },
      { label: 'Tracción', value: 'Trasera' },
    ],
    figures: [
      { label: 'Autonomía combinada WLTP anunciada', value: 'Hasta 500 km' },
      { label: 'Consumo combinado WLTP', value: '17,6 kWh/100 km' },
      { label: 'Carga en corriente continua', value: 'Hasta 200 kW; 10–80 % en 24 minutos según Changan' },
      { label: 'Aceleración 0–100 km/h', value: '7,8 s' },
    ],
    specNote: 'La página de especificaciones y el catálogo anterior pueden mostrar 160 kW, batería NMC de 79,97 kWh y 320 Nm. No se mezclan con la actualización MY26 anunciada en agosto de 2026, que declara 190 kW, batería LFP de 78 kWh y no publica el par en la nota consultada.',
    officialUrl: `${changan}/modelos/changan-deepal-s07`,
    technicalUrl: `${changan}/modelos/changan-deepal-s07/especificaciones`,
    sources: [
      source('Deepal S07: gama oficial en España', `${changan}/modelos/changan-deepal-s07`),
      source('Especificaciones oficiales publicadas por Changan', `${changan}/modelos/changan-deepal-s07/especificaciones`),
      source('Actualización MY26: batería LFP, potencia y carga', `${changan}/explora-changan/prensa-y-medios/details/el-changan-deepal-s07-se-renueva-con-carga-rapida-de-hasta-200-kw-mas-potencia-y-suspension-mejorada`),
    ],
    reviewedAt,
  },
];
