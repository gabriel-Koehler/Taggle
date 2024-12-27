'use client'
import { useRef, useState } from "react";
import Input from "../components/Input";
import svg from "../../../public/user";

export default function loginPage() {
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
    <div></div>

    {/*  */}
    <div className="overflow-hidden w-full h-screen flex justify-center items-center">
      <div className="flex justify-evenly items-center gap-32">
        <div className=" flex w-[280px] flex-col justify-center items-center">
          {/* logoname */}
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
          <h1 className="text-4xl mb-8">Login</h1>
          <div className="w-80">
          <Input name="Username" textError="um" InputChange={(value) => setUsername(value)}></Input>
          </div>
          <Input name="Password" textError="um" InputChange={(value) => setPassword(value)}></Input>
          <button className="mt-8 daisybtn">Login</button>
          <button className="mt-8 daisybtn" onClick={()=>triggerAnimation()} >cadastro</button>
          <h1>teste</h1>

        </div>
      </div>

    </div>
  </>)
}
