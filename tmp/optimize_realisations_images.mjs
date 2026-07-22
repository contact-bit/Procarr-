import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = '/Users/hdconnects/Procarr-';
const pagePath = path.join(root, 'src/pages/RealisationsPage.tsx');
const outputDir = path.join(root, 'src/assets/optimized/realisations');
const source = await readFile(pagePath, 'utf8');
const importPattern = /^import\s+([A-Za-z0-9_]+)\s+from\s+'\.\.\/assets\/([^']+\.(?:jpe?g|png))';$/gim;
const imports = [...source.matchAll(importPattern)].map((match) => ({
  full: match[0],
  identifier: match[1],
  relativeSource: match[2],
}));

if (imports.length === 0) {
  console.log('Aucune image JPG, JPEG ou PNG à convertir.');
  process.exit(0);
}

await mkdir(outputDir, { recursive: true });

const convert = async ({ identifier, relativeSource }) => {
  const input = path.join(root, 'src/assets', relativeSource);
  const output = path.join(outputDir, `${identifier}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(output);
};

for (let index = 0; index < imports.length; index += 4) {
  await Promise.all(imports.slice(index, index + 4).map(convert));
  console.log(`${Math.min(index + 4, imports.length)}/${imports.length}`);
}

let updatedSource = source;
for (const item of imports) {
  updatedSource = updatedSource.replace(
    item.full,
    `import ${item.identifier} from '../assets/optimized/realisations/${item.identifier}.webp';`,
  );
}

await writeFile(pagePath, updatedSource);
console.log(`Imports remplacés : ${imports.length}`);
