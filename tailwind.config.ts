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
        teal:     { DEFAULT: "#52B788", dark: "#1B4332", light: "#E8F5EE", lightText: "#95D5B2" },
        coral:    { DEFAULT: "#52B788", dark: "#1B4332", light: "#E8F5EE" },
        gold:     { DEFAULT: "#95D5B2", light: "#E8F5EE" },
        sage:     { DEFAULT: "#52B788", light: "#E8F5EE" },
        slate:    { DEFAULT: "#0D1B2A" },
        offwhite: { DEFAULT: "#F8F9FA" },
        navy:     { DEFAULT: "#0D1B2A" },
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
