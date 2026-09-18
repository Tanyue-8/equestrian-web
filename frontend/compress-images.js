const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const targets = [
  'public/images/scenes/sc-club.png',
  'public/images/scenes/sc-edu.png',
  'public/images/scenes/sc-edu2.png',
  'public/images/scenes/sc-edu3.png',
  'public/images/scenes/sc-exhibition.png',
  'public/images/scenes/sc-rehab.png',
  'public/images/scenes/sc-club2.png',
  'public/images/sol-home.png',
  'public/images/ms30.png',
  'public/images/why-us.png',
  'public/images/ms30p.png',
  'public/images/case-rda.png',
  'public/images/sol-racing.png',
  'public/images/about-mission.png',
  'public/images/ms20.png',
];

async function run() {
  for (const rel of targets) {
    const full = path.join(__dirname, rel);
    if (!fs.existsSync(full)) {
      console.log('SKIP (not found):', rel);
      continue;
    }
    const before = fs.statSync(full).size;
    const meta = await sharp(full).metadata();
    // Cap max width at 1600px (these are section/decorative images, not need full 4000px+ originals)
    const targetWidth = Math.min(meta.width || 1600, 1600);
    const buffer = await sharp(full)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();
    const after = buffer.length;
    if (after < before) {
      fs.writeFileSync(full, buffer);
      console.log(`${rel}: ${(before/1024/1024).toFixed(2)}MB -> ${(after/1024/1024).toFixed(2)}MB`);
    } else {
      console.log(`${rel}: no improvement, kept original (${(before/1024/1024).toFixed(2)}MB)`);
    }
  }
}

run().catch(e => { console.error(e); process.exit(1); });
