import { volkswagenModels } from './volkswagen-model-pages';
import { hyundaiModels } from './hyundai-model-pages';
import { seatModels } from './seat-model-pages';
import { modelImageData } from './model-image-data';
import { daciaModels } from './dacia-model-pages';
import { changanModels } from './changan-model-pages';
import { omodaJaecooModels } from './omoda-jaecoo-model-pages';
import { omodaPriceData } from './omoda-price-data';
import { jaecooPriceData } from './jaecoo-price-data';
import { leapmotorModels } from './leapmotor-model-pages';
import { leapmotorPriceData } from './leapmotor-price-data';
import { bydModels } from './byd-model-pages';
import { mgModels } from './mg-model-pages';
import { mgPriceData } from './mg-price-data';
import { peugeotModels } from './peugeot-model-pages';
import { kiaModels } from './kia-model-pages';
import { mercedesModels } from './mercedes-model-pages';
import { bmwModels } from './bmw-model-pages';
import { audiModels } from './audi-model-pages';
import { mazdaModels } from './mazda-model-pages';
import { mazdaPriceData } from './mazda-price-data';
import { volvoModels } from './volvo-model-pages';
import { volvoPriceData } from './volvo-price-data';
import { dsModels } from './ds-model-pages';
import { dsPriceData } from './ds-price-data';
import { citroenModels } from './citroen-model-pages';
import { citroenPriceData } from './citroen-price-data';
import { skodaModels } from './skoda-model-pages';
import { skodaPriceData } from './skoda-price-data';
import { cupraModels } from './cupra-model-pages';
import { nissanModels } from './nissan-model-pages';
import { nissanPriceData } from './nissan-price-data';
import { opelModels } from './opel-model-pages';
import { opelPriceData, opelPriceNote } from './opel-price-data';
import { ebroModels } from './ebro-model-pages';
import { fordModels } from './ford-model-pages';
import { fordPriceData, fordPriceNote, fordRangePriceSource } from './ford-price-data';
import { teslaModels } from './tesla-model-pages';
import { teslaPriceData } from './tesla-price-data';
import { fiatModels } from './fiat-model-pages';
import { fiatPriceData } from './fiat-price-data';
import { jeepModels } from './jeep-model-pages';
import { jeepPriceData } from './jeep-price-data';
import { miniModels } from './mini-model-pages';
import { miniPriceData } from './mini-price-data';
import { lexusModels } from './lexus-model-pages';
import { lexusPriceData } from './lexus-price-data';
import { hondaModels } from './honda-model-pages';
import { hondaPriceData } from './honda-price-data';
import { suzukiModels } from './suzuki-model-pages';
import { suzukiPriceData } from './suzuki-price-data';
import { geelyModels } from './geely-model-pages';
import { geelyPriceData } from './geely-price-data';
import { mitsubishiModels } from './mitsubishi-model-pages';
import { mitsubishiPriceData } from './mitsubishi-price-data';
import { lynkCoModels } from './lynk-co-model-pages';
import { lynkCoPriceData } from './lynk-co-price-data';
import { porscheModels } from './porsche-model-pages';
import { porscheBasePriceType, porschePriceData } from './porsche-price-data';
import { kgmModels } from './kgm-model-pages';
import { kgmPriceData } from './kgm-price-data';
import { landRoverModels } from './land-rover-model-pages';
import { xpengModels } from './xpeng-model-pages';
import { xpengPriceData } from './xpeng-price-data';
import { alfaRomeoModels } from './alfa-romeo-model-pages';
import { evoModels } from './evo-model-pages';
import { subaruModels } from './subaru-model-pages';
import { subaruPriceData } from './subaru-price-data';
import { polestarModels } from './polestar-model-pages';
import { polestarBasePriceType, polestarPriceData } from './polestar-price-data';
import { swmModels } from './swm-model-pages';
import { swmPriceData } from './swm-price-data';
import { smartModels } from './smart-model-pages';
import { smartPriceData } from './smart-price-data';
import { lanciaModels } from './lancia-model-pages';
import { lanciaPriceData } from './lancia-price-data';
import { alpineModels } from './alpine-model-pages';
import { maseratiModels } from './maserati-model-pages';
import { maseratiPriceData } from './maserati-price-data';
import { landRoverPriceData, landRoverRangePriceSource } from './land-rover-price-data';
import { mercedesPriceData, mercedesPriceNote, mercedesReferencePriceData, mercedesReferencePriceType } from './mercedes-price-data';
import { bmwPriceData, bmwPriceSource, bmwConfiguratorSource } from './bmw-price-data';
import { alfaRomeoPriceData, alfaRomeoOfferSource, alfaRomeoPriceSource } from './alfa-romeo-price-data';
import { alpinePriceData } from './alpine-price-data';
import { cupraPriceData, cupraOffersSource, cupraPriceNote } from './cupra-price-data';
import { audiPriceData } from './audi-price-data';
import { bydPriceData, bydPriceNote, bydPriceSource } from './byd-price-data';
import { changanPriceData } from './changan-price-data';
import { evoPriceData } from './evo-price-data';
import { applyCatalogReferencePrice } from './catalog-reference-price-data';
import { formatMotorTableVersion } from '../lib/motor-table';

export type ModelVersion = {
  name: string;
  type?: string;
  price?: string;
  priceType?: string;
  powertrainGroup?: 'electric' | 'hydrogen' | 'plug-in' | 'hybrid' | 'mild-hybrid' | 'mild-bifuel' | 'multi-energy' | 'bifuel' | 'diesel' | 'petrol' | 'mixed';
  power: string;
  displacement: string;
  maxTorque: string;
  torqueScope: string;
  torqueRpm: string;
  additionalTorque?: string;
  note?: string;
};

export type ModelPageData = {
  brandSlug: string;
  modelSlug: string;
  title: string;
  description: string;
  intro: string;
  powertrainSummary: string;
  usageNote: string;
  basePrice?: string;
  basePriceLabel?: string;
  basePriceNote?: string;
  basePricePending?: boolean;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  versionPriceHeading?: string;
  priceNote?: string;
  priceOptions?: { name: string; price?: string; priceType?: string }[];
  versions: ModelVersion[];
  facts: { label: string; value: string }[];
  figures?: { label: string; value: string }[];
  specNote?: string;
  officialUrl: string;
  technicalUrl: string;
  sources: { label: string; url: string }[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
    sourceTitle?: string;
    sourceUrl?: string;
    authorName: string;
    authorUrl?: string;
    licenseName: string;
    licenseUrl?: string;
  };
  reviewedAt: string;
};

const formatKiaMotorVersion = (version: ModelVersion): ModelVersion => {
  const formatted = formatMotorTableVersion(version);
  return /\b(?:CV|kW)\b/i.test(formatted.power)
    ? formatted
    : { ...formatted, power: '—' };
};
const toyota = 'https://www.toyota.es';
const byModel = (slug: string) => `${toyota}/coches/${slug}`;
const source = (label: string, url: string) => ({ label, url });
const imageHeights: Record<string, number> = {
  'toyota-aygo-x-cross.jpg': 899, 'toyota-bz4x.jpg': 671, 'toyota-c-hr-plus.jpg': 718,
  'toyota-c-hr.jpg': 856, 'toyota-corolla-cross.jpg': 960, 'toyota-corolla-hatchback.jpg': 742,
  'toyota-corolla-sedan.jpg': 743, 'toyota-corolla-touring-sports.jpg': 852, 'toyota-gr-yaris.jpg': 859,
  'toyota-hilux.jpg': 960, 'toyota-land-cruiser-250.jpg': 914, 'toyota-mirai.jpg': 964,
  'toyota-proace-city-verso.jpg': 738, 'toyota-proace-city.jpg': 699, 'toyota-proace-max.jpg': 960,
  'toyota-proace-verso.jpg': 1192, 'toyota-proace.jpg': 960, 'toyota-rav4.jpg': 676,
  'toyota-yaris-cross.jpg': 736, 'toyota-yaris-hybrid-130-xp210.jpg': 761,
  'renault-twingo-e-tech.jpg': 1197, 'renault-5-e-tech.jpg': 775, 'renault-4-e-tech.jpg': 720,
  'renault-clio.jpg': 782, 'renault-captur.jpg': 805, 'renault-symbioz.jpg': 715,
  'renault-austral.jpg': 913, 'renault-arkana.jpg': 778, 'renault-espace.jpg': 947,
  'renault-rafale.jpg': 962, 'renault-megane-e-tech.jpg': 853, 'renault-scenic-e-tech.jpg': 703,
  'renault-kangoo.jpg': 754, 'renault-grand-kangoo.jpg': 1203,
  'renault-trafic-combi.jpg': 711, 'renault-trafic-spaceclass.jpg': 853,
};
const photo = (
  file: string,
  alt: string,
  commonsFile: string,
  authorName: string,
  authorSlug: string,
  license: 'CC BY-SA 4.0' | 'CC0 1.0' | 'CC BY 2.0' | 'CC BY-SA 3.0 Alemania',
  authorUrlOverride?: string,
): NonNullable<ModelPageData['image']> => ({
  src: `/images/models/${file}`,
  alt,
  sourceTitle: commonsFile,
  width: 1280,
  height: imageHeights[file] ?? 853,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${commonsFile}`,
  authorName,
  authorUrl: authorUrlOverride ?? `https://commons.wikimedia.org/wiki/User:${authorSlug}`,
  licenseName: license,
  licenseUrl: license === 'CC0 1.0'
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : license === 'CC BY 2.0'
      ? 'https://creativecommons.org/licenses/by/2.0/'
      : license === 'CC BY-SA 3.0 Alemania'
        ? 'https://creativecommons.org/licenses/by-sa/3.0/de/deed.es'
        : 'https://creativecommons.org/licenses/by-sa/4.0/',
});

