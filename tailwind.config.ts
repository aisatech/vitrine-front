import type { Config } from 'tailwindcss';

// NOTA: não adicionar cores fixas em theme.extend.colors — os blocos do
// catálogo usam apenas valores arbitrários var(--...) resolvidos em runtime.
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './catalog/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
