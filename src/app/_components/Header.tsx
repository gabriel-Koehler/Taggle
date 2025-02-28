'use client'
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";

// import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import ThemeSwitcher from "./ThemeSwitcher";
import Input from "./Input";
import logo from "../../../public/taggalgeLogo.svg"
import Image from "next/image";
import ConfigPopSide from "./ConfigPopSide";
import { useContextValues } from "@/context/ContextValuesProvider";

export default function Header(){
  const router = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isConfig, setIsConfig] = useState(false);
  const {theme,setTheme }=useTheme()
  const [serchValue,setSearchValue]= useState<string>('')
  const {contextNote}=useContextValues()
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
    <div className="w-full gap-[14px] relative flex box-border justify-evenly bg-inherit shadow-200 h-14">
      <div className="w-[10%] pl-4">
        <Image src={logo} width={42} height={42} alt="Taggale icon"  />
      </div>
      <div className="w-[20%] flex items-center">

        <Input InputChange={(value)=>setSearchValue(value)} />

      </div>
      <div className="w-[70%] justify-end flex items-center">
        <div onClick={()=> setIsConfig(true)}>
          click
        </div>
        {
          isConfig ? 
          <ConfigPopSide onClose={()=>setIsConfig(false)} />:null
        }
        {/* <ThemeSwitcher></ThemeSwitcher> */}

      </div>
    </div>:null

  }
  </>
}