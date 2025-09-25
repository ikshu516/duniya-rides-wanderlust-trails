import https from 'https';
import fs from 'fs';

// Function to test if an image URL works and get some info about it
function testImageUrl(url) {
  return new Promise((resolve) => {
    const request = https.get(url, (response) => {
      const contentType = response.headers['content-type'];
      const contentLength = response.headers['content-length'];
      
      if (response.statusCode === 200) {
        resolve({ 
          url, 
          working: true, 
          status: response.statusCode,
          contentType,
          size: contentLength 
        });
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

// Check current Jaipur images for duplicates
const currentJaipurImages = [
  { name: 'Amber Fort', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop' },
  { name: 'Hawa Mahal', url: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop' },
  { name: 'City Palace', url: 'https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&h=400&fit=crop' },
  { name: 'Jantar Mantar', url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop' },
  { name: 'Johari Bazaar', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop' },
  { name: 'Jaigarh Fort', url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop' }
];

// Alternative tested images for each attraction
const alternativeImages = {
  jantarMantar: [
    'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop', // Different from Amber Fort
    'https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop'
  ],
  johariBazaar: [
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop'
  ]
};

async function checkJaipurImages() {
  console.log('🔍 Checking current Jaipur images for duplicates and functionality...\n');
  
  // Check for duplicates
  const urlCounts = {};
  currentJaipurImages.forEach(img => {
    urlCounts[img.url] = (urlCounts[img.url] || []).concat(img.name);
  });
  
  console.log('🔄 Duplicate Check:');
  Object.entries(urlCounts).forEach(([url, attractions]) => {
    if (attractions.length > 1) {
      console.log(`❌ DUPLICATE: ${attractions.join(' & ')} share: ${url}`);
    } else {
      console.log(`✅ UNIQUE: ${attractions[0]}`);
    }
  });
  
  console.log('\n📸 Testing current images:');
  for (const img of currentJaipurImages) {
    const result = await testImageUrl(img.url);
    if (result.working) {
      console.log(`✅ ${img.name}: Working (${result.size} bytes)`);
    } else {
      console.log(`❌ ${img.name}: BROKEN (${result.error || 'Status: ' + result.status})`);
    }
  }
  
  console.log('\n🔧 Testing alternative images:');
  for (const [attraction, urls] of Object.entries(alternativeImages)) {
    console.log(`\n📍 ${attraction} alternatives:`);
    for (const url of urls) {
      // Make sure it's not already used by another attraction
      const isAlreadyUsed = currentJaipurImages.some(img => 
        img.url === url && !img.name.toLowerCase().includes(attraction.replace('Bazaar', '').toLowerCase())
      );
      
      if (isAlreadyUsed) {
        console.log(`⚠️  SKIP (already used): ${url}`);
        continue;
      }
      
      const result = await testImageUrl(url);
      if (result.working) {
        console.log(`✅ GOOD: ${url} (${result.size} bytes)`);
      } else {
        console.log(`❌ BAD: ${url} (${result.error || 'Status: ' + result.status})`);
      }
    }
  }
}

checkJaipurImages().catch(console.error);