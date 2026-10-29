import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '28 de octubre de 2026';
const hyundai = 'https://www.hyundai.com/es/es';
const configurator = `${hyundai}/configurador-de-modelos.html`;
const source = (label: string, url: string) => ({ label, url });
const unpublished = 'No publicado en la ficha técnica oficial consultada';

type HyundaiModelSeed = {
  modelSlug: string;
  name: string;
  officialUrl: string;
  technicalUrl?: string;
  description: string;
  intro: string;
  powertrainSummary: string;
  usageNote: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  figures?: { label: string; value: string }[];
  specNote?: string;
  additionalSources?: { label: string; url: string }[];
};

const hyundaiPhotoData: Record<string, NonNullable<ModelPageData['image']>> = {
  'i10': {
    src: '/images/models/hyundai-i10.jpg', alt: 'Hyundai i10 de generación AC3 fotografiado en una exposición.', caption: 'La fotografía muestra una unidad de 2023; el acabado puede diferir de las últimas unidades disponibles.', width: 1280, height: 852,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2023_Hyundai_i10_(AC3)_Autofr%C3%BChling_Ulm_IMG_9346.jpg', authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'i20': {
    src: '/images/models/hyundai-i20.jpg', alt: 'Hyundai i20 de la generación BC3.', caption: 'La unidad fotografiada ilustra la carrocería BC3; acabado y equipamiento pueden variar.', width: 1280, height: 733,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_i20_(BC3)_1X7A6488.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'bayon': {
    src: '/images/models/hyundai-bayon.jpg', alt: 'Hyundai BAYON de 2024 fotografiado en exterior.', caption: 'Imagen de una unidad de 2024; puede no coincidir con el acabado de cada oferta.', width: 1280, height: 711,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2024_Hyundai_Bayon_DSC_8247.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'kona': {
    src: '/images/models/hyundai-kona.jpg', alt: 'Hyundai KONA de segunda generación (SX2).', caption: 'La gama y los detalles visibles dependen de la motorización y el acabado.', width: 1280, height: 690,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Kona_(SX2)_1X7A1646.jpg', authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'tucson': {
    src: '/images/models/hyundai-tucson.jpg', alt: 'Hyundai TUCSON de generación NX4.', caption: 'La fotografía corresponde a la generación NX4; no representa la nueva generación aún pendiente de disponibilidad.', width: 1280, height: 699,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Tucson_(NX4)_1X7A0424.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'santa-fe': {
    src: '/images/models/hyundai-santa-fe.jpg', alt: 'Hyundai SANTA FE de generación MX5.', caption: 'Fotografía de una unidad de 2024; las versiones HEV y PHEV pueden presentar diferencias.', width: 1280, height: 735,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2024_Hyundai_Santa_Fe_(MX5)_IMG_5295.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'i30': {
    src: '/images/models/hyundai-i30.jpg', alt: 'Hyundai i30 de cinco puertas, generación PD.', caption: 'La imagen muestra una unidad de 2024; los acabados y motores disponibles pueden variar.', width: 1280, height: 769,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2024_Hyundai_i30_(PD)_DSC_8543.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'i30-fastback': {
    src: '/images/models/hyundai-i30-fastback.jpg', alt: 'Hyundai i30 Fastback, compacto de silueta descendente.', caption: 'Fotografía de una generación anterior: sirve para ilustrar la carrocería, no una unidad concreta de stock.', width: 1280, height: 667,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_i30_Fastback_DSC_7082_(cropped).jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'i30-cw': {
    src: '/images/models/hyundai-i30-cw.jpg', alt: 'Hyundai i30 Touring familiar de cinco puertas.', caption: 'La fotografía muestra el i30 Touring 1.5 T-GDi 48 V; las motorizaciones y acabados cambian según mercado.', width: 1280, height: 960,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_i30_Touring_1.5T_48V_MHEV_PD_PE_Abyss_Black_(15).jpg', authorName: 'Damian B Oh', authorUrl: 'https://commons.wikimedia.org/wiki/User:Damian_B_Oh', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'staria-hibrido': {
    src: '/images/models/hyundai-staria-hibrido.jpg', alt: 'Hyundai STARIA Limousine con sistema híbrido 1.6 T-GDi HEV.', caption: 'La imagen ilustra la versión híbrida; el equipamiento fotografiado puede corresponder a otro mercado.', width: 1280, height: 960,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Staria_Limousine_Hybrid_1.6T_HEV_US4_PE_HEV_Creamy_White_(1).jpg', authorName: 'Damian B Oh', authorUrl: 'https://commons.wikimedia.org/wiki/User:Damian_B_Oh', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'inster': {
    src: '/images/models/hyundai-inster.jpg', alt: 'Hyundai INSTER, urbano eléctrico de carrocería compacta.', caption: 'La unidad fotografiada ilustra el modelo; colores y equipamiento dependen del acabado.', width: 1280, height: 743,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Inster_DSC_7947.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-3': {
    src: '/images/models/hyundai-ioniq-3.jpg', alt: 'Prototipo Hyundai Concept THREE, antecedente conceptual del IONIQ 3.', caption: 'Es el prototipo Concept THREE presentado en 2025, no una fotografía del modelo de producción.', width: 1280, height: 938,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_Three_Concept_IAA_2025_DSC_2360.jpg', authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-5': {
    src: '/images/models/hyundai-ioniq-5.jpg', alt: 'Hyundai IONIQ 5 modelo 2026 fotografiado en Estados Unidos.', caption: 'La unidad es un acabado SEL del mercado estadounidense; la especificación española puede diferir.', width: 1280, height: 710,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2026_Hyundai_IONIQ_5_SEL_in_Lucid_Blue,_front_right,_07-02-2026.jpg', authorName: 'Cutlass', authorUrl: 'https://commons.wikimedia.org/wiki/User:Cutlass', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-5-n': {
    src: '/images/models/hyundai-ioniq-5-n.jpg', alt: 'Hyundai IONIQ 5 N fotografiado en IAA Mobility 2025.', caption: 'La fotografía corresponde al IONIQ 5 N; no debe confundirse con el IONIQ 5 convencional.', width: 1280, height: 782,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_5_N_IAA_2025_DSC_2514.jpg', authorName: 'Alexander Migl', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-6': {
    src: '/images/models/hyundai-ioniq-6.jpg', alt: 'Hyundai IONIQ 6 actualizado (CE1 PE) expuesto en Seúl.', caption: 'Fotografía del modelo actualizado expuesto en 2025; la configuración de la unidad española puede variar.', width: 1280, height: 853,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_6_CE1_PE_%E2%80%93_Seoul_Mobility_Show_2025_(01).jpg', authorName: 'Treeinkr', authorUrl: 'https://commons.wikimedia.org/wiki/User:Treeinkr', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-6-n': {
    src: '/images/models/hyundai-ioniq-6-n.jpg', alt: 'Hyundai IONIQ 6 N presentado en IAA Mobility 2025.', caption: 'Imagen de exposición del IONIQ 6 N; el vehículo de serie puede diferir en detalles.', width: 1280, height: 875,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_6_N_IAA_2025_DSC_2355.jpg', authorName: 'Alexander-93', authorUrl: 'https://commons.wikimedia.org/wiki/User:Alexander-93', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'ioniq-9': {
    src: '/images/models/hyundai-ioniq-9.jpg', alt: 'Hyundai IONIQ 9 Calligraphy Design fotografiado en 2026.', caption: 'La unidad fotografiada es un acabado Calligraphy del mercado estadounidense.', width: 1280, height: 853,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Ioniq_9_Calligraphy_Design_(2026)_(55209855706).jpg', authorName: 'Charles', authorUrl: 'https://www.flickr.com/people/43494963@N03', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  'nexo': {
    src: '/images/models/hyundai-nexo.jpg', alt: 'Hyundai NEXO de nueva generación expuesto en Seoul Mobility Show 2025.', caption: 'Fotografía del NEXO NH2 de nueva generación en una presentación.', width: 1280, height: 853,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyundai_Nexo_NH2_%E2%80%93_Seoul_Mobility_Show_2025.jpg', authorName: 'Treeinkr', authorUrl: 'https://commons.wikimedia.org/wiki/User:Treeinkr', licenseName: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
};

const combustion = (
  name: string,
  power: string,
  displacement: string,
  maxTorque = unpublished,
  torqueRpm = unpublished,
  note?: string,
  classification?: Pick<ModelVersion, 'type' | 'powertrainGroup'>,
): ModelVersion => ({
  name,
  ...classification,
  power,
  displacement,
  maxTorque,
  torqueScope: 'Motor de combustión',
  torqueRpm,
  note,
});

const electric = (
  name: string,
  power: string,
  battery: string,
  maxTorque = unpublished,
  note?: string,
): ModelVersion => ({
  name,
  power,
  displacement: 'No aplica: propulsión eléctrica',
  maxTorque,
  torqueScope: 'Motor eléctrico o sistema, según dato publicado',
  torqueRpm: 'No comparable a un motor térmico; el régimen no se publica',
  note: battery + (note ? ` ${note}` : ''),
});

const hybrid = (
  name: string,
  power: string,
  displacement: string,
  note: string,
  maxTorque = unpublished,
  torqueRpm = unpublished,
): ModelVersion => ({
  name,
  power,
  displacement,
  maxTorque,
  torqueScope: 'Sistema híbrido; no confundir con el par aislado del motor térmico',
  torqueRpm,
  note,
});

const seeds: HyundaiModelSeed[] = [
  {
    modelSlug: 'i10', name: 'Hyundai i10',
    officialUrl: `${hyundai}/modelos/i10.html`,
    technicalUrl: 'https://dmassets.hyundai.com/is/content/hyundaiautoever/i10_my25_202501pdf',
    description: 'Ficha del Hyundai i10: motorizaciones de gasolina, cilindrada, potencia y par publicados para las últimas unidades en España.',
    intro: 'El i10 es el urbano más pequeño de Hyundai. Sus dimensiones y motores de gasolina están pensados para desplazamientos cotidianos y maniobras en ciudad. La marca lo mantiene en el configurador como “últimas unidades”, por lo que conviene confirmar con un concesionario qué acabados y motores quedan disponibles.',
    powertrainSummary: 'El catálogo técnico español del i10 MY25 recoge motores atmosféricos 1.0 y 1.2 MPi, además de un 1.0 T-GDi en el acabado N Line. Son datos de catálogo, no una garantía de que cada combinación siga en stock.',
    usageNote: 'Por su tamaño, puede resultar práctico como segundo coche o para recorridos urbanos con pocas personas. Antes de comprar una unidad de stock, revisa el año de fabricación, el equipamiento, la transmisión y la fecha de inicio de la garantía: dos i10 anunciados como últimas unidades pueden tener configuraciones distintas.',
    versions: [
      combustion('1.0 MPi', '63 CV a 5.500 rpm', '998 cm³', '93,2 Nm', '3.750 rpm', 'Gasolina atmosférico.'),
      combustion('1.2 MPi', '79 CV a 6.000 rpm', '1.197 cm³', '112,8 Nm', '4.200 rpm', 'Gasolina atmosférico.'),
      combustion('1.0 T-GDi', '90 CV a 6.000 rpm', '998 cm³', '171,6 Nm', '1.500–3.500 rpm', 'Gasolina turbo; acabado N Line.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Urbano de 5 puertas' }, { label: 'Plazas', value: '4' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Situación en el configurador', value: 'Últimas unidades; disponibilidad sujeta a stock' }],
    specNote: 'Las cifras de motor proceden del catálogo técnico Hyundai i10 MY25. El configurador español marca el i10 como últimas unidades; confirma la ficha y la disponibilidad de la unidad concreta antes de comparar precios.',
  },
  {
    modelSlug: 'i20', name: 'Hyundai i20',
    officialUrl: `${hyundai}/modelos/i20.html`,
    technicalUrl: `${hyundai}/modelos/i20/prestaciones.html`,
    description: 'Conoce el Hyundai i20 en España: urbano de gasolina, opciones de cambio y diferencias entre T-GDi y MPi.',
    intro: 'El i20 ocupa el espacio entre el i10 urbano y los compactos de Hyundai. Su carrocería de cinco puertas ofrece un formato más versátil para combinar ciudad y carretera, y la gama española contempla motores de gasolina con transmisión manual o automática según versión.',
    powertrainSummary: 'Hyundai describe en su información española motores 1.0 T-GDi y 1.2 MPi. La potencia, el cambio y el consumo homologado dependen de la combinación que aparezca en el configurador y del año-modelo; no mezclamos fichas de mercados distintos.',
    usageNote: 'Para uso diario con desplazamientos interurbanos, compara el espacio trasero y el equipaje con el de un SUV pequeño antes de pagar más por una carrocería elevada. Si haces trayectos cortos y frecuentes, valora también el motor concreto y el tipo de cambio, no solo la potencia máxima.',
    versions: [
      combustion('1.0 T-GDi gasolina', '90 CV en la gama consultada', '998 cm³', '172 Nm', '1.500–3.000 rpm', 'Disponible con caja manual o DCT, según acabado y disponibilidad.'),
      combustion('1.2 MPi gasolina', '84 CV en documentación de gama', '1.197 cm³', unpublished, unpublished, 'La oferta española puede variar por año-modelo; comprobar configurador.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Urbano de 5 puertas' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Transmisión', value: 'Manual o DCT, según versión' }, { label: 'Plazas', value: '5' }],
    specNote: 'La página española de prestaciones muestra motores 1.0 T-GDi y 1.2 MPi, mientras que las fichas descargables pueden corresponder a años-modelo distintos. Verifica la potencia, el par y el cambio de la unidad disponible en España.',
  },
  {
    modelSlug: 'bayon', name: 'Hyundai BAYON',
    officialUrl: `${hyundai}/modelos/bayon.html`,
    technicalUrl: `${hyundai}/modelos/nuevo-bayon/technical-data.html`,
    description: 'Motores del Hyundai BAYON en España: 1.0 T-GDi de 90 y 115 CV y sistema híbrido HEV de 138 CV.',
    intro: 'El BAYON es el SUV urbano de acceso de Hyundai. Su carrocería elevada y el formato compacto buscan combinar una posición de conducción alta con unas dimensiones adecuadas para calles y aparcamientos urbanos.',
    powertrainSummary: 'La página técnica española enumera dos motores de gasolina 1.0 T-GDi, de 90 y 115 CV, y un 1.6 HEV de 138 CV. Hyundai identifica este último como híbrido no enchufable; la gama y sus datos pueden cambiar mientras termina la homologación.',
    usageNote: 'La diferencia principal frente a un utilitario como el i20 está en la altura y el planteamiento de carrocería, no necesariamente en el espacio total. Compara dimensiones y maletero con tus necesidades y confirma en el concesionario qué motor y transmisión están realmente disponibles.',
    versions: [
      combustion('1.0 T-GDi 90 · 6MT / 7DCT', '90 CV (66 kW)', '998 cm³', '172 Nm', '1.500–3.500 rpm', 'Dato de par de la ficha técnica MY26 del fabricante.'),
      combustion('1.0 T-GDi 115 · 6MT / 7DCT', '115 CV (85 kW)', '998 cm³', unpublished, unpublished, 'La página española confirma potencia y transmisiones, pero no desglosa el par por esta versión.'),
      hybrid('1.6 HEV · sistema 138 CV', '138 CV (101 kW)', '1,6 l', 'Híbrido no enchufable; la ficha española no desglosa potencia y par de cada motor.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de 5 puertas' }, { label: 'Motorizaciones', value: 'Gasolina 90/115 CV o híbrida HEV 138 CV' }, { label: 'Transmisión', value: '6MT o 7DCT en gasolina; 6DCT en HEV' }, { label: 'Plazas', value: '5' }],
    specNote: 'Hyundai advierte que las cifras de prestaciones del BAYON no son definitivas y están pendientes de homologación. Para el 1.0 T-GDi de 90 CV, el fabricante publica 172 Nm a 1.500–3.500 rpm; no atribuimos un régimen de par a las otras motorizaciones porque su ficha española no lo desglosa.',
    additionalSources: [source('Ficha técnica oficial Hyundai BAYON MY26', 'https://dmassets.hyundai.com/is/content/hyundaiautoever/Scheda_Tecnica_Hyundai_Bayon_MY26')],
  },
  {
    modelSlug: 'kona', name: 'Hyundai KONA',
    officialUrl: `${hyundai}/modelos/kona.html`,
    technicalUrl: `${hyundai}/modelos/kona/rendimiento.html`,
    description: 'Compara las versiones del Hyundai KONA en España: gasolina, híbrido no enchufable y eléctrico.',
    intro: 'KONA reúne en una misma familia carrocerías SUV con motorización de gasolina, híbrida no enchufable y eléctrica. Cada alternativa responde a un uso distinto: el consumo de combustible de la versión térmica no se compara directamente con los kWh/100 km del KONA Eléctrico.',
    powertrainSummary: 'Hyundai España muestra KONA de gasolina con 115 y 150 CV, KONA HEV de 138 CV y dos variantes eléctricas. La gasolina de acceso usa un 1.0 T-GDi; las versiones de 150 CV llevan un 1.6 T-GDi y el HEV combina un 1.6 GDi con asistencia eléctrica.',
    usageNote: 'Si dudas entre HEV y eléctrico, estima tus kilómetros, el acceso a carga doméstica y la proporción de ciudad y carretera. El híbrido no se enchufa; el eléctrico requiere planificar la recarga en viajes largos. Compara el gasto con precios de energía que pagues realmente, no solo con cifras WLTP.',
    versions: [
      combustion('1.0 T-GDi 115', '115 CV (85 kW)', '998 cm³', '200 Nm', '2.000–2.500 rpm'),
      combustion('1.6 T-GDi 150', '150 CV (110 kW)', '1.598 cm³', '250 Nm', '1.500–4.000 rpm'),
      hybrid('1.6 GDi HEV · sistema 138 CV', '138 CV (101,5 kW)', '1.580 cm³', 'Híbrido no enchufable. El par indicado corresponde al sistema híbrido.', '265 Nm', '4.000 rpm'),
      electric('KONA Eléctrico · batería estándar', '135 CV', '48,4 kWh; autonomía WLTP según versión'),
      electric('KONA Eléctrico · batería de larga autonomía', '204 CV', '65,4 kWh; hasta 510 km WLTP en la ficha consultada'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto' }, { label: 'Plazas', value: '5' }, { label: 'Tecnologías', value: 'Gasolina, HEV y eléctrico' }, { label: 'Etiqueta DGT', value: 'Depende de la motorización' }],
    figures: [{ label: 'Autonomía máxima eléctrica publicada', value: 'Hasta 510 km WLTP; depende de batería y versión' }],
    specNote: 'Las potencias se contrastan con la gama española de Hyundai. Los detalles de cilindrada y par proceden de la ficha técnica MY26 del fabricante; transmisiones y acabados disponibles pueden variar por mercado. En el híbrido se indica el par del sistema, no el del motor térmico aislado. Las capacidades y autonomías eléctricas no deben trasladarse a las otras motorizaciones.',
    additionalSources: [source('Ficha técnica oficial Hyundai KONA MY26', 'https://dmassets.hyundai.com/is/content/hyundaiautoever/be-fr-brochure-konapdf')],
  },
  {
    modelSlug: 'tucson', name: 'Hyundai TUCSON',
    officialUrl: `${hyundai}/modelos/tucson.html`,
    technicalUrl: configurator,
    description: 'Ficha del Hyundai TUCSON: SUV de cinco plazas con gasolina, híbrido e híbrido enchufable en la oferta española.',
    intro: 'TUCSON es el SUV mediano de Hyundai y uno de los modelos con mayor variedad de propulsión de la marca. En la oferta española conviven versiones de gasolina, híbridas y enchufables; la generación y sus datos deben identificarse con cuidado porque Hyundai ha presentado una actualización que aún puede no estar a la venta.',
    powertrainSummary: 'El configurador español incluye TUCSON en gasolina, HEV y PHEV. Las fichas de cada año-modelo no son intercambiables: la página de la nueva generación advierte que sus datos y homologación están pendientes y que todavía no está a la venta.',
    usageNote: 'Para una comparación útil, anota primero si la unidad es gasolina, híbrida o enchufable y su año-modelo. Un PHEV solo aprovecha su batería si se carga con regularidad; si no se enchufa, el gasto puede diferir mucho del dato homologado. No uses las cifras preliminares de la nueva generación para valorar una unidad actual.',
    versions: [
      combustion('Gasolina 1.6 T-GDi', 'Potencia según generación y acabado', '1.598 cm³', unpublished, unpublished),
      hybrid('TUCSON Híbrido (HEV)', 'Potencia combinada según año-modelo', '1.6 l T-GDi + motor eléctrico', 'No requiere carga externa; potencia, batería y homologación dependen de generación.'),
      hybrid('TUCSON Híbrido enchufable (PHEV)', 'Potencia combinada según año-modelo', '1.6 l T-GDi + motor eléctrico', 'Se recarga externamente; autonomía eléctrica y batería varían con la generación.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV mediano de 5 plazas' }, { label: 'Tecnologías', value: 'Gasolina, HEV y PHEV' }, { label: 'Cambio', value: 'Manual o automático según versión' }, { label: 'Disponibilidad', value: 'Confirmar año-modelo y stock con Hyundai' }],
    specNote: 'Hyundai ha publicado una nueva generación TUCSON cuya página indica que todavía no está a la venta y que sus cifras no son definitivas. Esta ficha evita mezclar esos valores preliminares con los vehículos que aparecen en el configurador actual.',
  },
  {
    modelSlug: 'santa-fe', name: 'Hyundai SANTA FE',
    officialUrl: `${hyundai}/models/nuevo-santafe-hev.html`,
    technicalUrl: `${hyundai}/modelos/nuevo-santafe-phev/planenchufados.html`,
    description: 'Hyundai SANTA FE en España: SUV de siete plazas disponible como híbrido e híbrido enchufable.',
    intro: 'SANTA FE es el SUV familiar grande de Hyundai. La carrocería de siete plazas y las motorizaciones HEV y PHEV lo diferencian de los SUV compactos de la marca; el tamaño, el peso y el uso con todas las plazas ocupadas también influyen en el consumo real.',
    powertrainSummary: 'Hyundai España ofrece SANTA FE híbrido no enchufable de 239 CV y una variante híbrida enchufable. Ambas combinan un 1.6 T-GDi con motor eléctrico; la ficha y los valores de cada versión deben confirmarse en el configurador.',
    usageNote: 'Es importante comprobar cuántas plazas necesitas de verdad y cuánto equipaje cabe cuando se usan las siete. Si se comparan costes, diferencia el PHEV cargado con frecuencia del HEV, que no se enchufa; también considera neumáticos, seguro y consumo de un vehículo de este tamaño.',
    versions: [
      hybrid('1.6 T-GDi HEV', '239 CV de potencia combinada', '1.598 cm³ + motor eléctrico; batería de 1,49 kWh', 'Híbrido no enchufable. La potencia del motor térmico no equivale a la potencia total del sistema.'),
      hybrid('1.6 T-GDi PHEV', '288 CV de potencia combinada en la gama consultada', '1.598 cm³ + motor eléctrico; batería recargable', 'Hyundai España publica hasta 54 km de autonomía eléctrica para la versión consultada.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV familiar' }, { label: 'Plazas', value: '7' }, { label: 'Tecnologías', value: 'HEV y PHEV' }, { label: 'Tracción', value: 'Según versión; consultar configurador' }],
    figures: [{ label: 'Potencia HEV', value: '239 CV combinados' }, { label: 'Autonomía eléctrica PHEV', value: 'Hasta 54 km en la ficha consultada; WLTP y versión condicionan el dato' }],
  },
  {
    modelSlug: 'i30', name: 'Hyundai i30',
    officialUrl: `${hyundai}/modelos/i30.html`,
    technicalUrl: 'https://dmassets.hyundai.com/is/content/hyundaiautoever/i30_2602bpdf',
    description: 'Ficha técnica del Hyundai i30 de cinco puertas: motores 1.0 y 1.6 T-GDi, potencia, cilindrada y par.',
    intro: 'El i30 de cinco puertas es el compacto tradicional de Hyundai. Frente a un SUV, conserva una carrocería más baja y un portón trasero práctico. La marca ofrece motores de gasolina turbo y publica especificaciones diferenciadas para el compacto y para la carrocería CW.',
    powertrainSummary: 'La documentación técnica española consultada recoge un 1.0 T-GDi de tres cilindros y 115 CV, y un 1.6 T-GDi de cuatro cilindros y 150 CV con caja DCT. Hyundai ofrece ambos motores también en algunas carrocerías familiares, pero el acabado depende de la versión.',
    usageNote: 'El i30 puede ser una alternativa a un SUV si priorizas una altura de acceso menor y un formato compacto para viajar. Compara el maletero y el acceso a plazas traseras con la carrocería CW; aunque compartan motores, no son el mismo modelo de carrocería ni ofrecen igual espacio.',
    versions: [
      combustion('1.0 T-GDi', '115 CV a 6.000 rpm', '998 cm³', '172 Nm', '1.500–4.000 rpm', 'Gasolina, 3 cilindros; cambio manual según la ficha.'),
      combustion('1.6 T-GDi DCT', '150 CV', '1.598 cm³', '250 Nm', '1.500–4.000 rpm', 'Gasolina, 4 cilindros; cambio de doble embrague de 7 velocidades.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de 5 puertas' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Plazas', value: '5' }, { label: 'Maletero', value: 'La capacidad depende de carrocería y configuración' }],
    specNote: 'Los pares y regímenes proceden de la tabla técnica española del i30 consultada. La gama de motores y acabados puede variar en el configurador según el año-modelo.',
  },
  {
    modelSlug: 'i30-fastback', name: 'Hyundai i30 Fastback',
    officialUrl: `${hyundai}/modelos/i30-fastback.html`,
    technicalUrl: 'https://dmassets.hyundai.com/is/content/hyundaiautoever/i30_my25_2505pdf',
    description: 'Datos del Hyundai i30 Fastback: motores T-GDi de gasolina, versión híbrida ligera de 48 V, potencia, cilindrada y par máximo.',
    intro: 'El i30 Fastback combina la base de un compacto con una silueta de techo descendente. Hyundai España publica dos familias de motor turbo: un 1.0 T-GDi de 100 CV con cambio manual o DCT, y un 1.5 T-GDi de 140 CV con hibridación ligera de 48 V. La disponibilidad concreta de cada combinación puede variar por acabado.',
    powertrainSummary: 'La gama oficial distingue el 1.0 T-GDi de gasolina —172 Nm con cambio manual y 200 Nm con DCT— y el 1.5 T-GDi MHEV de 48 V, con 140 CV y 253 Nm. La cilindrada y el régimen del par se contrastan con la documentación técnica del fabricante; la configuración exacta debe confirmarse en la oferta española vigente.',
    usageNote: 'La carrocería Fastback aporta una zaga más tendida que la del i30 de cinco puertas. Antes de elegirla, prueba el acceso a las plazas traseras, la visibilidad y la abertura del maletero; la línea exterior puede cambiar la facilidad para cargar objetos altos o voluminosos.',
    versions: [
      combustion('1.0 T-GDi 100 · 6MT', '100 CV (74 kW)', '998 cm³', '172 Nm', '1.500–3.500 rpm', 'Gasolina, cambio manual de 6 velocidades.'),
      combustion('1.0 T-GDi 100 · 7DCT', '100 CV (74 kW)', '998 cm³', '200 Nm', '2.000–2.500 rpm', 'Gasolina, cambio DCT de 7 velocidades.'),
      combustion('1.5 T-GDi MHEV 140 · 7DCT', '140 CV (103 kW)', '1.498 cm³', '253 Nm', '1.500–3.000 rpm', 'Gasolina con hibridación ligera de 48 V y cambio DCT de 7 velocidades.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de silueta fastback' }, { label: 'Plazas', value: '5' }, { label: 'Motores', value: '1.0 T-GDi gasolina y 1.5 T-GDi MHEV 48 V' }, { label: 'Potencias publicadas', value: '100 y 140 CV, según motorización' }],
    specNote: 'La página de prestaciones de Hyundai España confirma las familias de motor y sus potencias y pares; el catálogo técnico oficial aporta cilindrada y regímenes. Los acabados y combinaciones de cambio pueden cambiar según el año-modelo.',
    additionalSources: [{ label: 'Prestaciones del Hyundai i30 Fastback', url: `${hyundai}/modelos/i30-fastback/prestaciones.html` }],
  },
  {
    modelSlug: 'i30-cw', name: 'Hyundai i30 CW',
    officialUrl: `${hyundai}/modelos/i30wagon.html`,
    technicalUrl: 'https://dmassets.hyundai.com/is/content/hyundaiautoever/i30_2602bpdf',
    description: 'Ficha del Hyundai i30 CW familiar: motores gasolina T-GDi, maletero y datos técnicos publicados en España.',
    intro: 'El i30 CW es la carrocería familiar del compacto de Hyundai. Mantiene la base mecánica del i30, pero alarga la zona posterior para ofrecer un maletero más aprovechable en viajes y en el día a día de una familia.',
    powertrainSummary: 'Hyundai España describe para el i30 CW motores de gasolina 1.0 T-GDi y 1.6 T-GDi. La ficha técnica del i30 recoge 115 CV para el 1.0 y 150 CV para el 1.6 DCT; el equipamiento y la disponibilidad se deben revisar por carrocería y acabado.',
    usageNote: 'La carrocería CW puede ser útil si llevas cochecitos, maletas o material voluminoso con frecuencia. Comprueba la longitud total y el acceso al maletero en persona: un mayor volumen no siempre compensa si aparcas habitualmente en plazas estrechas.',
    versions: [
      combustion('1.0 T-GDi', '115 CV a 6.000 rpm', '998 cm³', '172 Nm', '1.500–4.000 rpm', 'Gasolina; manual según la ficha técnica.'),
      combustion('1.6 T-GDi DCT', '150 CV', '1.598 cm³', '250 Nm', '1.500–4.000 rpm', 'Gasolina; doble embrague de 7 velocidades.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Familiar compacto' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Maletero', value: '602 l con cinco plazas en ficha consultada' }, { label: 'Plazas', value: '5' }],
    figures: [{ label: 'Maletero', value: '602 l; hasta 1.650 l con asientos traseros abatidos, según ficha oficial' }],
    specNote: 'La página española del i30 CW confirma las motorizaciones y el documento técnico del i30 publica las cifras de motor. El volumen del maletero citado corresponde a la ficha de Hyundai y puede variar con la versión.',
  },
  {
    modelSlug: 'staria-hibrido', name: 'Hyundai STARIA Híbrido',
    officialUrl: `${hyundai}/modelos/staria-hibrido.html`,
    technicalUrl: `${hyundai}/modelos/staria-hibrido/prestaciones.html`,
    description: 'Hyundai STARIA Híbrido para pasajeros: monovolumen HEV de hasta nueve plazas con motor 1.6 T-GDi.',
    intro: 'STARIA Híbrido es un vehículo polivalente de pasajeros con una carrocería alta y puertas correderas. La versión híbrida convencional combina motor de gasolina y eléctrico sin requerir una toma de carga, y Hyundai la ofrece en configuraciones de hasta nueve plazas.',
    powertrainSummary: 'El sistema HEV combina un motor 1.6 T-GDi, un motor eléctrico y una batería autorrecargable mediante frenada regenerativa. Hyundai publica una potencia de sistema de 225 CV; no debe confundirse con la potencia individual del motor térmico.',
    usageNote: 'Su principal diferencia frente a un SUV de siete plazas es la modularidad y la facilidad de acceso a varias filas. Antes de elegirlo, confirma el número de plazas homologadas de la unidad, el espacio de equipaje con todos los asientos ocupados y las dimensiones para el garaje habitual.',
    versions: [hybrid('1.6 T-GDi HEV', '225 CV combinados', '1.6 l gasolina + motor eléctrico; batería de 1,49 kWh', 'Híbrido no enchufable, con transmisión automática de 6 velocidades.')],
    facts: [{ label: 'Carrocería', value: 'Monovolumen de pasajeros' }, { label: 'Plazas', value: 'Hasta 9, según configuración' }, { label: 'Motorización', value: 'Híbrida no enchufable (HEV)' }, { label: 'Etiqueta DGT', value: 'ECO, según homologación española' }],
    specNote: 'La fuente de Hyundai España diferencia la potencia combinada del sistema y el motor de gasolina. Esta ficha excluye STARIA Cargo y recoge solo la variante híbrida para pasajeros del configurador.',
  },
  {
    modelSlug: 'inster', name: 'Hyundai INSTER',
    officialUrl: `${hyundai}/modelos/inster.html`,
    technicalUrl: `${hyundai}/modelos/inster/descargas.html`,
    description: 'Ficha del Hyundai INSTER eléctrico: baterías de 42 y 49 kWh, autonomía WLTP, potencia y par motor.',
    intro: 'INSTER es el eléctrico urbano de Hyundai, con carrocería corta, cuatro plazas y una distribución interior flexible. La gama ofrece dos capacidades de batería; la autonomía cambia según batería, llantas y condiciones de uso.',
    powertrainSummary: 'La ficha técnica española publica motores eléctricos de 71,1 y 84,5 kW, ambos con 147 Nm, asociados a baterías de 42 y 49 kWh. El fabricante indica autonomías WLTP combinadas de 327 y 370 km, respectivamente.',
    usageNote: 'El formato puede encajar en ciudad y desplazamientos periurbanos. Para saber si sirve como coche único, compara la autonomía de la batería elegida con tus viajes habituales y considera que la cifra WLTP no equivale a la autonomía en autovía, especialmente con frío o climatización.',
    versions: [
      electric('Batería estándar', '71,1 kW (97 CV)', '42 kWh; hasta 327 km WLTP', '147 Nm'),
      electric('Batería de larga autonomía', '84,5 kW (115 CV)', '49 kWh; hasta 370 km WLTP', '147 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Urbano eléctrico' }, { label: 'Plazas', value: '4' }, { label: 'Tracción', value: 'Delantera' }, { label: 'Maletero', value: '238–351 l según posición de los asientos' }],
    figures: [{ label: 'Carga rápida', value: '10–80 % en unos 30 min en CC, según punto y condiciones' }],
  },
  {
    modelSlug: 'ioniq-3', name: 'Hyundai IONIQ 3',
    officialUrl: 'https://www.hyundai.com/es/es/models/ioniq3.html',
    technicalUrl: 'https://www.hyundai.com/es/es/modelos/ioniq3.html',
    description: 'Conoce el Hyundai IONIQ 3: compacto eléctrico, baterías de 42,2 y 61 kWh, autonomía WLTP y carga rápida.',
    intro: 'IONIQ 3 es el compacto eléctrico de Hyundai para el uso diario. Combina una carrocería contenida con un habitáculo de cinco plazas y dos tamaños de batería. La marca ya permite configurarlo en España; su precio y la disponibilidad de acabados dependen de la oferta vigente.',
    powertrainSummary: 'Hyundai España publica dos baterías, de 42,2 y 61 kWh, con autonomías WLTP de hasta 344 y 497 km. La potencia del motor llega a 107,8 kW (147 CV) y el par publicado es 250 Nm.',
    usageNote: 'El tamaño de la batería es una de las diferencias prácticas entre versiones, pero también influye el equipamiento y el uso de llantas. Si se utilizará para viajar, comprueba la curva de carga y la red de cargadores de tus rutas; los 497 km WLTP son una cifra homologada, no una promesa de alcance a velocidad constante de autovía.',
    versions: [
      electric('Standard Range', 'Hasta 107,8 kW (147 CV)', '42,2 kWh; hasta 344 km WLTP', '250 Nm'),
      electric('Long Range', 'Hasta 107,8 kW (147 CV)', '61 kWh; hasta 497 km WLTP', '250 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto eléctrico de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Batería', value: '42,2 o 61 kWh' }, { label: 'Carga rápida', value: '10–80 % en unos 29 min, según fabricante' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 497 km con batería Long Range' }, { label: 'Maletero', value: '441 l más Megabox de 119 l, según Hyundai' }],
  },
  {
    modelSlug: 'ioniq-5', name: 'Hyundai IONIQ 5',
    officialUrl: `${hyundai}/modelos/ioniq5.html`,
    technicalUrl: `${hyundai}/modelos/ioniq5/rendimiento.html`,
    description: 'Ficha del Hyundai IONIQ 5: potencias eléctricas, baterías de 63 y 84 kWh, autonomía y carga rápida.',
    intro: 'IONIQ 5 es un crossover eléctrico de cinco plazas con arquitectura de 800 V. Está disponible con batería estándar o de larga autonomía, y con tracción trasera o total según versión. La combinación concreta condiciona potencia, autonomía y rapidez de carga.',
    powertrainSummary: 'Hyundai España recoge versiones de 170 y 229 CV con tracción trasera, además de una opción de tracción total de 325 CV. La batería estándar es de 63 kWh y la de larga autonomía de 84 kWh; la disponibilidad de cada combinación depende del acabado.',
    usageNote: 'La arquitectura de 800 V permite aprovechar cargadores de alta potencia compatibles, pero el tiempo real también depende de temperatura y estado de carga. Para viajes, revisa batería y tracción de la unidad: una cifra máxima WLTP de la gama no representa todas las versiones.',
    versions: [
      electric('Batería 63 kWh · tracción trasera', '170 CV', '63 kWh; autonomía según acabado', '350 Nm'),
      electric('Batería 84 kWh · tracción trasera', '229 CV', '84 kWh; hasta 540 km WLTP en la ficha consultada', '350 Nm'),
      electric('Batería 84 kWh · tracción total', '325 CV', '84 kWh; autonomía según acabado', '605 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Crossover eléctrico' }, { label: 'Plazas', value: '5' }, { label: 'Baterías', value: '63 o 84 kWh' }, { label: 'Carga rápida', value: '10–80 % en unos 18 min en condiciones adecuadas' }],
    figures: [{ label: 'Maletero', value: '520 l; hasta 1.580 l con asientos abatidos' }],
  },
  {
    modelSlug: 'ioniq-5-n', name: 'Hyundai IONIQ 5 N',
    officialUrl: `${hyundai}/modelos/ioniq-5-n.html`,
    technicalUrl: `${hyundai}/modelos/ioniq-5-n/rendimiento.html`,
    description: 'Datos del Hyundai IONIQ 5 N: crossover eléctrico deportivo de tracción total, potencia, par y batería.',
    intro: 'IONIQ 5 N es la variante de altas prestaciones de la familia IONIQ 5. Mantiene una carrocería de crossover eléctrico, pero añade dos motores, tracción total y sistemas específicos para conducción deportiva. Sus cifras máximas incluyen el modo N Grin Boost y no se mantienen indefinidamente en cualquier condición.',
    powertrainSummary: 'Hyundai España publica hasta 609 CV y 740 Nm, con 650 CV y 770 Nm al activar N Grin Boost. La batería es de 84 kWh y el vehículo incorpora dos motores eléctricos; el par no debe compararse con el régimen de un motor térmico.',
    usageNote: 'Es una versión de altas prestaciones, no simplemente un acabado visual del IONIQ 5. Para uso cotidiano también conviene valorar neumáticos, consumo, costes de seguro y cómo cambia la autonomía al utilizar repetidamente la potencia máxima.',
    versions: [
      electric('Potencia máxima del sistema', '609 CV', '84 kWh; dos motores y tracción total', '740 Nm'),
      electric('N Grin Boost', '650 CV', '84 kWh; potencia extra temporal', '770 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Crossover eléctrico deportivo' }, { label: 'Tracción', value: 'Total, con dos motores' }, { label: 'Batería', value: '84 kWh' }, { label: 'Velocidad máxima', value: '260 km/h, según Hyundai' }],
    figures: [{ label: 'Aceleración 0–100 km/h', value: '3,4 s; 3,2 s con N Launch Control, según condiciones' }],
  },
  {
    modelSlug: 'ioniq-6', name: 'Hyundai IONIQ 6',
    officialUrl: `${hyundai}/modelos/ioniq6.html`,
    technicalUrl: `${hyundai}/modelos/ioniq6.html`,
    description: 'Ficha del Hyundai IONIQ 6: berlina eléctrica con batería de 63 u 84 kWh, tracción trasera o total y hasta 680 km WLTP.',
    intro: 'IONIQ 6 es la berlina eléctrica de Hyundai. Su carrocería aerodinámica y las opciones de batería y tracción hacen que la autonomía varie de forma importante entre versiones; para comparar ofertas hay que identificar la combinación exacta.',
    powertrainSummary: 'Hyundai España publica batería de 63 kWh con motor trasero de 170 CV y batería de 84 kWh con 229 CV en tracción trasera o 325 CV en tracción total. Los pares publicados son 350 Nm para las versiones de un motor y 605 Nm combinados para la AWD.',
    usageNote: 'La forma de berlina puede favorecer la eficiencia en carretera, aunque el alcance real depende de velocidad, clima y llantas. El máximo de 680 km WLTP corresponde a una configuración concreta de batería y tracción trasera, no a toda la gama.',
    versions: [
      electric('Standard Range · RWD', '170 CV', '63 kWh; autonomía según acabado', '350 Nm'),
      electric('Long Range · RWD', '229 CV', '84 kWh; hasta 680 km WLTP con configuración específica', '350 Nm'),
      electric('Long Range · AWD', '325 CV', '84 kWh; dos motores y tracción total', '605 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Berlina eléctrica' }, { label: 'Plazas', value: '5' }, { label: 'Baterías', value: '63 o 84 kWh' }, { label: 'Arquitectura', value: 'Eléctrica de 800 V' }],
    figures: [{ label: 'Autonomía máxima publicada', value: 'Hasta 680 km WLTP en una versión RWD concreta' }],
    specNote: 'Los datos de potencia y par se presentan por configuración de motor. El máximo de autonomía corresponde a la batería de 84 kWh, tracción trasera y equipamiento concreto indicado por Hyundai.',
  },
  {
    modelSlug: 'ioniq-6-n', name: 'Hyundai IONIQ 6 N',
    officialUrl: `${hyundai}/modelos/ioniq6-n.html`,
    technicalUrl: `${hyundai}/modelos/ioniq6-n/datos-tecnicos-descargas.html`,
    description: 'Hyundai IONIQ 6 N: berlina eléctrica deportiva de 609 CV, hasta 650 CV con N Grin Boost y 487 km WLTP.',
    intro: 'IONIQ 6 N lleva la silueta de berlina eléctrica de Hyundai a una configuración de altas prestaciones. Cuenta con dos motores y sistemas orientados a conducción deportiva; combina esa capacidad con una batería de gran tamaño y carga rápida.',
    powertrainSummary: 'La ficha técnica española de Hyundai indica 448 kW (609 CV), 740 Nm y batería de 84 kWh. Con N Grin Boost alcanza 478 kW (650 CV) y 770 Nm; la autonomía WLTP publicada es de hasta 487 km.',
    usageNote: 'La cifra de potencia con N Grin Boost es una función de rendimiento puntual, no el valor continuo para cualquier trayecto. Si se evalúa como coche de uso diario, compara consumo homologado, autonomía, costes de neumáticos y disponibilidad de carga rápida.',
    versions: [
      electric('Potencia máxima del sistema', '609 CV (448 kW)', '84 kWh; tracción total con dos motores', '740 Nm'),
      electric('N Grin Boost', '650 CV (478 kW)', '84 kWh; incremento temporal de potencia', '770 Nm'),
    ],
    facts: [{ label: 'Carrocería', value: 'Berlina eléctrica deportiva' }, { label: 'Batería', value: '84 kWh' }, { label: 'Tracción', value: 'Total' }, { label: 'Carga rápida', value: '10–80 % en 18 min con cargador de 350 kW, según Hyundai' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 487 km' }, { label: 'Consumo eléctrico combinado', value: '21,2 kWh/100 km' }],
  },
  {
    modelSlug: 'ioniq-9', name: 'Hyundai IONIQ 9',
    officialUrl: `${hyundai}/modelos/ioniq9.html`,
    technicalUrl: `${hyundai}/modelos/ioniq9.html`,
    description: 'Ficha del Hyundai IONIQ 9: SUV eléctrico de siete plazas, batería de 110,3 kWh, autonomía y carga rápida.',
    intro: 'IONIQ 9 es el SUV eléctrico grande de Hyundai y ofrece espacio para siete ocupantes. Su batería Long Range de 110,3 kWh y la arquitectura eléctrica de 800 V están pensadas para combinar habitabilidad con viajes largos, aunque el alcance cambia con tracción y equipamiento.',
    powertrainSummary: 'La gama española consultada incluye batería Long Range de 110,3 kWh y configuraciones eléctricas de tracción trasera o total. Hyundai publica hasta 620 km WLTP en una versión de tracción trasera con llantas de 19 pulgadas; no trasladamos ese máximo a todas las variantes.',
    usageNote: 'Con siete plazas ocupadas, equipaje y velocidades de autovía, la autonomía real puede ser inferior a la cifra homologada. Para valorar este SUV como coche familiar, comprueba el maletero con todas las plazas en uso y el tiempo de parada de las recargas en tus rutas habituales.',
    versions: [
      electric('Long Range · tracción trasera', 'Potencia según acabado del configurador', '110,3 kWh; hasta 620 km WLTP con llantas de 19 pulgadas'),
      electric('Long Range · tracción total', 'Potencia según acabado del configurador', '110,3 kWh; autonomía variable por versión'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico' }, { label: 'Plazas', value: '7' }, { label: 'Batería', value: '110,3 kWh' }, { label: 'Carga rápida', value: '10–80 % en unos 24 min en condiciones adecuadas' }],
    figures: [{ label: 'Autonomía WLTP máxima', value: 'Hasta 620 km, versión RWD y llantas de 19 pulgadas' }],
    specNote: 'La página española consultada publica con claridad batería, autonomía máxima y variantes de tracción, pero las potencias y pares varían por acabado. Consulta la ficha técnica asociada al vehículo configurado.',
  },
  {
    modelSlug: 'nexo', name: 'Hyundai NEXO',
    officialUrl: `${hyundai}/modelos/nexo.html`,
    technicalUrl: `${hyundai}/modelos/nexo.html`,
    description: 'Hyundai NEXO: SUV eléctrico de pila de combustible de hidrógeno, autonomía WLTP, potencia y particularidades de uso.',
    intro: 'NEXO es un SUV eléctrico que genera electricidad a bordo mediante una pila de combustible alimentada con hidrógeno. No es un híbrido de gasolina ni un eléctrico que se enchufe: necesita repostar hidrógeno en estaciones compatibles, cuya disponibilidad en España debe comprobarse antes de plantearse su compra.',
    powertrainSummary: 'Hyundai publica para el nuevo NEXO una autonomía de hasta 826 km WLTP, depósitos de hasta 6,69 kg de hidrógeno y un motor eléctrico delantero de 150 kW. La información técnica global da 350 Nm para el motor; las especificaciones pueden cambiar por mercado.',
    usageNote: 'La autonomía homologada no resuelve la cuestión práctica principal: la infraestructura de hidrógeno es mucho menos extensa que la red eléctrica o de carburantes. Antes de elegirlo, localiza estaciones operativas en las rutas reales y confirma si el vehículo está disponible para particulares en tu zona.',
    versions: [electric('Pila de combustible de hidrógeno', 'Motor eléctrico de 150 kW (204 CV)', 'Depósito de hasta 6,69 kg de hidrógeno; autonomía WLTP de hasta 826 km', '350 Nm', 'La pila transforma hidrógeno en electricidad; repostaje en estación compatible.')],
    facts: [{ label: 'Carrocería', value: 'SUV de pila de combustible' }, { label: 'Energía', value: 'Hidrógeno; propulsión eléctrica' }, { label: 'Autonomía WLTP publicada', value: 'Hasta 826 km' }, { label: 'Depósito', value: 'Hasta 6,69 kg de H₂' }],
    specNote: 'La página española del nuevo NEXO comunica autonomía y capacidad de depósito; la potencia y el par citados proceden de información técnica de Hyundai a escala global. La disponibilidad y homologación de la versión española deben confirmarse en el configurador o concesionario.',
  },
];

const makePage = (entry: HyundaiModelSeed): ModelPageData => ({
  brandSlug: 'hyundai',
  modelSlug: entry.modelSlug,
  title: `${entry.name}: motores y datos de la gama española | Kilómetro Claro`,
  description: entry.description,
  intro: entry.intro,
  powertrainSummary: entry.powertrainSummary,
  usageNote: entry.usageNote,
  versions: entry.versions,
  facts: entry.facts,
  figures: entry.figures,
  specNote: entry.specNote,
  image: hyundaiPhotoData[entry.modelSlug],
  officialUrl: entry.officialUrl,
  technicalUrl: entry.technicalUrl ?? entry.officialUrl,
  sources: [
    source(`Hyundai España: ${entry.name}`, entry.officialUrl),
    source('Configurador oficial de modelos Hyundai España', configurator),
    ...(entry.technicalUrl && entry.technicalUrl !== entry.officialUrl
      ? [source(`Información técnica de ${entry.name}`, entry.technicalUrl)]
      : []),
    ...(entry.additionalSources ?? []),
  ],
  reviewedAt,
});

export const hyundaiModels: ModelPageData[] = seeds.map(makePage);
