module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1232px",
      },
    },
    extend: {
      colors: {
        "getir-primary": "#4c3398",
        "getir-nav-text": "#dcdcff",
        "getir-secondary": "#5d3ebc",
        "getir-tertiary": "#7849f7",
        "getir-yellow": "#ffd300",
        "getir-fb": "#e7eaf1",
        "getir-fb-text": "#4965a0",
        "getir-second-bg": "#fafafa",
        "getir-categories-title": "#4965A0",
      },
      height: {
        getirHero: "500px",
      },
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: {
        mobile:
          "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
