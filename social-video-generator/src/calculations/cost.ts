export function assertNonNegativeFinite(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`${label} debe ser un número finito no negativo`);
  }
}

export function calculateEnergy(distanceKm: number, consumptionPer100Km: number): number {
  assertNonNegativeFinite(distanceKm, 'distanceKm');
  assertNonNegativeFinite(consumptionPer100Km, 'consumptionPer100Km');
  return (distanceKm * consumptionPer100Km) / 100;
}

export function calculateTripCost(distanceKm: number, consumptionPer100Km: number, pricePerUnit: number): number {
  assertNonNegativeFinite(pricePerUnit, 'pricePerUnit');
  return calculateEnergy(distanceKm, consumptionPer100Km) * pricePerUnit;
}

export function calculateCostPer100Km(consumptionPer100Km: number, pricePerUnit: number): number {
  return calculateTripCost(100, consumptionPer100Km, pricePerUnit);
}
