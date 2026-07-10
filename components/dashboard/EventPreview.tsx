'use client';

import { useMemo, useState } from 'react';
import { CATALOG_BLOCKS } from '@/catalog';
import { BlockPreview } from './BlockPreview';
import { CopyHtmlButton } from './CopyHtmlButton';

const EVENT_HERO_IDS = ['corporate-event', 'festival-immersive', 'retro-event'];
const EVENT_AGENDA_IDS = ['classic-timeline', 'multitrack-table', 'expandable-agenda'];

function TabList({
  label,
  options,
  activeId,
  onSelect,
}: {
  label: string;
  options: { id: string; name: string }[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-[var(--color-text-muted)]">{label}</p>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={option.id === activeId}
            onClick={() => onSelect(option.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              option.id === activeId
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-bg)]'
                : 'border-[var(--color-border)] text-[var(--color-text-main)] hover:border-[var(--color-primary)]'
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export function EventPreview() {
  const heroOptions = useMemo(
    () => EVENT_HERO_IDS.map((id) => CATALOG_BLOCKS.find((block) => block.id === id)).filter(Boolean) as typeof CATALOG_BLOCKS,
    [],
  );
  const agendaOptions = useMemo(
    () => EVENT_AGENDA_IDS.map((id) => CATALOG_BLOCKS.find((block) => block.id === id)).filter(Boolean) as typeof CATALOG_BLOCKS,
    [],
  );

  const [activeHeroId, setActiveHeroId] = useState(heroOptions[0]?.id ?? '');
  const [activeAgendaId, setActiveAgendaId] = useState(agendaOptions[0]?.id ?? '');

  const activeHero = heroOptions.find((block) => block.id === activeHeroId);
  const activeAgenda = agendaOptions.find((block) => block.id === activeAgendaId);

  return (
    <section className="space-y-6 rounded-xl border border-[var(--color-border)] p-6">
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text-main)]">Combinações de Evento</h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Escolha um Hero de Evento e uma Cronograma para visualizar juntos.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
        <TabList label="Hero de Evento" options={heroOptions} activeId={activeHeroId} onSelect={setActiveHeroId} />
        <TabList label="Cronograma" options={agendaOptions} activeId={activeAgendaId} onSelect={setActiveAgendaId} />
      </div>

      <div className="space-y-3">
        {activeHero ? (
          <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
              <span className="text-sm font-medium">{activeHero.name}</span>
              <CopyHtmlButton html={activeHero.html} />
            </div>
            <BlockPreview html={activeHero.html} />
          </div>
        ) : null}

        {activeAgenda ? (
          <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
              <span className="text-sm font-medium">{activeAgenda.name}</span>
              <CopyHtmlButton html={activeAgenda.html} />
            </div>
            <BlockPreview html={activeAgenda.html} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
