/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
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
          'shadowC': '0px 20px 50px rgba(234, 99, 82, 0.2)',
        },
        content: {
        },
        backgroundImage: {
          'dashbackground': "url('../assets/dashboard/dash-bg-mobile.svg')",
        }
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms"),
  plugin(({ addBase, theme }) => {
    addBase({
        '.scrollbar': {
            overflowY: 'auto',
            scrollbarColor: `transparent`,
            scrollbarWidth: '0',
        },
        '.scrollbar::-webkit-scrollbar': {
            height: '0px',
            width: '0px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
            backgroundColor: theme('colors.blue.600'),
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
            backgroundColor: theme('colors.blue.200'),
        },
    });
}),
], 
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#EA6352",
                  
          "secondary": "#F000B8",
                  
          "accent": "#37CDBE",
                  
          "neutral": "#3D4451",
                  
          "base-100": "#FFFFFF",
                  
          "info": "#3ABFF8",
                  
          "success": "#36D399",
                  
          "warning": "#FBBD23",
                  
          "error": "#F87272",
                  },
      },
    ],
  }
};
