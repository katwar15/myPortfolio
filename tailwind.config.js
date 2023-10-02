/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(39, 39, 39, 1)",
        secondary: "rgba(236, 227, 206, 1)",
        tertiary: "rgba(250, 242, 240, 1)",
        colorArancia: "rgba(242, 74, 12, 1)",
        colorVerde: "rgba(4, 183, 3)",
        colorRosa: "rgba(242, 165, 190, 1)",
        colorAzzurro: "rgba(125, 205, 250, 1)",
        colorHoverPortfolio: "rgba(203, 208, 220, 1)",
        blackP: "rgba(21, 19, 17)",
        whiteP: "rgba(237, 237, 237)",
      },
      fontFamily: {
        helveticaOutline: [
          "HelveticaLT75BoldOutline",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        helveticaRegular: [
          "HelveticaNeueRegular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        helveticaBold: [
          "HelveticaNeueBold",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
