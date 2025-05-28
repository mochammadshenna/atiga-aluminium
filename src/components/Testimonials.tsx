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
      quote: "AluminTech has been our go-to partner for aluminum extrusions for over a decade. Their quality and precision are unmatched in the industry.",
      author: "David Wilson",
      company: "Skyline Architects",
      delay: 100
    },
    {
      quote: "The custom profiles developed by AluminTech enabled us to solve complex design challenges in our latest aerospace project. Their engineering team is exceptional.",
      author: "Sarah Johnson",
      company: "AeroSystems International",
      delay: 300
    },
    {
      quote: "Working with AluminTech has significantly improved our manufacturing efficiency. Their components are consistently high-quality and delivered on time.",
      author: "Michael Chang",
      company: "Precision Dynamics",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Testimonials;