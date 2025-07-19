import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Users, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bg.jpg";

const featuredDestinations = [
  {
    name: "Kerala",
    description: "God's Own Country with backwaters and tea gardens",
    image: "photo-1578662996442-48f60103fc96",
    link: "/destinations/kerala"
  },
  {
    name: "Rajasthan",
    description: "Land of Kings with majestic palaces and deserts",
    image: "photo-1477316224142-5d3827d8e90f",
    link: "/destinations/rajasthan"
  },
  {
    name: "Goa",
    description: "Beautiful beaches and Portuguese heritage",
    image: "photo-1512343879784-a960bf40e7f2",
    link: "/destinations/goa"
  },
  {
    name: "Kashmir",
    description: "Paradise on Earth with stunning valleys",
    image: "photo-1506905925346-21bda4d32df4",
    link: "/destinations/kashmir"
  }
];

const stats = [
  { number: "500+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "100+", label: "Tour Packages" },
  { number: "5★", label: "Average Rating" }
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover the Magic of
            <span className="block text-heritage-gold">Incredible India</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            From the snow-capped Himalayas to tropical beaches, experience India's diverse beauty with our expert-planned journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button size="lg" asChild className="bg-gradient-primary hover:shadow-warm text-lg px-8 py-3">
              <Link to="/plan-my-trip">
                Plan My Trip <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-heritage-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore India's most captivating destinations, each offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${destination.image}?w=400&h=300&fit=crop`}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                    <p className="text-sm text-white/80">{destination.description}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link to={destination.link}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/destinations">
                View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Duniya Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make your travel dreams come true with personalized service and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Our local guides know the hidden gems and authentic experiences that make your trip special.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Planning</h3>
              <p className="text-muted-foreground">
                Customize your itinerary to match your interests, budget, and travel style perfectly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                We're here for you every step of the way, ensuring a smooth and worry-free journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Indian Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us plan your perfect trip to India. Share your travel dreams and we'll make them come true.
          </p>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
            <Link to="/plan-my-trip">
              Plan My Trip Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}