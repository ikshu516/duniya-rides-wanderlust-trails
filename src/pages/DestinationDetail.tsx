import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Star, Calendar, Users, Camera } from "lucide-react";
import Layout from "@/components/Layout";

const destinationData: Record<string, any> = {
  kerala: {
    name: "Kerala",
    subtitle: "God's Own Country",
    heroImage: "photo-1578662996442-48f60103fc96",
    rating: 4.8,
    duration: "5-10 days",
    bestTime: "October to March",
    overview: "Kerala, known as 'God's Own Country', is a tropical paradise in South India famous for its serene backwaters, lush hill stations, exotic wildlife, and Ayurvedic treatments. Experience the unique culture, delicious cuisine, and warm hospitality.",
    highlights: [
      "Cruise through tranquil backwaters in traditional houseboats",
      "Visit tea and spice plantations in Munnar",
      "Relax with authentic Ayurvedic treatments",
      "Explore wildlife in Periyar National Park",
      "Experience traditional Kathakali dance performances"
    ],
    gallery: [
      "photo-1578662996442-48f60103fc96",
      "photo-1506905925346-21bda4d32df4",
      "photo-1500673922987-e212871fec22"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kochi",
        activities: ["Airport pickup", "Fort Kochi sightseeing", "Chinese fishing nets", "Overnight in heritage hotel"]
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        activities: ["Drive to Munnar (4 hours)", "Tea plantation visit", "Mattupetty Dam", "Evening at leisure"]
      },
      {
        day: 3,
        title: "Munnar Exploration",
        activities: ["Eravikulam National Park", "Tea Museum", "Spice gardens", "Echo Point visit"]
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        activities: ["Drive to Alleppey", "Houseboat check-in", "Backwater cruise", "Traditional Kerala dinner"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Morning backwater cruise", "Check-out", "Transfer to Kochi airport", "Departure"]
      }
    ],
    activities: [
      "Houseboat cruising",
      "Ayurvedic spa treatments",
      "Wildlife safari",
      "Tea plantation tours",
      "Cultural performances",
      "Spice garden visits"
    ]
  },
  goa: {
    name: "Goa",
    subtitle: "Pearl of the Orient",
    heroImage: "photo-1512343879784-a960bf40e7f2",
    rating: 4.6,
    duration: "3-7 days",
    bestTime: "November to February",
    overview: "Goa is India's beach paradise, known for its golden sandy beaches, Portuguese colonial heritage, vibrant nightlife, and delicious seafood. Perfect for relaxation and adventure.",
    highlights: [
      "Relax on pristine beaches like Baga and Calangute",
      "Explore Portuguese churches and architecture",
      "Enjoy water sports and beach activities",
      "Experience vibrant nightlife and beach parties",
      "Savor authentic Goan cuisine and seafood"
    ],
    gallery: [
      "photo-1512343879784-a960bf40e7f2",
      "photo-1469041797191-50ace28483c3",
      "photo-1477316224142-5d3827d8e90f"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        activities: ["Airport pickup", "Check-in to beach resort", "Calangute Beach", "Welcome dinner"]
      },
      {
        day: 2,
        title: "North Goa Tour",
        activities: ["Baga Beach", "Fort Aguada", "Anjuna Beach", "Saturday Night Market"]
      },
      {
        day: 3,
        title: "Old Goa Heritage",
        activities: ["Basilica of Bom Jesus", "Se Cathedral", "Spice plantation tour", "River cruise"]
      },
      {
        day: 4,
        title: "Departure",
        activities: ["Beach relaxation", "Shopping", "Airport transfer", "Departure"]
      }
    ],
    activities: [
      "Beach relaxation",
      "Water sports",
      "Heritage tours",
      "Nightlife",
      "Spice plantation visits",
      "River cruises"
    ]
  }
};

export default function DestinationDetail() {
  const { destination } = useParams<{ destination: string }>();
  const data = destination ? destinationData[destination] : null;

  if (!data) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
            <Button asChild>
              <Link to="/destinations">Back to Destinations</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={`https://images.unsplash.com/${data.heroImage}?w=1920&h=1080&fit=crop`}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{data.name}</h1>
              <p className="text-xl md:text-2xl text-heritage-gold mb-4">{data.subtitle}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-heritage-gold fill-current" />
                  <span className="font-medium">{data.rating} rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-5 w-5" />
                  <span>Best: {data.bestTime}</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {data.overview}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Highlights</h3>
              <ul className="space-y-3">
                {data.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.gallery.map((image: string, index: number) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={`https://images.unsplash.com/${image}?w=400&h=300&fit=crop`}
                      alt={`${data.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sample Itinerary</h2>
              <div className="space-y-6">
                {data.itinerary.map((day: any, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Badge variant="outline">Day {day.day}</Badge>
                        <span>{day.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {day.activities.map((activity: string, actIndex: number) => (
                          <li key={actIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Popular Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.activities.map((activity: string, index: number) => (
                  <div key={index} className="bg-gradient-card rounded-lg p-4 text-center">
                    <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Book This Trip</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{data.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Best Time:</span>
                    <span className="font-medium">{data.bestTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-heritage-gold fill-current" />
                      <span className="font-medium">{data.rating}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <Button asChild className="w-full bg-gradient-primary mb-3">
                      <Link to="/plan-my-trip">
                        Plan Custom Trip <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/packages">
                        View Packages <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Need Help Planning?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak with our travel experts who know {data.name} inside out.
                </p>
                <Button asChild variant="outline" className="w-full">
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