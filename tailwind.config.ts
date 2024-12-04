import daisyui from "daisyui";
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
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/bgRoadMap.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
        "spin-slow": "spin 2s linear infinite",
        draw: "draw 2s ease-in-out infinite",
        "gradient-x": "gradient-x 2s ease infinite",
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
        draw: {
          "0%": { strokeDasharray: "0 1500" },
          "100%": { strokeDasharray: "1500 1500" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  daisyui: {
    themes: ["sunset"],
  },
  plugins: [daisyui],
};
export default config;
