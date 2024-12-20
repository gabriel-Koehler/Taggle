import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import tailwindTypography from "@tailwindcss/typography"
export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend: {},
  },
  daisyui: {
    themes:[
      {
        'light':{
          "base-100": "#fff",
          "base-content": "#000",
          primary: "#F89",
          secondary: "#FF9F1C",
          success: "#00D6A0",
          info: "#00C0EA",
          warning: "#FFB045",
        },
        'dark':{
          "base-100": "#000",
          "base-content": "#fff",
          primary:"#42B",
          secondary: "#FF9",
          success: "#00D",
          info: "#00C",
          warning: "#DA9",
        },
        }
    ],
    // themes:['light','dark'],
    defaultTheme: 'light', // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "daisy", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [daisyui,tailwindTypography],
} satisfies Config;
