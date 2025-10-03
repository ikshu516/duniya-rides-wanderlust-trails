import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">DR</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Duniya Rides</h3>
                <p className="text-xs text-secondary-foreground/80">Explore Incredible India</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner for unforgettable journeys across India. From the majestic Himalayas to the serene backwaters of Kerala, we make your travel dreams come true.
            </p>
            <div className="pt-2">
              <p className="text-xs text-secondary-foreground/70 font-mono">
                GST: 09AGOPV6110A1ZF
              </p>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm hover:text-accent transition-colors">Home</Link>
              <Link to="/destinations" className="block text-sm hover:text-accent transition-colors">Destinations</Link>
              <Link to="/about" className="block text-sm hover:text-accent transition-colors">About Us</Link>
              <Link to="/testimonials" className="block text-sm hover:text-accent transition-colors">Testimonials</Link>
              <Link to="/gallery" className="block text-sm hover:text-accent transition-colors">Gallery</Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Our Services</h4>
            <nav className="space-y-2">
              <Link to="/plan-trip" className="block text-sm hover:text-accent transition-colors">Trip Planning</Link>
              <Link to="/destinations" className="block text-sm hover:text-accent transition-colors">Tour Packages</Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">Hotel Booking</Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">Transportation</Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">Local Guides</Link>
              <Link to="/contact" className="block text-sm hover:text-accent transition-colors">24/7 Support</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>{WHATSAPP.displayNumber}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>admin@duniyarides.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Shastri Nagar, Ghaziabad, Uttar Pradesh -201002</span>
              </div>
              <div className="pt-2">
                <Link 
                  to="/plan-trip"
                  className="inline-block bg-gradient-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-warm transition-all"
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-light/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/80">
            © 2024 Duniya Rides. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-sm hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-sm hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-sm hover:text-accent transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
