import { html as header01 } from './headers/header-01';
import { html as hero01 } from './heroes/hero-01';
import { html as projectsGrid01 } from './sections/projects-grid-01';
import { html as footer01 } from './footers/footer-01';

export interface CatalogBlock {
  id: string;
  name: string;
  category: 'Headers' | 'Heroes' | 'Seções' | 'Footers';
  html: string;
}

export const CATALOG_BLOCKS: CatalogBlock[] = [
  { id: 'header-01', name: 'Header 01 — Nav + Hambúrguer', category: 'Headers', html: header01 },
  { id: 'hero-01', name: 'Hero 01 — Perfil + CTA', category: 'Heroes', html: hero01 },
  { id: 'projects-grid-01', name: 'Projetos 01 — Grid', category: 'Seções', html: projectsGrid01 },
  { id: 'footer-01', name: 'Footer 01 — Social', category: 'Footers', html: footer01 },
];
