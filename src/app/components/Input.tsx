interface InputPorps{
  name?: string,
  textError?: string,
  isError?:boolean,
  InputChange(value:any): any,
  iconLeft?:any
}
export default function Input(a:InputPorps){
  return <>
  <div className="w-full h-min flex-col border border-info100">
    {
      a.name!=null ?
      <label htmlFor="input">{a.name}</label>:null
    }
    <div className="relative">

      {
        a.iconLeft!=null?
        <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
          {
          a.iconLeft 
          }
        </div>:null
      }
      <input className={"bg-slate-100 border border-slate-200 rounded-md px-2 py-1 focus-visible:outline-primary "+(a.iconLeft!=null?'ps-10':'')
      } id="input" type="" onChange={(e)=>a.InputChange(e.target.value)} >

        </input>
      </div>
    {
      a.isError && a.textError!=null?
      <p>{a.textError}</p>:null
    }
  </div>
  
  
   </>



}