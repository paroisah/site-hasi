import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        preto: "#212224",
        roxo: "#8c52ff",
        laranja: "#f76307",
        ciano: "#0cc0df",
        creme: "#fffbf0",
        card: "#2a2b2e",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)", "cursive"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        pill: "20px",
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
