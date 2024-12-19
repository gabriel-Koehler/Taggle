
import Link from "next/link";

export default function defaultPage(){

  return(
    <>
        <h1 className="text-4xl bg-background" >This Defalut Page</h1>
        <Link href="/login" >login</Link>
    </>
  )
}