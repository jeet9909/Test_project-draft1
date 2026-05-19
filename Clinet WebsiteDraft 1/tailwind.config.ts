import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A4F5C",
          dark: "#083d47",
          light: "#0d6172",
        },
        secondary: {
          DEFAULT: "#E86A33",
          dark: "#C55A28",
          light: "#f07d4a",
        },
        accent: {
          DEFAULT: "#C9A227",
          dark: "#a88420",
          light: "#d4b03e",
        },
        neutral: {
          DEFAULT: "#2D3748",
        },
        sage: "#6B8E6B",
        "dark-bg": "#0F172A",
        "dark-surface": "#1E293B",
        "dark-text": "#E2E8F0",
        "dark-muted": "#94A3B8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-ring": "pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-up": "fade-up 0.5s ease-out",
        "count-up": "count-up 2s ease-out",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(232, 106, 51, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(232, 106, 51, 0)",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(to right, rgba(10, 79, 92, 0.92) 0%, rgba(10, 79, 92, 0.6) 60%, rgba(10, 79, 92, 0.2) 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #0A4F5C 0%, #0d6172 50%, #083d47 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
