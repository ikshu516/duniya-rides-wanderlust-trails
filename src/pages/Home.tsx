import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, CheckCircle, Phone, DollarSign, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsAppWithText, WHATSAPP } from "@/lib/whatsapp";
import { getPendingSelection, clearPendingSelection, saveLead } from "@/lib/lead";

const heroImages = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop"
];

const popularDestinations = [
  { value: "goa", label: "Goa" },
  { value: "manali", label: "Manali" },
  { value: "jaipur", label: "Jaipur" },
  { value: "kashmir", label: "Kashmir" },
  { value: "kerala", label: "Kerala" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "agra", label: "Agra" },
  { value: "delhi", label: "Delhi" },
  { value: "mumbai", label: "Mumbai" },
  { value: "udaipur", label: "Udaipur" },
  { value: "shimla", label: "Shimla" },
  { value: "ooty", label: "Ooty" },
  { value: "mysore", label: "Mysore" },
  { value: "darjeeling", label: "Darjeeling" },
  { value: "rishikesh", label: "Rishikesh" },
  { value: "amritsar", label: "Amritsar" },
  { value: "varanasi", label: "Varanasi" },
  { value: "ladakh", label: "Ladakh" },
  { value: "andaman", label: "Andaman & Nicobar" },
  { value: "sikkim", label: "Sikkim" }
];

