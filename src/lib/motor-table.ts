export type MotorTableVersion = {
  name: string;
  type?: string;
  powertrainGroup?: 'mixed' | 'mild-bifuel' | 'multi-energy';
  power: string;
  displacement: string;
  maxTorque: string;
  torqueScope: string;
  torqueRpm: string;
  additionalTorque?: string;
  note?: string;
};

type Powertrain = 'electric' | 'hydrogen' | 'plug-in' | 'hybrid' | 'mild-hybrid' | 'mild-bifuel' | 'multi-energy' | 'bifuel' | 'diesel' | 'petrol' | 'mixed';

function classifyPowertrain(item: MotorTableVersion): Powertrain {
  if (item.powertrainGroup) return item.powertrainGroup;
  const text = `${item.name} ${item.displacement} ${item.torqueScope} ${item.note ?? ''}`;
  if (/mirai|pila de combustible|fuel.?cell|FCV|hidrógeno/i.test(text)) return 'hydrogen';
  if (/plug.?in|\bPHEV\b|e-?hybrid|TFSI\s*e\b/i.test(text) || (/\benchufable\b/i.test(text) && !/\bno(?:\s+es)?\s+enchufable\b/i.test(text))) return 'plug-in';
  if (/\bMHEV\b|48\s?V|\beTSI\b/i.test(text) || (/mild.?hybrid|hibridación ligera/i.test(text) && !/\b(?:sin|no es|no tiene)\s+(?:sistema\s+)?mild.?hybrid\b/i.test(text))) return 'mild-hybrid';
  if (/\bHEV\b|híbrido|híbrida|\bHSD\b/i.test(text) || (/\bhybrid\b/i.test(text) && !/mild.?hybrid/i.test(text))) return 'hybrid';
  if (/eco.?g|\bGLP\b|\bLPG\b|bifuel|bi.?fuel/i.test(text)) return 'bifuel';
  if (/e-tron|\bBEV\b|\belectric(?:al)?\b|eléctric|100\s?%\s*eléctr|bZ4x|C-HR\+/i.test(text)) return 'electric';
  if (/diésel|diesel|\bTDI\b|\bCRDi\b|\bdCi\b|D-4D|D4D|\b\d\.\dD\b/i.test(text)) return 'diesel';
  return 'petrol';
}

