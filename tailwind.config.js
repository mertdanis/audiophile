/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainOrange: "#D87D4A",
        mainDark: "#101010",

        mainLightWhite: "#F1F1F1",
        mainLighterWhite: "#FAFAFA",

        mainLightOrange: "#fbaf85",
        mainBlack: "#000000",
        mainWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
