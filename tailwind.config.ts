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
    extend: {
      fontFamily:{
        title: "var(--font-darker-grotesque)",
        body: "var(--font-work-sans)",
      }
    },
  },
  daisyui: {
    themes:[
      {
        'light':{
          "base-100": "#F3F4F6",
          "base-content": "#000",
          primary: "#864EF6",
          secondary: "#FF9F1C",
          success: "#43B75D",
          info: "#0095FF",
          warning: "#FFAA00",
          error:"#EE443F"
        },
        'dark':{
          "base-100": "#131927",
          "base-content": "#fff",
          primary:"#864EF6",
          secondary: "#FF9",
          success: "#43B75D",
          info: "#0095FF",
          warning: "#FFAA00",
          error:"#EE443F"
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
