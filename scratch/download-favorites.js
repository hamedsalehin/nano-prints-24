const fs = require('fs');
const path = require('path');
const https = require('https');

const favorites = [
  {
    name: 'retractable_banner.jpg',
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'feather_flag.jpg',
    url: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'parking_sign.jpg',
    url: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'real_estate_sign.jpg',
    url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'sandwich_board.jpg',
    url: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80'
  }
];

const destDir = path.join(__dirname, '..', 'public', 'images', 'customer-favorites');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest, callback) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${url}: HTTP ${response.statusCode}`);
      file.close();
      fs.unlink(dest, () => {});
      callback(new Error(`HTTP ${response.statusCode}`));
      return;
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error(`Error downloading ${url}:`, err.message);
    callback(err);
  });
}

function downloadAll(list, dir, index = 0) {
  if (index >= list.length) {
    console.log(`Finished downloading all product-focused images in ${dir}`);
    return;
  }
  const item = list[index];
  const destPath = path.join(dir, item.name);
  console.log(`Downloading ${item.name}...`);
  download(item.url, destPath, (err) => {
    if (err) {
      console.error(`Failed ${item.name}`);
    } else {
      console.log(`Success ${item.name}`);
    }
    downloadAll(list, dir, index + 1);
  });
}

downloadAll(favorites, destDir, 0);
