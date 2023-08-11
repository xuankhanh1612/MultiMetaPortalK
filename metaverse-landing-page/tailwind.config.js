module.exports = {
  // purge: {
  //   content:
  //     process.env.NODE_ENV === "production"
  //       ? ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]
  //       : [],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      pointer: ["disabled"],
    },
  },
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
};
