/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'scale-red': '#E50914',
        'scale-red-light': '#FF4B4B',
        'scale-red-dark': '#B80710',
        'scale-dark': '#0a0a0a',
        'scale-gray': '#141414',
        'scale-gray-light': '#242424',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
