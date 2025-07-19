import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock, Users, MapPin, CheckCircle, Calendar, Plane } from "lucide-react";
import Layout from "@/components/Layout";

const packageData: Record<string, any> = {
  "kerala-3-day": {
    name: "Kerala Backwaters Experience",
    subtitle: "Luxury Houseboat & Backwater Cruise",
    duration: "3 Days / 2 Nights",
    price: "₹15,999",
    originalPrice: "₹19,999",
    image: "photo-1578662996442-48f60103fc96",
    rating: 4.8,
    reviews: 124,
    groupSize: "2-8 people",
    destinations: ["Alleppey", "Kumarakom"],
    category: "Relaxation",
    overview: "Experience the tranquil backwaters of Kerala aboard a traditional houseboat. This package includes luxury accommodation, all meals, and guided tours of the enchanting waterways.",
    includes: [
      "2 nights luxury houseboat accommodation",
      "All meals (traditional Kerala cuisine)",
      "Professional guide and crew",
      "Backwater cruise",
      "Village tour",
      "Airport/station transfers",
      "Traditional welcome ceremony"
    ],
    excludes: [
      "Personal expenses",
      "Travel insurance",
      "Alcoholic beverages",
      "Tips and gratuities"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Houseboat Check-in",
        location: "Alleppey",
        activities: [
          "Arrival at Alleppey by 12:00 PM",
          "Traditional welcome with tender coconut",
          "Houseboat check-in and lunch",
          "Afternoon backwater cruise",
          "Visit local village and coconut farms",
          "Dinner on board with traditional Kerala cuisine",
          "Overnight on houseboat"
        ]
      },
      {
        day: 2,
        title: "Backwater Exploration",
        location: "Kumarakom",
        activities: [
          "Early morning bird watching",
          "Breakfast on board",
          "Cruise to Kumarakom backwaters",
          "Visit Kumarakom Bird Sanctuary",
          "Traditional fishing demonstration",
          "Ayurvedic massage (optional)",
          "Sunset cruise with cultural performance",
          "Dinner and overnight on houseboat"
        ]
      },
      {
        day: 3,
        title: "Departure",
        location: "Alleppey",
        activities: [
          "Breakfast on board",
          "Final backwater cruise",
          "Houseboat check-out by 10:00 AM",
          "Visit local spice market",
          "Transfer to Kochi airport/station",
          "Departure"
        ]
      }
    ],
    bestTime: "October to March",
    difficulty: "Easy",
    highlights: [
      "Luxury houseboat accommodation",
      "Traditional Kerala cuisine",
      "Backwater cruising",
      "Bird watching",
      "Village tours",
      "Cultural performances"
    ]
  }
};

export default function PackageDetail() {
  const { package: packageId } = useParams<{ package: string }>();
  const data = packageId ? packageData[packageId] : null;

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Package not found</h1>
            <Button asChild>
              <Link to="/packages">Back to Packages</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const savings = parseInt(data.originalPrice.replace('₹', '').replace(',', '')) - parseInt(data.price.replace('₹', '').replace(',', ''));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={`https://images.unsplash.com/${data.image}?w=1920&h=800&fit=crop`}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-white">
              <Badge className="bg-primary text-primary-foreground mb-2">{data.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.name}</h1>
              <p className="text-xl text-heritage-gold mb-4">{data.subtitle}</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-heritage-gold fill-current" />
                  <span className="font-medium">{data.rating} ({data.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5" />
                  <span>{data.groupSize}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-5 w-5" />
                  <span>{data.destinations.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Package Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {data.overview}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Best Time</div>
                  <div className="text-xs text-muted-foreground">{data.bestTime}</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Group Size</div>
                  <div className="text-xs text-muted-foreground">{data.groupSize}</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Duration</div>
                  <div className="text-xs text-muted-foreground">{data.duration}</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-lg">
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium">Difficulty</div>
                  <div className="text-xs text-muted-foreground">{data.difficulty}</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-4">Package Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {data.itinerary.map((day: any, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">Day {day.day}</Badge>
                          <div>
                            <div className="font-bold">{day.title}</div>
                            <div className="text-sm text-muted-foreground font-normal">{day.location}</div>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {day.activities.map((activity: string, actIndex: number) => (
                          <div key={actIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-forest-green">What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {data.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-forest-green mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">What's Not Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {data.excludes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-5 h-5 border-2 border-destructive rounded-full mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-primary">{data.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{data.originalPrice}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">per person</div>
                  <Badge variant="outline" className="text-forest-green border-forest-green">
                    Save ₹{savings.toLocaleString()}
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{data.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Group Size:</span>
                    <span className="font-medium">{data.groupSize}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Best Time:</span>
                    <span className="font-medium">{data.bestTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-heritage-gold fill-current" />
                      <span className="font-medium">{data.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button asChild className="w-full bg-gradient-primary">
                    <Link to="/plan-my-trip">
                      Book This Package <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Customize Package <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our travel experts are here to help you customize this package or answer any questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Free customization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>24/7 support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Expert local guides</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/contact">
                    Contact Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}