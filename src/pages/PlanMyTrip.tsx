import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, DollarSign, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { openWhatsAppWithText, WHATSAPP } from "@/lib/whatsapp";
import { clearPendingSelection, getPendingSelection, saveLead } from "@/lib/lead";
import { useLocation } from "react-router-dom";
import { destinationsData } from "@/data/destinationsData";

export default function PlanMyTrip() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();

  // Derive selected package details from router state if present
  const selected = useMemo(() => {
    const state = (location.state || {}) as any;
    const pkgId: string | undefined = state.packageId;
    const destId: string | undefined = state.destinationId;
    const destNameFromState: string | undefined = state.destinationName || state.destination;
    const pending = getPendingSelection();

    let foundDestination: { id: string; name: string } | null = null;
    let foundPackage: {
      id: string;
      name?: string;
      duration?: string;
      type?: string;
      price?: { min: number; max: number };
    } | null = null;

    // If we have IDs, search structured data for robust prefill
    if (pkgId || pending?.packageId) {
      const targetPkgId = pkgId || pending?.packageId;
      for (const d of destinationsData) {
        const p = d.packages.find(pp => pp.id === targetPkgId);
        if (p) {
          foundDestination = { id: d.id, name: d.name };
          foundPackage = {
            id: p.id,
            name: p.name,
            duration: p.duration,
            type: p.type,
            price: { min: p.price.min, max: p.price.max },
          };
          break;
        }
      }
    }

    // Fall back to state-provided fields if not found by lookup
    if (!foundDestination && (destId || destNameFromState || pending?.destinationName)) {
      foundDestination = {
        id: destId || pending?.destinationId || '',
        name: destNameFromState || pending?.destinationName || '',
      };
    }
    if (!foundPackage && (pkgId || pending?.packageId)) {
      foundPackage = {
        id: pkgId || pending!.packageId,
        name: state.packageName || pending?.packageName,
        duration: state.packageDuration || pending?.packageDuration,
        type: state.packageType || pending?.packageType,
        price: state.packagePrice || pending?.packagePrice,
      };
    }

    // Helper to parse number of days from "X Days, Y Nights" style string
    const parseDays = (duration?: string): number | undefined => {
      if (!duration) return undefined;
      const match = duration.match(/(\d+)\s*Days?/i);
      if (match) return parseInt(match[1], 10);
      // Try nights + 1 if days isn't explicit
      const nights = duration.match(/(\d+)\s*Nights?/i);
      if (nights) return parseInt(nights[1], 10) + 1;
      return undefined;
    };

    const days = parseDays(foundPackage?.duration);

    return {
      destination: foundDestination || null,
      pkg: foundPackage || null,
      parsedDays: days,
    };
  }, [location.state]);

  const sendWhatsAppMessage = (formData: FormData) => {
    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      destination: formData.get('destination'),
      travelFrom: formData.get('travelFrom'),
      travelTo: formData.get('travelTo'),
      numberOfTravelers: formData.get('numberOfTravelers'),
      numberOfDays: formData.get('numberOfDays'),
      budgetRange: formData.get('budgetRange'),
      travelStyle: formData.get('travelStyle'),
      additionalNotes: formData.get('additionalNotes')
    };
    
    // Selected package context (if available)
    const pkgLines = selected.pkg ? (
      `*Selected Package:* ${encodeURIComponent(selected.pkg.name || selected.pkg.id)}%0A` +
      (selected.destination?.name ? `*For Destination:* ${encodeURIComponent(selected.destination.name)}%0A` : '') +
      (selected.pkg.type ? `*Package Type:* ${encodeURIComponent(selected.pkg.type)}%0A` : '') +
      (selected.pkg.duration ? `*Duration:* ${encodeURIComponent(selected.pkg.duration)}%0A` : '') +
      (selected.pkg.price ? `*Package Price:* ₹${selected.pkg.price.min.toLocaleString()} - ₹${selected.pkg.price.max.toLocaleString()} per person per night%0A` : '') +
      `*Package ID:* ${encodeURIComponent(selected.pkg.id)}%0A%0A`
    ) : '';

    // Format the message with proper line breaks and structure
    const formattedMessage = `*New Trip Planning Request*%0A%0A` +
      pkgLines +
      `*Name:* ${data.fullName}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Destination(s):* ${data.destination}%0A` +
      `*Travel Dates:* ${data.travelFrom} to ${data.travelTo}%0A` +
      `*Travelers:* ${data.numberOfTravelers}%0A` +
      `*Duration:* ${data.numberOfDays} days%0A` +
      `*Budget:* ${data.budgetRange}%0A` +
      `*Travel Style:* ${data.travelStyle}%0A` +
      `*Additional Notes:*%0A${data.additionalNotes || 'None'}`;
    
    // Register lead locally (lightweight client-side capture)
    saveLead('plan-trip', { ...data, selectedPackage: selected });

    // Open WhatsApp with the pre-filled message
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
      
      setIsSubmitted(true);
      toast({
        title: "Opening WhatsApp...",
        description: "You'll be redirected to WhatsApp to submit your trip request.",
      });
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

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-warm-sand py-20">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="text-center">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Thank You for Your Trip Request!
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Our travel experts have received your details and will create a personalized itinerary just for you. 
                  We'll contact you within 24 hours to discuss your dream trip to India.
                </p>
                <div className="bg-primary/10 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-2">What happens next?</h3>
                  <ul className="text-left text-muted-foreground space-y-2">
                    <li>• Our expert will review your preferences</li>
                    <li>• We'll create a customized itinerary</li>
                    <li>• You'll receive a detailed proposal via email</li>
                    <li>• We'll schedule a call to finalize details</li>
                  </ul>
                </div>
                <Button asChild className="bg-gradient-primary">
                  <a href="/">Return to Home</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-warm-sand py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                🗺️ CRAFT YOUR JOURNEY
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Chalo, Plan Your Indian Adventure!
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lora">
              Tell us your travel dreams, preferences, and bucket list. We'll weave them into an unforgettable Indian story — just for you.
            </p>
          </div>

          {/* Form */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Trip Planning Form</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Selected package summary (if navigated from a package) */}
              {selected.pkg && (
                <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <div className="text-sm text-muted-foreground mb-1">Pre-selected from destination page</div>
                  <div className="flex flex-wrap items-center gap-2 text-foreground">
                    <span className="font-semibold">{selected.pkg.name || 'Selected Package'}</span>
                    {selected.pkg.type && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{selected.pkg.type}</span>}
                    {selected.destination?.name && (
                      <span className="text-sm">• {selected.destination.name}</span>
                    )}
                    {selected.pkg.duration && (
                      <span className="text-sm">• {selected.pkg.duration}</span>
                    )}
                    {selected.pkg.price && (
                      <span className="text-sm">• ₹{selected.pkg.price.min.toLocaleString()} - ₹{selected.pkg.price.max.toLocaleString()} pppn</span>
                    )}
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" name="fullName" required placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder={WHATSAPP.displayNumber} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                </div>

                {/* Trip Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-primary" />
                    Trip Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination(s) *</Label>
                      <Input id="destination" name="destination" required placeholder="e.g., Kerala, Rajasthan, Kashmir" defaultValue={selected.destination?.name || ''} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="travelFrom">Travel Date From *</Label>
                        <Input id="travelFrom" name="travelFrom" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travelTo">Travel Date To *</Label>
                        <Input id="travelTo" name="travelTo" type="date" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="numberOfTravelers">Number of Travelers *</Label>
                        <Select name="numberOfTravelers" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Person</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3-4">3-4 People</SelectItem>
                            <SelectItem value="5-8">5-8 People</SelectItem>
                            <SelectItem value="9+">9+ People (Group)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="numberOfDays">Number of Days</Label>
                        <Input id="numberOfDays" name="numberOfDays" type="number" placeholder="7" min="1" max="30" defaultValue={selected.parsedDays || ''} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range (per person) *</Label>
                      <Select name="budgetRange" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-20k">Under ₹20,000</SelectItem>
                          <SelectItem value="20k-40k">₹20,000 - ₹40,000</SelectItem>
                          <SelectItem value="40k-60k">₹40,000 - ₹60,000</SelectItem>
                          <SelectItem value="60k-100k">₹60,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelStyle">Travel Style *</Label>
                      <Select name="travelStyle" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your travel style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">🏔️ Adventure & Thrills</SelectItem>
                          <SelectItem value="luxury">✨ Luxury & Comfort</SelectItem>
                          <SelectItem value="culture">🎭 Cultural Immersion</SelectItem>
                          <SelectItem value="spiritual">🕉️ Spiritual Journey</SelectItem>
                          <SelectItem value="family">👨‍👩‍👧‍👦 Family Fun</SelectItem>
                          <SelectItem value="romantic">💕 Romantic Getaway</SelectItem>
                          <SelectItem value="offbeat">🌟 Offbeat & Hidden Gems</SelectItem>
                          <SelectItem value="food">🍛 Food & Culinary Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea 
                        id="additionalNotes" 
                        name="additionalNotes" 
                        placeholder="Tell us about your specific interests, dietary requirements, accessibility needs, or any special requests..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <span className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        Plan My Trip Now
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
