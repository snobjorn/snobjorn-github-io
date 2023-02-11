const colors = require("tailwindcss/colors");

module.exports = {
  content: ["../*.{html,js}"],
  theme: {
    colors: {
      hoved: "#033860",
      middels: "#087ca7",
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
      current: "currentColor",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};
