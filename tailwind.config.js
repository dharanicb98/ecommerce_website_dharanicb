/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {md: {max: "1050px"}, sm: {max: "550px"},  lg: "1051px",  },
    extend: {
      colors: {
        amber: {500: "#fbbc04" },
        black: {900: "#000000"},
        blue: {700: "#3086c8", a200: "#4285f4"},
        blue_gray: { 200: "#bec7cd", 900: "#292d32", "300_33": "#a2aaae33" },
        gray: {300: "#e5e5e5", 700: "#5f6368", 800: "#4c4c4c"},
        green: { 600: "#34a853" },
        indigo: { 900: "#012169", "900_01": "#192f5d", "900_02": "#003087"},
        misc: {black: "#00000075", white: {8: "#ffffff", 1: "#ffffff75" }},
        orange: { a700: "#ff5f00"},
        pink: {480: "#eb4c6b" },
        red: {500: "#ea4335", 700: "#bd3d44", a700: "#eb001b" },
        text: { secondary_text: "#878691", text: "#252020" },
        white: {a700_7fs: "#ffffff7f"},
        yellow: {800: "#f79e1b" },
      },
      boxShadow: {xs: "0 0 7px 1px #a2aaae33" }, 
      fontFamily: {simplennorm: "Simplon Norm", adobecaslonpro: "Adobe Caslon Pro" }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
