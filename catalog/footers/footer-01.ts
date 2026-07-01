import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_GITHUB, ICON_LINKEDIN, ICON_INSTAGRAM } from '@/components/icons/svg-strings';

export const html = `
<footer id="contato" class="w-full border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10">
  <div class="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
    <img src="${ASSET_PATHS.logo}" alt="Logo" class="h-8 w-8" />
    <p class="text-sm text-[var(--color-text-muted)]">© 2026 Seu Nome. Todos os direitos reservados.</p>
    <div class="flex items-center gap-4">
      <a href="#" aria-label="GitHub" class="text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">${ICON_GITHUB}</a>
      <a href="#" aria-label="LinkedIn" class="text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">${ICON_LINKEDIN}</a>
      <a href="#" aria-label="Instagram" class="text-[var(--color-text-muted)] transition hover:text-[var(--color-primary)]">${ICON_INSTAGRAM}</a>
    </div>
  </div>
</footer>
`.trim();
