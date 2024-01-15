/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shop': "url('./src/assets/pexels-andrea-piacquadio-1050244.jpg')",
      }
    },
  },
  plugins: [],
}
