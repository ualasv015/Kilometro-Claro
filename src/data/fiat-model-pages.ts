import type { ModelPageData } from './model-pages';

const reviewedAt = '6 de noviembre de 2026';
const fiat = 'https://www.fiat.es';
const source = (label: string, url: string) => ({ label, url });
const notPublished = 'No desglosado en la ficha española consultada';

type PhotoLicense = 'CC BY 4.0' | 'CC BY-SA 4.0' | 'CC BY-SA 3.0 Alemania' | 'CC0 1.0';

function photo(
  assetSlug: string,
  file: string,
  alt: string,
  authorName: string,
  licenseName: PhotoLicense,
  width: number,
  height: number,
  authorUrl?: string,
  caption = 'Fotografía de referencia; el acabado y la configuración pueden diferir de los disponibles en España.',
): NonNullable<ModelPageData['image']> {
  const licenseUrl = licenseName === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : licenseName === 'CC BY 4.0'
      ? 'https://creativecommons.org/licenses/by/4.0/'
      : licenseName === 'CC BY-SA 3.0 Alemania'
        ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
        : 'https://creativecommons.org/licenses/by-sa/4.0/';
  return {
    src: `/images/models/commons/model-fiat-${assetSlug}.jpg`,
    alt,
    caption: `${caption} Imagen redimensionada para web.`,
    width,
    height,
    sourceTitle: file,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
    authorName,
    ...(authorUrl ? { authorUrl } : {}),
    licenseName,
    licenseUrl,
  };
}

const m93 = 'https://commons.wikimedia.org/wiki/User:M_93';
const alexander = 'https://commons.wikimedia.org/wiki/User:Alexander-93';

