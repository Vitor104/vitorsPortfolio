/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Instrument Sans", "DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0c0e14",
          muted: "#6b7280",
        },
        canvas: {
          DEFAULT: "#f4f5f7",
          deep: "#e8eaef",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          soft: "#dbeafe",
        },
      },
    },
  },
  plugins: [],
};
