#!/bin/bash
echo "🔧 COMANDO RÁPIDO PARA SOLUCIONAR ERROR DE TIPOGRAFÍA"
echo ""
echo "❌ El error es porque tu tailwind.config.js local no tiene los colores DAG"
echo ""
echo "📋 SOLUCIÓN INMEDIATA:"
echo ""
echo "1️⃣ Ve a tu proyecto:"
echo "   cd ~/dev/gitlab/dagklassical/dag-www/nuevo-sitio-dag"
echo ""
echo "2️⃣ Reemplaza el contenido de 'tailwind.config.js' con:"
echo ""
cat << 'EOF'
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
        'dag-ivory': '#F5F5DC',
        'dag-caramel': '#8B4513',
        'dag-buttermilk': '#FFF1B3',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      safelist: [
        'text-dag-burgundy', 'text-dag-golden', 'text-dag-white', 'text-dag-ivory', 'text-dag-caramel',
        'bg-dag-burgundy', 'bg-dag-golden', 'bg-dag-white', 'bg-dag-ivory', 'bg-dag-caramel',
        'border-dag-burgundy', 'border-dag-golden', 'border-dag-white', 'border-dag-ivory',
        'hover:text-dag-golden', 'hover:bg-dag-white', 'hover:bg-dag-golden',
        'title-elegant', 'title-section', 'title-subsection', 'title-minor', 'title-light', 'text-highlight',
        'text-elegant', 'text-small', 'title-premium',
        'font-extralight', 'font-thin', 'font-light', 'font-normal', 'font-medium'
      ]
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-dag-burgundy': { color: '#800020' },
        '.text-dag-golden': { color: '#DAA520' },
        '.text-dag-white': { color: '#FFFFFF' },
        '.text-dag-ivory': { color: '#F5F5DC' },
        '.text-dag-caramel': { color: '#8B4513' },
        '.bg-dag-burgundy': { backgroundColor: '#800020' },
        '.bg-dag-golden': { backgroundColor: '#DAA520' },
        '.bg-dag-white': { backgroundColor: '#FFFFFF' },
        '.bg-dag-ivory': { backgroundColor: '#F5F5DC' },
        '.bg-dag-caramel': { backgroundColor: '#8B4513' },
        '.bg-dag-buttermilk': { backgroundColor: '#FFF1B3' },
        '.border-dag-burgundy': { borderColor: '#800020' },
        '.border-dag-golden': { borderColor: '#DAA520' },
        '.border-dag-white': { borderColor: '#FFFFFF' },
        '.border-dag-ivory': { borderColor: '#F5F5DC' },
      }
      addUtilities(newUtilities)
    }
  ],
}
EOF
echo ""
echo "3️⃣ Guarda el archivo y ejecuta:"
echo "   npm run dev"
echo ""
echo "✅ ¡Listo! Ahora tendrá tipografía solo Inter con pesos sutiles"
echo ""
