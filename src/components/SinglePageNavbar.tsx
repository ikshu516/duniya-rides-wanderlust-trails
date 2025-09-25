import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { WHATSAPP } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Trip Plans", href: "#destinations" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

export default function SinglePageNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>{WHATSAPP.displayNumber}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>admin@duniyarides.com</span>
            </div>
          </div>
          <span className="hidden md:block">India's Most Trusted Trip Planner</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">DR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Duniya Rides</h1>
              <p className="text-xs text-muted-foreground">India's Most Trusted Trip Planner</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#trip-form')}
              className="bg-gradient-primary hover:shadow-warm"
            >
              Plan Trip Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-sm font-medium transition-colors text-foreground hover:text-primary"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <Button 
                onClick={() => scrollToSection('#trip-form')}
                className="w-full bg-gradient-primary"
              >
                Plan Trip Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
