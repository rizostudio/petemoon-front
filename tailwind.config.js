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
          'primary':'#EA6352',
          'secondary':'#DEDFE1',
          'thirdly':'#9B9BA1',
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
        },
        backgroundImage: {
          'dashbackground': "url('../assets/dashboard/dash-bg-mobile.svg')",
        }
    },
  },
  plugins: [require("daisyui")], 
};
