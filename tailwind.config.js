/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      // => @media (min-width: 360px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      //main color
      'primary':'#EA6352',
      'secondary':'#DEDFE1',
      'thirdly':'#9B9BA1',
      'white':'#FFFFFF',
      'black':'#191C27',
      'info':'#4DA4F4',
      'warning':'#EEC800',
      'verify':'#2DB95D',
      'error':'#CE0000',
    },
    fontFamily: {
      primary: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
