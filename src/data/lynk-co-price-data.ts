/** Precios de catálogo y campañas publicados por Lynk & Co España; consultados el 13/11/2026. */
type LynkCoPriceOption = { name: string; price: string; priceType: string };
type LynkCoModelPricing = {
  basePrice: string;
  note: string;
  options: LynkCoPriceOption[];
  sources: { label: string; url: string }[];
};

const lynkCo = 'https://www.lynkco.com/es-es';
const listed = 'Importe del configurador de Lynk & Co España para particulares en Península y Baleares, vigente hasta el 31/12/2026. Incluye el Plan Auto+, sujeto a aprobación definitiva y disponibilidad de fondos: no es un PVP sin condiciones y queda pendiente de confirmar. No incluye matriculación ni preentrega.';
const planAuto = 'El adelanto del Plan Auto+ está sujeto a aprobación definitiva y disponibilidad de fondos; si no se concede, el importe prestado debe devolverse a la financiera. Financiación sujeta a estudio y aprobación de Banco Cetelem.';

export const lynkCoPriceData: Record<string, LynkCoModelPricing> = {
  '01': {
    basePrice: '40.995 €',
    note: 'Precios de catálogo publicados por el configurador español, consultados el 13/11/2026: Core 40.995 € y More 44.995 €, válidos hasta el 31/12/2026 para particulares en Península y Baleares. La nota del configurador declara que el precio incluye el Plan Auto+, sujeto a aprobación y fondos; la página de ofertas denomina PVP a esos mismos importes. No se presentan como precio garantizado sin ayuda: confirmar el importe aplicable con Lynk & Co. No incluyen matriculación ni preentrega. La financiación y la Multiopción se detallan aparte.',
    options: [
      { name: '1.5TD PHEV · Core', price: '40.995 €', priceType: listed },
      { name: '1.5TD PHEV · More', price: '44.995 €', priceType: listed },
      { name: 'Oferta financiada · 01 Core (hasta 31/12/2026)', price: '27.315 €', priceType: `Precio promocional financiado; PVP 40.995 €. Entrada 4.315 €, 119 cuotas de 297,49 € y una última de 297,23 €; total a plazos 40.471,24 €, TIN 9,49 % y TAE 10,44 %. Incluye adelanto de 2.250 € del Plan Auto+. ${planAuto}` },
      { name: 'Multiopción · 01 Core (hasta 31/12/2026)', price: '249 €/mes', priceType: `Entrada 6.572,70 €, 35 cuotas de 249 € y cuota final de 18.519,84 €; total a plazos 34.260,13 €, TIN 7,25 % y TAE 8,38 %. Incluye adelanto de 2.250 € del Plan Auto+. ${planAuto}` },
    ],
    sources: [
      { label: 'Lynk & Co España: gama actual y precio inicial del 01', url: `${lynkCo}/cars` },
      { label: 'Lynk & Co España: Lynk & Co 01, acabados y precio', url: `${lynkCo}/cars/01` },
      { label: 'Lynk & Co España: configuración y precios del 01', url: 'https://configure.lynkco.com/es-es/configurator/01' },
      { label: 'Lynk & Co España: ofertas vigentes y condiciones financieras', url: `${lynkCo}/offers` },
    ],
  },
  '02': {
    basePrice: '35.495 €',
    note: 'Precios de catálogo publicados por el configurador español, consultados el 13/11/2026: Core 35.495 € y More 39.495 €, válidos hasta el 31/12/2026 para particulares en Península y Baleares. La nota del configurador declara que el precio incluye el Plan Auto+, sujeto a aprobación y fondos; la página de ofertas denomina PVP a esos mismos importes. No se presentan como precio garantizado sin ayuda: confirmar el importe aplicable con Lynk & Co. No incluyen matriculación ni preentrega. La campaña financiada de 24.795 € se detalla aparte e incluye descuentos y el adelanto condicionado de 3.375 € del Plan Auto+.',
    options: [
      { name: 'Eléctrico 66 kWh · Core', price: '35.495 €', priceType: listed },
      { name: 'Eléctrico 66 kWh · More', price: '39.495 €', priceType: listed },
      { name: 'Oferta financiada · 02 Core (hasta 31/12/2026)', price: '24.795 €', priceType: `Precio promocional financiado; PVP 35.495 €. Entrada 1.795 €, 119 cuotas de 297,49 € y una última de 297,23 €; total a plazos 37.951,24 €, TIN 9,49 % y TAE 10,44 %. Incluye adelanto de 3.375 € del Plan Auto+. ${planAuto}` },
      { name: 'Multiopción · 02 Core (hasta 31/12/2026)', price: '199 €/mes', priceType: `Entrada 9.020,70 €, 35 cuotas de 199 € y cuota final de 14.302,33 €; total a plazos 30.641,75 €, TIN 7,25 % y TAE 8,38 %. Incluye adelanto de 3.375 € del Plan Auto+. ${planAuto}` },
    ],
    sources: [
      { label: 'Lynk & Co España: gama actual y precio inicial del 02', url: `${lynkCo}/cars` },
      { label: 'Lynk & Co España: Lynk & Co 02 y acabados', url: `${lynkCo}/cars/02` },
      { label: 'Lynk & Co España: configuración y precios del 02', url: 'https://configure.lynkco.com/es-es/configurator/02' },
      { label: 'Lynk & Co España: ofertas vigentes y condiciones financieras', url: `${lynkCo}/offers` },
    ],
  },
  '08': {
    basePrice: '52.995 €',
    note: 'Precios de catálogo publicados por el configurador español, consultados el 13/11/2026: Core 52.995 € y More 56.995 €, válidos hasta el 31/12/2026 para particulares en Península y Baleares. La nota del configurador declara que el precio incluye el Plan Auto+, sujeto a aprobación y fondos; la página de ofertas denomina PVP a esos mismos importes. No se presentan como precio garantizado sin ayuda: confirmar el importe aplicable con Lynk & Co. No incluyen matriculación ni preentrega. Las campañas financieras se detallan aparte.',
    options: [
      { name: '1.5 EM-P PHEV · Core', price: '52.995 €', priceType: listed },
      { name: '1.5 EM-P PHEV · More', price: '56.995 €', priceType: listed },
      { name: 'Oferta financiada · 08 Core (hasta 31/12/2026)', price: '39.995 €', priceType: `Precio promocional financiado; PVP 52.995 €. Entrada 12.995 €, 119 cuotas de 349,23 € y una última de 348,39 €; total a plazos 55.439,06 €, TIN 9,49 % y TAE 10,44 %. Incluye adelanto de 1.800 € del Plan Auto+. ${planAuto}` },
      { name: 'Multiopción · 08 Core (hasta 31/12/2026)', price: '369 €/mes', priceType: `Entrada 10.741 €, 35 cuotas de 369 € y cuota final de 25.296,94 €; total a plazos 49.589,24 €, TIN 7,25 % y TAE 8,39 %. Incluye adelanto de 1.800 € del Plan Auto+. ${planAuto}` },
    ],
    sources: [
      { label: 'Lynk & Co España: gama actual y precio inicial del 08', url: `${lynkCo}/cars` },
      { label: 'Lynk & Co España: Lynk & Co 08 y acabados', url: `${lynkCo}/cars/08` },
      { label: 'Lynk & Co España: configuración y precios del 08', url: 'https://configure.lynkco.com/es-es/configurator/08' },
      { label: 'Lynk & Co España: ofertas vigentes y condiciones financieras', url: `${lynkCo}/offers` },
    ],
  },
};
