/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ECA299",
          DEFAULT: "#EA6352",
        },
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [require("daisyui")],
};
