export type ConsumptionInput = { distanceKm: number; liters: number; pricePerLiter?: number };
export type TripInput = { distanceKm: number; consumption: number; pricePerLiter: number; roundTrip?: boolean; passengers?: number };
export type CostPerKmInput = { distanceKm: number; fuel: number; maintenance: number; insurance: number; taxes: number; other: number };
export type EnergyComparisonInput = { distanceKm: number; fuelConsumption: number; fuelPrice: number; electricConsumption: number; electricityPrice: number };
export type AnnualCostInput = { annualKm: number; fuel: number; insurance: number; maintenance: number; taxes: number; parking: number; other: number };

const nonNegative = (value: number, label: string) => {
  if (!Number.isFinite(value) || value < 0) throw new Error(`${label}: introduce un valor igual o superior a cero.`);
};
const positive = (value: number, label: string) => {
  nonNegative(value, label);
  if (value === 0) throw new Error(`${label}: debe ser mayor que cero.`);
};

export function calculateFuelConsumption(input: ConsumptionInput) {
  positive(input.distanceKm, 'La distancia');
  nonNegative(input.liters, 'Los litros');
  if (input.pricePerLiter !== undefined) nonNegative(input.pricePerLiter, 'El precio por litro');
  const litersPer100Km = (input.liters / input.distanceKm) * 100;
  return { litersPer100Km, liters: input.liters, fuelCost: input.pricePerLiter === undefined ? null : input.liters * input.pricePerLiter };
}

export function calculateTripCost(input: TripInput) {
  positive(input.distanceKm, 'La distancia');
  nonNegative(input.consumption, 'El consumo');
  nonNegative(input.pricePerLiter, 'El precio por litro');
  const distance = input.distanceKm * (input.roundTrip ? 2 : 1);
  const liters = (distance * input.consumption) / 100;
  const total = liters * input.pricePerLiter;
  return { distanceKm: distance, liters, total, perPassenger: input.passengers && input.passengers > 0 ? total / input.passengers : null };
}

export function calculateCostPerKm(input: CostPerKmInput) {
  positive(input.distanceKm, 'Los kilómetros del periodo');
  for (const [label, value] of [['Combustible o energía', input.fuel], ['Mantenimiento', input.maintenance], ['El seguro', input.insurance], ['Los impuestos', input.taxes], ['Otros gastos', input.other]] as const) nonNegative(value, label);
  const total = input.fuel + input.maintenance + input.insurance + input.taxes + input.other;
  nonNegative(total, 'El coste total');
  return { total, perKm: total / input.distanceKm };
}

export function calculateEnergyComparison(input: EnergyComparisonInput) {
  positive(input.distanceKm, 'La distancia');
  nonNegative(input.fuelConsumption, 'El consumo de combustible');
  nonNegative(input.fuelPrice, 'El precio del combustible');
  nonNegative(input.electricConsumption, 'El consumo eléctrico');
  nonNegative(input.electricityPrice, 'El precio de la electricidad');
  const fuelPer100Km = input.fuelConsumption * input.fuelPrice;
  const electricPer100Km = input.electricConsumption * input.electricityPrice;
  return {
    fuelPer100Km,
    electricPer100Km,
    fuelTrip: fuelPer100Km * input.distanceKm / 100,
    electricTrip: electricPer100Km * input.distanceKm / 100,
    savingsPer100Km: fuelPer100Km - electricPer100Km,
  };
}

export function calculateAnnualCarCost(input: AnnualCostInput) {
  positive(input.annualKm, 'Los kilómetros anuales');
  for (const [label, value] of [['Combustible o energía', input.fuel], ['El seguro', input.insurance], ['Mantenimiento', input.maintenance], ['Los impuestos', input.taxes], ['El aparcamiento', input.parking], ['Otros gastos', input.other]] as const) nonNegative(value, label);
  const total = input.fuel + input.insurance + input.maintenance + input.taxes + input.parking + input.other;
  nonNegative(total, 'El coste anual');
  return { total, monthly: total / 12, perKm: total / input.annualKm };
}
