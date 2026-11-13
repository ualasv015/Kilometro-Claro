import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '5 de noviembre de 2026';
const root = 'https://www.kia.com/es';
const range = `${root}/modelos/modelos-kia/gama-kia/`;
const version = (name: string, power: string, displacement: string, maxTorque: string, torqueRpm: string, additionalTorque?: string, classification?: Pick<ModelVersion, 'type' | 'powertrainGroup'>, torqueScopeOverride?: string): ModelVersion => ({
  ...classification,
  name, power, displacement, maxTorque, torqueScope: torqueScopeOverride ?? (name.includes('EV') || name.includes('eléctrico') ? 'Motor eléctrico o sistema indicado' : 'Motor/sistema según versión'), torqueRpm,
  ...(additionalTorque ? { additionalTorque } : {}),
});

type KiaProfile = {
  slug: string; name: string; body: string; intro: string; summary: string; usage: string;
  versions: ModelVersion[]; facts: { label: string; value: string }[]; figures: { label: string; value: string }[];
  official: string; technical: string; note?: string;
};

const profiles: KiaProfile[] = [
  {
    slug: 'picanto', name: 'Picanto', body: 'Urbano',
    intro: 'El Picanto es el turismo de acceso de Kia: una carrocería pequeña de cinco puertas pensada para maniobrar y aparcar en ciudad. La gama española consultada utiliza gasolina 1.0 y permite escoger caja manual o manual automatizada AMT.',
    summary: 'Kia España describe un motor 1.0 GDi de gasolina, con transmisión manual de cinco relaciones o AMT. La marca ofrece varios acabados; el equipamiento y las ruedas dependen de la configuración.',
    usage: 'Su tamaño favorece los desplazamientos urbanos y el aparcamiento, pero conviene probar las plazas traseras y el maletero si será el coche principal para viajar. La caja AMT automatiza el embrague y el cambio; su tacto no es idéntico al de un automático de convertidor o doble embrague.',
    versions: [version('1.0 GDi 5MT', '68 CV (50 kW)', '998 cm³', '96 Nm', '4.000 rpm', 'Tracción delantera; cambio manual de cinco marchas.', undefined, 'Motor de gasolina'), version('1.0 GDi 5AMT · GT-Line', '68 CV (50 kW)', '998 cm³', '96 Nm', '4.000 rpm', 'Tracción delantera; cambio manual automatizado de cinco marchas.', undefined, 'Motor de gasolina')],
    facts: [{ label: 'Carrocería', value: 'Urbano de cinco puertas' }, { label: 'Plazas', value: '4' }, { label: 'Combustible', value: 'Gasolina' }, { label: 'Transmisión', value: 'Manual o AMT, según acabado' }],
    figures: [{ label: 'Motor anunciado', value: '1.0 GDi' }, { label: 'Cambios disponibles', value: '5MT o AMT' }],
    official: `${root}/modelos/picanto/descubrelo/`, technical: `${root}/modelos/picanto/especificaciones/`,
  },
  {
    slug: 'stonic', name: 'Stonic', body: 'SUV urbano',
    intro: 'El Stonic ocupa el espacio de SUV urbano de Kia. La oferta española incluye un 1.0 T-GDi convencional y versiones MHEV de 48 V, con caja manual o DCT de siete relaciones según acabado.',
    summary: 'La ficha técnica española enumera el 1.0 T-GDi de 100 CV y el 1.0 T-GDi MHEV de 48 V y 115 CV. La hibridación ligera asiste al motor térmico, pero no permite circular como un eléctrico enchufable.',
    usage: 'La versión MHEV puede recuperar energía y asistir al motor, aunque sigue dependiendo de la gasolina. Al comparar ofertas, revisa si el acabado incorpora caja manual o DCT y confirma la homologación WLTP de esa combinación concreta.',
    versions: [
      version('1.0 T-GDi 100 · 6MT', '100 CV (73,6 kW)', '998 cm³', '172 Nm', '1.500–3.500 rpm', 'Gasolina; tracción delantera.', undefined, 'Motor de gasolina'),
      version('1.0 T-GDi MHEV 115 · 6MT', '115 CV (84,6 kW)', '998 cm³', '200 Nm', '2.000–3.000 rpm', 'Hibridación ligera de 48 V; tracción delantera.', undefined, 'Motor térmico de gasolina'),
      version('1.0 T-GDi MHEV 115 · 7DCT', '115 CV (84,6 kW)', '998 cm³', '200 Nm', '2.000–3.000 rpm', 'Hibridación ligera de 48 V; tracción delantera.', undefined, 'Motor térmico de gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de cinco puertas' }, { label: 'Plazas', value: '5' }, { label: 'Motores', value: 'Gasolina y MHEV 48 V' }, { label: 'Cambio', value: 'Manual o DCT, según versión' }],
    figures: [{ label: 'Potencias anunciadas', value: '100 y 115 CV' }, { label: 'Cilindrada', value: '998 cm³' }],
    official: `${root}/modelos/stonic/descubrelo/`, technical: `${root}/modelos/stonic/especificaciones/`,
  },
  {
    slug: 'ev2', name: 'EV2', body: 'SUV urbano eléctrico',
    intro: 'El EV2 es el eléctrico urbano de Kia. Su formato corto busca combinar uso diario en ciudad con una batería suficiente para salir del entorno urbano, aunque la ficha española debe consultarse por acabado y tamaño de rueda.',
    summary: 'Kia España ofrece el EV2 con batería Standard Range de 42,2 kWh y Long Range de 61,0 kWh. La marca publica 108 kW (147 CV) para la primera y 135 CV para la segunda; la autonomía WLTP combinada anunciada alcanza 317 y 453 km, respectivamente.',
    usage: 'La autonomía homologada no es una garantía de distancia en autopista: velocidad, temperatura, pendiente y climatización cambian el resultado. Para uso principalmente urbano, también importa el acceso a carga doméstica o de destino.',
    versions: [
      version('Standard Range 42,2 kWh', '147 CV (107,8 kW)', 'No aplica: eléctrico', '250 Nm', '4.000 rpm aprox.', 'Tracción delantera; batería LFP de 42,2 kWh.'),
      version('Long Range 61,0 kWh', '135 CV (99 kW)', 'No aplica: eléctrico', '', '', 'Tracción delantera; batería de 61,0 kWh. Kia España no publica aquí un régimen de par máximo para esta versión.'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano eléctrico' }, { label: 'Plazas', value: '5' }, { label: 'Maletero', value: 'Hasta 362 l, según configuración' }, { label: 'Baterías', value: '42,2 o 61,0 kWh' }],
    figures: [{ label: 'Potencia', value: '147 CV Standard Range; 135 CV Long Range' }, { label: 'Autonomía WLTP combinada', value: 'Hasta 317 km Standard Range o 453 km Long Range' }, { label: 'Carga rápida', value: '10–80 % en unos 29–30 min, según batería' }],
    official: `${root}/modelos/ev2/descubrelo/`, technical: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/catalogos/ev2/Catalogo_EV2_MY27.pdf',
    note: 'La ficha de Kia España anuncia 108 kW/147 CV y 317 km para Standard Range, y 135 CV y 453 km para Long Range. Las cifras de autonomía son WLTP y dependen de la configuración.',
  },
  {
    slug: 'ev3', name: 'EV3', body: 'SUV eléctrico',
    intro: 'El EV3 es un SUV compacto eléctrico con dos capacidades de batería en la documentación europea de Kia: Standard Range y Long Range. Las dos comparten un motor delantero, mientras cambia la autonomía y el peso.',
    summary: 'El catálogo técnico de Kia publica baterías de 58,3 y 81,4 kWh, potencia de 150 kW (204 CV) y par máximo de 283 Nm. La autonomía WLTP combinada llega a 436 km con la batería pequeña y a 605 km con la grande en la configuración indicada.',
    usage: 'La batería Long Range resulta más adecuada si los viajes largos son frecuentes; para decidir, compara el precio adicional con tus kilómetros y la facilidad de recarga. Los máximos WLTP citados corresponden a determinadas llantas y no deben leerse como autonomía real constante.',
    versions: [version('Standard Range 58,3 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según ficha', 'Tracción delantera.'), version('Long Range 81,4 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según ficha', 'Tracción delantera; autonomía WLTP superior.')],
    facts: [{ label: 'Carrocería', value: 'SUV compacto eléctrico' }, { label: 'Plazas', value: '5' }, { label: 'Baterías', value: '58,3 o 81,4 kWh' }, { label: 'Potencia', value: '150 kW (204 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 436 km / 605 km, según batería y configuración' }, { label: 'Consumo eléctrico WLTP', value: '14,9–16,2 kWh/100 km' }],
    official: `${root}/modelos/ev3/descubrelo/`, technical: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/catalogos/ev3/2025/ev3-2025.pdf',
  },
  {
    slug: 'ev4', name: 'EV4', body: 'Compacto eléctrico',
    intro: 'El EV4 hatchback es la carrocería compacta de cinco puertas de la familia eléctrica Kia. Comparte la arquitectura de batería con el Fastback, pero su silueta y dimensiones generan capacidades y autonomías distintas.',
    summary: 'El catálogo MY26 ofrece baterías de 58,3 y 81,4 kWh, motor delantero de 150 kW (204 CV) y 283 Nm. Kia anuncia hasta 625 km WLTP para el hatchback de gran batería; el valor varía con llantas y acabado.',
    usage: 'Frente al Fastback, el hatchback prioriza una carrocería más corta y acceso trasero convencional. Si haces viajes largos, compara las autonomías homologadas de la configuración concreta y la capacidad de carga del maletero.',
    versions: [version('Standard Range 58,3 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según catálogo', 'Tracción delantera.'), version('Long Range 81,4 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según catálogo', 'Tracción delantera.')],
    facts: [{ label: 'Carrocería', value: 'Compacto eléctrico de cinco puertas' }, { label: 'Baterías', value: '58,3 o 81,4 kWh' }, { label: 'Maletero', value: '435 l' }, { label: 'Potencia', value: '150 kW (204 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 625 km en la variante Long Range' }, { label: 'Carga rápida DC', value: '10–80 % en unos 29–31 min, según batería' }],
    official: `${root}/modelos/ev4/descubrelo/`, technical: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/catalogos/ev4/Catalogo_EV4_MY26.pdf',
  },
  {
    slug: 'ev4-fastback', name: 'EV4 Fastback', body: 'Berlina eléctrica',
    intro: 'El EV4 Fastback transforma la propuesta compacta eléctrica de Kia en una berlina de cuatro puertas con una zaga más larga. Aunque comparte motor y baterías con el EV4 hatchback, no comparte todos sus datos de autonomía y maletero.',
    summary: 'La ficha MY26 incluye 58,3 y 81,4 kWh, 150 kW (204 CV) y 283 Nm. Kia homologa hasta 633 km WLTP para el Fastback de gran batería y hasta 490 litros de maletero.',
    usage: 'La carrocería Fastback puede interesar a quien prioriza aerodinámica y un maletero de gran volumen. Comprueba la altura de carga y la abertura trasera si transportar objetos voluminosos es habitual.',
    versions: [version('Standard Range 58,3 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según catálogo', 'Tracción delantera.'), version('Long Range 81,4 kWh', '150 kW (204 CV)', 'No aplica: eléctrico', '283 Nm', 'En torno a 5.000 rpm según catálogo', 'Tracción delantera.')],
    facts: [{ label: 'Carrocería', value: 'Berlina Fastback de cuatro puertas' }, { label: 'Baterías', value: '58,3 o 81,4 kWh' }, { label: 'Maletero', value: '490 l' }, { label: 'Potencia', value: '150 kW (204 CV)' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 633 km con batería de 81,4 kWh' }, { label: 'Carga rápida', value: '10–80 % en 29–31 min, según batería' }],
    official: `${root}/modelos/ev4/descubrelo/`, technical: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/catalogos/ev4/Catalogo_EV4_MY26.pdf',
  },
  {
    slug: 'k4', name: 'K4', body: 'Compacto',
    intro: 'El K4 es el compacto de Kia con carrocería de cinco puertas. Su planteamiento combina motores de gasolina turbo y una oferta que puede incorporar hibridación ligera según mercado, año y versión.',
    summary: 'La página española de Kia presenta el K4 como compacto de nueva generación y enlaza a configurador y especificaciones. Las potencias, caja y disponibilidad se consultan por acabado, por lo que no agrupamos cifras de mercados distintos.',
    usage: 'Para comparar el K4 con un SUV, revisa espacio útil, facilidad de acceso y maletero, además del consumo. La presencia de un sistema MHEV no equivale a un híbrido autorrecargable ni a un PHEV.',
    versions: [
      version('1.0 T-GDi MHEV', '85 kW (115 CV)', '998 cm³', '200 Nm', '2.000–3.000 rpm', undefined, undefined, 'Motor térmico de gasolina'),
      version('1.6 T-GDi', '110 kW (150 CV)', '1.598 cm³', '250 Nm', '1.500–4.000 rpm', undefined, undefined, 'Motor de gasolina'),
      version('1.6 T-GDi', '132 kW (180 CV)', '1.598 cm³', '265 Nm', '1.500–4.500 rpm', undefined, undefined, 'Motor de gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de cinco puertas' }, { label: 'Plazas', value: '5' }, { label: 'Combustible', value: 'Gasolina; hibridación ligera según versión' }, { label: 'Consulta', value: 'Ficha y configurador Kia España' }],
    figures: [{ label: 'Disponibilidad', value: 'Acabados y motores sujetos a la gama española vigente' }],
    official: `${root}/modelos/k4/descubrelo/`, technical: `${root}/modelos/k4/especificaciones/`,
  },
  {
    slug: 'niro', name: 'Niro', body: 'Crossover',
    intro: 'El Niro es un crossover compacto que Kia España presenta actualmente con una única motorización híbrida no enchufable. Combina un motor de gasolina 1.6 GDi con asistencia eléctrica y transmisión automática de doble embrague.',
    summary: 'La ficha española vigente identifica el 1.6 GDi HEV con 101,5 kW (138 CV) de potencia combinada. No añadimos el antiguo Niro PHEV: no figura en la gama actual de modelos particulares de Kia España consultada.',
    usage: 'El sistema HEV no necesita conexión a la red: recupera energía durante la conducción y la utiliza junto al motor térmico. Para valorar su consumo, ten en cuenta que el resultado depende del recorrido, el tráfico, la temperatura y el estilo de conducción.',
    versions: [version('1.6 GDi HEV · sistema 138 CV', '138 CV (101,5 kW)', '1.580 cm³', '141 Nm', '4.000 rpm', 'Potencia combinada del sistema; el par mostrado corresponde al motor de gasolina.', undefined, 'Motor de gasolina')],
    facts: [{ label: 'Carrocería', value: 'Crossover compacto' }, { label: 'Tecnología', value: 'Híbrido no enchufable (HEV)' }, { label: 'Recarga externa', value: 'No requiere enchufe' }, { label: 'Plazas', value: '5' }],
    figures: [{ label: 'Potencia combinada', value: '138 CV (101,5 kW)' }],
    official: `${root}/modelos/niro/descubrelo/`, technical: `${root}/modelos/niro/especificaciones/`,
    note: 'La gama de modelos particulares de Kia España consultada muestra el Niro HEV. Se excluye el Niro PHEV de catálogos y páginas antiguas que aún pueden seguir accesibles.',
  },
  {
    slug: 'xceed', name: 'XCeed', body: 'Crossover',
    intro: 'El XCeed combina la base de un compacto con una carrocería crossover de mayor altura. Kia España presenta motores de gasolina y versiones con hibridación ligera; no debe confundirse con un híbrido enchufable salvo que el configurador de la unidad lo indique.',
    summary: 'La página oficial de especificaciones publica las motorizaciones por acabado. La oferta consultada se centra en gasolina T-GDi y MHEV; las configuraciones disponibles pueden cambiar durante el ciclo comercial.',
    usage: 'La altura y posición de acceso pueden resultar cómodas en el día a día, mientras que la longitud compacta facilita el aparcamiento respecto a SUV mayores. Si lo comparas con un Ceed, revisa consumo homologado, maletero y equipamiento de serie.',
    versions: [
      version('1.0 T-GDi 115 · 6MT', '115 CV (85 kW)', '998 cm³', '172 Nm', '1.500–4.000 rpm', undefined, undefined, 'Motor de gasolina'),
      version('1.0 T-GDi MHEV 115 · 6MT', '115 CV (84,6 kW)', '998 cm³', '200 Nm', '2.000–3.000 rpm', undefined, undefined, 'Motor térmico de gasolina'),
      version('1.0 T-GDi MHEV 115 · 7DCT', '115 CV (84,6 kW)', '998 cm³', '200 Nm', '2.000–3.000 rpm', undefined, undefined, 'Motor térmico de gasolina'),
      version('1.6 T-GDi 150 · 7DCT', '150 CV (110,3 kW)', '1.598 cm³', '250 Nm', '1.500–4.000 rpm', undefined, undefined, 'Motor de gasolina'),
      version('1.6 T-GDi 180 · 7DCT', '180 CV (132,4 kW)', '1.598 cm³', '265 Nm', '1.500–4.500 rpm', undefined, undefined, 'Motor de gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'Crossover compacto' }, { label: 'Plazas', value: '5' }, { label: 'Motores', value: 'Gasolina; MHEV según acabado' }, { label: 'Fichas oficiales', value: 'Motor, medidas y equipamiento en Kia España' }],
    figures: [{ label: 'Uso', value: 'Formato elevado con base de compacto' }],
    official: `${root}/modelos/xceed/descubrelo/`, technical: `${root}/modelos/xceed/especificaciones/`,
  },
  {
    slug: 'seltos', name: 'Seltos', body: 'SUV',
    intro: 'El Seltos es un SUV compacto que se ha incorporado a la gama española de Kia. Su ficha de producto permite distinguir las combinaciones manual y automática, con tracción delantera o total, todas asociadas al motor 1.6 T-GDi de gasolina.',
    summary: 'La página de Kia España muestra tres configuraciones del 1.6 T-GDi de 180 CV: 6MT 2WD, 7DCT 2WD y 7DCT AWD. El contenido técnico del modelo todavía contiene un aviso de homologación y desarrollo, por lo que las cifras pueden cambiar antes o durante su comercialización.',
    usage: 'Antes de compararlo con Sportage, considera dimensiones, plazas, maletero y las diferencias entre tracción delantera y total. Las fichas de Kia son la referencia para comprobar consumo, emisiones y etiqueta de cada configuración.',
    versions: [
      version('1.6 T-GDi 180 · 6MT · 2WD', '180 CV (132 kW)', '1.598 cm³', '', '', 'Gasolina; tracción delantera.', undefined, 'Motor de gasolina'),
      version('1.6 T-GDi 180 · 7DCT · 2WD', '180 CV (132 kW)', '1.598 cm³', '', '', 'Gasolina; tracción delantera.', undefined, 'Motor de gasolina'),
      version('1.6 T-GDi 180 · 7DCT · AWD', '180 CV (132 kW)', '1.598 cm³', '', '', 'Gasolina; tracción total.', undefined, 'Motor de gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV' }, { label: 'Plazas', value: '5' }, { label: 'Mercado', value: 'Gama oficial Kia España' }, { label: 'Motor', value: '1.6 T-GDi gasolina; 2WD o AWD' }],
    figures: [{ label: 'Configuraciones', value: 'Manual 6MT o automática 7DCT, según versión' }],
    official: `${root}/modelos/seltos/descubrelo/`, technical: 'https://eu-www.kia.com/es/modelos/seltos/especificaciones/',
    note: 'Kia España advierte que las especificaciones del Seltos son objetivos sujetos a desarrollo y homologación, por lo que pueden cambiar. Conviene confirmar la configuración y sus cifras en el concesionario antes de formalizar una compra.',
  },
  {
    slug: 'sportage', name: 'Sportage', body: 'SUV',
    intro: 'El Sportage es un SUV compacto con una gama española que combina motores de gasolina, diésel con hibridación ligera de 48 V y un híbrido HEV. Kia España indica que la variante PHEV llegará más adelante; por eso no aparece aquí como una opción actualmente disponible.',
    summary: 'El catálogo español MY27 documenta gasolina 1.6 T-GDi de 150 CV y 180 CV, diésel 1.6 MHEV de 136 CV y HEV de 239 CV. El motor de gasolina de 180 CV del HEV no es una potencia MHEV: la potencia total del sistema es 239 CV. El catálogo también ofrece el 1.6 T-GDi 180 de gasolina con 7DCT y tracción total.',
    usage: 'El HEV no requiere enchufe y puede ser apropiado para uso mixto; el PHEV puede recorrer parte de los desplazamientos con electricidad si se carga habitualmente. Las plazas, el maletero y el consumo cambian entre motorizaciones y tracciones.',
    versions: [
      version('1.6 T-GDi 150 · 6MT', '150 CV (110,3 kW)', '1.598 cm³', '250 Nm', '1.500–4.000 rpm', 'Gasolina; tracción delantera.', undefined, 'Motor de gasolina'),
      version('1.6 T-GDi 180 · 7DCT', '180 CV (132,4 kW)', '1.598 cm³', '265 Nm', '1.500–4.500 rpm', 'Gasolina; tracción total.', undefined, 'Motor de gasolina'),
      version('1.6 CRDi MHEV 136 · 6MT', '136 CV (100 kW)', '1.598 cm³', '280 Nm', '1.500–2.750 rpm', 'Microhíbrido diésel; tracción delantera.', undefined, 'Motor térmico diésel'),
      version('1.6 CRDi MHEV 136 · 7DCT', '136 CV (100 kW)', '1.598 cm³', '320 Nm', '2.000–2.250 rpm', 'Microhíbrido diésel; tracción delantera.', undefined, 'Motor térmico diésel'),
      version('1.6 HEV · sistema 239 CV', '239 CV (175,7 kW)', '1.598 cm³', '265 Nm', '1.500–4.500 rpm', 'Híbrido no enchufable; Kia publica por separado 380 Nm de par combinado, sin régimen único.', undefined, 'Motor gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto' }, { label: 'Plazas', value: '5' }, { label: 'Longitud publicada', value: '4.540 mm (ficha MY27)' }, { label: 'Tracción', value: 'Delantera o integral según motor' }],
    figures: [{ label: 'HEV MY27', value: '239 CV; par combinado de 380 Nm sin régimen atribuido' }, { label: 'Maletero', value: '526–591 l, según variante publicada' }],
    official: `${root}/modelos/sportage/descubrelo/`, technical: 'https://www.kia.com/content/dam/kwcms/kme/es/es/assets/contents/catalogos/sportage/Catalogo_Sportage_MY27.pdf',
    note: 'La gama española consultada presenta el PHEV como próximo lanzamiento; se excluye de las motorizaciones actuales. El motor 1.6 T-GDi de 180 CV puede aparecer tanto como motor térmico del HEV como en versión de gasolina independiente: sus potencias de sistema y térmicas se identifican por separado.',
  },
  {
    slug: 'ev5', name: 'EV5', body: 'SUV eléctrico',
    intro: 'El EV5 es un SUV eléctrico de Kia de orientación familiar. Su carrocería prioriza espacio interior y una posición de conducción elevada, mientras que la batería de gran capacidad sitúa el modelo en el segmento de eléctricos pensados también para viajar.',
    summary: 'Kia España declara para la versión de tracción delantera una batería de 81,4 kWh, motor de 160 kW (217 CV) y autonomía de hasta 530 km WLTP. El acabado y las llantas modifican el alcance homologado.',
    usage: 'La autonomía máxima se refiere a la versión más favorable, no a cualquier EV5. Para decidir, revisa también potencia de carga, curva de carga, consumo y disponibilidad de puntos en tus rutas habituales.',
    versions: [version('FWD Long Range 81,4 kWh', '160 kW (217 CV)', 'No aplica: eléctrico', 'No publicado en el resumen español consultado', 'No publicado', 'Motor delantero; batería de 81,4 kWh.')],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico familiar' }, { label: 'Batería', value: '81,4 kWh' }, { label: 'Potencia', value: '160 kW (217 CV)' }, { label: 'Plazas', value: '5' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 530 km en FWD Long Range' }],
    official: `${root}/modelos/ev5/descubrelo/`, technical: `${root}/modelos/ev5/especificaciones/`,
  },
  {
    slug: 'ev6', name: 'EV6', body: 'Crossover eléctrico',
    intro: 'El EV6 es un crossover eléctrico de Kia con una gama que combina baterías de distinta capacidad, tracción trasera o integral y una variante GT de altas prestaciones. La batería de 84 kWh representa la actualización más reciente de la gama consultada.',
    summary: 'Kia publica baterías de 62,9 y 84 kWh, desde 170 CV en RWD hasta 325 CV en AWD y 650 CV en EV6 GT. La batería mayor alcanza hasta 582 km WLTP; la carga del 10 al 80 % puede realizarse en 18 minutos bajo condiciones compatibles.',
    usage: 'La autonomía cambia mucho con tracción, potencia, acabado y neumáticos. Si comparas el GT con las versiones de uso diario, trata por separado prestaciones, consumo y coste de neumáticos: no son configuraciones equivalentes.',
    versions: [version('RWD 62,9 kWh', '170 CV', 'No aplica: eléctrico', 'No publicado en ficha resumida', 'No publicado', 'Tracción trasera.'), version('RWD 84 kWh', '229 CV', 'No aplica: eléctrico', '350 Nm', 'No publicado en ficha resumida', 'Tracción trasera.'), version('AWD 84 kWh', '325 CV', 'No aplica: eléctrico', '605 Nm', 'No publicado en ficha resumida', 'Tracción total.'), version('EV6 GT AWD', '650 CV', 'No aplica: eléctrico', '770 Nm', 'No publicado en ficha resumida', 'Versión de altas prestaciones.')],
    facts: [{ label: 'Carrocería', value: 'Crossover eléctrico' }, { label: 'Baterías', value: '62,9 o 84 kWh' }, { label: 'Plazas', value: '5' }, { label: 'Recarga', value: 'Arquitectura de alta potencia; depende del punto' }],
    figures: [{ label: 'Autonomía WLTP máxima', value: 'Hasta 582 km, según versión' }, { label: 'Carga rápida', value: '10–80 % en 18 min, bajo condiciones adecuadas' }],
    official: `${root}/modelos/ev6/descubrelo/`, technical: `${root}/modelos/ev6/especificaciones/`,
  },
  {
    slug: 'sorento', name: 'Sorento', body: 'SUV de 7 plazas',
    intro: 'El Sorento es el SUV grande de Kia con tres filas de asientos. La gama española reúne versiones diésel e híbridas, incluido un PHEV; el espacio de equipaje cambia de forma notable cuando se despliegan las siete plazas.',
    summary: 'La página de Kia España ofrece Sorento diésel, HEV y PHEV. La documentación oficial describe el HEV con gasolina turbo 1.6, motor eléctrico de 44,2 kW y batería de 1,5 kWh; potencia, par y homologación deben verificarse por acabado vigente.',
    usage: 'Si viajarán siete personas con frecuencia, mide el espacio que queda detrás de la tercera fila y prueba el acceso a ella. El HEV evita la recarga externa; el PHEV necesita enchufarse para aprovechar su modo eléctrico y añade masa a la carrocería.',
    versions: [
      version('MY25 · 2.2 CRDi 194 · 8DCT', '194 CV (142 kW)', '2.151 cm³', '440 Nm', '1.750–2.750 rpm', 'Diésel; tracción 4x2 o 4x4 según acabado.', undefined, 'Motor diésel'),
      version('1.6 T-GDi HEV · sistema 230 CV', '230 CV (169 kW)', '1.598 cm³', '', '', 'Motor gasolina turbo de 1,6 l y sistema eléctrico de 44,2 kW; transmisión automática.', undefined, 'Motor gasolina'),
      version('1.6 T-GDi PHEV · sistema 265 CV', '265 CV (195 kW)', '1.598 cm³', '', '', 'Sistema híbrido enchufable; confirmar disponibilidad por acabado y año-modelo.', undefined, 'Motor gasolina'),
    ],
    facts: [{ label: 'Carrocería', value: 'SUV grande' }, { label: 'Plazas', value: 'Hasta 7' }, { label: 'Motores', value: 'Diésel, HEV y PHEV según gama/año-modelo' }, { label: 'Tercera fila', value: 'Reduce el espacio de carga cuando se usa' }],
    figures: [{ label: 'HEV', value: '230 CV de sistema; gasolina 1.6 turbo + motor eléctrico de 44,2 kW' }, { label: 'Batería HEV', value: '1,5 kWh' }],
    official: `${root}/modelos/sorento/descubrelo/`, technical: `${root}/modelos/sorento/especificaciones/`,
    note: 'La cifra de 194 CV y la cilindrada diésel proceden del último catálogo español técnico localizado (MY25); Kia España conserva en su página actual las opciones diésel, HEV y PHEV. Las potencias de sistema HEV/PHEV se muestran según la página española vigente, no se combinan con el par de cada motor.',
  },
  {
    slug: 'ev9', name: 'EV9', body: 'SUV eléctrico de 7 plazas',
    intro: 'El EV9 es el SUV eléctrico grande de Kia, con tres filas y configuraciones de seis o siete plazas. Su batería de gran capacidad y la tracción integral opcional responden a un uso familiar de largo recorrido, con un peso y tamaño superiores a los de un SUV compacto.',
    summary: 'Kia ofrece el EV9 con batería de 99,8 kWh y varias potencias y tracciones. La autonomía WLTP depende de la carrocería, llanta y número de motores; la versión AWD de mayor potencia no comparte la cifra máxima de la variante RWD.',
    usage: 'Con siete plazas ocupadas, el volumen de equipaje y el consumo energético deben valorarse conjuntamente. Antes de planificar viajes, comprueba autonomía homologada de la versión, carga rápida y disponibilidad de estaciones adecuadas para un vehículo grande.',
    versions: [version('GT-Line AWD 99,8 kWh', '384 CV (282,6 kW)', 'No aplica: eléctrico', '', '', 'La ficha MY26 española publica dos motores eléctricos y tracción integral.')],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico grande' }, { label: 'Plazas', value: '6 o 7, según configuración' }, { label: 'Batería', value: '99,8 kWh en la gama documentada' }, { label: 'Tracción', value: 'Trasera o integral según versión' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Depende de la configuración; consultar ficha por acabado' }],
    official: `${root}/modelos/ev9/descubrelo/`, technical: `${root}/modelos/ev9/especificaciones/`,
  },
  {
    slug: 'pv5-passenger', name: 'PV5 Passenger', body: 'Furgoneta eléctrica de pasajeros',
    intro: 'PV5 Passenger es el vehículo eléctrico de pasajeros de la familia PBV de Kia. Su arquitectura prioriza el espacio y la modularidad, por lo que se compara mejor con monovolúmenes y vehículos de transporte que con un turismo convencional.',
    summary: 'La ficha oficial española contempla baterías de 51,5 y 71,2 kWh y motores delanteros de 122 o 143 kW según versión. Los datos de plazas, autonomía y equipamiento dependen de la configuración Passenger concreta.',
    usage: 'La batería Long Range aumenta la capacidad energética pero también cambia precio, peso y carga útil. Comprueba la homologación exacta de asientos y el espacio con todas las plazas ocupadas antes de planificar un uso familiar o profesional.',
    versions: [version('FWD Medium Range 51,5 kWh', '122 CV (89,4 kW)', 'No aplica: eléctrico', '250 Nm', 'No se publica un régimen de rpm', 'La potencia de 122 kW indicada en otra fila del folleto es la potencia de la batería, no la del motor.'), version('FWD Long Range 71,2 kWh', '163 CV (120 kW)', 'No aplica: eléctrico', '250 Nm', 'No se publica un régimen de rpm', 'La potencia de 143 kW indicada en otra fila del folleto es la potencia de la batería, no la del motor.')],
    facts: [{ label: 'Carrocería', value: 'Vehículo eléctrico de pasajeros' }, { label: 'Tracción', value: 'Delantera' }, { label: 'Baterías', value: '51,5 o 71,2 kWh' }, { label: 'Plazas', value: 'Según configuración Passenger' }],
    figures: [{ label: 'Carga rápida', value: '10–80 % en menos de 30 min con punto compatible' }, { label: 'Carga AC', value: 'Hasta 7–10 h según batería y potencia del punto' }],
    official: 'https://eu-www.kia.com/es/pbv/vehiculos/pv5-passenger/descubrelo/', technical: 'https://eu-www.kia.com/es/pbv/vehiculos/pv5-passenger/especificaciones/',
  },
];

const kiaPriceNote = 'Precio pendiente de verificación (revisión: 5 de noviembre de 2026). Las fichas españolas remiten al configurador para consultar acabados y precios; el configurador identifica los importes publicados como estimaciones financiando y no vinculantes. La oferta visible indicaba vigencia hasta el 26/10/2026, ya vencida en la fecha de revisión, y algunas cifras eléctricas incorporaban anticipos de ayudas. No se muestran como precio actual ni se extrapolan a otras versiones. No se localizó una tarifa pública vigente y no condicionada que permita confirmar el PVP base de cada modelo y motorización. Comprueba la tarifa actual con Kia antes de comparar precios.';

export const kiaModels: ModelPageData[] = profiles.map((item) => {
  const officialUrl = item.official;
  return {
    brandSlug: 'kia', modelSlug: item.slug,
    title: `Kia ${item.name}: motores, versiones y datos técnicos | Kilómetro Claro`,
    description: `Consulta las motorizaciones, tecnologías, datos oficiales y claves de uso del Kia ${item.name} disponible en España.`,
    intro: item.intro, powertrainSummary: item.summary, usageNote: item.usage,
    basePriceLabel: 'Pendiente de verificación',
    priceNote: kiaPriceNote,
    facts: item.facts, figures: item.figures, specNote: item.note,
    officialUrl, technicalUrl: item.technical,
    sources: [
      { label: `Kia España: ${item.name}`, url: officialUrl },
      { label: `Especificaciones técnicas del ${item.name}`, url: item.technical },
      { label: 'Gama de modelos Kia España', url: range },
      { label: 'Configurador oficial Kia España: consulta el precio vigente', url: `${root}/quiero-un-kia/configurador.html` },
      { label: 'Aviso legal Kia sobre precios de vehículos nuevos', url: 'https://eu-www.kia.com/content/kwcms/kme/es/es/legal-disclaimer.html' },
    ],
    versions: item.versions.map((motor) => ({ ...motor, price: motor.price ?? 'Pendiente de verificación' })),
    reviewedAt,
  };
});
