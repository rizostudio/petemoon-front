/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        screens: {
          'xs': '360px',
          // => @media (min-width: 360px) { ... }
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
          'silver':'#E2E2E2'
        },
        boxShadow: {
          'shadowA': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          'shadowB': '0 20px 50px -10px rgba(58, 71, 80, 0.15)',
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
