/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-logo": "@assets/home/logo.svg",
        "register-expert": "url('https://kt.city/static/footer-bg.png')",
      },
    },
    colors: {
      primary: "#0056d2",
      lightBlue: "#f8fafc",
      backGround: "#ffffff",
      white: "#fff",
      lightBlack: "#555",
      yellow: "#FED049",
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1170px",
      },
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      // Complex site-specific column configuration
      footer: "repeat(4, minmax(0, 200px))",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
