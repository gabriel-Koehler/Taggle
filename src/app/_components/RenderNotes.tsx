import { Folder, Note } from "@/types/Types";
import Cards from "./Cards";

export function renderNotes(contextFolder:Folder){
  return (
    contextFolder?.content
                  .filter((e) => e.type == "Note")
                  .map((item: Note | Folder) => (
                    <Cards click={(value: Note) => console.log(value)} key={item.id} note={item as Note} />
                  ))
  )
}