/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        cyan: {
          100: "hsl(158, 36%, 27%)",
          200: "hsl(158, 36%, 37%)",
        },
        cream: "hsl(30, 38%, 92%)",
        blue: {
          100: "hsl(212, 21%, 14%)",
          200: "hsl(228, 12%, 48%)",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Fraunces", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
