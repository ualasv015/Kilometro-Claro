const sourceBase = 'https://kgm.com.es/configurador';

type KgmPriceOption = {
  name: string;
  price: string;
  trim: string;
};

type KgmModelPrice = {
  basePrice: string;
  sourceUrl: string;
  advertisedOffer: string;
  options: KgmPriceOption[];
};

const option = (name: string, amount: number, trim: string): KgmPriceOption => ({
  name,
  price: `${amount.toLocaleString('es-ES')} €`,
  trim,
});

export const kgmPriceData: Record<string, KgmModelPrice> = {
  tivoli: {
    basePrice: '21.650 €',
    sourceUrl: `${sourceBase}/tivoli`,
    advertisedOffer: '15.650 €',
    options: [
      option('G15T 135 · gasolina · manual 6 vel. · 4x2 · Line', 21650, 'Line'),
      option('G15T 135 · gasolina · manual 6 vel. · 4x2 · Urban Plus', 24950, 'Urban Plus'),
      option('G15T 135 · GLP · manual 6 vel. · 4x2 · Line', 24400, 'Line'),
      option('G15T 135 · GLP · manual 6 vel. · 4x2 · Urban Plus', 27700, 'Urban Plus'),
      option('G15T 163 · gasolina · manual 6 vel. · 4x2 · Limited', 27950, 'Limited'),
      option('G15T 163 · gasolina · automático 6 vel. · 4x2 · Urban Plus', 29200, 'Urban Plus'),
      option('G15T 163 · gasolina · automático 6 vel. · 4x2 · Limited', 29450, 'Limited'),
      option('G15T 163 · GLP · manual 6 vel. · 4x2 · Limited', 30700, 'Limited'),
      option('G15T 163 · GLP · automático 6 vel. · 4x2 · Urban Plus', 29200, 'Urban Plus'),
      option('G15T 163 · GLP · automático 6 vel. · 4x2 · Limited', 32200, 'Limited'),
    ],
  },
  korando: {
    basePrice: '27.450 €',
    sourceUrl: `${sourceBase}/korando`,
    advertisedOffer: '18.650 €',
    options: [
      option('G15T 149 · gasolina · manual 6 vel. · 4x2 · Line', 27450, 'Line'),
      option('G15T 149 · gasolina · manual 6 vel. · 4x2 · Urban Plus', 30950, 'Urban Plus'),
      option('G15T 149 · gasolina · manual 6 vel. · 4x2 · Limited', 34900, 'Limited'),
      option('G15T 149 · GLP · manual 6 vel. · 4x2 · Line', 30200, 'Line'),
      option('G15T 149 · GLP · manual 6 vel. · 4x2 · Urban Plus', 32450, 'Urban Plus'),
      option('G15T 149 · GLP · manual 6 vel. · 4x2 · Limited', 37650, 'Limited'),
      option('G15T 163 · gasolina · automático 6 vel. · 4x2 · Urban Plus', 33150, 'Urban Plus'),
      option('G15T 163 · GLP · automático 6 vel. · 4x2 · Urban Plus', 35900, 'Urban Plus'),
      option('G15T 163 · gasolina · automático 6 vel. · 4x4 · Limited', 38800, 'Limited'),
      option('G15T 163 · GLP · automático 6 vel. · 4x4 · Limited', 41150, 'Limited'),
    ],
  },
  torres: {
    basePrice: '34.000 €',
    sourceUrl: `${sourceBase}/torres`,
    advertisedOffer: '24.600 €',
    options: [
      option('G15T 163 · gasolina · manual 6 vel. · 4x2 · Trend', 34000, 'Trend'),
      option('HEV G15T 204 · híbrido no enchufable · automático · 4x2 · Trend', 37000, 'Trend'),
      option('HEV G15T 204 · híbrido no enchufable · automático · 4x2 · Life', 39500, 'Life'),
      option('G15T 163 · gasolina · automático 6 vel. · 4x4 · Adventure', 45000, 'Adventure'),
    ],
  },
  'torres-actyon': {
    basePrice: '44.000 €',
    sourceUrl: `${sourceBase}/torres-actyon`,
    advertisedOffer: '34.300 €',
    options: [option('HEV G15T 204 · híbrido no enchufable · automático · 4x2 · Life Plus', 44000, 'Life Plus')],
  },
  'torres-evx': {
    basePrice: '38.000 €',
    sourceUrl: `${sourceBase}/torres-evx`,
    advertisedOffer: '28.325 €',
    options: [
      option('EVX 207 · eléctrico · automático · 4x2 · Trend', 38000, 'Trend'),
      option('EVX 207 · eléctrico · automático · 4x2 · Life', 40500, 'Life'),
    ],
  },
  rexton: {
    basePrice: '47.750 €',
    sourceUrl: `${sourceBase}/rexton`,
    advertisedOffer: '40.250 €',
    options: [
      option('D22 DTR 202 · diésel · automático 6 vel. · 4x4 · Pro', 47750, 'Pro'),
      option('D22 DTR 202 · diésel · automático 6 vel. · 4x4 · Premium', 51350, 'Premium'),
      option('D22 DTR 202 · diésel · automático 6 vel. · 4x4 · Limited', 57350, 'Limited'),
    ],
  },
  musso: {
    basePrice: '33.500 €',
    sourceUrl: `${sourceBase}/musso`,
    advertisedOffer: '27.000 €',
    options: [
      option('D22 202 · diésel · manual 6 vel. · 4x4 · caja corta · Pro', 33500, 'Pro'),
      option('D22 202 · diésel · manual 6 vel. · 4x4 · caja larga · Pro', 34500, 'Pro'),
      option('D22 202 · diésel · automático 6 vel. · 4x4 · caja corta · Pro', 35000, 'Pro'),
      option('D22 202 · diésel · automático 6 vel. · 4x4 · caja corta · Limited', 38000, 'Limited'),
      option('D22 202 · diésel · automático 6 vel. · 4x4 · caja larga · Pro', 36000, 'Pro'),
    ],
  },
  'musso-evx': {
    basePrice: '40.179 €',
    sourceUrl: `${sourceBase}/musso-evx`,
    advertisedOffer: '31.875 €',
    options: [
      option('Musso EVX 207 · eléctrico · 4x2 · Pro', 40179, 'Pro'),
      option('Musso EVX 238 · eléctrico de doble motor · 4x4 · Pro', 43325, 'Pro'),
      option('Musso EVX 238 · eléctrico de doble motor · 4x4 · Limited', 46229, 'Limited'),
    ],
  },
};
