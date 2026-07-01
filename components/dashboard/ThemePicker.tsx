'use client';

import { THEME_TOKENS } from '@/lib/theme-tokens';

interface ThemePickerProps {
  theme: Record<string, string>;
  onChange: (key: string, value: string) => void;
}

export function ThemePicker({ theme, onChange }: ThemePickerProps) {
  return (
    <div className="space-y-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      {THEME_TOKENS.map((token) => (
        <label key={token.key} className="flex items-center justify-between gap-3 text-sm">
          <span className="text-[var(--color-text-muted)]">{token.label}</span>
          <input
            type="color"
            value={theme[token.key] ?? token.defaultValue}
            onChange={(event) => onChange(token.key, event.target.value)}
            className="h-8 w-12 cursor-pointer rounded border border-[var(--color-border)] bg-transparent"
            aria-label={token.label}
          />
        </label>
      ))}
    </div>
  );
}
