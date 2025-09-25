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

// Let's try images that are more likely to be correct for Jaipur specifically
const jaipurSpecificImages = {
  jantarMantar: [
    // These should be actual Jantar Mantar observatory instruments
    'https://images.unsplash.com/photo-1578946835152-68e42a95ee83?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578946835305-86bf1b7e0e9d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578946835457-d5c5be0ea0d7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop'
  ],
  johariBazaar: [
    // These should be actual bazaar/market scenes
    'https://images.unsplash.com/photo-1587227071085-c13b86d8e0f9?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop'
  ]
};

async function findCorrectJaipurImages() {
  console.log('🔍 Finding CORRECT Jaipur-specific images...\n');
  
  for (const [attraction, urls] of Object.entries(jaipurSpecificImages)) {
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
  
  console.log('\n💡 IMPORTANT: We need to use images that actually show:');
  console.log('   - Jantar Mantar: The astronomical instruments/observatory structures');
  console.log('   - Johari Bazaar: The actual jewelry market/bazaar in Jaipur');
  console.log('   - NOT generic images or images from other cities!');
}

findCorrectJaipurImages().catch(console.error);