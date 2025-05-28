import { CircuitBoard, Menu, X } from 'lucide-react';
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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <CircuitBoard size={32} className="text-accent-primary mr-2" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-accent-secondary">
                A3
              </span>
              <span className="text-sm text-saza-600 -mt-1">ALUMINUM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              ['Beranda', 'home'],
              ['Layanan', 'services'],
              ['Tentang', 'about'],
              ['Produk', 'products'],
              ['Kontak', 'contact']
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`font-medium transition duration-300 hover:text-accent-primary ${isScrolled ? 'text-gray-800' : 'text-gray-800'
                  }`}
              >
                {label}
              </a>
            ))}
            <button className="bg-accent-primary text-white px-6 py-3 rounded-full hover:bg-accent-primary/90 transition duration-300 transform hover:scale-105">
              Dapatkan Penawaran
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-800 hover:text-accent-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
            }`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              ['Beranda', 'home'],
              ['Layanan', 'services'],
              ['Tentang', 'about'],
              ['Produk', 'products'],
              ['Kontak', 'contact']
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-800 hover:text-accent-primary font-medium py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <button className="bg-accent-primary text-white px-6 py-3 rounded-full hover:bg-accent-primary/90 transition duration-300 w-full">
              Dapatkan Penawaran
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;