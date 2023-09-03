/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        handscript: ['"Style Script"', 'cursive'],
        shoulder: ['"Big Shoulders Text"', 'cursive'],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        tertiary: colors.green,
        modalBackground: "#cccc"
      },
    },
  },
  plugins: [],
}
