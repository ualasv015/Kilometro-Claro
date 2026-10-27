const numberFormatter = (digits: number) => new Intl.NumberFormat('es-ES', {
  minimumFractionDigits: digits,
  maximumFractionDigits: digits,
});

export const formatMoney = (value: number) => `${numberFormatter(2).format(value)} €`;
export const formatEnergy = (value: number, unit: string) => `${numberFormatter(1).format(value)} ${unit}`;
export const formatPrice = (value: number, unit: string) => `${numberFormatter(2).format(value)} ${unit}`;
