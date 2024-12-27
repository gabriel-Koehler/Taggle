'use client'
import { useState } from "react";
import Input from "../components/Input";
import svg from "../../../public/user";

export default function loginPage() {
  const [dataTest,setDataTest]=useState()
  
  return (<>
    <div className="w-full h-full flex justify-center items-center">
    <div>
      {/* logoname */}
      <div>

      </div>
      {/* login input */}
      <div>
        <Input name="Username"  textError="um" InputChange={(value)=> setDataTest(value)}></Input>
        <h1>teste</h1>
        <h1>{dataTest}</h1>

      </div>
    </div>

    </div>
    </>)
}