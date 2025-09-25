import { useState } from "react";
import { ArrowRight, MapPin, Calendar, Users, Star, Phone, Mail, CheckCircle, Camera, Shield, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SinglePageNavbar from "@/components/SinglePageNavbar";
import Footer from "@/components/Footer";
import { openWhatsAppWithText, WHATSAPP } from "@/lib/whatsapp";
import { getPendingSelection, clearPendingSelection, saveLead } from "@/lib/lead";
import heroImage from "@/assets/hero-bg.jpg";

const destinations = [
  {
    name: "Goa",
    image: "photo-1512343879784-a960bf40e7f2",
    description: "Beautiful beaches and Portuguese heritage"
  },
  {
    name: "Manali",
    image: "photo-1506905925346-21bda4d32df4",
    description: "Snow-capped mountains and adventure sports"
  },
  {
    name: "Jaipur",
    image: "photo-1477316224142-5d3827d8e90f",
    description: "Pink City with majestic palaces"
  },
  {
    name: "Kashmir",
    image: "photo-1578662996442-48f60103fc96",
    description: "Paradise on Earth with stunning valleys"
  },
  {
    name: "Kerala",
    image: "photo-1571115764595-644a1f56a55c",
    description: "God's Own Country with backwaters"
  },
  {
    name: "Rajasthan",
    image: "photo-1539650116574-75c0c6d73f6e",
    description: "Land of Kings and desert adventures"
  }
];

const whyChooseUs = [
  {
    icon: <MapPin className="h-8 w-8 text-white" />,
    title: "Budget Friendly",
    description: "Affordable packages tailored to your budget without compromising on quality"
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "All-Inclusive Packages",
    description: "Complete travel solutions including accommodation, meals, and activities"
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your trip goes smoothly"
  },
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "Pan India Coverage",
    description: "Extensive network covering all major destinations across India"
  }
];

const galleryImages = [
  "photo-1524492412937-b28074a5d7da",
  "photo-1506905925346-21bda4d32df4",
  "photo-1512343879784-a960bf40e7f2",
  "photo-1477316224142-5d3827d8e90f",
  "photo-1578662996442-48f60103fc96",
  "photo-1571115764595-644a1f56a55c"
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    review: "Duniya Rides planned our Kashmir trip perfectly. Every detail was taken care of, and the experience was magical!",
    rating: 5,
    image: "photo-1494790108755-2616c668c9ad"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    review: "Excellent service and budget-friendly packages. Our Goa vacation was unforgettable thanks to their planning.",
    rating: 5,
    image: "photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Anjali Patel",
    location: "Bangalore",
    review: "Professional service and amazing itinerary. The Rajasthan heritage tour exceeded our expectations completely.",
    rating: 5,
    image: "photo-1438761681033-6461ffad8d80"
  }
];

export default function DuniyaRides() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    days: "",
    budget: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const pending = getPendingSelection();
    const formattedMessage =
      `*New Single-Page Trip Request*%0A%0A` +
      (pending ? (
        `*Selected Package:* ${encodeURIComponent(pending.packageName || pending.packageId)}%0A` +
        (pending.destinationName ? `*For Destination:* ${encodeURIComponent(pending.destinationName)}%0A` : '') +
        (pending.packageType ? `*Package Type:* ${encodeURIComponent(pending.packageType)}%0A` : '') +
        (pending.packageDuration ? `*Duration:* ${encodeURIComponent(pending.packageDuration)}%0A` : '') +
        (pending.packagePrice ? `*Package Price:* ₹${pending.packagePrice.min.toLocaleString()} - ₹${pending.packagePrice.max.toLocaleString()} per person per night%0A` : '') +
        `*Package ID:* ${encodeURIComponent(pending.packageId)}%0A%0A`
      ) : '') +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Destination:* ${encodeURIComponent(formData.destination)}%0A` +
      `*Days:* ${encodeURIComponent(formData.days)}%0A` +
      `*Budget:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}`;

    try {
      saveLead('duniyarides', { ...formData, selectedPackage: pending });
      openWhatsAppWithText(formattedMessage);
      clearPendingSelection();
      toast({
        title: "Opening WhatsApp...",
        description: "You'll be redirected to WhatsApp to send your request.",
      });
      setFormData({ name: "", email: "", destination: "", days: "", budget: "", phone: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not open WhatsApp. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <SinglePageNavbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block text-heritage-gold">Duniya Rides</span>
            India's Most Trusted Trip Planner
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            From the snow-capped Himalayas to tropical beaches, experience India's diverse beauty with our expert-planned journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => document.querySelector('#trip-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:shadow-warm text-lg px-8 py-3"
            >
              Plan My Trip <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trip Planning Form */}
      <section id="trip-form" className="py-20 bg-warm-sand">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plan Your Dream Trip
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out this form and we'll create a personalized itinerary for you
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="destination">Destination *</Label>
                  <Select 
                    value={formData.destination} 
                    onValueChange={(value) => setFormData({...formData, destination: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select destination" />
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

                <div>
                  <Label htmlFor="days">Number of Days *</Label>
                  <Select 
                    value={formData.days} 
                    onValueChange={(value) => setFormData({...formData, days: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-5">3-5 Days</SelectItem>
                      <SelectItem value="6-10">6-10 Days</SelectItem>
                      <SelectItem value="11-15">11-15 Days</SelectItem>
                      <SelectItem value="15+">More than 15 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select 
                    value={formData.budget} 
                    onValueChange={(value) => setFormData({...formData, budget: value})}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-20k">Under ₹20,000</SelectItem>
                      <SelectItem value="20k-50k">₹20,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="1l+">Above ₹1,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="mt-1"
                    placeholder={WHATSAPP.displayNumber}
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-primary text-lg py-3">
                  Submit Trip Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us / Why Choose Us */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Duniya Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make your travel dreams come true with personalized service and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore India's most captivating destinations, each offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Travel Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beautiful moments captured from our travelers' journeys across incredible India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/${image}?w=400&h=300&fit=crop`}
                  alt={`Travel gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real travelers who trusted us with their dream vacations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="pt-6">
                  <img
                    src={`https://images.unsplash.com/${testimonial.image}?w=100&h=100&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-heritage-gold text-heritage-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for personalized travel planning and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">{WHATSAPP.displayNumber}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">admin@duniyarides.com</p>
                  <p className="text-muted-foreground">support@duniyarides.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Travel Street, Tourism Hub<br />
                    New Delhi, India - 110001
                  </p>
                </div>
              </div>

              <div className="bg-warm-sand p-6 rounded-lg">
                <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                <p className="text-muted-foreground mb-4">Chat with us instantly for quick queries</p>
                <Button
                  className="bg-gradient-primary"
                  onClick={() => {
                    openWhatsAppWithText('');
                  }}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map Location</p>
                <p className="text-sm text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
