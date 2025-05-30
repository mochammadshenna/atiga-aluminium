import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add error handling to catch startup issues
window.addEventListener('error', (event) => {
  console.error('Window error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Ensure DOM is ready
const initApp = () => {
  console.log('A3 Aluminium - Initializing app...');

  const rootElement = document.getElementById('root');

  if (!rootElement) {
    console.error('Root element not found!');
    document.body.innerHTML = `
      <div style="
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background-color: #f3f4f6;
        font-family: system-ui, -apple-system, sans-serif;
        padding: 2rem;
      ">
        <div style="
          background: white; 
          padding: 2rem; 
          border-radius: 8px; 
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 400px;
        ">
          <h1 style="color: #dc2626; margin-bottom: 1rem;">App Error</h1>
          <p style="color: #6b7280; margin-bottom: 1rem;">
            Could not find root element. Please check the HTML structure.
          </p>
          <button 
            onclick="window.location.reload()" 
            style="
              background: #3b82f6; 
              color: white; 
              padding: 0.5rem 1rem; 
              border: none; 
              border-radius: 4px; 
              cursor: pointer;
            "
          >
            Reload Page
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Show loading state
  rootElement.innerHTML = `
    <div style="
      min-height: 100vh; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div style="text-align: center; color: white;">
        <div style="
          width: 48px; 
          height: 48px; 
          border: 4px solid rgba(255,255,255,0.3); 
          border-top: 4px solid white; 
          border-radius: 50%; 
          animation: spin 1s linear infinite; 
          margin: 0 auto 1rem;
        "></div>
        <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">A3 Aluminium</h1>
        <p style="opacity: 0.9;">Loading...</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </div>
  `;

  try {
    console.log('Creating React root...');
    const root = createRoot(rootElement);

    console.log('Rendering App...');
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    console.log('A3 Aluminium - App initialized successfully!');
  } catch (error) {
    console.error('Failed to initialize React app:', error);
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background-color: #fef2f2;
        font-family: system-ui, -apple-system, sans-serif;
        padding: 2rem;
      ">
        <div style="
          background: white; 
          padding: 2rem; 
          border-radius: 8px; 
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 500px;
        ">
          <h1 style="color: #dc2626; margin-bottom: 1rem;">App Failed to Load</h1>
          <p style="color: #6b7280; margin-bottom: 1rem;">
            There was an error loading the A3 Aluminium website. 
            Please try refreshing the page or contact support.
          </p>
          <button 
            onclick="window.location.reload()" 
            style="
              background: #3b82f6; 
              color: white; 
              padding: 0.75rem 1.5rem; 
              border: none; 
              border-radius: 6px; 
              cursor: pointer;
              font-weight: 500;
            "
          >
            Reload Page
          </button>
        </div>
      </div>
    `;
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
