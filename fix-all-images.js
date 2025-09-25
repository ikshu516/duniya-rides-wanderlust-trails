import fs from "fs";

// Comprehensive image database with location-appropriate images
const locationImages = {
  // Goa
  "Palolem Beach": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&h=400&fit=crop",
  "Old Goa Churches": "https://images.unsplash.com/photo-1624906225771-ad3c3c585c4a?w=600&h=400&fit=crop",
  "Dudhsagar Falls": "https://images.unsplash.com/photo-1584285401529-7ee4a8e50f6e?w=600&h=400&fit=crop",
  "Anjuna Beach": "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop",
  "Fort Aguada": "https://images.unsplash.com/photo-1587133599421-40e30b2e49e7?w=600&h=400&fit=crop",
  "Spice Plantations": "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop",
  
  // Manali
  "Rohtang Pass": "https://images.unsplash.com/photo-1592548890095-cd2a7aeca5ac?w=600&h=400&fit=crop",
  "Solang Valley": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop",
  "Hadimba Temple": "https://images.unsplash.com/photo-1597167081301-fa4f5e485a79?w=600&h=400&fit=crop",
  "Old Manali": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&h=400&fit=crop",
  "Kasol & Tosh Valley": "https://images.unsplash.com/photo-1601391970980-a6e5c3650493?w=600&h=400&fit=crop",
  "Manikaran Sahib": "https://images.unsplash.com/photo-1620766182966-c09770a8e424?w=600&h=400&fit=crop",
  
  // Jaipur
  "Amber Fort": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&h=400&fit=crop",
  "Hawa Mahal": "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop",
  "City Palace": "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&h=400&fit=crop",
  "Jantar Mantar": "https://images.unsplash.com/photo-1623401562023-692e5ad76ac7?w=600&h=400&fit=crop",
  "Nahargarh Fort": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
  "Albert Hall Museum": "https://images.unsplash.com/photo-1606298246390-e56e0710e45f?w=600&h=400&fit=crop",
  
  // Kashmir
  "Dal Lake": "https://images.unsplash.com/photo-1661747340818-df15f186554e?w=600&h=400&fit=crop",
  "Gulmarg Gondola": "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=400&fit=crop",
  "Pahalgam Valley": "https://images.unsplash.com/photo-1622544617486-21f7a89a8e62?w=600&h=400&fit=crop",
  "Srinagar Gardens": "https://images.unsplash.com/photo-1609947014287-65b18f1b3e02?w=600&h=400&fit=crop",
  "Sonamarg": "https://images.unsplash.com/photo-1587222318667-31212ce2828d?w=600&h=400&fit=crop",
  
  // Kerala  
  "Munnar Tea Gardens": "https://images.unsplash.com/photo-1529418044304-1c0ffb7098b3?w=600&h=400&fit=crop",
  "Alleppey Backwaters": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
  "Fort Kochi": "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600&h=400&fit=crop",
  "Periyar Wildlife": "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=600&h=400&fit=crop",
  "Varkala Beach": "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&h=400&fit=crop",
  
  // Rajasthan Tour
  "Jaisalmer Fort": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop",
  "Mehrangarh Fort": "https://images.unsplash.com/photo-1524309784716-6a4be8299c7f?w=600&h=400&fit=crop",
  "Lake Palace": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
  "Pushkar Lake": "https://images.unsplash.com/photo-1560259184-99f19e1072f8?w=600&h=400&fit=crop",
  "Ranthambore National Park": "https://images.unsplash.com/photo-1558457004-143b5ac8a7c6?w=600&h=400&fit=crop",
  
  // Agra
  "Taj Mahal": "/images/gallery/taj-mahal.jpg",
  "Agra Fort": "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=600&h=400&fit=crop",
  "Fatehpur Sikri": "https://images.unsplash.com/photo-1614947227018-cd5c96255b57?w=600&h=400&fit=crop",
  "Itimad-ud-Daulah": "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop",
  "Mehtab Bagh": "https://images.unsplash.com/photo-1623134291791-d80c0b93e1ef?w=600&h=400&fit=crop",
  "Akbar's Tomb": "https://images.unsplash.com/photo-1604743029196-a6e2639877b2?w=600&h=400&fit=crop",
  
  // Delhi
  "Red Fort": "https://images.unsplash.com/photo-1622542796158-c088b8119db7?w=600&h=400&fit=crop",
  "India Gate": "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
  "Qutub Minar": "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=600&h=400&fit=crop",
  "Lotus Temple": "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=400&fit=crop",
  "Humayun's Tomb": "https://images.unsplash.com/photo-1606298246390-e56e0710e45f?w=600&h=400&fit=crop",
  "Akshardham Temple": "https://images.unsplash.com/photo-1527838258366-436f3a9d3d44?w=600&h=400&fit=crop",
  
  // Mumbai
  "Gateway of India": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
  "Marine Drive": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&h=400&fit=crop",
  "Elephanta Caves": "https://images.unsplash.com/photo-1622542796999-8d4788d732d8?w=600&h=400&fit=crop",
  "Bandra–Worli Sea Link": "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=600&h=400&fit=crop",
  "Chhatrapati Shivaji Terminus": "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop",
  "Bollywood Studios": "https://images.unsplash.com/photo-1565966913248-ccce77bc8510?w=600&h=400&fit=crop",
  
  // Udaipur
  "City Palace Complex": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
  "Lake Pichola": "https://images.unsplash.com/photo-1607003477682-6efd94008a9b?w=600&h=400&fit=crop",
  "Jag Mandir": "https://images.unsplash.com/photo-1592509255531-161181e0cb8d?w=600&h=400&fit=crop",
  "Jagdish Temple": "https://images.unsplash.com/photo-1609601140969-8cf7e6523c58?w=600&h=400&fit=crop",
  "Saheliyon Ki Bari": "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  "Fateh Sagar Lake": "https://images.unsplash.com/photo-1597652204624-6da6604b2c8e?w=600&h=400&fit=crop",
  
  // Shimla
  "The Ridge": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=400&fit=crop",
  "Mall Road": "https://images.unsplash.com/photo-1568550262989-c1e03c1e1714?w=600&h=400&fit=crop",
  "Jakhu Temple": "https://images.unsplash.com/photo-1623401560023-692e5ad76ac7?w=600&h=400&fit=crop",
  "Christ Church": "https://images.unsplash.com/photo-1597167081301-fa4f5e485a79?w=600&h=400&fit=crop",
  "Kufri": "https://images.unsplash.com/photo-1602421652578-27570b1d2f6f?w=600&h=400&fit=crop",
  "Chadwick Falls": "https://images.unsplash.com/photo-1614091379989-06bb1350371f?w=600&h=400&fit=crop",
  
  // Ooty
  "Botanical Gardens": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
  "Ooty Lake": "https://images.unsplash.com/photo-1580886563781-1f8402ce4e5b?w=600&h=400&fit=crop",
  "Doddabetta Peak": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=600&h=400&fit=crop",
  "Tea Museum": "https://images.unsplash.com/photo-1600977375359-47a8560665ba?w=600&h=400&fit=crop",
  "Rose Garden": "https://images.unsplash.com/photo-1580975510122-498c9f30b22f?w=600&h=400&fit=crop",
  "Nilgiri Mountain Railway": "https://images.unsplash.com/photo-1566221857770-508d35ee2b5d?w=600&h=400&fit=crop",
  
  // Mysore
  "Mysore Palace": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  "Chamundi Hills": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
  "Brindavan Gardens": "https://images.unsplash.com/photo-1568750524666-e0c7a1ad9cd1?w=600&h=400&fit=crop",
  "St. Philomena's Church": "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop",
  "Mysore Zoo": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&h=400&fit=crop",
  "Somnathpur Temple": "https://images.unsplash.com/photo-1621417639651-5b7f4b66c3a1?w=600&h=400&fit=crop",
  
  // Darjeeling
  "Tiger Hill Sunrise": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "Darjeeling Himalayan Railway": "https://images.unsplash.com/photo-1566221857770-508d35ee2b5d?w=600&h=400&fit=crop",
  "Padmaja Naidu Himalayan Zoological Park": "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600&h=400&fit=crop",
  "Peace Pagoda": "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=400&fit=crop",
  "Tea Estates": "https://images.unsplash.com/photo-1617634695446-b6585529b3b7?w=600&h=400&fit=crop",
  "Mall Road": "https://images.unsplash.com/photo-1626972308491-6b05db73903f?w=600&h=400&fit=crop",
  
  // Rishikesh
  "Laxman Jhula": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "Parmarth Niketan": "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=600&h=400&fit=crop",
  "Rajaji National Park": "https://images.unsplash.com/photo-1567069160354-f25b26e62fa1?w=600&h=400&fit=crop",
  "Ram Jhula": "https://images.unsplash.com/photo-1601390395693-364c0e22031b?w=600&h=400&fit=crop",
  "Beatles Ashram": "https://images.unsplash.com/photo-1603984042729-c9e5a2b8f7f1?w=600&h=400&fit=crop",
  "Neelkanth Mahadev Temple": "https://images.unsplash.com/photo-1620766182966-c09770a8e424?w=600&h=400&fit=crop",
  
  // Amritsar
  "Golden Temple": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  "Jallianwala Bagh": "https://images.unsplash.com/photo-1609947017136-27dca3e5e7ce?w=600&h=400&fit=crop",
  "Wagah Border": "https://images.unsplash.com/photo-1623401620116-3277b7046a4f?w=600&h=400&fit=crop",
  "Partition Museum": "https://images.unsplash.com/photo-1633358805510-f96b08f7381b?w=600&h=400&fit=crop",
  "Akal Takht": "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=600&h=400&fit=crop",
  "Maharaja Ranjit Singh Museum": "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=600&h=400&fit=crop",
  
  // Varanasi
  "Dashashwamedh Ghat": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop",
  "Kashi Vishwanath Temple": "https://images.unsplash.com/photo-1627894007069-85de53d8c2ab?w=600&h=400&fit=crop",
  "Sarnath": "https://images.unsplash.com/photo-1634645894663-4ae0fd00e9f0?w=600&h=400&fit=crop",
  "Assi Ghat": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop",
  "Banaras Hindu University": "https://images.unsplash.com/photo-1590424696525-cd7e2f263c20?w=600&h=400&fit=crop",
  "Manikarnika Ghat": "https://images.unsplash.com/photo-1603298111314-2b2bceb23322?w=600&h=400&fit=crop",
  
  // Ladakh
  "Pangong Lake": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "Leh Palace": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=400&fit=crop",
  "Nubra Valley": "https://images.unsplash.com/photo-1601296160691-20b42d3ec5ae?w=600&h=400&fit=crop",
  "Thiksey Monastery": "https://images.unsplash.com/photo-1609003292404-dc0e82b071e3?w=600&h=400&fit=crop",
  "Khardung La Pass": "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&h=400&fit=crop",
  "Magnetic Hill": "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&h=400&fit=crop",
  
  // Andaman
  "Radhanagar Beach": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  "Cellular Jail": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  "Neil Island": "https://images.unsplash.com/photo-1590930754517-92ec40c33b64?w=600&h=400&fit=crop",
  "Ross Island": "https://images.unsplash.com/photo-1617640706308-20ad8a383fb7?w=600&h=400&fit=crop",
  "Scuba Diving": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
  "Baratang Island": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=600&h=400&fit=crop",
  
  // Sikkim
  "Tsongmo Lake": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "Rumtek Monastery": "https://images.unsplash.com/photo-1601377383565-2c54fe6e76a1?w=600&h=400&fit=crop",
  "Nathu La Pass": "https://images.unsplash.com/photo-1600948836101-f9c0f5a5b630?w=600&h=400&fit=crop",
  "Yumthang Valley": "https://images.unsplash.com/photo-1583417319070-2f8f09b0b5a4?w=600&h=400&fit=crop",
  "Gurudongmar Lake": "https://images.unsplash.com/photo-1586074137025-c04f8a57b626?w=600&h=400&fit=crop",
  "Pelling": "https://images.unsplash.com/photo-1602421652578-27570b1d2f6f?w=600&h=400&fit=crop"
};

