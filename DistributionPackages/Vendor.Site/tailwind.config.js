module.exports = {
  content: ["./Resources/Private/Fusion/**/*.{fusion,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "rte",
    }),
  ],
};
