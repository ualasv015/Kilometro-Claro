import { tools } from './tools';
import { guides } from './guides';
import { brands } from './brands';

export const searchItems = [
  ...tools.map((tool) => ({
    title: tool.title,
    description: tool.description,
    href: `/calculadoras/${tool.slug}/`,
    type: 'Calculadora',
    keywords: `${tool.category} ${tool.intent}`,
  })),
  ...guides.filter((guide) => guide.published).map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: `/guias/${guide.slug}/`,
    type: 'Guía',
    keywords: guide.category,
  })),
  ...brands.map((brand) => ({
    title: brand.name,
    description: brand.descriptor,
    href: `/marcas/${brand.slug}/`,
    type: 'Marca',
    keywords: `${brand.country} ${brand.powertrains.join(' ')} ${brand.models.map((model) => model.name).join(' ')}`,
  })),
  ...brands.flatMap((brand) => brand.models.filter((model) => model.pageSlug).map((model) => ({
    title: `${brand.name} ${model.name}`,
    description: `${model.body}. Motorizaciones: ${model.powertrains.join(', ')}.`,
    href: `/marcas/${brand.slug}/${model.pageSlug}/`,
    type: 'Modelo',
    keywords: `${brand.name} ${model.name} ${model.body} ${model.powertrains.join(' ')}`,
  }))),
];
