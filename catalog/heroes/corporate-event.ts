import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_CALENDAR, ICON_MAP_PIN, ICON_ARROW_RIGHT } from '@/components/icons/svg-strings';

export const html = `
<section class="relative w-full overflow-hidden bg-[var(--color-surface)]">
  <div class="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
    <span class="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
      Evento Corporativo 2026
    </span>
    <h1 class="max-w-2xl text-4xl font-bold leading-tight text-[var(--color-text-main)] sm:text-5xl">
      Summit de Inovação e Liderança
    </h1>
    <p class="max-w-xl text-lg text-[var(--color-text-muted)]">
      Dois dias de palestras, workshops e networking com os principais nomes do mercado.
    </p>
    <div class="flex flex-wrap items-center gap-5 text-sm text-[var(--color-text-muted)]">
      <span class="inline-flex items-center gap-2">
        ${ICON_CALENDAR}
        12 e 13 de Novembro, 2026
      </span>
      <span class="inline-flex items-center gap-2">
        ${ICON_MAP_PIN}
        Centro de Convenções, São Paulo
      </span>
    </div>
    <div class="flex flex-wrap items-center gap-4 pt-2">
      <a href="#inscricao" class="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg)] transition hover:opacity-90">
        Inscreva-se
        ${ICON_ARROW_RIGHT}
      </a>
      <a href="#programacao" class="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-6 py-3 font-medium text-[var(--color-text-main)] transition hover:border-[var(--color-primary)]">
        Ver programação
      </a>
    </div>
  </div>
  <img src="${ASSET_PATHS.heroBg}" alt="" aria-hidden="true" class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 object-cover opacity-20 lg:block" />
</section>
`.trim();
