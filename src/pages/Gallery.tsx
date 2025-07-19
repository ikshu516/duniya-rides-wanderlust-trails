import { useState } from "react";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
    alt: "Goa Beaches",
    category: "Beaches"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=700&fit=crop",
    alt: "Kashmir Mountains",
    category: "Mountains"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&h=500&fit=crop",
    alt: "Rajasthan Palace",
    category: "Heritage"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&h=800&fit=crop",
    alt: "Kerala Backwaters",
    category: "Nature"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559627043-b3c3ac1a88f6?w=500&h=600&fit=crop",
    alt: "Manali Adventure",
    category: "Adventure"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1561361513-2d000314c8e4?w=500&h=700&fit=crop",
    alt: "Jaipur Heritage",
    category: "Heritage"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    alt: "Agra Monument",
    category: "Heritage"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=500&h=800&fit=crop",
    alt: "Himachal Mountains",
    category: "Mountains"
  }
];

const categories = ["All", "Beaches", "Mountains", "Heritage", "Nature", "Adventure"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Travel Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the breathtaking beauty of India through our curated collection of stunning destinations
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-warm"
                    : "bg-card text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="break-inside-avoid overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-300">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                      <p className="text-white/90 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}