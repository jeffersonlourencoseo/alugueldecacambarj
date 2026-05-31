const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.resolve('fotos');
const outputDir = path.resolve('public/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

async function processAll() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    if (!['.jpg', '.jpeg', '.png', '.webp', '.jfif'].includes(ext)) {
      console.log('Skip:', file);
      continue;
    }

    try {
      const img = sharp(inputPath);
      const meta = await img.metadata();
      const inSize = fs.statSync(inputPath).size;

      let outputName = baseName + '.webp';
      const outputPath = path.join(outputDir, outputName);

      let pipeline = img.resize(1200, null, { withoutEnlargement: true, fit: 'inside' });
      pipeline = pipeline.webp({ quality: 80, effort: 6 });

      await pipeline.toFile(outputPath);

      const outSize = fs.statSync(outputPath).size;
      console.log(`${file} (${meta.width}x${meta.height}, ${(inSize/1024).toFixed(1)}KB) -> ${outputName} (${(outSize/1024).toFixed(1)}KB)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

processAll().catch(console.error);
