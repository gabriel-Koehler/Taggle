'use client'
import { useTheme } from "next-themes"
import { useEffect } from "react"


export default function Header(){
  const {theme,setTheme }=useTheme()
  useEffect(()=>{
    
    if(theme=="dark"){
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  },[])
  return <>
  <div className="w-full h-8 bg-red-300 text-foreground">
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