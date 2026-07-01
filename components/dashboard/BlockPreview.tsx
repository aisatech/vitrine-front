interface BlockPreviewProps {
  html: string;
}

// Renderiza o HTML puro do bloco. As cores atualizam sozinhas porque o
// navegador recalcula var(--...) quando o :root muda — não é preciso
// re-renderizar nada aqui quando o ThemePicker altera o tema.
export function BlockPreview({ html }: BlockPreviewProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
