'use client'
import { useEffect, useState } from "react"
import Cards from "../_components/CardsNote"
import Tiptap from "../_components/TipTap"
import { useContextValues } from "@/context/ContextValuesProvider"
import { Folder, Note } from "@/types/Types"
import { getFolders } from "@/utils/API"
import { setCookie } from "cookies-next"
import RenderFolders from "../_components/RenderFolder"
import RenderNotes from "../_components/RenderNotes"



export default function Home() {
  const { contextFolder, setContextFolder, setContextNote, contextNote } = useContextValues()
  const [folders, setFolders] = useState<Folder[]>([])

  const [testeData] = useState<[string, string, string, string, string]>(["test", "test", "test", "test", "test"])
  const [isInRequest, setIsInRequest] = useState(false)
  const addNewFolder=(folder:Folder)=>{
    if(folder.parentFolder!=0){
      const doc=folders.filter((doc)=>{
        if(doc.type="Folder"){
          if(doc.id==folder.parentFolder){
            return doc.content.push(folder)
          }
        }
      })
      // setFolders([...folders,folders.splice(folders.indexOf(doc),1,doc)])
    }
    // setFolders([...folders,folder])
  }
  const addNewNote=(note:Note)=>{
    const doc=folders.filter((doc)=>{
      if(doc.type="Folder"){
        if(doc.id==note.parentFolder){
          return doc.content.push(note)
        }
      }
    })
    // setFolders(folders.splice(folders.indexOf(doc),1,doc))
    
  }
  async function callItens() {

    const data: Folder[] = await getFolders(1);
    if (data) {
      setFolders(data);

      if (setContextFolder) setContextFolder(data[0]);
      if (setContextNote) setContextNote((data[0].content.filter((d) => d.type == "Note") as Note[])[0])
    }
    setIsInRequest(false);

  }

  useEffect(() => {
    callItens();
  }, []);
  return <>
    <div className="flex gap-[14px] h-[92vh]">
      <div className="h-[90%] w-[10%]">
        <div className="h-11"></div>
        <div className="h-full border rounded-md text-sm p-2 border-primary100 ">
          {
            isInRequest ?
              <div className="skeleton w-40 h-6"></div> :
              <RenderFolders createFolderEmit={(folder:Folder)=> addNewFolder(folder)} folder={folders}></RenderFolders>
          }

        </div>

      </div>
      <div className="h-[90%] bg-transparent z-0 relative w-[20%]">

        <div className="h-11">
        </div>

        <div className="w-[97%] h-8 bg-gradient-to-t top-10 absolute to-base-100 from-transparent ">
        </div>

        <div className="overflow-y-auto py-6 flex flex-col gap-3 h-full scrollbar-thin scrollbar-thumb-lime-300">
          {
            isInRequest ?
              testeData.map((item, index) => (
                <Cards isLoading />
              )) :
              <>
                <RenderNotes createNoteEmit={(note:Note)=> addNewNote(note)} contextFolder={contextFolder as Folder} />
              </>
          }
          <div className="w-[97%] h-8 bg-gradient-to-b -bottom-11 absolute to-base-100 from-transparent ">

          </div>
        </div>

      </div>

      <div className="h-[90%] w-[70%]">
        <div className="h-11 flex items-center">
        </div>

        <div className="h-full border rounded-md border-primary100 ">
          {
            isInRequest ?
              <Tiptap isLoading={true}></Tiptap>
              :
              <Tiptap content={contextNote?.content}></Tiptap>
          }
        </div>

      </div>

    </div>
  </>
}