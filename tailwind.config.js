module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        on: "inset 5px 5px 6px #d5d5d5, inset -5px -5px 6px #ffffff",
        off: "5px 5px 6px #d5d5d5, -5px -5px 6px #ffffff",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
