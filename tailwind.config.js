/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        letras_morado: "#614F8C",
        letras_amarillo: "#FBB63F"
      }
    },
  },
  plugins: [],
}
