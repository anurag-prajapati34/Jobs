/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'480px'
      },
      fontFamily:{
        sathoshi:['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [],
}