import { Mail, Map, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
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

  const latitude = -6.425802124247959;
  const longitude = 106.82533393068653;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15864.8!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid`;

  return (
    <div id="contact" className="py-16 md:py-24 bg-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transition-opacity duration-1000 opacity-0"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          {/* <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div> */}
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi tim kami untuk membahas kebutuhan pembuatan aluminium Anda
          </p> */}
        </div>

        {/* Desktop Layout - Contact Info Above Map */}
        <div className="hidden md:block relative">
          {/* Background Map Container */}
          <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi ATIGA Aluminium"
              className="w-full h-full filter brightness-90"
            ></iframe>
          </div>

          {/* Contact Information Card - Floating Above Map */}
          <div className="absolute top-8 left-8 right-8 md:left-8 md:right-auto md:max-w-lg z-10">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 h-[520px] flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">Informasi Kontak</h3>

                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="bg-blue-900 p-3 rounded-xl text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Veronica Residence 2<br />
                        Jl. Mandor Dami 3 No.11b<br />
                        Kalimulya, Depok<br />
                        Jawa Barat 17530
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-green-600 p-3 rounded-xl text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                      <p className="text-gray-600 text-sm">+62 896 3612 4857 - <b className="text-blue-600">Uki</b></p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-purple-600 p-3 rounded-xl text-white mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">tisnawardana@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-center">Jam Operasional</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Senin - Sabtu:</span>
                      <span className="font-medium">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu:</span>
                      <span className="font-medium">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center mt-6">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Map size={18} className="mr-2" />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map Overlay for Mobile Interaction */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-xs backdrop-blur-sm">
              Koordinat: {latitude}, {longitude}
            </div>
          </div>
        </div>

        {/* Mobile Layout - Contact Info Top, Map Bottom */}
        <div className="md:hidden space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informasi Kontak</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-900 p-3 rounded-xl text-white mr-4 shadow-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Veronica Residence 2<br />
                    Jl. Mandor Dami 3 No.11b<br />
                    Kalimulya, Depok<br />
                    Jawa Barat 17530
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 p-3 rounded-xl text-white mr-4 shadow-lg">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                  <p className="text-gray-600 text-sm">+62 896 3612 4857 - <b className="text-blue-600">Uki</b></p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-xl text-white mr-4 shadow-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">tisnawardana@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3 text-center">Jam Operasional</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Senin - Sabtu:</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu:</span>
                  <span className="font-medium">Tutup</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg"
              >
                <Map size={18} className="mr-2" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi ATIGA Aluminium"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;