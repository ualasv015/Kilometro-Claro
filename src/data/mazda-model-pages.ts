import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const mazda = 'https://www.mazda.es';
const range = mazda + '/gama/';
const source = (label: string, url: string) => ({ label, url });

type PhotoLicense = 'CC BY 4.0' | 'CC BY-SA 4.0' | 'CC BY-SA 3.0 Alemania' | 'CC0 1.0';

function photo(
  slug: string,
  alt: string,
  file: string,
  height: number,
  authorName: string,
  licenseName: PhotoLicense,
  authorUrl?: string,
): NonNullable<ModelPageData['image']> {
  const licenseUrl = licenseName === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : licenseName === 'CC BY 4.0'
      ? 'https://creativecommons.org/licenses/by/4.0/'
      : licenseName === 'CC BY-SA 3.0 Alemania'
        ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
        : 'https://creativecommons.org/licenses/by-sa/4.0/';

  return {
    src: `/images/models/commons/model-${slug.startsWith('mazda') ? slug : `mazda-${slug}`}.jpg`,
    alt,
    caption: 'Fotografía de referencia: el acabado y algunos detalles pueden diferir de la configuración comercializada en España.',
    width: 1280,
    height,
    sourceTitle: file,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:' + encodeURI(file.replaceAll(' ', '_')),
    authorName,
    ...(authorUrl ? { authorUrl } : {}),
    licenseName,
    licenseUrl,
  };
}

function version(
  name: string,
  power: string,
  displacement: string,
  maxTorque: string,
  torqueScope: string,
  torqueRpm: string,
  note?: string,
): ModelVersion {
  return { name, power, displacement, maxTorque, torqueScope, torqueRpm, ...(note ? { note } : {}) };
}

type MazdaEntry = {
  slug: string;
  name: string;
  body: string;
  intro: string;
  summary: string;
  usage: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  figures?: { label: string; value: string }[];
  officialUrl: string;
  sources: { label: string; url: string }[];
  image: NonNullable<ModelPageData['image']>;
  specNote?: string;
};

function makePage(entry: MazdaEntry): ModelPageData {
  const modelName = entry.name.startsWith('Mazda') ? entry.name : `Mazda ${entry.name}`;

  return {
    brandSlug: 'mazda',
    modelSlug: entry.slug,
    title: `${modelName}: motores, versiones y datos técnicos | Kilómetro Claro`,
    description: `Consulta las versiones y motorizaciones del ${modelName} en España, con datos técnicos contrastados y enlaces oficiales.`,
    intro: entry.intro,
    powertrainSummary: entry.summary,
    usageNote: entry.usage,
    versions: entry.versions,
    facts: entry.facts,
    ...(entry.figures ? { figures: entry.figures } : {}),
    ...(entry.specNote ? { specNote: entry.specNote } : {}),
    officialUrl: entry.officialUrl,
    technicalUrl: entry.sources[entry.sources.length - 1]?.url ?? entry.officialUrl,
    sources: [source('Gama Mazda España', range), ...entry.sources],
    image: entry.image,
    reviewedAt,
  };
}

