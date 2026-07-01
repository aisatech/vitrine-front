'use client';

import { useState } from 'react';
import { copyToClipboard } from '@/lib/clipboard';

interface CopyTokensButtonProps {
  theme: Record<string, string>;
}

export function CopyTokensButton({ theme }: CopyTokensButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const body = Object.entries(theme)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');
    const css = `:root {\n${body}\n}`;
    const ok = await copyToClipboard(css);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-text-main)] transition hover:border-[var(--color-primary)]"
    >
      {copied ? 'Tokens copiados!' : 'Copiar Tokens de Estilo'}
    </button>
  );
}
