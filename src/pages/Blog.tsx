import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const blogPosts = [
  {
    id: "kerala-backwaters-guide",
    title: "Ultimate Guide to Kerala Backwaters: Everything You Need to Know",
    excerpt: "Discover the serene beauty of Kerala's backwaters with our comprehensive guide covering the best routes, houseboats, and hidden gems.",
    image: "photo-1578662996442-48f60103fc96",
    author: "Priya Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Destination Guide",
    tags: ["Kerala", "Backwaters", "Houseboat", "Travel Guide"],
    featured: true
  },
  {
    id: "rajasthan-desert-safari",
    title: "The Magic of Rajasthan: A Desert Safari Adventure",
    excerpt: "Experience the golden dunes of Thar Desert with camel safaris, luxury camps, and unforgettable sunsets in the land of kings.",
    image: "photo-1477316224142-5d3827d8e90f",
    author: "Rohit Mehta",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Adventure",
    tags: ["Rajasthan", "Desert Safari", "Jaisalmer", "Adventure"],
    featured: false
  },
  {
    id: "himalayan-trekking-tips",
    title: "Trekking in the Himalayas: Essential Tips for First-Time Trekkers",
    excerpt: "Planning your first Himalayan trek? Here's everything you need to know about preparation, gear, and safety for mountain adventures.",
    image: "photo-1469041797191-50ace28483c3",
    author: "Amit Singh",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Adventure",
    tags: ["Himalayas", "Trekking", "Adventure", "Safety"],
    featured: false
  },
  {
    id: "goa-beyond-beaches",
    title: "Goa Beyond Beaches: Exploring the Hidden Cultural Gems",
    excerpt: "While Goa is famous for its beaches, discover the rich Portuguese heritage, spice plantations, and vibrant local culture.",
    image: "photo-1512343879784-a960bf40e7f2",
    author: "Maria D'Souza",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Culture",
    tags: ["Goa", "Culture", "Heritage", "Hidden Gems"],
    featured: false
  },
  {
    id: "ayurveda-wellness-kerala",
    title: "Ayurvedic Wellness in Kerala: A Journey to Inner Balance",
    excerpt: "Explore the ancient science of Ayurveda in its birthplace, Kerala, with authentic treatments and wellness retreats.",
    image: "photo-1506905925346-21bda4d32df4",
    author: "Dr. Sunita Nair",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "Wellness",
    tags: ["Ayurveda", "Wellness", "Kerala", "Health"],
    featured: false
  },
  {
    id: "kashmir-skiing-guide",
    title: "Skiing in Kashmir: India's Premier Winter Sports Destination",
    excerpt: "Discover the powdery slopes of Gulmarg and other Kashmir ski destinations in this comprehensive winter sports guide.",
    image: "photo-1500673922987-e212871fec22",
    author: "Vikram Gupta",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Adventure",
    tags: ["Kashmir", "Skiing", "Winter Sports", "Gulmarg"],
    featured: false
  }
];

const categories = ["All", "Destination Guide", "Adventure", "Culture", "Wellness"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Stories & Guides
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover insider tips, destination guides, and inspiring travel stories from across incredible India.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <Badge className="bg-primary text-primary-foreground">Featured Article</Badge>
            </div>
            <Card className="overflow-hidden hover:shadow-warm transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${featuredPost.image}?w=800&h=600&fit=crop`}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="bg-gradient-primary w-fit">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-warm-sand border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-warm transition-all duration-300 hover:scale-105">
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${post.image}?w=400&h=300&fit=crop`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-warm-sand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay Updated with Travel Tips
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter and get the latest travel guides, tips, and destination insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground"
            />
            <Button className="bg-gradient-primary px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}