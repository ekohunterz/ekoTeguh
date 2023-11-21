/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter, sans-serif"],
      },
      colors: {
        dark: {
          950: "#1f1f1f",
        },
        primary: "#28e98c",
        white: "#fff",
        abu: { 1: "#999999", 2: "#565656" },
      },
    },
  },
  plugins: [],
};
