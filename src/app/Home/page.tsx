'use client'
import { useEffect, useState } from "react"
import Cards from "../../components/CardsNote"
import Tiptap from "../../components/TipTap"
import { useContextValues } from "@/src/context/ContextValuesProvider"
import { Document, Folder, Note } from "@/src/types/Types"
import { getFolders } from "@/src/utils/API"
import { setCookie } from "cookies-next"
import RenderFolders from "../../components/RenderFolder"
import RenderNotes from "../../components/RenderNotes"
import Context from "@/src/components/Context"
import { AnimatePresence } from "motion/react"


export default function Home() {
  const { contextFolder,contextNote,setContextFolder, setContextNote } = useContextValues()
  const [folders, setFolders] = useState<Folder[]>()

  const [testeData] = useState<[string, string, string, string, string]>(["test", "test", "test", "test", "test"])
  const [isInRequest, setIsInRequest] = useState(false)

  const searchDocument = (folderSearch: Folder, id:number) => {
    if (folderSearch.content.filter((d: any) => d.type == "Folder").length == 0) {
      return null
    }
    folderSearch.content.forEach((item) => {
      if (item.id != id) {
        console.log(item);
        return searchDocument(item.content as any, id)
      } else {
        console.log(item);
        return item
      }
    })

  }

  const addNewFolder = (folders: Folder[], id:number) => {
    console.log(id);
    const [doc,setDoc]=useState<any>();
    for(let item of folders.filter((a)=>a.type=="Folder") ){
      console.log(item);
      if (item.id != id) {
        console.log(item);
        setDoc(searchDocument(item.content as any, id))
      } else {
        console.log(item);
        setDoc(item)
      }
    }
    console.log(doc);
    // não cai aqui 
    
  }


async function callItens() {

  const data: [Folder] = await getFolders(1);
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
  <AnimatePresence mode="wait" initial={true} >
    <Context />
  </AnimatePresence>
    <div className="h-[90%] w-[10%]">
      <div className="h-11"></div>
      <div className="h-full border rounded-md text-sm p-2 border-primary100 box-content overflow-hidden overflow-y-auto">
        {
          isInRequest ?
            <div className="skeleton w-40 h-6"></div> :
            <RenderFolders createFolderEmit={(folder: Folder) => addNewFolder(folders!, folder.parentFolder.id)} folder={folders!}></RenderFolders>
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
              <RenderNotes createNoteEmit={(note: Note) =>
                console.log(note)} contextFolder={contextFolder as Folder} />
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
