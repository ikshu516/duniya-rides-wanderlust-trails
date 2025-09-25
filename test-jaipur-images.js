import https from 'https';

function testImageUrl(url) {
  return new Promise((resolve) => {
    const request = https.get(url, (response) => {
      if (response.statusCode === 200) {
        resolve({ url, working: true, status: response.statusCode });
      } else {
        resolve({ url, working: false, status: response.statusCode });
      }
      response.destroy();
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

// Test appropriate images for Jaipur attractions
const jaipurImages = {
  jantarMantar: [
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1623401562023-692e5ad76ac7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop'
  ],
  johariBazaar: [
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop'
  ]
};

async function testJaipurImages() {
  console.log('🔍 Testing Jaipur image URLs...\n');
  
  for (const [attraction, urls] of Object.entries(jaipurImages)) {
    console.log(`\n📍 Testing ${attraction} images:`);
    
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

testJaipurImages().catch(console.error);