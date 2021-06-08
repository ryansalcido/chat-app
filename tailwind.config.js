module.exports = {
  mode: "jit",
  purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}" ],
  darkMode: "media",
  theme: {
    extend: {
      animation: {
        "bounce-4": "bounce 1s 4"
      }
    },
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "none",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)"
        },
        "50%": {
          transform: "translateY(-20%)",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)"
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
