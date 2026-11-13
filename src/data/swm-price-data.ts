/** Precios de SWM España consultados el 11 de noviembre de 2026. */
type SwmPriceEntry = {
  basePrice: string;
  heading: string;
  note: string;
  priceOptions: { name: string; price: string; priceType: string }[];
  sources: { label: string; url: string }[];
};

const spain = 'https://www.swmmotors.es';
const source = (label: string, url: string) => ({ label, url });
const cashPrice = 'PVP recomendado al contado publicado por SWM España; no incluye matriculación. Comprueba pintura, disponibilidad y condiciones con el concesionario.';

export const swmPriceData: Record<string, SwmPriceEntry> = {
  'g01-pro': {
    basePrice: '27.990 €',
    heading: 'Precio anunciado por versión',
    note: 'Precio consultado el 11 de noviembre de 2026. SWM anuncia también una cifra inferior desde 25.990 € sujeta a financiación. Se muestra como precio base el PVP recomendado al contado de 27.990 €, no la oferta condicionada.',
    priceOptions: [
      { name: 'G01 PRO DCT Luxury · 1.5T GDI', price: '27.990 €', priceType: `${cashPrice} La marca incluye pintura metalizada.` },
    ],
    sources: [source('SWM España: G01 PRO DCT Luxury, ficha y PVP recomendado al contado', `${spain}/swm-g01pro/`)],
  },
  g03f: {
    basePrice: '17.990 €',
    heading: 'Precios publicados por configuración; condiciones DCT por aclarar',
    note: 'Precios consultados el 11 de noviembre de 2026. El PVP al contado de la versión manual es de 17.990 € para cinco plazas y 18.490 € para siete; no incluye matriculación, pintura metalizada ni costes de financiación. La web también anuncia importes de 21.490 € y 23.990 € junto a DCT Elite, pero sus notas no permiten asociar cada cifra a una configuración ni confirmar que sean precios al contado; se muestran aparte sin presentarlos como PVP base y se mantienen en precios pendientes.',
    priceOptions: [
      { name: 'G03F 1.5 MT Elite · 5 plazas', price: '17.990 €', priceType: cashPrice },
      { name: 'G03F 1.5 MT Elite · 7 plazas', price: '18.490 €', priceType: cashPrice },
      { name: 'G03F DCT Elite · importes publicados sin desglose', price: '21.490 € / 23.990 €', priceType: 'Importes que aparecen en la web española junto a la versión DCT Elite; SWM no permite confirmar en esa página su correspondencia con el número de plazas ni si son PVP al contado. No se usan como precio base.' },
    ],
    sources: [source('SWM España: G03F, versiones manual y DCT, plazas e importes publicados', `${spain}/swm-g03f/`)],
  },
  g05: {
    basePrice: '24.490 €',
    heading: 'Precio base al contado por motorización',
    note: 'Precios consultados el 11 de noviembre de 2026. Los PVP recomendados al contado son 24.490 € para el 1.5T MT y 27.490 € para el 1.5T DCT; no incluyen matriculación y el DCT tampoco incluye pintura metalizada. Las ofertas de lanzamiento anunciadas desde 22.490 € y 25.490 € están condicionadas a financiación. SWM aún menciona el motor 2.0 en el texto general, pero no publica para él una ficha vigente ni un precio comparable; queda señalado como pendiente.',
    priceOptions: [
      { name: 'G05 1.5T MT · 6 velocidades', price: '24.490 €', priceType: cashPrice },
      { name: 'G05 1.5T DCT · 7 velocidades', price: '27.490 €', priceType: 'PVP recomendado al contado publicado por SWM España; no incluye matriculación ni pintura metalizada. Comprueba disponibilidad y condiciones con el concesionario.' },
      { name: 'G05 2.0 MT · precio vigente pendiente', price: 'Pendiente de verificar', priceType: 'SWM aún menciona el 2.0 en su página general, pero no encontramos una oferta vigente y comparable al contado para esta versión. Una noticia anterior anunciaba una oferta financiada, que no se presenta como precio base.' },
    ],
    sources: [source('SWM España: G05, precios al contado y oferta por versión', `${spain}/swm-g05/`)],
  },
  'g03f-edi': {
    basePrice: '25.700 €',
    heading: 'Precio recomendado al contado por configuración',
    note: 'Precios consultados el 11 de noviembre de 2026. SWM España publica un PVP recomendado al contado de 25.700 € para cinco plazas y 26.200 € para siete. Los importes menores destacados en la página están sujetos a financiación e incluyen una referencia a una ayuda Auto+ pendiente de publicación en el BOE; no se presentan como precio base. No se incluyen pintura metalizada ni matriculación.',
    priceOptions: [
      { name: 'G03F EDi automático · 5 plazas', price: '25.700 €', priceType: 'PVP recomendado al contado publicado por SWM España; no incluye pintura metalizada ni matriculación.' },
      { name: 'G03F EDi automático · 7 plazas', price: '26.200 €', priceType: 'PVP recomendado al contado publicado por SWM España; no incluye pintura metalizada ni matriculación.' },
    ],
    sources: [source('SWM España: G03F EDi, versiones de cinco y siete plazas y PVP al contado', `${spain}/swm-g03f-edi/`)],
  },
};
