import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const root = 'https://www.nissan.es';
const range = `${root}/vehiculos/nuevos-vehiculos.html`;
const source = (label: string, url: string) => ({ label, url });

type PhotoLicense = 'CC BY-SA 4.0' | 'CC BY-SA 3.0 Alemania' | 'CC0 1.0';

function photo(
  slug: string,
  alt: string,
  file: string,
  authorName: string,
  licenseName: PhotoLicense,
  sourceUrl: string,
  caption = 'Fotografía de referencia; la versión, el acabado y algunos detalles pueden diferir de la oferta española.',
  authorUrl?: string,
): NonNullable<ModelPageData['image']> {
  const licenseUrl = licenseName === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : licenseName === 'CC BY-SA 3.0 Alemania'
      ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
      : 'https://creativecommons.org/licenses/by-sa/4.0/';

  return {
    src: `/images/models/commons/model-nissan-${slug}.jpg`,
    alt,
    caption,
    width: 1280,
    height: ({
      juke: 775,
      qashqai: 646,
      'x-trail': 726,
      micra: 754,
      leaf: 720,
      ariya: 617,
      'townstar-combi': 728,
      'primastar-combi': 714,
    } as Record<string, number>)[slug],
    sourceTitle: file,
    sourceUrl,
    authorName,
    ...(authorUrl ? { authorUrl } : {}),
    licenseName,
    licenseUrl,
  };
}

function version(
  name: string,
  type: string,
  power: string,
  displacement: string,
  maxTorque = '',
  torqueScope = '',
  torqueRpm = '',
): ModelVersion {
  return { name, type, power, displacement, maxTorque, torqueScope, torqueRpm };
}

