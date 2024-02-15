import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade_in 0.5s ease-in-out forwards",
      },
      keyframes: {
        fade_in: {
          "0%": { opacity: "0", transform: "scale(0.9) translateY(10%)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      fontFamily: {
        "dung-geun-mo": ["var(--dung-geun-mo)"],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
export default config;
