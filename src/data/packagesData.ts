export interface PackageOption {
  type: 'Budget' | 'Premium' | 'Luxury';
  duration: string;
  priceRange: string;
  accommodation: string;
  meals: string;
  transport: string;
  activities: string[];
  itinerary: DayItinerary[];
}

export interface DayItinerary {
  day: number;
  title: string;
  location: string;
  activities: string[];
}

export interface Attraction {
  name: string;
  description: string;
  unsplashImageId: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  subtitle: string;
  state: string;
  region: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  overview: string;
  bestTime: string;
  attractions: Attraction[];
  specialExperiences: string[];
  packageOptions: PackageOption[];
  difficulty: string;
  bestFor: string;
}

export const travelPackagesData: TravelPackage[] = [
  {
    id: "goa-beach-paradise",
    name: "Goa Beach Paradise",
    subtitle: "Sun, Sand & Portuguese Heritage",
    state: "Goa",
    region: "West India",
    image: "photo-1512343879784-a960bf40e7f2",
    rating: 4.6,
    reviews: 287,
    category: "Beach",
    overview: "Experience the perfect blend of pristine beaches, vibrant nightlife, and rich Portuguese heritage in India's premier beach destination. From the bustling markets of North Goa to the serene beaches of South Goa, discover why Goa remains every traveler's favorite tropical paradise.",
    bestTime: "November to February",
    attractions: [
      {
        name: "Baga Beach",
        description: "Famous for water sports, beach shacks, and vibrant nightlife",
        unsplashImageId: "photo-1544735716-392fe2489ffa"
      },
      {
        name: "Old Goa Churches",
        description: "UNESCO World Heritage sites showcasing Portuguese colonial architecture",
        unsplashImageId: "photo-1578662996442-48f60103fc96"
      },
      {
        name: "Palolem Beach",
        description: "Crescent-shaped beach perfect for relaxation and dolphin spotting",
        unsplashImageId: "photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Dudhsagar Falls",
        description: "Spectacular four-tiered waterfall amidst lush Western Ghats",
        unsplashImageId: "photo-1544735716-392fe2489ffa"
      },
      {
        name: "Anjuna Flea Market",
        description: "Vibrant market famous for handicrafts, jewelry, and local artifacts",
        unsplashImageId: "photo-1578474846511-04ba529f0b88"
      },
      {
        name: "Fort Aguada",
        description: "17th-century Portuguese fort with panoramic coastal views",
        unsplashImageId: "photo-1512343879784-a960bf40e7f2"
      }
    ],
    specialExperiences: [
      "Sunset cruise on Mandovi River",
      "Traditional Goan cooking class",
      "Spice plantation tour with lunch",
      "Dolphin watching tour",
      "Beach camping under stars",
      "Feni distillery visit"
    ],
    packageOptions: [
      {
        type: "Budget",
        duration: "4 Days / 3 Nights",
        priceRange: "₹8,999 - ₹12,999",
        accommodation: "3-star beach resort or guesthouse",
        meals: "Daily breakfast + 2 dinners",
        transport: "AC cab for sightseeing, airport transfers",
        activities: ["Beach day at Baga", "Old Goa churches tour", "Anjuna market visit"],
        itinerary: [
          {
            day: 1,
            title: "Arrival & North Goa",
            location: "North Goa",
            activities: [
              "Arrival at Goa airport",
              "Check-in at beach resort",
              "Lunch at beach shack",
              "Relax at Baga Beach",
              "Evening at Tito's Lane",
              "Dinner at local restaurant"
            ]
          },
          {
            day: 2,
            title: "Heritage & Culture",
            location: "Old Goa & Panaji",
            activities: [
              "Breakfast at hotel",
              "Visit Basilica of Bom Jesus",
              "Explore Se Cathedral",
              "Lunch in Panaji",
              "Walk through Latin Quarter",
              "Evening cruise on Mandovi River",
              "Dinner with Goan folk show"
            ]
          },
          {
            day: 3,
            title: "South Goa Exploration",
            location: "South Goa",
            activities: [
              "Early breakfast",
              "Drive to Palolem Beach",
              "Beach activities and lunch",
              "Visit Cabo de Rama Fort",
              "Sunset at Palolem",
              "Return to North Goa",
              "Farewell dinner"
            ]
          },
          {
            day: 4,
            title: "Departure",
            location: "Departure",
            activities: [
              "Breakfast at hotel",
              "Last-minute shopping",
              "Check-out and airport transfer",
              "Departure"
            ]
          }
        ]
      },
      {
        type: "Premium",
        duration: "5 Days / 4 Nights",
        priceRange: "₹18,999 - ₹25,999",
        accommodation: "4-star beach resort with sea view",
        meals: "All meals included",
        transport: "Private AC cab, airport transfers, cruise",
        activities: ["Water sports", "Spice plantation tour", "Dudhsagar Falls", "Dolphin cruise"],
        itinerary: [
          {
            day: 1,
            title: "Grand Arrival",
            location: "North Goa",
            activities: [
              "VIP airport pickup",
              "Welcome drink at 4-star resort",
              "Sea-view room check-in",
              "Gourmet lunch",
              "Water sports at Calangute Beach",
              "Sunset at Candolim Beach",
              "Fine dining dinner"
            ]
          },
          {
            day: 2,
            title: "Heritage & Adventure",
            location: "Old Goa & Dudhsagar",
            activities: [
              "Breakfast buffet",
              "Guided tour of Old Goa churches",
              "Journey to Dudhsagar Falls",
              "Jeep safari through forest",
              "Swimming at waterfall base",
              "Packed lunch at falls",
              "Return and spa session",
              "Dinner at resort"
            ]
          },
          {
            day: 3,
            title: "Spice Trail & Culture",
            location: "Spice Plantations",
            activities: [
              "Breakfast at resort",
              "Spice plantation guided tour",
              "Traditional Goan lunch",
              "Cooking demonstration",
              "Visit to local village",
              "Feni tasting session",
              "Cultural dance performance",
              "Dinner with live music"
            ]
          },
          {
            day: 4,
            title: "South Goa Serenity",
            location: "South Goa",
            activities: [
              "Early breakfast",
              "Dolphin watching cruise",
              "Palolem Beach relaxation",
              "Beachside seafood lunch",
              "Visit Cotigao Wildlife Sanctuary",
              "Sunset yoga session",
              "Beach barbecue dinner"
            ]
          },
          {
            day: 5,
            title: "Farewell Goa",
            location: "Departure",
            activities: [
              "Leisurely breakfast",
              "Last beach walk",
              "Shopping at Mapusa Market",
              "Check-out and transfer",
              "Departure with memories"
            ]
          }
        ]
      },
      {
        type: "Luxury",
        duration: "6 Days / 5 Nights",
        priceRange: "₹35,999 - ₹55,999",
        accommodation: "5-star luxury beach resort with private villa option",
        meals: "All gourmet meals, premium beverages included",
        transport: "Luxury car with chauffeur, private yacht, helicopter transfer option",
        activities: ["Private yacht charter", "Helicopter tour", "Exclusive spa treatments", "Private beach dinner"],
        itinerary: [
          {
            day: 1,
            title: "Luxury Arrival Experience",
            location: "Luxury Resort",
            activities: [
              "Helicopter transfer from airport (optional)",
              "Presidential suite check-in",
              "Personal butler assignment",
              "Champagne welcome",
              "Private beach access",
              "Couples spa treatment",
              "Private candlelit dinner on beach"
            ]
          },
          {
            day: 2,
            title: "Private Heritage Discovery",
            location: "Old Goa",
            activities: [
              "Gourmet breakfast in villa",
              "Private guided heritage tour",
              "Exclusive access to restricted areas",
              "Lunch at heritage property",
              "Personal photographer service",
              "Sunset helicopter tour",
              "Fine dining at award-winning restaurant"
            ]
          },
          {
            day: 3,
            title: "Exclusive Island Adventure",
            location: "Private Island",
            activities: [
              "Breakfast on private yacht",
              "Full-day yacht charter",
              "Private island picnic",
              "Snorkeling in pristine waters",
              "Gourmet lunch on yacht",
              "Fishing with local experts",
              "Yacht deck dinner under stars"
            ]
          },
          {
            day: 4,
            title: "Wellness & Indulgence",
            location: "Resort Spa",
            activities: [
              "In-villa breakfast service",
              "Full-day luxury spa package",
              "Ayurvedic consultation",
              "Personalized wellness treatments",
              "Healthy gourmet lunch",
              "Private yoga session",
              "Wine tasting dinner"
            ]
          },
          {
            day: 5,
            title: "Cultural Immersion",
            location: "Local Communities",
            activities: [
              "Breakfast with local family",
              "Village cultural exchange",
              "Traditional craft workshops",
              "Exclusive spice plantation lunch",
              "Private cooking class with chef",
              "Cultural performance viewing",
              "Farewell gala dinner"
            ]
          },
          {
            day: 6,
            title: "Luxury Departure",
            location: "Departure",
            activities: [
              "Final spa treatment",
              "Gourmet brunch",
              "Personal shopping assistance",
              "Villa check-out",
              "Luxury transfer to airport",
              "VIP airport lounge access"
            ]
          }
        ]
      }
    ],
    difficulty: "Easy",
    bestFor: "Beach lovers, Couples, Party enthusiasts"
  },
  {
    id: "manali-mountain-adventure",
    name: "Manali Mountain Adventure",
    subtitle: "Himalayan Thrills & Valley Views",
    state: "Himachal Pradesh",
    region: "North India",
    image: "photo-1506905925346-21bda4d32df4",
    rating: 4.7,
    reviews: 194,
    category: "Adventure",
    overview: "Discover the breathtaking beauty of Manali, nestled in the Kullu Valley. From snow-capped peaks and adventure sports to ancient temples and apple orchards, this mountain paradise offers the perfect blend of thrill and tranquility.",
    bestTime: "March to June, September to November",
    attractions: [
      {
        name: "Solang Valley",
        description: "Adventure sports hub with paragliding, skiing, and zorbing",
        unsplashImageId: "photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Rohtang Pass",
        description: "High mountain pass with stunning snow views and glaciers",
        unsplashImageId: "photo-1544735716-392fe2489ffa"
      },
      {
        name: "Hadimba Temple",
        description: "Ancient wooden temple surrounded by cedar forests",
        unsplashImageId: "photo-1578662996442-48f60103fc96"
      },
      {
        name: "Old Manali",
        description: "Charming area with cafes, shops, and hippie culture",
        unsplashImageId: "photo-1512343879784-a960bf40e7f2"
      },
      {
        name: "Jogini Falls",
        description: "Scenic waterfall trek through pine forests",
        unsplashImageId: "photo-1578474846511-04ba529f0b88"
      },
      {
        name: "Vashisht Hot Springs",
        description: "Natural hot water springs with therapeutic properties",
        unsplashImageId: "photo-1506905925346-21bda4d32df4"
      }
    ],
    specialExperiences: [
      "White water river rafting in Beas",
      "Paragliding over Kullu Valley",
      "Skiing at Solang Valley (winter)",
      "Apple and cherry picking (season)",
      "Trekking to Bhrigu Lake",
      "Mountain biking trails"
    ],
    packageOptions: [
      {
        type: "Budget",
        duration: "4 Days / 3 Nights",
        priceRange: "₹9,999 - ₹14,999",
        accommodation: "3-star hotel or guesthouse in Manali",
        meals: "Daily breakfast + 2 dinners",
        transport: "Shared cab for sightseeing, bus travel from Delhi",
        activities: ["Hadimba Temple visit", "Solang Valley day trip", "Old Manali exploration"],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Local Exploration",
            location: "Manali",
            activities: [
              "Arrival by overnight bus from Delhi",
              "Check-in at hotel",
              "Fresh up and breakfast",
              "Visit Hadimba Temple",
              "Explore Mall Road",
              "Evening at Van Vihar Park",
              "Dinner at local restaurant"
            ]
          },
          {
            day: 2,
            title: "Solang Valley Adventure",
            location: "Solang Valley",
            activities: [
              "Early breakfast",
              "Drive to Solang Valley",
              "Ropeway ride (optional)",
              "Adventure activities - paragliding/zorbing",
              "Lunch at valley",
              "Photography session",
              "Return to Manali",
              "Evening free for shopping"
            ]
          },
          {
            day: 3,
            title: "Rohtang Pass Excursion",
            location: "Rohtang Pass",
            activities: [
              "Very early breakfast",
              "Journey to Rohtang Pass",
              "Play in snow",
              "Photography at high altitude",
              "Lunch packed/at local dhaba",
              "Visit to Gulaba",
              "Return by evening",
              "Rest and dinner"
            ]
          },
          {
            day: 4,
            title: "Old Manali & Departure",
            location: "Old Manali",
            activities: [
              "Breakfast at hotel",
              "Visit Old Manali",
              "Manu Temple visit",
              "Lunch at cafe",
              "Last-minute shopping",
              "Check-out",
              "Evening bus to Delhi"
            ]
          }
        ]
      },
      {
        type: "Premium",
        duration: "5 Days / 4 Nights",
        priceRange: "₹22,999 - ₹32,999",
        accommodation: "4-star resort with mountain views",
        meals: "All meals included",
        transport: "Private AC cab, train/flight from Delhi",
        activities: ["River rafting", "Paragliding", "Vashisht hot springs", "Jogini Falls trek"],
        itinerary: [
          {
            day: 1,
            title: "Premium Arrival",
            location: "Manali",
            activities: [
              "Flight arrival at Kullu airport",
              "Luxury transfer to resort",
              "Mountain view room check-in",
              "Welcome lunch with local specialties",
              "Afternoon at resort facilities",
              "Evening nature walk",
              "Welcome dinner with cultural show"
            ]
          },
          {
            day: 2,
            title: "Adventure & Spirituality",
            location: "Solang & Vashisht",
            activities: [
              "Breakfast buffet",
              "Professional paragliding session",
              "Lunch at Solang Valley",
              "Visit Vashisht hot springs",
              "Traditional bath experience",
              "Visit ancient Vashisht Temple",
              "Return for dinner and bonfire"
            ]
          },
          {
            day: 3,
            title: "High Altitude Adventure",
            location: "Rohtang Pass",
            activities: [
              "Early breakfast",
              "Scenic drive to Rohtang",
              "Professional photography session",
              "Snow activities and games",
              "Hot lunch at high altitude",
              "Visit Beas Kund viewpoint",
              "Return via Gulaba",
              "Spa treatment at resort"
            ]
          },
          {
            day: 4,
            title: "Nature Trek & Rapids",
            location: "Jogini Falls & Beas River",
            activities: [
              "Breakfast and trek preparation",
              "Guided trek to Jogini Falls",
              "Picnic lunch near waterfall",
              "Afternoon river rafting in Beas",
              "Professional instructors",
              "Evening at Old Manali cafes",
              "Farewell dinner"
            ]
          },
          {
            day: 5,
            title: "Leisure & Departure",
            location: "Manali",
            activities: [
              "Late breakfast",
              "Resort facilities enjoyment",
              "Shopping at Mall Road",
              "Lunch at famous cafe",
              "Check-out and transfer",
              "Departure flight/train"
            ]
          }
        ]
      },
      {
        type: "Luxury",
        duration: "7 Days / 6 Nights",
        priceRange: "₹45,999 - ₹75,999",
        accommodation: "5-star luxury mountain resort with private suites",
        meals: "All gourmet meals, premium beverages, private chef option",
        transport: "Luxury car with chauffeur, helicopter transfers, private jets",
        activities: ["Helicopter tour", "Private trekking", "Luxury camping", "Exclusive experiences"],
        itinerary: [
          {
            day: 1,
            title: "Luxury Mountain Arrival",
            location: "Luxury Resort",
            activities: [
              "Private jet/helicopter arrival",
              "Presidential suite check-in",
              "Personal concierge assignment",
              "Champagne welcome",
              "Gourmet lunch with valley views",
              "Private spa consultation",
              "Exclusive dinner with live music"
            ]
          },
          {
            day: 2,
            title: "Aerial Adventure",
            location: "Himalayan Peaks",
            activities: [
              "Gourmet breakfast in suite",
              "Private helicopter tour",
              "Aerial views of Himalayan peaks",
              "Landing at remote glacier",
              "Exclusive mountain picnic",
              "Photography with professional",
              "Return for wellness treatments"
            ]
          },
          {
            day: 3,
            title: "Exclusive Cultural Immersion",
            location: "Local Villages",
            activities: [
              "Breakfast with local family",
              "Private village cultural tour",
              "Traditional craft workshops",
              "Exclusive temple ceremonies",
              "Lunch at heritage property",
              "Private audience with local artists",
              "Gala dinner with regional cuisine"
            ]
          },
          {
            day: 4,
            title: "Adventure & Luxury Camping",
            location: "High Altitude Camp",
            activities: [
              "Breakfast and departure",
              "Luxury camping setup at altitude",
              "Professional guided activities",
              "Gourmet camp lunch",
              "Sunset viewing from peaks",
              "Campfire with premium beverages",
              "Stargazing with telescope"
            ]
          },
          {
            day: 5,
            title: "Wellness & Rejuvenation",
            location: "Resort Spa",
            activities: [
              "Return to resort breakfast",
              "Full-day luxury spa package",
              "Ayurvedic treatments",
              "Meditation with mountain views",
              "Healthy gourmet lunch",
              "Personal fitness session",
              "Private chef dinner experience"
            ]
          },
          {
            day: 6,
            title: "Exclusive Experiences",
            location: "Private Locations",
            activities: [
              "Breakfast in private garden",
              "Exclusive monastery visit",
              "Private blessing ceremony",
              "Helicopter to secret waterfall",
              "Private lunch in nature",
              "Exclusive shopping experience",
              "Farewell celebration dinner"
            ]
          },
          {
            day: 7,
            title: "Luxury Departure",
            location: "Departure",
            activities: [
              "Leisurely breakfast",
              "Final spa treatment",
              "Personal shopping assistance",
              "VIP checkout service",
              "Luxury airport transfer",
              "VIP lounge access"
            ]
          }
        ]
      }
    ],
    difficulty: "Moderate",
    bestFor: "Adventure seekers, Nature lovers, Mountain enthusiasts"
  },
  {
    id: "jaipur-royal-heritage",
    name: "Jaipur Royal Heritage",
    subtitle: "Pink City Palaces & Forts",
    state: "Rajasthan",
    region: "North India",
    image: "photo-1477587458883-47145ed94245",
    rating: 4.8,
    reviews: 342,
    category: "Heritage",
    overview: "Step into the regal world of Jaipur, the Pink City of India. Explore magnificent palaces, imposing forts, and vibrant bazaars that showcase the grandeur of Rajputana heritage. Experience royal hospitality and timeless architecture in this UNESCO World Heritage city.",
    bestTime: "October to March",
    attractions: [
      {
        name: "Amber Fort",
        description: "Magnificent hilltop fort with intricate mirror work and elephant rides",
        unsplashImageId: "photo-1477587458883-47145ed94245"
      },
      {
        name: "City Palace",
        description: "Royal residence complex with museums and courtyards",
        unsplashImageId: "photo-1518548419970-58e3b4079ab2"
      },
      {
        name: "Hawa Mahal",
        description: "Iconic palace of winds with 953 windows",
        unsplashImageId: "photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Jaigarh Fort",
        description: "Fort housing the world's largest wheeled cannon",
        unsplashImageId: "photo-1544735716-392fe2489ffa"
      },
      {
        name: "Jantar Mantar",
        description: "UNESCO World Heritage astronomical observatory",
        unsplashImageId: "photo-1578662996442-48f60103fc96"
      },
      {
        name: "Nahargarh Fort",
        description: "Fort offering panoramic city views, especially at sunset",
        unsplashImageId: "photo-1512343879784-a960bf40e7f2"
      }
    ],
    specialExperiences: [
      "Elephant ride at Amber Fort",
      "Royal dining at heritage hotel",
      "Traditional puppet show",
      "Block printing workshop",
      "Camel cart ride in village",
      "Hot air balloon ride over city"
    ],
    packageOptions: [
      {
        type: "Budget",
        duration: "3 Days / 2 Nights",
        priceRange: "₹7,999 - ₹11,999",
        accommodation: "3-star heritage hotel or guesthouse",
        meals: "Daily breakfast + 1 dinner",
        transport: "Shared cab for sightseeing, train from Delhi",
        activities: ["Fort visits", "City palace tour", "Local market shopping"],
        itinerary: [
          {
            day: 1,
            title: "Pink City Welcome",
            location: "Jaipur",
            activities: [
              "Train arrival from Delhi",
              "Check-in at heritage hotel",
              "Lunch at local restaurant",
              "Visit Hawa Mahal",
              "Explore Johari Bazaar",
              "Evening at City Palace",
              "Traditional Rajasthani dinner"
            ]
          },
          {
            day: 2,
            title: "Forts & Palaces",
            location: "Amber & Jaigarh",
            activities: [
              "Early breakfast",
              "Amber Fort exploration",
              "Elephant ride experience",
              "Lunch at fort restaurant",
              "Visit Jaigarh Fort",
              "Sunset at Nahargarh Fort",
              "Evening free for rest"
            ]
          },
          {
            day: 3,
            title: "Heritage & Departure",
            location: "Jaipur",
            activities: [
              "Breakfast at hotel",
              "Jantar Mantar visit",
              "Albert Hall Museum",
              "Lunch and shopping",
              "Check-out",
              "Evening train to Delhi"
            ]
          }
        ]
      },
      {
        type: "Premium",
        duration: "5 Days / 4 Nights",
        priceRange: "₹24,999 - ₹35,999",
        accommodation: "4-star heritage palace hotel",
        meals: "All meals included",
        transport: "Private AC car, train/flight from Delhi",
        activities: ["Palace stays", "Cultural shows", "Cooking classes", "Village visits"],
        itinerary: [
          {
            day: 1,
            title: "Royal Welcome",
            location: "Heritage Hotel",
            activities: [
              "Flight arrival at Jaipur",
              "Welcome with traditional tilaka",
              "Check-in at palace hotel",
              "Royal lunch in darbar hall",
              "Hotel heritage tour",
              "Evening at Chokhi Dhani village",
              "Rajasthani cultural dinner show"
            ]
          },
          {
            day: 2,
            title: "Magnificent Forts",
            location: "Amber & Jaigarh",
            activities: [
              "Breakfast in palace dining",
              "Amber Fort with audio guide",
              "Royal elephant experience",
              "Lunch at Amber restaurant",
              "Jaigarh Fort exploration",
              "Photography at Panna Meena ka Kund",
              "Sunset dinner at Nahargarh"
            ]
          },
          {
            day: 3,
            title: "Pink City Heritage",
            location: "Jaipur City",
            activities: [
              "Heritage breakfast",
              "City Palace complex tour",
              "Jantar Mantar with guide",
              "Traditional lunch",
              "Hawa Mahal photo session",
              "Bazaar shopping with guide",
              "Rooftop dinner with city views"
            ]
          },
          {
            day: 4,
            title: "Art & Craft Immersion",
            location: "Local Workshops",
            activities: [
              "Breakfast and craft tour start",
              "Block printing workshop",
              "Blue pottery demonstration",
              "Artisan lunch",
              "Gem cutting visit",
              "Cooking class experience",
              "Dinner with local family"
            ]
          },
          {
            day: 5,
            title: "Leisure & Departure",
            location: "Jaipur",
            activities: [
              "Relaxed breakfast",
              "Hotel facilities enjoyment",
              "Last-minute shopping",
              "Lunch at heritage restaurant",
              "Check-out and transfer",
              "Departure flight/train"
            ]
          }
        ]
      },
      {
        type: "Luxury",
        duration: "6 Days / 5 Nights",
        priceRange: "₹55,999 - ₹85,999",
        accommodation: "5-star palace hotel with royal suites",
        meals: "All gourmet royal cuisine, premium beverages",
        transport: "Luxury car, private jet option, vintage car experiences",
        activities: ["Private palace tours", "Royal ceremonies", "Helicopter rides", "Exclusive dining"],
        itinerary: [
          {
            day: 1,
            title: "Maharaja's Welcome",
            location: "Palace Hotel",
            activities: [
              "Private jet arrival (optional)",
              "Royal welcome ceremony",
              "Maharaja suite check-in",
              "Personal butler service",
              "Royal lunch in throne room",
              "Private palace tour",
              "Dinner with live classical music"
            ]
          },
          {
            day: 2,
            title: "Aerial Royal Tour",
            location: "Helicopter Tour",
            activities: [
              "Royal breakfast service",
              "Private helicopter city tour",
              "Aerial photography session",
              "Exclusive Amber Fort access",
              "Private elephant ceremony",
              "Lunch at historic haveli",
              "Private shopping with curator"
            ]
          },
          {
            day: 3,
            title: "Cultural Maharaja Experience",
            location: "Exclusive Venues",
            activities: [
              "Breakfast in royal garden",
              "Private City Palace tour",
              "Meeting with royal family member",
              "Exclusive lunch at Rambagh Palace",
              "Private vintage car ride",
              "Exclusive jewelry viewing",
              "Royal banquet dinner"
            ]
          },
          {
            day: 4,
            title: "Desert & Village Royalty",
            location: "Rural Rajasthan",
            activities: [
              "Breakfast and village departure",
              "Private village cultural exchange",
              "Royal lunch with village chief",
              "Camel safari in style",
              "Sunset with champagne",
              "Private camp with luxury tents",
              "Dinner under stars with folk artists"
            ]
          },
          {
            day: 5,
            title: "Artisan Mastery",
            location: "Private Workshops",
            activities: [
              "Return breakfast",
              "Private master artisan workshops",
              "Exclusive jewelry designing",
              "Lunch with royal family",
              "Private museum access",
              "Sunset cocktails at palace",
              "Farewell royal feast"
            ]
          },
          {
            day: 6,
            title: "Royal Departure",
            location: "Departure",
            activities: [
              "Final royal breakfast",
              "Personal shopping assistance",
              "Palace memorabilia selection",
              "Royal send-off ceremony",
              "Luxury transfer",
              "VIP departure lounge"
            ]
          }
        ]
      }
    ],
    difficulty: "Easy to Moderate",
    bestFor: "History buffs, Culture enthusiasts, Architecture lovers"
  },
  {
    id: "kashmir-paradise-valley",
    name: "Kashmir Paradise Valley",
    subtitle: "Heaven on Earth Experience",
    state: "Jammu & Kashmir",
    region: "North India",
    image: "photo-1506905925346-21bda4d32df4",
    rating: 4.9,
    reviews: 156,
    category: "Nature",
    overview: "Discover why Kashmir is called 'Paradise on Earth' with its pristine lakes, snow-capped mountains, and Mughal gardens. Experience the unique culture, warm hospitality, and breathtaking landscapes that make Kashmir truly magical.",
    bestTime: "April to October",
    attractions: [
      {
        name: "Dal Lake",
        description: "Iconic lake with houseboats, shikaras, and floating gardens",
        unsplashImageId: "photo-1506905925346-21bda4d32df4"
      },
      {
        name: "Gulmarg",
        description: "Meadow of flowers, Asia's highest golf course, and skiing destination",
        unsplashImageId: "photo-1544735716-392fe2489ffa"
      },
      {
        name: "Pahalgam",
        description: "Valley of shepherds with pristine rivers and pine forests",
        unsplashImageId: "photo-1578662996442-48f60103fc96"
      },
      {
        name: "Sonamarg",
        description: "Meadow of gold with glaciers and alpine lakes",
        unsplashImageId: "photo-1512343879784-a960bf40e7f2"
      },
      {
        name: "Shalimar Bagh",
        description: "Mughal garden with terraced lawns and water channels",
        unsplashImageId: "photo-1578474846511-04ba529f0b88"
      },
      {
        name: "Betaab Valley",
        description: "Picturesque valley named after Bollywood movie, surrounded by mountains",
        unsplashImageId: "photo-1477587458883-47145ed94245"
      }
    ],
    specialExperiences: [
      "Shikara ride on Dal Lake",
      "Houseboat stay experience",
      "Gondola ride at Gulmarg",
      "River rafting in Lidder",
      "Apple orchard visits",
      "Traditional Kashmiri Wazwan feast"
    ],
    packageOptions: [
      {
        type: "Budget",
        duration: "5 Days / 4 Nights",
        priceRange: "₹15,999 - ₹22,999",
        accommodation: "3-star houseboat and hotels",
        meals: "Daily breakfast + 2 dinners",
        transport: "Shared cabs for sightseeing, economy flight",
        activities: ["Dal Lake shikara", "Gulmarg day trip", "Pahalgam visit"],
        itinerary: [
          {
            day: 1,
            title: "Srinagar Arrival",
            location: "Srinagar",
            activities: [
              "Arrival at Srinagar airport",
              "Transfer to houseboat",
              "Traditional welcome tea",
              "Lunch on houseboat",
              "Shikara ride on Dal Lake",
              "Visit floating vegetable market",
              "Dinner with Kashmiri cuisine"
            ]
          },
          {
            day: 2,
            title: "Mughal Gardens & Local Sights",
            location: "Srinagar",
            activities: [
              "Breakfast on houseboat",
              "Visit Shalimar Bagh",
              "Explore Nishat Bagh",
              "Lunch at garden restaurant",
              "Chashme Shahi visit",
              "Shankaracharya Temple",
              "Evening at Boulevard Road"
            ]
          },
          {
            day: 3,
            title: "Gulmarg Meadows",
            location: "Gulmarg",
            activities: [
              "Early breakfast and departure",
              "Scenic drive to Gulmarg",
              "Gondola ride Phase 1",
              "Lunch at Gulmarg",
              "Horse riding in meadows",
              "Photography session",
              "Return to Srinagar"
            ]
          },
          {
            day: 4,
            title: "Pahalgam Valley",
            location: "Pahalgam",
            activities: [
              "Breakfast and departure",
              "Drive through saffron fields",
              "Pahalgam valley exploration",
              "Lunch by Lidder River",
              "Betaab Valley visit",
              "Aru Valley (if time permits)",
              "Return to Srinagar"
            ]
          },
          {
            day: 5,
            title: "Shopping & Departure",
            location: "Srinagar",
            activities: [
              "Breakfast on houseboat",
              "Shopping for handicrafts",
              "Visit to carpet weaving center",
              "Lunch at local restaurant",
              "Last shikara ride",
              "Transfer to airport"
            ]
          }
        ]
      },
      {
        type: "Premium",
        duration: "6 Days / 5 Nights",
        priceRange: "₹32,999 - ₹48,999",
        accommodation: "4-star luxury houseboat and mountain resorts",
        meals: "All meals with local specialties",
        transport: "Private cab, premium flight",
        activities: ["Gondola to Apharwat", "River rafting", "Sonamarg trip", "Cultural experiences"],
        itinerary: [
          {
            day: 1,
            title: "Grand Kashmir Welcome",
            location: "Luxury Houseboat",
            activities: [
              "Premium flight arrival",
              "VIP airport reception",
              "Luxury houseboat check-in",
              "Welcome ceremony with flowers",
              "Traditional Kahwa and snacks",
              "Sunset shikara with photography",
              "Authentic Wazwan dinner"
            ]
          },
          {
            day: 2,
            title: "Srinagar Heritage",
            location: "Srinagar",
            activities: [
              "Breakfast on sun deck",
              "Guided Mughal gardens tour",
              "Professional photography",
              "Lunch at heritage restaurant",
              "Hazratbal Shrine visit",
              "Evening at local family home",
              "Dinner with cultural show"
            ]
          },
          {
            day: 3,
            title: "Gulmarg Mountain Experience",
            location: "Gulmarg",
            activities: [
              "Early breakfast and departure",
              "Luxury resort check-in Gulmarg",
              "Gondola ride to Apharwat Peak",
              "Mountain lunch with views",
              "Golf at world's highest course",
              "Mountain biking/hiking",
              "Dinner at resort"
            ]
          },
          {
            day: 4,
            title: "Pahalgam Adventure",
            location: "Pahalgam",
            activities: [
              "Breakfast and check-out",
              "Scenic drive to Pahalgam",
              "Resort check-in",
              "White water rafting",
              "Lunch by river",
              "Betaab & Aru valley tour",
              "Campfire dinner"
            ]
          },
          {
            day: 5,
            title: "Sonamarg Golden Meadow",
            location: "Sonamarg",
            activities: [
              "Early breakfast",
              "Day trip to Sonamarg",
              "Pony ride to Thajiwas Glacier",
              "Picnic lunch in meadows",
              "Sindh River activities",
              "Photography session",
              "Return to Srinagar farewell dinner"
            ]
          },
          {
            day: 6,
            title: "Cultural Immersion & Departure",
            location: "Srinagar",
            activities: [
              "Breakfast with houseboat family",
              "Handicraft shopping tour",
              "Carpet weaving demonstration",
              "Lunch at famous restaurant",
              "Final shikara memories",
              "Airport transfer and departure"
            ]
          }
        ]
      },
      {
        type: "Luxury",
        duration: "8 Days / 7 Nights",
        priceRange: "₹65,999 - ₹95,999",
        accommodation: "5-star palace hotels and luxury houseboats",
        meals: "All gourmet meals, premium beverages, private chef",
        transport: "Luxury vehicles, helicopter transfers, private jets",
        activities: ["Helicopter tours", "Private ceremonies", "Exclusive access", "Luxury camping"],
        itinerary: [
          {
            day: 1,
            title: "Royal Kashmir Arrival",
            location: "Luxury Houseboat",
            activities: [
              "Private jet arrival",
              "Red carpet airport welcome",
              "Presidential houseboat suite",
              "Champagne welcome ceremony",
              "Personal concierge assignment",
              "Sunset helicopter tour",
              "Royal feast with live ghazals"
            ]
          },
          {
            day: 2,
            title: "Srinagar Grandeur",
            location: "Srinagar",
            activities: [
              "Breakfast with royal family",
              "Private Mughal gardens tour",
              "Exclusive historical insights",
              "Lunch at 200-year-old haveli",
              "Personal shopping curator",
              "Private shikara with musicians",
              "Candlelit dinner on water"
            ]
          },
          {
            day: 3,
            title: "Gulmarg Luxury",
            location: "Gulmarg",
            activities: [
              "Helicopter transfer to Gulmarg",
              "Presidential suite check-in",
              "Private gondola access",
              "Gourmet mountain lunch",
              "Exclusive golf experience",
              "Spa treatments with herbs",
              "Private dinner with valley views"
            ]
          },
          {
            day: 4,
            title: "Adventure & Luxury Camping",
            location: "High Altitude Camp",
            activities: [
              "Breakfast and camp departure",
              "Luxury camping at Apharwat",
              "Professional adventure activities",
              "Gourmet camp cuisine",
              "Sunset champagne session",
              "Astronomy session with telescope",
              "Premium camping dinner"
            ]
          },
          {
            day: 5,
            title: "Pahalgam Pristine Beauty",
            location: "Pahalgam",
            activities: [
              "Helicopter to Pahalgam",
              "Luxury resort check-in",
              "Private river rafting",
              "Gourmet riverside lunch",
              "Exclusive valley access",
              "Private horse riding",
              "Dinner with folk artists"
            ]
          },
          {
            day: 6,
            title: "Sonamarg Glacier Experience",
            location: "Sonamarg",
            activities: [
              "Early gourmet breakfast",
              "Luxury vehicle to Sonamarg",
              "Private glacier expedition",
              "Helicopter to high peaks",
              "Exclusive lunch at altitude",
              "Private photography session",
              "Return luxury camping"
            ]
          },
          {
            day: 7,
            title: "Cultural Heritage Finale",
            location: "Srinagar",
            activities: [
              "Return to luxury houseboat",
              "Private craft master sessions",
              "Exclusive antique viewing",
              "Lunch with local dignitaries",
              "Personal museum tours",
              "Sunset ceremony participation",
              "Grand farewell banquet"
            ]
          },
          {
            day: 8,
            title: "Luxury Departure",
            location: "Departure",
            activities: [
              "Final breakfast with views",
              "Personal memento presentation",
              "VIP shopping assistance",
              "Luxury transfer arrangements",
              "Private jet departure",
              "Memories for lifetime"
            ]
          }
        ]
      }
    ],
    difficulty: "Easy to Moderate",
    bestFor: "Nature lovers, Photographers, Honeymooners"
  }
];

// Continue with more destinations...
// This is the first batch of 3 destinations. The complete data structure will include all 20 destinations.