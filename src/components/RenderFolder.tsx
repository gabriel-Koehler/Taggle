'use client'
import { Folder,Note } from "@/src/types/Types"
import { contextValues, useContextValues } from "@/src/context/ContextValuesProvider"
import { createDocument } from "@/src/utils/API";
import { useRef, useState } from "react";
interface PropsRenderFolders{
  folder:Folder[]
  createFolderEmit:any
}

export default function RenderFolders(props:PropsRenderFolders) {
  const {setContextFolder,setContextNote,contextFolder,setPointsContextMenu,setIsContextMenuFolder,setFolderElemRef } = useContextValues();
  const [title,setTitle] = useState<string>("");
  const folderRef=useRef(null)
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
  function render(folders: Folder[],level:number) {
    return (
      <div className="bg-transparent pl-1 ">
        {
          folders?.filter((document) => document.type == "Folder")
          .map((folder: Folder, index: number) => {
            return (
              <details key={index} ref={folderRef} className={(folder.content.filter(a=>a.type=="Folder").length>0? "":"marker:content-none open:marker:content-none") }>
                      <summary 
                        onContextMenu={
                          (e)=>{
                            e.preventDefault()
                            setPointsContextMenu!({
                              x:e.pageX,
                              y:e.pageY
                            })
                            setFolderElemRef!(folderRef)
                            setIsContextMenuFolder!(true)
                          }
                        }    
                      onClick={() =>{ 
                        setContextFolder!(folder!)
                        setContextNote!((folder?.content.filter((d) => d.type == "Note") as Note[]).length!=0 ?(folder?.content.filter((d) => d.type == "Note") as Note[])[0] : null)
                                        }} 
                                        className={
                          (contextFolder?.id==folder.id 
                            ? "text-primaryColor"
                            :"") + " cursor-pointer pl-2 border-l-2 border-gray-400"} 
                            >
                        {folder.title}
                        </summary>
                {
                  render(folder.content as Folder[],folder.id)
                }
                
              </details>
              
            )
          })
        }
        <input type="text"
                    onKeyDown={(e) => e.code=="Enter"? createfolders(level):null}
                    placeholder="Folder..."
                    className="hidden border-none bg-transparent hover:block peer-hover:block w-full focus:block focus-visible:outline-none opacity-45"
                    onChange={(e) => setTitle(e.target.value) }
                  />
      </div>
      
    )
  }
}