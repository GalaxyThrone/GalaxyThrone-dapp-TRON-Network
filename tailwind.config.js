/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          modal: "rgba(12, 12, 12, 0.8)",
          darkestBlue: "#101219",
          darkBlue: "#141822",
          mediumBlue: "#191E29",
          mediumLightBlue: "#272A33",
          lightBlue: "#7270FF",
          lightCyan: "#00AAFF",
        },
      },
    },
    boxShadow: {
      onTop: "0px 4px 16px rgba(0, 0, 0, 0.1);",
      slide: "5.26px 3.56px 60px rgba(0, 0, 0, 0.6);",
    },
  },
  plugins: [],
};
