import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1594801001182-99ee8f8d5db9?w=800&h=600&fit=crop",
    alt: "Palolem Beach, Goa",
    category: "Beaches"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1700570036323-b4ceb7137f16?w=800&h=600&fit=crop",
    alt: "Pahalgam, Kashmir",
    category: "Mountains"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1709338573277-c161cbf8702c?w=800&h=600&fit=crop",
    alt: "City Palace, Udaipur",
    category: "Heritage"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1704365159747-1f7b8913044f?w=800&h=600&fit=crop",
    alt: "Alleppey Backwaters, Kerala",
    category: "Nature"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1677820915325-d8ce3184c2a4?w=800&h=600&fit=crop",
    alt: "Solang Valley, Manali",
    category: "Adventure"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?w=800&h=600&fit=crop",
    alt: "Hawa Mahal, Jaipur",
    category: "Heritage"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1681097233063-aa7a941bb688?w=800&h=600&fit=crop",
    alt: "Taj Mahal, Agra",
    category: "Heritage"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1689921489504-48d12b2b7f9c?w=800&h=600&fit=crop",
    alt: "Spiti Valley, Himachal",
    category: "Mountains"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1732946801536-6c19e49a0caf?w=800&h=600&fit=crop",
    alt: "Radhanagar Beach, Andaman",
    category: "Beaches"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1752667842832-dfa273fd1362?w=800&h=600&fit=crop",
    alt: "Ganga Aarti, Varanasi",
    category: "Spiritual"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1681843279178-7f830d2a5d85?w=800&h=600&fit=crop",
    alt: "Pangong Lake, Ladakh",
    category: "Mountains"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1647364147271-90897257f460?w=800&h=600&fit=crop",
    alt: "Khajjiar, Himachal",
    category: "Nature"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1651910030315-aa76f46f30c9?w=800&h=600&fit=crop",
    alt: "Golden Temple, Amritsar",
    category: "Spiritual"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1637075735042-727375ffcb6a?w=800&h=600&fit=crop",
    alt: "Mysore Palace, Karnataka",
    category: "Heritage"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1652120712347-6e7b037325fa?w=800&h=600&fit=crop",
    alt: "Dudhsagar Falls, Goa",
    category: "Nature"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1670923331633-be262e035a9a?w=800&h=600&fit=crop",
    alt: "Rann of Kutch, Gujarat",
    category: "Nature"
  }
];

const categories = ["All", "Beaches", "Mountains", "Heritage", "Nature", "Adventure", "Spiritual"];

interface ImageState {
  loaded: boolean;
  error: boolean;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [imageStates, setImageStates] = useState<Record<number, ImageState>>({});

  useEffect(() => {
    // Initialize all images as loading
    const initialStates = galleryImages.reduce((acc, img) => ({
      ...acc,
      [img.id]: { loaded: false, error: false }
    }), {});
    setImageStates(initialStates);
  }, []);

  const handleImageLoad = (id: number) => {
    setImageStates(prev => ({
      ...prev,
      [id]: { ...prev[id], loaded: true }
    }));
  };

  const handleImageError = (id: number) => {
    setImageStates(prev => ({
      ...prev,
      [id]: { ...prev[id], error: true }
    }));
  };

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => {
              const { loaded = false, error = false } = imageStates[image.id] || {};
              const showSkeleton = !loaded && !error;
              const showError = error;

              return (
                <Card key={image.id} className="overflow-hidden group relative">
                  {showSkeleton && (
                    <Skeleton className="w-full h-64" />
                  )}
                  {showError && (
                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                      <span className="text-muted-foreground">Image not available</span>
                    </div>
                  )}
                  {!showError && (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                      loading="lazy"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{image.alt}</h3>
                    <span className="text-sm text-muted-foreground">{image.category}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}