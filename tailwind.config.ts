import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-light": "#303030",
        "dark-medium": "#262626",
        "dark-bold": "#1C1C1C",
        "yellow-light": "#FDFFB1",
        "green-light": "#B1FFB5",
        "blue-light": "#B1F1FF",
        "red-light": "#FFB1B1",
        "blue-link": "#3DCFD9",
        "blue-linkedin": "#1E46D3",
        "purple-gradient": "#8A2387",
        "red-gradient": "#E94057",
        "yellow-gradient": "#F2DD21",
        "gray-ghost": "#717999",
        "gray-gradient-light": "#BBD2C5",
        "gray-gradient-medium": "#536976",
      },
      maxWidth: {
        'screen-profolio': '896px',
      },
      gridTemplateColumns: {
        // Simple auto fit
        'auto-fit-project-work': 'repeat(auto-fit, minmax(260px, 1fr))',
        'auto-fit-project': 'repeat(auto-fit, minmax(270px, 1fr))',
      },
    },
  },
  plugins: [nextui()]
};
export default config;
