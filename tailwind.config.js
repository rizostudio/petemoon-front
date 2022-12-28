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
      'first':'#EA6352',
      'second':'#DEDFE1',
      'third':'#9B9BA1',
      'fourth': '#F5F5F5',
      'white':'#FFFFFF',
      'black':'#191C27',
      'info':'#4DA4F4',
      'warning':'#EEC800',
      'verify':'#2DB95D',
      'error':'#CE0000',
      'gray':'#9B9BA1',
      'silver':'#E2E2E2'
    },
    // fontFamily: {
    //   'primary' :["Yekan", "cursive"],
    // },
    extend: {
      boxShadow: {
        'first': '0 20px 50px -10px rgba(58, 71, 80, 0.15)',
      },
      content: {
        'arrowLeft': "url('/asset/icons/alarm.svg')",
      },
      backgroundImage: {
        'dashbackground': "url('../asset/icons/dash-bg-mobile.svg')",
      }
    },
  },
  plugins: [require("daisyui")],
};
