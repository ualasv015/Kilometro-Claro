import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const root = 'https://www.citroen.es';
const source = (label: string, url: string) => ({ label, url });
const technical = `${root}/herramientas/solicita-catalogo.html`;

const makeVersion = (
  name: string,
  type: string,
  power: string,
  displacement: string,
  maxTorque = '',
  torqueScope = '',
  torqueRpm = '',
): ModelVersion => ({ name, type, power, displacement, maxTorque, torqueScope, torqueRpm });

const gasoline = (name: string, power: string, torque = '') =>
  makeVersion(name, 'Gasolina', power, '1.199 cm³', torque, 'Motor de gasolina', torque ? '1.750 rpm' : '');

const hybrid110 = (name = 'Hybrid 110 ë-DCS6') =>
  makeVersion(
    name,
    'Híbrido (gasolina + eléctrico, 48 V)',
    'Sistema: 110 CV (81 kW); térmico: 100 CV (74 kW); eléctrico: 21 CV (15,6 kW)',
    '1.199 cm³',
    '205 Nm',
    'Motor térmico de gasolina',
    '1.750 rpm',
  );

const hybrid145 = (name = 'Hybrid 145 ë-DCS6') =>
  makeVersion(
    name,
    'Híbrido (gasolina + eléctrico, 48 V)',
    'Sistema: 145 CV (107 kW); térmico: 136 CV (100 kW); eléctrico: 28 CV (21 kW)',
    '1.199 cm³',
    '230 Nm',
    'Motor térmico de gasolina',
    '1.750 rpm',
  );

const electric = (name: string, power: string) =>
  makeVersion(name, 'Eléctrico', power, '—');

const diesel = (name: string, power: string, displacement: string, torque = '', rpm = '') =>
  makeVersion(name, 'Diésel', power, displacement, torque, 'Motor diésel', rpm);

