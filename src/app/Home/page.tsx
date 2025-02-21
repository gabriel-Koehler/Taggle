'use client'
import { useContext, useEffect, useState } from "react"
import Cards from "../components/Cards"
import Tiptap from "../components/TipTap"

import { contextValues } from "@/context/ContextValuesProvider"
import { Document, Folder } from "@/types/Types"
import { getFolders } from "@/utils/API"
import { useCookies } from "next-client-cookies"

export default function Home(){
  const context=useContext(contextValues)
  const [folders,setFolders]=useState<Folder[]>([])
  
  const [testeData,setTesteData]=useState<[string,string,string,string,string]>(["test","test","test","test","test"])
  const [data,setData]=useState<[Document]>()
  const [isInRequest,setIsInRequest]=useState(false)

  async function callItens() {

    const data = await getFolders(1);
    if (data) {
      setFolders(data);
    }
    folders[0]
    setIsInRequest(false);
  }
  // function setCurrentFolder(id){
  //   // folders.filter(()
  // }
  useEffect(() => {
    callItens();
  }, []);

  return<>
  <div className="flex gap-[14px] h-[92vh]">
    <div className="h-[90%] w-[10%]">
      <div className="h-11"></div>
      <div className="h-full border rounded-md text-sm p-2 border-primary100 ">
        {
          isInRequest?
          <div className="skeleton w-40 h-6"></div> : 
          
            folders?.map((folder:Folder)=>{
                return(
                      <div>
                        <div>{folder.title}</div>
                        {
                          folder.content?.map((item)=>{
                            return item.type=="Folder"?
                            <div>{item.title}</div>:null
                          })
                        }
                      </div>
                      )
              }
            )
          
        }
        
      </div>

    </div>
    <div className="h-[90%] relative w-[20%]">
      <div className="h-11"></div>
      <div className="w-[97%] h-8 bg-gradient-to-t top-10 absolute to-base-100 from-transparent "></div>
      <div className="overflow-y-auto py-6 flex flex-col gap-3 h-full scrollbar-thin scrollbar-thumb-lime-300">
      {
        isInRequest?
        
          testeData.map((item,index)=>(
            <Cards isLoading />
          )):null
        // : folders.map((item)=>{
        //   return item instanceof Note? (<>{item.title}</>):null
        //   })
        
      }
        
      <div className="w-[97%] h-8 bg-gradient-to-b -bottom-11 absolute to-base-100 from-transparent "></div>
    </div>

    </div>
    <div className="h-[90%] w-[70%]">
      <div className="h-11"></div>

      <div className="h-full border rounded-md border-primary100 ">
        {
          isInRequest?
          <Tiptap isLoading={true}></Tiptap>
          :
          <Tiptap ></Tiptap>
        }
      </div>

    </div>
    
    
  </div>
  </>
}