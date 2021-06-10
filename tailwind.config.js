module.exports = {
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "pulse-3": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 3"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
