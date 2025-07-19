import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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
              <button onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Home</button>
              <button onClick={() => document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Destinations</button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">About Us</button>
              <button onClick={() => document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Testimonials</button>
              <button onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Gallery</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Contact</button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Our Services</h4>
            <nav className="space-y-2">
              <button onClick={() => document.querySelector('#trip-form')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Trip Planning</button>
              <button onClick={() => document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Tour Packages</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Hotel Booking</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Transportation</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">Local Guides</button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="block text-sm hover:text-accent transition-colors text-left">24/7 Support</button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@duniyarides.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>123 Travel Street, New Delhi, India 110001</span>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => document.querySelector('#trip-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-block bg-gradient-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-warm transition-all"
                >
                  Start Planning
                </button>
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
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-accent transition-colors">Privacy Policy</button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-accent transition-colors">Terms of Service</button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-accent transition-colors">Cancellation Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}