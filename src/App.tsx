// TODO : for test uncomment the code below
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  // TODO : for test uncomment the code below
  // const [testMode, setTestMode] = useState(true);
  // const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  useEffect(() => {
    // Update document title
    document.title = 'A3 Aluminium - Jendela, Pintu & Kaca Tempered Berkualitas Tinggi';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();

        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  // TODO : for test uncomment the code below
  // const testComponent = (componentName: string) => {
  //   setCurrentComponent(componentName);
  //   setTestMode(false);
  // };

  // const showFullSite = () => {
  //   setTestMode(false);
  //   setCurrentComponent(null);
  // };

  // if (testMode) {
  //   return (
  //     <div className="min-h-screen bg-blue-50 flex items-center justify-center p-8">
  //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
  //         <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
  //           A3 Aluminium - Component Test
  //         </h1>
  //         <p className="text-gray-700 mb-6 text-center">
  //           If you see this page with styling, React and Tailwind are working!
  //           Click buttons below to test individual components.
  //         </p>

  //         <div className="grid grid-cols-2 gap-4 mb-6">
  //           <button
  //             onClick={() => testComponent('Header')}
  //             className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
  //           >
  //             Test Header
  //           </button>
  //           <button
  //             onClick={() => testComponent('Hero')}
  //             className="bg-green-600 text-white p-3 rounded hover:bg-green-700"
  //           >
  //             Test Hero
  //           </button>
  //           <button
  //             onClick={() => testComponent('Services')}
  //             className="bg-purple-600 text-white p-3 rounded hover:bg-purple-700"
  //           >
  //             Test Services
  //           </button>
  //           <button
  //             onClick={() => testComponent('Products')}
  //             className="bg-red-600 text-white p-3 rounded hover:bg-red-700"
  //           >
  //             Test Products
  //           </button>
  //           <button
  //             onClick={() => testComponent('Gallery')}
  //             className="bg-yellow-600 text-white p-3 rounded hover:bg-yellow-700"
  //           >
  //             Test Gallery
  //           </button>
  //           <button
  //             onClick={() => testComponent('About')}
  //             className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
  //           >
  //             Test About
  //           </button>
  //           <button
  //             onClick={() => testComponent('Testimonials')}
  //             className="bg-orange-600 text-white p-3 rounded hover:bg-orange-700"
  //           >
  //             Test Testimonials
  //           </button>
  //           <button
  //             onClick={() => testComponent('Contact')}
  //             className="bg-pink-600 text-white p-3 rounded hover:bg-pink-700"
  //           >
  //             Test Contact
  //           </button>
  //           <button
  //             onClick={() => testComponent('Footer')}
  //             className="bg-teal-600 text-white p-3 rounded hover:bg-teal-700"
  //           >
  //             Test Footer
  //           </button>
  //           <button
  //             onClick={() => testComponent('FloatingWhatsApp')}
  //             className="bg-gray-600 text-white p-3 rounded hover:bg-gray-700"
  //           >
  //             Test Floating WhatsApp
  //           </button>
  //         </div>

  //         <button
  //           onClick={showFullSite}
  //           className="w-full bg-gray-800 text-white p-4 rounded hover:bg-gray-900 font-bold"
  //         >
  //           Show Full Website
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // if (currentComponent) {
  //   return (
  //     <div className="font-sans">
  //       <div className="fixed top-4 left-4 z-50 bg-black text-white p-4 rounded">
  //         Testing: {currentComponent}
  //         <button
  //           onClick={() => setTestMode(true)}
  //           className="ml-4 bg-red-600 px-2 py-1 rounded text-sm"
  //         >
  //           Back to Test Menu
  //         </button>
  //       </div>

  //       {currentComponent === 'Header' && <Header />}
  //       {currentComponent === 'Hero' && <Hero />}
  //       {currentComponent === 'Services' && <Services />}
  //       {currentComponent === 'Products' && <Products />}
  //       {currentComponent === 'Gallery' && <Gallery />}
  //       {currentComponent === 'About' && <About />}
  //       {currentComponent === 'Contact' && <Contact />}
  //       {currentComponent === 'Testimonials' && <Testimonials />}
  //       {currentComponent === 'Footer' && <Footer />}
  //       {currentComponent === 'FloatingWhatsApp' && <FloatingWhatsApp />}
  //     </div>
  //   );
  // }

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;