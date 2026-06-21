import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        "jade-deep": "#1B4D3E",
        "jade-soft": "#7FA396",
        ink: "#0F1B17",
        charcoal: "#3A3A38",
        cream: "#F7F5F0",

        // temporary aliases so existing classes do not break mid-sweep
        paper: "#F7F5F0",
        circuit: "#7FA396",
        signal: "#1B4D3E",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-space-grotesk)",
          "Space Grotesk",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
