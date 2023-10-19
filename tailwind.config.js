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

      fontSize: {
        h1: "56px",
        h2: "40px",
        h3: "32px",
        h4: "28px",
        h5: "24px",
        h6: "18px",
        overline: "14px",
        subTitle: "13px",
        bodyText: "15px",
      },

      fontWeight: {
        bolder: "700",
        bold: "500",
        regular: "400",
      },
    },
  },
  plugins: [],
};
