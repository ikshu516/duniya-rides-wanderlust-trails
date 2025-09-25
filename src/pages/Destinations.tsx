import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Star, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { destinationsData } from "@/data/destinationsData";

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
            {destinationsData.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    <Calendar className="inline h-3 w-3 mr-1" />
                    {destination.bestTimeToVisit.split(' to ')[0]} - {destination.bestTimeToVisit.split(' to ')[1]}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-yellow-400 font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {destination.state}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">
                        {destination.packages.length} Packages
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                      <span className="capitalize bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">{destination.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.attractions.slice(0, 3).map((attraction, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                      >
                        {attraction.name.split(',')[0]}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-4">
                    Starting from ₹{Math.min(...destination.packages.map(pkg => pkg.price.min)).toLocaleString()} per person per night
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
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
          <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
            <Link to="/plan-trip">
              Get Personalized Recommendations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}