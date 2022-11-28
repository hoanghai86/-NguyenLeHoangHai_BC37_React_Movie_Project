/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // colors: () => ({
      //   lime: {
      //     400: "red",
      //   },
      // }),
      // fontSize: () => ({
      //   "2xl": "200px",
      // }),

      height: {
        99: "50rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
