'use client'
import { Folder } from "@/types/Types"
import { contextValues, useContextValues } from "@/context/ContextValuesProvider"

export function renderFolders(folders: Folder[]) {
  const {setContextFolder } = useContextValues()
  return (
    render(folders)
  )
  const createfolders=()=>{
    
  }
  function render(folders: Folder[]) {
    return (
      <div className="pl-1">
        {
          folders?.filter((document) => document.type == "Folder").map((folder: Folder, index: number) => {
            return (
              <div key={folder.id} onClick={() => setContextFolder!(folder)}>
                <div>{folder.title}</div>
                {
                  render(folder.content as Folder[])
                }
              </div>
            )
          })
        }
        <input type="text"
          onKeyDown={(e) => console.log(e.code)}
          placeholder="Folder..."
          className="border-none w-full focus-visible:outline-none opacity-45"
          onChange={(e) => e.target.value = e.target.value}
        />
      </div>
    )
  }
}