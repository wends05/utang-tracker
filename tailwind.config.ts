import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#ABFF00",
          200: "#8ace00",
          300: "#71A607",
          400: "#619001",
          500: "#",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
