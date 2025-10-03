import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Mike Johnson",
    location: "USA",
    trip: "Kerala Backwaters & Goa Beach",
    duration: "10 days",
    rating: 5,
    image: "photo-1569913486515-b74bf7751574",
    review: "Our trip to Kerala and Goa was absolutely magical! The houseboat experience in Alleppey was like a dream, and the beaches in Goa were pristine. Duniya Rides took care of every detail - from the comfortable accommodations to the knowledgeable local guides. We felt safe and well-cared for throughout our journey.",
    highlight: "The houseboat cruise through Kerala's backwaters was the highlight of our entire India trip!",
    date: "September 2025"
  },
  {
    id: 2,
    name: "Emma Thompson",
    location: "Australia",
    trip: "Golden Triangle Heritage Tour",
    duration: "7 days",
    rating: 5,
    image: "photo-1494790108755-2616c55b1389",
    review: "As a solo female traveler, I was initially nervous about visiting India. But Duniya Rides made me feel completely safe and comfortable. The Golden Triangle tour was perfectly organized - the Taj Mahal at sunrise was breathtaking, and exploring the palaces of Jaipur felt like stepping into a fairy tale.",
    highlight: "The sunrise visit to Taj Mahal was absolutely breathtaking - a moment I'll treasure forever.",
    date: "August 2025"
  },
  {
    id: 3,
    name: "The Rodriguez Family",
    location: "Spain",
    trip: "Rajasthan Cultural Experience",
    duration: "12 days",
    rating: 5,
    image: "photo-1511895426328-dc8714191300",
    review: "Traveling with our teenage kids, we needed a tour that would keep everyone engaged. Duniya Rides delivered beyond our expectations! The camel safari in Jaisalmer, staying in heritage hotels, and experiencing Rajasthani culture was incredible. Our kids are still talking about the puppet shows and folk dances.",
    highlight: "The camel safari in the Thar Desert and staying under the stars was an unforgettable family adventure.",
    date: "July 2025"
  },
  {
    id: 4,
    name: "David & Jennifer Kim",
    location: "Canada",
    trip: "Kashmir Valley Special",
    duration: "8 days",
    rating: 5,
    image: "photo-1492562080023-ab3db95bfbce",
    review: "Kashmir truly is paradise on earth! The Dal Lake houseboat experience, the beautiful Mughal gardens, and the snow-capped mountains created the perfect romantic getaway for our anniversary. Every meal was delicious, and our guide Raj was incredibly knowledgeable about the region's history and culture.",
    highlight: "Staying in a traditional houseboat on Dal Lake with mountain views was pure romance.",
    date: "June 2025"
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "Singapore",
    trip: "Spiritual Journey - Rishikesh & Varanasi",
    duration: "6 days",
    rating: 5,
    image: "photo-1488426862026-3ee34a7d66df",
    review: "This spiritual journey transformed my perspective on life. The yoga sessions by the Ganges in Rishikesh, the evening aarti in Varanasi, and the meditation retreats provided exactly the peace and clarity I was seeking. The arrangements were thoughtful and respectful of the sacred nature of these places.",
    highlight: "Witnessing the Ganga Aarti ceremony in Varanasi was a deeply moving spiritual experience.",
    date: "May 2025"
  },
  {
    id: 6,
    name: "Marcus & Sofia Weber",
    location: "Germany",
    trip: "Himalayan Adventure Trek",
    duration: "14 days",
    rating: 5,
    image: "photo-1507003211169-0a1dd7228f2d",
    review: "The Himalayan trek exceeded all our expectations! The organization was flawless - from the experienced mountain guides to the quality camping equipment. The views of the snow-capped peaks were absolutely stunning, and the local hospitality in the mountain villages was heartwarming. Highly recommended for adventure enthusiasts!",
    highlight: "Reaching the summit and seeing the Himalayan peaks at sunrise was absolutely magnificent.",
    date: "April 2025"
  }
];

const stats = [
  { number: "500+", label: "Happy Travelers" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "98%", label: "Would Recommend" },
  { number: "50+", label: "Countries Served" }
];

export default function Testimonials() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Travelers Say
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Real stories from real travelers who have experienced the magic of India with Duniya Rides.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-warm-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-warm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-heritage-gold fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Traveler Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={`https://images.unsplash.com/${testimonial.image}?w=150&h=150&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trip Info */}
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {testimonial.trip}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{testimonial.duration} • {testimonial.date}</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                    {testimonial.review}
                  </p>

                  {/* Highlight */}
                  <div className="bg-primary/5 border-l-4 border-primary p-3 mb-4">
                    <p className="text-sm font-medium text-foreground italic">
                      "{testimonial.highlight}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Reviews Platforms */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted Across Platforms
            </h2>
            <p className="text-muted-foreground">
              Find more reviews and ratings on these popular travel platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground mb-2">TripAdvisor</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-heritage-gold fill-current" />
                ))}
              </div>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground mb-2">Google Reviews</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-heritage-gold fill-current" />
                ))}
              </div>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground mb-2">Trustpilot</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-heritage-gold fill-current" />
                ))}
              </div>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300">
              <div className="text-2xl font-bold text-primary mb-2">4.7/5</div>
              <div className="text-sm text-muted-foreground mb-2">Facebook</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-heritage-gold fill-current" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of satisfied travelers who have discovered the magic of India with us.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="bg-white text-amber-700 border-2 border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            <Link to="/plan-my-trip">
              Start Planning Your Trip <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}