'use client'
import Input from "@/app/components/Input";
import { contextValues } from "@/context/ContextValuesProvider";
import { useContext, useState } from "react";

export default function SignUp(){
  const context=useContext(contextValues);
    const [username, setUsername] = useState()
      const [scale, setScale] = useState(1);
  const [password, setPassword] = useState()
    function triggerAnimation(): void {
    setScale(60); // Expande o círculo
    setTimeout(() => {
      setScale(1); // Reduz o círculo de volta ao original
    }, 900); // Duração de expansão antes de voltar
  }
  return <>
    <h1 className="text-4xl mb-8">Login</h1>
        <div className="w-80">
         <Input name="Username" textError="um" InputChange={(value) => setUsername(value)}></Input>
         </div>
         <Input name="Email" textError="um" InputChange={(value) => setPassword(value)}></Input>
         <Input name="Password" textError="um" InputChange={(value) => setPassword(value)}></Input>
         <Input name="Confirm Password" textError="um" InputChange={(value) => setPassword(value)}></Input>
       <button className="mt-8 daisybtn">Register</button>
  </>
}