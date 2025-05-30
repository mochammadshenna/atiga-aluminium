import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight, DoorOpen, Eye, Grid3X3, MoveHorizontal, Settings, Sparkles, Square, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { productCategories, products } from '../data/products';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(6); // Show 6 products initially
  const [showLoadMore, setShowLoadMore] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Icon mapping - added DoorOpen for Door icon
  const iconMap = {
    Grid3X3, Square, Door: DoorOpen, MoveHorizontal, Sparkles, Settings
  };

  // Filter products by category
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
    // Reset pagination when category changes
    setVisibleProducts(6);
    setShowLoadMore(true);
  }, [selectedCategory]);

  // Check if load more button should be shown
  useEffect(() => {
    setShowLoadMore(filteredProducts.length > visibleProducts);
  }, [filteredProducts, visibleProducts]);

  // Animation on scroll - faster, no delay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');

          // Animate product cards - faster with no stagger delay
          const cards = entry.target.querySelectorAll('.product-card');
          gsap.fromTo(cards,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.3,
              stagger: 0.05,
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

  // Handle category filter
  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId);

    // Animate filter change - faster
    if (gridRef.current) {
      gsap.fromTo(gridRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          stagger: 0.02,
          ease: "back.out(1.7)"
        }
      );
    }
  };

  // Open image popup
  const openImagePopup = (imageSrc: string) => {
    const productIndex = filteredProducts.findIndex(product => product.images[0] === imageSrc);
    setCurrentProductIndex(productIndex);
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';

    // Animate modal open
    if (modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  // Close image popup
  const closeImagePopup = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setSelectedImage(null);
          document.body.style.overflow = 'auto';
        }
      });
    }
  };

  // Navigate through products in modal
  const navigateProduct = (direction: 'prev' | 'next') => {
    let newIndex = currentProductIndex;

    if (direction === 'next') {
      newIndex = currentProductIndex < filteredProducts.length - 1 ? currentProductIndex + 1 : 0;
    } else {
      newIndex = currentProductIndex > 0 ? currentProductIndex - 1 : filteredProducts.length - 1;
    }

    setCurrentProductIndex(newIndex);
    setSelectedImage(filteredProducts[newIndex].images[0]);
  };

  // WhatsApp function
  const openWhatsApp = () => {
    const phoneNumber = "6289636124857";
    const message = encodeURIComponent("Halo *Pak Uki*, saya tertarik dengan produk custom A3 Aluminium dan ingin konsultasi gratis. Bisa minta informasi lebih lanjut?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Load more products function
  const loadMoreProducts = () => {
    const newVisibleCount = visibleProducts + 6;
    setVisibleProducts(newVisibleCount);

    // Animate new products loading
    setTimeout(() => {
      if (gridRef.current) {
        const newCards = gridRef.current.querySelectorAll('.product-card:nth-child(n+' + (visibleProducts + 1) + ')');
        gsap.fromTo(newCards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      }
    }, 100);
  };

  return (
    <div id="products" className="py-16 md:py-24 bg-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Produk Unggulan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi produk aluminium berkualitas untuk berbagai kebutuhan hunian Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {productCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
              >
                <IconComponent size={18} className="mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Products Grid - Desktop */}
        <div className="hidden md:block">
          <div
            ref={gridRef}
            className="grid grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                onClick={() => openImagePopup(product.images[0])}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Product Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {productCategories.find(cat => cat.id === product.category)?.name}
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={20} className="text-white" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Keunggulan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  {product.specifications && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-800 mb-2">Spesifikasi:</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {product.specifications.material && (
                          <div>Material: {product.specifications.material}</div>
                        )}
                        {product.specifications.thickness && (
                          <div>Ketebalan: {product.specifications.thickness}</div>
                        )}
                        {product.specifications.warranty && (
                          <div>Garansi: {product.specifications.warranty}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Load More Button */}
          {showLoadMore && filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProducts}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lihat Lebih Banyak Produk
              </button>
            </div>
          )}
        </div>

        {/* Products Horizontal Scroll - Mobile */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-2" id="products-container">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-card flex-shrink-0 w-80 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                onClick={() => openImagePopup(product.images[0])}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Product Category Badge */}
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {productCategories.find(cat => cat.id === product.category)?.name}
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={16} className="text-white" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-800 mb-1">Keunggulan:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  {product.specifications && (
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="text-xs font-medium text-gray-800 mb-1">Spesifikasi:</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        {product.specifications.material && (
                          <div>Material: {product.specifications.material}</div>
                        )}
                        {product.specifications.thickness && (
                          <div>Ketebalan: {product.specifications.thickness}</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Scroll Navigation Buttons */}
          <div className="md:hidden flex justify-center mt-6">
            <div className="flex space-x-2">
              <button
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                onClick={() => {
                  const container = document.getElementById('products-container');
                  if (container) {
                    // Calculate card width (320px) + gap (16px) = 336px per card
                    const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
                    container.scrollLeft -= cardWidth;
                  }
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                onClick={() => {
                  const container = document.getElementById('products-container');
                  if (container) {
                    // Calculate card width (320px) + gap (16px) = 336px per card
                    const cardWidth = 320 + 16; // w-80 (320px) + gap-4 (16px)
                    container.scrollLeft += cardWidth;
                  }
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Square size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada produk ditemukan
            </h3>
            <p className="text-gray-500">
              Coba pilih kategori lain atau hubungi kami untuk produk khusus
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Butuh Produk Custom?
              </h3>
              <p className="text-blue-600 mb-8 max-w-3xl mx-auto">
                Kami siap membantu merancang solusi pemasangan aluminium sesuai kebutuhan spesifik Anda.
                Konsultasi gratis dan estimasi harga terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openWhatsApp}
                  className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                {filteredProducts[currentProductIndex]?.name}
              </h3>
              <button
                onClick={closeImagePopup}
                className="p-1 bg-blue-50 hover:bg-blue-200 rounded-full transition-colors duration-300 hover:scale-110"
              >
                <X size={18} className="text-blue-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt={filteredProducts[currentProductIndex]?.name}
                  className="w-full h-auto max-h-96 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateProduct('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>

                <button
                  onClick={() => navigateProduct('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {filteredProducts[currentProductIndex]?.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Keunggulan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {filteredProducts[currentProductIndex]?.features?.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                {filteredProducts[currentProductIndex]?.specifications && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Spesifikasi:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                      {filteredProducts[currentProductIndex]?.specifications?.material && (
                        <div>
                          <span className="font-medium">Material:</span> {filteredProducts[currentProductIndex]?.specifications?.material}
                        </div>
                      )}
                      {filteredProducts[currentProductIndex]?.specifications?.thickness && (
                        <div>
                          <span className="font-medium">Ketebalan:</span> {filteredProducts[currentProductIndex]?.specifications?.thickness}
                        </div>
                      )}
                      {filteredProducts[currentProductIndex]?.specifications?.color && (
                        <div>
                          <span className="font-medium">Warna:</span> {filteredProducts[currentProductIndex]?.specifications?.color?.join(', ')}
                        </div>
                      )}
                      {filteredProducts[currentProductIndex]?.specifications?.warranty && (
                        <div>
                          <span className="font-medium">Garansi:</span> {filteredProducts[currentProductIndex]?.specifications?.warranty}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {currentProductIndex + 1} dari {filteredProducts.length}
              </span>
              {/* <div className="flex space-x-2">
                <button
                  onClick={() => navigateProduct('prev')}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-300"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => navigateProduct('next')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Selanjutnya
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;