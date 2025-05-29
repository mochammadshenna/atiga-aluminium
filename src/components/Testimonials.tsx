import { Quote } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, company, delay }) => {
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
      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform opacity-0 translate-y-10"
    >
      <Quote size={32} className="text-blue-200 mb-4" />
      <p className="text-gray-600 italic mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      quote: "ATIGA Aluminium telah menjadi mitra utama kami untuk aluminium selama lebih dari 10 tahun. Kualitas dan ketepatan yang sangat baik.",
      author: "Pak Dwi",
      company: "Rumah Pribadi",
      delay: 100
    },
    {
      quote: "Profil kustom yang dihasilkan oleh ATIGA Aluminium membantu menyelesaikan tantangan desain rumah pribadi kami. Timnya sangat luar biasa.",
      author: "Pak Andi",
      company: "Rumah Pribadi",
      delay: 300
    },
    {
      quote: "Bekerja dengan ATIGA Aluminium memberikan pelayanan yang sangat baik. Kami sangat puas dengan kualitas dan hasil yang diberikan.",
      author: "Pak Budi",
      company: "Rumah Pribadi",
      delay: 500
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-100">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimoni Klien</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat apa yang klien kami katakan tentang pengalaman mereka bekerja dengan A3 Aluminum
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              delay={testimonial.delay}
            />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500"
              >
                <Quote size={32} className="text-blue-200 mb-4" />
                <p className="text-gray-600 italic mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">← Geser untuk melihat testimoni lainnya →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;