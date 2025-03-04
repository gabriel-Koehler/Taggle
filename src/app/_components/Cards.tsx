import { Note } from "@/types/Types";

interface propsCards{
  note?:Note
  isLoading?:boolean;
  click?:any;
}

export default function cards(props:propsCards){
  return<>
    <div onClick={()=> props.click!(props.note!)} className="px-3 py-2 w-full h-36 border flex flex-col gap-2 border-primary100 rounded-md cursor-pointer hover:shadow-md z-20 absolute">
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