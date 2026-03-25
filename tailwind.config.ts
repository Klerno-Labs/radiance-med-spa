import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A45A9D",
        secondary: "#F4D03F",
        accent: "#D35400",
        background: "#FFFFFF",
        surface: "#F8F9FA",
        text: "#2C3E50",
        muted: "#BDC3C7",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        accent: ["Playfair Display", "serif"],
      },
      spacing: {
        base: "16px",
        section: "24px",
        card: "20px",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "16px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(0, 0, 0, 0.1)",
        hover: "0 4px 8px rgba(0, 0, 0, 0.2)",
        modal: "0 10px 30px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;