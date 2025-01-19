interface propsCards{
  title:string;
  content:string;
  createDate:string
  click:()=>void;
}

export default function cards(props:propsCards){
  return<>
    <div onClick={()=>props.click()} className="px-3 py-2 w-full h-36 border border-primary100 rounded-md">
      <div>{props.title}</div>
      <div>{props.content}</div>
      <div className="flex justify-end">
        <div>{props.createDate}</div>
      </div>

    </div>
  </>
}