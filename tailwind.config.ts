/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans"],
        open: ["Open Sans"],
      },
      colors: {
        secondary: {
          DEFAULT: "#eae6e0",
        },
        text: {
          DARK: "#64554F",
          LIGHT: "#eae6e0",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["default"],
  },
};

export default config;
