module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./client/*.html", "./client/**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Poppins", "ui-sans-serif", "sans-serif"],
      body: ["Poppins", "ui-sans-serif", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
