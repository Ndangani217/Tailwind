/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'dm': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}