// Read the file
const filePath = "./src/data/destinationsData.ts";
let content = fs.readFileSync(filePath, "utf8");

// Create backup
const backupPath = "./src/data/destinationsData.backup2.ts";
fs.writeFileSync(backupPath, content);
console.log("✅ Created backup at", backupPath);

let fixCount = 0;
const fixes = [];

// Fix each attraction image
Object.entries(locationImages).forEach(([attractionName, newUrl]) => {
  // Create a regex that matches the attraction and captures everything up to the image URL
  const regex = new RegExp(
    `(name: '${attractionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}',\\s*description: '[^']*',\\s*image: )'[^']+'`,
    'g'
  );
  
  const originalLength = content.length;
  content = content.replace(regex, `$1'${newUrl}'`);
  
  if (content.length !== originalLength) {
    fixCount++;
    fixes.push(attractionName);
    console.log(`✅ Fixed: ${attractionName}`);
  }
});

// Write the updated file
fs.writeFileSync(filePath, content);

console.log(`\n✅ Total fixes applied: ${fixCount}`);
console.log("💾 Updated destinationsData.ts");

// Save summary
const summary = {
  timestamp: new Date().toISOString(),
  totalFixes: fixCount,
  fixedAttractions: fixes,
  backupPath: backupPath
};

fs.writeFileSync("./fix-summary.json", JSON.stringify(summary, null, 2));
console.log("📊 Summary saved to fix-summary.json");