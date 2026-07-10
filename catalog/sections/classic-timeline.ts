import { ICON_CLOCK, ICON_MAP_PIN } from '@/components/icons/svg-strings';

interface TimelineEntry {
  time: string;
  title: string;
  speaker: string;
  location: string;
}

const ENTRIES: TimelineEntry[] = [
  { time: '09:00', title: 'Credenciamento e café de boas-vindas', speaker: 'Equipe organizadora', location: 'Hall principal' },
  { time: '10:00', title: 'Abertura oficial do evento', speaker: 'Ana Ribeiro', location: 'Auditório 1' },
  { time: '11:00', title: 'O futuro da liderança digital', speaker: 'Carlos Mendes', location: 'Auditório 1' },
  { time: '14:00', title: 'Workshop: construindo times de alta performance', speaker: 'Juliana Alves', location: 'Sala 3' },
  { time: '16:30', title: 'Encerramento e coquetel de networking', speaker: 'Equipe organizadora', location: 'Terraço' },
];

function timelineItem(entry: TimelineEntry, isLast: boolean) {
  return `
      <li class="relative flex gap-6 pb-10 ${isLast ? '' : 'border-l border-[var(--color-border)]'} pl-8">
        <span class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-[var(--color-bg)] bg-[var(--color-primary)]"></span>
        <div class="flex flex-col gap-1">
          <span class="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
            ${ICON_CLOCK}
            ${entry.time}
          </span>
          <h3 class="text-lg font-semibold text-[var(--color-text-main)]">${entry.title}</h3>
          <p class="text-sm text-[var(--color-text-muted)]">${entry.speaker}</p>
          <span class="inline-flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            ${ICON_MAP_PIN}
            ${entry.location}
          </span>
        </div>
      </li>`;
}

export const html = `
<section id="programacao" class="w-full bg-[var(--color-bg)] px-6 py-20">
  <div class="mx-auto max-w-3xl">
    <h2 class="mb-10 text-3xl font-bold text-[var(--color-text-main)]">Cronograma</h2>
    <ol class="ml-2">${ENTRIES.map((entry, index) => timelineItem(entry, index === ENTRIES.length - 1)).join('')}
    </ol>
  </div>
</section>
`.trim();
