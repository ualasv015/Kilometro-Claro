export type ConsumptionInput = { distanceKm: number; liters: number; pricePerLiter?: number };
export type TripInput = { distanceKm: number; consumption: number; pricePerLiter: number; roundTrip?: boolean; passengers?: number };
export type CostPerKmInput = { distanceKm: number; fuel: number; maintenance: number; insurance: number; taxes: number; other: number };
export type EnergyComparisonInput = { distanceKm: number; fuelConsumption: number; fuelPrice: number; electricConsumption: number; electricityPrice: number };
export type AnnualCostInput = { annualKm: number; fuel: number; insurance: number; maintenance: number; taxes: number; parking: number; other: number };
export type ChargeCostInput = { batteryCapacityKwh: number; currentChargePercent: number; targetChargePercent: number; electricityPrice: number; lossPercent: number };
export type FiveYearCostInput = { annualKm: number; electricPurchasePrice: number; electricConsumption: number; electricityPrice: number; electricAnnualOtherCosts: number; electricResaleValue: number; combustionPurchasePrice: number; fuelConsumption: number; fuelPrice: number; combustionAnnualOtherCosts: number; combustionResaleValue: number };
export type AutoPlusInput = { grossPrice: number; eligibleNetPrice: number; euAssembly: boolean; qualifiedBattery: boolean };
export type CarFinanceInput = { vehiclePrice: number; downPayment: number; annualTinPercent: number; months: number; openingFee: number; finalPayment: number };

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

export function calculateChargeCost(input: ChargeCostInput) {
  positive(input.batteryCapacityKwh, 'La capacidad útil de la batería');
  nonNegative(input.electricityPrice, 'El precio de la electricidad');
  if (input.currentChargePercent < 0 || input.currentChargePercent > 100 || !Number.isFinite(input.currentChargePercent)) throw new Error('La carga actual debe estar entre 0 y 100 %.');
  if (input.targetChargePercent < 0 || input.targetChargePercent > 100 || !Number.isFinite(input.targetChargePercent)) throw new Error('La carga objetivo debe estar entre 0 y 100 %.');
  if (input.targetChargePercent <= input.currentChargePercent) throw new Error('La carga objetivo debe ser superior a la carga actual.');
  if (input.lossPercent < 0 || input.lossPercent >= 100 || !Number.isFinite(input.lossPercent)) throw new Error('Las pérdidas deben estar entre 0 % y menos de 100 %.');
  const batteryEnergyKwh = input.batteryCapacityKwh * (input.targetChargePercent - input.currentChargePercent) / 100;
  const gridEnergyKwh = batteryEnergyKwh / (1 - input.lossPercent / 100);
  return { batteryEnergyKwh, gridEnergyKwh, cost: gridEnergyKwh * input.electricityPrice };
}

export function calculateFiveYearCost(input: FiveYearCostInput) {
  positive(input.annualKm, 'Los kilómetros anuales');
  for (const [label, value] of [
    ['El precio del eléctrico', input.electricPurchasePrice], ['El consumo eléctrico', input.electricConsumption], ['El precio de la electricidad', input.electricityPrice],
    ['Los gastos anuales adicionales del eléctrico', input.electricAnnualOtherCosts], ['El valor de reventa del eléctrico', input.electricResaleValue],
    ['El precio del coche de combustión', input.combustionPurchasePrice], ['El consumo de combustible', input.fuelConsumption], ['El precio del combustible', input.fuelPrice],
    ['Los gastos anuales adicionales del coche de combustión', input.combustionAnnualOtherCosts], ['El valor de reventa del coche de combustión', input.combustionResaleValue],
  ] as const) nonNegative(value, label);
  const years = 5;
  const totalKm = input.annualKm * years;
  const electricEnergyCost = totalKm * input.electricConsumption / 100 * input.electricityPrice;
  const combustionEnergyCost = totalKm * input.fuelConsumption / 100 * input.fuelPrice;
  const electricTotal = input.electricPurchasePrice + electricEnergyCost + input.electricAnnualOtherCosts * years - input.electricResaleValue;
  const combustionTotal = input.combustionPurchasePrice + combustionEnergyCost + input.combustionAnnualOtherCosts * years - input.combustionResaleValue;
  return {
    years, totalKm, electricEnergyCost, combustionEnergyCost, electricTotal, combustionTotal,
    electricMonthly: electricTotal / (years * 12), combustionMonthly: combustionTotal / (years * 12),
    electricPerKm: electricTotal / totalKm, combustionPerKm: combustionTotal / totalKm,
    difference: combustionTotal - electricTotal,
  };
}

export function calculateAutoPlusEstimate(input: AutoPlusInput) {
  positive(input.grossPrice, 'El precio final con impuestos');
  nonNegative(input.eligibleNetPrice, 'El precio en factura sin impuestos');
  if (input.eligibleNetPrice > 45_000) return { eligible: false, aid: 0, finalPrice: input.grossPrice, percentage: 0, reason: 'El precio en factura sin impuestos supera el límite de 45.000 € para este supuesto de turismo M1.' };
  const economicPercent = input.eligibleNetPrice <= 35_000 ? 0.25 : 0.15;
  const percentage = Math.min(1, 0.5 + economicPercent + (input.euAssembly ? 0.15 : 0) + (input.qualifiedBattery ? 0.1 : 0));
  const aid = 4_500 * percentage;
  return { eligible: true, aid, finalPrice: Math.max(0, input.grossPrice - aid), percentage, reason: '' };
}

export function calculateCarFinance(input: CarFinanceInput) {
  positive(input.vehiclePrice, 'El precio del coche');
  nonNegative(input.downPayment, 'La entrada');
  nonNegative(input.annualTinPercent, 'El TIN anual');
  nonNegative(input.openingFee, 'La comisión de apertura');
  nonNegative(input.finalPayment, 'La cuota final');
  if (!Number.isInteger(input.months) || input.months < 1) throw new Error('El plazo debe ser un número entero de meses, como mínimo 1.');
  if (input.downPayment >= input.vehiclePrice) throw new Error('La entrada debe ser inferior al precio del coche.');
  const principal = input.vehiclePrice - input.downPayment;
  if (input.finalPayment > principal) throw new Error('La cuota final no puede superar el importe financiado.');
  const monthlyRate = input.annualTinPercent / 100 / 12;
  const monthlyPayment = monthlyRate === 0
    ? (principal - input.finalPayment) / input.months
    : (principal - input.finalPayment / (1 + monthlyRate) ** input.months) * monthlyRate / (1 - (1 + monthlyRate) ** -input.months);
  const installmentTotal = monthlyPayment * input.months;
  const interestCost = installmentTotal + input.finalPayment - principal;
  const totalPaid = input.downPayment + input.openingFee + installmentTotal + input.finalPayment;
  return { principal, monthlyPayment, installmentTotal, interestCost, totalFinanceCost: interestCost + input.openingFee, totalPaid };
}
