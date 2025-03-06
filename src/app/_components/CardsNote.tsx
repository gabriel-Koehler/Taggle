import { Note } from "@/types/Types";
import { useState } from "react";

interface propsCards{
  note?:Note
  isLoading?:boolean;
  isNew?:boolean;
  parentFolder?:number;
  click?:any;
}

export default function cards(props:propsCards){
  const [title,setTitle] = useState<string>("")
  function createNote(parentFolder: number): void {
    
  }

  return<>
    <div onClick={()=> props.click!(props.note!)} className="px-3 py-2 w-full h-36 border flex flex-col gap-2 border-primary100 rounded-md cursor-pointer hover:shadow-500 z-20 relative">
      {
        props.isLoading? 
        <>
          <div className="flex flex-col gap-2">
            <div className="skeleton w-60 h-8"></div> 
            <div className="skeleton  h-5"></div> 
            <div className="skeleton w-60 h-5"></div> 
          </div>
            <div className="flex w-full justify-end">
              <div className="skeleton w-20 h-4"></div>
            </div>
          </>:
          props.isNew?
          <>
            <div>
              <input type="text"
                onKeyDown={(e) => e.code=="Enter"? createNote(props.parentFolder!):null}
                placeholder="Note Title..."
                className="border-none bg-transparent w-full focus-visible:outline-none opacity-45"
                onChange={(e) => setTitle(e.target.value) }
                />
            </div>
          </>
          :
          <>
            <div>{props.note!.title}</div>
            <div>{props.note!.content}</div>
            <div className="flex justify-end">
            <div>{props.note!.atCreated?.toDateString()}</div>
            </div>
          </>
      }
    </div>
  </>
}