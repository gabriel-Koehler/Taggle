
import Link from "next/link";

export default function defaultPage(){

  return(
    <>
    <div className="">
        <h1 className="text-foreground text-4xl" >This Defalut Page</h1>
        <Link href="/Login" >login</Link>
    </div>
    </>
  )
}