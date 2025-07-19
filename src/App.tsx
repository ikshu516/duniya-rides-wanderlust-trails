import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanMyTrip from "./pages/PlanMyTrip";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import TravelStyles from "./pages/TravelStyles";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan-my-trip" element={<PlanMyTrip />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:destination" element={<DestinationDetail />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:package" element={<PackageDetail />} />
          <Route path="/travel-styles" element={<TravelStyles />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
