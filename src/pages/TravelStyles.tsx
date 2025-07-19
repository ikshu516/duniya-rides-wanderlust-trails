import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Heart, Users, Compass, Crown, Flower } from "lucide-react";
import Layout from "@/components/Layout";

const travelStyles = [
  {
    id: "adventure",
    name: "Adventure Travel",
    icon: Mountain,
    description: "For thrill-seekers and adrenaline junkies who want to push their limits",
    image: "photo-1469041797191-50ace28483c3",
    features: [
      "Trekking in the Himalayas",
      "White water rafting",
      "Rock climbing and rappelling",
      "Desert safaris",
      "Skiing in Kashmir",
      "Paragliding and bungee jumping"
    ],
    bestDestinations: ["Ladakh", "Himachal Pradesh", "Uttarakhand", "Rajasthan"],
    idealFor: "Solo travelers, adventure groups, fitness enthusiasts",
    priceRange: "₹20,000 - ₹50,000",
    color: "text-mountain-blue"
  },
  {
    id: "luxury",
    name: "Luxury Travel",
    icon: Crown,
    description: "Experience India in ultimate comfort with premium accommodations and services",
    image: "photo-1477316224142-5d3827d8e90f",
    features: [
      "Palace hotels and luxury resorts",
      "Private jets and helicopters",
      "Personal butler service",
      "Michelin-starred dining",
      "Exclusive cultural experiences",
      "Spa and wellness treatments"
    ],
    bestDestinations: ["Rajasthan", "Kerala", "Goa", "Kashmir"],
    idealFor: "High-end travelers, couples, special occasions",
    priceRange: "₹1,00,000 - ₹5,00,000+",
    color: "text-heritage-gold"
  },
  {
    id: "cultural",
    name: "Cultural Heritage",
    icon: Compass,
    description: "Immerse yourself in India's rich history, art, and traditions",
    image: "photo-1500673922987-e212871fec22",
    features: [
      "UNESCO World Heritage sites",
      "Traditional art and craft workshops",
      "Classical music and dance performances",
      "Local cooking classes",
      "Village homestays",
      "Archaeological site visits"
    ],
    bestDestinations: ["Delhi", "Agra", "Jaipur", "Tamil Nadu"],
    idealFor: "History buffs, art lovers, cultural enthusiasts",
    priceRange: "₹15,000 - ₹40,000",
    color: "text-sunset-orange"
  },
  {
    id: "spiritual",
    name: "Spiritual Journey",
    icon: Flower,
    description: "Find inner peace and spiritual awakening in sacred places",
    image: "photo-1506905925346-21bda4d32df4",
    features: [
      "Yoga and meditation retreats",
      "Sacred temple visits",
      "Spiritual guru meetings",
      "Ayurvedic treatments",
      "Ganga Aarti ceremonies",
      "Pilgrimage tours"
    ],
    bestDestinations: ["Rishikesh", "Varanasi", "Kerala", "Dharamshala"],
    idealFor: "Spiritual seekers, wellness enthusiasts, solo travelers",
    priceRange: "₹12,000 - ₹35,000",
    color: "text-forest-green"
  },
  {
    id: "family",
    name: "Family Friendly",
    icon: Users,
    description: "Create lasting memories with experiences perfect for all ages",
    image: "photo-1512343879784-a960bf40e7f2",
    features: [
      "Child-friendly accommodations",
      "Educational wildlife tours",
      "Interactive cultural activities",
      "Beach resorts with kids' clubs",
      "Theme parks and entertainment",
      "Safe and comfortable transport"
    ],
    bestDestinations: ["Goa", "Kerala", "Himachal Pradesh", "Rajasthan"],
    idealFor: "Families with children, multi-generational trips",
    priceRange: "₹18,000 - ₹45,000",
    color: "text-accent"
  },
  {
    id: "romantic",
    name: "Romantic Getaway",
    icon: Heart,
    description: "Perfect for couples seeking intimate and romantic experiences",
    image: "photo-1578662996442-48f60103fc96",
    features: [
      "Candlelit dinners",
      "Couple spa treatments",
      "Private houseboat cruises",
      "Sunset viewpoints",
      "Romantic beach walks",
      "Honeymoon suites"
    ],
    bestDestinations: ["Kashmir", "Kerala", "Goa", "Udaipur"],
    idealFor: "Couples, honeymooners, anniversary celebrations",
    priceRange: "₹25,000 - ₹60,000",
    color: "text-rose-500"
  }
];

export default function TravelStyles() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Travel Style
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Every traveler is unique. Discover the travel style that matches your personality and interests for an unforgettable Indian adventure.
          </p>
        </div>
      </section>

      {/* Travel Styles Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelStyles.map((style) => {
              const IconComponent = style.icon;
              return (
                <Card key={style.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                  {/* Header Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${style.image}?w=500&h=300&fit=crop`}
                      alt={style.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className={`h-6 w-6 text-heritage-gold`} />
                        </div>
                        <h3 className="text-2xl font-bold">{style.name}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{style.description}</p>

                    {/* Price Range */}
                    <div className="mb-4">
                      <span className="text-sm font-medium text-foreground">Price Range: </span>
                      <span className="text-sm text-primary font-medium">{style.priceRange}</span>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-4">
                      <span className="text-sm font-medium text-foreground">Ideal for: </span>
                      <span className="text-sm text-muted-foreground">{style.idealFor}</span>
                    </div>

                    {/* Best Destinations */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Best Destinations:</p>
                      <div className="flex flex-wrap gap-1">
                        {style.bestDestinations.map((dest, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-2">What to Expect:</p>
                      <ul className="space-y-1">
                        {style.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-xs">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button asChild className="w-full bg-gradient-primary">
                      <Link to="/plan-my-trip">
                        Plan {style.name} Trip <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Style Suits You?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take our quick travel personality quiz or speak with our experts to discover your perfect travel style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              Take Travel Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Speak with Expert <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Combination Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mix & Match Your Styles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why choose just one? Many of our travelers enjoy combining different styles for a more diverse experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl">+</span>
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Flower className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Luxury + Spiritual</h3>
              <p className="text-sm text-muted-foreground">Premium wellness retreats with luxury accommodations</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl">+</span>
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Compass className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Adventure + Culture</h3>
              <p className="text-sm text-muted-foreground">Thrilling activities combined with heritage exploration</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl">+</span>
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Family + Romance</h3>
              <p className="text-sm text-muted-foreground">Perfect for families with parents seeking romantic moments</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/plan-my-trip">
                Create Custom Combination <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}