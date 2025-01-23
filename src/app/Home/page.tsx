'use client'
import { useState } from "react"
import Cards from "../components/Cards"
import Tiptap from "../components/TipTap"
export default function Home(){
  const [testeData]=useState()
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
        <div className="w-full h-8 bg-gradient-to-t top-10 absolute to-base-100 from-transparent "></div>
      <div className="py-6 overflow-y-auto flex flex-col gap-3 h-full scrollbar-thin scrollbar-thumb-lime-300">
      {
        testeData!=null?
        testeData.map((item,index)=>(
          <Cards title={item.title} content={item.content} createDate={item.createDate} />
        )):<></>
      }  
      <div className="w-full h-8 bg-gradient-to-b -bottom-11 absolute to-base-100 from-transparent "></div>
      </div>

    </div>
    <div className="h-[90%] w-[70%]">
      <div className="h-11"></div>
      <div className="h-full border border-primary100 ">
        <Tiptap></Tiptap>
      </div>

    </div>
    
    
  </div>
  </>
}