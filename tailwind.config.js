/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        income: '#10b981',
        expense: '#ef4444',
        surface: '#111827',
        surfaceAlt: '#1f2937',
      },
    },
  },
  plugins: [],
}
