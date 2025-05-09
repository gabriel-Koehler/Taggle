import { useRef, useState } from "react";
import { useContextValues } from "../context/ContextValuesProvider";
import { Folder, Note } from "../types/Types";
import { createDocument } from "../utils/API";
import { version } from "punycode";
import RenderFolders from "./RenderFolder";

export default function Summary(props:{
  folder:Folder
  createFolderEmit:any
}){
  const {setContextFolder,setContextNote,contextFolder,setPointsContextMenu,setIsContextMenuFolder, setFolderDetailsRef } = useContextValues();
  const inputRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [title,setTitle] = useState<string>("");
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
  
  return<>
  <details
          ref={detailsRef}
          className={(props.folder.content.filter(a=>a.type=="Folder").length>0? "":"marker:content-none group open:marker:content-none ") }
          >
    <summary 
      onContextMenu={
        (e)=>{
          e.preventDefault()
          setPointsContextMenu!({
            x:e.pageX,
            y:e.pageY
          })
          setContextFolder!(props.folder)
          setFolderDetailsRef!(detailsRef)
          setIsContextMenuFolder!(true)
        }
      }    
      onClick={() =>{ 
        setContextFolder!(props.folder!)
        setContextNote!((props.folder?.content.filter((d) => d.type == "Note") as Note[]).length!=0 ?(props.folder?.content.filter((d) => d.type == "Note") as Note[])[0] : null)
                    }} 
      className={
          (contextFolder?.id==props.folder.id 
            ? "text-primaryColor"
            :"") + " cursor-pointer pl-2 border-l-2 border-gray-400"
              } 
        >
      {props.folder.title}
    </summary>
    <RenderFolders folder={props.folder.content as Folder[]} createFolderEmit={(newFolder:Folder)=> props.createFolderEmit(newFolder)} />
  
    </details>
  </>
}