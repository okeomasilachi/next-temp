import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
        maxWidth: {
          'container-sm': '540px',
          'container-md': '720px',
          'container-lg': '960px',
          'container-xl': '1140px',
          'container-xxl': '1320px',
        },
        screens: {
          'xxl': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
