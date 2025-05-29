import { MessageCircle, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "6289636124857",
  message = "Halo, saya tertarik dengan produk A3 Aluminium. Bisa minta informasi lebih lanjut?"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show WhatsApp button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Direct WhatsApp function for main button
  const directWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden transform transition-all duration-300 ease-out">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-semibold">A3 Aluminium</h3>
                <p className="text-sm opacity-90">Customer Service</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700">
                  👋 Halo! Selamat datang di A3 Aluminium
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  Kami siap membantu Anda dengan informasi produk jendela, pintu, dan kaca aluminium berkualitas tinggi.
                </p>
              </div>
            </div>

            <button
              onClick={directWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Mulai Chat WhatsApp</span>
            </button>

            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                Biasanya membalas dalam beberapa menit
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={directWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={24} />

        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-black/80 text-white px-3 py-2 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          <div className="flex items-center space-x-2">
            <MessageCircle size={12} />
            <span>Chat via WhatsApp</span>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </button>

      {/* Pulse Animation */}
      <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-30"></div>
    </div>
  );
};

export default FloatingWhatsApp;