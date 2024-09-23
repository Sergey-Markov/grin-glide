import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "380px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffffff", // Основний колір
        secondary: "#2d3748", // Додатковий колір
        accent: "#38b2ac", // Акцентний
        tetriary: "#f5f9ff", // background
        tetriaryLight: "#078b83",
      },
      fontFamily: {
        sans: ["var(--font-inter)"], // Основний шрифт
        mono: ["var(--font-merriweather)"], // Додатковий шрифт
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "slide-in-left":
          "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-right":
          "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        "slide-in-left": {
          "0%": { transform: "translateX(-1000px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
