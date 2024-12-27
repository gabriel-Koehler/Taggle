'use client'
import { Component, ReactNode, useRef, useState } from "react";
import Input from "../components/Input";
import svg from "../../../public/user";

export default function loginLayout({children}:{children:ReactNode}) {
  const circle=useRef<SVGPathElement | null>(null);
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [scale, setScale] = useState(1); // Estado para controlar a escala do círculo

  function triggerAnimation(): void {
    setScale(60); // Expande o círculo
    setTimeout(() => {
      setScale(1); // Reduz o círculo de volta ao original
    }, 900); // Duração de expansão antes de voltar
  }

  return (<>
    <div className="overflow-hidden w-full h-screen flex justify-center items-center">
      <div className="flex justify-evenly items-center gap-32">
        <div className=" flex w-[280px] flex-col justify-center items-center">
          {/* logoname */}
          {/* <svg width="236" height="233" viewBox="0 0 236 233" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M235.879 223.625C235.879 228.701 231.764 232.815 226.689 232.815L70.4574 232.815C65.3819 232.815 61.2673 228.701 61.2673 223.625L61.2673 67.3939C61.2673 62.3184 65.3819 58.2038 70.4574 58.2038L226.689 58.2038C231.764 58.2038 235.879 62.3184 235.879 67.3939L235.879 223.625Z" fill="#5F37AF" />
            
            <path ref={circle} style={{
                transform: `scale(${scale})`,
                transformOrigin: "center",
                transition: "transform 1.5s ease-in-out",
                zIndex:"1000",
              }}
               d="M147.041 73.5207C147.041 114.125 114.125 147.041 73.5207 147.041C32.9163 147.041 0 114.125 0 73.5207C0 32.9163 32.9163 0 73.5207 0C114.125 0 147.041 32.9163 147.041 73.5207Z" fill="#AE88F9" />

          </svg> */}
          <div className="relative size-72">
            <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              transition: "transform 1.5s ease-in-out",
              zIndex:"1000",
            }}
            className="absolute z-10 rounded-full bg-[#AE88F9] size-36"></div>
            <div className="absolute rounded-md top-12 left-12 z-0 bg-[#5F37AF] size-52"></div>
          </div>
          <h1 className="text-9xl font-bold" >Taggle</h1>
        </div>
        {/* ========================================================== */}
        <div className="flex-col items-center w-min flex gap-4">
          {/* login input */}
          {children}
          <h1>teste</h1>

        </div>
      </div>

    </div>
  </>)
}