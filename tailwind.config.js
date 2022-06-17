module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-flame": "#E4572E",
        "app-cadet": "#29335C",
        "app-marigold": "#F3A712",
        "app-olivine": "#A8C686",
      },
      fontFamily: {
        "app-main": ["Oswald", "sans-serif"],
        "app-heading": ["Cookie", "cursive"],
        "app-text": ["Berkshire Swash", "cursive"],
        "app-quote": ["Special Elite", "cursive"],
      },
      gridTemplateColumns: {
        "two-by-two": "minmax(0, 1fr) 12px minmax(0, 1fr)",
      },
      gridTemplateRows: {
        "main-grid-5":
          "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.5fr) minmax(0, 1fr) minmax(0, 1fr)",
      },
      keyframes: {
        expand: {
          "50%": { transform: "scale(1.1)" },
        },
        pulsate: {
          "100%": {
            "text-shadow":
              "0 0 4px #fff, 0 0 11px #fff,0 0 19px #29335C, 0 0 40px #29335C,0 0 80px #29335C,0 0 90px #29335C,0 0 100px #29335C,0 0 150px #29335C",
          },
          "0%": {
            "text-shadow":
              "0 0 4px #fff,0 0 10px #fff, 0 0 18px #29335C, 0 0 38px #29335C, 0 0 73px #29335C, 0 0 80px #29335C, 0 0 94px #29335C, 0 0 140px #29335C",
          },
        },
      },
      animation: {
        expand: "expand 1s ease-in-out infinite",
        pulsate: "pulsate 0.11s ease-in-out infinite alternate",
      },
      screens: {
        xm: "500px",
      },
    },
  },
  plugins: [],
};
