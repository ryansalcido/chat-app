module.exports = {
  mode: "jit",
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}" ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "0px",
      xs: "400px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px"
    },
    extend: {
      animation: {
        "pulse-3": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 3",
        "spin-2": "spin 2s linear infinite"
      },
      rotate: {
        "120": "120deg",
        "240": "240deg"
      },
      borderWidth: {
        "10": "10px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
