import { ASSET_PATHS } from '@/lib/asset-paths';
import { ICON_HAMBURGER } from '@/components/icons/svg-strings';

export const html = `
<header class="w-full px-4 pt-4 sticky top-0 z-50">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 
              bg-[var(--color-surface)]/90 backdrop-blur-md
              border border-[var(--color-border)] 
              rounded-[var(--radius-component,12px)] shadow-md">
              
    <a href="#" class="flex items-center gap-2 shrink-0">
      <img src="${ASSET_PATHS.logo}" alt="Logo" class="h-6 w-auto" />
    </a>

    <nav class="hidden items-center gap-6 lg:flex mx-auto">
      <div class="relative group">
        <button class="flex items-center gap-1 text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition">
          Explore <span class="text-[var(--color-text-muted)] text-[10px]">+</span>
        </button>
      </div>
      <a href="#services" class="text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition">Services</a>
      <a href="#packages" class="text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition">Packages</a>
      <a href="#customers" class="text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-primary)] transition">Customers</a>

    </nav>

    <div class="hidden lg:block shrink-0">
      <a href="#buy" class="inline-block px-4 py-2 text-xs font-bold text-slate-900 
                 bg-[var(--color-primary,#facc15)] hover:opacity-90 transition-opacity
                 rounded-[calc(var(--radius-component,12px)-4px)]">
        Inscrever
      </a>
    </div>

    <button type="button" class="flex items-center justify-center rounded-md p-2 text-[var(--color-text-main)] lg:hidden" aria-label="Abrir menu" data-menu-toggle>
      ${ICON_HAMBURGER}
    </button>

  </div>
</header>
`.trim();
