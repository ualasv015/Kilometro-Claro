import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '3 de noviembre de 2026';
const evo = 'https://auto-evo.es';
const source = (label: string, url: string) => ({ label, url });

function version(
  name: string,
  power: string,
  displacement: string,
  maxTorque = '',
  torqueRpm = '',
  torqueScope = 'Motor de combustión',
  note?: string,
): ModelVersion {
  return { name, power, displacement, maxTorque, torqueRpm, torqueScope, ...(note ? { note } : {}) };
}

type EvoEntry = {
  slug: string;
  model: string;
  title: string;
  description: string;
  intro: string;
  summary: string;
  usage: string;
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  officialUrl: string;
  sources: { label: string; url: string }[];
  specNote?: string;
};

function page(entry: EvoEntry): ModelPageData {
  return {
    brandSlug: 'evo',
    modelSlug: entry.slug,
    title: `${entry.title}: motores y versiones en España | Kilómetro Claro`,
    description: entry.description,
    intro: entry.intro,
    powertrainSummary: entry.summary,
    usageNote: entry.usage,
    versions: entry.versions,
    facts: entry.facts,
    officialUrl: entry.officialUrl,
    technicalUrl: entry.sources[entry.sources.length - 1]?.url ?? entry.officialUrl,
    sources: [source('Gama oficial EVO España', `${evo}/modello/`), ...entry.sources],
    ...(entry.specNote ? { specNote: entry.specNote } : {}),
    reviewedAt,
  };
}

const evo3Gasoline = `${evo}/modello/evo-3-2/`;
const evo3Lpg = `${evo}/modello/evo-3/`;
const cuatroGasoline = 'https://www.grupodeltavi.com/catalogo-vehiculo-nuevo/nuevo-evo-cuatro';
const cuatroLpg = `${evo}/modello/evo-cuatro-gpl/`;
const cuatroCvt = `${evo}/modello/evo-cuatro-cvt/`;
const cuatroCvtLpg = `${evo}/modello/evo-cuatro-cvt-lpg/`;
const evo5Gasoline = `${evo}/modello/evo-5/`;
const evo5Lpg = `${evo}/modello/evo-5-2/`;
const evo6Gasoline = `${evo}/modello/evo-6-4/`;
const evo6Lpg = `${evo}/modello/evo-6-3/`;
const evo6Hev = `${evo}/modello/evo-6-hev-2/`;
const evo7Gasoline = `${evo}/modello/evo-7/`;
const evo7Lpg = `${evo}/modello/evo-7-2/`;
const spazioLpg = `${evo}/modello/evo-spazio/`;
const spazioGasoline = `${evo}/modello/evo-spazio-2/`;
const cross4 = `${evo}/modello/evo-cross-4-2/`;
const spazioLaunch = `${evo}/2026/08/31/el-nuevo-monovolumen-llega-a-nuestra-gama-para-hacer-de-cada-trayecto-en-familia-una-experiencia-mas-comoda-practica-y-conectada/`;

