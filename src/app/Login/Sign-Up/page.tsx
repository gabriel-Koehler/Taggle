'use client'
import { AlertNotification } from "@/app/components/AlertNotification";
import Input from "@/app/components/Input";
import { contextValues } from "@/context/ContextValuesProvider";
import { register } from "@/utils/API";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function SignUp() {
  const context = useContext(contextValues);
  const router = useRouter()
  const [username, setUsername] = useState<string>("")
  const [scale, setScale] = useState(1);
  const [isError, setError] = useState<boolean>(false);
  const [isShowAlert, setShowAlert] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  function triggerAnimation(): void {
    if(password == confirmPassword){
      const user={
        "username":username,
        "password":password
      };
      console.log(user.username, user.password);
      console.log(register(username,password));
      context?.setCircleScale(60); // Expande o círculo

      setTimeout(() => {
        router.push('/Login/Sign-In')
        context?.setCircleScale(1); // Reduz o círculo de volta ao original
      }, 900); // Duração de expansão antes de voltar
    }else{
      setError(true);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

  }
  return <>
    <h1 className="text-4xl mb-8">Register</h1>
    {
      isShowAlert?
      <AlertNotification haveButton={false} info="Erro que ferra tudo desliga e quebra o pc" title="Error 500" status="error" />:null
    }
    <div className="w-80">
      <Input name="Username" textError="um" InputChange={(value) => setUsername(value)}></Input>
    </div>
    {/* <Input name="Email" textError="um" InputChange={(value) => setPassword(value)}></Input> */}
    <Input name="Password" textError="Senha Incorreta" isError={isError} InputChange={(value) => setPassword(value)}></Input>
    <Input name="Confirm Password" textError="Senha Incorreta" isError={isError} InputChange={(value) => setConfirmPassword(value)}></Input>
    <button className="mt-8 daisybtn" onClick={() => triggerAnimation()} >Register</button>
  </>
}