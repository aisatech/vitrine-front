import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_HAMBURGER } from '@/components/icons/svg-strings';

export const html = `
<header class="w-full bg-[var(--color-surface)] border-b border-[var(--color-border)]">
  <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <a href="#" class="flex items-center gap-2">
      <img src="${ASSET_PATHS.logo}" alt="Logo" class="h-8 w-8" />
      <span class="text-lg font-semibold text-[var(--color-text-main)]">Seu Nome</span>
    </a>
    <nav class="hidden items-center gap-8 md:flex">
      <a href="#sobre" class="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">Sobre</a>
      <a href="#projetos" class="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">Projetos</a>
      <a href="#contato" class="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">Contato</a>
    </nav>
    <button type="button" class="flex items-center justify-center rounded-md p-2 text-[var(--color-text-main)] md:hidden" aria-label="Abrir menu" data-menu-toggle>
      ${ICON_HAMBURGER}
    </button>
  </div>
</header>
`.trim();
