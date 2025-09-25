import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse destinations data
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

// Known correct mappings for validation
const cityValidation = {
  goa: {
    state: "Goa",
    keywords: ["beach", "portuguese", "church", "sand", "coastal"],
    invalidKeywords: ["mountain", "snow", "desert", "himalayas"]
  },
  manali: {
    state: "Himachal Pradesh",
    keywords: ["mountain", "snow", "valley", "himalayas", "rohtang"],
    invalidKeywords: ["beach", "desert", "coastal"]
  },
  jaipur: {
    state: "Rajasthan",
    keywords: ["pink city", "palace", "fort", "rajasthani", "hawa mahal"],
    invalidKeywords: ["beach", "snow", "backwater"]
  },
  delhi: {
    state: "Delhi",
    keywords: ["capital", "red fort", "india gate", "qutub minar", "parliament"],
    invalidKeywords: ["beach", "mountain", "backwater"]
  },
  rishikesh: {
    state: "Uttarakhand",
    keywords: ["yoga", "ganges", "river", "rafting", "spiritual"],
    invalidKeywords: ["beach", "desert", "palace"]
  },
  amritsar: {
    state: "Punjab",
    keywords: ["golden temple", "sikh", "wagah border", "punjab"],
    invalidKeywords: ["beach", "mountain", "backwater"]
  },
  varanasi: {
    state: "Uttar Pradesh",
    keywords: ["ghats", "ganges", "spiritual", "temple", "ancient"],
    invalidKeywords: ["beach", "snow", "modern"]
  },
  agra: {
    state: "Uttar Pradesh",
    keywords: ["taj mahal", "mughal", "fort", "marble", "monument"],
    invalidKeywords: ["beach", "mountain", "modern"]
  },
  kashmir: {
    state: "Jammu and Kashmir",
    keywords: ["dal lake", "houseboat", "snow", "valley", "shikara"],
    invalidKeywords: ["beach", "desert", "tropical"]
  },
  kerala: {
    state: "Kerala",
    keywords: ["backwater", "houseboat", "ayurveda", "tropical", "coconut"],
    invalidKeywords: ["snow", "desert", "mountain"]
  },
  ladakh: {
    state: "Ladakh",
    keywords: ["mountain", "monastery", "buddhist", "high altitude", "pangong"],
    invalidKeywords: ["beach", "tropical", "backwater"]
  }
};

