import type { ModelPageData } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const lynkCo = 'https://www.lynkco.com/es-es';
const source = (label: string, url: string) => ({ label, url });

export const lynkCoModels: ModelPageData[] = [
  {
    brandSlug: 'lynk-co',
    modelSlug: '01',
    title: 'Lynk & Co 01: motor híbrido enchufable y ficha técnica | Kilómetro Claro',
    description: 'Consulta las motorizaciones, potencia, cilindrada, autonomía eléctrica y datos oficiales del Lynk & Co 01 disponible en España.',
    intro: 'El Lynk & Co 01 es un SUV híbrido enchufable de cinco puertas. La gama española ofrece los acabados Core y More con el mismo sistema PHEV de 1,5 litros: combina un motor de gasolina con uno eléctrico y homologa hasta 75 km de autonomía eléctrica WLTP.',
    powertrainSummary: 'La ficha MY26 declara 206 kW de potencia combinada. Expresado en caballos métricos (CV), equivale aproximadamente a 280 CV. El documento desglosa 102 kW para el motor de gasolina y 107 kW para el eléctrico; esas potencias máximas de componentes no deben sumarse para calcular la del sistema.',
    usageNote: 'Un híbrido enchufable puede cubrir trayectos habituales con energía de la batería si se recarga con regularidad y la distancia lo permite. En viajes largos interviene también el motor de gasolina. La autonomía homologada de hasta 75 km es un valor WLTP: el uso real depende, entre otros factores, de la temperatura, la velocidad, la carretera y la climatización.',
    versions: [
      { name: '1.5TD PHEV · Core / More', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 280 CV (206 kW); motor térmico: 139 CV (102 kW); motor eléctrico: 145 CV (107 kW)', displacement: '1.499 cm³', maxTorque: '', torqueScope: 'Motor térmico de gasolina', torqueRpm: 'No publicado por el fabricante' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco puertas' },
      { label: 'Sistema de propulsión', value: 'Híbrido enchufable de gasolina y eléctrico' },
      { label: 'Batería', value: '17,7 kWh' },
      { label: 'Autonomía eléctrica WLTP', value: 'Hasta 75 km' },
    ],
    specNote: 'La ficha técnica MY26 indica 230 Nm para el motor de gasolina, pero no publica el régimen, así que el par se omite. Lynk & Co expresa la potencia como 206 kW (276 CV), 102 kW (137 CV) y 107 kW (143 CV); los valores en CV de la tabla convierten los kW a caballos métricos, por lo que difieren de esas cifras comerciales basadas en otra conversión de potencia.',
    officialUrl: `${lynkCo}/cars/01`,
    technicalUrl: 'https://fde-web-prd-001-gdegamg8eeebbuf9.z01.azurefd.net/-/jssmedia/lynkco-global-portal/media-library-2025/pdf/pdf/01-car-features-and-specifications/lynkco_01_my26_carfeatures_specifications_es_web.pdf?rev=1ab24e77fdc54c3b8649f9fdef7bc79b',
    sources: [
      source('Lynk & Co España: gama y acabados del 01', `${lynkCo}/cars/01`),
      source('Lynk & Co España: características y ficha MY26 del 01', `${lynkCo}/cars/01/features`),
      source('Lynk & Co: comunicado sobre el sistema de propulsión del 01', 'https://press.lynkco.com/es-ES/241092-lynk-co-presenta-la-nueva-version-de-su-modelo-01-mayor-rendimiento-e-innovacion/'),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'lynk-co',
    modelSlug: '02',
    title: 'Lynk & Co 02: motor eléctrico, autonomía y ficha técnica | Kilómetro Claro',
    description: 'Ficha del Lynk & Co 02 eléctrico en España: potencia de 200 kW, autonomía WLTP por acabado y especificaciones oficiales.',
    intro: 'El Lynk & Co 02 es un crossover coupé totalmente eléctrico con tracción trasera. En España se vende en los acabados Core y More, que comparten el motor de 200 kW y se diferencian, entre otras cosas, por batería/autonomía homologada, ruedas y equipamiento.',
    powertrainSummary: 'La documentación europea de Lynk & Co publica 200 kW (272 CV) para el motor eléctrico. La autonomía combinada WLTP alcanza 435 km en Core y 445 km en More; el fabricante advierte que las condiciones de conducción reales pueden dar otros resultados.',
    usageNote: 'Al ser eléctrico de batería, el 02 no tiene motor térmico ni cilindrada. La autonomía máxima anunciada varía según acabado y configuración. Para comparar el uso diario conviene considerar también el consumo eléctrico, el tipo de recorrido, la temperatura y la posibilidad de recarga en casa o en destino.',
    versions: [
      { name: 'Eléctrico · Core / More', type: 'Eléctrico de batería', power: '272 CV (200 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico trasero', torqueRpm: 'No publicado por el fabricante' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover coupé de cinco puertas' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Autonomía WLTP · Core', value: 'Hasta 435 km' },
      { label: 'Autonomía WLTP · More', value: 'Hasta 445 km' },
    ],
    specNote: 'La ficha de producto española presenta la gama, los acabados y las autonomías. La potencia de 200 kW (272 CV) aparece en la documentación oficial europea de Lynk & Co. La documentación consultada no publica un régimen de par máximo; por ello no se muestra una cifra de par.',
    officialUrl: `${lynkCo}/cars/02`,
    technicalUrl: `${lynkCo}/cars/02/features`,
    sources: [
      source('Lynk & Co España: gama y acabados del 02', `${lynkCo}/cars/02`),
      source('Lynk & Co España: características del 02 y datos por acabado', `${lynkCo}/cars/02/features`),
      source('Lynk & Co Alemania: datos oficiales del motor del 02', 'https://www.lynkco.com/de-de/cars/02'),
      source('Lynk & Co: actualización MY27 del 02 para Europa', 'https://press.lynkco.com/es-ES/266847-lynk-co-presenta-la-actualizacion-de-su-modelo-02-para-el-ano-2027/'),
    ],
    reviewedAt,
  },
  {
    brandSlug: 'lynk-co',
    modelSlug: '08',
    title: 'Lynk & Co 08: motor híbrido enchufable y ficha técnica | Kilómetro Claro',
    description: 'Consulta motor, potencia del sistema, cilindrada, batería y autonomía WLTP del SUV híbrido enchufable Lynk & Co 08.',
    intro: 'El Lynk & Co 08 es un SUV híbrido enchufable de cinco puertas, con acabados Core y More. Su sistema EM-P combina un motor de gasolina de 1,5 litros y motores eléctricos; la marca anuncia hasta 200 km de autonomía eléctrica WLTP y más de 1.000 km de autonomía combinada.',
    powertrainSummary: 'La ficha técnica europea identifica un motor de gasolina de 102 kW, uno eléctrico de 155 kW y 257 kW de potencia total del tren motriz. Expresados como caballos métricos, equivalen aproximadamente a 139 CV, 211 CV y 349 CV. Las potencias de los componentes no se suman para obtener el máximo del sistema, porque sus picos no se entregan necesariamente a la vez.',
    usageNote: 'El 08 puede funcionar en modo eléctrico mientras haya carga disponible y el recorrido lo permita; al agotarse o cuando la gestión híbrida lo requiere, también utiliza gasolina. La posibilidad de carga rápida en corriente continua distingue su batería PHEV de la mayoría de híbridos enchufables. Los 200 km eléctricos y más de 1.000 km combinados son cifras homologadas; el uso, la temperatura y el estado de carga influyen en la autonomía real.',
    versions: [
      { name: '1.5 EM-P PHEV · Core / More', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 349 CV (257 kW); motor térmico: 139 CV (102 kW); motor eléctrico: 211 CV (155 kW)', displacement: '1.499 cm³', maxTorque: '', torqueScope: 'Motor térmico de gasolina', torqueRpm: 'No publicado por el fabricante' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco puertas' },
      { label: 'Sistema de propulsión', value: 'Híbrido enchufable EM-P' },
      { label: 'Batería', value: '39,6 kWh' },
      { label: 'Autonomía eléctrica WLTP', value: 'Hasta 200 km' },
    ],
    specNote: 'La ficha técnica publica 230 Nm para el motor de gasolina, pero no especifica el régimen; se omite el par. El material comercial de Lynk & Co denomina 257 kW como 345 CV/PS; la tabla convierte los kW a caballos métricos (CV), equivalentes a unos 349 CV. La autonomía puede variar por versión, condiciones de conducción, temperatura y estado de carga.',
    officialUrl: `${lynkCo}/cars/08`,
    technicalUrl: `${lynkCo}/cars/08/features`,
    sources: [
      source('Lynk & Co España: página oficial del 08 y acabados', `${lynkCo}/cars/08`),
      source('Lynk & Co España: características del 08', `${lynkCo}/cars/08/features`),
      source('Lynk & Co: ficha técnica europea del 08', 'https://d21buns5ku92am.cloudfront.net/69406/documents/56942-1747866813-56805-1746789650-LynkCo_Tech_Specs_EN-824d81-3f954c.pdf'),
      source('Lynk & Co Alemania: potencia oficial del sistema y de sus motores', 'https://www.lynkco.com/de-de/cars/08'),
      source('Lynk & Co: hasta 200 km eléctricos y más de 1.000 km combinados', 'https://press.lynkco.com/es-ES/250432-media-alert-lynk-co-08-revoluciona-el-concepto-de-hibrido-enchufable-con-200-km-de-autonomia-electrica-y-acelera-su-expansion-por-euro/'),
    ],
    reviewedAt,
  },
];
