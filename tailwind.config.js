/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#111",
        white: "#fff",
        "dark-grey": "#00171F",
        "light-black":"#161925",
        "ex-light-grey":"#eeeeee",
      },
    },
  },
  plugins: [],
}
