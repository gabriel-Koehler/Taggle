'use client'
import { Folder,Note } from "@/src/types/Types"
import { createDocument } from "@/src/utils/API";
import { useRef, useState } from "react";
import Summary from "./Summary";
interface PropsRenderFolders{
  folder:Folder[]
  createFolderEmit:any
}

export default function RenderFolders(props:PropsRenderFolders) {
  const [title,setTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    render(props.folder,0)
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
  function input(level:number){
    return <input type="text"
              ref={inputRef}
              onKeyDown={(e) => e.code=="Enter"? createfolders(level):null}
              placeholder="Folder..."
              className="hidden border-none bg-transparent hover:block peer-hover:block w-full focus:block focus-visible:outline-none opacity-45"
              onChange={(e) => setTitle(e.target.value) }
            />
  }

  function render(folders: Folder[],level:number) {
    return (
      <div className="bg-transparent pl-1 " >
        {
          folders?.filter((document) => document.type == "Folder")
          .map((folder: Folder, index: number) => {
            return (
                <Summary key={index} folder={folder} createFolderEmit={(newFolder:Folder)=> props.createFolderEmit(newFolder)} />
            )
          })
        }
      </div>
      
    )
  }
}