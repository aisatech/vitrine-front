import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_CALENDAR, ICON_TICKET } from '@/components/icons/svg-strings';

export const html = `
<section class="relative flex w-full min-h-[32rem] items-end overflow-hidden bg-[var(--color-bg)]" style="background-image:url('${ASSET_PATHS.heroBg}'); background-size:cover; background-position:center;">
  <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/70 to-transparent"></div>
  <div class="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-16">
    <span class="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-bg)]">
      ${ICON_CALENDAR}
      20 a 22 de Março, 2026
    </span>
    <h1 class="max-w-3xl text-5xl font-extrabold leading-none text-[var(--color-text-main)] sm:text-7xl">
      Festival <span class="text-[var(--color-primary)]">Imersão</span>
    </h1>
    <p class="max-w-xl text-lg text-[var(--color-text-muted)]">
      Três dias de música, arte e experiências imersivas ao ar livre.
    </p>
    <a href="#ingressos" class="inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary)] px-8 py-4 text-lg font-bold text-[var(--color-bg)] transition hover:opacity-90">
      ${ICON_TICKET}
      Garantir ingresso
    </a>
  </div>
</section>
`.trim();
