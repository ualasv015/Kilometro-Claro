import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '3 de noviembre de 2026';
const alfaRomeo = 'https://www.alfaromeo.es';
const source = (label: string, url: string) => ({ label, url });

type PhotoLicense = 'CC0 1.0' | 'CC BY-SA 4.0';

function photo(
  slug: string,
  alt: string,
  file: string,
  height: number,
  authorName: string,
  license: PhotoLicense,
  authorUrl?: string,
  caption?: string,
): NonNullable<ModelPageData['image']> {
  const licenseUrl = license === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : 'https://creativecommons.org/licenses/by-sa/4.0/';

  return {
    src: `/images/models/commons/model-alfa-romeo-${slug}.jpg`,
    alt,
    width: 1280,
    height,
    sourceTitle: file,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
    authorName,
    ...(authorUrl ? { authorUrl } : {}),
    licenseName: license,
    licenseUrl,
    caption: caption ?? 'Imagen de referencia; el acabado y el equipamiento pueden diferir de las versiones comercializadas actualmente en España.',
  };
}

function version(
  name: string,
  type: string,
  power: string,
  displacement: string,
  note?: string,
): ModelVersion {
  return { name, type, power, displacement, maxTorque: '', torqueScope: '', torqueRpm: '', ...(note ? { note } : {}) };
}

function page(entry: {
  slug: string;
  name: string;
  titleName: string;
  description: string;
  intro: string;
  summary: string;
  usage: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  officialUrl: string;
  sources: { label: string; url: string }[];
  image: NonNullable<ModelPageData['image']>;
  specNote?: string;
}): ModelPageData {
  return {
    brandSlug: 'alfa-romeo',
    modelSlug: entry.slug,
    title: `${entry.titleName}: motores y versiones en España | Kilómetro Claro`,
    description: entry.description,
    intro: entry.intro,
    powertrainSummary: entry.summary,
    usageNote: entry.usage,
    versions: entry.versions,
    facts: entry.facts,
    officialUrl: entry.officialUrl,
    technicalUrl: entry.sources[entry.sources.length - 1]?.url ?? entry.officialUrl,
    sources: entry.sources,
    image: entry.image,
    ...(entry.specNote ? { specNote: entry.specNote } : {}),
    reviewedAt,
  };
}

const juniorIbrida = `${alfaRomeo}/modelos/junior-ibrida`;
const juniorElettrica = `${alfaRomeo}/modelos/junior-elettrica`;
const tonale = `${alfaRomeo}/modelos/tonale/caracteristicas`;
const giulia = `${alfaRomeo}/modelos/giulia/features`;
const giuliaFaq = `${alfaRomeo}/modelos/giulia/faq`;
const stelvio = `${alfaRomeo}/modelos/stelvio/features`;
const quadrifoglio = `${alfaRomeo}/modelos/quadrifoglio`;
const rangeUpdate = 'https://www.media.stellantis.com/es-es/alfa-romeo/press/alfa-romeo-renueva-su-gama';

