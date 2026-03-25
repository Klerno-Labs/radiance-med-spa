import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A45A9D",
          50: "#fdf4fa",
          100: "#fae6f5",
          200: "#f5c8e3",
          300: "#f0aad3",
          400: "#ea8fc3",
          500: "#E679A3",
          600: "#d35f8a",
          700: "#be4b71",
          800: "#a33858",
          900: "#872646",
          950: "#2d1621",
        },
        secondary: {
          DEFAULT: "#F4D03F",
          50: "#fffbf0",
          100: "#fff9e0",
          200: "#fff5c0",
          300: "#fff09f",
          400: "#ffeb7f",
          500: "#ffe65e",
          600: "#ddd946",
          700: "#c9c938",
          800: "#b4b32a",
          900: "#9a9e1c",
        },
        accent: {
          DEFAULT: "#D35400",
          50: "#fff7f0",
          100: "#ffefd5",
          200: "#ffe6b7",
          300: "#ffdd98",
          400: "#ffd47a",
          500: "#ffcb5b",
          600: "#e6a641",
          700: "#cc822d",
          800: "#b25e19",
          900: "#983a05",
        },
        muted: "#BDC3C7",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;