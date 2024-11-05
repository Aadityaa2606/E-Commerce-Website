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
        background: "#FFFFFF",
        secondary: "#F5F5F5",
        text2: "#7d8184",
        accent: "#db4444",
        borderColor: "#0000004D",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
