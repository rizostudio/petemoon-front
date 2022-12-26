/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryPetemoon: "#EA6352",
      primaryMobileBG: "#FFFFFF",
      
    },
  },
  plugins: [require("daisyui")],
};
