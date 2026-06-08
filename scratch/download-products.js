const fs = require('fs');
const path = require('path');
const https = require('https');

const searchTerms = [
  {
    key: 'retractable_banner.jpg',
    query: 'roll-up-banner-stand'
  },
  {
    key: 'feather_flag.jpg',
    query: 'beach-flag-banner'
  },
  {
    key: 'parking_sign.jpg',
    query: 'customer-parking-sign'
  },
  {
    key: 'real_estate_sign.jpg',
    query: 'for-sale-sign-house'
  },
  {
    key: 'sandwich_board.jpg',
    query: 'sidewalk-sandwich-board'
  }
];

const destDir = path.join(__dirname, '..', 'public', 'images', 'customer-favorites');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function getUnsplashImages(query, callback) {
  const url = `https://unsplash.com/s/photos/${encodeURIComponent(query)}`;
  
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      // Find image URLs. Unsplash image URLs look like: https://images.unsplash.com/photo-123456789-abcdef?
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g;
      const matches = data.match(regex);
      if (matches && matches.length > 0) {
        // Remove duplicates and filter out profile images (usually small w=32 etc)
        const uniqueUrls = Array.from(new Set(matches));
        callback(null, uniqueUrls);
      } else {
        callback(new Error('No images found on page'));
      }
    });
  }).on('error', (err) => {
    callback(err);
  });
}

function download(url, dest, callback) {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
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
    callback(err);
  });
}

function processSearchTerms(index = 0) {
  if (index >= searchTerms.length) {
    console.log('Finished processing all downloads!');
    return;
  }
  
  const term = searchTerms[index];
  console.log(`Searching Unsplash for "${term.query}"...`);
  
  getUnsplashImages(term.query, (err, urls) => {
    if (err || !urls || urls.length === 0) {
      console.error(`Failed to find images for ${term.query}:`, err ? err.message : 'No urls');
      processSearchTerms(index + 1);
      return;
    }
    
    // Pick the 3rd or 4th image which is typically a high-quality search result (the first few might be sponsored or photographer avatars)
    // Let's filter urls that look like actual main photo urls (not avatars). They are usually longer or have more distinct IDs.
    const mainPhotos = urls.filter(url => {
      // Exclude generic small profile photos or unsplash icons
      return !url.includes('profile') && !url.includes('placeholder');
    });
    
    if (mainPhotos.length === 0) {
      console.error(`No main photos found for ${term.query}`);
      processSearchTerms(index + 1);
      return;
    }

    // Let's look at the first few photos. For a high-relevancy query, the 1st or 2nd main photo is usually perfect.
    // Let's print the top 3 and pick index 0 or 1.
    console.log(`Found ${mainPhotos.length} photos. Downloading the top relevant photo for ${term.key}...`);
    const bestUrl = `${mainPhotos[0]}?auto=format&fit=crop&w=800&q=80`;
    console.log(`URL: ${bestUrl}`);
    
    const destPath = path.join(destDir, term.key);
    download(bestUrl, destPath, (err) => {
      if (err) {
        console.error(`Failed downloading ${term.key}:`, err.message);
      } else {
        console.log(`Successfully downloaded ${term.key}!`);
      }
      processSearchTerms(index + 1);
    });
  });
}

processSearchTerms(0);
