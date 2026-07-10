import { ICON_CALENDAR, ICON_MAP_PIN, ICON_ARROW_RIGHT } from '@/components/icons/svg-strings';

export const html = `
<section class="w-full bg-[var(--color-bg)] px-6 py-20">
  <div class="mx-auto max-w-4xl border-4 border-double border-[var(--color-primary)] bg-[var(--color-surface)] p-10 text-center">
    <span class="inline-block rotate-[-2deg] border-2 border-[var(--color-primary)] px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
      Edição 2026
    </span>
    <h1 class="mt-6 font-mono text-4xl font-bold uppercase tracking-tight text-[var(--color-text-main)] sm:text-5xl">
      Retrô Fest
    </h1>
    <p class="mx-auto mt-4 max-w-lg font-mono text-base text-[var(--color-text-muted)]">
      &gt; Uma noite inteira dedicada aos clássicos que marcaram época.
    </p>
    <div class="mx-auto mt-6 flex w-fit flex-wrap items-center justify-center gap-5 border-y border-[var(--color-border)] py-3 font-mono text-sm text-[var(--color-text-muted)]">
      <span class="inline-flex items-center gap-2">
        ${ICON_CALENDAR}
        08 de Agosto, 2026
      </span>
      <span class="inline-flex items-center gap-2">
        ${ICON_MAP_PIN}
        Casa de Shows Vintage
      </span>
    </div>
    <a href="#inscricao" class="mt-8 inline-flex items-center gap-2 border-2 border-[var(--color-primary)] px-6 py-3 font-mono font-bold uppercase text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]">
      Comprar entrada
      ${ICON_ARROW_RIGHT}
    </a>
  </div>
</section>
`.trim();
