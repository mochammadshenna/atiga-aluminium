import { Menu, SquareAsterisk, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "6289636124857";
    const message = encodeURIComponent("Halo, saya tertarik dengan produk A3 Aluminium dan ingin konsultasi gratis. Bisa minta informasi lebih lanjut?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const navigationItems = [
    ['Beranda', 'home'],
    ['Layanan', 'services'],
    ['Produk', 'products'],
    ['Galeri', 'gallery'],
    ['Tentang', 'about'],
    ['Kontak', 'contact']
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3' : 'bg-white/80 backdrop-blur-sm py-3 md:py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg mr-2 md:mr-3">
              <SquareAsterisk size={24} className="md:w-7 md:h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                A3
              </span>
              <span className="text-xs text-blue-600 font-medium -mt-1 tracking-wider">
                ALUMINIUM
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${isScrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={openWhatsApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              Konsultasi Gratis
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-800 hover:text-blue-600 transition-colors p-2 touch-friendly"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
            }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {navigationItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-700 hover:text-blue-600 font-medium py-3 px-2 transition-colors border-b border-gray-100 touch-friendly"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <button
                onClick={() => {
                  openWhatsApp();
                  setIsOpen(false);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-medium transition-all duration-300 touch-friendly"
              >
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;