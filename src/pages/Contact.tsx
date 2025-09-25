import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Search, ChevronDown, X } from "lucide-react";
import Layout from "@/components/Layout";
import { openWhatsAppWithText, WHATSAPP } from "@/lib/whatsapp";
import { getPendingSelection, clearPendingSelection, saveLead } from "@/lib/lead";
import { useToast } from "@/hooks/use-toast";

const popularDestinations = [
  { id: 1, name: "Agra, Uttar Pradesh" },
  { id: 2, name: "Jaipur, Rajasthan" },
  { id: 3, name: "Varanasi, Uttar Pradesh" },
  { id: 4, name: "Goa" },
  { id: 5, name: "Kerala" },
  { id: 6, name: "Ladakh" },
  { id: 7, name: "Shimla, Himachal Pradesh" },
  { id: 8, name: "Manali, Himachal Pradesh" },
  { id: 9, name: "Udaipur, Rajasthan" },
  { id: 10, name: "Rishikesh, Uttarakhand" },
  { id: 11, name: "Darjeeling, West Bengal" },
  { id: 12, name: "Munnar, Kerala" },
  { id: 13, name: "Ooty, Tamil Nadu" },
  { id: 14, name: "Andaman and Nicobar Islands" },
  { id: 15, name: "Mysore, Karnataka" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState(popularDestinations);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredDestinations(
      popularDestinations.filter(dest =>
        dest.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const selectDestination = (destination: string) => {
    setSearchQuery(destination);
    setShowDropdown(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredDestinations(popularDestinations);
  };

  const sendWhatsAppMessage = (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const pending = getPendingSelection();
    
    // Format the message with proper line breaks and structure
    const formattedMessage = `*New Contact Form Submission*%0A%0A` +
      (pending ? (
        `*Selected Package:* ${encodeURIComponent(pending.packageName || pending.packageId)}%0A` +
        (pending.destinationName ? `*For Destination:* ${encodeURIComponent(pending.destinationName)}%0A` : '') +
        (pending.packageType ? `*Package Type:* ${encodeURIComponent(pending.packageType)}%0A` : '') +
        (pending.packageDuration ? `*Duration:* ${encodeURIComponent(pending.packageDuration)}%0A` : '') +
        (pending.packagePrice ? `*Package Price:* ₹${pending.packagePrice.min.toLocaleString()} - ₹${pending.packagePrice.max.toLocaleString()} per person per night%0A` : '') +
        `*Package ID:* ${encodeURIComponent(pending.packageId)}%0A%0A`
      ) : '') +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone || 'Not provided'}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:*%0A${message}`;
    
    // Open WhatsApp with the pre-filled message
    saveLead('contact', { name, email, phone, subject, message, selectedPackage: pending });
    openWhatsAppWithText(formattedMessage);
    clearPendingSelection();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Send data to WhatsApp
      sendWhatsAppMessage(formData);
      
      toast({
        title: "Opening WhatsApp...",
        description: "You'll be redirected to WhatsApp to send your message.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Could not open WhatsApp. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Ready to plan your dream trip to India? Our travel experts are here to help you every step of the way.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative" ref={dropdownRef}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for destinations in India..."
                className="pl-10 pr-10 py-6 text-base border-0 shadow-lg"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowDropdown(true)}
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              <Button 
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 px-6 bg-primary hover:bg-primary/90 text-white font-medium rounded-md"
                onClick={() => {
                  if (searchQuery) {
                    // Handle search action
                    toast({
                      title: "Searching trips",
                      description: `Showing trips for ${searchQuery}`,
                    });
                  }
                }}
                disabled={!searchQuery}
              >
                Search Trips
              </Button>
            </div>
            
            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                <div className="py-1">
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map((destination) => (
                      <button
                        key={destination.id}
                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => selectDestination(destination.name)}
                      >
                        {destination.name}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">No destinations found</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            {/* <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">Call us anytime</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground">{WHATSAPP.displayNumber}</p>
                </div>
              </CardContent>
            </Card> */}

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">Send us a message</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground">info@duniyarides.com</p>
                  <p className="text-foreground">sales@duniyarides.com</p>
                  <p className="text-foreground">support@duniyarides.com</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-sm text-muted-foreground">Visit us</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-foreground">123 Travel Street</p>
                  <p className="text-foreground">Connaught Place</p>
                  <p className="text-foreground">New Delhi, India 110001</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">When we're available</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-foreground">Saturday: 10:00 AM - 5:00 PM</p>
                  <p className="text-foreground">Sunday: 11:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Emergency support: 24/7</p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">WhatsApp</h3>
                    <p className="text-sm text-white/90">Quick chat support</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-white text-green-700 hover:bg-white/90 hover:shadow-md transition-all duration-200 py-6 text-base font-medium rounded-lg"
                  onClick={() => {
                    openWhatsAppWithText('');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" required placeholder="Where do you want to travel next?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required
                      placeholder="Let us help you plan your next adventure. Provide us as much details as possible about your interests and preferences."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-warm"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Our Office</h2>
            <p className="text-muted-foreground">
              Located in the heart of New Delhi, easily accessible by metro and car.
            </p>
          </div>

          {/* Placeholder for Google Maps */}
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  123 Travel Street, Connaught Place, New Delhi 110001
                </p>
                <Button variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions. Can't find what you're looking for? Contact us!
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  How far in advance should I book my trip?
                </h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 2-3 months in advance for the best availability and rates. However, we can accommodate last-minute bookings based on availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you provide travel insurance?
                </h3>
                <p className="text-muted-foreground">
                  We strongly recommend travel insurance and can help you choose the right coverage. We work with reputable insurance providers to ensure comprehensive protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-muted-foreground">
                  Our cancellation policy varies by package and booking date. Generally, we offer full refunds for cancellations made 30+ days before departure. Contact us for specific details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you arrange visas for international travelers?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide visa assistance and guidance for international travelers. We'll help you understand the requirements and support you through the application process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
