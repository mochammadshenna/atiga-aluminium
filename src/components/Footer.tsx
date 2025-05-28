import { ArrowUp, Facebook, Factory, Instagram, Linkedin, Twitter } from 'lucide-react';
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
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Factory size={28} className="text-blue-400 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                A3 Aluminum
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Menciptakan keunggulan dalam pembuatan aluminium sejak 1985,
              menyediakan produk berkualitas untuk industri di seluruh dunia.
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Produk</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Architectural Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Industrial Components</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Transportation Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Custom Extrusions</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Precision Extrusion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Surface Finishing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Quality Assurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Custom Fabrication</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">News & Events</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} A3 Aluminum. Semua hak cipta dilindungi.
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