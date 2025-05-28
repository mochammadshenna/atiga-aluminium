import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative min-h-screen flex flex-col">
      {/* Main hero section */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          {/* Left side content */}
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div 
              ref={heroRef}
              className="transition-all duration-1000 transform opacity-0 translate-y-10"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Presisi dan
                <span className="block text-accent-primary">
                  Keunggulan
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Menghadirkan solusi aluminium berkualitas tinggi sejak 1985,
                melayani industri di seluruh Indonesia dengan standar internasional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105">
                  Produk Kami
                </button>
                <button className="bg-accent-secondary hover:bg-accent-secondary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105">
                  Hubungi Kami
                </button>
              </div>
            </div>

            {/* Right side image */}
            <div className="relative h-[600px] hidden md:block">
              <img 
                src="https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Saza Aluminum Manufacturing"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} className="text-accent-primary" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-saza-50 to-white pointer-events-none"></div>
    </div>
  );
};

export default Hero;