const destinations = [
  {
    name: "Goa",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Palolem_beach.jpg",
    description: "Pristine beaches and vibrant nightlife"
  },
  {
    name: "Manali",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Solang_Valley%2C_Manali.jpg",
    description: "Snow-capped mountains and adventure sports"
  },
  {
    name: "Jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    description: "Royal palaces and rich heritage"
  },
  {
    name: "Kashmir",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Dal_Lake%2C_Srinagar%2C_Jammu_and_Kashmir.jpg",
    description: "Paradise on earth with scenic valleys"
  },
  {
    name: "Kerala",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Houseboat_on_Alleppey_backwaters_%28Kerala%2C_India_2023%29_%2852704323376%29.jpg",
    description: "Backwaters and tropical beauty"
  },
  {
    name: "Rajasthan",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Sand_dunes_of_thar_desert.jpg",
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
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [destination, setDestination] = useState("");
  // Quick plan form state (to ensure reliable submission and WhatsApp message)
  const [qpDestination, setQpDestination] = useState("");
  const [qpDays, setQpDays] = useState("");
  const [qpBudget, setQpBudget] = useState("");

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
    const name = (formData.get('name') || '').toString();
    const email = (formData.get('email') || '').toString();
    const phone = (formData.get('phone') || '').toString();
    // Pull from hidden inputs (kept in sync with Selects)
    const dest = (formData.get('destination') || qpDestination || '').toString();
    const days = (formData.get('days') || qpDays || '').toString();
    const budget = (formData.get('budget') || qpBudget || '').toString();

    try {
      const pending = getPendingSelection();
      const formattedMessage =
        `*New Quick Plan Request*%0A%0A` +
        (pending ? (
          `*Selected Package:* ${encodeURIComponent(pending.packageName || pending.packageId)}%0A` +
          (pending.destinationName ? `*For Destination:* ${encodeURIComponent(pending.destinationName)}%0A` : '') +
          (pending.packageType ? `*Package Type:* ${encodeURIComponent(pending.packageType)}%0A` : '') +
          (pending.packageDuration ? `*Duration:* ${encodeURIComponent(pending.packageDuration)}%0A` : '') +
          (pending.packagePrice ? `*Package Price:* ₹${pending.packagePrice.min.toLocaleString()} - ₹${pending.packagePrice.max.toLocaleString()} per person per night%0A` : '') +
          `*Package ID:* ${encodeURIComponent(pending.packageId)}%0A%0A`
        ) : '') +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Email:* ${encodeURIComponent(email)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Destination:* ${encodeURIComponent(dest)}%0A` +
        `*Days:* ${encodeURIComponent(days)}%0A` +
        `*Budget:* ${encodeURIComponent(budget)}`;
      // Register lead locally
      saveLead('home-quick-plan', { name, email, phone, dest, days, budget, selectedPackage: pending });
      openWhatsAppWithText(formattedMessage);
      clearPendingSelection();

      toast({
        title: 'Opening WhatsApp...',
        description: "You'll be redirected to WhatsApp to send your request.",
      });

      e.currentTarget.reset();
      // Clear controlled state
      setQpDestination("");
      setQpDays("");
      setQpBudget("");
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not open WhatsApp. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSearch = () => {
    if (destination) {
      // Convert destination name to ID format for routing
      const destinationId = destination.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      // Check if destination exists in our popular destinations
      const foundDestination = popularDestinations.find(dest => 
        dest.label.toLowerCase() === destination.toLowerCase()
      );
      
      if (foundDestination) {
        navigate(`/destinations/${foundDestination.value}`);
      } else {
        toast({
          title: "Destination Not Found",
          description: "Please select from available destinations or use the search feature.",
        });
      }
    } else {
      toast({
        title: "Please Select Destination",
        description: "Choose a destination to view packages and details.",
      });
    }
  };

  return (
    <>
      {/* Debug Section - Remove after testing */}
      <div style={{ 
        background: '#ff0000', 
        color: 'white', 
        padding: '20px', 
        textAlign: 'center',
        marginTop: '80px',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        🔧 DEBUG: Home Page Content Loading Test
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block text-lg md:text-xl font-medium bg-primary/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 mb-6">
              🇮🇳 India, your way. Let the ride begin.
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Chalo, let's explore <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Incredible India
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-lora">
            From chai on the ghats to treks in the clouds — we craft personalized journeys across India's hidden gems and iconic destinations.
          </p>
          
          {/* Quick Search Widget - Inspired by TripFactory */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-left">
                <label className="block text-sm font-medium text-white/80 mb-2">Destination</label>
                <input 
                  type="text"
                  list="destinations-list"
                  placeholder="Where to?" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 text-white placeholder-white/60 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <datalist id="destinations-list">
                  {popularDestinations.map((dest) => (
                    <option key={dest.value} value={dest.label} />
                  ))}
                </datalist>
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-white/80 mb-2">Travel Date</label>
                <input 
                  type="date" 
                  className="w-full h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-white/80 mb-2">Duration</label>
                <select className="w-full h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Days</option>
                  <option value="3-5">3-5 Days</option>
                  <option value="6-10">6-10 Days</option>
                  <option value="11-15">11-15 Days</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  className="w-full h-12 bg-white text-secondary hover:bg-white/90 font-semibold rounded-lg transition-all duration-300 border-2 border-white flex items-center justify-center"
                >
                  🔍 Search Trips
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-saffron hover:shadow-glow text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300">
              <Link to="/plan-trip">Plan My Ride 🛺</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg rounded-full font-semibold">
              <Link to="/destinations">Explore India</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">✨ Trusted by 10,000+ happy travelers</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              🗺️ WHERE TO NEXT?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              India's Most Loved Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora">
              Every corner tells a story. From royal palaces to serene backwaters, discover where your Indian adventure begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => {
              const slug = destination.name.toLowerCase().replace(/[^a-z0-9]/g, '');
              return (
                <Link key={destination.name} to={`/destinations/${slug}`} className="block">
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-hover transition-all duration-300">
                    <div className="relative h-64">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if ((img as any).dataset.fallbackApplied) return;
                          img.src = '/placeholder.svg';
                          (img as any).dataset.fallbackApplied = 'true';
                        }}
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
                </Link>
              );
            })}
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
            <span className="inline-block text-sm font-medium bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              🏆 INDIA'S MOST TRUSTED
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Duniya Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora">
              More than travel. It's your story with India — crafted with love, guided with expertise.
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

      {/* Quick Trip Planning Form */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-primary/20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-glow bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <span className="inline-block text-sm font-medium bg-white/20 px-4 py-2 rounded-full mb-4">
                  🚀 START YOUR JOURNEY
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Chalo, Plan Your Perfect Ride!
                </h2>
                <p className="text-lg opacity-90 font-lora">
                  Tell us your travel dreams, and we'll make them reality. Planning India made easy.
                </p>
              </div>
              <form onSubmit={handleQuickPlanSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" required placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <Select name="destination" required onValueChange={(v) => setQpDestination(v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {popularDestinations.map((dest) => (
                          <SelectItem key={dest.value} value={dest.value}>
                            {dest.label}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other (specify in message)</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* Hidden input to ensure value is included in FormData */}
                    <input type="hidden" name="destination" value={qpDestination} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="days">Number of Days</Label>
                    <Select name="days" required onValueChange={(v) => setQpDays(v)}>
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
                    <input type="hidden" name="days" value={qpDays} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select name="budget" required onValueChange={(v) => setQpBudget(v)}>
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
                    <input type="hidden" name="budget" value={qpBudget} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder={WHATSAPP.displayNumber} />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-saffron hover:shadow-glow text-white py-4 text-lg rounded-full font-semibold transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "✨ Creating Magic..." : "🎯 Get My Personalized Trip Plan"}
                </Button>
                <p className="text-center text-sm opacity-75 mt-3">
                  💬 We'll WhatsApp you within 2 hours with exciting options!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
