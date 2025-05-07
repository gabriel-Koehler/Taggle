import { useEffect, useRef } from "react";
import { useContextValues } from "../context/ContextValuesProvider";
import {motion} from 'motion/react'

export default function Context() {
  const {isContextMenuFolder,pointsContextMenu,setIsContextMenuFolder,contextFolder,folderElemRef}=useContextValues()
  const ref=useRef(null)
  useEffect(()=>{

    const clickOutSide=(event: { target: any; })=>{
      if (!ref.current?.contains(event.target)){
        setIsContextMenuFolder!(false)
      }
    }
    window.addEventListener("mousedown",clickOutSide)
    // return ()=>{
    //   window.removeEventListener("mousedown",clickOutSide)
    // }
  },[ref])
  useEffect(()=>{
    console.log(folderElemRef);
  },[])
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
        <div>{ref.current}</div>
        <div className="hover:bg-primary300 cursor-pointer">Criar nova Nota</div>
        <div className="hover:bg-primary300 cursor-pointer">{pointsContextMenu!.x}</div>
        <div className="hover:bg-primary300 cursor-pointer">{pointsContextMenu!.y}</div>

        </motion.div>
      
    }
    </>
    )
}