import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/posts/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      backgroundColor: {
        primary: "#eef1f5",
        "dark-primary": "#272935",
        "dark-tag": "#454854",
        blue: "#0066FF",
        secondary: "#d6273c",
        "secondary-dark": "#ffe102",
        "gray-lighter": "#f9f9f9",
        "gray-lighter-dark": "#303340",
      },
      borderColor: {
        primary: "#DADCE5",
        "dark-primary": "#35394b",
        "fainted-text": "#222",
        "fainted-text-dark": "#cbcbcb",
      },
      fontFamily: {
        roboto: "--roboto",
      },
      colors: {
        blue: "#0066FF",
        "text-color": "#161F38",
        "text-color-dark": "#F9F9FA",
        secondary: "#d6273c",
        "secondary-dark": "#ffe102",
        divider: "#eef1f5",
        "divider-dark": "#172432",
        black: "#000000",
        "card-bg": "#dededd",
        "card-bg-dark": "#20262e",
        "code-bg": "#dededd",
        "code-bg-dark": "#303340",
        "code-block": "#292d3e",
        "text-code-block": "#a6accd",
        gray: "#b2b2b3",
        "gray-light": "#575861",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
