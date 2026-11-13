import type { ModelPageData } from './model-pages';

const reviewedAt = '13 de noviembre de 2026';
const jeep = 'https://www.jeep.es';
const source = (label: string, url: string) => ({ label, url });
const notPublished = '';

type PhotoLicense = 'CC BY 3.0' | 'CC BY-SA 4.0';

function photo(
  assetSlug: string,
  file: string,
  alt: string,
  authorName: string,
  authorUrl: string,
  licenseName: PhotoLicense,
  width: number,
  height: number,
  caption: string,
): NonNullable<ModelPageData['image']> {
  return {
    src: `/images/models/commons/model-jeep-${assetSlug}.jpg`,
    alt,
    caption: `${caption} Imagen redimensionada para web.`,
    width,
    height,
    sourceTitle: file,
    sourceUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
    authorName,
    authorUrl,
    licenseName,
    licenseUrl: licenseName === 'CC BY 3.0'
      ? 'https://creativecommons.org/licenses/by/3.0/deed.es'
      : 'https://creativecommons.org/licenses/by-sa/4.0/deed.es',
  };
}

export const jeepModels: ModelPageData[] = [
  {
    brandSlug: 'jeep',
    modelSlug: 'avenger',
    title: 'Jeep Avenger: motorizaciones y datos técnicos en España | Kilómetro Claro',
    description: 'Compara las versiones gasolina, e-Hybrid, 4xe y eléctricas del Jeep Avenger vendido en España, con potencias y cilindradas verificadas.',
    intro: 'El Avenger es el SUV más pequeño de Jeep y reúne varias formas de propulsión bajo una misma carrocería urbana: gasolina, e-Hybrid, 4xe híbrido con tracción total y eléctrico de batería. Aquí separamos las mecánicas para que el nombre comercial no oculte las diferencias de uso, potencia y recarga.',
    powertrainSummary: 'La ficha técnica española MY27 distingue cuatro configuraciones: gasolina 1.2 de 100 CV, e-Hybrid de 110 CV, 4xe híbrido de 145 CV y eléctrico de 156 CV. En las versiones híbridas Jeep publica la potencia combinada y, además, la potencia del motor térmico y de los eléctricos; esas cifras describen componentes y sistema, y no deben sumarse como si todos alcanzaran su máximo a la vez.',
    usageNote: 'La elección cambia más que el tipo de combustible. El 1.2 de gasolina lleva cambio manual y tracción delantera; el e-Hybrid asocia hibridación ligera y transmisión automática; el 4xe añade un motor eléctrico trasero para ofrecer tracción total sin ser enchufable; el eléctrico necesita recarga externa y no tiene motor térmico. La autonomía WLTP del Avenger eléctrico varía por configuración y se anuncia entre 389 y 400 km. Comprueba el acabado y la ficha vinculada al pedido, porque equipamiento, homologación y disponibilidad pueden variar.',
    versions: [
      { name: '1.2 GSE T3 100 MT FWD', type: 'Gasolina', power: '100 CV (74 kW)', displacement: '1.199 cm³', maxTorque: '205 Nm', torqueScope: 'Motor de gasolina', torqueRpm: '1.750 rpm' },
      { name: '1.2 e-Hybrid 110 DCT6 FWD', type: 'Híbrido no enchufable · MHEV gasolina 48 V', powertrainGroup: 'mild-hybrid', power: 'Sistema: 110 CV (81 kW); térmico: 100 CV (74 kW); eléctrico: 28 CV (21 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'La ficha no aclara a qué subsistema corresponde el par máximo', torqueRpm: notPublished },
      { name: '1.2 4xe Hybrid 145 DCT6 eAWD', type: 'Híbrido no enchufable · gasolina 4xe eAWD', power: 'Sistema: 145 CV (107 kW); térmico: 136 CV (100 kW); eléctrico delantero: 28 CV (21 kW); eléctrico trasero: 28 CV (21 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'La ficha no aclara a qué subsistema corresponde el par máximo', torqueRpm: notPublished },
      { name: 'Full Electric 54 kWh', type: 'Eléctrico', power: '156 CV (115 kW)', displacement: '—', maxTorque: '260 Nm', torqueScope: 'Motor eléctrico', torqueRpm: '1.750 rpm' },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV urbano de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.084 mm; hasta 4.088 mm en 4xe' },
      { label: 'Tracción', value: 'Delantera o total, según motorización' },
    ],
    figures: [
      { label: 'Autonomía eléctrica WLTP', value: '389–400 km, según configuración' },
      { label: 'Batería del Full Electric', value: '54 kWh brutos; 51 kWh netos' },
      { label: 'Consumo eléctrico homologado', value: '15,5–15,9 kWh/100 km' },
    ],
    specNote: 'La tabla técnica del catálogo oficial Avenger MY27 (edición de mayo de 2026) publica 205 Nm a 1.750 rpm para el gasolina y 260 Nm a 1.750 rpm para el eléctrico. En las dos versiones híbridas también aparece un par y un régimen, pero Jeep no identifica si la cifra se refiere al motor térmico o al conjunto; por eso se omite en esas filas. Las potencias de los híbridos distinguen sistema, motor térmico y motores eléctricos.',
    officialUrl: `${jeep}/nuevo-jeep-avenger/gasolina-hibrido`,
    technicalUrl: `${jeep}/content/dam/jeep/es/models/pdf/Avenger-MY27.pdf`,
    sources: [
      source('Catálogo Jeep España: modelos y motorizaciones actuales', `${jeep}/catalogo`),
      source('Jeep Avenger MY27: especificaciones técnicas (mayo de 2026)', `${jeep}/content/dam/jeep/es/models/pdf/Avenger-MY27.pdf`),
      source('Jeep Avenger gasolina y e-Hybrid', `${jeep}/nuevo-jeep-avenger/gasolina-hibrido`),
      source('Jeep Avenger eléctrico', `${jeep}/nuevo-jeep-avenger/electrico`),
      source('Jeep Avenger 4xe híbrido', `${jeep}/nuevo-jeep-avenger/4xe-hibrido`),
    ],
    image: photo(
      'avenger',
      '2023 Jeep Avenger front view.png',
      'Jeep Avenger amarillo fotografiado en el Salón del Automóvil de París de 2022.',
      'Autosdeprimera',
      'https://www.youtube.com/watch?v=nSpprXtHMUc',
      'CC BY 3.0',
      1280,
      768,
      'La imagen muestra un Avenger de lanzamiento; acabado, color y configuración pueden diferir de la gama española actual.',
    ),
    reviewedAt,
  },
  {
    brandSlug: 'jeep',
    modelSlug: 'compass',
    title: 'Jeep Compass: motores e-Hybrid, híbrido enchufable y eléctricos | Kilómetro Claro',
    description: 'Ficha del Jeep Compass en España: compara el e-Hybrid, el Plug-In Hybrid y las versiones eléctricas de 213, 231 y 375 CV.',
    intro: 'La nueva generación del Compass se comercializa en España con cuatro planteamientos electrificados: e-Hybrid, híbrido enchufable y versiones eléctricas de tracción delantera o 4x4. La tabla reúne sus cifras en un único lugar y diferencia la potencia combinada de las aportaciones térmica y eléctrica cuando Jeep las publica.',
    powertrainSummary: 'Jeep España anuncia 145 CV para el Compass e-Hybrid, desglosados en 136 CV de gasolina y un motor eléctrico de 21 kW. El Plug-In Hybrid ofrece 225 CV combinados. Las versiones Full Electric desarrollan 213 o 231 CV; la nueva variante Compass 4xe Full Electric alcanza 375 CV. La ficha MY26 detalla la cilindrada del e-Hybrid, mientras que la página comercial vigente del Plug-In Hybrid no publica cilindrada ni desglosa qué parte de sus 225 CV corresponde a cada motor.',
    usageNote: 'El e-Hybrid emplea una pequeña batería de 48 V y no se conecta a un cargador; su motor eléctrico apoya al de gasolina. El Plug-In Hybrid sí se enchufa y Jeep declara hasta 90–92 km de autonomía eléctrica WLTP, por lo que su consumo real depende mucho de cargarlo y de la longitud de los trayectos. Las versiones de batería prescinden del motor térmico: la estándar anuncia 74 kWh y hasta 500 km WLTP, la Long Range 96 kWh y hasta 674 km, y el Compass 4xe combina 375 CV con tracción total. Son valores homologados o comerciales que deben compararse con la misma metodología y versión.',
    versions: [
      { name: '1.2 e-Hybrid 145 DCT6 FWD', type: 'Híbrido no enchufable · MHEV gasolina 48 V', powertrainGroup: 'mild-hybrid', power: 'Sistema: 145 CV (106 kW); térmico: 136 CV (100 kW); eléctrico: 28 CV (21 kW)', displacement: '1.199 cm³', maxTorque: notPublished, torqueScope: 'Jeep publica 230 Nm térmicos y 50 Nm eléctricos, pero no sus regímenes; se omiten de la tabla', torqueRpm: notPublished },
      { name: 'Plug-In Hybrid 225 FWD', type: 'Híbrido enchufable · gasolina', power: 'Sistema: 225 CV (165,5 kW)', displacement: 'No publicada en la ficha española vigente', maxTorque: notPublished, torqueScope: 'La ficha publica 350 Nm, pero no el régimen; se omite de la tabla', torqueRpm: notPublished },
      { name: 'Full Electric Standard Range FWD', type: 'Eléctrico', power: '213 CV (157 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Jeep publica 345 Nm, pero no el régimen; se omite de la tabla', torqueRpm: notPublished },
      { name: 'Full Electric Long Range FWD', type: 'Eléctrico', power: '231 CV (170 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Jeep publica 345 Nm, pero no el régimen; se omite de la tabla', torqueRpm: notPublished },
      { name: '4xe Full Electric AWD', type: 'Eléctrico · tracción total', power: '375 CV (280 kW)', displacement: '—', maxTorque: notPublished, torqueScope: 'Jeep publica 345 Nm, pero no el régimen; se omite de la tabla', torqueRpm: notPublished },
    ],
    facts: [
      { label: 'Carrocería', value: 'SUV compacto de cinco puertas' },
      { label: 'Plazas', value: '5' },
      { label: 'Longitud', value: '4.552 mm' },
      { label: 'Tracción', value: 'Delantera o total, según versión' },
    ],
    figures: [
      { label: 'Plug-In Hybrid', value: 'Batería de 17,9 kWh; hasta 90–92 km eléctricos WLTP' },
      { label: 'Full Electric Standard Range', value: '74 kWh; hasta 500 km WLTP' },
      { label: 'Full Electric Long Range', value: '96 kWh; hasta 674 km WLTP' },
      { label: '4xe Full Electric', value: '96,1 kWh netos; 4x4 eléctrico de 375 CV' },
    ],
    specNote: 'Se priorizan las páginas y fichas españolas actuales: Jeep detalla el e-Hybrid 145 como sistema de 136 CV de gasolina más un motor eléctrico de 21 kW, y el Plug-In Hybrid como sistema de 225 CV y batería de 17,9 kWh. En estas páginas no identifica la cilindrada del PHEV ni publica el régimen de los pares, así que no se asignan datos inferidos a esas celdas. Las páginas de los Compass eléctricos publican 345 Nm, pero sin régimen; ese dato tampoco se incluye en la tabla. La ficha MY26, que corresponde a la generación anterior, no se usa para completar el nuevo Compass.',
    officialUrl: `${jeep}/nuevo-jeep-compass/e-hybrid`,
    technicalUrl: `${jeep}/pdfs/compass-my26`,
    sources: [
      source('Catálogo Jeep España: Compass y tecnologías disponibles', `${jeep}/catalogo`),
      source('Jeep Compass e-Hybrid: potencia, batería y motor', `${jeep}/nuevo-jeep-compass/e-hybrid`),
      source('Jeep Compass Plug-In Hybrid: ficha comercial vigente', `${jeep}/nuevo-jeep-compass/plugin-e-hybrid`),
      source('Jeep Compass Full Electric: autonomía estándar y Long Range', `${jeep}/nuevo-jeep-compass/full-electric`),
      source('Jeep Compass 4xe Full Electric: versión de 375 CV', `${jeep}/nuevo-jeep-compass/4xe-electrico`),
    ],
    image: photo(
      'compass',
      'Jeep Compass e (J4U) Auto Zuerich 2025 DSC 3001.jpg',
      'Nueva generación del Jeep Compass expuesta en Auto Zürich 2025.',
      'Alexander Migl',
      'https://commons.wikimedia.org/wiki/User:Alexander-93',
      'CC BY-SA 4.0',
      1280,
      768,
      'Fotografía de la generación J4U presentada en 2025; acabado y motorización de la unidad expuesta pueden variar.',
    ),
    reviewedAt,
  },
];
