// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dag-burgundy': '#760F05',     // Rojo Borgoña Intenso (del manual)
        'dag-black': '#000000',         // Negro puro
        'dag-white': '#FFFFFF',         // Blanco puro
        'dag-platinum': '#E0E0E0',      // Plata suave, ideal para bordes y fondos claros
        'dag-ivory': '#F9F9D6',         // Marfil Suave (opcional, si quieres mantenerlo)
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'], // Asegura Montserrat como fuente por defecto
      },
    },
  },
  plugins: [],
}