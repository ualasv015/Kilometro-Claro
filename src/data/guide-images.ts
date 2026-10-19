export interface GuideImage {
  src: string;
  alt: string;
  caption: string;
  author: string;
  source: string;
  width: number;
  height: number;
}

// Cada ficha de Wikimedia Commons enlazada abajo declara expresamente la licencia CC0 de la imagen.
export const guideImages: Record<string, GuideImage> = {
  'coche-hibrido-enchufable-o-microhibrido': {
    src: '/images/guides/tipos-de-hibrido.jpg',
    alt: 'Toyota Prius seccionado que permite ver su motor y batería híbrida',
    caption: 'Un híbrido convencional combina motor de combustión y sistema eléctrico. El Prius de la fotografía es un ejemplo histórico de esta arquitectura.',
    author: 'TTTNIS',
    source: 'https://commons.wikimedia.org/wiki/File:Toyota_Prius_NHW10_cutaway_01.jpg',
    width: 960, height: 523,
  },
  'coches-baratos-espana': {
    src: '/images/guides/coches-baratos.jpg',
    alt: 'Dacia Sandero Stepway plateado visto desde delante',
    caption: 'Dacia Sandero Stepway. La versión fotografiada no tiene necesariamente el mismo equipamiento ni precio que la versión básica mencionada en la guía.',
    author: 'Harvey Bold',
    source: 'https://commons.wikimedia.org/wiki/File:2024_Dacia_Sandero_Stepway_Extreme_TCe_-_999cc_1.0_(90PS)_Petrol_-_Silver_-_02-2025,_Front.jpg',
    width: 960, height: 613,
  },
  'como-calcular-consumo-real-coche': {
    src: '/images/guides/consumo-real.jpg',
    alt: 'Vista del salpicadero de un coche en circulación',
    caption: 'Para medir el consumo real conviene contrastar la distancia recorrida con los litros repostados, además de consultar el ordenador de a bordo.',
    author: 'Arkady Lifshits',
    source: 'https://commons.wikimedia.org/wiki/File:Car_dashboard_on_highway_(Unsplash).jpg',
    width: 960, height: 634,
  },
  'como-reducir-consumo-combustible': {
    src: '/images/guides/reducir-consumo.jpg',
    alt: 'Carretera secundaria que atraviesa el campo al amanecer',
    caption: 'La velocidad estable y la anticipación en la conducción ayudan a evitar gasto innecesario de combustible.',
    author: 'Aaron Burden',
    source: 'https://commons.wikimedia.org/wiki/File:Countryside_road_(Unsplash).jpg',
    width: 960, height: 720,
  },
  'consumo-coche-electrico-gasolina-diesel': {
    src: '/images/guides/electrico-frente-a-combustion.jpg',
    alt: 'Coche eléctrico conectado a un punto de recarga público',
    caption: 'La recarga pública puede cambiar tanto el coste como el tiempo total de un viaje en eléctrico. Instalación fotografiada en Estados Unidos.',
    author: 'Fortunate4now',
    source: 'https://commons.wikimedia.org/wiki/File:Electric_car_charging_station.jpg',
    width: 960, height: 527,
  },
  'cuanto-cuesta-mantener-coche-mes-espana': {
    src: '/images/guides/coste-mantenimiento.jpg',
    alt: 'Profesional trabajando en la reparación de un vehículo dentro de un taller',
    caption: 'El mantenimiento y las reparaciones son solo una parte del coste mensual de tener coche. Imagen ilustrativa de un taller de restauración.',
    author: 'Igor Ovsyannykov',
    source: 'https://commons.wikimedia.org/wiki/File:Car_Restoration_Workshop_(Unsplash).jpg',
    width: 960, height: 640,
  },
  'cuanto-cuesta-viaje-coche': {
    src: '/images/guides/coste-viaje.jpg',
    alt: 'Vista desde arriba del tráfico en una calle de Barcelona',
    caption: 'Tráfico en Barcelona. Al combustible de un viaje pueden sumarse peajes y aparcamiento según la ruta elegida.',
    author: 'Autor no identificado',
    source: 'https://commons.wikimedia.org/wiki/File:Tr%C3%A0ficBar%C3%A7a(negre%26blanc)dalt.jpg',
    width: 960, height: 1280,
  },
  'marcas-coches-mas-fiables-ranking': {
    src: '/images/guides/fiabilidad-marcas.jpg',
    alt: 'Toyota Corolla rojo aparcado junto a otros coches',
    caption: 'La fiabilidad de una marca no sustituye la revisión del historial y estado de cada unidad. El vehículo fotografiado es un Toyota Corolla.',
    author: 'Trop86',
    source: 'https://commons.wikimedia.org/wiki/File:Toyota_Corolla_131600.jpg',
    width: 960, height: 724,
  },
  'marcas-coches-mas-vendidas-espana-2025': {
    src: '/images/guides/marcas-mas-vendidas.jpg',
    alt: 'Dacia Sandero rojo aparcado en una calle',
    caption: 'El Dacia Sandero fue el modelo más matriculado en España en 2025. La fotografía es ilustrativa y no representa una venta concreta en España.',
    author: 'crash71100',
    source: 'https://commons.wikimedia.org/wiki/File:New_Dacia_Sandero.jpg',
    width: 960, height: 568,
  },
  'nueva-normativa-dgt-octubre-2026': {
    src: '/images/guides/normativa-dgt.jpg',
    alt: 'Cruce con semáforos y vehículos en Madrid',
    caption: 'Cruce urbano en Madrid. Antes de circular, consulta el texto vigente y la señalización del lugar.',
    author: 'Nicolas Vigier',
    source: 'https://commons.wikimedia.org/wiki/File:Glorieta_de_Cuatro_Caminos,_Madrid_2021-01-15_-_51026782961.jpg',
    width: 960, height: 641,
  },
  'porsche-mission-s-2026': {
    src: '/images/guides/porsche-mission-s.jpg',
    alt: 'Silueta de Manhattan vista desde Queens al atardecer',
    caption: 'Vista de Manhattan desde Queens, el distrito donde Porsche presentó el Mission S. La foto es ilustrativa y no muestra el lugar exacto del acto.',
    author: 'PublicDomainPictures',
    source: 'https://commons.wikimedia.org/wiki/File:NYC_skyline-14619.jpg',
    width: 960, height: 640,
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
    alt: 'Tráfico y peatones en la calle de Alcalá de Madrid en un día de lluvia',
    caption: 'Calle de Alcalá, Madrid. Las condiciones de acceso a una ZBE dependen de la ordenanza y señalización de cada municipio.',
    author: 'Nicolas Vigier',
    source: 'https://commons.wikimedia.org/wiki/File:Madrid_(39198052734).jpg',
    width: 960, height: 641,
  },
};
