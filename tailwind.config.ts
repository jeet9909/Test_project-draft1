import type { Config } from "tailwindcss";

// WormEra Bio-Tech palette — client approved
const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal:     { DEFAULT: "#0F766E", dark: "#047857", light: "#E6F7F1", lightText: "#D1FAE5" },
        coral:    { DEFAULT: "#059669", dark: "#047857", light: "#D1FAE5" },
        gold:     { DEFAULT: "#059669", light: "#D1FAE5" },
        sage:     { DEFAULT: "#0F766E", light: "#E6F7F1" },
        slate:    { DEFAULT: "#0F172A" },
        offwhite: { DEFAULT: "#E6F7F1" },
        navy:     { DEFAULT: "#0F172A" },
      },
      fontFamily: {
        sans:  ["DM Sans", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
        lora:  ["Lora", "Georgia", "serif"],
        mono:  ["Source Code Pro", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
