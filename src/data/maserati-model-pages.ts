import type { ModelPageData } from './model-pages';

const reviewedAt = '4 de noviembre de 2026';
const maserati = 'https://www.maserati.com/es/es';
const source = (label: string, url: string) => ({ label, url });

const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'maserati',
  reviewedAt,
  ...data,
});

const photo = (filename: string, alt: string, sourceTitle: string, authorName: string, licenseName = 'CC BY-SA 4.0', licenseUrl = 'https://creativecommons.org/licenses/by-sa/4.0/') => {
  const heights: Record<string, number> = {
    'model-maserati-grecale.jpg': 853,
    'model-maserati-granturismo.jpg': 882,
    'model-maserati-grancabrio.jpg': 960,
    'model-maserati-mcpura.jpg': 720,
    'model-maserati-mcpura-cielo.jpg': 853,
    'model-maserati-gt2-stradale.jpg': 853,
  };
  return {
    src: `/images/models/commons/${filename}`,
    alt,
    caption: 'Fotografía de referencia de una unidad del modelo; la versión, el acabado y el equipamiento pueden diferir de los comercializados actualmente en España.',
    width: 1280,
    height: heights[filename] ?? 853,
    sourceTitle,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(sourceTitle).replace(/%20/g, '_')}`,
    authorName,
    licenseName,
    licenseUrl,
  };
};

export const maseratiModels: ModelPageData[] = [
  model({
    modelSlug: 'grecale',
    title: 'Maserati Grecale: versiones, motores y ficha técnica | Kilómetro Claro',
    description: 'Compara las motorizaciones del Maserati Grecale en España: microhíbridos de 250 a 330 CV, V6 de 390 y 530 CV y eléctrico Folgore.',
    intro: 'El Maserati Grecale es un SUV de lujo que en la gama española 2027 combina motores microhíbridos, gasolina V6 y una versión eléctrica. La oferta publicada contempla siete configuraciones: Grecale 250 y 300, Modena 250 y 330, Modena V6 390, Trofeo V6 530 y Folgore 550. Las versiones concretas, precios y disponibilidad pueden variar por concesionario y stock.',
    powertrainSummary: 'Las configuraciones 250 y 300 CV usan un cuatro cilindros 2.0 mild hybrid; Modena también se ofrece con 250 o 330 CV. Las variantes Modena V6 y Trofeo V6 emplean un V6 de 3.0 litros, con 390 y 530 CV respectivamente. Grecale Folgore es eléctrico y desarrolla 550 CV. El par máximo solo se indica en la tabla cuando el fabricante publica también su régimen.',
    usageNote: 'La potencia no distingue por sí sola las versiones: el sistema mild hybrid, la tracción total, el motor V6 y la propulsión eléctrica responden a usos distintos y también afectan al peso, consumo y coste de compra. En el Folgore, las cifras de autonomía WLTP dependen de la homologación y configuración. Comprueba en el configurador español el año-modelo, el acabado y la disponibilidad de la unidad antes de comparar ofertas.',
    versions: [
      { name: 'Grecale 250', type: 'Microhíbrido de gasolina (48 V)', power: '250 CV (184 kW)', displacement: '1.995 cm³', maxTorque: '450 Nm', torqueScope: 'Motor térmico', torqueRpm: '2.000–4.000 rpm' },
      { name: 'Grecale 300', type: 'Microhíbrido de gasolina (48 V)', power: '300 CV (221 kW)', displacement: '1.995 cm³', maxTorque: '450 Nm', torqueScope: 'Motor térmico', torqueRpm: '2.000–4.000 rpm' },
      { name: 'Grecale Modena 250', type: 'Microhíbrido de gasolina (48 V)', power: '250 CV (184 kW)', displacement: '1.995 cm³', maxTorque: '450 Nm', torqueScope: 'Motor térmico', torqueRpm: '2.000–4.000 rpm' },
      { name: 'Grecale Modena 330', type: 'Microhíbrido de gasolina (48 V)', power: '330 CV (243 kW)', displacement: '1.995 cm³', maxTorque: '450 Nm', torqueScope: 'Motor térmico', torqueRpm: '2.000–5.000 rpm' },
      { name: 'Grecale Modena V6 390', type: 'Gasolina', power: '390 CV (287 kW)', displacement: '3.000 cm³', maxTorque: '500 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.000–3.750 rpm' },
      { name: 'Grecale Trofeo V6 530', type: 'Gasolina', power: '530 CV (390 kW)', displacement: '3.000 cm³', maxTorque: '620 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.000–5.500 rpm' },
      { name: 'Grecale Folgore', type: 'Eléctrico', power: '550 CV (404 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco plazas' },
      { label: 'Motorizaciones', value: 'Microhíbrida, gasolina V6 y eléctrica' },
      { label: 'Tracción', value: 'Total (AWD) en las versiones publicadas' },
      { label: 'Año-modelo de la gama consultada', value: '2027' },
    ],
    specNote: 'La oferta española consultada muestra siete configuraciones Grecale. Los datos de par de las versiones microhíbridas y V6 proceden de las fichas/catálogos oficiales de motor; para el V6 390, Maserati publica 500 Nm entre 2.000 y 3.750 rpm. El Folgore se mantiene en la misma ficha como modelo eléctrico, pero no se muestra su par al no publicarse un régimen en rpm asociado a la cifra.',
    officialUrl: `${maserati}/modelos/grecale`,
    technicalUrl: `${maserati}/shopping-tools/configurator`,
    sources: [
      source('Maserati España: catálogo Grecale y versiones 2027', `${maserati}/modelos/grecale`),
      source('Maserati España: configurador y gama 2027', `${maserati}/shopping-tools/configurator`),
      source('Maserati: catálogo técnico oficial Grecale en español', 'https://www.maserati.com/content/dam/maserati/worldwide/brochures/catalogues/grecale/Grecale-Digital-Catalogue-ES_low.pdf'),
      source('Maserati: especificaciones oficiales Grecale Modena V6', 'https://www.maserati.com/ee/et/dealers/luxury-motors/models/grecale/grecale-trim'),
      source('Maserati: gama 2027 Grecale y motores', 'https://www.maserati.com/it/it/brand/stories-of-audacity/new-maserati-range-grecale-granturismo-grancabrio'),
    ],
    image: photo('model-maserati-grecale.jpg', 'Maserati Grecale fotografiado en una calle urbana.', 'Maserati Grecale.jpg', 'Alexandre Prevot'),
  }),
  model({
    modelSlug: 'granturismo',
    title: 'Maserati GranTurismo: versiones V6 y Folgore eléctrica | Kilómetro Claro',
    description: 'Ficha del Maserati GranTurismo 2027: motor Nettuno V6 de 490 o 590 CV y versión eléctrica Folgore de 761 CV.',
    intro: 'El Maserati GranTurismo es un coupé de cuatro plazas pensado para recorrer largas distancias con una orientación deportiva. La gama española actual reúne dos variantes de gasolina con motor Nettuno V6 —490 CV y Trofeo de 590 CV— y el GranTurismo Folgore eléctrico de 761 CV. La carrocería y el planteamiento se mantienen, pero cambian notablemente el sistema de propulsión y la respuesta de cada versión.',
    powertrainSummary: 'El GranTurismo 490 y el Trofeo utilizan un V6 biturbo de 3.0 litros, con 600 y 650 Nm respectivamente. El Folgore es eléctrico y alcanza 560 kW (761 CV). Para el Trofeo, Maserati indica que el par máximo está disponible desde 2.500 rpm; la página no publica un límite superior, por lo que no añadimos uno.',
    usageNote: 'Las cifras de consumo y autonomía dependen del motor y del recorrido. El Folgore es una opción eléctrica de altas prestaciones y su autonomía real puede apartarse del valor WLTP por velocidad, temperatura y uso de climatización. Las especificaciones aquí resumidas corresponden a la gama 2027 publicada por Maserati; consulta el configurador y las condiciones de venta españolas para la configuración concreta.',
    versions: [
      { name: 'GranTurismo', type: 'Gasolina', power: '490 CV (360 kW)', displacement: '2.992 cm³', maxTorque: '600 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: '3.000 rpm' },
      { name: 'GranTurismo Trofeo', type: 'Gasolina', power: '590 CV (434 kW)', displacement: '2.992 cm³', maxTorque: '650 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: 'desde 2.500 rpm' },
      { name: 'GranTurismo Folgore', type: 'Eléctrico', power: '761 CV (560 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Coupé gran turismo de cuatro plazas' },
      { label: 'Motorizaciones', value: 'Gasolina V6 o eléctrica' },
      { label: 'Tracción', value: 'Total (AWD)' },
      { label: 'Año-modelo de la gama consultada', value: '2027' },
    ],
    specNote: 'Maserati actualizó la gama de gasolina para el año-modelo 2027: el Trofeo pasa a 590 CV y 650 Nm. El fabricante especifica que ese par está disponible desde 2.500 rpm, sin fijar un régimen máximo en la fuente consultada; la tabla conserva el matiz “desde”. El Folgore se identifica como eléctrico y no muestra par porque no se publica un régimen en rpm.',
    officialUrl: `${maserati}/modelos/granturismo`,
    technicalUrl: `${maserati}/shopping-tools/configurator`,
    sources: [
      source('Maserati España: GranTurismo y gama 2027', `${maserati}/modelos/granturismo`),
      source('Maserati España: GranTurismo Trofeo 2027 y par disponible desde 2.500 rpm', `${maserati}/modelos/granturismo/granturismo-trofeo`),
      source('Maserati España: actualización 2027 de GranTurismo y GranCabrio', `${maserati}/mundo-maserati/stories-of-audacity/evento-centenario-maserati-adnforum`),
      source('Maserati: ficha técnica oficial GranTurismo 490 CV', 'https://www.maserati.com/qa/en/models/granturismo'),
    ],
    image: photo('model-maserati-granturismo.jpg', 'Maserati GranTurismo azul visto de frente y de perfil en una exposición.', 'Maserati Gran Turismo Modena (2023) (52965591963).jpg', 'Charles from Port Chester', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'),
  }),
  model({
    modelSlug: 'grancabrio',
    title: 'Maserati GranCabrio: versiones, motores y ficha técnica | Kilómetro Claro',
    description: 'Conoce las versiones del Maserati GranCabrio: V6 de 490 y 590 CV y Folgore eléctrico de 761 CV, con sus datos de motor.',
    intro: 'El Maserati GranCabrio es un descapotable de cuatro plazas derivado del concepto GranTurismo. La gama española actual combina el V6 Nettuno de 490 CV, una versión Trofeo de 590 CV y el Folgore eléctrico de 761 CV. Las dos versiones de gasolina comparten cilindrada, pero la puesta a punto del Trofeo eleva la potencia y el par.',
    powertrainSummary: 'El GranCabrio y el GranCabrio Trofeo montan un V6 biturbo de 2.992 cm³: el primero entrega 490 CV y 600 Nm; el Trofeo 2027 alcanza 590 CV y 650 Nm. Maserati indica 3.000 rpm para el par máximo de la versión de 490 CV y disponibilidad desde 2.500 rpm en el Trofeo. El Folgore es eléctrico y desarrolla 761 CV.',
    usageNote: 'El descapotable ofrece una experiencia de conducción distinta y una configuración de techo que afecta al espacio de carga. El GranCabrio Folgore añade propulsión eléctrica y tracción total; su autonomía real dependerá de la velocidad, el clima y el uso de calefacción o climatización. Las cifras técnicas de esta ficha corresponden a las versiones publicadas por Maserati para la gama 2027; equipamiento y disponibilidad pueden variar por mercado.',
    versions: [
      { name: 'GranCabrio', type: 'Gasolina', power: '490 CV (360 kW)', displacement: '2.992 cm³', maxTorque: '600 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: '3.000 rpm' },
      { name: 'GranCabrio Trofeo', type: 'Gasolina', power: '590 CV (434 kW)', displacement: '2.992 cm³', maxTorque: '650 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: 'desde 2.500 rpm' },
      { name: 'GranCabrio Folgore', type: 'Eléctrico', power: '761 CV (560 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Descapotable de cuatro plazas' },
      { label: 'Motorizaciones', value: 'Gasolina V6 o eléctrica' },
      { label: 'Tracción', value: 'Total (AWD)' },
      { label: 'Año-modelo de la gama consultada', value: '2027' },
    ],
    specNote: 'La versión Trofeo del año-modelo 2027 aumenta a 590 CV y 650 Nm. Maserati identifica 2.500 rpm como el régimen a partir del cual está disponible el par máximo, sin indicar el final de ese intervalo. En las versiones Folgore no se añade el par a la tabla porque no consta un régimen en rpm asociado.',
    officialUrl: `${maserati}/modelos/grancabrio`,
    technicalUrl: `${maserati}/shopping-tools/configurator`,
    sources: [
      source('Maserati España: GranCabrio y gama 2027', `${maserati}/modelos/grancabrio`),
      source('Maserati España: ficha del GranCabrio 490 CV', `${maserati}/modelos/grancabrio/grancabrio-trim`),
      source('Maserati España: actualización 2027 de GranTurismo y GranCabrio', `${maserati}/mundo-maserati/stories-of-audacity/evento-centenario-maserati-adnforum`),
      source('Maserati: ficha técnica del GranCabrio 490 CV', 'https://www.maserati.com/ma/en/models/grancabrio/grancabrio-trim'),
      source('Maserati: datos técnicos del GranCabrio Trofeo', 'https://www.maserati.com/jp/ja/dealers/shinsaibashi/models/grancabrio/grancabrio-trofeo'),
    ],
    image: photo('model-maserati-grancabrio.jpg', 'Maserati GranCabrio Folgore descapotable fotografiado en una carretera.', '2025 Maserati GranCabrio Folgore.jpg', 'Oleg Yunakov'),
  }),
  model({
    modelSlug: 'mcpura',
    title: 'Maserati MCPura: motor Nettuno V6 y ficha técnica | Kilómetro Claro',
    description: 'Ficha del Maserati MCPura coupé: motor Nettuno V6 biturbo de 3,0 litros, 630 CV, 720 Nm y propulsión trasera.',
    intro: 'El Maserati MCPura es un superdeportivo coupé de motor central y propulsión trasera. Su V6 Nettuno biturbo de 3,0 litros desarrolla 630 CV y combina una arquitectura de combustión con precámara y doble bujía. La gama española ofrece el MCPura junto al MCPura Cielo, que comparte motor y cambia a una carrocería abierta con techo de cristal retráctil.',
    powertrainSummary: 'El motor V6 de 3.000 cm³ entrega 630 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. La transmisión automática envía la potencia al eje trasero. La cifra de par corresponde al motor térmico Nettuno y no a un sistema híbrido.',
    usageNote: 'El MCPura es un deportivo de altas prestaciones, con un planteamiento y unos costes de uso distintos a los de un turismo convencional. El consumo homologado depende de las condiciones de ensayo y no predice el gasto en conducción deportiva. Antes de comparar versiones, verifica el equipamiento, los neumáticos y las condiciones de uso previstas.',
    versions: [
      { name: 'MCPura', type: 'Gasolina', power: '630 CV (463 kW)', displacement: '3.000 cm³', maxTorque: '720 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: '3.000–5.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Coupé biplaza de motor central' },
      { label: 'Motor', value: 'V6 Nettuno biturbo de gasolina' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Potencia máxima', value: '630 CV a 7.500 rpm' },
    ],
    specNote: 'Maserati publica para el MCPura europeo 630 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. La configuración es de gasolina y propulsión trasera; no debe confundirse con la carrocería MCPura Cielo, que tiene ficha independiente.',
    officialUrl: `${maserati}/modelos/mcpura`,
    technicalUrl: `${maserati}/shopping-tools/configurator`,
    sources: [
      source('Maserati España: MCPura', `${maserati}/modelos/mcpura`),
      source('Maserati: estreno y especificaciones del MCPura', 'https://www.maserati.com/pe/es/mundo-maserati/stories-of-audacity/mcpura-world-premiere-revealed-at-goodwood-festival'),
      source('Maserati: catálogo técnico oficial MCPura', 'https://www.maserati.com/content/dam/maserati/international/Brochures/my26/MCPURA-Digital-Catalogue_ES_low.pdf'),
    ],
    image: photo('model-maserati-mcpura.jpg', 'Maserati MCPura gris claro fotografiado de noche junto a un edificio.', 'Maserati MCPura.jpg', 'Belliniska', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'),
  }),
  model({
    modelSlug: 'mcpura-cielo',
    title: 'Maserati MCPura Cielo: motor V6, potencia y ficha técnica | Kilómetro Claro',
    description: 'Conoce el Maserati MCPura Cielo descapotable: motor Nettuno V6 biturbo de 630 CV, 720 Nm y techo de cristal retráctil.',
    intro: 'El Maserati MCPura Cielo es la variante abierta del MCPura. Mantiene el motor central V6 Nettuno de 3,0 litros, los 630 CV y la propulsión trasera, y añade un techo de cristal retráctil electrocrómico. Maserati lo ofrece como modelo configurable independiente, por lo que aquí se distingue del coupé MCPura aunque comparta la base mecánica.',
    powertrainSummary: 'Su V6 biturbo de gasolina desarrolla 630 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. El motor va situado en posición central y transmite la potencia a las ruedas traseras. Las cifras de potencia y par coinciden con las del MCPura coupé.',
    usageNote: 'El techo electrocrómico puede cambiar entre transparente y opaco; con el techo abierto, la experiencia y el nivel de exposición al entorno cambian respecto al coupé. Es un deportivo biplaza de prestaciones elevadas. Los consumos homologados deben leerse como datos comparativos y no como una estimación del gasto durante conducción intensa.',
    versions: [
      { name: 'MCPura Cielo', type: 'Gasolina', power: '630 CV (463 kW)', displacement: '3.000 cm³', maxTorque: '720 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: '3.000–5.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Roadster biplaza con techo de cristal retráctil' },
      { label: 'Motor', value: 'V6 Nettuno biturbo de gasolina, en posición central' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Techo', value: 'Cristal electrocrómico retráctil' },
    ],
    specNote: 'Las especificaciones oficiales asignan al MCPura Cielo el mismo motor, potencia y par que al MCPura: 630 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. Se conserva una ficha propia porque Maserati lo presenta y configura como una carrocería/modelo independiente.',
    officialUrl: `${maserati}/modelos/mcpura-cielo`,
    technicalUrl: `${maserati}/shopping-tools/configurator`,
    sources: [
      source('Maserati España: MCPura Cielo y gama actual', `${maserati}/modelos`),
      source('Maserati: ficha técnica MCPura y MCPura Cielo', 'https://www.maserati.com/content/dam/maserati/international/Brochures/my26/MCPURA-Digital-Catalogue_ES_low.pdf'),
      source('Maserati: catálogo oficial MCPura Cielo', 'https://www.maserati.com/ae/en/shopping-tools/catalogues/mcpura-cielo-catalogues'),
    ],
    image: photo('model-maserati-mcpura-cielo.jpg', 'Maserati MCPura Cielo azul fotografiado de frente en una exposición.', 'Maserati MCPURA Cielo.jpg', 'Alexandre Prevot'),
  }),
  model({
    modelSlug: 'gt2-stradale',
    title: 'Maserati GT2 Stradale: motor V6, 640 CV y ficha técnica | Kilómetro Claro',
    description: 'Ficha del Maserati GT2 Stradale homologado para carretera: motor Nettuno V6 de 640 CV, 720 Nm y propulsión trasera.',
    intro: 'El Maserati GT2 Stradale traslada a la carretera soluciones desarrolladas para la competición GT2. Es un superdeportivo biplaza de motor central, propulsión trasera y carrocería con aerodinámica específica. Su V6 Nettuno biturbo de 3,0 litros desarrolla 640 CV y 720 Nm; la marca lo presenta como una versión homologada para circular por carretera, aunque varias configuraciones y accesorios tienen uso exclusivo en circuito.',
    powertrainSummary: 'El V6 de gasolina entrega 640 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. La potencia se transmite al eje trasero. Maserati distingue el automóvil homologado para vía pública de determinados elementos, como el escape MC Racing, que la propia marca señala como exclusivo para circuito.',
    usageNote: 'La denominación “Stradale” identifica la versión matriculable, pero no convierte en legales para carretera todos los componentes opcionales inspirados en competición. Maserati indica expresamente que el escape MC Racing no está homologado para vías públicas. Comprueba la homologación y el equipamiento de la unidad concreta, además de las condiciones de uso, antes de circular.',
    versions: [
      { name: 'GT2 Stradale', type: 'Gasolina', power: '640 CV (471 kW)', displacement: '3.000 cm³', maxTorque: '720 Nm', torqueScope: 'Motor Nettuno V6', torqueRpm: '3.000–5.500 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Coupé biplaza de motor central' },
      { label: 'Motor', value: 'V6 Nettuno biturbo de gasolina' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Homologación', value: 'Versión de carretera; algunos componentes opcionales son solo para circuito' },
    ],
    specNote: 'Maserati publica 640 CV a 7.500 rpm y 720 Nm entre 3.000 y 5.500 rpm. La cifra corresponde al motor Nettuno de 3.000 cm³. La documentación oficial diferencia el GT2 Stradale de calle de componentes de competición no homologados, incluido el escape MC Racing.',
    officialUrl: `${maserati}/modelos/gt2-stradale`,
    technicalUrl: 'https://www.maserati.com/jp/ja/dealers/takamatsu/models/gt2-stradale',
    sources: [
      source('Maserati España: GT2 Stradale', `${maserati}/modelos/gt2-stradale`),
      source('Maserati: GT2 Stradale y aviso sobre el escape exclusivo de circuito', 'https://www.maserati.com/pe/es/modelos/gt2-stradale'),
      source('Maserati: especificaciones europeas del GT2 Stradale, incluido el régimen del par', 'https://www.maserati.com/jp/ja/dealers/takamatsu/models/gt2-stradale'),
      source('Maserati: catálogo técnico GT2 Stradale', 'https://www.maserati.com/eg/en/shopping-tools/catalogues/gt2-stradale-catalogues'),
    ],
    image: photo('model-maserati-gt2-stradale.jpg', 'Maserati GT2 Stradale azul visto de frente en un circuito.', 'Maserati GT2 Stradale.jpg', 'Alexandre Prevot'),
  }),
];
