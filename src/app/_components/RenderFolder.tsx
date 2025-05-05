'use client'
import { Folder,Note } from "@/types/Types"
import { contextValues, useContextValues } from "@/context/ContextValuesProvider"
import { createDocument } from "@/utils/API";
import { useState } from "react";
interface PropsRenderFolders{
  folder:Folder[]
  createFolderEmit:any
}

export default function RenderFolders(props:PropsRenderFolders) {
  const {setContextFolder,setContextNote,contextFolder } = useContextValues();
  const [title,setTitle] = useState<string>("");
  return (
    render(props.folder)
  )
  async function createfolders(level:number){
    try{
      let folder:any=await createDocument(title,"Folder",level)
      console.log(folder);
      
      props.createFolderEmit(folder);
    }catch(e){
      console.log(e);
    }
    console.log(level);   
  }
  function render(folders: Folder[],level:number) {
    return (
      <div className="bg-transparent pl-1">
        {
          folders?.filter((document) => document.type == "Folder")
          .map((folder: Folder, index: number) => {
            return (
              <div key={folder.id}>
                <div onClick={() =>{ 
                  setContextFolder!(folder!)
                  setContextNote!((folder?.content.filter((d) => d.type == "Note") as Note[]).length!=0 ?(folder?.content.filter((d) => d.type == "Note") as Note[])[0] : null)
                }} className={(contextFolder?.id==folder.id ? "text-primaryColor":"") + " cursor-pointer before:content-['>'] flex"} >{folder.title}</div>
                {
                  render(folder.content as Folder[],folder.id)
                }
              </div>
            )
          })
        }
        <input type="text"
          onKeyDown={(e) => e.code=="Enter"? createfolders(level):null}
          placeholder="Folder..."
          className="border-none bg-transparent w-full focus-visible:outline-none opacity-45"
          onChange={(e) => setTitle(e.target.value) }
        />
      </div>
    )
  }
}