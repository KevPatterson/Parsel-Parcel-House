/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A', // Negro carbón
        secondary: '#047857', // Verde esmeralda
        accent: '#D4AF37', // Dorado metálico
        highlight: '#6D28D9', // Púrpura imperial
        silver: '#D1D5DB', // Plateado
      },
      fontFamily: {
        decorative: ['Bigelow Rules', 'cursive'],
        modern: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


