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
        'ibp-light-grey': '#00000029',
        'ibp-dark-grey': '#929292',
        'ibp-grey': '#F2F6FA',
        'ibp-red': '#FF1B1B',
        'ibp-blue': '#004CFF',
      },
      borderRadius: {
        card: '15px',
      },
      boxShadow: {
        card: '0px 0px 20px #00000029',
        btn: '0px 0px 6px #00000029',
      },
    },
  },
  plugins: [],
};
export default config;
