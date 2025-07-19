import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, CheckCircle, Phone, DollarSign, Clock, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const heroImages = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop"
];

const destinations = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Pristine beaches and vibrant nightlife"
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=300&fit=crop",
    description: "Snow-capped mountains and adventure sports"
  },
  {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1561361513-2d000314c8e4?w=400&h=300&fit=crop",
    description: "Royal palaces and rich heritage"
  },
  {
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    description: "Paradise on earth with scenic valleys"
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
    description: "Backwaters and tropical beauty"
  },
  {
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
    description: "Desert landscapes and grand forts"
  }
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Custom Planning",
    description: "Personalized itineraries tailored to your preferences and budget"
  },
  {
    icon: MapPin,
    title: "Pan India Reach",
    description: "Comprehensive coverage across all major destinations in India"
  },
  {
    icon: Phone,
    title: "24/7 Helpdesk",
    description: "Round-the-clock support throughout your journey"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden costs, clear pricing with value for money"
  }
];

export default function Home() {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleQuickPlanSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      destination: formData.get('destination'),
      days: formData.get('days'),
      budget: formData.get('budget'),
      phone: formData.get('phone')
    };

    try {
      // Simulate API call to send email to admin@duniyarides.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Quick plan data:', data);
      
      toast({
        title: "Request Submitted!",
        description: "We'll contact you within 2 hours with trip options.",
      });
      
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`India destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Your Personalized Indian Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Trusted by 10,000+ travellers. Custom itineraries, real support, no stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-white px-8 py-4 text-lg rounded-full">
              <Link to="/plan-trip">Plan My Trip</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg rounded-full">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Trip Planning Form */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Quick Trip Planning
              </h2>
              <form onSubmit={handleQuickPlanSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" required placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Select name="destination" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="goa">Goa</SelectItem>
                        <SelectItem value="manali">Manali</SelectItem>
                        <SelectItem value="jaipur">Jaipur</SelectItem>
                        <SelectItem value="kashmir">Kashmir</SelectItem>
                        <SelectItem value="kerala">Kerala</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="days">Number of Days</Label>
                    <Select name="days" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 Days</SelectItem>
                        <SelectItem value="6-10">6-10 Days</SelectItem>
                        <SelectItem value="11-15">11-15 Days</SelectItem>
                        <SelectItem value="15+">15+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select name="budget" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-accent text-white py-4 text-lg rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get My Trip Plan"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover India's most beloved destinations, each offering unique experiences and unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.name} className="group cursor-pointer overflow-hidden hover:shadow-hover transition-all duration-300">
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Duniya Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to making your Indian adventure seamless, memorable, and worry-free
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature) => (
              <Card key={feature.title} className="text-center p-8 hover:shadow-hover transition-all duration-300 group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Indian Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our experts create the perfect itinerary for your dream trip to India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-accent hover:text-white px-8 py-4 text-lg rounded-full">
              <Link to="/plan-trip">Start Planning Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg rounded-full">
              <Link to="/contact">Talk to Our Experts</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}