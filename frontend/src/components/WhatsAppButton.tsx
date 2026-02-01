import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5521995164449";
  const message = encodeURIComponent(
    "Olá! Gostaria de fazer uma encomenda de bolo. 🎂",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-inter font-semibold text-sm">
        Encomendar
      </span>
    </a>
  );
};

export default WhatsAppButton;
