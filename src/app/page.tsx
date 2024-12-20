
import Link from "next/link";

export default function defaultPage(){

  return(
    <>
    <div className="">
        <h1 className="font-title text-4xl " >This Defalut Page</h1>
        <Link className="font-body " href="/Login" >login</Link>
    </div>
    </>
  )
}