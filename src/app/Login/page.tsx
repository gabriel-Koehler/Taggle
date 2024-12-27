'use client'
import { useState } from "react";
import Input from "../components/Input";

export default function loginPage() {
  const [dataTest,setDataTest]=useState()
  return (<>
  <div className=" size-8 border-primary border-x-4"></div>
  <Input name="teste" InputChange={(value)=> setDataTest(value)}></Input>
    <h1 className="" >Legal</h1>
    <h1>{dataTest}</h1>
    </>)
}