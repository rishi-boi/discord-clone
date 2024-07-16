import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ginto: ["var(--font-ginto)"],
        ggsans: ["var(--font-ggsans)"],
      },
      colors: {
        "not-quite-black": "#23272a",
        "not-quite-black-hover": "#313339",
        primary: "#404EED",
        "primary-text": "#5865F2",
        "primary-hover": "#7389DA",
        navbar: "#787878",
        bg: "#F6F6F6",
      },
    },
  },
  plugins: [
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
