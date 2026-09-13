import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1b39",
          navyDark: "#061024",
          navyLight: "#132c5b",
          gold: "#f59e0b",
          yellow: "#eab308",
          yellowLight: "#fef08a",
          blue: "#0284c7",
          blueDark: "#0369a1",
          cyan: "#06b6d4",
          accent: "#10b981",
          card: "#ffffff",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(2, 132, 199, 0.3)',
        'soft-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;
