import { Folder, Note } from "@/types/Types";
import Cards from "./CardsNote";
import { useContextValues } from "@/context/ContextValuesProvider";
interface PropsRenderNotes{
  createNoteEmit:any
  contextFolder: Folder
}

export default function RenderNotes(props:PropsRenderNotes) {
  const {setContextNote}=useContextValues()
  return (
    <>
      {
        props.contextFolder?.content
          .filter((e) => e.type == "Note")
          .map((item: Note | Folder) => (
            <div key={item.id} className="relative">
            <Cards click={(value: Note) => setContextNote!(value!)} note={item as Note} />
            </div>
          ))
      }
      <div className="relative">
      <Cards isNew createNoteEmit={(note:Note)=> props.createNoteEmit(note,props.contextFolder?.id) } parentFolder={props.contextFolder?.id} />
      </div>
    </>
  )
}