import assert from 'node:assert/strict';
import test from 'node:test';
import {calculateCostPer100Km, calculateEnergy, calculateTripCost} from '../src/calculations/cost';
import {validateVideoSpec} from '../src/content/validate';
import spec from '../data/videos/video-001.json';

test('los tres supuestos de la guía dan energía y costes consistentes', () => {
  const video = validateVideoSpec(spec);
  const expected = [
    {energy: 6, cost: 9.60},
    {energy: 5, cost: 7.50},
    {energy: 18, cost: 3.60},
  ];
  video.variables.vehicles.forEach((vehicle, i) => {
    assert.equal(calculateEnergy(100, vehicle.consumptionPer100Km), expected[i].energy);
    assert.ok(Math.abs(calculateTripCost(100, vehicle.consumptionPer100Km, vehicle.pricePerUnit) - expected[i].cost) < 1e-9);
    assert.ok(Math.abs(calculateCostPer100Km(vehicle.consumptionPer100Km, vehicle.pricePerUnit) - expected[i].cost) < 1e-9);
  });
});

test('el coste y la energía crecen proporcionalmente con la distancia', () => {
  assert.equal(calculateEnergy(50, 6), 3);
  assert.ok(Math.abs(calculateTripCost(50, 6, 1.6) - 4.8) < 1e-9);
  assert.equal(calculateTripCost(0, 6, 1.6), 0);
});

test('rechaza NaN, negativos y una configuración sin fuente', () => {
  assert.throws(() => calculateEnergy(Number.NaN, 5), /finito/);
  assert.throws(() => calculateTripCost(100, 6, -1), /no negativo/);
  assert.throws(() => validateVideoSpec({...spec, sources: []}), /fuente/);
  assert.throws(() => validateVideoSpec({...spec, requiresHumanReview: false}), /requiresHumanReview/);
});
