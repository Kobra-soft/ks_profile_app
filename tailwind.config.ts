import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,6,133,1) 28%, rgba(0,212,255,1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-to-red": "#ff0000",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
    },
  },
  plugins: [],
};

export default config;
