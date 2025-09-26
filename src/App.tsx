import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Layout from "@/components/Layout";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const PlanMyTrip = lazy(() => import("./pages/PlanMyTrip"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

const queryClient = new QueryClient();

// Loading component for lazy loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Debug component to test basic rendering
const DebugApp = () => (
  <div style={{
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀 Duniya Rides</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
      React App Loaded Successfully!
    </p>
    <div style={{
      background: 'rgba(255,255,255,0.1)',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center'
    }}>
      <p>✅ Main component rendering</p>
      <p>✅ CSS working</p>
      <p>✅ JavaScript executing</p>
      <p style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
        If you see this, React is working perfectly!
      </p>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    console.log('🚀 App component mounted successfully');
    // Add a visible indicator that React has loaded
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.backgroundColor = 'transparent'; // Remove loading background
      console.log('✅ App background cleared - React takeover complete');
    }
  }, []);

  // STEP 1: Add Router + Layout (but keep simple content)
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Toaster />
          <Sonner />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={
                <Layout>
                  <div style={{
                    minHeight: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <h1 style={{ 
                        fontSize: '3rem', 
                        marginBottom: '20px', 
                        color: '#1f2937',
                        fontWeight: 'bold'
                      }}>
                        🎉 Duniya Rides
                      </h1>
                      <p style={{ 
                        fontSize: '1.5rem', 
                        marginBottom: '30px', 
                        color: '#6b7280' 
                      }}>
                        Layout + Router working!
                      </p>
                      <div style={{
                        background: '#f3f4f6',
                        padding: '20px',
                        borderRadius: '10px',
                        border: '1px solid #e5e7eb'
                      }}>
                        <p style={{ marginBottom: '10px', color: '#374151' }}>✅ Navigation bar loaded</p>
                        <p style={{ marginBottom: '10px', color: '#374151' }}>✅ Footer loaded</p>
                        <p style={{ marginBottom: '10px', color: '#374151' }}>✅ Router working</p>
                        <p style={{ marginBottom: '10px', color: '#374151' }}>✅ Layout component working</p>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '20px' }}>
                          Next: Add Home component
                        </p>
                      </div>
                    </div>
                  </div>
                </Layout>
              } />
            </Routes>
          </Suspense>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
