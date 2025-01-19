'use client'
import { useContext, useState } from "react"
import Cards from "../components/Cards"
import Tiptap from "../components/TipTap"
import { contextValues } from "@/context/ContextValuesProvider"
export default function Home(){
  const context=useContext(contextValues)
  const [testeData]=useState(
    [{
      "title":"TitleTeste8",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste7",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste6",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste5",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste4",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste3",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste2",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    },
    {
      "title":"TitleTeste1",
      "content": "Content content cont ajtn cont conbtelçasd çasdfkç",
      "createDate":"12/12/2024"
    }
  ])
  return<>
  <div className="flex gap-[14px] h-[92vh]">
    <div className="h-[90%] w-[10%]">
      <div className="h-11"></div>
      <div className="h-full border border-primary100 ">
        folder
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
      <div className="w-full rounded-md  h-full border border-primary100 ">
        <Tiptap title={context?.contextTitle} content={context?.contextContent} ></Tiptap>
      </div>

    </div>
    
    
  </div>
  </>
}