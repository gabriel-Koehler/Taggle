interface propsCards{
  title?:string;
  content?:string;
  createDate?:Date
  isLoading?:boolean;
  click?:()=>void;
}

export default function cards(props:propsCards){
  return<>
    <div className="px-3 py-2 w-full h-36 border flex flex-col gap-2 border-primary100 rounded-md">
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
            <div>{props.title}</div>
            <div>{props.content}</div>
            <div className="flex justify-end">
            <div>{props.createDate?.toDateString()}</div>
            </div>
          </>

      }

    </div>
  </>
}