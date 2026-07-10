import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_ARROW_RIGHT } from '@/components/icons/svg-strings';

export const html = `
<section class="relative w-full overflow-hidden bg-[var(--color-bg)]" style="background-image:url('${ASSET_PATHS.heroBg}'); background-size:cover; background-position:center;">
  <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center">
   
    <h1 class="text-4xl font-bold text-[var(--color-text-main)] sm:text-5xl">Olá, eu sou <span class="text-[var(--color-primary)]">Imersão Festival</span></h1>
    <p class="max-w-xl text-lg text-[var(--color-text-muted)]">Imersão online </p>
    <a href="#projetos" class="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--color-bg)] transition hover:opacity-90">
      Ver projetos
      ${ICON_ARROW_RIGHT}
    </a>
  </div>
</section>
`.trim();