'use client'
import { createContext, useState } from "react";

interface ContextValues{
  contextContent:string
  setContextContent:(content:any) => void
  contextTitle:string
  setContextTitle:(title:any) => void
  circleScale:number
  setCircleScale: (scale:number) => void
}
export const contextValues=createContext<ContextValues | null>(null);
export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  const [contextTitle,setContextTitle] = useState(' ');
  const [contextContent,setContextContent] = useState(' ');

  return<>
  <contextValues.Provider value={{contextContent,setContextTitle,setContextContent,contextTitle,circleScale,setCircleScale}}>
    {children}
  </contextValues.Provider>
  </>
}