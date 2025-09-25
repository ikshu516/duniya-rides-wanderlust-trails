import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the destinations data
const tsContent = fs.readFileSync("./src/data/destinationsData.ts", "utf8");
const dataMatch = tsContent.match(
  /export const destinationsData: Destination\[\] = (\[[\s\S]*?\]);/
);

if (!dataMatch) {
  console.error("Could not parse destinationsData.ts file");
  process.exit(1);
}

// Parse TypeScript object to JSON
const destinationsData = eval(
  "(" + dataMatch[1].replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*):/g, '$1"$2":') + ")"
);

console.log("🔍 COMPREHENSIVE LOCATION AND IMAGE ACCURACY ANALYSIS\n");
console.log("=" .repeat(60) + "\n");

// Analyze each destination
const analysis = {
  totalDestinations: destinationsData.length,
  totalAttractions: 0,
  imageAnalysis: {
    unsplashImages: 0,
    localImages: 0,
    brokenPatterns: [],
    duplicateImages: new Map()
  },
  locationAccuracy: {
    correctStates: 0,
    accurateDescriptions: 0,
    issues: []
  }
};

// Track all images
const imageUsage = new Map();

destinationsData.forEach(destination => {
  console.log(`📍 ${destination.name} (${destination.state})`);
  console.log(`   ID: ${destination.id}`);
  console.log(`   Category: ${destination.category}`);
  console.log(`   Hero Image: ${destination.heroImage}`);
  
  // Check hero image
  if (!imageUsage.has(destination.heroImage)) {
    imageUsage.set(destination.heroImage, []);
  }
  imageUsage.get(destination.heroImage).push({
    destination: destination.name,
    type: 'hero'
  });

  // Check attractions
  console.log(`   Attractions (${destination.attractions.length}):`);
  destination.attractions.forEach(attraction => {
    analysis.totalAttractions++;
    
    // Track image usage
    if (!imageUsage.has(attraction.image)) {
      imageUsage.set(attraction.image, []);
    }
    imageUsage.get(attraction.image).push({
      destination: destination.name,
      attraction: attraction.name,
      type: 'attraction'
    });
    
    // Check if image is local or external
    if (attraction.image.startsWith('/images/')) {
      analysis.imageAnalysis.localImages++;
      console.log(`     ✅ ${attraction.name} - LOCAL IMAGE`);
    } else if (attraction.image.includes('unsplash.com')) {
      analysis.imageAnalysis.unsplashImages++;
      console.log(`     📸 ${attraction.name} - Unsplash`);
    }
    
    // Check category matching
    const validCategories = {
      'beach': ['beach', 'coastal'],
      'mountain': ['mountain', 'hill', 'nature'],
      'heritage': ['heritage', 'cultural', 'spiritual'],
      'spiritual': ['spiritual', 'temple'],
      'adventure': ['adventure', 'nature'],
      'cultural': ['cultural', 'heritage']
    };
    
    const destinationCategories = validCategories[destination.category] || [];
    if (!destinationCategories.includes(attraction.category)) {
      console.log(`     ⚠️  Category mismatch: ${attraction.name} (${attraction.category}) in ${destination.category} destination`);
    }
  });
  
  console.log("");
});

// Find duplicate images
console.log("\n📊 IMAGE USAGE ANALYSIS\n");
console.log("Duplicate Images Found:");
let duplicateCount = 0;
imageUsage.forEach((usage, imageUrl) => {
  if (usage.length > 1) {
    duplicateCount++;
    console.log(`\n❌ Image used ${usage.length} times:`);
    console.log(`   URL: ${imageUrl}`);
    usage.forEach(u => {
      if (u.type === 'hero') {
        console.log(`   - ${u.destination} (Hero Image)`);
      } else {
        console.log(`   - ${u.destination}: ${u.attraction}`);
      }
    });
  }
});

// Summary
console.log("\n\n📈 SUMMARY REPORT");
console.log("=" .repeat(60));
console.log(`Total Destinations: ${analysis.totalDestinations}`);
console.log(`Total Attractions: ${analysis.totalAttractions}`);
console.log(`\nImage Statistics:`);
console.log(`- Unsplash Images: ${analysis.imageAnalysis.unsplashImages}`);
console.log(`- Local Images: ${analysis.imageAnalysis.localImages}`);
console.log(`- Duplicate Images: ${duplicateCount}`);
console.log(`- Unique Images: ${imageUsage.size}`);

// Recommendations
console.log("\n\n🎯 RECOMMENDATIONS");
console.log("=" .repeat(60));
console.log("\n1. IMMEDIATE ACTIONS NEEDED:");
console.log("   - Replace all duplicate images with unique, location-specific photos");
console.log("   - Use local images from /public/images/ where available");
console.log("   - Ensure each attraction has a unique, relevant image");

console.log("\n2. IMAGE SOURCING STRATEGY:");
console.log("   - For major monuments (Taj Mahal, India Gate, etc.), use local images");
console.log("   - For beaches, ensure images show the specific beach, not generic beach photos");
console.log("   - For temples/spiritual sites, use images that show the actual structure");

console.log("\n3. QUALITY CHECKS:");
console.log("   - Verify each image actually represents the location");
console.log("   - Ensure image URLs are stable and won't break");
console.log("   - Add alt text that describes the specific location");

// Save detailed analysis
const detailedReport = {
  timestamp: new Date().toISOString(),
  summary: {
    totalDestinations: analysis.totalDestinations,
    totalAttractions: analysis.totalAttractions,
    uniqueImages: imageUsage.size,
    duplicateImages: duplicateCount,
    unsplashImages: analysis.imageAnalysis.unsplashImages,
    localImages: analysis.imageAnalysis.localImages
  },
  duplicateImages: Array.from(imageUsage.entries())
    .filter(([url, usage]) => usage.length > 1)
    .map(([url, usage]) => ({ url, usage })),
  recommendations: [
    "Replace duplicate images immediately",
    "Use local images for major landmarks",
    "Verify each image matches its location",
    "Add descriptive alt text",
    "Consider using a CDN for better performance"
  ]
};

fs.writeFileSync(
  "./location-accuracy-analysis.json",
  JSON.stringify(detailedReport, null, 2)
);

console.log("\n\n💾 Detailed analysis saved to location-accuracy-analysis.json");