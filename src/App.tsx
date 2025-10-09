import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";

// Direct imports for testing - no lazy loading
import Home from "./pages/Home";
import PlanMyTrip from "./pages/PlanMyTrip";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

const queryClient = new QueryClient();

// Loading component for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  useEffect(() => {
    console.log('🚀 Duniya Rides app loaded successfully');
    // Add a visible indicator that React has loaded
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.backgroundColor = 'transparent'; // Remove loading background
      console.log('✅ App background cleared - React takeover complete');
    }
  }, []);

  // ORIGINAL WEBSITE RESTORED with fixed Layout
  return ( 
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router basename="/duniya-rides-wanderlust-trails">
          <ScrollToTop />
          <Toaster />
          <Sonner />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plan-trip" element={<PlanMyTrip />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:destinationId" element={<DestinationDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
