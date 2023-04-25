/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#121212",
      lightblue: "#4A90E2",
      red: "#D0021B",
      blue: "#599EEA",
      purple: "#844FF6",
      green: "#0FB77A",
      yellow: "#FAB70A",
      khaki: "#F09468",
      orange: {
        DEFAULT: "#FF5403",
        100: "#FFEEE5",
      },
    },
  },
  plugins: [],
};
