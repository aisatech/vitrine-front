# CLAUDE.md

Catálogo privado de componentes "copiar e colar" para portfólios estáticos, hospedados na KingHost (sem Node.js). O painel de gerenciamento (este repositório) roda na Vercel com Next.js.

## Regras arquiteturais obrigatórias

1. **Nunca usar cores fixas do Tailwind** (`bg-blue-600`, `text-slate-900` etc.) em qualquer HTML dentro de `catalog/**`. Usar sempre `bg-[var(--nome)]`, `text-[var(--nome)]`, `border-[var(--nome)]`. As variáveis são declaradas no `theme.css` do projeto-destino, nunca no HTML copiado.
2. **Caminhos de assets são fixos e centralizados** em [lib/asset-paths.ts](lib/asset-paths.ts): `assets/brand/logo.svg`, `assets/brand/favicon.ico`, `assets/images/hero-bg.webp`, `assets/images/profile.webp`, `assets/images/project-[id].webp`. Nunca gerar paths dinamicamente via JS, nunca usar URLs externas.
3. **Blocos em `catalog/**` exportam HTML puro como string** (`export const html = \`...\`;`), nunca JSX renderizado. Esse texto é exatamente o que os botões "Copiar HTML" copiam — precisa continuar válido fora do React.
4. **Ícones são sempre SVG inline**, centralizados em [components/icons/svg-strings.ts](components/icons/svg-strings.ts) e interpolados nos templates dos blocos — nunca fonte de ícones externa (Font Awesome, Google Icons) nem `<script>` de terceiros no output.
5. **Output final não depende de Node.js**: apenas HTML5 semântico + classes Tailwind + SVG inline. O dashboard pode usar qualquer recurso do Next.js, mas o que os botões de cópia geram precisa rodar em hospedagem estática básica (KingHost, sem build step no servidor).
