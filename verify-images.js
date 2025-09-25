import puppeteer from "puppeteer";
import fs from "fs";

const destinations = [
  "goa",
  "manali",
  "jaipur",
  "delhi",
  "rishikesh",
  "amritsar",
  "varanasi",
  "agra",
  "kashmir",
  "rajasthan",
  "kerala",
  "ooty",
  "mysore",
  "darjeeling",
  "shimla",
  "udaipur",
  "andaman",
  "sikkim",
  "ladakh",
];

const baseUrl = "http://localhost:8080/destinations/";

async function verifyDestinationImages() {
  console.log("🚀 Starting image verification for all destinations...\n");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = {
    passed: [],
    failed: [],
    errors: [],
  };

  for (const destination of destinations) {
    const url = `${baseUrl}${destination}`;
    console.log(`📍 Testing ${destination}: ${url}`);

    try {
      const page = await browser.newPage();

      // Set a reasonable timeout
      page.setDefaultTimeout(30000);

      // Listen for console errors
      const consoleErrors = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      // Navigate to the page
      await page.goto(url, { waitUntil: "networkidle2" });

      // Wait for images to load
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Check if the page loaded successfully
      const title = await page.title();
      if (!title || title.includes("Not Found")) {
        results.failed.push({
          destination,
          url,
          reason: "Page not found or failed to load",
        });
        console.log(`  ❌ Failed: Page not found`);
        await page.close();
        continue;
      }

      // Check for broken images
      const brokenImages = await page.evaluate(() => {
        const images = Array.from(document.querySelectorAll("img"));
        const broken = [];

        for (const img of images) {
          if (
            img.naturalWidth === 0 ||
            img.naturalHeight === 0 ||
            img.complete === false
          ) {
            broken.push({
              src: img.src,
              alt: img.alt,
              className: img.className,
            });
          }
        }

        return broken;
      });

      // Check for hero image
      const heroImage = await page.$(".relative.h-96 img");
      const heroImageLoaded = heroImage
        ? await heroImage.evaluate(
            (img) => img.naturalWidth > 0 && img.naturalHeight > 0
          )
        : false;

      if (brokenImages.length === 0 && heroImageLoaded) {
        results.passed.push({
          destination,
          url,
          totalImages: await page.$$eval("img", (imgs) => imgs.length),
        });
        console.log(
          `  ✅ PASSED: All images loaded (${await page.$$eval(
            "img",
            (imgs) => imgs.length
          )} images)`
        );
      } else {
        results.failed.push({
          destination,
          url,
          brokenImages,
          heroImageLoaded,
          totalImages: await page.$$eval("img", (imgs) => imgs.length),
        });
        console.log(`  ❌ FAILED: ${brokenImages.length} broken images`);
        if (brokenImages.length > 0) {
          brokenImages.slice(0, 3).forEach((img) => {
            console.log(`    - ${img.alt || "No alt text"}: ${img.src}`);
          });
        }
      }

      await page.close();
    } catch (error) {
      results.errors.push({
        destination,
        url,
        error: error.message,
      });
      console.log(`  ❌ ERROR: ${error.message}`);
    }

    // Small delay between requests
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await browser.close();

  // Generate report
  console.log("\n📊 VERIFICATION RESULTS:");
  console.log(`✅ Passed: ${results.passed.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log(`🔥 Errors: ${results.errors.length}`);

  if (results.failed.length > 0) {
    console.log("\n❌ FAILED DESTINATIONS:");
    results.failed.forEach((failure) => {
      console.log(
        `- ${failure.destination}: ${failure.brokenImages.length} broken images`
      );
    });
  }

  if (results.errors.length > 0) {
    console.log("\n🔥 ERRORS:");
    results.errors.forEach((error) => {
      console.log(`- ${error.destination}: ${error.error}`);
    });
  }

  // Save detailed results
  fs.writeFileSync(
    "./verification-results.json",
    JSON.stringify(results, null, 2)
  );
  console.log("\n💾 Detailed results saved to verification-results.json");

  return results;
}

// Run the verification
verifyDestinationImages().catch(console.error);
