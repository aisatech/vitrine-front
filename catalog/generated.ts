import type { CatalogBlock } from './index';

import { html as headersheader01 } from './headers/header-01';
import { html as headersheader02 } from './headers/header-02';
import { html as heroescorporateevent } from './heroes/corporate-event';
import { html as heroesfestivalimmersive } from './heroes/festival-immersive';
import { html as heroeshero01 } from './heroes/hero-01';
import { html as heroesretroevent } from './heroes/retro-event';
import { html as sectionsclassictimeline } from './sections/classic-timeline';
import { html as sectionsexpandableagenda } from './sections/expandable-agenda';
import { html as sectionsmultitracktable } from './sections/multitrack-table';
import { html as sectionsprojectsgrid01 } from './sections/projects-grid-01';
import { html as footersfooter01 } from './footers/footer-01';

export const CATALOG_BLOCKS: CatalogBlock[] = [
  { id: 'header-01', name: 'Header 01', category: 'Headers', html: headersheader01 },
  { id: 'header-02', name: 'Header 02', category: 'Headers', html: headersheader02 },
  { id: 'corporate-event', name: 'Corporate Event', category: 'Heroes', html: heroescorporateevent },
  { id: 'festival-immersive', name: 'Festival Immersive', category: 'Heroes', html: heroesfestivalimmersive },
  { id: 'hero-01', name: 'Hero 01', category: 'Heroes', html: heroeshero01 },
  { id: 'retro-event', name: 'Retro Event', category: 'Heroes', html: heroesretroevent },
  { id: 'classic-timeline', name: 'Classic Timeline', category: 'Seções', html: sectionsclassictimeline },
  { id: 'expandable-agenda', name: 'Expandable Agenda', category: 'Seções', html: sectionsexpandableagenda },
  { id: 'multitrack-table', name: 'Multitrack Table', category: 'Seções', html: sectionsmultitracktable },
  { id: 'projects-grid-01', name: 'Projects Grid 01', category: 'Seções', html: sectionsprojectsgrid01 },
  { id: 'footer-01', name: 'Footer 01', category: 'Footers', html: footersfooter01 },
];