export const evoModels: ModelPageData[] = [
  page({
    slug: 'evo-3', model: 'EVO 3', title: 'EVO 3',
    description: 'Consulta los motores del EVO 3 en España: gasolina y bifuel gasolina/GLP, con potencia, cilindrada y par publicados por EVO.',
    intro: 'El EVO 3 es el SUV urbano de cinco plazas de la marca. La gama española contempla un motor atmosférico de gasolina y una alternativa bifuel gasolina/GLP. La ficha separa ambas configuraciones porque cambian la potencia y el par aunque compartan cilindrada y cambio manual de cinco velocidades.',
    summary: 'EVO publica 113 CV (83 kW) y 140 Nm a 4.600 rpm para la versión de gasolina; la variante gasolina/GLP declara 107 CV (79 kW) y 138 Nm a 4.100 rpm. Ambas montan un motor de 1.499 cm³ y caja manual de cinco velocidades. La denominación comercial Thermohybrid describe el sistema bifuel gasolina/GLP; en esta ficha no se interpreta como hibridación eléctrica.',
    usage: 'La diferencia práctica entre las dos versiones está en el combustible alternativo y su disponibilidad de GLP, además de sus cifras homologadas. La autonomía anunciada al combinar depósitos depende del uso y de repostar en una estación con Autogas. Antes de elegir, comprueba el distintivo ambiental asociado a la unidad concreta y la red de GLP que utilizas habitualmente.',
    versions: [
      version('1.5 gasolina manual', '113 CV (83 kW)', '1.499 cm³', '140 Nm', '4.600 rpm'),
      version('1.5 Thermohybrid gasolina/GLP manual', '107 CV (79 kW)', '1.499 cm³', '138 Nm', '4.100 rpm', 'Motor bifuel gasolina/GLP', 'EVO utiliza Thermohybrid como nombre de su adaptación bifuel gasolina/GLP; no se indica asistencia eléctrica en esta ficha.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambio', value: 'Manual de 5 velocidades' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP, según versión' },
    ],
    officialUrl: evo3Gasoline,
    sources: [source('EVO 3 gasolina: datos técnicos', evo3Gasoline), source('EVO 3 gasolina/GLP: datos técnicos', evo3Lpg)],
  }),
  page({
    slug: 'evo-cuatro', model: 'EVO CUATRO', title: 'EVO CUATRO',
    description: 'Versiones del EVO CUATRO en España: motores gasolina y gasolina/GLP, manuales y CVT, con datos técnicos contrastados.',
    intro: 'El EVO CUATRO es un SUV compacto de cinco plazas. La gama española incluye versiones manuales de gasolina y gasolina/GLP, además de dos configuraciones CVT turbo. Las separamos porque cambian tanto el motor como la transmisión.',
    summary: 'Las fichas consultadas recogen cuatro configuraciones. Las manuales emplean un 1.498 cm³ atmosférico: 117 CV en gasolina y 114 CV en gasolina/GLP. Las CVT son turbo: 147 CV en gasolina y 140 CV en gasolina/GLP. El par máximo y su régimen se muestran solo cuando la ficha técnica los publica de forma expresa.',
    usage: 'La distinción importante es el conjunto de motor y transmisión: el CVT de 147 CV ofrece una alternativa automática turbo, mientras que las versiones manuales montan un motor atmosférico con caja de cinco marchas. Comprueba combustible y transmisión de la unidad concreta antes de comparar precios o consumos: EVO ha reorganizado algunas fichas técnicas y estas pueden redirigir a otra versión.',
    versions: [
      version('1.5 gasolina manual', '117 CV (86 kW)', '1.498 cm³', '136 Nm', '4.700 rpm'),
      version('1.5 gasolina/GLP manual', '114 CV (84 kW)', '1.498 cm³', '132 Nm', '4.800 rpm', 'Motor bifuel gasolina/GLP'),
      version('1.5 Turbo gasolina CVT', '147 CV (108 kW)', '1.498 cm³', '210 Nm', '1.750–4.000 rpm'),
      version('1.5 Turbo gasolina/GLP CVT', '140 CV (103 kW)', '1.498 cm³', '188 Nm', '4.600 rpm', 'Motor bifuel gasolina/GLP'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambios publicados', value: 'Manual de 5 velocidades o CVT, según variante' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP' },
    ],
    officialUrl: `${evo}/`,
    sources: [source('Concesionario EVO Grupo Deltavi: datos del CUATRO gasolina manual y GLP', cuatroGasoline), source('EVO CUATRO gasolina/GLP manual: ficha técnica', cuatroLpg), source('EVO CUATRO CVT gasolina: ficha técnica', cuatroCvt), source('EVO CUATRO CVT gasolina/GLP: ficha técnica', cuatroCvtLpg)],
    specNote: 'La web de EVO España presenta el CUATRO gasolina y gasolina/GLP con cambio manual, pero su antigua URL técnica de gasolina ahora redirige a la ficha CVT. Por eso, los datos de las variantes manuales se contrastan con la ficha técnica publicada por el concesionario EVO Grupo Deltavi; las dos variantes CVT se enlazan a sus fichas de EVO. La disponibilidad puede cambiar según año-modelo y concesionario.',
  }),
  page({
    slug: 'evo-5', model: 'EVO 5', title: 'EVO 5',
    description: 'Motores del EVO 5 en España: gasolina turbo y gasolina/GLP, con potencia, cilindrada y par máximo de cada variante.',
    intro: 'El EVO 5 es un SUV de cinco plazas con motor 1.5 turbo y cambio manual de seis velocidades. La gama española distingue una versión de gasolina y otra bifuel gasolina/GLP. Ambas comparten cilindrada y transmisión, pero la adaptación al GLP cambia sus datos de potencia y par.',
    summary: 'La ficha española publica 127 CV (93,5 kW) y 225 Nm a 4.500 rpm para el motor de gasolina. La opción gasolina/GLP declara 120 CV (88,4 kW) y 211 Nm a 4.500 rpm. Las dos versiones tienen 1.499 cm³ y cambio manual de seis velocidades.',
    usage: 'La versión bifuel permite utilizar GLP cuando se dispone de puntos de suministro, pero no debe suponerse que el consumo por litro sea igual con ambos combustibles. Comprueba la capacidad efectiva de los depósitos y el distintivo de la unidad. En ambas configuraciones, la cifra WLTP publicada por el fabricante es una referencia de homologación, no una predicción del gasto real en ciudad o autovía.',
    versions: [
      version('1.5 Turbo gasolina manual', '127 CV (93,5 kW)', '1.499 cm³', '225 Nm', '4.500 rpm'),
      version('1.5 Turbo gasolina/GLP manual', '120 CV (88,4 kW)', '1.499 cm³', '211 Nm', '4.500 rpm', 'Motor bifuel gasolina/GLP'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambio', value: 'Manual de 6 velocidades' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP, según versión' },
    ],
    officialUrl: evo5Gasoline,
    sources: [source('EVO 5 gasolina: ficha técnica', evo5Gasoline), source('EVO 5 gasolina/GLP: ficha técnica', evo5Lpg)],
  }),
  page({
    slug: 'evo-6', model: 'EVO 6', title: 'EVO 6',
    description: 'Consulta las motorizaciones del EVO 6: 1.5 turbo de gasolina y bifuel gasolina/GLP con cambio automático DCT.',
    intro: 'El EVO 6 es un SUV de cinco plazas que se ofrece con un motor 1.5 turbo y transmisión automática de doble embrague DCT de siete velocidades. La gama incluye alimentación de gasolina y una alternativa gasolina/GLP. La carrocería es común; la potencia y el par declarados varían con el sistema de alimentación.',
    summary: 'La versión de gasolina entrega 176 CV (130 kW) y 260 Nm a 2.500 rpm. La ficha de gasolina/GLP publica 167 CV (123 kW) y 245 Nm a 3.000 rpm. Ambas indican 1.482 cm³ y cambio DCT de siete velocidades.',
    usage: 'El DCT automatiza los cambios y no es equivalente a una transmisión CVT. Si comparas las versiones, considera también el acceso a GLP y el uso que harás de cada combustible. Las cifras de consumo oficiales cubren configuraciones y condiciones de homologación concretas; una conducción urbana, la carga y la velocidad pueden alterar el resultado.',
    versions: [
      version('1.5 Turbo gasolina DCT', '176 CV (130 kW)', '1.482 cm³', '260 Nm', '2.500 rpm'),
      version('1.5 Turbo gasolina/GLP DCT', '167 CV (123 kW)', '1.482 cm³', '245 Nm', '3.000 rpm', 'Motor bifuel gasolina/GLP'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambio', value: 'Automático DCT de 7 velocidades' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP' },
    ],
    officialUrl: evo6Gasoline,
    sources: [source('EVO 6 gasolina: ficha técnica', evo6Gasoline), source('EVO 6 gasolina/GLP: ficha técnica', evo6Lpg)],
  }),
  page({
    slug: 'evo-6-hev', model: 'EVO 6 HEV', title: 'EVO 6 HEV',
    description: 'Ficha del EVO 6 HEV: potencia total híbrida de 245 CV, motor turbo de gasolina y datos publicados por EVO España.',
    intro: 'El EVO 6 HEV es la variante híbrida completa del SUV EVO 6. Combina un motor 1.5 turbo de gasolina con un motor eléctrico y una batería pequeña; no necesita conectarse a un enchufe. EVO declara una potencia total de 245 CV y un cambio automático DHT.',
    summary: 'La potencia conjunta publicada es 245 CV (180 kW). La ficha separa el motor térmico —1.493 cm³, 170 CV y 280 Nm entre 1.500 y 3.500 rpm— del motor eléctrico, cuya potencia nominal es 75 CV (55 kW). El fabricante publica 300 Nm para el motor eléctrico, pero no su régimen; por eso esa cifra no se incluye en la columna de par máximo de esta tabla.',
    usage: 'Al ser un híbrido completo, puede circular en determinadas maniobras con apoyo eléctrico y recupera energía al decelerar, pero no es un híbrido enchufable. La potencia del sistema no se obtiene sumando sin más los máximos de cada motor: EVO ofrece directamente una cifra conjunta. Para valorar su gasto, usa el consumo homologado solo como base de comparación y contrástalo con tus trayectos habituales.',
    versions: [
      version('1.5 Turbo HEV DHT', 'Sistema: 245 CV (180 kW); térmico: 170 CV (125 kW); eléctrico: 75 CV (55 kW)', '1.493 cm³', '280 Nm', '1.500–3.500 rpm', 'Motor térmico', 'La ficha publica además 300 Nm para el motor eléctrico, pero no indica el régimen; no se incorpora a la tabla.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV híbrido' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambio', value: 'Automático DHT' },
      { label: 'Batería', value: '2,0 kWh; no enchufable' },
    ],
    officialUrl: evo6Hev,
    sources: [source('EVO 6 HEV: ficha técnica y desglose de motores', evo6Hev)],
  }),
  page({
    slug: 'evo-7', model: 'EVO 7', title: 'EVO 7',
    description: 'Versiones del EVO 7 en España: SUV de seis o siete plazas con motor turbo gasolina o bifuel gasolina/GLP y cambio DCT.',
    intro: 'El EVO 7 es el SUV de mayor tamaño de la gama y permite elegir seis o siete plazas. Las dos motorizaciones publicadas son turbo de 1.499 cm³ y emplean una caja automática DCT de seis velocidades: una de gasolina y otra bifuel gasolina/GLP.',
    summary: 'EVO declara 174 CV (128 kW) y 288 Nm a 4.500 rpm para la versión de gasolina. La opción gasolina/GLP entrega 162 CV —unos 119 kW al convertir la unidad— y 260 Nm a 4.500 rpm. La carrocería permite configurar seis o siete plazas.',
    usage: 'La tercera fila puede resultar útil para pasajeros ocasionales, aunque conviene comprobar su espacio y el maletero con todas las plazas ocupadas. La versión GLP puede reducir el coste por kilómetro si existe una red de repostaje conveniente en tus recorridos, pero su consumo y autonomía dependen del combustible utilizado y de la carga del vehículo.',
    versions: [
      version('1.5 Turbo gasolina DCT', '174 CV (128 kW)', '1.499 cm³', '288 Nm', '4.500 rpm'),
      version('1.5 Turbo gasolina/GLP DCT', '162 CV (119 kW)', '1.499 cm³', '260 Nm', '4.500 rpm', 'Motor bifuel gasolina/GLP'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV grande' },
      { label: 'Plazas', value: '6 o 7, según configuración' },
      { label: 'Cambio', value: 'Automático DCT de 6 velocidades' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP' },
    ],
    officialUrl: evo7Gasoline,
    sources: [source('EVO 7 gasolina: ficha técnica', evo7Gasoline), source('EVO 7 gasolina/GLP: ficha técnica (EVO publica una equivalencia CV/kW inconsistente)', evo7Lpg)],
    specNote: 'Para el EVO 7 gasolina/GLP, EVO publica 162 CV junto con 121 kW; ambas cifras no son equivalentes. La tabla mantiene los 162 CV de la ficha y muestra su conversión aproximada a 119 kW (1 CV = 0,7355 kW). Conviene confirmar esta discrepancia con la marca.',
  }),
  page({
    slug: 'evo-spazio', model: 'EVO Spazio', title: 'EVO Spazio',
    description: 'Ficha del EVO Spazio, monovolumen de siete plazas con motor 1.5 turbo de gasolina o gasolina/GLP y cambio DCT.',
    intro: 'El EVO Spazio es un monovolumen de 4,85 metros con siete plazas en disposición 2+2+3. La marca ofrece una variante turbo de gasolina y otra gasolina/GLP, ambas con cambio DCT. Su planteamiento prioriza capacidad para pasajeros y modularidad familiar.',
    summary: 'La versión de gasolina declara 176 CV (130 kW), 1.481 cm³ y 260 Nm a 2.500 rpm. En el lanzamiento español, EVO comunicó 167 CV para la versión Thermohybrid gasolina/GLP; no mostramos su par porque la página técnica asigna a esa variante cifras que coinciden con las del motor de gasolina y no permiten resolver con seguridad la discrepancia.',
    usage: 'Las siete plazas son el rasgo que diferencia al Spazio de los SUV de la gama EVO. Antes de elegirlo para viajar con toda la familia, comprueba el volumen de equipaje cuando se utiliza la tercera fila y el acceso a las plazas posteriores. La variante bifuel añade la posibilidad de repostar GLP, pero su potencia declarada difiere de la gasolina y la disponibilidad de combustible debe encajar con tus desplazamientos.',
    versions: [
      version('1.5 Turbo gasolina DCT', '176 CV (130 kW)', '1.481 cm³', '260 Nm', '2.500 rpm'),
      version('1.5 Turbo Thermohybrid gasolina/GLP DCT', '167 CV', '1.481 cm³', '', '', 'Motor bifuel gasolina/GLP', 'El comunicado de lanzamiento español publica 167 CV. No se incluye el par: la ficha técnica de la variante bifuel muestra cifras coincidentes con la gasolina y no permite verificar el dato específico.'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Monovolumen' },
      { label: 'Plazas', value: '7, distribución 2+2+3' },
      { label: 'Cambio', value: 'Automático DCT de 7 velocidades' },
      { label: 'Combustibles', value: 'Gasolina o gasolina/GLP' },
    ],
    officialUrl: spazioGasoline,
    sources: [source('EVO Spazio gasolina/GLP: ficha técnica', spazioLpg), source('EVO Spazio gasolina: ficha técnica', spazioGasoline), source('Comunicado de lanzamiento del EVO Spazio en España', spazioLaunch)],
    specNote: 'La ficha española de gasolina/GLP reproduce 176 CV y 260 Nm, mientras que el comunicado de lanzamiento publicado el 31 de agosto de 2026 atribuye 167 CV a la versión Thermohybrid. Para evitar mezclar datos, aquí se usa la potencia del comunicado y se omite el par de esa variante.',
  }),
  page({
    slug: 'evo-cross-4', model: 'EVO CROSS4', title: 'EVO CROSS4',
    description: 'Datos del EVO CROSS4 en España: pick-up de doble cabina, cinco plazas y motor 2.0 turbodiésel con tracción conectable.',
    intro: 'El EVO CROSS4 es una pick-up de doble cabina con cuatro puertas y cinco plazas. Frente al resto de la gama, está orientado a transportar personas y carga, y combina motor turbodiésel con tracción seleccionable 2WD o 4WD conectable.',
    summary: 'La ficha española publica un motor diésel common rail de 1.999 cm³ turbo, 136 CV y 320 Nm a 2.600 rpm. Se asocia a una caja manual de seis velocidades. EVO describe tracción 2WD y 4WD conectable con reductora 4H/4L.',
    usage: 'La caja abierta y la tracción conectable pueden ser útiles si necesitas transportar material o circular por superficies de baja adherencia, pero la carrocería y el peso la distinguen de un SUV familiar convencional. Revisa la carga útil, las dimensiones de la caja y las condiciones de homologación de la unidad antes de valorar su uso profesional o privado.',
    versions: [
      version('2.0 turbodiésel manual 6 velocidades', '136 CV', '1.999 cm³', '320 Nm', '2.600 rpm', 'Motor diésel'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Pick-up de doble cabina' },
      { label: 'Plazas', value: '5' },
      { label: 'Cambio', value: 'Manual de 6 velocidades' },
      { label: 'Tracción', value: '2WD o 4WD conectable 4H/4L' },
    ],
    officialUrl: cross4,
    sources: [source('EVO CROSS4: especificaciones oficiales', cross4)],
  }),
];
