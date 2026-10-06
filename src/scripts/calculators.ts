import {
  calculateAnnualCarCost,
  calculateCostPerKm,
  calculateEnergyComparison,
  calculateFuelConsumption,
  calculateTripCost,
} from '../lib/calculations';
import { formatEuro, formatEuroPerKm, formatNumber } from '../lib/formatters';

function renderResult(form: HTMLFormElement, title: string, items: [string, string][]) {
  const box = form.querySelector<HTMLElement>('.result-box')!;
  const prompt = form.querySelector<HTMLElement>('.form-prompt')!;
  box.replaceChildren();
  const heading = document.createElement('h3'); heading.textContent = title; box.append(heading);
  const list = document.createElement('dl'); list.className = 'result-list';
  for (const [label, value] of items) {
    const row = document.createElement('div'); row.className = 'result-row';
    const dt = document.createElement('dt'); dt.textContent = label;
    const dd = document.createElement('dd'); dd.textContent = value;
    row.append(dt, dd); list.append(row);
  }
  box.append(list); box.hidden = false; prompt.hidden = true;
}

document.querySelectorAll<HTMLFormElement>('[data-calculator]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const error = form.querySelector<HTMLElement>('.form-error')!;
    const box = form.querySelector<HTMLElement>('.result-box')!;
    const prompt = form.querySelector<HTMLElement>('.form-prompt')!;
    error.hidden = true; box.hidden = true;
    const values: Record<string, number> = {};
    for (const input of form.querySelectorAll<HTMLInputElement>('input[type="number"]')) {
      const raw = input.value.trim();
      if (!raw && input.closest('.field')?.querySelector('.optional')) { values[input.name] = 0; continue; }
      if (!raw) { error.textContent = `Completa el campo «${input.labels?.[0]?.textContent?.replace(' (opcional)', '') ?? input.name}» para calcular.`; error.hidden = false; input.focus(); return; }
      const value = Number(raw);
      if (!Number.isFinite(value) || value < Number(input.min || 0)) { error.textContent = `Revisa el valor de «${input.labels?.[0]?.textContent ?? input.name}». Debe ser igual o superior a ${input.min || 0}.`; error.hidden = false; input.focus(); return; }
      if (input.step !== 'any' && input.validity.stepMismatch) { error.textContent = `Revisa el formato del campo «${input.labels?.[0]?.textContent ?? input.name}».`; error.hidden = false; input.focus(); return; }
      values[input.name] = value;
    }
    try {
      switch (form.dataset.calculator) {
        case 'consumo-combustible': {
          const r = calculateFuelConsumption({ distanceKm: values.distanceKm, liters: values.liters, ...(form.elements.namedItem('pricePerLiter') as HTMLInputElement).value ? { pricePerLiter: values.pricePerLiter } : {} });
          renderResult(form, 'Consumo calculado', [['Consumo medio', `${formatNumber(r.litersPer100Km)} L/100 km`], ['Combustible repostado', `${formatNumber(r.liters)} L`], ...(r.fuelCost === null ? [] : [['Coste del combustible', formatEuro(r.fuelCost)] as [string, string]])]); break;
        }
        case 'coste-viaje-coche': {
          const r = calculateTripCost({ distanceKm: values.distanceKm, consumption: values.consumption, pricePerLiter: values.pricePerLiter, roundTrip: (form.elements.namedItem('roundTrip') as HTMLInputElement)?.checked, passengers: values.passengers || undefined });
          renderResult(form, 'Estimación del viaje', [['Distancia calculada', `${formatNumber(r.distanceKm)} km`], ['Combustible necesario', `${formatNumber(r.liters)} L`], ['Coste total', formatEuro(r.total)], ...(r.perPassenger === null ? [] : [['Coste por persona', formatEuro(r.perPassenger)] as [string, string]])]); break;
        }
        case 'coste-por-kilometro': {
          const r = calculateCostPerKm({ distanceKm: values.distanceKm, fuel: values.fuel, maintenance: values.maintenance, insurance: values.insurance, taxes: values.taxes, other: values.other });
          renderResult(form, 'Coste del periodo', [['Gastos incluidos', formatEuro(r.total)], ['Coste medio por km', formatEuroPerKm(r.perKm)]]); break;
        }
        case 'comparador-gasolina-diesel-electrico': {
          const r = calculateEnergyComparison({ distanceKm: values.distanceKm, fuelConsumption: values.fuelConsumption, fuelPrice: values.fuelPrice, electricConsumption: values.electricConsumption, electricityPrice: values.electricityPrice });
          renderResult(form, 'Coste energético estimado', [['Gasolina o diésel · por 100 km', formatEuro(r.fuelPer100Km)], ['Eléctrico · por 100 km', formatEuro(r.electricPer100Km)], ['Térmico · para la distancia', formatEuro(r.fuelTrip)], ['Eléctrico · para la distancia', formatEuro(r.electricTrip)], [r.savingsPer100Km >= 0 ? 'Diferencia a favor del eléctrico' : 'Diferencia a favor del térmico', formatEuro(Math.abs(r.savingsPer100Km))]]); break;
        }
        case 'coste-anual-coche': {
          const r = calculateAnnualCarCost({ annualKm: values.annualKm, fuel: values.fuel, insurance: values.insurance, maintenance: values.maintenance, taxes: values.taxes, parking: values.parking, other: values.other });
          renderResult(form, 'Resumen anual', [['Coste total al año', formatEuro(r.total)], ['Media mensual', formatEuro(r.monthly)], ['Coste por km', formatEuroPerKm(r.perKm)]]); break;
        }
      }
    } catch (cause) {
      error.textContent = cause instanceof Error ? cause.message : 'No se ha podido realizar el cálculo. Revisa los datos.'; error.hidden = false; prompt.hidden = false;
    }
  });
});
