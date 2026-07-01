'use client';

import { useMemo, useState } from 'react';
import { THEME_TOKENS } from '@/lib/theme-tokens';
import { CATALOG_BLOCKS } from '@/catalog';
import { ThemePicker } from './ThemePicker';
import { BlockPreview } from './BlockPreview';
import { CopyHtmlButton } from './CopyHtmlButton';
import { CopyTokensButton } from './CopyTokensButton';

function defaultThemeValues() {
  return THEME_TOKENS.reduce<Record<string, string>>((acc, token) => {
    acc[token.key] = token.defaultValue;
    return acc;
  }, {});
}

export function DashboardApp() {
  const [theme, setTheme] = useState<Record<string, string>>(defaultThemeValues);
  const [activeIndexes, setActiveIndexes] = useState<Record<string, number>>({});

  function handleTokenChange(key: string, value: string) {
    setTheme((prev) => ({ ...prev, [key]: value }));
    document.documentElement.style.setProperty(key, value);
  }

  function handleBlockChange(category: string, direction: -1 | 1) {
    setActiveIndexes((prev) => {
      const current = prev[category] ?? 0;
      const nextIndex = current + direction;
      return { ...prev, [category]: nextIndex };
    });
  }

  const categories = useMemo(() => {
    const map = new Map<string, typeof CATALOG_BLOCKS>();
    for (const block of CATALOG_BLOCKS) {
      const list = map.get(block.category) ?? [];
      list.push(block);
      map.set(block.category, list);
    }
    return Array.from(map.entries()).map(([category, blocks]) => ({ category, blocks }));
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row">
        <aside className="lg:w-72 lg:shrink-0">
          <div className="sticky top-10 space-y-6">
            <div>
              <h1 className="text-xl font-bold">Catálogo de Componentes</h1>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Ajuste as cores e copie o HTML ou os tokens.
              </p>
            </div>
            <ThemePicker theme={theme} onChange={handleTokenChange} />
            <CopyTokensButton theme={theme} />
          </div>
        </aside>

        <main className="flex-1 space-y-12">
          {categories.map(({ category, blocks }) => {
            const currentIndex = activeIndexes[category] ?? 0;
            const currentBlock = blocks[currentIndex] ?? blocks[0];
            const hasMultipleBlocks = blocks.length > 1;

            return (
              <section key={category} className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-text-muted)]">
                      {category}
                    </h2>
                    {hasMultipleBlocks ? (
                      <p className="text-sm text-[var(--color-text-muted)]">
                        Componente {Math.min(currentIndex + 1, blocks.length)} de {blocks.length}
                      </p>
                    ) : null}
                  </div>
                  {hasMultipleBlocks ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleBlockChange(category, -1)}
                        className="rounded-md border border-[var(--color-border)] px-3 py-2 text-sm"
                      >
                        Anterior
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBlockChange(category, 1)}
                        className="rounded-md border border-[var(--color-border)] px-3 py-2 text-sm"
                      >
                        Próximo
                      </button>
                    </div>
                  ) : null}
                </div>

                {currentBlock ? (
                  <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
                    <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
                      <span className="text-sm font-medium">{currentBlock.name}</span>
                      <CopyHtmlButton html={currentBlock.html} />
                    </div>
                    <BlockPreview html={currentBlock.html} />
                  </div>
                ) : null}
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
}
