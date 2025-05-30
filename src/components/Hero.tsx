import { gsap } from 'gsap';
import { ArrowRight, Award, ChevronDown, Phone, ShieldCheck } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial animation
    tl.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      );

    // Parallax effect for background and scroll indicator logic
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      // Parallax for image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.5,
          duration: 0.1,
          ease: "none"
        });
      }

      // Hide scroll indicator when reaching buttons area
      if (buttonsRef.current) {
        const buttonsRect = buttonsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hide when buttons area reaches middle of screen
        if (buttonsRect.top <= windowHeight * 0.6) {
          setShowScrollIndicator(false);
        } else {
          setShowScrollIndicator(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "6289636124857";
    const message = encodeURIComponent("Halo *Pak Uki*, saya tertarik untuk pemasangan Aluminium dan ingin konsultasi lebih lanjut. Terima kasih.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const backgroundPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>

      {/* Main hero section - Added proper top padding for navbar */}
      <div className="flex-1 flex items-center relative z-10 pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="w-full">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
            {/* Left side content */}
            <div ref={heroRef} className="opacity-0 space-y-6 md:space-y-8 order-2 md:order-1">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                <Award size={14} className="mr-2 md:w-4 md:h-4" />
                18+ Tahun Pengalaman Terpercaya
              </div>

              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Solusi Pemasangan
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {" "}Aluminium{" "}
                  </span>
                  Berkualitas
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                  ATIGA Aluminium menyediakan jasa pemasangan jendela, pintu, dan kaca berkualitas tinggi
                  dengan model unggulan, modern dan desain yang elegan.
                </p>
              </div>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={scrollToGallery}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Lihat Galeri Proyek
                  <ArrowRight size={18} className="ml-3 md:ml-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={openWhatsApp}
                  className="group bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Konsultasi Gratis
                  <Phone size={18} className="ml-3 md:ml-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right side image - Landscape frame for desktop */}
            <div className="relative order-1 md:order-2">
              <div className="relative h-[280px] md:h-[450px] lg:h-[500px] w-full md:w-[600px] lg:w-[700px] rounded-2xl overflow-hidden shadow-xl mx-auto">
                {/* Hero Image with landscape frame fitting */}
                <img
                  ref={imageRef}
                  src="/images/hero-image.jpg"
                  alt="A3 Aluminium - Produk Berkualitas Tinggi"
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-800"
                  style={{ objectPosition: 'right center' }}
                  onLoad={handleImageLoad}
                  onError={() => console.log('Image failed to load')}
                />

                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-blue-600 text-center">
                      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-sm">Memuat gambar...</p>
                    </div>
                  </div>
                )}

                {/* Quality Badge - positioned for landscape frame */}
                <div className="absolute top-2 right-4 md:top-6 md:right-6 bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ShieldCheck size={16} className="md:w-5 md:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">Produk Berkualitas</div>
                      <div className="text-gray-600 text-xs md:text-sm">Desain Unggulan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements for landscape frame */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for desktop only */}
      <div
        className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
        onClick={scrollToNextSection}
      >
        <div className="bg-blue-300/45 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-blue-350/45 active:bg-blue-400 transition-all duration-300 border-2 border-white/30 hover:border-white/50">
          <ChevronDown size={24} className="text-blue-700 drop-shadow-sm" />
        </div>
      </div>

      {/* Scroll indicator - Smoothly auto-hides when reaching buttons */}
      <div
        className="absolute md:hidden cursor-pointer z-20 transition-all duration-500 ease-out"
        onClick={scrollToNextSection}
        style={{
          top: '70%',
          left: '45%',
          transform: `translate(-50%, -50%) ${showScrollIndicator ? 'scale(1)' : 'scale(0.8)'}`,
          opacity: showScrollIndicator ? 1 : 0,
          pointerEvents: showScrollIndicator ? 'auto' : 'none',
          animation: showScrollIndicator ? 'bounce 2s infinite, pulse 3s infinite' : 'none'
        }}
      >
        <div className="bg-blue-300/45 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-blue-350/45 active:bg-blue-400 transition-all duration-300 border-2 border-white/30 hover:border-white/50">
          <ChevronDown size={20} className="text-blue-700 drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
};

export default Hero;