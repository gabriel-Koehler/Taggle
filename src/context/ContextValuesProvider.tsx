'use client'
import { createContext, useState } from "react";

interface ContextValues{
  circleScale:number
  setCircleScale: (scale:number) => void
}
export const contextValues=createContext<ContextValues | null>(null);
export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  return<>
  <contextValues.Provider value={{circleScale,setCircleScale}}>
    {children}
  </contextValues.Provider>
  </>
}