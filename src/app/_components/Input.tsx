import { ReactNode } from "react"

interface InputPorps{
  name?: string,
  textError?: string,
  isError?:boolean,
  InputChange(value:any): any,
  iconLeft?:ReactNode | (() => ReactNode)
}
export default function Input(props:InputPorps){
  return <>
  <div className={"w-full h-min flex-col "+(props.isError?'text-error [&>div>input]:border-error':'')}>
    {
      props.name!=null ?
      <label htmlFor={props.name} className="font-semibold">{props.name}</label>:null
    }
    <div className="relative">

      {
        props.iconLeft!=null?
        <div className="w-full absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
          {
          typeof props.iconLeft === "function" ? props.iconLeft() : props.iconLeft
          }
        </div>:null
      }
      <input className={"w-full dark:bg-slate-600 bg-gray50 border focus-visible:border-none border-gray200 rounded-md px-2 py-1 focus-visible:outline-[#864EF6] "+(props.iconLeft!=null?'ps-10':'')
      } id={props.name} type="" onChange={(e)=>props.InputChange(e.target.value)} >

        </input>
      </div>
    {
      props.isError && props.textError!=null?
      <p>{props.textError}</p>:null
    }
  </div>
  
  
   </>



}