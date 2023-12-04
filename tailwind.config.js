/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:'Poppins',
      },
      backgroundColor:{
        Purple1:"#4C5FD5",
        heroBG:"#dadbf1"
      }
    },

  },
  plugins: [],
}