const records: Omit<ModelPageData, 'reviewedAt'>[] = [
  {
    brandSlug: 'citroen', modelSlug: 'ami',
    title: 'Citroën Ami: motor eléctrico, autonomía y datos técnicos | Kilómetro Claro',
    description: 'Consulta qué ofrece el Citroën Ami en España: motor eléctrico, potencia, dimensiones y diferencias frente a un turismo convencional.',
    intro: 'Ami es un cuadriciclo ligero eléctrico de dos plazas para desplazamientos urbanos. Su tamaño y velocidad máxima están pensados para trayectos cortos; no es un turismo y su categoría implica requisitos de conducción y circulación distintos.',
    powertrainSummary: 'La gama española del Ami utiliza un motor eléctrico de 6 kW, equivalente a 8 CV. Citroën anuncia una velocidad máxima de 45 km/h y hasta 75 km de autonomía WMTC. Al ser eléctrico, no tiene cilindrada térmica y, según el criterio de estas fichas, no mostramos el par del motor.',
    usageNote: 'Su principal ventaja práctica es la facilidad para moverse y aparcar en ciudad, además de poder recargarse en un enchufe doméstico. Antes de elegirlo, conviene comprobar si sus límites de velocidad, protección frente a la intemperie, capacidad para dos ocupantes y restricciones propias de un cuadriciclo ligero encajan con el recorrido habitual.',
    versions: [electric('Ami eléctrico', '8 CV (6 kW)')],
    facts: [
      { label: 'Categoría', value: 'Cuadriciclo ligero eléctrico; no es un turismo' },
      { label: 'Plazas', value: '2' },
      { label: 'Velocidad máxima', value: '45 km/h' },
      { label: 'Autonomía publicada', value: 'Hasta 75 km WMTC' },
    ],
    specNote: 'La potencia de 6 kW procede de la ficha técnica oficial del Ami; la página española actual publica también 45 km/h y 75 km WMTC. Las ediciones limitadas cambian el aspecto y el equipamiento, no se cuentan como motorizaciones diferentes.',
    officialUrl: `${root}/vehiculos-citroen/ami.html`,
    technicalUrl: 'https://store.citroen.es/files/static/4f936429/CIMD_2304210_CT_AMI_AMI_CARGO_ES_2210_6P.pdf',
    sources: [
      source('Citroën España: Ami y gama actual', `${root}/vehiculos-citroen/ami.html`),
      source('Ficha técnica oficial Ami', 'https://store.citroen.es/files/static/4f936429/CIMD_2304210_CT_AMI_AMI_CARGO_ES_2210_6P.pdf'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c3',
    title: 'Citroën C3: motores gasolina, híbrido y eléctrico | Kilómetro Claro',
    description: 'Compara los motores actuales del Citroën C3 en España: Turbo 100, Hybrid 110 y ë-C3 eléctrico con potencias y cilindrada.',
    intro: 'El C3 es el modelo urbano de cinco puertas de Citroën. Su oferta española permite elegir entre gasolina, un sistema híbrido de 48 V que no necesita enchufe y dos configuraciones eléctricas con distinto planteamiento de autonomía.',
    powertrainSummary: 'La gama consultada reúne Turbo 100 manual, Hybrid 110 automático y ë-C3 eléctrico con autonomía urbana o extendida. El híbrido combina un motor de gasolina de 1.199 cm³ con asistencia eléctrica de 48 V; la potencia de 110 CV corresponde al sistema y la cifra de 100 CV al motor térmico.',
    usageNote: 'Turbo 100 es la alternativa sencilla de gasolina y cambio manual. Hybrid 110 añade conducción eléctrica parcial a baja demanda sin que haya que cargarlo desde la red. El ë-C3 resulta más apropiado si existe una rutina de recarga y sus autonomías homologadas cubren los trayectos previstos; comprueba batería, acabado y disponibilidad exactos en el configurador.',
    versions: [
      gasoline('Turbo 100 S&S manual', '100 CV (74 kW)', '205 Nm'),
      hybrid110(),
      electric('ë-C3 eléctrico · autonomía urbana', '113 CV (83 kW)'),
      electric('ë-C3 eléctrico · autonomía extendida', '113 CV (83 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Urbano de cinco puertas' },
      { label: 'Motorizaciones', value: 'Gasolina, híbrida de 48 V y eléctrica' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en Turbo 100 y Hybrid 110' },
      { label: 'Cambio', value: 'Manual en Turbo 100; automático en Hybrid y eléctrico' },
    ],
    specNote: 'Las dos variantes ë-C3 se distinguen por la batería y la autonomía, no por la potencia del motor. La ficha técnica de Citroën publica 205 Nm a 1.750 rpm para el Turbo 100 y para el motor térmico del Hybrid 110; el motor eléctrico híbrido tiene su propio par, pero no se mezcla con el del motor de combustión en esta tabla.',
    officialUrl: `${root}/vehiculos-citroen/c3.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_Nuevo_C3.pdf`,
    sources: [
      source('Citroën España: C3 y motorizaciones', `${root}/vehiculos-citroen/c3.html`),
      source('Características técnicas del Nuevo C3', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_Nuevo_C3.pdf`),
      source('Citroën Store: configurador español', 'https://store.citroen.es/configurable'),
      source('Ficha técnica Citroën C3 2026 con par del Turbo 100 y Hybrid 110', 'https://www.citroen.ro/content/dam/citroen/romania/liste-de-preturi-2023/Citroen_C3_Lista_de_preturi_05_2026.pdf'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c3-aircross',
    title: 'Citroën C3 Aircross: motores gasolina, híbridos y eléctrico | Kilómetro Claro',
    description: 'Revisa las versiones del Citroën C3 Aircross en España: Turbo 100, Hybrid 110 y 145, y eléctrico de autonomía extendida.',
    intro: 'C3 Aircross es el SUV pequeño y familiar de Citroën, con una carrocería de hasta siete plazas según configuración. La gama española combina gasolina, dos niveles de hibridación de 48 V y una versión eléctrica de autonomía extendida.',
    powertrainSummary: 'El configurador español consultado ofrece Turbo 100 manual, Hybrid 110 y Hybrid 145 automáticos, además del ë-C3 Aircross eléctrico de 113 CV. Las potencias híbridas de 110 y 145 CV corresponden al sistema; en la tabla se separan de las cifras del motor térmico y del eléctrico.',
    usageNote: 'El C3 Aircross puede servir tanto para desplazamientos urbanos como para uso familiar, pero el número de plazas depende de la configuración. Las versiones híbridas no requieren carga externa; la eléctrica sí. En esta última, el configurador muestra autonomía extendida: contrástala con la distancia habitual y las opciones de carga disponibles.',
    versions: [
      gasoline('Turbo 100 S&S manual', '100 CV (74 kW)', '205 Nm'),
      hybrid110(),
      hybrid145(),
      electric('ë-C3 Aircross eléctrico · autonomía extendida', '113 CV (83 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV; hasta 7 plazas, según versión' },
      { label: 'Motorizaciones', value: 'Gasolina, Hybrid 110, Hybrid 145 y eléctrico' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en las versiones de gasolina e híbridas' },
      { label: 'Batería eléctrica', value: 'La capacidad y autonomía dependen de la versión configurada' },
    ],
    specNote: 'Las cifras de 205 Nm a 1.750 rpm (Turbo 100 y Hybrid 110) y 230 Nm a 1.750 rpm (Hybrid 145) se refieren al motor térmico, no al conjunto híbrido. No se muestra el par de la versión eléctrica.',
    officialUrl: `${root}/vehiculos-citroen/c3-aircross.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-c3-ec3-aircross-cc24.pdf`,
    sources: [
      source('Citroën España: C3 Aircross', `${root}/vehiculos-citroen/c3-aircross.html`),
      source('Configurador del C3 Aircross: motores disponibles', 'https://store.citroen.es/selector/configurable/nuevo-c3-aircross-berlina-5-p/you/electrico-113cv-autonomia-extendida-automatica-electrico/mercury-grey/urban-bronce'),
      source('Características técnicas del C3 Aircross', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-c3-ec3-aircross-cc24.pdf`),
      source('Citroën España: tecnología Hybrid de 48 V y motor de 136 CV', `${root}/universo-citroen/noticias/citroen-c3-aircross-confort.html`),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c4',
    title: 'Citroën C4: versiones híbridas y eléctricas | Kilómetro Claro',
    description: 'Consulta las motorizaciones actuales del Citroën C4: Hybrid 110 y 145, y ë-C4 eléctrico con baterías de 50 o 54 kWh.',
    intro: 'El C4 es un compacto de cinco puertas que Citroën ofrece con una gama electrificada. Las alternativas comprenden dos híbridos de 48 V sin recarga externa y dos versiones totalmente eléctricas con diferente potencia y batería.',
    powertrainSummary: 'La oferta actual consultada incluye Hybrid 110, Hybrid 145 y ë-C4 con batería de 50 o 54 kWh. En los híbridos, 110 o 145 CV son la potencia combinada del sistema; la tabla separa la aportación del motor térmico de gasolina y la del eléctrico.',
    usageNote: 'Hybrid 110 y 145 no necesitan conectarse a un cargador. El ë-C4 sí requiere recarga y ofrece dos capacidades de batería; la elección debería considerar autonomía real, velocidad de carga y posibilidad de cargar en casa o en el trabajo. Las versiones y autonomías WLTP dependen del acabado y las ruedas.',
    versions: [
      hybrid110(),
      hybrid145(),
      electric('ë-C4 eléctrico · batería de 50 kWh', '136 CV (100 kW)'),
      electric('ë-C4 eléctrico · batería de 54 kWh', '156 CV (115 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto de cinco puertas' },
      { label: 'Motorizaciones', value: 'Hybrid 110, Hybrid 145 y eléctrico' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en las versiones Hybrid' },
      { label: 'Baterías ë-C4', value: '50 o 54 kWh, según versión' },
    ],
    specNote: 'Citroën publica 205 Nm a 1.750 rpm en el motor térmico Hybrid 110 y 230 Nm a 1.750 rpm en el motor térmico Hybrid 145. El motor eléctrico auxiliar del híbrido y el motor de tracción del ë-C4 no se incluyen en la columna de par según el criterio de esta plantilla.',
    officialUrl: `${root}/vehiculos-citroen/c4.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-NUEVO-C4.pdf`,
    sources: [
      source('Citroën España: C4 y motorizaciones', `${root}/vehiculos-citroen/c4.html`),
      source('Características técnicas del C4', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-NUEVO-C4.pdf`),
      source('Citroën España: especificaciones del Hybrid 145', `${root}/universo-citroen/noticias/nuevo-citroen-c4-edition-collection-caracter-y-confort.html`),
      source('Citroën España: tecnología 48 V del C4 y C4 X', 'https://www.media.stellantis.com/es-es/citroen/press/c4-y-c4-x-adoptan-la-tecnologia-hibrida-de-48v-sencillez-suavidad-y-consumo-reducido'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c4-x',
    title: 'Citroën C4 X: motorizaciones híbridas y eléctricas | Kilómetro Claro',
    description: 'Compara las versiones del Citroën C4 X en España: Hybrid 145 y ë-C4 X eléctrico de 136 o 156 CV.',
    intro: 'C4 X combina la posición de conducción elevada de un crossover con una silueta fastback y un maletero separado. Citroën ofrece una versión híbrida de 48 V y dos configuraciones eléctricas.',
    powertrainSummary: 'La gama consultada se compone del Hybrid 145 automático y del ë-C4 X con baterías de 50 o 54 kWh. El híbrido combina un motor térmico de 1.199 cm³ con un motor eléctrico de 48 V; 145 CV es la potencia del sistema, mientras que el motor térmico desarrolla 136 CV.',
    usageNote: 'Hybrid 145 no necesita conexión a la red y puede circular eléctricamente durante parte de la conducción, según las condiciones. Las versiones ë-C4 X son completamente eléctricas: compara la batería y la autonomía WLTP concreta con el uso previsto y comprueba el acceso a puntos de carga antes de decidir.',
    versions: [
      hybrid145(),
      electric('ë-C4 X eléctrico · batería de 50 kWh', '136 CV (100 kW)'),
      electric('ë-C4 X eléctrico · batería de 54 kWh', '156 CV (115 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Fastback de cinco puertas' },
      { label: 'Motorizaciones', value: 'Hybrid 145 o eléctrica' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en Hybrid 145' },
      { label: 'Baterías ë-C4 X', value: '50 o 54 kWh, según versión' },
    ],
    specNote: 'El dato de 230 Nm a 1.750 rpm corresponde al motor térmico de gasolina del Hybrid 145. La fuente de Citroën describe también el motor eléctrico auxiliar, pero su par no se añade a esta tabla. En las versiones 100 % eléctricas se omite el par por el criterio común del directorio.',
    officialUrl: `${root}/vehiculos-citroen/c4-x.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-NUEVO-C4X.pdf`,
    sources: [
      source('Citroën España: C4 X', `${root}/vehiculos-citroen/c4-x.html`),
      source('Características técnicas del C4 X', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT-NUEVO-C4X.pdf`),
      source('Citroën España: tecnología híbrida 48 V del C4 y C4 X', 'https://www.media.stellantis.com/es-es/citroen/press/c4-y-c4-x-adoptan-la-tecnologia-hibrida-de-48v-sencillez-suavidad-y-consumo-reducido'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c5-x',
    title: 'Citroën C5 X: motorizaciones híbridas y datos técnicos | Kilómetro Claro',
    description: 'Consulta las motorizaciones documentadas del Citroën C5 X, sus sistemas híbridos, potencia, cilindrada y disponibilidad en España.',
    intro: 'El C5 X combina una silueta de berlina familiar con una carrocería elevada de estilo crossover. Citroën todavía lo incluye en el configurador general español, pero el selector de compra puede redirigir a una página de error; conviene confirmar con un concesionario si hay unidades nuevas disponibles antes de considerar una versión concreta.',
    powertrainSummary: 'La ficha técnica española de abril de 2025 documenta Hybrid 145 ë-DSC6 y dos híbridos enchufables, Plug-in Hybrid 180 y 225, ambos automáticos. Estas cifras describen las versiones recogidas por la documentación oficial; la disponibilidad actual puede limitarse a unidades en stock.',
    usageNote: 'El Hybrid 145 es un híbrido de 48 V que no se conecta a una toma. Los Plug-in Hybrid 180 y 225 sí se recargan externamente y solo aprovechan plenamente su parte eléctrica cuando se cargan con regularidad. Al tratarse de una gama cuya venta en línea no aparece activa de forma consistente, verifica por escrito el año-modelo, la motorización, el estado de la unidad y la garantía ofrecida por el concesionario.',
    versions: [
      makeVersion('Hybrid 145 ë-DSC6', 'Híbrido (gasolina + eléctrico, 48 V)', 'Sistema: 145 CV (107 kW); térmico: 136 CV (100 kW); eléctrico: 21 CV (15,6 kW)', '1.199 cm³'),
      makeVersion('Plug-in Hybrid 180 automático', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 180 CV (132 kW); térmico: 150 CV (110 kW); eléctrico: 110 CV (81,2 kW)', '1.598 cm³'),
      makeVersion('Plug-in Hybrid 225 automático', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 225 CV (165 kW); térmico: 180 CV (132 kW); eléctrico: 110 CV (81,2 kW)', '1.598 cm³'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Berlina crossover de cinco plazas' },
      { label: 'Motorizaciones documentadas', value: 'Hybrid 145 y Plug-in Hybrid 180 o 225' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en Hybrid 145; 1.598 cm³ en los híbridos enchufables' },
      { label: 'Disponibilidad', value: 'Consultar unidades nuevas en stock con la red Citroën' },
    ],
    specNote: 'Las potencias térmicas y eléctricas se separan para no confundirlas con la potencia conjunta del sistema. La ficha técnica oficial de abril de 2025 recoge las tres configuraciones indicadas; no se añade par máximo porque no se ha podido contrastar de forma inequívoca el valor y el régimen para cada versión en la documentación consultada. El catálogo general de Citroën aún enlaza el C5 X Plug-in Hybrid, pero su selector puede no estar operativo: confirma disponibilidad y motorización directamente con el concesionario.',
    officialUrl: `${root}/configurador/configurador-de-vehiculos.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_C5_X.pdf`,
    sources: [
      source('Citroën España: listado del configurador, incluye C5 X Plug-in Hybrid', `${root}/configurador/configurador-de-vehiculos.html`),
      source('Características técnicas oficiales del C5 X (abril de 2025)', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_C5_X.pdf`),
      source('Citroën Store: selector del C5 X (puede no estar disponible)', 'https://store.citroen.es/trim/configurable/nuevo-c5-x-berlina-5-p'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'c5-aircross',
    title: 'Citroën C5 Aircross: híbrido, híbrido enchufable y eléctrico | Kilómetro Claro',
    description: 'Consulta las motorizaciones del nuevo Citroën C5 Aircross en España: Hybrid 145, Plug-in Hybrid 225 y dos eléctricos.',
    intro: 'El nuevo C5 Aircross es el SUV familiar de mayor tamaño de Citroën. Su oferta española abarca un híbrido de 48 V, un híbrido enchufable y dos versiones eléctricas con batería de distinta capacidad.',
    powertrainSummary: 'El configurador español consultado muestra Hybrid 145, Plug-in Hybrid 225 y versiones eléctricas de 210 o 230 CV. Hybrid 145 no se enchufa; Plug-in Hybrid 225 sí permite cargar la batería desde una toma externa. Las variantes eléctricas usan baterías de 73 o 97 kWh, según versión.',
    usageNote: 'Hybrid 145 prioriza la sencillez de uso al no requerir carga externa. Plug-in Hybrid 225 puede aprovechar la conducción eléctrica si se recarga habitualmente, aunque conserva un motor de gasolina para viajes largos. El ë-C5 Aircross requiere planificar la carga en ruta; compara autonomía WLTP, batería y equipamiento, no solo la potencia.',
    versions: [
      hybrid145(),
      makeVersion('Plug-in Hybrid 225 automático', 'Híbrido enchufable (gasolina + eléctrico)', 'Sistema: 225 CV (165 kW); térmico: 150 CV (110 kW); eléctrico: 125 CV (92 kW)', '1.598 cm³'),
      electric('ë-C5 Aircross eléctrico · autonomía estándar', '210 CV (154 kW)'),
      electric('ë-C5 Aircross eléctrico · autonomía extendida', '230 CV (170 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV familiar de cinco plazas' },
      { label: 'Motorizaciones', value: 'Hybrid 145, Plug-in Hybrid 225 y eléctrico' },
      { label: 'Cilindrada térmica', value: '1.199 cm³ en Hybrid 145; 1.598 cm³ en Plug-in Hybrid 225' },
      { label: 'Baterías eléctricas', value: '73 o 97 kWh, según versión' },
    ],
    specNote: 'El configurador de Citroën ya permite elegir el eléctrico de autonomía extendida de 230 CV, aunque la página descriptiva del modelo puede mostrar plazos de llegada distintos. La tabla recoge los motores ofrecidos en la configuración consultada; confirma plazo y disponibilidad en el pedido. No se muestra el par de Plug-in Hybrid 225 porque la ficha española consultada no permite contrastar a la vez el par térmico y su régimen para esta configuración.',
    officialUrl: `${root}/vehiculos-citroen/nuevo-c5-aircross.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_C5_AIRCROSS.pdf`,
    sources: [
      source('Citroën España: Nuevo C5 Aircross', `${root}/vehiculos-citroen/nuevo-c5-aircross.html`),
      source('Configurador del C5 Aircross: motores y baterías', 'https://store.citroen.es/selector/configurable/nuevo-c5-aircross-suv?fuel=H%C3%ADbrido&gearbox=Autom%C3%A1tica'),
      source('Características técnicas del C5 Aircross', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_C5_AIRCROSS.pdf`),
      source('Citroën España: datos técnicos del sistema Hybrid 145', 'https://www.media.stellantis.com/es-es/citroen/press/c5-aircross-hybrid-136-una-nueva-oferta-electrificada-facil-y-accesible-que-no-requiere-recarga'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'berlingo',
    title: 'Citroën Berlingo de pasajeros: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Consulta las motorizaciones del Citroën Berlingo para pasajeros: BlueHDi 100 y 130, y ë-Berlingo eléctrico.',
    intro: 'Berlingo es el vehículo familiar de pasajeros de Citroën, con carrocerías M y XL y un interior modular. Esta ficha trata la versión de pasajeros y distingue sus alternativas diésel y eléctrica de las variantes Berlingo Van comerciales.',
    powertrainSummary: 'La gama para particulares consultada ofrece BlueHDi 100, BlueHDi 130 y ë-Berlingo eléctrico de 136 CV con batería de 50 kWh. Las versiones térmicas emplean un motor diésel de 1.499 cm³; la longitud M o XL y el acabado determinan el resto de la configuración.',
    usageNote: 'La carrocería M es más manejable en ciudad y la XL aporta longitud y espacio adicional. El diésel puede encajar en viajes frecuentes y largos; la versión eléctrica puede resultar práctica con recarga habitual y recorridos previsibles. Confirma si la configuración elegida es de cinco o siete plazas y el volumen de maletero con los asientos en uso.',
    versions: [
      diesel('BlueHDi 100 S&S', '100 CV (74 kW)', '1.499 cm³'),
      diesel('BlueHDi 130 S&S', '130 CV (96 kW)', '1.499 cm³'),
      electric('ë-Berlingo eléctrico · batería de 50 kWh', '136 CV (100 kW)'),
    ],
    facts: [
      { label: 'Carrocerías', value: 'M y XL' },
      { label: 'Plazas', value: 'Hasta 7, según versión' },
      { label: 'Motorizaciones', value: 'Diésel o eléctrico' },
      { label: 'Batería eléctrica', value: '50 kWh' },
    ],
    specNote: 'Las páginas actuales de Citroën Store muestran BlueHDi 100, BlueHDi 130 y ë-Berlingo de 136 CV. La ficha de motor para particulares consultada no publica de forma consistente el par máximo y el régimen de las dos variantes diésel, por lo que esas celdas quedan vacías; no se reutilizan cifras de la gama comercial Berlingo Van.',
    officialUrl: `${root}/vehiculos-citroen/berlingo.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_NUEVO_BERLINGO.pdf`,
    sources: [
      source('Citroën Store: Berlingo para particulares y carrocería XL', 'https://store.citroen.es/configurable'),
      source('Características técnicas del Berlingo de pasajeros', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_NUEVO_BERLINGO.pdf`),
      source('Citroën España: catálogo y fichas técnicas', technical),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'spacetourer',
    title: 'Citroën SpaceTourer: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Compara las versiones del Citroën SpaceTourer para pasajeros: BlueHDi 150 y 180, y eléctrico de 136 CV con dos baterías.',
    intro: 'SpaceTourer es el monovolumen de pasajeros de Citroën, disponible con carrocerías M y XL y configuraciones de hasta nueve plazas. Frente al Berlingo, ofrece mayor tamaño y capacidad de transporte; la gama combina motores diésel con una versión eléctrica.',
    powertrainSummary: 'Citroën España muestra BlueHDi 150 manual, BlueHDi 180 automático y SpaceTourer eléctrico de 136 CV con baterías de 50 o 75 kWh. Los motores diésel actuales son de 2.184 cm³. Para ellos se publica el par máximo térmico; en la versión eléctrica no se muestra el par por el criterio de la plantilla.',
    usageNote: 'Las tallas M y XL cambian la longitud y la capacidad para pasajeros y equipaje. Si se necesita transportar a muchas personas con frecuencia, comprueba el número de asientos homologados y el espacio de carga que queda con todos ocupados. En la versión eléctrica, batería de 50 o 75 kWh y rutina de recarga condicionan su uso en viajes largos.',
    versions: [
      diesel('BlueHDi 150 S&S manual', '150 CV (110 kW)', '2.184 cm³', '370 Nm', '1.500 rpm'),
      diesel('BlueHDi 180 S&S EAT8', '180 CV (132 kW)', '2.184 cm³', '400 Nm', '1.500 rpm'),
      electric('SpaceTourer eléctrico · batería de 50 kWh', '136 CV (100 kW)'),
      electric('SpaceTourer eléctrico · batería de 75 kWh', '136 CV (100 kW)'),
    ],
    facts: [
      { label: 'Carrocerías', value: 'M y XL' },
      { label: 'Plazas', value: 'Hasta 9, según configuración' },
      { label: 'Cilindrada diésel', value: '2.184 cm³' },
      { label: 'Baterías eléctricas', value: '50 o 75 kWh' },
    ],
    specNote: 'La ficha española actual contrasta cilindrada y potencia de las variantes 150 y 180. Stellantis publica para la generación 2.2 BlueHDi actual 370 Nm a 1.500 rpm y 400 Nm a 1.500 rpm, respectivamente. Los datos de la versión eléctrica se expresan en su propia fila; su par no se muestra según la plantilla común.',
    officialUrl: `${root}/vehiculos-citroen/spacetourer.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_SpaceTourer.pdf`,
    sources: [
      source('Citroën España: SpaceTourer de pasajeros', `${root}/vehiculos-citroen/spacetourer.html`),
      source('Características técnicas del SpaceTourer', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_SpaceTourer.pdf`),
      source('Configurador actual del SpaceTourer', 'https://store.citroen.es/selector/configurable/spacetourer-combispace-m-spacetourer-talla-m/plus/diesel-180cv-automatica-diesel/verde-kapari/curitiba-black-art-grey'),
      source('Stellantis: evolución del BlueHDi 150 y 180 y par máximo', 'https://www.media.stellantis.com/es-es/citroen/press/una-gama-de-energias-y-motorizaciones-eficientes-al-servicio-de-las-familias-el-ocio-y-los-profesionales'),
    ],
  },
  {
    brandSlug: 'citroen', modelSlug: 'holidays',
    title: 'Citroën Holidays: motor BlueHDi, plazas y datos técnicos | Kilómetro Claro',
    description: 'Ficha del Citroën Holidays camper: versiones BlueHDi 150 y 180, cilindrada, potencia y par máximo con su régimen.',
    intro: 'Holidays es la camper compacta de Citroën, basada en el SpaceTourer y equipada para viajar y dormir en el vehículo. La marca la mantiene en venta en España con dos versiones diésel; los paquetes de equipamiento modifican los elementos camper, no la familia de motores.',
    powertrainSummary: 'La oferta española actual muestra Holidays BlueHDi 150 manual y BlueHDi 180 automática. Ambas utilizan el motor diésel de 2.184 cm³: el primero desarrolla 150 CV y 370 Nm a 1.500 rpm; el segundo, 180 CV y 400 Nm a 1.500 rpm.',
    usageNote: 'Además de las prestaciones del motor, una camper requiere valorar altura, plazas para viajar y dormir, espacio de almacenaje y consumo con el vehículo cargado. El equipamiento y la carga a bordo pueden influir en el consumo real; comprueba la masa máxima autorizada y los elementos incluidos en cada paquete antes de comparar precios.',
    versions: [
      diesel('BlueHDi 150 S&S manual', '150 CV (110 kW)', '2.184 cm³', '370 Nm', '1.500 rpm'),
      diesel('BlueHDi 180 S&S EAT8', '180 CV (132 kW)', '2.184 cm³', '400 Nm', '1.500 rpm'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Camper compacta de pasajeros' },
      { label: 'Plazas', value: 'Hasta 5 para viajar, según configuración' },
      { label: 'Plazas para dormir', value: 'Hasta 4' },
      { label: 'Cilindrada', value: '2.184 cm³' },
    ],
    specNote: 'La ficha técnica española actual identifica los motores 2.2 BlueHDi de 150 CV (110 kW) y 180 CV (132 kW). Stellantis publica para estas versiones 370 y 400 Nm, respectivamente, a 1.500 rpm. La capacidad de plazas y el equipamiento dependen de la configuración Holidays elegida.',
    officialUrl: `${root}/vehiculos-citroen/holidays.html`,
    technicalUrl: `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_SpaceTourer.pdf`,
    sources: [
      source('Citroën España: Holidays camper y versiones', `${root}/vehiculos-citroen/holidays.html`),
      source('Características técnicas actuales de Holidays', `${root}/content/dam/citroen/spain/pdf/caracteristicas-tecnicas/CT_SpaceTourer.pdf`),
      source('Stellantis: evolución del BlueHDi 150 y 180 y par máximo', 'https://www.media.stellantis.com/es-es/citroen/press/una-gama-de-energias-y-motorizaciones-eficientes-al-servicio-de-las-familias-el-ocio-y-los-profesionales'),
    ],
  },
];

export const citroenModels = records.map((model) => ({ ...model, reviewedAt }));
