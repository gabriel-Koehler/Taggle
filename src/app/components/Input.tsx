interface InputPorps{
  name?: string,
  textError?: string,
  isError?:false,
  InputChange(value:any): any
}
export default function Input(a:InputPorps){
  return <>
  <div className="w-full h-12 border border-info100">
    {
      a.name!=null ?
      <label htmlFor="input">{a.name}</label>:null
    }
    <input type="" onChange={(e)=>a.InputChange(e.target.value)} />
    {
      a.isError && a.textError!=null?
      <p>{a.textError}</p>:null
    }
  </div>
  
  
   </>



}