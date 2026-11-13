import type { ModelPageData, ModelVersion } from './model-pages';

const reviewedAt = '6 de noviembre de 2026';
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
  type: 'Híbrido no enchufable · MHEV de gasolina (48 V)',
  power: 'Sistema: 145 CV (107 kW); térmico: 136 CV (100 kW); eléctrico: 28,56 CV (21 kW)',
  displacement: '1.199 cm³',
  maxTorque: '230 Nm',
  torqueScope: 'Motor térmico de gasolina',
  torqueRpm,
});

const ev = (name: string, power: string): ModelVersion => ({
  name,
  type: 'Eléctrico · batería',
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
    intro: 'El DS 3 es el SUV urbano de la gama y ofrece dos sistemas electrificados con usos distintos. Hybrid 145 combina un motor de gasolina con hibridación ligera de 48 V y no se enchufa; E-TENSE es eléctrico de batería y necesita recarga externa. La tabla separa la potencia combinada del híbrido de la potencia de cada motor.',
    powertrainSummary: 'La ficha técnica española de abril de 2026 identifica para Hybrid 145 un motor de gasolina de 1.199 cm³, uno eléctrico de 21 kW y 145 CV (107 kW) de potencia de sistema. E-TENSE declara 156 CV (115 kW).',
    usageNote: 'Hybrid 145 no requiere recarga externa: su batería de 48 V recupera energía durante la conducción y el motor eléctrico asiste al de gasolina. E-TENSE sí necesita una solución de carga; el configurador consultado anuncia hasta 396 km WLTP. La autonomía real depende de temperatura, velocidad, recorrido, equipamiento y estilo de conducción.',
    versions: [
      hybrid145('HYBRID 145', ''),
      ev('E-TENSE', '156 CV (115 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano de cinco plazas' },
      { label: 'Motorizaciones', value: 'Híbrida autorrecargable de 48 V o eléctrica' },
      { label: 'Autonomía eléctrica homologada', value: 'Hasta 396 km WLTP en E-TENSE, según DS Store' },
      { label: 'Batería E-TENSE', value: '54 kWh' },
    ],
    specNote: 'DS publica 230 Nm para el motor térmico Hybrid, pero no indica el régimen; por eso el par no aparece en la tabla. La ficha también da 55 Nm para el motor eléctrico de 48 V, sin régimen, dato que se omite. La cifra de autonomía del E-TENSE corresponde al configurador consultado el 6 de noviembre de 2026 y puede variar con la versión.',
    officialUrl: 'https://store.dsautomobiles.es/selector/configurable/ds-3-suv',
    technicalUrl: technicalFiles.ds3,
    sources: [
      source('DS 3 Hybrid: página oficial de DS España', `${root}/modelos/ds3/hybrid.html`),
      source('DS 3 E-TENSE: página oficial de DS España', `${root}/modelos/ds3/electrico.html`),
      source('Configurador DS Store: precios y datos actuales del DS 3', 'https://store.dsautomobiles.es/selector/configurable/ds-3-suv'),
      source('Características técnicas oficiales DS 3, abril de 2026', technicalFiles.ds3),
    ],
  }),
  makeModel({
    modelSlug: 'n4',
    title: 'DS N°4: motorizaciones híbrida, diésel, enchufable y eléctrica | Kilómetro Claro',
    description: 'Compara las cuatro motorizaciones del DS N°4 en España: Hybrid 145, BlueHDi 130, Plug-in Hybrid 240 y E-TENSE eléctrico.',
    intro: 'N°4 es el compacto de cinco puertas de DS y reúne cuatro tecnologías: híbrido ligero de gasolina, diésel, híbrido enchufable y eléctrico de batería. Esa variedad permite comparar opciones con diferencias reales en necesidad de recarga, cilindrada y forma de uso.',
    powertrainSummary: 'La documentación técnica española consultada recoge Hybrid 145 de 48 V, BlueHDi 130 diésel, Plug-in Hybrid 240 y E-TENSE eléctrico. En el híbrido enchufable, la potencia conjunta es de 240 CV (177 kW); la potencia térmica y la eléctrica se detallan por separado en la tabla.',
    usageNote: 'Hybrid 145 funciona sin conectarlo a la red. Plug-in Hybrid 240 permite cargar la batería y circular en modo eléctrico en parte de los trayectos, pero su consumo depende mucho de cargarla con regularidad. BlueHDi 130 puede encajar en recorridos largos frecuentes; E-TENSE elimina las paradas para repostar combustible, aunque requiere planificar la recarga en viajes y disponer de una solución de carga habitual.',
    versions: [
      hybrid145(),
      { name: 'BlueHDi 130 Automático', type: 'Diésel · BlueHDi', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'Plug-in Hybrid 240', type: 'Híbrido enchufable · gasolina + eléctrico', power: 'Sistema: 240 CV (177 kW); térmico: 180 CV (133 kW); eléctrico: 125 CV (92 kW)', displacement: '1.598 cm³', maxTorque: '250 Nm', torqueScope: 'Motor térmico de gasolina; el par conjunto publicado es 360 Nm y DS no indica su régimen', torqueRpm: '1.750 rpm' },
      ev('E-TENSE 215', '213 CV (157 kW)'),
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto de cinco puertas' },
      { label: 'Longitud', value: '4.400 mm' },
      { label: 'Plazas', value: '5' },
      { label: 'Maletero', value: '430 l en Hybrid; cambia según motorización' },
    ],
    specNote: 'La potencia híbrida se desglosa en sistema, motor térmico y eléctrico. Para Plug-in Hybrid 240, DS publica 360 Nm de par conjunto sin régimen; la tabla muestra el par térmico verificable de 250 Nm a 1.750 rpm. El configurador denomina E-TENSE a la versión de 215 CV, mientras que la ficha técnica de abril de 2026 da 157 kW, equivalentes a aproximadamente 213 CV; se conserva el dato técnico en la tabla y el nombre comercial como versión. El configurador también expone una opción adicional «DIESEL 130CV» al cambiar de configuración; la página española del modelo y la ficha técnica identifican la motorización diésel como BlueHDi 130, por lo que no se presenta como un motor diferente sin evidencia técnica que lo distinga.',
    officialUrl: 'https://store.dsautomobiles.es/selector/configurable/no4-berlina-5-p',
    technicalUrl: technicalFiles.n4,
    sources: [
      source('Gama N°4 y motorizaciones', `${root}/modelos/dsn4/hybrid.html`),
      source('N°4 BlueHDi 130: página oficial de DS España', `${root}/modelos/dsn4/diesel.html`),
      source('N°4 Plug-in Hybrid: página oficial de DS España', `${root}/modelos/dsn4/plug-in-hybrid.html`),
      source('N°4 E-TENSE: página oficial de DS España', `${root}/modelos/dsn4/e-tense.html`),
      source('Características técnicas oficiales N°4, abril de 2026', technicalFiles.n4),
      source('Configurador DS Store: motorizaciones y precios actuales del N°4', 'https://store.dsautomobiles.es/selector/configurable/no4-berlina-5-p'),
    ],
  }),
  makeModel({
    modelSlug: 'ds7',
    title: 'DS 7 BlueHDi 130: motor diésel y datos técnicos | Kilómetro Claro',
    description: 'Consulta la motorización diésel BlueHDi 130 que DS ofrece actualmente para el DS 7 en España, con cilindrada, potencia y par máximo.',
    intro: 'El DS 7 es el SUV mediano de la generación anterior de DS. Ya no forma parte de la gama regular configurable, pero DS Store mantiene unidades nuevas en stock para particulares. La motorización de esas unidades aparece como BlueHDi 130 diésel y su disponibilidad depende del inventario.',
    powertrainSummary: 'La ficha y la oferta española de DS identifican unidades nuevas DS 7 BlueHDi 130 con cambio automático. La documentación técnica consultada indica motor de 1.499 cm³, 130 CV (96 kW) y 300 Nm a 1.750 rpm.',
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
      source('Configurador y vehículos DS disponibles', 'https://store.dsautomobiles.es/configurable'),
      source('Características técnicas del DS 7 BlueHDi 130, documentación Stellantis', technicalFiles.ds7),
    ],
  }),
  makeModel({
    modelSlug: 'n7',
    title: 'DS N°7: Hybrid 145 y motores E-TENSE eléctricos | Kilómetro Claro',
    description: 'Consulta las cuatro motorizaciones del nuevo DS N°7 en España: Hybrid 145 y tres versiones eléctricas E-TENSE, con potencias y datos técnicos.',
    intro: 'N°7 es el SUV mediano de nueva generación de DS. La gama española combina Hybrid 145, que no necesita enchufe, con tres configuraciones E-TENSE eléctricas. Las versiones se diferencian por potencia, batería y tracción; AWD Long Range añade un segundo motor.',
    powertrainSummary: 'El configurador de DS España ofrece Hybrid 145, E-TENSE FWD de 230 CV, FWD Long Range de 245 CV y AWD Long Range de 350 CV. La ficha técnica de junio de 2026 diferencia la potencia nominal de la potencia Boost, que no se mezcla en esta tabla.',
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
      { label: 'Autonomía publicada por el configurador', value: 'Hasta 541 km en FWD, 737 km en FWD Long Range y 656 km en AWD Long Range' },
    ],
    specNote: 'La tabla recoge la potencia nominal, no la potencia Boost temporal. Los pares de los motores eléctricos no se muestran porque DS no publica un régimen de revoluciones asociado. Hybrid 145 declara 230 Nm a 1.750 rpm para el motor térmico.',
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
    intro: 'N°8 es el SUV coupé eléctrico de mayor tamaño de la gama actual de DS. Se ofrece con dos configuraciones de tracción delantera y una de tracción total. La batería de mayor capacidad distingue las versiones Long Range, pensadas para priorizar los recorridos largos.',
    powertrainSummary: 'La ficha técnica española de abril de 2026 recoge N°8 FWD de 230 CV (169 kW), FWD Long Range de 245 CV (180 kW) y AWD Long Range de 350 CV (257 kW). Las capacidades netas publicadas son 73,7 kWh para FWD y 97,2 kWh para Long Range.',
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
      { label: 'Autonomía publicada por el configurador', value: 'Hasta 556 km en FWD, 757 km en FWD Long Range y 664 km en AWD Long Range' },
    ],
    specNote: 'La tabla muestra la potencia nominal; la cifra Boost es un impulso temporal y no se mezcla con ella. Las autonomías indicadas proceden del configurador consultado el 6 de noviembre de 2026 y se expresan en ciclo WLTP; no predicen el alcance real. En las versiones eléctricas la cilindrada se representa con «—» y no se muestra el par, ya que DS no publica un régimen asociado.',
    officialUrl: 'https://store.dsautomobiles.es/selector/configurable/no8-berlina-5-puertas',
    technicalUrl: technicalFiles.n8,
    sources: [
      source('N°8: gama y configuraciones en DS España', `${root}/modelos/dsn8.html`),
      source('Configurador DS Store: versiones, autonomías y precios del N°8', 'https://store.dsautomobiles.es/selector/configurable/no8-berlina-5-puertas'),
      source('Características técnicas oficiales N°8, abril de 2026', technicalFiles.n8),
    ],
  }),
];

export const dsModels = records.map((model) => ({ ...model, reviewedAt }));
