import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '28 de octubre de 2026';
const volkswagen = 'https://www.volkswagen.es';
const modelUrl = (slug: string) => `${volkswagen}/es/modelos/${slug}.html`;
const configuratorUrl = (slug: string) => `${volkswagen}/es/configurador.html/__app/${slug}.app`;
const source = (label: string, url: string) => ({ label, url });

const volkswagenPhoto = (
  file: string,
  alt: string,
  commonsFile: string,
  authorName: string,
  authorSlug: string,
  height: number,
  caption?: string,
): NonNullable<ModelPageData['image']> => ({
  src: `/images/models/${file}`,
  alt,
  width: 1280,
  height,
  caption,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(commonsFile)}`,
  authorName,
  authorUrl: `https://commons.wikimedia.org/wiki/User:${encodeURIComponent(authorSlug).replace(/%20/g, '_')}`,
  licenseName: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
});

const volkswagenPhotos: Record<string, NonNullable<ModelPageData['image']>> = {
  polo: volkswagenPhoto('volkswagen-polo.jpg', 'Volkswagen Polo VI fotografiado en una exposición de automóviles.', 'Volkswagen Polo VI (2021) IMG 5322.jpg', 'Alexander Migl', 'Alexander Migl', 852),
  'id-polo': volkswagenPhoto('volkswagen-id-polo.jpg', 'Volkswagen ID. Polo eléctrico fotografiado en una exposición de automóviles.', 'Volkswagen ID.Polo IMG 8260.jpg', 'Alexander Migl', 'Alexander Migl', 852),
  taigo: volkswagenPhoto('volkswagen-taigo.jpg', 'Volkswagen Taigo fotografiado en una exposición de automóviles.', 'Volkswagen Taigo 1X7A0246.jpg', 'Alexander Migl', 'Alexander Migl', 721),
  't-cross': volkswagenPhoto('volkswagen-t-cross.jpg', 'Volkswagen T-Cross de 2023 fotografiado en una exposición de automóviles.', 'Volkswagen T-Cross (2023) 1X7A1967.jpg', 'Alexander-93', 'Alexander-93', 854),
  'id-cross': volkswagenPhoto('volkswagen-id-cross.jpg', 'Prototipo Volkswagen ID. Cross expuesto en IAA Mobility 2025, Múnich.', 'VW ID. Cross, IAA Summit 2025, Munich (20250908-P1050119).jpg', 'Matti Blume', 'Matti Blume', 960, 'La fotografía muestra el prototipo presentado en 2025; algunos detalles pueden diferir de la versión de serie.'),
  golf: volkswagenPhoto('volkswagen-golf.jpg', 'Volkswagen Golf VIII fotografiado en una exposición de automóviles.', 'Volkswagen Golf VIII 1X7A0353.jpg', 'Alexander Migl', 'Alexander Migl', 695),
  'id3-neo': volkswagenPhoto('volkswagen-id3-neo.jpg', 'Volkswagen ID.3 Neo fotografiado en una exposición de automóviles.', 'Volkswagen ID.3 Neo IMG 7255.jpg', 'Alexander Migl', 'Alexander Migl', 728),
  't-roc': volkswagenPhoto('volkswagen-t-roc.jpg', 'Volkswagen T-Roc R-Line de nueva generación expuesto en Auto Zürich 2025.', 'VW T-Roc R-Line, Media Stage, Auto 2025, Zurich (20251029-P1074182).jpg', 'Matti Blume', 'Matti Blume', 960),
  't-roc-cabrio': volkswagenPhoto('volkswagen-t-roc-cabrio.jpg', 'Volkswagen T-Roc Cabriolet fotografiado en una exposición de automóviles.', 'Volkswagen T-Roc Cabriolet (2021) 1X7A0319.jpg', 'Alexander Migl', 'Alexander Migl', 714),
  'golf-variant': volkswagenPhoto('volkswagen-golf-variant.jpg', 'Volkswagen Golf VIII Variant, carrocería familiar, fotografiado en una exposición de automóviles.', 'Volkswagen Golf VIII Variant 1X7A0352.jpg', 'Alexander Migl', 'Alexander Migl', 697),
  tiguan: volkswagenPhoto('volkswagen-tiguan.jpg', 'Volkswagen Tiguan de tercera generación fotografiado en una exposición de automóviles.', 'Volkswagen Tiguan III 1X7A2497.jpg', 'Alexander-93', 'Alexander-93', 905),
  id4: volkswagenPhoto('volkswagen-id4.jpg', 'Volkswagen ID.4 eléctrico fotografiado en una exposición de automóviles.', 'Volkswagen ID.4 1X7A0360.jpg', 'Alexander Migl', 'Alexander Migl', 679),
  tayron: volkswagenPhoto('volkswagen-tayron.jpg', 'Volkswagen Tayron europeo fotografiado en una exposición de automóviles.', 'Volkswagen Tayron (Europe) DSC 9343.jpg', 'Alexander Migl', 'Alexander Migl', 678),
  id7: volkswagenPhoto('volkswagen-id7.jpg', 'Volkswagen ID.7 eléctrico fotografiado en una exposición de automóviles.', 'Volkswagen ID.7 1X7A1756.jpg', 'Alexander-93', 'Alexander-93', 627),
  passat: volkswagenPhoto('volkswagen-passat.jpg', 'Volkswagen Passat Variant B9 fotografiado en una exposición de automóviles.', 'Volkswagen Passat Variant B9 1X7A1960.jpg', 'Alexander-93', 'Alexander-93', 688),
  'id7-tourer': volkswagenPhoto('volkswagen-id7-tourer.jpg', 'Volkswagen ID.7 Tourer eléctrico fotografiado en una exposición de automóviles.', 'Volkswagen ID.7 Tourer Automesse Ludwigsburg 2024 IMG 1464.jpg', 'Alexander-93', 'Alexander-93', 791),
};

