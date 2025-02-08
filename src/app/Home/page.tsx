'use client'
import { useContext, useState } from "react"
import Cards from "../components/Cards"
import Tiptap from "../components/TipTap"

import { contextValues } from "@/context/ContextValuesProvider"
import { Document } from "@/types/Types"
export default function Home(){
  const context=useContext(contextValues)



  const [testeData,setTesteData]=useState<[string,string,string,string,string]>(["test","test","test","test","test"])
  const [data,setData]=useState<[Document]>()
  const [isInRequest,setIsInRequest]=useState(true)

  return<>
  <div className="flex gap-[14px] h-[92vh]">
    <div className="h-[90%] w-[10%]">
      <div className="h-11"></div>
      <div className="h-full border p-2 border-primary100 ">
        {
          isInRequest?
          <div className="skeleton w-40 h-6">

          </div> : <div>folder</div>
        }
        
      </div>

    </div>
    <div className="h-[90%] relative w-[20%]">
      <div className="h-11"></div>
      <div className="w-[97%] h-8 bg-gradient-to-t top-10 absolute to-base-100 from-transparent "></div>
      <div className="overflow-y-auto py-6 flex flex-col gap-3 h-full scrollbar-thin scrollbar-thumb-lime-300">
      {
        testeData.map((item,index)=>(
          <Cards click={()=>{
            context?.setContextTitle(item.title)
            context?.setContextContent(item.content)
          }
          } title={item.title} content={item.content} createDate={item.createDate} />
        ))

      }  
      <div className="w-[97%] h-8 bg-gradient-to-b -bottom-11 absolute to-base-100 from-transparent "></div>
    </div>

    </div>
    <div className="h-[90%] w-[70%]">
      <div className="h-11"></div>

      <div className="h-full border border-primary100 ">
        <Tiptap isLoading={true}></Tiptap>
      </div>

    </div>
    
    
  </div>
  </>
}