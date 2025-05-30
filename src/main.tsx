import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance tracking
const startTime = performance.now();

// Enhanced error handling for better user experience
const handleError = (error: ErrorEvent | PromiseRejectionEvent) => {
  console.error('Application error:', error);

  // Show user-friendly error message
  const rootElement = document.getElementById('root');
  if (rootElement && !rootElement.hasChildNodes()) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh; 
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-family: system-ui, sans-serif; 
        padding: 2rem;
      ">
        <div style="
          background: white; 
          padding: 2rem; 
          border-radius: 1rem; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.2); 
          max-width: 32rem; 
          width: 100%; 
          text-align: center;
        ">
          <h1 style="color: #dc2626; font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">
            Oops! Terjadi Kesalahan
          </h1>
          <p style="color: #6b7280; margin-bottom: 1.5rem;">
            Website A3 Aluminium mengalami masalah. Silakan muat ulang halaman.
          </p>
          <button 
            onclick="window.location.reload()" 
            style="
              background: #3b82f6; 
              color: white; 
              padding: 0.75rem 1.5rem; 
              border: none; 
              border-radius: 0.5rem; 
              cursor: pointer; 
              font-weight: 500;
            "
          >
            Muat Ulang Halaman
          </button>
        </div>
      </div>
    `;
  }
};

// Add global error listeners
window.addEventListener('error', handleError);
window.addEventListener('unhandledrejection', handleError);

const initApp = () => {
  console.log('A3 Aluminium - Initializing app...');

  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error('Root element not found!');
    document.body.innerHTML = `
      <div style="
        min-height: 100vh; 
        background: #ef4444; 
        color: white; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-family: system-ui, sans-serif;
      ">
        <div style="text-align: center;">
          <h1>Error: Root element not found</h1>
          <p>Unable to initialize A3 Aluminium website</p>
        </div>
      </div>
    `;
    return;
  }

  // Show optimized loading state with minimal CSS
  rootElement.innerHTML = `
    <div class="loading-screen">
      <div style="text-align: center; color: white;">
        <div style="
          width: 3rem; 
          height: 3rem; 
          border: 4px solid rgba(255,255,255,0.3); 
          border-top: 4px solid white; 
          border-radius: 50%; 
          animation: spin 1s linear infinite; 
          margin: 0 auto 1rem;
        "></div>
        <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">A3 Aluminium</h1>
        <p style="opacity: 0.9;">Loading...</p>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;

  try {
    const root = createRoot(rootElement);

    // Use setTimeout to allow loading screen to render
    setTimeout(() => {
      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );

      // Log performance metrics
      const loadTime = performance.now() - startTime;
      console.log(`A3 Aluminium - App initialized in ${loadTime.toFixed(2)}ms`);

      // Track Web Vitals if available
      if ('web-vital' in window) {
        console.log('Web Vitals tracking available');
      }
    }, 100);

  } catch (error) {
    console.error('Failed to initialize React app:', error);
    handleError(error as ErrorEvent);
  }
};

// Optimize initialization timing
if (document.readyState === 'loading') {
  // DOM still loading, wait for it
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM already loaded, initialize immediately
  // Use requestIdleCallback for better performance if available
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initApp);
  } else {
    setTimeout(initApp, 0);
  }
}
