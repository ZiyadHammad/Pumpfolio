/** @type {import('tailwindcss').Config} */
export default {
  content: ["./main.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      colors: {
        theme: "#f9f9fb",
        primary: "",
        secondary: "",
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
