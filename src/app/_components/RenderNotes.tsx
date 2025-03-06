import { Folder, Note } from "@/types/Types";
import Cards from "./CardsNote";
import { useContextValues } from "@/context/ContextValuesProvider";


export function renderNotes(contextFolder: Folder) {
  const {setContextNote}=useContextValues
  return (
    <>
      {
        contextFolder?.content
          .filter((e) => e.type == "Note")
          .map((item: Note | Folder) => (
            <div className="relative">
            <Cards click={(value: Note) => setContextNote(value)} key=   {item.id} note={item as Note} />
            </div>
          ))
      }
      <div className="relative">
      <Cards isNew parentFolder={contextFolder?.id} />
      </div>
    </>
  )
}