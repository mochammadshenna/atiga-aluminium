import { ArrowUp, Facebook, Instagram, Linkedin, SquareAsterisk, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-12 md:mb-0 md:w-1/2 md:pr-12">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <SquareAsterisk size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  A3
                </span>
                <span className="text-xs text-blue-400 font-medium -mt-1 tracking-wider">
                  ALUMINIUM
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed whitespace-pre-wrap">
              Memberikan pelayanan terbaik dengan produk unggul dan berkualitas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Produk</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Jendela Aluminium</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Pintu Aluminium</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Jendela Sliding</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Kaca Tempered</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition duration-300">Solusi Custom</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Layanan</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Pemasangan Jendela</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Pemasangan Pintu</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Pemasangan Custom</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">Tentang Kami</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ATIGA Aluminium. Semua hak cipta dilindungi.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Syarat dan Ketentuan
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition duration-300">
              Peta Situs
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition duration-300 mt-4 md:mt-0"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;