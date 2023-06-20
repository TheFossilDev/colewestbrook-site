/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "fossilDarkestBlue": "#0C134F",
      "fossilDarkerBlue": "#1D267D",
      "fossilMediumLav": "#5C469C",
      "fossilLightLav": "#D4ADFC",
    },
    extend: {},
  },
  plugins: [],
};
