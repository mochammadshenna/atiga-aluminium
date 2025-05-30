// TODO : for test uncomment the code below
// import { useEffect, useState } from 'react';
import { Suspense, lazy, useEffect } from 'react';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load non-critical components for better performance
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Gallery = lazy(() => import('./components/Gallery'));
const Products = lazy(() => import('./components/Products'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="flex items-center space-x-2 text-blue-600">
      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm">Memuat...</span>
    </div>
  </div>
);

function App() {
  // TODO : for test uncomment the code below
  // const [testMode, setTestMode] = useState(true);
  // const [currentComponent, setCurrentComponent] = useState<string | null>(null);

  useEffect(() => {
    // Log to console for debugging
    console.log('A3 Aluminium App - Loading...');

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

    console.log('A3 Aluminium App - Loaded successfully!');
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

  try {
    return (
      <div className="font-sans">
        {/* Critical above-the-fold content loads immediately */}
        <Header />
        <Hero />

        {/* Non-critical content loads lazily */}
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Products />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Gallery />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>

        {/* FloatingWhatsApp loads immediately as it's interactive */}
        <FloatingWhatsApp />
      </div>
    );
  } catch (error) {
    console.error('App rendering error:', error);
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-700 mb-4">
            There was an error loading the A3 Aluminium website.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}

export default App;