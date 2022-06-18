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
      },
      animation: {
        expand: "expand 1s ease-in-out infinite",
      },
      screens: {
        xm: "500px",
      },
    },
  },
  plugins: [],
};
