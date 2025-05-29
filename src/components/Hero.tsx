import { gsap } from 'gsap';
import { ArrowRight, Award, ChevronDown, Phone, Shield } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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

    // Parallax effect for background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: scrolled * 0.5,
          duration: 0.1,
          ease: "none"
        });
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
    const message = encodeURIComponent("Halo, saya tertarik dengan produk A3 Aluminium dan ingin konsultasi gratis. Bisa minta informasi lebih lanjut?");
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

      {/* Main hero section */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="w-full">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div ref={heroRef} className="opacity-0 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award size={16} className="mr-2" />
                18+ Tahun Pengalaman Terpercaya
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Solusi
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    {" "}Aluminium{" "}
                  </span>
                  Terdepan
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  A3 Aluminium menghadirkan jendela, pintu, dan kaca tempered berkualitas tinggi
                  dengan teknologi modern dan desain yang elegan untuk kebutuhan Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToGallery}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Lihat Galeri Proyek
                  <ArrowRight size={20} className="ml-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={openWhatsApp}
                  className="group bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Konsultasi Gratis
                  <Phone size={20} className="ml-4 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right side image - Improved landscape layout */}
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Hero Image with proper landscape fitting */}
                <img
                  ref={imageRef}
                  src="/images/hero-image.jpg"
                  alt="A3 Aluminium - Produk Berkualitas Tinggi"
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-800"
                  style={{ objectPosition: 'center center' }}
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

                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent"></div>

                {/* Quality Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Berkualitas Tinggi</div>
                      <div className="text-gray-600 text-sm">Garansi Resmi</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-10"
        onClick={scrollToNextSection}
      >
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300">
          <ChevronDown size={24} className="text-blue-600" />
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden mt-8 px-4">
        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/hero-image.jpg"
            alt="A3 Aluminium Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;