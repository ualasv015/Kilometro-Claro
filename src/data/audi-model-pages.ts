import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '29 de octubre de 2026';
const audi = 'https://www.audi.es/es';
const catalog = audi + '/modelos/';
const source = (label: string, url: string) => ({ label, url });

type PhotoLicense = 'CC BY 2.0' | 'CC BY 4.0' | 'CC BY-SA 4.0' | 'CC BY-SA 3.0 Alemania' | 'CC0 1.0';

function photo(
  slug: string,
  alt: string,
  file: string,
  width: number,
  height: number,
  authorName: string,
  licenseName: PhotoLicense,
  authorUrl?: string,
): NonNullable<ModelPageData['image']> {
  const sourceFile = file.replaceAll(' ', '_');
  const licenseUrl = licenseName === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : licenseName === 'CC BY 2.0'
      ? 'https://creativecommons.org/licenses/by/2.0/'
      : licenseName === 'CC BY 4.0'
        ? 'https://creativecommons.org/licenses/by/4.0/'
        : licenseName === 'CC BY-SA 3.0 Alemania'
          ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
          : 'https://creativecommons.org/licenses/by-sa/4.0/';
  return {
    src: '/images/models/commons/model-audi-' + slug + '.jpg',
    alt,
    caption: 'Imagen de referencia; la carrocería, el acabado y la disponibilidad pueden variar respecto a la oferta española.',
    width,
    height,
    sourceTitle: file,
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:' + sourceFile,
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

type AudiEntry = {
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

function makePage(entry: AudiEntry): ModelPageData {
  return {
    brandSlug: 'audi',
    modelSlug: entry.slug,
    title: 'Audi ' + entry.name + ': modelos, motores y datos técnicos | Kilómetro Claro',
    description: 'Consulta las carrocerías y motorizaciones del Audi ' + entry.name + ' disponibles en España, con datos técnicos contrastados y enlaces oficiales.',
    intro: entry.intro,
    powertrainSummary: entry.summary,
    usageNote: entry.usage,
    versions: entry.versions,
    facts: entry.facts,
    ...(entry.figures ? { figures: entry.figures } : {}),
    ...(entry.specNote ? { specNote: entry.specNote } : {}),
    officialUrl: entry.officialUrl,
    technicalUrl: entry.sources[entry.sources.length - 1]?.url ?? entry.officialUrl,
    sources: [source('Catálogo de modelos Audi España', catalog), ...entry.sources],
    image: entry.image,
    reviewedAt,
  };
}

const entries: AudiEntry[] = [
  {
    slug: 'a1', name: 'A1', body: 'Compacto',
    intro: 'El A1 es el compacto de acceso a la gama Audi. En el catálogo español consultado aparece en dos formatos: A1 Sportback y A1 allstreet, ambos con motores de gasolina. El segundo adopta una presentación de aspecto más campero, pero no es un todoterreno.',
    summary: 'La oferta del A1 se basa en motores TFSI de gasolina. Audi mantiene las dos carrocerías en su índice, aunque la configuración de motor y la posibilidad de pedir una unidad nueva pueden depender del stock y del concesionario.',
    usage: 'El Sportback encaja mejor si se busca un compacto urbano de cinco puertas; el allstreet añade una imagen crossover y mayor facilidad para afrontar accesos irregulares, sin convertirlo en un 4x4. Antes de comparar precio o consumo, confirma el año-modelo y el motor de la unidad concreta: las versiones disponibles han cambiado a lo largo de la vida del A1.',
    versions: [version('A1 Sportback / A1 allstreet', 'Gasolina TFSI; potencia según versión y año-modelo', 'Según motor', 'Consultar ficha de la unidad', 'Motor de combustión', 'Consultar ficha de la unidad', 'Audi España mantiene ambas carrocerías en el catálogo; la oferta de vehículo nuevo puede ser residual.')],
    facts: [{ label: 'Carrocerías del catálogo', value: 'Sportback y allstreet' }, { label: 'Plazas', value: '5' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Disponibilidad', value: 'Consultar stock y concesionario' }],
    figures: [{ label: 'Modelos listados por Audi España', value: '2 carrocerías' }],
    officialUrl: audi + '/modelos/a1/',
    sources: [source('Modelos Audi A1 en España', audi + '/modelos/a1/')],
    image: photo('a1', 'Audi A1 Sportback de color rojo fotografiado junto al puerto.', 'Audi A1 Sportback 30 TFSI (2023) (53334141219).jpg', 1280, 768, 'Charles from Port Chester, New York', 'CC BY 2.0', 'https://www.flickr.com/people/43494963@N03/'),
    specNote: 'La página de gama consultada no muestra un único motor común a todas las unidades del A1. Por eso no se trasladan cifras históricas a las unidades actualmente disponibles.',
  },
  {
    slug: 'a2-e-tron', name: 'A2 e-tron', body: 'Compacto eléctrico',
    intro: 'El Audi A2 e-tron es un compacto totalmente eléctrico pensado para combinar un formato contenido con una autonomía homologada elevada. Audi España ya ofrece ficha, solicitud de oferta y configurador, por lo que se incluye en la gama consultada; la fecha de entrega efectiva debe confirmarse con la marca.',
    summary: 'El A2 e-tron utiliza propulsión eléctrica. Audi publica una potencia máxima de 240 kW y una autonomía máxima de hasta 643 km WLTP. No hay cilindrada térmica ni un régimen de par comparable al de un motor de gasolina o diésel.',
    usage: 'La autonomía WLTP sirve para comparar versiones con el mismo procedimiento, pero no equivale a una distancia garantizada en carretera. Temperatura, velocidad, llantas y climatización afectan al alcance real. Si se valora como coche principal, conviene revisar también la carga disponible en casa y en los recorridos habituales.',
    versions: [version('A2 e-tron', 'Hasta 240 kW (326 CV)', 'No aplica: eléctrico', 'No publicado en la ficha consultada', 'Motor eléctrico', 'No aplica', 'Autonomía máxima declarada: hasta 643 km WLTP.')],
    facts: [{ label: 'Carrocería', value: 'Compacto eléctrico' }, { label: 'Propulsión', value: '100 % eléctrica' }, { label: 'Potencia máxima publicada', value: '240 kW' }, { label: 'Autonomía máxima publicada', value: '643 km WLTP' }],
    figures: [{ label: 'Consumo combinado publicado', value: '12,8–15,6 kWh/100 km, según configuración' }],
    officialUrl: audi + '/modelos/a2-e-tron/a2-e-tron/',
    sources: [source('Audi A2 e-tron: autonomía, carga y oferta', audi + '/modelos/a2-e-tron/a2-e-tron/'), source('Gama eléctrica de Audi España', audi + '/electromovilidad/electricos/')],
    image: photo('a2-e-tron', 'Audi A2 e-tron gris en una vista lateral de tres cuartos.', 'Audi A2 e-tron IMG 20261009.jpg', 1280, 685, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'a3', name: 'A3', body: 'Compacto y berlina',
    intro: 'La familia A3 cubre varios usos dentro de un tamaño compacto: Sportback, Sedan y allstreet. La oferta oficial añade versiones e-hybrid enchufables y las variantes deportivas S3 y RS 3, de modo que la denominación A3 no identifica una sola carrocería ni un único tipo de motor.',
    summary: 'La gama española combina gasolina y diésel con híbridos enchufables. Como referencias técnicas, el 35 TFSI de 1,5 litros ofrece 150 CV y 250 Nm; el 35 TDI desarrolla 150 CV. El A3 Sportback e-hybrid se ofrece con sistemas de 204 y 272 CV, y las versiones S3 y RS 3 tienen calibraciones específicas.',
    usage: 'Para uso diario, la carrocería y el tipo de trayecto importan tanto como la potencia: el Sportback facilita cargar objetos, el Sedan prioriza el formato berlina y el allstreet eleva ligeramente su planteamiento. Un e-hybrid puede aprovechar su parte eléctrica en desplazamientos cortos si se recarga con regularidad; en viajes largos debe valorarse también su consumo con poca batería.',
    versions: [
      version('A3 35 TFSI', '110 kW (150 CV)', '1.498 cm³, gasolina', '250 Nm', 'Motor de gasolina', '1.500–3.500 rpm'),
      version('A3 35 TDI', '110 kW (150 CV)', '1.968 cm³, diésel', '360 Nm', 'Motor diésel', 'Según ficha de motor'),
      version('A3 Sportback e-hybrid', '150 kW (204 CV) o 200 kW (272 CV) de sistema', '1.498 cm³ + motor eléctrico', 'Hasta 400 Nm de sistema', 'Sistema híbrido enchufable', 'El régimen corresponde al motor térmico; el par de sistema no se expresa con un régimen único'),
      version('S3 Sportback / Sedan', '245 kW (333 CV)', '1.984 cm³, gasolina', '420 Nm', 'Motor TFSI', 'No publicado en la página española consultada'),
      version('RS 3 Sportback / Sedan', 'Gasolina TFSI de cinco cilindros; consultar configuración vigente', '1.984 cm³', 'Consultar versión', 'Motor de combustión', 'Consultar ficha técnica del año-modelo'),
    ],
    facts: [{ label: 'Carrocerías y líneas', value: 'A3 Sportback, Sedan, allstreet, S3 Sportback/Sedan y RS 3 Sportback/Sedan' }, { label: 'Variantes enchufables', value: 'A3 Sportback e-hybrid y allstreet e-hybrid' }, { label: 'Tecnologías', value: 'Gasolina, diésel e híbrido enchufable' }, { label: 'Variantes de catálogo', value: '9' }],
    figures: [{ label: 'A3 e-hybrid', value: 'Versiones de 204 y 272 CV de potencia de sistema' }, { label: 'S3', value: '333 CV y 420 Nm publicados por Audi España' }],
    officialUrl: audi + '/modelos/a3/',
    sources: [source('Gama y versiones del Audi A3', audi + '/modelos/a3/'), source('Dossier de Audi A3 Sportback y Sedan', 'https://prensa.audi.es/wp-content/uploads/2024/04/Dossier-Audi-A3-Sportback-y-A3-Sedan.pdf'), source('Configurador A3 Sportback e-hybrid', audi + '/modelos/a3/a3-sportback-e-hybrid/configurador/'), source('Datos del Audi S3 Sportback', audi + '/modelos/a3/s3-sportback-2025/')],
    image: photo('a3', 'Audi A3 Sportback de generación reciente fotografiado de frente.', 'Audi A3 Sportback (8Y, Facelift) – f 03102025.jpg', 1280, 626, 'M 93', 'CC BY-SA 3.0 Alemania', 'https://commons.wikimedia.org/wiki/User:M_93'),
    specNote: 'La lista de la marca comprende nueve productos y varias carrocerías. Las cifras de la tabla son referencias identificadas en las fuentes citadas, no una ficha única aplicable a cada acabado.',
  },
  {
    slug: 'a5', name: 'A5', body: 'Berlina y familiar',
    intro: 'El A5 actual reúne carrocerías de cuatro puertas y familiares Avant, con motores de gasolina y diésel, versiones híbridas enchufables y variantes deportivas S5 y RS 5. Esta ficha agrupa la familia para que se pueda comparar su planteamiento sin confundir carrocerías o sistemas de propulsión.',
    summary: 'La gama convencional combina motores TFSI y TDI con hibridación ligera, y la oferta incluye A5 e-hybrid. En el escalón deportivo, S5 y S5 Avant montan un V6 TFSI de 3,0 litros MHEV plus con 270 kW y 550 Nm. Audi también muestra RS 5 y RS 5 Avant híbridos enchufables en el catálogo.',
    usage: 'El A5 Avant ofrece una silueta familiar y un acceso de carga más práctico; la berlina conserva un formato más bajo. Si se compara el e-hybrid con una versión de combustión, el ahorro depende de cargarlo y de cuántos kilómetros se hagan en eléctrico. Las versiones S y RS responden a una prioridad distinta: prestaciones y tracción quattro.',
    versions: [
      version('A5 / A5 Avant TFSI o TDI MHEV', 'Potencia según motor y carrocería', 'Motores de combustión de 2,0 litros según versión', 'Consultar motor concreto', 'Motor térmico', 'Consultar ficha de cada configuración'),
      version('A5 e-hybrid / A5 Avant e-hybrid', 'Híbrido enchufable; potencia según versión', 'Gasolina + motor eléctrico', 'Consultar sistema y versión', 'Motor térmico / sistema híbrido', 'El régimen no es común al conjunto híbrido'),
      version('S5 / S5 Avant', '270 kW (367 CV)', '2.995 cm³, V6 TFSI MHEV plus', '550 Nm', 'Motor V6 de gasolina', 'No publicado en la página consultada'),
      version('RS 5 / RS 5 Avant', 'Híbrido enchufable; cifra de sistema según catálogo vigente', 'V6 TFSI de 2,9 litros + motor eléctrico', 'Consultar versión', 'Sistema híbrido enchufable', 'No se extrapolan cifras entre carrocerías o generaciones'),
    ],
    facts: [{ label: 'Carrocerías', value: 'A5 y A5 Avant' }, { label: 'Versiones', value: 'Convencional, e-hybrid, S5 y RS 5' }, { label: 'Tecnologías', value: 'Gasolina, diésel, MHEV y PHEV' }, { label: 'Productos en el catálogo', value: '8' }],
    figures: [{ label: 'S5', value: 'V6 TFSI 3.0, 270 kW y 550 Nm' }],
    officialUrl: audi + '/modelos/a5/',
    sources: [source('Gama y versiones del Audi A5', audi + '/modelos/a5/'), source('Datos del Audi S5', audi + '/modelos/a5/s5/'), source('Datos del Audi S5 Avant', audi + '/modelos/a5/s5-avant/'), source('Tecnología del Audi RS 5', audi + '/modelos/a5/rs-5/tecnologia/')],
    image: photo('a5', 'Audi A5 rojo fotografiado en una calle urbana.', 'Moscow, Audi A5 red, Sept 2025 01.jpg', 1280, 722, 'Retired electrician', 'CC0 1.0'),
    specNote: 'Audi agrupa ocho productos bajo la familia A5. La tabla separa las referencias deportivas de las motorizaciones de volumen; consulta el configurador para potencia, par, consumo y equipamiento de cada unidad.',
  },
  {
    slug: 'a6', name: 'A6', body: 'Berlina y familiar',
    intro: 'La familia A6 está pensada para recorrer distancias largas con una berlina o un Avant; la línea allroad añade una puesta a punto orientada a caminos y superficies irregulares. Audi España lista también e-hybrid y RS 6 Avant dentro del catálogo A6, aunque no todas las variantes tienen la misma disponibilidad.',
    summary: 'La gama combina motores diésel, versiones e-hybrid y carrocerías A6, Avant y allroad. Audi publica 220 kW para el A6 allroad y ofrece dos variantes RS 6 Avant de gasolina. En algunas carrocerías la marca mantiene unidades configurables; en otras, la disponibilidad depende del stock.',
    usage: 'La elección entre berlina, Avant y allroad debe partir del espacio que se necesita y del tipo de carretera. El Avant facilita cargar equipaje voluminoso; el allroad suma altura y suspensión neumática adaptativa. Para comparar el PHEV con diésel, utiliza el patrón de recarga real y no solo el consumo ponderado WLTP.',
    versions: [
      version('A6 / A6 Avant diésel', 'Gama TDI; potencia según versión', 'Diésel; cilindrada según motor', 'Consultar ficha de versión', 'Motor diésel', 'Consultar ficha de versión'),
      version('A6 / A6 Avant e-hybrid; A6 allroad e-hybrid', 'Híbrido enchufable; potencia según configuración', 'Gasolina + motor eléctrico', 'Consultar versión', 'Sistema híbrido enchufable', 'Sin régimen único para el par del sistema'),
      version('A6 allroad', 'Hasta 220 kW publicados', 'Motor de combustión; versión según configurador', 'Consultar ficha de versión', 'Motor térmico', 'No publicado en la página consultada'),
      version('RS 6 Avant / RS 6 Avant performance', 'Gasolina V8; dos niveles de prestaciones', '3.996 cm³, V8 biturbo', 'Consultar versión exacta', 'Motor V8 TFSI', 'Consultar ficha del año-modelo'),
    ],
    facts: [{ label: 'Carrocerías', value: 'A6, Avant y allroad' }, { label: 'Versiones', value: 'A6 y Avant e-hybrid, allroad, allroad e-hybrid, RS 6 Avant y RS 6 Avant performance' }, { label: 'Tecnologías', value: 'Diésel, híbrido enchufable y gasolina de altas prestaciones' }, { label: 'Productos en el catálogo', value: '8' }],
    figures: [{ label: 'A6 allroad', value: '220 kW de potencia máxima publicada por Audi' }, { label: 'RS 6 Avant', value: 'Audi anuncia versiones RS 6 y RS 6 performance' }],
    officialUrl: audi + '/modelos/a6/',
    sources: [source('Gama y versiones del Audi A6', audi + '/modelos/a6/'), source('Audi A6 allroad', audi + '/modelos/a6/a6-allroad/'), source('Audi RS 6 Avant', audi + '/modelos/a6/rs-6-avant/')],
    image: photo('a6', 'Audi A6 de generación reciente expuesto en una feria del automóvil.', 'Audi A6 C9 IAA 2025 DSC 1917.jpg', 1280, 603, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
    specNote: 'La gama consultada incluye ocho productos. Los datos mecánicos de una carrocería o generación no se trasladan a las demás; comprueba la ficha de motor y el stock del modelo exacto antes de comparar.',
  },
  {
    slug: 'a6-e-tron', name: 'A6 e-tron', body: 'Berlina y familiar eléctrica',
    intro: 'El A6 e-tron es la alternativa eléctrica de la familia A6 y se ofrece como Sportback y Avant. La denominación S6 identifica versiones eléctricas de mayores prestaciones, no una variante de combustión del A6.',
    summary: 'Audi España ofrece cuatro carrocerías: A6 Avant e-tron, A6 Sportback e-tron, S6 Avant e-tron y S6 Sportback e-tron. El dossier técnico distingue propulsión trasera y quattro, con potencias de sistema de 210, 270, 315 y 370 kW según versión.',
    usage: 'El Sportback prioriza la silueta aerodinámica, mientras que el Avant combina propulsión eléctrica con una carrocería familiar. La autonomía varía con carrocería, batería, llantas y equipamiento; una cifra máxima WLTP no sustituye a una estimación de ruta en invierno o a velocidad de autopista.',
    versions: [
      version('A6 e-tron', '210 kW (285 CV); hasta 240 kW con Launch Control', 'No aplica: eléctrico', '510 Nm', 'Sistema eléctrico', 'No aplica', 'Propulsión trasera; batería neta de 75,8 kWh en la configuración técnica citada.'),
      version('A6 e-tron performance', '270 kW (367 CV); hasta 280 kW con Launch Control', 'No aplica: eléctrico', '580 Nm', 'Sistema eléctrico', 'No aplica', 'Propulsión trasera; batería neta de 94,9 kWh en la configuración técnica citada.'),
      version('A6 e-tron quattro', '315 kW (428 CV); hasta 340 kW con Launch Control', 'No aplica: eléctrico', '735 Nm', 'Sistema eléctrico', 'No aplica', 'Tracción quattro; batería neta de 94,9 kWh en la configuración citada.'),
      version('S6 e-tron', '370 kW (503 CV); hasta 405 kW con Launch Control', 'No aplica: eléctrico', '835 Nm', 'Sistema eléctrico', 'No aplica', 'Las variantes Avant y Sportback comparten familia de propulsión; la autonomía depende de la carrocería.'),
    ],
    facts: [{ label: 'Carrocerías', value: 'Sportback y Avant' }, { label: 'Variantes', value: 'A6 e-tron y S6 e-tron' }, { label: 'Plazas', value: '5' }, { label: 'Propulsión', value: 'Eléctrica, trasera o quattro' }],
    figures: [{ label: 'Batería neta citada en la gama', value: '75,8 o 94,9 kWh, según versión' }, { label: 'Potencias de sistema', value: '210–370 kW; el Launch Control puede elevar temporalmente la cifra' }],
    officialUrl: audi + '/modelos/a6-e-tron/',
    sources: [source('Gama del Audi A6 e-tron', audi + '/modelos/a6-e-tron/'), source('Dossier técnico oficial del Audi A6 e-tron', 'https://prensa.audi.es/wp-content/uploads/2024/12/Dossier-Audi-A6-e-tron.pdf'), source('Gama eléctrica de Audi España', audi + '/electromovilidad/electricos/')],
    image: photo('a6-e-tron', 'Audi A6 Avant e-tron fotografiado en una exposición.', 'Audi A6 Avant e-tron DSC 7425.jpg', 1280, 766, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'e-tron-gt', name: 'e-tron GT', body: 'Gran turismo eléctrico',
    intro: 'El e-tron GT es un gran turismo eléctrico de cuatro puertas que combina una carrocería baja con tracción quattro. La gama española contempla e-tron GT quattro, S e-tron GT, RS e-tron GT y RS e-tron GT performance.',
    summary: 'Las cuatro variantes son eléctricas y utilizan una batería neta de 97 kWh en las fichas actuales consultadas. Audi publica hasta 430 kW en Launch Control para el e-tron GT quattro, 500 kW para el S y 630 kW para el RS. El configurador del RS performance muestra 620 kW.',
    usage: 'Su planteamiento de gran turismo invita a valorar a la vez prestaciones, comodidad y planificación de carga. La potencia máxima de Launch Control es temporal y no debe confundirse con la potencia continua. En viajes, la carga rápida depende de la temperatura de la batería y de disponer de un punto compatible.',
    versions: [
      version('e-tron GT quattro', 'Hasta 430 kW en Launch Control', 'No aplica: eléctrico', 'Consultar ficha de versión', 'Sistema eléctrico', 'No aplica', 'Batería neta de 97 kWh; autonomía publicada de hasta 622 km WLTP.'),
      version('S e-tron GT', 'Hasta 500 kW (680 CV) con Launch Control', 'No aplica: eléctrico', '740 Nm', 'Sistema eléctrico', 'No aplica', 'Potencia de referencia de la lista técnica Audi MY25.'),
      version('RS e-tron GT', 'Hasta 630 kW (857 CV) con Launch Control', 'No aplica: eléctrico', 'Consultar ficha vigente', 'Sistema eléctrico', 'No aplica', 'La potencia incluye el modo Launch Control.'),
      version('RS e-tron GT performance', '620 kW en el configurador actual', 'No aplica: eléctrico', 'Consultar ficha vigente', 'Sistema eléctrico', 'No aplica', 'El valor mostrado en configurador no se equipara automáticamente al pico Launch Control de otras versiones.'),
    ],
    facts: [{ label: 'Carrocería', value: 'Gran turismo eléctrico de 4 puertas' }, { label: 'Variantes', value: 'quattro, S, RS y RS performance' }, { label: 'Batería neta', value: '97 kWh' }, { label: 'Carga DC máxima publicada', value: 'Hasta 320 kW' }],
    figures: [{ label: 'Autonomía máxima publicada', value: 'Hasta 622 km WLTP en e-tron GT quattro' }, { label: 'Carga rápida', value: 'Audi anuncia 10–80 % en 18 min en condiciones adecuadas' }],
    officialUrl: audi + '/modelos/e-tron-gt/',
    sources: [source('Gama Audi e-tron GT', audi + '/modelos/e-tron-gt/'), source('Audi e-tron GT quattro', audi + '/modelos/e-tron-gt/e-tron-gt/'), source('Audi S e-tron GT', audi + '/modelos/e-tron-gt/s-e-tron-gt/'), source('Audi RS e-tron GT', audi + '/modelos/e-tron-gt/rs-e-tron-gt/'), source('Configurador RS e-tron GT performance', audi + '/modelos/e-tron-gt/rs-e-tron-gt-performance/configurador/'), source('Listado técnico Audi MY25', 'https://prensa.audi.es/wp-content/uploads/2013/10/Listado-de-Precios-Audi-Abril-2025.pdf')],
    image: photo('e-tron-gt', 'Audi RS e-tron GT Performance en color verde oscuro.', 'Audi RS e-tron GT Performance Bedford Green Metallic 01.jpg', 1280, 853, 'Ethan Llamas', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Ethan_Llamas'),
  },
  {
    slug: 'q2', name: 'Q2', body: 'SUV urbano',
    intro: 'El Q2 es el SUV más compacto de Audi y la marca muestra dos propuestas en su página española: Q2 y SQ2 TFSI. Esta ficha conserva la distinción entre el SUV de uso general y la versión deportiva, cuya potencia y coste de uso son muy diferentes.',
    summary: 'El Q2 se ofrece con motores de gasolina y la gama incluye el SQ2 TFSI. Como referencia publicada por Audi para el Q2 35 TFSI, el 1.5 de gasolina desarrolla 150 CV y 250 Nm; el SQ2 alcanza 300 CV y 400 Nm. La disponibilidad de unidades nuevas puede depender del stock.',
    usage: 'El Q2 tiene unas dimensiones más contenidas que los SUV Q3 y Q5, lo que puede facilitar el uso urbano. El SQ2 incorpora un motor y una puesta a punto deportivos; no es simplemente un acabado estético. Comprueba el año, la transmisión y la tracción de cada unidad, especialmente si se consultan anuncios de segunda mano.',
    versions: [
      version('Q2 35 TFSI', '110 kW (150 CV)', '1.498 cm³, gasolina', '250 Nm', 'Motor TFSI', '1.500–3.500 rpm', 'Datos de ficha Audi para la motorización 35 TFSI.'),
      version('SQ2 TFSI', '221 kW (300 CV)', '1.984 cm³, gasolina', '400 Nm', 'Motor TFSI', 'No publicado en la página española consultada', 'Tracción quattro y cambio S tronic según ficha de modelo.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Versiones listadas', value: 'Q2 y SQ2 TFSI' }, { label: 'Disponibilidad', value: 'Consultar stock de vehículo nuevo' }],
    figures: [{ label: 'Q2 35 TFSI', value: '150 CV y 250 Nm' }, { label: 'SQ2', value: '300 CV y 400 Nm' }],
    officialUrl: audi + '/modelos/q2/',
    sources: [source('Gama del Audi Q2', audi + '/modelos/q2/'), source('Audi SQ2 TFSI', audi + '/modelos/q2/sq2/'), source('Información técnica del Q2 publicada por Audi MediaServices', 'https://prensa.audi.es/2020/10/21/audi-q2-el-modelo-compacto-de-la-familia-q-se-actualiza-al-detalle-2/')],
    image: photo('q2', 'Audi Q2 azul fotografiado desde el frontal.', 'Audi Q2 Facelift IMG 4937.jpg', 1280, 710, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
    specNote: 'La página española mantiene el Q2 y SQ2 en el catálogo. La cifra del Q2 35 TFSI procede de una ficha oficial publicada en 2020; confirma que corresponde al motor y año de la unidad que se esté valorando.',
  },
  {
    slug: 'q3', name: 'Q3', body: 'SUV compacto',
    intro: 'El Q3 es el SUV compacto de Audi y se ofrece como SUV convencional o Sportback. En ambas carrocerías hay motores de gasolina y diésel; también existe el Q3 e-hybrid enchufable, pensado para quienes puedan recargar con frecuencia.',
    summary: 'La ficha de motores española distingue TFSI de 150, 204 y 265 CV, TDI de 150 CV y e-hybrid de 272 CV. El híbrido enchufable combina un 1.5 TFSI de 177 CV y 250 Nm con un motor eléctrico de 85 kW y 330 Nm; Audi publica 400 Nm de par de sistema.',
    usage: 'La carrocería Sportback cambia la línea del techo y puede condicionar el espacio para la cabeza y el maletero frente al SUV. En el e-hybrid, los consumos homologados presuponen una batería cargada; para un uso sin recargas frecuentes conviene mirar también el dato con la batería descargada.',
    versions: [
      version('Q3 TFSI 110 kW', '150 CV', '1.498 cm³, gasolina', '250 Nm', 'Motor TFSI', '1.500–3.500 rpm'),
      version('Q3 TDI 110 kW', '150 CV', '1.968 cm³, diésel', '360 Nm', 'Motor TDI', '1.600–2.750 rpm'),
      version('Q3 TFSI quattro 150 / 195 kW', '204 / 265 CV', '1.984 cm³, gasolina', '350 / 400 Nm', 'Motor TFSI', '1.500–4.400 / 1.650–4.350 rpm'),
      version('Q3 e-hybrid 200 kW', '272 CV de sistema', '1.498 cm³ + motor eléctrico', '400 Nm de sistema', 'Motor TFSI: 250 Nm; eléctrico: 330 Nm', 'Térmico: 1.500–4.000 rpm; motor eléctrico sin régimen comparable', 'Batería neta de 19,7 kWh y hasta 119 km eléctricos WLTP en SUV.'),
    ],
    facts: [{ label: 'Carrocerías', value: 'Q3 SUV y Q3 Sportback' }, { label: 'Plazas', value: '5' }, { label: 'Motorizaciones', value: 'Gasolina, diésel e híbrida enchufable' }, { label: 'Variantes de catálogo', value: '4' }],
    figures: [{ label: 'Q3 e-hybrid', value: '272 CV, 400 Nm de sistema y hasta 119 km eléctricos WLTP' }, { label: 'Batería e-hybrid', value: '25,7 kWh brutos / 19,7 kWh netos' }],
    officialUrl: audi + '/modelos/q3/',
    sources: [source('Gama y configurador del Audi Q3', audi + '/modelos/q3/'), source('Dossier de motores del nuevo Audi Q3', 'https://prensa.audi.es/wp-content/uploads/2025/08/El-nuevo-Audi-Q33.pdf'), source('Ficha técnica Audi Q3 SUV e-hybrid', 'https://prensa.audi.es/wp-content/uploads/2025/10/Audi-Q3-SUV-e-hybrid.pdf'), source('Audi Q3 SUV e-hybrid', audi + '/modelos/q3/q3-e-hybrid/')],
    image: photo('q3', 'Audi Q3 de generación reciente expuesto en el espacio Audi de IAA Mobility 2025.', 'Audi Q3 FJ IAA 2025 DSC 2505.jpg', 1280, 701, 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'q4-e-tron', name: 'Q4 e-tron', body: 'SUV compacto eléctrico',
    intro: 'El Q4 e-tron es el SUV compacto eléctrico de Audi y su carrocería Sportback ofrece una línea de techo más inclinada. Las dos formas comparten la orientación eléctrica, aunque los consumos, la autonomía y el espacio útil pueden cambiar con la configuración.',
    summary: 'Audi España lista el Q4 SUV e-tron y el Q4 Sportback e-tron. La ficha del modelo actualizado publica hasta 220 kW de potencia máxima y una autonomía de hasta 563 km WLTP para el SUV en la oferta consultada. No hay cilindrada ni régimen de par de motor térmico.',
    usage: 'Para decidir entre SUV y Sportback, compara el acceso al maletero y la visibilidad trasera además de la autonomía. Si se usa para viajar, revisa la autonomía combinada WLTP, la potencia de carga de la versión concreta y la ubicación de cargadores rápidos en las rutas frecuentes.',
    versions: [version('Q4 SUV e-tron / Q4 Sportback e-tron', 'Hasta 220 kW, según versión', 'No aplica: eléctrico', 'Consultar motor y tracción de la versión', 'Sistema eléctrico', 'No aplica', 'La potencia, batería y autonomía varían por motor, carrocería y equipamiento.')],
    facts: [{ label: 'Carrocerías', value: 'SUV y Sportback' }, { label: 'Propulsión', value: '100 % eléctrica' }, { label: 'Autonomía máxima publicada', value: 'Hasta 563 km WLTP para el SUV actualizado' }, { label: 'Carga rápida', value: 'Audi anuncia hasta 165 kW DC en la ficha consultada' }],
    figures: [{ label: 'Consumo combinado publicado', value: '14,8–19,1 kWh/100 km según carrocería y configuración' }],
    officialUrl: audi + '/modelos/q4-e-tron/',
    sources: [source('Configurador del Audi Q4 e-tron', audi + '/modelos/q4-e-tron/'), source('Audi Q4 SUV e-tron: potencia y autonomía', audi + '/modelos/q4-e-tron/q4-e-tron/'), source('Gama eléctrica Audi España', audi + '/electromovilidad/electricos/')],
    image: photo('q4-e-tron', 'Audi Q4 e-tron actualizado de color gris en carretera.', '2027 Audi Q4 e-tron IMG 7155.jpg', 1280, 752, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'q5', name: 'Q5', body: 'SUV mediano',
    intro: 'El Q5 es el SUV mediano de Audi y está disponible como SUV y Sportback. La gama combina motores de gasolina y diésel con hibridación ligera, híbridos enchufables y las variantes deportivas SQ5.',
    summary: 'El catálogo español recoge seis productos. En la gama e-hybrid, Audi publica una versión de 220 kW (299 CV) y 450 Nm de sistema. El SQ5 equipa un V6 TFSI de 3,0 litros MHEV plus con 270 kW y 550 Nm. Las versiones convencionales cambian según carrocería y motor.',
    usage: 'El SUV ofrece una silueta más tradicional; el Sportback prioriza una línea de techo descendente. En ciudad, las dimensiones de este segmento pueden ser relevantes para aparcar. En el e-hybrid, valora si puedes cargarlo en casa o en el trabajo; en el SQ5, el consumo y los neumáticos responden a una orientación de altas prestaciones.',
    versions: [
      version('Q5 SUV / Q5 Sportback TFSI o TDI', 'Gasolina o diésel; potencia según versión', 'Motores según configurador', 'Consultar ficha de versión', 'Motor de combustión', 'Consultar ficha de versión'),
      version('Q5 e-hybrid quattro', '220 kW (299 CV) de sistema', '1.984 cm³ + motor eléctrico', '450 Nm de sistema', 'Motor TFSI y motor eléctrico', 'Par de sistema sin régimen único', 'Batería neta de 20,7 kWh en ficha técnica del Sportback.'),
      version('SQ5 SUV / SQ5 Sportback', '270 kW (367 CV)', '2.995 cm³, V6 TFSI MHEV plus', '550 Nm', 'Motor V6 de gasolina', 'No publicado en la página española consultada'),
    ],
    facts: [{ label: 'Carrocerías', value: 'SUV y Sportback' }, { label: 'Plazas', value: '5' }, { label: 'Tecnologías', value: 'Gasolina, diésel, MHEV plus y PHEV' }, { label: 'Productos en el catálogo', value: '6' }],
    figures: [{ label: 'Q5 e-hybrid', value: '299 CV y 450 Nm de sistema en la ficha consultada' }, { label: 'SQ5', value: 'V6 TFSI 3.0, 270 kW y 550 Nm' }],
    officialUrl: audi + '/modelos/q5/',
    sources: [source('Gama y configurador del Audi Q5', audi + '/modelos/q5/'), source('Ficha técnica del Audi Q5 Sportback e-hybrid', 'https://prensa.audi.es/wp-content/uploads/2025/07/FT-Audi-Q5-Sportback-e-hybrid.pdf'), source('Audi SQ5 SUV', audi + '/modelos/q5/sq5-suv/'), source('Tecnología del Audi SQ5', audi + '/modelos/q5/sq5-suv/tecnologia/')],
    image: photo('q5', 'Audi Q5 negro fotografiado de frente en una calle.', 'Moscow, Audi Q5 black, Sept 2025 01.jpg', 1280, 794, 'Retired electrician', 'CC0 1.0'),
    specNote: 'La tabla toma los datos PHEV de la ficha técnica del Q5 Sportback e-hybrid y los del SQ5 de la página española. No deben extrapolarse a todas las versiones gasolina y diésel.',
  },
  {
    slug: 'q6-e-tron', name: 'Q6 e-tron', body: 'SUV eléctrico',
    intro: 'El Q6 e-tron es el SUV eléctrico de tamaño medio-grande de Audi. Su gama diferencia carrocerías SUV y Sportback, además de las versiones SQ6, con mayor potencia. Todas las variantes de esta familia son eléctricas.',
    summary: 'Audi España muestra cuatro productos: Q6 SUV e-tron, Q6 Sportback e-tron, SQ6 SUV e-tron y SQ6 Sportback e-tron. Las fichas de gama ofrecen varias potencias y baterías; como referencia técnica, el SQ6 publica hasta 360 kW y 820 Nm, mientras que las versiones Q6 varían por batería y tracción.',
    usage: 'El Q6 e-tron puede encajar como coche familiar eléctrico para trayectos diarios y viajes, pero conviene comparar la autonomía de la carrocería y batería elegidas. Las versiones SQ6 aumentan prestaciones y pueden consumir más energía. El dato de carga máxima solo se alcanza en condiciones compatibles y no representa la potencia sostenida durante toda la sesión.',
    versions: [
      version('Q6 e-tron', 'Varias potencias; consultar motor de cada configuración', 'No aplica: eléctrico', 'Según motor', 'Sistema eléctrico', 'No aplica', 'Propulsión y batería cambian según versión.'),
      version('Q6 e-tron performance', '225 kW en la ficha de gama técnica citada', 'No aplica: eléctrico', '485 Nm', 'Sistema eléctrico', 'No aplica', 'Batería neta de 94,9 kWh en el listado técnico de referencia.'),
      version('Q6 e-tron quattro', '285 kW', 'No aplica: eléctrico', '535 Nm', 'Sistema eléctrico', 'No aplica', 'Tracción quattro y batería neta de 94,9 kWh en la ficha citada.'),
      version('SQ6 e-tron', '360 kW (490 CV); hasta 380 kW con overboost', 'No aplica: eléctrico', '820 Nm', 'Sistema eléctrico', 'No aplica', 'Cifras de la lista técnica Audi MY25; la autonomía depende de carrocería y ruedas.'),
    ],
    facts: [{ label: 'Carrocerías', value: 'SUV y Sportback' }, { label: 'Versiones', value: 'Q6 e-tron y SQ6 e-tron' }, { label: 'Propulsión', value: '100 % eléctrica' }, { label: 'Productos en el catálogo', value: '4' }],
    figures: [{ label: 'Batería neta de referencia', value: '94,9 kWh en las versiones citadas' }, { label: 'Carga DC máxima publicada', value: 'Hasta 270 kW en dossier técnico' }],
    officialUrl: audi + '/modelos/q6-e-tron/',
    sources: [source('Gama y configurador Audi Q6 e-tron', audi + '/modelos/q6-e-tron/'), source('Dossier técnico oficial Audi Q6 e-tron', 'https://prensa.audi.es/wp-content/uploads/2024/07/Dossier-Audi-Q6-e-tron.pdf'), source('Listado técnico Audi MY25', 'https://prensa.audi.es/wp-content/uploads/2013/10/Listado-de-Precios-Audi-Abril-2025.pdf')],
    image: photo('q6-e-tron', 'Audi Q6 e-tron gris en una fotografía exterior.', 'Audi Q6 e-tron IMG 7958.jpg', 1280, 852, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
    specNote: 'Las cifras técnicas se identifican por versión y corresponden a documentos oficiales de referencia MY25. Audi actualiza configuraciones; confirma la ficha del vehículo que se ofrece actualmente en España.',
  },
  {
    slug: 'q7', name: 'Q7', body: 'SUV de hasta 7 plazas',
    intro: 'El Q7 es un SUV grande que se puede configurar con cinco o siete plazas. Audi España lista una variante diésel y otra híbrida enchufable dentro de la gama consultada; las plazas disponibles y el volumen de carga dependen de la configuración.',
    summary: 'La página española del Q7 publica hasta 220 kW para la versión SUV y una variante TFSI e enchufable de hasta 360 kW. El catálogo oficial recoge dos productos. La motorización concreta, el número de plazas y el equipamiento se deben confirmar en el configurador o en la unidad ofertada.',
    usage: 'Con siete plazas ocupadas queda menos espacio para equipaje que con la configuración de cinco plazas. Si se comparan los costes de la versión híbrida enchufable y la diésel, deben incluirse la recarga habitual, el peso del vehículo y el consumo en carretera con la batería descargada.',
    versions: [
      version('Q7 SUV TDI quattro', 'Hasta 220 kW publicados para la gama SUV', 'Diésel V6; cilindrada según configuración', 'Consultar ficha de motor', 'Motor TDI', 'Consultar ficha de motor'),
      version('Q7 SUV TFSI e quattro', 'Hasta 360 kW de sistema', 'Gasolina + motor eléctrico', 'Consultar ficha de versión', 'Sistema híbrido enchufable', 'Sin régimen único para el par combinado', 'Audi publica 80–84 km de autonomía eléctrica combinada en la página consultada.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV de gran tamaño' }, { label: 'Plazas', value: '5 o 7, según configuración' }, { label: 'Propulsiones', value: 'Diésel y PHEV' }, { label: 'Productos en el catálogo', value: '2' }],
    figures: [{ label: 'Capacidad de carga máxima', value: 'Hasta 2.075 l en la configuración de cinco plazas' }, { label: 'Potencia máxima publicada', value: '220 kW en Q7 SUV; 360 kW en TFSI e' }],
    officialUrl: audi + '/modelos/q7/',
    sources: [source('Configurador y modelos Audi Q7', audi + '/modelos/q7/'), source('Audi Q7 SUV', audi + '/modelos/q7/q7-suv/'), source('Audi Q7 SUV TFSI e', audi + '/modelos/q7/q7-tfsie/')],
    image: photo('q7', 'Audi Q7 gris fotografiado en tres cuartos delantero.', 'Audi Q7 (G8) IMG 8419.jpg', 1280, 688, 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  },
  {
    slug: 'q8', name: 'Q8', body: 'SUV de gran tamaño',
    intro: 'El Q8 es el SUV de gran tamaño de Audi con una línea de techo más inclinada que la del Q7. La gama española consultada combina Q8, Q8 e-hybrid, SQ8, RS Q8 y RS Q8 performance, cada uno con una orientación mecánica y un coste de uso diferentes.',
    summary: 'El Q8 convencional utiliza motores de gasolina o diésel con hibridación ligera. La versión enchufable Q8 e-hybrid combina un V6 y un motor eléctrico con 360 kW y 700 Nm de sistema en la ficha técnica citada. En el extremo deportivo, RS Q8 alcanza 441 kW y 800 Nm; el RS Q8 performance aumenta estas prestaciones.',
    usage: 'El Q8 tiene una posición de conducción alta y una silueta más deportiva que la de un SUV familiar cuadrado, pero la forma de la zaga puede influir en el acceso al maletero. Antes de elegir el e-hybrid, estima cuántos trayectos podrás hacer con carga. Las variantes RS se deben comparar como vehículos de altas prestaciones, no como alternativas de consumo equivalente.',
    versions: [
      version('Q8 SUV TFSI / TDI', 'Gasolina o diésel; potencia según motorización', 'V6; cilindrada según motor', 'Consultar ficha de versión', 'Motor de combustión', 'Consultar ficha de motor'),
      version('Q8 SUV e-hybrid', '360 kW de sistema', 'V6 gasolina + motor eléctrico', '700 Nm de sistema', 'Sistema híbrido enchufable', 'El par combinado no tiene un único régimen', 'Batería neta de 22 kWh en la ficha técnica Q8 55 TFSI e.'),
      version('SQ8 SUV', '373 kW (507 CV)', '3.996 cm³, V8 TFSI', '770 Nm', 'Motor V8 de gasolina', 'Consultar régimen de la versión'),
      version('RS Q8 SUV', '441 kW (600 CV)', '3.996 cm³, V8 biturbo', '800 Nm', 'Motor V8 TFSI', 'No publicado en la página española consultada'),
      version('RS Q8 SUV performance', '471 kW (640 CV)', '3.996 cm³, V8 biturbo', '850 Nm', 'Motor V8 TFSI', 'Consultar ficha de versión'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV de gran tamaño' }, { label: 'Plazas', value: '5' }, { label: 'Versiones', value: 'Q8, e-hybrid, SQ8, RS Q8 y RS Q8 performance' }, { label: 'Tecnologías', value: 'Gasolina, diésel, MHEV y PHEV' }],
    figures: [{ label: 'Q8 55 TFSI e de referencia', value: '360 kW, 700 Nm y batería neta de 22 kWh' }, { label: 'RS Q8', value: '441 kW y 800 Nm según Audi España' }],
    officialUrl: audi + '/modelos/q8/',
    sources: [source('Gama y configurador Audi Q8', audi + '/modelos/q8/'), source('Audi Q8 TFSI e: ficha técnica', 'https://prensa.audi.es/wp-content/uploads/2024/09/Fichas-t%C3%A9cnicas-Audi-Q8-TFSIe.pdf'), source('Audi SQ8 SUV', audi + '/modelos/q8/sq8-suv/'), source('Audi RS Q8 SUV', audi + '/modelos/q8/rs-q8/'), source('Audi RS Q8 SUV performance', audi + '/modelos/q8/rs-q8-suv-performance/')],
    image: photo('q8', 'Audi Q8 quattro S line fotografiado de frente.', 'Audi Q8 quattro S line – f 29032026.jpg', 1280, 668, 'M 93', 'CC BY-SA 3.0 Alemania', 'https://commons.wikimedia.org/wiki/User:M_93'),
    specNote: 'Los datos de la versión e-hybrid proceden de la ficha Q8 55 TFSI e y pueden no corresponder al último año-modelo. Los valores SQ8 y RS Q8 deben verificarse con el configurador de la unidad concreta.',
  },
  {
    slug: 'q9', name: 'Q9', body: 'SUV de gran tamaño y hasta 7 plazas',
    intro: 'El Q9 amplía la gama SUV de Audi hacia un formato de gran tamaño con seis o siete plazas. Audi España ya muestra una página de producto y configurador; el modelo se dirige a quienes necesitan mucho espacio y una tercera fila utilizable.',
    summary: 'La ficha española anuncia un motor V6 con hibridación ligera MHEV plus y una potencia máxima de 220 kW. Audi publica una capacidad de carga de hasta 2.308 litros, seis o siete plazas y una aceleración de 0 a 100 km/h en 6,5 segundos. El par máximo del motor no aparece en la página consultada.',
    usage: 'En un SUV de este tamaño importa comprobar el acceso a la tercera fila, el espacio de equipaje cuando viajan siete personas y las dimensiones de aparcamiento habituales. Los datos de consumo homologado son orientativos; la masa, la carga, la velocidad y el uso urbano influyen mucho en el gasto real.',
    versions: [version('Q9 SUV V6 MHEV plus', 'Hasta 220 kW publicados', 'V6 de gasolina con hibridación ligera', 'No publicado en la ficha consultada', 'Motor V6 / sistema MHEV plus', 'No publicado en la ficha consultada', 'Audi anuncia de 6 a 7 plazas según configuración.')],
    facts: [{ label: 'Carrocería', value: 'SUV de gran tamaño' }, { label: 'Plazas', value: '6 o 7, según configuración' }, { label: 'Motorización anunciada', value: 'V6 gasolina MHEV plus' }, { label: 'Capacidad máxima de carga', value: '2.308 litros' }],
    figures: [{ label: 'Potencia máxima publicada', value: '220 kW' }, { label: 'Consumo combinado publicado', value: '7,4–8,0 l/100 km' }, { label: 'Aceleración 0–100 km/h', value: '6,5 s' }],
    officialUrl: audi + '/modelos/q9/q9-suv/',
    sources: [source('Página oficial del Audi Q9 SUV', audi + '/modelos/q9/q9-suv/'), source('Catálogo de modelos Audi España', catalog)],
    image: photo('q9', 'Audi Q9 fotografiado desde el frontal en tres cuartos.', '2026 Audi Q9 front - Autowizja.jpg', 1280, 704, 'Autowizja', 'CC BY 4.0'),
  },
];

export const audiModels: ModelPageData[] = entries.map(makePage);
