'use client'
import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface propsConfig{
  onClose:()=>void;
}
export default function ConfigPopSide(props:propsConfig) {
  const [animationClass, setAnimationClass] = useState("slide-in");

  // Quando o componente for montado, ele aplica a animação de slide-in
  useEffect(() => {
    setAnimationClass("slide-in");
  }, []);

  const handleClose = () => {
    setAnimationClass("slide-out"); // Aplica a animação de slide-out
    setTimeout(() => props.onClose(), 400); // Aguarda a animação antes de fechar
  };
  return <>
    <div className=" overflow-x-hidden overflow-hidden z-20 overflow-y-hidden bg-opacity-60 absolute -top-2 -right-2 bg-base-200 h-screen w-screen">

      <div
      className={`shadow-xl border border-primary100 absolute right-0 bg-base-200 h-full w-[546px] ${animationClass}`}>
        <div onClick={()=>handleClose()} >X</div>
        <div>
        <ThemeSwitcher></ThemeSwitcher>
        </div>
      </div>
    </div>
  </>
}