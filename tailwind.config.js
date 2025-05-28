/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saza: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#b9ddff',
          300: '#7cc3ff',
          400: '#36a9ff',
          500: '#0090ff',
          600: '#006fd8',
          700: '#0058af',
          800: '#004a91',
          900: '#003f77',
        },
        accent: {
          primary: '#FF6B00',
          secondary: '#004a91',
        }
      }
    },
  },
  plugins: [],
};