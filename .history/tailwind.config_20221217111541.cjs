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
        coming: "url('https://kt.city/static/upcoming-banner5.jpg')",
      },
      gridTemplateColumns: {
        order: "minmax(220px, max-content) minmax(220px, max-content) auto",
      },
      boxShadow: {
        shadowSmall: "2px 2px 1rem 0 rgba(66,165,245,0.15);",
        shadow: "4px 4px 1.6rem 0 rgba(66,165,245,0.3)",
      },
      zIndex: {
        1: "1",
      },
    },
    colors: {
      primary: "#0056d2",
      lightBlue: "rgb(245, 246, 252)",
      backGround: "#ffffff",
      white: "#fff",
      lightBlack: "#555",
      lightPurple: " rgb(68, 4, 156, 0.5)",
      yellow: "#FED049",
      pinkPatel: "rgb(255, 213, 196)",
      lightRed: "rgb(250, 94, 94)",
      bgLightRed: "rgba(255, 231, 229, 0.47)",
      lightGreen: "#23c27f",
      transparent: "transparent",
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
