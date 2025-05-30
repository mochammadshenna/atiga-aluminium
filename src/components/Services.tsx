import { Building, DoorClosed, Grid2X2 } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform opacity-0 translate-y-10 hover:-translate-y-2 overflow-hidden group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 group-hover:from-blue-500/10 group-hover:to-blue-600/15 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Decorative corner */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-20 transform group-hover:scale-125 transition-transform duration-300"></div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      title: "Pemasangan Jendela Aluminium",
      description: "Pemasangan jendela aluminium dengan berbagai model dan sistem, dari swing door hingga folding door dengan kualitas terbaik.",
      icon: <Grid2X2 size={32} className="text-white" />,
      delay: 100
    },
    {
      title: "Pemasangan Pintu Aluminium",
      description: "Pemasangan pintu aluminium dengan berbagai model dan sistem, dari swing door hingga folding door dengan desain modern.",
      icon: <DoorClosed size={32} className="text-white" />,
      delay: 200
    },
    {
      title: "Pemasangan Custom Aluminium",
      description: "Pemasangan custom aluminium dengan berbagai model dan sistem sesuai kebutuhan spesifik Anda dengan presisi tinggi.",
      icon: <Building size={32} className="text-white" />,
      delay: 300
    }
  ];

  return (
    <div id="services" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/background-image-layanan-kami.jpg')`,
          filter: 'blur(1px)',
          transform: 'scale(1.05)'
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div
        ref={sectionRef}
        className="relative z-10 container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Kami menyediakan jasa pemasangan aluminium berkualitas yang telah terbukti dan terpercaya selama bertahun-tahun
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;