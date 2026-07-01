import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Catálogo de Componentes | Portfólio',
  description: 'Catálogo privado de blocos copiar-e-colar para portfólios estáticos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
