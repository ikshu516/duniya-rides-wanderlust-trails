import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { openWhatsAppWithText } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in booking a trip with Duniya Rides. Can you help me?");
    openWhatsAppWithText(message);
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
