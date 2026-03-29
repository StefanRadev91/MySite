import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a6fd4",
        foreground: "#ffffff",
        accent: "#00c853",
        "accent-hover": "#00a846",
        "accent-light": "#e8f5ee",
        card: "rgba(255,255,255,0.1)",
        muted: "rgba(255,255,255,0.65)",
        primary: "#1a6fd4",
        "primary-dark": "#1255a0",
        "primary-light": "#f0f8ff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
