export type CatalogCategory = 'Headers' | 'Heroes' | 'Seções' | 'Footers';

export interface CatalogBlock {
  id: string;
  name: string;
  category: CatalogCategory;
  html: string;
}

export { CATALOG_BLOCKS } from './generated';
