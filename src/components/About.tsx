import { Award, Globe, ThumbsUp, Users } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const StatCard: React.FC<StatProps> = ({ value, label, icon, delay }) => {
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={statRef}
      className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-700 transform opacity-0 scale-95"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-1">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: "35+",
      label: "Years Experience",
      icon: <Award size={24} />,
      delay: 100
    },
    {
      value: "500+",
      label: "Global Clients",
      icon: <Globe size={24} />,
      delay: 200
    },
    {
      value: "150+",
      label: "Team Members",
      icon: <Users size={24} />,
      delay: 300
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <ThumbsUp size={24} />,
      delay: 400
    }
  ];

  return (
    <div id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="text-center mb-16 transition-opacity duration-1000 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div
            ref={contentRef}
            className="lg:w-1/2 transition-opacity duration-1000 delay-300 opacity-0"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Keunggulan dalam Pembuatan Aluminium</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Didirikan pada tahun 1985, A3 Aluminum telah menjadi pemimpin dalam pembuatan aluminium selama lebih dari tiga dekade.
              Komitmen kami untuk kualitas, inovasi, dan kepuasan pelanggan telah membuat kami mitra yang dipercaya bagi industri di seluruh dunia.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dengan fasilitas terbaru dan tim profesional yang terampil, kami menyediakan solusi aluminium presisi yang memenuhi kebutuhan yang paling menantang. Dari profil standar hingga desain kustom yang kompleks,
              kami menyediakan layanan komprehensif yang mencakup seluruh proses produksi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dedikasi kami untuk keunggulan telah membawa kami kereputasi untuk keandalan, inovasi, dan pelayanan pelanggan yang luar biasa. Kami bangga dengan kemampuan kami untuk mengubah visi pelanggan menjadi kenyataan, membuat produk aluminium yang melebihi ekspektasi dalam hal kualitas, performa, dan ketahanan.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-102">
              <img
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Aluminum Manufacturing Facility"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;