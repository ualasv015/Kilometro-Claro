type SuzukiPriceOption = { name: string; price: string; priceType: string };
type SuzukiModelPricing = {
  basePrice: string;
  currentOfferPrice: string;
  currentOfferLabel: string;
  note: string;
  sources: { label: string; url: string }[];
  options: SuzukiPriceOption[];
};

const pricesChecked = 'Precios consultados el 13 de noviembre de 2026 en las páginas oficiales de Suzuki España. El precio base recoge el importe anterior a campaña que Suzuki muestra como «Antes»; el precio actual se indica aparte y la oferta publicada es válida para matriculaciones hasta el 31/12/2026. Los importes incluyen IVA, impuesto de matriculación y transporte; Suzuki excluye desparafinado, pintura metalizada, pack básico y gastos de matriculación. Confirma condiciones y disponibilidad con la red oficial.';
const pricePage = (path: string) => `https://auto.suzuki.es/index.php/precios/${path}`;
const option = (name: string, base: string, current: string, note: string): SuzukiPriceOption => ({
  name,
  price: `${base} € · Ahora: ${current} €`,
  priceType: note,
});

export const suzukiPriceData: Record<string, SuzukiModelPricing> = {
  'e-vitara': {
    basePrice: '35.605 €',
    currentOfferPrice: '28.730 €',
    currentOfferLabel: 'Precio promocional publicado (incluye Auto+)',
    note: `${pricesChecked} Para el e VITARA, Suzuki indica que los precios actuales incluyen 3.375 € del Programa Auto+ y que las bases del programa están pendientes de publicación en el BOE. El importe anunciado depende de cumplir las condiciones de la ayuda; no debe tratarse como una oferta universal. El precio base mostrado corresponde al S2 de 49 kWh y tracción 2WD.`,
    sources: [
      { label: 'Suzuki España: precios oficiales del e VITARA', url: pricePage('evitara') },
      { label: 'Suzuki España: datos técnicos del e VITARA', url: 'https://auto.suzuki.es/modelos/etiqueta-cero/evitara' },
    ],
    options: [
      option('S2 · 49 kWh · 2WD', '35.605', '28.730', 'PVP anterior a campaña y precio vigente publicado por Suzuki; este último incluye 3.375 € de Auto+ y es válido hasta el 31/12/2026.'),
      option('S2 · 61 kWh · 2WD', '40.105', '33.230', 'PVP anterior a campaña y precio vigente publicado por Suzuki; este último incluye 3.375 € de Auto+ y es válido hasta el 31/12/2026.'),
      option('S2 · 61 kWh · ALLGRIP-e 4WD', '43.105', '36.230', 'PVP anterior a campaña y precio vigente publicado por Suzuki; este último incluye 3.375 € de Auto+ y es válido hasta el 31/12/2026.'),
      option('S3 · 61 kWh · 2WD', '42.905', '36.030', 'PVP anterior a campaña y precio vigente publicado por Suzuki; este último incluye 3.375 € de Auto+ y es válido hasta el 31/12/2026.'),
      option('S3 · 61 kWh · ALLGRIP-e 4WD', '45.905', '39.030', 'PVP anterior a campaña y precio vigente publicado por Suzuki; este último incluye 3.375 € de Auto+ y es válido hasta el 31/12/2026.'),
    ],
  },
  'across-2026': {
    basePrice: '54.250 €',
    currentOfferPrice: '49.375 €',
    currentOfferLabel: 'Precio promocional Suzuki hasta 31/12/2026',
    note: `${pricesChecked} El nuevo Across se vende en España en una única configuración GLX. Suzuki publica 49.375 € tras una campaña de 4.875 € y comunica además un precio de 47.575 € al sumar la ayuda Auto+ para clientes que cumplan las condiciones; no presentamos esa ayuda como descuento universal. Suzuki mantiene también la generación anterior como unidades limitadas: su precio de 55.535 € figura como oferta hasta el 31/12/2026, frente a un PVP anterior de 59.805 €. La disponibilidad de una unidad concreta debe confirmarse con el concesionario.`,
    sources: [
      { label: 'Suzuki España: precio del nuevo Across GLX', url: pricePage('across-26') },
      { label: 'Suzuki España: nuevo Across disponible y condiciones de campaña', url: 'https://auto.suzuki.es/actualidad/nuevo-suzuki-across-disponible-concesionarios-espa%C3%B1oles' },
      { label: 'Suzuki España: precio de la generación anterior del Across, unidades limitadas', url: pricePage('across') },
    ],
    options: [
      option('2.5 Plug-in Hybrid E-Four GLX', '54.250', '49.375', 'PVP anterior a la campaña de 4.875 €, según Suzuki España. La marca anuncia 47.575 € al incluir Auto+ sujeto a condiciones; matriculación hasta el 31/12/2026.'),
      option('2.5L 4x4 Plug-in Hybrid GLX · generación anterior, unidades limitadas', '59.805', '55.535', 'Precio de Suzuki para la generación anterior del Across, distinto del nuevo modelo de esta ficha. Oferta vigente para vehículos matriculados hasta el 31/12/2026; disponibilidad de unidad pendiente de confirmar con el concesionario.'),
    ],
  },
  swift: {
    basePrice: '20.905 €',
    currentOfferPrice: '19.305 €',
    currentOfferLabel: 'Precio promocional Suzuki hasta 31/12/2026',
    note: pricesChecked,
    sources: [{ label: 'Suzuki España: precios oficiales del Swift', url: pricePage('suzuki-swift') }],
    options: [
      option('S1 · 1.2 5MT Mild Hybrid', '20.905', '19.305', 'Acabado S1 y cambio manual de 5 velocidades; precio de acceso publicado por Suzuki.'),
      option('S2 · 1.2 5MT Mild Hybrid', '22.605', '21.005', 'Acabado S2 y cambio manual de 5 velocidades.'),
      option('S2 · 1.2 CVT Mild Hybrid', '24.105', '22.505', 'Acabado S2 y transmisión CVT.'),
      option('S2 · 1.2 5MT 4x4 Mild Hybrid', '24.405', '22.805', 'Acabado S2, cambio manual de 5 velocidades y tracción 4x4.'),
      option('S3 · 1.2 5MT Mild Hybrid', '23.505', '21.905', 'Acabado S3 y cambio manual de 5 velocidades.'),
      option('S3 · 1.2 CVT Mild Hybrid', '25.005', '23.405', 'Acabado S3 y transmisión CVT.'),
    ],
  },
  vitara: {
    basePrice: '27.925 €',
    currentOfferPrice: '25.327 €',
    currentOfferLabel: 'Precio promocional Suzuki hasta 31/12/2026',
    note: pricesChecked,
    sources: [
      { label: 'Suzuki España: precios oficiales del Vitara', url: pricePage('suzuki-vitara') },
      { label: 'Suzuki España: precios de la edición limitada del Vitara', url: pricePage('vitara-edicion-limitada') },
    ],
    options: [
      option('S1 · 1.4T Mild Hybrid manual 2WD', '27.925', '25.327', 'Acabado S1, cambio manual y tracción delantera; precio de acceso publicado por Suzuki.'),
      option('S2 · 1.4T Mild Hybrid manual 2WD', '28.725', '26.127', 'Acabado S2, cambio manual y tracción delantera.'),
      option('S2 · 1.4T Mild Hybrid automático 2WD', '30.727', '28.027', 'Acabado S2, cambio automático y tracción delantera.'),
      option('S2 · 1.4T Mild Hybrid manual ALLGRIP', '31.647', '28.947', 'Acabado S2, cambio manual y tracción total ALLGRIP.'),
      option('S2 · 1.4T Mild Hybrid automático ALLGRIP', '33.647', '30.947', 'Acabado S2, cambio automático y tracción total ALLGRIP.'),
      option('S3 · 1.4T Mild Hybrid manual 2WD', '30.975', '28.377', 'Acabado S3, cambio manual y tracción delantera.'),
      option('S3 · 1.4T Mild Hybrid automático 2WD', '32.977', '30.277', 'Acabado S3, cambio automático y tracción delantera.'),
      option('S3 · 1.4T Mild Hybrid manual ALLGRIP', '33.987', '31.287', 'Acabado S3, cambio manual y tracción total ALLGRIP.'),
      option('S3 · 1.4T Mild Hybrid automático ALLGRIP', '35.987', '33.287', 'Acabado S3, cambio automático y tracción total ALLGRIP.'),
      option('Edición Limitada · 1.4T Mild Hybrid automático 2WD', '31.977', '29.277', 'Edición limitada agrupada en la familia Vitara; cambio automático y tracción delantera.'),
      option('Edición Limitada · 1.4T Mild Hybrid automático ALLGRIP', '34.987', '32.287', 'Edición limitada agrupada en la familia Vitara; cambio automático y tracción total ALLGRIP.'),
    ],
  },
  's-cross': {
    basePrice: '32.027 €',
    currentOfferPrice: '27.222 €',
    currentOfferLabel: 'Precio promocional Suzuki hasta 31/12/2026',
    note: pricesChecked,
    sources: [
      { label: 'Suzuki España: precios oficiales del S-Cross', url: pricePage('suzuki-s-cross') },
      { label: 'Suzuki España: precio de la edición limitada del S-Cross', url: pricePage('scross-edicion-limitada') },
    ],
    options: [
      option('S1 · 1.4T Mild Hybrid manual 2WD', '32.027', '27.222', 'Acabado S1, cambio manual y tracción delantera; precio de acceso publicado por Suzuki.'),
      option('S2 · 1.4T Mild Hybrid manual 2WD', '33.227', '28.422', 'Acabado S2, cambio manual y tracción delantera.'),
      option('S2 · 1.4T Mild Hybrid manual ALLGRIP', '34.627', '30.886', 'Acabado S2, cambio manual y tracción total ALLGRIP.'),
      option('S2 · 1.4T Mild Hybrid automático 2WD', '35.227', '31.486', 'Acabado S2, cambio automático y tracción delantera.'),
      option('S2 · 1.4T Mild Hybrid automático ALLGRIP', '36.627', '32.886', 'Acabado S2, cambio automático y tracción total ALLGRIP.'),
      option('S3 · 1.4T Mild Hybrid manual 2WD', '36.627', '31.822', 'Acabado S3, cambio manual y tracción delantera.'),
      option('S3 · 1.4T Mild Hybrid manual ALLGRIP', '38.027', '34.286', 'Acabado S3, cambio manual y tracción total ALLGRIP.'),
      option('S3 · 1.4T Mild Hybrid automático 2WD', '38.627', '34.886', 'Acabado S3, cambio automático y tracción delantera.'),
      option('S3 · 1.4T Mild Hybrid automático ALLGRIP', '40.027', '36.286', 'Acabado S3, cambio automático y tracción total ALLGRIP.'),
      option('Edición Limitada · 1.4T Mild Hybrid automático 2WD', '37.627', '33.886', 'Edición limitada agrupada en la familia S-Cross; cambio automático y tracción delantera.'),
    ],
  },
};
