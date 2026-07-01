import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const catalogDir = path.join(rootDir, 'catalog');
const generatedFile = path.join(catalogDir, 'generated.ts');

const categoryMap = {
  headers: 'Headers',
  heroes: 'Heroes',
  sections: 'Seções',
  footers: 'Footers',
};

function toDisplayName(fileName) {
  return fileName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function collectBlocks(folderName) {
  const folderPath = path.join(catalogDir, folderName);
  if (!folderPath || !folderName) return [];

  return readdirSync(folderPath)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .sort()
    .map((file) => {
      const id = file.replace(/\.ts$/, '');
      const importName = `${folderName}${id.replace(/[^a-zA-Z0-9]/g, '')}`;

      return {
        id,
        importName,
        modulePath: `./${folderName}/${id}`,
        category: categoryMap[folderName] ?? 'Seções',
        name: toDisplayName(id),
      };
    });
}

const folders = ['headers', 'heroes', 'sections', 'footers'];
const blocks = folders.flatMap(collectBlocks);

const importLines = blocks.map(
  ({ importName, modulePath }) => `import { html as ${importName} } from '${modulePath}';`,
);

const registryLines = blocks.map(
  ({ id, importName, category, name }) =>
    `  { id: '${id}', name: '${name}', category: '${category}', html: ${importName} },`,
);

const output = `import type { CatalogBlock } from './index';

${importLines.join('\n')}

export const CATALOG_BLOCKS: CatalogBlock[] = [
${registryLines.join('\n')}
];
`;

mkdirSync(path.dirname(generatedFile), { recursive: true });
writeFileSync(generatedFile, output, 'utf8');