// Datos individualizados por familia. Las cifras de par se atribuyen al subsistema que Toyota identifica;
// si la documentación española no publica el régimen o el desglose, se indica expresamente.
const toyotaModels: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>[] = [
  {
    modelSlug: 'aygo-x-cross',
    title: 'Toyota Aygo X Cross: motor híbrido y datos técnicos | Kilómetro Claro',
    description: 'Consulta la motorización híbrida del Toyota Aygo X Cross, cilindrada, potencia, par publicado y cifras WLTP de la gama española.',
    intro: 'El Aygo X Cross es el Toyota más pequeño de la gama española y ahora se ofrece con un sistema híbrido de 116 CV. Su carrocería elevada y sus dimensiones contenidas lo sitúan como una alternativa urbana; la ficha técnica permite comprobar qué hay detrás de esa etiqueta híbrida.',
    powertrainSummary: 'La gama consultada utiliza un motor de gasolina de tres cilindros asociado a un sistema híbrido y una transmisión automática. La batería híbrida se recarga durante la marcha y no requiere conexión externa.',
    usageNote: 'Su tamaño puede facilitar los desplazamientos y el aparcamiento urbano, aunque la elección también depende del espacio trasero, el maletero y el tipo de vías que frecuentes. Las cifras WLTP no garantizan el mismo consumo en todos los trayectos.',
    versions: [{ name: 'Hybrid 120 e-CVT', power: '116 CV', displacement: '1.490 cm³', maxTorque: '120 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No publicado en la ficha española', additionalTorque: 'Motor eléctrico: 141 Nm' }],
    facts: [{ label: 'Carrocería', value: 'Urbano crossover de 5 puertas' }, { label: 'Plazas', value: '4' }, { label: 'Longitud', value: '3.776 mm' }, { label: 'Consumo WLTP', value: '3,8–3,9 l/100 km' }],
    figures: [{ label: 'CO₂ combinado WLTP', value: '87–89 g/km' }],
    officialUrl: byModel('aygo-x-cross'),
    technicalUrl: `${byModel('aygo-x-cross')}/caracteristicas`,
    sources: [source('Gama Toyota España', `${toyota}/coches`), source('Características y especificaciones del Aygo X Cross', `${byModel('aygo-x-cross')}/caracteristicas`)],
    image: photo('toyota-aygo-x-cross.jpg', 'Toyota Aygo X fotografiado en una exposición de automóviles.', 'Toyota_Aygo_X_Hybrid_Auto_Zuerich_2025_DSC_3422.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'yaris',
    title: 'Toyota Yaris híbrido: versiones y consumo | Kilómetro Claro',
    description: 'Compara el Toyota Yaris Hybrid 120 y 130 con cilindrada, par motor, régimen, potencia y consumo WLTP publicados para la gama española.',
    intro: 'El Toyota Yaris es un utilitario híbrido de cinco puertas. Toyota España ofrece las versiones Hybrid 120 y Hybrid 130, que comparten la base de gasolina de 1,5 litros y se diferencian en la potencia del sistema y en la respuesta del motor eléctrico.',
    powertrainSummary: 'Es un híbrido no enchufable: combina un motor de gasolina y motores eléctricos, recupera energía al decelerar y no necesita conectarse a la red. La transmisión e-CVT gestiona automáticamente la relación entre ambos sistemas.',
    usageNote: 'Al comparar las dos versiones conviene revisar también acabado, ruedas y equipamiento. El consumo WLTP sirve para comparar bajo un procedimiento común, pero no predice por sí solo el gasto de cada conductor.',
    versions: [
      { name: 'Hybrid 120', power: '116 CV', displacement: '1.490 cm³', maxTorque: '120 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600–4.800 rpm', additionalTorque: 'Motor eléctrico MG2: 141 Nm' },
      { name: 'Hybrid 130', power: '130 CV', displacement: '1.490 cm³', maxTorque: '120 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600–4.800 rpm', additionalTorque: 'Motor eléctrico MG2: 185 Nm' },
    ],
    facts: [{ label: 'Carrocería', value: 'Utilitario de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '3.940 mm' }, { label: 'Maletero', value: '286 litros' }],
    figures: [{ label: 'Hybrid 120 · consumo WLTP', value: '3,9–4,3 l/100 km' }, { label: 'Hybrid 130 · consumo WLTP', value: '4,2–4,4 l/100 km' }, { label: 'CO₂ WLTP publicado', value: '89–101 g/km, según versión' }],
    officialUrl: byModel('yaris'),
    technicalUrl: `${byModel('yaris')}/caracteristicas/ficha-tecnica`,
    sources: [source('Catálogo Toyota Yaris MY26', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/yaris/Catalogo-Toyota-Yaris-MY26.pdf`), source('Ficha técnica de Toyota España', `${byModel('yaris')}/caracteristicas/ficha-tecnica`), source('Ficha técnica europea Toyota MY26 con desglose de par', 'https://www.toyota.ro/content/dam/toyota/ro/nmsc/brosuri-liste-pret/liste-de-pret/Preturi_Yaris_Hybrid.pdf')],
    image: photo('toyota-yaris-hybrid-130-xp210.jpg', 'Toyota Yaris Hybrid 130 de 2024, generación XP210, en una exposición de automóviles.', '2024_Toyota_Yaris_Hybrid_130_(XP210)_IMG_9910.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'gr-yaris',
    title: 'Toyota GR Yaris: motor 1.6 turbo, potencia y par | Kilómetro Claro',
    description: 'Ficha del Toyota GR Yaris: motor turbo de 1.618 cm³, 280 CV, par máximo, régimen y tracción GR-FOUR.',
    intro: 'El GR Yaris comparte nombre con el utilitario, pero responde a una filosofía distinta: es un deportivo de altas prestaciones desarrollado por Toyota Gazoo Racing, con carrocería específica, motor turbo y tracción total GR-FOUR.',
    powertrainSummary: 'La gama española consultada anuncia un tres cilindros turbo de gasolina de 1.618 cm³ y 280 CV. Se ofrece con caja manual de seis velocidades o automática de ocho, según configuración; ambas trabajan con el sistema de tracción total GR-FOUR.',
    usageNote: 'Su planteamiento, potencia y consumo homologado lo separan de un utilitario pensado para minimizar el gasto diario. Para evaluar una unidad concreta conviene comprobar transmisión, neumáticos, mantenimiento y uso previo, especialmente si se busca de segunda mano.',
    versions: [{ name: '1.6 Turbo GR-FOUR', power: '280 CV', displacement: '1.618 cm³', maxTorque: '345 Nm', torqueScope: 'Motor de gasolina (ficha Toyota España)', torqueRpm: '3.250–4.600 rpm', note: 'Caja manual de 6 velocidades o automática de 8, según versión.' }],
    facts: [{ label: 'Carrocería', value: 'Deportivo compacto de 3 puertas' }, { label: 'Plazas', value: '4' }, { label: 'Tracción', value: 'Total GR-FOUR' }, { label: 'Consumo WLTP', value: '8,7 l/100 km' }],
    figures: [{ label: 'CO₂ combinado WLTP', value: '197 g/km' }, { label: '0–100 km/h', value: '5,2 s' }],
    specNote: 'La ficha actual de Toyota España indica 345 Nm; la nota de presentación europea del nuevo modelo publicada en 2024 indicaba 390 Nm. Se conserva aquí la cifra de la ficha nacional consultada y se deja constancia de la diferencia entre documentos oficiales.',
    officialUrl: byModel('gr-yaris'),
    technicalUrl: `${byModel('gr-yaris')}/specifications`,
    sources: [source('Especificaciones del Toyota GR Yaris', `${byModel('gr-yaris')}/specifications`), source('Estreno del nuevo GR Yaris y datos técnicos europeos', 'https://prensa.toyota.es/estreno-mundial-del-nuevo-toyota-gr-yaris-en-el-salon-del-automovil-de-tokio-2024/')],
    image: photo('toyota-gr-yaris.jpg', 'Toyota GR Yaris de 2024 fotografiado en exterior.', '2024_Toyota_GR_Yaris_Hayakawa.jpg', 'TTTNIS', 'TTTNIS', 'CC0 1.0'),
  },
  {
    modelSlug: 'yaris-cross',
    title: 'Toyota Yaris Cross Hybrid 130: motor y datos | Kilómetro Claro',
    description: 'Consulta la motorización Hybrid 130 del Toyota Yaris Cross disponible en España, su cilindrada, potencia, par y precio de tarifa.',
    intro: 'El Yaris Cross lleva la tecnología híbrida de Toyota a un SUV urbano con mayor altura y un maletero más amplio que el del Yaris. La gama MY27 consultada en España se articula en torno al Hybrid 130; algunos acabados permiten elegir tracción total AWD-i.',
    powertrainSummary: 'Las versiones híbridas combinan un motor de gasolina de tres cilindros y 1.490 cm³ con asistencia eléctrica. Toyota publica para la familia Hybrid 130 un par máximo del sistema de 185 Nm y hasta 120 Nm para el motor eléctrico; el motor térmico entrega 120 Nm entre 3.600 y 4.800 rpm en la documentación técnica consultada.',
    usageNote: 'La elección entre tracción delantera y AWD-i depende del uso: el sistema total añade capacidad de tracción en superficies deslizantes, pero no convierte al Yaris Cross en un todoterreno. Comprueba qué acabados y motores están disponibles al configurar el vehículo.',
    versions: [
      { name: 'Hybrid 130 e-CVT', power: '130 CV', displacement: '1.490 cm³', maxTorque: '120 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No desglosado en el catálogo MY27', additionalTorque: 'Sistema híbrido: hasta 185 Nm; motor eléctrico: hasta 120 Nm' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.172 mm' }, { label: 'Maletero', value: 'Hasta 397 litros' }],
    figures: [{ label: 'Consumo WLTP mostrado por Toyota', value: '4,4 l/100 km' }, { label: 'CO₂ combinado WLTP', value: '100 g/km' }],
    specNote: 'La tarifa Toyota de septiembre de 2026 identifica la gama MY27 Hybrid 130. No trasladamos a esta ficha los datos de par eléctrico del Hybrid 120 de la generación anterior.',
    officialUrl: byModel('yaris-cross'),
    technicalUrl: `${byModel('yaris-cross')}/caracteristicas`,
    sources: [source('Toyota Yaris Cross MY2025 Hybrid 130', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/yaris-cross/Catalogo_Toyota_Yaris_Cross_MY2025_130.pdf`), source('Ficha técnica Yaris Cross Hybrid 120 (catálogo anterior)', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/YARIS_CROSS_MY_2022%20-%20web-v5.pdf`), source('Características del Yaris Cross', `${byModel('yaris-cross')}/caracteristicas.html`)],
    image: photo('toyota-yaris-cross.jpg', 'Toyota Yaris Cross Hybrid fotografiado en una calle.', 'Toyota_Yaris_Cross_Hybrid_(XP210)_1X7A1846.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'corolla',
    title: 'Toyota Corolla 5 puertas: motores Hybrid 140 y 200 | Kilómetro Claro',
    description: 'Motores, cilindrada, potencia y par del Toyota Corolla Hybrid 140 y Hybrid 200 de cinco puertas en España.',
    intro: 'El Corolla de cinco puertas es el compacto híbrido de Toyota. La gama española combina una alternativa Hybrid 140 enfocada al equilibrio con una Hybrid 200 más potente; las dos emplean gasolina y un sistema eléctrico autorrecargable.',
    powertrainSummary: 'La versión 140H utiliza un motor térmico 1.8 de 1.798 cm³; la 200H emplea un 2.0 de 1.987 cm³. El par del motor de gasolina y el par combinado del sistema son magnitudes distintas y se presentan por separado en la documentación Toyota.',
    usageNote: 'Al comparar las dos variantes, revisa también carrocería, acabado, ruedas y condiciones de homologación. La potencia combinada no se obtiene sumando sin más las potencias máximas de los motores térmico y eléctrico.',
    versions: [
      { name: 'Hybrid 140 e-CVT', power: '140 CV combinados', displacement: '1.798 cm³', maxTorque: '142 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600 rpm', additionalTorque: 'Par híbrido combinado: 185 Nm' },
      { name: 'Hybrid 200 e-CVT', power: '178 CV combinados', displacement: '1.987 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '4.400–5.200 rpm', additionalTorque: 'Par híbrido combinado: 206 Nm' },
    ],
    facts: [{ label: 'Carrocería', value: 'Compacto de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Tracción', value: 'Delantera' }, { label: 'Transmisión', value: 'Automática e-CVT' }],
    figures: [{ label: 'Consumo combinado WLTP', value: '4,4–4,9 l/100 km, según versión y configuración' }],
    officialUrl: byModel('corolla'),
    technicalUrl: `${byModel('corolla')}/caracteristicas`,
    sources: [source('Gama Toyota Corolla España', `${toyota}/coches/corolla`), source('Catálogo técnico Toyota Corolla 5 puertas MY26', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/corolla/Toyota_Corolla_5P_MY26.pdf`)],
    image: photo('toyota-corolla-hatchback.jpg', 'Toyota Corolla Hybrid de cinco puertas, generación E210.', '2023_Toyota_Corolla_Hybrid_(E210)_hatchback_IMG_8513.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'corolla-sedan',
    title: 'Toyota Corolla Sedan Hybrid: motor, par y medidas | Kilómetro Claro',
    description: 'Datos del Toyota Corolla Sedan Hybrid 140H: motor 1.8, potencia, par publicado, consumo homologado y dimensiones.',
    intro: 'El Corolla Sedan añade una carrocería de tres volúmenes a la gama híbrida compacta de Toyota. La versión actualmente mostrada en España es la Hybrid 140H, con cinco plazas y un maletero separado del habitáculo.',
    powertrainSummary: 'Su sistema híbrido de gasolina combina una unidad térmica 1.8 con un motor eléctrico y cambio e-CVT. Toyota España publica 140 CV de potencia combinada y 185 Nm de par máximo en la ficha de características, pero no desglosa allí el par térmico ni el régimen correspondiente.',
    usageNote: 'La berlina puede interesar a quien prioriza un maletero amplio y separado; antes de decidir, compara la apertura y la modularidad con las carrocerías hatchback y Touring Sports. La cifra de par de esta ficha se atribuye a Toyota tal como se publica, sin reinterpretarla como par del motor térmico.',
    versions: [{ name: 'Hybrid 140H e-CVT', power: '140 CV combinados', displacement: '1.798 cm³ (motor 1.8; misma familia híbrida)', maxTorque: '185 Nm', torqueScope: 'Cifra publicada en la ficha Toyota; desglose no indicado', torqueRpm: 'No publicado' }],
    facts: [{ label: 'Carrocería', value: 'Berlina de 4 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.630 mm' }, { label: 'Maletero', value: '471 litros' }],
    figures: [{ label: 'Consumo WLTP combinado', value: '4,6 l/100 km' }, { label: 'CO₂ combinado WLTP', value: '104–109 g/km' }],
    specNote: 'La ficha de características española comunica 185 Nm sin identificar de forma inequívoca si corresponde al motor térmico o al conjunto híbrido; por eso la tabla conserva esa atribución abierta y no añade un régimen no publicado.',
    officialUrl: byModel('corolla-sedan'),
    technicalUrl: `${byModel('corolla-sedan')}/caracteristicas`,
    sources: [source('Toyota Corolla Sedan en España', `${byModel('corolla-sedan')}`), source('Características y especificaciones del Corolla Sedan', `${byModel('corolla-sedan')}/caracteristicas`)],
    image: photo('toyota-corolla-sedan.jpg', 'Toyota Corolla Sedan híbrido de generación E210.', '2019_Toyota_Corolla_Hybrid_Saloon.jpg', 'Vauxford', 'Vauxford', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'corolla-touring-sports',
    title: 'Toyota Corolla Touring Sports: motores y par | Kilómetro Claro',
    description: 'Compara las versiones Hybrid 140 y Hybrid 200 del Toyota Corolla Touring Sports con sus cilindradas y datos de par.',
    intro: 'El Corolla Touring Sports comparte la tecnología híbrida del Corolla, pero la carrocería familiar aporta una zona de carga más larga y modulable. En el catálogo español MY26 figuran las versiones Hybrid 140 y Hybrid 200.',
    powertrainSummary: 'Hybrid 140 monta un motor térmico de 1.798 cm³ y Hybrid 200 uno de 1.987 cm³. Toyota distingue en su catálogo el par de cada motor de gasolina del par híbrido combinado; las cifras no deben tratarse como si fueran intercambiables.',
    usageNote: 'El familiar puede resultar más práctico para equipaje o viajes, pero el volumen disponible depende de la versión y de cómo se mida. El catálogo MY26 indica 596 litros para Hybrid 140 y 581 litros para Hybrid 200, con diferencias asociadas al sistema y a la configuración.',
    versions: [
      { name: 'Hybrid 140 e-CVT', power: '140 CV combinados', displacement: '1.798 cm³', maxTorque: '142 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600 rpm', additionalTorque: 'Par híbrido combinado: 185 Nm' },
      { name: 'Hybrid 200 e-CVT', power: '178 CV combinados', displacement: '1.987 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '4.400–5.200 rpm', additionalTorque: 'Par híbrido combinado: 206 Nm' },
    ],
    facts: [{ label: 'Carrocería', value: 'Familiar de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Maletero Hybrid 140', value: '596 litros' }, { label: 'Maletero Hybrid 200', value: '581 litros' }],
    figures: [{ label: 'Hybrid 140 · consumo WLTP', value: '4,5–4,7 l/100 km' }, { label: 'Hybrid 200 · consumo WLTP', value: '4,7–4,8 l/100 km' }],
    officialUrl: byModel('corolla-touring-sports'),
    technicalUrl: `${byModel('corolla-touring-sports')}/caracteristicas`,
    sources: [source('Catálogo Toyota Corolla Touring Sports MY26', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/corolla-touring-sports/Toyota_Corolla_Touring_Sports_MY26.pdf`), source('Características Corolla Touring Sports', `${byModel('corolla-touring-sports')}/caracteristicas`)],
    image: photo('toyota-corolla-touring-sports.jpg', 'Toyota Corolla Touring Sports Hybrid, carrocería familiar.', '2023_Toyota_Corolla_Touring_Sports_Hybrid_(E210)_IMG_7679.jpg', 'Alexander-93', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'corolla-cross',
    title: 'Toyota Corolla Cross: motores Hybrid 140 y 200 | Kilómetro Claro',
    description: 'Ficha del Toyota Corolla Cross con motores híbridos 140 y 200, cilindrada, par térmico y tracción AWD-i.',
    intro: 'El Corolla Cross traslada la tecnología híbrida de Toyota a un SUV familiar. En España se ofrece con Hybrid 140 y Hybrid 200, y esta última puede asociarse a la tracción total inteligente AWD-i en determinadas configuraciones.',
    powertrainSummary: 'La versión 140 utiliza el motor de gasolina 1.8 de 1.798 cm³; la 200 emplea un 2.0 de 1.987 cm³. Toyota publica 142 Nm a 3.600 rpm para el motor térmico 1.8 y 190 Nm entre 4.400 y 5.200 rpm para el 2.0; también publica pares híbridos combinados de 185 y 206 Nm, respectivamente.',
    usageNote: 'El Corolla Cross combina posición de conducción elevada y cinco plazas, pero la carrocería SUV no determina por sí sola el espacio útil ni el consumo. Si comparas Hybrid 200 4x2 con AWD-i, revisa la configuración concreta en el catálogo español.',
    versions: [
      { name: 'Hybrid 140 e-CVT', power: '140 CV', displacement: '1.798 cm³', maxTorque: '142 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600 rpm', additionalTorque: 'Par híbrido combinado: 185 Nm' },
      { name: 'Hybrid 200 e-CVT', power: '178 CV', displacement: '1.987 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '4.400–5.200 rpm', additionalTorque: 'Par híbrido combinado: 206 Nm; versión AWD-i disponible' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto' }, { label: 'Plazas', value: '5' }, { label: 'Maletero', value: 'Hasta 436 litros' }, { label: 'Potencia híbrida máxima', value: 'Hasta 178 CV' }],
    figures: [{ label: 'Par híbrido combinado máximo', value: '206 Nm en Hybrid 200' }],
    officialUrl: byModel('corolla-cross'),
    technicalUrl: `${byModel('corolla-cross')}/caracteristicas`,
    sources: [source('Toyota Corolla Cross en España', `${byModel('corolla-cross')}`), source('Catálogo técnico Corolla Cross', 'https://prensa.toyota.es/download/1f20a572-0984-4201-8f50-c70db5efb271/catalogotoyotacorollacross.pdf')],
    image: photo('toyota-corolla-cross.jpg', 'Toyota Corolla Cross SUV fotografiado en exterior.', '22_Toyota_Corolla_Cross_XLE.jpg', 'HJUdall', 'HJUdall', 'CC0 1.0'),
  },
  {
    modelSlug: 'c-hr',
    title: 'Toyota C-HR: motores híbridos e híbrido enchufable | Kilómetro Claro',
    description: 'Datos del Toyota C-HR Hybrid 140, Hybrid 200 AWD-i y Plug-in Hybrid 220, con cilindrada y pares publicados.',
    intro: 'El Toyota C-HR es un crossover compacto con alternativas híbridas no enchufables e híbrida enchufable. La batería y la posibilidad de recargar desde la red distinguen especialmente a la variante Plug-in, aunque los motores y acabados disponibles pueden cambiar según la configuración comercial.',
    powertrainSummary: 'La gama consultada incluye el Hybrid 140 de 1.8 litros, el Hybrid 200 AWD-i de 2.0 litros y el Plug-in Hybrid 220. En las versiones híbridas Toyota publica el par del motor térmico y el par combinado del sistema; para el enchufable la ficha española muestra 208 Nm sin un desglose térmico/eléctrico claro.',
    usageNote: 'El híbrido enchufable puede recorrer parte de los desplazamientos con energía almacenada si se recarga habitualmente. Sin acceso frecuente a carga, su mayor peso y funcionamiento pueden cambiar el resultado práctico; conviene comparar tus trayectos y consumo real, no solo la homologación.',
    versions: [
      { name: 'Hybrid 140 e-CVT', power: '140 CV', displacement: '1.798 cm³', maxTorque: '142 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '3.600 rpm', additionalTorque: 'Par híbrido combinado: 185 Nm' },
      { name: 'Hybrid 200 AWD-i e-CVT', power: '180 CV', displacement: '1.987 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '4.400–5.200 rpm', additionalTorque: 'Par híbrido combinado: 206 Nm' },
      { name: 'Plug-in Hybrid 220', power: '223 CV', displacement: '1.987 cm³', maxTorque: '208 Nm', torqueScope: 'Cifra publicada por Toyota; desglose no indicado', torqueRpm: 'No publicado', note: 'El par publicado no se etiqueta como par térmico en la página técnica consultada.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Crossover compacto de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.362 mm' }, { label: 'Alternativas', value: 'Híbrido o híbrido enchufable' }],
    figures: [{ label: 'Hybrid 140 · consumo WLTP', value: '4,7–4,8 l/100 km' }, { label: 'Plug-in Hybrid 220 · consumo combinado WLTP', value: '2,1–2,4 l/100 km (con batería cargada, según ciclo)' }],
    specNote: 'Las cifras de consumo de un híbrido enchufable dependen de la carga de la batería y del procedimiento de homologación; no son directamente comparables con el consumo de un híbrido no enchufable.',
    officialUrl: byModel('toyota-c-hr'),
    technicalUrl: `${byModel('toyota-c-hr')}/caracteristicas`,
    sources: [source('Gama Toyota C-HR 2027 y motores disponibles', 'https://prensa.toyota.es/toyota-c-hr-refuerza-su-propuesta-con-mas-equipamiento-confort-y-posibilidades-de-personalizacion/'), source('Catálogo Toyota C-HR Hybrid MY25', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/toyota-c-hr/Brochure_Toyota_C-HR_Hybrid_25_ok.pdf`), source('Configurador C-HR y Plug-in Hybrid 220', `${byModel('toyota-c-hr')}/build.html`), source('Comparativa técnica C-HR Plug-in y RAV4 Plug-in', `${toyota}/world-of-toyota/articles-news-events/que-suv-hibrido-enchufable-comprar`)],
    image: photo('toyota-c-hr.jpg', 'Toyota C-HR híbrido de generación actual fotografiado en exterior.', 'Toyota_C-HR_Hybrid_(AX20)_DSC_7238.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'c-hr-plus',
    title: 'Toyota C-HR+: versiones eléctricas, par y autonomía | Kilómetro Claro',
    description: 'Compara el Toyota C-HR+ eléctrico Advance y Spirit AWD-i: potencia, par, batería y autonomía WLTP.',
    intro: 'El C-HR+ es un SUV eléctrico de batería que comparte nombre y rasgos de diseño con el C-HR, pero utiliza una plataforma y una mecánica completamente eléctricas. La gama española consultada presenta una versión Advance de tracción delantera y una Spirit con tracción total AWD-i.',
    powertrainSummary: 'Toyota anuncia batería de 77 kWh y dos niveles de potencia: 224 CV en Advance y 343 CV en Spirit AWD-i. En la tabla se indica el par máximo combinado que el fabricante publica para cada configuración; al ser eléctrico, no existe cilindrada térmica ni un régimen de par en rpm comparable al de un motor de combustión.',
    usageNote: 'Para valorar su autonomía en España, considera velocidad, temperatura, desnivel y disponibilidad de carga en tu ruta. Las cifras WLTP son referencias de homologación, no una promesa de distancia idéntica en cualquier viaje.',
    versions: [
      { name: 'Electric 230 · batería 77 kWh', power: '224 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '269 Nm', torqueScope: 'Par máximo combinado publicado por Toyota', torqueRpm: 'No aplica / no publicado' },
      { name: 'Electric 350 AWD-i · batería 77 kWh', power: '343 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '438 Nm', torqueScope: 'Par máximo combinado publicado por Toyota', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Batería', value: '77 kWh brutos' }, { label: 'Tracción', value: 'Delantera o total AWD-i' }],
    figures: [{ label: 'Advance · autonomía WLTP', value: 'Hasta 607 km' }, { label: 'Spirit AWD-i · autonomía WLTP', value: 'Hasta 501 km' }, { label: 'Consumo combinado WLTP', value: '13,4–15,7 kWh/100 km, según versión' }],
    officialUrl: byModel('toyota-c-hr-plus'),
    technicalUrl: `${byModel('toyota-c-hr-plus')}/caracteristicas`,
    sources: [source('Catálogo Toyota C-HR+', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/toyota-c-hr-plus/Toyota_C-HR_Plus.pdf`), source('Características del Toyota C-HR+', `${byModel('toyota-c-hr-plus')}/caracteristicas`), source('Prestaciones del C-HR+ explicadas por Toyota', `${toyota}/world-of-toyota/articles-news-events/analisis-toyota-c-hr-plus`)],
    image: photo('toyota-c-hr-plus.jpg', 'Toyota C-HR+ eléctrico fotografiado en una exposición de automóviles.', 'Toyota_C-HR+_Auto_Zuerich_2025_DSC_3053.jpg', 'Alexander Migl', 'Alexander_Migl', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'rav4',
    title: 'Toyota RAV4: motores híbrido y enchufable | Kilómetro Claro',
    description: 'Ficha del Toyota RAV4 Hybrid 200 y Plug-in Hybrid 300 con cilindrada, potencia y par según los datos publicados por Toyota.',
    intro: 'El RAV4 es el SUV familiar de mayor tamaño de la gama Toyota española. La oferta consultada combina el híbrido no enchufable Hybrid 200 con el híbrido enchufable Plug-in Hybrid 300, pensado para poder cubrir trayectos diarios con energía eléctrica si se recarga.',
    powertrainSummary: 'Ambas variantes emplean un motor de gasolina de 2,5 litros; la versión enchufable añade una batería de mayor capacidad que puede cargarse desde una toma externa. Toyota publica cifras de par diferentes según el tipo de sistema, pero no da el régimen de par en las páginas resumidas consultadas.',
    usageNote: 'La elección entre Hybrid y Plug-in Hybrid depende en gran medida de si puedes cargar en casa o en el trabajo y de la proporción de trayectos diarios. En viajes largos, el consumo del enchufable puede variar notablemente cuando la batería deja de aportar energía externa.',
    versions: [
      { name: 'Hybrid 200 e-CVT', power: '183 CV (catálogo MY27, pendiente de homologación final)', displacement: '2.487 cm³', maxTorque: '208 Nm', torqueScope: 'Ficha de características Toyota; ámbito no aclarado', torqueRpm: 'No publicado', additionalTorque: 'Catálogo MY27: 221 Nm de par máximo combinado (dato provisional)' },
      { name: 'Plug-in Hybrid 300', power: '304 CV', displacement: '2.487 cm³', maxTorque: '227 Nm', torqueScope: 'Cifra publicada para el sistema en la comparativa Toyota', torqueRpm: 'No publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV familiar' }, { label: 'Plazas', value: '5' }, { label: 'Maletero', value: 'Hasta 749 litros según catálogo' }, { label: 'Alternativas', value: 'Híbrido o híbrido enchufable' }],
    figures: [{ label: 'Batería bruta Plug-in Hybrid', value: '22,7 kWh' }],
    specNote: 'Toyota presenta el catálogo MY27 con datos pendientes de homologación final. La página de características y el catálogo no coinciden en algunas cifras del híbrido; se muestran ambas con su procedencia y alcance, y conviene confirmar la ficha de la unidad concreta.',
    officialUrl: byModel('rav4'),
    technicalUrl: `${byModel('rav4')}/caracteristicas`,
    sources: [source('Catálogo Toyota RAV4', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/rav4/Catalogo_Toyota_RAV4.pdf`), source('Ficha técnica del RAV4', `${byModel('rav4')}/caracteristicas`), source('Comparativa Toyota de SUV híbridos enchufables', `${toyota}/world-of-toyota/articles-news-events/que-suv-hibrido-enchufable-comprar`)],
    image: photo('toyota-rav4.jpg', 'Toyota RAV4 Hybrid fotografiado en exterior.', '2025_Toyota_RAV4_Hybrid_Adventure.jpg', 'TTTNIS', 'TTTNIS', 'CC0 1.0'),
  },
  {
    modelSlug: 'bz4x',
    title: 'Toyota bZ4X: versiones eléctricas, batería y autonomía | Kilómetro Claro',
    description: 'Consulta las versiones eléctricas del Toyota bZ4X, su potencia, par publicado, batería y autonomía WLTP.',
    intro: 'El bZ4X es el SUV eléctrico de batería de Toyota. Su gama española combina configuraciones de tracción delantera y total AWD-i, con diferencias de potencia, autonomía y consumo que conviene analizar junto con el uso previsto.',
    powertrainSummary: 'La gama anunciada por Toyota incluye versiones de hasta 343 CV y batería de tracción de 73 kWh. La ficha española y el catálogo publican 268,6 Nm de par máximo; Toyota no presenta en esos documentos un régimen de rpm equivalente al de un motor térmico.',
    usageNote: 'La autonomía útil puede alejarse de la cifra WLTP si se circula deprisa, con frío, carga elevada o desnivel. Para comparar costes, añade también la tarifa de carga y la proporción de recargas rápidas que prevés hacer.',
    versions: [
      { name: 'Advance · tracción delantera', power: '224 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '268,6 Nm', torqueScope: 'Par publicado por Toyota', torqueRpm: 'No aplica / no publicado' },
      { name: 'Spirit · AWD-i', power: 'Hasta 343 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: 'No desglosado para esta versión en el catálogo consultado', torqueScope: 'El catálogo publica 268,6 Nm para la gama', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV eléctrico' }, { label: 'Plazas', value: '5' }, { label: 'Batería', value: '73 kWh' }, { label: 'Tracción', value: 'Delantera o total AWD-i' }],
    figures: [{ label: 'Autonomía máxima homologada', value: 'Hasta 569 km WLTP, según versión' }],
    specNote: 'El catálogo consultado publica una cifra de par máximo de 268,6 Nm para el modelo, pero no separa claramente el par por configuración en la tabla resumida. La página evita atribuir ese valor a la versión AWD-i sin desglose.',
    officialUrl: byModel('bz4x'),
    technicalUrl: `${byModel('bz4x')}/specifications`,
    sources: [source('Catálogo Toyota bZ4X', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/bz4x/Catalogo-Toyota-bZ4X.pdf`), source('Especificaciones del Toyota bZ4X', `${byModel('bz4x')}/specifications`)],
    image: photo('toyota-bz4x.jpg', 'Toyota bZ4X de tracción total fotografiado en exterior.', '2025_Toyota_bZ4X_Z_4WD.jpg', 'TTTNIS', 'TTTNIS', 'CC0 1.0'),
  },
  {
    modelSlug: 'mirai',
    title: 'Toyota Mirai: coche de hidrógeno, potencia y consumo | Kilómetro Claro',
    description: 'Cómo funciona el Toyota Mirai de pila de combustible y cuáles son sus datos publicados de potencia, par y consumo de hidrógeno.',
    intro: 'El Toyota Mirai es una berlina eléctrica que genera electricidad a bordo mediante una pila de combustible alimentada con hidrógeno. No es un híbrido de gasolina ni un eléctrico que se conecte para cargar su batería de tracción.',
    powertrainSummary: 'La pila de combustible produce electricidad para alimentar un motor síncrono eléctrico de imanes permanentes. Toyota España publica 182 CV y 300 Nm; no hay cilindrada de combustión ni régimen de giro del par que comparar con un motor térmico.',
    usageNote: 'El dato práctico decisivo en España es el acceso a estaciones que suministren hidrógeno compatible, además del coste del combustible. La disponibilidad de repostaje no es equivalente a la de gasolina, diésel o recarga eléctrica y debe comprobarse para cada ruta.',
    versions: [{ name: 'Pila de combustible 180 FCV', power: '182 CV', displacement: 'No aplica: pila de combustible y motor eléctrico', maxTorque: '300 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado' }],
    facts: [{ label: 'Carrocería', value: 'Berlina de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Depósitos de hidrógeno', value: '5,6 kg' }, { label: 'Consumo WLTP', value: '0,81 kg/100 km' }],
    figures: [{ label: 'Autonomía anunciada', value: 'Hasta 650 km, según versión y condiciones' }, { label: 'CO₂ en uso homologado', value: '0 g/km' }],
    officialUrl: byModel('mirai'),
    technicalUrl: `${byModel('mirai')}/specifications`,
    sources: [source('Especificaciones del Toyota Mirai', `${byModel('mirai')}/specifications`), source('Gama y tecnología del Mirai', `${byModel('mirai')}.html`)],
    image: photo('toyota-mirai.jpg', 'Toyota Mirai de pila de combustible estacionado en un parque.', 'Toyota_H2_Mirai_in_芝公園4丁目.jpg', 'Syced', 'Syced', 'CC0 1.0'),
  },
  {
    modelSlug: 'land-cruiser-250',
    title: 'Toyota Land Cruiser 250: motor diésel 2.8 y par | Kilómetro Claro',
    description: 'Ficha del Toyota Land Cruiser 250: motor 2.8 diésel con sistema de 48 V, cilindrada, par máximo y régimen.',
    intro: 'El Land Cruiser 250 es un todoterreno de chasis y enfoque aventurero dentro de la gama Toyota. En Europa Occidental la documentación oficial describe un motor turbodiésel 2.8, combinado en la oferta actual con un sistema de 48 V.',
    powertrainSummary: 'La unidad térmica de 2.755 cm³ desarrolla 204 CV y 500 Nm entre 1.600 y 2.800 rpm. La asistencia de 48 V ayuda a la respuesta y a la recuperación de energía, pero Toyota no publica aquí un par eléctrico independiente que deba sumarse a esos 500 Nm.',
    usageNote: 'Su tamaño, masa, tracción y orientación todoterreno lo destinan a necesidades distintas de las de un SUV urbano. La cifra de consumo real dependerá mucho del uso, los neumáticos, la carga y la conducción fuera del asfalto.',
    versions: [{ name: '2.8 D-4D Hybrid 48V', power: '204 CV', displacement: '2.755 cm³', maxTorque: '500 Nm', torqueScope: 'Motor turbodiésel', torqueRpm: '1.600–2.800 rpm', note: 'El sistema de 48 V no se desglosa como una segunda cifra de par.' }],
    facts: [{ label: 'Carrocería', value: 'Todoterreno' }, { label: 'Motor', value: '2.8 turbodiésel con asistencia de 48 V' }, { label: 'Transmisión', value: 'Automática de 8 velocidades' }, { label: 'Remolque con freno', value: 'Hasta 3.500 kg, según Toyota' }],
    officialUrl: byModel('land-cruiser'),
    technicalUrl: `${byModel('land-cruiser')}/caracteristicas`,
    sources: [source('Información técnica Toyota Europa sobre el Land Cruiser', 'https://prensa.toyota.es/el-nuevo-toyota-land-cruiser-un-icono-moderno-y-fiel-a-sus-raices/'), source('Catálogo Toyota Land Cruiser', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/land-cruiser/Toyota_Land_Cruiser_MY27.pdf`)],
    image: photo('toyota-land-cruiser-250.jpg', 'Toyota Land Cruiser de la generación 250 fotografiado desde atrás.', '2025_Toyota_Land_Cruiser_Prado_2.4_Turbo_in_White_Pearl_Mica,_rear_left.jpg', 'Ethan Llamas', 'Ethan_Llamas', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'hilux',
    title: 'Toyota Hilux Hybrid 48V y BEV: motores y precio | Kilómetro Claro',
    description: 'Datos de las versiones Toyota Hilux Hybrid 48V y eléctrica BEV, con potencia, cilindrada y par publicado por Toyota.',
    intro: 'La Hilux es la pick-up de Toyota y la gama española anunciada en octubre de 2026 combina una mecánica turbodiésel con sistema de 48 V y una versión eléctrica de batería. Toyota informa de disponibilidad en su red para la Hybrid 48V y publica precios de acceso para particulares en ambas.',
    powertrainSummary: 'La Hybrid 48V combina un motor turbodiésel de 2,8 litros y 204 CV con asistencia eléctrica de 48 V; Toyota publica 500 Nm para el sistema térmico. La BEV usa una batería de 59,2 kWh y dos eAxles con 144 kW (196 CV) de potencia combinada. El comunicado no detalla el par de la eléctrica.',
    usageNote: 'La versión diésel y la eléctrica responden a escenarios distintos. Para trabajo con remolque, largas distancias o uso fuera de carretera, revisa capacidad, autonomía bajo carga, puntos de recarga y disponibilidad efectiva de la variante eléctrica antes de decidir.',
    versions: [
      { name: '2.8 D-4D Hybrid 48V', power: '204 CV', displacement: '2,8 l (cilindrada exacta no indicada en el comunicado MY27)', maxTorque: '500 Nm', torqueScope: 'Motor turbodiésel', torqueRpm: 'No publicado para la nueva generación en la ficha consultada' },
      { name: 'BEV AWD · batería 59,2 kWh', power: '196 CV (144 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: 'No publicado en la información Toyota consultada', torqueScope: 'Sistema eléctrico', torqueRpm: 'No aplica / no publicado', note: 'Dos eAxles y tracción total; no se infiere el par a partir de la potencia.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Pick-up' }, { label: 'Alternativas', value: 'MHEV diésel de 48 V y eléctrica BEV' }, { label: 'Batería BEV', value: '59,2 kWh' }, { label: 'Uso previsto', value: 'Trabajo, carga y conducción fuera de carretera' }],
    specNote: 'La información de Hilux corresponde a la nueva generación anunciada en octubre de 2026. Toyota ofrece cifras de par y precios de acceso para particulares para la Hybrid 48V y el precio de acceso de la BEV, pero no publica el par de sus eAxles en el comunicado consultado.',
    officialUrl: byModel('hilux'),
    technicalUrl: 'https://prensa.toyota.es/nueva-toyota-hilux-mas-tecnologia-confort-y-dos-opciones-electrificadas-mild-hybrid-48v-y-100-electrica/',
    sources: [source('Comunicado Toyota España: Hilux Hybrid 48V y eléctrica', 'https://prensa.toyota.es/nueva-toyota-hilux-mas-tecnologia-confort-y-dos-opciones-electrificadas-mild-hybrid-48v-y-100-electrica/'), source('Gama Toyota Hilux para empresas', 'https://www.toyota.es/empresas/coches/hilux'), source('Toyota España: par y régimen de la generación anterior (no aplicado a la tabla de la nueva generación)', 'https://prensa.toyota.es/el-nuevo-hilux-hybrid-48v-refuerza-un-icono-invencible/')],
    image: photo('toyota-hilux.jpg', 'Toyota Hilux de doble cabina fotografiada en exterior.', 'Toyota_Hilux_4x2_G_2025.jpg', 'Captainmorlypogi1959', 'Captainmorlypogi1959', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'proace-city-verso',
    title: 'Toyota Proace City Verso: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Motorizaciones del Toyota Proace City Verso para pasajeros: diésel 1.5, versión eléctrica, cilindrada y par.',
    intro: 'Proace City Verso es la furgoneta compacta de pasajeros de Toyota, con configuraciones pensadas para combinar transporte familiar y necesidades profesionales. La oferta nacional incluye motores diésel y una variante eléctrica, con carrocerías y plazas que dependen del acabado.',
    powertrainSummary: 'La tarifa Toyota para particulares recoge el 1.5D de 130 CV en la gama Family y una versión eléctrica de 136 CV. La motorización diésel de 100 CV que aparece en algunas configuraciones Combi corresponde al canal de transporte de personas y mercancías, no al acabado Family para particulares incluido aquí.',
    usageNote: 'La versión Verso prioriza pasajeros y modularidad frente a la zona de carga cerrada de Proace City. Comprueba número de plazas y longitud de carrocería en la versión concreta, y compara el coste eléctrico solo si tienes acceso regular a recarga.',
    versions: [
      { name: '1.5D 130 CV Family', power: '130 CV (96 kW)', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'Electric 50 kWh Family', power: '136 CV (100 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '270 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'Furgoneta de pasajeros compacta' }, { label: 'Plazas', value: 'Hasta 7, según carrocería y acabado' }, { label: 'Eléctrica', value: 'Batería de 50 kWh' }, { label: 'Longitudes', value: 'Media o larga, según versión' }],
    officialUrl: byModel('proace-city-verso'),
    technicalUrl: `${byModel('proace-city-verso')}/caracteristicas`,
    sources: [source('Toyota Proace City Verso en España', byModel('proace-city-verso')), source('Catálogo técnico Proace City y versiones eléctricas', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/Proace_City_NORMAL_y_EV-2023.pdf`)],
    image: photo('toyota-proace-city-verso.jpg', 'Toyota Proace City Verso Electric expuesta en una feria del automóvil.', '2024_Toyota_ProAce_City_Electric_Automesse_Ludwigsburg_2024_IMG_1401.jpg', 'Alexander-93', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'proace-verso',
    title: 'Toyota Proace Verso: motores diésel y eléctricos | Kilómetro Claro',
    description: 'Compara los motores diésel 2.2D de 150 y 180 CV y la versión eléctrica de la Toyota Proace Verso para España.',
    intro: 'Proace Verso es la furgoneta de pasajeros de mayor tamaño de la familia Proace. Se configura en distintas longitudes y distribuciones de asientos, con mecánicas diésel o eléctricas para usos familiares, lanzadera y profesionales.',
    powertrainSummary: 'La gama española consultada ofrece motores diésel 2.2D de 150 o 180 CV, junto con una versión eléctrica de 100 kW (136 CV) y batería de 75 kWh. Toyota no publica en la página española consultada un desglose de par y régimen para cada una de estas motorizaciones.',
    usageNote: 'En esta carrocería, longitud, número de plazas y distribución interior pueden cambiar de forma importante la utilidad del vehículo. La variante eléctrica resulta más fácil de valorar cuando se conoce el recorrido diario y se dispone de un punto de carga en destino o base.',
    versions: [
      { name: '2.2D 150 CV', power: '150 CV (110 kW)', displacement: '2,2 l', maxTorque: '', torqueScope: 'Motor diésel', torqueRpm: 'No publicado en la ficha española consultada' },
      { name: '2.2D 180 CV', power: '180 CV (132 kW)', displacement: '2,2 l', maxTorque: '', torqueScope: 'Motor diésel', torqueRpm: 'No publicado en la ficha española consultada' },
      { name: 'Electric 75 kWh', power: '136 CV (100 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'Furgoneta de pasajeros' }, { label: 'Capacidad', value: 'Hasta 9 plazas, según configuración' }, { label: 'Eléctrica', value: 'Batería de 75 kWh' }, { label: 'Longitudes', value: 'Media o larga, según versión' }],
    specNote: 'La página actual de Toyota España identifica los diésel 2.2D de 150 y 180 CV y la versión eléctrica de 75 kWh. No reproducimos los datos del catálogo MY25 de 2.0D ni cifras de par de generaciones anteriores como si fueran de esta gama.',
    officialUrl: byModel('proace-verso'),
    technicalUrl: `${byModel('proace-verso')}/caracteristicas`,
    sources: [source('Toyota Proace Verso MY25: catálogo técnico', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/TOYOTA_PROACE_VERSO_MY25.pdf`), source('Gama Toyota Proace Verso España', byModel('proace-verso'))],
    image: photo('toyota-proace-verso.jpg', 'Toyota Proace Verso estacionado en una calle.', 'Toyota_ProAce_Verso_141810.jpg', 'Trop86', 'Trop86', 'CC0 1.0'),
  },
  {
    modelSlug: 'proace-city',
    title: 'Toyota Proace City: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Ficha de Toyota Proace City Van y Combi: motores diésel 1.5, versión eléctrica de 136 CV y pares máximos.',
    intro: 'Proace City es la furgoneta compacta de Toyota para transporte de mercancías y usos mixtos. La gama incluye carrocerías Van y Combi, con distintas longitudes, capacidad de carga y motorizaciones.',
    powertrainSummary: 'La documentación Toyota consultada muestra motores diésel 1.5 de 100 y 130 CV, además de una variante eléctrica de 136 CV y batería de 50 kWh. El motor diésel 100 CV entrega 250 Nm a 1.750 rpm y el 130 CV, 300 Nm a 1.750 rpm; el motor eléctrico alcanza 270 Nm.',
    usageNote: 'La carga útil efectiva cambia con la carrocería, los asientos y el equipamiento. Antes de elegir entre diésel y eléctrico, calcula el peso habitual transportado y el recorrido diario; autonomía homologada y autonomía con carga no son equivalentes.',
    versions: [
      { name: '1.5D 100 CV', power: '100 CV', displacement: '1.499 cm³', maxTorque: '250 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: '1.5D 130 CV', power: '130 CV', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'Electric 50 kWh', power: '136 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '270 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocerías', value: 'Van y Combi' }, { label: 'Motor eléctrico', value: '136 CV y batería de 50 kWh' }, { label: 'Motor diésel', value: '1.5 litros, 100 o 130 CV' }, { label: 'Longitudes', value: 'Media o larga, según configuración' }],
    officialUrl: byModel('proace-city'),
    technicalUrl: `${toyota}/empresas/coches/proace-city/caracteristicas`,
    sources: [source('Catálogo técnico Toyota Proace City', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/Proace_City_NORMAL_y_EV-2023.pdf`), source('Gama comercial Toyota Proace City', `${toyota}/empresas/coches/proace-city/caracteristicas`)],
    image: photo('toyota-proace-city.jpg', 'Toyota Proace City comercial en una exposición del automóvil.', '2024_Toyota_ProAce_City_Automesse_Ludwigsburg_2024_IMG_1486.jpg', 'Alexander-93', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'proace',
    title: 'Toyota Proace: versiones diésel y eléctricas | Kilómetro Claro',
    description: 'Motores Toyota Proace furgón: opciones diésel 1.5 y 2.0, versión eléctrica, potencia y par técnico publicado.',
    intro: 'Proace es la furgoneta mediana de Toyota para actividad profesional. La carrocería cerrada puede configurarse con distintas longitudes y motores, por lo que el volumen, la carga útil y la elección de energía deben revisarse según la versión exacta.',
    powertrainSummary: 'La ficha Toyota consultada incluye diésel 1.5 de 120 CV, diésel 2.0 de 145 y 180 CV, y versiones eléctricas con batería de 50 o 75 kWh. La tabla técnica publica 300, 340 y 400 Nm para los motores diésel y 260 Nm para el eléctrico; el régimen no aparece para todas las filas.',
    usageNote: 'En una furgoneta de trabajo, la carga y la velocidad de crucero suelen influir mucho en consumo y autonomía. Compara configuraciones con la carga real, el tipo de recorrido y las restricciones de acceso habituales para tu actividad.',
    versions: [
      { name: '1.5D 120 CV', power: '120 CV', displacement: '1.499 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: 'No publicado en la tabla consultada' },
      { name: '2.0D 145 CV', power: '145 CV', displacement: '1.997 cm³', maxTorque: '340 Nm', torqueScope: 'Motor diésel', torqueRpm: 'No publicado en la tabla consultada' },
      { name: '2.0D 180 CV', power: '180 CV', displacement: '1.997 cm³', maxTorque: '400 Nm', torqueScope: 'Motor diésel', torqueRpm: 'No publicado en la tabla consultada' },
      { name: 'Electric 50 o 75 kWh', power: '136 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '260 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocería', value: 'Furgoneta mediana' }, { label: 'Diésel', value: '1.5 y 2.0 litros' }, { label: 'Eléctrica', value: 'Batería de 50 o 75 kWh' }, { label: 'Motor eléctrico', value: '136 CV y 260 Nm' }],
    specNote: 'La ficha oficial de Toyota consultada contiene una errata de extracción en una cilindrada del diésel 2.0; se muestra 1.997 cm³ de acuerdo con el propio motor 2.0 y sus medidas publicadas. Las cifras de rpm que no aparecen no se han completado.',
    officialUrl: `${toyota}/empresas/coches/proace`,
    technicalUrl: `${toyota}/empresas/coches/proace/caracteristicas`,
    sources: [source('Gama Toyota Proace para empresas', `${toyota}/empresas/coches/proace/caracteristicas`), source('Ficha técnica Toyota Proace Electric/diésel', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/Proace_ELECTRIC_Web.pdf`)],
    image: photo('toyota-proace.jpg', 'Furgoneta Toyota Proace fotografiada en una calle europea.', 'Cs%C3%A1nyi-Stiftung_Toyota_ProAce,_Felszabadul%C3%A1s_Stra%C3%9Fe,_2024_Moh%C3%A1cs.jpg', 'Globetrotter19', 'Globetrotter19', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'proace-max',
    title: 'Toyota Proace Max: motores diésel y eléctrico | Kilómetro Claro',
    description: 'Datos de Toyota Proace Max 2.2 diésel y eléctrica: potencia, cilindrada, par y capacidad de batería.',
    intro: 'Proace Max es el furgón de mayor tamaño de Toyota, disponible en carrocerías de distintas longitudes y alturas, además de variantes chasis cabina. La gama incluye motores diésel y una alternativa eléctrica de batería de gran capacidad.',
    powertrainSummary: 'El catálogo Toyota MY25 recoge motores diésel 2.2 de 120, 140 y 180 CV, con pares de 320, 350 y 450 Nm respectivamente. La versión eléctrica de 110 kWh anuncia 272 CV y 410 Nm. El catálogo presenta una cifra de cilindrada inconsistente para el diésel; las fichas de vehículos Toyota matriculados identifican el 2.2 como 2.184 cm³.',
    usageNote: 'En este segmento, volumen de carga, masa máxima autorizada y acceso a zonas urbanas pueden ser tan decisivos como la potencia. Para la variante eléctrica, contrasta autonomía con la carga y la carrocería elegidas; el dato homologado cambia según configuración.',
    versions: [
      { name: '2.2 Diesel 120 CV', power: '120 CV', displacement: '2.184 cm³', maxTorque: '320 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.400–2.500 rpm' },
      { name: '2.2 Diesel 140 CV', power: '140 CV', displacement: '2.184 cm³', maxTorque: '350 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.400–2.500 rpm' },
      { name: '2.2 Diesel 180 CV', power: '180 CV', displacement: '2.184 cm³', maxTorque: '450 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500–1.750 rpm' },
      { name: 'Electric 110 kWh', power: '272 CV', displacement: 'No aplica: 100 % eléctrico', maxTorque: '410 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica / no publicado' },
    ],
    facts: [{ label: 'Carrocerías', value: 'Van y chasis cabina' }, { label: 'Diésel', value: '2.2 litros, 120–180 CV' }, { label: 'Eléctrica', value: 'Batería de 110 kWh' }, { label: 'Volumen de carga', value: 'Hasta 17 m³, según carrocería' }],
    specNote: 'El PDF técnico Toyota MY25 etiqueta el motor como 2.2 l, pero su tabla muestra 1.499 cm³. Para no propagar esa inconsistencia, la cilindrada indicada procede de fichas de vehículos Toyota Proace Max de 2.2D, que señalan 2.184 cm³. Las versiones y pares proceden del catálogo Toyota.',
    officialUrl: `${toyota}/empresas/coches/proace-max`,
    technicalUrl: `${toyota}/empresas/coches/proace-max/caracteristicas`,
    sources: [source('Catálogo técnico Toyota Proace Max MY25', `${toyota}/content/dam/toyota/nmsc/spain/cross-model/new-cars/catalogos-precios/pdf/proace-max/PROACE_MAX_MY25.pdf`), source('Ficha Proace Max Toyota España: ejemplo de motor 2.184 cm³', `${toyota}/coches-segunda-mano/ficha.toyota-proace-max-2025-van-l3h2-3500-manual-diesel-00c2ed5a-dd7e-4f8d-a9b4-7c8d949592fc`), source('Gama comercial Toyota', `${toyota}/empresas/coches/proace-max/caracteristicas`)],
    image: photo('toyota-proace-max.jpg', 'Toyota Proace Max Electric, furgón eléctrico fotografiado de frente.', '2024_Toyota_Proace_Max_Electric_-_front.jpg', 'Michge', 'Michge', 'CC0 1.0'),
  },
];

const toyotaPriceTariff = 'https://prensa.toyota.es/download/fd06c805-736e-472d-96ba-cb5a96c2c29f/promocionesydescuentosseptiembre2026.pdf';
const toyotaCorollaRangeSource = 'https://prensa.toyota.es/la-gama-toyota-corolla-refuerza-su-oferta-para-celebrar-su-60-aniversario-con-una-edicion-especial-el-regreso-de-style-y-una-mayor-presencia-de-gr-sport/';
const toyotaHiluxRangeSource = 'https://prensa.toyota.es/nueva-toyota-hilux-mas-tecnologia-confort-y-dos-opciones-electrificadas-mild-hybrid-48v-y-100-electrica/';
const toyotaProaceVersoSource = `${toyota}/coches/proace-verso`;
const toyotaPvpType = 'PVP base de tarifa, antes de descuentos';
const toyotaCampaignType = 'Precio desde publicado; incluye promoción Toyota';

type ToyotaVersionCommercial = { type: string; price?: string; priceType?: string };
type ToyotaCommercialDetails = {
  basePrice?: string;
  basePriceLabel: string;
  priceNote: string;
  source: { label: string; url: string };
  additionalSources?: Array<{ label: string; url: string }>;
  versions: ToyotaVersionCommercial[];
};

const toyotaCommercialDetails: Record<string, ToyotaCommercialDetails> = {
  'aygo-x-cross': {
    basePrice: '23.900 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'La tarifa oficial de septiembre separa el PVP de los descuentos; sus promociones vencieron el 30/09/2026. Este dato es el último PVP base de Toyota que hemos podido comprobar, no una oferta vigente ni un precio vinculante. Consulta la fuente antes de comprar.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [{ type: 'Híbrido no enchufable · HEV gasolina', price: '23.900 €', priceType: toyotaPvpType }],
  },
  yaris: {
    basePrice: '24.550 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'Importes PVP de la tarifa Toyota de septiembre de 2026, antes de descuentos. Las promociones asociadas caducaron el 30/09/2026; comprueba si Toyota ha publicado una tarifa posterior.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: '24.550 €', priceType: toyotaPvpType },
      { type: 'Híbrido no enchufable · HEV gasolina', price: '28.250 €', priceType: toyotaPvpType },
    ],
  },
  'gr-yaris': {
    basePrice: '51.000 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota para el GR Yaris RZ manual, antes del descuento de campaña que figuraba en septiembre de 2026 y venció el 30/09/2026. Los paquetes y la transmisión pueden cambiar el importe.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [{ type: 'Gasolina', price: 'Desde 51.000 € (RZ 6MT)', priceType: toyotaPvpType }],
  },
  'yaris-cross': {
    basePrice: '31.400 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'La tarifa de septiembre de 2026 corresponde al Yaris Cross MY27 Hybrid 130 y separa el PVP del descuento temporal, cuya vigencia acabó el 30/09/2026. La opción AWD-i y los acabados superiores elevan el precio.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [{ type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 31.400 € (Active)', priceType: toyotaPvpType }],
  },
  corolla: {
    basePrice: '25.450 €', basePriceLabel: 'Precio desde oficial publicado por Toyota',
    priceNote: 'Toyota anunció el precio de acceso Hybrid 140 para la gama Corolla 2027 en septiembre de 2026; el comunicado indica que incluye promoción y aportaciones de Toyota y del concesionario. La web oficial del modelo publica además el Hybrid 200 desde 30.150 €, consultado el 5 de noviembre de 2026.',
    source: { label: 'Toyota España: precios y gama Corolla 2027', url: toyotaCorollaRangeSource },
    additionalSources: [{ label: 'Toyota España: gama y precio del Corolla 5 puertas', url: `${toyota}/coches/corolla` }],
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 25.450 € (Hybrid 140)', priceType: toyotaCampaignType },
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 30.150 € (Hybrid 200 e-CVT)', priceType: 'Precio publicado en la web oficial de Toyota España; consulta 5/11/2026.' },
    ],
  },
  'corolla-sedan': {
    basePrice: '30.050 €', basePriceLabel: 'Precio desde oficial publicado por Toyota',
    priceNote: 'Toyota anunció la gama Corolla Sedan 2027 desde 30.050 € en septiembre de 2026. El comunicado vincula el importe a promociones y aportaciones; no lo presentamos como PVP sin descuentos.',
    source: { label: 'Toyota España: precios y gama Corolla 2027', url: toyotaCorollaRangeSource },
    versions: [{ type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 30.050 € (Hybrid 140)', priceType: toyotaCampaignType }],
  },
  'corolla-touring-sports': {
    basePrice: '27.450 €', basePriceLabel: 'Precio desde oficial publicado por Toyota',
    priceNote: 'Toyota anunció el precio de acceso Hybrid 140 para la gama Corolla Touring Sports 2027 en septiembre de 2026; el comunicado indica que incluye promociones y aportaciones. La web oficial del modelo publica además el Hybrid 200 desde 31.250 €, consultado el 5 de noviembre de 2026.',
    source: { label: 'Toyota España: precios y gama Corolla 2027', url: toyotaCorollaRangeSource },
    additionalSources: [{ label: 'Toyota España: gama y precio del Corolla Touring Sports', url: `${toyota}/coches/corolla-touring-sports` }],
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 27.450 € (Hybrid 140)', priceType: toyotaCampaignType },
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 31.250 € (Hybrid 200 e-CVT)', priceType: 'Precio publicado en la web oficial de Toyota España; consulta 5/11/2026.' },
    ],
  },
  'corolla-cross': {
    basePrice: '41.000 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota de septiembre de 2026, anterior al descuento temporal que venció el 30/09/2026. La versión AWD-i y los acabados superiores tienen precios distintos; consulta la tarifa completa.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 41.000 € (Hybrid 140)', priceType: toyotaPvpType },
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 42.000 € (Hybrid 200); AWD-i desde 45.000 €', priceType: toyotaPvpType },
    ],
  },
  'c-hr': {
    basePrice: '35.750 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP base de la tarifa Toyota de septiembre de 2026, antes del descuento de campaña que venció el 30/09/2026. Los precios indicados son los acabados de acceso publicados para cada motorización.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 35.750 € (Hybrid 140)', priceType: toyotaPvpType },
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 44.500 € (Hybrid 200 AWD-i)', priceType: toyotaPvpType },
      { type: 'Híbrido enchufable · gasolina', price: 'Desde 38.750 € (Plug-in Hybrid 220)', priceType: toyotaPvpType },
    ],
  },
  'c-hr-plus': {
    basePrice: '40.000 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota de septiembre de 2026, antes del descuento de campaña que venció el 30/09/2026. Las cifras corresponden a las versiones de acceso Advance y Spirit AWD-i.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Eléctrico', price: 'Desde 40.000 € (Electric 230)', priceType: toyotaPvpType },
      { type: 'Eléctrico', price: 'Desde 47.500 € (Electric 350 AWD-i)', priceType: toyotaPvpType },
    ],
  },
  rav4: {
    basePrice: '47.250 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota de septiembre de 2026, antes de descuentos temporales que vencieron el 30/09/2026. AWD y acabados superiores modifican el precio de las versiones enchufables.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Híbrido no enchufable · HEV gasolina', price: 'Desde 47.250 € (Hybrid 200)', priceType: toyotaPvpType },
      { type: 'Híbrido enchufable · gasolina', price: 'Desde 50.750 € (Plug-in Hybrid 300)', priceType: toyotaPvpType },
    ],
  },
  bz4x: {
    basePrice: '43.000 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota de septiembre de 2026, antes de descuentos temporales que vencieron el 30/09/2026. Se refiere al acabado Advance de 73 kWh; el Spirit AWD-i figura con un PVP superior.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Eléctrico', price: 'Desde 43.000 € (Advance 73 kWh)', priceType: toyotaPvpType },
      { type: 'Eléctrico', price: 'Desde 51.000 € (Spirit 73 kWh)', priceType: toyotaPvpType },
    ],
  },
  mirai: {
    basePrice: '74.200 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP base de la tarifa Toyota de septiembre de 2026. La tarifa recogía un descuento temporal de 4.000 €, cuya vigencia terminó el 30/09/2026; no se muestra ese precio final como si fuera permanente.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [{ type: 'Hidrógeno · pila de combustible', price: 'Desde 74.200 € (Vision)', priceType: toyotaPvpType }],
  },
  'land-cruiser-250': {
    basePrice: '71.500 €', basePriceLabel: 'PVP base de tarifa (septiembre 2026)',
    priceNote: 'PVP de acceso GX de la tarifa Toyota de septiembre de 2026, antes del descuento de campaña que venció el 30/09/2026. La tarifa distingue carrocería de cinco y siete plazas y otros acabados.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [{ type: 'Híbrido no enchufable · MHEV diésel (48 V)', price: 'Desde 71.500 € (GX 5 plazas)', priceType: toyotaPvpType }],
  },
  hilux: {
    basePrice: '45.000 €', basePriceLabel: 'Precio desde para particulares publicado por Toyota (octubre 2026)',
    priceNote: 'Toyota España anunció en octubre de 2026 estos precios de acceso para particulares: Hybrid 48V desde 45.000 € y BEV desde 50.000 €, ambos en GX. La fuente no los presenta como una tarifa sin campañas; confirma la oferta aplicable al solicitar presupuesto.',
    source: { label: 'Toyota España: nueva Hilux Hybrid 48V y BEV, disponibilidad y precios', url: toyotaHiluxRangeSource },
    versions: [
      { type: 'Híbrido no enchufable · MHEV diésel (48 V)', price: 'Desde 45.000 € (GX)', priceType: 'Precio desde para particulares publicado por Toyota' },
      { type: 'Eléctrico', price: 'Desde 50.000 € (GX)', priceType: 'Precio desde para particulares publicado por Toyota' },
    ],
  },
  'proace-city-verso': {
    basePrice: '37.750 €', basePriceLabel: 'PVP base de tarifa particular (septiembre 2026)',
    priceNote: 'PVP de la tarifa Toyota para particulares de septiembre de 2026, antes de los descuentos temporales que caducaron el 30/09/2026. En la versión Family, el acceso diésel corresponde al 1.5D de 130 CV; el eléctrico de acceso es el Family Active.',
    source: { label: 'Tarifa oficial Toyota: precios y promociones de septiembre de 2026', url: toyotaPriceTariff },
    versions: [
      { type: 'Diésel', price: 'Desde 37.750 € (1.5D 130 CV Family)', priceType: toyotaPvpType },
      { type: 'Eléctrico', price: 'Desde 43.500 € (Family Active 50 kWh)', priceType: toyotaPvpType },
    ],
  },
  'proace-verso': {
    basePrice: '41.500 €', basePriceLabel: 'Precio anunciado para Proace Verso diésel (campaña hasta noviembre 2026)',
    priceNote: 'La web oficial consultada anuncia 41.500 € para la versión diésel 2.2D 150 CV y 45.500 € para la eléctrica 75 kWh; ambas páginas indican promoción y aportaciones incluidas, vigentes hasta el 30/11/2026. No son precios de tarifa sin descuentos. Toyota publicó 49.900 € de PVP para una Proace Verso diésel 2.2D 180 CV en su tarifa de septiembre; no se encontró en esa tarifa un PVP base verificable para la eléctrica.',
    source: { label: 'Toyota España: gama, motorizaciones y precios publicados de Proace Verso', url: toyotaProaceVersoSource },
    versions: [
      { type: 'Diésel', price: '41.500 € anunciados (2.2D 150 CV; campaña incluida)', priceType: 'Precio oficial con campaña hasta 30/11/2026' },
      { type: 'Diésel', price: '49.900 € (2.2D 180 CV; PVP de tarifa sep. 2026)', priceType: toyotaPvpType },
      { type: 'Eléctrico', price: '45.500 € anunciados (75 kWh; campaña incluida)', priceType: 'Precio oficial con campaña hasta 30/11/2026' },
    ],
  },
};

function addToyotaCommercialDetails(model: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>): ModelPageData {
  const commercial = toyotaCommercialDetails[model.modelSlug];
  if (!commercial) throw new Error(`Faltan precios y grupos normalizados para Toyota ${model.modelSlug}.`);
  if (commercial.versions.length !== model.versions.length) {
    throw new Error(`El número de versiones de precio no coincide con los motores de Toyota ${model.modelSlug}.`);
  }
  const { versions: commercialVersions, source: priceSource, additionalSources = [], ...priceDetails } = commercial;

  return {
    ...model,
    ...priceDetails,
    brandSlug: 'toyota',
    reviewedAt: '4 de noviembre de 2026',
    sources: [...model.sources, source(priceSource.label, priceSource.url), ...additionalSources.map(({ label, url }) => source(label, url))],
    versions: model.versions.map((version, index) => ({
      ...formatMotorTableVersion({ ...version, type: commercialVersions[index].type }),
      price: commercialVersions[index].price ?? 'Precio no publicado',
      priceType: commercialVersions[index].priceType ?? 'Precio no publicado por motorización',
    })),
  };
}

const renault = 'https://www.renault.es';
const renaultModel = (path: string) => `${renault}/${path}`;
const renaultNovemberPriceSheet = 'https://prensa.renault.es/wp-content/uploads/2026/11/30478cfff656a0eaef053b266a4e9679.xlsx';
const renaultModels: Omit<ModelPageData, 'brandSlug' | 'reviewedAt'>[] = [
  {
    modelSlug: 'twingo-e-tech',
    basePrice: '19.630 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial noviembre de 2026',
    priceNote: 'PVP de acceso publicado en la tarifa oficial de Renault de noviembre de 2026, antes de campañas, financiación o ayudas. El importe corresponde al acabado evolution; confirma el precio final y los gastos de matriculación con Renault.',
    title: 'Renault Twingo E-Tech eléctrico: batería, autonomía y motor',
    description: 'Consulta la ficha del Renault Twingo E-Tech: motor eléctrico de 80 CV, batería de 27,5 kWh, par y autonomía homologada.',
    intro: 'El Twingo E-Tech recupera la idea de un coche urbano muy compacto con propulsión eléctrica. Renault España publica una batería de 27,5 kWh y una autonomía WLTP que varía según configuración; es una propuesta pensada para desplazamientos cotidianos, no una cifra que garantice el mismo alcance en cualquier uso.',
    powertrainSummary: 'La gama consultada se articula en torno a una única motorización eléctrica de 80 CV. En un coche eléctrico el par máximo está disponible desde muy bajas revoluciones, pero Renault no ofrece en la ficha española un régimen comparable al de un motor térmico.',
    usageNote: 'Su tamaño y batería reducida pueden encajar con recorridos urbanos habituales y carga frecuente. Antes de valorar viajes largos, comprueba la autonomía de la versión exacta, las posibilidades de carga y el efecto del frío, la velocidad y la climatización.',
    versions: [{ name: 'E-Tech eléctrico 80 · batería de 27,5 kWh', type: 'Eléctrico', power: '80 CV (60 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '175 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No publicado; disponible desde bajas revoluciones', price: 'Desde 19.630 € (evolution)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' }],
    facts: [{ label: 'Carrocería', value: 'Urbano de 5 puertas' }, { label: 'Plazas', value: '4' }, { label: 'Longitud', value: '3.790 mm' }, { label: 'Maletero', value: '360 litros; hasta 1.110 litros con asientos abatidos' }],
    figures: [{ label: 'Autonomía WLTP publicada', value: 'Hasta 263 km, según versión' }, { label: 'Batería', value: '27,5 kWh' }],
    specNote: 'La ficha española presenta un rango WLTP de 248 a 263 km según versión. La cifra máxima no debe leerse como autonomía garantizada: neumáticos, temperatura, velocidad y uso de climatización afectan al resultado real.',
    officialUrl: renaultModel('electricos/twingo-e-tech-electrico.html'),
    technicalUrl: renaultModel('electricos/twingo-e-tech-electrico/ficha-tecnica.html'),
    sources: [source('Gama y ficha técnica Renault Twingo E-Tech', renaultModel('electricos/twingo-e-tech-electrico.html')), source('Datos técnicos publicados por Renault España', renaultModel('electricos/twingo-e-tech-electrico/ficha-tecnica.html'))],
    image: photo('renault-twingo-e-tech.jpg', 'Renault Twingo E-Tech eléctrico fotografiado en exterior.', 'Renault_Twingo_E-Tech_121315256.jpg', 'Trop86', 'Trop86', 'CC0 1.0'),
  },
  {
    modelSlug: '5-e-tech',
    basePrice: '28.305 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial noviembre de 2026',
    priceNote: 'PVP de acceso de la tarifa oficial Renault de noviembre de 2026, sin aplicar ofertas, financiación, CAE o ayudas. Corresponde al acabado evolution con batería de 40 kWh; el importe final depende de configuración e impuestos aplicables.',
    title: 'Renault 5 E-Tech eléctrico: versiones, potencia y batería',
    description: 'Ficha del Renault 5 E-Tech: versiones eléctricas, potencia, par, capacidad de batería y autonomía homologada en España.',
    intro: 'El Renault 5 E-Tech convierte un nombre histórico de la marca en un turismo urbano eléctrico actual. La gama ofrece diferentes combinaciones de potencia y batería, por lo que conviene comparar la versión concreta en lugar de tratar autonomía y prestaciones como valores únicos para toda la familia.',
    powertrainSummary: 'La gama de pedidos abierta en España combina una batería urbana de 40 kWh con 120 CV y una batería de autonomía confort de 52 kWh con 150 CV. La versión de 110 CV aparece como disponible próximamente en la información de Renault, por lo que no se cuenta entre las motorizaciones actualmente configurables.',
    usageNote: 'Las baterías de 37 y 40 kWh se orientan a un uso urbano y cotidiano, con hasta 315 km de autonomía WLTP anunciada para la gama urbana; la batería de 52 kWh eleva el máximo a 430 km. Compara el kilometraje, las recargas y la versión concreta: esas autonomías homologadas no son una previsión para cada trayecto.',
    versions: [
      { name: 'E-Tech 120 · batería urbana de 40 kWh', type: 'Eléctrico', power: '120 CV (90 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '225 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 28.305 € (evolution)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' },
      { name: 'E-Tech 150 · batería confort de 52 kWh', type: 'Eléctrico', power: '150 CV (110 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '245 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 31.305 € (evolution)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' },
    ],
    facts: [{ label: 'Carrocería', value: 'Utilitario eléctrico de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Baterías configurables', value: '40 o 52 kWh' }, { label: 'Longitud', value: '3.922 mm' }],
    figures: [{ label: 'Autonomía homologada', value: 'Hasta 315 km con batería urbana o 430 km con batería de autonomía confort' }],
    specNote: 'El comunicado Renault del 1 de octubre de 2026 indica que los pedidos se abren para las versiones de 120 CV/40 kWh y 150 CV/52 kWh; la variante de 110 CV figura como próxima. Las autonomías WLTP dependen de acabado y configuración y no representan el alcance real garantizado.',
    officialUrl: renaultModel('electricos/r5-e-tech-electrico.html'),
    technicalUrl: renaultModel('electricos/r5-e-tech-electrico/ficha-tecnica.html'),
    sources: [source('Renault 5 E-Tech eléctrico en Renault España', renaultModel('electricos/r5-e-tech-electrico.html')), source('Versiones y autonomía publicadas por Renault', renaultModel('electricos/r5-e-tech-electrico/preconfigurador.html')), source('Motores y datos técnicos del Renault 5', renaultModel('electricos/r5-e-tech-electrico/motores.html'))],
    image: photo('renault-5-e-tech.jpg', 'Renault 5 E-Tech eléctrico expuesto en una muestra de automóviles.', 'Renault_5_E-Tech_Electric_DSC_7284.jpg', 'Alexander Migl', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: '4-e-tech',
    basePrice: '30.305 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial noviembre de 2026',
    priceNote: 'PVP de acceso publicado en la tarifa Renault de noviembre de 2026 antes de ofertas, financiación, CAE o ayudas. Corresponde al acabado evolution con batería EV40; el precio cambia con batería, acabado y equipamiento.',
    title: 'Renault 4 E-Tech eléctrico: motores, batería y autonomía',
    description: 'Conoce las versiones EV40 y EV52 del Renault 4 E-Tech, sus potencias, pares, baterías y autonomía WLTP.',
    intro: 'El Renault 4 E-Tech es un crossover eléctrico de cinco plazas que comparte parte de su planteamiento técnico con el Renault 5, aunque adopta una carrocería más larga y práctica. La gama se diferencia principalmente por la potencia y la capacidad de batería.',
    powertrainSummary: 'La documentación de Renault España recoge dos combinaciones: EV40 de 120 CV y EV52 de 150 CV. Ambas utilizan motores eléctricos; sus cifras de par no se acompañan de un régimen en rpm comparable al de las motorizaciones térmicas.',
    usageNote: 'El maletero y la carrocería más versátil pueden resultar útiles para uso familiar, pero la autonomía depende de la batería, las ruedas y las condiciones de marcha. Contrasta la autonomía oficial de la versión elegida con tus recorridos habituales y el acceso a puntos de carga.',
    versions: [
      { name: 'E-Tech 120 · batería EV40 de 40 kWh', type: 'Eléctrico', power: '120 CV (90 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '225 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 30.305 € (evolution)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' },
      { name: 'E-Tech 150 · batería EV52 de 52 kWh', type: 'Eléctrico', power: '150 CV (110 kW)', displacement: 'No aplica: 100 % eléctrico', maxTorque: '245 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 33.305 € (evolution)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' },
    ],
    facts: [{ label: 'Carrocería', value: 'Crossover eléctrico de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.144 mm' }, { label: 'Baterías', value: '40 o 52 kWh' }],
    figures: [{ label: 'Autonomía WLTP', value: 'Hasta 311 km (EV40) o 415 km (EV52), según versión' }],
    specNote: 'Renault publica autonomías máximas distintas para EV40 y EV52. Las cifras homologadas pueden cambiar según configuración y no equivalen al alcance asegurado en carretera, especialmente a velocidades elevadas o con temperaturas bajas.',
    officialUrl: renaultModel('electricos/r4-e-tech-electrico.html'),
    technicalUrl: renaultModel('electricos/r4-e-tech-electrico/ficha-tecnica.html'),
    sources: [source('Gama Renault 4 E-Tech', renaultModel('electricos/r4-e-tech-electrico.html')), source('Motores y ficha técnica Renault 4', renaultModel('electricos/r4-e-tech-electrico/motores.html')), source('Catálogo Renault 4 E-Tech España', 'https://catalogo.renault.es/es/mobile/renault4/mobile/ct_renault_4_es_may_2025.pdf')],
    image: photo('renault-4-e-tech.jpg', 'Renault 4 E-Tech eléctrico fotografiado en una exposición.', 'Renault_4_E-Tech_Electric_-_04.jpg', 'Y.Leclercq', 'Y.Leclercq', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'clio',
    title: 'Renault Clio: motores gasolina, GLP e híbrido en España',
    description: 'Compara las motorizaciones TCe, Eco-G y full hybrid del Renault Clio: cilindrada, potencia y par publicado.',
    intro: 'El Clio reúne en una misma carrocería tres planteamientos para el mercado español: gasolina TCe, gasolina y GLP Eco-G, e híbrido completo E-Tech. La disponibilidad exacta puede cambiar entre años de modelo y acabados, así que esta ficha separa los datos publicados por versión.',
    powertrainSummary: 'Renault España ofrece TCe 115 de gasolina, Eco-G 120 bifuel gasolina/GLP y full hybrid E-Tech 160. La cifra de 270 Nm que Renault atribuye al sistema híbrido es distinta del par individual del motor térmico: la documentación técnica consultada especifica 172 Nm a 3.000 rpm para este último.',
    usageNote: 'TCe puede encajar para quien busca una opción de gasolina sencilla; Eco-G permite utilizar GLP donde haya suministro y el híbrido no requiere enchufe. Para comparar costes, utiliza el combustible que realmente usarías y ten en cuenta que el consumo depende de recorrido y conducción.',
    versions: [
      { name: 'TCe 115', type: 'Gasolina', power: '115 CV (84 kW)', displacement: '1.199 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No publicado por Renault España para esta versión' },
      { name: 'Eco-G 120', type: 'GLP · bifuel gasolina/GLP', power: '120 CV (90 kW)', displacement: '1.199 cm³', maxTorque: '200 Nm', torqueScope: 'Motor bifuel gasolina/GLP', torqueRpm: 'No publicado por Renault España para esta versión' },
      { name: 'Full hybrid E-Tech 160', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 160 CV (115 kW)', displacement: 'Térmico: 1.798 cm³; eléctrico: —', maxTorque: '172 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '3.000 rpm' },
    ],
    facts: [{ label: 'Carrocería', value: 'Utilitario de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.116 mm' }, { label: 'Tipo de híbrido', value: 'Full hybrid no enchufable' }],
    figures: [{ label: 'Consumo TCe 115 WLTP combinado', value: 'Desde 5,0 l/100 km, según configuración' }],
    specNote: 'El Clio de nueva generación ha incorporado motorizaciones que sustituyen a las ofrecidas anteriormente. Las cifras se han separado por versión y año de publicación; Renault no facilita un régimen de par para todas las mecánicas en la documentación española consultada.',
    officialUrl: renaultModel('hibridos/clio.html'),
    technicalUrl: renaultModel('hibridos/clio/ficha-tecnica.html'),
    sources: [source('Gama Renault Clio España', renaultModel('hibridos/clio.html')), source('Ficha técnica Clio', renaultModel('hibridos/clio/ficha-tecnica.html')), source('FAQ Renault sobre el par del Clio', renaultModel('preguntas-frecuentes-vehiculos/clio/cual-es-el-par-motor-de-renault-clio.html')), source('Catálogo Clio de nueva generación', 'https://catalogo.renault.es/es/mobile/clio6/mobile/ct_ebro_renault_clio_es_december_2025.pdf')],
    image: photo('renault-clio.jpg', 'Renault Clio de última generación fotografiado en un evento automovilístico.', 'Renault_Clio_VI_IMG_4563.jpg', 'Alexander Migl', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'captur',
    title: 'Renault Captur: versiones gasolina, GLP e híbrida',
    description: 'Ficha de motores Renault Captur TCe 115, Eco-G 120 y full hybrid E-Tech 160 con cilindrada y par publicado.',
    intro: 'El Captur es un SUV urbano que permite elegir entre gasolina, GLP y un sistema híbrido completo. Esas alternativas responden a necesidades diferentes: precio de uso, disponibilidad de combustible y proporción de circulación urbana, por lo que conviene valorar la versión además del tamaño del coche.',
    powertrainSummary: 'La gama Renault consultada combina TCe 115, Eco-G 120 bifuel y full hybrid E-Tech 160. El híbrido completo funciona sin enchufe; el GLP requiere localizar estaciones de servicio que dispensen ese combustible. La ficha de Renault no publica un régimen de par verificable para todas las motorizaciones, así que no se completa cuando falta ese dato.',
    usageNote: 'El GLP puede reducir el coste por kilómetro si se reposta con frecuencia en estaciones que lo ofrezcan; el híbrido no necesita enchufe y puede reducir el gasto en tráfico urbano. Compara precios locales, kilometraje anual y espacio de maletero antes de decidir.',
    versions: [
      { name: 'TCe 115', type: 'Gasolina', power: '115 CV (84 kW)', displacement: '1.199 cm³', maxTorque: '190 Nm', torqueScope: 'Motor de gasolina', torqueRpm: 'No publicado por Renault España para esta versión' },
      { name: 'Eco-G 120', type: 'GLP · bifuel gasolina/GLP', power: '120 CV (90 kW)', displacement: '1.199 cm³', maxTorque: '200 Nm', torqueScope: 'Motor bifuel gasolina/GLP', torqueRpm: 'No publicado por Renault España para esta versión', note: 'Depósitos separados de gasolina y GLP.' },
      { name: 'Full hybrid E-Tech 160', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 160 CV (116 kW)', displacement: 'Térmico: 1.798 cm³; eléctrico: —', maxTorque: 'No publicado con régimen verificable', torqueScope: 'Motor térmico de gasolina', torqueRpm: 'No publicado por Renault España para la versión actual' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV urbano de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.239 mm, según versión' }, { label: 'Alternativas', value: 'Gasolina, GLP e híbrida no enchufable' }],
    figures: [{ label: 'Consumo full hybrid WLTP', value: 'Consultar la ficha de la configuración; cambia con acabado y ruedas' }],
    specNote: 'Renault ha renovado recientemente la gama del Captur. Los valores se refieren a las mecánicas anunciadas en las fuentes actuales; no se mezclan con los antiguos sistemas híbridos 1.6 ni con el full hybrid de 145 CV de generaciones anteriores.',
    officialUrl: renaultModel('hibridos/captur.html'),
    technicalUrl: renaultModel('hibridos/captur/ficha-tecnica.html'),
    sources: [source('Gama Renault Captur', renaultModel('hibridos/captur.html')), source('Motores del Captur', renaultModel('hibridos/captur/motores.html')), source('Renault España: nuevo Eco-G 120', 'https://prensa.renault.es/captur-eco-g-120-cv-glp-economico-y-ecologico-para-llegar-aun-mas-lejos/?lang=spa'), source('Renault España: nuevo full hybrid E-Tech 160', 'https://prensa.renault.es/nuevo-motor-full-hybrid-e-tech-160-cv-mayor-potencia-menor-consumo/?lang=spa')],
    image: photo('renault-captur.jpg', 'Renault Captur de última generación aparcado en una calle.', '2024_Renault_Captur.jpg', 'Calreyn88', 'Calreyn88', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'symbioz',
    title: 'Renault Symbioz: gama híbrida, GLP y motores disponibles',
    description: 'Consulta las versiones del Renault Symbioz: Eco-G 120, mild hybrid 140 y full hybrid E-Tech 160 con sus datos técnicos.',
    intro: 'El Symbioz es un SUV compacto de cinco plazas que amplía la gama electrificada de Renault. Sus motorizaciones cubren tres tecnologías distintas: GLP bifuel, hibridación ligera y full hybrid autorrecargable; la diferencia es relevante para el consumo, la etiqueta y el uso diario.',
    powertrainSummary: 'El catálogo español consultado recoge Eco-G 120, mild hybrid 140 y full hybrid E-Tech 160. El motor GLP entrega 200 Nm, el mild hybrid 245 Nm y el sistema full hybrid combina un motor térmico de 170 Nm con asistencia eléctrica; se especifica el elemento al que corresponde cada cifra.',
    usageNote: 'Eco-G permite alternar gasolina y GLP; el mild hybrid asiste al motor térmico, pero no circula como un híbrido completo durante las mismas condiciones; el full hybrid puede mover el coche puntualmente con energía eléctrica sin conectarlo. No son tecnologías equivalentes aunque todas anuncien algún grado de electrificación.',
    versions: [
      { name: 'Eco-G 120', type: 'GLP · bifuel gasolina/GLP', power: '120 CV (90 kW)', displacement: '1.199 cm³', maxTorque: '200 Nm', torqueScope: 'Motor bifuel gasolina/GLP', torqueRpm: '1.750–4.000 rpm' },
      { name: 'Mild hybrid 140 EDC', type: 'Híbrido no enchufable · MHEV gasolina', power: 'Térmico: 140 CV (103 kW)', displacement: 'Térmico: 1.333 cm³', maxTorque: '245 Nm', torqueScope: 'Motor térmico de gasolina con hibridación ligera', torqueRpm: '2.500–3.500 rpm' },
      { name: 'Full hybrid E-Tech 160', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 160 CV (116 kW)', displacement: 'Térmico: 1.789 cm³; eléctrico: —', maxTorque: '170 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '3.500 rpm' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV compacto' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.413 mm' }, { label: 'Motorizaciones', value: 'GLP, mild hybrid y full hybrid' }],
    figures: [{ label: 'Sistema híbrido', value: 'E-Tech full hybrid no enchufable' }],
    specNote: 'La página española de precios consultada muestra Eco-G 120, mild hybrid 140 con cambio EDC y full hybrid E-Tech 160. No se incluye una versión manual mild hybrid 140 porque no aparece entre las motorizaciones configurables actuales.',
    officialUrl: renaultModel('hibridos/symbioz.html'),
    technicalUrl: renaultModel('hibridos/symbioz/ficha-tecnica.html'),
    sources: [source('Gama Renault Symbioz', renaultModel('hibridos/symbioz.html')), source('Ficha técnica Symbioz', renaultModel('hibridos/symbioz/ficha-tecnica.html')), source('Catálogo Renault Symbioz España, abril de 2026', 'https://catalogo.renault.es/es/mobile/symbioz/mobile/ct_ebro_renault_symbioz_es_april_2026.pdf')],
    image: photo('renault-symbioz.jpg', 'Renault Symbioz fotografiado en una presentación de automóviles.', 'Renault_Symbioz_DSC_2931.jpg', 'Alexander Migl', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'austral',
    title: 'Renault Austral: motores mild hybrid y full hybrid',
    description: 'Descubre las motorizaciones actuales del Renault Austral, diferencias entre mild hybrid y E-Tech full hybrid y datos publicados.',
    intro: 'El Austral es un SUV de Renault disponible con hibridación ligera y con el sistema full hybrid E-Tech. Aunque ambas versiones incorporan asistencia eléctrica, solo la segunda puede circular puntualmente en modo eléctrico sin conectarse a una toma.',
    powertrainSummary: 'La gama española consultada ofrece mild hybrid 150 y E-Tech full hybrid 200. Renault publica para la versión full hybrid un motor térmico 1.2 de 1.199 cm³ y 205 Nm, junto con un motor eléctrico que alcanza 205 Nm; son componentes distintos y sus pares no se suman de forma directa.',
    usageNote: 'La versión mild hybrid aporta asistencia eléctrica al motor de gasolina, mientras que el full hybrid integra una batería y motores capaces de mover el vehículo en ciertas situaciones. La diferencia de consumo depende mucho de ciudad, carretera, temperatura y estilo de conducción.',
    versions: [
      { name: 'Mild hybrid 150', type: 'Híbrido no enchufable · MHEV gasolina', power: 'Térmico: 150 CV (110 kW)', displacement: 'Térmico: 1.333 cm³', maxTorque: 'No publicado con régimen verificable', torqueScope: 'Motor térmico de gasolina con hibridación ligera', torqueRpm: 'No publicado por Renault España para la versión actual' },
      { name: 'Full hybrid E-Tech 200', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 200 CV (147 kW)', displacement: 'Térmico: 1.199 cm³; eléctrico: —', maxTorque: '205 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '1.750 rpm' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.510 mm' }, { label: 'Tecnologías', value: 'Mild hybrid y full hybrid' }],
    figures: [{ label: 'Full hybrid E-Tech', value: '200 CV de potencia del sistema' }],
    specNote: 'El catálogo de 2025 contiene datos de una versión mild hybrid 160 anterior; no se usan para describir el actual mild hybrid 150. En la ficha actual consultada Renault no aclara el par y régimen del mild hybrid 150, por lo que se dejan sin completar.',
    officialUrl: renaultModel('hibridos/austral.html'),
    technicalUrl: renaultModel('hibridos/austral/motores.html'),
    sources: [source('Renault Austral en España', renaultModel('hibridos/austral.html')), source('Motores disponibles para Austral', renaultModel('hibridos/austral/motores.html')), source('Catálogo técnico Austral, junio de 2025', 'https://catalogo.renault.es/es/mobile/austral/mobile/ct_renault_austral_hhn_es_june_2025.pdf')],
    image: photo('renault-austral.jpg', 'Renault Austral expuesto en un evento de automoción.', 'Renault_Austral_1X7A6198.jpg', 'Alexander Migl', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'arkana',
    title: 'Renault Arkana E-Tech híbrido: motor, potencia y consumo',
    description: 'Ficha del Renault Arkana E-Tech full hybrid 145: cilindrada, par térmico, batería y cifras principales.',
    intro: 'El Arkana combina una silueta SUV coupé con un sistema híbrido no enchufable. La versión E-Tech 145 utiliza un motor de gasolina y dos máquinas eléctricas; su batería se recarga durante la conducción y no necesita cable.',
    powertrainSummary: 'La ficha española consultada anuncia 145 CV de potencia del sistema. El motor térmico de 1.598 cm³ entrega 148 Nm a 3.600 rpm, mientras que el motor eléctrico principal desarrolla hasta 205 Nm. Son valores de componentes distintos, no una cifra de par combinada.',
    usageNote: 'El sistema full hybrid puede aprovechar la energía eléctrica en maniobras y recorridos urbanos, pero no transforma el Arkana en un eléctrico de autonomía enchufable. La homologación WLTP es una referencia de comparación; comprueba consumo real en función de tus trayectos y velocidades habituales.',
    versions: [{ name: 'E-Tech full hybrid 145', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 145 CV (105 kW)', displacement: 'Térmico: 1.598 cm³; eléctrico: —', maxTorque: '148 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '3.600 rpm' }],
    facts: [{ label: 'Carrocería', value: 'SUV coupé de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Hibridación', value: 'Full hybrid no enchufable' }, { label: 'Batería híbrida', value: '1,2 kWh' }],
    figures: [{ label: 'Potencia del sistema', value: '145 CV' }],
    specNote: 'Renault mantiene Arkana en la gama española mediante unidades en stock, sin mostrar un configurador para pedir una unidad nueva a fábrica en la consulta realizada. La ficha técnica describe la motorización E-Tech 145 de esas unidades; disponibilidad, acabado, año-modelo y kilometraje deben confirmarse con el concesionario.',
    officialUrl: renaultModel('hibridos/arkana.html'),
    technicalUrl: renaultModel('hibridos/arkana/datos-tecnicos.html'),
    sources: [source('Gama Renault Arkana', renaultModel('hibridos/arkana.html')), source('Datos técnicos del Arkana E-Tech', renaultModel('hibridos/arkana/datos-tecnicos.html')), source('Catálogo técnico Renault Arkana', 'https://catalogo.renault.es/es/mobile/arkana_nbi/mobile/ct_arkana_nbi_ljl_es_may_2025.pdf')],
    image: photo('renault-arkana.jpg', 'Renault Arkana E-Tech fotografiado en un encuentro automovilístico.', 'Renault_Arkana_(CMF-B)_Facelift_IMG_9851.jpg', 'Alexander-93', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'espace',
    title: 'Renault Espace E-Tech full hybrid: motor y datos del SUV familiar',
    description: 'Consulta el Renault Espace E-Tech full hybrid de 200 CV, sus plazas, dimensiones, maletero y tecnología híbrida.',
    intro: 'El Espace actual es un SUV familiar que puede configurarse con cinco o siete plazas. Su sistema E-Tech full hybrid busca combinar un motor de gasolina con asistencia eléctrica sin necesidad de enchufe, con un interior cuyo espacio cambia según se seleccione la tercera fila.',
    powertrainSummary: 'Renault España ofrece el E-Tech full hybrid de 200 CV con un motor de gasolina turbo de tres cilindros y 1.199 cm³, apoyado por dos motores eléctricos. La potencia de 200 CV corresponde al sistema híbrido; los pares de los motores térmico y eléctrico no se suman entre sí.',
    usageNote: 'La posibilidad de elegir cinco o siete plazas es uno de los factores prácticos centrales: con la tercera fila desplegada queda menos espacio para equipaje. Comprueba la configuración real del maletero y la homologación del vehículo que estés valorando.',
    versions: [{ name: 'Full hybrid E-Tech 200', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 200 CV (147 kW)', displacement: 'Térmico: 1.199 cm³; eléctrico: —', maxTorque: 'No publicado con régimen verificable', torqueScope: 'Sistema híbrido; Renault no ofrece un valor de par único comparable', torqueRpm: 'No publicado' }],
    facts: [{ label: 'Carrocería', value: 'SUV familiar' }, { label: 'Plazas', value: '5 o 7, según configuración' }, { label: 'Longitud', value: '4.722 mm' }, { label: 'Maletero', value: 'Hasta 692 litros en configuración de 5 plazas; varía con los asientos' }],
    figures: [{ label: 'Potencia del sistema híbrido', value: '200 CV' }, { label: 'Depósito de gasolina', value: '55 litros' }],
    specNote: 'El catálogo técnico Renault España MY25 especifica un motor térmico 1.2 de 1.199 cm³ y una potencia híbrida acumulada de 147 kW (200 CV). Publica 205 Nm para cada motor, con la indicación de que no son acumulables y sin un régimen individual inequívoco; por eso no se muestran en la columna de par.',
    officialUrl: renaultModel('hibridos/espace.html'),
    technicalUrl: renaultModel('hibridos/espace/ficha-tecnica.html'),
    sources: [source('Renault Espace en España', renaultModel('hibridos/espace.html')), source('Ficha técnica Renault Espace MY25', 'https://catalogo.renault.es/es/mobile/espace_rhn/ct_espace_rhn_es_may_2025.pdf'), source('Ficha técnica y configuraciones del Espace', renaultModel('hibridos/espace/ficha-tecnica.html'))],
    image: photo('renault-espace.jpg', 'Renault Espace de generación actual fotografiado en carretera.', 'Renault_Espace_(2024)_(53988865283).jpg', 'Charles', 'Charles', 'CC BY 2.0', 'https://www.flickr.com/people/charles79/'),
  },
  {
    modelSlug: 'rafale',
    basePrice: '44.225 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial Renault',
    priceNote: 'PVP máximo recomendado con IVA y transporte publicado por Renault para la versión techno full hybrid de 200 CV. El importe no incluye los descuentos condicionados a financiación, campañas, CAE o ayudas; la versión y el equipamiento elegidos cambian el precio.',
    title: 'Renault Rafale: híbrido E-Tech 200 y enchufable 4x4 de 300 CV',
    description: 'Compara las dos motorizaciones del Renault Rafale: full hybrid 200 y E-Tech 4x4 PHEV 300 con batería enchufable.',
    intro: 'El Rafale es el SUV coupé de mayor orientación prestacional de Renault. La gama consultada ofrece un full hybrid de 200 CV y un híbrido enchufable de 300 CV con tracción total eléctrica, dos configuraciones que difieren especialmente en batería, peso, potencia y posibilidad de recarga externa.',
    powertrainSummary: 'Ambos utilizan un motor térmico 1.2 de 1.199 cm³, pero el E-Tech 4x4 añade motores eléctricos y una batería enchufable de 22 kWh. Renault indica 205 Nm para el motor térmico del full hybrid y 230 Nm para el térmico de la versión PHEV; los pares eléctricos se muestran por separado porque no se suman directamente.',
    usageNote: 'La versión PHEV puede recorrer trayectos diarios con energía cargada externamente si se recarga con regularidad. Si se circula mucho tiempo con la batería descargada, su consumo y coste pueden diferir del de un híbrido no enchufable; conviene estimar la proporción de kilómetros eléctricos y térmicos.',
    versions: [
      { name: 'Full hybrid E-Tech 200', type: 'Híbrido no enchufable · HEV gasolina', power: 'Sistema: 200 CV (147 kW)', displacement: 'Térmico: 1.199 cm³; eléctrico: —', maxTorque: '205 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: '1.750 rpm', price: 'Desde 44.225 € (techno)', priceType: 'PVP máximo recomendado con IVA y transporte; fuente oficial Renault' },
      { name: 'Hyper hybrid E-Tech 4x4 · PHEV 300', type: 'Híbrido enchufable · PHEV gasolina', power: 'Sistema: 300 CV (221 kW)', displacement: 'Térmico: 1.199 cm³; eléctrico: —', maxTorque: '230 Nm', torqueScope: 'Motor térmico de gasolina', torqueRpm: 'No publicado de forma inequívoca en la ficha consultada', price: 'Desde 50.725 € (esprit Alpine)', priceType: 'PVP máximo recomendado con IVA y transporte; fuente oficial Renault' },
    ],
    facts: [{ label: 'Carrocería', value: 'SUV coupé de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.710 mm' }, { label: 'Maletero', value: 'Hasta 627 litros, según motorización' }],
    figures: [{ label: 'Autonomía eléctrica homologada PHEV', value: 'Hasta 105 km WLTP, según configuración' }],
    specNote: 'La autonomía de hasta 105 km corresponde a la versión híbrida enchufable y a la homologación indicada por Renault. La autonomía real depende de la carga, temperatura, recorrido y velocidad; la batería de esta versión es de 22 kWh.',
    officialUrl: renaultModel('hibridos/rafale.html'),
    technicalUrl: renaultModel('hibridos/rafale/datos-tecnicos.html'),
    sources: [source('Gama Renault Rafale', renaultModel('hibridos/rafale.html')), source('Datos técnicos del Rafale', renaultModel('hibridos/rafale/datos-tecnicos.html')), source('Tarifas oficiales de Renault Rafale, octubre de 2026', 'https://prensa.renault.es/renault-abre-los-pedidos-y-anuncia-los-precios-de-renault-rafale-hypnotic/?lang=spa'), source('Catálogo Renault Rafale España, mayo de 2026', 'https://catalogo.renault.es/es/mobile/rafale_dhn/ct_ebro_renault_rafale_es_may_2026.pdf')],
    image: photo('renault-rafale.jpg', 'Renault Rafale E-Tech fotografiado en un recinto de exposición.', 'Renault_Rafale_E-Tech_Hybrid.jpg', 'Bagnole55', 'Bagnole55', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'megane-e-tech',
    basePrice: '37.955 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial noviembre de 2026',
    priceNote: 'PVP de tarifa publicado por Renault para la gama nueva, sin aplicar financiación, campañas u otras ayudas. La tarifa de noviembre de 2026 es la referencia utilizada; confirma la configuración y el precio final con Renault.',
    title: 'Nuevo Renault Mégane E-Tech eléctrico: motor, batería y autonomía',
    description: 'Datos de la nueva gama Renault Mégane E-Tech eléctrico 2026: motor de 220 CV, batería LFP de 67 kWh, 300 Nm y hasta 500 km WLTP.',
    intro: 'Renault ha renovado el Mégane E-Tech eléctrico para 2026 con una gama simplificada, nueva batería LFP y una única motorización. La actualización importa al consultar fichas antiguas: la oferta española actual no debe describirse con las baterías de las primeras versiones.',
    powertrainSummary: 'La gama 2026 utiliza un motor eléctrico de 220 CV y 300 Nm, asociado a una batería LFP de 67 kWh. Renault no publica un régimen de rpm comparable al de un motor térmico.',
    usageNote: 'La batería de 67 kWh homologa hasta 500 km WLTP en la nueva versión y Renault comunica una carga rápida del 15 al 80 % en 24 minutos bajo las condiciones especificadas por el fabricante. La autonomía real depende de la velocidad, la temperatura, la carga y el trayecto.',
    versions: [{ name: 'E-Tech eléctrico 220 · batería LFP 67 kWh', type: 'Eléctrico', power: '220 CV (160 kW)', displacement: '—', maxTorque: '300 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 37.955 €', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' }],
    facts: [{ label: 'Carrocería', value: 'Compacto eléctrico de 5 puertas' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.200 mm' }, { label: 'Maletero', value: '440 litros' }],
    figures: [{ label: 'Autonomía WLTP publicada', value: 'Hasta 500 km' }],
    specNote: 'La ficha y el comunicado de Renault de octubre de 2026 presentan la nueva batería LFP de 67 kWh y una autonomía de hasta 500 km. Los datos de la generación anterior (60 o 87 kWh) no describen la nueva gama española.',
    officialUrl: renaultModel('electricos/megane.html'),
    technicalUrl: renaultModel('electricos/megane/ficha-tecnica.html'),
    sources: [source('Nuevo Mégane E-Tech eléctrico: gama y especificaciones Renault España', renaultModel('electricos/megane.html')), source('Apertura de pedidos y ficha del nuevo Mégane E-Tech', 'https://prensa.renault.es/nuevo-renault-megane-e-tech-electrico-mas-autonomia-equipamiento-y-tecnologia-desde-28670-eur/?lang=spa')],
    image: photo('renault-megane-e-tech.jpg', 'Renault Mégane E-Tech eléctrico fotografiado en una exposición.', 'Megane_etech.jpg', 'DDD71', 'DDD71', 'CC0 1.0'),
  },
  {
    modelSlug: 'scenic-e-tech',
    basePrice: '45.355 €',
    basePriceLabel: 'PVP máximo recomendado · tarifa oficial noviembre de 2026',
    priceNote: 'PVP de tarifa Renault de noviembre de 2026 para la batería NMC de 89 kWh, antes de campañas, financiación y ayudas. No se usa el importe promocional publicado como precio base.',
    title: 'Renault Scénic E-Tech 2026: batería de 89 kWh y hasta 642 km',
    description: 'Ficha del Renault Scénic E-Tech actualizado en 2026: motor de 220 CV, batería NMC de 89 kWh, 300 Nm y autonomía WLTP.',
    intro: 'La gama española del Scénic E-Tech ha recibido una actualización en 2026. En la información oficial consultada, la configuración disponible es la batería NMC de 89 kWh con motor de 220 CV; Renault ha anunciado una batería LFP de 67 kWh, pero la describe como una incorporación futura y no se incluye como motorización disponible.',
    powertrainSummary: 'La configuración comercializada en la fuente consultada combina 220 CV con una batería NMC de 89 kWh y desarrolla 300 Nm. Como es un motor eléctrico, la cilindrada térmica no aplica y el par no se expresa mediante un régimen de rpm.',
    usageNote: 'La batería de 89 kWh homologa hasta 642 km WLTP; Renault también ha anunciado una futura batería LFP de 67 kWh con hasta 467 km. Si se valora esta última, conviene confirmar su fecha de disponibilidad antes de hacer una comparación o una compra.',
    versions: [{ name: 'E-Tech eléctrico 220 · batería NMC 89 kWh', type: 'Eléctrico', power: '220 CV (160 kW)', displacement: '—', maxTorque: '300 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', price: 'Desde 45.355 € (techno)', priceType: 'PVP máximo recomendado; tarifa Renault noviembre de 2026' }],
    facts: [{ label: 'Carrocería', value: 'SUV familiar eléctrico' }, { label: 'Plazas', value: '5' }, { label: 'Longitud', value: '4.470 mm' }, { label: 'Maletero', value: '545 litros' }],
    figures: [{ label: 'Autonomía WLTP máxima', value: 'Hasta 642 km con batería NMC de 89 kWh' }],
    specNote: 'Renault indicó el 2 de octubre de 2026 que la batería LFP de 67 kWh llegaría más adelante. Por ello, esta ficha solo incluye la versión NMC de 89 kWh que el fabricante describía como disponible; conviene comprobar la gama antes de comprar porque Renault puede actualizarla.',
    officialUrl: renaultModel('electricos/scenic.html'),
    technicalUrl: renaultModel('electricos/scenic/datos-tecnicos.html'),
    sources: [source('Gama Renault Scénic E-Tech', renaultModel('electricos/scenic.html')), source('Comunicado Renault sobre la gama Scénic 2026', 'https://prensa.renault.es/renault-scenic-e-tech-electrico-mejorado-para-ofrecer-mas-comodidad-conectividad-y-rendimiento-electrico-desde-30660eur/?lang=spa')],
    image: photo('renault-scenic-e-tech.jpg', 'Renault Scénic E-Tech eléctrico fotografiado en una presentación.', 'Renault_Sc%C3%A9nic_E-Tech_Electric_220_Long_Range_Techno_%E2%80%93_h_30062024.jpg', 'M 93', 'M_93', 'CC BY-SA 3.0 Alemania'),
  },
  {
    modelSlug: 'kangoo',
    title: 'Renault Kangoo de pasajeros: motores diésel y E-Tech eléctrico',
    description: 'Compara Renault Kangoo Blue dCi 95 con Kangoo E-Tech eléctrico: cilindrada, potencia, precio y datos publicados.',
    intro: 'El Kangoo de pasajeros combina una carrocería modular con alternativas diésel y eléctrica. La elección depende del tipo de recorrido, la necesidad de plazas y el acceso a carga; la familia comercial Kangoo Van tiene configuraciones distintas y no se confunde aquí con el turismo de pasajeros.',
    powertrainSummary: 'El configurador actual de Renault España ofrece el Blue dCi 95 diésel y el Kangoo E-Tech eléctrico de 121 CV. La ficha técnica de motores todavía describe un Blue dCi 115, pero no aparece como opción de compra configurable en la página actual de precios.',
    usageNote: 'El diésel puede ser más adecuado para recorridos largos frecuentes y uso con carga; el eléctrico puede reducir el gasto energético en recorridos previsibles si se dispone de recarga. Compara plazas, autonomía de la versión y carga útil real antes de equiparar ambas opciones.',
    versions: [
      { name: 'Blue dCi 95', type: 'Diésel', power: '95 CV (70 kW)', displacement: '1.461 cm³', maxTorque: '260 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'E-Tech eléctrico 120 · batería 45 kWh', type: 'Eléctrico', power: '121 CV (90 kW)', displacement: '—', maxTorque: '245 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', note: 'La página española de versiones consultada continúa mostrando 45 kWh y 121 CV.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Monovolumen de pasajeros' }, { label: 'Plazas', value: 'Hasta 5, según configuración' }, { label: 'Longitud', value: '4.486 mm' }, { label: 'Batería eléctrica', value: '45 kWh' }],
    figures: [{ label: 'Autonomía eléctrica WLTP', value: '291 km en la versión de la ficha comparada; Renault publica máximos distintos según configuración' }],
    specNote: 'La ficha técnica consultada muestra 291 km para la configuración E-Tech 45 de 121 CV; otros resúmenes de Renault ofrecen máximos diferentes según versión, cargador y equipamiento. Se indica la cifra asociada a la ficha comparada, no como valor universal de la gama.',
    officialUrl: renaultModel('turismos/kangoo-diesel.html'),
    technicalUrl: renaultModel('turismos/kangoo/motor-termico.html'),
    sources: [source('Renault Kangoo pasajeros diésel', renaultModel('turismos/kangoo-diesel.html')), source('Motores térmicos Blue dCi', renaultModel('turismos/kangoo/motor-termico.html')), source('Kangoo E-Tech eléctrico', renaultModel('turismos/kangoo-electrico.html')), source('Motor eléctrico y batería', renaultModel('turismos/kangoo/motor-electrico.html'))],
    image: photo('renault-kangoo.jpg', 'Renault Kangoo de tercera generación en una exposición de vehículos.', 'Renault_Kangoo_III_1X7A1519.jpg', 'Alexander Migl', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'grand-kangoo',
    title: 'Renault Grand Kangoo: diésel, eléctrico y versiones de siete plazas',
    description: 'Ficha de Renault Grand Kangoo: Blue dCi 115 o E-Tech eléctrico, capacidad para siete plazas y datos técnicos.',
    intro: 'Grand Kangoo alarga la fórmula del monovolumen para ofrecer más espacio y hasta siete plazas. Renault comercializa versiones diésel y eléctricas, pero el volumen de carga y el uso de la tercera fila condicionan de forma notable la capacidad disponible.',
    powertrainSummary: 'La versión Blue dCi 115 utiliza un motor diésel de 1.461 cm³ y 270 Nm. Grand Kangoo E-Tech desarrolla 121 CV y 245 Nm con una batería de 45 kWh; el par eléctrico no se expresa mediante un régimen de rpm como el diésel.',
    usageNote: 'Su principal diferencia frente al Kangoo corto es el espacio longitudinal y la posibilidad de disponer de siete plazas. Si se ocupa la tercera fila, el espacio para equipaje cambia; en la versión eléctrica, la autonomía WLTP publicada es inferior a la del Kangoo más corto y debe contrastarse con los recorridos habituales.',
    versions: [
      { name: 'Blue dCi 115', type: 'Diésel', power: '115 CV (85 kW)', displacement: '1.461 cm³', maxTorque: '270 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.750 rpm' },
      { name: 'E-Tech eléctrico 120 · batería 45 kWh', type: 'Eléctrico', power: '121 CV (90 kW)', displacement: '—', maxTorque: '245 Nm', torqueScope: 'Motor eléctrico', torqueRpm: 'No aplica; Renault no publica régimen de par para motores eléctricos', note: 'Configuración actual de 45 kWh recogida en la ficha técnica española.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Monovolumen largo' }, { label: 'Plazas', value: '5 o 7, según configuración' }, { label: 'Longitud', value: '4.910 mm' }, { label: 'Batería eléctrica', value: '45 kWh' }],
    figures: [{ label: 'Autonomía eléctrica WLTP', value: '266 km en la ficha técnica comparada; hasta 280 km según configuración' }],
    specNote: 'Renault distingue Grand Kangoo del Kangoo de carrocería estándar. No se trasladan aquí las cifras de autonomía, longitud o par del modelo corto; consulta la ficha de la configuración concreta y el año-modelo.',
    officialUrl: renaultModel('turismos/grand-kangoo.html'),
    technicalUrl: renaultModel('turismos/grand-kangoo/datos-tecnicos.html'),
    sources: [source('Renault Grand Kangoo', renaultModel('turismos/grand-kangoo.html')), source('Ficha técnica Grand Kangoo diésel', renaultModel('turismos/grand-kangoo/datos-tecnicos.html')), source('Ficha técnica Grand Kangoo eléctrico', renaultModel('electricos/grand-kangoo/datos-tecnicos.html'))],
    image: photo('renault-grand-kangoo.jpg', 'Renault Grand Kangoo E-Tech eléctrico expuesto en una feria.', 'Renault_Grand_Kangoo_III_E-Tech_IAA_2023_1X7A0714.jpg', 'Alexander-93', 'Alexander-93', 'CC BY-SA 4.0'),
  },
  {
    modelSlug: 'trafic-combi',
    title: 'Renault Trafic Combi: motores diésel, plazas y datos técnicos',
    description: 'Ficha del Renault Trafic Combi para pasajeros: motores Blue dCi, potencia, par máximo, régimen y configuraciones de plazas.',
    intro: 'Trafic Combi es la versión de pasajeros de la furgoneta mediana de Renault. La marca ofrece carrocerías y distribuciones de asientos distintas, con configuraciones de hasta nueve plazas; el número final depende de la homologación y del acabado elegido.',
    powertrainSummary: 'La gama española incluye cuatro variantes Blue dCi de 1.997 cm³: 110 CV, 150 CV manual, 150 CV con caja automática EAG9 y 170 CV EAG9. Renault publica pares de 300, 350 y 380 Nm, todos a 1.500 rpm.',
    usageNote: 'La longitud ronda los 5,1 metros y las configuraciones pueden ir de 2 a 9 plazas según carrocería. Antes de comparar con un monovolumen o un turismo, revisa el número de asientos homologados de la unidad, el espacio disponible con todos ocupados y las dimensiones que condicionan aparcamiento y acceso a garajes.',
    versions: [
      { name: 'Blue dCi 110', type: 'Diésel', power: '110 CV (81 kW)', displacement: '1.997 cm³', maxTorque: '300 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio manual de seis velocidades.' },
      { name: 'Blue dCi 150 manual', type: 'Diésel', power: '150 CV (110 kW)', displacement: '1.997 cm³', maxTorque: '350 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio manual de seis velocidades.' },
      { name: 'Blue dCi 150 EAG9', type: 'Diésel', power: '150 CV (110 kW)', displacement: '1.997 cm³', maxTorque: '350 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio automático de nueve velocidades.' },
      { name: 'Blue dCi 170 EAG9', type: 'Diésel', power: '170 CV (125 kW)', displacement: '1.997 cm³', maxTorque: '380 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio automático de nueve velocidades.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Furgoneta de pasajeros' }, { label: 'Plazas', value: 'De 2 a 9, según configuración' }, { label: 'Longitud aproximada', value: '5.102 mm' }, { label: 'Combustible', value: 'Diésel' }],
    specNote: 'Los datos de motor corresponden a la tabla técnica de Trafic Combi publicada por Renault España. No se mezclan con los de Trafic SpaceClass ni con los del furgón comercial, aunque compartan parte de la familia mecánica.',
    officialUrl: renaultModel('turismos/trafic.html'),
    technicalUrl: renaultModel('turismos/trafic/motorizacion.html'),
    sources: [source('Renault Trafic Combi: versiones de pasajeros', renaultModel('turismos/trafic.html')), source('Motorizaciones y datos técnicos del Trafic Combi', renaultModel('turismos/trafic/motorizacion.html'))],
    image: photo('renault-trafic-combi.jpg', 'Renault Trafic Combi de tercera generación.', 'Renault Trafic Combi (III) – f 29062016.jpg', 'M 93', 'M_93', 'CC BY-SA 3.0 Alemania'),
  },
  {
    modelSlug: 'trafic-spaceclass',
    title: 'Renault Trafic SpaceClass: motores, plazas y versiones',
    description: 'Consulta las versiones Blue dCi del Renault Trafic SpaceClass, potencia, cilindrada, par máximo y opciones de cambio automático.',
    intro: 'Trafic SpaceClass es la variante de pasajeros más orientada al confort y a los traslados de personas dentro de la familia Trafic. Renault la ofrece con carrocería normal o larga y distintas distribuciones interiores; la configuración determina el número de plazas y el espacio para equipaje.',
    powertrainSummary: 'La gama española consultada ofrece Blue dCi 150 manual, Blue dCi 150 con cambio automático EAG9 y Blue dCi 170 EAG9. Todas las variantes emplean un motor diésel de 1.997 cm³. Renault publica 350 Nm a 1.500 rpm para las versiones de 150 CV y 380 Nm a 1.500 rpm para la de 170 CV.',
    usageNote: 'Su tamaño y modularidad están pensados para viajes con pasajeros, lanzaderas y transporte profesional. En la ficha concreta revisa si la distribución elegida es de seis u ocho plazas y cuánto maletero queda al utilizarlas; la carrocería larga no equivale automáticamente a más capacidad útil en todas las configuraciones.',
    versions: [
      { name: 'Blue dCi 150 manual', type: 'Diésel', power: '150 CV (110 kW)', displacement: '1.997 cm³', maxTorque: '350 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio manual.' },
      { name: 'Blue dCi 150 EAG9', type: 'Diésel', power: '150 CV (110 kW)', displacement: '1.997 cm³', maxTorque: '350 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio automático de nueve velocidades.' },
      { name: 'Blue dCi 170 EAG9', type: 'Diésel', power: '170 CV (125 kW)', displacement: '1.997 cm³', maxTorque: '380 Nm', torqueScope: 'Motor diésel', torqueRpm: '1.500 rpm', note: 'Potencia máxima a 3.500 rpm; cambio automático de nueve velocidades.' },
    ],
    facts: [{ label: 'Carrocería', value: 'Furgoneta de pasajeros de alta gama' }, { label: 'Plazas', value: 'Configuraciones de 6 a 8, según versión' }, { label: 'Longitud', value: 'Aproximadamente 5,1 m; también hay carrocería larga' }, { label: 'Combustible', value: 'Diésel' }],
    specNote: 'Las cifras de motor proceden de la página oficial española de SpaceClass. Renault advierte que la disponibilidad de versiones y equipamientos puede cambiar; confirma el configurador para el año-modelo y la carrocería concretos.',
    officialUrl: renaultModel('turismos/trafic-spaceclass.html'),
    technicalUrl: renaultModel('turismos/trafic-spaceclass/configurador.html'),
    sources: [source('Renault Trafic SpaceClass', renaultModel('turismos/trafic-spaceclass.html')), source('Configurador y especificaciones SpaceClass', renaultModel('turismos/trafic-spaceclass/configurador.html'))],
    image: photo('renault-trafic-spaceclass.jpg', 'Renault Trafic SpaceClass de pasajeros.', 'Le Havre - 76600 - 2024.07.05 - Paris 2024 - Renault Trafic SpaceClass n°62 © Anthony Levrot.jpg', 'Anthony Levrot', 'Lev._Anthony', 'CC BY-SA 4.0'),
  },
];

type RenaultPrice = { price: string; priceType: string };
type RenaultModelPricing = {
  basePrice: string;
  note: string;
  sourceLabel: string;
  sourceUrl: string;
  versions: RenaultPrice[];
};

const renaultPriceData: Record<string, RenaultModelPricing> = {
  'twingo-e-tech': {
    basePrice: '19.630 €',
    note: 'PVP de acceso de la tarifa Renault España de noviembre de 2026 (acabado evolution), antes de campañas o ayudas. La web también muestra un precio «desde» promocional y una ayuda Auto+ de 4.050 €, sujetos a sus condiciones.',
    sourceLabel: 'Tarifa oficial Renault España, noviembre de 2026',
    sourceUrl: renaultNovemberPriceSheet,
    versions: [{ price: 'Desde 19.630 € (evolution)', priceType: 'PVP de tarifa Renault, noviembre de 2026; sin aplicar campañas ni ayudas.' }],
  },
  '5-e-tech': {
    basePrice: '28.305 €',
    note: 'PVP de tarifa Renault España de noviembre de 2026 para la versión de acceso con batería urbana de 40 kWh. Renault puede anunciar precios promocionales que suman campañas, CAE, financiación o Auto+; no se presentan como PVP sin condiciones.',
    sourceLabel: 'Tarifa oficial Renault España, noviembre de 2026',
    sourceUrl: renaultNovemberPriceSheet,
    versions: [
      { price: 'Desde 28.305 € (evolution, 120 CV)', priceType: 'PVP de tarifa Renault, noviembre de 2026; batería urbana de 40 kWh.' },
      { price: 'Desde 31.305 € (evolution, 150 CV)', priceType: 'PVP de tarifa Renault, noviembre de 2026; batería confort de 52 kWh.' },
    ],
  },
  '4-e-tech': {
    basePrice: '30.305 €',
    note: 'PVP de tarifa Renault España de noviembre de 2026 para el acabado evolution con batería urbana. La página de Renault muestra además importes promocionales y una ayuda Auto+ de 4.500 €, sujetos a condiciones; se distinguen del PVP de tarifa.',
    sourceLabel: 'Tarifa oficial Renault España, noviembre de 2026',
    sourceUrl: renaultNovemberPriceSheet,
    versions: [
      { price: 'Desde 30.305 € (evolution, 120 CV)', priceType: 'PVP de tarifa Renault, noviembre de 2026; batería urbana de 40 kWh.' },
      { price: 'Desde 33.305 € (evolution, 150 CV)', priceType: 'PVP de tarifa Renault, noviembre de 2026; batería confort de 52 kWh.' },
    ],
  },
  clio: {
    basePrice: '18.935 €',
    note: 'Precio «desde» publicado por Renault España para el acabado evolution, consultado el 5 de noviembre de 2026. El importe de cada motorización se toma de la tabla oficial de precios y versiones; puede variar con el acabado y las condiciones comerciales.',
    sourceLabel: 'Precios oficiales Renault Clio, acabado evolution',
    sourceUrl: 'https://www.renault.es/hibridos/clio/precios-versiones.html?gradeCode=ENS_MDL2PSL1SERIELIM1',
    versions: [
      { price: 'Desde 18.935 €', priceType: 'Precio publicado para TCe 115 con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 19.731 €', priceType: 'Precio publicado para Eco-G 120 EDC con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 22.566 €', priceType: 'Precio publicado para full hybrid E-Tech 160 con acabado evolution; consulta 5/11/2026.' },
    ],
  },
  captur: {
    basePrice: '20.235 €',
    note: 'Precio «desde» publicado por Renault España para Captur evolution, consultado el 5 de noviembre de 2026. Se identifica el importe publicado para cada motor; la configuración, acabado y condiciones comerciales pueden modificar el precio final.',
    sourceLabel: 'Precios oficiales Renault Captur, acabado evolution',
    sourceUrl: 'https://www.renault.es/hibridos/captur/precios-versiones.html?gradeCode=ENS_MDL3P1SERIELIM1',
    versions: [
      { price: 'Desde 20.237 €', priceType: 'Precio publicado para TCe 115 con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 20.235 €', priceType: 'Precio publicado para Eco-G 120 con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 24.635 €', priceType: 'Precio publicado para full hybrid E-Tech 160 con acabado evolution; consulta 5/11/2026.' },
    ],
  },
  symbioz: {
    basePrice: '25.935 €',
    note: 'Precio «desde» publicado por Renault España para Symbioz evolution, consultado el 5 de noviembre de 2026. Renault puede cambiar precios y versiones; la cifra se asocia a la motorización y acabado indicados en la fuente oficial.',
    sourceLabel: 'Precios oficiales Renault Symbioz, acabado evolution',
    sourceUrl: 'https://www.renault.es/hibridos/symbioz/precios-versiones.html?gradeCode=ENS_MDL3P1SERIELIM1',
    versions: [
      { price: 'Desde 25.935 €', priceType: 'Precio publicado para Eco-G 120 con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 30.385 €', priceType: 'Precio publicado para mild hybrid 140 EDC con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 30.149 €', priceType: 'Precio publicado para full hybrid E-Tech 160 con acabado evolution; consulta 5/11/2026.' },
    ],
  },
  austral: {
    basePrice: '33.300 €',
    note: 'Precio «desde» oficial de Renault España para Austral evolution, consultado el 5 de noviembre de 2026. Se conserva el precio publicado para cada motorización y el acabado de acceso, sin trasladar precios de acabados superiores.',
    sourceLabel: 'Precios oficiales Renault Austral, acabado evolution',
    sourceUrl: 'https://www.renault.es/hibridos/austral/precios-versiones.html?gradeCode=ENS_MDL2P1SERIELIM1',
    versions: [
      { price: 'Desde 33.300 €', priceType: 'Precio publicado para mild hybrid 150 auto con acabado evolution; consulta 5/11/2026.' },
      { price: 'Desde 36.909 €', priceType: 'Precio publicado para full hybrid E-Tech 200 con acabado evolution; consulta 5/11/2026.' },
    ],
  },
  arkana: {
    basePrice: '31.383 €',
    note: 'Precio «desde» publicado por Renault España para Arkana techno E-Tech full hybrid 145, consultado el 5 de noviembre de 2026. Renault ofrece actualmente el modelo mediante unidades en stock; disponibilidad, acabado y precio de cada unidad dependen del concesionario.',
    sourceLabel: 'Precios oficiales Renault Arkana',
    sourceUrl: 'https://www.renault.es/hibridos/arkana/precios-versiones.html?gradeCode=ENS_MDL2P1SERIELIM1',
    versions: [{ price: 'Desde 31.383 € (techno)', priceType: 'Precio publicado por Renault para full hybrid E-Tech 145; sujeto a disponibilidad de stock.' }],
  },
  espace: {
    basePrice: '40.576 €',
    note: 'Precio «desde» publicado por Renault España para Espace techno full hybrid E-Tech 200 de cinco plazas, consultado el 5 de noviembre de 2026. La carrocería de siete plazas y otros acabados pueden variar el importe.',
    sourceLabel: 'Precios oficiales Renault Espace, acabado techno',
    sourceUrl: 'https://www.renault.es/hibridos/espace/precios-versiones.html?gradeCode=ENS_MDL2PSL1SERIELIM1',
    versions: [{ price: 'Desde 40.576 € (techno, 5 plazas)', priceType: 'Precio publicado para full hybrid E-Tech 200; consulta 5/11/2026.' }],
  },
  rafale: {
    basePrice: '44.225 €',
    note: 'PVP máximo recomendado publicado por Renault España, con IVA y transporte. El precio de la motorización híbrida enchufable corresponde al acabado esprit Alpine; Renault comunica por separado descuentos y ayuda Auto+ condicionados.',
    sourceLabel: 'Tarifas oficiales Renault Rafale, octubre de 2026',
    sourceUrl: 'https://prensa.renault.es/renault-abre-los-pedidos-y-anuncia-los-precios-de-renault-rafale-hypnotic/?lang=spa',
    versions: [
      { price: 'Desde 44.225 € (techno)', priceType: 'PVP máximo recomendado con IVA y transporte; full hybrid E-Tech 200.' },
      { price: 'Desde 50.725 € (esprit Alpine)', priceType: 'PVP máximo recomendado con IVA y transporte; hyper hybrid E-Tech 4x4 300. Renault anuncia Auto+ por separado y sujeto a condiciones.' },
    ],
  },
  'megane-e-tech': {
    basePrice: '37.955 €',
    note: 'PVP recomendado de tarifa Renault España de noviembre de 2026 para Mégane E-Tech eléctrico techno 220 CV. La web puede mostrar importes «desde» con promociones, financiación o ayudas; esos importes no sustituyen al PVP de tarifa.',
    sourceLabel: 'Tarifa oficial Renault España, noviembre de 2026',
    sourceUrl: renaultNovemberPriceSheet,
    versions: [{ price: 'Desde 37.955 € (techno)', priceType: 'PVP de tarifa Renault, noviembre de 2026; batería LFP de 67 kWh.' }],
  },
  'scenic-e-tech': {
    basePrice: '45.355 €',
    note: 'PVP recomendado de tarifa Renault España de noviembre de 2026 para Scénic E-Tech 220 CV gran autonomía. Renault anuncia en su web ofertas y Auto+ por separado; la cuantía y la elegibilidad dependen de sus condiciones.',
    sourceLabel: 'Tarifa oficial Renault España, noviembre de 2026',
    sourceUrl: renaultNovemberPriceSheet,
    versions: [{ price: 'Desde 45.355 € (techno)', priceType: 'PVP de tarifa Renault, noviembre de 2026; versión gran autonomía.' }],
  },
  kangoo: {
    basePrice: '27.469 €',
    note: 'Renault España publica 27.469 € para Kangoo authentic Blue dCi 95 y 35.260 € para Kangoo E-Tech eléctrico. El importe eléctrico se anuncia junto a una ayuda Auto+ adicional de 4.500 €, sujeta a condiciones. La ficha técnica de motores menciona Blue dCi 115, pero el configurador y la página de precios vigentes consultados no lo ofrecen como opción configurable; por eso no se presenta como motorización actual con precio base confirmado.',
    sourceLabel: 'Precios oficiales Renault Kangoo y configurador',
    sourceUrl: 'https://www.renault.es/turismos/renault-kangoo/configurador.html',
    versions: [
      { price: 'Desde 27.469 € (authentic)', priceType: 'Precio de configuración oficial para Blue dCi 95, consultado 5/11/2026.' },
      { price: 'Desde 35.260 € (equilibre)', priceType: 'Precio oficial publicado para E-Tech eléctrico; Renault anuncia Auto+ −4.500 € por separado, sujeto a condiciones.' },
    ],
  },
  'grand-kangoo': {
    basePrice: '32.439 €',
    note: 'Renault España publica 32.439 € para Grand Kangoo techno Blue dCi 115 y 38.080 € para la versión E-Tech eléctrica equilibre. En la eléctrica Renault anuncia además Auto+ de 4.500 €, sujeto a condiciones.',
    sourceLabel: 'Precios oficiales Renault Grand Kangoo',
    sourceUrl: 'https://www.renault.es/turismos/grand-kangoo/precios-versiones.html?gradeCode=ENS_MDL3PSP1SERIELIM3',
    versions: [
      { price: 'Desde 32.439 € (techno)', priceType: 'Precio oficial publicado para Blue dCi 115, consultado 5/11/2026.' },
      { price: 'Desde 38.080 € (equilibre)', priceType: 'Precio oficial publicado para E-Tech eléctrico; Renault anuncia Auto+ −4.500 € por separado, sujeto a condiciones.' },
    ],
  },
  'trafic-combi': {
    basePrice: '44.469 €',
    note: 'PVP de referencia extraído de los precios por motor del configurador oficial Renault España, consultado el 5 de noviembre de 2026. El configurador también muestra precios promocionales «desde» distintos según motor y configuración; aquí se indica el startingPrice de cada motorización, no la oferta condicionada.',
    sourceLabel: 'Configurador oficial Renault Trafic Combi',
    sourceUrl: 'https://www.renault.es/turismos/trafic/configurador.html',
    versions: [
      { price: 'Desde 44.469 €', priceType: 'PVP de referencia del configurador para Blue dCi 110; configuración de acceso.' },
      { price: 'Desde 46.727 €', priceType: 'PVP de referencia del configurador para Blue dCi 150 manual.' },
      { price: 'Desde 49.769 €', priceType: 'PVP de referencia del configurador para Blue dCi 150 automático EAG9.' },
      { price: 'Desde 51.033 €', priceType: 'PVP de referencia del configurador para Blue dCi 170 automático EAG9.' },
    ],
  },
  'trafic-spaceclass': {
    basePrice: '53.747 €',
    note: 'PVP de referencia extraído de los precios por motor del configurador oficial Renault España, consultado el 5 de noviembre de 2026. Las páginas públicas muestran además precios «desde» de configuración/oferta y pueden variar por carrocería, extras y campaña; el PVP se identifica por motor sin sumar descuentos condicionados.',
    sourceLabel: 'Configurador oficial Renault Trafic SpaceClass',
    sourceUrl: 'https://www.renault.es/turismos/trafic-spaceclass/configurador.html',
    versions: [
      { price: 'Desde 53.747 €', priceType: 'PVP de referencia del configurador para Blue dCi 150 manual.' },
      { price: 'Desde 56.790 €', priceType: 'PVP de referencia del configurador para Blue dCi 150 automático EAG9.' },
      { price: 'Desde 61.599 €', priceType: 'PVP de referencia del configurador para Blue dCi 170 automático EAG9.' },
    ],
  },
};

const modelPageRecords: ModelPageData[] = [
  ...fiatModels.map((model) => {
    const pricing = fiatPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios Fiat para ${model.modelSlug}.`);
    const unknownVersionNames = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (unknownVersionNames.length) {
      throw new Error(`Fiat ${model.modelSlug} contiene precios para versiones que no existen: ${unknownVersionNames.join(', ')}.`);
    }
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      ...(pricing.basePricePending ? { basePricePending: true } : {}),
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precios publicados por motorización',
      priceNote: pricing.note,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        const normalizedType = /^Híbrido no enchufable/i.test(version.type ?? '')
          ? version.type
          : formatted.type;
        return {
          ...formatted,
          ...(normalizedType ? { type: normalizedType } : {}),
          ...(price ?? {}),
        };
      }),
    };
  }),
  ...jeepModels.map((model) => {
    const pricing = jeepPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios Jeep para ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      priceOptions: [
        ...model.versions.map((version) => {
          const price = pricing.versionPrices[version.name];
          return {
            name: version.name,
            ...(price?.price ? { price: price.price } : {}),
            priceType: price?.priceType ?? 'Pendiente de verificación individual; consulta la nota de precios.',
          };
        }),
        ...pricing.offers,
      ],
      versionPriceHeading: 'PVP de catálogo y ofertas al contado por versión',
      priceNote: pricing.note,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        return {
          ...formatted,
          ...(model.modelSlug === 'avenger' && version.name === 'Full Electric 54 kWh'
            ? { maxTorque: '260 Nm (1.750 rpm)' }
            : {}),
          ...(price ?? { priceType: 'Pendiente de verificación individual; consulta la nota de precios.' }),
        };
      }),
    };
  }),
  ...miniModels.map((model) => {
    const pricing = miniPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de MINI ${model.modelSlug}.`);
    return {
      ...model,
      basePricePending: pricing.basePricePending,
      basePriceLabel: 'Precio Base',
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      versionPriceHeading: 'PVP de catálogo y ofertas al contado por versión',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...lexusModels.map((model) => {
    const pricing = lexusPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Lexus ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      ...(pricing.basePricePending ? { basePricePending: true } : {}),
      basePriceLabel: 'Precio Base',
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      versionPriceHeading: 'PVP de catálogo y ofertas por versión',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...hondaModels.map((model) => {
    const pricing = hondaPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de Honda ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      versionPriceHeading: 'PVP de catálogo y ofertas al contado por versión',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...suzukiModels.map((model) => {
    const pricing = suzukiPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de Suzuki ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      versionPriceHeading: 'Precios base y precios anunciados por acabado',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...geelyModels.map((model) => {
    const pricing = geelyPriceData[model.modelSlug as keyof typeof geelyPriceData];
    if (!pricing) throw new Error(`Falta el registro de precios Geely para ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      ...(pricing.basePrice ? {} : { basePricePending: true }),
      basePriceLabel: pricing.basePriceLabel,
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      versionPriceHeading: pricing.versionPriceHeading,
      priceNote: pricing.note,
      ...(pricing.priceOptions ? { priceOptions: pricing.priceOptions } : {}),
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name as keyof typeof pricing.versionPrices];
        return { ...formatted, ...(price ?? {}) };
      }),
    };
  }),
  ...mitsubishiModels.map((model) => {
    const pricing = mitsubishiPriceData[model.modelSlug as keyof typeof mitsubishiPriceData];
    if (!pricing) throw new Error(`Falta el precio base verificado de Mitsubishi ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'PVP de catálogo y ofertas oficiales por motorización y acabado',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: model.sources.some(({ url }) => url === pricing.sourceUrl)
        ? model.sources
        : [...model.sources, source(`Mitsubishi España: tarifa oficial de ${model.modelSlug}, octubre de 2026`, pricing.sourceUrl)],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        if (!formatted.maxTorque) return formatted;
        const torqueLabel = /GLP|bifuel/i.test(`${version.name} ${version.type ?? ''}`)
          ? 'Motor térmico (gasolina/GLP): '
          : 'Motor térmico: ';
        return {
          ...formatted,
          maxTorque: `${torqueLabel}${formatted.maxTorque.replace(/^Térmico:\s*/i, '')}`,
        };
      }),
    };
  }),
  ...lynkCoModels.map((model) => {
    const pricing = lynkCoPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de Lynk & Co ${model.modelSlug}.`);
    return {
      ...model,
      basePricePending: true,
      basePriceLabel: 'Precio base pendiente',
      basePriceNote: 'Los importes del configurador incluyen el Plan Auto+, sujeto a aprobación definitiva y disponibilidad de fondos. No se publican como PVP base hasta confirmar con Lynk & Co el precio sin esa condición.',
      versionPriceHeading: 'Importes del configurador y ofertas vigentes por acabado',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...porscheModels.map((model) => {
    const pricing = porschePriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de Porsche ${model.modelSlug}.`);
    const missingVersions = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    const unknownVersions = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (missingVersions.length || unknownVersions.length) {
      throw new Error(`Precios de Porsche ${model.modelSlug} no coinciden con sus motorizaciones: faltan ${missingVersions.map(({ name }) => name).join(', ') || 'ninguna'}; sobran ${unknownVersions.join(', ') || 'ninguna'}.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precios base publicados por versión y motorización',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '13 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => ({
        ...formatMotorTableVersion(version),
        price: pricing.versionPrices[version.name],
        priceType: porscheBasePriceType,
      })),
    };
  }),
  ...kgmModels.map((model) => {
    const pricing = kgmPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de KGM ${model.modelSlug}.`);
    const offerNote = model.modelSlug === 'musso'
      ? `KGM anuncia aparte un precio promocional desde ${pricing.advertisedOffer}, pero advierte que las ofertas de Musso se dirigen a profesionales y no incluyen IVA ni impuesto de matriculación; no equivalen a una oferta final para particulares. Solicita al concesionario una propuesta minorista con impuestos y condiciones completos.`
      : `KGM anuncia aparte un precio promocional desde ${pricing.advertisedOffer}, con descuentos sujetos a condiciones y vigencia de campaña hasta final de mes; no se mezcla con el precio base.`;
    const taxNote = model.modelSlug === 'musso'
      ? ''
      : ' KGM indica que sus precios recomendados para la gama SUV son válidos en Península y Baleares e incluyen IVA, transporte e impuesto de matriculación cuando corresponde; el concesionario puede añadir gastos de matriculación.';
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por motorización y acabado',
      priceNote: `Consulta: 8 de noviembre de 2026. Cada importe corresponde al campo «precio_inicial» del configurador oficial para la combinación indicada, antes de aplicar sus campos de descuento promocional y de financiación. ${offerNote}${taxNote}`,
      priceOptions: pricing.options.map(({ name, price, trim }) => ({
        name,
        price,
        priceType: `Precio base del acabado ${trim}, sin promociones`,
      })),
      reviewedAt: '8 de noviembre de 2026',
      sources: [...model.sources, source('KGM España: configurador, motorizaciones y precios consultados el 8 de noviembre de 2026', pricing.sourceUrl)],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...landRoverModels.map((model) => {
    const pricing = landRoverPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio de partida anunciado para Land Rover ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por motorización',
      priceNote: `Consulta: 9 de noviembre de 2026. ${pricing.note} La página de catálogo de Land Rover España publica precios «Desde» por familia; cuando el fabricante no identifica el motor, acabado y precio al contado de cada versión, se indica como pendiente y se registra en precios-pendientes.txt.`,
      priceOptions: model.versions.map((version) => ({
        name: version.name,
        ...pricing.versionPrices?.[version.name],
        priceType: pricing.versionPrices?.[version.name]?.priceType ?? 'Precio individual no publicado de forma verificable en la página consultada',
      })),
      reviewedAt: '9 de noviembre de 2026',
      sources: [
        ...model.sources,
        source('Land Rover España: precios de partida de la gama, consultados el 9 de noviembre de 2026', landRoverRangePriceSource),
        source('Land Rover España: ficha de modelo y precios por acabado', pricing.sourceUrl),
      ],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...xpengModels.map((model) => {
    const pricing = xpengPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de XPENG ${model.modelSlug}.`);
    const missingPriceRecords = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    if (missingPriceRecords.length) {
      throw new Error(`Falta revisar el registro de precios de XPENG ${model.modelSlug}: ${missingPriceRecords.map(({ name }) => name).join(', ')}.`);
    }
    return {
      ...model,
      basePriceLabel: 'Precio Base',
      basePricePending: true,
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      versionPriceHeading: 'Precios anunciados por XPENG España',
      priceNote: pricing.note,
      priceOptions: model.versions.map((version) => ({ name: version.name, ...pricing.versionPrices[version.name] })),
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        return model.modelSlug === 'l03' && version.powertrainGroup === 'mixed'
          ? { ...formatted, displacement: 'Térmico: 1,5 l (extensor de autonomía)' }
          : formatted;
      }),
    };
  }),
  ...skodaModels.map((model) => {
    const pricing = skodaPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios Škoda para ${model.modelSlug}.`);
    const unlistedVersions = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    if (unlistedVersions.length) {
      throw new Error(`Falta revisar el precio de estas versiones de Škoda ${model.modelSlug}: ${unlistedVersions.map(({ name }) => name).join(', ')}.`);
    }
    const extraPrices = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (extraPrices.length) {
      throw new Error(`El registro de precios Škoda ${model.modelSlug} contiene versiones que no existen: ${extraPrices.join(', ')}.`);
    }
    return {
      ...model,
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      basePriceLabel: 'Precio Base',
      basePricePending: true,
      versionPriceHeading: 'Precio publicado por versión (ofertas condicionadas)',
      priceNote: pricing.note,
      priceOptions: model.versions.map((version) => ({ name: version.name, ...pricing.versionPrices[version.name] })),
      reviewedAt: '11 de noviembre de 2026',
      sources: [
        ...model.sources,
        ...pricing.sourceUrls.map((url) => source(
          url.includes('/ofertas-home-cpc') ? 'Škoda España: ofertas y condiciones comerciales' : url.includes('price-list') || url.includes('pricelist') ? 'Škoda España: lista oficial de precios publicada' : 'Škoda España: ficha del modelo',
          url,
        )),
      ],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...citroenModels.map((model) => {
    const pricing = citroenPriceData[model.modelSlug as keyof typeof citroenPriceData];
    if (!pricing) {
      if (model.modelSlug !== 'c5-x') throw new Error(`Falta el precio base verificado de Citroën ${model.modelSlug}.`);
      return { ...model, basePriceLabel: 'Precio Base', versions: model.versions.map(formatMotorTableVersion) };
    }
    const versionPrices = pricing.versionPrices as Record<string, { price: string; priceType: string }>;
    if (model.versions.length !== Object.keys(versionPrices).length) {
      throw new Error(`El catálogo de precios de Citroën ${model.modelSlug} no coincide con sus versiones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio anunciado por motorización',
      priceNote: pricing.note,
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources.map(({ label, url }) => source(label, url))],
      versions: model.versions.map((version) => {
        const price = versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio de Citroën ${model.modelSlug}, versión ${version.name}.`);
        return { ...formatMotorTableVersion(version), ...price };
      }),
    };
  }),
  ...dsModels.map((model) => {
    const pricing = dsPriceData[model.modelSlug as keyof typeof dsPriceData];
    if (!pricing) throw new Error(`Falta el registro de precios DS para ${model.modelSlug}.`);
    const versionPrices = pricing.versionPrices as Record<string, { price: string; priceType: string }>;
    if (model.versions.length !== Object.keys(versionPrices).length) {
      throw new Error(`El catálogo de precios DS ${model.modelSlug} no coincide con sus motorizaciones.`);
    }
    return {
      ...model,
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      basePriceLabel: 'Precio anunciado por motorización',
      versionPriceHeading: 'Precios mostrados por motorización',
      priceNote: pricing.note,
      reviewedAt: '6 de noviembre de 2026',
      sources: [...model.sources, source('DS Store: configurador y precios consultados el 6 de noviembre de 2026', pricing.sourceUrl)],
      versions: model.versions.map((version) => {
        const price = versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio DS de ${model.modelSlug}, versión ${version.name}.`);
        return { ...formatMotorTableVersion(version), ...price };
      }),
    };
  }),
  ...audiModels.map((model) => {
    const pricing = audiPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Audi ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      basePriceLabel: 'Precio Base',
      priceNote: pricing.note,
      reviewedAt: '6 de noviembre de 2026',
      sources: [
        ...model.sources,
        source('Gama, precios oficiales y configurador de Audi España; consulta de noviembre de 2026', pricing.sourceUrl),
      ],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        return {
          ...formatted,
          ...(price ? { price: price.price, priceType: price.priceType } : {}),
        };
      }),
    };
  }),
  ...volvoModels.map((model) => {
    const pricing = volvoPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base anunciado de Volvo ${model.modelSlug}.`);
    const missingVersions = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    if (missingVersions.length) {
      throw new Error(`Falta el precio oficial de Volvo ${model.modelSlug}: ${missingVersions.map(({ name }) => name).join(', ')}.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base anunciado por motorización',
      priceNote: pricing.note,
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, source(`Precios y versiones oficiales del Volvo ${model.modelSlug}; consulta 11/11/2026`, pricing.sourceUrl)],
      versions: model.versions.map((version) => ({
        ...formatMotorTableVersion(version),
        ...pricing.versionPrices[version.name],
      })),
    };
  }),
  ...mazdaModels.map((model) => {
    const pricing = mazdaPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Mazda ${model.modelSlug}.`);
    const missingVersions = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    if (missingVersions.length) {
      throw new Error(`Falta el precio oficial de Mazda ${model.modelSlug}: ${missingVersions.map(({ name }) => name).join(', ')}.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por motorización y acabado de acceso',
      priceNote: pricing.note,
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sourceUrls.map(({ label, url }) => source(label, url))],
      versions: model.versions.map((version) => ({
        ...formatMotorTableVersion(version),
        ...pricing.versionPrices[version.name],
      })),
    };
  }),
  ...daciaModels.map((model) => ({ ...model, versions: model.versions.map(formatMotorTableVersion) })),
  ...changanModels.map((model) => {
    const pricing = changanPriceData[model.modelSlug as keyof typeof changanPriceData];
    if (!pricing) throw new Error(`Falta el precio base oficial de Changan ${model.modelSlug}.`);
    const versionPrices = pricing.versionPrices as Record<string, { price: string; priceType: string }>;
    if (model.versions.length !== Object.keys(versionPrices).length) {
      throw new Error(`El catálogo de precios de Changan ${model.modelSlug} no coincide con sus versiones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: pricing.basePriceLabel,
      versionPriceHeading: pricing.versionPriceHeading,
      priceNote: pricing.note,
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources.map(({ label, url }) => source(label, url))],
      versions: model.versions.map((version) => {
        const price = versionPrices[version.name];
        if (!price) throw new Error(`Falta el PVPR de Changan ${model.modelSlug}, versión ${version.name}.`);
        return { ...formatMotorTableVersion(version), ...price };
      }),
    };
  }),
  ...omodaJaecooModels.map((model) => {
    if (model.brandSlug === 'omoda') {
      const pricing = omodaPriceData[model.modelSlug];
      if (!pricing) throw new Error(`Falta el registro de precios de OMODA ${model.modelSlug}.`);
      return {
        ...model,
        basePrice: pricing.basePrice,
        basePriceLabel: pricing.basePriceLabel,
        versionPriceHeading: pricing.versionPriceHeading,
        priceNote: pricing.note,
        priceOptions: pricing.options,
        reviewedAt: '11 de noviembre de 2026',
        sources: [
          ...model.sources,
          source(pricing.sourceLabel, pricing.sourceUrl),
          ...(pricing.extraSources ?? []).map(({ label, url }) => source(label, url)),
        ],
        versions: model.versions.map(formatMotorTableVersion),
      };
    }
    if (model.brandSlug !== 'jaecoo') return { ...model, versions: model.versions.map(formatMotorTableVersion) };
    const pricing = jaecooPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de JAECOO ${model.modelSlug}.`);
    return {
      ...model,
      basePriceLabel: pricing.basePriceLabel,
      versionPriceHeading: pricing.versionPriceHeading,
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '8 de noviembre de 2026',
      sources: [
        ...model.sources,
        source(pricing.sourceLabel, pricing.sourceUrl),
        ...(pricing.extraSources ?? []).map(({ label, url }) => source(label, url)),
        ...(pricing.promotionUrl ? [source('Promoción oficial consultada; importes máximos condicionados', pricing.promotionUrl)] : []),
      ],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...leapmotorModels.map((model) => {
    const pricing = leapmotorPriceData[model.modelSlug as keyof typeof leapmotorPriceData];
    if (!pricing) throw new Error(`Falta el registro de precios Leapmotor ${model.modelSlug}.`);
    const extraVersionPrices = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (extraVersionPrices.length) {
      throw new Error(`Leapmotor ${model.modelSlug} tiene precios para versiones que no existen: ${extraVersionPrices.join(', ')}.`);
    }
    return {
      ...model,
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precios publicados por motorización',
      priceNote: pricing.note,
      priceOptions: model.versions.map((version) => {
        const versionPrice = (pricing.versionPrices as Record<string, { price: string; priceType: string }>)[version.name];
        return versionPrice ? { name: version.name, ...versionPrice } : { name: version.name };
      }),
      reviewedAt: '9 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...bydModels.map((model) => {
    const pricing = bydPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base oficial de BYD ${model.modelSlug}.`);
    if (model.versions.length !== Object.keys(pricing.versionPrices).length) {
      throw new Error(`El catálogo de precios de BYD ${model.modelSlug} no coincide con sus versiones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'PVPR por versión y acabado',
      priceNote: pricing.note ?? bydPriceNote,
      reviewedAt: '6 de noviembre de 2026',
      sources: [
        ...model.sources,
        source(
          pricing.sourceLabel ?? 'Precios PVPR de BYD España para Península y Baleares; relación publicada en agosto de 2026 y consultada el 6 de noviembre de 2026',
          pricing.sourceUrl ?? bydPriceSource,
        ),
      ],
      versions: model.versions.map((version) => {
        const price = pricing.versionPrices[version.name];
        if (!price) throw new Error(`Falta el PVPR de BYD ${model.modelSlug}, versión ${version.name}.`);
        return {
          ...formatMotorTableVersion(version),
          price,
          priceType: 'PVPR recomendado por BYD; sin campañas ni ayudas',
        };
      }),
    };
  }),
  ...mgModels.map((model) => {
    const pricing = mgPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de MG ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por versión o acabado',
      priceNote: pricing.note,
      priceOptions: pricing.options,
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, { label: pricing.sourceLabel, url: pricing.sourceUrl }],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...peugeotModels.map((model) => ({ ...model, versions: model.versions.map(formatMotorTableVersion) })),
  ...kiaModels.map((model) => ({ ...model, versions: model.versions.map(formatKiaMotorVersion) })),
  ...mercedesModels.map((model) => {
    const pricing = mercedesPriceData[model.modelSlug];
    const referencePricing = mercedesReferencePriceData[model.modelSlug];
    if (!pricing?.basePrice) throw new Error(`Falta el precio base oficial de Mercedes-Benz ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: referencePricing?.basePrice ?? pricing.basePrice,
      basePriceLabel: 'Precio Base',
      priceNote: model.modelSlug === 'sl'
        ? `${mercedesPriceNote} El importe de 259.931,24 € para el Mercedes-AMG SL 63 S E Performance procede de la lista facilitada por el usuario; no constan fuente ni condiciones comerciales y no se presenta como tarifa oficial.`
        : mercedesPriceNote,
      sources: [
        ...model.sources,
        { label: 'Catálogo y configurador de Mercedes-Benz España, consulta de noviembre de 2026', url: 'https://www.mercedes-benz.es/passengercars/models.html' },
        ...(referencePricing ? [
          { label: 'Precios y gama Mercedes-Benz en Diariomotor', url: 'https://www.diariomotor.com/marcas/mercedes/' },
          { label: 'Mercedes-Benz nuevos en Coches.net', url: 'https://www.coches.net/mercedes-benz/nuevo/km-0/' },
        ] : []),
      ],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const referencePrice = referencePricing?.versionPrices[version.name];
        if (referencePrice) return {
          ...formatted,
          price: referencePrice,
          priceType: referencePricing?.versionPriceTypes?.[version.name] ?? mercedesReferencePriceType,
        };
        const officialPrice = pricing.versionPrices?.[version.name];
        return { ...formatted, ...(officialPrice ? { price: officialPrice, priceType: 'Precio «desde» publicado por Mercedes-Benz España' } : {}) };
      }),
    };
  }),
  ...bmwModels.map((model) => {
    const pricing = bmwPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios BMW para ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      basePriceLabel: 'Precio Base',
      priceNote: pricing.note,
      sources: [
        ...model.sources,
        source('Gama oficial BMW España y precios de catálogo, consulta de noviembre de 2026', bmwPriceSource),
        source('Configurador oficial BMW España, consulta de noviembre de 2026', bmwConfiguratorSource),
      ],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        return {
          ...formatted,
          ...(price ? { price, priceType: 'Precio de catálogo anunciado por BMW España; sin gastos de transporte.' } : {}),
        };
      }),
    };
  }),
  ...toyotaModels.filter((model) => toyotaCommercialDetails[model.modelSlug]).map(addToyotaCommercialDetails),
  ...renaultModels.map((model) => {
    const pricing = renaultPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base oficial de Renault ${model.modelSlug}.`);
    if (model.versions.length !== pricing.versions.length) {
      throw new Error(`El catálogo de precios de Renault ${model.modelSlug} no coincide con sus motorizaciones.`);
    }
    if (!pricing.basePrice || pricing.versions.some(({ price }) => !price)) {
      throw new Error(`Falta un precio base o de motorización para Renault ${model.modelSlug}.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      priceNote: pricing.note,
      sources: [
        ...model.sources,
        source(pricing.sourceLabel, pricing.sourceUrl),
        source('Tarifa oficial Renault España de noviembre de 2026', renaultNovemberPriceSheet),
      ],
      versions: model.versions.map((version, index) => {
        const formattedVersion = formatMotorTableVersion(version);
        return { ...version, ...formattedVersion, ...pricing.versions[index] };
      }),
      brandSlug: 'renault',
      reviewedAt: '5 de noviembre de 2026',
    };
  }),
  ...volkswagenModels.map((model) => ({ ...model, versions: model.versions.map(formatMotorTableVersion) })),
  ...hyundaiModels.map((model) => ({ ...model, versions: model.versions.map(formatMotorTableVersion) })),
  ...seatModels.map((model) => ({ ...model, versions: model.versions.map(formatMotorTableVersion) })),
  ...cupraModels.map((model) => {
    const pricing = cupraPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de ofertas de CUPRA ${model.modelSlug}.`);
    return {
      ...model,
      currentOfferPrice: pricing.currentOfferPrice,
      currentOfferLabel: pricing.currentOfferLabel,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Ofertas al contado por motorización',
      priceNote: cupraPriceNote,
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, source('Ofertas vigentes de CUPRA España, consulta de noviembre de 2026', cupraOffersSource)],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        return price ? { ...formatted, ...price } : formatted;
      }),
    };
  }),
  ...nissanModels.map((model) => {
    const pricing = nissanPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Nissan ${model.modelSlug}.`);
    const missingPrices = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    if (missingPrices.length) {
      throw new Error(`Falta registrar el estado del precio Nissan ${model.modelSlug}: ${missingPrices.map(({ name }) => name).join(', ')}.`);
    }
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por motorización y acabado de acceso',
      priceNote: pricing.note,
      priceOptions: model.versions.map((version) => ({ name: version.name, ...pricing.versionPrices[version.name] })),
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...opelModels.map((model) => {
    const pricing = opelPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio anunciado en Opel Store para ${model.modelSlug}.`);
    const missingPrices = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    const extraPrices = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (missingPrices.length || extraPrices.length) {
      throw new Error(`Los precios Opel de ${model.modelSlug} no coinciden con las motorizaciones. Sin precio: ${missingPrices.map(({ name }) => name).join(', ') || 'ninguna'}. Sin motorización: ${extraPrices.join(', ') || 'ninguna'}.`);
    }
    return {
      ...model,
      currentOfferPrice: `Desde ${pricing.startingPrice}`,
      currentOfferLabel: 'Precio Base',
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base al contado por motorización',
      priceNote: opelPriceNote,
      priceOptions: model.versions.map((version) => ({ name: version.name, ...pricing.versionPrices[version.name] })),
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sourceUrls.map(({ label, url }) => source(label, url))],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...ebroModels.map((model) => ({
    ...model,
    versions: model.versions.map((version) => {
      const formatted = formatMotorTableVersion(version);
      return version.additionalTorque
        ? { ...formatted, maxTorque: [formatted.maxTorque, version.additionalTorque].filter(Boolean).join('; ') }
        : formatted;
    }),
  })),
  ...fordModels.map((model) => {
    const pricing = fordPriceData[model.modelSlug];
    return {
      ...model,
      ...(pricing?.currentOfferPrice ? {
        currentOfferPrice: pricing.currentOfferPrice,
        currentOfferLabel: pricing.currentOfferLabel,
      } : {}),
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio anunciado por motorización',
      priceNote: fordPriceNote,
      reviewedAt: '8 de noviembre de 2026',
      sources: [
        ...model.sources,
        source('Ford España: gama y precios anunciados, consulta de noviembre de 2026', fordRangePriceSource),
      ],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const text = `${version.name} ${version.type ?? ''} ${version.displacement} ${version.torqueScope}`;
        const type = /\bPHEV\b|enchufable/i.test(text)
          ? 'Híbrido enchufable · PHEV de gasolina'
          : /\bFHEV\b|híbrido autorrecargable/i.test(text)
            ? 'Híbrido no enchufable · FHEV de gasolina'
            : /\bMHEV\b|microhíbrido/i.test(text)
              ? 'Híbrido no enchufable · MHEV de gasolina'
              : /EcoBlue|diésel|diesel/i.test(text)
                ? 'Diésel'
                : /eléctric|\bBEV\b/i.test(text)
                  ? 'Eléctrico'
                  : 'Gasolina';
        const price = pricing?.versionPrices?.[version.name];
        return { ...formatted, type, ...(price ?? {}) };
      }),
    };
  }),
  ...teslaModels.map((model) => {
    const pricing = teslaPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base de Tesla ${model.modelSlug}.`);
    const versionNames = model.versions.map(({ name }) => name);
    const unknownPriceNames = Object.keys(pricing.versionPrices).filter((name) => !versionNames.includes(name));
    if (unknownPriceNames.length || versionNames.length !== Object.keys(pricing.versionPrices).length) {
      throw new Error(`Los precios de Tesla ${model.modelSlug} no coinciden con sus motorizaciones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio publicado por versión',
      priceNote: pricing.note,
      sources: [...model.sources, pricing.source],
      versions: model.versions.map((version) => {
        const price = pricing.versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio de Tesla ${model.modelSlug}: ${version.name}.`);
        return { ...formatMotorTableVersion(version), type: 'Eléctrico', ...price };
      }),
    };
  }),
  ...evoModels.map((model) => {
    const pricing = evoPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base de EVO ${model.modelSlug}.`);
    const versionPrices = pricing.versionPrices;
    if (model.versions.length !== Object.keys(versionPrices).length) {
      throw new Error(`El catálogo de precios de EVO ${model.modelSlug} no coincide con sus motorizaciones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'PVP recomendado al contado por motorización',
      priceNote: pricing.note,
      reviewedAt: '6 de noviembre de 2026',
      sources: [...model.sources, pricing.priceSource],
      versions: model.versions.map((version) => {
        const price = versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio de EVO ${model.modelSlug}, versión ${version.name}.`);
        const formatted = formatMotorTableVersion(version);
        const normalizedType = /gasolina\/GLP/i.test(version.name)
          ? 'GLP · bifuel gasolina/GLP (Thermohybrid)'
          : /\bHEV\b/i.test(version.name)
            ? 'Híbrido no enchufable (HEV gasolina + eléctrico)'
            : formatted.type;
        return { ...formatted, type: normalizedType, ...price };
      }),
    };
  }),
  ...alfaRomeoModels.map((model) => {
    const pricing = alfaRomeoPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Alfa Romeo para ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      priceNote: pricing.note,
      sources: [
        ...model.sources,
        source('Configurador oficial de Alfa Romeo España; consulta 6 de noviembre de 2026', alfaRomeoPriceSource),
        source('Ofertas oficiales de Alfa Romeo España, vigentes hasta el 30 de noviembre de 2026', alfaRomeoOfferSource),
      ],
      versions: model.versions.map((version) => {
        const formatted = formatMotorTableVersion(version);
        const price = pricing.versionPrices[version.name];
        return price ? { ...formatted, ...price } : formatted;
      }),
    };
  }),
  ...subaruModels.map((model) => {
    const pricing = subaruPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios Subaru para ${model.modelSlug}.`);
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice, basePriceLabel: 'Precio Base' } : { basePriceLabel: 'Precio Base', basePricePending: true }),
      ...(pricing.currentOfferPrice ? { currentOfferPrice: pricing.currentOfferPrice } : {}),
      ...(pricing.currentOfferLabel ? { currentOfferLabel: pricing.currentOfferLabel } : {}),
      versionPriceHeading: 'Precios publicados por acabado o configuración',
      priceNote: pricing.note,
      priceOptions: pricing.versionPrices,
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...polestarModels.map((model) => {
    const pricing = polestarPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base verificado de Polestar ${model.modelSlug}.`);
    const missingVersions = model.versions.filter((version) => !pricing.versionPrices[version.name]);
    const unknownVersions = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (missingVersions.length || unknownVersions.length) {
      throw new Error(`Precios de Polestar ${model.modelSlug} no coinciden con sus motorizaciones: faltan ${missingVersions.map(({ name }) => name).join(', ') || 'ninguna'}; sobran ${unknownVersions.join(', ') || 'ninguna'}.`);
    }
    const versionPriceOptions = model.versions.map((version) => ({
      name: version.name,
      price: pricing.versionPrices[version.name],
      priceType: polestarBasePriceType,
    }));
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base por motorización y ofertas oficiales vigentes',
      priceNote: pricing.note,
      priceOptions: [...versionPriceOptions, ...(pricing.offers ?? [])],
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map((version) => ({
        ...formatMotorTableVersion(version),
        price: pricing.versionPrices[version.name],
        priceType: polestarBasePriceType,
      })),
    };
  }),
  ...swmModels.map((model) => {
    const pricing = swmPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base publicado por SWM para ${model.modelSlug}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: pricing.heading,
      priceNote: pricing.note,
      priceOptions: pricing.priceOptions,
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...smartModels.map((model) => {
    const pricing = smartPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base publicado por smart para el modelo ${model.modelSlug}.`);
    const extraPrices = Object.keys(pricing.versionPrices).filter(
      (name) => !pricing.versionNames.includes(name),
    );
    if (extraPrices.length) throw new Error(`El registro de precios smart ${model.modelSlug} contiene acabados que no existen: ${extraPrices.join(', ')}.`);
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio anunciado por acabado',
      priceNote: pricing.note,
      priceOptions: pricing.versionNames.map((name) => ({ name, ...pricing.versionPrices[name] })),
      reviewedAt: '11 de noviembre de 2026',
      sources: [...model.sources, ...pricing.sources],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
  ...lanciaModels.map((model) => {
    const pricing = lanciaPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el precio base del modelo Lancia ${model.modelSlug}.`);
    const unknownVersionNames = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (unknownVersionNames.length || model.versions.length !== Object.keys(pricing.versionPrices).length) {
      throw new Error(`El catálogo de precios de Lancia ${model.modelSlug} no coincide con sus motorizaciones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precio base anunciado por motorización',
      priceNote: pricing.note,
      reviewedAt: '9 de noviembre de 2026',
      sources: [...model.sources, source(`Precio de catálogo por versión Lancia ${model.modelSlug}, consulta de noviembre de 2026`, pricing.priceSource)],
      versions: model.versions.map((version) => {
        const price = pricing.versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio de Lancia ${model.modelSlug} ${version.name}.`);
        return { ...formatMotorTableVersion(version), ...price };
      }),
    };
  }),
  ...alpineModels.map((model) => {
    const pricing = alpinePriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios de Alpine para ${model.modelSlug}.`);
    if (model.versions.length !== Object.keys(pricing.versionPrices).length) {
      throw new Error(`El catálogo de precios de Alpine ${model.modelSlug} no coincide con sus versiones.`);
    }
    return {
      ...model,
      basePrice: pricing.basePrice,
      basePriceLabel: 'Precio Base',
      priceNote: pricing.note,
      sources: [
        ...model.sources,
        source(`Alpine España: precios de ${model.modelSlug}, consulta 6 de noviembre de 2026`, pricing.sourceUrl),
      ],
      versions: model.versions.map((version) => {
        const price = pricing.versionPrices[version.name];
        if (!price) throw new Error(`Falta el precio de Alpine ${model.modelSlug} ${version.name}.`);
        return { ...formatMotorTableVersion(version), ...price };
      }),
    };
  }),
  ...maseratiModels.map((model) => {
    const pricing = maseratiPriceData[model.modelSlug];
    if (!pricing) throw new Error(`Falta el registro de precios Maserati para ${model.modelSlug}.`);
    const unknownPrices = Object.keys(pricing.versionPrices).filter(
      (name) => !model.versions.some((version) => version.name === name),
    );
    if (unknownPrices.length) {
      throw new Error(`Maserati ${model.modelSlug} contiene precios para versiones que no existen: ${unknownPrices.join(', ')}.`);
    }
    return {
      ...model,
      ...(pricing.basePrice ? { basePrice: pricing.basePrice } : {}),
      basePriceLabel: 'Precio Base',
      versionPriceHeading: 'Precios «desde» publicados por versión',
      priceNote: pricing.note,
      priceOptions: model.versions.map((version) => ({
        name: version.name,
        ...(pricing.versionPrices[version.name] ?? {
          priceType: 'Precio base pendiente de verificación en la oferta oficial española.',
        }),
      })),
      reviewedAt: '10 de noviembre de 2026',
      sources: [...model.sources, {
        label: `Maserati España: configurador y precios de ${model.modelSlug}, consulta 10 de noviembre de 2026`,
        url: pricing.sourceUrl,
      }],
      versions: model.versions.map(formatMotorTableVersion),
    };
  }),
];

// Precio base por modelo (PVP del configurador oficial), confirmado el 13/11/2026.
// Es la única cifra de precio que se publica por modelo.
const basePriceOverrides: Record<string, string> = {
  'lynk-co/01': '40.995 €',
  'lynk-co/02': '35.495 €',
  'lynk-co/08': '52.995 €',
  'mini/aceman': '33.020 €',
  'mini/cooper-3-puertas': '26.030 €',
  'mini/cooper-5-puertas': '27.030 €',
  'mini/cooper-cabrio': '34.030 €',
  'mini/countryman': '36.030 €',
  'mini/countryman-electrico': '38.620 €',
  'mini/cooper-electrico': '31.020 €',
  'skoda/enyaq': '45.080 €',
  'skoda/enyaq-coupe': '47.480 €',
  'skoda/peaq': '54.550 €',
  'xpeng/l03': '37.500 €',
  'audi/a1': '37.694 €',
  'bmw/serie-7': '129.429 €',
  'bmw/x5': '97.200 €',
  'ford/e-tourneo-custom': '65.890 €',
  'maserati/gt2-stradale': '346.431 €',
  'maserati/mcpura': '245.300 €',
  'maserati/mcpura-cielo': '285.075 €',
  'mg/mg-hs': '27.340 €',
  'nissan/leaf': '28.000 €',
  'cupra/tavascan': '39.010 €',
  'geely/monjaro-em-i': '37.990 €',
  'ds/ds3': '37.500 €',
  'ds/ds7': '57.600 €',
  'ds/n4': '41.435,33 €',
  'ds/n7': '48.000 €',
  'ds/n8': '58.100 €',
  'ebro/s700': '25.990 €',
  'ebro/s800': '30.990 €',
};

// Modelos retirados del directorio: sin precio base confirmado o no disponibles en España.
const removedModelPages = new Set<string>([
  'fiat/doblo',
  'fiat/ulysse',
  'lexus/tz',
  'citroen/ami',
  'citroen/c5-x',
  'ford/ranger',
  'ford/ranger-raptor',
  'ford/transit-custom-nugget',
]);

export const modelPages: ModelPageData[] = modelPageRecords
  .filter((model) => !removedModelPages.has(`${model.brandSlug}/${model.modelSlug}`))
  .map((model) => {
    const key = `${model.brandSlug}/${model.modelSlug}`;
    const record = applyCatalogReferencePrice(model);
    const basePrice = basePriceOverrides[key];
    return {
      ...record,
      ...(basePrice
        ? { basePrice, basePriceLabel: 'Precio Base', basePricePending: false, currentOfferPrice: undefined, currentOfferLabel: undefined, basePriceNote: undefined }
        : {}),
      image: record.image ?? modelImageData[key],
    };
  });


export const getModelPage = (brandSlug: string, modelSlug: string) =>
  modelPages.find((model) => model.brandSlug === brandSlug && model.modelSlug === modelSlug);