function formatPowerCvFirst(value: string): string {
  const clean = value
    .replace(/;?\s*hasta\s+\d+\s*kW(?:\s*\([^)]*\))?\s+con\s+Launch Control/gi, '')
    .replace(/\s+de potencia de sistema/gi, '')
    .replace(/\s+de sistema/gi, '')
    .replace(/\s+combinados?/gi, '')
    .replace(/\s+a\s+\d[\d.]*\s*rpm/gi, '')
    .trim();
  const scopedPowerParts = clean.split(';').map((part) => {
    const match = part.trim().match(/^(.+?):\s*(\d+(?:[.,]\d+)?)\s*CV\s*\(\s*(\d+(?:[.,]\d+)?)\s*kW\s*\)$/i);
    return match ? `${match[1].trim()}: ${match[2]} CV (${match[3]} kW)` : '';
  });
  if (scopedPowerParts.length > 1 && scopedPowerParts.every(Boolean)) return scopedPowerParts.join('; ');
  const rangePair = clean.match(/(\d+(?:[.,]\d+)?)\s*[–-]\s*(\d+(?:[.,]\d+)?)\s*kW\s*\(\s*(\d+(?:[.,]\d+)?)\s*[–-]\s*(\d+(?:[.,]\d+)?)\s*CV\s*\)/i);
  if (rangePair) {
    const suffix = clean.slice(rangePair.index! + rangePair[0].length).replace(/^[,;\s]+/, '').trim();
    return `${rangePair[3]}–${rangePair[4]} CV (${rangePair[1]}–${rangePair[2]} kW)${suffix ? `, ${suffix}` : ''}`;
  }
  const kwRange = clean.match(/(hasta\s+)?(\d+(?:[.,]\d+)?)\s*[–-]\s*(\d+(?:[.,]\d+)?)\s*kW/i);
  if (kwRange) {
    const lower = kwRange[2].replace(',', '.');
    const upper = kwRange[3].replace(',', '.');
    const suffix = clean.slice(kwRange.index! + kwRange[0].length).replace(/^[,;\s]+/, '').trim();
    return `${kwRange[1] ? 'Hasta ' : ''}${Math.round(Number(lower) * 1.35962)}–${Math.round(Number(upper) * 1.35962)} CV (${kwRange[2]}–${kwRange[3]} kW)${suffix ? `, ${suffix}` : ''}`;
  }
  const cvRange = clean.match(/(hasta\s+)?(\d+(?:[.,]\d+)?)\s*[–-]\s*(\d+(?:[.,]\d+)?)\s*CV/i);
  if (cvRange) {
    const lower = Number(cvRange[2].replace(',', '.'));
    const upper = Number(cvRange[3].replace(',', '.'));
    const suffix = clean.slice(cvRange.index! + cvRange[0].length).replace(/^[,;\s]+/, '').trim();
    return `${cvRange[1] ? 'Hasta ' : ''}${cvRange[2]}–${cvRange[3]} CV (${Math.round(lower / 1.35962)}–${Math.round(upper / 1.35962)} kW)${suffix ? `, ${suffix}` : ''}`;
  }
  const cvFirst = [...clean.matchAll(/(\d+(?:[.,]\d+)?)\s*CV\s*\((\d+(?:[.,]\d+)?)\s*kW\)/gi)];
  if (cvFirst.length) {
    return `${/hasta/i.test(clean) ? 'Hasta ' : ''}${cvFirst.map((match) => `${match[1]} CV (${match[2]} kW)`).join(' / ')}`;
  }
  const kwFirst = [...clean.matchAll(/(\d+(?:[.,]\d+)?)\s*kW\s*\(\s*(\d+(?:[.,]\d+)?)\s*CV\b/gi)];
  if (kwFirst.length) {
    return `${/hasta/i.test(clean) ? 'Hasta ' : ''}${kwFirst.map((match) => `${match[2]} CV (${match[1]} kW)`).join(' / ')}`;
  }
  const kw = clean.match(/(hasta\s+)?(\d+(?:[.,]\d+)?)\s*kW/i);
  if (kw) {
    const kilowatts = Number(kw[2].replace(',', '.'));
    return `${kw[1] ? 'Hasta ' : ''}${Math.round(kilowatts * 1.35962)} CV (${kw[2]} kW)`;
  }
  const cvValues = [...clean.matchAll(/(\d+(?:[.,]\d+)?)\s*CV/gi)];
  if (cvValues.length) {
    const values = cvValues.map((match) => {
      const cv = Number(match[1].replace(',', '.'));
      return `${match[1]} CV (${Math.round(cv / 1.35962)} kW)`;
    });
    return `${/hasta/i.test(clean) ? 'Hasta ' : ''}${values.join(' / ')}`;
  }
  return clean;
}

function formatDisplacement(value: string, powertrain: Powertrain): string {
  if (powertrain === 'electric' || powertrain === 'hydrogen') return '—';
  const cubicCentimetres = value.match(/([\d.]+)\s*cm³/i)?.[1];
  const litres = [...value.matchAll(/(\d+(?:[,.]\d+)?(?:\s*(?:\/|o)\s*\d+(?:[,.]\d+)?)*?)\s*(?:l|litro|litros)\b/gi)]
    .flatMap((match) => match[1].split(/\s*(?:\/|o)\s*/i));
  const distinctLitres = [...new Set(litres)];
  const volume = cubicCentimetres
    ? `${cubicCentimetres} cm³`
    : distinctLitres.length > 1
      ? `${distinctLitres.join(' / ')} l`
      : distinctLitres.length === 1 ? `${distinctLitres[0]} l` : '';
  if (!volume) return 'No publicada en la ficha consultada';
  if (powertrain === 'mixed') return `Térmico (según versión): ${volume}`;
  if (powertrain === 'hybrid' || powertrain === 'plug-in') return `Térmico: ${volume}; eléctrico: —`;
  if (powertrain === 'mild-hybrid') return `Térmico: ${volume}`;
  if (powertrain === 'mild-bifuel') return `Térmico: ${volume}`;
  if (powertrain === 'multi-energy') return `Térmico: ${volume}; eléctrico: —`;
  return volume;
}

