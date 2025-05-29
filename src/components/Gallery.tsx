import { gsap } from 'gsap';
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, MapPin, User, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { galleryImages, GalleryItem } from '../data/gallery';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');

          // Animate gallery cards
          const cards = entry.target.querySelectorAll('.gallery-card');
          gsap.fromTo(cards,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out"
            }
          );
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (galleryRef.current && !isPaused) {
        autoScrollRef.current = setInterval(() => {
          if (galleryRef.current) {
            const scrollWidth = galleryRef.current.scrollWidth;
            const clientWidth = galleryRef.current.clientWidth;
            const currentScroll = galleryRef.current.scrollLeft;

            // Reset to start if we've reached the end
            if (currentScroll >= scrollWidth - clientWidth - 10) {
              galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
              // Scroll by one card width (approximately 320px + gap)
              galleryRef.current.scrollBy({ left: 350, behavior: 'smooth' });
            }
          }
        }, 3000); // 3 seconds interval
      }
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    startAutoScroll();

    return () => stopAutoScroll();
  }, [isPaused]);

  // Open modal with selected image
  const openModal = (image: GalleryItem) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden';
    setIsPaused(true);

    // Animate modal open
    if (modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  // Close modal
  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedImage(null);
          document.body.style.overflow = 'auto';
          setIsPaused(false);
        }
      });
    }
  };

  // Navigate through images in modal
  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex = currentImageIndex;

    if (direction === 'next') {
      newIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
    } else {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Manual scroll controls
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 350;
      const currentScroll = galleryRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      setIsPaused(true);

      gsap.to(galleryRef.current, {
        scrollLeft: targetScroll,
        duration: 0.2,
        ease: "power2.out",
        onComplete: () => {
          // Resume auto-scroll after manual interaction
          setTimeout(() => setIsPaused(false), 5000);
        }
      });
    }
  };

  return (
    <div id="gallery" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/background-image-gallery.jpg')",
          filter: 'blur(2px)',
          transform: 'scale(1.1)', // Slight scale to prevent blur edge artifacts
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Galeri Proyek
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat koleksi proyek-proyek terbaik kami dalam pemasangan jendela, pintu,
            dan sistem aluminium berkualitas tinggi untuk berbagai kebutuhan
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={() => scrollGallery('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 hover:bg-white transition-all duration-300 transform hover:scale-110"
            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollGallery('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 hover:bg-white transition-all duration-300 transform hover:scale-110"
            style={{ transform: 'translateY(-50%) translateX(50%)' }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Gallery Grid - Auto Scrolling */}
          <div
            ref={galleryRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="gallery-card flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-500 hover:shadow-2xl"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

                  {/* Text overlay on image - only shown on hover */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>

                    {/* Additional info */}
                    <div className="flex items-center justify-between mt-2 text-xs">
                      {image.location && (
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1" />
                          <span>{image.location}</span>
                        </div>
                      )}
                      {image.year && (
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          <span>{image.year}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>

                {/* Minimal card content - no text, just clean design */}
                <div className="p-2">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-center mt-6">
          <div className="flex space-x-2">
            <button
              onClick={() => scrollGallery('left')}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollGallery('right')}
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Auto-scroll indicator */}
        {/* <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Galeri berputar otomatis • Hover untuk menghentikan
          </p>
        </div> */}
      </div>

      {/* Modal for Image Detail */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedImage.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  {selectedImage.location && (
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2 text-blue-600" />
                      <div>
                        <span className="font-medium">Lokasi:</span>
                        <br />
                        <span>{selectedImage.location}</span>
                      </div>
                    </div>
                  )}

                  {selectedImage.year && (
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2 text-blue-600" />
                      <div>
                        <span className="font-medium">Tahun:</span>
                        <br />
                        <span>{selectedImage.year}</span>
                      </div>
                    </div>
                  )}

                  {selectedImage.client && (
                    <div className="flex items-center text-gray-600">
                      <User size={16} className="mr-2 text-blue-600" />
                      <div>
                        <span className="font-medium">Klien:</span>
                        <br />
                        <span>{selectedImage.client}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {currentImageIndex + 1} dari {galleryImages.length}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigateImage('prev')}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;