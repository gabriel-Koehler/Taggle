'use client'
import { Document, UserTaggle } from "@/types/Types";
import { getAll } from "@/utils/API"
import { useEffect, useState } from "react"

export default function Teste(){
  const [mounted, setMounted] = useState(false);
  const [data,setData]=useState<[UserTaggle]>()
  const fetchData=async ()=>{
      setData(await getAll())
  }
  useEffect(() =>{
    fetchData()
  },[])

  return<>
  {
    data?.map((item,index) =>{
      return<div className="flex gap-4">
        <span>{index}</span>
        <span>{item.id}</span>
        <span>{item.username}</span>
        {
          item.documents!=null?
          item.documents.map((doc:Document)=>{
            return <div>{doc.id}</div>
          })
          :<></>
        }

      </div>
    })
  }
  <div></div>
  </>
}