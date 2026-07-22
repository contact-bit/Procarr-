import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const root = '/Users/hdconnects/Procarr-';
const outputDir = path.join(root, 'src/assets/optimized/july-2026');

const images = [
  ['image000022.jpg', 'zone-intervention-procarre.webp', 1400],
  ['image00004.jpeg', 'a-propos-procarre.webp', 1600],
  ['prestation.png', 'prestations-procarre.webp', 1400],
  ['image00003.jpeg', 'equipe-procarre.webp'],
  ['imageschantierrealisations/chantier villeneuve piscine bali/IMG_6359.jpg', 'piscine-villeneuve-6359.webp'],
  ['imageschantierrealisations/chantier esparons beton ciré/IMG_8078.jpg', 'piscine-esparons-8078.webp'],
  ['imageschantierrealisations/chantier villeneuve piscine bali/IMG_6361.jpg', 'piscine-villeneuve-6361.webp'],
  ['imageschantierrealisations/chantier la palud beton ciré/IMG_5236.jpg', 'piscine-la-palud-5236.webp'],
  ['imageschantierrealisations/chantier sdb benjamin/IMG_5323(1).jpg', 'salle-de-bain-5323.webp'],
  ['imageschantierrealisations/chantier Valensole sdb grand format/IMG_5607(1).jpg', 'salle-de-bain-valensole-5607.webp'],
];

await mkdir(outputDir, { recursive: true });

for (const [source, destination, maxWidth = 1920] of images) {
  const input = path.join(root, 'src/assets', source);
  const output = path.join(outputDir, destination);

  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, height: 1280, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(output);
}
