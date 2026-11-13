export type FordPriceData = {
  currentOfferPrice?: string;
  currentOfferLabel?: string;
  versionPrices?: Record<string, { price: string; priceType: string }>;
};

export const fordRangePriceSource = 'https://www.ford.es/turismos';

// Precios «desde» visibles en la gama española consultada el 8 de noviembre
// de 2026. Ford indica que incluyen descuentos promocionales y aportación del
// concesionario, por lo que no se presentan como PVP permanentes.
export const fordPriceData: Record<string, FordPriceData> = {
  'explorer-electrico': {
    currentOfferPrice: 'Desde 34.836 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      'Autonomía estándar RWD · batería LFP 58 kWh': {
        price: 'Desde 34.836 €',
        priceType: 'Precio Ford de acceso para la serie Style y la batería estándar RWD; incluye descuentos y aportación del concesionario. Precio promocional consultado el 8/11/2026, válido hasta fin de mes; no es un PVP permanente.',
      },
    },
  },
  capri: {
    currentOfferPrice: 'Desde 36.967 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
  },
  'puma-gen-e': {
    currentOfferPrice: 'Desde 29.397 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      'Puma Gen-E · batería 46,8 kWh · FWD': {
        price: 'Desde 29.397 €',
        priceType: 'Precio de acceso publicado por Ford España en la gama; incluye descuentos y aportación del concesionario. Precio promocional consultado el 8/11/2026, válido hasta fin de mes; no es un PVP permanente.',
      },
    },
  },
  'mustang-mach-e': {
    currentOfferPrice: 'Desde 42.630 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      'Rango estándar RWD · batería LFP 73 kWh · modelo 2026': {
        price: 'Desde 42.630 €',
        priceType: 'Precio promocional recomendado que Ford publica para el Mustang Mach-E Rango Estándar RWD de 73 kWh y 268 CV (modelo 2026); la oferta de stock consultada indicaba 0 extras. Precio temporal, no PVP permanente.',
      },
    },
  },
  puma: {
    currentOfferPrice: 'Desde 23.805 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      '1.0 EcoBoost MHEV 125 · manual 6 velocidades': {
        price: 'Desde 23.805 €',
        priceType: 'Precio consultado en el configurador Ford para Puma Titanium 1.0 EcoBoost mHEV 125 CV, manual de 6 velocidades y sin extras; incluye descuentos y aportación del concesionario. Válido hasta fin de mes; no es PVP permanente.',
      },
      'Puma ST 1.0 EcoBoost MHEV': {
        price: 'Desde 33.641 €',
        priceType: 'Precio promocional Ford publicado para Puma ST 1.0 EcoBoost MHEV de 160 CV; consulta 8/11/2026. Incluye descuentos y aportación del concesionario; válido hasta fin de mes, sujeto a condiciones y no equivalente a un PVP permanente.',
      },
    },
  },
  kuga: {
    currentOfferPrice: 'Desde 29.017 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      '1.5 EcoBoost 150 · manual 6 velocidades · FWD': {
        price: 'Desde 29.017 €',
        priceType: 'Precio consultado en el configurador Ford para Kuga Titanium 1.5 EcoBoost 150 CV, manual de 6 velocidades y tracción delantera, sin extras; incluye descuentos y aportación del concesionario. Válido hasta fin de mes; no es PVP permanente.',
      },
    },
  },
  mustang: {
    currentOfferPrice: 'Desde 64.577 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      '5.0 Ti-VCT V8 GT': {
        price: 'Desde 64.577 €',
        priceType: 'Precio «desde» publicado por Ford para GT; incluye descuentos Ford y está sujeto a condiciones de matriculación hasta 30/11/2026. No es PVP de tarifa sin campaña.',
      },
      '5.0 V8 Dark Horse': {
        price: 'Desde 77.577 €',
        priceType: 'Precio «desde» publicado por Ford para Dark Horse; incluye descuentos Ford y está sujeto a condiciones de matriculación hasta 30/11/2026. No es PVP de tarifa sin campaña.',
      },
    },
  },
  bronco: {
    currentOfferPrice: 'Desde 65.374 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      '2.7 V6 EcoBoost biturbo · automático 10 velocidades': {
        price: 'Desde 65.374 €',
        priceType: 'Precio de acceso publicado por Ford España; incluye descuentos y aportación del concesionario. Precio promocional consultado el 8/11/2026, válido hasta fin de mes; no es un PVP permanente.',
      },
    },
  },
  'tourneo-custom': {
    currentOfferPrice: 'Desde 59.297 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
  },
  'tourneo-connect': {
    currentOfferPrice: 'Desde 30.706 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
  },
  'tourneo-courier': {
    currentOfferPrice: 'Desde 23.049 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
  },
  'e-tourneo-courier': {
    currentOfferPrice: 'Desde 32.570 €',
    currentOfferLabel: 'Precio promocional Ford · hasta 30/11/2026',
    versionPrices: {
      'Trend eléctrico · batería 46 kWh': {
        price: 'Desde 32.570 €',
        priceType: 'Precio de acceso publicado por Ford España para E-Tourneo Courier; incluye descuentos y aportación del concesionario. Precio promocional consultado el 8/11/2026, válido hasta fin de mes; no es un PVP permanente.',
      },
    },
  },
};

export const fordPriceNote = 'Ford indica que los precios «desde» de su gama incluyen IVA, impuesto de matriculación, transporte, descuentos promocionales y aportación del concesionario, y que son válidos en Península y Baleares para vehículos matriculados hasta fin de mes. Algunas ofertas pueden depender de financiación, CAE u otras condiciones; se identifican cuando la fuente las concreta. Son precios de campaña, no PVP permanentes. Solo asociamos el importe a una motorización si la fuente permite reconocer esa configuración; los demás precios por versión se dejan pendientes en precios-pendientes.txt. El importe de 66.228 € que aparece junto a E‑Tourneo Custom remite, según la propia página, a Tourneo Custom Zetec manual; no se atribuye al modelo eléctrico.';
