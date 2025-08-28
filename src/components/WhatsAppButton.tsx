import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+91 7020425189";
    const message = "Hi! I'm interested in booking a trip with Duniya Rides. Can you help me?";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    // Try to open WhatsApp, fallback to web version
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
      // Fallback to web WhatsApp
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{ backgroundColor: '#25D366' }}
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="left" className="mb-2">
        <p>Book your trip on WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  );
}