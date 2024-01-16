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
      },
      animation: {
        slidein: 'slidein 0.7s ease-in 1',
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
