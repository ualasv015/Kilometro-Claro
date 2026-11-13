type SubaruPriceOption = {
  name: string;
  price?: string;
  priceType: string;
};

type SubaruPriceEntry = {
  basePrice?: string;
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  versionPrices: SubaruPriceOption[];
  note: string;
  sources: { label: string; url: string }[];
};

const spain = 'https://www.subaru.es';
const electricAnnouncement = `${spain}/blog/nuestra-marca/subaru-presenta-la-nueva-gama-electrica-uncharted-solterra-y-e-outback/`;
const source = (label: string, url: string) => ({ label, url });

// Precios revisados en las páginas oficiales de gama, producto y Subaru Finance
// el 11/11/2026. Separa precio anunciado, oferta al contado, campaña y ayudas.
export const subaruPriceData: Record<string, SubaruPriceEntry> = {
  crosstrek: {
    currentOfferPrice: '32.500 €',
    currentOfferLabel: '2.0i Active · PVP publicado con campaña Subaru',
    versionPrices: [
      { name: '2.0i Active', price: '32.500 €', priceType: 'PVP publicado por Subaru España con campaña comercial; incluye transporte, IVA e impuesto de matriculación general. Subaru Finance muestra 33.250 € al contado para Active en una oferta vigente hasta el 31/12/2026.' },
      { name: '2.0i Field', price: '34.500 €', priceType: 'PVP publicado por Subaru España con campaña comercial; incluye transporte, IVA e impuesto de matriculación general.' },
      { name: '2.0i Touring', price: '37.500 €', priceType: 'PVP publicado por Subaru España con campaña comercial; incluye transporte, IVA e impuesto de matriculación general.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Los precios por acabado publicados en la ficha incluyen campaña comercial. La página muestra además un «desde 30.000 €» sin asociarlo al desglose, que empieza en 32.500 €; Subaru Finance publica 33.250 € al contado para Active, en una oferta vigente hasta el 31/12/2026. Se muestran los importes identificados y se deja pendiente una tarifa base comparable sin campaña para cada acabado.',
    sources: [
      source('Subaru España: Crosstrek, acabados y condiciones de campaña', `${spain}/vehiculos/crosstrek`),
      source('Subaru Finance: precio al contado y vigencia de la oferta Crosstrek Active', `${spain}/finance`),
    ],
  },
  forester: {
    currentOfferPrice: '40.400 €',
    currentOfferLabel: '2.0i Hybrid Active · PVP publicado con campaña Subaru',
    versionPrices: [
      { name: '2.0i Hybrid Active', price: '40.400 €', priceType: 'PVP publicado por Subaru España con campaña comercial. Subaru Finance indica 40.800 € al contado para Active en una oferta vigente hasta el 31/12/2026.' },
      { name: '2.0i Hybrid Field', price: '42.900 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
      { name: '2.0i Hybrid Touring', price: '44.900 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Los precios de la página de gama incluyen campaña comercial; Subaru Finance indica 40.800 € al contado para Active, con oferta vigente hasta el 31/12/2026. La cabecera de gama mantiene un «desde 37.400 €», mientras el primer acabado desglosado es Active por 40.400 €. Se deja pendiente la tarifa base comparable sin campaña y la aclaración de esas diferencias.',
    sources: [
      source('Subaru España: Forester, acabados y condiciones de campaña', `${spain}/vehiculos/forester`),
      source('Subaru Finance: precio al contado y vigencia de la oferta Forester Active', `${spain}/finance`),
    ],
  },
  outback: {
    currentOfferPrice: '41.400 €',
    currentOfferLabel: '2.5i Active · PVP publicado con campaña Subaru',
    versionPrices: [
      { name: '2.5i Active', price: '41.400 €', priceType: 'PVP publicado por Subaru España con campaña comercial. Subaru Finance indica 41.800 € al contado para Active en una oferta vigente hasta el 31/12/2026.' },
      { name: '2.5i Field', price: '43.400 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
      { name: '2.5i Touring', price: '46.800 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
      { name: '2.5i GLP Active', price: '44.150 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
      { name: '2.5i GLP Field', price: '46.150 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
      { name: '2.5i GLP Touring', price: '49.550 €', priceType: 'PVP publicado por Subaru España con campaña comercial.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Los precios por acabado visibles en la gama incluyen campaña comercial. Subaru Finance publica 41.800 € al contado para el Outback 2.5 Active, con oferta hasta el 31/12/2026. La cabecera de gama muestra «desde 38.400 €», sin correspondencia con el desglose que comienza en 41.400 €. No se ha localizado una tarifa comparable sin campaña; el precio base queda pendiente.',
    sources: [
      source('Subaru España: Outback, versiones y condiciones de campaña', `${spain}/vehiculos/outback/gama`),
      source('Subaru Finance: precio al contado y vigencia de la oferta Outback Active', `${spain}/finance`),
    ],
  },
  uncharted: {
    basePrice: '33.500 €',
    currentOfferPrice: '30.125 €',
    currentOfferLabel: 'Active · oferta mostrada con campaña y Auto+ condicionado',
    versionPrices: [
      { name: 'Active 4×2 · precio anunciado antes de ayudas', price: '33.500 €', priceType: 'Precio de partida oficial antes de Plan Auto+, CAES e IRPF; Subaru Finance confirma el mismo precio al contado para la configuración Active.' },
      { name: 'Active 4×2 · oferta publicada', price: '30.125 €', priceType: 'Importe mostrado en la ficha; incluye descuentos y 3.375 € del Plan Auto+, sujetos a elegibilidad, requisitos y disponibilidad de fondos.' },
      { name: 'Field 4×2 Long Range', price: '35.325 €', priceType: 'Importe mostrado en la ficha con campaña y ayudas según sus condiciones; no equivale a PVP base sin esas condiciones.' },
      { name: 'Touring AWD', price: '40.475 €', priceType: 'Importe mostrado en la ficha con campaña y ayudas según sus condiciones; no equivale a PVP base sin esas condiciones.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Subaru anuncia 33.500 € antes de ayudas y Subaru Finance repite ese precio al contado para Active; la ficha de producto muestra 30.125 € con descuentos y 3.375 € del Plan Auto+, sujeto a requisitos y fondos. Field y Touring solo tienen un importe publicado con condiciones promocionales/ayudas; falta un precio base verificable para esas dos versiones.',
    sources: [
      source('Subaru España: Uncharted, precios por acabado y condiciones legales', `${spain}/vehiculos/uncharted`),
      source('Subaru España: anuncio de precios de la nueva gama eléctrica antes de ayudas', electricAnnouncement),
      source('Subaru Finance: precio al contado de Uncharted Active y condiciones de Auto+', `${spain}/finance`),
    ],
  },
  solterra: {
    basePrice: '41.000 €',
    currentOfferPrice: '43.500 €',
    currentOfferLabel: 'Solterra Field 4×4 · precio al contado publicado hasta 31/12/2026',
    versionPrices: [
      { name: 'Gama renovada · precio de partida', price: '41.000 €', priceType: 'Importe anunciado antes de ayudas y deducciones; Subaru no identifica potencia, batería ni acabado asociados.' },
      { name: 'Field 4×4', price: '43.500 €', priceType: 'Precio al contado publicado en Subaru Finance para esta versión; oferta válida hasta 31/12/2026. El precio financiado puede descontar 3.375 € de Auto+, sujeto a requisitos y fondos.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Subaru anuncia la gama desde 41.000 € antes de ayudas y Subaru Finance publica un precio al contado de 43.500 € para el Field 4×4 (oferta hasta el 31/12/2026). La marca no asigna el precio de partida a una potencia o batería concreta ni ofrece una tarifa por cada versión de la gama renovada; las demás motorizaciones quedan pendientes.',
    sources: [
      source('Subaru España: precio desde y potencias del Solterra renovado', electricAnnouncement),
      source('Subaru Finance: precio al contado del Solterra Field 4×4 y condiciones de Auto+', `${spain}/finance`),
    ],
  },
  'e-outback': {
    basePrice: '44.000 €',
    currentOfferPrice: '52.000 €',
    currentOfferLabel: 'Limited AWD · precio al contado publicado hasta 31/12/2026',
    versionPrices: [
      { name: 'E-Outback · precio de partida anunciado', price: '44.000 €', priceType: 'Importe anunciado antes de Auto+, CAES e IRPF; no se vincula expresamente a un acabado o configuración.' },
      { name: 'Limited AWD · sistema combinado', price: '52.000 €', priceType: 'Precio al contado publicado en Subaru Finance para esta versión; oferta válida hasta 31/12/2026. El precio financiado sin Auto+ que aparece en la misma oferta es 49.200 €; no se presenta como PVP al contado.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. Subaru anuncia E-Outback desde 44.000 € antes de ayudas, pero Subaru Finance publica 52.000 € al contado para Limited AWD hasta el 31/12/2026. El anuncio no identifica el acabado asociado al precio desde. Se conservan ambos datos oficiales y queda pendiente que Subaru aclare a qué configuración corresponde el precio de partida y el PVP base de Limited AWD sin condiciones promocionales.',
    sources: [
      source('Subaru España: anuncio de precio del E-Outback antes de ayudas', electricAnnouncement),
      source('Subaru España: ficha técnica del E-Outback', `${spain}/upload/modelos/eoutback/Ficha_Tecnica_E-Outback.pdf`),
      source('Subaru Finance: precio al contado de E-Outback Limited AWD y condiciones de Auto+', `${spain}/finance`),
    ],
  },
  brz: {
    currentOfferPrice: '43.000 €',
    currentOfferLabel: 'BRZ Sport · precio publicado por Subaru Huesca; consultar stock',
    versionPrices: [
      { name: 'BRZ Sport 2.4 D-4S', price: '43.000 €', priceType: 'Precio publicado por el concesionario oficial Subaru Huesca; la ficha indica IVA incluido. No es una tarifa nacional de Subaru España y la disponibilidad depende del stock local.' },
    ],
    note: 'Consulta del 11 de noviembre de 2026. La web corporativa no publica un PVP nacional actual del BRZ ni lo incluye en la gama principal visible. El configurador conserva una ruta antigua sin precio verificable; el concesionario oficial Subaru Huesca publica 43.000 € para BRZ Sport, IVA incluido. Se muestra como precio local de concesionario y no como precio base de marca; confirma stock, año-modelo y precio final antes de comprar.',
    sources: [
      source('Subaru Huesca, concesionario oficial: BRZ Sport y precio local publicado', 'https://subaruhuesca.es/producto/brz/'),
      source('Subaru España: configurador BRZ (no muestra tarifa nacional verificable)', `${spain}/configurador/subaru-brz/11-gasolina`),
    ],
  },
};
