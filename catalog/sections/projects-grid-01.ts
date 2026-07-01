import { ASSET_PATHS } from '@/lib/asset-paths';

function projectCard(id: number, title: string) {
  return `
      <article class="group overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <img src="${ASSET_PATHS.project(id)}" alt="${title}" class="h-48 w-full object-cover transition duration-300 group-hover:scale-105" />
        <div class="p-5">
          <h3 class="text-lg font-semibold text-[var(--color-text-main)]">${title}</h3>
          <p class="mt-2 text-sm text-[var(--color-text-muted)]">Breve descrição do projeto e das tecnologias usadas.</p>
        </div>
      </article>`;
}

export const html = `
<section id="projetos" class="w-full bg-[var(--color-bg)] px-6 py-20">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-10 text-3xl font-bold text-[var(--color-text-main)]">Projetos</h2>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">${projectCard(1, 'Nome do Projeto 1')}${projectCard(2, 'Nome do Projeto 2')}${projectCard(3, 'Nome do Projeto 3')}
    </div>
  </div>
</section>
`.trim();
