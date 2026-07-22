import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = '/Users/hdconnects/Procarr-';
const pagePath = path.join(root, 'src/pages/AvantApresPage.tsx');
const outputDir = path.join(root, 'src/assets/optimized/avant-apres');
const source = await readFile(pagePath, 'utf8');
const importPattern = /^import\s+([A-Za-z0-9_]+)\s+from\s+(["'])\.\.\/assets\/([^"']+\.(?:jpe?g|png))\2;$/gim;
const imports = [...source.matchAll(importPattern)].map((match) => ({
  full: match[0],
  identifier: match[1],
  quote: match[2],
  relativeSource: match[3],
}));

if (imports.length === 0) {
  console.log('Aucune image JPG, JPEG ou PNG à convertir.');
  process.exit(0);
}

await mkdir(outputDir, { recursive: true });

for (const item of imports) {
  const input = path.join(root, 'src/assets', item.relativeSource);
  const output = path.join(outputDir, `${item.identifier}.webp`);

  await sharp(input)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(output);
}

let updatedSource = source;
for (const item of imports) {
  updatedSource = updatedSource.replace(
    item.full,
    `import ${item.identifier} from "../assets/optimized/avant-apres/${item.identifier}.webp";`,
  );
}

await writeFile(pagePath, updatedSource);
console.log(`Images converties et imports remplacés : ${imports.length}`);
