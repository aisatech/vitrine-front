// Fonte única dos caminhos de assets usados no HTML copiado.
// Caminhos são sempre relativos e literais — nunca gerados dinamicamente
// no output final (regra 2 da arquitetura, ver CLAUDE.md).
export const ASSET_PATHS = {
  logo: 'assets/brand/logo.svg',
  favicon: 'assets/brand/favicon.ico',
  heroBg: 'assets/images/hero-bg.webp',
  profile: 'assets/images/profile.webp',
  project: (id: number | string) => `assets/images/project-${id}.webp`,
} as const;