const entries: MazdaEntry[] = [
  {
    slug: 'cx-6e', name: 'CX-6e', body: 'SUV eléctrico',
    intro: 'El Mazda CX-6e es un SUV mediano totalmente eléctrico y de tracción trasera. En la gama española consultada figura junto al CX-5, pero plantea otra clase de uso: no necesita combustible y su autonomía depende tanto de la batería como de la velocidad, la temperatura y la ruta.',
    summary: 'La versión española combina un motor eléctrico trasero de 258 CV (190 kW) y 290 Nm con una batería LFP de 78 kWh. Mazda anuncia hasta 484 km de autonomía WLTP para la configuración Takumi; no tiene cilindrada ni un régimen de par comparable al de un motor térmico.',
    usage: 'El CX-6e puede encajar en recorridos diarios y viajes si se dispone de carga en casa o de una red pública compatible. La autonomía WLTP es una referencia homologada, no una promesa de kilómetros en autopista. Para valorar un viaje concreto, cuenta con margen para el frío, la velocidad y las paradas de recarga.',
    versions: [version('CX-6e eléctrico', '258 CV (190 kW)', '—', '290 Nm', 'Motor eléctrico trasero', 'No aplica: no se expresa en rpm', 'Batería LFP de 78 kWh; autonomía máxima anunciada de 484 km WLTP.')],
    facts: [{ label: 'Carrocería', value: 'SUV mediano' }, { label: 'Tracción', value: 'Trasera' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: '100 % eléctrica' }],
    figures: [{ label: 'Autonomía máxima anunciada', value: 'Hasta 484 km WLTP' }, { label: 'Carga rápida DC', value: 'Hasta 195 kW; 10–80 % en unos 24 minutos en condiciones indicadas por Mazda' }, { label: 'Consumo combinado publicado', value: '18,9–19,4 kWh/100 km, según versión' }],
    officialUrl: mazda + '/gama/mazda-cx-6e/',
    sources: [source('Mazda CX-6e: gama española', mazda + '/gama/mazda-cx-6e/'), source('Datos técnicos oficiales del CX-6e', 'https://es.mazda-press.com/news/2026/press_release_mazda_cx6e_technology_sp/'), source('Preventa y precio del Mazda CX-6e', 'https://es.mazda-press.com/news/2026/preventa-y-precio-mazda-cx-6e/')],
    image: photo('cx-6e', 'Mazda CX-6e de color oscuro fotografiado en un espacio de exposición.', '2026 Mazda CX-6e Premium.jpg', 960, 'Chanokchon', 'CC BY-SA 4.0'),
  },
  {
    slug: 'cx-5', name: 'CX-5', body: 'SUV mediano',
    intro: 'El Mazda CX-5 es el SUV mediano de la marca y una de sus opciones familiares de mayor recorrido. La generación que Mazda comercializa actualmente en España combina un motor de gasolina de 2,5 litros con hibridación ligera de 24 V y se ofrece con tracción delantera o total.',
    summary: 'La gama actual emplea el e-Skyactiv G 141 de 2,5 litros, con 141 CV (104 kW) y 238 Nm. Mazda sitúa el par máximo entre 3.500 y 3.750 rpm. El sistema M Hybrid asiste al motor térmico, pero no permite circular como un híbrido completo solo con electricidad.',
    usage: 'La carrocería ofrece espacio para cinco ocupantes y un maletero pensado para el uso familiar. La tracción total está disponible en algunas configuraciones, aunque no convierte al CX-5 en un todoterreno extremo. Para comparar versiones, revisa el consumo homologado de cada tracción y el equipamiento, no solo la potencia.',
    versions: [version('2.5 e-Skyactiv G 141 M Hybrid', '141 CV (104 kW)', '2.488 cm³, gasolina', '238 Nm', 'Motor de gasolina', '3.500–3.750 rpm', 'Hibridación ligera de 24 V; tracción delantera o total según versión.')],
    facts: [{ label: 'Carrocería', value: 'SUV mediano' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Gasolina con hibridación ligera M Hybrid' }, { label: 'Tracción', value: 'Delantera o total, según versión' }],
    figures: [{ label: 'Consumo WLTP, tracción delantera', value: '7,0 l/100 km' }, { label: 'Consumo WLTP, tracción total', value: '7,4–7,5 l/100 km' }, { label: 'Capacidad de remolque anunciada', value: 'Hasta 2.000 kg, según configuración' }],
    officialUrl: mazda + '/gama/mazda-cx-5/',
    sources: [source('Mazda CX-5: gama y configurador', mazda + '/gama/mazda-cx-5/'), source('Motor e-Skyactiv G: potencia, par y régimen', 'https://es.mazda-press.com/technology/engines/skyactiv-g/'), source('Presentación y datos del nuevo Mazda CX-5', 'https://es.mazda-press.com/cars/mazda-cx-5/'), source('Configurador Mazda CX-5', 'https://www.mazda.es/configurador/')],
    image: photo('cx-5', 'Mazda CX-5 rojo de nueva generación fotografiado en exposición.', '2026 Mazda CX-5 e-SKYACTIV G 2.5 L.jpg', 693, 'TTTNIS', 'CC0 1.0'),
  },
  {
    slug: 'mazda6e', name: 'Mazda6e', body: 'Berlina eléctrica de 5 puertas',
    intro: 'El Mazda6e es una berlina eléctrica de cinco puertas. La actualización de gama anunciada para el año-modelo 2027 introduce una batería LFP de 78 kWh, mantiene los 258 CV (190 kW) y eleva la autonomía homologada hasta 560 km WLTP. Mazda prevé su llegada a los concesionarios europeos desde noviembre de 2026.',
    summary: 'La ficha española del Mazda6e 2027 muestra un motor eléctrico de 258 CV (190 kW) y 290 Nm, con tracción trasera. La marca publica el par como 290 Nm/rpm sin especificar un régimen; al ser eléctrico, tampoco tiene cilindrada térmica.',
    usage: 'La carrocería de cinco puertas facilita cargar objetos voluminosos frente a una berlina con maletero separado. Para valorar su uso como coche principal, compara la autonomía de la versión concreta con tus trayectos y comprueba si puedes cargar en casa. En viajes, planifica paradas aunque la autonomía homologada parezca suficiente.',
    versions: [version('Mazda6e eléctrico 2027', '258 CV (190 kW)', '—', '290 Nm', 'Motor eléctrico trasero', 'No aplica: no se expresa en rpm', 'Batería LFP de 78 kWh; hasta 560 km WLTP en la configuración publicada para España.')],
    facts: [{ label: 'Carrocería', value: 'Berlina de 5 puertas' }, { label: 'Tracción', value: 'Trasera' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: '100 % eléctrica' }],
    figures: [{ label: 'Autonomía máxima anunciada', value: 'Hasta 560 km WLTP' }, { label: 'Consumo eléctrico combinado publicado', value: '16,1 kWh/100 km' }, { label: 'Potencia máxima de carga DC', value: 'Hasta 200 kW' }],
    officialUrl: mazda + '/gama/mazda-6e/',
    sources: [source('Mazda6e: gama y especificaciones españolas', mazda + '/gama/mazda-6e/specs-and-compare/'), source('Mazda6e 2027: nueva motorización y batería', 'https://es.mazda-press.com/news/2026/ndp_mazda6e_2027_sp3/')],
    image: photo('6e', 'Mazda6e rojo expuesto en una presentación de automóviles.', 'Mazda 6e Fastback (GIIAS 2026).jpg', 853, 'Sulthan Naufal', 'CC BY-SA 4.0'),
  },
  {
    slug: 'cx-30', name: 'CX-30', body: 'SUV compacto',
    intro: 'El CX-30 es el SUV compacto de Mazda, con cinco plazas y un tamaño intermedio entre un turismo y un SUV familiar. La gama española 2027 mantiene dos motores de gasolina electrificados con M Hybrid: el e-Skyactiv G de 140 CV y el e-Skyactiv X de 186 CV.',
    summary: 'La gama española combina el e-Skyactiv G 2.5 de 140 CV (103 kW) y 238 Nm a 3.300 rpm con el e-Skyactiv X 2.0 de 186 CV (137 kW) y 240 Nm a 4.000 rpm. Ambos llevan hibridación ligera M Hybrid; la tracción total i-Activ AWD está disponible en configuraciones concretas.',
    usage: 'El G 140 es la opción de gasolina más sencilla de la gama actual y el X 186 añade potencia y puede asociarse a tracción total. Ambos reciben asistencia eléctrica ligera: no son híbridos completos ni se recargan enchufándolos. La transmisión, el consumo homologado y la tracción dependen del acabado elegido.',
    versions: [
      version('2.5 e-Skyactiv G 140 M Hybrid', '140 CV (103 kW)', '2.488 cm³, gasolina', '238 Nm', 'Motor de gasolina', '3.300 rpm', 'Hibridación ligera; configuraciones de tracción delantera.'),
      version('2.0 e-Skyactiv X 186 M Hybrid', '186 CV (137 kW)', '1.998 cm³, gasolina', '240 Nm', 'Motor de gasolina', '4.000 rpm', 'Hibridación ligera Mazda M Hybrid; disponible con tracción delantera o i-Activ AWD, según configuración.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Gasolina con hibridación ligera' }, { label: 'Tracción', value: 'Delantera o total, según versión' }],
    figures: [{ label: 'Potencias publicadas', value: '140 CV y 186 CV' }, { label: 'Capacidad del maletero', value: '430–1.406 litros, según configuración' }, { label: 'Consumo WLTP publicado', value: '5,6–6,9 l/100 km, según versión' }],
    officialUrl: mazda + '/gama/mazda-cx-30/',
    sources: [source('Mazda CX-30: gama española', mazda + '/gama/mazda-cx-30/'), source('Gama de motores del CX-30 2027', 'https://es.mazda-press.com/news/2026/mazda_pr_press_release_cx-30_2027_sp/'), source('Datos del e-Skyactiv G 140', 'https://es.mazda-press.com/api/assets/download/dcc415ea-18b7-4aca-bb6c-3bf0e909e0b5_Default?isDownload=false'), source('Datos del motor e-Skyactiv X', 'https://es.mazda-press.com/technology/engines/e-skyactiv-x/')],
    image: photo('cx-30', 'Mazda CX-30 azul visto desde un ángulo elevado en una calle.', 'Mazda CX-30 Washington DC Metro Area, USA.jpg', 1024, 'OWS Photography', 'CC BY 4.0'),
  },
  {
    slug: 'cx-60', name: 'CX-60', body: 'SUV grande',
    intro: 'El Mazda CX-60 es un SUV grande de cinco plazas con dos planteamientos mecánicos en la gama española: híbrido enchufable de gasolina y diésel con hibridación ligera. La marca combina estas motorizaciones con una caja automática de ocho velocidades y ofrece tracción trasera o total según versión.',
    summary: 'La gama combina el PHEV de 2,5 litros, con 327 CV (241 kW) de sistema y 500 Nm combinados, y dos diésel e-Skyactiv D MHEV: 200 CV (147 kW) y 450 Nm a 1.400–3.000 rpm con tracción trasera, o 254 CV (187 kW) y 550 Nm a 1.500–2.400 rpm con tracción total. El par del PHEV no se expresa con un único régimen.',
    usage: 'El PHEV puede cubrir desplazamientos diarios con electricidad si se recarga con frecuencia, pero su consumo de gasolina aumenta cuando se usa con la batería descargada. El diésel puede resultar más adecuado para recorridos largos, aunque es importante comparar el coste total, los kilómetros anuales y las restricciones urbanas de cada localidad.',
    versions: [
      version('2.5 e-Skyactiv PHEV AWD', '327 CV (241 kW) de sistema', '2,5 litros gasolina + motor eléctrico', '500 Nm combinados', 'Sistema híbrido enchufable', 'El par combinado no tiene un único régimen', 'Automático de 8 velocidades y tracción total.'),
      version('3.3 e-Skyactiv D MHEV 200', '200 CV (147 kW)', '3.283 cm³, seis cilindros diésel', '450 Nm', 'Motor diésel', '1.400–3.000 rpm', 'Hibridación ligera M Hybrid Boost de 48 V; tracción trasera.'),
      version('3.3 e-Skyactiv D MHEV 254', '254 CV (187 kW)', '3.283 cm³, seis cilindros diésel', '550 Nm', 'Motor diésel', '1.500–2.400 rpm', 'Hibridación ligera M Hybrid Boost de 48 V; tracción total i-Activ AWD.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV grande de 5 plazas' }, { label: 'Propulsiones', value: 'PHEV gasolina y diésel MHEV' }, { label: 'Transmisión', value: 'Automática de 8 velocidades' }, { label: 'Maletero', value: '570–1.726 litros, según configuración' }],
    figures: [{ label: 'Potencia PHEV', value: '327 CV' }, { label: 'Par máximo combinado PHEV', value: '500 Nm' }, { label: 'Consumo diésel anunciado en gama', value: '5,0–5,3 l/100 km, según versión' }],
    officialUrl: mazda + '/gama/mazda-cx-60/',
    sources: [source('Mazda CX-60: gama española', mazda + '/gama/mazda-cx-60/'), source('Configurador Mazda CX-60', 'https://www.mazda.es/configurador/MAZDA_CX-60/5WGN/'), source('Datos técnicos Mazda CX-60 2025', 'https://es.mazda-press.com/cars/mazda-cx-60/'), source('Motorizaciones e-Skyactiv D de Mazda', 'https://es.mazda-press.com/technology/engines/e-skyactive-d/'), source('Datos del sistema e-Skyactiv PHEV', 'https://es.mazda-press.com/technology/engines/e-skyactive-phev/')],
    image: photo('cx-60', 'Mazda CX-60 gris fotografiado de frente en tres cuartos.', 'Mazda CX-60 PHEV 1X7A0369.jpg', 741, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'cx-80', name: 'CX-80', body: 'SUV de 7 plazas',
    intro: 'El Mazda CX-80 es el SUV más largo y espacioso de la gama europea de Mazda. Su rasgo práctico más importante son las tres filas de asientos: la configuración permite viajar con hasta siete ocupantes, aunque el espacio de equipaje cambia mucho cuando se utilizan todas las plazas.',
    summary: 'La oferta española incluye un PHEV de 2,5 litros con 327 CV (241 kW) de sistema y 500 Nm combinados, además de un diésel e-Skyactiv D de 3,3 litros con M Hybrid Boost de 48 V y 254 CV (187 kW). Mazda especifica tracción total para esta motorización; la fuente española consultada no detalla el régimen del par máximo del CX-80.',
    usage: 'Antes de elegirlo, conviene probar el acceso a la tercera fila y comprobar cuánto maletero queda con siete pasajeros y su equipaje. El PHEV aprovecha mejor la parte eléctrica si se carga a menudo; para recorridos largos, compara su consumo con batería descargada con el del diésel en condiciones equivalentes.',
    versions: [
      version('2.5 e-Skyactiv PHEV AWD', '327 CV (241 kW) de sistema', '2,5 litros gasolina + motor eléctrico', '500 Nm combinados', 'Sistema híbrido enchufable', 'El par combinado no tiene un único régimen', 'Automático de 8 velocidades; autonomía eléctrica superior a 60 km en la ficha europea.'),
      version('3.3 e-Skyactiv D MHEV AWD', '254 CV (187 kW)', '3.283 cm³, seis cilindros diésel', '550 Nm', 'Motor diésel', 'No publicado específicamente para el CX-80', 'Hibridación ligera M Hybrid Boost de 48 V; automático de 8 velocidades y tracción total.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV grande de tres filas' }, { label: 'Plazas', value: 'Hasta 7' }, { label: 'Propulsiones', value: 'PHEV gasolina y diésel MHEV' }, { label: 'Maletero', value: '687–1.971 litros, según plazas y configuración' }],
    figures: [{ label: 'Potencia PHEV', value: '327 CV' }, { label: 'Par combinado PHEV', value: '500 Nm' }, { label: 'Consumo PHEV homologado publicado', value: '1,6 l/100 km; con batería descargada, 8,0–8,1 l/100 km' }],
    officialUrl: mazda + '/gama/mazda-cx-80/',
    sources: [source('Mazda CX-80: gama española', mazda + '/gama/mazda-cx-80/'), source('Información europea del Mazda CX-80', 'https://es.mazda-press.com/news/nuevo-mazda-cx-80-el-flamante-buque-insignia-de-mazda-con-siete-plazas/'), source('Motorizaciones diésel e-Skyactiv D', 'https://es.mazda-press.com/technology/engines/e-skyactive-d/'), source('Sistema híbrido enchufable Mazda e-Skyactiv PHEV', 'https://es.mazda-press.com/technology/engines/e-skyactive-phev/')],
    image: photo('cx-80', 'Mazda CX-80 gris fotografiado en tres cuartos delantero.', 'Mazda CX-80 PHEV DSC 6064.jpg', 856, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'mazda2-hybrid', name: 'Mazda2 Hybrid', body: 'Utilitario de 5 puertas',
    intro: 'El Mazda2 Hybrid es el utilitario híbrido completo de la marca. Su sistema puede mover el coche con el motor eléctrico durante parte de la conducción, especialmente a baja velocidad, y la batería se recarga mediante el propio sistema: no hay que enchufarlo.',
    summary: 'La gama española utiliza un motor de gasolina 1.5 asociado a un sistema híbrido de 116 CV (85 kW) y transmisión automática e-CVT. Mazda publica un consumo combinado WLTP de 3,8–4,2 l/100 km, dependiendo de la versión.',
    usage: 'Por tamaño y sistema híbrido, es una alternativa pensada para ciudad y desplazamientos cotidianos. No debe confundirse con el Mazda2 de generaciones anteriores ni con un híbrido enchufable: el Mazda2 Hybrid no se conecta a la red eléctrica. Su consumo real dependerá del tráfico, la temperatura y el tipo de recorrido.',
    versions: [version('1.5 Full Hybrid e-CVT', 'Sistema: 116 CV (85 kW)', '1.490 cm³, gasolina + motor eléctrico', '120 Nm', 'Motor térmico de gasolina', '4.800 rpm', 'El motor térmico desarrolla 92 CV (68 kW); el sistema híbrido completo entrega 116 CV (85 kW). Transmisión e-CVT y batería no enchufable.')],
    facts: [{ label: 'Carrocería', value: 'Utilitario de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Híbrida completa' }, { label: 'Maletero', value: '286 litros' }],
    figures: [{ label: 'Potencia del sistema', value: '116 CV (85 kW)' }, { label: 'Consumo combinado WLTP', value: '3,8–4,2 l/100 km' }, { label: 'Transmisión', value: 'Automática e-CVT' }],
    officialUrl: mazda + '/gama/mazda2-hybrid/',
    sources: [source('Mazda2 Hybrid: ficha española', mazda + '/gama/mazda2-hybrid/'), source('Datos técnicos del sistema híbrido Mazda2', 'https://es.mazda-press.com/api/assets/download/20c88813-e326-4ab3-8cdd-5238d7ab9af8_Default?isDownload=false'), source('Consumo y versiones Mazda2 Hybrid', mazda + '/promociones/promociones-actuales/mazda2-hybrid/')],
    image: photo('mazda2-hybrid', 'Mazda2 Hybrid blanco fotografiado de frente en una zona de exposición.', 'Mazda2 Hybrid Homura Plus (IV, Facelift) – f 05062025.jpg', 676, 'M 93', 'CC BY-SA 3.0 Alemania', 'https://commons.wikimedia.org/wiki/User:M_93'),
  },
  {
    slug: 'mazda3-5-puertas', name: 'Mazda3 5 puertas', body: 'Compacto',
    intro: 'El Mazda3 de cinco puertas es el compacto de líneas más dinámicas de la gama. Su carrocería combina una zaga inclinada con cinco plazas y un maletero de 334 litros según la ficha de Mazda. En el mercado español actual se ofrece con gasolina e hibridación ligera.',
    summary: 'La gama española 2026 ofrece el 2.5 e-Skyactiv G de 140 CV (103 kW) y el 2.0 e-Skyactiv X de 186 CV (137 kW), ambos con M Hybrid. El X también está disponible con cambio automático y tracción total en algunos acabados; el G se ofrece con cambio manual o automático y tracción delantera.',
    usage: 'Frente al sedán, la carrocería de cinco puertas facilita introducir objetos altos por la apertura trasera, aunque el volumen de carga es inferior. La gama incluye cajas manuales y automáticas según acabado; confirma el configurador antes de comparar precio, consumo y equipamiento.',
    versions: [
      version('2.5 e-Skyactiv G 140 M Hybrid', '140 CV (103 kW)', '2.488 cm³, gasolina', '238 Nm', 'Motor de gasolina', '3.300 rpm', 'Hibridación ligera Mazda M Hybrid.'),
      version('2.0 e-Skyactiv X 186 M Hybrid', '186 CV (137 kW)', '1.998 cm³, gasolina', '240 Nm', 'Motor de gasolina', '4.000 rpm', 'Hibridación ligera Mazda M Hybrid; disponible con caja manual o automática según acabado.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Gasolina con hibridación ligera M Hybrid' }, { label: 'Maletero', value: '334 litros' }],
    figures: [{ label: 'Potencias publicadas', value: '140 CV (103 kW) y 186 CV (137 kW)' }, { label: 'Consumo WLTP publicado', value: '5,3–6,5 l/100 km, según versión' }, { label: 'Transmisión', value: 'Manual o automática, según acabado' }],
    officialUrl: mazda + '/gama/mazda3-hatchback/',
    sources: [source('Mazda3 5 puertas: gama española', mazda + '/gama/mazda3-hatchback/'), source('Precios y motores Mazda3 2026: cinco puertas y sedán', 'https://media-assets.mazda.eu/raw/upload/mazdaes/globalassets/pdfs/mazda3/mazda3_pricelist_es_eaa_compliance.pdf'), source('Especificaciones Mazda3 5 puertas', mazda + '/gama/mazda3/especificaciones-y-comparativa/'), source('Datos del motor e-Skyactiv G 140', 'https://es.mazda-press.com/api/assets/download/dcc415ea-18b7-4aca-bb6c-3bf0e909e0b5_Default?isDownload=false'), source('Datos del motor e-Skyactiv X', 'https://es.mazda-press.com/technology/engines/e-skyactiv-x/')],
    image: photo('mazda3', 'Mazda3 gris de cinco puertas fotografiado desde el frontal.', '2025 Mazda3 2.5 S Carbon Edition hatchback, front right, 05-25-2025.jpg', 905, 'MercurySable99', 'CC BY-SA 4.0'),
  },
  {
    slug: 'mazda3-sedan', name: 'Mazda3 Sedán', body: 'Berlina compacta',
    intro: 'El Mazda3 Sedán comparte la base técnica del compacto de cinco puertas, pero adopta una carrocería de tres volúmenes y un maletero independiente. Mazda España le atribuye 450 litros de capacidad y una gama de gasolina con hibridación ligera.',
    summary: 'La gama española 2026 ofrece dos motores de gasolina con M Hybrid: el 2.5 e-Skyactiv G de 140 CV (103 kW) y el 2.0 e-Skyactiv X de 186 CV (137 kW). Ambos se ofrecen con cambio manual o automático según acabado y tracción delantera en las configuraciones del sedán consultadas.',
    usage: 'La silueta sedán puede resultar práctica para quien prioriza una berlina compacta y un maletero separado. La abertura del portón es menos amplia que en el cinco puertas, así que conviene probar si se transportan bultos voluminosos. Consumo y equipamiento dependen del acabado y las llantas.',
    versions: [
      version('2.5 e-Skyactiv G 140 M Hybrid', '140 CV (103 kW)', '2.488 cm³, gasolina', '238 Nm', 'Motor de gasolina', '3.300 rpm', 'Hibridación ligera Mazda M Hybrid; caja manual o automática según acabado.'),
      version('2.0 e-Skyactiv X 186 M Hybrid', '186 CV (137 kW)', '1.998 cm³, gasolina', '240 Nm', 'Motor de gasolina', '4.000 rpm', 'Hibridación ligera Mazda M Hybrid; disponible con caja manual o automática según acabado.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Berlina compacta de 4 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Gasolina con hibridación ligera M Hybrid' }, { label: 'Maletero', value: '450 litros' }],
    figures: [{ label: 'Potencias publicadas', value: '140 CV (103 kW) y 186 CV (137 kW)' }, { label: 'Consumo WLTP publicado', value: '5,1–6,1 l/100 km, según versión' }, { label: 'Transmisión', value: 'Manual o automática, según acabado' }],
    officialUrl: mazda + '/gama/mazda3-sedan/',
    sources: [source('Mazda3 Sedán: gama española', mazda + '/gama/mazda3-sedan/'), source('Precios y motores Mazda3 2026: cinco puertas y sedán', 'https://media-assets.mazda.eu/raw/upload/mazdaes/globalassets/pdfs/mazda3/mazda3_pricelist_es_eaa_compliance.pdf'), source('Gama y ficha técnica del Mazda3', mazda + '/gama/mazda3/especificaciones-y-comparativa/'), source('Datos del motor e-Skyactiv G 140', 'https://es.mazda-press.com/api/assets/download/dcc415ea-18b7-4aca-bb6c-3bf0e909e0b5_Default?isDownload=false'), source('Datos del motor e-Skyactiv X', 'https://es.mazda-press.com/technology/engines/e-skyactiv-x/')],
    image: photo('mazda3', 'Mazda3 gris de cinco puertas como referencia de la familia Mazda3.', '2025 Mazda3 2.5 S Carbon Edition hatchback, front right, 05-25-2025.jpg', 905, 'MercurySable99', 'CC BY-SA 4.0'),
    specNote: 'La fotografía disponible corresponde al Mazda3 de cinco puertas; se usa como imagen de referencia de la familia. La ficha y el enlace oficial identifican la carrocería sedán.',
  },
  {
    slug: 'mx-5-st', name: 'MX-5 ST', body: 'Roadster con techo de lona',
    intro: 'El Mazda MX-5 ST conserva la receta clásica del roadster: dos plazas, motor delantero, tracción trasera y techo de lona. La capota se acciona manualmente y permite disfrutar de una carrocería abierta sin añadir el mecanismo del techo rígido retráctil.',
    summary: 'La ficha española del MX-5 ST 2027 muestra el motor atmosférico 1.5 Skyactiv-G de 136 CV (100 kW), con cambio manual de seis velocidades y tracción trasera. Mazda especifica 155 Nm a 4.500 rpm; el 2.0 de 184 CV no figura en el configurador español actual.',
    usage: 'Es un biplaza ligero pensado principalmente para disfrutar de la conducción, no para maximizar espacio o versatilidad familiar. Antes de elegirlo, comprueba la capacidad del maletero y la facilidad para entrar y salir; si se hacen muchos viajes con equipaje, su espacio es limitado.',
    versions: [
      version('1.5 Skyactiv-G 136', '136 CV (100 kW)', '1.496 cm³, gasolina', '155 Nm', 'Motor de gasolina', '4.500 rpm', 'Cambio manual de 6 velocidades y tracción trasera.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Roadster descapotable con techo de lona' }, { label: 'Plazas', value: '2' }, { label: 'Tracción', value: 'Trasera' }, { label: 'Maletero', value: '130 litros, según ficha de Mazda' }],
    figures: [{ label: 'Motor de gasolina actual', value: '1.5 Skyactiv-G de 136 CV (100 kW)' }, { label: 'Consumo WLTP combinado publicado', value: '6,1 l/100 km' }],
    officialUrl: mazda + '/gama/mazda-mx-5/',
    sources: [source('Mazda MX-5: gama española', mazda + '/gama/mazda-mx-5/'), source('Gama y motor del Mazda MX-5 2027', 'https://es.mazda-press.com/news/2026/mazda_pr_press_release_mx-5_2027_sp_v2/'), source('Especificaciones Mazda MX-5 ST', mazda + '/old-showrooms/mazda-mx-5-old/especificaciones-y-comparativa/')],
    image: photo('mx-5', 'Mazda MX-5 gris fotografiado en una zona de concesionarios.', 'Mazda MX-5 (ND) 1X7A7471.jpg', 738, 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'mx-5-rf', name: 'MX-5 RF', body: 'Roadster con techo rígido retráctil',
    intro: 'El Mazda MX-5 RF es la variante de techo rígido retráctil del roadster. Mantiene dos plazas y tracción trasera, pero su silueta cerrada cambia la experiencia de conducción y aporta más aislamiento cuando el techo está colocado. No es un coupé convencional: el techo se repliega para abrir el habitáculo.',
    summary: 'El MX-5 RF comparte el 1.5 Skyactiv-G de 136 CV (100 kW) con la versión de techo de lona. La ficha técnica española publica 155 Nm a 4.500 rpm; el 2.0 de 184 CV no figura en el configurador español actual.',
    usage: 'El RF puede ser interesante si se quiere un MX-5 con techo rígido integrado y se circula a menudo con la capota cerrada. El mecanismo influye en la silueta y en el espacio disponible: compara la capacidad del maletero y prueba el funcionamiento del techo antes de decidir entre RF y ST.',
    versions: [
      version('1.5 Skyactiv-G 136', '136 CV (100 kW)', '1.496 cm³, gasolina', '155 Nm', 'Motor de gasolina', '4.500 rpm', 'Cambio manual de 6 velocidades y tracción trasera.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Roadster con techo rígido retráctil' }, { label: 'Plazas', value: '2' }, { label: 'Tracción', value: 'Trasera' }, { label: 'Maletero', value: '127 litros, según ficha de Mazda' }],
    figures: [{ label: 'Motor de gasolina actual', value: '1.5 Skyactiv-G de 136 CV (100 kW)' }, { label: 'Consumo WLTP combinado publicado', value: '6,1 l/100 km; comprueba la cifra aplicable a la carrocería y configuración' }],
    officialUrl: mazda + '/gama/mazda-mx-5/',
    sources: [source('Mazda MX-5: gama española', mazda + '/gama/mazda-mx-5/'), source('Gama y motor del Mazda MX-5 2027', 'https://es.mazda-press.com/news/2026/mazda_pr_press_release_mx-5_2027_sp_v2/'), source('Especificaciones de la familia Mazda MX-5', mazda + '/old-showrooms/mazda-mx-5-old/especificaciones-y-comparativa/')],
    image: photo('mx-5', 'Mazda MX-5 gris de la generación actual, visto desde delante.', 'Mazda MX-5 (ND) 1X7A7471.jpg', 738, 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
    specNote: 'La gama española consultada muestra la versión RF con el 1.5 Skyactiv-G. Los datos de potencia y par corresponden a la ficha técnica del MX-5 2027 y pueden variar ligeramente por carrocería u homologación.',
  },
];

export const mazdaModels: ModelPageData[] = entries.map(makePage);
