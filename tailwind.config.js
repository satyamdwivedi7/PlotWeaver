/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes everything in the src folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Explicitly includes components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
