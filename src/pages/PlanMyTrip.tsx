import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, DollarSign, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

export default function PlanMyTrip() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      destination: formData.get('destination'),
      travelFrom: formData.get('travelFrom'),
      travelTo: formData.get('travelTo'),
      numberOfDays: formData.get('numberOfDays'),
      budgetRange: formData.get('budgetRange'),
      travelStyle: formData.get('travelStyle'),
      additionalNotes: formData.get('additionalNotes')
    };

    try {
      // Simulate API call to send email to admin@duniyarides.com
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Trip planning data:', data);
      
      setIsSubmitted(true);
      toast({
        title: "Trip Request Submitted!",
        description: "We'll contact you within 24 hours with a personalized itinerary.",
      });
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

  if (isSubmitted) {
    return (
      <Layout>
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
      </Layout>
    );
  }

  return (
    <Layout>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" name="fullName" required placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
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
                      <Input id="destination" name="destination" required placeholder="e.g., Kerala, Rajasthan, Kashmir" />
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
                        <Input id="numberOfDays" name="numberOfDays" type="number" placeholder="7" min="1" max="30" />
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

                <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-saffron hover:shadow-glow text-lg py-4 rounded-full font-semibold transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "✨ Creating Your Dream Trip..." : "🚀 Let's Plan My Indian Adventure!"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-3 font-lora">
                  💫 Our travel experts will craft your personalized itinerary within 24 hours
                </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}