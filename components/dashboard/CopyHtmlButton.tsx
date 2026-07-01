'use client';

import { useState } from 'react';
import { copyToClipboard } from '@/lib/clipboard';

interface CopyHtmlButtonProps {
  html: string;
}

export function CopyHtmlButton({ html }: CopyHtmlButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const ok = await copyToClipboard(html.trim());
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-xs font-medium text-[var(--color-bg)] transition hover:opacity-90"
    >
      {copied ? 'Copiado!' : 'Copiar HTML'}
    </button>
  );
}
