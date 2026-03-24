import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A7C59",
        secondary: "#F9F8F6",
        accent: "#D48C76",
        background: "#FFFFFF",
        surface: "#EFEFEF",
        text: "#333333",
        muted: "#D3D3D3",
      },
      spacing: {
        base: "8px",
        section: "32px",
        cardPadding: "16px",
      },
      borderRadius: {
        small: "4px",
        medium: "8px",
        large: "12px",
      },
      boxShadow: {
        card: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        hover: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        modal: "0px 4px 16px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;