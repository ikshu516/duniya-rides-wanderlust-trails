export interface Attraction {
  name: string;
  description: string;
  image: string;
  category: 'heritage' | 'nature' | 'adventure' | 'spiritual' | 'beach' | 'cultural';
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: {
    min: number;
    max: number;
  };
  type: 'budget' | 'premium' | 'luxury';
  inclusions: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  heroImage: string;
  bestTimeToVisit: string;
  attractions: Attraction[];
  packages: Package[];
  specialExperiences: string[];
  category: 'beach' | 'mountain' | 'heritage' | 'spiritual' | 'adventure' | 'cultural';
}

export const destinationsData: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    description: 'India\'s smallest state offers pristine beaches, Portuguese heritage, vibrant nightlife, and a laid-back coastal vibe.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'November to March',
    category: 'beach',
    attractions: [
      {
        name: 'Palolem Beach',
        description: 'Crescent-shaped beach with golden sand and crystal-clear waters',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Old Goa Churches',
        description: 'UNESCO World Heritage churches showcasing Portuguese architecture',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Dudhsagar Falls',
        description: 'Spectacular four-tiered waterfall cascading from 310 meters',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Anjuna Beach',
        description: 'Famous for its Wednesday flea market and vibrant nightlife',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Fort Aguada',
        description: '17th-century Portuguese fort with panoramic coastal views',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Spice Plantations',
        description: 'Aromatic spice gardens offering guided tours and traditional meals',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'goa-budget',
        name: 'Beach Bliss Budget',
        duration: '4 Days, 3 Nights',
        price: { min: 8000, max: 12000 },
        type: 'budget',
        inclusions: [
          '3* Hotel accommodation',
          'Daily breakfast',
          'Airport transfers',
          'Sightseeing by AC vehicle',
          'Entry tickets included'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Arrival & North Goa Beaches',
            activities: ['Airport pickup', 'Check-in to hotel', 'Visit Calangute & Baga Beach', 'Evening at Anjuna Beach']
          },
          {
            day: 2,
            title: 'Old Goa Heritage Tour',
            activities: ['Visit Basilica of Bom Jesus', 'Se Cathedral exploration', 'Dona Paula viewpoint', 'Miramar Beach sunset']
          },
          {
            day: 3,
            title: 'South Goa & Adventure',
            activities: ['Palolem Beach visit', 'Cabo de Rama Fort', 'Dudhsagar Falls trip', 'Spice plantation tour']
          },
          {
            day: 4,
            title: 'Departure',
            activities: ['Last-minute shopping', 'Check-out', 'Airport drop']
          }
        ],
        highlights: ['Beach hopping', 'Portuguese heritage', 'Waterfall adventure', 'Local cuisine tasting']
      },
      {
        id: 'goa-premium',
        name: 'Coastal Paradise Premium',
        duration: '6 Days, 5 Nights',
        price: { min: 25000, max: 35000 },
        type: 'premium',
        inclusions: [
          '4* Beach resort stay',
          'All meals included',
          'Private AC transfers',
          'Water sports activities',
          'Sunset cruise',
          'Spa session'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Grand Arrival',
            activities: ['Luxury airport transfer', 'Beach resort check-in', 'Welcome drink', 'Evening beach walk']
          },
          {
            day: 2,
            title: 'Water Sports Extravaganza',
            activities: ['Parasailing at Candolim', 'Jet skiing', 'Banana boat ride', 'Beach volleyball']
          },
          {
            day: 3,
            title: 'Heritage & Culture',
            activities: ['Old Goa UNESCO sites', 'Latin Quarter Fontainhas', 'Museum visit', 'Traditional Goan dinner']
          },
          {
            day: 4,
            title: 'Nature & Adventure',
            activities: ['Dudhsagar Falls expedition', 'Spice plantation lunch', 'Butterfly conservatory', 'Evening spa']
          },
          {
            day: 5,
            title: 'Island Hopping',
            activities: ['Divar Island tour', 'River cruise', 'Dolphin spotting', 'Sunset at Chapora Fort']
          },
          {
            day: 6,
            title: 'Farewell',
            activities: ['Last-minute beach time', 'Souvenir shopping', 'Airport departure']
          }
        ],
        highlights: ['Premium beach resort', 'Water sports included', 'Cultural immersion', 'Island exploration']
      },
      {
        id: 'goa-luxury',
        name: 'Opulent Goa Escape',
        duration: '7 Days, 6 Nights',
        price: { min: 50000, max: 75000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury resort with private beach',
          'All premium meals & drinks',
          'Private butler service',
          'Helicopter rides',
          'Yacht charter',
          'Premium spa treatments',
          'Fine dining experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Welcome',
            activities: ['Private jet/helicopter arrival', 'Luxury villa check-in', 'Private beach access', 'Champagne dinner']
          },
          {
            day: 2,
            title: 'Aerial & Aquatic Adventures',
            activities: ['Helicopter coastal tour', 'Private yacht cruise', 'Deep sea fishing', 'Gourmet lunch onboard']
          },
          {
            day: 3,
            title: 'Cultural Immersion Deluxe',
            activities: ['Private heritage guide', 'Exclusive museum access', 'Traditional cooking class', 'Wine tasting']
          },
          {
            day: 4,
            title: 'Wellness & Rejuvenation',
            activities: ['Ayurvedic spa treatments', 'Yoga by the beach', 'Meditation session', 'Organic farm visit']
          },
          {
            day: 5,
            title: 'Adventure & Wildlife',
            activities: ['Private Dudhsagar expedition', 'Wildlife sanctuary visit', 'Bird watching', 'Photography session']
          },
          {
            day: 6,
            title: 'Island Paradise',
            activities: ['Private island picnic', 'Scuba diving', 'Beach sports', 'Sunset dinner cruise']
          },
          {
            day: 7,
            title: 'Grand Farewell',
            activities: ['Final spa session', 'Luxury shopping', 'Private departure transfer']
          }
        ],
        highlights: ['Ultra-luxury accommodation', 'Private experiences', 'Helicopter tours', 'Exclusive access']
      }
    ],
    specialExperiences: [
      'Sunset cruise on Mandovi River',
      'Flea market shopping at Anjuna',
      'Casino gaming experience',
      'Traditional Goan cooking classes',
      'Dolphin spotting tours',
      'Beach shack hopping',
      'Portuguese architecture walking tour'
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    state: 'Himachal Pradesh',
    description: 'A picturesque hill station nestled in the Himalayas, offering adventure sports, apple orchards, and breathtaking mountain views.',
    heroImage: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'March to June, October to February',
    category: 'mountain',
    attractions: [
      {
        name: 'Solang Valley',
        description: 'Adventure hub with paragliding, zorbing, and skiing activities',
        image: 'https://images.unsplash.com/photo-1592548890095-cd2a7aeca5ac?w=600&h=400&fit=crop',
        category: 'adventure'
      },
      {
        name: 'Rohtang Pass',
        description: 'High mountain pass offering snow activities and stunning Himalayan views',
        image: 'https://images.unsplash.com/photo-1723641628211-6d08ac6208ce?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Hadimba Temple',
        description: 'Ancient wooden temple surrounded by cedar forests',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Old Manali',
        description: 'Charming area with cafes, markets, and traditional Himachali culture',
        image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Kasol & Tosh Valley',
        description: 'Scenic valleys perfect for trekking and nature walks',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Mall Road',
        description: 'Main shopping street with local handicrafts and mountain views',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'cultural'
      }
    ],
    packages: [
      {
        id: 'manali-budget',
        name: 'Mountain Escape Budget',
        duration: '5 Days, 4 Nights',
        price: { min: 12000, max: 18000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Volvo transfers from Delhi',
          'Local sightseeing',
          'Adventure activity vouchers'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Journey to Mountains',
            activities: ['Evening Volvo departure from Delhi', 'Overnight journey to Manali']
          },
          {
            day: 2,
            title: 'Manali Local Sightseeing',
            activities: ['Hotel check-in', 'Hadimba Temple visit', 'Mall Road exploration', 'Tibetan Monastery']
          },
          {
            day: 3,
            title: 'Solang Valley Adventure',
            activities: ['Full day at Solang Valley', 'Paragliding (weather permitting)', 'Ropeway ride', 'Evening return']
          },
          {
            day: 4,
            title: 'Rohtang Pass Excursion',
            activities: ['Early morning Rohtang trip', 'Snow activities', 'Photography session', 'Return via Gulaba']
          },
          {
            day: 5,
            title: 'Departure',
            activities: ['Check-out', 'Last-minute shopping', 'Evening Volvo to Delhi']
          }
        ],
        highlights: ['Himalayan adventure', 'Budget-friendly stay', 'Snow activities', 'Local culture']
      },
      {
        id: 'manali-premium',
        name: 'Himalayan Premium Experience',
        duration: '6 Days, 5 Nights',
        price: { min: 30000, max: 45000 },
        type: 'premium',
        inclusions: [
          '4* Resort with mountain views',
          'All meals included',
          'Private cab transfers',
          'Premium adventure activities',
          'Spa treatments',
          'Cultural performances'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxurious Arrival',
            activities: ['Flight to Kullu-Manali', 'Premium resort check-in', 'Welcome dinner', 'Evening bonfire']
          },
          {
            day: 2,
            title: 'Heritage & Culture',
            activities: ['Hadimba Temple morning visit', 'Van Vihar National Park', 'Manu Temple trek', 'Old Manali cafes']
          },
          {
            day: 3,
            title: 'Adventure Capital',
            activities: ['Solang Valley full day', 'Paragliding & zorbing', 'Cable car rides', 'Adventure sports']
          },
          {
            day: 4,
            title: 'High Altitude Experience',
            activities: ['Rohtang Pass expedition', 'Snow sports activities', 'Photography workshop', 'Local cuisine tasting']
          },
          {
            day: 5,
            title: 'Wellness & Relaxation',
            activities: ['Spa morning session', 'Nature walks', 'Apple orchard visit', 'Cultural evening program']
          },
          {
            day: 6,
            title: 'Farewell Mountains',
            activities: ['Final mountain views', 'Souvenir shopping', 'Departure transfers']
          }
        ],
        highlights: ['Premium mountain resort', 'Adventure activities', 'Spa wellness', 'Cultural immersion']
      },
      {
        id: 'manali-luxury',
        name: 'Himalayan Luxury Retreat',
        duration: '7 Days, 6 Nights',
        price: { min: 60000, max: 90000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury mountain resort',
          'Gourmet dining experiences',
          'Private helicopter rides',
          'Personal mountain guide',
          'Premium spa & wellness',
          'Exclusive experiences',
          'Butler service'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Grand Mountain Welcome',
            activities: ['Private helicopter arrival', 'Ultra-luxury resort check-in', 'Champagne welcome', 'Private dinner']
          },
          {
            day: 2,
            title: 'Aerial Himalayan Tour',
            activities: ['Helicopter mountain tour', 'Exclusive viewpoints', 'Gourmet picnic lunch', 'Photography session']
          },
          {
            day: 3,
            title: 'Cultural Immersion Deluxe',
            activities: ['Private temple ceremonies', 'Traditional craft workshops', 'Local family visits', 'Folk performance']
          },
          {
            day: 4,
            title: 'Ultimate Adventure',
            activities: ['Private adventure activities', 'Professional guides', 'Exclusive locations', 'Luxury camping']
          },
          {
            day: 5,
            title: 'Wellness Sanctuary',
            activities: ['Himalayan spa treatments', 'Meditation sessions', 'Yoga with mountain views', 'Ayurvedic consultations']
          },
          {
            day: 6,
            title: 'Exclusive Explorations',
            activities: ['Private valley tours', 'Exclusive access areas', 'Gourmet experiences', 'Wine tasting']
          },
          {
            day: 7,
            title: 'Luxury Departure',
            activities: ['Final spa session', 'Luxury shopping', 'Private helicopter departure']
          }
        ],
        highlights: ['Helicopter experiences', 'Ultra-luxury stay', 'Private guides', 'Exclusive access']
      }
    ],
    specialExperiences: [
      'River rafting in Beas River',
      'Trekking to nearby valleys',
      'Apple and cherry picking',
      'Local Himachali cuisine',
      'Traditional handicraft shopping',
      'Camping under stars',
      'Mountain biking adventures'
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    description: 'The Pink City showcases royal Rajasthani heritage with magnificent palaces, forts, and vibrant bazaars.',
    heroImage: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Amber Fort',
        description: 'Magnificent hilltop fort with stunning architecture and elephant rides',
        image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Hawa Mahal',
        description: 'Iconic palace with intricate latticework windows',
        image: 'https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'City Palace',
        description: 'Royal residence showcasing Rajasthani and Mughal architecture',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Jantar Mantar',
        description: 'UNESCO World Heritage astronomical observatory',
        image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Johari Bazaar',
        description: 'Famous jewelry market in the heart of Pink City',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Jaigarh Fort',
        description: 'Military fort housing the world\'s largest cannon',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
        category: 'heritage'
      }
    ],
    packages: [
      {
        id: 'jaipur-budget',
        name: 'Royal Heritage Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 6000, max: 10000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel stay',
          'Daily breakfast',
          'AC transfers from Delhi',
          'Sightseeing with guide',
          'Entry tickets included'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Pink City Welcome',
            activities: ['Arrival from Delhi', 'Hotel check-in', 'City Palace visit', 'Hawa Mahal photography', 'Johari Bazaar shopping']
          },
          {
            day: 2,
            title: 'Fort Expedition',
            activities: ['Amber Fort with elephant ride', 'Jaigarh Fort exploration', 'Jantar Mantar visit', 'Local Rajasthani lunch']
          },
          {
            day: 3,
            title: 'Culture & Departure',
            activities: ['Albert Hall Museum', 'Birla Temple visit', 'Last-minute shopping', 'Return to Delhi']
          }
        ],
        highlights: ['Royal palaces', 'Heritage forts', 'Traditional bazaars', 'Rajasthani culture']
      },
      {
        id: 'jaipur-premium',
        name: 'Maharaja Premium Experience',
        duration: '5 Days, 4 Nights',
        price: { min: 25000, max: 38000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals with Rajasthani cuisine',
          'Private air-conditioned car',
          'Cultural performances',
          'Cooking classes',
          'Professional guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Arrival',
            activities: ['Traditional welcome at heritage hotel', 'Afternoon city orientation', 'Evening cultural show', 'Rajasthani dinner']
          },
          {
            day: 2,
            title: 'Palace Trail',
            activities: ['City Palace detailed tour', 'Hawa Mahal inside visit', 'Jantar Mantar exploration', 'Traditional craft workshop']
          },
          {
            day: 3,
            title: 'Fort Adventures',
            activities: ['Amber Fort with audio guide', 'Elephant ride experience', 'Jaigarh Fort visit', 'Puppet show evening']
          },
          {
            day: 4,
            title: 'Cultural Immersion',
            activities: ['Cooking class with local family', 'Village visit experience', 'Traditional textile shopping', 'Folk dance performance']
          },
          {
            day: 5,
            title: 'Farewell Royalty',
            activities: ['Final palace visits', 'Jewelry shopping', 'Departure with memories']
          }
        ],
        highlights: ['Heritage hotel stay', 'Cultural workshops', 'Traditional experiences', 'Premium guided tours']
      },
      {
        id: 'jaipur-luxury',
        name: 'Rajasthani Royalty Luxury',
        duration: '6 Days, 5 Nights',
        price: { min: 55000, max: 85000 },
        type: 'luxury',
        inclusions: [
          '5* Palace hotel stay',
          'Fine dining experiences',
          'Private helicopter tours',
          'Personal butler service',
          'Luxury spa treatments',
          'Exclusive palace access',
          'Private performances'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Maharaja Welcome',
            activities: ['Luxury hotel check-in', 'Private palace tour', 'Welcome feast', 'Traditional ceremony']
          },
          {
            day: 2,
            title: 'Aerial Royal Tour',
            activities: ['Helicopter city tour', 'Exclusive fort access', 'Private dining in palace', 'Royal spa treatment']
          },
          {
            day: 3,
            title: 'Heritage Immersion',
            activities: ['Private museum tours', 'Exclusive craft demonstrations', 'Royal jewelry shopping', 'Private concert']
          },
          {
            day: 4,
            title: 'Desert & Wellness',
            activities: ['Desert excursion', 'Camel safari', 'Traditional tent dining', 'Ayurvedic treatments']
          },
          {
            day: 5,
            title: 'Royal Adventures',
            activities: ['Private elephant experience', 'Exclusive palace areas', 'Gourmet cooking class', 'Wine tasting']
          },
          {
            day: 6,
            title: 'Grand Farewell',
            activities: ['Final royal breakfast', 'Luxury shopping', 'Private departure transfer']
          }
        ],
        highlights: ['Palace hotel luxury', 'Helicopter tours', 'Exclusive experiences', 'Royal treatment']
      }
    ],
    specialExperiences: [
      'Elephant rides at Amber Fort',
      'Traditional puppet shows',
      'Rajasthani cooking classes',
      'Jewelry making workshops',
      'Camel safari experiences',
      'Heritage hotel stays',
      'Cultural folk performances'
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    state: 'Jammu and Kashmir',
    description: 'Paradise on Earth with pristine valleys, snow-capped peaks, serene lakes, and houseboats offering breathtaking natural beauty.',
    heroImage: 'https://images.unsplash.com/photo-1661747340818-df15f186554e?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'April to October',
    category: 'mountain',
    attractions: [
      {
        name: 'Dal Lake',
        description: 'Famous lake with traditional houseboats and shikaras',
        image: 'https://images.unsplash.com/photo-1661747340818-df15f186554e?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Gulmarg',
        description: 'Meadow of flowers and premier skiing destination',
        image: 'https://images.unsplash.com/photo-1676441019594-07142b925bc2?w=600&h=400&fit=crop',
        category: 'adventure'
      },
      {
        name: 'Pahalgam',
        description: 'Valley of shepherds with scenic beauty',
        image: 'https://images.unsplash.com/photo-1700570036323-b4ceb7137f16?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Sonamarg',
        description: 'Golden meadow surrounded by glaciers',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Srinagar Gardens',
        description: 'Mughal gardens including Nishat and Shalimar',
        image: 'https://images.unsplash.com/photo-1661747340818-df15f186554e?w=600&h=400&fit=crop',
        category: 'heritage'
      }
    ],
    packages: [
      {
        id: 'kashmir-budget',
        name: 'Paradise Budget Tour',
        duration: '5 Days, 4 Nights',
        price: { min: 15000, max: 22000 },
        type: 'budget',
        inclusions: [
          '3* Hotel & houseboat stay',
          'Daily breakfast',
          'Airport transfers',
          'Shikara rides',
          'Local sightseeing'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Srinagar',
            activities: ['Airport pickup', 'Hotel check-in', 'Dal Lake shikara ride', 'Mughal gardens visit']
          },
          {
            day: 2,
            title: 'Gulmarg Excursion',
            activities: ['Drive to Gulmarg', 'Gondola ride', 'Snow activities', 'Return to Srinagar']
          },
          {
            day: 3,
            title: 'Pahalgam Day Trip',
            activities: ['Drive to Pahalgam', 'Betaab Valley', 'Aru Valley', 'River rafting']
          },
          {
            day: 4,
            title: 'Houseboat Experience',
            activities: ['Check-in houseboat', 'Local market visit', 'Traditional dinner', 'Cultural show']
          },
          {
            day: 5,
            title: 'Departure',
            activities: ['Final sightseeing', 'Shopping', 'Airport transfer']
          }
        ],
        highlights: ['Houseboat stay', 'Shikara rides', 'Mountain views', 'Local culture']
      },
      {
        id: 'kashmir-premium',
        name: 'Kashmir Premium Experience',
        duration: '7 Days, 6 Nights',
        price: { min: 40000, max: 60000 },
        type: 'premium',
        inclusions: [
          '4* Deluxe hotels & houseboats',
          'All meals included',
          'Private car transfers',
          'Professional guide',
          'Adventure activities',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Grand Kashmir Welcome',
            activities: ['Luxury transfer', 'Premium houseboat', 'Welcome dinner', 'Evening shikara']
          },
          {
            day: 2,
            title: 'Srinagar Heritage',
            activities: ['Mughal gardens tour', 'Old city exploration', 'Craft workshops', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Gulmarg Adventure',
            activities: ['Cable car to Khilanmarg', 'Skiing lessons', 'Snow sports', 'Mountain photography']
          },
          {
            day: 4,
            title: 'Pahalgam Nature',
            activities: ['Valley exploration', 'Horse riding', 'Trekking', 'Riverside camping']
          },
          {
            day: 5,
            title: 'Sonamarg Excursion',
            activities: ['Golden meadow visit', 'Glacier viewing', 'Pony rides', 'Photography session']
          },
          {
            day: 6,
            title: 'Cultural Immersion',
            activities: ['Local village visit', 'Kashmiri cooking class', 'Handicraft shopping', 'Folk performance']
          },
          {
            day: 7,
            title: 'Farewell Paradise',
            activities: ['Final lake cruise', 'Souvenir shopping', 'Departure transfer']
          }
        ],
        highlights: ['Premium houseboats', 'Adventure sports', 'Cultural workshops', 'Professional photography']
      },
      {
        id: 'kashmir-luxury',
        name: 'Royal Kashmir Luxury',
        duration: '8 Days, 7 Nights',
        price: { min: 80000, max: 120000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury resorts & royal houseboats',
          'Gourmet dining experiences',
          'Private helicopter tours',
          'Personal butler service',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Private guides'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Arrival',
            activities: ['Helicopter arrival', 'Royal houseboat suite', 'Champagne welcome', 'Private dinner']
          },
          {
            day: 2,
            title: 'Aerial Kashmir Tour',
            activities: ['Helicopter valley tour', 'Exclusive viewpoints', 'Luxury picnic', 'Photography session']
          },
          {
            day: 3,
            title: 'Heritage & Culture Deluxe',
            activities: ['Private palace tours', 'Royal dining experiences', 'Exclusive craft demonstrations', 'Cultural performances']
          },
          {
            day: 4,
            title: 'Adventure Luxury',
            activities: ['Private skiing lessons', 'Luxury mountain lodge', 'Gourmet mountain dining', 'Spa treatments']
          },
          {
            day: 5,
            title: 'Exclusive Nature',
            activities: ['Private valley access', 'Luxury camping', 'Star gazing', 'Wellness treatments']
          },
          {
            day: 6,
            title: 'Royal Experiences',
            activities: ['Private shikara with dining', 'Exclusive shopping', 'Royal spa day', 'Wine tasting']
          },
          {
            day: 7,
            title: 'Cultural Luxury',
            activities: ['Private cultural shows', 'Master chef experiences', 'Luxury handicraft shopping', 'Royal treatment']
          },
          {
            day: 8,
            title: 'Grand Farewell',
            activities: ['Final luxury cruise', 'Helicopter departure', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter tours', 'Royal houseboats', 'Private experiences', 'Luxury spa']
      }
    ],
    specialExperiences: [
      'Houseboat stays on Dal Lake',
      'Shikara rides at sunset',
      'Skiing in Gulmarg',
      'Traditional Kashmiri Wazwan feast',
      'Handicraft shopping in old city',
      'Horse riding in Pahalgam',
      'Photography tours of valleys'
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    description: 'God\'s Own Country with tranquil backwaters, lush hill stations, spice plantations, and Ayurvedic wellness traditions.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'September to March',
    category: 'beach',
    attractions: [
      {
        name: 'Alleppey Backwaters',
        description: 'Network of canals and traditional houseboats',
        image: 'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Munnar Tea Gardens',
        description: 'Rolling hills covered with tea plantations',
        image: 'https://images.unsplash.com/photo-1542843137-8791a6904d14?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Periyar Wildlife Sanctuary',
        description: 'Wildlife sanctuary famous for elephants and boat safaris',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Fort Kochi',
        description: 'Historic port city with colonial architecture',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Wayanad Hills',
        description: 'Misty hills with coffee plantations and waterfalls',
        image: 'https://images.unsplash.com/photo-1647364147271-90897257f460?w=600&h=400&fit=crop',
        category: 'beach'
      }
    ],
    packages: [
      {
        id: 'kerala-budget',
        name: 'Backwater Bliss Budget',
        duration: '5 Days, 4 Nights',
        price: { min: 18000, max: 25000 },
        type: 'budget',
        inclusions: [
          '3* Hotel accommodation',
          'Houseboat overnight',
          'Daily breakfast',
          'Airport transfers',
          'Backwater cruise'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Kochi',
            activities: ['Airport pickup', 'Hotel check-in', 'Fort Kochi exploration', 'Chinese fishing nets']
          },
          {
            day: 2,
            title: 'Munnar Hill Station',
            activities: ['Drive to Munnar', 'Tea plantation visit', 'Tea museum', 'Mattupetty Dam']
          },
          {
            day: 3,
            title: 'Munnar Sightseeing',
            activities: ['Echo Point visit', 'Kundala Lake', 'Top Station', 'Spice garden tour']
          },
          {
            day: 4,
            title: 'Alleppey Houseboat',
            activities: ['Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise', 'Village visits']
          },
          {
            day: 5,
            title: 'Departure',
            activities: ['Final backwater cruise', 'Kochi transfer', 'Airport departure']
          }
        ],
        highlights: ['Houseboat experience', 'Tea plantation tours', 'Backwater cruises', 'Spice gardens']
      },
      {
        id: 'kerala-premium',
        name: 'Kerala Premium Retreat',
        duration: '7 Days, 6 Nights',
        price: { min: 45000, max: 65000 },
        type: 'premium',
        inclusions: [
          '4* Resort accommodation',
          'Luxury houseboat',
          'All meals included',
          'Ayurvedic treatments',
          'Cultural experiences',
          'Professional guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Kochi Heritage',
            activities: ['Heritage hotel check-in', 'Fort Kochi walking tour', 'Kathakali performance', 'Spice market']
          },
          {
            day: 2,
            title: 'Munnar Tea Country',
            activities: ['Scenic drive to Munnar', 'Tea factory tour', 'Trekking', 'Ayurvedic massage']
          },
          {
            day: 3,
            title: 'Thekkady Wildlife',
            activities: ['Periyar sanctuary', 'Boat safari', 'Spice plantation walk', 'Tribal village visit']
          },
          {
            day: 4,
            title: 'Luxury Houseboat',
            activities: ['Premium houseboat boarding', 'Chef-prepared meals', 'Village interactions', 'Sunset cruise']
          },
          {
            day: 5,
            title: 'Ayurveda & Wellness',
            activities: ['Ayurvedic spa resort', 'Wellness consultations', 'Yoga sessions', 'Meditation']
          },
          {
            day: 6,
            title: 'Cultural Kerala',
            activities: ['Traditional cooking class', 'Art form demonstrations', 'Handicraft shopping', 'Cultural evening']
          },
          {
            day: 7,
            title: 'Farewell Kerala',
            activities: ['Final relaxation', 'Souvenir shopping', 'Airport transfer']
          }
        ],
        highlights: ['Luxury houseboats', 'Ayurvedic treatments', 'Wildlife safaris', 'Cultural immersion']
      },
      {
        id: 'kerala-luxury',
        name: 'Royal Kerala Experience',
        duration: '8 Days, 7 Nights',
        price: { min: 85000, max: 130000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury resorts',
          'Royal houseboat suites',
          'Gourmet dining',
          'Private butler service',
          'Helicopter transfers',
          'Exclusive experiences',
          'Personal Ayurveda doctor'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Welcome',
            activities: ['Luxury resort check-in', 'Royal welcome ceremony', 'Private dinner', 'Traditional entertainment']
          },
          {
            day: 2,
            title: 'Heritage Luxury',
            activities: ['Private heritage tours', 'Exclusive palace access', 'Royal dining experiences', 'Cultural performances']
          },
          {
            day: 3,
            title: 'Hill Station Opulence',
            activities: ['Helicopter to Munnar', 'Luxury plantation stay', 'Private tea tasting', 'Gourmet experiences']
          },
          {
            day: 4,
            title: 'Wildlife Luxury',
            activities: ['Private wildlife safaris', 'Luxury jungle lodge', 'Exclusive access areas', 'Conservation experiences']
          },
          {
            day: 5,
            title: 'Royal Houseboat',
            activities: ['Presidential houseboat suite', 'Personal chef service', 'Private backwater access', 'Luxury amenities']
          },
          {
            day: 6,
            title: 'Ayurveda Royalty',
            activities: ['Royal spa treatments', 'Personal Ayurveda doctor', 'Customized wellness', 'Luxury yoga']
          },
          {
            day: 7,
            title: 'Cultural Luxury',
            activities: ['Private art performances', 'Master chef experiences', 'Exclusive shopping', 'Royal hospitality']
          },
          {
            day: 8,
            title: 'Grand Farewell',
            activities: ['Final luxury treatments', 'Helicopter departure', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter transfers', 'Royal accommodations', 'Private experiences', 'Personalized Ayurveda']
      }
    ],
    specialExperiences: [
      'Houseboat stays in backwaters',
      'Traditional Ayurvedic treatments',
      'Kathakali dance performances',
      'Spice plantation tours',
      'Tea garden experiences',
      'Wildlife boat safaris',
      'Traditional cooking classes'
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    description: 'Land of Kings featuring magnificent palaces, desert safaris, colorful culture, and royal heritage across multiple historic cities.',
    heroImage: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Jaisalmer Fort',
        description: 'Golden fort rising from Thar Desert',
        image: 'https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Udaipur City Palace',
        description: 'Magnificent palace complex on Lake Pichola',
        image: 'https://images.unsplash.com/photo-1709338573277-c161cbf8702c?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Thar Desert',
        description: 'Vast desert with camel safaris and sand dunes',
        image: 'https://images.unsplash.com/photo-1645093603488-9d5a1050733a?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Mehrangarh Fort, Jodhpur',
        description: 'Imposing fort overlooking the Blue City',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Lake Palace',
        description: 'Floating palace on Lake Pichola',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
        category: 'heritage'
      }
    ],
    packages: [
      {
        id: 'rajasthan-budget',
        name: 'Royal Rajasthan Budget',
        duration: '7 Days, 6 Nights',
        price: { min: 20000, max: 30000 },
        type: 'budget',
        inclusions: [
          '3* Heritage hotels',
          'Daily breakfast',
          'AC transport',
          'Camel safari',
          'Cultural shows',
          'Monument entries'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Jaipur Pink City',
            activities: ['Arrival', 'City Palace visit', 'Hawa Mahal', 'Local markets']
          },
          {
            day: 2,
            title: 'Jaipur Forts',
            activities: ['Amber Fort', 'Jaigarh Fort', 'Elephant ride', 'Cultural evening']
          },
          {
            day: 3,
            title: 'Jodhpur Blue City',
            activities: ['Drive to Jodhpur', 'Mehrangarh Fort', 'Blue city walk', 'Sunset point']
          },
          {
            day: 4,
            title: 'Jaisalmer Golden City',
            activities: ['Drive to Jaisalmer', 'Fort exploration', 'Havelis visit', 'Market shopping']
          },
          {
            day: 5,
            title: 'Desert Safari',
            activities: ['Sam sand dunes', 'Camel safari', 'Desert camping', 'Folk performances']
          },
          {
            day: 6,
            title: 'Udaipur Lake City',
            activities: ['Drive to Udaipur', 'City Palace', 'Lake Pichola boat ride', 'Sunset viewing']
          },
          {
            day: 7,
            title: 'Departure',
            activities: ['Final sightseeing', 'Shopping', 'Departure transfer']
          }
        ],
        highlights: ['Desert camel safari', 'Royal palaces', 'Cultural shows', 'Heritage hotels']
      },
      {
        id: 'rajasthan-premium',
        name: 'Maharaja Premium Tour',
        duration: '10 Days, 9 Nights',
        price: { min: 55000, max: 80000 },
        type: 'premium',
        inclusions: [
          '4* Heritage palaces',
          'All meals included',
          'Luxury desert camp',
          'Private guides',
          'Cultural experiences',
          'Royal treatments'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Jaipur Welcome',
            activities: ['Palace hotel check-in', 'Royal welcome', 'Evening cultural show', 'Traditional dinner']
          },
          {
            day: 2,
            title: 'Jaipur Heritage',
            activities: ['Private palace tours', 'Elephant painting', 'Jewelry workshops', 'Royal dining']
          },
          {
            day: 3,
            title: 'Pushkar Holy City',
            activities: ['Sacred lake visit', 'Camel fair (seasonal)', 'Temple tours', 'Sunset views']
          },
          {
            day: 4,
            title: 'Jodhpur Majesty',
            activities: ['Mehrangarh Fort', 'Royal cenotaphs', 'Blue city exploration', 'Cooking class']
          },
          {
            day: 5,
            title: 'Desert Journey',
            activities: ['Luxury desert camp', 'Camel expeditions', 'Star gazing', 'Folk entertainment']
          },
          {
            day: 6,
            title: 'Jaisalmer Splendor',
            activities: ['Fort palace tour', 'Haveli architecture', 'Desert museum', 'Cultural evening']
          },
          {
            day: 7,
            title: 'Udaipur Romance',
            activities: ['Lake palace visit', 'Boat cruises', 'Garden tours', 'Sunset dinner']
          },
          {
            day: 8,
            title: 'Mount Abu Hills',
            activities: ['Hill station visit', 'Dilwara temples', 'Sunset point', 'Cool weather']
          },
          {
            day: 9,
            title: 'Cultural Immersion',
            activities: ['Village visits', 'Craft workshops', 'Traditional meals', 'Folk performances']
          },
          {
            day: 10,
            title: 'Royal Farewell',
            activities: ['Final shopping', 'Royal breakfast', 'Departure transfers']
          }
        ],
        highlights: ['Heritage palace stays', 'Luxury desert camping', 'Cultural workshops', 'Royal experiences']
      },
      {
        id: 'rajasthan-luxury',
        name: 'Imperial Rajasthan Luxury',
        duration: '12 Days, 11 Nights',
        price: { min: 120000, max: 180000 },
        type: 'luxury',
        inclusions: [
          'Palace hotels & luxury resorts',
          'Royal dining experiences',
          'Private helicopter tours',
          'Personal butler service',
          'Exclusive palace access',
          'Luxury train journeys',
          'Royal spa treatments'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Imperial Welcome',
            activities: ['Palace hotel arrival', 'Royal ceremony', 'Champagne welcome', 'Private dinner']
          },
          {
            day: 2,
            title: 'Jaipur Royalty',
            activities: ['Private palace access', 'Royal elephant experience', 'Exclusive dining', 'Cultural performances']
          },
          {
            day: 3,
            title: 'Aerial Rajasthan',
            activities: ['Helicopter tour', 'Exclusive fort access', 'Gourmet picnic', 'Photography session']
          },
          {
            day: 4,
            title: 'Ranthambore Safari',
            activities: ['Luxury wildlife lodge', 'Tiger safaris', 'Conservation experiences', 'Royal dining']
          },
          {
            day: 5,
            title: 'Palace on Wheels',
            activities: ['Luxury train journey', 'Royal carriages', 'Onboard entertainment', 'Gourmet dining']
          },
          {
            day: 6,
            title: 'Jodhpur Splendor',
            activities: ['Royal fort access', 'Private museums', 'Luxury shopping', 'Royal treatments']
          },
          {
            day: 7,
            title: 'Desert Royalty',
            activities: ['Luxury desert palace', 'Private safaris', 'Royal camping', 'Star dining']
          },
          {
            day: 8,
            title: 'Jaisalmer Glory',
            activities: ['Private fort tours', 'Exclusive haveli access', 'Royal shopping', 'Cultural shows']
          },
          {
            day: 9,
            title: 'Udaipur Paradise',
            activities: ['Lake palace stay', 'Private boat cruises', 'Royal spa', 'Exclusive dining']
          },
          {
            day: 10,
            title: 'Royal Wellness',
            activities: ['Luxury spa treatments', 'Royal rejuvenation', 'Yoga sessions', 'Ayurveda']
          },
          {
            day: 11,
            title: 'Cultural Luxury',
            activities: ['Private performances', 'Master artisan visits', 'Exclusive shopping', 'Royal hospitality']
          },
          {
            day: 12,
            title: 'Grand Farewell',
            activities: ['Final royal treatment', 'Helicopter departure', 'Imperial send-off']
          }
        ],
        highlights: ['Palace hotel luxury', 'Helicopter tours', 'Royal train journeys', 'Exclusive experiences']
      }
    ],
    specialExperiences: [
      'Camel safaris in Thar Desert',
      'Heritage palace hotel stays',
      'Traditional puppet shows',
      'Royal dining experiences',
      'Desert camping under stars',
      'Elephant rides at Amber Fort',
      'Folk music and dance performances'
    ]
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    description: 'Home to the iconic Taj Mahal, Agra showcases Mughal architecture, rich history, and timeless monuments of love and grandeur.',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Taj Mahal',
        description: 'Iconic white marble mausoleum and UNESCO World Heritage Site',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Agra Fort',
        description: 'Red sandstone Mughal fort with stunning architecture',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Fatehpur Sikri',
        description: 'Abandoned Mughal city with perfectly preserved architecture',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Itimad-ud-Daulah',
        description: 'Exquisite marble tomb known as Baby Taj',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Mehtab Bagh',
        description: 'Charbagh garden offering stunning Taj Mahal views',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Akbar\'s Tomb',
        description: 'Magnificent tomb of Emperor Akbar in Sikandra',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
        category: 'heritage'
      }
    ],
    packages: [
      {
        id: 'agra-budget',
        name: 'Taj Mahal Budget Tour',
        duration: '2 Days, 1 Night',
        price: { min: 4000, max: 7000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Train transfers from Delhi',
          'Local transport',
          'Monument entry tickets'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Taj Mahal & Agra Fort',
            activities: ['Early morning train from Delhi', 'Hotel check-in', 'Taj Mahal sunrise visit', 'Agra Fort exploration', 'Local bazaar shopping']
          },
          {
            day: 2,
            title: 'Fatehpur Sikri & Departure',
            activities: ['Fatehpur Sikri day trip', 'Itimad-ud-Daulah visit', 'Last-minute shopping', 'Evening train to Delhi']
          }
        ],
        highlights: ['Taj Mahal sunrise', 'Mughal architecture', 'Heritage sites', 'Budget-friendly stay']
      },
      {
        id: 'agra-premium',
        name: 'Mughal Heritage Premium',
        duration: '3 Days, 2 Nights',
        price: { min: 15000, max: 25000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel near Taj',
          'All meals with Mughlai cuisine',
          'Private AC car with driver',
          'Professional heritage guide',
          'Sunset Taj viewing',
          'Cultural performances'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Taj Mahal Immersion',
            activities: ['Luxury transfer from Delhi', 'Heritage hotel check-in', 'Taj Mahal detailed tour', 'Mehtab Bagh sunset viewing']
          },
          {
            day: 2,
            title: 'Mughal Grandeur',
            activities: ['Agra Fort comprehensive tour', 'Fatehpur Sikri exploration', 'Marble inlay workshop', 'Traditional Mughlai feast']
          },
          {
            day: 3,
            title: 'Heritage & Departure',
            activities: ['Akbar\'s Tomb visit', 'Local craft shopping', 'Heritage photography', 'Comfortable return to Delhi']
          }
        ],
        highlights: ['Heritage hotel stay', 'Sunset Taj viewing', 'Craft workshops', 'Mughlai cuisine']
      },
      {
        id: 'agra-luxury',
        name: 'Imperial Agra Luxury',
        duration: '4 Days, 3 Nights',
        price: { min: 40000, max: 65000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury hotel with Taj views',
          'Fine dining experiences',
          'Private helicopter transfer',
          'Personal butler service',
          'Exclusive after-hours access',
          'Master crafts demonstrations',
          'Premium spa treatments'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Arrival',
            activities: ['Helicopter arrival from Delhi', 'Luxury hotel with Taj views', 'Private Taj visit', 'Champagne dinner']
          },
          {
            day: 2,
            title: 'Exclusive Heritage',
            activities: ['Private after-hours Taj access', 'Agra Fort royal chambers', 'Master artisan workshops', 'Imperial dining experience']
          },
          {
            day: 3,
            title: 'Mughal Luxury',
            activities: ['Fatehpur Sikri private tour', 'Exclusive historical sites', 'Luxury spa treatments', 'Private cultural performance']
          },
          {
            day: 4,
            title: 'Grand Farewell',
            activities: ['Final Taj photography session', 'Luxury shopping experience', 'Helicopter departure']
          }
        ],
        highlights: ['Helicopter transfers', 'Exclusive Taj access', 'Luxury hotel with views', 'Private experiences']
      }
    ],
    specialExperiences: [
      'Taj Mahal sunrise and sunset viewing',
      'Marble inlay craft workshops',
      'Mughlai cuisine cooking classes',
      'Heritage photography tours',
      'Private after-hours monument access',
      'Traditional handicraft shopping',
      'Yamuna river boat rides'
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    description: 'India\'s capital city blending ancient heritage with modern dynamism, featuring historic monuments, bustling markets, and diverse cuisine.',
    heroImage: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Red Fort',
        description: 'UNESCO World Heritage Mughal fortress with rich history',
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'India Gate',
        description: 'War memorial and iconic symbol of New Delhi',
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Humayun\'s Tomb',
        description: 'Magnificent Mughal tomb and UNESCO World Heritage Site',
        image: 'https://images.unsplash.com/photo-1637072286375-60a9859123cc?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Lotus Temple',
        description: 'Architectural marvel shaped like a lotus flower',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Chandni Chowk',
        description: 'Historic market street with traditional Indian bazaars',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Qutub Minar',
        description: 'Tallest brick minaret and UNESCO World Heritage Site',
        image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop',
        category: 'heritage'
      }
    ],
    packages: [
      {
        id: 'delhi-budget',
        name: 'Capital Heritage Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 5000, max: 8000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Metro day passes',
          'Local transport',
          'Monument entry tickets'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Old Delhi Heritage',
            activities: ['Red Fort exploration', 'Jama Masjid visit', 'Chandni Chowk rickshaw ride', 'Raj Ghat memorial']
          },
          {
            day: 2,
            title: 'New Delhi Modernity',
            activities: ['India Gate visit', 'Humayun\'s Tomb', 'Lotus Temple', 'Government buildings tour', 'Connaught Place shopping']
          },
          {
            day: 3,
            title: 'Cultural Delhi',
            activities: ['Qutub Minar complex', 'Akshardham Temple', 'Local market exploration', 'Departure preparation']
          }
        ],
        highlights: ['Historic monuments', 'Street food tours', 'Metro travel', 'Cultural diversity']
      },
      {
        id: 'delhi-premium',
        name: 'Delhi Premium Discovery',
        duration: '4 Days, 3 Nights',
        price: { min: 18000, max: 28000 },
        type: 'premium',
        inclusions: [
          '4* Central hotel',
          'All meals with diverse cuisine',
          'Private AC car with driver',
          'Professional guide',
          'Cultural experiences',
          'Food tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Historic Delhi Deep Dive',
            activities: ['Comprehensive Red Fort tour', 'Jama Masjid with minaret climb', 'Spice market exploration', 'Traditional Delhi dinner']
          },
          {
            day: 2,
            title: 'Mughal Heritage',
            activities: ['Humayun\'s Tomb detailed tour', 'Safdarjung Tomb', 'Nizamuddin Dargah', 'Sufi music evening']
          },
          {
            day: 3,
            title: 'Modern Delhi & Culture',
            activities: ['India Gate and surroundings', 'National Museum', 'Akshardham Temple', 'Cultural performance']
          },
          {
            day: 4,
            title: 'Local Experiences',
            activities: ['Qutub complex exploration', 'Local market tours', 'Street food tasting', 'Craft shopping']
          }
        ],
        highlights: ['Heritage deep dives', 'Food experiences', 'Cultural shows', 'Local interactions']
      },
      {
        id: 'delhi-luxury',
        name: 'Imperial Delhi Luxury',
        duration: '5 Days, 4 Nights',
        price: { min: 45000, max: 70000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury hotel in Lutyens Delhi',
          'Fine dining at heritage restaurants',
          'Private heritage expert guide',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Personal concierge service',
          'Private museum access'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Imperial Welcome',
            activities: ['Luxury hotel check-in', 'Private heritage orientation', 'Fine dining at iconic restaurant', 'Evening cultural show']
          },
          {
            day: 2,
            title: 'Mughal Grandeur',
            activities: ['Private Red Fort tour', 'Exclusive Jama Masjid access', 'Master craftsman visits', 'Royal dining experience']
          },
          {
            day: 3,
            title: 'Colonial & Modern',
            activities: ['Lutyens Delhi architecture tour', 'Private museum visits', 'Government quarter tour', 'Luxury spa session']
          },
          {
            day: 4,
            title: 'Cultural Immersion',
            activities: ['Private cooking class', 'Exclusive cultural performances', 'Master artisan workshops', 'Wine tasting dinner']
          },
          {
            day: 5,
            title: 'Luxury Farewell',
            activities: ['Final heritage site', 'Luxury shopping experience', 'Spa treatments', 'Private departure']
          }
        ],
        highlights: ['Luxury heritage hotel', 'Private expert guides', 'Exclusive access', 'Fine dining']
      }
    ],
    specialExperiences: [
      'Taj Mahal early morning photography',
      'Old Delhi heritage walks',
      'Street food tours in Chandni Chowk',
      'Mughal architecture workshops',
      'Traditional craft demonstrations',
      'Sufi music nights at Nizamuddin',
      'Parliamentary building tours'
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    description: 'The City of Dreams and commercial capital, featuring Bollywood glamour, colonial architecture, vibrant street life, and coastal charm.',
    heroImage: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'November to February',
    category: 'cultural',
    attractions: [
      {
        name: 'Gateway of India',
        description: 'Iconic archway monument overlooking Arabian Sea',
        image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Marine Drive',
        description: 'Scenic coastal road known as Queen\'s Necklace',
        image: 'https://source.unsplash.com/600x400/?marine%20drive,mumbai,india',
        category: 'cultural'
      },
      {
        name: 'Elephanta Caves',
        description: 'Ancient rock-cut caves dedicated to Lord Shiva',
        image: 'https://source.unsplash.com/600x400/?elephanta%20caves,mumbai,india',
        category: 'heritage'
      },
      {
        name: 'Bandra–Worli Sea Link',
        description: 'Iconic cable-stayed bridge linking Bandra and Worli with stunning sea views',
        image: 'https://source.unsplash.com/600x400/?bandra%20worli%20sea%20link,mumbai,india',
        category: 'cultural'
      },
      {
        name: 'Chhatrapati Shivaji Terminus',
        description: 'UNESCO World Heritage Victorian Gothic railway station',
        image: 'https://source.unsplash.com/600x400/?chhatrapati%20shivaji%20terminus,mumbai,india',
        category: 'heritage'
      },
      {
        name: 'Bollywood Studios',
        description: 'Film studios offering glimpses into Indian cinema',
        image: 'https://source.unsplash.com/600x400/?bollywood,studio,mumbai,india',
        category: 'cultural'
      }
    ],
    packages: [
      {
        id: 'mumbai-budget',
        name: 'Mumbai Explorer Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 6000, max: 10000 },
        type: 'budget',
        inclusions: [
          '3* Hotel accommodation',
          'Daily breakfast',
          'Local train passes',
          'Heritage site entries',
          'Street food tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'South Mumbai Heritage',
            activities: ['Gateway of India visit', 'Elephanta Caves ferry trip', 'Colaba Causeway shopping', 'Marine Drive evening walk']
          },
          {
            day: 2,
            title: 'Bollywood & Culture',
            activities: ['Film city tour', 'Bandra–Worli Sea Link', 'Local train experience', 'Street food tasting']
          },
          {
            day: 3,
            title: 'Markets & Departure',
            activities: ['Crawford Market', 'Hanging Gardens', 'Juhu Beach visit', 'Departure preparation']
          }
        ],
        highlights: ['Local train travel', 'Street food tours', 'Bollywood insights', 'Cultural diversity']
      },
      {
        id: 'mumbai-premium',
        name: 'Mumbai Premium Experience',
        duration: '4 Days, 3 Nights',
        price: { min: 22000, max: 35000 },
        type: 'premium',
        inclusions: [
          '4* Business hotel',
          'All meals at renowned restaurants',
          'Private car with driver',
          'Bollywood studio tours',
          'Cultural experiences',
          'Professional city guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Colonial Mumbai',
            activities: ['Heritage building walks', 'Victoria Terminus tour', 'High Court visit', 'Colonial-era lunch']
          },
          {
            day: 2,
            title: 'Bollywood Glamour',
            activities: ['Film studio detailed tour', 'Celebrity spots visit', 'Dance workshop', 'Industry networking dinner']
          },
          {
            day: 3,
            title: 'Cultural Mumbai',
            activities: ['Art galleries', 'Theater districts', 'Cultural performances', 'Fine dining experiences']
          },
          {
            day: 4,
            title: 'Modern Mumbai',
            activities: ['Business district tour', 'Shopping malls', 'Rooftop dining', 'Airport transfer']
          }
        ],
        highlights: ['Bollywood studio access', 'Fine dining', 'Cultural shows', 'Business insights']
      },
      {
        id: 'mumbai-luxury',
        name: 'Mumbai Luxury Elite',
        duration: '5 Days, 4 Nights',
        price: { min: 55000, max: 85000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury hotel with sea views',
          'Michelin-star dining experiences',
          'Private yacht charters',
          'Celebrity meet opportunities',
          'Exclusive club access',
          'Personal concierge',
          'Helicopter city tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Mumbai Arrival',
            activities: ['Sea-facing luxury suite', 'Private yacht welcome cruise', 'Champagne dinner', 'City lights tour']
          },
          {
            day: 2,
            title: 'Bollywood VIP Experience',
            activities: ['Private film studio tours', 'Celebrity interactions', 'VIP movie screenings', 'Industry party access']
          },
          {
            day: 3,
            title: 'Heritage & High Society',
            activities: ['Private heritage tours', 'Exclusive club visits', 'High-end art galleries', 'Elite social events']
          },
          {
            day: 4,
            title: 'Luxury Lifestyle',
            activities: ['Private shopping experiences', 'Spa at luxury hotels', 'Rooftop fine dining', 'Exclusive nightlife']
          },
          {
            day: 5,
            title: 'Elite Farewell',
            activities: ['Final yacht experience', 'Luxury shopping', 'VIP airport transfer']
          }
        ],
        highlights: ['Luxury sea-facing hotels', 'Private yacht access', 'Celebrity interactions', 'Elite experiences']
      }
    ],
    specialExperiences: [
      'Bollywood studio behind-the-scenes tours',
      'Dabbawala lunch delivery system tours',
      'Street food crawls in local markets',
      'Local train rush hour experiences',
      'Heritage architecture walks',
      'Nightlife in trendy districts',
      'Art gallery and museum visits'
    ]
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    description: 'The City of Lakes featuring romantic palaces, serene lakes, stunning architecture, and regal charm in the heart of Rajasthan.',
    heroImage: 'https://images.unsplash.com/photo-1709338573277-c161cbf8702c?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'September to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Lake Palace',
        description: 'Floating marble palace on Lake Pichola',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'City Palace Complex',
        description: 'Magnificent palace complex with museums and courtyards',
        image: 'https://images.unsplash.com/photo-1709338573277-c161cbf8702c?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Jag Mandir',
        description: 'Island palace known as Garden of the Lake',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Saheliyon Ki Bari',
        description: 'Beautiful garden with fountains and marble pavilions',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Monsoon Palace',
        description: 'Hilltop palace offering panoramic city views',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Fateh Sagar Lake',
        description: 'Artificial lake with boat rides and sunset views',
        image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'udaipur-budget',
        name: 'Lake City Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 7000, max: 12000 },
        type: 'budget',
        inclusions: [
          '2*/3* Lake view hotel',
          'Daily breakfast',
          'Local transport',
          'Boat rides included',
          'Palace entry tickets'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Palace & Lakes',
            activities: ['City Palace exploration', 'Lake Pichola boat ride', 'Jag Mandir visit', 'Sunset viewing']
          },
          {
            day: 2,
            title: 'Gardens & Culture',
            activities: ['Saheliyon Ki Bari', 'Monsoon Palace trip', 'Local handicraft shopping', 'Cultural show']
          },
          {
            day: 3,
            title: 'Local Experiences',
            activities: ['Fateh Sagar Lake', 'Local market tours', 'Traditional lunch', 'Departure']
          }
        ],
        highlights: ['Lake boat rides', 'Palace visits', 'Cultural shows', 'Handicraft shopping']
      },
      {
        id: 'udaipur-premium',
        name: 'Royal Udaipur Premium',
        duration: '4 Days, 3 Nights',
        price: { min: 25000, max: 40000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals with Rajasthani cuisine',
          'Private car with driver',
          'Sunset boat dinners',
          'Cultural performances',
          'Cooking classes'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Heritage',
            activities: ['Heritage hotel check-in', 'Comprehensive palace tour', 'Private museum access', 'Welcome dinner with folk dance']
          },
          {
            day: 2,
            title: 'Lake Romance',
            activities: ['Sunrise boat ride', 'Jag Mandir royal lunch', 'Afternoon palace exploration', 'Sunset dinner cruise']
          },
          {
            day: 3,
            title: 'Art & Culture',
            activities: ['Traditional painting workshops', 'Miniature art classes', 'Local artisan visits', 'Cultural evening program']
          },
          {
            day: 4,
            title: 'Final Splendor',
            activities: ['Monsoon Palace photography', 'Last-minute palace visits', 'Royal shopping', 'Departure']
          }
        ],
        highlights: ['Heritage hotel stay', 'Sunset dinner cruises', 'Art workshops', 'Royal experiences']
      },
      {
        id: 'udaipur-luxury',
        name: 'Maharaja Udaipur Luxury',
        duration: '5 Days, 4 Nights',
        price: { min: 65000, max: 100000 },
        type: 'luxury',
        inclusions: [
          '5* Palace hotel or Lake Palace',
          'Gourmet dining experiences',
          'Private vintage car tours',
          'Royal spa treatments',
          'Exclusive palace access',
          'Personal butler service',
          'Private cultural performances'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Palace Welcome',
            activities: ['Palace hotel check-in', 'Royal welcome ceremony', 'Private palace chambers tour', 'Champagne dinner on lake']
          },
          {
            day: 2,
            title: 'Vintage Luxury',
            activities: ['Vintage car city tour', 'Exclusive palace photography', 'Private art collection viewing', 'Royal dining experience']
          },
          {
            day: 3,
            title: 'Cultural Royalty',
            activities: ['Private cultural performances', 'Master artisan workshops', 'Royal spa treatments', 'Exclusive shopping']
          },
          {
            day: 4,
            title: 'Lake Palace Experience',
            activities: ['Private yacht on Lake Pichola', 'Exclusive island dining', 'Luxury treatments', 'Royal photography session']
          },
          {
            day: 5,
            title: 'Grand Royal Farewell',
            activities: ['Final royal breakfast', 'Private palace access', 'Luxury shopping', 'Royal departure']
          }
        ],
        highlights: ['Palace hotel luxury', 'Vintage car tours', 'Private performances', 'Exclusive experiences']
      }
    ],
    specialExperiences: [
      'Sunset boat dinners on Lake Pichola',
      'Heritage palace hotel stays',
      'Traditional miniature painting classes',
      'Royal vintage car rides',
      'Private cultural performances',
      'Master craftsman workshops',
      'Rooftop dining with lake views'
    ]
  },
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    description: 'Former British summer capital featuring colonial architecture, toy train rides, mall road shopping, and panoramic Himalayan views.',
    heroImage: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'March to June, October to February',
    category: 'mountain',
    attractions: [
      {
        name: 'Mall Road',
        description: 'Famous shopping street with colonial architecture',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Kalka-Shimla Toy Train',
        description: 'UNESCO World Heritage narrow gauge railway',
        image: 'https://images.unsplash.com/photo-1651988670871-c1aa882727e5?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Jakhu Temple',
        description: 'Hilltop temple dedicated to Lord Hanuman',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Christ Church',
        description: 'Neo-Gothic church with beautiful stained glass windows',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Kufri',
        description: 'Hill station perfect for skiing and adventure sports',
        image: 'https://images.unsplash.com/photo-1677820915325-d8ce3184c2a4?w=600&h=400&fit=crop',
        category: 'adventure'
      },
      {
        name: 'The Ridge',
        description: 'Open space with panoramic mountain views',
        image: 'https://images.unsplash.com/photo-1599831413648-97eae03f743d?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'shimla-budget',
        name: 'Colonial Hills Budget',
        duration: '4 Days, 3 Nights',
        price: { min: 8000, max: 14000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Toy train journey',
          'Local sightseeing',
          'Mall Road exploration'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Toy Train Adventure',
            activities: ['Kalka-Shimla toy train journey', 'Hotel check-in', 'Mall Road exploration', 'The Ridge visit']
          },
          {
            day: 2,
            title: 'Shimla Heritage',
            activities: ['Christ Church visit', 'Viceregal Lodge tour', 'Jakhu Temple trek', 'Colonial architecture walk']
          },
          {
            day: 3,
            title: 'Kufri Excursion',
            activities: ['Day trip to Kufri', 'Adventure activities', 'Horse riding', 'Mountain views']
          },
          {
            day: 4,
            title: 'Departure',
            activities: ['Final mall road shopping', 'Local market visits', 'Return journey to Delhi']
          }
        ],
        highlights: ['Toy train journey', 'Colonial heritage', 'Mountain views', 'Local culture']
      },
      {
        id: 'shimla-premium',
        name: 'Shimla Premium Heritage',
        duration: '5 Days, 4 Nights',
        price: { min: 20000, max: 32000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals included',
          'Private car transfers',
          'Cultural experiences',
          'Adventure activities',
          'Professional guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Colonial Welcome',
            activities: ['Heritage hotel check-in', 'Colonial history tour', 'Evening cultural show', 'Traditional dinner']
          },
          {
            day: 2,
            title: 'Heritage Deep Dive',
            activities: ['Viceregal Lodge detailed tour', 'Colonial museum visits', 'Heritage walks', 'Photography sessions']
          },
          {
            day: 3,
            title: 'Adventure & Nature',
            activities: ['Kufri adventure sports', 'Mashobra nature walks', 'Apple orchard visits', 'Mountain photography']
          },
          {
            day: 4,
            title: 'Cultural Shimla',
            activities: ['Local village visits', 'Handicraft workshops', 'Traditional cooking class', 'Folk performances']
          },
          {
            day: 5,
            title: 'Farewell Hills',
            activities: ['Final mountain views', 'Souvenir shopping', 'Comfortable return journey']
          }
        ],
        highlights: ['Heritage hotel stay', 'Colonial history', 'Adventure sports', 'Cultural workshops']
      },
      {
        id: 'shimla-luxury',
        name: 'Imperial Shimla Luxury',
        duration: '6 Days, 5 Nights',
        price: { min: 45000, max: 70000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury mountain resort',
          'Fine dining experiences',
          'Private helicopter transfers',
          'Personal butler service',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Private guides'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Mountain Welcome',
            activities: ['Helicopter arrival', 'Luxury resort check-in', 'Welcome champagne', 'Private dinner with mountain views']
          },
          {
            day: 2,
            title: 'Colonial Luxury',
            activities: ['Private heritage tours', 'Exclusive access areas', 'Luxury toy train experience', 'Gourmet colonial dinner']
          },
          {
            day: 3,
            title: 'Adventure Luxury',
            activities: ['Private adventure activities', 'Luxury mountain lodge', 'Helicopter mountain tour', 'Star gazing dinner']
          },
          {
            day: 4,
            title: 'Wellness & Relaxation',
            activities: ['Luxury spa treatments', 'Mountain yoga sessions', 'Meditation in nature', 'Wellness dining']
          },
          {
            day: 5,
            title: 'Cultural Luxury',
            activities: ['Private cultural shows', 'Master craftsman visits', 'Exclusive shopping', 'Wine tasting']
          },
          {
            day: 6,
            title: 'Imperial Farewell',
            activities: ['Final mountain views', 'Luxury shopping', 'Helicopter departure']
          }
        ],
        highlights: ['Helicopter transfers', 'Luxury mountain resort', 'Private experiences', 'Colonial heritage']
      }
    ],
    specialExperiences: [
      'UNESCO toy train journey to Shimla',
      'Colonial heritage walking tours',
      'Apple orchard visits and tastings',
      'Adventure sports in Kufri',
      'Traditional Himachali cuisine',
      'Mountain photography expeditions',
      'Local handicraft workshops'
    ]
  },
  {
    id: 'ooty',
    name: 'Ooty',
    state: 'Tamil Nadu',
    description: 'Queen of Hill Stations with rolling tea gardens, colonial charm, toy train rides, and pleasant weather in the Nilgiri Hills.',
    heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'April to June, September to November',
    category: 'mountain',
    attractions: [
      {
        name: 'Nilgiri Mountain Railway',
        description: 'UNESCO World Heritage toy train through scenic hills',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Ooty Lake',
        description: 'Artificial lake perfect for boating and picnics',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Botanical Gardens',
        description: 'Sprawling gardens with rare plants and flower shows',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Doddabetta Peak',
        description: 'Highest peak in Nilgiris with panoramic views',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Tea Gardens',
        description: 'Rolling hills covered with lush tea plantations',
        image: 'https://images.unsplash.com/photo-1542843137-8791a6904d14?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Rose Garden',
        description: 'Beautiful garden with thousands of rose varieties',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'ooty-budget',
        name: 'Hill Station Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 6000, max: 10000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Toy train journey',
          'Local sightseeing',
          'Garden entries'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Toy Train & Lake',
            activities: ['Arrival via toy train', 'Hotel check-in', 'Ooty Lake boating', 'Botanical Gardens visit']
          },
          {
            day: 2,
            title: 'Peaks & Plantations',
            activities: ['Doddabetta Peak visit', 'Tea garden tours', 'Tea factory visit', 'Local market shopping']
          },
          {
            day: 3,
            title: 'Gardens & Departure',
            activities: ['Rose Garden visit', 'Final shopping', 'Return journey preparation']
          }
        ],
        highlights: ['Toy train experience', 'Tea garden tours', 'Hill station charm', 'Colonial architecture']
      },
      {
        id: 'ooty-premium',
        name: 'Nilgiri Premium Experience',
        duration: '4 Days, 3 Nights',
        price: { min: 18000, max: 28000 },
        type: 'premium',
        inclusions: [
          '4* Hill resort accommodation',
          'All meals included',
          'Private car transfers',
          'Tea plantation tours',
          'Adventure activities',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Colonial Heritage',
            activities: ['Luxury toy train journey', 'Heritage resort check-in', 'Colonial architecture tour', 'Welcome dinner']
          },
          {
            day: 2,
            title: 'Tea Country',
            activities: ['Comprehensive tea plantation tour', 'Tea tasting sessions', 'Processing factory visits', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Nature & Adventure',
            activities: ['Doddabetta sunrise', 'Trekking activities', 'Botanical garden exploration', 'Cultural evening']
          },
          {
            day: 4,
            title: 'Relaxation & Departure',
            activities: ['Final hill views', 'Shopping for tea and spices', 'Comfortable return journey']
          }
        ],
        highlights: ['Hill resort stay', 'Tea plantation immersion', 'Colonial heritage', 'Adventure activities']
      },
      {
        id: 'ooty-luxury',
        name: 'Queen of Hills Luxury',
        duration: '5 Days, 4 Nights',
        price: { min: 40000, max: 65000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury hill resort',
          'Gourmet dining experiences',
          'Private helicopter tours',
          'Personal guide service',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Butler service'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Hill Welcome',
            activities: ['Helicopter arrival', 'Luxury resort check-in', 'Private colonial tour', 'Fine dining with hill views']
          },
          {
            day: 2,
            title: 'Aerial Tea Country',
            activities: ['Helicopter tea plantation tour', 'Private tea tasting', 'Exclusive factory access', 'Gourmet plantation lunch']
          },
          {
            day: 3,
            title: 'Adventure Luxury',
            activities: ['Private trekking with guide', 'Luxury picnics', 'Photography workshops', 'Spa treatments']
          },
          {
            day: 4,
            title: 'Cultural Immersion',
            activities: ['Private cultural performances', 'Master tea maker sessions', 'Exclusive shopping', 'Wine pairing dinner']
          },
          {
            day: 5,
            title: 'Luxury Farewell',
            activities: ['Final spa session', 'Helicopter departure', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter transfers', 'Luxury hill resort', 'Private tea experiences', 'Exclusive access']
      }
    ],
    specialExperiences: [
      'UNESCO toy train journey',
      'Tea plantation visits and tastings',
      'Colonial architecture heritage walks',
      'Horseback riding in hills',
      'Adventure sports in Kufri nearby',
      'Photography expeditions',
      'Traditional South Indian cuisine'
    ]
  },
  {
    id: 'mysore',
    name: 'Mysore',
    state: 'Karnataka',
    description: 'Cultural capital of Karnataka featuring magnificent palaces, silk weaving, incense production, and classical arts traditions.',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'heritage',
    attractions: [
      {
        name: 'Mysore Palace',
        description: 'Opulent Indo-Saracenic palace with grand illumination',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Chamundi Hills',
        description: 'Sacred hill with Chamundeshwari Temple and city views',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Brindavan Gardens',
        description: 'Musical fountain garden with terraced landscapes',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'St. Philomena\'s Church',
        description: 'Neo-Gothic church with impressive twin spires',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Mysore Zoo',
        description: 'One of India\'s oldest and well-maintained zoos',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Devaraja Market',
        description: 'Colorful traditional market with spices and flowers',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'cultural'
      }
    ],
    packages: [
      {
        id: 'mysore-budget',
        name: 'Cultural Mysore Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 5000, max: 8000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Local transport',
          'Palace entry tickets',
          'Cultural tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Palace & Heritage',
            activities: ['Mysore Palace tour', 'Palace illumination viewing', 'Chamundi Hills visit', 'Local dinner']
          },
          {
            day: 2,
            title: 'Culture & Gardens',
            activities: ['Brindavan Gardens', 'Musical fountain show', 'Silk weaving factory', 'Incense making tour']
          },
          {
            day: 3,
            title: 'Local Experiences',
            activities: ['Devaraja Market exploration', 'Zoo visit', 'Final shopping', 'Departure']
          }
        ],
        highlights: ['Palace illumination', 'Cultural workshops', 'Traditional crafts', 'Local markets']
      },
      {
        id: 'mysore-premium',
        name: 'Royal Mysore Premium',
        duration: '4 Days, 3 Nights',
        price: { min: 16000, max: 25000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals with Karnataka cuisine',
          'Private car with driver',
          'Cultural performances',
          'Craft workshops',
          'Professional guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Heritage',
            activities: ['Heritage hotel check-in', 'Detailed palace tour', 'Royal history sessions', 'Classical music evening']
          },
          {
            day: 2,
            title: 'Arts & Crafts',
            activities: ['Silk weaving workshops', 'Mysore painting classes', 'Incense making experience', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Spiritual & Natural',
            activities: ['Chamundi Temple rituals', 'Brindavan Gardens', 'Yoga sessions', 'Ayurvedic treatments']
          },
          {
            day: 4,
            title: 'Cultural Farewell',
            activities: ['Final craft shopping', 'Cultural performance', 'Traditional send-off']
          }
        ],
        highlights: ['Heritage hotel stay', 'Craft workshops', 'Cultural performances', 'Karnataka cuisine']
      },
      {
        id: 'mysore-luxury',
        name: 'Maharaja Mysore Luxury',
        duration: '5 Days, 4 Nights',
        price: { min: 35000, max: 55000 },
        type: 'luxury',
        inclusions: [
          '5* Palace hotel',
          'Royal dining experiences',
          'Private palace access',
          'Personal butler service',
          'Luxury spa treatments',
          'Exclusive cultural shows',
          'Master craft sessions'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Palace Royalty',
            activities: ['Palace hotel check-in', 'Royal welcome ceremony', 'Private palace tours', 'Imperial dining']
          },
          {
            day: 2,
            title: 'Cultural Mastery',
            activities: ['Master craftsman sessions', 'Private art collections', 'Exclusive workshops', 'Royal entertainment']
          },
          {
            day: 3,
            title: 'Spiritual Luxury',
            activities: ['Private temple ceremonies', 'Royal spa treatments', 'Meditation sessions', 'Sacred experiences']
          },
          {
            day: 4,
            title: 'Heritage Luxury',
            activities: ['Exclusive palace areas', 'Private cultural shows', 'Master chef experiences', 'Wine tastings']
          },
          {
            day: 5,
            title: 'Royal Farewell',
            activities: ['Final royal treatments', 'Exclusive shopping', 'Royal departure ceremony']
          }
        ],
        highlights: ['Palace hotel luxury', 'Private cultural access', 'Master craft sessions', 'Royal treatments']
      }
    ],
    specialExperiences: [
      'Mysore Palace illumination viewing',
      'Traditional silk weaving workshops',
      'Mysore painting art classes',
      'Incense and sandalwood factory tours',
      'Classical dance and music performances',
      'Yoga and meditation sessions',
      'Traditional Karnataka cuisine cooking'
    ]
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Queen of the Hills famous for tea gardens, Himalayan views, toy train, and colonial charm in the Eastern Himalayas.',
    heroImage: 'https://images.unsplash.com/photo-1542843137-8791a6904d14?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'March to May, October to December',
    category: 'mountain',
    attractions: [
      {
        name: 'Tiger Hill',
        description: 'Sunrise viewpoint with stunning Kanchenjunga views',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Darjeeling Himalayan Railway',
        description: 'UNESCO World Heritage toy train through mountains',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Tea Gardens',
        description: 'World-famous tea estates with guided tours',
        image: 'https://images.unsplash.com/photo-1542843137-8791a6904d14?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Padmaja Naidu Himalayan Zoological Park',
        description: 'High-altitude zoo with snow leopards and red pandas',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Peace Pagoda',
        description: 'Japanese Buddhist temple with panoramic views',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Mall Road',
        description: 'Historic shopping street with colonial buildings',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'cultural'
      }
    ],
    packages: [
      {
        id: 'darjeeling-budget',
        name: 'Hill Station Budget',
        duration: '4 Days, 3 Nights',
        price: { min: 8000, max: 13000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Toy train journey',
          'Tea garden tours',
          'Local sightseeing'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Arrival & Heritage',
            activities: ['Arrival from Bagdogra/NJP', 'Hotel check-in', 'Mall Road exploration', 'Evening cultural show']
          },
          {
            day: 2,
            title: 'Sunrise & Tea',
            activities: ['Early Tiger Hill sunrise', 'Ghoom Monastery visit', 'Tea garden tour', 'Tea tasting session']
          },
          {
            day: 3,
            title: 'Toy Train & Culture',
            activities: ['Darjeeling toy train ride', 'Himalayan Mountaineering Institute', 'Zoo visit', 'Local market shopping']
          },
          {
            day: 4,
            title: 'Final Views & Departure',
            activities: ['Peace Pagoda visit', 'Final mountain views', 'Shopping for tea', 'Departure transfer']
          }
        ],
        highlights: ['Tiger Hill sunrise', 'Toy train journey', 'Tea garden tours', 'Mountain views']
      },
      {
        id: 'darjeeling-premium',
        name: 'Himalayan Premium Experience',
        duration: '5 Days, 4 Nights',
        price: { min: 22000, max: 35000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel with mountain views',
          'All meals included',
          'Private car transfers',
          'Tea plantation experiences',
          'Cultural programs',
          'Adventure activities'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Heritage Welcome',
            activities: ['Scenic drive arrival', 'Heritage hotel check-in', 'Colonial architecture tour', 'Welcome dinner with local cuisine']
          },
          {
            day: 2,
            title: 'Sunrise & Culture',
            activities: ['Tiger Hill sunrise expedition', 'Ghoom monastery meditation', 'Traditional breakfast', 'Darjeeling town walking tour']
          },
          {
            day: 3,
            title: 'Tea Immersion',
            activities: ['Premium tea estate tour', 'Tea processing workshops', 'Tea master sessions', 'Evening cultural performance']
          },
          {
            day: 4,
            title: 'Adventure & Wellness',
            activities: ['Trekking in nearby hills', 'Rock Garden visit', 'Spa treatments', 'Photography sessions']
          },
          {
            day: 5,
            title: 'Farewell Mountains',
            activities: ['Final mountain photography', 'Tea shopping', 'Comfortable departure']
          }
        ],
        highlights: ['Heritage hotel stay', 'Tea master sessions', 'Cultural programs', 'Mountain adventures']
      },
      {
        id: 'darjeeling-luxury',
        name: 'Royal Darjeeling Luxury',
        duration: '6 Days, 5 Nights',
        price: { min: 50000, max: 80000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury heritage resort',
          'Gourmet dining experiences',
          'Private helicopter tours',
          'Personal butler service',
          'Exclusive tea experiences',
          'Luxury spa treatments',
          'Private cultural shows'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Mountain Welcome',
            activities: ['Helicopter arrival', 'Luxury heritage resort check-in', 'Private mountain orientation', 'Champagne dinner']
          },
          {
            day: 2,
            title: 'Aerial Himalayan Tour',
            activities: ['Helicopter mountain tour', 'Exclusive sunrise viewing', 'Private monastery access', 'Gourmet breakfast']
          },
          {
            day: 3,
            title: 'Tea Royalty',
            activities: ['Private tea estate ownership experience', 'Master tea blending', 'Exclusive tastings', 'Royal dining']
          },
          {
            day: 4,
            title: 'Cultural Luxury',
            activities: ['Private cultural performances', 'Master artisan visits', 'Exclusive shopping', 'Luxury spa treatments']
          },
          {
            day: 5,
            title: 'Adventure Luxury',
            activities: ['Private trekking expeditions', 'Luxury camping', 'Star gazing', 'Wilderness dining']
          },
          {
            day: 6,
            title: 'Grand Farewell',
            activities: ['Final luxury treatments', 'Helicopter departure', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter tours', 'Luxury heritage resort', 'Private tea experiences', 'Exclusive access']
      }
    ],
    specialExperiences: [
      'Tiger Hill sunrise with Kanchenjunga views',
      'UNESCO toy train journey',
      'Tea garden walks and tastings',
      'Monastery meditation sessions',
      'Traditional Tibetan cuisine',
      'Mountain photography expeditions',
      'Local handicraft workshops'
    ]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    state: 'Uttarakhand',
    description: 'Yoga Capital of the World featuring spiritual ashrams, adventure sports, Ganges river, and serene Himalayan foothills.',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'February to May, September to November',
    category: 'spiritual',
    attractions: [
      {
        name: 'Laxman Jhula',
        description: 'Iconic suspension bridge over the Ganges',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Parmarth Niketan',
        description: 'Largest ashram with evening Ganga aarti ceremonies',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Rajaji National Park',
        description: 'Wildlife sanctuary with elephants and diverse fauna',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Ram Jhula',
        description: 'Sacred bridge connecting temples and ashrams',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Beatles Ashram',
        description: 'Abandoned ashram where Beatles composed music',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Neelkanth Mahadev Temple',
        description: 'Sacred Shiva temple amidst dense forests',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      }
    ],
    packages: [
      {
        id: 'rishikesh-budget',
        name: 'Spiritual & Adventure Budget',
        duration: '4 Days, 3 Nights',
        price: { min: 7000, max: 12000 },
        type: 'budget',
        inclusions: [
          'Ashram/budget hotel stay',
          'Vegetarian meals',
          'Yoga classes',
          'River rafting',
          'Local transport'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Spiritual Introduction',
            activities: ['Arrival and ashram check-in', 'Laxman Jhula exploration', 'Evening Ganga aarti', 'Yoga session']
          },
          {
            day: 2,
            title: 'Adventure Day',
            activities: ['White water rafting', 'Cliff jumping (optional)', 'Beach camping', 'Bonfire night']
          },
          {
            day: 3,
            title: 'Culture & Nature',
            activities: ['Beatles Ashram visit', 'Neelkanth Temple trek', 'Meditation sessions', 'Local market exploration']
          },
          {
            day: 4,
            title: 'Final Blessings',
            activities: ['Morning yoga', 'Final Ganga aarti', 'Shopping for spiritual items', 'Departure']
          }
        ],
        highlights: ['Ashram stays', 'River rafting', 'Yoga sessions', 'Ganga aarti ceremonies']
      },
      {
        id: 'rishikesh-premium',
        name: 'Wellness & Adventure Premium',
        duration: '6 Days, 5 Nights',
        price: { min: 25000, max: 40000 },
        type: 'premium',
        inclusions: [
          '4* Resort with Ganges views',
          'All vegetarian meals',
          'Professional yoga instructor',
          'Spa treatments',
          'Adventure activities',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Wellness Welcome',
            activities: ['Resort check-in with Ganges views', 'Orientation yoga session', 'Spiritual site visits', 'Welcome dinner']
          },
          {
            day: 2,
            title: 'Adventure Thrills',
            activities: ['Professional rafting expedition', 'Rock climbing sessions', 'Jungle safari', 'Adventure dinner']
          },
          {
            day: 3,
            title: 'Spiritual Deepening',
            activities: ['Intensive yoga workshops', 'Meditation retreats', 'Temple visits with guide', 'Spiritual counseling']
          },
          {
            day: 4,
            title: 'Nature & Wellness',
            activities: ['Nature treks', 'Ayurvedic spa treatments', 'Herbal garden tours', 'Wellness cuisine']
          },
          {
            day: 5,
            title: 'Cultural Immersion',
            activities: ['Local village visits', 'Traditional craft workshops', 'Cultural performances', 'Farewell ceremony']
          },
          {
            day: 6,
            title: 'Peaceful Departure',
            activities: ['Final yoga session', 'Spiritual shopping', 'Blessing ceremonies', 'Departure']
          }
        ],
        highlights: ['Ganges view resort', 'Professional yoga training', 'Adventure sports', 'Spa wellness']
      },
      {
        id: 'rishikesh-luxury',
        name: 'Himalayan Luxury Retreat',
        duration: '7 Days, 6 Nights',
        price: { min: 55000, max: 85000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury wellness resort',
          'Gourmet vegetarian cuisine',
          'Personal yoga guru',
          'Private helicopter access',
          'Luxury spa treatments',
          'Exclusive spiritual experiences',
          'Butler service'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Spiritual Welcome',
            activities: ['Helicopter arrival', 'Luxury resort check-in', 'Private spiritual orientation', 'Gourmet welcome feast']
          },
          {
            day: 2,
            title: 'Personal Wellness',
            activities: ['Personal yoga guru sessions', 'Customized meditation', 'Luxury spa treatments', 'Organic dining']
          },
          {
            day: 3,
            title: 'Adventure Luxury',
            activities: ['Private rafting with luxury setup', 'Helicopter mountain tours', 'Luxury camping', 'Gourmet outdoor dining']
          },
          {
            day: 4,
            title: 'Spiritual Mastery',
            activities: ['Advanced yoga practices', 'Private spiritual sessions', 'Exclusive temple access', 'Master teacher meetings']
          },
          {
            day: 5,
            title: 'Cultural Luxury',
            activities: ['Private cultural performances', 'Master artisan visits', 'Exclusive shopping', 'Wine and dine (vegetarian)']
          },
          {
            day: 6,
            title: 'Nature Luxury',
            activities: ['Private nature expeditions', 'Luxury wilderness lodge', 'Star gazing', 'Spiritual dining under stars']
          },
          {
            day: 7,
            title: 'Enlightened Farewell',
            activities: ['Final guru session', 'Blessing ceremonies', 'Helicopter departure']
          }
        ],
        highlights: ['Helicopter access', 'Personal yoga guru', 'Luxury wellness resort', 'Exclusive spiritual experiences']
      }
    ],
    specialExperiences: [
      'Ganga aarti at Triveni Ghat',
      'White water rafting on Ganges',
      'Yoga teacher training courses',
      'Meditation retreats in ashrams',
      'Bungee jumping and adventure sports',
      'Ayurvedic massage and treatments',
      'Beatles Ashram exploration'
    ]
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    state: 'Punjab',
    description: 'Holy city of Sikhs featuring the Golden Temple, rich culture, delicious cuisine, and significant historical landmarks.',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'October to March',
    category: 'spiritual',
    attractions: [
      {
        name: 'Golden Temple',
        description: 'Holiest Sikh shrine with stunning gold-plated architecture',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Jallianwala Bagh',
        description: 'Memorial of tragic massacre during British rule',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Wagah Border',
        description: 'India-Pakistan border with ceremonial flag lowering',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Partition Museum',
        description: 'Museum documenting India\'s partition history',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Akal Takht',
        description: 'Highest seat of Sikh religious authority',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Hall Bazaar',
        description: 'Traditional market famous for Punjabi goods',
        image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=600&h=400&fit=crop',
        category: 'cultural'
      }
    ],
    packages: [
      {
        id: 'amritsar-budget',
        name: 'Golden Temple Budget',
        duration: '2 Days, 1 Night',
        price: { min: 3000, max: 5000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Local transport',
          'Temple visits',
          'Wagah Border trip'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Golden Temple Experience',
            activities: ['Golden Temple darshan', 'Langar (free meal) experience', 'Jallianwala Bagh visit', 'Local market exploration']
          },
          {
            day: 2,
            title: 'Border & Culture',
            activities: ['Wagah Border ceremony', 'Partition Museum', 'Hall Bazaar shopping', 'Traditional Punjabi lunch', 'Departure']
          }
        ],
        highlights: ['Golden Temple darshan', 'Langar experience', 'Wagah Border ceremony', 'Punjabi culture']
      },
      {
        id: 'amritsar-premium',
        name: 'Sikh Heritage Premium',
        duration: '3 Days, 2 Nights',
        price: { min: 12000, max: 20000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals with Punjabi cuisine',
          'Private guide',
          'Cultural experiences',
          'Historical tours',
          'Shopping tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Sacred Golden Temple',
            activities: ['Detailed Golden Temple tour', 'Guru-ka-Langar experience', 'Religious significance learning', 'Evening prayers']
          },
          {
            day: 2,
            title: 'History & Culture',
            activities: ['Comprehensive historical tour', 'Partition Museum detailed visit', 'Wagah Border with VIP seating', 'Cultural dinner']
          },
          {
            day: 3,
            title: 'Local Immersion',
            activities: ['Traditional Punjabi village visit', 'Cooking class experience', 'Handicraft shopping', 'Departure']
          }
        ],
        highlights: ['Heritage hotel stay', 'Sikh culture immersion', 'Historical insights', 'Punjabi cuisine']
      },
      {
        id: 'amritsar-luxury',
        name: 'Royal Punjab Luxury',
        duration: '4 Days, 3 Nights',
        price: { min: 30000, max: 50000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury heritage hotel',
          'Gourmet Punjabi cuisine',
          'Private spiritual guide',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Personal concierge',
          'VIP temple access'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Spiritual Welcome',
            activities: ['Luxury hotel check-in', 'VIP Golden Temple access', 'Private spiritual sessions', 'Royal dinner']
          },
          {
            day: 2,
            title: 'Heritage Luxury',
            activities: ['Private historical tours', 'Exclusive museum access', 'VIP Wagah Border experience', 'Cultural entertainment']
          },
          {
            day: 3,
            title: 'Cultural Immersion',
            activities: ['Private village experiences', 'Master chef cooking class', 'Luxury spa treatments', 'Elite shopping']
          },
          {
            day: 4,
            title: 'Royal Farewell',
            activities: ['Final temple blessings', 'Luxury shopping experience', 'Royal departure']
          }
        ],
        highlights: ['Luxury heritage hotel', 'VIP temple access', 'Private experiences', 'Cultural immersion']
      }
    ],
    specialExperiences: [
      'Golden Temple early morning prayers',
      'Langar (community kitchen) service',
      'Wagah Border flag ceremony',
      'Punjabi folk dance and music',
      'Traditional Punjabi cooking classes',
      'Sikh history and culture tours',
      'River Ganges spiritual ceremonies'
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'One of the world\'s oldest cities and spiritual capital of India, featuring ancient ghats, temples, and profound spiritual experiences.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'November to March',
    category: 'spiritual',
    attractions: [
      {
        name: 'Dashashwamedh Ghat',
        description: 'Main ghat famous for evening Ganga aarti ceremonies',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Kashi Vishwanath Temple',
        description: 'One of the most sacred Shiva temples in India',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Sarnath',
        description: 'Buddhist pilgrimage site where Buddha gave first sermon',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Assi Ghat',
        description: 'Popular ghat for sunrise viewing and yoga sessions',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Banaras Hindu University',
        description: 'Prestigious university with beautiful campus and museums',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'cultural'
      },
      {
        name: 'Manikarnika Ghat',
        description: 'Sacred cremation ghat central to Hindu beliefs',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=400&fit=crop',
        category: 'spiritual'
      }
    ],
    packages: [
      {
        id: 'varanasi-budget',
        name: 'Spiritual Varanasi Budget',
        duration: '3 Days, 2 Nights',
        price: { min: 5000, max: 8000 },
        type: 'budget',
        inclusions: [
          'Simple guesthouse stay',
          'Daily breakfast',
          'Ghat boat rides',
          'Temple visits',
          'Local guide'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Ganga & Ghats',
            activities: ['Arrival and check-in', 'Evening Ganga aarti at Dashashwamedh', 'Ghat walking tour', 'Local dinner']
          },
          {
            day: 2,
            title: 'Sunrise & Temples',
            activities: ['Sunrise boat ride', 'Kashi Vishwanath Temple', 'Sarnath Buddhist sites', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Culture & Departure',
            activities: ['BHU campus visit', 'Local market shopping', 'Final temple visits', 'Departure']
          }
        ],
        highlights: ['Ganga aarti ceremony', 'Sunrise boat rides', 'Ancient temples', 'Spiritual atmosphere']
      },
      {
        id: 'varanasi-premium',
        name: 'Sacred Varanasi Premium',
        duration: '4 Days, 3 Nights',
        price: { min: 18000, max: 30000 },
        type: 'premium',
        inclusions: [
          '4* Heritage hotel',
          'All meals included',
          'Private spiritual guide',
          'Cultural experiences',
          'Classical music shows',
          'Photography tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Spiritual Immersion',
            activities: ['Heritage hotel check-in', 'Private ghat tour', 'Evening aarti ceremony', 'Classical music dinner']
          },
          {
            day: 2,
            title: 'Sacred Sunrise',
            activities: ['Private sunrise boat ride', 'Temple complex tours', 'Spiritual discourse sessions', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Buddhist Heritage',
            activities: ['Sarnath comprehensive tour', 'Buddhist meditation', 'Museum visits', 'Cultural performances']
          },
          {
            day: 4,
            title: 'Cultural Farewell',
            activities: ['Silk weaving workshops', 'Traditional music learning', 'Final blessings', 'Departure']
          }
        ],
        highlights: ['Heritage hotel stay', 'Private spiritual guidance', 'Cultural shows', 'Photography tours']
      },
      {
        id: 'varanasi-luxury',
        name: 'Eternal Varanasi Luxury',
        duration: '5 Days, 4 Nights',
        price: { min: 45000, max: 75000 },
        type: 'luxury',
        inclusions: [
          '5* Palace hotel on Ganges',
          'Gourmet dining experiences',
          'Private boat with luxury setup',
          'Personal spiritual mentor',
          'Luxury spa treatments',
          'Exclusive temple access',
          'Classical music masters'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Royal Spiritual Welcome',
            activities: ['Palace hotel check-in on Ganges', 'Private VIP temple access', 'Royal aarti viewing', 'Luxury dinner']
          },
          {
            day: 2,
            title: 'Sacred Luxury',
            activities: ['Private luxury boat tours', 'Exclusive spiritual sessions', 'Master musician concerts', 'Gourmet experiences']
          },
          {
            day: 3,
            title: 'Cultural Mastery',
            activities: ['Private master classes', 'Exclusive cultural access', 'Luxury spa sessions', 'Royal entertainment']
          },
          {
            day: 4,
            title: 'Spiritual Enlightenment',
            activities: ['Advanced spiritual practices', 'Private meditation sessions', 'Exclusive shopping', 'Master chef experiences']
          },
          {
            day: 5,
            title: 'Eternal Farewell',
            activities: ['Final spiritual blessings', 'Luxury shopping', 'Royal departure ceremony']
          }
        ],
        highlights: ['Palace hotel on Ganges', 'Private spiritual mentoring', 'Luxury boat experiences', 'Cultural masters access']
      }
    ],
    specialExperiences: [
      'Early morning Ganga aarti ceremonies',
      'Traditional classical music concerts',
      'Silk weaving workshop visits',
      'Spiritual discourse with learned gurus',
      'Photography of ancient ghats',
      'Traditional Banarasi cuisine tasting',
      'Buddhist meditation at Sarnath'
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    state: 'Ladakh',
    description: 'Land of High Passes featuring stark landscapes, Buddhist monasteries, high-altitude lakes, and unique Tibetan culture.',
    heroImage: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'May to September',
    category: 'adventure',
    attractions: [
      {
        name: 'Pangong Tso Lake',
        description: 'Spectacular high-altitude lake changing colors throughout day',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Hemis Monastery',
        description: 'Largest and wealthiest monastery in Ladakh',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Leh Palace',
        description: 'Former royal palace with panoramic Leh views',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Nubra Valley',
        description: 'High-altitude cold desert with sand dunes and camels',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Thiksey Monastery',
        description: 'Impressive monastery resembling Potala Palace',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Magnetic Hill',
        description: 'Gravity-defying hill with optical illusion effects',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'ladakh-budget',
        name: 'Ladakh Adventure Budget',
        duration: '6 Days, 5 Nights',
        price: { min: 25000, max: 35000 },
        type: 'budget',
        inclusions: [
          'Simple guesthouse stays',
          'Basic meals included',
          'Shared transport',
          'Inner line permits',
          'Monastery visits'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Leh Acclimatization',
            activities: ['Arrival in Leh', 'Rest for altitude acclimatization', 'Light local sightseeing', 'Simple dinner']
          },
          {
            day: 2,
            title: 'Leh Monasteries',
            activities: ['Hemis Monastery', 'Thiksey Monastery', 'Shey Palace', 'Leh market exploration']
          },
          {
            day: 3,
            title: 'Pangong Lake Journey',
            activities: ['Drive to Pangong Tso', 'Lake photography', 'Overnight camping', 'Star gazing']
          },
          {
            day: 4,
            title: 'Return & Nubra Prep',
            activities: ['Return from Pangong', 'Rest in Leh', 'Preparation for Nubra', 'Local culture evening']
          },
          {
            day: 5,
            title: 'Nubra Valley Desert',
            activities: ['Drive to Nubra via Khardung La', 'Camel safari in sand dunes', 'Desert camping', 'Traditional dinner']
          },
          {
            day: 6,
            title: 'Departure',
            activities: ['Return to Leh', 'Final shopping', 'Airport departure']
          }
        ],
        highlights: ['High-altitude lakes', 'Monastery visits', 'Desert camel safari', 'Mountain passes']
      },
      {
        id: 'ladakh-premium',
        name: 'Himalayan Premium Adventure',
        duration: '8 Days, 7 Nights',
        price: { min: 50000, max: 75000 },
        type: 'premium',
        inclusions: [
          '4* Hotels and luxury camps',
          'All meals included',
          'Private vehicle',
          'Professional guide',
          'Adventure activities',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Premium Leh Welcome',
            activities: ['Hotel check-in with mountain views', 'Acclimatization with comfort', 'Welcome dinner', 'Cultural orientation']
          },
          {
            day: 2,
            title: 'Spiritual Circuit',
            activities: ['Comprehensive monastery tour', 'Meditation sessions', 'Buddhist philosophy learning', 'Traditional lunch']
          },
          {
            day: 3,
            title: 'Pangong Expedition',
            activities: ['Scenic drive to Pangong', 'Luxury camping setup', 'Photography workshops', 'Star gazing with equipment']
          },
          {
            day: 4,
            title: 'Lake Immersion',
            activities: ['Sunrise at Pangong', 'Extended lake exploration', 'Return journey', 'Cultural evening in Leh']
          },
          {
            day: 5,
            title: 'Nubra Adventure',
            activities: ['Khardung La pass crossing', 'Nubra Valley exploration', 'Double-humped camel safari', 'Luxury desert camp']
          },
          {
            day: 6,
            title: 'Desert & Culture',
            activities: ['Sand dunes exploration', 'Local village visits', 'Cultural interactions', 'Traditional performances']
          },
          {
            day: 7,
            title: 'Final Explorations',
            activities: ['Return to Leh', 'Shanti Stupa visit', 'Local market tours', 'Farewell dinner']
          },
          {
            day: 8,
            title: 'Mountain Farewell',
            activities: ['Final mountain views', 'Shopping for souvenirs', 'Airport departure']
          }
        ],
        highlights: ['Luxury camping', 'Monastery immersion', 'High-altitude adventure', 'Cultural experiences']
      },
      {
        id: 'ladakh-luxury',
        name: 'Royal Ladakh Luxury',
        duration: '10 Days, 9 Nights',
        price: { min: 85000, max: 130000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury hotels and glamping',
          'Gourmet dining experiences',
          'Private helicopter access',
          'Personal guide and butler',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Photography equipment'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Mountain Welcome',
            activities: ['Helicopter arrival in Leh', 'Luxury hotel check-in', 'Acclimatization with comfort', 'Welcome feast']
          },
          {
            day: 2,
            title: 'Spiritual Luxury',
            activities: ['Private monastery access', 'Personal meditation guide', 'Luxury spa acclimatization', 'Cultural dinner']
          },
          {
            day: 3,
            title: 'Aerial Ladakh',
            activities: ['Helicopter tour of valleys', 'Exclusive landing sites', 'Luxury picnic lunch', 'Photography with pro equipment']
          },
          {
            day: 4,
            title: 'Pangong Luxury',
            activities: ['Helicopter to Pangong Lake', 'Luxury lakeside camp', 'Private lake access', 'Gourmet camping dinner']
          },
          {
            day: 5,
            title: 'Lake Immersion',
            activities: ['Sunrise lake photography', 'Exclusive lake activities', 'Luxury camping', 'Star gazing with telescope']
          },
          {
            day: 6,
            title: 'Nubra Luxury',
            activities: ['Helicopter to Nubra Valley', 'Luxury desert camp', 'Private camel experiences', 'Desert spa treatments']
          },
          {
            day: 7,
            title: 'Desert Royalty',
            activities: ['Exclusive desert access', 'Private cultural shows', 'Luxury desert dining', 'Starlight entertainment']
          },
          {
            day: 8,
            title: 'Cultural Mastery',
            activities: ['Master craftsman visits', 'Private workshops', 'Exclusive shopping', 'Cultural performances']
          },
          {
            day: 9,
            title: 'Final Luxury',
            activities: ['Final helicopter tours', 'Luxury spa day', 'Gourmet experiences', 'Farewell celebration']
          },
          {
            day: 10,
            title: 'Royal Departure',
            activities: ['Final mountain blessings', 'Helicopter departure', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter access throughout', 'Luxury camping', 'Private experiences', 'Exclusive mountain access']
      }
    ],
    specialExperiences: [
      'High-altitude lake camping at Pangong Tso',
      'Buddhist monastery meditation retreats',
      'Camel safari in Nubra Valley sand dunes',
      'Mountain biking on challenging terrains',
      'Traditional Ladakhi cuisine experiences',
      'Star gazing in clear mountain skies',
      'Photography expeditions in unique landscapes'
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    state: 'Andaman and Nicobar Islands',
    description: 'Tropical paradise with pristine beaches, coral reefs, water sports, and rich marine biodiversity in the Bay of Bengal.',
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'November to April',
    category: 'beach',
    attractions: [
      {
        name: 'Radhanagar Beach',
        description: 'Asia\'s best beach with pristine white sand and turquoise waters',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Cellular Jail',
        description: 'Historical prison museum showcasing freedom struggle',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Neil Island',
        description: 'Coral island with natural rock formations and beaches',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Elephant Beach',
        description: 'Popular snorkeling destination with vibrant coral reefs',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
        category: 'beach'
      },
      {
        name: 'Ross Island',
        description: 'Ruins of British administrative headquarters',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
        category: 'heritage'
      },
      {
        name: 'Baratang Island',
        description: 'Limestone caves and mangrove creeks adventure',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'andaman-budget',
        name: 'Tropical Islands Budget',
        duration: '5 Days, 4 Nights',
        price: { min: 18000, max: 28000 },
        type: 'budget',
        inclusions: [
          '3* Beach hotel',
          'Daily breakfast',
          'Ferry transfers',
          'Snorkeling equipment',
          'Island hopping tours'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Port Blair Arrival',
            activities: ['Airport pickup', 'Hotel check-in', 'Cellular Jail visit', 'Light and sound show']
          },
          {
            day: 2,
            title: 'Havelock Island',
            activities: ['Ferry to Havelock', 'Radhanagar Beach', 'Beach activities', 'Sunset viewing']
          },
          {
            day: 3,
            title: 'Water Sports',
            activities: ['Elephant Beach snorkeling', 'Water sports activities', 'Beach relaxation', 'Island exploration']
          },
          {
            day: 4,
            title: 'Neil Island',
            activities: ['Ferry to Neil Island', 'Natural Bridge', 'Laxmanpur Beach', 'Return to Port Blair']
          },
          {
            day: 5,
            title: 'Final Exploration',
            activities: ['Ross Island trip', 'Final shopping', 'Airport departure']
          }
        ],
        highlights: ['Beach activities', 'Snorkeling adventures', 'Island hopping', 'Historical sites']
      },
      {
        id: 'andaman-premium',
        name: 'Andaman Premium Paradise',
        duration: '7 Days, 6 Nights',
        price: { min: 45000, max: 65000 },
        type: 'premium',
        inclusions: [
          '4* Beach resorts',
          'All meals included',
          'Private speedboat transfers',
          'Scuba diving certification',
          'Water sports package',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Tropical Welcome',
            activities: ['Beach resort check-in', 'Welcome drink', 'Beach orientation', 'Sunset dinner']
          },
          {
            day: 2,
            title: 'Havelock Paradise',
            activities: ['Private speedboat to Havelock', 'Premium beach resort', 'Radhanagar Beach full day', 'Beach dining']
          },
          {
            day: 3,
            title: 'Underwater Adventures',
            activities: ['Scuba diving training', 'Certified diving at Elephant Beach', 'Underwater photography', 'Marine life exploration']
          },
          {
            day: 4,
            title: 'Neil Island Serenity',
            activities: ['Neil Island exploration', 'Snorkeling at Bharatpur', 'Natural Bridge sunset', 'Beach barbecue']
          },
          {
            day: 5,
            title: 'Adventure & Culture',
            activities: ['Baratang limestone caves', 'Mangrove creek boat ride', 'Tribal culture experience', 'Nature walks']
          },
          {
            day: 6,
            title: 'Historical Insights',
            activities: ['Comprehensive Cellular Jail tour', 'Ross Island heritage walk', 'War memorial visit', 'Cultural evening']
          },
          {
            day: 7,
            title: 'Island Farewell',
            activities: ['Final beach relaxation', 'Souvenir shopping', 'Airport departure']
          }
        ],
        highlights: ['Beach resort stays', 'Scuba diving certification', 'Island hopping', 'Adventure activities']
      },
      {
        id: 'andaman-luxury',
        name: 'Andaman Luxury Escape',
        duration: '8 Days, 7 Nights',
        price: { min: 80000, max: 120000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury beach resorts',
          'Gourmet dining experiences',
          'Private yacht charters',
          'Personal diving instructor',
          'Luxury spa treatments',
          'Helicopter transfers',
          'Exclusive beach access'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Island Welcome',
            activities: ['Helicopter arrival', 'Beachfront suite check-in', 'Private beach access', 'Champagne sunset dinner']
          },
          {
            day: 2,
            title: 'Private Island Experience',
            activities: ['Private yacht charter', 'Exclusive beach access', 'Gourmet lunch on yacht', 'Luxury water sports']
          },
          {
            day: 3,
            title: 'Underwater Luxury',
            activities: ['Private diving instructor', 'Premium dive sites', 'Underwater photography', 'Marine conservation experience']
          },
          {
            day: 4,
            title: 'Havelock Luxury',
            activities: ['Helicopter to Havelock', 'Luxury beachfront villa', 'Private beach activities', 'Spa treatments']
          },
          {
            day: 5,
            title: 'Exclusive Adventures',
            activities: ['Private island exploration', 'Exclusive snorkeling sites', 'Luxury picnic setups', 'Cultural performances']
          },
          {
            day: 6,
            title: 'Heritage Luxury',
            activities: ['Private historical tours', 'Exclusive access areas', 'Luxury cultural experiences', 'Fine dining']
          },
          {
            day: 7,
            title: 'Ultimate Relaxation',
            activities: ['Full day luxury spa', 'Private beach cabana', 'Gourmet experiences', 'Sunset yacht cruise']
          },
          {
            day: 8,
            title: 'Luxury Farewell',
            activities: ['Final spa treatments', 'Helicopter departure', 'Royal island send-off']
          }
        ],
        highlights: ['Helicopter transfers', 'Private yacht access', 'Luxury beachfront stays', 'Exclusive experiences']
      }
    ],
    specialExperiences: [
      'Scuba diving in pristine coral reefs',
      'Sea walking underwater adventures',
      'Mangrove creek boat safaris',
      'Bioluminescent plankton night tours',
      'Traditional tribal culture encounters',
      'Deep sea fishing expeditions',
      'Sunset yacht cruises'
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    state: 'Sikkim',
    description: 'Himalayan jewel featuring diverse landscapes, Buddhist monasteries, rhododendron valleys, and stunning views of Kanchenjunga.',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
    bestTimeToVisit: 'March to May, October to December',
    category: 'mountain',
    attractions: [
      {
        name: 'Tsomgo Lake',
        description: 'Sacred glacial lake surrounded by snow-capped mountains',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Rumtek Monastery',
        description: 'Important Tibetan Buddhist monastery with rich heritage',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'spiritual'
      },
      {
        name: 'Nathu La Pass',
        description: 'High-altitude border pass between India and China',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Yumthang Valley',
        description: 'Valley of Flowers with rhododendrons and alpine meadows',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Gurudongmar Lake',
        description: 'High-altitude sacred lake with crystal clear waters',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      },
      {
        name: 'Pelling',
        description: 'Hill station with views of Kanchenjunga range',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
        category: 'nature'
      }
    ],
    packages: [
      {
        id: 'sikkim-budget',
        name: 'Himalayan Budget Adventure',
        duration: '6 Days, 5 Nights',
        price: { min: 15000, max: 22000 },
        type: 'budget',
        inclusions: [
          '2*/3* Hotel accommodation',
          'Daily breakfast',
          'Shared transport',
          'Permits included',
          'Local sightseeing'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Gangtok Arrival',
            activities: ['Arrival from Bagdogra/NJP', 'Hotel check-in', 'MG Road exploration', 'Local dinner']
          },
          {
            day: 2,
            title: 'Tsomgo & Nathu La',
            activities: ['Early drive to Tsomgo Lake', 'Lake activities', 'Nathu La Pass visit', 'Return to Gangtok']
          },
          {
            day: 3,
            title: 'Monasteries & Culture',
            activities: ['Rumtek Monastery', 'Enchey Monastery', 'Traditional handicraft centers', 'Cultural evening']
          },
          {
            day: 4,
            title: 'North Sikkim',
            activities: ['Drive to Lachung', 'Mountain village experience', 'Local interactions', 'Overnight in mountains']
          },
          {
            day: 5,
            title: 'Yumthang Valley',
            activities: ['Yumthang Valley of Flowers', 'Hot springs visit', 'Return to Gangtok', 'Farewell dinner']
          },
          {
            day: 6,
            title: 'Departure',
            activities: ['Final shopping', 'Departure to Bagdogra/NJP']
          }
        ],
        highlights: ['High-altitude lakes', 'Buddhist monasteries', 'Mountain villages', 'Rhododendron valleys']
      },
      {
        id: 'sikkim-premium',
        name: 'Sikkim Premium Himalayan',
        duration: '8 Days, 7 Nights',
        price: { min: 35000, max: 50000 },
        type: 'premium',
        inclusions: [
          '4* Mountain resorts',
          'All meals included',
          'Private vehicle',
          'Professional guide',
          'Adventure activities',
          'Cultural experiences'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Premium Mountain Welcome',
            activities: ['Comfortable arrival transfer', 'Mountain resort check-in', 'Orientation tour', 'Welcome cultural dinner']
          },
          {
            day: 2,
            title: 'Sacred Lakes',
            activities: ['Tsomgo Lake with private time', 'Nathu La Pass exploration', 'Border experience', 'Photography sessions']
          },
          {
            day: 3,
            title: 'Spiritual Circuit',
            activities: ['Multiple monastery tours', 'Meditation sessions', 'Buddhist philosophy learning', 'Traditional lunch']
          },
          {
            day: 4,
            title: 'Pelling Panorama',
            activities: ['Drive to Pelling', 'Kanchenjunga views', 'Pemayangtse Monastery', 'Skywalk experience']
          },
          {
            day: 5,
            title: 'West Sikkim',
            activities: ['Khecheopalri Lake', 'Yuksom historical town', 'Traditional village visits', 'Cultural interactions']
          },
          {
            day: 6,
            title: 'North Sikkim Adventure',
            activities: ['Journey to Lachung', 'Mountain village experience', 'Local culture immersion', 'Mountain dining']
          },
          {
            day: 7,
            title: 'Valley of Flowers',
            activities: ['Yumthang Valley exploration', 'Hot springs relaxation', 'Alpine flower photography', 'Return to Gangtok']
          },
          {
            day: 8,
            title: 'Farewell Himalayas',
            activities: ['Final mountain views', 'Shopping for handicrafts', 'Comfortable departure']
          }
        ],
        highlights: ['Mountain resort stays', 'Monastery immersion', 'Valley exploration', 'Cultural experiences']
      },
      {
        id: 'sikkim-luxury',
        name: 'Royal Sikkim Luxury',
        duration: '9 Days, 8 Nights',
        price: { min: 70000, max: 110000 },
        type: 'luxury',
        inclusions: [
          '5* Luxury mountain resorts',
          'Gourmet dining experiences',
          'Private helicopter tours',
          'Personal guide and butler',
          'Luxury spa treatments',
          'Exclusive experiences',
          'Photography equipment'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Luxury Himalayan Welcome',
            activities: ['Helicopter arrival', 'Luxury mountain resort', 'Private mountain orientation', 'Gourmet welcome feast']
          },
          {
            day: 2,
            title: 'Aerial Sikkim',
            activities: ['Helicopter tour of Kanchenjunga', 'Exclusive landing sites', 'Luxury mountain picnic', 'Photography with pro equipment']
          },
          {
            day: 3,
            title: 'Sacred Luxury',
            activities: ['Private monastery access', 'Personal spiritual sessions', 'Luxury spa with mountain views', 'Cultural performances']
          },
          {
            day: 4,
            title: 'Exclusive Lakes',
            activities: ['Helicopter to Gurudongmar Lake', 'Private lake access', 'Luxury camping setup', 'Star gazing dinner']
          },
          {
            day: 5,
            title: 'Pelling Luxury',
            activities: ['Luxury resort in Pelling', 'Private Kanchenjunga viewing', 'Exclusive monastery access', 'Gourmet dining']
          },
          {
            day: 6,
            title: 'Cultural Immersion',
            activities: ['Private village experiences', 'Master craftsman visits', 'Traditional workshops', 'Royal entertainment']
          },
          {
            day: 7,
            title: 'Valley Luxury',
            activities: ['Helicopter to Yumthang', 'Exclusive valley access', 'Luxury nature lodge', 'Alpine experiences']
          },
          {
            day: 8,
            title: 'Wellness Luxury',
            activities: ['Full day luxury spa', 'Mountain yoga sessions', 'Meditation retreats', 'Wellness dining']
          },
          {
            day: 9,
            title: 'Royal Departure',
            activities: ['Final helicopter tour', 'Luxury shopping', 'Royal send-off']
          }
        ],
        highlights: ['Helicopter access throughout', 'Luxury mountain resorts', 'Private experiences', 'Exclusive valley access']
      }
    ],
    specialExperiences: [
      'Kanchenjunga sunrise viewing',
      'Buddhist monastery meditation retreats',
      'Rhododendron valley treks during bloom season',
      'High-altitude lake visits',
      'Traditional Sikkimese cuisine tasting',
      'Handicraft workshops with local artisans',
      'Cable car rides with mountain views'
    ]
  }
];