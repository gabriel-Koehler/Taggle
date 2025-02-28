'use client'
import { Folder, Note } from "@/types/Types";
import { createContext, useContext, useMemo, useState } from "react";

interface ContextValues{
  contextNote?:Note | null
  setContextNote?:(note:Note | null) => void
  circleScale?:number
  setCircleScale?: (scale:number) => void
  contextFolder?:Folder | null
  setContextFolder?: (folder:Folder | null) => void
}
export const contextValues=createContext<ContextValues>({});

export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  const [contextFolder,setContextFolder] = useState<null | Folder>();
  const [contextNote,setContextNote] = useState<null | Note>();

  const value=useMemo(()=>({circleScale,setCircleScale,contextFolder,setContextFolder,contextNote,setContextNote}),[circleScale,setCircleScale,contextFolder,setContextFolder,contextNote,setContextNote])

  return<>
  <contextValues.Provider value={value}>
    {children}
  </contextValues.Provider>
  </>
}
export function useContextValues(){
  const value=useContext(contextValues)
  return value
}