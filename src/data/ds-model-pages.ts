import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '30 de octubre de 2026';
const root = 'https://www.dsautomobiles.es';
const source = (label: string, url: string) => ({ label, url });

const technicalFiles = {
  ds3: `${root}/content/dam/ds/spain/pdf/caracteristicas-tecnicas/CT_DS3.pdf`,
  n4: `${root}/content/dam/ds/spain/pdf/caracteristicas-tecnicas/CT_N4.pdf`,
  n7: `${root}/content/dam/ds/spain/pdf/caracteristicas-tecnicas/CT_N7.pdf`,
  n8: `${root}/content/dam/ds/spain/pdf/caracteristicas-tecnicas/CT_N8.pdf`,
  ds7: 'https://www.media.stellantis.com/uploads/it/model-pricelist/listinods7am6001122025-69a7f98b5ff7e.pdf',
};

const makeModel = (seed: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): Omit<ModelPageData, 'reviewedAt'> => ({
  ...seed,
  brandSlug: 'ds',
});

const hybrid145 = (name = 'HYBRID 145', torqueRpm = '1.750 rpm'): ModelVersion => ({
  name,
  type: 'Híbrido de gasolina autorrecargable (48 V)',
  power: 'Sistema: 145 CV (107 kW); térmico: 136 CV (100 kW); eléctrico: 28,56 CV (21 kW)',
  displacement: '1.199 cm³',
  maxTorque: '230 Nm',
  torqueScope: 'Motor térmico de gasolina',
  torqueRpm,
});

const ev = (name: string, power: string): ModelVersion => ({
  name,
  type: 'Eléctrico',
  power,
  displacement: '—',
  maxTorque: '',
  torqueScope: 'Motor eléctrico',
  torqueRpm: 'No aplica según la plantilla',
});

