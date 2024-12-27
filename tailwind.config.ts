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
      colors:{
        success: "#43B75D",
          sucess800:"#256533",
          sucess700:"#308242",
          sucess600:"#3DA755",
          sucess400:"#69C57D",
          sucess300:"#81CF92",
          sucess200:"#A9DEB4",
          sucess100:"#C5E9CD",
          info: "#0095FF",
          info800:"#00528C",
          info700:"#006AB5",
          info600:"#0088E8",
          info400:"#33AAFF",
          info300:"#54B8FF",
          info200:"#8ACEFF",
          info100:"#B0DEFF",
          warning: "#FFAA00",
          warning700:"#B57900",
          warning600:"#E89B00",
          warning400:"#FFBB33",
          warning300:"#FFC654",
          warning200:"#FFD88A",
          warning100:"#FFE5B0",
          error:"#EE443F",
          error800:"#832523",
          error700:"#A9302D",
          error600:"#D93E39",
          error400:"#F16965",
          error300:"#F4827E",
          error200:"#F7A9A7",
          error100:"#FAC5C3",
      },
      fontFamily:{
        title: "var(--font-darker-grotesque)",
        body: "var(--font-work-sans)",
      },
      boxShadow:{
        '100':'0px 4px 4px -2px var(--shadowColor08), 0px 2px 4px -2px var(--shadowColor12)',
        '200':' 0px 8px 8px -4px var(--shadowColor08), 0px 4px 6px -4px var(--shadowColor12)',
        '300': '0px 8px 16px -6px var(--shadowColor08), 0px 6px 8px -6px var(--shadowColor12)',
        '400': '0px 8px 24px -4px var(--shadowColor08), 0px 6px 12px -6px var(--shadowColor12)',
        '500': '0px 10px 32px -4px var(--shadowColor1), 0px 6px 14px -6px var(--shadowColor12)',
        '600': '0px 12px 42px -4px var(--shadowColor12), 0px 8px 18px -6px var(--shadowColor12)',
        '700': '0px 14px 64px -4px var(--shadowColor12), 0px 8px 22px -6px var(--shadowColor12)',
        '800': '0px 18px 88px -4px car(--shadowcolor14), 0px 8px 28px -6px var(--shadowColor12)',
      },
    },
  },
  daisyui: {
    themes:[
      {
        'light':{
          "base-100": "#F3EDFE",
          "base-content": "#000",
          primary: "#864EF6",
          primary800:"#4A2B87",
          primary700:"#5F37AF",
          primary600:"#7A47E0",
          primary400:"#9E71F8",
          primary300:"#AE88F9",
          primary200:"#C8AEFB",
          primary100:"#D9C8FC",
          primary50:"#F3EDFE",
        },
        'dark':{
          base100: "#131927",
          basecontent: "#fff",
          primary: "#864EF6",
          primary800:"#4A2B87",
          primary700:"#5F37AF",
          primary600:"#7A47E0",
          primary400:"#9E71F8",
          primary300:"#AE88F9",
          primary200:"#C8AEFB",
          primary100:"#D9C8FC",
          primary50:"#F3EDFE",
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
