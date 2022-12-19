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
      boxShadow: {
        shadowSmall: "0 0 1rem 0 rgba(66,165,245,0.15);",
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
      bgLightRed: "rgba(255, 231, 229, 0.47)",
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
