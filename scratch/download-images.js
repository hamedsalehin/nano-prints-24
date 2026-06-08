const fs = require('fs');
const path = require('path');
const https = require('https');

const favorites = [
  {
    name: 'retractable_banner.jpg',
    url: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'feather_flag.jpg',
    url: 'https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'parking_sign.jpg',
    url: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'real_estate_sign.jpg',
    url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'sandwich_board.jpg',
    url: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80'
  }
];

const highlights = [
  {
    name: 'highlight_1.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_2.jpg',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_3.jpg',
    url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_4.jpg',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_5.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_6.jpg',
    url: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_7.jpg',
    url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_8.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'highlight_9.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
  }
];

const favoritesDir = path.join(__dirname, '..', 'public', 'images', 'customer-favorites');
const highlightsDir = path.join(__dirname, '..', 'public', 'images', 'customer-highlights');

if (!fs.existsSync(favoritesDir)) {
  fs.mkdirSync(favoritesDir, { recursive: true });
}
if (!fs.existsSync(highlightsDir)) {
  fs.mkdirSync(highlightsDir, { recursive: true });
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
    console.log(`Finished downloading all images in ${dir}`);
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

console.log('Starting download for favorites...');
downloadAll(favorites, favoritesDir, 0);

console.log('Starting download for highlights...');
downloadAll(highlights, highlightsDir, 0);
