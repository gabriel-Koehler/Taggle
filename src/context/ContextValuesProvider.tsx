'use client'
import { createContext, useState } from "react";

interface ContextValues{
  contextNoteId:string
  setContextNoteId:(noteId:any) => void
  circleScale:number
  setCircleScale: (scale:number) => void
  contextFolderId:number
  setContextFolderId: (folderId:number) => void
}
export const contextValues=createContext<ContextValues | null>(null);
export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  const [contextFolderId,setContextFolderId] = useState(0);
  const [contextNoteId,setContextNoteId] = useState(' ');

  return<>
  <contextValues.Provider value={{circleScale,setCircleScale,contextFolderId,setContextFolderId,contextNoteId,setContextNoteId}}>
    {children}
  </contextValues.Provider>
  </>
}