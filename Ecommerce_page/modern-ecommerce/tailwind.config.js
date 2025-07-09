// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',   // A dark, charcoal-like color
        secondary: '#2d3748', // A slightly lighter charcoal
        accent: '#4299e1',    // A vibrant blue for accents
        highlight: '#e2e8f0', // Light gray for backgrounds/borders
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // A clean, modern font
      },
    },
  },
  plugins: [],
}