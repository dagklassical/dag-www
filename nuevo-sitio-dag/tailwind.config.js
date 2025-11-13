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
        'dag-burgundy': '#800020',
        'dag-golden': '#DAA520', 
        'dag-white': '#FFFFFF',
        'dag-caramel': '#8B4513',
        'dag-ivory': '#FFFFF0',
        'dag-butmilk': '#FFF8DC',
        'dag-cream': '#F5F5DC',
        // Equivalencias para evitar errores de build
        'burgundy': '#800020',
        'golden': '#DAA520',
        'cream': '#F5F5DC',
        'caramel': '#8B4513',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      // Configuración especial para @apply con clases personalizadas
      safelist: [
        'text-dag-burgundy',
        'text-dag-golden', 
        'text-dag-white',
        'text-dag-caramel',
        'text-dag-ivory',
        'bg-dag-burgundy',
        'bg-dag-golden',
        'bg-dag-white',
        'bg-dag-caramel',
        'bg-dag-ivory',
        'bg-dag-cream',
        'bg-dag-butmilk',
        'border-dag-burgundy',
        'border-dag-golden',
      ]
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-dag-burgundy': { color: '#800020' },
        '.text-dag-golden': { color: '#DAA520' },
        '.text-dag-white': { color: '#FFFFFF' },
        '.text-dag-caramel': { color: '#8B4513' },
        '.text-dag-ivory': { color: '#FFFFF0' },
        '.bg-dag-burgundy': { backgroundColor: '#800020' },
        '.bg-dag-golden': { backgroundColor: '#DAA520' },
        '.bg-dag-white': { backgroundColor: '#FFFFFF' },
        '.bg-dag-caramel': { backgroundColor: '#8B4513' },
        '.bg-dag-ivory': { backgroundColor: '#FFFFF0' },
        '.bg-dag-cream': { backgroundColor: '#F5F5DC' },
        '.bg-dag-butmilk': { backgroundColor: '#FFF8DC' },
        '.border-dag-burgundy': { borderColor: '#800020' },
        '.border-dag-golden': { borderColor: '#DAA520' },
      }
      addUtilities(newUtilities)
    }
  ],
}
