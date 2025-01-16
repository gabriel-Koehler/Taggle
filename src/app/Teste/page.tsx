'use client'
import { get } from "@/utils/API"
import { useEffect, useState } from "react"

export default function Teste(){
   
  const [data,setData]=useState<any>()
  useEffect(()=>{
    setData(JSON.stringify(get()))
  },[])
  return<>
  <div>{data}</div>
  </>
}