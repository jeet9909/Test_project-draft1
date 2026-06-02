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
        teal:     { DEFAULT: "#2A9D8F", dark: "#1A3A3A", light: "#E8F7F5", lightText: "#57C5B6" },
        coral:    { DEFAULT: "#E9C46A", dark: "#C9A44A", light: "#FDF6D8" },
        gold:     { DEFAULT: "#E9C46A", light: "#FDF6D8" },
        sage:     { DEFAULT: "#57C5B6", light: "#E8F7F5" },
        slate:    { DEFAULT: "#1A3A3A" },
        offwhite: { DEFAULT: "#FDF8F0" },
        navy:     { DEFAULT: "#1A3A3A" },
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
