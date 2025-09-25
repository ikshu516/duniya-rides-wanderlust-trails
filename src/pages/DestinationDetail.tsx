import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Clock, 
  IndianRupee,
  Camera,
  ArrowLeft
} from 'lucide-react';
import { destinationsData } from '@/data/destinationsData';
import { useToast } from '@/hooks/use-toast';
import { setPendingSelection } from '@/lib/lead';

export default function DestinationDetail() {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const destination = destinationsData.find(dest => dest.id === destinationId);

  if (!destination) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Destination Not Found</h1>
            <p className="text-muted-foreground mb-6">The destination you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')}>Return Home</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleBookPackage = (packageId: string, packageName: string) => {
    setSelectedPackage(packageId);
    toast({
      title: "Package Selected!",
      description: `${packageName} package selected. Redirecting to booking...`,
    });
    setTimeout(() => {
      const pkg = destination.packages.find(p => p.id === packageId);
      // Persist the selection to session storage so it survives navigation/refresh
      setPendingSelection({
        destinationId: destination.id,
        destinationName: destination.name,
        packageId,
        packageName: pkg?.name,
        packageDuration: pkg?.duration,
        packageType: pkg?.type,
        packagePrice: pkg ? { min: pkg.price.min, max: pkg.price.max } : undefined,
      });
      navigate('/plan-trip', { 
        state: { 
          // Keep backward compatible keys
          destination: destination.name, 
          packageId,
          // Enriched handoff data for prefill and messaging
          destinationId: destination.id,
          destinationName: destination.name,
          packageName: pkg?.name,
          packageDuration: pkg?.duration,
          packageType: pkg?.type,
          packagePrice: pkg ? { min: pkg.price.min, max: pkg.price.max } : undefined,
        } 
      });
    }, 1500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'heritage': return '🏛️';
      case 'nature': return '🌿';
      case 'adventure': return '🏔️';
      case 'spiritual': return '🙏';
      case 'beach': return '🏖️';
      case 'cultural': return '🎭';
      default: return '📍';
    }
  };

  const getPackageColor = (type: string) => {
    switch (type) {
      case 'budget': return 'bg-green-100 text-green-800 border-green-200';
      case 'premium': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'luxury': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-4 text-white hover:bg-white/20"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white/90">{destination.state}</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{destination.name}</h1>
              <p className="text-xl text-white/90 max-w-3xl">{destination.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-white" />
                  <span className="text-white/90">Best Time: {destination.bestTimeToVisit}</span>
                </div>
                <Badge className="text-white bg-white/20 border-white/30">
                  {getCategoryIcon(destination.category)} {destination.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="attractions" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="attractions">Top Attractions</TabsTrigger>
              <TabsTrigger value="packages">Travel Packages</TabsTrigger>
              <TabsTrigger value="experiences">Special Experiences</TabsTrigger>
              <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
            </TabsList>

            {/* Attractions Tab */}
            <TabsContent value="attractions" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Must-Visit Attractions</h2>
                <p className="text-muted-foreground">Discover the most beautiful places in {destination.name}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.attractions.map((attraction, index) => (
                  <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          if ((img as any).dataset.fallbackApplied) return;
                          img.src = '/placeholder.svg';
                          (img as any).dataset.fallbackApplied = 'true';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white/90 text-foreground">
                          {getCategoryIcon(attraction.category)} {attraction.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{attraction.name}</h3>
                      <p className="text-muted-foreground">{attraction.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Packages Tab */}
            <TabsContent value="packages" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Perfect Package</h2>
                <p className="text-muted-foreground">Carefully crafted itineraries for every budget and preference</p>
                <p className="text-xs text-muted-foreground mt-2">*All prices are per person per night for twin sharing accommodation</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {destination.packages.map((pkg) => (
                  <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${selectedPackage === pkg.id ? 'ring-2 ring-primary' : ''}`}>
                    <div className="absolute top-4 right-4">
                      <Badge className={getPackageColor(pkg.type)}>
                        {pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1)}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="h-4 w-4" />
                          <span>₹{pkg.price.min.toLocaleString()} - ₹{pkg.price.max.toLocaleString()} per person per night</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Inclusions */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Package Includes:</h4>
                        <div className="space-y-2">
                          {pkg.inclusions.map((inclusion, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{inclusion}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Package Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pkg.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Itinerary Preview */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Day-wise Itinerary:</h4>
                        <div className="space-y-3">
                          {pkg.itinerary.slice(0, 3).map((day) => (
                            <div key={day.day} className="border-l-2 border-primary/20 pl-4">
                              <h5 className="font-medium text-foreground text-sm">Day {day.day}: {day.title}</h5>
                              <p className="text-xs text-muted-foreground mt-1">
                                {day.activities.slice(0, 2).join(' • ')}
                                {day.activities.length > 2 && ' & more...'}
                              </p>
                            </div>
                          ))}
                          {pkg.itinerary.length > 3 && (
                            <p className="text-xs text-muted-foreground italic">+ {pkg.itinerary.length - 3} more days...</p>
                          )}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleBookPackage(pkg.id, pkg.name)}
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold py-3 rounded-lg transition-all duration-300"
                        disabled={selectedPackage === pkg.id}
                      >
                        {selectedPackage === pkg.id ? '✓ Selected - Redirecting...' : '🎯 Book This Package'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Experiences Tab */}
            <TabsContent value="experiences" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Special Experiences</h2>
                <p className="text-muted-foreground">Unique activities that make your trip unforgettable</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.specialExperiences.map((experience, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Star className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{experience}</h3>
                    <p className="text-sm text-muted-foreground">Available in our premium and luxury packages</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Photo Gallery</h2>
                <p className="text-muted-foreground">Get inspired by the beauty of {destination.name}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destination.attractions.map((attraction, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold">{attraction.name}</h3>
                        <p className="text-white/80 text-sm">{attraction.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
