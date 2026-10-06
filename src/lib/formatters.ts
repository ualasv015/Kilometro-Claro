const numberFormat = new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 });
const euroFormat = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 });

export const formatNumber = (value: number) => numberFormat.format(value);
export const formatEuro = (value: number) => euroFormat.format(value);
export const formatEuroPerKm = (value: number) => `${euroFormat.format(value)}/km`;
