/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'alteria': ['Allerta', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
        'rancho': ['Rancho', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],

}

