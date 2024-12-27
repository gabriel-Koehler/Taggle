'use client'
import { useState } from "react";
import Input from "../components/Input";
import svg from "../../../public/user";

export default function loginPage() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (<>
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex justify-evenly items-center gap-32">
        <div className=" flex w-[280px] flex-col justify-center items-center">
          {/* logoname */}
          <svg width="236" height="233" viewBox="0 0 236 233" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M235.879 223.625C235.879 228.701 231.764 232.815 226.689 232.815L70.4574 232.815C65.3819 232.815 61.2673 228.701 61.2673 223.625L61.2673 67.3939C61.2673 62.3184 65.3819 58.2038 70.4574 58.2038L226.689 58.2038C231.764 58.2038 235.879 62.3184 235.879 67.3939L235.879 223.625Z" fill="#5F37AF" />

            <path d="M147.041 73.5207C147.041 114.125 114.125 147.041 73.5207 147.041C32.9163 147.041 0 114.125 0 73.5207C0 32.9163 32.9163 0 73.5207 0C114.125 0 147.041 32.9163 147.041 73.5207Z" fill="#AE88F9" />

          </svg>
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
          <h1>teste</h1>

        </div>
      </div>

    </div>
  </>)
}