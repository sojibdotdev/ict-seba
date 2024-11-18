import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hindSiliguri: ["var(--font-hindSiliguri)"],
      },
      colors: {
        primary: "#10BBFA",
      },
    },
  },
  plugins: [],
} satisfies Config;
