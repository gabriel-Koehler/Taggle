'use client'
import Input from "@/app/_components/Input";
import ContextValuesProvider, { contextValues, useContextValues } from "@/context/ContextValuesProvider";
import { login } from "@/utils/API";
import { motion } from "motion/react"
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function SignIn() {
  const {circleScale,setCircleScale} = useContextValues()
  const router = useRouter()
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  function triggerAnimation(): void {
    setCircleScale!(60); // Expande o círculo

    setTimeout(() => {
      router.push('/Login/Sign-Up')
      setCircleScale!(1); // Reduz o círculo de volta ao original
    }, 900); // Duração de expansão antes de voltar

  }
  async function triggerAnimationToHome() {
    try {
      login(username, password).then(async (e) => {
        // console.log(e.token);
        // document.cookie=`token=${e.token}`
      });

      setCircleScale!(60); // Expande o círculo
      setTimeout(() => {
        router.push('/Home')
        setCircleScale!(1); // Reduz o círculo de volta ao original
      }, 900); // Duração de expansão antes de voltar
    } catch (error) {

    }
  }
  return <>
    <h1 className="text-4xl mb-8">Login</h1>

    <div className="w-80">
      <Input name="Username" textError="um" InputChange={(value) => setUsername(value)}></Input>
    </div>
    <Input name="Password" textError="um" InputChange={(value) => setPassword(value)}></Input>
    <div className="flex gap-2">
      <button className="mt-8 btn" onClick={() => triggerAnimation()} >Register</button>
      <button className="mt-8 btn" onClick={() => triggerAnimationToHome()}>Login</button>
    </div>
  </>
}