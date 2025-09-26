import { Card } from "@/components/ui/card";
import { Users, MapPin, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Happy Travelers"
  },
  {
    icon: MapPin,
    number: "100+",
    label: "Destinations"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience"
  },
  {
    icon: Heart,
    number: "99%",
    label: "Customer Satisfaction"
  }
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://picsum.photos/400/400?random=101",
    description: "With 20+ years in tourism, Rajesh founded Duniya Rides to make India accessible to every traveler."
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    image: "https://picsum.photos/400/400?random=102",
    description: "Priya ensures every trip runs smoothly with her attention to detail and customer-first approach."
  },
  {
    name: "Amit Singh",
    role: "Travel Expert",
    image: "https://picsum.photos/400/400?random=103",
    description: "Amit's deep knowledge of India's hidden gems helps create unforgettable travel experiences."
  }
];

const values = [
  {
    title: "Authentic Experiences",
    description: "We believe in showcasing the real India - from bustling markets to serene temples, we help you experience authentic local culture."
  },
  {
    title: "Responsible Tourism",
    description: "Our commitment to sustainable travel ensures that your journey contributes positively to local communities and environments."
  },
  {
    title: "Personalized Service",
    description: "Every traveler is unique, and so is every trip we plan. Our team crafts personalized itineraries that match your interests and budget."
  },
  {
    title: "Safety First",
    description: "Your safety is our priority. We work with trusted local partners and provide 24/7 support throughout your journey."
  }
];

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About Duniya Rides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are passionate travel experts dedicated to showcasing the incredible diversity, 
              rich culture, and breathtaking beauty of India to travelers from around the world.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="p-8 text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, Duniya Rides began as a small travel agency with a big dream - 
                    to share the magic of India with the world. What started as a passion project 
                    has grown into one of India's most trusted travel companies.
                  </p>
                  <p>
                    Our founder, Rajesh Kumar, grew up traveling across India with his family, 
                    discovering hidden gems and forming connections with local communities. 
                    This early exposure to India's diversity sparked his vision to create 
                    meaningful travel experiences that go beyond typical tourist attractions.
                  </p>
                  <p>
                    Today, we've helped over 50,000 travelers discover the beauty of India, 
                    from the snow-capped Himalayas to the tropical beaches of Kerala. 
                    Our team of local experts ensures every journey is authentic, safe, and unforgettable.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/600/400?random=100"
                  alt="Duniya Rides team"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and shape every experience we create
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <Card key={value.title} className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our passionate team of travel experts is dedicated to making your Indian adventure extraordinary
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="p-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              To create transformative travel experiences that connect people with the heart and soul of India, 
              fostering cultural understanding, supporting local communities, and creating memories that last a lifetime. 
              We believe that travel has the power to break down barriers, build bridges, and create a more connected world.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}