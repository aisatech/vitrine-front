import { ICON_MIC } from '@/components/icons/svg-strings';

interface TrackSession {
  title: string;
  speaker: string;
}

interface TimeSlot {
  time: string;
  trackA: TrackSession;
  trackB: TrackSession;
  trackC: TrackSession;
}

const SLOTS: TimeSlot[] = [
  {
    time: '10:00',
    trackA: { title: 'IA aplicada a produtos', speaker: 'Bruna Costa' },
    trackB: { title: 'Design systems escaláveis', speaker: 'Rafael Nunes' },
    trackC: { title: 'Cultura de dados', speaker: 'Marina Torres' },
  },
  {
    time: '11:00',
    trackA: { title: 'Arquitetura de microsserviços', speaker: 'Pedro Lima' },
    trackB: { title: 'Pesquisa com usuários', speaker: 'Camila Souza' },
    trackC: { title: 'Growth e experimentação', speaker: 'Thiago Rocha' },
  },
  {
    time: '14:00',
    trackA: { title: 'Segurança em aplicações web', speaker: 'Larissa Prado' },
    trackB: { title: 'Acessibilidade na prática', speaker: 'Diego Farias' },
    trackC: { title: 'Liderança remota', speaker: 'Fernanda Dias' },
  },
];

function sessionCell(session: TrackSession) {
  return `
        <td class="border-t border-[var(--color-border)] px-4 py-4 align-top">
          <p class="font-medium text-[var(--color-text-main)]">${session.title}</p>
          <p class="mt-1 inline-flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            ${ICON_MIC}
            ${session.speaker}
          </p>
        </td>`;
}

function slotRow(slot: TimeSlot) {
  return `
      <tr>
        <th scope="row" class="whitespace-nowrap border-t border-[var(--color-border)] px-4 py-4 text-left text-sm font-semibold text-[var(--color-primary)]">
          ${slot.time}
        </th>${sessionCell(slot.trackA)}${sessionCell(slot.trackB)}${sessionCell(slot.trackC)}
      </tr>`;
}

export const html = `
<section id="programacao" class="w-full bg-[var(--color-bg)] px-6 py-20">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-10 text-3xl font-bold text-[var(--color-text-main)]">Cronograma multitrilha</h2>
    <div class="overflow-x-auto rounded-xl border border-[var(--color-border)]">
      <table class="w-full min-w-[640px] border-collapse text-left">
        <thead class="bg-[var(--color-surface)]">
          <tr>
            <th scope="col" class="px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)]">Horário</th>
            <th scope="col" class="px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)]">Trilha A</th>
            <th scope="col" class="px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)]">Trilha B</th>
            <th scope="col" class="px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)]">Trilha C</th>
          </tr>
        </thead>
        <tbody>${SLOTS.map(slotRow).join('')}
        </tbody>
      </table>
    </div>
  </div>
</section>
`.trim();
