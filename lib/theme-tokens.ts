export interface ThemeToken {
  key: string;
  label: string;
  defaultValue: string;
}

export const THEME_TOKENS: ThemeToken[] = [
  { key: '--color-primary', label: 'Primária', defaultValue: '#6366f1' },
  { key: '--color-secondary', label: 'Secundária', defaultValue: '#0ea5e9' },
  { key: '--color-bg', label: 'Fundo', defaultValue: '#0b0f19' },
  { key: '--color-surface', label: 'Superfície', defaultValue: '#111827' },
  { key: '--color-text-main', label: 'Texto principal', defaultValue: '#f9fafb' },
  { key: '--color-text-muted', label: 'Texto secundário', defaultValue: '#9ca3af' },
  { key: '--color-border', label: 'Borda', defaultValue: '#1f2937' },
];