function formatTorque(item: MotorTableVersion, powertrain: Powertrain): string {
  if (powertrain === 'electric' || powertrain === 'hydrogen' || powertrain === 'mixed') return '';
  const rpm = item.torqueRpm.match(/(\d[\d.]*(?:\s*[–-]\s*\d[\d.]*)?)\s*rpm/i)?.[1];
  if (!rpm || /consultar|según|no publicado|no aplica|no desglosado/i.test(item.torqueRpm)) return '';
  const torque = item.maxTorque.match(/(\d{2,4}(?:[.,]\d+)?)\s*Nm/i)?.[1];
  if (!torque) return '';

  const isHybrid = powertrain === 'hybrid' || powertrain === 'plug-in' || powertrain === 'mild-hybrid' || powertrain === 'mild-bifuel' || powertrain === 'multi-energy';
  const scopeIsThermal = /térmic|gasolina|diésel|diesel|combustión|\bTFSI\b|\bTSI\b|\beTSI\b|\bTDI\b|\bCRDi\b|D-4D|D4D/i.test(item.torqueScope);
  const scopeIsSystem = /sistema híbrido|sistema combinado|par del sistema/i.test(item.torqueScope);
  if (isHybrid && !scopeIsThermal && !scopeIsSystem) return '';
  if (!isHybrid && /eléctrico|electric|sistema|combinad/i.test(item.torqueScope)) return '';

  const regime = rpm.replace(/\s*[–-]\s*/, '–');
  const approximate = /aproximadamente|aprox\./i.test(item.torqueRpm) ? 'aprox. ' : '';
  const scopeLabel = isHybrid ? (scopeIsSystem ? 'Sistema: ' : 'Térmico: ') : '';
  return `${scopeLabel}${torque} Nm (${approximate}${regime} rpm)`;
}

export function formatMotorTableVersion(item: MotorTableVersion): MotorTableVersion {
  const powertrain = classifyPowertrain(item);
  const type = {
    electric: 'Eléctrico',
    hydrogen: 'Hidrógeno (pila de combustible)',
    'plug-in': 'Híbrido enchufable (gasolina + eléctrico)',
    hybrid: 'Híbrido (gasolina + eléctrico)',
    'mild-hybrid': `Microhíbrido (${/diésel|diesel|\bTDI\b|\bCRDi\b|D-4D|D4D/i.test(`${item.name} ${item.displacement} ${item.torqueScope}`) ? 'diésel' : 'gasolina'})`,
    'mild-bifuel': 'Microhíbrido bifuel (gasolina + GLP)',
    'multi-energy': item.type ?? 'Híbrido gasolina/GLP + eléctrico',
    bifuel: 'Bifuel (gasolina + GLP)',
    diesel: 'Diésel',
    petrol: 'Gasolina',
    mixed: item.type ?? 'Motorizaciones distintas, según versión',
  }[powertrain];

  let power = formatPowerCvFirst(item.power);
  const hasPowerUnits = /\b(?:CV|kW)\b/i.test(power);
  const powerHasExplicitScopes = /(?:sistema|térmico|motor térmico|eléctrico(?: trasero)?|motor eléctrico)\s*:/i.test(power);
  if (hasPowerUnits && !powerHasExplicitScopes && (powertrain === 'hybrid' || powertrain === 'plug-in')) power = `Sistema: ${power}`;
  else if (hasPowerUnits && !powerHasExplicitScopes && (powertrain === 'mild-hybrid' || powertrain === 'mild-bifuel')) power = `Térmico: ${power}`;
  else if (hasPowerUnits && !powerHasExplicitScopes && powertrain === 'multi-energy') power = `Sistema: ${power}`;
  else if (hasPowerUnits && !powerHasExplicitScopes && powertrain === 'hydrogen') power = `Sistema eléctrico: ${power}`;
  else if (hasPowerUnits && !powerHasExplicitScopes && powertrain === 'mixed') power = `Según versión: ${power.replace(/,\s*según\s+(?:versión|acabado).*$/i, '')}`;

  return {
    ...item,
    type: item.type ?? type,
    power,
    displacement: formatDisplacement(item.displacement, powertrain),
    maxTorque: formatTorque(item, powertrain),
  };
}
