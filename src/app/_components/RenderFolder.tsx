'use client'
import { Folder } from "@/types/Types"
import { contextValues, useContextValues } from "@/context/ContextValuesProvider"
import { createDocument } from "@/utils/API";
import { useState } from "react";

export function renderFolders(folders: Folder[]) {
  const {setContextFolder } = useContextValues();
  const [title,setTitle] = useState<string>("");
  return (
    render(folders)
  )
  function createfolders(level:number){
    try{
      // createDocument()
    }catch(e){
    }
    console.log(level);   
  }
  function render(folders: Folder[]) {
    return (
      <div className="bg-transparent pl-1">
        {
          folders?.filter((document) => document.type == "Folder").map((folder: Folder, index: number) => {
            return (
              <div key={folder.id} onClick={() => setContextFolder!(folder)}>
                <div>{folder.title}</div>
                {
                  render(folder.content as Folder[])
                }
              </div>
            )
          })
        }
        <input type="text"
          onKeyDown={(e) => e.code=="Enter"? createfolders(folders[0].parentFolder):null}
          placeholder="Folder..."
          className="border-none bg-transparent w-full focus-visible:outline-none opacity-45"
          onChange={(e) => setTitle(e.target.value) }
        />
      </div>
    )
  }
}