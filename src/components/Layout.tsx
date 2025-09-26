import { ReactNode } from "react";
import PremiumNavbar from "./PremiumNavbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumNavbar />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}