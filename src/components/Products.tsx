import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Architectural Systems",
      description: "Premium aluminum profiles for windows, doors, and curtain walls with superior thermal performance.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Industrial Components",
      description: "High-strength aluminum parts for machinery, automation systems, and industrial applications.",
      image: "https://images.pexels.com/photos/2086621/pexels-photo-2086621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Transportation Solutions",
      description: "Lightweight aluminum profiles for automotive, aerospace, and marine applications.",
      image: "https://images.pexels.com/photos/3846225/pexels-photo-3846225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Custom Extrusions",
      description: "Tailor-made aluminum extrusions designed to meet your specific requirements and specifications.",
      image: "https://images.pexels.com/photos/1211968/pexels-photo-1211968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
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

  useEffect(() => {
    // Initialize refs array
    slideRefs.current = slideRefs.current.slice(0, products.length);

    // Set up animation for active slide
    slideRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === activeIndex) {
          ref.classList.add('opacity-100', 'translate-x-0');
          ref.classList.remove('opacity-0', 'translate-x-20');
        } else {
          ref.classList.add('opacity-0', 'translate-x-20');
          ref.classList.remove('opacity-100', 'translate-x-0');
        }
      }
    });
  }, [activeIndex, products.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div id="products" className="py-16 md:py-24 bg-gray-50">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Produk Kami</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi berbagai produk aluminium berkualitas tinggi yang dirancang untuk berbagai industri dan aplikasi
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className={`w-full flex-shrink-0 transition-all duration-700 ease-in-out transform ${index === activeIndex ? 'block' : 'hidden'
                    }`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{product.description}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
                        Pelajari Lebih Lanjut
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-800 focus:outline-none transition duration-300 transform -translate-x-1/2 md:translate-x-0"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-blue-600 hover:text-blue-800 focus:outline-none transition duration-300 transform translate-x-1/2 md:translate-x-0"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;