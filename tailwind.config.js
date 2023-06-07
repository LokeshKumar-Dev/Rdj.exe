/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#7056bb",
        background: "#131718",
        gray: "#7f8082",
        lightBlack: "#1f2022",
      },
    },
  },
  plugins: [],
};
