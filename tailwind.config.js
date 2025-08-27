/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff9911',
          50:  '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD099',
          300: '#FFB866',
          400: '#FFA033',
          500: '#FF9911',
          600: '#E2820A',
          700: '#B56307',
          800: '#8A4B05',
          900: '#5E3303',
        },
        ink:   { light: '#0E1117', dark: '#FFFFFF' },
        paper: { light: '#FFFFFF', dark: '#0E1117' },
        edge:  { light: '#efebe7', dark: '#2A2F37' },
      },
      borderRadius: { '2xl': '1rem' },
      maxWidth: { 'content': '1280px' },
    },
  },
  plugins: [],
};
