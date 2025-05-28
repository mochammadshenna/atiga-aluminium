import { BarChart, CircleDot, Droplets, Factory, Layers, Shield } from 'lucide-react';
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
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform opacity-0 translate-y-10 hover:-translate-y-1"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
      title: "Precision Extrusion",
      description: "Custom aluminum profiles with tight tolerances for complex applications.",
      icon: <Layers size={32} />,
      delay: 100
    },
    {
      title: "Surface Finishing",
      description: "Premium anodizing, powder coating, and polishing services for all aluminum products.",
      icon: <Droplets size={32} />,
      delay: 200
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and inspection to ensure consistent quality and durability.",
      icon: <Shield size={32} />,
      delay: 300
    },
    {
      title: "Custom Fabrication",
      description: "Tailored aluminum components designed to your exact specifications.",
      icon: <Factory size={32} />,
      delay: 400
    },
    {
      title: "Alloy Development",
      description: "Specialized aluminum alloys developed for specific industry applications.",
      icon: <CircleDot size={32} />,
      delay: 500
    },
    {
      title: "Performance Analysis",
      description: "Comprehensive testing to validate performance in real-world conditions.",
      icon: <BarChart size={32} />,
      delay: 600
    }
  ];

  return (
    <div id="services" className="py-16 md:py-24 bg-gray-50">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan solusi pembuatan aluminium berkualitas tinggi dengan presisi dan keunggulan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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