function makePage(seed: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData {
  return { ...seed, brandSlug: 'nissan', reviewedAt };
}

const records: ModelPageData[] = [
  makePage({
    modelSlug: 'juke',
    title: 'Nissan Juke: motores, versiones y datos técnicos | Kilómetro Claro',
    description: 'Consulta las motorizaciones del Nissan Juke en España, sus potencias, cilindradas y datos publicados por Nissan.',
    intro: 'El Nissan Juke es un SUV urbano de cinco plazas con dos planteamientos mecánicos en la gama española: gasolina con cambio manual o automático de doble embrague e híbrido autorrecargable. La elección cambia la respuesta del coche y el consumo, por lo que conviene comparar la versión concreta y no solo el acabado.',
    powertrainSummary: 'La gama consultada combina el 1.0 DIG-T de gasolina y 114 CV con una versión híbrida de 143 CV de potencia de sistema. En la híbrida, Nissan distingue el motor térmico de gasolina y el motor eléctrico; las cifras de par publicadas para ambos no se presentan aquí como un par conjunto con régimen único.',
    usageNote: 'El DIG-T es la opción convencional y está disponible con cambio manual o DCT automático. El híbrido puede desplazarse en determinadas situaciones con apoyo o impulso eléctrico, pero no se conecta a la red. Si haces muchos recorridos urbanos, compara el consumo homologado de ambas versiones con tus trayectos habituales.',
    versions: [
      version('1.0 DIG-T 114, manual', 'Gasolina', '114 CV (84 kW)', '999 cm³', '200 Nm', 'Motor de gasolina', '3.000 rpm'),
      version('1.0 DIG-T 114, DCT', 'Gasolina', '114 CV (84 kW)', '999 cm³', '200 Nm', 'Motor de gasolina', '3.000 rpm'),
      version('1.6 Hybrid 143', 'Híbrido de gasolina autorrecargable', 'Sistema: 143 CV (105 kW)', '1.598 cm³', '', 'Motor térmico de gasolina', ''),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano de cinco plazas' },
      { label: 'Motorizaciones', value: 'Gasolina o híbrida autorrecargable' },
      { label: 'Cambios disponibles', value: 'Manual o DCT en DIG-T; automático multimodo en Hybrid' },
      { label: 'Tracción', value: 'Delantera' },
    ],
    figures: [
      { label: 'Potencia híbrida de sistema', value: '143 CV (105 kW)' },
      { label: 'Cilindrada del motor térmico híbrido', value: '1.598 cm³' },
      { label: 'Tipo de hibridación', value: 'Híbrido no enchufable' },
    ],
    specNote: 'En la versión Hybrid se indica la potencia del sistema. Nissan publica cifras independientes para el motor térmico y el eléctrico, pero la documentación consultada no permite asignar con seguridad un único régimen al par máximo del sistema; por eso esa celda se deja vacía.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/juke.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/juke/comparar-sistemas-motrices.html`,
    sources: [source('Gama Nissan España', range), source('Versiones y sistemas motrices del Juke', `${root}/vehiculos/nuevos-vehiculos/juke/comparar-sistemas-motrices.html`)],
    image: photo('juke', 'Nissan Juke rojo de la generación actual fotografiado junto a un paseo marítimo.', '2024 Nissan Juke (F16) IMG 0165.jpg', 'Alexander-93', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:2024_Nissan_Juke_(F16)_IMG_0165.jpg', 'Fotografía de un Juke de la generación actual; el acabado y la especificación de la unidad fotografiada pueden diferir de los comercializados en España.', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  }),
  makePage({
    modelSlug: 'qashqai',
    title: 'Nissan Qashqai: motores mild hybrid y e-POWER | Kilómetro Claro',
    description: 'Compara las motorizaciones del Nissan Qashqai en España: gasolina mild hybrid y sistema híbrido e-POWER.',
    intro: 'El Qashqai es el SUV familiar compacto de Nissan y ofrece dos tecnologías diferentes. Las versiones mild hybrid utilizan un motor de gasolina que mueve las ruedas con asistencia eléctrica ligera; e-POWER funciona como híbrido en serie, con tracción eléctrica y un motor de gasolina que genera electricidad.',
    powertrainSummary: 'La oferta española consultada incluye el 1.3 DIG-T mild hybrid de 140 y 158 CV, además del Qashqai e-POWER de tercera generación con 190 CV de sistema. El motor térmico del e-POWER actúa como generador: no debe confundirse su cilindrada con una propulsión convencional directa a las ruedas.',
    usageNote: 'El mild hybrid no se enchufa y conserva una conducción similar a la de un coche de gasolina. e-POWER tampoco requiere carga externa, pero la respuesta al acelerador es eléctrica y el consumo depende mucho del recorrido, la temperatura y la velocidad. Para viajes largos, compara las cifras homologadas con una ruta realista y el equipamiento elegido.',
    versions: [
      version('1.3 DIG-T 140 MHEV', 'Microhíbrido de gasolina', 'Térmico: 140 CV (103 kW)', 'Térmico: 1.332 cm³', '240 Nm', 'Motor térmico de gasolina', '1.650–4.000 rpm'),
      version('1.3 DIG-T 158 MHEV', 'Microhíbrido de gasolina', 'Térmico: 158 CV (117 kW)', 'Térmico: 1.332 cm³', '260 Nm', 'Motor térmico de gasolina', '1.800–4.000 rpm'),
      version('1.5 e-POWER 190', 'Híbrido e-POWER (gasolina generador + eléctrico)', 'Sistema: 190 CV (140 kW)', 'Térmico: 1.497 cm³', '', 'Sistema e-POWER', ''),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de cinco plazas' },
      { label: 'Tecnologías', value: 'Mild hybrid de gasolina y e-POWER' },
      { label: 'Transmisión', value: 'Manual o automática, según versión' },
      { label: 'Tracción', value: 'Delantera; algunas versiones mild hybrid también se ofrecen con tracción total' },
    ],
    figures: [
      { label: 'Potencias de la gama consultada', value: '140, 158 y 190 CV' },
      { label: 'Cilindrada del motor del e-POWER', value: '1.497 cm³; funciona como generador' },
      { label: 'Tipo de recarga', value: 'No se enchufa a la red' },
    ],
    specNote: 'La potencia del e-POWER se refiere al sistema de tracción eléctrica publicado por Nissan España; la cilindrada corresponde al motor térmico generador. En la generación actual, la documentación consultada no ofrece un régimen verificable para el par máximo del sistema. Las potencias mild hybrid corresponden al motor térmico, asistido por un sistema de 12 V.',
    officialUrl: `${root}/cf/vehiculos/nuevos-vehiculos/qashqai`,
    technicalUrl: `${root}/content/dam/Nissan/es/brochures/catalogo-nissan-empresas-interactivo-enero2026.pdf`,
    sources: [source('Nissan Qashqai: gama española', `${root}/cf/vehiculos/nuevos-vehiculos/qashqai`), source('Catálogo Nissan España, enero de 2026', `${root}/content/dam/Nissan/es/brochures/catalogo-nissan-empresas-interactivo-enero2026.pdf`), source('e-POWER de tercera generación', 'https://spain.nissannews.com/es-ES/releases/las-mejoras-clave-del-sistema-epower-de-tercera-generacion-del-nissan-qashqai')],
    image: photo('qashqai', 'Nissan Qashqai actual gris fotografiado de frente en una carretera.', '2025 Nissan Qashqai ST-L facelift front.jpg', 'LuvsMG481', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:2025_Nissan_Qashqai_ST-L_facelift_front.jpg', 'La fotografía muestra un acabado vendido en otro mercado; diseño, equipamiento y gama de motores pueden variar respecto a España.', 'https://commons.wikimedia.org/wiki/User:LuvsMG481'),
  }),
  makePage({
    modelSlug: 'x-trail',
    title: 'Nissan X-Trail: motores e-POWER, e-4ORCE y mild hybrid | Kilómetro Claro',
    description: 'Datos de las motorizaciones del Nissan X-Trail en España: mild hybrid, e-POWER y e-4ORCE, con potencia y cilindrada.',
    intro: 'El Nissan X-Trail es un SUV familiar que puede configurarse con cinco o siete plazas, según versión. Su gama mezcla el mild hybrid de gasolina con e-POWER, donde las ruedas reciben movimiento eléctrico, y e-4ORCE, que añade tracción eléctrica en ambos ejes.',
    powertrainSummary: 'Nissan España publica un 1.5 VC-Turbo mild hybrid de 163 CV, un e-POWER de 204 CV con tracción delantera y un e-POWER e-4ORCE de 213 CV con tracción total. En las versiones e-POWER, el motor de gasolina genera electricidad y la potencia indicada se refiere al sistema de tracción.',
    usageNote: 'El mild hybrid es la opción de funcionamiento más convencional. e-POWER ofrece respuesta eléctrica sin necesidad de enchufar el vehículo; e-4ORCE incorpora un segundo motor para mover el eje trasero. Las siete plazas y la tracción total dependen de la configuración. Antes de elegir, comprueba el espacio de maletero que queda cuando se ocupan todas las plazas.',
    versions: [
      version('1.5 VC-Turbo 163 MHEV', 'Microhíbrido de gasolina', 'Térmico: 163 CV (120 kW)', 'Térmico: 1.477–1.497 cm³', '300 Nm', 'Motor térmico de gasolina', '2.800–3.600 rpm'),
      version('1.5 e-POWER 204', 'Híbrido e-POWER (gasolina generador + eléctrico)', 'Sistema: 204 CV (152 kW)', 'Térmico: 1.477–1.497 cm³', '', 'Sistema e-POWER', ''),
      version('1.5 e-POWER 213 e-4ORCE', 'Híbrido e-POWER con tracción eléctrica total', 'Sistema: 213 CV (158 kW)', 'Térmico: 1.477–1.497 cm³', '', 'Sistema e-4ORCE', ''),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV familiar de cinco o siete plazas, según versión' },
      { label: 'Motorizaciones', value: 'Mild hybrid o híbrido e-POWER' },
      { label: 'Tracción', value: 'Delantera o total e-4ORCE' },
      { label: 'Recarga externa', value: 'No requiere enchufe' },
    ],
    figures: [
      { label: 'Potencias de sistema e-POWER', value: '204 CV (152 kW) y 213 CV (158 kW)' },
      { label: 'Potencia mild hybrid', value: '163 CV (120 kW)' },
      { label: 'Cilindrada del motor VC-Turbo', value: '1.477–1.497 cm³, según homologación' },
    ],
    specNote: 'En e-POWER, la cilindrada es la del motor térmico generador y la potencia se refiere al sistema de tracción que declara Nissan. Se omite el par de los sistemas eléctricos porque las fuentes comparativas consultadas no permiten asociar de forma inequívoca el régimen a una cifra de par del conjunto.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/x-trail.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/x-trail/comparar-sistemas-motrices.html`,
    sources: [source('Nissan X-Trail: gama española', `${root}/vehiculos/nuevos-vehiculos/x-trail.html`), source('Comparativa oficial de sistemas motrices X-Trail', `${root}/vehiculos/nuevos-vehiculos/x-trail/comparar-sistemas-motrices.html`)],
    image: photo('x-trail', 'Nissan X-Trail de generación actual con tracción e-4ORCE fotografiado de tres cuartos.', 'Nissan X-Trail T33 G e-4ORCE.jpg', 'TTTNIS', 'CC0 1.0', 'https://commons.wikimedia.org/wiki/File:Nissan_X-Trail_T33_G_e-4ORCE.jpg', 'Imagen de referencia de un X-Trail de la generación actual; puede variar el año-modelo y el acabado.'),
  }),
  makePage({
    modelSlug: 'micra',
    title: 'Nissan Micra eléctrico: baterías, potencia y datos técnicos | Kilómetro Claro',
    description: 'Conoce las versiones eléctricas del nuevo Nissan Micra en España, sus baterías y potencias oficiales.',
    intro: 'El nuevo Nissan Micra vuelve al mercado español como un utilitario totalmente eléctrico. La gama ofrece dos capacidades de batería y dos niveles de potencia, una combinación pensada para que el comprador valore el equilibrio entre precio, autonomía homologada y frecuencia de carga.',
    powertrainSummary: 'Nissan anuncia una batería de 40 kWh asociada a 122 CV (90 kW) y otra de 52 kWh con 150 CV (110 kW). Al ser eléctrico, el Micra no tiene cilindrada de motor térmico; se omite el par máximo porque la plantilla de la web reserva ese dato para motores cuyo régimen de par se publica.',
    usageNote: 'La batería de 40 kWh puede ser suficiente para un uso urbano y trayectos cotidianos, mientras que la de 52 kWh aporta más margen para recorridos largos. La autonomía real cambia con la temperatura, la velocidad y el uso de climatización. Comprueba la infraestructura de carga habitual y el tiempo de recarga de la versión elegida antes de comprar.',
    versions: [
      version('40 kWh, 122 CV', 'Eléctrico', '122 CV (90 kW)', '—'),
      version('52 kWh, 150 CV', 'Eléctrico', '150 CV (110 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Utilitario eléctrico de cinco puertas' },
      { label: 'Capacidad de batería', value: '40 o 52 kWh, según versión' },
      { label: 'Plazas', value: '5' },
      { label: 'Tipo de recarga', value: 'Conexión externa; compatible con carga en corriente alterna y rápida en corriente continua, según configuración' },
    ],
    figures: [
      { label: 'Potencias publicadas', value: '122 CV (90 kW) y 150 CV (110 kW)' },
      { label: 'Baterías disponibles', value: '40 kWh y 52 kWh' },
      { label: 'Autonomía homologada', value: 'Depende de batería, acabado y homologación; consulta la versión española concreta' },
    ],
    specNote: 'La documentación de Nissan España consultada identifica las capacidades y potencias, pero no un régimen de par máximo aplicable a la tabla de esta web. No se añade un dato de par del motor eléctrico sin ese contexto.',
    officialUrl: 'https://micra.nissan.es/',
    technicalUrl: 'https://spain.nissannews.com/es-ES/releases/saluda-al-nuevo-nissan-micra-sonrisas-garantizadas',
    sources: [source('Nissan Micra: página española', 'https://micra.nissan.es/'), source('Nissan Micra: lanzamiento y datos técnicos', 'https://spain.nissannews.com/es-ES/releases/saluda-al-nuevo-nissan-micra-sonrisas-garantizadas'), source('Micra en la oferta de coches nuevos de Nissan', `${root}/comprar/venta-de-coches/micra`)],
    image: photo('micra', 'Nissan Micra eléctrico de nueva generación fotografiado en una presentación.', 'Nissan Micra EV IMG 8776.jpg', 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Nissan_Micra_EV_IMG_8776.jpg', 'Fotografía de la nueva generación eléctrica presentada en 2026; los detalles de acabado pueden no coincidir con la unidad configurada para España.', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  }),
  makePage({
    modelSlug: 'leaf',
    title: 'Nissan LEAF eléctrico: versiones, batería y potencia | Kilómetro Claro',
    description: 'Consulta las versiones actuales del Nissan LEAF en España: batería de 52 o 75 kWh, potencia y datos publicados por Nissan.',
    intro: 'El Nissan LEAF es un turismo eléctrico de cinco puertas. La gama española actual permite elegir entre dos tamaños de batería, que Nissan asocia a dos potencias distintas. No se limita a comparar autonomía: el tamaño de batería también influye en el peso, el tiempo de carga y el presupuesto de compra.',
    powertrainSummary: 'Nissan España publica una batería de 52 kWh con motor de 177 CV (130 kW) y otra de 75 kWh con 217 CV (160 kW). La cifra exacta de autonomía depende de la versión y el equipamiento, así que es preferible consultar la ficha vigente de la configuración antes de comparar.',
    usageNote: 'La batería pequeña puede ajustarse a desplazamientos diarios con carga accesible; la grande aporta más margen entre recargas y puede resultar más práctica para viajar. En ambos casos, la autonomía real depende de la velocidad, la temperatura y la ruta. Si no dispones de punto de carga habitual, calcula también el coste y el tiempo de la recarga pública.',
    versions: [
      version('52 kWh, 177 CV', 'Eléctrico', '177 CV (130 kW)', '—'),
      version('75 kWh, 217 CV', 'Eléctrico', '217 CV (160 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Turismo eléctrico de cinco puertas' },
      { label: 'Capacidad de batería', value: '52 o 75 kWh' },
      { label: 'Plazas', value: '5' },
      { label: 'Propulsión', value: '100 % eléctrica' },
    ],
    figures: [
      { label: 'Potencias publicadas', value: '177 CV (130 kW) y 217 CV (160 kW)' },
      { label: 'Baterías disponibles', value: '52 kWh y 75 kWh' },
      { label: 'Autonomía', value: 'Varía según batería y configuración; consultar precios y versiones vigentes' },
    ],
    specNote: 'La página española de precios y versiones es la referencia para las dos combinaciones de batería y potencia. En esta tabla la cilindrada figura como «—» al ser un vehículo eléctrico y no se muestra par máximo.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/leaf.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/leaf/precios-y-versiones.html`,
    sources: [source('Nissan LEAF: gama española', `${root}/vehiculos/nuevos-vehiculos/leaf.html`), source('Precios, versiones y especificaciones del LEAF', `${root}/vehiculos/nuevos-vehiculos/leaf/precios-y-versiones.html`)],
    image: photo('leaf', 'Nissan LEAF eléctrico actual visto desde el frente y el lateral.', 'Nissan Leaf B7 G (front three-quarter view) at LaLaport Kadoma.jpg', 'Aos.1905', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Nissan_Leaf_B7_G_(front_three-quarter_view)_at_LaLaport_Kadoma.jpg', 'Imagen de referencia de la generación actual del LEAF; la unidad fotografiada puede corresponder a un acabado o mercado distinto.', 'https://commons.wikimedia.org/wiki/User:Aos.1905'),
  }),
  makePage({
    modelSlug: 'ariya',
    title: 'Nissan ARIYA: versiones eléctricas, potencia y tracción | Kilómetro Claro',
    description: 'Compara las versiones eléctricas del Nissan ARIYA en España, su potencia y diferencias entre tracción delantera y e-4ORCE.',
    intro: 'El Nissan ARIYA es un SUV eléctrico disponible con tracción delantera o con el sistema de tracción total e-4ORCE. La gama española consultada emplea una batería de 87 kWh en las configuraciones principales recogidas en esta ficha; la potencia y el número de motores dependen de la versión.',
    powertrainSummary: 'Las versiones de referencia en España ofrecen 242 CV (178 kW) con tracción delantera y 306 CV (225 kW) con tracción total e-4ORCE. Ambas son eléctricas y utilizan batería de 87 kWh. Nissan puede cambiar acabados y disponibilidad comercial, por lo que las cifras deben contrastarse con el configurador vigente.',
    usageNote: 'La versión delantera tiene un solo motor de tracción; e-4ORCE añade un motor en el eje trasero para mover las cuatro ruedas. La tracción total puede ser útil en firmes de baja adherencia, pero influye en consumo y autonomía. El uso de un SUV eléctrico como coche principal resulta más sencillo si se dispone de carga habitual en casa o en el trabajo.',
    versions: [
      version('87 kWh, tracción delantera', 'Eléctrico', '242 CV (178 kW)', '—'),
      version('87 kWh e-4ORCE, tracción total', 'Eléctrico', '306 CV (225 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV eléctrico de cinco plazas' },
      { label: 'Batería', value: '87 kWh en las versiones incluidas' },
      { label: 'Tracción', value: 'Delantera o total e-4ORCE' },
      { label: 'Plazas', value: '5' },
    ],
    figures: [
      { label: 'Potencia', value: '242 CV (178 kW) o 306 CV (225 kW)' },
      { label: 'Batería', value: '87 kWh' },
      { label: 'Autonomía y carga', value: 'Consultar la homologación y el equipamiento de la versión concreta' },
    ],
    specNote: 'Las dos potencias corresponden a configuraciones de la gama española de 87 kWh consultada. No se muestra un par máximo eléctrico, de acuerdo con el criterio de la tabla de motorizaciones.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/ariya.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/ariya/precios-y-versiones.html`,
    sources: [source('Nissan ARIYA: gama española', `${root}/vehiculos/nuevos-vehiculos/ariya.html`), source('Precios y versiones del ARIYA', `${root}/vehiculos/nuevos-vehiculos/ariya/precios-y-versiones.html`)],
    image: photo('ariya', 'Nissan ARIYA e-4ORCE eléctrico de color claro en vista frontal de tres cuartos.', '2026 Nissan Ariya B9 e-4ORCE with 20-inch wheel.jpg', 'TTTNIS', 'CC0 1.0', 'https://commons.wikimedia.org/wiki/File:2026_Nissan_Ariya_B9_e-4ORCE_with_20-inch_wheel.jpg'),
  }),
  makePage({
    modelSlug: 'townstar-combi',
    title: 'Nissan Townstar Combi: motores gasolina y eléctrico | Kilómetro Claro',
    description: 'Conoce las motorizaciones del Nissan Townstar Combi para pasajeros, con opciones de gasolina y eléctrica.',
    intro: 'Townstar Combi es la furgoneta compacta de pasajeros de Nissan. Se ofrece con motor de gasolina o en versión eléctrica, por lo que puede cubrir desde un uso familiar con mucha capacidad interior hasta desplazamientos urbanos sin emisiones locales durante la circulación.',
    powertrainSummary: 'El motor 1.3 de gasolina desarrolla 130 CV (96 kW) y 240 Nm entre 1.600 y 3.500 rpm, con cambio manual o automático según configuración. La versión eléctrica combina una batería de 45 kWh y 122 CV (90 kW); el régimen del par del motor eléctrico no se publica de una forma comparable y no se incluye.',
    usageNote: 'Antes de elegir, revisa el número de plazas, la longitud de carrocería y el espacio de carga que queda con todos los asientos ocupados. La versión eléctrica puede ser adecuada para ciudad y recorridos previsibles si se puede cargar con regularidad. La transformación camper Townstar Ventus utiliza esta base de pasajeros y se comercializa como una conversión específica, no como una motorización distinta.',
    versions: [
      version('1.3 gasolina 130, manual', 'Gasolina', '130 CV (96 kW)', '1.333 cm³', '240 Nm', 'Motor de gasolina', '1.600–3.500 rpm'),
      version('1.3 gasolina 130, DCT', 'Gasolina', '130 CV (96 kW)', '1.333 cm³', '240 Nm', 'Motor de gasolina', '1.600–3.500 rpm'),
      version('Eléctrico 45 kWh', 'Eléctrico', '122 CV (90 kW)', '—'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Furgoneta compacta de pasajeros' },
      { label: 'Motorizaciones', value: 'Gasolina o eléctrica' },
      { label: 'Cambios', value: 'Manual o automático DCT en gasolina' },
      { label: 'Plazas', value: 'Hasta 5, según configuración' },
    ],
    figures: [
      { label: 'Gasolina', value: '1.3 de 130 CV (96 kW)' },
      { label: 'Eléctrica', value: '122 CV (90 kW), batería de 45 kWh' },
      { label: 'Conversión camper', value: 'Townstar Ventus, disponible sobre la base de pasajeros' },
    ],
    specNote: 'La motorización eléctrica no tiene cilindrada térmica, por eso se indica «—». La página técnica consultada no aporta el régimen del par eléctrico. Townstar Ventus es una conversión camper de la carrocería de pasajeros; no se cuenta como un modelo o motor adicional.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/townstar-combi.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/townstar-combi/comparar-sistemas-motrices.html`,
    sources: [source('Nissan Townstar Combi: gama de pasajeros', `${root}/vehiculos/nuevos-vehiculos/townstar-combi.html`), source('Comparativa de motorizaciones Townstar Combi', `${root}/vehiculos/nuevos-vehiculos/townstar-combi/comparar-sistemas-motrices.html`), source('Nissan Townstar Ventus', `${root}/gama/camper-ventus/townstar-ventus.html`)],
    image: photo('townstar-combi', 'Nissan Townstar Kombi de pasajeros, con ventanillas laterales traseras.', 'Nissan Townstar Kombi 1.3 DIG-T 130 Tekna – f 25042024.jpg', 'M 93', 'CC BY-SA 3.0 Alemania', 'https://commons.wikimedia.org/wiki/File:Nissan_Townstar_Kombi_1.3_DIG-T_130_Tekna_%E2%80%93_f_25042024.jpg', 'La imagen corresponde a Townstar Kombi de pasajeros; algunas especificaciones de la unidad fotografiada pueden variar según el acabado español.'),
  }),
  makePage({
    modelSlug: 'primastar-combi',
    title: 'Nissan Primastar Combi: motores diésel y versiones de pasajeros | Kilómetro Claro',
    description: 'Consulta las versiones diésel de pasajeros del Nissan Primastar Combi en España, con potencias, cilindrada y par publicado.',
    intro: 'Primastar Combi es la furgoneta grande de pasajeros de Nissan, con carrocerías y distribuciones que permiten transportar a grupos o familias con mucho equipaje. La gama de particulares consultada emplea motores diésel 2.0 dCi y ofrece cambios manuales o automáticos en determinadas potencias.',
    powertrainSummary: 'La oferta española para pasajeros consultada incluye 2.0 dCi de 110 CV manual y 150 CV con cambio manual o automático. Nissan publica 300 Nm a 1.500 rpm para la variante de 110 CV. En las variantes de 150 CV la documentación actual consultada no confirma el régimen de par de forma suficiente, por lo que esa cifra se omite.',
    usageNote: 'Su tamaño puede resultar útil para viajes con varios ocupantes, transporte familiar o conversiones camper, pero conviene comprobar la longitud, la distribución de asientos y la altura de aparcamiento habitual. Primastar Ventus es una transformación camper de pasajeros, no una mecánica independiente; sus plazas y equipamiento dependen de la versión.',
    versions: [
      version('2.0 dCi 110, manual', 'Diésel', '110 CV (81 kW)', '1.997 cm³', '300 Nm', 'Motor diésel', '1.500 rpm'),
      version('2.0 dCi 150, manual', 'Diésel', '150 CV (110 kW)', '1.997 cm³'),
      version('2.0 dCi 150, automático', 'Diésel', '150 CV (110 kW)', '1.997 cm³'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Furgoneta de pasajeros de tamaño grande' },
      { label: 'Motorización', value: 'Diésel 2.0 dCi' },
      { label: 'Plazas', value: 'Hasta 9, según carrocería y distribución' },
      { label: 'Cambios', value: 'Manual o automático, según versión' },
    ],
    figures: [
      { label: 'Potencias incluidas', value: '110 CV (81 kW) y 150 CV (110 kW)' },
      { label: 'Cilindrada', value: '1.997 cm³' },
      { label: 'Conversión camper', value: 'Primastar Ventus, ofrecida con configuraciones de pasajeros específicas' },
    ],
    specNote: 'Se incluyen las motorizaciones de Primastar Combi para particulares verificadas en el configurador de Nissan. Aunque existen otras cifras de par en documentación de la familia Primastar, la tabla solo muestra el dato de 110 CV porque es el único para el que la fuente española consultada identifica claramente el régimen en esta configuración. Primastar Ventus es una conversión de pasajeros; no se cuenta como otra versión mecánica.',
    officialUrl: `${root}/vehiculos/nuevos-vehiculos/primastar.html`,
    technicalUrl: `${root}/vehiculos/nuevos-vehiculos/primastar/motores.html`,
    sources: [source('Nissan Primastar: gama española', `${root}/vehiculos/nuevos-vehiculos/primastar.html`), source('Motorizaciones Primastar', `${root}/vehiculos/nuevos-vehiculos/primastar/motores.html`), source('Configurador Nissan para clientes particulares', 'https://configurador.nissan.es/inicio?lang=es&pbParticulares=true'), source('Nissan Primastar Ventus', `${root}/gama/camper-ventus/primastar-ventus.html`)],
    image: photo('primastar-combi', 'Nissan Primastar Combi de pasajeros fotografiado en una exposición de automóviles.', '2022 Nissan Primastar Automesse Ludwigsburg 2022 1X7A5926.jpg', 'Alexander Migl', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:2022_Nissan_Primastar_Automesse_Ludwigsburg_2022_1X7A5926.jpg', 'La imagen muestra una versión de pasajeros de la generación actual; el acabado y la configuración pueden variar en España.', 'https://commons.wikimedia.org/wiki/User:Alexander-93'),
  }),
];

export const nissanModels = records;
