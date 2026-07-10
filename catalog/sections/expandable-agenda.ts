import { ICON_CHEVRON_DOWN, ICON_CLOCK } from '@/components/icons/svg-strings';

interface DaySession {
  time: string;
  title: string;
  speaker: string;
}

interface AgendaDay {
  label: string;
  date: string;
  sessions: DaySession[];
}

const DAYS: AgendaDay[] = [
  {
    label: 'Dia 1',
    date: '12 de Novembro',
    sessions: [
      { time: '09:00', title: 'Credenciamento', speaker: 'Equipe organizadora' },
      { time: '10:00', title: 'Palestra de abertura', speaker: 'Ana Ribeiro' },
      { time: '14:00', title: 'Painel: tendências do setor', speaker: 'Carlos Mendes' },
    ],
  },
  {
    label: 'Dia 2',
    date: '13 de Novembro',
    sessions: [
      { time: '09:30', title: 'Workshop prático', speaker: 'Juliana Alves' },
      { time: '11:00', title: 'Estudos de caso', speaker: 'Pedro Lima' },
      { time: '16:00', title: 'Encerramento', speaker: 'Equipe organizadora' },
    ],
  },
];

function sessionItem(session: DaySession) {
  return `
          <li class="flex items-center gap-4 border-t border-[var(--color-border)] px-6 py-4 first:border-t-0">
            <span class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
              ${ICON_CLOCK}
              ${session.time}
            </span>
            <div>
              <p class="font-medium text-[var(--color-text-main)]">${session.title}</p>
              <p class="text-sm text-[var(--color-text-muted)]">${session.speaker}</p>
            </div>
          </li>`;
}

function dayDetails(day: AgendaDay) {
  return `
      <details class="group overflow-hidden rounded-xl border border-[var(--color-border)]" ${day === DAYS[0] ? 'open' : ''}>
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 bg-[var(--color-surface)] px-6 py-4">
          <div>
            <p class="text-lg font-semibold text-[var(--color-text-main)]">${day.label}</p>
            <p class="text-sm text-[var(--color-text-muted)]">${day.date}</p>
          </div>
          ${ICON_CHEVRON_DOWN}
        </summary>
        <ul>${day.sessions.map(sessionItem).join('')}
        </ul>
      </details>`;
}

export const html = `
<section id="programacao" class="w-full bg-[var(--color-bg)] px-6 py-20">
  <div class="mx-auto max-w-3xl">
    <h2 class="mb-10 text-3xl font-bold text-[var(--color-text-main)]">Cronograma</h2>
    <div class="flex flex-col gap-4">${DAYS.map(dayDetails).join('')}
    </div>
  </div>
</section>
`.trim();
