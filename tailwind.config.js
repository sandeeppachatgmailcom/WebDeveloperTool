/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-Poppins'],
          roboto: ['Roboto', 'sans-serif'],
          openSans: ['Open Sans', 'Helvetica Neue', 'sans-serif'],
          montserrat: ['Montserrat', 'Helvetica', 'sans-serif'],
          sourceSansPro: ['Source Sans Pro', 'Myriad Pro', 'sans-serif']
      }
      },
    },
    plugins: [],
  }