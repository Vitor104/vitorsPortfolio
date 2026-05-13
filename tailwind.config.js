/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Use an attribute selector instead of a class so CSS Modules (which hashes class
  // names per file) doesn't locally-scope `.dark` away from `<html>`.
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Instrument Sans", "DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0E0D0A",
          muted: "#8A8275",
          softer: "#B7AFA0",
        },
        canvas: {
          DEFAULT: "#EFEAE0",
          deep: "#E4DDCC",
        },
        accent: {
          DEFAULT: "#C25A2D",
          hover: "#A84A22",
          soft: "#E7C9B6",
        },
        night: {
          DEFAULT: "#0B0A09",
          soft: "#171512",
        },
      },
    },
  },
  plugins: [],
};
