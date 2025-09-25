import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users, Star, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const packages = [
  {
    id: "kerala-3-day",
    name: "Kerala Backwaters Experience",
    duration: "3 Days / 2 Nights",
    price: "₹15,999",
    originalPrice: "₹19,999",
    image: "/images/gallery/kerala-backwaters.jpg",
    rating: 4.8,
    reviews: 124,
    groupSize: "2-8 people",
    destinations: ["Alleppey", "Kumarakom"],
    highlights: ["Houseboat stay", "Backwater cruise", "Village tour", "Ayurvedic spa"],
    category: "Relaxation",
    bestFor: "Couples, Families"
  },
  {
    id: "rajasthan-7-day",
    name: "Royal Rajasthan Circuit",
    duration: "7 Days / 6 Nights",
    price: "₹35,999",
    originalPrice: "₹42,999",
    image: "/images/gallery/udaipur-palace.jpg",
    rating: 4.9,
    reviews: 89,
    groupSize: "4-12 people",
    destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
    highlights: ["Palace visits", "Desert safari", "Cultural shows", "Heritage hotels"],
    category: "Culture",
    bestFor: "History buffs, Culture lovers"
  },
  {
    id: "goa-beach-5-day",
    name: "Goa Beach Paradise",
    duration: "5 Days / 4 Nights",
    price: "₹12,999",
    originalPrice: "₹16,999",
    image: "/images/gallery/goa-beach.jpg",
    rating: 4.6,
    reviews: 156,
    groupSize: "2-6 people",
    destinations: ["North Goa", "South Goa"],
    highlights: ["Beach activities", "Water sports", "Nightlife", "Portuguese heritage"],
    category: "Beach",
    bestFor: "Young travelers, Couples"
  },
  {
    id: "kashmir-6-day",
    name: "Kashmir Valley Special",
    duration: "6 Days / 5 Nights",
    price: "₹28,999",
    originalPrice: "₹34,999",
    image: "/images/gallery/kashmir.jpg",
    rating: 4.7,
    reviews: 67,
    groupSize: "2-10 people",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    highlights: ["Dal Lake", "Houseboat", "Skiing", "Mughal gardens"],
    category: "Adventure",
    bestFor: "Nature lovers, Adventurers"
  },
  {
    id: "himachal-adventure",
    name: "Himachal Adventure Trek",
    duration: "8 Days / 7 Nights",
    price: "₹22,999",
    originalPrice: "₹28,999",
    image: "/images/gallery/manali.jpg",
    rating: 4.8,
    reviews: 43,
    groupSize: "4-12 people",
    destinations: ["Manali", "Solang Valley", "Rohtang Pass"],
    highlights: ["Trekking", "Adventure sports", "Snow activities", "Mountain views"],
    category: "Adventure",
    bestFor: "Adventure seekers, Trekkers"
  },
  {
    id: "golden-triangle",
    name: "Golden Triangle Classic",
    duration: "6 Days / 5 Nights",
    price: "₹24,999",
    originalPrice: "₹29,999",
    image: "/images/gallery/taj-mahal.jpg",
    rating: 4.7,
    reviews: 198,
    groupSize: "2-15 people",
    destinations: ["Delhi", "Agra", "Jaipur"],
    highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "Local cuisine"],
    category: "Heritage",
    bestFor: "First-time visitors, Families"
  }
];

const categories = ["All", "Adventure", "Beach", "Culture", "Heritage", "Relaxation"];

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages = selectedCategory === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Curated Travel Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Handcrafted journeys that showcase the best of India. All-inclusive packages with expert guides and premium accommodations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-warm-sand border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "bg-gradient-primary" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                {/* Package Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{pkg.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-foreground">{pkg.duration}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-heritage-gold fill-current" />
                        <span>{pkg.rating}</span>
                        <span>({pkg.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Destinations */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Destinations:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.map((dest, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Highlights:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2 mr-2" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Best for:</span> {pkg.bestFor}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground ml-2 line-through">
                        {pkg.originalPrice}
                      </span>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                    <Badge variant="outline" className="text-forest-green border-forest-green">
                      Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                    </Badge>
                  </div>

                  {/* CTA */}
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to={`/packages/${pkg.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We create custom packages tailored to your preferences, budget, and travel style. Let us design your perfect Indian adventure.
          </p>
          <Button size="lg" asChild className="bg-gradient-primary">
            <Link to="/plan-my-trip">
              Create Custom Package <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}