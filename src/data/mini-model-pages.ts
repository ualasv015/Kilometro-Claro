import type { ModelPageData } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const miniEs = 'https://www.mini.es/es_ES';
const source = (label: string, url: string) => ({ label, url });
const notPublished = '';

type PhotoLicense = 'CC BY-SA 4.0' | 'CC BY-SA 3.0 Alemania' | 'CC0 1.0';

function photo(
  assetSlug: string,
  file: string,
  alt: string,
  authorName: string,
  authorUrl: string,
  licenseName: PhotoLicense,
  width: number,
  height: number,
  caption: string,
): NonNullable<ModelPageData['image']> {
  const licenseUrl = licenseName === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/deed.es'
    : licenseName === 'CC BY-SA 3.0 Alemania'
      ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
      : 'https://creativecommons.org/licenses/by-sa/4.0/deed.es';

  return {
    src: `/images/models/commons/model-mini-${assetSlug}.jpg`,
    alt,
    caption: `${caption} Imagen redimensionada para web.`,
    width,
    height,
    sourceTitle: file,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
    authorName,
    authorUrl,
    licenseName,
    licenseUrl,
  };
}

const miniCooperEnginePdf = 'https://www.press.bmwgroup.com/portugal/article/attachment/T0451063PT/633703';
const countrymanTechnicalPdf = 'https://www.press.bmwgroup.com/austria/article/attachment/T0438656DE/625041';

