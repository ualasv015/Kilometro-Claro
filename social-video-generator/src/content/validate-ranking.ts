export type BrandRank = {rank: number; brand: string; registrations: number};
export type RankingVideoSpec = {
  schemaVersion: 1;
  id: string;
  title: string;
  durationSeconds: 30;
  fps: 30;
  periodLabel: string;
  articleUrl: string;
  sourceLabel: string;
  brandRanking: BrandRank[];
  modelLeader: {brand: string; model: string; registrations: number; brandRank: number; brandRegistrations: number};
  growthStory: {brand: string; registrations2024: number; registrations2025: number; growthPercent: number; rank2024: number; rank2025: number};
  editorialNote: string;
  requiresHumanReview: true;
};

const object = (value: unknown, path: string): Record<string, unknown> => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${path}: objeto obligatorio`);
  return value as Record<string, unknown>;
};
const text = (value: unknown, path: string): string => {
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${path}: texto obligatorio`);
  return value;
};
const positive = (value: unknown, path: string): number => {
  if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) throw new Error(`${path}: número positivo obligatorio`);
  return value;
};

export function validateRankingVideo(input: unknown): RankingVideoSpec {
  const spec = object(input, 'video');
  if (spec.schemaVersion !== 1 || spec.durationSeconds !== 30 || spec.fps !== 30) throw new Error('El Reel requiere schemaVersion 1, 30 segundos y 30 fps');
  text(spec.id, 'id');
  text(spec.title, 'title');
  text(spec.periodLabel, 'periodLabel');
  const articleUrl = text(spec.articleUrl, 'articleUrl');
  if (!articleUrl.startsWith('https://') || !URL.canParse(articleUrl)) throw new Error('articleUrl: URL HTTPS inválida');
  text(spec.sourceLabel, 'sourceLabel');
  if (!Array.isArray(spec.brandRanking) || spec.brandRanking.length !== 3) throw new Error('brandRanking: se requieren tres marcas');
  const brandRanking = spec.brandRanking.map((item, index) => {
    const row = object(item, `brandRanking[${index}]`);
    const rank = positive(row.rank, `brandRanking[${index}].rank`);
    if (!Number.isInteger(rank) || rank !== index + 1) throw new Error('brandRanking: los puestos deben ser 1, 2 y 3');
    return {rank, brand: text(row.brand, `brandRanking[${index}].brand`), registrations: positive(row.registrations, `brandRanking[${index}].registrations`)};
  });
  if (brandRanking.some((row, index) => index > 0 && row.registrations >= brandRanking[index - 1].registrations)) throw new Error('brandRanking: las matriculaciones deben ir en orden descendente');
  const model = object(spec.modelLeader, 'modelLeader');
  const modelLeader = {
    brand: text(model.brand, 'modelLeader.brand'),
    model: text(model.model, 'modelLeader.model'),
    registrations: positive(model.registrations, 'modelLeader.registrations'),
    brandRank: positive(model.brandRank, 'modelLeader.brandRank'),
    brandRegistrations: positive(model.brandRegistrations, 'modelLeader.brandRegistrations'),
  };
  const growth = object(spec.growthStory, 'growthStory');
  const growthStory = {
    brand: text(growth.brand, 'growthStory.brand'),
    registrations2024: positive(growth.registrations2024, 'growthStory.registrations2024'),
    registrations2025: positive(growth.registrations2025, 'growthStory.registrations2025'),
    growthPercent: positive(growth.growthPercent, 'growthStory.growthPercent'),
    rank2024: positive(growth.rank2024, 'growthStory.rank2024'),
    rank2025: positive(growth.rank2025, 'growthStory.rank2025'),
  };
  if (growthStory.registrations2025 !== brandRanking[1].registrations || growthStory.brand !== brandRanking[1].brand) throw new Error('growthStory: el dato de 2025 debe coincidir con el segundo puesto del ranking');
  text(spec.editorialNote, 'editorialNote');
  if (spec.requiresHumanReview !== true) throw new Error('requiresHumanReview: obligatorio');
  return {...spec, brandRanking, modelLeader, growthStory} as RankingVideoSpec;
}
