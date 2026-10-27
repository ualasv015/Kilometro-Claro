import {calculateCostPer100Km} from '../calculations/cost';

export type VehicleId = 'gasoline' | 'diesel' | 'electric';
export type Vehicle = {
  id: VehicleId;
  label: string;
  consumptionPer100Km: number;
  energyUnit: 'L' | 'kWh';
  pricePerUnit: number;
  priceUnit: '€/L' | '€/kWh';
  priceContext: string;
};

export type VideoSpec = {
  schemaVersion: 1;
  id: string;
  title: string;
  videoType: 'comparison';
  hook: string;
  sourceUrl: string;
  sourcePublishedAt: string;
  sourceUpdatedAt: string;
  reviewedAt: string;
  durationSeconds: 32;
  fps: 30;
  distanceKm: 100;
  variables: {vehicles: Vehicle[]};
  scenes: {
    hookKicker: string;
    setupTitle: string;
    simulationTitle: string;
    resultTitle: string;
    contextTitle: string;
    contextBody: string;
    ctaTitle: string;
    ctaBody: string;
  };
  assumptions: string[];
  sources: {label: string; url: string; kind: 'editorial-example'; accessedAt: string}[];
  result: string;
  disclaimer: string;
  cta: string;
  requiresHumanReview: true;
};

const record = (value: unknown, path: string): Record<string, unknown> => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${path}: objeto obligatorio`);
  return value as Record<string, unknown>;
};
const string = (value: unknown, path: string, max = 240): string => {
  if (typeof value !== 'string' || !value.trim() || value.length > max) throw new Error(`${path}: texto obligatorio (máximo ${max} caracteres)`);
  return value;
};
const number = (value: unknown, path: string, minimum = 0): number => {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum) throw new Error(`${path}: número finito ≥ ${minimum} obligatorio`);
  return value;
};
const date = (value: unknown, path: string): string => {
  const result = string(value, path, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(result) || Number.isNaN(Date.parse(result))) throw new Error(`${path}: fecha ISO inválida`);
  return result;
};
const url = (value: unknown, path: string): string => {
  const result = string(value, path, 300);
  if (!result.startsWith('https://') || !URL.canParse(result)) throw new Error(`${path}: URL HTTPS inválida`);
  return result;
};

export function validateVideoSpec(input: unknown): VideoSpec {
  const data = record(input, 'video');
  if (data.schemaVersion !== 1) throw new Error('schemaVersion: se requiere 1');
  const id = string(data.id, 'id', 60);
  if (!/^[a-z0-9-]+$/.test(id)) throw new Error('id: solo letras minúsculas, números y guiones');
  string(data.title, 'title', 110);
  string(data.hook, 'hook', 70);
  if (data.videoType !== 'comparison') throw new Error('videoType: fase 1 solo admite comparison');
  const sourceUrl = url(data.sourceUrl, 'sourceUrl');
  const published = date(data.sourcePublishedAt, 'sourcePublishedAt');
  const updated = date(data.sourceUpdatedAt, 'sourceUpdatedAt');
  const reviewed = date(data.reviewedAt, 'reviewedAt');
  if (published > updated || updated > reviewed) throw new Error('fechas: orden cronológico inconsistente');
  if (data.durationSeconds !== 32 || data.fps !== 30 || data.distanceKm !== 100) {
    throw new Error('fase 1: duración 32 s, 30 fps y distancia 100 km obligatorias');
  }
  const variables = record(data.variables, 'variables');
  if (!Array.isArray(variables.vehicles) || variables.vehicles.length !== 3) throw new Error('variables.vehicles: se requieren tres vehículos');
  const seen = new Set<string>();
  for (const [i, raw] of variables.vehicles.entries()) {
    const vehicle = record(raw, `vehicles[${i}]`);
    const vehicleId = string(vehicle.id, `vehicles[${i}].id`, 20);
    if (!['gasoline', 'diesel', 'electric'].includes(vehicleId) || seen.has(vehicleId)) throw new Error(`vehicles[${i}].id: tipo duplicado o inválido`);
    seen.add(vehicleId);
    string(vehicle.label, `vehicles[${i}].label`, 18);
    const consumption = number(vehicle.consumptionPer100Km, `vehicles[${i}].consumptionPer100Km`, 0.001);
    const price = number(vehicle.pricePerUnit, `vehicles[${i}].pricePerUnit`, 0.001);
    if (consumption > 100 || price > 100) throw new Error(`vehicles[${i}]: supuesto fuera del rango admisible`);
    const electric = vehicleId === 'electric';
    if (vehicle.energyUnit !== (electric ? 'kWh' : 'L') || vehicle.priceUnit !== (electric ? '€/kWh' : '€/L')) throw new Error(`vehicles[${i}]: unidades incompatibles`);
    string(vehicle.priceContext, `vehicles[${i}].priceContext`, 50);
    if (!Number.isFinite(calculateCostPer100Km(consumption, price))) throw new Error(`vehicles[${i}]: coste inválido`);
  }
  const scenes = record(data.scenes, 'scenes');
  for (const [key, max] of Object.entries({hookKicker: 55, setupTitle: 45, simulationTitle: 45, resultTitle: 45, contextTitle: 50, contextBody: 120, ctaTitle: 50, ctaBody: 80})) {
    string(scenes[key], `scenes.${key}`, max);
  }
  if (!Array.isArray(data.assumptions) || data.assumptions.length < 3) throw new Error('assumptions: faltan supuestos');
  data.assumptions.forEach((item: unknown, i: number) => string(item, `assumptions[${i}]`, 220));
  if (!Array.isArray(data.sources) || data.sources.length < 1) throw new Error('sources: se requiere una fuente');
  data.sources.forEach((item: unknown, i: number) => {
    const source = record(item, `sources[${i}]`);
    string(source.label, `sources[${i}].label`, 80);
    url(source.url, `sources[${i}].url`);
    date(source.accessedAt, `sources[${i}].accessedAt`);
    if (source.kind !== 'editorial-example') throw new Error(`sources[${i}].kind: debe ser editorial-example`);
  });
  if (!data.sources.some((item: {url: string}) => item.url === sourceUrl)) throw new Error('sources: falta sourceUrl');
  string(data.result, 'result', 180);
  string(data.disclaimer, 'disclaimer', 110);
  string(data.cta, 'cta', 80);
  if (data.cta !== scenes.ctaBody) throw new Error('cta: debe coincidir con scenes.ctaBody');
  if (data.requiresHumanReview !== true) throw new Error('requiresHumanReview: obligatorio para precios variables');
  return data as VideoSpec;
}