async function verifyDestinationAccuracy() {
  console.log("🔍 Starting comprehensive city and image verification...\n");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = {
    passed: [],
    failed: [],
    warnings: [],
    errors: [],
    imageIssues: [],
    descriptionIssues: []
  };

  // First, analyze the data structure
  console.log("📊 Analyzing destination data structure...\n");

  for (const destination of destinationsData) {
    console.log(`\n📍 Checking ${destination.name} (${destination.id})`);
    
    const validation = cityValidation[destination.id];
    const issues = [];

    // 1. Verify state is correct
    if (validation && destination.state !== validation.state) {
      issues.push({
        type: "state_mismatch",
        expected: validation.state,
        found: destination.state
      });
    }

    // 2. Check description for accuracy
    const descLower = destination.description.toLowerCase();
    if (validation) {
      const hasValidKeywords = validation.keywords.some(keyword => 
        descLower.includes(keyword)
      );
      const hasInvalidKeywords = validation.invalidKeywords.some(keyword => 
        descLower.includes(keyword)
      );

      if (!hasValidKeywords) {
        issues.push({
          type: "missing_keywords",
          message: "Description doesn't contain expected location keywords"
        });
      }

      if (hasInvalidKeywords) {
        issues.push({
          type: "invalid_keywords",
          message: "Description contains keywords for wrong location type"
        });
      }
    }

    // 3. Check for duplicate images
    const imageUrls = new Set();
    const duplicates = [];

    // Check hero image
    if (imageUrls.has(destination.heroImage)) {
      duplicates.push({ type: "hero", url: destination.heroImage });
    }
    imageUrls.add(destination.heroImage);

    // Check attraction images
    destination.attractions.forEach((attraction, index) => {
      if (imageUrls.has(attraction.image)) {
        duplicates.push({
          type: "attraction",
          name: attraction.name,
          url: attraction.image
        });
      }
      imageUrls.add(attraction.image);

      // Verify attraction category matches destination
      if (validation) {
        const attractionDesc = attraction.description.toLowerCase();
        const hasInvalidKeywords = validation.invalidKeywords.some(keyword => 
          attractionDesc.includes(keyword)
        );
        
        if (hasInvalidKeywords) {
          issues.push({
            type: "attraction_mismatch",
            attraction: attraction.name,
            message: "Attraction description doesn't match destination type"
          });
        }
      }
    });

    if (duplicates.length > 0) {
      results.imageIssues.push({
        destination: destination.name,
        duplicates
      });
    }

    if (issues.length > 0) {
      results.failed.push({
        destination: destination.name,
        id: destination.id,
        issues
      });
    } else {
      results.passed.push({
        destination: destination.name,
        id: destination.id
      });
    }

    // Log findings
    if (issues.length > 0) {
      console.log(`  ❌ Found ${issues.length} issues:`);
      issues.forEach(issue => {
        console.log(`     - ${issue.type}: ${issue.message || JSON.stringify(issue)}`);
      });
    } else {
      console.log(`  ✅ All validations passed`);
    }
  }

  // Now verify pages load correctly
  console.log("\n\n🌐 Verifying destination pages...\n");

  const baseUrl = "http://localhost:8081/destinations/";

  for (const destination of destinationsData) {
    const url = `${baseUrl}${destination.id}`;
    console.log(`📄 Testing ${destination.name}: ${url}`);

    try {
      const page = await browser.newPage();
      page.setDefaultTimeout(30000);

      // Listen for console errors
      const consoleErrors = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      // Navigate to the page
      const response = await page.goto(url, { waitUntil: "networkidle2" });

      if (!response || response.status() !== 200) {
        results.errors.push({
          destination: destination.name,
          url,
          error: `Page returned status ${response?.status() || 'unknown'}`
        });
        await page.close();
        continue;
      }

      // Wait for content to load
      await page.waitForSelector("h1", { timeout: 5000 });

      // Verify page title matches destination
      const pageTitle = await page.$eval("h1", el => el.textContent);
      if (!pageTitle.toLowerCase().includes(destination.name.toLowerCase())) {
        results.warnings.push({
          destination: destination.name,
          issue: "Page title doesn't match destination name",
          found: pageTitle
        });
      }

      // Check all images on page
      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll("img"));
        return images
          .filter(img => !img.complete || img.naturalWidth === 0)
          .map(img => ({
            src: img.src,
            alt: img.alt
          }));
      });

      if (brokenImages.length > 0) {
        results.imageIssues.push({
          destination: destination.name,
          brokenImages
        });
      }

      console.log(`  ✅ Page loaded successfully`);
      await page.close();

    } catch (error) {
      results.errors.push({
        destination: destination.name,
        url,
        error: error.message
      });
      console.log(`  ❌ Error: ${error.message}`);
    }
  }

  await browser.close();

  // Generate comprehensive report
  console.log("\n\n📊 COMPREHENSIVE VERIFICATION REPORT");
  console.log("=====================================\n");

  console.log(`✅ Passed: ${results.passed.length} destinations`);
  console.log(`❌ Failed: ${results.failed.length} destinations`);
  console.log(`⚠️  Warnings: ${results.warnings.length}`);
  console.log(`🔥 Errors: ${results.errors.length}`);
  console.log(`🖼️  Image Issues: ${results.imageIssues.length}`);

  if (results.failed.length > 0) {
    console.log("\n❌ FAILED DESTINATIONS:");
    results.failed.forEach(failure => {
      console.log(`\n${failure.destination} (${failure.id}):`);
      failure.issues.forEach(issue => {
        console.log(`  - ${issue.type}: ${issue.message || JSON.stringify(issue)}`);
      });
    });
  }

  if (results.imageIssues.length > 0) {
    console.log("\n🖼️  IMAGE ISSUES:");
    results.imageIssues.forEach(issue => {
      console.log(`\n${issue.destination}:`);
      if (issue.duplicates) {
        issue.duplicates.forEach(dup => {
          console.log(`  - Duplicate ${dup.type}: ${dup.name || 'hero image'}`);
        });
      }
      if (issue.brokenImages) {
        issue.brokenImages.forEach(img => {
          console.log(`  - Broken: ${img.alt || 'No alt text'}`);
        });
      }
    });
  }

  // Save detailed results
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: destinationsData.length,
      passed: results.passed.length,
      failed: results.failed.length,
      warnings: results.warnings.length,
      errors: results.errors.length
    },
    results
  };

  fs.writeFileSync(
    "./city-verification-report.json",
    JSON.stringify(report, null, 2)
  );

  console.log("\n\n💾 Detailed report saved to city-verification-report.json");
  
  // Generate actionable fixes
  if (results.failed.length > 0 || results.imageIssues.length > 0) {
    const fixes = {
      duplicateImages: [],
      incorrectDescriptions: [],
      stateMismatches: []
    };

    results.failed.forEach(failure => {
      failure.issues.forEach(issue => {
        if (issue.type === "state_mismatch") {
          fixes.stateMismatches.push({
            destination: failure.id,
            current: issue.found,
            correct: issue.expected
          });
        } else if (issue.type === "missing_keywords" || issue.type === "invalid_keywords") {
          fixes.incorrectDescriptions.push({
            destination: failure.id,
            issue: issue.type,
            message: issue.message
          });
        }
      });
    });

    results.imageIssues.forEach(issue => {
      if (issue.duplicates) {
        issue.duplicates.forEach(dup => {
          fixes.duplicateImages.push({
            destination: issue.destination,
            type: dup.type,
            url: dup.url,
            name: dup.name
          });
        });
      }
    });

    fs.writeFileSync(
      "./fixes-needed.json",
      JSON.stringify(fixes, null, 2)
    );

    console.log("📝 List of fixes needed saved to fixes-needed.json");
  }

  return results;
}

// Run the verification
verifyDestinationAccuracy().catch(console.error);