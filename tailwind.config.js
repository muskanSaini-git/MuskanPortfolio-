// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "gradient-y": "gradient-y 6s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "100% 0" },
          "50%": { "background-position": "0% 100%" },
        },
        "gradient-y": {
          "0%, 100%": { "background-position": "0% 0" },
          "50%": { "background-position": "100% 100%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
