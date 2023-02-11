const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      hoved: "#033860",
      middels: "#087ca7",
      gray: colors.gray,
      slate: colors.slate,
      current: "currentColor",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};
