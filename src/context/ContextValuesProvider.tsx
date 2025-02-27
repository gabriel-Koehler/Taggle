'use client'
import { Folder, Note } from "@/types/Types";
import { createContext, useContext, useState } from "react";

interface ContextValues{
  contextNote?:Note | null
  setContextNote?:(note:Note | null) => void
  circleScale?:number
  setCircleScale?: (scale:number) => void
  contextFolder?:Folder | null
  setContextFolder: (folder:Folder | null) => void
}
export const contextValues=createContext<ContextValues | null>(null);
export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  const [contextFolder,setContextFolder] = useState<null | Folder>();
  const [contextNote,setContextNote] = useState<null | Note>();

  return<>
  <contextValues.Provider value={{circleScale,setCircleScale,contextFolder,setContextFolder,contextNote,setContextNote}}>
    {children}
  </contextValues.Provider>
  </>
}