import { ArrowRight, BookmarkCheck, CheckCircle, Target, Wrench } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);

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

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg transition-all duration-700 transform opacity-0 translate-y-10 hover:bg-gray-100"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
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

  const features = [
    {
      title: "Kualitas Terjamin",
      description: "Menggunakan material aluminium premium dengan standar kualitas internasional untuk hasil yang tahan lama.",
      icon: <BookmarkCheck size={24} />,
      delay: 100
    },
    // {
    //   title: "Teknologi Modern",
    //   description: "Dilengkapi dengan mesin-mesin modern dan teknologi terkini untuk presisi yang optimal.",
    //   icon: <Lightbulb size={24} />,
    //   delay: 200
    // },
    {
      title: "Pengalaman 18+ Tahun",
      description: "Dengan pengalaman 18+ tahun dalam industri aluminium memberikan keahlian yang tidak terbantahkan.",
      icon: <Target size={24} />,
      delay: 300
    },
    {
      title: "Solusi Custom",
      description: "Menyediakan solusi custom sesuai kebutuhan spesifik dengan desain yang inovatif.",
      icon: <Wrench size={24} />,
      delay: 500
    },
    {
      title: "Jaminan Kepuasan",
      description: "Komitmen penuh untuk kepuasan pelanggan dengan layanan after-sales yang responsif.",
      icon: <CheckCircle size={24} />,
      delay: 400
    },
    // {
    //   title: "Keamanan Terpercaya",
    //   description: "Produk telah teruji keamanan dan memiliki sertifikasi standar nasional dan internasional.",
    //   icon: <Shield size={24} />,
    //   delay: 600
    // }
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
          <p className="text-xl text-gray-600 max-w-6xl mx-auto">
            Menghadirkan solusi aluminium terbaik dengan dedikasi penuh untuk kualitas dan kepuasan pelanggan
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div
            ref={contentRef}
            className="lg:w-1/2 transition-all duration-1000 opacity-0"
            style={{
              animation: 'fadeIn 1s ease-in-out',
              animationFillMode: 'forwards'
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Keunggulan dalam Pembuatan Aluminium</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Berpengalaman sejak tahun 2007, <b>ATIGA Aluminium</b> telah menyediakan jasa pemasangan aluminium berkualitas tinggi dan produk standar untuk berbagai kebutuhan hunian dan komersial.
              Komitmen kami untuk kualitas, inovasi, dan kepuasan pelanggan telah membuat kami mitra yang dipercaya bagi pelanggan.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dengan tenaga kerja profesional yang terampil, kami menyediakan solusi aluminium presisi yang memenuhi kebutuhan yang paling menantang.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dedikasi kami untuk keunggulan telah membawa kami ke reputasi untuk keandalan, inovasi, dan pelayanan pelanggan yang luar biasa.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-102">
              <img
                src="/images/tentang-kami-image.jpg"
                alt="ATIGA Aluminium - Fasilitas Produksi Modern"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <br />
        {/* Why Choose Us Section */}
        <div className="mt-16">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Mengapa Memilih ATIGA Aluminium?</h3>
            <p className="text-gray-600 max-w-6xl mx-auto">
              Keunggulan dan komitmen kami yang menjadikan ATIGA Aluminium pilihan terbaik untuk kebutuhan Anda
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={feature.delay}
              />
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2" id="about-container">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-lg transition-all duration-700 transform hover:bg-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 mb-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full" onClick={() => {
                  const container = document.getElementById('about-container');
                  if (container) {
                    container.scrollLeft += 100;
                  }
                }}>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;