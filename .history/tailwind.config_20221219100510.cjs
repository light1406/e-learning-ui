/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-logo": "@assets/home/logo.svg",
        "register-expert": "url('https://kt.city/static/footer-bg.png')",
        random: "url('https://source.unsplash.com/random')",
        auth: "url('https://source.unsplash.com/random')",
        hero: "url('https://kt.city/static/lp-headerbg.png')",
        coming: "url('https://kt.city/static/upcoming-banner5.jpg')",
        cod: "url('https://i.ytimg.com/vi_webp/6Yp0J1tzhXk/sddefault.webp')",
        "e-voucher":
          "url('https://i.ytimg.com/vi_webp/_xDyPC2KL24/sddefault.webp')",
        "avatar-menu": "url('https://kt.city/static/img-nav-bg.png')",
      },
      gridTemplateColumns: {
        order: "minmax(220px, max-content) minmax(220px, max-content) auto",
        auto: "1fr auto",
        slider: "repeat(3,90%) !important",
      },
      gridAutoColumns: {
        "33rem": "33rem",
        "90%": "90%",
      },
      gridTemplateRows: {
        auto: "auto auto",
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
      darkWhite: "#f8f9ff",
      fadeBlack: "rgba(0, 0, 0, 0.4)",
      lightPurple: "rgb(68, 4, 156, 0.5)",
      yellow: "#FED049",
      pinkPatel: "rgb(255, 213, 196)",
      lightRed: "rgb(250, 94, 94)",
      bgLightRed: "rgba(255, 231, 229, 0.47)",
      lightGreen: "#23c27f",
      bgLightGreen: "rgba(81, 229, 210, 0.17)",
      transparent: "transparent",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