type VolkswagenModelSeed = {
  modelSlug: string;
  name: string;
  officialSlug: string;
  configuratorSlug?: string;
  description: string;
  intro: string;
  powertrainSummary: string;
  usageNote: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  figures?: { label: string; value: string }[];
  specNote?: string;
};

const combustionVersion = (name: string, power: string, displacement: string, type?: string, powertrainGroup?: 'mixed'): ModelVersion => ({
  name,
  ...(type ? { type } : {}),
  ...(powertrainGroup ? { powertrainGroup } : {}),
  power,
  displacement,
  maxTorque: 'No publicado en las fuentes oficiales consultadas',
  torqueScope: 'Motor de combustión',
  torqueRpm: 'No publicado en las fuentes oficiales consultadas',
});

const plugInVersion = (name: string, power: string, displacement: string, note: string): ModelVersion => ({
  name,
  power,
  displacement,
  maxTorque: 'No publicado de forma desglosada por versión',
  torqueScope: 'Motorización híbrida enchufable',
  torqueRpm: 'No publicado',
  note,
});

const electricVersion = (name: string, power: string, battery: string): ModelVersion => ({
  name,
  power,
  displacement: 'No aplica: 100 % eléctrico',
  maxTorque: 'No publicado en las fuentes oficiales consultadas',
  torqueScope: 'Motor eléctrico',
  torqueRpm: 'No comparable a un motor térmico; no publicado',
  note: battery,
});

const makeVolkswagenPage = (entry: VolkswagenModelSeed): Omit<ModelPageData, 'brandSlug'> => {
  const officialUrl = modelUrl(entry.officialSlug);
  const technicalUrl = entry.configuratorSlug ? configuratorUrl(entry.configuratorSlug) : officialUrl;
  const sources = [source(`Volkswagen España: ${entry.name}`, officialUrl)];
  if (entry.configuratorSlug) sources.push(source(`Configurador oficial: ${entry.name}`, technicalUrl));

  return {
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
    image: volkswagenPhotos[entry.modelSlug],
    officialUrl,
    technicalUrl,
    sources,
    reviewedAt,
  };
};

