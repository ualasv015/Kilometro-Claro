export interface GuideImage {
  src: string;
  webp?: string;
  alt: string;
  caption: string;
  author?: string;
  source?: string;
  license?: string;
  width: number;
  height: number;
}

// Cada ficha de Wikimedia Commons enlazada abajo declara expresamente la licencia CC0 de la imagen.
export const guideImages: Record<string, GuideImage> = {
  'coche-hibrido-enchufable-o-microhibrido': {
    src: '/images/guides/tipos-de-hibrido.jpg',
    webp: '/images/guides/tipos-de-hibrido.webp',
    alt: 'Toyota Prius seccionado que permite ver su motor y batería híbrida',
    caption: 'Un híbrido convencional combina motor de combustión y sistema eléctrico. El Prius de la fotografía es un ejemplo histórico de esta arquitectura.',
    author: 'TTTNIS',
    source: 'https://commons.wikimedia.org/wiki/File:Toyota_Prius_NHW10_cutaway_01.jpg',
    width: 960, height: 523,
  },
  'coches-baratos-espana': {
    src: '/images/guides/coches-baratos.jpg',
    webp: '/images/guides/coches-baratos.webp',
    alt: 'Dacia Sandero Stepway plateado visto desde delante',
    caption: 'Dacia Sandero Stepway. La versión fotografiada no tiene necesariamente el mismo equipamiento ni precio que la versión básica mencionada en la guía.',
    author: 'Harvey Bold',
    source: 'https://commons.wikimedia.org/wiki/File:2024_Dacia_Sandero_Stepway_Extreme_TCe_-_999cc_1.0_(90PS)_Petrol_-_Silver_-_02-2025,_Front.jpg',
    width: 960, height: 613,
  },
  'como-calcular-consumo-real-coche': {
    src: '/images/guides/consumo-real.jpg',
    webp: '/images/guides/consumo-real.webp',
    alt: 'Vista del salpicadero de un coche en circulación',
    caption: 'Para medir el consumo real conviene contrastar la distancia recorrida con los litros repostados, además de consultar el ordenador de a bordo.',
    author: 'Arkady Lifshits',
    source: 'https://commons.wikimedia.org/wiki/File:Car_dashboard_on_highway_(Unsplash).jpg',
    width: 960, height: 634,
  },
  'como-reducir-consumo-combustible': {
    src: '/images/guides/reducir-consumo.jpg',
    webp: '/images/guides/reducir-consumo.webp',
    alt: 'Carretera secundaria que atraviesa el campo al amanecer',
    caption: 'La velocidad estable y la anticipación en la conducción ayudan a evitar gasto innecesario de combustible.',
    author: 'Aaron Burden',
    source: 'https://commons.wikimedia.org/wiki/File:Countryside_road_(Unsplash).jpg',
    width: 960, height: 720,
  },
  'consumo-coche-electrico-gasolina-diesel': {
    src: '/images/guides/electrico-frente-a-combustion.jpg',
    webp: '/images/guides/electrico-frente-a-combustion.webp',
    alt: 'Coche eléctrico conectado a un punto de recarga público',
    caption: 'La recarga pública puede cambiar tanto el coste como el tiempo total de un viaje en eléctrico. Instalación fotografiada en Estados Unidos.',
    author: 'Fortunate4now',
    source: 'https://commons.wikimedia.org/wiki/File:Electric_car_charging_station.jpg',
    width: 960, height: 527,
  },
  'cuanto-cuesta-mantener-coche-mes-espana': {
    src: '/images/guides/coste-mantenimiento.jpg',
    webp: '/images/guides/coste-mantenimiento.webp',
    alt: 'Profesional trabajando en la reparación de un vehículo dentro de un taller',
    caption: 'El mantenimiento y las reparaciones son solo una parte del coste mensual de tener coche. Imagen ilustrativa de un taller de restauración.',
    author: 'Igor Ovsyannykov',
    source: 'https://commons.wikimedia.org/wiki/File:Car_Restoration_Workshop_(Unsplash).jpg',
    width: 960, height: 640,
  },
  'cuanto-cuesta-viaje-coche': {
    src: '/images/guides/coste-viaje.jpg',
    webp: '/images/guides/coste-viaje.webp',
    alt: 'Vista desde arriba del tráfico en una calle de Barcelona',
    caption: 'Tráfico en Barcelona. Al combustible de un viaje pueden sumarse peajes y aparcamiento según la ruta elegida.',
    author: 'Autor no identificado',
    source: 'https://commons.wikimedia.org/wiki/File:Tr%C3%A0ficBar%C3%A7a(negre%26blanc)dalt.jpg',
    width: 960, height: 1280,
  },
  'marcas-coches-mas-fiables-ranking': {
    src: '/images/guides/fiabilidad-marcas.jpg',
    webp: '/images/guides/fiabilidad-marcas.webp',
    alt: 'Toyota Corolla rojo aparcado junto a otros coches',
    caption: 'La fiabilidad de una marca no sustituye la revisión del historial y estado de cada unidad. El vehículo fotografiado es un Toyota Corolla.',
    author: 'Trop86',
    source: 'https://commons.wikimedia.org/wiki/File:Toyota_Corolla_131600.jpg',
    width: 960, height: 724,
  },
  'marcas-coches-mas-vendidas-espana-2025': {
    src: '/images/guides/marcas-mas-vendidas.jpg',
    webp: '/images/guides/marcas-mas-vendidas.webp',
    alt: 'Dacia Sandero rojo aparcado en una calle',
    caption: 'El Dacia Sandero fue el modelo más matriculado en España en 2025. La fotografía es ilustrativa y no representa una venta concreta en España.',
    author: 'crash71100',
    source: 'https://commons.wikimedia.org/wiki/File:New_Dacia_Sandero.jpg',
    width: 960, height: 568,
  },
  'nueva-normativa-dgt-octubre-2026': {
    src: '/images/guides/normativa-dgt.jpg',
    webp: '/images/guides/normativa-dgt.webp',
    alt: 'Cruce con semáforos y vehículos en Madrid',
    caption: 'Cruce urbano en Madrid. Antes de circular, consulta el texto vigente y la señalización del lugar.',
    author: 'Nicolas Vigier',
    source: 'https://commons.wikimedia.org/wiki/File:Glorieta_de_Cuatro_Caminos,_Madrid_2021-01-15_-_51026782961.jpg',
    width: 960, height: 641,
  },
  'porsche-mission-s-2026': {
    src: '/images/guides/porsche-mission-s-architecture.png',
    alt: 'Diagrama editorial de una plataforma deportiva conceptual con motor central; no representa el Porsche Mission S',
    caption: 'Ilustración conceptual propia basada únicamente en la arquitectura de motor central comunicada por Porsche. No representa el diseño ni las especificaciones del Mission S de producción.',
    author: 'Kilómetro Claro',
    width: 1600, height: 900,
  },
  'que-coche-comprar-segun-presupuesto': {
    src: '/images/guides/comprar-segun-presupuesto.webp',
    alt: 'Concesionario de automóviles y vehículos expuestos vistos desde arriba',
    caption: 'El precio del escaparate es solo una parte de la decisión: compara también seguro, energía, mantenimiento y financiación.',
    author: 'Wikideas1',
    source: 'https://commons.wikimedia.org/wiki/File:Car_dealership.webp',
    width: 960, height: 715,
  },
  'zonas-bajas-emisiones-espana-como-afectan': {
    src: '/images/guides/zonas-bajas-emisiones.jpg',
    webp: '/images/guides/zonas-bajas-emisiones.webp',
    alt: 'Tráfico y peatones en la calle de Alcalá de Madrid en un día de lluvia',
    caption: 'Calle de Alcalá, Madrid. Las condiciones de acceso a una ZBE dependen de la ordenanza y señalización de cada municipio.',
    author: 'Nicolas Vigier',
    source: 'https://commons.wikimedia.org/wiki/File:Madrid_(39198052734).jpg',
    width: 960, height: 641,
  },
  'tipos-cambio-automatico': {
    src: '/images/guides/tipos-cambio-automatico.svg',
    alt: 'Esquema comparativo de cuatro cambios automáticos: convertidor de par, doble embrague, CVT y e-CVT híbrido',
    caption: 'Esquema editorial: cada sistema transmite la fuerza de una forma distinta. En especial, la e-CVT híbrida no funciona como una CVT de correa y poleas.',
    author: 'Kilómetro Claro',
    width: 1600, height: 900,
  },
  'tipos-traccion-coche': {
    src: '/images/guides/tipos-traccion-coche.jpg',
    alt: 'Esquema editorial que muestra qué ruedas reciben fuerza en un coche de tracción delantera, trasera, total AWD y 4x4',
    caption: 'Ilustración propia de los ejes motrices en cuatro configuraciones. La denominación comercial y el funcionamiento concreto pueden variar según el fabricante.',
    author: 'Kilómetro Claro',
    width: 1600, height: 900,
  },
  'tipos-luces-coche': {
    src: '/images/guides/tipos-luces-coche.svg',
    alt: 'Esquema de cuatro tecnologías de faros: halógena, xenón, LED y láser, con haces ilustrativos sin escala',
    caption: 'Esquema editorial propio. La forma y el alcance del haz dependen también de la óptica, el reglaje y la versión del vehículo; los haces no están dibujados a escala.',
    author: 'Kilómetro Claro',
    width: 1600, height: 900,
  },
};
