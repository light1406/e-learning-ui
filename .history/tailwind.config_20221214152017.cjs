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
    },
    colors: {
      primary: "#0056d2",
      lightBlue: "rgba(72 122 180 / .2)",
      backGround: "#ffffff",
      white: "#fff",
      lightBlack: "#555",
      yellow: "#FED049",
      pinkPatel: "rgb(255, 213, 196)",
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