export const fiatModels: ModelPageData[] = [
  {
    brandSlug: 'fiat',
    modelSlug: '500',
    title: 'Fiat 500: motores híbridos y eléctricos disponibles en España | Kilómetro Claro',
    description: 'Compara el Fiat 500 Hybrid y el 500e: potencias, cilindrada cuando aplica, tipos de motor y datos técnicos publicados por Fiat España.',
    intro: 'El Fiat 500 reúne dos propuestas urbanas con carrocerías de tres puertas, descapotable y 3+1: el 500 Hybrid, con sistema de hibridación ligera de 12 V, y el 500e eléctrico. Los acabados Torino, Cabrio y 3+1 son versiones o carrocerías de esta familia, no modelos independientes.',
    powertrainSummary: 'La gama española consultada ofrece un 1.0 FireFly mild hybrid de 65 CV y varias configuraciones eléctricas del 500e: 95 o 118 CV, según batería y acabado. Fiat publica esas potencias y sus equivalencias en kW; no se añade par máximo porque las fichas nacionales consultadas no indican un régimen de giro verificable para esa cifra.',
    usageNote: 'El 500 Hybrid no es un híbrido autorrecargable de alta tensión: su sistema de 12 V asiste al motor de gasolina y no permite circular largas distancias solo con electricidad. El 500e sí necesita recarga externa. Antes de comparar precios, autonomía o equipamiento, comprueba si el presupuesto corresponde al Hybrid o al 500e y a qué carrocería: sus prestaciones y costes de uso son distintos.',
    versions: [
      { name: '1.0 FireFly 12 V', type: 'Híbrido no enchufable · MHEV gasolina (12 V)', power: '65 CV (48 kW)', displacement: '999 cm³', maxTorque: notPublished, torqueScope: 'Motor de gasolina', torqueRpm: notPublished },
      { name: '500e 23,8 kWh', type: 'Eléctrico', power: '95 CV (70 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en ficha nacional' },
      { name: '500e 42 kWh', type: 'Eléctrico', power: '118 CV (87 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en ficha nacional' },
    ],
    facts: [
      { label: 'Carrocerías', value: 'Hatchback, Cabrio y 3+1, según versión' },
      { label: 'Plazas', value: '4' },
      { label: 'Tecnologías', value: 'MHEV de gasolina no enchufable y eléctrico' },
    ],
    specNote: 'Las capacidades de batería y las combinaciones de carrocería y potencia cambian según el acabado. La tabla agrupa las dos potencias eléctricas que aparecen en la ficha técnica española consultada; no implica que estén disponibles en todas las carrocerías.',
    officialUrl: `${fiat}/modelos/500-hibrido`,
    technicalUrl: `${fiat}/modelos/fiat-500-electrico/technical-data`,
    sources: [
      source('Fiat 500 Híbrido: gama y carrocerías en España', `${fiat}/modelos/500-hibrido`),
      source('Configurador Fiat España: 500 Hybrid y 500e', `${fiat}/omni/configurador`),
      source('Datos técnicos oficiales del 500e', `${fiat}/modelos/fiat-500-electrico/technical-data`),
      source('FIAT: ficha técnica de la nueva 500 Hybrid', 'https://www.media.stellantis.com/it-it/fiat/press/fiat-500-hybrid-torino'),
    ],
    image: photo('500', 'Fiat 500 Hybrid Torino (II) – f 25042026.jpg', 'Fiat 500 Hybrid Torino fotografiado en 2026.', '© M 93', 'CC BY-SA 3.0 Alemania', 1280, 754, m93, 'La imagen muestra un Fiat 500 Hybrid Torino; la ficha también recoge las versiones eléctricas 500e.'),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: '600',
    title: 'Fiat 600: versiones de gasolina, híbridas y eléctricas | Kilómetro Claro',
    description: 'Consulta las motorizaciones actuales del Fiat 600 en España: gasolina de 100 CV, híbridas de 110 y 145 CV y 600e eléctrico de 156 CV.',
    intro: 'El Fiat 600 es un SUV urbano de cinco plazas cuya gama española combina gasolina, hibridación ligera y propulsión eléctrica. Fiat ofrece acabados como 600 Sport y distintas ediciones, que se agrupan aquí bajo la misma familia para comparar primero la mecánica.',
    powertrainSummary: 'La ficha y el configurador españoles muestran un 1.2 turbo de gasolina de 100 CV, dos variantes 1.2 MHEV de 110 y 145 CV y el 600e eléctrico de 156 CV. En las versiones híbridas la potencia publicada corresponde al sistema; Fiat no separa en las fichas consultadas el dato de par y el régimen para cada versión, por lo que no se inventa esa columna.',
    usageNote: 'El 600 MHEV no se enchufa: combina el motor de gasolina con un sistema eléctrico de 48 V. El 600e sí funciona con batería y debe cargarse desde una toma. La gasolina pura, el híbrido ligero y el eléctrico pueden compartir carrocería, pero no tienen el mismo consumo, autonomía, uso ni precio; confirma siempre en el configurador qué potencia y acabado te ofrecen.',
    versions: [
      { name: '1.2 Turbo 100', type: 'Gasolina', power: '100 CV (74 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'Motor de gasolina', torqueRpm: notPublished },
      { name: '1.2 MHEV 110', type: 'Híbrido no enchufable · MHEV gasolina (48 V)', power: 'Sistema: 110 CV (81 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'Sistema híbrido ligero', torqueRpm: notPublished },
      { name: '1.2 MHEV 145', type: 'Híbrido no enchufable · MHEV gasolina (48 V)', power: 'Sistema: 145 CV (106 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'Sistema híbrido ligero', torqueRpm: notPublished },
      { name: '600e', type: 'Eléctrico', power: '156 CV (115 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en ficha nacional' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.171–4.178 mm, según versión' },
      { label: 'Tecnologías', value: 'Gasolina, MHEV de gasolina no enchufable y eléctrico' },
    ],
    specNote: 'El catálogo de 2025 detalla motores MHEV de 110 y 145 CV; el configurador español actual mantiene dos motores híbridos, el 600 Gasolina y el 600e. La ficha técnica eléctrica aporta 156 CV. El par máximo no se muestra aquí porque falta un régimen fiable para asociarlo.',
    officialUrl: `${fiat}/modelos/fiat-600-gasolina`,
    technicalUrl: `${fiat}/modelos/fiat-600-electrico/caracteristicas-tecnicas`,
    sources: [
      source('Fiat España: 600 Gasolina', `${fiat}/modelos/fiat-600-gasolina/pop`),
      source('Configurador oficial con 600 Gasolina, Hybrid y 600e', `${fiat}/omni/configurador`),
      source('Catálogo técnico Fiat 600 Hybrid, noviembre de 2025', `${fiat}/content/dam/fiat2023/es/pdf/pricelist/600-hybrid/nov-25/AF_CATALOGO-FIAT-600Hibrido-297X210_Oct25.pdf`),
      source('Datos técnicos del 600e', `${fiat}/modelos/fiat-600-electrico/caracteristicas-tecnicas`),
    ],
    image: photo('600', 'Fiat 600 Hybrid 1.2 T3 (III) – f 18052025.jpg', 'Fiat 600 Hybrid de 2025 fotografiado en una exposición.', '© M 93', 'CC BY-SA 3.0 Alemania', 1280, 694, m93),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'grande-panda',
    title: 'Fiat Grande Panda: motores de gasolina, híbrido y eléctrico | Kilómetro Claro',
    description: 'Compara las tres motorizaciones del Fiat Grande Panda en España: gasolina 100 CV, híbrida 110 CV y eléctrica 113 CV.',
    intro: 'El Grande Panda es el crossover urbano de Fiat y uno de los pocos modelos de la marca que ofrece en España tres tipos de propulsión sobre una misma familia: gasolina, híbrido ligero MHEV de 48 V y eléctrico de batería. Los acabados Pop, Icon y La Prima no se cuentan como modelos separados.',
    powertrainSummary: 'Fiat España confirma un motor de gasolina T-Gen3 1.2 turbo de 100 CV, una variante híbrida de 110 CV combinados y una versión eléctrica de 113 CV. En el híbrido, la cifra de sistema combina 100 CV del motor térmico y 28 CV del motor eléctrico; no se suman como si ambas potencias máximas estuvieran disponibles simultáneamente.',
    usageNote: 'La versión híbrida ligera incorpora una batería de 48 V y caja automática eDCT, pero no se conecta a un cargador. El eléctrico utiliza una batería de 43,8 kWh y requiere recarga. El motor de gasolina es manual en la ficha consultada. Si comparas presupuesto o uso diario, separa estas tres configuraciones: la potencia comercial, la transmisión y los costes de energía cambian entre ellas.',
    versions: [
      { name: 'T-Gen3 1.2 Turbo', type: 'Gasolina', power: '100 CV (74 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'Motor térmico', torqueRpm: notPublished },
      { name: 'T-Gen3 1.2 Hybrid 48 V', type: 'Híbrido no enchufable · MHEV gasolina (48 V)', power: 'Sistema: 110 CV (81 kW); térmico: 100 CV (74 kW); eléctrico: 28 CV (21 kW)', displacement: 'Térmico: 1.199 cm³; eléctrico: —', maxTorque: notPublished, torqueScope: 'Sistema híbrido; par térmico y régimen no desglosados aquí', torqueRpm: notPublished },
      { name: 'Grande Panda Eléctrico', type: 'Eléctrico', power: '113 CV (83 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en ficha nacional' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Crossover urbano de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.000 mm' },
      { label: 'Tecnologías', value: 'Gasolina, MHEV de gasolina no enchufable y eléctrico' },
    ],
    specNote: 'La potencia combinada del sistema Hybrid es la cifra comercial de Fiat. La marca especifica por separado 100 CV térmicos y un motor eléctrico de 21 kW/28 CV; el catálogo técnico indica 113 CV/83 kW para la versión eléctrica. No se atribuye un régimen de par que la ficha no publique.',
    officialUrl: `${fiat}/modelos/grande-panda-gasolina`,
    technicalUrl: `${fiat}/modelos/grande-panda-electrico/technical-data/modal-engine`,
    sources: [
      source('Fiat Grande Panda Gasolina: ficha de gama', `${fiat}/omni/configurador`),
      source('Fiat Grande Panda Hybrid: sistema de 110 CV', `${fiat}/modelos/grande-panda-hibrido`),
      source('Desglose de potencia térmica y eléctrica', `${fiat}/modelos/grande-panda-hibrido/product-gallery`),
      source('Datos técnicos oficiales del Grande Panda eléctrico', `${fiat}/modelos/grande-panda-electrico/technical-data/modal-engine`),
    ],
    image: photo('grande-panda', 'Fiat Grande Panda Hybrid IMG 8156.jpg', 'Fiat Grande Panda Hybrid fotografiado en Böblingen en 2026.', 'Alexander Migl', 'CC BY-SA 4.0', 1280, 852, alexander),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'pandina',
    title: 'Fiat Pandina: motor híbrido ligero y ficha técnica | Kilómetro Claro',
    description: 'Consulta el motor 1.0 Hybrid de 65 CV del Fiat Pandina, su cilindrada y las carrocerías y acabados que Fiat España ofrece.',
    intro: 'El Pandina es el urbano de acceso de Fiat, emparentado con el Panda y disponible en España con una mecánica de gasolina asistida por hibridación ligera. Los acabados Pop, Icon y Cross son niveles de equipamiento del mismo modelo.',
    powertrainSummary: 'La ficha de Fiat España identifica el motor 1.0 GSE de gasolina con tecnología híbrida ligera y 65 CV. La compañía no desglosa en la ficha española el par máximo junto con su régimen para esta versión, por lo que ese dato se deja sin publicar en la tabla.',
    usageNote: 'El sistema mild hybrid de 12 V no convierte al Pandina en un híbrido enchufable ni permite cargarlo desde una toma. Al comparar ofertas, comprueba el acabado, las plazas y la fecha de matriculación: la web del fabricante puede mostrar simultáneamente promociones, unidades de stock y configuraciones distintas.',
    versions: [
      { name: '1.0 GSE Hybrid 12 V', type: 'Híbrido no enchufable · MHEV gasolina (12 V)', power: '65 CV (48 kW)', displacement: '999 cm³', maxTorque: notPublished, torqueScope: 'Motor de gasolina', torqueRpm: notPublished },
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Tecnología', value: 'Gasolina con hibridación ligera' },
    ],
    officialUrl: `${fiat}/modelos/pandina`,
    technicalUrl: `${fiat}/modelos/pandina`,
    sources: [
      source('Fiat Pandina: motor y acabados en España', `${fiat}/modelos/pandina`),
      source('Configurador Fiat España', `${fiat}/omni/configurador`),
    ],
    image: photo('pandina', '2026 Fiat Pandina 1.0 Hybrid Pop.jpg', 'Fiat Pandina 1.0 Hybrid Pop fotografiado en 2026.', 'Corvettec6r', 'CC BY 4.0', 1280, 678, 'https://commons.wikimedia.org/wiki/User:Corvettec6r'),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'tipo-sedan',
    title: 'Fiat Tipo Sedán: motor diésel 1.6 y datos técnicos | Kilómetro Claro',
    description: 'Consulta la motorización diésel 1.6 del Fiat Tipo Sedán que Fiat España mantiene en su configurador y sus datos técnicos publicados.',
    intro: 'El Tipo Sedán es la berlina compacta de Fiat. La web española mantiene la versión diésel dentro del catálogo y el configurador, aunque su disponibilidad puede depender de unidades y concesionarios. Esta ficha se limita a esa carrocería y no mezcla sus datos con los del Tipo Hatchback o Station Wagon.',
    powertrainSummary: 'Fiat España identifica la mecánica como 1.6 diésel con caja manual. La documentación técnica oficial del motor 1.6 JTD publica 96 kW, 130 CV y 320 Nm a 1.500 rpm; la cilindrada indicada es 1.598 cm³.',
    usageNote: 'El diésel puede ser adecuado para recorridos largos y uso frecuente por carretera, pero no es automáticamente la alternativa más económica para todos. Valora tus kilómetros anuales, las restricciones ambientales de tus destinos y la disponibilidad real de unidades nuevas. La web del fabricante puede conservar el modelo aunque el concesionario tenga una oferta limitada.',
    versions: [
      { name: '1.6 MultiJet 130 MT', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1.598 cm³', maxTorque: '320 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina de cuatro puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Combustible', value: 'Diésel' },
      { label: 'Disponibilidad', value: 'Consultar stock y pedido en concesionario' },
    ],
    specNote: 'La página española vigente identifica el Tipo Sedán y la mecánica 1.6 diésel, pero no detalla allí toda la ficha del motor. La potencia, cilindrada y par se contrastan con documentación técnica oficial Fiat del motor Tipo 1.6 130; confirma el año-modelo de la unidad ofertada.',
    officialUrl: `${fiat}/modelos/fiat-tipo-sedan`,
    technicalUrl: 'https://aftersales.fiat.com/eLumData/EN/00/357_TIPO5P/00_357_TIPO5P_603.85.782_EN_02_11.22_L_LG/00_357_TIPO5P_603.85.782_EN_02_11.22_L_LG.pdf',
    sources: [
      source('Fiat España: Tipo Sedán y motor disponible', `${fiat}/modelos/fiat-tipo-sedan`),
      source('Documentación técnica oficial del Fiat Tipo: motor 1.6 130', 'https://aftersales.fiat.com/eLumData/EN/00/357_TIPO5P/00_357_TIPO5P_603.85.782_EN_02_11.22_L_LG/00_357_TIPO5P_603.85.782_EN_02_11.22_L_LG.pdf'),
      source('Configurador Fiat España', `${fiat}/omni/configurador`),
    ],
    image: photo('tipo-sedan', 'Fiat Tipo Sedan Facelift Leonberg 2022 1X7A0412.jpg', 'Fiat Tipo Sedán fotografiado en 2022.', 'Alexander Migl', 'CC BY-SA 4.0', 1280, 716, alexander, 'La unidad fotografiada es un Tipo Sedán de 2022; el acabado puede diferir de la configuración española actual.'),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'qubo-l',
    title: 'Fiat Qubo L: versiones diésel y eléctrica | Kilómetro Claro',
    description: 'Consulta las versiones diésel de 100 y 130 CV y la eléctrica de 136 CV del Fiat Qubo L, sus datos técnicos y las configuraciones de cinco o siete plazas.',
    intro: 'El Qubo L es un monovolumen de pasajeros con puertas correderas y configuraciones de cinco o siete plazas. La gama técnica española incluye motores diésel y una versión eléctrica de 100 kW. Fiat anuncia una oferta particular para la eléctrica, aunque la página de producto todavía la describe como «próximamente».',
    powertrainSummary: 'La ficha técnica española identifica un motor diésel 1.5 de 100 CV manual y otro de 130 CV con cambio manual o automático. La versión eléctrica desarrolla 100 kW (136 CV) y monta una batería de 50 kWh. La carrocería de siete plazas se limita al diésel. No se publica un régimen de par comparable para la eléctrica.',
    usageNote: 'La versión de cinco plazas y la de siete no son intercambiables: la tercera fila modifica el espacio y la configuración. La oferta eléctrica publicada por Fiat tiene condiciones de financiación y vigencia limitada; confirma la disponibilidad de pedidos, el acabado y el precio antes de comparar versiones.',
    versions: [
      { name: '1.5 Diésel 100 MT', type: 'Diésel', power: '100 CV (75 kW)', displacement: '1,5 l', maxTorque: notPublished, torqueScope: 'Motor diésel', torqueRpm: notPublished, note: 'Cambio manual de 6 velocidades.' },
      { name: '1.5 Diésel 130 MT', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1,5 l', maxTorque: notPublished, torqueScope: 'Motor diésel', torqueRpm: notPublished, note: 'Cambio manual de 6 velocidades.' },
      { name: '1.5 Diésel 130 AT', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1,5 l', maxTorque: notPublished, torqueScope: 'Motor diésel', torqueRpm: notPublished, note: 'Cambio automático de 8 velocidades.' },
      { name: 'Eléctrico 50 kWh · 136 CV', type: 'Eléctrico', powertrainGroup: 'electric', power: '136 CV (100 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: notPublished, note: 'Batería de 50 kWh; la ficha técnica indica hasta 346 km de autonomía combinada WLTP.' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Monovolumen de pasajeros' },
      { label: 'Plazas', value: '5 o 7; siete plazas solo en diésel' },
      { label: 'Longitud', value: '4,40 m en 5 plazas; 4,75 m en 7 plazas' },
      { label: 'Motorización disponible', value: 'Diésel de 100 o 130 CV; eléctrico de 136 CV' },
    ],
    figures: [{ label: 'Autonomía eléctrica combinada WLTP', value: 'Hasta 346 km' }],
    specNote: 'La página de producto aún presenta el Qubo L eléctrico como «próximamente», mientras que el configurador y una oferta particular vigente muestran una configuración eléctrica concreta. Se incluye la motorización y se indica esta diferencia de disponibilidad. La mención genérica a gasolina no especifica motor, potencia ni configuración y tampoco se añade. El par no se deduce de modelos relacionados.',
    officialUrl: `${fiat}/modelos/qubo-l-diesel`,
    technicalUrl: `${fiat}/modelos/qubo-l-diesel/detalles-tecnicos`,
    sources: [
      source('Fiat Qubo L: motores, plazas y situación de la versión eléctrica', `${fiat}/modelos/qubo-l-diesel`),
      source('Fiat Qubo L: ficha técnica de motores diésel y eléctrico', `${fiat}/modelos/qubo-l-diesel/detalles-tecnicos`),
      source('Comunicado oficial de lanzamiento: motores y configuraciones del Qubo L', `${fiat}/mundo-fiat/noticias-y-eventos/fiat-qubo-l-vehiculo-familiar`),
      source('Configurador Fiat España: Qubo L 5 y 7 plazas', `${fiat}/omni/configurador`),
      source('Oferta particular Fiat España: Qubo L eléctrico 100 kW, Talla M POP', `${fiat}/`),
    ],
    image: photo('qubo-l', 'Fiat Qubo L Leonberg 2026 IMG 8606.jpg', 'Fiat Qubo L fotografiado en Leonberg en 2026.', 'Alexander Migl', 'CC BY-SA 4.0', 1280, 818, alexander),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'doblo',
    title: 'Fiat Doblò y E-Doblò: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Compara las versiones de pasajeros del Fiat Doblò: diésel 100 y 130 CV y E-Doblò eléctrico de 136 CV.',
    intro: 'El Doblò es una furgoneta compacta con versiones configuradas para llevar pasajeros. Fiat comercializa también el E-Doblò eléctrico; aquí se recogen esas variantes de pasajeros, no los furgones con configuración exclusiva de carga.',
    powertrainSummary: 'El catálogo español de Doblò Pasajeros muestra motores diésel 1.5 de 100 y 130 CV; la versión de 130 CV puede combinarse con cambio manual o automático. El E-Doblò MPV desarrolla 100 kW (136 CV). El par del motor eléctrico se publica sin régimen, así que no aparece en la tabla, que solo refleja par máximo con rpm verificables.',
    usageNote: 'Doblò y E-Doblò comparten un planteamiento de espacio, pero su uso energético es distinto: el diésel permite repostar rápido para largas distancias; la eléctrica requiere planificación de recarga y tiene una autonomía homologada que varía con batería y carrocería. Confirma que el presupuesto corresponde a la versión de pasajeros: algunas páginas de Fiat Professional describen variantes comerciales.',
    versions: [
      { name: '1.5 Diésel 100 Manual', type: 'Diésel', power: '100 CV (75 kW)', displacement: '1.499 cm³', maxTorque: '250 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: '1.5 Diésel 130 Manual', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: '1.5 Diésel 130 Automático', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'E-Doblò 50 kWh', type: 'Eléctrico', power: '136 CV (100 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en régimen comparable' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Monovolumen compacto de pasajeros' },
      { label: 'Plazas', value: 'Hasta 5 en las versiones de pasajeros consultadas' },
      { label: 'Tecnologías', value: 'Diésel y eléctrica' },
      { label: 'Eléctrico', value: 'Batería de 50 kWh en la ficha de E-Doblò MPV consultada' },
    ],
    specNote: 'Las cifras diésel proceden de la ficha oficial de Doblò y del catálogo español de pasajeros; la página de producto profesional describe también furgones y no se utiliza para incluir esos modelos. Fiat España publica 100 kW y 136 CV para E-Doblò, pero no un régimen de par eléctrico comparable con el de un motor térmico.',
    officialUrl: `${fiat}/modelos/e-doblo`,
    technicalUrl: `${fiat}/modelos/e-doblo/technical-data`,
    sources: [
      source('Catálogo oficial Fiat Doblò Pasajeros, junio de 2025', `${fiat}/content/dam/fiat2023/es/pdf/pricelist/doblo-ice/CATALOGO-FIAT-DOBLO-297X210_Jun25.pdf`),
      source('Motorizaciones Doblò 1.5 diésel: potencia, cilindrada y par', `${fiat}/professional/modelo/doblo-termico`),
      source('Fiat E-Doblò MPV: ficha técnica eléctrica', `${fiat}/modelos/e-doblo/technical-data`),
      source('Configurador y e-shop Fiat España', `${fiat}/comprar/e-shop`),
    ],
    image: photo('doblo', '2024 Fiat Doblò Mk3 IMG 2388.jpg', 'Fiat Doblò de tercera generación fotografiado en 2024.', 'Alexander-93', 'CC BY-SA 4.0', 1280, 909, alexander),
    reviewedAt,
  },
  {
    brandSlug: 'fiat',
    modelSlug: 'ulysse',
    title: 'Fiat Ulysse: versiones diésel y E-Ulysse eléctrico | Kilómetro Claro',
    description: 'Consulta las opciones diésel y eléctricas del Fiat Ulysse para pasajeros, sus plazas y qué datos técnicos publica Fiat España.',
    intro: 'Ulysse es el monovolumen grande de pasajeros de Fiat, con configuraciones anunciadas de seis a nueve plazas. La página española distingue una variante diésel y E-Ulysse eléctrico, pero no ofrece en la ficha nacional consultada todos los detalles mecánicos del motor térmico. Para la variante eléctrica, la documentación del fabricante confirma un motor de 100 kW (136 CV) y baterías de 50 o 75 kWh.',
    powertrainSummary: 'La gama española identifica Ulysse diésel y E-Ulysse. En el caso del diésel, Fiat España no publica en su página actual la potencia, cilindrada ni el par de la unidad que ofrece, por lo que la tabla no atribuye cifras de otros mercados. Para E-Ulysse, Fiat publica 100 kW (136 CV) y dos capacidades de batería; el par eléctrico no se expresa en un régimen de rpm comparable.',
    usageNote: 'Antes de comparar Ulysse con un turismo, revisa la longitud, el número de plazas y la homologación de la configuración concreta. Fiat presenta el modelo en el canal Professional, pero su página lo describe como vehículo de pasajeros y familia; confirma la oferta, el canal de venta y la motorización disponibles en España con un concesionario.',
    versions: [
      { name: 'Ulysse diésel', type: 'Diésel', power: notPublished, displacement: notPublished, maxTorque: notPublished, torqueScope: 'Motor diésel', torqueRpm: notPublished, note: 'Fiat España identifica la energía diésel, pero no publica cifras técnicas actuales en la página consultada.' },
      { name: 'E-Ulysse 50 kWh', type: 'Eléctrico', power: '136 CV (100 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en régimen comparable' },
      { name: 'E-Ulysse 75 kWh', type: 'Eléctrico', power: '136 CV (100 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Motor eléctrico', torqueRpm: 'No indicado en régimen comparable' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Monovolumen de pasajeros' },
      { label: 'Plazas', value: 'De 6 a 9, según configuración' },
      { label: 'Baterías E-Ulysse', value: '50 o 75 kWh' },
      { label: 'Disponibilidad', value: 'Consultar pedido y stock; la ficha térmica española no desglosa las especificaciones' },
    ],
    specNote: 'La página española distingue las versiones diésel y eléctrica, pero no incluye una ficha de motor térmico vigente; las celdas de potencia, cilindrada y par de esa variante quedan sin cifra. El dato de 100 kW/136 CV del E-Ulysse procede de la documentación técnica oficial del fabricante. No se extrapolan las especificaciones de Ulysse de otros mercados.',
    officialUrl: `${fiat}/professional/modelo/ulysse-termico`,
    technicalUrl: `${fiat}/professional/modelo/ulysse-electrico/features`,
    sources: [
      source('Fiat Professional España: Ulysse diésel y opción eléctrica', `${fiat}/professional/modelo/ulysse-termico`),
      source('Fiat Professional E-Ulysse: baterías y gama de pasajeros', `${fiat}/professional/modelo/ulysse-electrico/features`),
      source('Ficha técnica oficial E-Ulysse (potencia y baterías)', 'https://www.media.stellantis.com/es-es/fiat/press/nuevos-fiat-e-doblo-y-fiat-e-ulysse-mayor-autonomia-ev-tecnologia-de-seguridad-actualizada-y-un-nuevo-diseno-para-la-ultima-generacion-de-monovolumenes-de-fiat'),
    ],
    image: photo('ulysse', 'Fiat E-Ulysse Leonberg 2024 IMG 0968.jpg', 'Fiat E-Ulysse fotografiado en 2024, representante de la familia Ulysse.', 'Alexander-93', 'CC BY-SA 4.0', 1280, 852, alexander, 'Fotografía de la versión E-Ulysse; la variante diésel puede diferir en detalles de acabado. Disponibilidad sujeta a confirmación del concesionario.'),
    reviewedAt,
  },
];
