/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f9646",
        secondary: "#ff9457",
        teritory: "#758278",
        pink: "#ff85c0",
        lightPink: "#f4ecfc",
        blue: "#69c0ff",
        lightBlue: "#e8f6ff",
        purpole: "#b37feb",
        downy: "#68dbba",
        lightDowny: "#e4f8f3",
        lightOrange: "#faece1",
      },
      fontFamily: {
        roboto: "Roboto",
        heebo: "Heebo",
        inter: "Inter",
      },
    },
  },
  plugins: [],
};