const records: Omit<ModelPageData, 'reviewedAt'>[] = [
  makeModel({
    modelSlug: 'ds3',
    title: 'DS 3: motores híbrido y eléctrico, potencia y datos técnicos | Kilómetro Claro',
    description: 'Consulta las motorizaciones del DS 3 disponible en España: Hybrid 145 y E-TENSE eléctrico, con sus potencias y datos técnicos oficiales.',
    intro: 'El DS 3 es el SUV urbano de la gama y se ofrece con dos planteamientos electrificados: el Hybrid 145, que combina gasolina y asistencia eléctrica sin enchufe, y el E-TENSE, totalmente eléctrico. Esta ficha separa la potencia del sistema híbrido de la que aporta cada motor.',
    powertrainSummary: 'La ficha técnica española de abril de 2026 identifica un motor de gasolina de 1.199 cm³ y un motor eléctrico de 21 kW en el Hybrid 145; la potencia combinada es de 107 kW (145 CV). La variante E-TENSE utiliza un motor eléctrico de 115 kW (156 CV).',
    usageNote: 'Hybrid 145 no requiere recarga externa: su batería de 48 V se carga durante la marcha y el sistema eléctrico apoya al motor de gasolina. E-TENSE sí necesita una fuente de carga y, con la configuración homologada que publica DS, alcanza hasta 404 km WLTP. La autonomía real dependerá de temperatura, velocidad, recorrido y equipamiento.',
    versions: [
      hybrid145('HYBRID 145', ''),
      ev('E-TENSE', '156 CV (115 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano de cinco plazas' },
      { label: 'Motorizaciones', value: 'Híbrida autorrecargable de 48 V o eléctrica' },
      { label: 'Autonomía eléctrica homologada', value: 'Hasta 404 km WLTP en E-TENSE' },
      { label: 'Batería E-TENSE', value: '54 kWh' },
    ],
    specNote: 'La ficha de DS publica el par máximo de 230 Nm del motor térmico Hybrid, pero no indica el régimen; por el criterio de esta tabla, la celda queda vacía. El motor eléctrico del Hybrid declara 55 Nm, sin régimen publicado. No se muestra el par del E-TENSE porque la plantilla omite ese dato en las versiones 100 % eléctricas.',
    officialUrl: `${root}/modelos/ds3/hybrid.html`,
    technicalUrl: technicalFiles.ds3,
    sources: [
      source('DS 3 Hybrid: página oficial de DS España', `${root}/modelos/ds3/hybrid.html`),
      source('DS 3 E-TENSE: página oficial de DS España', `${root}/modelos/ds3/electrico.html`),
      source('Características técnicas oficiales DS 3, abril de 2026', technicalFiles.ds3),
    ],
  }),
  makeModel({
    modelSlug: 'n4',
    title: 'DS N°4: motorizaciones híbrida, diésel, enchufable y eléctrica | Kilómetro Claro',
    description: 'Compara las cuatro motorizaciones del DS N°4 en España: Hybrid 145, BlueHDi 130, Plug-in Hybrid 240 y E-TENSE eléctrico.',
    intro: 'N°4 ocupa el lugar del compacto de cinco puertas en la gama DS. Es el modelo con más variedad de propulsión: híbrido autorrecargable, diésel, híbrido enchufable y eléctrico. Las cuatro opciones comparten carrocería, pero no el coste de uso, la necesidad de recarga ni la cilindrada.',
    powertrainSummary: 'La ficha técnica española de abril de 2026 incluye cuatro motorizaciones. Hybrid 145 es un híbrido de 48 V; BlueHDi 130 es diésel; Plug-in Hybrid 240 combina un motor de gasolina de 1.598 cm³ con otro eléctrico y una potencia conjunta de 240 CV; E-TENSE es 100 % eléctrico.',
    usageNote: 'Hybrid 145 funciona sin conectarlo a la red. Plug-in Hybrid 240 permite cargar la batería y circular en modo eléctrico en parte de los trayectos, pero su consumo depende mucho de cargarla con regularidad. BlueHDi 130 puede encajar en recorridos largos frecuentes; E-TENSE elimina las paradas para repostar combustible, aunque requiere planificar la recarga en viajes y disponer de una solución de carga habitual.',
    versions: [
      hybrid145(),
      { name: 'BlueHDi 130 Automático', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'Plug-in Hybrid 240', type: 'Híbrido enchufable (gasolina + eléctrico)', power: 'Sistema: 240 CV (177 kW); térmico: 180 CV (133 kW); eléctrico: 125 CV (92 kW)', displacement: '1.598 cm³', maxTorque: '250 Nm', torqueScope: 'Motor térmico de gasolina; el par conjunto publicado es 360 Nm y DS no indica su régimen', torqueRpm: '1.750 rpm' },
      ev('E-TENSE', '213 CV (157 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto de cinco puertas' },
      { label: 'Longitud', value: '4.400 mm' },
      { label: 'Plazas', value: '5' },
      { label: 'Maletero', value: '430 l en Hybrid; cambia según motorización' },
    ],
    specNote: 'La columna de potencia identifica el sistema y, en híbridos, desglosa las potencias térmica y eléctrica publicadas. En Plug-in Hybrid 240 DS publica 360 Nm de par conjunto sin régimen; por eso se indica el par térmico de 250 Nm a 1.750 rpm. El par eléctrico de E-TENSE no se muestra según la plantilla.',
    officialUrl: `${root}/modelos/dsn4/hybrid.html`,
    technicalUrl: technicalFiles.n4,
    sources: [
      source('Gama N°4 y motorizaciones', `${root}/modelos/dsn4/hybrid.html`),
      source('N°4 BlueHDi 130: página oficial de DS España', `${root}/modelos/dsn4/diesel.html`),
      source('N°4 Plug-in Hybrid: página oficial de DS España', `${root}/modelos/dsn4/plug-in-hybrid.html`),
      source('N°4 E-TENSE: página oficial de DS España', `${root}/modelos/dsn4/e-tense.html`),
      source('Características técnicas oficiales N°4, abril de 2026', technicalFiles.n4),
    ],
  }),
  makeModel({
    modelSlug: 'ds7',
    title: 'DS 7 BlueHDi 130: motor diésel y datos técnicos | Kilómetro Claro',
    description: 'Consulta la motorización diésel BlueHDi 130 que DS ofrece actualmente para el DS 7 en España, con cilindrada, potencia y par máximo.',
    intro: 'El DS 7 es el SUV grande de la gama. En la oferta y el configurador españoles consultados para clientes particulares aparece con el motor BlueHDi 130 y cambio automático de ocho relaciones. Las versiones E-TENSE enchufables que aún figuran en páginas antiguas no se incluyen como motores actuales de pedido.',
    powertrainSummary: 'La oferta española consultada identifica el DS 7 BlueHDi 130. La documentación técnica de DS/Stellantis para esta configuración indica cuatro cilindros, 1.499 cm³, 96 kW (130 CV) y 300 Nm a 1.750 rpm.',
    usageNote: 'El diésel puede ser una opción a valorar si se hacen viajes largos con frecuencia, pero el uso urbano repetido y los trayectos cortos pueden no ser el escenario más adecuado para cualquier motor diésel moderno. Antes de elegir, conviene comprobar las restricciones de circulación de la ciudad, el kilometraje anual y la versión concreta disponible en el concesionario.',
    versions: [
      { name: 'BlueHDi 130 Automático', type: 'Diésel', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco plazas' },
      { label: 'Motorización mostrada en la oferta española', value: 'BlueHDi 130 diésel' },
      { label: 'Cambio', value: 'Automático de ocho relaciones' },
      { label: 'Consumo WLTP publicado por DS', value: 'Desde 5,5 l/100 km; depende de la versión' },
    ],
    specNote: 'La disponibilidad comercial puede variar entre pedidos de fábrica y unidades en stock. La potencia y el par se contrastan con la ficha técnica de DS/Stellantis para el DS 7 BlueHDi 130; la oferta española se utiliza para comprobar qué motor aparece actualmente para particulares.',
    officialUrl: `${root}/comprar/ofertas-particulares.html`,
    technicalUrl: technicalFiles.ds7,
    sources: [
      source('DS 7 BlueHDi 130: ofertas para particulares en DS España', `${root}/comprar/ofertas-particulares.html`),
      source('Ofertas para particulares de DS España', `${root}/comprar/ofertas-particulares.html`),
      source('Configurador y vehículos DS disponibles', 'https://store.dsautomobiles.es/configurable'),
      source('Características técnicas del DS 7 BlueHDi 130, documentación Stellantis', technicalFiles.ds7),
    ],
  }),
  makeModel({
    modelSlug: 'n7',
    title: 'DS N°7: Hybrid 145 y motores E-TENSE eléctricos | Kilómetro Claro',
    description: 'Consulta las cuatro motorizaciones del nuevo DS N°7 en España: Hybrid 145 y tres versiones eléctricas E-TENSE, con potencias y datos técnicos.',
    intro: 'N°7 es el SUV familiar de nueva generación de DS y se comercializa con un híbrido autorrecargable y tres configuraciones eléctricas. En las eléctricas cambian la batería, la autonomía y la tracción; en la variante AWD Long Range hay dos motores.',
    powertrainSummary: 'El configurador español muestra Hybrid 145, E-TENSE FWD de 230 CV, FWD Long Range de 245 CV y AWD Long Range de 350 CV. La ficha técnica de junio de 2026 publica las potencias en kW y distingue la potencia nominal del impulso Boost en las versiones eléctricas.',
    usageNote: 'Hybrid 145 no necesita enchufe. Las tres E-TENSE requieren carga externa: FWD prioriza la tracción delantera, FWD Long Range combina una batería de mayor capacidad con autonomía extendida y AWD Long Range suma un segundo motor y tracción total. La autonomía WLTP sirve para comparar, no para anticipar exactamente los kilómetros de cada viaje.',
    versions: [
      hybrid145(),
      ev('E-TENSE FWD', '230 CV (169 kW)'),
      ev('E-TENSE FWD Long Range', '245 CV (180 kW)'),
      ev('E-TENSE AWD Long Range', '350 CV (257 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV de cinco plazas' },
      { label: 'Motorizaciones', value: 'Hybrid 145 o tres E-TENSE eléctricos' },
      { label: 'Tracción', value: 'Delantera o total, según versión' },
      { label: 'Baterías eléctricas', value: '74 kWh o 97 kWh, según configuración' },
    ],
    specNote: 'La tabla recoge la potencia nominal de cada versión, sin mezclarla con la cifra de impulso temporal (Boost) que DS publica por separado. No se muestra el par de motores eléctricos conforme a la plantilla. El Hybrid 145 publica 230 Nm a 1.750 rpm para el motor térmico.',
    officialUrl: `${root}/modelos/dsn7/hybrid.html`,
    technicalUrl: technicalFiles.n7,
    sources: [
      source('N°7 Hybrid y motorizaciones eléctricas: DS España', `${root}/modelos/dsn7/hybrid.html`),
      source('Configurador español del nuevo N°7', 'https://store.dsautomobiles.es/selector/configurable/no7-suv'),
      source('Características técnicas oficiales N°7, junio de 2026', technicalFiles.n7),
    ],
  }),
  makeModel({
    modelSlug: 'n8',
    title: 'DS N°8: motores eléctricos, potencia y autonomía | Kilómetro Claro',
    description: 'Compara las tres versiones eléctricas del DS N°8: FWD, FWD Long Range y AWD Long Range, con potencia, batería y autonomía WLTP.',
    intro: 'N°8 es el SUV coupé eléctrico de mayor tamaño de DS. Está disponible con dos versiones de tracción delantera y una de tracción total; las variantes Long Range incorporan una batería de mayor capacidad para priorizar los desplazamientos largos.',
    powertrainSummary: 'La ficha técnica española de abril de 2026 recoge N°8 FWD de 230 CV (169 kW), FWD Long Range de 245 CV (180 kW) y AWD Long Range de 350 CV (257 kW). La capacidad neta es de 73,7 kWh en FWD y 97,2 kWh en las versiones Long Range.',
    usageNote: 'La versión FWD es la opción de acceso con tracción delantera. FWD Long Range combina esa configuración con la batería de mayor tamaño; AWD Long Range incorpora un segundo motor para mover las cuatro ruedas. El tiempo y el coste de uso dependerán del punto de carga, la tarifa eléctrica, la temperatura y la velocidad media.',
    versions: [
      ev('E-TENSE FWD', '230 CV (169 kW)'),
      ev('E-TENSE FWD Long Range', '245 CV (180 kW)'),
      ev('E-TENSE AWD Long Range', '350 CV (257 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV coupé eléctrico' },
      { label: 'Tracción', value: 'Delantera o total, según versión' },
      { label: 'Capacidad neta de batería', value: '73,7 kWh o 97,2 kWh' },
      { label: 'Autonomía WLTP combinada', value: 'Hasta 750 km en FWD Long Range' },
    ],
    specNote: 'La tabla muestra la potencia nominal de cada versión; DS publica por separado una potencia de impulso temporal (Boost) superior. En las versiones eléctricas la cilindrada se representa con «—» y no se muestra el par máximo.',
    officialUrl: `${root}/modelos/dsn8.html`,
    technicalUrl: technicalFiles.n8,
    sources: [
      source('N°8: gama y configuraciones en DS España', `${root}/modelos/dsn8.html`),
      source('Características técnicas oficiales N°8, abril de 2026', technicalFiles.n8),
    ],
  }),
];

export const dsModels = records.map((model) => ({ ...model, reviewedAt }));
