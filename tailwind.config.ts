import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // NEW BRAND COLORS
        black: "#000000",
        white: "#ffffff",
        text: "#001111",
      },
    },
  },
  plugins: [],
};
export default config;
