import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the fixes needed
const fixesNeeded = JSON.parse(fs.readFileSync("./fixes-needed.json", "utf8"));

// Proper image mappings for each attraction type and location
const imageDatabase = {
  // Goa attractions
  "Dudhsagar Falls": "https://images.unsplash.com/photo-1584285401529-7ee4a8e50f6e?w=600&h=400&fit=crop", // actual waterfall
  "Anjuna Beach": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&h=400&fit=crop", // beach scene
  "Fort Aguada": "https://images.unsplash.com/photo-1624906225771-ad3c3c585c4a?w=600&h=400&fit=crop", // fort structure
  
  // Manali attractions  
  "Kasol & Tosh Valley": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&h=400&fit=crop", // himalayan valley
  
  // Jaipur attractions
  "Jantar Mantar": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop", // astronomical instruments
  
  // Kashmir attractions
  "Srinagar Gardens": "https://images.unsplash.com/photo-1609947014287-65b18f1b3e02?w=600&h=400&fit=crop", // mughal gardens
  
  // Kerala attractions
  "Fort Kochi": "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600&h=400&fit=crop", // colonial architecture
  
  // Rajasthan attractions
  "Lake Palace": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop", // palace on water
  
  // Agra attractions
  "Itimad-ud-Daulah": "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop", // baby taj
  "Mehtab Bagh": "https://images.unsplash.com/photo-1623134291791-d80c0b93e1ef?w=600&h=400&fit=crop", // garden view
  "Akbar's Tomb": "https://images.unsplash.com/photo-1604743029196-a6e2639877b2?w=600&h=400&fit=crop", // tomb architecture
  
  // Delhi attractions
  "India Gate": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop", // actual India Gate
  "Qutub Minar": "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=600&h=400&fit=crop", // actual Qutub Minar
  
  // Udaipur attractions
  "Jag Mandir": "https://images.unsplash.com/photo-1592509255531-161181e0cb8d?w=600&h=400&fit=crop", // island palace
  "Fateh Sagar Lake": "https://images.unsplash.com/photo-1597652204624-6da6604b2c8e?w=600&h=400&fit=crop", // lake view
  
  // Shimla attractions
  "Jakhu Temple": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop", // hilltop temple
  "Christ Church": "https://images.unsplash.com/photo-1597167081301-fa4f5e485a79?w=600&h=400&fit=crop", // colonial church
  "The Ridge": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=400&fit=crop", // shimla ridge
  
  // Ooty attractions
  "Ooty Lake": "https://images.unsplash.com/photo-1580886563781-1f8402ce4e5b?w=600&h=400&fit=crop", // lake with boats
  "Doddabetta Peak": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", // mountain peak
  
  // Mysore attractions
  "Chamundi Hills": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop", // temple on hill
  "Brindavan Gardens": "https://images.unsplash.com/photo-1568750524666-e0c7a1ad9cd1?w=600&h=400&fit=crop", // illuminated gardens
  "St. Philomena's Church": "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop", // gothic church
  "Mysore Zoo": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&h=400&fit=crop", // zoo entrance
  
  // Darjeeling attractions
  "Darjeeling Himalayan Railway": "https://images.unsplash.com/photo-1566221857770-508d35ee2b5d?w=600&h=400&fit=crop", // toy train
  "Padmaja Naidu Himalayan Zoological Park": "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600&h=400&fit=crop", // zoo animals
  "Peace Pagoda": "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=400&fit=crop", // white pagoda
  "Mall Road": "https://images.unsplash.com/photo-1568550262989-c1e03c1e1714?w=600&h=400&fit=crop", // hill station street
  
  // Rishikesh attractions
  "Parmarth Niketan": "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=600&h=400&fit=crop", // ashram ghats
  "Rajaji National Park": "https://images.unsplash.com/photo-1567069160354-f25b26e62fa1?w=600&h=400&fit=crop", // wildlife park
  "Ram Jhula": "https://images.unsplash.com/photo-1601390395693-364c0e22031b?w=600&h=400&fit=crop", // suspension bridge
  "Beatles Ashram": "https://images.unsplash.com/photo-1603984042729-c9e5a2b8f7f1?w=600&h=400&fit=crop", // graffiti walls
  "Neelkanth Mahadev Temple": "https://images.unsplash.com/photo-1620766182966-c09770a8e424?w=600&h=400&fit=crop", // temple in hills
  
  // Amritsar attractions
  "Jallianwala Bagh": "https://images.unsplash.com/photo-1609947017136-27dca3e5e7ce?w=600&h=400&fit=crop", // memorial garden
  "Wagah Border": "https://images.unsplash.com/photo-1623401620116-3277b7046a4f?w=600&h=400&fit=crop", // border ceremony
  "Partition Museum": "https://images.unsplash.com/photo-1633358805510-f96b08f7381b?w=600&h=400&fit=crop", // museum interior
  "Akal Takht": "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600&h=400&fit=crop", // sikh throne
  
  // Varanasi attractions
  "Kashi Vishwanath Temple": "https://images.unsplash.com/photo-1627894007069-85de53d8c2ab?w=600&h=400&fit=crop", // temple spire
  "Sarnath": "https://images.unsplash.com/photo-1634645894663-4ae0fd00e9f0?w=600&h=400&fit=crop", // buddhist stupa
  "Assi Ghat": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop", // ghat steps
  "Banaras Hindu University": "https://images.unsplash.com/photo-1590424696525-cd7e2f263c20?w=600&h=400&fit=crop", // university building
  "Manikarnika Ghat": "https://images.unsplash.com/photo-1603298111314-2b2bceb23322?w=600&h=400&fit=crop", // cremation ghat
  
  // Ladakh attractions
  "Leh Palace": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop", // palace on hill
  "Nubra Valley": "https://images.unsplash.com/photo-1601296160691-20b42d3ec5ae?w=600&h=400&fit=crop", // desert valley
  "Thiksey Monastery": "https://images.unsplash.com/photo-1609003292404-dc0e82b071e3?w=600&h=400&fit=crop", // monastery complex
  "Magnetic Hill": "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&h=400&fit=crop", // road phenomenon
  
  // Andaman attractions
  "Neil Island": "https://images.unsplash.com/photo-1590930754517-92ec40c33b64?w=600&h=400&fit=crop", // tropical beach
  "Ross Island": "https://images.unsplash.com/photo-1617640706308-20ad8a383fb7?w=600&h=400&fit=crop", // island ruins
  "Baratang Island": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&h=400&fit=crop", // mangroves
  
  // Sikkim attractions
  "Rumtek Monastery": "https://images.unsplash.com/photo-1601377383565-2c54fe6e76a1?w=600&h=400&fit=crop", // tibetan monastery
  "Nathu La Pass": "https://images.unsplash.com/photo-1600948836101-f9c0f5a5b630?w=600&h=400&fit=crop", // border pass
  "Yumthang Valley": "https://images.unsplash.com/photo-1583417319070-2f8f09b0b5a4?w=600&h=400&fit=crop", // valley of flowers
  "Gurudongmar Lake": "https://images.unsplash.com/photo-1586074137025-c04f8a57b626?w=600&h=400&fit=crop", // high altitude lake
  "Pelling": "https://images.unsplash.com/photo-1602421652578-27570b1d2f6f?w=600&h=400&fit=crop", // mountain view
  
  // Mumbai attractions (for broken images)
  "Marine Drive": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
  "Elephanta Caves": "https://images.unsplash.com/photo-1622542796999-8d4788d732d8?w=600&h=400&fit=crop",
  "Bandra–Worli Sea Link": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&h=400&fit=crop",
  "Chhatrapati Shivaji Terminus": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop",
  "Bollywood Studios": "https://images.unsplash.com/photo-1565966913248-ccce77bc8510?w=600&h=400&fit=crop"
};

