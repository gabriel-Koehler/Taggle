'use client'
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";

// import { useRouter } from "next/router";
import { useEffect } from "react"


export default function Header(){
  const router = usePathname();
  const {theme,setTheme }=useTheme()
  useEffect(()=>{
    
    if(theme=="dark"){
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  },[])
  return <>
  {
    router!="/Login"?
    // true?
      <div className="w-full h-8 bg-red-300 text-foreground">
        {router}
        {theme}     
        <button onClick={()=>{
          setTheme('light')
          document.documentElement.setAttribute('data-theme', 'light')
          }} >light</button>  
        <button onClick={()=>{
          setTheme('dark')
          document.documentElement.setAttribute('data-theme', 'dark')
          }}>dark</button>  
      </div>:<></>
  }
  </>
}