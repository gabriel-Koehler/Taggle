'use client'
import { Folder, Note, PointsContextMenu } from "@/src/types/Types";
import { createContext, ReactElement, ReactNode, Ref, useContext, useMemo, useRef, useState } from "react";

interface ContextValues{
  contextNote?:Note | null
  setContextNote?:(note:Note | null) => void
  circleScale?:number
  setCircleScale?: (scale:number) => void
  contextFolder?:Folder | null
  setContextFolder?: (folder:Folder | null) => void
  setPointsContextMenu?:(points:PointsContextMenu) => void
  pointsContextMenu?: PointsContextMenu
  setIsContextMenuFolder?:(is:boolean) => void
  isContextMenuFolder?:boolean
  folderDetailsRef?: React.RefObject<HTMLDetailsElement | null>;
  setFolderDetailsRef?: (ref: React.RefObject<HTMLDetailsElement | null>) => void;
}
export const contextValues=createContext<ContextValues>({});

export default function ContextValuesProvider({children}:{children: React.ReactNode}){
  const [circleScale,setCircleScale] = useState(1);
  const [pointsContextMenu,setPointsContextMenu] = useState({x:0,y:0});
  const [folderDetailsRef, setFolderDetailsRef] = useState<React.RefObject<HTMLDetailsElement> | null>();
  const [isContextMenuFolder,setIsContextMenuFolder] = useState(false);
  const [contextFolder,setContextFolder] = useState<null | Folder>();
  const [contextNote,setContextNote] = useState<null | Note>();

  const value=useMemo(()=>({
    isContextMenuFolder,
    setIsContextMenuFolder,
    pointsContextMenu,
    setPointsContextMenu,
    circleScale,
    setCircleScale,
    contextFolder,
    setContextFolder,
    contextNote,
    setContextNote,
    folderDetailsRef,
    setFolderDetailsRef
  }),[
      isContextMenuFolder,
      setIsContextMenuFolder,
      pointsContextMenu,
      setPointsContextMenu,
      circleScale,
      setCircleScale,
      contextFolder,
      setContextFolder,
      contextNote,
      setContextNote,
      folderDetailsRef,
      setFolderDetailsRef
    ])

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