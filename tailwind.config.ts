import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "body-small": "12px",
        "body-medium": "14px",
        "body-large": "16px",
        "label-small": "11px",
        "label-medium": "12px",
        "label-large": "14px",
        "title-small": "14px",
        "title-medium": "16px",
        "title-large": "22px",
        "headline-small": "24px",
        "headline-medium": "28px",
        "headline-large": "36px",
        "display-small": "36px",
        "display-medium": "45px",
        "display-large": "57px",
      },
      lineHeight: {
        "body-small": "16px",
        "body-medium": "20px",
        "body-large": "24px",
        "label-small": "16px",
        "label-medium": "16px",
        "label-large": "20px",
        "title-small": "20px",
        "title-medium": "24px",
        "title-large": "28px",
        "headline-small": "32px",
        "headline-medium": "36px",
        "headline-large": "40px",
        "display-small": "44px",
        "display-medium": "52px",
        "display-large": "64px",
      },
      letterSpacing: {
        "body-small": "0.4px",
        "body-medium": "0.25px",
        "body-large": "0.5px",
        "label-small": "0.5px",
        "label-medium": "0.5px",
        "label-large": "0.1px",
        "title-small": "0.1px",
        "title-medium": "0.15px",
        "title-large": "0px",
        "headline-small": "0px",
        "headline-medium": "0px",
        "headline-large": "0px",
        "display-small": "0px",
        "display-medium": "0px",
        "display-large": "-0.25px",
      },
      fontFamily: {
        "pulp-display": ["Pulp Display", "sans-serif"],
        "sf-mono": ["SF Mono", "monospace"],
      },
      colors: {
        navigation: "#000814",
        background: "#001427",
        pink: "#FF8098",
        green: "#84E296",
        yellow: "#F2C94C",
        blue: "#3E7ED2",
        white: "#FFFFFF",
        outline: "#79747E",
      },
    },
  },
  plugins: [],
} satisfies Config;
