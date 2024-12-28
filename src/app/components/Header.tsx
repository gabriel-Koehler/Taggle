'use client'
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";

// import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher";


export default function Header(){
  const router = usePathname();
  const [mounted, setMounted] = useState(false);
  const {theme,setTheme }=useTheme()
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(()=>{
    
    if(theme=="dark"){
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  },[])
  if (!mounted) return null;
  return <>
  {
    (router!="/Login/Sign-In" && router!="/Login/Sign-Up") ?
    // true?
    <div className="w-full bg-inherit shadow-200 h-14">
      <div></div>
      <div></div>
      <div></div>
      <div>
          <button onClick={()=>{
          setTheme('light')
          document.documentElement.setAttribute('data-theme', 'light')
          }} >light</button>  
        <button onClick={()=>{
          setTheme('dark')
          document.documentElement.setAttribute('data-theme', 'dark')
          }}>dark</button>  
        {/* <ThemeSwitcher></ThemeSwitcher> */}
        </div>
    </div>:null
      // <div className="w-full h-8 bg-red-300 text-foreground">
      //   {router}
      //   {theme}     
      //   <button onClick={()=>{
      //     setTheme('light')
      //     document.documentElement.setAttribute('data-theme', 'light')
      //     }} >light</button>  
      //   <button onClick={()=>{
      //     setTheme('dark')
      //     document.documentElement.setAttribute('data-theme', 'dark')
      //     }}>dark</button>  
      // </div>:<></>
  }
  </>
}