import { ReactNode } from "react";
import PremiumNavbar from "./PremiumNavbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  console.log('🏗️ Layout rendering with children:', !!children);
  
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumNavbar />
      <main 
        className="flex-1" 
        style={{ 
          minHeight: '400px', 
          background: 'rgba(0,255,0,0.1)', // Temporary debug background
          position: 'relative',
          zIndex: 1
        }}
      >
        {console.log('🎯 Layout: About to render children')}
        {children}
        {console.log('🎯 Layout: Children rendered')}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}