import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import Layout from "@/components/Layout";

const destinations = [
  {
    id: "kerala",
    name: "Kerala",
    subtitle: "God's Own Country",
    description: "Experience the serene backwaters, lush tea plantations, and spice gardens of Kerala.",
    image: "photo-1578662996442-48f60103fc96",
    duration: "5-10 days",
    rating: 4.8,
    highlights: ["Backwaters", "Tea Gardens", "Spice Plantations", "Ayurveda"],
    bestTime: "Oct - Mar"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    subtitle: "Land of Kings",
    description: "Discover magnificent palaces, desert safaris, and vibrant culture in the royal state.",
    image: "photo-1477316224142-5d3827d8e90f",
    duration: "7-12 days",
    rating: 4.9,
    highlights: ["Palaces", "Desert Safari", "Forts", "Culture"],
    bestTime: "Nov - Mar"
  },
  {
    id: "goa",
    name: "Goa",
    subtitle: "Pearl of the Orient",
    description: "Relax on pristine beaches, explore Portuguese heritage, and enjoy vibrant nightlife.",
    image: "photo-1512343879784-a960bf40e7f2",
    duration: "3-7 days",
    rating: 4.6,
    highlights: ["Beaches", "Nightlife", "Churches", "Seafood"],
    bestTime: "Nov - Feb"
  },
  {
    id: "kashmir",
    name: "Kashmir",
    subtitle: "Paradise on Earth",
    description: "Marvel at snow-capped mountains, pristine lakes, and beautiful houseboats.",
    image: "photo-1506905925346-21bda4d32df4",
    duration: "5-8 days",
    rating: 4.7,
    highlights: ["Dal Lake", "Houseboats", "Gardens", "Skiing"],
    bestTime: "Apr - Oct"
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    subtitle: "Land of Snow",
    description: "Adventure in the Himalayas with trekking, skiing, and mountain views.",
    image: "photo-1469041797191-50ace28483c3",
    duration: "5-10 days",
    rating: 4.8,
    highlights: ["Trekking", "Adventure Sports", "Hill Stations", "Temples"],
    bestTime: "Mar - Jun, Sep - Nov"
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    subtitle: "Devbhoomi",
    description: "Spiritual journey to sacred temples and pristine mountain landscapes.",
    image: "photo-1482938289607-e9573fc25ebb",
    duration: "4-8 days",
    rating: 4.7,
    highlights: ["Char Dham", "Rishikesh", "National Parks", "Yoga"],
    bestTime: "Apr - Jun, Sep - Nov"
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    subtitle: "Land of Temples",
    description: "Explore ancient temples, classical dance, and rich cultural heritage.",
    image: "photo-1500673922987-e212871fec22",
    duration: "6-10 days",
    rating: 4.6,
    highlights: ["Temples", "Classical Arts", "Hill Stations", "Cuisine"],
    bestTime: "Nov - Mar"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    subtitle: "Little Tibet",
    description: "High-altitude desert with Buddhist monasteries and stunning landscapes.",
    image: "photo-1469041797191-50ace28483c3",
    duration: "6-10 days",
    rating: 4.9,
    highlights: ["Monasteries", "High Altitude Lakes", "Adventure", "Culture"],
    bestTime: "May - Sep"
  }
];

export default function Destinations() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore India's Incredible Destinations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            From the Himalayas to the ocean shores, discover the diverse beauty and rich culture of India.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${destination.image}?w=500&h=400&fit=crop`}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    {destination.bestTime}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-heritage-gold font-medium">{destination.subtitle}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-heritage-gold fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to={`/destinations/${destination.id}`}>
                      Explore {destination.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Can't Decide? Let Us Help!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our travel experts will recommend the perfect destinations based on your interests, budget, and travel style.
          </p>
          <Button size="lg" asChild className="bg-gradient-primary">
            <Link to="/plan-my-trip">
              Get Personalized Recommendations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}