/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-logo": "@assets/home/logo.svg",
        "register-expert": "url('https://kt.city/static/footer-bg.png')",
        auth: "url('https://source.unsplash.com/random')",
        hero: "url('https://kt.city/static/lp-headerbg.png')",
      },
      gridTemplateColumns: {
        // added new 4 column grid as new4
        order: "minmax(220px, max-content) minmax(220px, max-content) auto",
      },
    },
    colors: {
      primary: "#0056d2",
      lightBlue: "rgba(72 122 180 / .2)",
      backGround: "#ffffff",
      white: "#fff",
      lightBlack: "#555",
      yellow: "#FED049",
      pinkPatel: "rgb(255, 213, 196)",
      lightRed: "rgb(250, 94, 94)",
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1170px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
