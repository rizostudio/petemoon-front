/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA6352",
        primaryMobileBg: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
