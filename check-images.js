import fs from "fs";
import path from "path";

// Read the destinations data (we'll need to parse the TypeScript file differently)
const tsContent = fs.readFileSync("./src/data/destinationsData.ts", "utf8");

// Extract the data from the TypeScript file
const dataMatch = tsContent.match(
  /export const destinationsData: Destination\[\] = (\[[\s\S]*?\]);/
);
if (!dataMatch) {
  console.error("Could not parse destinationsData.ts file");
  process.exit(1);
}

const destinationsData = JSON.parse(
  dataMatch[1].replace(/([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*):/g, '$1"$2":')
);

console.log("🔍 Analyzing destination attraction images...\n");

// Function to check if Unsplash URL format is valid
function isValidUnsplashUrl(url) {
  // Valid format: https://images.unsplash.com/photo-<valid_id>?w=600&h=400&fit=crop
  const match = url.match(
    /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9_-]+)\?w=\d+&h=\d+&fit=crop/
  );
  if (!match) return false;

  const photoId = match[1];
  // Invalid patterns: contains special chars like underscore, dash at start, etc.
  return (
    !photoId.includes("_") && !photoId.startsWith("-") && photoId.length > 10
  );
}

let totalIssues = 0;
const issues = [];

destinationsData.destinationsData.forEach((destination) => {
  console.log(
    `📍 Checking ${destination.name} (${destination.attractions.length} attractions)`
  );

  destination.attractions.forEach((attraction, index) => {
    if (!isValidUnsplashUrl(attraction.image)) {
      console.log(`  ❌ ${attraction.name}: ${attraction.image}`);
      issues.push({
        destination: destination.name,
        destinationId: destination.id,
        attraction: attraction.name,
        currentUrl: attraction.image,
        category: attraction.category,
      });
      totalIssues++;
    } else {
      console.log(`  ✅ ${attraction.name}: OK`);
    }
  });

  console.log("");
});

console.log(`\n📊 Summary:`);
console.log(`Total issues found: ${totalIssues}`);
console.log(
  `Destinations affected: ${new Set(issues.map((i) => i.destination)).size}`
);

if (issues.length > 0) {
  console.log("\n🔧 Issues to fix:");
  issues.forEach((issue) => {
    console.log(`- ${issue.destination}: ${issue.attraction}`);
  });
}

// Export issues for the fixing script
fs.writeFileSync("./image-issues.json", JSON.stringify(issues, null, 2));
console.log("\n💾 Issues saved to image-issues.json");
