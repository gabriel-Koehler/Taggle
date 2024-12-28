'use client'
import Input from "@/app/components/Input";
import ContextValuesProvider, { contextValues } from "@/context/ContextValuesProvider";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function SignIn(){
  const context=useContext(contextValues)
  const router=useRouter()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    function triggerAnimation(): void {
      context?.setCircleScale(60); // Expande o círculo
      setInterval(()=>{

        router.push('/Login/Sign-Up')
      },700)
      setTimeout(() => {
        context?.setCircleScale(1); // Reduz o círculo de volta ao original
      }, 900); // Duração de expansão antes de voltar

  }
  return <>
    <h1 className="text-4xl mb-8">Login</h1>
        <div className="w-80">
         <Input name="Username" textError="um" InputChange={(value) => setUsername(value)}></Input>
         </div>
         <Input name="Password" textError="um" InputChange={(value) => setPassword(value)}></Input>
       <button className="mt-8 daisybtn">Login</button>
           <button className="mt-8 daisybtn" onClick={()=>triggerAnimation()} >register</button>
  </>
}