export const alfaRomeoModels: ModelPageData[] = [
  page({
    slug: 'junior', name: 'Junior', titleName: 'Alfa Romeo Junior',
    description: 'Versiones del Alfa Romeo Junior en España: Ibrida, Q4 y Elettrica. Consulta potencia, tipo de propulsión y datos oficiales de cada configuración.',
    intro: 'El Junior es el SUV urbano con el que Alfa Romeo amplía su acceso a la marca. Su gama española permite elegir entre hibridación ligera, una variante Ibrida Q4 con tracción total y dos configuraciones eléctricas. La carrocería y el nombre comercial se mantienen, pero el sistema de propulsión cambia de forma sustancial entre versiones.',
    summary: 'La gama incluye Ibrida de 145 CV, Ibrida Q4 de 145 CV, Elettrica de 156 CV y Elettrica Veloce de 280 CV. En el Ibrida, el motor turbo de gasolina de 1,2 litros trabaja con una máquina eléctrica de 48 V y 21 kW; la cifra de 145 CV corresponde al sistema. En el Elettrica la propulsión es exclusivamente eléctrica.',
    usage: 'La versión Ibrida no necesita conectarse a un cargador y puede resultar práctica si se alternan ciudad y carretera. La Q4 añade tracción total mediante electrificación del eje trasero, mientras que las Elettrica requieren planificar la recarga según el uso y la infraestructura disponible. No debe confundirse un híbrido ligero con un híbrido enchufable: el Junior Ibrida no se recarga desde una toma.',
    versions: [
      version('1.2 Ibrida 145 eDCT6', 'Microhíbrido de gasolina 48 V', 'Sistema: 145 CV (107 kW)', '1,2 l', 'Motor eléctrico de 21 kW; potencia publicada como total del sistema.'),
      version('1.2 Ibrida Q4 145 eDCT6', 'Microhíbrido de gasolina 48 V con tracción Q4', 'Sistema: 145 CV (107 kW)', '1,2 l', 'El eje trasero incorpora propulsión eléctrica; potencia total anunciada por Alfa Romeo.'),
      version('Elettrica 156', 'Eléctrico', '156 CV (115 kW)', '—'),
      version('Elettrica Veloce 280', 'Eléctrico', '280 CV (207 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano' },
      { label: 'Propulsiones', value: 'Microhíbrida de 48 V y eléctrica' },
      { label: 'Tracción', value: 'Delantera o total Q4, según versión' },
      { label: 'Recarga externa', value: 'Solo en las versiones Elettrica' },
    ],
    officialUrl: `${alfaRomeo}/modelos/junior`,
    sources: [source('Gama Alfa Romeo Junior', `${alfaRomeo}/modelos/junior`), source('Junior Ibrida: motor y sistema de 48 V', juniorIbrida), source('Junior Elettrica', juniorElettrica), source('Renovación de gama y versiones vigentes', rangeUpdate)],
    image: photo('junior', 'Alfa Romeo Junior fotografiado en una presentación al aire libre.', '2024 Alfa Romeo Junior.jpg', 914, 'Calreyn88', 'CC0 1.0', 'https://commons.wikimedia.org/wiki/User:Calreyn88', 'Fotografía de un Junior de 2024; el acabado y algunos detalles pueden diferir de la gama española actual.'),
  }),
  page({
    slug: 'tonale', name: 'Tonale', titleName: 'Alfa Romeo Tonale',
    description: 'Motores y versiones del Alfa Romeo Tonale en España: híbrido ligero, diésel e híbrido enchufable Q4, con datos contrastados en la gama oficial.',
    intro: 'El Tonale es el SUV compacto de Alfa Romeo y el modelo de la gama con más variedad de propulsiones convencionales e híbridas. En la oferta española conviven un gasolina con hibridación de 48 V, un diésel y un híbrido enchufable con tracción total. Son soluciones distintas en consumo, uso eléctrico y necesidad de recarga.',
    summary: 'Alfa Romeo España publica tres motorizaciones: 1.5 Ibrida VGT de 175 CV (128 kW), 1.6 Diésel de 130 CV (96 kW) y 1.3 Ibrida Plug-In Q4 de 270 CV (197 kW). El primero es un gasolina híbrido ligero de 48 V; el último combina motor térmico y eléctrico y puede recargarse externamente.',
    usage: 'El Ibrida de 48 V no se enchufa y conserva el funcionamiento habitual de un coche de gasolina, con asistencia eléctrica limitada. El diésel está orientado a quien cubre distancias frecuentes por carretera. El Plug-In Q4 puede aprovechar su batería en trayectos diarios si se carga de forma regular; si no, conviene comparar su consumo con la batería descargada y el peso añadido. La autonomía eléctrica homologada no equivale a la de un eléctrico puro.',
    versions: [
      version('1.5 Ibrida VGT DCT7', 'Microhíbrido de gasolina 48 V', 'Sistema: 175 CV (128 kW)', '1,5 l'),
      version('1.6 Diésel DCT6', 'Diésel', '130 CV (96 kW)', '1,6 l'),
      version('1.3 Ibrida Plug-In Q4', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 270 CV (197 kW)', '1,3 l'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Propulsiones', value: 'Microhíbrida, diésel e híbrida enchufable' },
      { label: 'Tracción', value: 'Delantera o total Q4 en el Plug-In' },
    ],
    officialUrl: `${alfaRomeo}/modelos/tonale`,
    sources: [source('Gama y características técnicas del Tonale', tonale), source('Renovación de gama Alfa Romeo (6 de octubre de 2026)', rangeUpdate)],
    image: photo('tonale', 'Alfa Romeo Tonale fotografiado en una carretera mojada.', 'Alfa Romeo Tonale.jpg', 798, 'Calreyn88', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Calreyn88', 'La fotografía muestra un Tonale de una generación anterior a la actualización de 2026; diseño, acabado y equipamiento pueden variar.'),
  }),
  page({
    slug: 'giulia', name: 'Giulia', titleName: 'Alfa Romeo Giulia',
    description: 'Consulta las motorizaciones del Alfa Romeo Giulia disponibles en España: diésel de 160 y 210 CV y Giulia Quadrifoglio V6 de 520 CV.',
    intro: 'El Giulia es la berlina deportiva de Alfa Romeo, con motor delantero y una puesta a punto orientada a la conducción. La gama española combina dos turbodiésel con tracción trasera o total Q4 y la versión de altas prestaciones Quadrifoglio con motor V6 de gasolina.',
    summary: 'La gama consultada incluye el 2.2 turbodiésel de 160 CV (118 kW) con tracción trasera, el 2.2 diésel de 210 CV (154 kW) con Q4 y el 2.9 V6 biturbo de gasolina del Quadrifoglio, con 520 CV (382 kW). Alfa Romeo vincula los dos diésel a un cambio automático de ocho velocidades. No mostramos par motor porque las fuentes españolas consultadas no publican de manera verificable el régimen junto a cada cifra.',
    usage: 'El diésel de 160 CV prioriza una configuración de propulsión trasera; el de 210 CV suma tracción Q4 para mejorar la transmisión de fuerza cuando la adherencia es baja. El Quadrifoglio ocupa otra posición por prestaciones, neumáticos, frenos y costes de uso: no es una simple variante de acabado. Para comparar unidades de ocasión o de stock, comprueba año-modelo, tracción y equipamiento, ya que la oferta histórica del Giulia fue más amplia.',
    versions: [
      version('2.2 Diésel 160 CV RWD', 'Diésel', '160 CV (118 kW)', '2,2 l'),
      version('2.2 Diésel 210 CV Q4', 'Diésel', '210 CV (154 kW)', '2,2 l'),
      version('Quadrifoglio 2.9 V6 Bi-Turbo', 'Gasolina', '520 CV (382 kW)', '2,9 l'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina deportiva' },
      { label: 'Propulsiones', value: 'Diésel y gasolina V6' },
      { label: 'Tracción', value: 'Trasera o total Q4, según versión' },
      { label: 'Cambio', value: 'Automático de 8 velocidades en las versiones citadas' },
    ],
    officialUrl: `${alfaRomeo}/modelos/giulia`,
    sources: [source('Características y motores Giulia', giulia), source('Preguntas frecuentes oficiales del Giulia', giuliaFaq), source('Versiones Quadrifoglio', quadrifoglio), source('Renovación de gama y disponibilidad por región', rangeUpdate)],
    image: photo('giulia', 'Alfa Romeo Giulia rojo fotografiado en un encuentro de automóviles.', 'Alfa Romeo Giulia (2023) 1X7A0826.jpg', 854, 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
    specNote: 'La página española de características conserva referencias a un Giulia 2.0 gasolina de 280 CV. El comunicado de Alfa Romeo del 6 de octubre de 2026 sitúa ese motor en Reino Unido y otros mercados, mientras que para Europa confirma los diésel de 160 y 210 CV y el Quadrifoglio. Por este motivo no se incluye el 2.0 como versión española vigente; confirma con un concesionario si buscas una unidad de stock o importada.',
  }),
  page({
    slug: 'stelvio', name: 'Stelvio', titleName: 'Alfa Romeo Stelvio',
    description: 'Motores del Alfa Romeo Stelvio en España: diésel de 160 y 210 CV y Stelvio Quadrifoglio V6 de gasolina con 520 CV.',
    intro: 'El Stelvio es el SUV de mayor tamaño de Alfa Romeo y comparte parte de su planteamiento técnico con el Giulia. La gama española consultada ofrece dos motores diésel y el Stelvio Quadrifoglio de gasolina. Este último combina el V6 biturbo con tracción total Q4 y una orientación claramente deportiva.',
    summary: 'Alfa Romeo publica un 2.2 turbodiésel de 160 CV (118 kW) y 450 Nm, otro de 210 CV (154 kW) y 470 Nm, y el 2.9 V6 biturbo de gasolina del Quadrifoglio con 520 CV (382 kW). La información española no indica de forma consistente el régimen de entrega del par diésel; siguiendo el criterio de esta ficha, la tabla no muestra esos Nm sin el dato de rpm.',
    usage: 'Para un SUV familiar, las versiones diésel ofrecen más orientación a los desplazamientos largos; el motor de 210 CV añade Q4. Quadrifoglio es una propuesta de altas prestaciones que implica costes potencialmente distintos en combustible, neumáticos y mantenimiento. Las páginas comerciales y el stock pueden mezclar unidades de años-modelo diferentes, así que comprueba la ficha concreta antes de comparar consumos o equipamiento.',
    versions: [
      version('2.2 Diésel 160 CV RWD', 'Diésel', '160 CV (118 kW)', '2,2 l'),
      version('2.2 Diésel 210 CV Q4', 'Diésel', '210 CV (154 kW)', '2,2 l'),
      version('Quadrifoglio 2.9 V6 Bi-Turbo Q4', 'Gasolina', '520 CV (382 kW)', '2,9 l'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV mediano' },
      { label: 'Plazas', value: '5' },
      { label: 'Propulsiones', value: 'Diésel y gasolina V6' },
      { label: 'Tracción', value: 'Trasera o total Q4, según versión' },
    ],
    officialUrl: `${alfaRomeo}/modelos/stelvio`,
    sources: [source('Características y motores Stelvio', stelvio), source('Gama Quadrifoglio', quadrifoglio), source('Renovación de gama y versiones europeas', rangeUpdate)],
    image: photo('stelvio', 'Alfa Romeo Stelvio oscuro fotografiado en una carretera.', 'Alfa Romeo Stelvio (2023) 1X7A1915.jpg', 750, 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  }),
];
