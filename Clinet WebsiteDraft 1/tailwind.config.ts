import type { Config } from "tailwindcss";

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
        teal:     { DEFAULT: "#0A4F5C", dark: "#083D47", light: "#E1F5EE", lightText: "#9FE1CB" },
        coral:    { DEFAULT: "#E86A33", dark: "#C55A28", light: "#FAECE7" },
        gold:     { DEFAULT: "#C9A227", light: "#FDF3D0" },
        sage:     { DEFAULT: "#6B8E6B", light: "#EDF4ED" },
        slate:    { DEFAULT: "#2D3748" },
        offwhite: { DEFAULT: "#F7FAFC" },
        navy:     { DEFAULT: "#0F172A" },
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
