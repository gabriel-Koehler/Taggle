'use client'
import { useTheme } from "next-themes"


export default function Header(){
  const {theme,setTheme }=useTheme()
  return <>
  <div className="w-full h-8 bg-red-300">
    {theme}
    <button onClick={()=>{
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
      }} >light</button>  
    <button onClick={()=>{
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      }}>dark</button>  
  </div>
  </>
}