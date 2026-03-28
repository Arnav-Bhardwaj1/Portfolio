import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

const size = 256;
const radius = 40; // rounded corner radius

const roundedMask = Buffer.from(
  `<svg width="${size}" height="${size}">
    <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white"/>
  </svg>`
);

await sharp(path.join(publicDir, 'avatar.png'))
  .resize(size, size)
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .png()
  .toFile(path.join(publicDir, 'favicon.png'));

console.log('Created rounded favicon.png');
