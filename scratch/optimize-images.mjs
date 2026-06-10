import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'public/images/products',
  'public/images/products/main page',
  'public/images/products/gallery'
];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  try {
    const stats = fs.statSync(filePath);
    console.log(`Optimizing: ${filePath} (Original size: ${(stats.size / 1024).toFixed(1)} KB)`);

    const inputBuffer = fs.readFileSync(filePath);
    let pipeline = sharp(inputBuffer);

    const metadata = await pipeline.metadata();
    
    // Resize if too large
    let maxWidth = 1000;
    if (filePath.includes('nano hero')) {
      maxWidth = 1600; // Keep hero banners wider
    }

    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    let outputBuffer;
    if (ext === '.png') {
      outputBuffer = await pipeline
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toBuffer();
    } else {
      outputBuffer = await pipeline
        .jpeg({ quality: 80, progressive: true })
        .toBuffer();
    }

    fs.writeFileSync(filePath, outputBuffer);
    const newStats = fs.statSync(filePath);
    console.log(`-> Saved: ${filePath} (New size: ${(newStats.size / 1024).toFixed(1)} KB - Reduced by ${((1 - newStats.size / stats.size) * 100).toFixed(1)}%)`);
  } catch (error) {
    console.error(`Failed to optimize ${filePath}:`, error);
  }
}

async function run() {
  const processedFiles = new Set();
  
  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.resolve(dir);
    if (!fs.existsSync(absoluteDir)) continue;

    const files = fs.readdirSync(absoluteDir);
    for (const file of files) {
      const filePath = path.join(absoluteDir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile() && !processedFiles.has(filePath)) {
        processedFiles.add(filePath);
        await optimizeImage(filePath);
      }
    }
  }
}

run();
