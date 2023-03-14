const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{tsx,ts,jsx,js}", "./src/components/**/*.{tsx,ts,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      },
      colors: {
        light: '#E5EAF5',
        dark: '#494D5F',
      }
    }
  },
  plugins: [],
}
