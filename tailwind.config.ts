import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode : "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
