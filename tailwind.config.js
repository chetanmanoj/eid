/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tab: "450px",
      desk: "1350px",
    },
    fontFamily: {
      english: ["Space Grotesk", "sans-serif"],
      arabic: ["IBM Plex Sans Arabic", "sans-serif"],
    },
  },
  plugins: [],
}

