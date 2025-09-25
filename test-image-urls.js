import https from 'https';
import http from 'http';

// Function to test if an image URL is working
function testImageUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const request = protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        resolve({ url, working: true, status: response.statusCode });
      } else {
        resolve({ url, working: false, status: response.statusCode });
      }
      response.destroy(); // Don't download the full image
    });
    
    request.on('error', () => {
      resolve({ url, working: false, error: 'Connection failed' });
    });
    
    request.setTimeout(5000, () => {
      request.destroy();
      resolve({ url, working: false, error: 'Timeout' });
    });
  });
}

// Test potential images for Hadimba Temple and Mall Road
const candidateImages = {
  hadimbaTemple: [
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop'
  ],
  mallRoad: [
    'https://images.unsplash.com/photo-1568550262989-c1e03c1e1714?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1626972308491-6b05db73903f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551298370-64846d7dee17?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop'
  ]
};

async function testAllImages() {
  console.log('🔍 Testing image URLs...\n');
  
  for (const [category, urls] of Object.entries(candidateImages)) {
    console.log(`\n📍 Testing ${category} images:`);
    
    for (const url of urls) {
      const result = await testImageUrl(url);
      if (result.working) {
        console.log(`✅ WORKING: ${url}`);
      } else {
        console.log(`❌ BROKEN: ${url} (${result.error || 'Status: ' + result.status})`);
      }
    }
  }
}

testAllImages().catch(console.error);