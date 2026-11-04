import type { ModelPageData } from './model-pages';

const reviewedAt = '4 de noviembre de 2026';
const alpine = 'https://www.alpinecars.es';
const source = (label: string, url: string) => ({ label, url });

const model = (data: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData => ({
  brandSlug: 'alpine',
  reviewedAt,
  ...data,
});

const photo = (filename: string, alt: string, sourceTitle: string, authorName: string, licenseName = 'CC BY-SA 4.0', licenseUrl = 'https://creativecommons.org/licenses/by-sa/4.0/') => ({
  src: `/images/models/commons/${filename}`,
  alt,
  caption: 'Imagen de referencia: la unidad fotografiada puede diferir en acabado, equipamiento y especificación de las versiones configurables en España.',
  width: filename === 'model-alpine-a290.jpg' ? 1280 : filename === 'model-alpine-a390.jpg' ? 1280 : 1280,
  height: filename === 'model-alpine-a110.jpg' ? 856 : filename === 'model-alpine-a290.jpg' ? 688 : 960,
  sourceTitle,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(sourceTitle).replace(/%20/g, '_')}`,
  authorName,
  licenseName,
  licenseUrl,
});

export const alpineModels: ModelPageData[] = [
  model({
    modelSlug: 'a110',
    title: 'Alpine A110: versiones, motor 1.8 turbo y ficha técnica | Kilómetro Claro',
    description: 'Ficha del Alpine A110 disponible en España: diferencias entre A110, GTS y R 70, motor 1.8 turbo, potencia, par y situación de venta en stock.',
    intro: 'El Alpine A110 es un deportivo biplaza de motor central y propulsión trasera. La gama española mantiene el modelo y algunas de sus versiones en la web oficial, pero Alpine ya no acepta pedidos de fábrica: las unidades nuevas se ofrecen a través del stock de Alpine Stores. Esta ficha separa las motorizaciones publicadas y aconseja confirmar qué versión queda realmente disponible antes de desplazarse o reservar.',
    powertrainSummary: 'Las versiones de gasolina emplean un cuatro cilindros turboalimentado de 1,8 litros. El A110 desarrolla 252 CV; A110 GTS y A110 R 70 elevan la potencia a 300 CV. La marca declara 320 Nm entre 2.000 y 4.800 rpm para el A110 y 340 Nm entre 2.400 y 6.000 rpm para GTS y R 70.',
    usageNote: 'Alpine indica que el A110 ya no es configurable por encargo y remite a las unidades nuevas en stock. La gama web compara también el A110 R Ultime, pero no lo hemos incluido como versión actualmente disponible al no encontrarlo en el listado español de vehículos en stock consultado. El inventario cambia por concesionario; confirma versión, kilometraje, fecha de matriculación y equipamiento de la unidad concreta.',
    versions: [
      { name: 'A110', type: 'Gasolina turbo', power: '252 CV (185 kW)', displacement: '1.8 l', maxTorque: '320 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.000–4.800 rpm' },
      { name: 'A110 GTS', type: 'Gasolina turbo', power: '300 CV (221 kW)', displacement: '1.8 l', maxTorque: '340 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.400–6.000 rpm' },
      { name: 'A110 R 70', type: 'Gasolina turbo', power: '300 CV (221 kW)', displacement: '1.8 l', maxTorque: '340 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '2.400–6.000 rpm', note: 'Serie especial del A110; unidades sujetas a stock.' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Coupé biplaza' },
      { label: 'Motor', value: '1.8 turbo de gasolina, en posición central trasera' },
      { label: 'Tracción', value: 'Trasera' },
      { label: 'Situación comercial', value: 'Unidades nuevas en stock; no admite pedido de fábrica' },
    ],
    specNote: 'La comparación oficial española de Alpine publica las cifras de potencia y par de A110, GTS y R 70. El A110 R Ultime aparece en la página general de comparación, pero no se incluye como una versión comprobada en venta en España; su disponibilidad puede depender de unidades residuales o del mercado de ocasión.',
    officialUrl: `${alpine}/gama/a110.html`,
    technicalUrl: `${alpine}/gama.html`,
    sources: [
      source('Alpine España: A110 y aviso de fin de pedidos de fábrica', `${alpine}/gama/a110.html`),
      source('Alpine España: comparación de A110, GTS, R 70 y R Ultime', `${alpine}/gama.html`),
      source('Alpine España: vehículos nuevos disponibles en stock', `${alpine}/stock-vehiculos-nuevos.html`),
    ],
    image: photo('model-alpine-a110.jpg', 'Alpine A110 azul expuesto en una feria del automóvil.', 'Alpine A110 Auto Zuerich 2025 DSC 3645.jpg', 'Alexander Migl'),
  }),
  model({
    modelSlug: 'a290',
    title: 'Alpine A290: versiones eléctricas, potencia y ficha técnica | Kilómetro Claro',
    description: 'Consulta las cinco versiones españolas del Alpine A290, sus dos potencias eléctricas, batería de 52 kWh y autonomía WLTP publicada.',
    intro: 'El Alpine A290 es un compacto eléctrico deportivo de cinco puertas y cinco plazas. En España se comercializa con dos niveles de potencia y varios acabados: GT y GT Collection utilizan el motor de 180 CV; GT Performance, GT Performance Collection y GTS emplean el de 220 CV. La batería tiene 52 kWh y la autonomía homologada varía según el acabado y las ruedas.',
    powertrainSummary: 'Todas las versiones son eléctricas y montan una batería de 52 kWh. Alpine declara 130 kW (180 CV) para GT y GT Collection, y 160 kW (220 CV) para las versiones GT Performance, GT Performance Collection y GTS. Aunque la marca publica cifras de par, no las acompaña de un régimen en rpm; por ese motivo no se muestran en la tabla de par máximo.',
    usageNote: 'La autonomía WLTP anunciada llega aproximadamente a 380 km y depende de la versión, el equipamiento y las ruedas. Es una cifra homologada para comparar vehículos, no una garantía de alcance real: velocidad, temperatura, desnivel y climatización cambian el consumo. Antes de comprar, revisa en el configurador la combinación de acabado y autonomía homologada que corresponde al vehículo ofertado.',
    versions: [
      { name: 'GT', type: 'Eléctrico', power: '180 CV (130 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'GT Collection', type: 'Eléctrico', power: '180 CV (130 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'GT Performance', type: 'Eléctrico', power: '220 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'GT Performance Collection', type: 'Eléctrico', power: '220 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'GTS', type: 'Eléctrico', power: '220 CV (160 kW)', displacement: '—', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Compacto deportivo de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Batería', value: '52 kWh' },
      { label: 'Autonomía homologada', value: 'Hasta unos 380 km WLTP, según versión' },
    ],
    specNote: 'El configurador español consultado enumera GT, GT Collection, GT Performance, GT Performance Collection y GTS. La información de Collection indica que ese acabado se ofrece sobre las dos potencias. La cifra de par eléctrico no aparece en la tabla porque la ficha del proyecto requiere también las revoluciones a las que se obtiene y Alpine no publica ese régimen.',
    officialUrl: `${alpine}/modelos-electricos/a290.html`,
    technicalUrl: `${alpine}/modelos-electricos/a290/configurador.html`,
    sources: [
      source('Alpine España: A290, versiones y gama', `${alpine}/modelos-electricos/a290.html`),
      source('Alpine España: configurador y especificaciones técnicas del A290', `${alpine}/modelos-electricos/a290/configurador.html`),
      source('Alpine España: versión GT Performance de 220 CV', `${alpine}/modelos-electricos/a290/precios-y-versiones.html?gradeCode=ENS_MDL2PSP1SERIELIM3`),
      source('Alpine Media España: A290 Collection y potencias disponibles', 'https://prensa.alpinecars.es/alpine-en-el-salon-del-automovil-de-paris-dando-forma-al-proximo-capitulo/?lang=spa'),
    ],
    image: photo('model-alpine-a290.jpg', 'Alpine A290 amarillo fotografiado en una exposición de automóviles.', 'Alpine A290 Auto Zuerich 2025 DSC 3349.jpg', 'Alexander Migl'),
  }),
  model({
    modelSlug: 'a390',
    title: 'Alpine A390: versiones GT y GTS, potencia eléctrica y ficha técnica | Kilómetro Claro',
    description: 'Ficha del Alpine A390 en España: diferencias entre GT y GTS, sistema eléctrico de tres motores, potencias y autonomía WLTP.',
    intro: 'El Alpine A390 es un fastback eléctrico de cinco plazas con tres motores y tracción total. La gama española ofrece dos versiones: GT, con 400 CV, y GTS, con 470 CV. En ambas, el sistema Alpine Active Torque Vectoring distribuye la fuerza entre las ruedas para gestionar la trayectoria; las cifras de par publicadas no se acompañan de un régimen de giro en rpm.',
    powertrainSummary: 'El A390 GT desarrolla 295 kW (400 CV) y el GTS, 345 kW (470 CV). Ambos emplean tres motores eléctricos y tracción integral. Alpine publica 661 Nm para el GT y 824 Nm para el GTS, pero no especifica revoluciones por minuto para esas cifras; por el criterio de la tabla no se muestran como par máximo.',
    usageNote: 'La autonomía WLTP anunciada alcanza hasta 557 km en determinadas configuraciones; en el configurador, el GT aparece con 549 km y el valor cambia por versión y ruedas. La autonomía homologada sirve para comparar coches, pero para valorar un trayecto real conviene considerar velocidad, temperatura, desnivel, carga y disponibilidad de recarga. El A390 se ofrece actualmente en España tanto en GT como en GTS.',
    versions: [
      { name: 'GT · tres motores', type: 'Eléctrico', power: '400 CV (295 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado en rpm' },
      { name: 'GTS · tres motores', type: 'Eléctrico', power: '470 CV (345 kW)', displacement: '—', maxTorque: '', torqueScope: 'Sistema eléctrico', torqueRpm: 'No publicado en rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'Fastback deportivo de cinco plazas' },
      { label: 'Motores', value: 'Tres motores eléctricos' },
      { label: 'Tracción', value: 'Total' },
      { label: 'Autonomía homologada', value: 'Hasta 557 km WLTP, según versión y configuración' },
    ],
    specNote: 'La página española distingue A390 GT y GTS. La cifra de 470 CV y 824 Nm corresponde al GTS; el GT entrega 400 CV y 661 Nm. No se muestra el par en la tabla porque la ficha del fabricante no indica el régimen en rpm para las motorizaciones eléctricas.',
    officialUrl: `${alpine}/modelos-electricos/a390.html`,
    technicalUrl: `${alpine}/modelos-electricos/a390/precios-y-versiones.html`,
    sources: [
      source('Alpine España: A390, versiones y características', `${alpine}/modelos-electricos/a390.html`),
      source('Alpine España: versiones GT y GTS del A390', `${alpine}/modelos-electricos/a390/precios-y-versiones.html`),
      source('Alpine España: configurador del A390 y datos WLTP del GT', `${alpine}/modelos-electricos/a390/configurador.html`),
    ],
    image: photo('model-alpine-a390.jpg', 'Alpine A390 gris expuesto en una feria del automóvil.', 'Alpine A390, Auto 2025, Zurich (20251029-P1074507).jpg', 'Matti Blume'),
  }),
];
