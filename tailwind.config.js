/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#0f1923',
        'secondary-dark': '#1a2836',
        'primary-yellow': '#f7d54f',
        'border-color': '#2c3a48',
      }
    },
  },
  plugins: [],
} 