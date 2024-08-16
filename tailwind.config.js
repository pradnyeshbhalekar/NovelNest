/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        lobster: ["Clash Display "],
      },
      colors: {
        marvelred: "#ED1A23",
        dcblue: "#0275F2",
        cardbg: "#A8A8A8",
      },
    },
  },
  plugins: [],
};
