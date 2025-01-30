/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "../Frontend/src/**/*.{js,ts,jsx,tsx}",
    "../Frontend/src/index.css",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}