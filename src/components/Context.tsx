import { ReactElement, useEffect, useRef, useState } from "react";
import { useContextValues } from "../context/ContextValuesProvider";
import {motion} from 'motion/react'
import { createDocument } from "../utils/API";

export default function Context() {
  const {isContextMenuFolder,pointsContextMenu,setIsContextMenuFolder,contextFolder,folderDetailsRef}=useContextValues()
  const [inputRef,setinputRef]=useState<HTMLInputElement>()
  const ref=useRef(null)
  const [title,setTitle] = useState<string>("");
  useEffect(()=>{

    const clickOutSide=(event: { target: any; })=>{
      if (!ref.current?.contains(event.target)){
        setIsContextMenuFolder!(false)
      }
      if(folderDetailsRef?.current){
        folderDetailsRef.current.open=false;
      }
    }
    window.addEventListener("mousedown",clickOutSide)
    return ()=>{
      window.removeEventListener("mousedown",clickOutSide)
    }
  },[ref])

  useEffect(()=>{
    if(folderDetailsRef?.current){
      folderDetailsRef.current.open=true;
      folderDetailsRef.current.appendChild(document.createElement('input'))
    }
    console.log(folderDetailsRef?.current);
    // folderDetailsRef?.current?.children[0].getAttribute()
    // if(folderDetailsRef?.current){
    //   folderDetailsRef.current.style.display = "block";
    //   folderDetailsRef.current.focus();
    // }
  },[folderDetailsRef])
  async function createfolders(level:number){
    try{
      let folder:any=await createDocument(title,"Folder",level)
      console.log(folder);
      // props.createFolderEmit(folder);
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
              className="hidden border-none bg-transparent hover:block group-hover:block w-full focus:block focus-visible:outline-none opacity-45"
              onChange={(e) => setTitle(e.target.value) }
            />
  }
  return(<>
    {
      isContextMenuFolder&&
      <motion.div whileInView={{opacity:1}} initial={{opacity:0}} exit={{opacity:0,transition:{duration:0.8}}} transition={{duration:0.2}} 
        // Fecha ao clicar fora — mais confiável que onMouseOut
        onClick={() => setIsContextMenuFolder!(false)}
        style={{
            position: "absolute",
          top: pointsContextMenu!.y,
          left: pointsContextMenu!.x + 8, // desloca para a direita do cursor
          zIndex: 1000,
        }}
        className={"bg-base-200  rounded *:rounded *:p-1 shadow-500 p-2 "}
        >
        <div className="hover:bg-primary300 cursor-pointer">Criar nova Pasta</div>
        <div>{contextFolder!.title}</div>
        
        <div className="hover:bg-primary300 cursor-pointer">Criar nova Nota</div>
        <div className="hover:bg-primary300 cursor-pointer">{pointsContextMenu!.x}</div>
        <div className="hover:bg-primary300 cursor-pointer">{pointsContextMenu!.y}</div>

        </motion.div>
      
    }
    </>
    )
}