const volkswagenModelSeeds: VolkswagenModelSeed[] = [
  {
    modelSlug: 'polo',
    name: 'Volkswagen Polo',
    officialSlug: 'polo',
    configuratorSlug: 'polo',
    description: 'Ficha del Volkswagen Polo en España: motores de gasolina 1.0 MPI y TSI, potencias, consumo WLTP y cambios disponibles.',
    intro: 'El Polo es el utilitario de gasolina de acceso a la gama Volkswagen. En España se configura con motores 1.0 MPI y TSI, y con cambio manual o DSG según acabado. La página reúne las cifras generales publicadas por la marca y señala qué datos de motor no aparecen en su resumen técnico.',
    powertrainSummary: 'El configurador español muestra motores de gasolina 1.0 MPI y TSI entre 59 y 85 kW (80–116 CV). La disponibilidad de caja manual o DSG depende del acabado y la potencia elegidos.',
    usageNote: 'Su formato urbano puede encajar con desplazamientos diarios y aparcamiento en ciudad. Si el coche también hará viajes frecuentes, compara el espacio trasero, el equipaje y la respuesta de la versión concreta; el nombre Polo no identifica por sí solo una única combinación de motor y cambio.',
    versions: [combustionVersion('1.0 MPI / TSI gasolina', '59–85 kW (80–116 CV)', '1,0 l')],
    facts: [{ label: 'Carrocería', value: 'Utilitario de 5 puertas' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Cambio', value: 'Manual o DSG, según versión' }, { label: 'Gama de potencia', value: '59–85 kW (80–116 CV)' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '5,1–5,7 l/100 km' }, { label: 'Emisiones de CO₂', value: '116–130 g/km' }],
  },
  {
    modelSlug: 'id-polo',
    name: 'Volkswagen ID. Polo',
    officialSlug: 'id-polo',
    configuratorSlug: 'id-polo',
    description: 'Conoce el Volkswagen ID. Polo eléctrico: baterías de 37 y 52 kWh, autonomía homologada, consumo y carga.',
    intro: 'El ID. Polo lleva el nombre del utilitario de Volkswagen a una carrocería eléctrica. La gama española ofrece baterías de 37 y 52 kWh, y la autonomía WLTP cambia según acabado y combinación. La ficha permite distinguir esas cifras de homologación de la distancia que se recorrerá en el uso real.',
    powertrainSummary: 'Todas las versiones del ID. Polo son eléctricas y automáticas. El configurador recoge baterías de 37 y 52 kWh; la autonomía combinada publicada se sitúa entre 318 y 449 km según acabado. La denominación GTI aparece también en el configurador con batería de 52 kWh.',
    usageNote: 'Para valorar si sirve como coche único, conviene revisar el recorrido habitual, la posibilidad de cargar en casa o en el trabajo y la autonomía de la versión concreta. El dato WLTP no contempla por sí solo velocidad, temperatura, desnivel ni uso de climatización.',
    versions: [electricVersion('Gama eléctrica · baterías de 37 y 52 kWh', 'Potencia según acabado; consultar configurador', 'Autonomía WLTP de 318 a 449 km, según acabado.')],
    facts: [{ label: 'Carrocería', value: 'Urbano eléctrico' }, { label: 'Batería', value: '37 o 52 kWh' }, { label: 'Transmisión', value: 'Automática' }, { label: 'Autonomía WLTP', value: 'Hasta 449 km, según versión' }],
    figures: [{ label: 'Consumo eléctrico combinado', value: '13,5–14,6 kWh/100 km' }, { label: 'Maletero', value: 'Hasta 441 litros' }, { label: 'Carga rápida', value: '10–80 % en unos 24 minutos, según versión' }],
  },
  {
    modelSlug: 'taigo',
    name: 'Volkswagen Taigo',
    officialSlug: 'taigo',
    configuratorSlug: 'taigo',
    description: 'Ficha del Volkswagen Taigo: SUV coupé de gasolina, motores TSI, potencia, consumo WLTP y capacidad de maletero.',
    intro: 'El Taigo combina una posición de conducción elevada con una silueta de techo descendente. Volkswagen España lo comercializa con motores TSI de gasolina de 1,0 y 1,5 litros. La carrocería coupé condiciona la forma del portón y conviene valorar la visibilidad y el acceso a las plazas traseras junto con el diseño.',
    powertrainSummary: 'La gama del configurador consultado ofrece motores TSI de gasolina de 70 a 110 kW (95–150 CV), con cilindradas de 1,0 o 1,5 litros. No se ofrece una versión eléctrica o híbrida enchufable en la gama española consultada.',
    usageNote: 'El Taigo puede ser una opción para quien prioriza la estética SUV y un maletero amplio para el segmento. Antes de decidir, prueba la postura trasera y contrasta el consumo WLTP con el tipo de trayecto que haces: ciudad, autovía y carga pueden producir resultados distintos.',
    versions: [combustionVersion('TSI gasolina', '70–110 kW (95–150 CV)', '1,0 o 1,5 l, según versión')],
    facts: [{ label: 'Carrocería', value: 'SUV coupé' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Gama de potencia', value: '70–110 kW (95–150 CV)' }, { label: 'Maletero', value: 'Hasta 1.222 litros' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '5,4–5,8 l/100 km' }, { label: 'Emisiones de CO₂', value: '124–132 g/km' }],
  },
  {
    modelSlug: 't-cross',
    name: 'Volkswagen T-Cross',
    officialSlug: 't-cross',
    configuratorSlug: 't-cross',
    description: 'Consulta las versiones de gasolina del Volkswagen T-Cross, potencia, consumo homologado, cambio y maletero.',
    intro: 'El T-Cross es el SUV urbano de Volkswagen y la marca destaca su banqueta trasera deslizante como recurso para repartir espacio entre pasajeros y equipaje. La gama española consultada utiliza motores de gasolina; el equipamiento y el cambio disponible dependen del acabado.',
    powertrainSummary: 'Volkswagen España muestra motores TSI de gasolina de 70 a 110 kW (95–150 CV), con cilindradas de 1,0 y 1,5 litros. La gama incluye cambios manuales y DSG según la versión; la página de producto publica un consumo WLTP de 5,5–6,2 l/100 km.',
    usageNote: 'La banqueta deslizante permite adaptar el espacio a cada viaje, pero el volumen disponible varía según su posición. Si se usa con sillas infantiles, comprueba su instalación real y cuánto espacio queda para las piernas y el equipaje.',
    versions: [combustionVersion('TSI gasolina', '70–110 kW (95–150 CV)', '1,0 o 1,5 l, según versión')],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de 5 puertas' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Cambio', value: 'Manual o DSG, según versión' }, { label: 'Maletero', value: '455 litros' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '5,5–6,2 l/100 km' }],
  },
  {
    modelSlug: 'id-cross',
    name: 'Volkswagen ID. Cross',
    officialSlug: 'id-cross',
    configuratorSlug: 'id-cross',
    description: 'Ficha del Volkswagen ID. Cross: SUV urbano eléctrico, baterías de 37 y 52 kWh, autonomía, consumo y carga.',
    intro: 'El ID. Cross es el SUV urbano eléctrico de Volkswagen. En España se puede encargar con baterías de 37 y 52 kWh; la autonomía WLTP varía con la batería, el acabado y las ruedas. Su tamaño exterior compacto convive con un maletero y un compartimento delantero publicados por la marca.',
    powertrainSummary: 'La gama es totalmente eléctrica y automática. El configurador oficial muestra baterías de 37 y 52 kWh y hasta 426 km de autonomía combinada; la página de producto también publica hasta 561 km en ciudad para una configuración concreta.',
    usageNote: 'La autonomía urbana máxima no debe compararse directamente con una cifra combinada WLTP. Para planificar el uso, toma como referencia el dato de la versión elegida y calcula tus recorridos con margen, especialmente en invierno o en autovía.',
    versions: [electricVersion('Gama eléctrica · baterías de 37 y 52 kWh', '85–99 kW (116–135 CV), según versión', 'Autonomía WLTP de hasta 426 km; cambia según acabado y batería.')],
    facts: [{ label: 'Carrocería', value: 'SUV urbano eléctrico' }, { label: 'Batería', value: '37 o 52 kWh' }, { label: 'Maletero', value: 'Hasta 475 litros' }, { label: 'Compartimento delantero', value: 'Hasta 25 litros' }],
    figures: [{ label: 'Consumo eléctrico combinado', value: '14,3–15,2 kWh/100 km' }, { label: 'Autonomía WLTP combinada', value: 'Hasta 426 km' }, { label: 'Carga rápida', value: '10–80 % en unos 23–24 minutos, según batería' }],
  },
  {
    modelSlug: 'golf',
    name: 'Volkswagen Golf',
    officialSlug: 'golf-8',
    configuratorSlug: 'golf',
    description: 'Gama del Volkswagen Golf en España: TSI, TDI, híbrido ligero, enchufable y versiones GTI y R.',
    intro: 'El Golf reúne varias propuestas bajo una misma carrocería compacta: motores de gasolina y diésel, versiones híbridas ligeras y enchufables, además de las variantes deportivas GTI y R. Por eso, una cifra de consumo o potencia solo sirve si se identifica también el motor y el acabado.',
    powertrainSummary: 'El configurador español contempla gasolina, diésel, híbrido ligero y PHEV. En las versiones convencionales consultadas aparecen 1,5 y 2,0 litros; el GTE es enchufable y las variantes GTI/R utilizan gasolina de 2,0 litros. La potencia cambia ampliamente entre versiones.',
    usageNote: 'El Golf puede compararse con compactos muy distintos entre sí: desde una versión de uso diario hasta un PHEV para quien pueda cargar con frecuencia o un GTI/R de enfoque deportivo. No atribuyas a toda la gama el consumo, la etiqueta DGT ni el coste de una sola versión.',
    versions: [
      combustionVersion('TSI / eTSI y TDI, según acabado', '85–150 kW (115–204 CV), según versión', '1,5 o 2,0 l, según motor', 'Gasolina, microhíbrido y diésel, según versión', 'mixed'),
      plugInVersion('GTE · híbrido enchufable', '110–130 kW en configurador', '1,5 l + motor eléctrico', 'Autonomía eléctrica según versión.'),
      combustionVersion('GTI / R · gasolina', '195–245 kW (265–333 CV)', '2,0 l'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de 5 puertas' }, { label: 'Motorizaciones', value: 'Gasolina, diésel, MHEV y PHEV, según versión' }, { label: 'Maletero', value: 'Hasta 1.237 litros' }, { label: 'Autonomía eléctrica PHEV', value: 'Hasta 143 km WLTP, según versión' }],
    figures: [{ label: 'Consumo combinado WLTP de gama', value: '0,3–5,8 l/100 km, según versión' }],
    specNote: 'Las cifras de potencia resumen familias distintas. El dato del GTE corresponde a la potencia que muestra el configurador español; las potencias de GTI y R identifican versiones deportivas y no deben atribuirse al Golf de acceso.',
  },
  {
    modelSlug: 'id3-neo',
    name: 'Volkswagen ID.3 Neo',
    officialSlug: 'id3-neo',
    configuratorSlug: 'id3-neo',
    description: 'Datos del Volkswagen ID.3 Neo: potencia eléctrica, baterías, autonomía WLTP, consumo y tiempo de carga.',
    intro: 'El ID.3 Neo es la actualización eléctrica del compacto de Volkswagen. La autonomía anunciada depende de batería y acabado, y la marca ofrece capacidades de 50 a 79 kWh en el configurador español. La cifra máxima de 628 km WLTP no equivale a la distancia que se recorrerá en cualquier condición.',
    powertrainSummary: 'Es un vehículo eléctrico con transmisión automática. Volkswagen anuncia potencias de hasta 170 kW (231 CV), baterías de 50, 58 y 79 kWh según configuración y autonomías WLTP de hasta 630 km en el configurador.',
    usageNote: 'Al valorar un eléctrico compacto, mira la capacidad de la batería y la potencia de carga junto con la autonomía. Para el día a día también influye si puedes cargar en casa; para viajar, revisa la curva de carga, la red disponible y el tiempo total de cada parada.',
    versions: [electricVersion('Gama eléctrica · baterías de 50, 58 y 79 kWh', 'Hasta 170 kW (231 CV)', 'Autonomía WLTP aproximada de 417 a 630 km, según acabado y batería.')],
    facts: [{ label: 'Carrocería', value: 'Compacto eléctrico de 5 puertas' }, { label: 'Batería', value: '50–79 kWh, según versión' }, { label: 'Potencia máxima publicada', value: '170 kW (231 CV)' }, { label: 'Etiqueta DGT', value: 'Cero emisiones' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 628 km en la página de producto' }, { label: 'Consumo eléctrico combinado', value: '13,9–15,8 kWh/100 km' }, { label: 'Carga rápida', value: '10–80 % en unos 29 minutos, según versión' }],
    specNote: 'La página de producto y el configurador muestran máximos WLTP ligeramente distintos. Se conserva en cada apartado la cifra que publica esa fuente; consulta la ficha del acabado concreto antes de comparar.',
  },
  {
    modelSlug: 't-roc',
    name: 'Volkswagen T-Roc',
    officialSlug: 't-roc',
    configuratorSlug: 't-roc',
    description: 'Volkswagen T-Roc: diferencias entre mild hybrid y full hybrid, potencias, consumo, maletero y etiqueta ECO.',
    intro: 'El nuevo T-Roc incorpora dos tecnologías híbridas con funcionamiento distinto: mild hybrid y full hybrid autorrecargable. Ambas combinan gasolina y electricidad, pero no ofrecen la misma capacidad de circulación eléctrica. La gama y la potencia dependen del acabado.',
    powertrainSummary: 'Volkswagen España identifica motores híbridos ligeros y eléctricos autorrecargables. El configurador recoge potencias de 85 a 150 kW y cilindradas de 1,5 a 2,0 litros según acabado; la oferta de acceso del modelo anuncia 85 kW (116 CV).',
    usageNote: 'Un mild hybrid no se enchufa y no se comporta como un híbrido completo; el sistema HEV autorrecargable sí puede mover el vehículo eléctricamente en determinadas situaciones. Comprueba qué tecnología equipa la unidad que estás comparando y no des por hecho que todas las versiones tienen el mismo consumo.',
    versions: [combustionVersion('Gasolina híbrida ligera o híbrida autorrecargable', '85–150 kW (116–204 CV), según acabado', '1,5 o 2,0 l, según versión', 'Microhíbrido e híbrido autorrecargable (gasolina), según versión', 'mixed')],
    facts: [{ label: 'Carrocería', value: 'SUV compacto' }, { label: 'Tecnologías', value: 'MHEV y HEV, según versión' }, { label: 'Maletero', value: 'Hasta 475 litros' }, { label: 'Etiqueta DGT', value: 'ECO en las versiones híbridas anunciadas' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '5,5–5,9 l/100 km para la versión de acceso consultada' }, { label: 'Emisiones de CO₂', value: '125–135 g/km en esa gama' }],
  },
  {
    modelSlug: 't-roc-cabrio',
    name: 'Volkswagen T-Roc Cabrio',
    officialSlug: 't-roc-cabrio',
    configuratorSlug: 't-roc-cabrio',
    description: 'Ficha del Volkswagen T-Roc Cabrio: SUV descapotable de gasolina, potencia, consumo y emisiones WLTP.',
    intro: 'El T-Roc Cabrio combina una carrocería de SUV compacto con una capota de lona. La gama española consultada es de gasolina y ofrece motores de 1,0 y 1,5 litros. Frente a un T-Roc cerrado, la capota y la carrocería convierten en prioritario valorar aislamiento, plazas traseras y uso durante todo el año.',
    powertrainSummary: 'El configurador oficial muestra motores de gasolina de 85 a 110 kW (116–150 CV) y cilindradas de 1,0 o 1,5 litros. Hay versiones manuales y automáticas; el detalle depende del acabado.',
    usageNote: 'La capota permite disfrutar de conducción abierta, pero el criterio de compra no debería limitarse a la potencia. Conviene probar la visibilidad con la capota cerrada, la facilidad de uso del mecanismo y el espacio del maletero en la configuración elegida.',
    versions: [combustionVersion('TSI gasolina', '85–110 kW (116–150 CV)', '1,0 o 1,5 l, según versión')],
    facts: [{ label: 'Carrocería', value: 'SUV cabrio de 2 puertas laterales' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Potencia publicada', value: 'Hasta 110 kW (150 CV)' }, { label: 'Capota', value: 'Lona, accionamiento eléctrico según equipamiento' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '6,3–6,8 l/100 km' }, { label: 'Emisiones de CO₂', value: '142–153 g/km' }],
  },
  {
    modelSlug: 'golf-variant',
    name: 'Volkswagen Golf Variant',
    officialSlug: 'golf-8-variant',
    configuratorSlug: 'golf-variant',
    description: 'Datos del Volkswagen Golf Variant: motores TSI, TDI y eTSI, potencia, consumo y capacidad del maletero.',
    intro: 'El Golf Variant mantiene la base del compacto y alarga la carrocería para ofrecer más espacio de carga. El configurador español incluye motores TSI, eTSI y TDI, además de las variantes de altas prestaciones R-Line y R. La carrocería familiar no implica una única motorización ni un consumo fijo.',
    powertrainSummary: 'El configurador de Volkswagen muestra potencias desde 85 kW (115 CV) en las versiones de acceso hasta 245 kW (333 CV) en el Golf Variant R. En la gama aparecen motores de 1,5 y 2,0 litros; las combinaciones de combustible, potencia y acabado cambian entre versiones.',
    usageNote: 'El maletero amplio puede resultar útil para viajes, familias o equipaje voluminoso. Compara el volumen con los asientos en la posición que realmente usarás y revisa si el motor escogido encaja con la proporción de ciudad y carretera que haces.',
    versions: [
      combustionVersion('TSI / eTSI / TDI · acabados estándar', '85–110 kW (115–150 CV), según motor', '1,5 / 2,0 l, según versión', 'Gasolina, microhíbrido o diésel, según motor', 'mixed'),
      combustionVersion('Golf Variant R-Line · hasta 150 kW', '150 kW (204 CV)', '1,5 / 2,0 l, según configuración', 'Gasolina, microhíbrido o diésel, según versión', 'mixed'),
      combustionVersion('Golf Variant R · gasolina', '245 kW (333 CV)', '2,0 l', 'Gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'Familiar de 5 puertas' }, { label: 'Motorizaciones', value: 'Gasolina, microhíbrido y diésel, según versión' }, { label: 'Potencia publicada', value: '85–245 kW (115–333 CV)' }, { label: 'Maletero', value: 'Hasta 1.642 litros' }],
    specNote: 'El configurador oficial incluye las variantes R-Line de hasta 150 kW y Golf Variant R de 245 kW, omitidas en el resumen anterior. Volkswagen agrupa cilindradas y potencias por acabado; por eso la fila estándar conserva los rangos y no atribuye una cifra individual a cada combustible. El par máximo con régimen no aparece desglosado en la fuente consultada.',
  },
  {
    modelSlug: 'tiguan',
    name: 'Volkswagen Tiguan',
    officialSlug: 'tiguan',
    configuratorSlug: 'tiguan',
    description: 'Gama Volkswagen Tiguan: motores mild hybrid, diésel y eHybrid, autonomía enchufable, maletero y consumo.',
    intro: 'El Tiguan es el SUV mediano de Volkswagen y combina motores de gasolina, diésel, híbridos ligeros y enchufables. La versión PHEV añade recorrido eléctrico con batería cargada; las alternativas de combustión no requieren conexión externa. El espacio y el motor cambian con el acabado.',
    powertrainSummary: 'El configurador español incluye motores 1,5 y 2,0 litros, mild hybrid, diésel y eHybrid. Las potencias cambian desde 96 kW en acabados de entrada hasta 195 kW en una variante deportiva; el PHEV anuncia hasta 125 km de autonomía eléctrica en la página del modelo.',
    usageNote: 'La elección entre mild hybrid, diésel y PHEV depende del recorrido y de la posibilidad de cargar. El dato de hasta 125 km eléctricos corresponde a una homologación concreta; para aprovechar el PHEV en el día a día se necesita cargarlo con regularidad.',
    versions: [combustionVersion('Gama de combustión y mild hybrid', '96–195 kW, según acabado', '1,5 o 2,0 l, según versión', 'Gasolina, diésel y microhíbrido, según versión', 'mixed'), plugInVersion('eHybrid · híbrido enchufable', '110–150 kW en configurador', '1,5 l + motor eléctrico', 'Autonomía eléctrica WLTP de hasta 125 km según la página del modelo.')],
    facts: [{ label: 'Carrocería', value: 'SUV de 5 plazas' }, { label: 'Motorizaciones', value: 'Gasolina, diésel, MHEV y PHEV' }, { label: 'Maletero', value: 'Hasta 1.650 litros' }, { label: 'Autonomía eléctrica PHEV', value: 'Hasta 125 km WLTP' }],
    figures: [{ label: 'Consumo combinado publicado', value: '0,4–6,7 l/100 km, según versión' }],
  },
  {
    modelSlug: 'id4',
    name: 'Volkswagen ID.4',
    officialSlug: 'id4',
    configuratorSlug: 'id4',
    description: 'Volkswagen ID.4 eléctrico: batería, potencia, autonomía WLTP, consumo, tracción y carga rápida.',
    intro: 'El ID.4 es el SUV eléctrico mediano de Volkswagen. La gama española combina versiones de propulsión trasera con configuraciones 4Motion de tracción total; el tamaño de la batería, la potencia y la autonomía varían por acabado. La página resume los rangos publicados y enlaza al configurador para comparar unidades concretas.',
    powertrainSummary: 'La familia es completamente eléctrica y automática. Volkswagen publica baterías de 77 a 79 kWh y potencias de hasta 210 kW (286 CV). Según versión, ofrece propulsión trasera o tracción total 4Motion y autonomías combinadas de hasta 560 km.',
    usageNote: 'La tracción total, la potencia y las ruedas pueden alterar la autonomía. Antes de estimar un viaje, usa la ficha del acabado que te interesa y considera dónde cargarás; el máximo de autonomía WLTP sirve para comparar, no para planificar sin margen.',
    versions: [electricVersion('Pro / Pro Black / GTX · gama eléctrica', 'Hasta 210 kW (286 CV)', 'Batería de 77–79 kWh; autonomías aproximadas de 527–563 km según acabado.')],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico' }, { label: 'Batería', value: '77–79 kWh, según versión' }, { label: 'Tracción', value: 'Trasera o 4Motion' }, { label: 'Potencia máxima publicada', value: '210 kW (286 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 560 km en la página de producto' }, { label: 'Carga rápida', value: 'Volkswagen anuncia 155 km añadidos en 10 minutos en condiciones concretas' }],
  },
  {
    modelSlug: 'tayron',
    name: 'Volkswagen Tayron',
    officialSlug: 'tayron',
    configuratorSlug: 'tayron',
    description: 'Volkswagen Tayron: versiones de gasolina, diésel, mild hybrid y PHEV, plazas, potencia y maletero.',
    intro: 'El Tayron se sitúa entre los SUV familiares de Volkswagen y puede configurarse con cinco o siete plazas. Su gama comprende gasolina, diésel, híbrido ligero e híbrido enchufable; el número de asientos y el maletero útil dependen de la carrocería y de la configuración interior.',
    powertrainSummary: 'Volkswagen España muestra motores de 1,5 y 2,0 litros, con mild hybrid, diésel, gasolina y PHEV según acabado. El configurador alcanza 195 kW en la variante R-Line Performance; la gama regular incluye varias potencias y tracción total en determinadas versiones.',
    usageNote: 'Si se necesitan siete plazas, comprueba el espacio con la tercera fila desplegada y el equipaje que queda. Si se valora el híbrido enchufable, ten en cuenta que la carga frecuente es clave para aprovechar su recorrido eléctrico y que la capacidad del maletero cambia con la configuración.',
    versions: [combustionVersion('Gasolina, mild hybrid y diésel', '110–195 kW, según acabado', '1,5 o 2,0 l, según versión', 'Gasolina, diésel y microhíbrido, según versión', 'mixed'), plugInVersion('eHybrid · híbrido enchufable', 'Disponible según acabado', '1,5 l + motor eléctrico', 'Volkswagen anuncia hasta 121 km de autonomía eléctrica para la versión PHEV.')],
    facts: [{ label: 'Carrocería', value: 'SUV familiar de 5 o 7 plazas' }, { label: 'Motorizaciones', value: 'Gasolina, diésel, MHEV y PHEV' }, { label: 'Maletero', value: 'Hasta 885 litros, según configuración' }, { label: 'Potencia máxima de gama', value: '195 kW en R-Line Performance' }],
    figures: [{ label: 'Autonomía eléctrica PHEV', value: 'Hasta 121 km, según la página oficial' }],
  },
  {
    modelSlug: 'id7',
    name: 'Volkswagen ID.7',
    officialSlug: 'id7',
    configuratorSlug: 'id7',
    description: 'Ficha del Volkswagen ID.7: berlina eléctrica, baterías de 77 y 86 kWh, potencia y autonomía WLTP.',
    intro: 'El ID.7 es la berlina eléctrica de gran tamaño de Volkswagen. La gama ofrece baterías de distinta capacidad y una variante GTX con tracción total. La autonomía homologada depende de acabado, batería y equipamiento; aquí se presenta como rango de familia, no como promesa de alcance real.',
    powertrainSummary: 'La gama es eléctrica y automática, con baterías de 77 y 86 kWh. Volkswagen publica versiones de hasta 210 kW (286 CV) y autonomías de hasta 702 km en la página del modelo; el configurador ofrece valores distintos según acabado.',
    usageNote: 'Por su planteamiento de berlina y autonomía homologada, el ID.7 puede interesar a quien combina carretera con uso diario. Para comparar costes frente a un coche térmico incluye el precio real de la energía, las recargas rápidas y el consumo en las rutas habituales, no solo el valor máximo WLTP.',
    versions: [electricVersion('Business / Style / GTX · gama eléctrica', 'Hasta 210 kW (286 CV)', 'Batería de 77 u 86 kWh; autonomía según acabado y tracción.')],
    facts: [{ label: 'Carrocería', value: 'Berlina eléctrica de 5 puertas' }, { label: 'Batería', value: '77–86 kWh, según versión' }, { label: 'Tracción', value: 'Trasera o total en GTX' }, { label: 'Potencia máxima publicada', value: '210 kW (286 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 702 km en la página de producto' }],
    specNote: 'El máximo de autonomía puede diferir entre el resumen del modelo y el configurador por acabado y equipamiento. Consulta el dato homologado de la unidad concreta; la autonomía real depende del recorrido y las condiciones.',
  },
  {
    modelSlug: 'passat',
    name: 'Volkswagen Passat',
    officialSlug: 'passat',
    configuratorSlug: 'passat',
    description: 'Volkswagen Passat Variant: motores TSI, TDI, mild hybrid y enchufable, consumo, plazas y maletero.',
    intro: 'El Passat actual se ofrece en España como familiar. La gama combina gasolina mild hybrid, diésel e híbrido enchufable, con cambios automáticos. Su largo maletero lo hace relevante para viajes y familias, aunque el volumen disponible cambia según la posición de los asientos y la motorización.',
    powertrainSummary: 'El configurador muestra motores de gasolina eTSI, diésel y PHEV de 1,5 y 2,0 litros, con potencias de 110 a 142 kW según acabado. Volkswagen publica cinco plazas y un maletero de hasta 1.780 litros.',
    usageNote: 'El diésel puede encajar con kilometrajes altos en carretera, mientras que un PHEV tiene sentido si se carga con frecuencia y los recorridos diarios caben en su autonomía eléctrica. Compara coste total y uso antes de elegir por combustible o etiqueta.',
    versions: [combustionVersion('TSI / eTSI gasolina y TDI diésel', '110–142 kW (150–193 CV), según acabado', '1,5 o 2,0 l, según motor', 'Gasolina, microhíbrido y diésel, según versión', 'mixed'), plugInVersion('eHybrid · híbrido enchufable', 'Disponible según acabado', '1,5 l + motor eléctrico', 'Batería recargable externamente; autonomía eléctrica según versión.')],
    facts: [{ label: 'Carrocería', value: 'Familiar' }, { label: 'Plazas', value: '5' }, { label: 'Motorizaciones', value: 'Gasolina MHEV, diésel y PHEV' }, { label: 'Maletero', value: 'Hasta 1.780 litros' }],
    figures: [{ label: 'Consumo combinado publicado', value: '4,9–7,4 l/100 km, según versión' }, { label: 'Autonomía eléctrica PHEV', value: 'Hasta 133 km según la página oficial' }],
  },
  {
    modelSlug: 'id7-tourer',
    name: 'Volkswagen ID.7 Tourer',
    officialSlug: 'id7-tourer',
    configuratorSlug: 'id7-tourer',
    description: 'Volkswagen ID.7 Tourer: familiar eléctrico con batería de 77 u 86 kWh, 286 CV y hasta 683 km WLTP.',
    intro: 'El ID.7 Tourer traslada la propulsión eléctrica del ID.7 a una carrocería familiar. Volkswagen publica baterías de 77 y 86 kWh, hasta 210 kW y una autonomía WLTP máxima de 683 km. La variante GTX añade tracción total y presenta una autonomía diferente.',
    powertrainSummary: 'Todas las versiones son eléctricas y automáticas. La gama española ofrece baterías de 77 u 86 kWh; la potencia máxima publicada es 210 kW (286 CV). La autonomía cambia según batería, acabado y tracción.',
    usageNote: 'El formato familiar aporta flexibilidad para equipaje, pero el espacio y la autonomía deben comprobarse en la versión elegida. Al planificar viajes, suma el tiempo de carga y deja margen respecto a la autonomía homologada, especialmente a velocidad de autovía.',
    versions: [electricVersion('Business / Style / GTX · gama eléctrica', 'Hasta 210 kW (286 CV)', 'Batería de 77 u 86 kWh; hasta 683 km WLTP en versiones de tracción trasera.')],
    facts: [{ label: 'Carrocería', value: 'Familiar eléctrico' }, { label: 'Batería', value: '77 u 86 kWh' }, { label: 'Tracción', value: 'Trasera o total GTX' }, { label: 'Potencia máxima publicada', value: '210 kW (286 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 683 km' }, { label: 'Carga rápida', value: '10–80 % en unos 26 minutos en CC, según versión' }],
  },
];

export const volkswagenModels: ModelPageData[] = volkswagenModelSeeds.map((model) => ({
  ...makeVolkswagenPage(model),
  brandSlug: 'volkswagen',
  reviewedAt,
}));
