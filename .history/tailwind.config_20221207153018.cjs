/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-logo": "url('https://unica.vn/media/img/logo-unica.svg')",
      },
    },
    colors: {
      heading: "#273167",
      backGround: "#f5f7f8",
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
  plugins: [],
};