export const miniModels: ModelPageData[] = [
  {
    brandSlug: 'mini',
    modelSlug: 'cooper-3-puertas',
    title: 'MINI Cooper 3 puertas: motores y versiones en España | Kilómetro Claro',
    description: 'Compara los motores de gasolina Cooper C, Cooper S y John Cooper Works del MINI de tres puertas, con cilindrada y potencia documentadas.',
    intro: 'El MINI Cooper de tres puertas mantiene la carrocería urbana que define a la gama y ofrece motores de gasolina con distintos niveles de potencia. Aquí separamos Cooper C, Cooper S y John Cooper Works: comparten silueta, pero no cilindrada ni enfoque.',
    powertrainSummary: 'La oferta española incluye Cooper C de 156 CV, Cooper S de 204 CV y John Cooper Works de 231 CV. Las fichas técnicas europeas del fabricante identifican un motor de 1.499 cm³ para el C y de 1.998 cm³ para S y JCW. El acabado JCW no es otra carrocería, sino la versión de mayores prestaciones.',
    usageNote: 'El Cooper C es la opción de entrada de la gama de gasolina; el S aumenta la potencia con un motor de dos litros y el JCW añade una puesta a punto orientada a prestaciones. Para comparar unidades, comprueba el año de fabricación y la denominación exacta: la misma etiqueta Cooper puede corresponder a motores distintos según generación.',
    versions: [
      { name: 'Cooper C', type: 'Gasolina', power: '156 CV (115 kW)', displacement: '1.499 cm³', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'Cooper S', type: 'Gasolina', power: '204 CV (150 kW)', displacement: '1.998 cm³', maxTorque: '300 Nm (1.450–4.500 rpm)', torqueScope: 'Motor de gasolina', torqueRpm: '1.450–4.500 rpm' },
      { name: 'John Cooper Works', type: 'Gasolina', power: '231 CV (170 kW)', displacement: '1.998 cm³', maxTorque: '380 Nm (1.500–4.000 rpm)', torqueScope: 'Motor de gasolina', torqueRpm: '1.500–4.000 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano de tres puertas' },
      { label: 'Plazas', value: '4' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Combustible', value: 'Gasolina' },
    ],
    specNote: 'MINI España publica las potencias de la gama. La cilindrada y los pares con régimen se contrastan con documentación técnica del BMW Group para las series F66; el Cooper C se queda sin cifra de par porque la fuente consultada no especifica su régimen.',
    officialUrl: `${miniEs}/home/range/mini-cooper-3-puertas.html`,
    technicalUrl: `${miniEs}/home/range/mini-cooper-3-puertas/performance.html`,
    sources: [
      source('MINI España: Cooper 3 puertas, gama y motorizaciones', `${miniEs}/home/range/mini-cooper-3-puertas.html`),
      source('MINI España: prestaciones del Cooper 3 puertas', `${miniEs}/home/range/mini-cooper-3-puertas/performance.html`),
      source('BMW Group España: motores del MINI Cooper 3 puertas', 'https://www.press.bmwgroup.com/spain/article/detail/T0439608ES/el-nuevo-mini-cooper-3-puertas-con-motor-de-gasolina%3A-el-nuevo-mini-cooper-3-puertas-c-y-el-nuevo-mini-cooper-3-puertas-s?language=es'),
      source('BMW Group: datos técnicos del Cooper S y JCW (con par y régimen)', 'https://www.press.bmwgroup.com/argentina/article/detail/T0446092ES/mini-festeja-sus-20-a%C3%B1os-en-argentina-con-el-lanzamiento-de-los-nuevos-mini-cooper-de-3-y-5-puertas-y-el-nuevo-mini-countryman'),
      source('MINI España: prestaciones de John Cooper Works', `${miniEs}/home/range/john-cooper-works.html`),
      source('BMW Group: datos técnicos de Cooper C, S y JCW (lista europea)', miniCooperEnginePdf),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('cooper-3p', 'Mini Cooper S Favoured Trim (F66) – f 21092025.jpg', 'MINI Cooper S de tres puertas, generación F66, fotografiado en 2025.', '© M 93', 'https://commons.wikimedia.org/wiki/User:M_93', 'CC BY-SA 3.0 Alemania', 1280, 762, 'La fotografía muestra un Cooper S F66; las versiones C y JCW comparten la carrocería, pero su motor y acabado cambian.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'cooper-electrico',
    title: 'MINI Cooper eléctrico: motores E, SE y JCW | Kilómetro Claro',
    description: 'Ficha del MINI Cooper eléctrico en España: compara E, SE y John Cooper Works por potencia y tipo de propulsión.',
    intro: 'El MINI Cooper eléctrico es el Cooper de tres puertas con propulsión por batería. La gama distingue E, SE y John Cooper Works eléctrico; las tres versiones se cargan desde una fuente externa y no emplean motor térmico.',
    powertrainSummary: 'MINI España publica 135 kW para Cooper E, 160 kW para Cooper SE y 190 kW para John Cooper Works eléctrico. Convertidas a la unidad habitual en España, son aproximadamente 184, 218 y 258 CV. Al ser eléctricos puros, no tienen cilindrada térmica.',
    usageNote: 'La elección entre E, SE y JCW cambia potencia, batería, autonomía homologada y capacidad de carga según configuración. La autonomía WLTP es un dato de homologación, no una garantía de distancia real: velocidad, temperatura, climatización y recorrido la modifican. Antes de comparar, mira la batería y el equipamiento de la unidad concreta.',
    versions: [
      { name: 'Cooper E', type: 'Eléctrico de batería', power: '184 CV (135 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'Cooper SE', type: 'Eléctrico de batería', power: '218 CV (160 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'John Cooper Works Electric', type: 'Eléctrico de batería', power: '258 CV (190 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano eléctrico de tres puertas' },
      { label: 'Plazas', value: '4' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Recarga', value: 'Corriente alterna y carga rápida en corriente continua, según versión' },
    ],
    figures: [
      { label: 'Autonomía homologada', value: 'Hasta 400 km WLTP en la gama anunciada por MINI España' },
    ],
    specNote: 'La marca publica también cifras de par para los motores eléctricos, pero no un régimen en rpm. Por eso la columna de par queda vacía, según el criterio de esta plantilla.',
    officialUrl: `${miniEs}/home/range/all-electric-mini-cooper.html`,
    technicalUrl: `${miniEs}/home/electromovilidad/gama-electrica-mini.html`,
    sources: [
      source('MINI España: Cooper eléctrico', `${miniEs}/home/range/all-electric-mini-cooper.html`),
      source('MINI España: comparativa de la gama eléctrica', `${miniEs}/home/electromovilidad/gama-electrica-mini.html`),
      source('BMW Group: lista técnica europea de Cooper eléctrico', miniCooperEnginePdf),
    ],
    image: photo('cooper-electric', '2024 MINI Cooper SE.jpg', 'MINI Cooper SE eléctrico de la generación J01 fotografiado en Tailandia.', 'Chanokchon', 'https://commons.wikimedia.org/wiki/User:Chanokchon', 'CC BY-SA 4.0', 1280, 720, 'La imagen representa un Cooper SE J01; color, equipamiento y configuración pueden diferir de las unidades disponibles en España.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'cooper-5-puertas',
    title: 'MINI Cooper 5 puertas: motores y potencias disponibles | Kilómetro Claro',
    description: 'Consulta las versiones de gasolina Cooper C y Cooper S del MINI de cinco puertas, con potencia y cilindrada contrastadas.',
    intro: 'El Cooper 5 puertas conserva el formato compacto de MINI y añade dos puertas traseras para facilitar el acceso a las plazas posteriores. En España se ofrece con motores de gasolina Cooper C y Cooper S.',
    powertrainSummary: 'La gama oficial consultada anuncia 156 CV para Cooper C y 204 CV para Cooper S. La documentación técnica del BMW Group identifica cilindradas de 1.499 y 1.998 cm³, respectivamente. No se incluyen aquí acabados como Classic, Favoured o Paul Smith Edition porque no cambian la familia de modelo.',
    usageNote: 'Frente al Cooper de tres puertas, esta carrocería facilita el acceso a la segunda fila y ofrece más espacio de carga. Las mecánicas C y S son comparables por carrocería, aunque el motor de dos litros del S tiene una potencia superior. El equipamiento, las ruedas y los extras pueden modificar el consumo homologado.',
    versions: [
      { name: 'Cooper C', type: 'Gasolina', power: '156 CV (115 kW)', displacement: '1.499 cm³', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'Cooper S', type: 'Gasolina', power: '204 CV (150 kW)', displacement: '1.998 cm³', maxTorque: '300 Nm (1.450–4.500 rpm)', torqueScope: 'Motor de gasolina', torqueRpm: '1.450–4.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Combustible', value: 'Gasolina' },
    ],
    specNote: 'Las potencias proceden de MINI España; la cilindrada y el régimen de par se contrastan con la ficha técnica europea del BMW Group para el Cooper 5 puertas F65. El Cooper C se queda sin cifra de par porque la fuente consultada no especifica su régimen.',
    officialUrl: `${miniEs}/home/range/mini-cooper-5-puertas.html`,
    technicalUrl: `${miniEs}/home/range/mini-cooper-5-puertas/performance.html`,
    sources: [
      source('MINI España: Cooper 5 puertas y gama', `${miniEs}/home/range/mini-cooper-5-puertas.html`),
      source('MINI España: prestaciones del Cooper 5 puertas', `${miniEs}/home/range/mini-cooper-5-puertas/performance.html`),
      source('BMW Group España: gama y datos del Cooper 5 puertas', 'https://www.press.bmwgroup.com/spain/article/detail/T0443033ES/nuevo-mini-cooper-5-puertas?language=es'),
      source('BMW Group: ficha técnica del MINI Cooper 5 puertas F65', 'https://www.press.bmwgroup.com/italy/article/attachment/T0454345IT/643216'),
      source('BMW Group: datos técnicos de la gama Cooper', miniCooperEnginePdf),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('cooper-5p', 'Mini Hatch (F65) DSC 7522.jpg', 'MINI Cooper 5 puertas de la generación F65 fotografiado en Stuttgart.', 'Alexander Migl', 'https://commons.wikimedia.org/wiki/User:Alexander-93', 'CC BY-SA 4.0', 1280, 780, 'La fotografía corresponde a la generación F65 de cinco puertas; la versión y el acabado pueden diferir de la oferta española actual.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'cooper-cabrio',
    title: 'MINI Cooper Cabrio: motores C, S y John Cooper Works | Kilómetro Claro',
    description: 'Compara las motorizaciones de gasolina del MINI Cooper Cabrio, con potencia, cilindrada y pares máximos documentados.',
    intro: 'El Cooper Cabrio lleva la carrocería compacta de MINI a un formato descapotable de cuatro plazas. La gama española incluye Cooper C, Cooper S y John Cooper Works; los tres emplean motores de gasolina de cuatro cilindros y 1.998 cm³.',
    powertrainSummary: 'MINI España anuncia 163 CV para Cooper C, 204 CV para Cooper S y 231 CV para John Cooper Works Cabrio. La lista técnica europea confirma la cilindrada y publica el par máximo con su régimen: 250 Nm entre 1.520 y 4.400 rpm para C, 300 Nm entre 1.450 y 4.500 rpm para S y 380 Nm entre 1.500 y 4.000 rpm para JCW.',
    usageNote: 'Las tres versiones comparten carrocería y cilindrada, pero no la puesta a punto del motor. El C prioriza el uso cotidiano, el S eleva la potencia y el JCW añade una calibración más deportiva. La capota y el peso propio del descapotable distinguen su uso del Cooper cerrado; el acabado no altera las cifras básicas del motor.',
    versions: [
      { name: 'Cooper C Cabrio', type: 'Gasolina', power: '163 CV (120 kW)', displacement: '1.998 cm³', maxTorque: '250 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '1.520–4.400 rpm' },
      { name: 'Cooper S Cabrio', type: 'Gasolina', power: '204 CV (150 kW)', displacement: '1.998 cm³', maxTorque: '300 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '1.450–4.500 rpm' },
      { name: 'John Cooper Works Cabrio', type: 'Gasolina', power: '231 CV (170 kW)', displacement: '1.998 cm³', maxTorque: '380 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '1.500–4.000 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Descapotable de dos puertas' },
      { label: 'Plazas', value: '4' },
      { label: 'Capota', value: 'Lona con accionamiento eléctrico' },
      { label: 'Combustible', value: 'Gasolina' },
    ],
    specNote: 'Las potencias se corresponden con la gama española. La cilindrada y los pares con régimen se contrastaron con la lista de datos técnicos MINI F67 publicada por BMW Group; las cifras pueden variar si el vehículo pertenece a otro año-modelo.',
    officialUrl: `${miniEs}/home/range/mini-cooper-convertible.html`,
    technicalUrl: `${miniEs}/home/range/mini-cooper-cabrio/performance.html`,
    sources: [
      source('MINI España: Cooper Cabrio, gama y versiones', `${miniEs}/home/range/mini-cooper-convertible.html`),
      source('MINI España: prestaciones del Cooper Cabrio', `${miniEs}/home/range/mini-cooper-cabrio/performance.html`),
      source('BMW Group: datos técnicos Cooper Cabrio F67', 'https://www.press.bmwgroup.com/italy/article/attachment/T0457774IT/648859'),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('cabrio', 'Mini Cooper C Cabrio Favoured Trim (F67) – h 21092025.jpg', 'MINI Cooper C Cabrio de la generación F67 con acabado Favoured.', '© M 93', 'https://commons.wikimedia.org/wiki/User:M_93', 'CC BY-SA 3.0 Alemania', 1280, 711, 'La imagen muestra un Cooper C Cabrio F67; los acabados S y JCW tienen detalles exteriores propios.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'aceman',
    title: 'MINI Aceman eléctrico: versiones E, SE y JCW | Kilómetro Claro',
    description: 'Ficha del MINI Aceman, crossover eléctrico de cinco puertas: potencia de las versiones E, SE y JCW y datos publicados por MINI.',
    intro: 'El Aceman ocupa el espacio entre el Cooper eléctrico y el Countryman. Es un crossover de cinco puertas concebido como eléctrico de batería; MINI no ofrece una motorización de gasolina para esta familia en España.',
    powertrainSummary: 'La gama eléctrica oficial recoge Aceman E de 135 kW (184 CV), Aceman SE de 160 kW (218 CV) y John Cooper Works Aceman de 190 kW (258 CV). Las tres versiones carecen de cilindrada térmica. La potencia y la autonomía WLTP varían según batería y acabado.',
    usageNote: 'El Aceman da acceso a las plazas traseras con más facilidad que el Cooper de tres puertas, conservando unas dimensiones más contenidas que el Countryman. Para valorar si sirve como coche principal, conviene comparar el espacio que necesitas con tu acceso habitual a la recarga y los kilómetros que realizas; la autonomía homologada puede cambiar en uso real.',
    versions: [
      { name: 'Aceman E', type: 'Eléctrico de batería', power: '184 CV (135 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'Aceman SE', type: 'Eléctrico de batería', power: '218 CV (160 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'John Cooper Works Aceman', type: 'Eléctrico de batería', power: '258 CV (190 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Propulsión', value: 'Eléctrica; requiere recarga externa' },
    ],
    figures: [
      { label: 'Autonomía homologada', value: 'Hasta 406 km WLTP en la versión SE según MINI España' },
    ],
    specNote: 'MINI publica pares en Nm para los motores eléctricos, pero no un régimen de rpm. No mostramos ese par en esta tabla. La autonomía es WLTP y no equivale a una distancia garantizada en carretera.',
    officialUrl: `${miniEs}/home/range/mini-aceman.html`,
    technicalUrl: `${miniEs}/home/electromovilidad/gama-electrica-mini.html`,
    sources: [
      source('MINI España: Aceman eléctrico y gama', `${miniEs}/home/range/mini-aceman.html`),
      source('MINI España: prestaciones del Aceman eléctrico', `${miniEs}/home/range/mini-aceman/performance.html`),
      source('MINI España: comparativa de la gama eléctrica', `${miniEs}/home/electromovilidad/gama-electrica-mini.html`),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('aceman', 'Mini Aceman S 001.jpg', 'MINI Aceman S eléctrico expuesto en 2024.', 'JustAnotherCarDesigner', 'https://commons.wikimedia.org/wiki/User:JustAnotherCarDesigner', 'CC0 1.0', 1280, 960, 'Fotografía de un Aceman S; el color y los elementos de acabado pueden diferir de las unidades configurables en España.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'countryman',
    title: 'MINI Countryman: motores de gasolina, diésel e híbridos ligeros | Kilómetro Claro',
    description: 'Consulta las versiones de combustión del MINI Countryman en España: C, D, S ALL4 y John Cooper Works ALL4, con sus datos técnicos.',
    intro: 'El Countryman es el SUV de mayor tamaño de MINI y combina motores de gasolina o diésel con asistencia mild hybrid de 48 V en las versiones correspondientes. La gama incluye variantes de tracción delantera y ALL4. La ficha española publica la potencia de cada versión, mientras que las especificaciones técnicas permiten identificar el par del motor térmico cuando está desglosado.',
    powertrainSummary: 'La página española consultada enumera Countryman C de 156 CV, D de 150 CV, S ALL4 de 204 CV y John Cooper Works ALL4 de 300 CV. En C, D y S ALL4, la ficha técnica del BMW Group identifica esas primeras cifras como potencia del motor térmico y desglosa aparte la asistencia de 48 V y la potencia combinada, que puede variar según el documento de mercado. Esta tabla mantiene la potencia térmica que coincide con la página española; el par también se atribuye al motor térmico.',
    usageNote: 'El Countryman ofrece más espacio y una posición de conducción elevada que los Cooper. C y D combinan combustión con una red de 48 V; esa asistencia no permite recargarlo desde un enchufe. S ALL4 y JCW ALL4 añaden tracción total. La elección entre gasolina y diésel depende también del tipo de trayectos, kilometraje anual y restricciones de acceso locales.',
    versions: [
      { name: 'Countryman C 48 V', type: 'Microhíbrido de gasolina (48 V)', power: '156 CV (115 kW), dato publicado por MINI España', displacement: '1.499 cm³', maxTorque: '240 Nm (motor térmico; 1.500–4.400 rpm)', torqueScope: 'Motor térmico de gasolina', torqueRpm: '1.500–4.400 rpm' },
      { name: 'Countryman D 48 V', type: 'Microhíbrido diésel (48 V)', power: '150 CV (110 kW), dato publicado por MINI España', displacement: '1.995 cm³', maxTorque: '360 Nm (motor térmico; 1.500–2.500 rpm)', torqueScope: 'Motor térmico diésel', torqueRpm: '1.500–2.500 rpm' },
      { name: 'Countryman S ALL4 48 V', type: 'Microhíbrido de gasolina con tracción total (48 V)', power: '204 CV (150 kW), dato publicado por MINI España', displacement: '1.998 cm³', maxTorque: '320 Nm (motor térmico; 1.500–4.000 rpm)', torqueScope: 'Motor térmico de gasolina', torqueRpm: '1.500–4.000 rpm' },
      { name: 'John Cooper Works Countryman ALL4', type: 'Gasolina con tracción total', power: '300 CV (221 kW)', displacement: '1.998 cm³', maxTorque: '400 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.000–4.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera o total ALL4, según versión' },
      { label: 'Tecnologías', value: 'Gasolina, diésel y microhibridación de 48 V' },
    ],
    specNote: 'Las potencias de C, D y S ALL4 coinciden con los valores térmicos de las fichas técnicas del BMW Group y con las cifras visibles en MINI España; esas fichas separan la aportación eléctrica de 48 V y la salida combinada, que no se vuelca en esta tabla. Cilindradas y pares con régimen proceden de documentos técnicos del fabricante. En las versiones C, D y S ALL4 el par se atribuye al motor térmico, no al sistema híbrido completo.',
    officialUrl: `${miniEs}/home/range/mini-countryman.html`,
    technicalUrl: `${miniEs}/home/range/mini-countryman/performance.html`,
    sources: [
      source('MINI España: Countryman y gama disponible', `${miniEs}/home/range/mini-countryman.html`),
      source('MINI España: prestaciones del Countryman', `${miniEs}/home/range/mini-countryman/performance.html`),
      source('MINI España: equipamiento y tecnología mild hybrid de 48 V', 'https://www.mini.es/content/dam/MINI/marketDSM_ES/mini_es/Home/Mini_Countryman/mini_Layout_U25_Equipment_ES.pdf.asset.1737534848990.pdf'),
      source('BMW Group: ficha técnica europea del Countryman (potencia de motores térmicos y par)', countrymanTechnicalPdf),
      source('MINI Italia: lista técnica U25 de junio de 2026, par y regímenes', 'https://www.mini.it/content/dam/MINI/marketDSM_IT/mini_it/PDF/mondo-business/New/Listino_MINI_Countryman%28U25%29-Valido_da_9_Giugno_2026.pdf.asset.1780990134898.pdf'),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('countryman', 'BMW MINI COUNTRYMAN C (U25) front.jpg', 'MINI Countryman C de la generación U25, visto de frente.', 'Tokumeigakarinoaoshima', 'https://commons.wikimedia.org/wiki/User:Tokumeigakarinoaoshima', 'CC BY-SA 4.0', 1280, 960, 'La unidad fotografiada es un Countryman C U25; las versiones D, S ALL4 y JCW tienen diferencias de motor y equipamiento.'),
    reviewedAt,
  },
  {
    brandSlug: 'mini',
    modelSlug: 'countryman-electrico',
    title: 'MINI Countryman eléctrico: versiones E y SE ALL4 | Kilómetro Claro',
    description: 'Compara los MINI Countryman E y SE ALL4 eléctricos: potencia, tracción y datos oficiales de la gama española.',
    intro: 'El Countryman eléctrico es la versión de batería del SUV de MINI. La gama española diferencia el E de tracción delantera y el SE ALL4 con dos motores y tracción total; no tienen cilindrada térmica.',
    powertrainSummary: 'MINI España ofrece Countryman E de 150 kW (204 CV) y Countryman SE ALL4 de 230 kW (313 CV). El segundo añade un motor eléctrico en el eje trasero. Ambas versiones se recargan desde una fuente externa y su autonomía WLTP depende de la configuración y las ruedas.',
    usageNote: 'El Countryman eléctrico conserva el formato familiar de cinco plazas y elimina el repostaje de combustible, pero requiere planificar la recarga. El SE ALL4 aporta tracción total y más potencia; el E mantiene una configuración de tracción delantera. Para comparar costes de uso, utiliza la tarifa eléctrica y el consumo de tu caso, no solo la autonomía homologada.',
    versions: [
      { name: 'Countryman E', type: 'Eléctrico de batería', power: '204 CV (150 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
      { name: 'Countryman SE ALL4', type: 'Eléctrico de batería con tracción total', power: '313 CV (230 kW)', displacement: '—', maxTorque: notPublished, torqueScope: '', torqueRpm: '' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tracción', value: 'Delantera o total, según versión' },
      { label: 'Recarga', value: 'Corriente alterna y carga rápida en corriente continua' },
    ],
    figures: [
      { label: 'Autonomía homologada', value: 'Hasta 500 km WLTP según la configuración anunciada por MINI España' },
    ],
    specNote: 'El par de los motores eléctricos se publica en Nm, pero sin un régimen en rpm; se omite en la columna de par máximo. Las fichas de distintos años-modelo y mercados pueden publicar autonomías o cifras de potencia diferentes. Esta página toma la gama visible en MINI España y no mezcla autonomía de otra versión.',
    officialUrl: `${miniEs}/home/range/mini-countryman-electrico.html`,
    technicalUrl: `${miniEs}/home/electromovilidad/gama-electrica-mini.html`,
    sources: [
      source('MINI España: Countryman eléctrico', `${miniEs}/home/range/mini-countryman-electrico.html`),
      source('MINI España: gama eléctrica y características', `${miniEs}/home/electromovilidad/gama-electrica-mini.html`),
      source('BMW Group: datos técnicos europeos de Countryman E y SE ALL4', countrymanTechnicalPdf),
      source('Catálogo MINI España: familias disponibles', `${miniEs}/home/range.html`),
    ],
    image: photo('countryman-electric', 'BMW MINI COUNTRYMAN E (U25) front.jpg', 'MINI Countryman E eléctrico de la generación U25.', 'Tokumeigakarinoaoshima', 'https://commons.wikimedia.org/wiki/User:Tokumeigakarinoaoshima', 'CC BY-SA 4.0', 1280, 960, 'La foto muestra un Countryman E; el SE ALL4 incorpora diferencias de tracción y equipamiento.'),
    reviewedAt,
  },
];