// Read the destinations data
const tsContent = fs.readFileSync("./src/data/destinationsData.ts", "utf8");

// Create a backup
const backupPath = "./src/data/destinationsData.backup.ts";
fs.writeFileSync(backupPath, tsContent);
console.log(`✅ Created backup at ${backupPath}`);

// Apply fixes
let updatedContent = tsContent;
let fixCount = 0;

console.log("\n🔧 Applying fixes for duplicate images...\n");

fixesNeeded.duplicateImages.forEach(issue => {
  const attractionName = issue.name;
  const oldUrl = issue.url;
  const newUrl = imageDatabase[attractionName];
  
  if (newUrl) {
    // Find and replace the specific image URL for this attraction
    const attractionPattern = new RegExp(
      `(name: ['"]${attractionName}['"],\\s*description:[^}]+,\\s*image: )['"]${oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`,
      'g'
    );
    
    const beforeLength = updatedContent.length;
    updatedContent = updatedContent.replace(attractionPattern, `$1'${newUrl}'`);
    
    if (updatedContent.length !== beforeLength) {
      fixCount++;
      console.log(`✅ Fixed: ${issue.destination} - ${attractionName}`);
      console.log(`   Old: ${oldUrl}`);
      console.log(`   New: ${newUrl}\n`);
    } else {
      console.log(`⚠️  Could not fix: ${issue.destination} - ${attractionName}`);
    }
  } else {
    console.log(`❌ No replacement found for: ${attractionName}`);
  }
});

// Fix Mumbai broken images
console.log("\n🔧 Fixing Mumbai broken images...\n");

const mumbaiImages = [
  { name: "Marine Drive", newUrl: imageDatabase["Marine Drive"] },
  { name: "Elephanta Caves", newUrl: imageDatabase["Elephanta Caves"] },
  { name: "Bandra–Worli Sea Link", newUrl: imageDatabase["Bandra–Worli Sea Link"] },
  { name: "Chhatrapati Shivaji Terminus", newUrl: imageDatabase["Chhatrapati Shivaji Terminus"] },
  { name: "Bollywood Studios", newUrl: imageDatabase["Bollywood Studios"] }
];

mumbaiImages.forEach(({ name, newUrl }) => {
  // Find the Mumbai section and update the attraction
  const pattern = new RegExp(
    `(name: ['"]${name}['"],\\s*description:[^}]+,\\s*image: )['"][^'"]+['"]`,
    'g'
  );
  
  const beforeLength = updatedContent.length;
  updatedContent = updatedContent.replace(pattern, `$1'${newUrl}'`);
  
  if (updatedContent.length !== beforeLength) {
    fixCount++;
    console.log(`✅ Fixed Mumbai - ${name}`);
  }
});

// Write the updated file
fs.writeFileSync("./src/data/destinationsData.ts", updatedContent);

console.log(`\n✅ Total fixes applied: ${fixCount}`);
console.log("💾 Updated destinationsData.ts");
console.log("📋 Backup saved as destinationsData.backup.ts");

// Generate a summary report
const summaryReport = {
  timestamp: new Date().toISOString(),
  totalIssues: fixesNeeded.duplicateImages.length + 5, // +5 for Mumbai
  totalFixed: fixCount,
  backupLocation: backupPath,
  fixedAttractions: Object.keys(imageDatabase)
};

fs.writeFileSync(
  "./image-fix-summary.json",
  JSON.stringify(summaryReport, null, 2)
);

console.log("\n📊 Fix summary saved to image-fix-summary.json");