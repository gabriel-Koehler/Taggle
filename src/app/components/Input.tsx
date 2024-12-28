import { ReactNode } from "react"

interface InputPorps{
  name?: string,
  textError?: string,
  isError?:boolean,
  InputChange(value:any): any,
  iconLeft?:ReactNode | (() => ReactNode)
}
export default function Input(a:InputPorps){
  return <>
  <div className={"w-full h-min flex-col "+(a.isError?'text-error [&>div>input]:border-error':'')}>
    {
      a.name!=null ?
      <label htmlFor={a.name} className="font-semibold">{a.name}</label>:null
    }
    <div className="relative">

      {
        a.iconLeft!=null?
        <div className="w-full absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
          {
          typeof a.iconLeft === "function" ? a.iconLeft() : a.iconLeft
          }
        </div>:null
      }
      <input className={"w-full dark:bg-gray-600 bg-gray-50 border border-gray-200 rounded-md px-2 py-1 focus-visible:outline-[#864EF6] "+(a.iconLeft!=null?'ps-10':'')
      } id={a.name} type="" onChange={(e)=>a.InputChange(e.target.value)} >

        </input>
      </div>
    {
      a.isError && a.textError!=null?
      <p>{a.textError}</p>:null
    }
  </div>
  
  
   </>



}